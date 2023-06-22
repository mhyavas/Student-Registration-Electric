goog.provide('contrib.trace');
contrib.trace.test_listener = (function contrib$trace$test_listener(tap){
return (function() {
var G__35825 = null;
var G__35825__1 = (function (point){
var G__35821 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264),point], null);
return (tap.cljs$core$IFn$_invoke$arity$1 ? tap.cljs$core$IFn$_invoke$arity$1(G__35821) : tap.call(null,G__35821));
});
var G__35825__2 = (function (id,trace){
var G__35822 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),id,trace], null);
return (tap.cljs$core$IFn$_invoke$arity$1 ? tap.cljs$core$IFn$_invoke$arity$1(G__35822) : tap.call(null,G__35822));
});
G__35825 = function(id,trace){
switch(arguments.length){
case 1:
return G__35825__1.call(this,id);
case 2:
return G__35825__2.call(this,id,trace);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35825.cljs$core$IFn$_invoke$arity$1 = G__35825__1;
G__35825.cljs$core$IFn$_invoke$arity$2 = G__35825__2;
return G__35825;
})()
});
contrib.trace.monotonic = (function contrib$trace$monotonic(){
var _BANG_t = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_t,cljs.core.inc);
});
});

//# sourceMappingURL=contrib.trace.js.map
