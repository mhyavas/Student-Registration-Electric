goog.provide('contrib.missionary_contrib');
contrib.missionary_contrib.mix = (function contrib$missionary_contrib$mix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45460 = arguments.length;
var i__5770__auto___45461 = (0);
while(true){
if((i__5770__auto___45461 < len__5769__auto___45460)){
args__5775__auto__.push((arguments[i__5770__auto___45461]));

var G__45463 = (i__5770__auto___45461 + (1));
i__5770__auto___45461 = G__45463;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return contrib.missionary_contrib.mix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(contrib.missionary_contrib.mix.cljs$core$IFn$_invoke$arity$variadic = (function (flows){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr45066_block_0 = (function contrib$missionary_contrib$cr45066_block_0(cr45066_state){
try{var cr45066_place_0 = (1);
var cr45066_place_1 = cljs.core.count;
var cr45066_place_2 = flows;
var cr45066_place_3 = (function (){var G__45091 = cr45066_place_2;
var fexpr__45090 = cr45066_place_1;
return (fexpr__45090.cljs$core$IFn$_invoke$arity$1 ? fexpr__45090.cljs$core$IFn$_invoke$arity$1(G__45091) : fexpr__45090.call(null,G__45091));
})();
var cr45066_place_4 = missionary.core.seed;
var cr45066_place_5 = flows;
var cr45066_place_6 = (function (){var G__45093 = cr45066_place_5;
var fexpr__45092 = cr45066_place_4;
return (fexpr__45092.cljs$core$IFn$_invoke$arity$1 ? fexpr__45092.cljs$core$IFn$_invoke$arity$1(G__45093) : fexpr__45092.call(null,G__45093));
})();
(cr45066_state[(0)] = cr45066_block_1);

(cr45066_state[(1)] = cr45066_place_0);

return missionary.core.fork(cr45066_place_3,cr45066_place_6);
}catch (e45089){var cr45066_exception = e45089;
(cr45066_state[(0)] = null);

throw cr45066_exception;
}});
var cr45066_block_1 = (function contrib$missionary_contrib$cr45066_block_1(cr45066_state){
try{var cr45066_place_0 = (cr45066_state[(1)]);
var cr45066_place_7 = missionary.core.unpark();
(cr45066_state[(0)] = cr45066_block_2);

(cr45066_state[(1)] = null);

return missionary.core.fork(cr45066_place_0,cr45066_place_7);
}catch (e45095){var cr45066_exception = e45095;
(cr45066_state[(0)] = null);

(cr45066_state[(1)] = null);

throw cr45066_exception;
}});
var cr45066_block_2 = (function contrib$missionary_contrib$cr45066_block_2(cr45066_state){
try{var cr45066_place_8 = missionary.core.unpark();
(cr45066_state[(0)] = null);

return cr45066_place_8;
}catch (e45097){var cr45066_exception = e45097;
(cr45066_state[(0)] = null);

throw cr45066_exception;
}});
return cloroutine.impl.coroutine((function (){var G__45098 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__45098[(0)] = cr45066_block_0);

return G__45098;
})());
})(),missionary.core.ap_run);
}));

(contrib.missionary_contrib.mix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(contrib.missionary_contrib.mix.cljs$lang$applyTo = (function (seq45064){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45064));
}));

/**
 * blocking iterable pattern
 */
contrib.missionary_contrib.iterator_consumer = (function contrib$missionary_contrib$iterator_consumer(it){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr45102_block_8 = (function contrib$missionary_contrib$iterator_consumer_$_cr45102_block_8(cr45102_state){
try{var cr45102_place_22 = missionary.core.unpark();
(cr45102_state[(0)] = cr45102_block_11);

(cr45102_state[(2)] = cr45102_place_22);

return cr45102_state;
}catch (e45215){var cr45102_exception = e45215;
(cr45102_state[(0)] = null);

(cr45102_state[(2)] = null);

(cr45102_state[(1)] = null);

throw cr45102_exception;
}});
var cr45102_block_6 = (function contrib$missionary_contrib$iterator_consumer_$_cr45102_block_6(cr45102_state){
try{var cr45102_place_15 = missionary.core.unpark();
var cr45102_place_16 = cr45102_place_15;
var cr45102_place_17 = null;
var G__45220 = cr45102_place_16;
switch (G__45220) {
case (0):
(cr45102_state[(0)] = cr45102_block_7);

(cr45102_state[(2)] = cr45102_place_17);

return cr45102_state;

break;
case (1):
(cr45102_state[(0)] = cr45102_block_9);

(cr45102_state[(1)] = null);

return cr45102_state;

break;
default:
(cr45102_state[(0)] = cr45102_block_10);

(cr45102_state[(1)] = null);

(cr45102_state[(1)] = cr45102_place_15);

return cr45102_state;

}
}catch (e45217){var cr45102_exception = e45217;
(cr45102_state[(0)] = null);

(cr45102_state[(1)] = null);

throw cr45102_exception;
}});
var cr45102_block_3 = (function contrib$missionary_contrib$iterator_consumer_$_cr45102_block_3(cr45102_state){
try{var cr45102_place_6 = (1);
var cr45102_place_7 = missionary.core.none;
(cr45102_state[(0)] = cr45102_block_4);

return missionary.core.fork(cr45102_place_6,cr45102_place_7);
}catch (e45222){var cr45102_exception = e45222;
(cr45102_state[(0)] = null);

(cr45102_state[(1)] = null);

throw cr45102_exception;
}});
var cr45102_block_11 = (function contrib$missionary_contrib$iterator_consumer_$_cr45102_block_11(cr45102_state){
try{var cr45102_place_17 = (cr45102_state[(2)]);
(cr45102_state[(0)] = cr45102_block_12);

(cr45102_state[(2)] = null);

(cr45102_state[(1)] = cr45102_place_17);

return cr45102_state;
}catch (e45223){var cr45102_exception = e45223;
(cr45102_state[(0)] = null);

(cr45102_state[(2)] = null);

(cr45102_state[(1)] = null);

throw cr45102_exception;
}});
var cr45102_block_2 = (function contrib$missionary_contrib$iterator_consumer_$_cr45102_block_2(cr45102_state){
try{var cr45102_place_4 = missionary.core.unpark();
var cr45102_place_5 = null;
if(cljs.core.truth_(cr45102_place_4)){
(cr45102_state[(0)] = cr45102_block_5);

(cr45102_state[(1)] = cr45102_place_5);

return cr45102_state;
} else {
(cr45102_state[(0)] = cr45102_block_3);

(cr45102_state[(1)] = cr45102_place_5);

return cr45102_state;
}
}catch (e45224){var cr45102_exception = e45224;
(cr45102_state[(0)] = null);

throw cr45102_exception;
}});
var cr45102_block_0 = (function contrib$missionary_contrib$iterator_consumer_$_cr45102_block_0(cr45102_state){
try{(cr45102_state[(0)] = cr45102_block_1);

return cr45102_state;
}catch (e45225){var cr45102_exception = e45225;
(cr45102_state[(0)] = null);

throw cr45102_exception;
}});
var cr45102_block_7 = (function contrib$missionary_contrib$iterator_consumer_$_cr45102_block_7(cr45102_state){
try{var cr45102_place_18 = missionary.core.via_call;
var cr45102_place_19 = missionary.core.blk;
var cr45102_place_20 = (function (){
return it.next();
});
var cr45102_place_21 = (function (){var G__45232 = cr45102_place_19;
var G__45233 = cr45102_place_20;
var fexpr__45231 = cr45102_place_18;
return (fexpr__45231.cljs$core$IFn$_invoke$arity$2 ? fexpr__45231.cljs$core$IFn$_invoke$arity$2(G__45232,G__45233) : fexpr__45231.call(null,G__45232,G__45233));
})();
(cr45102_state[(0)] = cr45102_block_8);

return missionary.core.park(cr45102_place_21);
}catch (e45230){var cr45102_exception = e45230;
(cr45102_state[(0)] = null);

(cr45102_state[(2)] = null);

(cr45102_state[(1)] = null);

throw cr45102_exception;
}});
var cr45102_block_5 = (function contrib$missionary_contrib$iterator_consumer_$_cr45102_block_5(cr45102_state){
try{var cr45102_place_9 = (1);
var cr45102_place_10 = missionary.core.seed;
var cr45102_place_11 = cljs.core.range;
var cr45102_place_12 = (2);
var cr45102_place_13 = (function (){var G__45236 = cr45102_place_12;
var fexpr__45235 = cr45102_place_11;
return (fexpr__45235.cljs$core$IFn$_invoke$arity$1 ? fexpr__45235.cljs$core$IFn$_invoke$arity$1(G__45236) : fexpr__45235.call(null,G__45236));
})();
var cr45102_place_14 = (function (){var G__45238 = cr45102_place_13;
var fexpr__45237 = cr45102_place_10;
return (fexpr__45237.cljs$core$IFn$_invoke$arity$1 ? fexpr__45237.cljs$core$IFn$_invoke$arity$1(G__45238) : fexpr__45237.call(null,G__45238));
})();
(cr45102_state[(0)] = cr45102_block_6);

return missionary.core.fork(cr45102_place_9,cr45102_place_14);
}catch (e45234){var cr45102_exception = e45234;
(cr45102_state[(0)] = null);

(cr45102_state[(1)] = null);

throw cr45102_exception;
}});
var cr45102_block_12 = (function contrib$missionary_contrib$iterator_consumer_$_cr45102_block_12(cr45102_state){
try{var cr45102_place_5 = (cr45102_state[(1)]);
(cr45102_state[(0)] = null);

(cr45102_state[(1)] = null);

return cr45102_place_5;
}catch (e45239){var cr45102_exception = e45239;
(cr45102_state[(0)] = null);

(cr45102_state[(1)] = null);

throw cr45102_exception;
}});
var cr45102_block_9 = (function contrib$missionary_contrib$iterator_consumer_$_cr45102_block_9(cr45102_state){
try{(cr45102_state[(0)] = cr45102_block_1);

return cr45102_state;
}catch (e45240){var cr45102_exception = e45240;
(cr45102_state[(0)] = null);

throw cr45102_exception;
}});
var cr45102_block_4 = (function contrib$missionary_contrib$iterator_consumer_$_cr45102_block_4(cr45102_state){
try{var cr45102_place_8 = missionary.core.unpark();
(cr45102_state[(0)] = cr45102_block_12);

(cr45102_state[(1)] = cr45102_place_8);

return cr45102_state;
}catch (e45241){var cr45102_exception = e45241;
(cr45102_state[(0)] = null);

(cr45102_state[(1)] = null);

throw cr45102_exception;
}});
var cr45102_block_10 = (function contrib$missionary_contrib$iterator_consumer_$_cr45102_block_10(cr45102_state){
try{var cr45102_place_15 = (cr45102_state[(1)]);
var cr45102_place_23 = "No matching clause: ";
var cr45102_place_24 = cr45102_place_15;
var cr45102_place_25 = [cr45102_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr45102_place_24)].join('');
var cr45102_place_26 = (new Error(cr45102_place_25));
var cr45102_place_27 = (function(){throw cr45102_place_26})();
(cr45102_state[(0)] = null);

(cr45102_state[(1)] = null);

return null;
}catch (e45242){var cr45102_exception = e45242;
(cr45102_state[(0)] = null);

(cr45102_state[(1)] = null);

throw cr45102_exception;
}});
var cr45102_block_1 = (function contrib$missionary_contrib$iterator_consumer_$_cr45102_block_1(cr45102_state){
try{var cr45102_place_0 = missionary.core.via_call;
var cr45102_place_1 = missionary.core.blk;
var cr45102_place_2 = (function (){
return it.hasNext();
});
var cr45102_place_3 = (function (){var G__45245 = cr45102_place_1;
var G__45246 = cr45102_place_2;
var fexpr__45244 = cr45102_place_0;
return (fexpr__45244.cljs$core$IFn$_invoke$arity$2 ? fexpr__45244.cljs$core$IFn$_invoke$arity$2(G__45245,G__45246) : fexpr__45244.call(null,G__45245,G__45246));
})();
(cr45102_state[(0)] = cr45102_block_2);

return missionary.core.park(cr45102_place_3);
}catch (e45243){var cr45102_exception = e45243;
(cr45102_state[(0)] = null);

throw cr45102_exception;
}});
return cloroutine.impl.coroutine((function (){var G__45249 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__45249[(0)] = cr45102_block_0);

return G__45249;
})());
})(),missionary.core.ap_run);
});
contrib.missionary_contrib.seq_consumer = (function contrib$missionary_contrib$seq_consumer(xs){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr45250_block_9 = (function contrib$missionary_contrib$seq_consumer_$_cr45250_block_9(cr45250_state){
try{var cr45250_place_0 = (cr45250_state[(1)]);
var cr45250_place_24 = cljs.core.rest;
var cr45250_place_25 = cr45250_place_0;
var cr45250_place_26 = (function (){var G__45285 = cr45250_place_25;
var fexpr__45284 = cr45250_place_24;
return (fexpr__45284.cljs$core$IFn$_invoke$arity$1 ? fexpr__45284.cljs$core$IFn$_invoke$arity$1(G__45285) : fexpr__45284.call(null,G__45285));
})();
(cr45250_state[(0)] = cr45250_block_1);

(cr45250_state[(1)] = cr45250_place_26);

return cr45250_state;
}catch (e45283){var cr45250_exception = e45283;
(cr45250_state[(0)] = null);

(cr45250_state[(1)] = null);

throw cr45250_exception;
}});
var cr45250_block_1 = (function contrib$missionary_contrib$seq_consumer_$_cr45250_block_1(cr45250_state){
try{var cr45250_place_0 = (cr45250_state[(1)]);
var cr45250_place_1 = missionary.core.via_call;
var cr45250_place_2 = missionary.core.blk;
var cr45250_place_3 = (function (){
return cljs.core.seq(cr45250_place_0);
});
var cr45250_place_4 = (function (){var G__45288 = cr45250_place_2;
var G__45289 = cr45250_place_3;
var fexpr__45287 = cr45250_place_1;
return (fexpr__45287.cljs$core$IFn$_invoke$arity$2 ? fexpr__45287.cljs$core$IFn$_invoke$arity$2(G__45288,G__45289) : fexpr__45287.call(null,G__45288,G__45289));
})();
(cr45250_state[(0)] = cr45250_block_2);

return missionary.core.park(cr45250_place_4);
}catch (e45286){var cr45250_exception = e45286;
(cr45250_state[(0)] = null);

(cr45250_state[(1)] = null);

throw cr45250_exception;
}});
var cr45250_block_8 = (function contrib$missionary_contrib$seq_consumer_$_cr45250_block_8(cr45250_state){
try{var cr45250_place_23 = missionary.core.unpark();
(cr45250_state[(0)] = cr45250_block_11);

(cr45250_state[(3)] = cr45250_place_23);

return cr45250_state;
}catch (e45294){var cr45250_exception = e45294;
(cr45250_state[(0)] = null);

(cr45250_state[(2)] = null);

(cr45250_state[(3)] = null);

throw cr45250_exception;
}});
var cr45250_block_2 = (function contrib$missionary_contrib$seq_consumer_$_cr45250_block_2(cr45250_state){
try{var cr45250_place_5 = missionary.core.unpark();
var cr45250_place_6 = null;
if(cljs.core.truth_(cr45250_place_5)){
(cr45250_state[(0)] = cr45250_block_5);

(cr45250_state[(2)] = cr45250_place_6);

return cr45250_state;
} else {
(cr45250_state[(0)] = cr45250_block_3);

(cr45250_state[(1)] = null);

(cr45250_state[(2)] = cr45250_place_6);

return cr45250_state;
}
}catch (e45296){var cr45250_exception = e45296;
(cr45250_state[(0)] = null);

(cr45250_state[(1)] = null);

throw cr45250_exception;
}});
var cr45250_block_12 = (function contrib$missionary_contrib$seq_consumer_$_cr45250_block_12(cr45250_state){
try{var cr45250_place_6 = (cr45250_state[(2)]);
(cr45250_state[(0)] = null);

(cr45250_state[(2)] = null);

return cr45250_place_6;
}catch (e45299){var cr45250_exception = e45299;
(cr45250_state[(0)] = null);

(cr45250_state[(2)] = null);

throw cr45250_exception;
}});
var cr45250_block_3 = (function contrib$missionary_contrib$seq_consumer_$_cr45250_block_3(cr45250_state){
try{var cr45250_place_7 = (1);
var cr45250_place_8 = missionary.core.none;
(cr45250_state[(0)] = cr45250_block_4);

return missionary.core.fork(cr45250_place_7,cr45250_place_8);
}catch (e45300){var cr45250_exception = e45300;
(cr45250_state[(0)] = null);

(cr45250_state[(2)] = null);

throw cr45250_exception;
}});
var cr45250_block_0 = (function contrib$missionary_contrib$seq_consumer_$_cr45250_block_0(cr45250_state){
try{var cr45250_place_0 = xs;
(cr45250_state[(0)] = cr45250_block_1);

(cr45250_state[(1)] = cr45250_place_0);

return cr45250_state;
}catch (e45301){var cr45250_exception = e45301;
(cr45250_state[(0)] = null);

throw cr45250_exception;
}});
var cr45250_block_4 = (function contrib$missionary_contrib$seq_consumer_$_cr45250_block_4(cr45250_state){
try{var cr45250_place_9 = missionary.core.unpark();
(cr45250_state[(0)] = cr45250_block_12);

(cr45250_state[(2)] = cr45250_place_9);

return cr45250_state;
}catch (e45318){var cr45250_exception = e45318;
(cr45250_state[(0)] = null);

(cr45250_state[(2)] = null);

throw cr45250_exception;
}});
var cr45250_block_5 = (function contrib$missionary_contrib$seq_consumer_$_cr45250_block_5(cr45250_state){
try{var cr45250_place_10 = (1);
var cr45250_place_11 = missionary.core.seed;
var cr45250_place_12 = cljs.core.range;
var cr45250_place_13 = (2);
var cr45250_place_14 = (function (){var G__45329 = cr45250_place_13;
var fexpr__45328 = cr45250_place_12;
return (fexpr__45328.cljs$core$IFn$_invoke$arity$1 ? fexpr__45328.cljs$core$IFn$_invoke$arity$1(G__45329) : fexpr__45328.call(null,G__45329));
})();
var cr45250_place_15 = (function (){var G__45331 = cr45250_place_14;
var fexpr__45330 = cr45250_place_11;
return (fexpr__45330.cljs$core$IFn$_invoke$arity$1 ? fexpr__45330.cljs$core$IFn$_invoke$arity$1(G__45331) : fexpr__45330.call(null,G__45331));
})();
(cr45250_state[(0)] = cr45250_block_6);

return missionary.core.fork(cr45250_place_10,cr45250_place_15);
}catch (e45319){var cr45250_exception = e45319;
(cr45250_state[(0)] = null);

(cr45250_state[(2)] = null);

(cr45250_state[(1)] = null);

throw cr45250_exception;
}});
var cr45250_block_10 = (function contrib$missionary_contrib$seq_consumer_$_cr45250_block_10(cr45250_state){
try{var cr45250_place_16 = (cr45250_state[(1)]);
var cr45250_place_27 = "No matching clause: ";
var cr45250_place_28 = cr45250_place_16;
var cr45250_place_29 = [cr45250_place_27,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr45250_place_28)].join('');
var cr45250_place_30 = (new Error(cr45250_place_29));
var cr45250_place_31 = (function(){throw cr45250_place_30})();
(cr45250_state[(0)] = null);

(cr45250_state[(1)] = null);

return null;
}catch (e45332){var cr45250_exception = e45332;
(cr45250_state[(0)] = null);

(cr45250_state[(1)] = null);

throw cr45250_exception;
}});
var cr45250_block_6 = (function contrib$missionary_contrib$seq_consumer_$_cr45250_block_6(cr45250_state){
try{var cr45250_place_16 = missionary.core.unpark();
var cr45250_place_17 = cr45250_place_16;
var cr45250_place_18 = null;
var G__45334 = cr45250_place_17;
switch (G__45334) {
case (0):
(cr45250_state[(0)] = cr45250_block_7);

(cr45250_state[(3)] = cr45250_place_18);

return cr45250_state;

break;
case (1):
(cr45250_state[(0)] = cr45250_block_9);

(cr45250_state[(2)] = null);

return cr45250_state;

break;
default:
(cr45250_state[(0)] = cr45250_block_10);

(cr45250_state[(2)] = null);

(cr45250_state[(1)] = null);

(cr45250_state[(1)] = cr45250_place_16);

return cr45250_state;

}
}catch (e45333){var cr45250_exception = e45333;
(cr45250_state[(0)] = null);

(cr45250_state[(2)] = null);

(cr45250_state[(1)] = null);

throw cr45250_exception;
}});
var cr45250_block_11 = (function contrib$missionary_contrib$seq_consumer_$_cr45250_block_11(cr45250_state){
try{var cr45250_place_18 = (cr45250_state[(3)]);
(cr45250_state[(0)] = cr45250_block_12);

(cr45250_state[(3)] = null);

(cr45250_state[(2)] = cr45250_place_18);

return cr45250_state;
}catch (e45335){var cr45250_exception = e45335;
(cr45250_state[(0)] = null);

(cr45250_state[(2)] = null);

(cr45250_state[(3)] = null);

throw cr45250_exception;
}});
var cr45250_block_7 = (function contrib$missionary_contrib$seq_consumer_$_cr45250_block_7(cr45250_state){
try{var cr45250_place_0 = (cr45250_state[(1)]);
var cr45250_place_19 = missionary.core.via_call;
var cr45250_place_20 = missionary.core.blk;
var cr45250_place_21 = (function (){
return cljs.core.first(cr45250_place_0);
});
var cr45250_place_22 = (function (){var G__45358 = cr45250_place_20;
var G__45359 = cr45250_place_21;
var fexpr__45357 = cr45250_place_19;
return (fexpr__45357.cljs$core$IFn$_invoke$arity$2 ? fexpr__45357.cljs$core$IFn$_invoke$arity$2(G__45358,G__45359) : fexpr__45357.call(null,G__45358,G__45359));
})();
(cr45250_state[(0)] = cr45250_block_8);

(cr45250_state[(1)] = null);

return missionary.core.park(cr45250_place_22);
}catch (e45355){var cr45250_exception = e45355;
(cr45250_state[(0)] = null);

(cr45250_state[(2)] = null);

(cr45250_state[(3)] = null);

(cr45250_state[(1)] = null);

throw cr45250_exception;
}});
return cloroutine.impl.coroutine((function (){var G__45361 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((4));
(G__45361[(0)] = cr45250_block_0);

return G__45361;
})());
})(),missionary.core.ap_run);
});
/**
 * derive discrete flow from succession of polled values from a task (or mbox)
 */
contrib.missionary_contrib.poll_task = (function contrib$missionary_contrib$poll_task(task){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr45362_block_6 = (function contrib$missionary_contrib$poll_task_$_cr45362_block_6(cr45362_state){
try{var cr45362_place_13 = missionary.core.unpark();
(cr45362_state[(0)] = cr45362_block_2);

(cr45362_state[(1)] = cr45362_place_13);

return cr45362_state;
}catch (e45382){var cr45362_exception = e45382;
(cr45362_state[(0)] = null);

(cr45362_state[(1)] = null);

throw cr45362_exception;
}});
var cr45362_block_5 = (function contrib$missionary_contrib$poll_task_$_cr45362_block_5(cr45362_state){
try{var cr45362_place_12 = task;
(cr45362_state[(0)] = cr45362_block_6);

return missionary.core.park(cr45362_place_12);
}catch (e45383){var cr45362_exception = e45383;
(cr45362_state[(0)] = null);

(cr45362_state[(1)] = null);

throw cr45362_exception;
}});
var cr45362_block_4 = (function contrib$missionary_contrib$poll_task_$_cr45362_block_4(cr45362_state){
try{var cr45362_place_1 = (cr45362_state[(1)]);
var cr45362_place_11 = cr45362_place_1;
(cr45362_state[(0)] = cr45362_block_8);

(cr45362_state[(1)] = null);

(cr45362_state[(2)] = cr45362_place_11);

return cr45362_state;
}catch (e45385){var cr45362_exception = e45385;
(cr45362_state[(0)] = null);

(cr45362_state[(2)] = null);

(cr45362_state[(1)] = null);

throw cr45362_exception;
}});
var cr45362_block_1 = (function contrib$missionary_contrib$poll_task_$_cr45362_block_1(cr45362_state){
try{var cr45362_place_1 = missionary.core.unpark();
(cr45362_state[(0)] = cr45362_block_2);

(cr45362_state[(1)] = cr45362_place_1);

return cr45362_state;
}catch (e45389){var cr45362_exception = e45389;
(cr45362_state[(0)] = null);

throw cr45362_exception;
}});
var cr45362_block_2 = (function contrib$missionary_contrib$poll_task_$_cr45362_block_2(cr45362_state){
try{var cr45362_place_2 = (1);
var cr45362_place_3 = missionary.core.seed;
var cr45362_place_4 = cljs.core.range;
var cr45362_place_5 = (2);
var cr45362_place_6 = (function (){var G__45392 = cr45362_place_5;
var fexpr__45391 = cr45362_place_4;
return (fexpr__45391.cljs$core$IFn$_invoke$arity$1 ? fexpr__45391.cljs$core$IFn$_invoke$arity$1(G__45392) : fexpr__45391.call(null,G__45392));
})();
var cr45362_place_7 = (function (){var G__45394 = cr45362_place_6;
var fexpr__45393 = cr45362_place_3;
return (fexpr__45393.cljs$core$IFn$_invoke$arity$1 ? fexpr__45393.cljs$core$IFn$_invoke$arity$1(G__45394) : fexpr__45393.call(null,G__45394));
})();
(cr45362_state[(0)] = cr45362_block_3);

return missionary.core.fork(cr45362_place_2,cr45362_place_7);
}catch (e45390){var cr45362_exception = e45390;
(cr45362_state[(0)] = null);

(cr45362_state[(1)] = null);

throw cr45362_exception;
}});
var cr45362_block_7 = (function contrib$missionary_contrib$poll_task_$_cr45362_block_7(cr45362_state){
try{var cr45362_place_8 = (cr45362_state[(1)]);
var cr45362_place_14 = "No matching clause: ";
var cr45362_place_15 = cr45362_place_8;
var cr45362_place_16 = [cr45362_place_14,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr45362_place_15)].join('');
var cr45362_place_17 = (new Error(cr45362_place_16));
var cr45362_place_18 = (function(){throw cr45362_place_17})();
(cr45362_state[(0)] = null);

(cr45362_state[(1)] = null);

return null;
}catch (e45395){var cr45362_exception = e45395;
(cr45362_state[(0)] = null);

(cr45362_state[(1)] = null);

throw cr45362_exception;
}});
var cr45362_block_0 = (function contrib$missionary_contrib$poll_task_$_cr45362_block_0(cr45362_state){
try{var cr45362_place_0 = task;
(cr45362_state[(0)] = cr45362_block_1);

return missionary.core.park(cr45362_place_0);
}catch (e45397){var cr45362_exception = e45397;
(cr45362_state[(0)] = null);

throw cr45362_exception;
}});
var cr45362_block_3 = (function contrib$missionary_contrib$poll_task_$_cr45362_block_3(cr45362_state){
try{var cr45362_place_8 = missionary.core.unpark();
var cr45362_place_9 = cr45362_place_8;
var cr45362_place_10 = null;
var G__45416 = cr45362_place_9;
switch (G__45416) {
case (0):
(cr45362_state[(0)] = cr45362_block_4);

(cr45362_state[(2)] = cr45362_place_10);

return cr45362_state;

break;
case (1):
(cr45362_state[(0)] = cr45362_block_5);

return cr45362_state;

break;
default:
(cr45362_state[(0)] = cr45362_block_7);

(cr45362_state[(1)] = null);

(cr45362_state[(1)] = cr45362_place_8);

return cr45362_state;

}
}catch (e45404){var cr45362_exception = e45404;
(cr45362_state[(0)] = null);

(cr45362_state[(1)] = null);

throw cr45362_exception;
}});
var cr45362_block_8 = (function contrib$missionary_contrib$poll_task_$_cr45362_block_8(cr45362_state){
try{var cr45362_place_10 = (cr45362_state[(2)]);
(cr45362_state[(0)] = null);

(cr45362_state[(2)] = null);

return cr45362_place_10;
}catch (e45423){var cr45362_exception = e45423;
(cr45362_state[(0)] = null);

(cr45362_state[(2)] = null);

throw cr45362_exception;
}});
return cloroutine.impl.coroutine((function (){var G__45424 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__45424[(0)] = cr45362_block_0);

return G__45424;
})());
})(),missionary.core.ap_run);
});
/**
 * compare (document log) to (d/entity db eid). if a datomic txn is [op eid a v], 
 * log here is [op a v], or in other words, there is only one entity (the `eid` is 
 * constant) so we are left with not an entity but a document.
 */
contrib.missionary_contrib.document = (function contrib$missionary_contrib$document(_GT_txs){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3((function (m,p__45432){
var vec__45436 = p__45432;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45436,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45436,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45436,(2),null);
var G__45439 = op;
var G__45439__$1 = (((G__45439 instanceof cljs.core.Keyword))?G__45439.fqn:null);
switch (G__45439__$1) {
case "contrib.missionary-contrib/add":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,a,v);

break;
case "contrib.missionary-contrib/retract":
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,a);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45439__$1)].join('')));

}
}),cljs.core.PersistentArrayMap.EMPTY,_GT_txs);
});

//# sourceMappingURL=contrib.missionary_contrib.js.map
