goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37958 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_37958(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37962 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_37962(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36780 = coll;
var G__36781 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36780,G__36781) : shadow.dom.lazy_native_coll_seq.call(null,G__36780,G__36781));
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
var G__36805 = arguments.length;
switch (G__36805) {
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
var G__36807 = arguments.length;
switch (G__36807) {
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
var G__36812 = arguments.length;
switch (G__36812) {
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
var G__36819 = arguments.length;
switch (G__36819) {
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
var G__36835 = arguments.length;
switch (G__36835) {
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
var G__36847 = arguments.length;
switch (G__36847) {
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
}catch (e36870){if((e36870 instanceof Object)){
var e = e36870;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36870;

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
var seq__36881 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36882 = null;
var count__36883 = (0);
var i__36884 = (0);
while(true){
if((i__36884 < count__36883)){
var el = chunk__36882.cljs$core$IIndexed$_nth$arity$2(null,i__36884);
var handler_37978__$1 = ((function (seq__36881,chunk__36882,count__36883,i__36884,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36881,chunk__36882,count__36883,i__36884,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37978__$1);


var G__37979 = seq__36881;
var G__37980 = chunk__36882;
var G__37981 = count__36883;
var G__37982 = (i__36884 + (1));
seq__36881 = G__37979;
chunk__36882 = G__37980;
count__36883 = G__37981;
i__36884 = G__37982;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36881);
if(temp__5804__auto__){
var seq__36881__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36881__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36881__$1);
var G__37983 = cljs.core.chunk_rest(seq__36881__$1);
var G__37984 = c__5568__auto__;
var G__37985 = cljs.core.count(c__5568__auto__);
var G__37986 = (0);
seq__36881 = G__37983;
chunk__36882 = G__37984;
count__36883 = G__37985;
i__36884 = G__37986;
continue;
} else {
var el = cljs.core.first(seq__36881__$1);
var handler_37987__$1 = ((function (seq__36881,chunk__36882,count__36883,i__36884,el,seq__36881__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36881,chunk__36882,count__36883,i__36884,el,seq__36881__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37987__$1);


var G__37989 = cljs.core.next(seq__36881__$1);
var G__37990 = null;
var G__37991 = (0);
var G__37992 = (0);
seq__36881 = G__37989;
chunk__36882 = G__37990;
count__36883 = G__37991;
i__36884 = G__37992;
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
var G__36911 = arguments.length;
switch (G__36911) {
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
var seq__36936 = cljs.core.seq(events);
var chunk__36937 = null;
var count__36938 = (0);
var i__36939 = (0);
while(true){
if((i__36939 < count__36938)){
var vec__36959 = chunk__36937.cljs$core$IIndexed$_nth$arity$2(null,i__36939);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36959,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36959,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37996 = seq__36936;
var G__37997 = chunk__36937;
var G__37998 = count__36938;
var G__37999 = (i__36939 + (1));
seq__36936 = G__37996;
chunk__36937 = G__37997;
count__36938 = G__37998;
i__36939 = G__37999;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36936);
if(temp__5804__auto__){
var seq__36936__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36936__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36936__$1);
var G__38000 = cljs.core.chunk_rest(seq__36936__$1);
var G__38001 = c__5568__auto__;
var G__38002 = cljs.core.count(c__5568__auto__);
var G__38003 = (0);
seq__36936 = G__38000;
chunk__36937 = G__38001;
count__36938 = G__38002;
i__36939 = G__38003;
continue;
} else {
var vec__36973 = cljs.core.first(seq__36936__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36973,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36973,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38004 = cljs.core.next(seq__36936__$1);
var G__38005 = null;
var G__38006 = (0);
var G__38007 = (0);
seq__36936 = G__38004;
chunk__36937 = G__38005;
count__36938 = G__38006;
i__36939 = G__38007;
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
var seq__36987 = cljs.core.seq(styles);
var chunk__36988 = null;
var count__36989 = (0);
var i__36990 = (0);
while(true){
if((i__36990 < count__36989)){
var vec__37008 = chunk__36988.cljs$core$IIndexed$_nth$arity$2(null,i__36990);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37008,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37008,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38008 = seq__36987;
var G__38009 = chunk__36988;
var G__38010 = count__36989;
var G__38011 = (i__36990 + (1));
seq__36987 = G__38008;
chunk__36988 = G__38009;
count__36989 = G__38010;
i__36990 = G__38011;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36987);
if(temp__5804__auto__){
var seq__36987__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36987__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36987__$1);
var G__38012 = cljs.core.chunk_rest(seq__36987__$1);
var G__38013 = c__5568__auto__;
var G__38014 = cljs.core.count(c__5568__auto__);
var G__38015 = (0);
seq__36987 = G__38012;
chunk__36988 = G__38013;
count__36989 = G__38014;
i__36990 = G__38015;
continue;
} else {
var vec__37018 = cljs.core.first(seq__36987__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37018,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37018,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38017 = cljs.core.next(seq__36987__$1);
var G__38018 = null;
var G__38019 = (0);
var G__38020 = (0);
seq__36987 = G__38017;
chunk__36988 = G__38018;
count__36989 = G__38019;
i__36990 = G__38020;
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
var G__37035_38021 = key;
var G__37035_38022__$1 = (((G__37035_38021 instanceof cljs.core.Keyword))?G__37035_38021.fqn:null);
switch (G__37035_38022__$1) {
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
var ks_38024 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_38024,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_38024,"aria-");
}
})())){
el.setAttribute(ks_38024,value);
} else {
(el[ks_38024] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37075){
var map__37076 = p__37075;
var map__37076__$1 = cljs.core.__destructure_map(map__37076);
var props = map__37076__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37076__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37078 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37078,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37078,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37078,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37081 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37081,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37081;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37084 = arguments.length;
switch (G__37084) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37103){
var vec__37104 = p__37103;
var seq__37105 = cljs.core.seq(vec__37104);
var first__37106 = cljs.core.first(seq__37105);
var seq__37105__$1 = cljs.core.next(seq__37105);
var nn = first__37106;
var first__37106__$1 = cljs.core.first(seq__37105__$1);
var seq__37105__$2 = cljs.core.next(seq__37105__$1);
var np = first__37106__$1;
var nc = seq__37105__$2;
var node = vec__37104;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37113 = nn;
var G__37114 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37113,G__37114) : create_fn.call(null,G__37113,G__37114));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37116 = nn;
var G__37117 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37116,G__37117) : create_fn.call(null,G__37116,G__37117));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37125 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37125,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37125,(1),null);
var seq__37128_38054 = cljs.core.seq(node_children);
var chunk__37129_38055 = null;
var count__37130_38056 = (0);
var i__37131_38057 = (0);
while(true){
if((i__37131_38057 < count__37130_38056)){
var child_struct_38059 = chunk__37129_38055.cljs$core$IIndexed$_nth$arity$2(null,i__37131_38057);
var children_38060 = shadow.dom.dom_node(child_struct_38059);
if(cljs.core.seq_QMARK_(children_38060)){
var seq__37202_38062 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38060));
var chunk__37204_38063 = null;
var count__37205_38064 = (0);
var i__37206_38065 = (0);
while(true){
if((i__37206_38065 < count__37205_38064)){
var child_38066 = chunk__37204_38063.cljs$core$IIndexed$_nth$arity$2(null,i__37206_38065);
if(cljs.core.truth_(child_38066)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38066);


var G__38069 = seq__37202_38062;
var G__38070 = chunk__37204_38063;
var G__38071 = count__37205_38064;
var G__38072 = (i__37206_38065 + (1));
seq__37202_38062 = G__38069;
chunk__37204_38063 = G__38070;
count__37205_38064 = G__38071;
i__37206_38065 = G__38072;
continue;
} else {
var G__38074 = seq__37202_38062;
var G__38075 = chunk__37204_38063;
var G__38076 = count__37205_38064;
var G__38077 = (i__37206_38065 + (1));
seq__37202_38062 = G__38074;
chunk__37204_38063 = G__38075;
count__37205_38064 = G__38076;
i__37206_38065 = G__38077;
continue;
}
} else {
var temp__5804__auto___38079 = cljs.core.seq(seq__37202_38062);
if(temp__5804__auto___38079){
var seq__37202_38080__$1 = temp__5804__auto___38079;
if(cljs.core.chunked_seq_QMARK_(seq__37202_38080__$1)){
var c__5568__auto___38081 = cljs.core.chunk_first(seq__37202_38080__$1);
var G__38082 = cljs.core.chunk_rest(seq__37202_38080__$1);
var G__38083 = c__5568__auto___38081;
var G__38084 = cljs.core.count(c__5568__auto___38081);
var G__38085 = (0);
seq__37202_38062 = G__38082;
chunk__37204_38063 = G__38083;
count__37205_38064 = G__38084;
i__37206_38065 = G__38085;
continue;
} else {
var child_38087 = cljs.core.first(seq__37202_38080__$1);
if(cljs.core.truth_(child_38087)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38087);


var G__38088 = cljs.core.next(seq__37202_38080__$1);
var G__38089 = null;
var G__38090 = (0);
var G__38091 = (0);
seq__37202_38062 = G__38088;
chunk__37204_38063 = G__38089;
count__37205_38064 = G__38090;
i__37206_38065 = G__38091;
continue;
} else {
var G__38092 = cljs.core.next(seq__37202_38080__$1);
var G__38093 = null;
var G__38094 = (0);
var G__38095 = (0);
seq__37202_38062 = G__38092;
chunk__37204_38063 = G__38093;
count__37205_38064 = G__38094;
i__37206_38065 = G__38095;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38060);
}


var G__38096 = seq__37128_38054;
var G__38097 = chunk__37129_38055;
var G__38098 = count__37130_38056;
var G__38099 = (i__37131_38057 + (1));
seq__37128_38054 = G__38096;
chunk__37129_38055 = G__38097;
count__37130_38056 = G__38098;
i__37131_38057 = G__38099;
continue;
} else {
var temp__5804__auto___38100 = cljs.core.seq(seq__37128_38054);
if(temp__5804__auto___38100){
var seq__37128_38101__$1 = temp__5804__auto___38100;
if(cljs.core.chunked_seq_QMARK_(seq__37128_38101__$1)){
var c__5568__auto___38102 = cljs.core.chunk_first(seq__37128_38101__$1);
var G__38103 = cljs.core.chunk_rest(seq__37128_38101__$1);
var G__38104 = c__5568__auto___38102;
var G__38105 = cljs.core.count(c__5568__auto___38102);
var G__38106 = (0);
seq__37128_38054 = G__38103;
chunk__37129_38055 = G__38104;
count__37130_38056 = G__38105;
i__37131_38057 = G__38106;
continue;
} else {
var child_struct_38107 = cljs.core.first(seq__37128_38101__$1);
var children_38108 = shadow.dom.dom_node(child_struct_38107);
if(cljs.core.seq_QMARK_(children_38108)){
var seq__37222_38109 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38108));
var chunk__37224_38110 = null;
var count__37225_38111 = (0);
var i__37226_38112 = (0);
while(true){
if((i__37226_38112 < count__37225_38111)){
var child_38113 = chunk__37224_38110.cljs$core$IIndexed$_nth$arity$2(null,i__37226_38112);
if(cljs.core.truth_(child_38113)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38113);


var G__38114 = seq__37222_38109;
var G__38115 = chunk__37224_38110;
var G__38116 = count__37225_38111;
var G__38117 = (i__37226_38112 + (1));
seq__37222_38109 = G__38114;
chunk__37224_38110 = G__38115;
count__37225_38111 = G__38116;
i__37226_38112 = G__38117;
continue;
} else {
var G__38118 = seq__37222_38109;
var G__38119 = chunk__37224_38110;
var G__38120 = count__37225_38111;
var G__38121 = (i__37226_38112 + (1));
seq__37222_38109 = G__38118;
chunk__37224_38110 = G__38119;
count__37225_38111 = G__38120;
i__37226_38112 = G__38121;
continue;
}
} else {
var temp__5804__auto___38122__$1 = cljs.core.seq(seq__37222_38109);
if(temp__5804__auto___38122__$1){
var seq__37222_38123__$1 = temp__5804__auto___38122__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37222_38123__$1)){
var c__5568__auto___38124 = cljs.core.chunk_first(seq__37222_38123__$1);
var G__38125 = cljs.core.chunk_rest(seq__37222_38123__$1);
var G__38126 = c__5568__auto___38124;
var G__38127 = cljs.core.count(c__5568__auto___38124);
var G__38128 = (0);
seq__37222_38109 = G__38125;
chunk__37224_38110 = G__38126;
count__37225_38111 = G__38127;
i__37226_38112 = G__38128;
continue;
} else {
var child_38129 = cljs.core.first(seq__37222_38123__$1);
if(cljs.core.truth_(child_38129)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38129);


var G__38131 = cljs.core.next(seq__37222_38123__$1);
var G__38132 = null;
var G__38133 = (0);
var G__38134 = (0);
seq__37222_38109 = G__38131;
chunk__37224_38110 = G__38132;
count__37225_38111 = G__38133;
i__37226_38112 = G__38134;
continue;
} else {
var G__38135 = cljs.core.next(seq__37222_38123__$1);
var G__38136 = null;
var G__38137 = (0);
var G__38138 = (0);
seq__37222_38109 = G__38135;
chunk__37224_38110 = G__38136;
count__37225_38111 = G__38137;
i__37226_38112 = G__38138;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38108);
}


var G__38139 = cljs.core.next(seq__37128_38101__$1);
var G__38140 = null;
var G__38141 = (0);
var G__38142 = (0);
seq__37128_38054 = G__38139;
chunk__37129_38055 = G__38140;
count__37130_38056 = G__38141;
i__37131_38057 = G__38142;
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
var seq__37261 = cljs.core.seq(node);
var chunk__37262 = null;
var count__37263 = (0);
var i__37264 = (0);
while(true){
if((i__37264 < count__37263)){
var n = chunk__37262.cljs$core$IIndexed$_nth$arity$2(null,i__37264);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38146 = seq__37261;
var G__38147 = chunk__37262;
var G__38148 = count__37263;
var G__38149 = (i__37264 + (1));
seq__37261 = G__38146;
chunk__37262 = G__38147;
count__37263 = G__38148;
i__37264 = G__38149;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37261);
if(temp__5804__auto__){
var seq__37261__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37261__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37261__$1);
var G__38150 = cljs.core.chunk_rest(seq__37261__$1);
var G__38151 = c__5568__auto__;
var G__38152 = cljs.core.count(c__5568__auto__);
var G__38153 = (0);
seq__37261 = G__38150;
chunk__37262 = G__38151;
count__37263 = G__38152;
i__37264 = G__38153;
continue;
} else {
var n = cljs.core.first(seq__37261__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38154 = cljs.core.next(seq__37261__$1);
var G__38155 = null;
var G__38156 = (0);
var G__38157 = (0);
seq__37261 = G__38154;
chunk__37262 = G__38155;
count__37263 = G__38156;
i__37264 = G__38157;
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
var G__37269 = arguments.length;
switch (G__37269) {
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
var G__37275 = arguments.length;
switch (G__37275) {
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
var G__37302 = arguments.length;
switch (G__37302) {
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
var len__5769__auto___38172 = arguments.length;
var i__5770__auto___38173 = (0);
while(true){
if((i__5770__auto___38173 < len__5769__auto___38172)){
args__5775__auto__.push((arguments[i__5770__auto___38173]));

var G__38174 = (i__5770__auto___38173 + (1));
i__5770__auto___38173 = G__38174;
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
var seq__37319_38175 = cljs.core.seq(nodes);
var chunk__37320_38176 = null;
var count__37322_38177 = (0);
var i__37323_38178 = (0);
while(true){
if((i__37323_38178 < count__37322_38177)){
var node_38179 = chunk__37320_38176.cljs$core$IIndexed$_nth$arity$2(null,i__37323_38178);
fragment.appendChild(shadow.dom._to_dom(node_38179));


var G__38180 = seq__37319_38175;
var G__38181 = chunk__37320_38176;
var G__38182 = count__37322_38177;
var G__38183 = (i__37323_38178 + (1));
seq__37319_38175 = G__38180;
chunk__37320_38176 = G__38181;
count__37322_38177 = G__38182;
i__37323_38178 = G__38183;
continue;
} else {
var temp__5804__auto___38184 = cljs.core.seq(seq__37319_38175);
if(temp__5804__auto___38184){
var seq__37319_38185__$1 = temp__5804__auto___38184;
if(cljs.core.chunked_seq_QMARK_(seq__37319_38185__$1)){
var c__5568__auto___38186 = cljs.core.chunk_first(seq__37319_38185__$1);
var G__38187 = cljs.core.chunk_rest(seq__37319_38185__$1);
var G__38188 = c__5568__auto___38186;
var G__38189 = cljs.core.count(c__5568__auto___38186);
var G__38190 = (0);
seq__37319_38175 = G__38187;
chunk__37320_38176 = G__38188;
count__37322_38177 = G__38189;
i__37323_38178 = G__38190;
continue;
} else {
var node_38191 = cljs.core.first(seq__37319_38185__$1);
fragment.appendChild(shadow.dom._to_dom(node_38191));


var G__38192 = cljs.core.next(seq__37319_38185__$1);
var G__38193 = null;
var G__38194 = (0);
var G__38195 = (0);
seq__37319_38175 = G__38192;
chunk__37320_38176 = G__38193;
count__37322_38177 = G__38194;
i__37323_38178 = G__38195;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37317){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37317));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37341_38196 = cljs.core.seq(scripts);
var chunk__37342_38197 = null;
var count__37343_38198 = (0);
var i__37344_38199 = (0);
while(true){
if((i__37344_38199 < count__37343_38198)){
var vec__37359_38201 = chunk__37342_38197.cljs$core$IIndexed$_nth$arity$2(null,i__37344_38199);
var script_tag_38202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37359_38201,(0),null);
var script_body_38203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37359_38201,(1),null);
eval(script_body_38203);


var G__38204 = seq__37341_38196;
var G__38205 = chunk__37342_38197;
var G__38206 = count__37343_38198;
var G__38207 = (i__37344_38199 + (1));
seq__37341_38196 = G__38204;
chunk__37342_38197 = G__38205;
count__37343_38198 = G__38206;
i__37344_38199 = G__38207;
continue;
} else {
var temp__5804__auto___38208 = cljs.core.seq(seq__37341_38196);
if(temp__5804__auto___38208){
var seq__37341_38209__$1 = temp__5804__auto___38208;
if(cljs.core.chunked_seq_QMARK_(seq__37341_38209__$1)){
var c__5568__auto___38210 = cljs.core.chunk_first(seq__37341_38209__$1);
var G__38211 = cljs.core.chunk_rest(seq__37341_38209__$1);
var G__38212 = c__5568__auto___38210;
var G__38213 = cljs.core.count(c__5568__auto___38210);
var G__38214 = (0);
seq__37341_38196 = G__38211;
chunk__37342_38197 = G__38212;
count__37343_38198 = G__38213;
i__37344_38199 = G__38214;
continue;
} else {
var vec__37367_38218 = cljs.core.first(seq__37341_38209__$1);
var script_tag_38219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37367_38218,(0),null);
var script_body_38220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37367_38218,(1),null);
eval(script_body_38220);


var G__38221 = cljs.core.next(seq__37341_38209__$1);
var G__38222 = null;
var G__38223 = (0);
var G__38224 = (0);
seq__37341_38196 = G__38221;
chunk__37342_38197 = G__38222;
count__37343_38198 = G__38223;
i__37344_38199 = G__38224;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37372){
var vec__37374 = p__37372;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37374,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37374,(1),null);
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
var G__37388 = arguments.length;
switch (G__37388) {
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
var seq__37405 = cljs.core.seq(style_keys);
var chunk__37406 = null;
var count__37407 = (0);
var i__37408 = (0);
while(true){
if((i__37408 < count__37407)){
var it = chunk__37406.cljs$core$IIndexed$_nth$arity$2(null,i__37408);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38260 = seq__37405;
var G__38261 = chunk__37406;
var G__38262 = count__37407;
var G__38263 = (i__37408 + (1));
seq__37405 = G__38260;
chunk__37406 = G__38261;
count__37407 = G__38262;
i__37408 = G__38263;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37405);
if(temp__5804__auto__){
var seq__37405__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37405__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37405__$1);
var G__38264 = cljs.core.chunk_rest(seq__37405__$1);
var G__38265 = c__5568__auto__;
var G__38266 = cljs.core.count(c__5568__auto__);
var G__38267 = (0);
seq__37405 = G__38264;
chunk__37406 = G__38265;
count__37407 = G__38266;
i__37408 = G__38267;
continue;
} else {
var it = cljs.core.first(seq__37405__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38268 = cljs.core.next(seq__37405__$1);
var G__38269 = null;
var G__38270 = (0);
var G__38271 = (0);
seq__37405 = G__38268;
chunk__37406 = G__38269;
count__37407 = G__38270;
i__37408 = G__38271;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37416,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37427 = k37416;
var G__37427__$1 = (((G__37427 instanceof cljs.core.Keyword))?G__37427.fqn:null);
switch (G__37427__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37416,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37435){
var vec__37436 = p__37435;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37436,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37436,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37415){
var self__ = this;
var G__37415__$1 = this;
return (new cljs.core.RecordIter((0),G__37415__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37417,other37418){
var self__ = this;
var this37417__$1 = this;
return (((!((other37418 == null)))) && ((((this37417__$1.constructor === other37418.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37417__$1.x,other37418.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37417__$1.y,other37418.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37417__$1.__extmap,other37418.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37416){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37455 = k37416;
var G__37455__$1 = (((G__37455 instanceof cljs.core.Keyword))?G__37455.fqn:null);
switch (G__37455__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37416);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37415){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37459 = cljs.core.keyword_identical_QMARK_;
var expr__37460 = k__5352__auto__;
if(cljs.core.truth_((pred__37459.cljs$core$IFn$_invoke$arity$2 ? pred__37459.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37460) : pred__37459.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37460)))){
return (new shadow.dom.Coordinate(G__37415,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37459.cljs$core$IFn$_invoke$arity$2 ? pred__37459.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37460) : pred__37459.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37460)))){
return (new shadow.dom.Coordinate(self__.x,G__37415,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37415),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37415){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37415,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37420){
var extmap__5385__auto__ = (function (){var G__37471 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37420,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37420)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37471);
} else {
return G__37471;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37420),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37420),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37473,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37479 = k37473;
var G__37479__$1 = (((G__37479 instanceof cljs.core.Keyword))?G__37479.fqn:null);
switch (G__37479__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37473,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37483){
var vec__37485 = p__37483;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37485,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37485,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37472){
var self__ = this;
var G__37472__$1 = this;
return (new cljs.core.RecordIter((0),G__37472__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37474,other37475){
var self__ = this;
var this37474__$1 = this;
return (((!((other37475 == null)))) && ((((this37474__$1.constructor === other37475.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37474__$1.w,other37475.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37474__$1.h,other37475.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37474__$1.__extmap,other37475.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37473){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37503 = k37473;
var G__37503__$1 = (((G__37503 instanceof cljs.core.Keyword))?G__37503.fqn:null);
switch (G__37503__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37473);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37472){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37504 = cljs.core.keyword_identical_QMARK_;
var expr__37505 = k__5352__auto__;
if(cljs.core.truth_((pred__37504.cljs$core$IFn$_invoke$arity$2 ? pred__37504.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37505) : pred__37504.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37505)))){
return (new shadow.dom.Size(G__37472,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37504.cljs$core$IFn$_invoke$arity$2 ? pred__37504.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37505) : pred__37504.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37505)))){
return (new shadow.dom.Size(self__.w,G__37472,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37472),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37472){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37472,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37476){
var extmap__5385__auto__ = (function (){var G__37527 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37476,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37476)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37527);
} else {
return G__37527;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37476),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37476),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__38294 = (i + (1));
var G__38295 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38294;
ret = G__38295;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37548){
var vec__37549 = p__37548;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37549,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37549,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37555 = arguments.length;
switch (G__37555) {
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
var G__38303 = ps;
var G__38304 = (i + (1));
el__$1 = G__38303;
i = G__38304;
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
var vec__37598 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37598,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37598,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37598,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37607_38318 = cljs.core.seq(props);
var chunk__37608_38319 = null;
var count__37609_38320 = (0);
var i__37610_38321 = (0);
while(true){
if((i__37610_38321 < count__37609_38320)){
var vec__37627_38322 = chunk__37608_38319.cljs$core$IIndexed$_nth$arity$2(null,i__37610_38321);
var k_38323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37627_38322,(0),null);
var v_38324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37627_38322,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_38323);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38323),v_38324);


var G__38325 = seq__37607_38318;
var G__38326 = chunk__37608_38319;
var G__38327 = count__37609_38320;
var G__38328 = (i__37610_38321 + (1));
seq__37607_38318 = G__38325;
chunk__37608_38319 = G__38326;
count__37609_38320 = G__38327;
i__37610_38321 = G__38328;
continue;
} else {
var temp__5804__auto___38329 = cljs.core.seq(seq__37607_38318);
if(temp__5804__auto___38329){
var seq__37607_38330__$1 = temp__5804__auto___38329;
if(cljs.core.chunked_seq_QMARK_(seq__37607_38330__$1)){
var c__5568__auto___38331 = cljs.core.chunk_first(seq__37607_38330__$1);
var G__38332 = cljs.core.chunk_rest(seq__37607_38330__$1);
var G__38333 = c__5568__auto___38331;
var G__38334 = cljs.core.count(c__5568__auto___38331);
var G__38335 = (0);
seq__37607_38318 = G__38332;
chunk__37608_38319 = G__38333;
count__37609_38320 = G__38334;
i__37610_38321 = G__38335;
continue;
} else {
var vec__37634_38336 = cljs.core.first(seq__37607_38330__$1);
var k_38337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37634_38336,(0),null);
var v_38338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37634_38336,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_38337);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38337),v_38338);


var G__38342 = cljs.core.next(seq__37607_38330__$1);
var G__38343 = null;
var G__38344 = (0);
var G__38345 = (0);
seq__37607_38318 = G__38342;
chunk__37608_38319 = G__38343;
count__37609_38320 = G__38344;
i__37610_38321 = G__38345;
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
var vec__37648 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37648,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37648,(1),null);
var seq__37651_38346 = cljs.core.seq(node_children);
var chunk__37653_38347 = null;
var count__37654_38348 = (0);
var i__37655_38349 = (0);
while(true){
if((i__37655_38349 < count__37654_38348)){
var child_struct_38350 = chunk__37653_38347.cljs$core$IIndexed$_nth$arity$2(null,i__37655_38349);
if((!((child_struct_38350 == null)))){
if(typeof child_struct_38350 === 'string'){
var text_38351 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38351),child_struct_38350].join(''));
} else {
var children_38352 = shadow.dom.svg_node(child_struct_38350);
if(cljs.core.seq_QMARK_(children_38352)){
var seq__37690_38353 = cljs.core.seq(children_38352);
var chunk__37692_38354 = null;
var count__37693_38355 = (0);
var i__37694_38356 = (0);
while(true){
if((i__37694_38356 < count__37693_38355)){
var child_38357 = chunk__37692_38354.cljs$core$IIndexed$_nth$arity$2(null,i__37694_38356);
if(cljs.core.truth_(child_38357)){
node.appendChild(child_38357);


var G__38358 = seq__37690_38353;
var G__38359 = chunk__37692_38354;
var G__38360 = count__37693_38355;
var G__38361 = (i__37694_38356 + (1));
seq__37690_38353 = G__38358;
chunk__37692_38354 = G__38359;
count__37693_38355 = G__38360;
i__37694_38356 = G__38361;
continue;
} else {
var G__38362 = seq__37690_38353;
var G__38363 = chunk__37692_38354;
var G__38364 = count__37693_38355;
var G__38365 = (i__37694_38356 + (1));
seq__37690_38353 = G__38362;
chunk__37692_38354 = G__38363;
count__37693_38355 = G__38364;
i__37694_38356 = G__38365;
continue;
}
} else {
var temp__5804__auto___38366 = cljs.core.seq(seq__37690_38353);
if(temp__5804__auto___38366){
var seq__37690_38367__$1 = temp__5804__auto___38366;
if(cljs.core.chunked_seq_QMARK_(seq__37690_38367__$1)){
var c__5568__auto___38368 = cljs.core.chunk_first(seq__37690_38367__$1);
var G__38369 = cljs.core.chunk_rest(seq__37690_38367__$1);
var G__38370 = c__5568__auto___38368;
var G__38371 = cljs.core.count(c__5568__auto___38368);
var G__38372 = (0);
seq__37690_38353 = G__38369;
chunk__37692_38354 = G__38370;
count__37693_38355 = G__38371;
i__37694_38356 = G__38372;
continue;
} else {
var child_38373 = cljs.core.first(seq__37690_38367__$1);
if(cljs.core.truth_(child_38373)){
node.appendChild(child_38373);


var G__38374 = cljs.core.next(seq__37690_38367__$1);
var G__38375 = null;
var G__38376 = (0);
var G__38377 = (0);
seq__37690_38353 = G__38374;
chunk__37692_38354 = G__38375;
count__37693_38355 = G__38376;
i__37694_38356 = G__38377;
continue;
} else {
var G__38378 = cljs.core.next(seq__37690_38367__$1);
var G__38379 = null;
var G__38380 = (0);
var G__38381 = (0);
seq__37690_38353 = G__38378;
chunk__37692_38354 = G__38379;
count__37693_38355 = G__38380;
i__37694_38356 = G__38381;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38352);
}
}


var G__38382 = seq__37651_38346;
var G__38383 = chunk__37653_38347;
var G__38384 = count__37654_38348;
var G__38385 = (i__37655_38349 + (1));
seq__37651_38346 = G__38382;
chunk__37653_38347 = G__38383;
count__37654_38348 = G__38384;
i__37655_38349 = G__38385;
continue;
} else {
var G__38387 = seq__37651_38346;
var G__38388 = chunk__37653_38347;
var G__38389 = count__37654_38348;
var G__38390 = (i__37655_38349 + (1));
seq__37651_38346 = G__38387;
chunk__37653_38347 = G__38388;
count__37654_38348 = G__38389;
i__37655_38349 = G__38390;
continue;
}
} else {
var temp__5804__auto___38391 = cljs.core.seq(seq__37651_38346);
if(temp__5804__auto___38391){
var seq__37651_38392__$1 = temp__5804__auto___38391;
if(cljs.core.chunked_seq_QMARK_(seq__37651_38392__$1)){
var c__5568__auto___38393 = cljs.core.chunk_first(seq__37651_38392__$1);
var G__38394 = cljs.core.chunk_rest(seq__37651_38392__$1);
var G__38395 = c__5568__auto___38393;
var G__38396 = cljs.core.count(c__5568__auto___38393);
var G__38397 = (0);
seq__37651_38346 = G__38394;
chunk__37653_38347 = G__38395;
count__37654_38348 = G__38396;
i__37655_38349 = G__38397;
continue;
} else {
var child_struct_38398 = cljs.core.first(seq__37651_38392__$1);
if((!((child_struct_38398 == null)))){
if(typeof child_struct_38398 === 'string'){
var text_38401 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38401),child_struct_38398].join(''));
} else {
var children_38402 = shadow.dom.svg_node(child_struct_38398);
if(cljs.core.seq_QMARK_(children_38402)){
var seq__37709_38406 = cljs.core.seq(children_38402);
var chunk__37711_38407 = null;
var count__37712_38408 = (0);
var i__37713_38409 = (0);
while(true){
if((i__37713_38409 < count__37712_38408)){
var child_38411 = chunk__37711_38407.cljs$core$IIndexed$_nth$arity$2(null,i__37713_38409);
if(cljs.core.truth_(child_38411)){
node.appendChild(child_38411);


var G__38414 = seq__37709_38406;
var G__38415 = chunk__37711_38407;
var G__38416 = count__37712_38408;
var G__38417 = (i__37713_38409 + (1));
seq__37709_38406 = G__38414;
chunk__37711_38407 = G__38415;
count__37712_38408 = G__38416;
i__37713_38409 = G__38417;
continue;
} else {
var G__38418 = seq__37709_38406;
var G__38419 = chunk__37711_38407;
var G__38420 = count__37712_38408;
var G__38421 = (i__37713_38409 + (1));
seq__37709_38406 = G__38418;
chunk__37711_38407 = G__38419;
count__37712_38408 = G__38420;
i__37713_38409 = G__38421;
continue;
}
} else {
var temp__5804__auto___38422__$1 = cljs.core.seq(seq__37709_38406);
if(temp__5804__auto___38422__$1){
var seq__37709_38423__$1 = temp__5804__auto___38422__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37709_38423__$1)){
var c__5568__auto___38424 = cljs.core.chunk_first(seq__37709_38423__$1);
var G__38425 = cljs.core.chunk_rest(seq__37709_38423__$1);
var G__38426 = c__5568__auto___38424;
var G__38427 = cljs.core.count(c__5568__auto___38424);
var G__38428 = (0);
seq__37709_38406 = G__38425;
chunk__37711_38407 = G__38426;
count__37712_38408 = G__38427;
i__37713_38409 = G__38428;
continue;
} else {
var child_38429 = cljs.core.first(seq__37709_38423__$1);
if(cljs.core.truth_(child_38429)){
node.appendChild(child_38429);


var G__38433 = cljs.core.next(seq__37709_38423__$1);
var G__38434 = null;
var G__38435 = (0);
var G__38436 = (0);
seq__37709_38406 = G__38433;
chunk__37711_38407 = G__38434;
count__37712_38408 = G__38435;
i__37713_38409 = G__38436;
continue;
} else {
var G__38437 = cljs.core.next(seq__37709_38423__$1);
var G__38438 = null;
var G__38439 = (0);
var G__38440 = (0);
seq__37709_38406 = G__38437;
chunk__37711_38407 = G__38438;
count__37712_38408 = G__38439;
i__37713_38409 = G__38440;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38402);
}
}


var G__38441 = cljs.core.next(seq__37651_38392__$1);
var G__38442 = null;
var G__38443 = (0);
var G__38444 = (0);
seq__37651_38346 = G__38441;
chunk__37653_38347 = G__38442;
count__37654_38348 = G__38443;
i__37655_38349 = G__38444;
continue;
} else {
var G__38445 = cljs.core.next(seq__37651_38392__$1);
var G__38446 = null;
var G__38447 = (0);
var G__38448 = (0);
seq__37651_38346 = G__38445;
chunk__37653_38347 = G__38446;
count__37654_38348 = G__38447;
i__37655_38349 = G__38448;
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
var len__5769__auto___38449 = arguments.length;
var i__5770__auto___38450 = (0);
while(true){
if((i__5770__auto___38450 < len__5769__auto___38449)){
args__5775__auto__.push((arguments[i__5770__auto___38450]));

var G__38451 = (i__5770__auto___38450 + (1));
i__5770__auto___38450 = G__38451;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37726){
var G__37727 = cljs.core.first(seq37726);
var seq37726__$1 = cljs.core.next(seq37726);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37727,seq37726__$1);
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
var G__37732 = arguments.length;
switch (G__37732) {
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
var c__34475__auto___38459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34476__auto__ = (function (){var switch__34245__auto__ = (function (state_37757){
var state_val_37758 = (state_37757[(1)]);
if((state_val_37758 === (1))){
var state_37757__$1 = state_37757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37757__$1,(2),once_or_cleanup);
} else {
if((state_val_37758 === (2))){
var inst_37754 = (state_37757[(2)]);
var inst_37755 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37757__$1 = (function (){var statearr_37772 = state_37757;
(statearr_37772[(7)] = inst_37754);

return statearr_37772;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37757__$1,inst_37755);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__34246__auto__ = null;
var shadow$dom$state_machine__34246__auto____0 = (function (){
var statearr_37781 = [null,null,null,null,null,null,null,null];
(statearr_37781[(0)] = shadow$dom$state_machine__34246__auto__);

(statearr_37781[(1)] = (1));

return statearr_37781;
});
var shadow$dom$state_machine__34246__auto____1 = (function (state_37757){
while(true){
var ret_value__34247__auto__ = (function (){try{while(true){
var result__34248__auto__ = switch__34245__auto__(state_37757);
if(cljs.core.keyword_identical_QMARK_(result__34248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34248__auto__;
}
break;
}
}catch (e37796){var ex__34249__auto__ = e37796;
var statearr_37797_38460 = state_37757;
(statearr_37797_38460[(2)] = ex__34249__auto__);


if(cljs.core.seq((state_37757[(4)]))){
var statearr_37802_38461 = state_37757;
(statearr_37802_38461[(1)] = cljs.core.first((state_37757[(4)])));

} else {
throw ex__34249__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38462 = state_37757;
state_37757 = G__38462;
continue;
} else {
return ret_value__34247__auto__;
}
break;
}
});
shadow$dom$state_machine__34246__auto__ = function(state_37757){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__34246__auto____0.call(this);
case 1:
return shadow$dom$state_machine__34246__auto____1.call(this,state_37757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__34246__auto____0;
shadow$dom$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__34246__auto____1;
return shadow$dom$state_machine__34246__auto__;
})()
})();
var state__34477__auto__ = (function (){var statearr_37806 = f__34476__auto__();
(statearr_37806[(6)] = c__34475__auto___38459);

return statearr_37806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34477__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
