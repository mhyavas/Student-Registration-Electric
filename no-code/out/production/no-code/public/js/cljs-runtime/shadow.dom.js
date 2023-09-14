goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?(goog.style.transition.isSupported.cljs$core$IFn$_invoke$arity$0 ? goog.style.transition.isSupported.cljs$core$IFn$_invoke$arity$0() : goog.style.transition.isSupported.call(null)):null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_51112 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_51112(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_51114 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_51114(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__49923 = coll;
var G__49924 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__49923,G__49924) : shadow.dom.lazy_native_coll_seq.call(null,G__49923,G__49924));
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
var G__49948 = arguments.length;
switch (G__49948) {
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
var G__49963 = arguments.length;
switch (G__49963) {
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
var G__49973 = arguments.length;
switch (G__49973) {
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
var G__49978 = arguments.length;
switch (G__49978) {
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
var G__49981 = arguments.length;
switch (G__49981) {
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
var G__49983 = document;
var G__49984 = shadow.dom.dom_node(el);
return (goog.dom.contains.cljs$core$IFn$_invoke$arity$2 ? goog.dom.contains.cljs$core$IFn$_invoke$arity$2(G__49983,G__49984) : goog.dom.contains.call(null,G__49983,G__49984));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__49987 = shadow.dom.dom_node(parent);
var G__49988 = shadow.dom.dom_node(el);
return (goog.dom.contains.cljs$core$IFn$_invoke$arity$2 ? goog.dom.contains.cljs$core$IFn$_invoke$arity$2(G__49987,G__49988) : goog.dom.contains.call(null,G__49987,G__49988));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__49993 = shadow.dom.dom_node(el);
var G__49994 = cls;
return (goog.dom.classlist.add.cljs$core$IFn$_invoke$arity$2 ? goog.dom.classlist.add.cljs$core$IFn$_invoke$arity$2(G__49993,G__49994) : goog.dom.classlist.add.call(null,G__49993,G__49994));
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__49997 = shadow.dom.dom_node(el);
var G__49998 = cls;
return (goog.dom.classlist.remove.cljs$core$IFn$_invoke$arity$2 ? goog.dom.classlist.remove.cljs$core$IFn$_invoke$arity$2(G__49997,G__49998) : goog.dom.classlist.remove.call(null,G__49997,G__49998));
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__50003 = arguments.length;
switch (G__50003) {
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
var G__50010 = shadow.dom.dom_node(el);
var G__50011 = cls;
return (goog.dom.classlist.toggle.cljs$core$IFn$_invoke$arity$2 ? goog.dom.classlist.toggle.cljs$core$IFn$_invoke$arity$2(G__50010,G__50011) : goog.dom.classlist.toggle.call(null,G__50010,G__50011));
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
}catch (e50018){if((e50018 instanceof Object)){
var e = e50018;
return console.log("didnt support attachEvent",el,e);
} else {
throw e50018;

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
var seq__50024 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__50025 = null;
var count__50026 = (0);
var i__50027 = (0);
while(true){
if((i__50027 < count__50026)){
var el = chunk__50025.cljs$core$IIndexed$_nth$arity$2(null,i__50027);
var handler_51126__$1 = ((function (seq__50024,chunk__50025,count__50026,i__50027,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50024,chunk__50025,count__50026,i__50027,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51126__$1);


var G__51128 = seq__50024;
var G__51129 = chunk__50025;
var G__51130 = count__50026;
var G__51131 = (i__50027 + (1));
seq__50024 = G__51128;
chunk__50025 = G__51129;
count__50026 = G__51130;
i__50027 = G__51131;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50024);
if(temp__5804__auto__){
var seq__50024__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50024__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50024__$1);
var G__51132 = cljs.core.chunk_rest(seq__50024__$1);
var G__51133 = c__5568__auto__;
var G__51134 = cljs.core.count(c__5568__auto__);
var G__51135 = (0);
seq__50024 = G__51132;
chunk__50025 = G__51133;
count__50026 = G__51134;
i__50027 = G__51135;
continue;
} else {
var el = cljs.core.first(seq__50024__$1);
var handler_51136__$1 = ((function (seq__50024,chunk__50025,count__50026,i__50027,el,seq__50024__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50024,chunk__50025,count__50026,i__50027,el,seq__50024__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51136__$1);


var G__51142 = cljs.core.next(seq__50024__$1);
var G__51143 = null;
var G__51144 = (0);
var G__51145 = (0);
seq__50024 = G__51142;
chunk__50025 = G__51143;
count__50026 = G__51144;
i__50027 = G__51145;
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
var G__50049 = arguments.length;
switch (G__50049) {
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
var seq__50067 = cljs.core.seq(events);
var chunk__50068 = null;
var count__50069 = (0);
var i__50070 = (0);
while(true){
if((i__50070 < count__50069)){
var vec__50080 = chunk__50068.cljs$core$IIndexed$_nth$arity$2(null,i__50070);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50080,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50080,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51150 = seq__50067;
var G__51151 = chunk__50068;
var G__51152 = count__50069;
var G__51153 = (i__50070 + (1));
seq__50067 = G__51150;
chunk__50068 = G__51151;
count__50069 = G__51152;
i__50070 = G__51153;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50067);
if(temp__5804__auto__){
var seq__50067__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50067__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50067__$1);
var G__51154 = cljs.core.chunk_rest(seq__50067__$1);
var G__51155 = c__5568__auto__;
var G__51156 = cljs.core.count(c__5568__auto__);
var G__51157 = (0);
seq__50067 = G__51154;
chunk__50068 = G__51155;
count__50069 = G__51156;
i__50070 = G__51157;
continue;
} else {
var vec__50089 = cljs.core.first(seq__50067__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50089,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50089,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51159 = cljs.core.next(seq__50067__$1);
var G__51160 = null;
var G__51161 = (0);
var G__51162 = (0);
seq__50067 = G__51159;
chunk__50068 = G__51160;
count__50069 = G__51161;
i__50070 = G__51162;
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
var seq__50101 = cljs.core.seq(styles);
var chunk__50102 = null;
var count__50103 = (0);
var i__50104 = (0);
while(true){
if((i__50104 < count__50103)){
var vec__50118 = chunk__50102.cljs$core$IIndexed$_nth$arity$2(null,i__50104);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50118,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50118,(1),null);
var G__50121_51164 = dom;
var G__50122_51165 = cljs.core.name(k);
var G__50123_51166 = (((v == null))?"":v);
(goog.style.setStyle.cljs$core$IFn$_invoke$arity$3 ? goog.style.setStyle.cljs$core$IFn$_invoke$arity$3(G__50121_51164,G__50122_51165,G__50123_51166) : goog.style.setStyle.call(null,G__50121_51164,G__50122_51165,G__50123_51166));


var G__51167 = seq__50101;
var G__51168 = chunk__50102;
var G__51169 = count__50103;
var G__51170 = (i__50104 + (1));
seq__50101 = G__51167;
chunk__50102 = G__51168;
count__50103 = G__51169;
i__50104 = G__51170;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50101);
if(temp__5804__auto__){
var seq__50101__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50101__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50101__$1);
var G__51171 = cljs.core.chunk_rest(seq__50101__$1);
var G__51172 = c__5568__auto__;
var G__51173 = cljs.core.count(c__5568__auto__);
var G__51174 = (0);
seq__50101 = G__51171;
chunk__50102 = G__51172;
count__50103 = G__51173;
i__50104 = G__51174;
continue;
} else {
var vec__50124 = cljs.core.first(seq__50101__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50124,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50124,(1),null);
var G__50127_51175 = dom;
var G__50128_51176 = cljs.core.name(k);
var G__50129_51177 = (((v == null))?"":v);
(goog.style.setStyle.cljs$core$IFn$_invoke$arity$3 ? goog.style.setStyle.cljs$core$IFn$_invoke$arity$3(G__50127_51175,G__50128_51176,G__50129_51177) : goog.style.setStyle.call(null,G__50127_51175,G__50128_51176,G__50129_51177));


var G__51178 = cljs.core.next(seq__50101__$1);
var G__51179 = null;
var G__51180 = (0);
var G__51181 = (0);
seq__50101 = G__51178;
chunk__50102 = G__51179;
count__50103 = G__51180;
i__50104 = G__51181;
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
var G__50135_51182 = key;
var G__50135_51183__$1 = (((G__50135_51182 instanceof cljs.core.Keyword))?G__50135_51182.fqn:null);
switch (G__50135_51183__$1) {
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
(goog.style.setStyle.cljs$core$IFn$_invoke$arity$2 ? goog.style.setStyle.cljs$core$IFn$_invoke$arity$2(el,value) : goog.style.setStyle.call(null,el,value));

}
}
}

break;
default:
var ks_51185 = cljs.core.name(key);
if((((goog.string.startsWith.cljs$core$IFn$_invoke$arity$2 ? goog.string.startsWith.cljs$core$IFn$_invoke$arity$2(ks_51185,"data-") : goog.string.startsWith.call(null,ks_51185,"data-"))) || ((goog.string.startsWith.cljs$core$IFn$_invoke$arity$2 ? goog.string.startsWith.cljs$core$IFn$_invoke$arity$2(ks_51185,"aria-") : goog.string.startsWith.call(null,ks_51185,"aria-"))))){
el.setAttribute(ks_51185,value);
} else {
(el[ks_51185] = value);
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
var G__50160 = shadow.dom.dom_node(el);
var G__50161 = cls;
return (goog.dom.classlist.contains.cljs$core$IFn$_invoke$arity$2 ? goog.dom.classlist.contains.cljs$core$IFn$_invoke$arity$2(G__50160,G__50161) : goog.dom.classlist.contains.call(null,G__50160,G__50161));
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__50184){
var map__50185 = p__50184;
var map__50185__$1 = cljs.core.__destructure_map(map__50185);
var props = map__50185__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50185__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__50186 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50186,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50186,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50186,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__50189 = (goog.dom.createDom.cljs$core$IFn$_invoke$arity$2 ? goog.dom.createDom.cljs$core$IFn$_invoke$arity$2(tag_name,tag_props) : goog.dom.createDom.call(null,tag_name,tag_props));
shadow.dom.set_attrs(G__50189,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__50189;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__50202 = arguments.length;
switch (G__50202) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__50213){
var vec__50214 = p__50213;
var seq__50215 = cljs.core.seq(vec__50214);
var first__50216 = cljs.core.first(seq__50215);
var seq__50215__$1 = cljs.core.next(seq__50215);
var nn = first__50216;
var first__50216__$1 = cljs.core.first(seq__50215__$1);
var seq__50215__$2 = cljs.core.next(seq__50215__$1);
var np = first__50216__$1;
var nc = seq__50215__$2;
var node = vec__50214;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50217 = nn;
var G__50218 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50217,G__50218) : create_fn.call(null,G__50217,G__50218));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50219 = nn;
var G__50220 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50219,G__50220) : create_fn.call(null,G__50219,G__50220));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__50225 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50225,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50225,(1),null);
var seq__50228_51187 = cljs.core.seq(node_children);
var chunk__50229_51188 = null;
var count__50230_51189 = (0);
var i__50231_51190 = (0);
while(true){
if((i__50231_51190 < count__50230_51189)){
var child_struct_51191 = chunk__50229_51188.cljs$core$IIndexed$_nth$arity$2(null,i__50231_51190);
var children_51192 = shadow.dom.dom_node(child_struct_51191);
if(cljs.core.seq_QMARK_(children_51192)){
var seq__50281_51193 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51192));
var chunk__50283_51194 = null;
var count__50284_51195 = (0);
var i__50285_51196 = (0);
while(true){
if((i__50285_51196 < count__50284_51195)){
var child_51198 = chunk__50283_51194.cljs$core$IIndexed$_nth$arity$2(null,i__50285_51196);
if(cljs.core.truth_(child_51198)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51198);


var G__51199 = seq__50281_51193;
var G__51200 = chunk__50283_51194;
var G__51201 = count__50284_51195;
var G__51202 = (i__50285_51196 + (1));
seq__50281_51193 = G__51199;
chunk__50283_51194 = G__51200;
count__50284_51195 = G__51201;
i__50285_51196 = G__51202;
continue;
} else {
var G__51203 = seq__50281_51193;
var G__51204 = chunk__50283_51194;
var G__51205 = count__50284_51195;
var G__51206 = (i__50285_51196 + (1));
seq__50281_51193 = G__51203;
chunk__50283_51194 = G__51204;
count__50284_51195 = G__51205;
i__50285_51196 = G__51206;
continue;
}
} else {
var temp__5804__auto___51207 = cljs.core.seq(seq__50281_51193);
if(temp__5804__auto___51207){
var seq__50281_51208__$1 = temp__5804__auto___51207;
if(cljs.core.chunked_seq_QMARK_(seq__50281_51208__$1)){
var c__5568__auto___51209 = cljs.core.chunk_first(seq__50281_51208__$1);
var G__51210 = cljs.core.chunk_rest(seq__50281_51208__$1);
var G__51211 = c__5568__auto___51209;
var G__51212 = cljs.core.count(c__5568__auto___51209);
var G__51213 = (0);
seq__50281_51193 = G__51210;
chunk__50283_51194 = G__51211;
count__50284_51195 = G__51212;
i__50285_51196 = G__51213;
continue;
} else {
var child_51214 = cljs.core.first(seq__50281_51208__$1);
if(cljs.core.truth_(child_51214)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51214);


var G__51215 = cljs.core.next(seq__50281_51208__$1);
var G__51216 = null;
var G__51217 = (0);
var G__51218 = (0);
seq__50281_51193 = G__51215;
chunk__50283_51194 = G__51216;
count__50284_51195 = G__51217;
i__50285_51196 = G__51218;
continue;
} else {
var G__51219 = cljs.core.next(seq__50281_51208__$1);
var G__51220 = null;
var G__51221 = (0);
var G__51222 = (0);
seq__50281_51193 = G__51219;
chunk__50283_51194 = G__51220;
count__50284_51195 = G__51221;
i__50285_51196 = G__51222;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51192);
}


var G__51223 = seq__50228_51187;
var G__51224 = chunk__50229_51188;
var G__51225 = count__50230_51189;
var G__51226 = (i__50231_51190 + (1));
seq__50228_51187 = G__51223;
chunk__50229_51188 = G__51224;
count__50230_51189 = G__51225;
i__50231_51190 = G__51226;
continue;
} else {
var temp__5804__auto___51227 = cljs.core.seq(seq__50228_51187);
if(temp__5804__auto___51227){
var seq__50228_51228__$1 = temp__5804__auto___51227;
if(cljs.core.chunked_seq_QMARK_(seq__50228_51228__$1)){
var c__5568__auto___51229 = cljs.core.chunk_first(seq__50228_51228__$1);
var G__51230 = cljs.core.chunk_rest(seq__50228_51228__$1);
var G__51231 = c__5568__auto___51229;
var G__51232 = cljs.core.count(c__5568__auto___51229);
var G__51233 = (0);
seq__50228_51187 = G__51230;
chunk__50229_51188 = G__51231;
count__50230_51189 = G__51232;
i__50231_51190 = G__51233;
continue;
} else {
var child_struct_51234 = cljs.core.first(seq__50228_51228__$1);
var children_51235 = shadow.dom.dom_node(child_struct_51234);
if(cljs.core.seq_QMARK_(children_51235)){
var seq__50408_51236 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51235));
var chunk__50410_51237 = null;
var count__50411_51238 = (0);
var i__50412_51239 = (0);
while(true){
if((i__50412_51239 < count__50411_51238)){
var child_51240 = chunk__50410_51237.cljs$core$IIndexed$_nth$arity$2(null,i__50412_51239);
if(cljs.core.truth_(child_51240)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51240);


var G__51241 = seq__50408_51236;
var G__51242 = chunk__50410_51237;
var G__51243 = count__50411_51238;
var G__51244 = (i__50412_51239 + (1));
seq__50408_51236 = G__51241;
chunk__50410_51237 = G__51242;
count__50411_51238 = G__51243;
i__50412_51239 = G__51244;
continue;
} else {
var G__51245 = seq__50408_51236;
var G__51246 = chunk__50410_51237;
var G__51247 = count__50411_51238;
var G__51248 = (i__50412_51239 + (1));
seq__50408_51236 = G__51245;
chunk__50410_51237 = G__51246;
count__50411_51238 = G__51247;
i__50412_51239 = G__51248;
continue;
}
} else {
var temp__5804__auto___51250__$1 = cljs.core.seq(seq__50408_51236);
if(temp__5804__auto___51250__$1){
var seq__50408_51251__$1 = temp__5804__auto___51250__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50408_51251__$1)){
var c__5568__auto___51252 = cljs.core.chunk_first(seq__50408_51251__$1);
var G__51253 = cljs.core.chunk_rest(seq__50408_51251__$1);
var G__51254 = c__5568__auto___51252;
var G__51255 = cljs.core.count(c__5568__auto___51252);
var G__51256 = (0);
seq__50408_51236 = G__51253;
chunk__50410_51237 = G__51254;
count__50411_51238 = G__51255;
i__50412_51239 = G__51256;
continue;
} else {
var child_51257 = cljs.core.first(seq__50408_51251__$1);
if(cljs.core.truth_(child_51257)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51257);


var G__51258 = cljs.core.next(seq__50408_51251__$1);
var G__51259 = null;
var G__51260 = (0);
var G__51261 = (0);
seq__50408_51236 = G__51258;
chunk__50410_51237 = G__51259;
count__50411_51238 = G__51260;
i__50412_51239 = G__51261;
continue;
} else {
var G__51262 = cljs.core.next(seq__50408_51251__$1);
var G__51263 = null;
var G__51264 = (0);
var G__51265 = (0);
seq__50408_51236 = G__51262;
chunk__50410_51237 = G__51263;
count__50411_51238 = G__51264;
i__50412_51239 = G__51265;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51235);
}


var G__51266 = cljs.core.next(seq__50228_51228__$1);
var G__51267 = null;
var G__51268 = (0);
var G__51269 = (0);
seq__50228_51187 = G__51266;
chunk__50229_51188 = G__51267;
count__50230_51189 = G__51268;
i__50231_51190 = G__51269;
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
var G__50566 = shadow.dom.dom_node(node);
return (goog.dom.removeChildren.cljs$core$IFn$_invoke$arity$1 ? goog.dom.removeChildren.cljs$core$IFn$_invoke$arity$1(G__50566) : goog.dom.removeChildren.call(null,G__50566));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__50571 = cljs.core.seq(node);
var chunk__50572 = null;
var count__50573 = (0);
var i__50574 = (0);
while(true){
if((i__50574 < count__50573)){
var n = chunk__50572.cljs$core$IIndexed$_nth$arity$2(null,i__50574);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51271 = seq__50571;
var G__51272 = chunk__50572;
var G__51273 = count__50573;
var G__51274 = (i__50574 + (1));
seq__50571 = G__51271;
chunk__50572 = G__51272;
count__50573 = G__51273;
i__50574 = G__51274;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50571);
if(temp__5804__auto__){
var seq__50571__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50571__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50571__$1);
var G__51275 = cljs.core.chunk_rest(seq__50571__$1);
var G__51276 = c__5568__auto__;
var G__51277 = cljs.core.count(c__5568__auto__);
var G__51278 = (0);
seq__50571 = G__51275;
chunk__50572 = G__51276;
count__50573 = G__51277;
i__50574 = G__51278;
continue;
} else {
var n = cljs.core.first(seq__50571__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51279 = cljs.core.next(seq__50571__$1);
var G__51280 = null;
var G__51281 = (0);
var G__51282 = (0);
seq__50571 = G__51279;
chunk__50572 = G__51280;
count__50573 = G__51281;
i__50574 = G__51282;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (goog.dom.removeNode.cljs$core$IFn$_invoke$arity$1 ? goog.dom.removeNode.cljs$core$IFn$_invoke$arity$1(node) : goog.dom.removeNode.call(null,node));
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__50584 = shadow.dom.dom_node(new$);
var G__50585 = shadow.dom.dom_node(old);
return (goog.dom.replaceNode.cljs$core$IFn$_invoke$arity$2 ? goog.dom.replaceNode.cljs$core$IFn$_invoke$arity$2(G__50584,G__50585) : goog.dom.replaceNode.call(null,G__50584,G__50585));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__50591 = arguments.length;
switch (G__50591) {
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
var G__50604 = arguments.length;
switch (G__50604) {
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
var G__50630 = arguments.length;
switch (G__50630) {
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
var len__5769__auto___51287 = arguments.length;
var i__5770__auto___51289 = (0);
while(true){
if((i__5770__auto___51289 < len__5769__auto___51287)){
args__5775__auto__.push((arguments[i__5770__auto___51289]));

var G__51290 = (i__5770__auto___51289 + (1));
i__5770__auto___51289 = G__51290;
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
var seq__50660_51292 = cljs.core.seq(nodes);
var chunk__50661_51293 = null;
var count__50662_51294 = (0);
var i__50663_51295 = (0);
while(true){
if((i__50663_51295 < count__50662_51294)){
var node_51296 = chunk__50661_51293.cljs$core$IIndexed$_nth$arity$2(null,i__50663_51295);
fragment.appendChild(shadow.dom._to_dom(node_51296));


var G__51297 = seq__50660_51292;
var G__51298 = chunk__50661_51293;
var G__51299 = count__50662_51294;
var G__51300 = (i__50663_51295 + (1));
seq__50660_51292 = G__51297;
chunk__50661_51293 = G__51298;
count__50662_51294 = G__51299;
i__50663_51295 = G__51300;
continue;
} else {
var temp__5804__auto___51301 = cljs.core.seq(seq__50660_51292);
if(temp__5804__auto___51301){
var seq__50660_51302__$1 = temp__5804__auto___51301;
if(cljs.core.chunked_seq_QMARK_(seq__50660_51302__$1)){
var c__5568__auto___51303 = cljs.core.chunk_first(seq__50660_51302__$1);
var G__51304 = cljs.core.chunk_rest(seq__50660_51302__$1);
var G__51305 = c__5568__auto___51303;
var G__51306 = cljs.core.count(c__5568__auto___51303);
var G__51307 = (0);
seq__50660_51292 = G__51304;
chunk__50661_51293 = G__51305;
count__50662_51294 = G__51306;
i__50663_51295 = G__51307;
continue;
} else {
var node_51308 = cljs.core.first(seq__50660_51302__$1);
fragment.appendChild(shadow.dom._to_dom(node_51308));


var G__51309 = cljs.core.next(seq__50660_51302__$1);
var G__51310 = null;
var G__51311 = (0);
var G__51312 = (0);
seq__50660_51292 = G__51309;
chunk__50661_51293 = G__51310;
count__50662_51294 = G__51311;
i__50663_51295 = G__51312;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq50650){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50650));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__50714_51314 = cljs.core.seq(scripts);
var chunk__50715_51315 = null;
var count__50716_51316 = (0);
var i__50717_51317 = (0);
while(true){
if((i__50717_51317 < count__50716_51316)){
var vec__50734_51318 = chunk__50715_51315.cljs$core$IIndexed$_nth$arity$2(null,i__50717_51317);
var script_tag_51319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50734_51318,(0),null);
var script_body_51320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50734_51318,(1),null);
eval(script_body_51320);


var G__51321 = seq__50714_51314;
var G__51322 = chunk__50715_51315;
var G__51323 = count__50716_51316;
var G__51324 = (i__50717_51317 + (1));
seq__50714_51314 = G__51321;
chunk__50715_51315 = G__51322;
count__50716_51316 = G__51323;
i__50717_51317 = G__51324;
continue;
} else {
var temp__5804__auto___51325 = cljs.core.seq(seq__50714_51314);
if(temp__5804__auto___51325){
var seq__50714_51326__$1 = temp__5804__auto___51325;
if(cljs.core.chunked_seq_QMARK_(seq__50714_51326__$1)){
var c__5568__auto___51327 = cljs.core.chunk_first(seq__50714_51326__$1);
var G__51328 = cljs.core.chunk_rest(seq__50714_51326__$1);
var G__51329 = c__5568__auto___51327;
var G__51330 = cljs.core.count(c__5568__auto___51327);
var G__51331 = (0);
seq__50714_51314 = G__51328;
chunk__50715_51315 = G__51329;
count__50716_51316 = G__51330;
i__50717_51317 = G__51331;
continue;
} else {
var vec__50752_51332 = cljs.core.first(seq__50714_51326__$1);
var script_tag_51333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50752_51332,(0),null);
var script_body_51334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50752_51332,(1),null);
eval(script_body_51334);


var G__51335 = cljs.core.next(seq__50714_51326__$1);
var G__51336 = null;
var G__51337 = (0);
var G__51338 = (0);
seq__50714_51314 = G__51335;
chunk__50715_51315 = G__51336;
count__50716_51316 = G__51337;
i__50717_51317 = G__51338;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__50757){
var vec__50760 = p__50757;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50760,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50760,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl((goog.dom.childrenToNode_.cljs$core$IFn$_invoke$arity$2 ? goog.dom.childrenToNode_.cljs$core$IFn$_invoke$arity$2(document,el) : goog.dom.childrenToNode_.call(null,document,el))));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__50779 = shadow.dom.dom_node(el);
var G__50780 = cls;
return (goog.dom.getAncestorByClass.cljs$core$IFn$_invoke$arity$2 ? goog.dom.getAncestorByClass.cljs$core$IFn$_invoke$arity$2(G__50779,G__50780) : goog.dom.getAncestorByClass.call(null,G__50779,G__50780));
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__50785 = arguments.length;
switch (G__50785) {
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
var G__50786 = shadow.dom.dom_node(el);
var G__50787 = cljs.core.name(tag);
return (goog.dom.getAncestorByTagNameAndClass.cljs$core$IFn$_invoke$arity$2 ? goog.dom.getAncestorByTagNameAndClass.cljs$core$IFn$_invoke$arity$2(G__50786,G__50787) : goog.dom.getAncestorByTagNameAndClass.call(null,G__50786,G__50787));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__50789 = shadow.dom.dom_node(el);
var G__50790 = cljs.core.name(tag);
var G__50791 = cljs.core.name(cls);
return (goog.dom.getAncestorByTagNameAndClass.cljs$core$IFn$_invoke$arity$3 ? goog.dom.getAncestorByTagNameAndClass.cljs$core$IFn$_invoke$arity$3(G__50789,G__50790,G__50791) : goog.dom.getAncestorByTagNameAndClass.call(null,G__50789,G__50790,G__50791));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__50792 = shadow.dom.dom_node(dom);
return (goog.dom.forms.getValue.cljs$core$IFn$_invoke$arity$1 ? goog.dom.forms.getValue.cljs$core$IFn$_invoke$arity$1(G__50792) : goog.dom.forms.getValue.call(null,G__50792));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__50793 = shadow.dom.dom_node(dom);
var G__50794 = value;
return (goog.dom.forms.setValue.cljs$core$IFn$_invoke$arity$2 ? goog.dom.forms.setValue.cljs$core$IFn$_invoke$arity$2(G__50793,G__50794) : goog.dom.forms.setValue.call(null,G__50793,G__50794));
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
var seq__50808 = cljs.core.seq(style_keys);
var chunk__50809 = null;
var count__50810 = (0);
var i__50811 = (0);
while(true){
if((i__50811 < count__50810)){
var it = chunk__50809.cljs$core$IIndexed$_nth$arity$2(null,i__50811);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51345 = seq__50808;
var G__51346 = chunk__50809;
var G__51347 = count__50810;
var G__51348 = (i__50811 + (1));
seq__50808 = G__51345;
chunk__50809 = G__51346;
count__50810 = G__51347;
i__50811 = G__51348;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50808);
if(temp__5804__auto__){
var seq__50808__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50808__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50808__$1);
var G__51349 = cljs.core.chunk_rest(seq__50808__$1);
var G__51350 = c__5568__auto__;
var G__51351 = cljs.core.count(c__5568__auto__);
var G__51352 = (0);
seq__50808 = G__51349;
chunk__50809 = G__51350;
count__50810 = G__51351;
i__50811 = G__51352;
continue;
} else {
var it = cljs.core.first(seq__50808__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51355 = cljs.core.next(seq__50808__$1);
var G__51356 = null;
var G__51357 = (0);
var G__51358 = (0);
seq__50808 = G__51355;
chunk__50809 = G__51356;
count__50810 = G__51357;
i__50811 = G__51358;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k50822,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__50835 = k50822;
var G__50835__$1 = (((G__50835 instanceof cljs.core.Keyword))?G__50835.fqn:null);
switch (G__50835__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50822,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__50849){
var vec__50851 = p__50849;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50851,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50851,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50821){
var self__ = this;
var G__50821__$1 = this;
return (new cljs.core.RecordIter((0),G__50821__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50823,other50824){
var self__ = this;
var this50823__$1 = this;
return (((!((other50824 == null)))) && ((((this50823__$1.constructor === other50824.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50823__$1.x,other50824.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50823__$1.y,other50824.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50823__$1.__extmap,other50824.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k50822){
var self__ = this;
var this__5350__auto____$1 = this;
var G__50874 = k50822;
var G__50874__$1 = (((G__50874 instanceof cljs.core.Keyword))?G__50874.fqn:null);
switch (G__50874__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50822);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__50821){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__50877 = cljs.core.keyword_identical_QMARK_;
var expr__50878 = k__5352__auto__;
if(cljs.core.truth_((pred__50877.cljs$core$IFn$_invoke$arity$2 ? pred__50877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__50878) : pred__50877.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__50878)))){
return (new shadow.dom.Coordinate(G__50821,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50877.cljs$core$IFn$_invoke$arity$2 ? pred__50877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__50878) : pred__50877.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__50878)))){
return (new shadow.dom.Coordinate(self__.x,G__50821,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__50821),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__50821){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__50821,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__50828){
var extmap__5385__auto__ = (function (){var G__50886 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50828,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__50828)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50886);
} else {
return G__50886;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__50828),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__50828),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__50887 = shadow.dom.dom_node(el);
return (goog.style.getPosition.cljs$core$IFn$_invoke$arity$1 ? goog.style.getPosition.cljs$core$IFn$_invoke$arity$1(G__50887) : goog.style.getPosition.call(null,G__50887));
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__50890 = shadow.dom.dom_node(el);
return (goog.style.getClientPosition.cljs$core$IFn$_invoke$arity$1 ? goog.style.getClientPosition.cljs$core$IFn$_invoke$arity$1(G__50890) : goog.style.getClientPosition.call(null,G__50890));
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__50893 = shadow.dom.dom_node(el);
return (goog.style.getPageOffset.cljs$core$IFn$_invoke$arity$1 ? goog.style.getPageOffset.cljs$core$IFn$_invoke$arity$1(G__50893) : goog.style.getPageOffset.call(null,G__50893));
})();
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k50895,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__50903 = k50895;
var G__50903__$1 = (((G__50903 instanceof cljs.core.Keyword))?G__50903.fqn:null);
switch (G__50903__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50895,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__50904){
var vec__50906 = p__50904;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50906,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50906,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50894){
var self__ = this;
var G__50894__$1 = this;
return (new cljs.core.RecordIter((0),G__50894__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50896,other50897){
var self__ = this;
var this50896__$1 = this;
return (((!((other50897 == null)))) && ((((this50896__$1.constructor === other50897.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50896__$1.w,other50897.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50896__$1.h,other50897.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50896__$1.__extmap,other50897.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k50895){
var self__ = this;
var this__5350__auto____$1 = this;
var G__50915 = k50895;
var G__50915__$1 = (((G__50915 instanceof cljs.core.Keyword))?G__50915.fqn:null);
switch (G__50915__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50895);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__50894){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__50920 = cljs.core.keyword_identical_QMARK_;
var expr__50921 = k__5352__auto__;
if(cljs.core.truth_((pred__50920.cljs$core$IFn$_invoke$arity$2 ? pred__50920.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__50921) : pred__50920.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__50921)))){
return (new shadow.dom.Size(G__50894,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50920.cljs$core$IFn$_invoke$arity$2 ? pred__50920.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__50921) : pred__50920.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__50921)))){
return (new shadow.dom.Size(self__.w,G__50894,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__50894),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__50894){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__50894,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__50902){
var extmap__5385__auto__ = (function (){var G__50930 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50902,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__50902)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50930);
} else {
return G__50930;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__50902),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__50902),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__50933 = shadow.dom.dom_node(el);
return (goog.style.getSize.cljs$core$IFn$_invoke$arity$1 ? goog.style.getSize.cljs$core$IFn$_invoke$arity$1(G__50933) : goog.style.getSize.call(null,G__50933));
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj((goog.dom.getViewportSize.cljs$core$IFn$_invoke$arity$0 ? goog.dom.getViewportSize.cljs$core$IFn$_invoke$arity$0() : goog.dom.getViewportSize.call(null)));
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
var G__51394 = (i + (1));
var G__51395 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__51394;
ret = G__51395;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50940){
var vec__50941 = p__50940;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50941,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50941,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__50952 = arguments.length;
switch (G__50952) {
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
var G__50974_51400 = new_node;
var G__50975_51401 = shadow.dom.dom_node(ref);
(goog.dom.insertSiblingAfter.cljs$core$IFn$_invoke$arity$2 ? goog.dom.insertSiblingAfter.cljs$core$IFn$_invoke$arity$2(G__50974_51400,G__50975_51401) : goog.dom.insertSiblingAfter.call(null,G__50974_51400,G__50975_51401));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__50976_51402 = new_node;
var G__50977_51403 = shadow.dom.dom_node(ref);
(goog.dom.insertSiblingBefore.cljs$core$IFn$_invoke$arity$2 ? goog.dom.insertSiblingBefore.cljs$core$IFn$_invoke$arity$2(G__50976_51402,G__50977_51403) : goog.dom.insertSiblingBefore.call(null,G__50976_51402,G__50977_51403));

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
var G__51404 = ps;
var G__51405 = (i + (1));
el__$1 = G__51404;
i = G__51405;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__50993 = shadow.dom.dom_node(el);
return (goog.dom.getParentElement.cljs$core$IFn$_invoke$arity$1 ? goog.dom.getParentElement.cljs$core$IFn$_invoke$arity$1(G__50993) : goog.dom.getParentElement.call(null,G__50993));
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
var G__51011 = shadow.dom.dom_node(el);
return (goog.dom.getNextElementSibling.cljs$core$IFn$_invoke$arity$1 ? goog.dom.getNextElementSibling.cljs$core$IFn$_invoke$arity$1(G__51011) : goog.dom.getNextElementSibling.call(null,G__51011));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__51015 = shadow.dom.dom_node(el);
return (goog.dom.getPreviousElementSibling.cljs$core$IFn$_invoke$arity$1 ? goog.dom.getPreviousElementSibling.cljs$core$IFn$_invoke$arity$1(G__51015) : goog.dom.getPreviousElementSibling.call(null,G__51015));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__51023 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51023,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51023,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51023,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__51027_51406 = cljs.core.seq(props);
var chunk__51028_51407 = null;
var count__51029_51408 = (0);
var i__51030_51409 = (0);
while(true){
if((i__51030_51409 < count__51029_51408)){
var vec__51041_51410 = chunk__51028_51407.cljs$core$IIndexed$_nth$arity$2(null,i__51030_51409);
var k_51411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51041_51410,(0),null);
var v_51412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51041_51410,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_51411);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51411),v_51412);


var G__51413 = seq__51027_51406;
var G__51414 = chunk__51028_51407;
var G__51415 = count__51029_51408;
var G__51416 = (i__51030_51409 + (1));
seq__51027_51406 = G__51413;
chunk__51028_51407 = G__51414;
count__51029_51408 = G__51415;
i__51030_51409 = G__51416;
continue;
} else {
var temp__5804__auto___51418 = cljs.core.seq(seq__51027_51406);
if(temp__5804__auto___51418){
var seq__51027_51421__$1 = temp__5804__auto___51418;
if(cljs.core.chunked_seq_QMARK_(seq__51027_51421__$1)){
var c__5568__auto___51422 = cljs.core.chunk_first(seq__51027_51421__$1);
var G__51423 = cljs.core.chunk_rest(seq__51027_51421__$1);
var G__51424 = c__5568__auto___51422;
var G__51425 = cljs.core.count(c__5568__auto___51422);
var G__51426 = (0);
seq__51027_51406 = G__51423;
chunk__51028_51407 = G__51424;
count__51029_51408 = G__51425;
i__51030_51409 = G__51426;
continue;
} else {
var vec__51052_51427 = cljs.core.first(seq__51027_51421__$1);
var k_51428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51052_51427,(0),null);
var v_51429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51052_51427,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_51428);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51428),v_51429);


var G__51430 = cljs.core.next(seq__51027_51421__$1);
var G__51431 = null;
var G__51432 = (0);
var G__51433 = (0);
seq__51027_51406 = G__51430;
chunk__51028_51407 = G__51431;
count__51029_51408 = G__51432;
i__51030_51409 = G__51433;
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
var vec__51059 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51059,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51059,(1),null);
var seq__51062_51434 = cljs.core.seq(node_children);
var chunk__51064_51435 = null;
var count__51065_51436 = (0);
var i__51066_51437 = (0);
while(true){
if((i__51066_51437 < count__51065_51436)){
var child_struct_51438 = chunk__51064_51435.cljs$core$IIndexed$_nth$arity$2(null,i__51066_51437);
if((!((child_struct_51438 == null)))){
if(typeof child_struct_51438 === 'string'){
var text_51439 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51439),child_struct_51438].join(''));
} else {
var children_51440 = shadow.dom.svg_node(child_struct_51438);
if(cljs.core.seq_QMARK_(children_51440)){
var seq__51080_51441 = cljs.core.seq(children_51440);
var chunk__51082_51442 = null;
var count__51083_51443 = (0);
var i__51084_51444 = (0);
while(true){
if((i__51084_51444 < count__51083_51443)){
var child_51445 = chunk__51082_51442.cljs$core$IIndexed$_nth$arity$2(null,i__51084_51444);
if(cljs.core.truth_(child_51445)){
node.appendChild(child_51445);


var G__51446 = seq__51080_51441;
var G__51447 = chunk__51082_51442;
var G__51448 = count__51083_51443;
var G__51449 = (i__51084_51444 + (1));
seq__51080_51441 = G__51446;
chunk__51082_51442 = G__51447;
count__51083_51443 = G__51448;
i__51084_51444 = G__51449;
continue;
} else {
var G__51451 = seq__51080_51441;
var G__51452 = chunk__51082_51442;
var G__51453 = count__51083_51443;
var G__51454 = (i__51084_51444 + (1));
seq__51080_51441 = G__51451;
chunk__51082_51442 = G__51452;
count__51083_51443 = G__51453;
i__51084_51444 = G__51454;
continue;
}
} else {
var temp__5804__auto___51456 = cljs.core.seq(seq__51080_51441);
if(temp__5804__auto___51456){
var seq__51080_51457__$1 = temp__5804__auto___51456;
if(cljs.core.chunked_seq_QMARK_(seq__51080_51457__$1)){
var c__5568__auto___51458 = cljs.core.chunk_first(seq__51080_51457__$1);
var G__51459 = cljs.core.chunk_rest(seq__51080_51457__$1);
var G__51460 = c__5568__auto___51458;
var G__51461 = cljs.core.count(c__5568__auto___51458);
var G__51462 = (0);
seq__51080_51441 = G__51459;
chunk__51082_51442 = G__51460;
count__51083_51443 = G__51461;
i__51084_51444 = G__51462;
continue;
} else {
var child_51463 = cljs.core.first(seq__51080_51457__$1);
if(cljs.core.truth_(child_51463)){
node.appendChild(child_51463);


var G__51465 = cljs.core.next(seq__51080_51457__$1);
var G__51466 = null;
var G__51467 = (0);
var G__51468 = (0);
seq__51080_51441 = G__51465;
chunk__51082_51442 = G__51466;
count__51083_51443 = G__51467;
i__51084_51444 = G__51468;
continue;
} else {
var G__51469 = cljs.core.next(seq__51080_51457__$1);
var G__51470 = null;
var G__51471 = (0);
var G__51472 = (0);
seq__51080_51441 = G__51469;
chunk__51082_51442 = G__51470;
count__51083_51443 = G__51471;
i__51084_51444 = G__51472;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51440);
}
}


var G__51473 = seq__51062_51434;
var G__51474 = chunk__51064_51435;
var G__51475 = count__51065_51436;
var G__51476 = (i__51066_51437 + (1));
seq__51062_51434 = G__51473;
chunk__51064_51435 = G__51474;
count__51065_51436 = G__51475;
i__51066_51437 = G__51476;
continue;
} else {
var G__51477 = seq__51062_51434;
var G__51478 = chunk__51064_51435;
var G__51479 = count__51065_51436;
var G__51480 = (i__51066_51437 + (1));
seq__51062_51434 = G__51477;
chunk__51064_51435 = G__51478;
count__51065_51436 = G__51479;
i__51066_51437 = G__51480;
continue;
}
} else {
var temp__5804__auto___51482 = cljs.core.seq(seq__51062_51434);
if(temp__5804__auto___51482){
var seq__51062_51483__$1 = temp__5804__auto___51482;
if(cljs.core.chunked_seq_QMARK_(seq__51062_51483__$1)){
var c__5568__auto___51484 = cljs.core.chunk_first(seq__51062_51483__$1);
var G__51485 = cljs.core.chunk_rest(seq__51062_51483__$1);
var G__51486 = c__5568__auto___51484;
var G__51487 = cljs.core.count(c__5568__auto___51484);
var G__51488 = (0);
seq__51062_51434 = G__51485;
chunk__51064_51435 = G__51486;
count__51065_51436 = G__51487;
i__51066_51437 = G__51488;
continue;
} else {
var child_struct_51489 = cljs.core.first(seq__51062_51483__$1);
if((!((child_struct_51489 == null)))){
if(typeof child_struct_51489 === 'string'){
var text_51490 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51490),child_struct_51489].join(''));
} else {
var children_51491 = shadow.dom.svg_node(child_struct_51489);
if(cljs.core.seq_QMARK_(children_51491)){
var seq__51086_51492 = cljs.core.seq(children_51491);
var chunk__51088_51493 = null;
var count__51089_51494 = (0);
var i__51090_51495 = (0);
while(true){
if((i__51090_51495 < count__51089_51494)){
var child_51496 = chunk__51088_51493.cljs$core$IIndexed$_nth$arity$2(null,i__51090_51495);
if(cljs.core.truth_(child_51496)){
node.appendChild(child_51496);


var G__51497 = seq__51086_51492;
var G__51498 = chunk__51088_51493;
var G__51499 = count__51089_51494;
var G__51500 = (i__51090_51495 + (1));
seq__51086_51492 = G__51497;
chunk__51088_51493 = G__51498;
count__51089_51494 = G__51499;
i__51090_51495 = G__51500;
continue;
} else {
var G__51501 = seq__51086_51492;
var G__51502 = chunk__51088_51493;
var G__51503 = count__51089_51494;
var G__51504 = (i__51090_51495 + (1));
seq__51086_51492 = G__51501;
chunk__51088_51493 = G__51502;
count__51089_51494 = G__51503;
i__51090_51495 = G__51504;
continue;
}
} else {
var temp__5804__auto___51505__$1 = cljs.core.seq(seq__51086_51492);
if(temp__5804__auto___51505__$1){
var seq__51086_51506__$1 = temp__5804__auto___51505__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51086_51506__$1)){
var c__5568__auto___51507 = cljs.core.chunk_first(seq__51086_51506__$1);
var G__51508 = cljs.core.chunk_rest(seq__51086_51506__$1);
var G__51509 = c__5568__auto___51507;
var G__51510 = cljs.core.count(c__5568__auto___51507);
var G__51511 = (0);
seq__51086_51492 = G__51508;
chunk__51088_51493 = G__51509;
count__51089_51494 = G__51510;
i__51090_51495 = G__51511;
continue;
} else {
var child_51512 = cljs.core.first(seq__51086_51506__$1);
if(cljs.core.truth_(child_51512)){
node.appendChild(child_51512);


var G__51513 = cljs.core.next(seq__51086_51506__$1);
var G__51514 = null;
var G__51515 = (0);
var G__51516 = (0);
seq__51086_51492 = G__51513;
chunk__51088_51493 = G__51514;
count__51089_51494 = G__51515;
i__51090_51495 = G__51516;
continue;
} else {
var G__51517 = cljs.core.next(seq__51086_51506__$1);
var G__51518 = null;
var G__51519 = (0);
var G__51520 = (0);
seq__51086_51492 = G__51517;
chunk__51088_51493 = G__51518;
count__51089_51494 = G__51519;
i__51090_51495 = G__51520;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51491);
}
}


var G__51521 = cljs.core.next(seq__51062_51483__$1);
var G__51522 = null;
var G__51523 = (0);
var G__51524 = (0);
seq__51062_51434 = G__51521;
chunk__51064_51435 = G__51522;
count__51065_51436 = G__51523;
i__51066_51437 = G__51524;
continue;
} else {
var G__51525 = cljs.core.next(seq__51062_51483__$1);
var G__51526 = null;
var G__51527 = (0);
var G__51528 = (0);
seq__51062_51434 = G__51525;
chunk__51064_51435 = G__51526;
count__51065_51436 = G__51527;
i__51066_51437 = G__51528;
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
var len__5769__auto___51529 = arguments.length;
var i__5770__auto___51530 = (0);
while(true){
if((i__5770__auto___51530 < len__5769__auto___51529)){
args__5775__auto__.push((arguments[i__5770__auto___51530]));

var G__51531 = (i__5770__auto___51530 + (1));
i__5770__auto___51530 = G__51531;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq51092){
var G__51093 = cljs.core.first(seq51092);
var seq51092__$1 = cljs.core.next(seq51092);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51093,seq51092__$1);
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
var G__51095 = arguments.length;
switch (G__51095) {
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
var c__27086__auto___51566 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27087__auto__ = (function (){var switch__27016__auto__ = (function (state_51100){
var state_val_51101 = (state_51100[(1)]);
if((state_val_51101 === (1))){
var state_51100__$1 = state_51100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51100__$1,(2),once_or_cleanup);
} else {
if((state_val_51101 === (2))){
var inst_51097 = (state_51100[(2)]);
var inst_51098 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_51100__$1 = (function (){var statearr_51102 = state_51100;
(statearr_51102[(7)] = inst_51097);

return statearr_51102;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51100__$1,inst_51098);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__27017__auto__ = null;
var shadow$dom$state_machine__27017__auto____0 = (function (){
var statearr_51103 = [null,null,null,null,null,null,null,null];
(statearr_51103[(0)] = shadow$dom$state_machine__27017__auto__);

(statearr_51103[(1)] = (1));

return statearr_51103;
});
var shadow$dom$state_machine__27017__auto____1 = (function (state_51100){
while(true){
var ret_value__27018__auto__ = (function (){try{while(true){
var result__27019__auto__ = switch__27016__auto__(state_51100);
if(cljs.core.keyword_identical_QMARK_(result__27019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27019__auto__;
}
break;
}
}catch (e51104){var ex__27020__auto__ = e51104;
var statearr_51105_51568 = state_51100;
(statearr_51105_51568[(2)] = ex__27020__auto__);


if(cljs.core.seq((state_51100[(4)]))){
var statearr_51106_51569 = state_51100;
(statearr_51106_51569[(1)] = cljs.core.first((state_51100[(4)])));

} else {
throw ex__27020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51571 = state_51100;
state_51100 = G__51571;
continue;
} else {
return ret_value__27018__auto__;
}
break;
}
});
shadow$dom$state_machine__27017__auto__ = function(state_51100){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__27017__auto____0.call(this);
case 1:
return shadow$dom$state_machine__27017__auto____1.call(this,state_51100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__27017__auto____0;
shadow$dom$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__27017__auto____1;
return shadow$dom$state_machine__27017__auto__;
})()
})();
var state__27088__auto__ = (function (){var statearr_51107 = f__27087__auto__();
(statearr_51107[(6)] = c__27086__auto___51566);

return statearr_51107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27088__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
