goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__42720__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42720 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42721__i = 0, G__42721__a = new Array(arguments.length -  0);
while (G__42721__i < G__42721__a.length) {G__42721__a[G__42721__i] = arguments[G__42721__i + 0]; ++G__42721__i;}
  args = new cljs.core.IndexedSeq(G__42721__a,0,null);
} 
return G__42720__delegate.call(this,args);};
G__42720.cljs$lang$maxFixedArity = 0;
G__42720.cljs$lang$applyTo = (function (arglist__42722){
var args = cljs.core.seq(arglist__42722);
return G__42720__delegate(args);
});
G__42720.cljs$core$IFn$_invoke$arity$variadic = G__42720__delegate;
return G__42720;
})()
);

(o.error = (function() { 
var G__42723__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42723 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42724__i = 0, G__42724__a = new Array(arguments.length -  0);
while (G__42724__i < G__42724__a.length) {G__42724__a[G__42724__i] = arguments[G__42724__i + 0]; ++G__42724__i;}
  args = new cljs.core.IndexedSeq(G__42724__a,0,null);
} 
return G__42723__delegate.call(this,args);};
G__42723.cljs$lang$maxFixedArity = 0;
G__42723.cljs$lang$applyTo = (function (arglist__42725){
var args = cljs.core.seq(arglist__42725);
return G__42723__delegate(args);
});
G__42723.cljs$core$IFn$_invoke$arity$variadic = G__42723__delegate;
return G__42723;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
