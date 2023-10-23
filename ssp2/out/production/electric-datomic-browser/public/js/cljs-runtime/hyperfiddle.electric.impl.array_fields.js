goog.provide('hyperfiddle.electric.impl.array_fields');
hyperfiddle.electric.impl.array_fields.swap = (function hyperfiddle$electric$impl$array_fields$swap(var_args){
var G__40954 = arguments.length;
switch (G__40954) {
case 3:
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___40970 = arguments.length;
var i__5770__auto___40971 = (0);
while(true){
if((i__5770__auto___40971 < len__5769__auto___40970)){
args_arr__5794__auto__.push((arguments[i__5770__auto___40971]));

var G__40972 = (i__5770__auto___40971 + (1));
i__5770__auto___40971 = G__40972;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((6)),(0),null));
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5795__auto__);

}
});

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3 = (function (a,k,f){
return (a[k] = (function (){var G__40959 = (a[k]);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40959) : f.call(null,G__40959));
})());
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$4 = (function (a,k,f,x){
return (a[k] = (function (){var G__40960 = (a[k]);
var G__40961 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__40960,G__40961) : f.call(null,G__40960,G__40961));
})());
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$5 = (function (a,k,f,x,y){
return (a[k] = (function (){var G__40962 = (a[k]);
var G__40963 = x;
var G__40964 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__40962,G__40963,G__40964) : f.call(null,G__40962,G__40963,G__40964));
})());
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$6 = (function (a,k,f,x,y,z){
return (a[k] = (function (){var G__40965 = (a[k]);
var G__40966 = x;
var G__40967 = y;
var G__40968 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__40965,G__40966,G__40967,G__40968) : f.call(null,G__40965,G__40966,G__40967,G__40968));
})());
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$variadic = (function (a,k,f,x,y,z,more){
return (a[k] = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,(a[k]),x,y,z,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)));
}));

/** @this {Function} */
(hyperfiddle.electric.impl.array_fields.swap.cljs$lang$applyTo = (function (seq40947){
var G__40948 = cljs.core.first(seq40947);
var seq40947__$1 = cljs.core.next(seq40947);
var G__40949 = cljs.core.first(seq40947__$1);
var seq40947__$2 = cljs.core.next(seq40947__$1);
var G__40950 = cljs.core.first(seq40947__$2);
var seq40947__$3 = cljs.core.next(seq40947__$2);
var G__40951 = cljs.core.first(seq40947__$3);
var seq40947__$4 = cljs.core.next(seq40947__$3);
var G__40952 = cljs.core.first(seq40947__$4);
var seq40947__$5 = cljs.core.next(seq40947__$4);
var G__40953 = cljs.core.first(seq40947__$5);
var seq40947__$6 = cljs.core.next(seq40947__$5);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40948,G__40949,G__40950,G__40951,G__40952,G__40953,seq40947__$6);
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$lang$maxFixedArity = (6));

hyperfiddle.electric.impl.array_fields.get = (function hyperfiddle$electric$impl$array_fields$get(a,k){
return (a[k]);
});
hyperfiddle.electric.impl.array_fields.getset = (function hyperfiddle$electric$impl$array_fields$getset(a,k,v){
var ret = (a[k]);
(a[k] = v);

return ret;
});
hyperfiddle.electric.impl.array_fields.getswap = (function hyperfiddle$electric$impl$array_fields$getswap(a,k,f){
var ret = (a[k]);
hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3(a,k,f);

return ret;
});

/**
* @constructor
*/
hyperfiddle.electric.impl.array_fields.P = (function (state_){
this.state_ = state_;
});

(hyperfiddle.electric.impl.array_fields.P.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-","state-",-416998234,null)], null);
}));

(hyperfiddle.electric.impl.array_fields.P.cljs$lang$type = true);

(hyperfiddle.electric.impl.array_fields.P.cljs$lang$ctorStr = "hyperfiddle.electric.impl.array-fields/P");

(hyperfiddle.electric.impl.array_fields.P.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.array-fields/P");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.array-fields/P.
 */
hyperfiddle.electric.impl.array_fields.__GT_P = (function hyperfiddle$electric$impl$array_fields$__GT_P(state_){
return (new hyperfiddle.electric.impl.array_fields.P(state_));
});


//# sourceMappingURL=hyperfiddle.electric.impl.array_fields.js.map
