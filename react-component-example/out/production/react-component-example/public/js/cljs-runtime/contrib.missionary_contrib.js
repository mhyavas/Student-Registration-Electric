goog.provide('contrib.missionary_contrib');
contrib.missionary_contrib.mix = (function contrib$missionary_contrib$mix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44108 = arguments.length;
var i__5770__auto___44109 = (0);
while(true){
if((i__5770__auto___44109 < len__5769__auto___44108)){
args__5775__auto__.push((arguments[i__5770__auto___44109]));

var G__44110 = (i__5770__auto___44109 + (1));
i__5770__auto___44109 = G__44110;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return contrib.missionary_contrib.mix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(contrib.missionary_contrib.mix.cljs$core$IFn$_invoke$arity$variadic = (function (flows){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43699_block_0 = (function contrib$missionary_contrib$cr43699_block_0(cr43699_state){
try{var cr43699_place_0 = (1);
var cr43699_place_1 = cljs.core.count;
var cr43699_place_2 = flows;
var cr43699_place_3 = (function (){var G__43715 = cr43699_place_2;
var fexpr__43714 = cr43699_place_1;
return (fexpr__43714.cljs$core$IFn$_invoke$arity$1 ? fexpr__43714.cljs$core$IFn$_invoke$arity$1(G__43715) : fexpr__43714.call(null,G__43715));
})();
var cr43699_place_4 = missionary.core.seed;
var cr43699_place_5 = flows;
var cr43699_place_6 = (function (){var G__43717 = cr43699_place_5;
var fexpr__43716 = cr43699_place_4;
return (fexpr__43716.cljs$core$IFn$_invoke$arity$1 ? fexpr__43716.cljs$core$IFn$_invoke$arity$1(G__43717) : fexpr__43716.call(null,G__43717));
})();
(cr43699_state[(0)] = cr43699_block_1);

(cr43699_state[(1)] = cr43699_place_0);

return missionary.core.fork(cr43699_place_3,cr43699_place_6);
}catch (e43713){var cr43699_exception = e43713;
(cr43699_state[(0)] = null);

throw cr43699_exception;
}});
var cr43699_block_1 = (function contrib$missionary_contrib$cr43699_block_1(cr43699_state){
try{var cr43699_place_0 = (cr43699_state[(1)]);
var cr43699_place_7 = missionary.core.unpark();
(cr43699_state[(0)] = cr43699_block_2);

(cr43699_state[(1)] = null);

return missionary.core.fork(cr43699_place_0,cr43699_place_7);
}catch (e43719){var cr43699_exception = e43719;
(cr43699_state[(0)] = null);

(cr43699_state[(1)] = null);

throw cr43699_exception;
}});
var cr43699_block_2 = (function contrib$missionary_contrib$cr43699_block_2(cr43699_state){
try{var cr43699_place_8 = missionary.core.unpark();
(cr43699_state[(0)] = null);

return cr43699_place_8;
}catch (e43721){var cr43699_exception = e43721;
(cr43699_state[(0)] = null);

throw cr43699_exception;
}});
return cloroutine.impl.coroutine((function (){var G__43722 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__43722[(0)] = cr43699_block_0);

return G__43722;
})());
})(),missionary.core.ap_run);
}));

(contrib.missionary_contrib.mix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(contrib.missionary_contrib.mix.cljs$lang$applyTo = (function (seq43694){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43694));
}));

/**
 * blocking iterable pattern
 */
contrib.missionary_contrib.iterator_consumer = (function contrib$missionary_contrib$iterator_consumer(it){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43725_block_4 = (function contrib$missionary_contrib$iterator_consumer_$_cr43725_block_4(cr43725_state){
try{var cr43725_place_8 = missionary.core.unpark();
(cr43725_state[(0)] = cr43725_block_12);

(cr43725_state[(1)] = cr43725_place_8);

return cr43725_state;
}catch (e43797){var cr43725_exception = e43797;
(cr43725_state[(0)] = null);

(cr43725_state[(1)] = null);

throw cr43725_exception;
}});
var cr43725_block_11 = (function contrib$missionary_contrib$iterator_consumer_$_cr43725_block_11(cr43725_state){
try{var cr43725_place_17 = (cr43725_state[(2)]);
(cr43725_state[(0)] = cr43725_block_12);

(cr43725_state[(2)] = null);

(cr43725_state[(1)] = cr43725_place_17);

return cr43725_state;
}catch (e43799){var cr43725_exception = e43799;
(cr43725_state[(0)] = null);

(cr43725_state[(1)] = null);

(cr43725_state[(2)] = null);

throw cr43725_exception;
}});
var cr43725_block_8 = (function contrib$missionary_contrib$iterator_consumer_$_cr43725_block_8(cr43725_state){
try{var cr43725_place_22 = missionary.core.unpark();
(cr43725_state[(0)] = cr43725_block_11);

(cr43725_state[(2)] = cr43725_place_22);

return cr43725_state;
}catch (e43800){var cr43725_exception = e43800;
(cr43725_state[(0)] = null);

(cr43725_state[(1)] = null);

(cr43725_state[(2)] = null);

throw cr43725_exception;
}});
var cr43725_block_0 = (function contrib$missionary_contrib$iterator_consumer_$_cr43725_block_0(cr43725_state){
try{(cr43725_state[(0)] = cr43725_block_1);

return cr43725_state;
}catch (e43802){var cr43725_exception = e43802;
(cr43725_state[(0)] = null);

throw cr43725_exception;
}});
var cr43725_block_1 = (function contrib$missionary_contrib$iterator_consumer_$_cr43725_block_1(cr43725_state){
try{var cr43725_place_0 = missionary.core.via_call;
var cr43725_place_1 = missionary.core.blk;
var cr43725_place_2 = (function (){
return it.hasNext();
});
var cr43725_place_3 = (function (){var G__43810 = cr43725_place_1;
var G__43811 = cr43725_place_2;
var fexpr__43809 = cr43725_place_0;
return (fexpr__43809.cljs$core$IFn$_invoke$arity$2 ? fexpr__43809.cljs$core$IFn$_invoke$arity$2(G__43810,G__43811) : fexpr__43809.call(null,G__43810,G__43811));
})();
(cr43725_state[(0)] = cr43725_block_2);

return missionary.core.park(cr43725_place_3);
}catch (e43804){var cr43725_exception = e43804;
(cr43725_state[(0)] = null);

throw cr43725_exception;
}});
var cr43725_block_3 = (function contrib$missionary_contrib$iterator_consumer_$_cr43725_block_3(cr43725_state){
try{var cr43725_place_6 = (1);
var cr43725_place_7 = missionary.core.none;
(cr43725_state[(0)] = cr43725_block_4);

return missionary.core.fork(cr43725_place_6,cr43725_place_7);
}catch (e43816){var cr43725_exception = e43816;
(cr43725_state[(0)] = null);

(cr43725_state[(1)] = null);

throw cr43725_exception;
}});
var cr43725_block_6 = (function contrib$missionary_contrib$iterator_consumer_$_cr43725_block_6(cr43725_state){
try{var cr43725_place_15 = missionary.core.unpark();
var cr43725_place_16 = cr43725_place_15;
var cr43725_place_17 = null;
var G__43821 = cr43725_place_16;
switch (G__43821) {
case (0):
(cr43725_state[(0)] = cr43725_block_7);

(cr43725_state[(2)] = cr43725_place_17);

return cr43725_state;

break;
case (1):
(cr43725_state[(0)] = cr43725_block_9);

(cr43725_state[(1)] = null);

return cr43725_state;

break;
default:
(cr43725_state[(0)] = cr43725_block_10);

(cr43725_state[(1)] = null);

(cr43725_state[(1)] = cr43725_place_15);

return cr43725_state;

}
}catch (e43820){var cr43725_exception = e43820;
(cr43725_state[(0)] = null);

(cr43725_state[(1)] = null);

throw cr43725_exception;
}});
var cr43725_block_10 = (function contrib$missionary_contrib$iterator_consumer_$_cr43725_block_10(cr43725_state){
try{var cr43725_place_15 = (cr43725_state[(1)]);
var cr43725_place_23 = "No matching clause: ";
var cr43725_place_24 = cr43725_place_15;
var cr43725_place_25 = [cr43725_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr43725_place_24)].join('');
var cr43725_place_26 = (new Error(cr43725_place_25));
var cr43725_place_27 = (function(){throw cr43725_place_26})();
(cr43725_state[(0)] = null);

(cr43725_state[(1)] = null);

return null;
}catch (e43831){var cr43725_exception = e43831;
(cr43725_state[(0)] = null);

(cr43725_state[(1)] = null);

throw cr43725_exception;
}});
var cr43725_block_12 = (function contrib$missionary_contrib$iterator_consumer_$_cr43725_block_12(cr43725_state){
try{var cr43725_place_5 = (cr43725_state[(1)]);
(cr43725_state[(0)] = null);

(cr43725_state[(1)] = null);

return cr43725_place_5;
}catch (e43838){var cr43725_exception = e43838;
(cr43725_state[(0)] = null);

(cr43725_state[(1)] = null);

throw cr43725_exception;
}});
var cr43725_block_7 = (function contrib$missionary_contrib$iterator_consumer_$_cr43725_block_7(cr43725_state){
try{var cr43725_place_18 = missionary.core.via_call;
var cr43725_place_19 = missionary.core.blk;
var cr43725_place_20 = (function (){
return it.next();
});
var cr43725_place_21 = (function (){var G__43844 = cr43725_place_19;
var G__43845 = cr43725_place_20;
var fexpr__43843 = cr43725_place_18;
return (fexpr__43843.cljs$core$IFn$_invoke$arity$2 ? fexpr__43843.cljs$core$IFn$_invoke$arity$2(G__43844,G__43845) : fexpr__43843.call(null,G__43844,G__43845));
})();
(cr43725_state[(0)] = cr43725_block_8);

return missionary.core.park(cr43725_place_21);
}catch (e43841){var cr43725_exception = e43841;
(cr43725_state[(0)] = null);

(cr43725_state[(1)] = null);

(cr43725_state[(2)] = null);

throw cr43725_exception;
}});
var cr43725_block_9 = (function contrib$missionary_contrib$iterator_consumer_$_cr43725_block_9(cr43725_state){
try{(cr43725_state[(0)] = cr43725_block_1);

return cr43725_state;
}catch (e43848){var cr43725_exception = e43848;
(cr43725_state[(0)] = null);

throw cr43725_exception;
}});
var cr43725_block_2 = (function contrib$missionary_contrib$iterator_consumer_$_cr43725_block_2(cr43725_state){
try{var cr43725_place_4 = missionary.core.unpark();
var cr43725_place_5 = null;
if(cljs.core.truth_(cr43725_place_4)){
(cr43725_state[(0)] = cr43725_block_5);

(cr43725_state[(1)] = cr43725_place_5);

return cr43725_state;
} else {
(cr43725_state[(0)] = cr43725_block_3);

(cr43725_state[(1)] = cr43725_place_5);

return cr43725_state;
}
}catch (e43852){var cr43725_exception = e43852;
(cr43725_state[(0)] = null);

throw cr43725_exception;
}});
var cr43725_block_5 = (function contrib$missionary_contrib$iterator_consumer_$_cr43725_block_5(cr43725_state){
try{var cr43725_place_9 = (1);
var cr43725_place_10 = missionary.core.seed;
var cr43725_place_11 = cljs.core.range;
var cr43725_place_12 = (2);
var cr43725_place_13 = (function (){var G__43862 = cr43725_place_12;
var fexpr__43861 = cr43725_place_11;
return (fexpr__43861.cljs$core$IFn$_invoke$arity$1 ? fexpr__43861.cljs$core$IFn$_invoke$arity$1(G__43862) : fexpr__43861.call(null,G__43862));
})();
var cr43725_place_14 = (function (){var G__43864 = cr43725_place_13;
var fexpr__43863 = cr43725_place_10;
return (fexpr__43863.cljs$core$IFn$_invoke$arity$1 ? fexpr__43863.cljs$core$IFn$_invoke$arity$1(G__43864) : fexpr__43863.call(null,G__43864));
})();
(cr43725_state[(0)] = cr43725_block_6);

return missionary.core.fork(cr43725_place_9,cr43725_place_14);
}catch (e43856){var cr43725_exception = e43856;
(cr43725_state[(0)] = null);

(cr43725_state[(1)] = null);

throw cr43725_exception;
}});
return cloroutine.impl.coroutine((function (){var G__43867 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__43867[(0)] = cr43725_block_0);

return G__43867;
})());
})(),missionary.core.ap_run);
});
contrib.missionary_contrib.seq_consumer = (function contrib$missionary_contrib$seq_consumer(xs){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43868_block_4 = (function contrib$missionary_contrib$seq_consumer_$_cr43868_block_4(cr43868_state){
try{var cr43868_place_9 = missionary.core.unpark();
(cr43868_state[(0)] = cr43868_block_12);

(cr43868_state[(2)] = cr43868_place_9);

return cr43868_state;
}catch (e43945){var cr43868_exception = e43945;
(cr43868_state[(0)] = null);

(cr43868_state[(2)] = null);

throw cr43868_exception;
}});
var cr43868_block_3 = (function contrib$missionary_contrib$seq_consumer_$_cr43868_block_3(cr43868_state){
try{var cr43868_place_7 = (1);
var cr43868_place_8 = missionary.core.none;
(cr43868_state[(0)] = cr43868_block_4);

return missionary.core.fork(cr43868_place_7,cr43868_place_8);
}catch (e43947){var cr43868_exception = e43947;
(cr43868_state[(0)] = null);

(cr43868_state[(2)] = null);

throw cr43868_exception;
}});
var cr43868_block_12 = (function contrib$missionary_contrib$seq_consumer_$_cr43868_block_12(cr43868_state){
try{var cr43868_place_6 = (cr43868_state[(2)]);
(cr43868_state[(0)] = null);

(cr43868_state[(2)] = null);

return cr43868_place_6;
}catch (e43953){var cr43868_exception = e43953;
(cr43868_state[(0)] = null);

(cr43868_state[(2)] = null);

throw cr43868_exception;
}});
var cr43868_block_5 = (function contrib$missionary_contrib$seq_consumer_$_cr43868_block_5(cr43868_state){
try{var cr43868_place_10 = (1);
var cr43868_place_11 = missionary.core.seed;
var cr43868_place_12 = cljs.core.range;
var cr43868_place_13 = (2);
var cr43868_place_14 = (function (){var G__43958 = cr43868_place_13;
var fexpr__43957 = cr43868_place_12;
return (fexpr__43957.cljs$core$IFn$_invoke$arity$1 ? fexpr__43957.cljs$core$IFn$_invoke$arity$1(G__43958) : fexpr__43957.call(null,G__43958));
})();
var cr43868_place_15 = (function (){var G__43960 = cr43868_place_14;
var fexpr__43959 = cr43868_place_11;
return (fexpr__43959.cljs$core$IFn$_invoke$arity$1 ? fexpr__43959.cljs$core$IFn$_invoke$arity$1(G__43960) : fexpr__43959.call(null,G__43960));
})();
(cr43868_state[(0)] = cr43868_block_6);

return missionary.core.fork(cr43868_place_10,cr43868_place_15);
}catch (e43955){var cr43868_exception = e43955;
(cr43868_state[(0)] = null);

(cr43868_state[(1)] = null);

(cr43868_state[(2)] = null);

throw cr43868_exception;
}});
var cr43868_block_0 = (function contrib$missionary_contrib$seq_consumer_$_cr43868_block_0(cr43868_state){
try{var cr43868_place_0 = xs;
(cr43868_state[(0)] = cr43868_block_1);

(cr43868_state[(1)] = cr43868_place_0);

return cr43868_state;
}catch (e43963){var cr43868_exception = e43963;
(cr43868_state[(0)] = null);

throw cr43868_exception;
}});
var cr43868_block_7 = (function contrib$missionary_contrib$seq_consumer_$_cr43868_block_7(cr43868_state){
try{var cr43868_place_0 = (cr43868_state[(1)]);
var cr43868_place_19 = missionary.core.via_call;
var cr43868_place_20 = missionary.core.blk;
var cr43868_place_21 = (function (){
return cljs.core.first(cr43868_place_0);
});
var cr43868_place_22 = (function (){var G__43970 = cr43868_place_20;
var G__43971 = cr43868_place_21;
var fexpr__43969 = cr43868_place_19;
return (fexpr__43969.cljs$core$IFn$_invoke$arity$2 ? fexpr__43969.cljs$core$IFn$_invoke$arity$2(G__43970,G__43971) : fexpr__43969.call(null,G__43970,G__43971));
})();
(cr43868_state[(0)] = cr43868_block_8);

(cr43868_state[(1)] = null);

return missionary.core.park(cr43868_place_22);
}catch (e43966){var cr43868_exception = e43966;
(cr43868_state[(0)] = null);

(cr43868_state[(1)] = null);

(cr43868_state[(2)] = null);

(cr43868_state[(3)] = null);

throw cr43868_exception;
}});
var cr43868_block_2 = (function contrib$missionary_contrib$seq_consumer_$_cr43868_block_2(cr43868_state){
try{var cr43868_place_5 = missionary.core.unpark();
var cr43868_place_6 = null;
if(cljs.core.truth_(cr43868_place_5)){
(cr43868_state[(0)] = cr43868_block_5);

(cr43868_state[(2)] = cr43868_place_6);

return cr43868_state;
} else {
(cr43868_state[(0)] = cr43868_block_3);

(cr43868_state[(1)] = null);

(cr43868_state[(2)] = cr43868_place_6);

return cr43868_state;
}
}catch (e43973){var cr43868_exception = e43973;
(cr43868_state[(0)] = null);

(cr43868_state[(1)] = null);

throw cr43868_exception;
}});
var cr43868_block_10 = (function contrib$missionary_contrib$seq_consumer_$_cr43868_block_10(cr43868_state){
try{var cr43868_place_16 = (cr43868_state[(1)]);
var cr43868_place_27 = "No matching clause: ";
var cr43868_place_28 = cr43868_place_16;
var cr43868_place_29 = [cr43868_place_27,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr43868_place_28)].join('');
var cr43868_place_30 = (new Error(cr43868_place_29));
var cr43868_place_31 = (function(){throw cr43868_place_30})();
(cr43868_state[(0)] = null);

(cr43868_state[(1)] = null);

return null;
}catch (e43979){var cr43868_exception = e43979;
(cr43868_state[(0)] = null);

(cr43868_state[(1)] = null);

throw cr43868_exception;
}});
var cr43868_block_8 = (function contrib$missionary_contrib$seq_consumer_$_cr43868_block_8(cr43868_state){
try{var cr43868_place_23 = missionary.core.unpark();
(cr43868_state[(0)] = cr43868_block_11);

(cr43868_state[(3)] = cr43868_place_23);

return cr43868_state;
}catch (e43981){var cr43868_exception = e43981;
(cr43868_state[(0)] = null);

(cr43868_state[(2)] = null);

(cr43868_state[(3)] = null);

throw cr43868_exception;
}});
var cr43868_block_6 = (function contrib$missionary_contrib$seq_consumer_$_cr43868_block_6(cr43868_state){
try{var cr43868_place_16 = missionary.core.unpark();
var cr43868_place_17 = cr43868_place_16;
var cr43868_place_18 = null;
var G__43983 = cr43868_place_17;
switch (G__43983) {
case (0):
(cr43868_state[(0)] = cr43868_block_7);

(cr43868_state[(3)] = cr43868_place_18);

return cr43868_state;

break;
case (1):
(cr43868_state[(0)] = cr43868_block_9);

(cr43868_state[(2)] = null);

return cr43868_state;

break;
default:
(cr43868_state[(0)] = cr43868_block_10);

(cr43868_state[(1)] = null);

(cr43868_state[(2)] = null);

(cr43868_state[(1)] = cr43868_place_16);

return cr43868_state;

}
}catch (e43982){var cr43868_exception = e43982;
(cr43868_state[(0)] = null);

(cr43868_state[(1)] = null);

(cr43868_state[(2)] = null);

throw cr43868_exception;
}});
var cr43868_block_9 = (function contrib$missionary_contrib$seq_consumer_$_cr43868_block_9(cr43868_state){
try{var cr43868_place_0 = (cr43868_state[(1)]);
var cr43868_place_24 = cljs.core.rest;
var cr43868_place_25 = cr43868_place_0;
var cr43868_place_26 = (function (){var G__43986 = cr43868_place_25;
var fexpr__43985 = cr43868_place_24;
return (fexpr__43985.cljs$core$IFn$_invoke$arity$1 ? fexpr__43985.cljs$core$IFn$_invoke$arity$1(G__43986) : fexpr__43985.call(null,G__43986));
})();
(cr43868_state[(0)] = cr43868_block_1);

(cr43868_state[(1)] = cr43868_place_26);

return cr43868_state;
}catch (e43984){var cr43868_exception = e43984;
(cr43868_state[(0)] = null);

(cr43868_state[(1)] = null);

throw cr43868_exception;
}});
var cr43868_block_11 = (function contrib$missionary_contrib$seq_consumer_$_cr43868_block_11(cr43868_state){
try{var cr43868_place_18 = (cr43868_state[(3)]);
(cr43868_state[(0)] = cr43868_block_12);

(cr43868_state[(3)] = null);

(cr43868_state[(2)] = cr43868_place_18);

return cr43868_state;
}catch (e43987){var cr43868_exception = e43987;
(cr43868_state[(0)] = null);

(cr43868_state[(2)] = null);

(cr43868_state[(3)] = null);

throw cr43868_exception;
}});
var cr43868_block_1 = (function contrib$missionary_contrib$seq_consumer_$_cr43868_block_1(cr43868_state){
try{var cr43868_place_0 = (cr43868_state[(1)]);
var cr43868_place_1 = missionary.core.via_call;
var cr43868_place_2 = missionary.core.blk;
var cr43868_place_3 = (function (){
return cljs.core.seq(cr43868_place_0);
});
var cr43868_place_4 = (function (){var G__43995 = cr43868_place_2;
var G__43996 = cr43868_place_3;
var fexpr__43994 = cr43868_place_1;
return (fexpr__43994.cljs$core$IFn$_invoke$arity$2 ? fexpr__43994.cljs$core$IFn$_invoke$arity$2(G__43995,G__43996) : fexpr__43994.call(null,G__43995,G__43996));
})();
(cr43868_state[(0)] = cr43868_block_2);

return missionary.core.park(cr43868_place_4);
}catch (e43989){var cr43868_exception = e43989;
(cr43868_state[(0)] = null);

(cr43868_state[(1)] = null);

throw cr43868_exception;
}});
return cloroutine.impl.coroutine((function (){var G__43998 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((4));
(G__43998[(0)] = cr43868_block_0);

return G__43998;
})());
})(),missionary.core.ap_run);
});
/**
 * derive discrete flow from succession of polled values from a task (or mbox)
 */
contrib.missionary_contrib.poll_task = (function contrib$missionary_contrib$poll_task(task){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44000_block_0 = (function contrib$missionary_contrib$poll_task_$_cr44000_block_0(cr44000_state){
try{var cr44000_place_0 = task;
(cr44000_state[(0)] = cr44000_block_1);

return missionary.core.park(cr44000_place_0);
}catch (e44041){var cr44000_exception = e44041;
(cr44000_state[(0)] = null);

throw cr44000_exception;
}});
var cr44000_block_7 = (function contrib$missionary_contrib$poll_task_$_cr44000_block_7(cr44000_state){
try{var cr44000_place_8 = (cr44000_state[(1)]);
var cr44000_place_14 = "No matching clause: ";
var cr44000_place_15 = cr44000_place_8;
var cr44000_place_16 = [cr44000_place_14,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44000_place_15)].join('');
var cr44000_place_17 = (new Error(cr44000_place_16));
var cr44000_place_18 = (function(){throw cr44000_place_17})();
(cr44000_state[(0)] = null);

(cr44000_state[(1)] = null);

return null;
}catch (e44047){var cr44000_exception = e44047;
(cr44000_state[(0)] = null);

(cr44000_state[(1)] = null);

throw cr44000_exception;
}});
var cr44000_block_4 = (function contrib$missionary_contrib$poll_task_$_cr44000_block_4(cr44000_state){
try{var cr44000_place_1 = (cr44000_state[(1)]);
var cr44000_place_11 = cr44000_place_1;
(cr44000_state[(0)] = cr44000_block_8);

(cr44000_state[(1)] = null);

(cr44000_state[(2)] = cr44000_place_11);

return cr44000_state;
}catch (e44055){var cr44000_exception = e44055;
(cr44000_state[(0)] = null);

(cr44000_state[(1)] = null);

(cr44000_state[(2)] = null);

throw cr44000_exception;
}});
var cr44000_block_1 = (function contrib$missionary_contrib$poll_task_$_cr44000_block_1(cr44000_state){
try{var cr44000_place_1 = missionary.core.unpark();
(cr44000_state[(0)] = cr44000_block_2);

(cr44000_state[(1)] = cr44000_place_1);

return cr44000_state;
}catch (e44059){var cr44000_exception = e44059;
(cr44000_state[(0)] = null);

throw cr44000_exception;
}});
var cr44000_block_6 = (function contrib$missionary_contrib$poll_task_$_cr44000_block_6(cr44000_state){
try{var cr44000_place_13 = missionary.core.unpark();
(cr44000_state[(0)] = cr44000_block_2);

(cr44000_state[(1)] = cr44000_place_13);

return cr44000_state;
}catch (e44060){var cr44000_exception = e44060;
(cr44000_state[(0)] = null);

(cr44000_state[(1)] = null);

throw cr44000_exception;
}});
var cr44000_block_5 = (function contrib$missionary_contrib$poll_task_$_cr44000_block_5(cr44000_state){
try{var cr44000_place_12 = task;
(cr44000_state[(0)] = cr44000_block_6);

return missionary.core.park(cr44000_place_12);
}catch (e44063){var cr44000_exception = e44063;
(cr44000_state[(0)] = null);

(cr44000_state[(1)] = null);

throw cr44000_exception;
}});
var cr44000_block_2 = (function contrib$missionary_contrib$poll_task_$_cr44000_block_2(cr44000_state){
try{var cr44000_place_2 = (1);
var cr44000_place_3 = missionary.core.seed;
var cr44000_place_4 = cljs.core.range;
var cr44000_place_5 = (2);
var cr44000_place_6 = (function (){var G__44075 = cr44000_place_5;
var fexpr__44074 = cr44000_place_4;
return (fexpr__44074.cljs$core$IFn$_invoke$arity$1 ? fexpr__44074.cljs$core$IFn$_invoke$arity$1(G__44075) : fexpr__44074.call(null,G__44075));
})();
var cr44000_place_7 = (function (){var G__44078 = cr44000_place_6;
var fexpr__44077 = cr44000_place_3;
return (fexpr__44077.cljs$core$IFn$_invoke$arity$1 ? fexpr__44077.cljs$core$IFn$_invoke$arity$1(G__44078) : fexpr__44077.call(null,G__44078));
})();
(cr44000_state[(0)] = cr44000_block_3);

return missionary.core.fork(cr44000_place_2,cr44000_place_7);
}catch (e44069){var cr44000_exception = e44069;
(cr44000_state[(0)] = null);

(cr44000_state[(1)] = null);

throw cr44000_exception;
}});
var cr44000_block_8 = (function contrib$missionary_contrib$poll_task_$_cr44000_block_8(cr44000_state){
try{var cr44000_place_10 = (cr44000_state[(2)]);
(cr44000_state[(0)] = null);

(cr44000_state[(2)] = null);

return cr44000_place_10;
}catch (e44079){var cr44000_exception = e44079;
(cr44000_state[(0)] = null);

(cr44000_state[(2)] = null);

throw cr44000_exception;
}});
var cr44000_block_3 = (function contrib$missionary_contrib$poll_task_$_cr44000_block_3(cr44000_state){
try{var cr44000_place_8 = missionary.core.unpark();
var cr44000_place_9 = cr44000_place_8;
var cr44000_place_10 = null;
var G__44089 = cr44000_place_9;
switch (G__44089) {
case (0):
(cr44000_state[(0)] = cr44000_block_4);

(cr44000_state[(2)] = cr44000_place_10);

return cr44000_state;

break;
case (1):
(cr44000_state[(0)] = cr44000_block_5);

return cr44000_state;

break;
default:
(cr44000_state[(0)] = cr44000_block_7);

(cr44000_state[(1)] = null);

(cr44000_state[(1)] = cr44000_place_8);

return cr44000_state;

}
}catch (e44086){var cr44000_exception = e44086;
(cr44000_state[(0)] = null);

(cr44000_state[(1)] = null);

throw cr44000_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44091 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__44091[(0)] = cr44000_block_0);

return G__44091;
})());
})(),missionary.core.ap_run);
});
/**
 * compare (document log) to (d/entity db eid). if a datomic txn is [op eid a v], 
 * log here is [op a v], or in other words, there is only one entity (the `eid` is 
 * constant) so we are left with not an entity but a document.
 */
contrib.missionary_contrib.document = (function contrib$missionary_contrib$document(_GT_txs){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3((function (m,p__44094){
var vec__44095 = p__44094;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44095,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44095,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44095,(2),null);
var G__44099 = op;
var G__44099__$1 = (((G__44099 instanceof cljs.core.Keyword))?G__44099.fqn:null);
switch (G__44099__$1) {
case "contrib.missionary-contrib/add":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,a,v);

break;
case "contrib.missionary-contrib/retract":
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,a);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44099__$1)].join('')));

}
}),cljs.core.PersistentArrayMap.EMPTY,_GT_txs);
});

//# sourceMappingURL=contrib.missionary_contrib.js.map
