goog.provide('contrib.missionary_contrib');
contrib.missionary_contrib.mix = (function contrib$missionary_contrib$mix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44347 = arguments.length;
var i__5770__auto___44348 = (0);
while(true){
if((i__5770__auto___44348 < len__5769__auto___44347)){
args__5775__auto__.push((arguments[i__5770__auto___44348]));

var G__44349 = (i__5770__auto___44348 + (1));
i__5770__auto___44348 = G__44349;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return contrib.missionary_contrib.mix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(contrib.missionary_contrib.mix.cljs$core$IFn$_invoke$arity$variadic = (function (flows){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43871_block_0 = (function contrib$missionary_contrib$cr43871_block_0(cr43871_state){
try{var cr43871_place_0 = (1);
var cr43871_place_1 = cljs.core.count;
var cr43871_place_2 = flows;
var cr43871_place_3 = (function (){var G__43896 = cr43871_place_2;
var fexpr__43895 = cr43871_place_1;
return (fexpr__43895.cljs$core$IFn$_invoke$arity$1 ? fexpr__43895.cljs$core$IFn$_invoke$arity$1(G__43896) : fexpr__43895.call(null,G__43896));
})();
var cr43871_place_4 = missionary.core.seed;
var cr43871_place_5 = flows;
var cr43871_place_6 = (function (){var G__43898 = cr43871_place_5;
var fexpr__43897 = cr43871_place_4;
return (fexpr__43897.cljs$core$IFn$_invoke$arity$1 ? fexpr__43897.cljs$core$IFn$_invoke$arity$1(G__43898) : fexpr__43897.call(null,G__43898));
})();
(cr43871_state[(0)] = cr43871_block_1);

(cr43871_state[(1)] = cr43871_place_0);

return missionary.core.fork(cr43871_place_3,cr43871_place_6);
}catch (e43894){var cr43871_exception = e43894;
(cr43871_state[(0)] = null);

throw cr43871_exception;
}});
var cr43871_block_1 = (function contrib$missionary_contrib$cr43871_block_1(cr43871_state){
try{var cr43871_place_0 = (cr43871_state[(1)]);
var cr43871_place_7 = missionary.core.unpark();
(cr43871_state[(0)] = cr43871_block_2);

(cr43871_state[(1)] = null);

return missionary.core.fork(cr43871_place_0,cr43871_place_7);
}catch (e43899){var cr43871_exception = e43899;
(cr43871_state[(0)] = null);

(cr43871_state[(1)] = null);

throw cr43871_exception;
}});
var cr43871_block_2 = (function contrib$missionary_contrib$cr43871_block_2(cr43871_state){
try{var cr43871_place_8 = missionary.core.unpark();
(cr43871_state[(0)] = null);

return cr43871_place_8;
}catch (e43903){var cr43871_exception = e43903;
(cr43871_state[(0)] = null);

throw cr43871_exception;
}});
return cloroutine.impl.coroutine((function (){var G__43907 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__43907[(0)] = cr43871_block_0);

return G__43907;
})());
})(),missionary.core.ap_run);
}));

(contrib.missionary_contrib.mix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(contrib.missionary_contrib.mix.cljs$lang$applyTo = (function (seq43869){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43869));
}));

/**
 * blocking iterable pattern
 */
contrib.missionary_contrib.iterator_consumer = (function contrib$missionary_contrib$iterator_consumer(it){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43909_block_3 = (function contrib$missionary_contrib$iterator_consumer_$_cr43909_block_3(cr43909_state){
try{var cr43909_place_6 = (1);
var cr43909_place_7 = missionary.core.none;
(cr43909_state[(0)] = cr43909_block_4);

return missionary.core.fork(cr43909_place_6,cr43909_place_7);
}catch (e43974){var cr43909_exception = e43974;
(cr43909_state[(0)] = null);

(cr43909_state[(1)] = null);

throw cr43909_exception;
}});
var cr43909_block_11 = (function contrib$missionary_contrib$iterator_consumer_$_cr43909_block_11(cr43909_state){
try{var cr43909_place_17 = (cr43909_state[(2)]);
(cr43909_state[(0)] = cr43909_block_12);

(cr43909_state[(2)] = null);

(cr43909_state[(1)] = cr43909_place_17);

return cr43909_state;
}catch (e43976){var cr43909_exception = e43976;
(cr43909_state[(0)] = null);

(cr43909_state[(2)] = null);

(cr43909_state[(1)] = null);

throw cr43909_exception;
}});
var cr43909_block_2 = (function contrib$missionary_contrib$iterator_consumer_$_cr43909_block_2(cr43909_state){
try{var cr43909_place_4 = missionary.core.unpark();
var cr43909_place_5 = null;
if(cljs.core.truth_(cr43909_place_4)){
(cr43909_state[(0)] = cr43909_block_5);

(cr43909_state[(1)] = cr43909_place_5);

return cr43909_state;
} else {
(cr43909_state[(0)] = cr43909_block_3);

(cr43909_state[(1)] = cr43909_place_5);

return cr43909_state;
}
}catch (e44013){var cr43909_exception = e44013;
(cr43909_state[(0)] = null);

throw cr43909_exception;
}});
var cr43909_block_7 = (function contrib$missionary_contrib$iterator_consumer_$_cr43909_block_7(cr43909_state){
try{var cr43909_place_18 = missionary.core.via_call;
var cr43909_place_19 = missionary.core.blk;
var cr43909_place_20 = (function (){
return it.next();
});
var cr43909_place_21 = (function (){var G__44020 = cr43909_place_19;
var G__44021 = cr43909_place_20;
var fexpr__44019 = cr43909_place_18;
return (fexpr__44019.cljs$core$IFn$_invoke$arity$2 ? fexpr__44019.cljs$core$IFn$_invoke$arity$2(G__44020,G__44021) : fexpr__44019.call(null,G__44020,G__44021));
})();
(cr43909_state[(0)] = cr43909_block_8);

return missionary.core.park(cr43909_place_21);
}catch (e44015){var cr43909_exception = e44015;
(cr43909_state[(0)] = null);

(cr43909_state[(2)] = null);

(cr43909_state[(1)] = null);

throw cr43909_exception;
}});
var cr43909_block_5 = (function contrib$missionary_contrib$iterator_consumer_$_cr43909_block_5(cr43909_state){
try{var cr43909_place_9 = (1);
var cr43909_place_10 = missionary.core.seed;
var cr43909_place_11 = cljs.core.range;
var cr43909_place_12 = (2);
var cr43909_place_13 = (function (){var G__44025 = cr43909_place_12;
var fexpr__44024 = cr43909_place_11;
return (fexpr__44024.cljs$core$IFn$_invoke$arity$1 ? fexpr__44024.cljs$core$IFn$_invoke$arity$1(G__44025) : fexpr__44024.call(null,G__44025));
})();
var cr43909_place_14 = (function (){var G__44028 = cr43909_place_13;
var fexpr__44027 = cr43909_place_10;
return (fexpr__44027.cljs$core$IFn$_invoke$arity$1 ? fexpr__44027.cljs$core$IFn$_invoke$arity$1(G__44028) : fexpr__44027.call(null,G__44028));
})();
(cr43909_state[(0)] = cr43909_block_6);

return missionary.core.fork(cr43909_place_9,cr43909_place_14);
}catch (e44022){var cr43909_exception = e44022;
(cr43909_state[(0)] = null);

(cr43909_state[(1)] = null);

throw cr43909_exception;
}});
var cr43909_block_12 = (function contrib$missionary_contrib$iterator_consumer_$_cr43909_block_12(cr43909_state){
try{var cr43909_place_5 = (cr43909_state[(1)]);
(cr43909_state[(0)] = null);

(cr43909_state[(1)] = null);

return cr43909_place_5;
}catch (e44029){var cr43909_exception = e44029;
(cr43909_state[(0)] = null);

(cr43909_state[(1)] = null);

throw cr43909_exception;
}});
var cr43909_block_1 = (function contrib$missionary_contrib$iterator_consumer_$_cr43909_block_1(cr43909_state){
try{var cr43909_place_0 = missionary.core.via_call;
var cr43909_place_1 = missionary.core.blk;
var cr43909_place_2 = (function (){
return it.hasNext();
});
var cr43909_place_3 = (function (){var G__44040 = cr43909_place_1;
var G__44041 = cr43909_place_2;
var fexpr__44039 = cr43909_place_0;
return (fexpr__44039.cljs$core$IFn$_invoke$arity$2 ? fexpr__44039.cljs$core$IFn$_invoke$arity$2(G__44040,G__44041) : fexpr__44039.call(null,G__44040,G__44041));
})();
(cr43909_state[(0)] = cr43909_block_2);

return missionary.core.park(cr43909_place_3);
}catch (e44032){var cr43909_exception = e44032;
(cr43909_state[(0)] = null);

throw cr43909_exception;
}});
var cr43909_block_6 = (function contrib$missionary_contrib$iterator_consumer_$_cr43909_block_6(cr43909_state){
try{var cr43909_place_15 = missionary.core.unpark();
var cr43909_place_16 = cr43909_place_15;
var cr43909_place_17 = null;
var G__44046 = cr43909_place_16;
switch (G__44046) {
case (0):
(cr43909_state[(0)] = cr43909_block_7);

(cr43909_state[(2)] = cr43909_place_17);

return cr43909_state;

break;
case (1):
(cr43909_state[(0)] = cr43909_block_9);

(cr43909_state[(1)] = null);

return cr43909_state;

break;
default:
(cr43909_state[(0)] = cr43909_block_10);

(cr43909_state[(1)] = null);

(cr43909_state[(1)] = cr43909_place_15);

return cr43909_state;

}
}catch (e44044){var cr43909_exception = e44044;
(cr43909_state[(0)] = null);

(cr43909_state[(1)] = null);

throw cr43909_exception;
}});
var cr43909_block_4 = (function contrib$missionary_contrib$iterator_consumer_$_cr43909_block_4(cr43909_state){
try{var cr43909_place_8 = missionary.core.unpark();
(cr43909_state[(0)] = cr43909_block_12);

(cr43909_state[(1)] = cr43909_place_8);

return cr43909_state;
}catch (e44048){var cr43909_exception = e44048;
(cr43909_state[(0)] = null);

(cr43909_state[(1)] = null);

throw cr43909_exception;
}});
var cr43909_block_0 = (function contrib$missionary_contrib$iterator_consumer_$_cr43909_block_0(cr43909_state){
try{(cr43909_state[(0)] = cr43909_block_1);

return cr43909_state;
}catch (e44053){var cr43909_exception = e44053;
(cr43909_state[(0)] = null);

throw cr43909_exception;
}});
var cr43909_block_9 = (function contrib$missionary_contrib$iterator_consumer_$_cr43909_block_9(cr43909_state){
try{(cr43909_state[(0)] = cr43909_block_1);

return cr43909_state;
}catch (e44055){var cr43909_exception = e44055;
(cr43909_state[(0)] = null);

throw cr43909_exception;
}});
var cr43909_block_10 = (function contrib$missionary_contrib$iterator_consumer_$_cr43909_block_10(cr43909_state){
try{var cr43909_place_15 = (cr43909_state[(1)]);
var cr43909_place_23 = "No matching clause: ";
var cr43909_place_24 = cr43909_place_15;
var cr43909_place_25 = [cr43909_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr43909_place_24)].join('');
var cr43909_place_26 = (new Error(cr43909_place_25));
var cr43909_place_27 = (function(){throw cr43909_place_26})();
(cr43909_state[(0)] = null);

(cr43909_state[(1)] = null);

return null;
}catch (e44056){var cr43909_exception = e44056;
(cr43909_state[(0)] = null);

(cr43909_state[(1)] = null);

throw cr43909_exception;
}});
var cr43909_block_8 = (function contrib$missionary_contrib$iterator_consumer_$_cr43909_block_8(cr43909_state){
try{var cr43909_place_22 = missionary.core.unpark();
(cr43909_state[(0)] = cr43909_block_11);

(cr43909_state[(2)] = cr43909_place_22);

return cr43909_state;
}catch (e44065){var cr43909_exception = e44065;
(cr43909_state[(0)] = null);

(cr43909_state[(2)] = null);

(cr43909_state[(1)] = null);

throw cr43909_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44066 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__44066[(0)] = cr43909_block_0);

return G__44066;
})());
})(),missionary.core.ap_run);
});
contrib.missionary_contrib.seq_consumer = (function contrib$missionary_contrib$seq_consumer(xs){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44069_block_12 = (function contrib$missionary_contrib$seq_consumer_$_cr44069_block_12(cr44069_state){
try{var cr44069_place_6 = (cr44069_state[(2)]);
(cr44069_state[(0)] = null);

(cr44069_state[(2)] = null);

return cr44069_place_6;
}catch (e44179){var cr44069_exception = e44179;
(cr44069_state[(0)] = null);

(cr44069_state[(2)] = null);

throw cr44069_exception;
}});
var cr44069_block_3 = (function contrib$missionary_contrib$seq_consumer_$_cr44069_block_3(cr44069_state){
try{var cr44069_place_7 = (1);
var cr44069_place_8 = missionary.core.none;
(cr44069_state[(0)] = cr44069_block_4);

return missionary.core.fork(cr44069_place_7,cr44069_place_8);
}catch (e44192){var cr44069_exception = e44192;
(cr44069_state[(0)] = null);

(cr44069_state[(2)] = null);

throw cr44069_exception;
}});
var cr44069_block_4 = (function contrib$missionary_contrib$seq_consumer_$_cr44069_block_4(cr44069_state){
try{var cr44069_place_9 = missionary.core.unpark();
(cr44069_state[(0)] = cr44069_block_12);

(cr44069_state[(2)] = cr44069_place_9);

return cr44069_state;
}catch (e44198){var cr44069_exception = e44198;
(cr44069_state[(0)] = null);

(cr44069_state[(2)] = null);

throw cr44069_exception;
}});
var cr44069_block_6 = (function contrib$missionary_contrib$seq_consumer_$_cr44069_block_6(cr44069_state){
try{var cr44069_place_16 = missionary.core.unpark();
var cr44069_place_17 = cr44069_place_16;
var cr44069_place_18 = null;
var G__44201 = cr44069_place_17;
switch (G__44201) {
case (0):
(cr44069_state[(0)] = cr44069_block_7);

(cr44069_state[(3)] = cr44069_place_18);

return cr44069_state;

break;
case (1):
(cr44069_state[(0)] = cr44069_block_9);

(cr44069_state[(2)] = null);

return cr44069_state;

break;
default:
(cr44069_state[(0)] = cr44069_block_10);

(cr44069_state[(1)] = null);

(cr44069_state[(2)] = null);

(cr44069_state[(1)] = cr44069_place_16);

return cr44069_state;

}
}catch (e44200){var cr44069_exception = e44200;
(cr44069_state[(0)] = null);

(cr44069_state[(1)] = null);

(cr44069_state[(2)] = null);

throw cr44069_exception;
}});
var cr44069_block_10 = (function contrib$missionary_contrib$seq_consumer_$_cr44069_block_10(cr44069_state){
try{var cr44069_place_16 = (cr44069_state[(1)]);
var cr44069_place_27 = "No matching clause: ";
var cr44069_place_28 = cr44069_place_16;
var cr44069_place_29 = [cr44069_place_27,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44069_place_28)].join('');
var cr44069_place_30 = (new Error(cr44069_place_29));
var cr44069_place_31 = (function(){throw cr44069_place_30})();
(cr44069_state[(0)] = null);

(cr44069_state[(1)] = null);

return null;
}catch (e44206){var cr44069_exception = e44206;
(cr44069_state[(0)] = null);

(cr44069_state[(1)] = null);

throw cr44069_exception;
}});
var cr44069_block_2 = (function contrib$missionary_contrib$seq_consumer_$_cr44069_block_2(cr44069_state){
try{var cr44069_place_5 = missionary.core.unpark();
var cr44069_place_6 = null;
if(cljs.core.truth_(cr44069_place_5)){
(cr44069_state[(0)] = cr44069_block_5);

(cr44069_state[(2)] = cr44069_place_6);

return cr44069_state;
} else {
(cr44069_state[(0)] = cr44069_block_3);

(cr44069_state[(1)] = null);

(cr44069_state[(2)] = cr44069_place_6);

return cr44069_state;
}
}catch (e44208){var cr44069_exception = e44208;
(cr44069_state[(0)] = null);

(cr44069_state[(1)] = null);

throw cr44069_exception;
}});
var cr44069_block_0 = (function contrib$missionary_contrib$seq_consumer_$_cr44069_block_0(cr44069_state){
try{var cr44069_place_0 = xs;
(cr44069_state[(0)] = cr44069_block_1);

(cr44069_state[(1)] = cr44069_place_0);

return cr44069_state;
}catch (e44213){var cr44069_exception = e44213;
(cr44069_state[(0)] = null);

throw cr44069_exception;
}});
var cr44069_block_8 = (function contrib$missionary_contrib$seq_consumer_$_cr44069_block_8(cr44069_state){
try{var cr44069_place_23 = missionary.core.unpark();
(cr44069_state[(0)] = cr44069_block_11);

(cr44069_state[(3)] = cr44069_place_23);

return cr44069_state;
}catch (e44218){var cr44069_exception = e44218;
(cr44069_state[(0)] = null);

(cr44069_state[(2)] = null);

(cr44069_state[(3)] = null);

throw cr44069_exception;
}});
var cr44069_block_11 = (function contrib$missionary_contrib$seq_consumer_$_cr44069_block_11(cr44069_state){
try{var cr44069_place_18 = (cr44069_state[(3)]);
(cr44069_state[(0)] = cr44069_block_12);

(cr44069_state[(3)] = null);

(cr44069_state[(2)] = cr44069_place_18);

return cr44069_state;
}catch (e44220){var cr44069_exception = e44220;
(cr44069_state[(0)] = null);

(cr44069_state[(2)] = null);

(cr44069_state[(3)] = null);

throw cr44069_exception;
}});
var cr44069_block_5 = (function contrib$missionary_contrib$seq_consumer_$_cr44069_block_5(cr44069_state){
try{var cr44069_place_10 = (1);
var cr44069_place_11 = missionary.core.seed;
var cr44069_place_12 = cljs.core.range;
var cr44069_place_13 = (2);
var cr44069_place_14 = (function (){var G__44226 = cr44069_place_13;
var fexpr__44225 = cr44069_place_12;
return (fexpr__44225.cljs$core$IFn$_invoke$arity$1 ? fexpr__44225.cljs$core$IFn$_invoke$arity$1(G__44226) : fexpr__44225.call(null,G__44226));
})();
var cr44069_place_15 = (function (){var G__44229 = cr44069_place_14;
var fexpr__44228 = cr44069_place_11;
return (fexpr__44228.cljs$core$IFn$_invoke$arity$1 ? fexpr__44228.cljs$core$IFn$_invoke$arity$1(G__44229) : fexpr__44228.call(null,G__44229));
})();
(cr44069_state[(0)] = cr44069_block_6);

return missionary.core.fork(cr44069_place_10,cr44069_place_15);
}catch (e44223){var cr44069_exception = e44223;
(cr44069_state[(0)] = null);

(cr44069_state[(1)] = null);

(cr44069_state[(2)] = null);

throw cr44069_exception;
}});
var cr44069_block_9 = (function contrib$missionary_contrib$seq_consumer_$_cr44069_block_9(cr44069_state){
try{var cr44069_place_0 = (cr44069_state[(1)]);
var cr44069_place_24 = cljs.core.rest;
var cr44069_place_25 = cr44069_place_0;
var cr44069_place_26 = (function (){var G__44237 = cr44069_place_25;
var fexpr__44236 = cr44069_place_24;
return (fexpr__44236.cljs$core$IFn$_invoke$arity$1 ? fexpr__44236.cljs$core$IFn$_invoke$arity$1(G__44237) : fexpr__44236.call(null,G__44237));
})();
(cr44069_state[(0)] = cr44069_block_1);

(cr44069_state[(1)] = cr44069_place_26);

return cr44069_state;
}catch (e44231){var cr44069_exception = e44231;
(cr44069_state[(0)] = null);

(cr44069_state[(1)] = null);

throw cr44069_exception;
}});
var cr44069_block_7 = (function contrib$missionary_contrib$seq_consumer_$_cr44069_block_7(cr44069_state){
try{var cr44069_place_0 = (cr44069_state[(1)]);
var cr44069_place_19 = missionary.core.via_call;
var cr44069_place_20 = missionary.core.blk;
var cr44069_place_21 = (function (){
return cljs.core.first(cr44069_place_0);
});
var cr44069_place_22 = (function (){var G__44244 = cr44069_place_20;
var G__44245 = cr44069_place_21;
var fexpr__44243 = cr44069_place_19;
return (fexpr__44243.cljs$core$IFn$_invoke$arity$2 ? fexpr__44243.cljs$core$IFn$_invoke$arity$2(G__44244,G__44245) : fexpr__44243.call(null,G__44244,G__44245));
})();
(cr44069_state[(0)] = cr44069_block_8);

(cr44069_state[(1)] = null);

return missionary.core.park(cr44069_place_22);
}catch (e44239){var cr44069_exception = e44239;
(cr44069_state[(0)] = null);

(cr44069_state[(1)] = null);

(cr44069_state[(2)] = null);

(cr44069_state[(3)] = null);

throw cr44069_exception;
}});
var cr44069_block_1 = (function contrib$missionary_contrib$seq_consumer_$_cr44069_block_1(cr44069_state){
try{var cr44069_place_0 = (cr44069_state[(1)]);
var cr44069_place_1 = missionary.core.via_call;
var cr44069_place_2 = missionary.core.blk;
var cr44069_place_3 = (function (){
return cljs.core.seq(cr44069_place_0);
});
var cr44069_place_4 = (function (){var G__44249 = cr44069_place_2;
var G__44250 = cr44069_place_3;
var fexpr__44248 = cr44069_place_1;
return (fexpr__44248.cljs$core$IFn$_invoke$arity$2 ? fexpr__44248.cljs$core$IFn$_invoke$arity$2(G__44249,G__44250) : fexpr__44248.call(null,G__44249,G__44250));
})();
(cr44069_state[(0)] = cr44069_block_2);

return missionary.core.park(cr44069_place_4);
}catch (e44247){var cr44069_exception = e44247;
(cr44069_state[(0)] = null);

(cr44069_state[(1)] = null);

throw cr44069_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44255 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((4));
(G__44255[(0)] = cr44069_block_0);

return G__44255;
})());
})(),missionary.core.ap_run);
});
/**
 * derive discrete flow from succession of polled values from a task (or mbox)
 */
contrib.missionary_contrib.poll_task = (function contrib$missionary_contrib$poll_task(task){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44262_block_7 = (function contrib$missionary_contrib$poll_task_$_cr44262_block_7(cr44262_state){
try{var cr44262_place_8 = (cr44262_state[(1)]);
var cr44262_place_14 = "No matching clause: ";
var cr44262_place_15 = cr44262_place_8;
var cr44262_place_16 = [cr44262_place_14,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44262_place_15)].join('');
var cr44262_place_17 = (new Error(cr44262_place_16));
var cr44262_place_18 = (function(){throw cr44262_place_17})();
(cr44262_state[(0)] = null);

(cr44262_state[(1)] = null);

return null;
}catch (e44306){var cr44262_exception = e44306;
(cr44262_state[(0)] = null);

(cr44262_state[(1)] = null);

throw cr44262_exception;
}});
var cr44262_block_5 = (function contrib$missionary_contrib$poll_task_$_cr44262_block_5(cr44262_state){
try{var cr44262_place_12 = task;
(cr44262_state[(0)] = cr44262_block_6);

return missionary.core.park(cr44262_place_12);
}catch (e44310){var cr44262_exception = e44310;
(cr44262_state[(0)] = null);

(cr44262_state[(1)] = null);

throw cr44262_exception;
}});
var cr44262_block_3 = (function contrib$missionary_contrib$poll_task_$_cr44262_block_3(cr44262_state){
try{var cr44262_place_8 = missionary.core.unpark();
var cr44262_place_9 = cr44262_place_8;
var cr44262_place_10 = null;
var G__44314 = cr44262_place_9;
switch (G__44314) {
case (0):
(cr44262_state[(0)] = cr44262_block_4);

(cr44262_state[(2)] = cr44262_place_10);

return cr44262_state;

break;
case (1):
(cr44262_state[(0)] = cr44262_block_5);

return cr44262_state;

break;
default:
(cr44262_state[(0)] = cr44262_block_7);

(cr44262_state[(1)] = null);

(cr44262_state[(1)] = cr44262_place_8);

return cr44262_state;

}
}catch (e44313){var cr44262_exception = e44313;
(cr44262_state[(0)] = null);

(cr44262_state[(1)] = null);

throw cr44262_exception;
}});
var cr44262_block_8 = (function contrib$missionary_contrib$poll_task_$_cr44262_block_8(cr44262_state){
try{var cr44262_place_10 = (cr44262_state[(2)]);
(cr44262_state[(0)] = null);

(cr44262_state[(2)] = null);

return cr44262_place_10;
}catch (e44315){var cr44262_exception = e44315;
(cr44262_state[(0)] = null);

(cr44262_state[(2)] = null);

throw cr44262_exception;
}});
var cr44262_block_4 = (function contrib$missionary_contrib$poll_task_$_cr44262_block_4(cr44262_state){
try{var cr44262_place_1 = (cr44262_state[(1)]);
var cr44262_place_11 = cr44262_place_1;
(cr44262_state[(0)] = cr44262_block_8);

(cr44262_state[(1)] = null);

(cr44262_state[(2)] = cr44262_place_11);

return cr44262_state;
}catch (e44316){var cr44262_exception = e44316;
(cr44262_state[(0)] = null);

(cr44262_state[(1)] = null);

(cr44262_state[(2)] = null);

throw cr44262_exception;
}});
var cr44262_block_2 = (function contrib$missionary_contrib$poll_task_$_cr44262_block_2(cr44262_state){
try{var cr44262_place_2 = (1);
var cr44262_place_3 = missionary.core.seed;
var cr44262_place_4 = cljs.core.range;
var cr44262_place_5 = (2);
var cr44262_place_6 = (function (){var G__44321 = cr44262_place_5;
var fexpr__44320 = cr44262_place_4;
return (fexpr__44320.cljs$core$IFn$_invoke$arity$1 ? fexpr__44320.cljs$core$IFn$_invoke$arity$1(G__44321) : fexpr__44320.call(null,G__44321));
})();
var cr44262_place_7 = (function (){var G__44323 = cr44262_place_6;
var fexpr__44322 = cr44262_place_3;
return (fexpr__44322.cljs$core$IFn$_invoke$arity$1 ? fexpr__44322.cljs$core$IFn$_invoke$arity$1(G__44323) : fexpr__44322.call(null,G__44323));
})();
(cr44262_state[(0)] = cr44262_block_3);

return missionary.core.fork(cr44262_place_2,cr44262_place_7);
}catch (e44318){var cr44262_exception = e44318;
(cr44262_state[(0)] = null);

(cr44262_state[(1)] = null);

throw cr44262_exception;
}});
var cr44262_block_6 = (function contrib$missionary_contrib$poll_task_$_cr44262_block_6(cr44262_state){
try{var cr44262_place_13 = missionary.core.unpark();
(cr44262_state[(0)] = cr44262_block_2);

(cr44262_state[(1)] = cr44262_place_13);

return cr44262_state;
}catch (e44324){var cr44262_exception = e44324;
(cr44262_state[(0)] = null);

(cr44262_state[(1)] = null);

throw cr44262_exception;
}});
var cr44262_block_1 = (function contrib$missionary_contrib$poll_task_$_cr44262_block_1(cr44262_state){
try{var cr44262_place_1 = missionary.core.unpark();
(cr44262_state[(0)] = cr44262_block_2);

(cr44262_state[(1)] = cr44262_place_1);

return cr44262_state;
}catch (e44327){var cr44262_exception = e44327;
(cr44262_state[(0)] = null);

throw cr44262_exception;
}});
var cr44262_block_0 = (function contrib$missionary_contrib$poll_task_$_cr44262_block_0(cr44262_state){
try{var cr44262_place_0 = task;
(cr44262_state[(0)] = cr44262_block_1);

return missionary.core.park(cr44262_place_0);
}catch (e44332){var cr44262_exception = e44332;
(cr44262_state[(0)] = null);

throw cr44262_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44335 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__44335[(0)] = cr44262_block_0);

return G__44335;
})());
})(),missionary.core.ap_run);
});
/**
 * compare (document log) to (d/entity db eid). if a datomic txn is [op eid a v], 
 * log here is [op a v], or in other words, there is only one entity (the `eid` is 
 * constant) so we are left with not an entity but a document.
 */
contrib.missionary_contrib.document = (function contrib$missionary_contrib$document(_GT_txs){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3((function (m,p__44338){
var vec__44340 = p__44338;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44340,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44340,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44340,(2),null);
var G__44343 = op;
var G__44343__$1 = (((G__44343 instanceof cljs.core.Keyword))?G__44343.fqn:null);
switch (G__44343__$1) {
case "contrib.missionary-contrib/add":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,a,v);

break;
case "contrib.missionary-contrib/retract":
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,a);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44343__$1)].join('')));

}
}),cljs.core.PersistentArrayMap.EMPTY,_GT_txs);
});

//# sourceMappingURL=contrib.missionary_contrib.js.map
