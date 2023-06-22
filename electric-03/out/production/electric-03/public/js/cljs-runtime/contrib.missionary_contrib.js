goog.provide('contrib.missionary_contrib');
contrib.missionary_contrib.mix = (function contrib$missionary_contrib$mix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43602 = arguments.length;
var i__5770__auto___43603 = (0);
while(true){
if((i__5770__auto___43603 < len__5769__auto___43602)){
args__5775__auto__.push((arguments[i__5770__auto___43603]));

var G__43605 = (i__5770__auto___43603 + (1));
i__5770__auto___43603 = G__43605;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return contrib.missionary_contrib.mix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(contrib.missionary_contrib.mix.cljs$core$IFn$_invoke$arity$variadic = (function (flows){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43261_block_0 = (function contrib$missionary_contrib$cr43261_block_0(cr43261_state){
try{var cr43261_place_0 = (1);
var cr43261_place_1 = cljs.core.count;
var cr43261_place_2 = flows;
var cr43261_place_3 = (function (){var G__43298 = cr43261_place_2;
var fexpr__43297 = cr43261_place_1;
return (fexpr__43297.cljs$core$IFn$_invoke$arity$1 ? fexpr__43297.cljs$core$IFn$_invoke$arity$1(G__43298) : fexpr__43297.call(null,G__43298));
})();
var cr43261_place_4 = missionary.core.seed;
var cr43261_place_5 = flows;
var cr43261_place_6 = (function (){var G__43300 = cr43261_place_5;
var fexpr__43299 = cr43261_place_4;
return (fexpr__43299.cljs$core$IFn$_invoke$arity$1 ? fexpr__43299.cljs$core$IFn$_invoke$arity$1(G__43300) : fexpr__43299.call(null,G__43300));
})();
(cr43261_state[(0)] = cr43261_block_1);

(cr43261_state[(1)] = cr43261_place_0);

return missionary.core.fork(cr43261_place_3,cr43261_place_6);
}catch (e43296){var cr43261_exception = e43296;
(cr43261_state[(0)] = null);

throw cr43261_exception;
}});
var cr43261_block_1 = (function contrib$missionary_contrib$cr43261_block_1(cr43261_state){
try{var cr43261_place_0 = (cr43261_state[(1)]);
var cr43261_place_7 = missionary.core.unpark();
(cr43261_state[(0)] = cr43261_block_2);

(cr43261_state[(1)] = null);

return missionary.core.fork(cr43261_place_0,cr43261_place_7);
}catch (e43301){var cr43261_exception = e43301;
(cr43261_state[(0)] = null);

(cr43261_state[(1)] = null);

throw cr43261_exception;
}});
var cr43261_block_2 = (function contrib$missionary_contrib$cr43261_block_2(cr43261_state){
try{var cr43261_place_8 = missionary.core.unpark();
(cr43261_state[(0)] = null);

return cr43261_place_8;
}catch (e43303){var cr43261_exception = e43303;
(cr43261_state[(0)] = null);

throw cr43261_exception;
}});
return cloroutine.impl.coroutine((function (){var G__43309 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__43309[(0)] = cr43261_block_0);

return G__43309;
})());
})(),missionary.core.ap_run);
}));

(contrib.missionary_contrib.mix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(contrib.missionary_contrib.mix.cljs$lang$applyTo = (function (seq43260){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43260));
}));

/**
 * blocking iterable pattern
 */
contrib.missionary_contrib.iterator_consumer = (function contrib$missionary_contrib$iterator_consumer(it){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43313_block_0 = (function contrib$missionary_contrib$iterator_consumer_$_cr43313_block_0(cr43313_state){
try{(cr43313_state[(0)] = cr43313_block_1);

return cr43313_state;
}catch (e43369){var cr43313_exception = e43369;
(cr43313_state[(0)] = null);

throw cr43313_exception;
}});
var cr43313_block_10 = (function contrib$missionary_contrib$iterator_consumer_$_cr43313_block_10(cr43313_state){
try{var cr43313_place_15 = (cr43313_state[(1)]);
var cr43313_place_23 = "No matching clause: ";
var cr43313_place_24 = cr43313_place_15;
var cr43313_place_25 = [cr43313_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr43313_place_24)].join('');
var cr43313_place_26 = (new Error(cr43313_place_25));
var cr43313_place_27 = (function(){throw cr43313_place_26})();
(cr43313_state[(0)] = null);

(cr43313_state[(1)] = null);

return null;
}catch (e43373){var cr43313_exception = e43373;
(cr43313_state[(0)] = null);

(cr43313_state[(1)] = null);

throw cr43313_exception;
}});
var cr43313_block_2 = (function contrib$missionary_contrib$iterator_consumer_$_cr43313_block_2(cr43313_state){
try{var cr43313_place_4 = missionary.core.unpark();
var cr43313_place_5 = null;
if(cljs.core.truth_(cr43313_place_4)){
(cr43313_state[(0)] = cr43313_block_5);

(cr43313_state[(1)] = cr43313_place_5);

return cr43313_state;
} else {
(cr43313_state[(0)] = cr43313_block_3);

(cr43313_state[(1)] = cr43313_place_5);

return cr43313_state;
}
}catch (e43378){var cr43313_exception = e43378;
(cr43313_state[(0)] = null);

throw cr43313_exception;
}});
var cr43313_block_1 = (function contrib$missionary_contrib$iterator_consumer_$_cr43313_block_1(cr43313_state){
try{var cr43313_place_0 = missionary.core.via_call;
var cr43313_place_1 = missionary.core.blk;
var cr43313_place_2 = (function (){
return it.hasNext();
});
var cr43313_place_3 = (function (){var G__43381 = cr43313_place_1;
var G__43382 = cr43313_place_2;
var fexpr__43380 = cr43313_place_0;
return (fexpr__43380.cljs$core$IFn$_invoke$arity$2 ? fexpr__43380.cljs$core$IFn$_invoke$arity$2(G__43381,G__43382) : fexpr__43380.call(null,G__43381,G__43382));
})();
(cr43313_state[(0)] = cr43313_block_2);

return missionary.core.park(cr43313_place_3);
}catch (e43379){var cr43313_exception = e43379;
(cr43313_state[(0)] = null);

throw cr43313_exception;
}});
var cr43313_block_4 = (function contrib$missionary_contrib$iterator_consumer_$_cr43313_block_4(cr43313_state){
try{var cr43313_place_8 = missionary.core.unpark();
(cr43313_state[(0)] = cr43313_block_12);

(cr43313_state[(1)] = cr43313_place_8);

return cr43313_state;
}catch (e43385){var cr43313_exception = e43385;
(cr43313_state[(0)] = null);

(cr43313_state[(1)] = null);

throw cr43313_exception;
}});
var cr43313_block_6 = (function contrib$missionary_contrib$iterator_consumer_$_cr43313_block_6(cr43313_state){
try{var cr43313_place_15 = missionary.core.unpark();
var cr43313_place_16 = cr43313_place_15;
var cr43313_place_17 = null;
var G__43387 = cr43313_place_16;
switch (G__43387) {
case (0):
(cr43313_state[(0)] = cr43313_block_7);

(cr43313_state[(2)] = cr43313_place_17);

return cr43313_state;

break;
case (1):
(cr43313_state[(0)] = cr43313_block_9);

(cr43313_state[(1)] = null);

return cr43313_state;

break;
default:
(cr43313_state[(0)] = cr43313_block_10);

(cr43313_state[(1)] = null);

(cr43313_state[(1)] = cr43313_place_15);

return cr43313_state;

}
}catch (e43386){var cr43313_exception = e43386;
(cr43313_state[(0)] = null);

(cr43313_state[(1)] = null);

throw cr43313_exception;
}});
var cr43313_block_3 = (function contrib$missionary_contrib$iterator_consumer_$_cr43313_block_3(cr43313_state){
try{var cr43313_place_6 = (1);
var cr43313_place_7 = missionary.core.none;
(cr43313_state[(0)] = cr43313_block_4);

return missionary.core.fork(cr43313_place_6,cr43313_place_7);
}catch (e43390){var cr43313_exception = e43390;
(cr43313_state[(0)] = null);

(cr43313_state[(1)] = null);

throw cr43313_exception;
}});
var cr43313_block_12 = (function contrib$missionary_contrib$iterator_consumer_$_cr43313_block_12(cr43313_state){
try{var cr43313_place_5 = (cr43313_state[(1)]);
(cr43313_state[(0)] = null);

(cr43313_state[(1)] = null);

return cr43313_place_5;
}catch (e43394){var cr43313_exception = e43394;
(cr43313_state[(0)] = null);

(cr43313_state[(1)] = null);

throw cr43313_exception;
}});
var cr43313_block_9 = (function contrib$missionary_contrib$iterator_consumer_$_cr43313_block_9(cr43313_state){
try{(cr43313_state[(0)] = cr43313_block_1);

return cr43313_state;
}catch (e43397){var cr43313_exception = e43397;
(cr43313_state[(0)] = null);

throw cr43313_exception;
}});
var cr43313_block_11 = (function contrib$missionary_contrib$iterator_consumer_$_cr43313_block_11(cr43313_state){
try{var cr43313_place_17 = (cr43313_state[(2)]);
(cr43313_state[(0)] = cr43313_block_12);

(cr43313_state[(2)] = null);

(cr43313_state[(1)] = cr43313_place_17);

return cr43313_state;
}catch (e43401){var cr43313_exception = e43401;
(cr43313_state[(0)] = null);

(cr43313_state[(2)] = null);

(cr43313_state[(1)] = null);

throw cr43313_exception;
}});
var cr43313_block_8 = (function contrib$missionary_contrib$iterator_consumer_$_cr43313_block_8(cr43313_state){
try{var cr43313_place_22 = missionary.core.unpark();
(cr43313_state[(0)] = cr43313_block_11);

(cr43313_state[(2)] = cr43313_place_22);

return cr43313_state;
}catch (e43403){var cr43313_exception = e43403;
(cr43313_state[(0)] = null);

(cr43313_state[(2)] = null);

(cr43313_state[(1)] = null);

throw cr43313_exception;
}});
var cr43313_block_5 = (function contrib$missionary_contrib$iterator_consumer_$_cr43313_block_5(cr43313_state){
try{var cr43313_place_9 = (1);
var cr43313_place_10 = missionary.core.seed;
var cr43313_place_11 = cljs.core.range;
var cr43313_place_12 = (2);
var cr43313_place_13 = (function (){var G__43407 = cr43313_place_12;
var fexpr__43406 = cr43313_place_11;
return (fexpr__43406.cljs$core$IFn$_invoke$arity$1 ? fexpr__43406.cljs$core$IFn$_invoke$arity$1(G__43407) : fexpr__43406.call(null,G__43407));
})();
var cr43313_place_14 = (function (){var G__43409 = cr43313_place_13;
var fexpr__43408 = cr43313_place_10;
return (fexpr__43408.cljs$core$IFn$_invoke$arity$1 ? fexpr__43408.cljs$core$IFn$_invoke$arity$1(G__43409) : fexpr__43408.call(null,G__43409));
})();
(cr43313_state[(0)] = cr43313_block_6);

return missionary.core.fork(cr43313_place_9,cr43313_place_14);
}catch (e43404){var cr43313_exception = e43404;
(cr43313_state[(0)] = null);

(cr43313_state[(1)] = null);

throw cr43313_exception;
}});
var cr43313_block_7 = (function contrib$missionary_contrib$iterator_consumer_$_cr43313_block_7(cr43313_state){
try{var cr43313_place_18 = missionary.core.via_call;
var cr43313_place_19 = missionary.core.blk;
var cr43313_place_20 = (function (){
return it.next();
});
var cr43313_place_21 = (function (){var G__43412 = cr43313_place_19;
var G__43413 = cr43313_place_20;
var fexpr__43411 = cr43313_place_18;
return (fexpr__43411.cljs$core$IFn$_invoke$arity$2 ? fexpr__43411.cljs$core$IFn$_invoke$arity$2(G__43412,G__43413) : fexpr__43411.call(null,G__43412,G__43413));
})();
(cr43313_state[(0)] = cr43313_block_8);

return missionary.core.park(cr43313_place_21);
}catch (e43410){var cr43313_exception = e43410;
(cr43313_state[(0)] = null);

(cr43313_state[(2)] = null);

(cr43313_state[(1)] = null);

throw cr43313_exception;
}});
return cloroutine.impl.coroutine((function (){var G__43414 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__43414[(0)] = cr43313_block_0);

return G__43414;
})());
})(),missionary.core.ap_run);
});
contrib.missionary_contrib.seq_consumer = (function contrib$missionary_contrib$seq_consumer(xs){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43415_block_4 = (function contrib$missionary_contrib$seq_consumer_$_cr43415_block_4(cr43415_state){
try{var cr43415_place_9 = missionary.core.unpark();
(cr43415_state[(0)] = cr43415_block_12);

(cr43415_state[(2)] = cr43415_place_9);

return cr43415_state;
}catch (e43472){var cr43415_exception = e43472;
(cr43415_state[(0)] = null);

(cr43415_state[(2)] = null);

throw cr43415_exception;
}});
var cr43415_block_0 = (function contrib$missionary_contrib$seq_consumer_$_cr43415_block_0(cr43415_state){
try{var cr43415_place_0 = xs;
(cr43415_state[(0)] = cr43415_block_1);

(cr43415_state[(1)] = cr43415_place_0);

return cr43415_state;
}catch (e43476){var cr43415_exception = e43476;
(cr43415_state[(0)] = null);

throw cr43415_exception;
}});
var cr43415_block_3 = (function contrib$missionary_contrib$seq_consumer_$_cr43415_block_3(cr43415_state){
try{var cr43415_place_7 = (1);
var cr43415_place_8 = missionary.core.none;
(cr43415_state[(0)] = cr43415_block_4);

return missionary.core.fork(cr43415_place_7,cr43415_place_8);
}catch (e43479){var cr43415_exception = e43479;
(cr43415_state[(0)] = null);

(cr43415_state[(2)] = null);

throw cr43415_exception;
}});
var cr43415_block_10 = (function contrib$missionary_contrib$seq_consumer_$_cr43415_block_10(cr43415_state){
try{var cr43415_place_16 = (cr43415_state[(1)]);
var cr43415_place_27 = "No matching clause: ";
var cr43415_place_28 = cr43415_place_16;
var cr43415_place_29 = [cr43415_place_27,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr43415_place_28)].join('');
var cr43415_place_30 = (new Error(cr43415_place_29));
var cr43415_place_31 = (function(){throw cr43415_place_30})();
(cr43415_state[(0)] = null);

(cr43415_state[(1)] = null);

return null;
}catch (e43480){var cr43415_exception = e43480;
(cr43415_state[(0)] = null);

(cr43415_state[(1)] = null);

throw cr43415_exception;
}});
var cr43415_block_9 = (function contrib$missionary_contrib$seq_consumer_$_cr43415_block_9(cr43415_state){
try{var cr43415_place_0 = (cr43415_state[(1)]);
var cr43415_place_24 = cljs.core.rest;
var cr43415_place_25 = cr43415_place_0;
var cr43415_place_26 = (function (){var G__43486 = cr43415_place_25;
var fexpr__43484 = cr43415_place_24;
return (fexpr__43484.cljs$core$IFn$_invoke$arity$1 ? fexpr__43484.cljs$core$IFn$_invoke$arity$1(G__43486) : fexpr__43484.call(null,G__43486));
})();
(cr43415_state[(0)] = cr43415_block_1);

(cr43415_state[(1)] = cr43415_place_26);

return cr43415_state;
}catch (e43483){var cr43415_exception = e43483;
(cr43415_state[(0)] = null);

(cr43415_state[(1)] = null);

throw cr43415_exception;
}});
var cr43415_block_1 = (function contrib$missionary_contrib$seq_consumer_$_cr43415_block_1(cr43415_state){
try{var cr43415_place_0 = (cr43415_state[(1)]);
var cr43415_place_1 = missionary.core.via_call;
var cr43415_place_2 = missionary.core.blk;
var cr43415_place_3 = (function (){
return cljs.core.seq(cr43415_place_0);
});
var cr43415_place_4 = (function (){var G__43492 = cr43415_place_2;
var G__43493 = cr43415_place_3;
var fexpr__43491 = cr43415_place_1;
return (fexpr__43491.cljs$core$IFn$_invoke$arity$2 ? fexpr__43491.cljs$core$IFn$_invoke$arity$2(G__43492,G__43493) : fexpr__43491.call(null,G__43492,G__43493));
})();
(cr43415_state[(0)] = cr43415_block_2);

return missionary.core.park(cr43415_place_4);
}catch (e43490){var cr43415_exception = e43490;
(cr43415_state[(0)] = null);

(cr43415_state[(1)] = null);

throw cr43415_exception;
}});
var cr43415_block_8 = (function contrib$missionary_contrib$seq_consumer_$_cr43415_block_8(cr43415_state){
try{var cr43415_place_23 = missionary.core.unpark();
(cr43415_state[(0)] = cr43415_block_11);

(cr43415_state[(3)] = cr43415_place_23);

return cr43415_state;
}catch (e43496){var cr43415_exception = e43496;
(cr43415_state[(0)] = null);

(cr43415_state[(3)] = null);

(cr43415_state[(2)] = null);

throw cr43415_exception;
}});
var cr43415_block_2 = (function contrib$missionary_contrib$seq_consumer_$_cr43415_block_2(cr43415_state){
try{var cr43415_place_5 = missionary.core.unpark();
var cr43415_place_6 = null;
if(cljs.core.truth_(cr43415_place_5)){
(cr43415_state[(0)] = cr43415_block_5);

(cr43415_state[(2)] = cr43415_place_6);

return cr43415_state;
} else {
(cr43415_state[(0)] = cr43415_block_3);

(cr43415_state[(1)] = null);

(cr43415_state[(2)] = cr43415_place_6);

return cr43415_state;
}
}catch (e43497){var cr43415_exception = e43497;
(cr43415_state[(0)] = null);

(cr43415_state[(1)] = null);

throw cr43415_exception;
}});
var cr43415_block_11 = (function contrib$missionary_contrib$seq_consumer_$_cr43415_block_11(cr43415_state){
try{var cr43415_place_18 = (cr43415_state[(3)]);
(cr43415_state[(0)] = cr43415_block_12);

(cr43415_state[(3)] = null);

(cr43415_state[(2)] = cr43415_place_18);

return cr43415_state;
}catch (e43501){var cr43415_exception = e43501;
(cr43415_state[(0)] = null);

(cr43415_state[(3)] = null);

(cr43415_state[(2)] = null);

throw cr43415_exception;
}});
var cr43415_block_12 = (function contrib$missionary_contrib$seq_consumer_$_cr43415_block_12(cr43415_state){
try{var cr43415_place_6 = (cr43415_state[(2)]);
(cr43415_state[(0)] = null);

(cr43415_state[(2)] = null);

return cr43415_place_6;
}catch (e43503){var cr43415_exception = e43503;
(cr43415_state[(0)] = null);

(cr43415_state[(2)] = null);

throw cr43415_exception;
}});
var cr43415_block_6 = (function contrib$missionary_contrib$seq_consumer_$_cr43415_block_6(cr43415_state){
try{var cr43415_place_16 = missionary.core.unpark();
var cr43415_place_17 = cr43415_place_16;
var cr43415_place_18 = null;
var G__43505 = cr43415_place_17;
switch (G__43505) {
case (0):
(cr43415_state[(0)] = cr43415_block_7);

(cr43415_state[(3)] = cr43415_place_18);

return cr43415_state;

break;
case (1):
(cr43415_state[(0)] = cr43415_block_9);

(cr43415_state[(2)] = null);

return cr43415_state;

break;
default:
(cr43415_state[(0)] = cr43415_block_10);

(cr43415_state[(2)] = null);

(cr43415_state[(1)] = null);

(cr43415_state[(1)] = cr43415_place_16);

return cr43415_state;

}
}catch (e43504){var cr43415_exception = e43504;
(cr43415_state[(0)] = null);

(cr43415_state[(2)] = null);

(cr43415_state[(1)] = null);

throw cr43415_exception;
}});
var cr43415_block_5 = (function contrib$missionary_contrib$seq_consumer_$_cr43415_block_5(cr43415_state){
try{var cr43415_place_10 = (1);
var cr43415_place_11 = missionary.core.seed;
var cr43415_place_12 = cljs.core.range;
var cr43415_place_13 = (2);
var cr43415_place_14 = (function (){var G__43509 = cr43415_place_13;
var fexpr__43508 = cr43415_place_12;
return (fexpr__43508.cljs$core$IFn$_invoke$arity$1 ? fexpr__43508.cljs$core$IFn$_invoke$arity$1(G__43509) : fexpr__43508.call(null,G__43509));
})();
var cr43415_place_15 = (function (){var G__43511 = cr43415_place_14;
var fexpr__43510 = cr43415_place_11;
return (fexpr__43510.cljs$core$IFn$_invoke$arity$1 ? fexpr__43510.cljs$core$IFn$_invoke$arity$1(G__43511) : fexpr__43510.call(null,G__43511));
})();
(cr43415_state[(0)] = cr43415_block_6);

return missionary.core.fork(cr43415_place_10,cr43415_place_15);
}catch (e43507){var cr43415_exception = e43507;
(cr43415_state[(0)] = null);

(cr43415_state[(2)] = null);

(cr43415_state[(1)] = null);

throw cr43415_exception;
}});
var cr43415_block_7 = (function contrib$missionary_contrib$seq_consumer_$_cr43415_block_7(cr43415_state){
try{var cr43415_place_0 = (cr43415_state[(1)]);
var cr43415_place_19 = missionary.core.via_call;
var cr43415_place_20 = missionary.core.blk;
var cr43415_place_21 = (function (){
return cljs.core.first(cr43415_place_0);
});
var cr43415_place_22 = (function (){var G__43516 = cr43415_place_20;
var G__43517 = cr43415_place_21;
var fexpr__43515 = cr43415_place_19;
return (fexpr__43515.cljs$core$IFn$_invoke$arity$2 ? fexpr__43515.cljs$core$IFn$_invoke$arity$2(G__43516,G__43517) : fexpr__43515.call(null,G__43516,G__43517));
})();
(cr43415_state[(0)] = cr43415_block_8);

(cr43415_state[(1)] = null);

return missionary.core.park(cr43415_place_22);
}catch (e43512){var cr43415_exception = e43512;
(cr43415_state[(0)] = null);

(cr43415_state[(3)] = null);

(cr43415_state[(2)] = null);

(cr43415_state[(1)] = null);

throw cr43415_exception;
}});
return cloroutine.impl.coroutine((function (){var G__43518 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((4));
(G__43518[(0)] = cr43415_block_0);

return G__43518;
})());
})(),missionary.core.ap_run);
});
/**
 * derive discrete flow from succession of polled values from a task (or mbox)
 */
contrib.missionary_contrib.poll_task = (function contrib$missionary_contrib$poll_task(task){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43520_block_7 = (function contrib$missionary_contrib$poll_task_$_cr43520_block_7(cr43520_state){
try{var cr43520_place_8 = (cr43520_state[(1)]);
var cr43520_place_14 = "No matching clause: ";
var cr43520_place_15 = cr43520_place_8;
var cr43520_place_16 = [cr43520_place_14,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr43520_place_15)].join('');
var cr43520_place_17 = (new Error(cr43520_place_16));
var cr43520_place_18 = (function(){throw cr43520_place_17})();
(cr43520_state[(0)] = null);

(cr43520_state[(1)] = null);

return null;
}catch (e43547){var cr43520_exception = e43547;
(cr43520_state[(0)] = null);

(cr43520_state[(1)] = null);

throw cr43520_exception;
}});
var cr43520_block_6 = (function contrib$missionary_contrib$poll_task_$_cr43520_block_6(cr43520_state){
try{var cr43520_place_13 = missionary.core.unpark();
(cr43520_state[(0)] = cr43520_block_2);

(cr43520_state[(1)] = cr43520_place_13);

return cr43520_state;
}catch (e43548){var cr43520_exception = e43548;
(cr43520_state[(0)] = null);

(cr43520_state[(1)] = null);

throw cr43520_exception;
}});
var cr43520_block_4 = (function contrib$missionary_contrib$poll_task_$_cr43520_block_4(cr43520_state){
try{var cr43520_place_1 = (cr43520_state[(1)]);
var cr43520_place_11 = cr43520_place_1;
(cr43520_state[(0)] = cr43520_block_8);

(cr43520_state[(1)] = null);

(cr43520_state[(2)] = cr43520_place_11);

return cr43520_state;
}catch (e43552){var cr43520_exception = e43552;
(cr43520_state[(0)] = null);

(cr43520_state[(1)] = null);

(cr43520_state[(2)] = null);

throw cr43520_exception;
}});
var cr43520_block_2 = (function contrib$missionary_contrib$poll_task_$_cr43520_block_2(cr43520_state){
try{var cr43520_place_2 = (1);
var cr43520_place_3 = missionary.core.seed;
var cr43520_place_4 = cljs.core.range;
var cr43520_place_5 = (2);
var cr43520_place_6 = (function (){var G__43559 = cr43520_place_5;
var fexpr__43558 = cr43520_place_4;
return (fexpr__43558.cljs$core$IFn$_invoke$arity$1 ? fexpr__43558.cljs$core$IFn$_invoke$arity$1(G__43559) : fexpr__43558.call(null,G__43559));
})();
var cr43520_place_7 = (function (){var G__43563 = cr43520_place_6;
var fexpr__43562 = cr43520_place_3;
return (fexpr__43562.cljs$core$IFn$_invoke$arity$1 ? fexpr__43562.cljs$core$IFn$_invoke$arity$1(G__43563) : fexpr__43562.call(null,G__43563));
})();
(cr43520_state[(0)] = cr43520_block_3);

return missionary.core.fork(cr43520_place_2,cr43520_place_7);
}catch (e43556){var cr43520_exception = e43556;
(cr43520_state[(0)] = null);

(cr43520_state[(1)] = null);

throw cr43520_exception;
}});
var cr43520_block_3 = (function contrib$missionary_contrib$poll_task_$_cr43520_block_3(cr43520_state){
try{var cr43520_place_8 = missionary.core.unpark();
var cr43520_place_9 = cr43520_place_8;
var cr43520_place_10 = null;
var G__43570 = cr43520_place_9;
switch (G__43570) {
case (0):
(cr43520_state[(0)] = cr43520_block_4);

(cr43520_state[(2)] = cr43520_place_10);

return cr43520_state;

break;
case (1):
(cr43520_state[(0)] = cr43520_block_5);

return cr43520_state;

break;
default:
(cr43520_state[(0)] = cr43520_block_7);

(cr43520_state[(1)] = null);

(cr43520_state[(1)] = cr43520_place_8);

return cr43520_state;

}
}catch (e43564){var cr43520_exception = e43564;
(cr43520_state[(0)] = null);

(cr43520_state[(1)] = null);

throw cr43520_exception;
}});
var cr43520_block_8 = (function contrib$missionary_contrib$poll_task_$_cr43520_block_8(cr43520_state){
try{var cr43520_place_10 = (cr43520_state[(2)]);
(cr43520_state[(0)] = null);

(cr43520_state[(2)] = null);

return cr43520_place_10;
}catch (e43572){var cr43520_exception = e43572;
(cr43520_state[(0)] = null);

(cr43520_state[(2)] = null);

throw cr43520_exception;
}});
var cr43520_block_1 = (function contrib$missionary_contrib$poll_task_$_cr43520_block_1(cr43520_state){
try{var cr43520_place_1 = missionary.core.unpark();
(cr43520_state[(0)] = cr43520_block_2);

(cr43520_state[(1)] = cr43520_place_1);

return cr43520_state;
}catch (e43576){var cr43520_exception = e43576;
(cr43520_state[(0)] = null);

throw cr43520_exception;
}});
var cr43520_block_5 = (function contrib$missionary_contrib$poll_task_$_cr43520_block_5(cr43520_state){
try{var cr43520_place_12 = task;
(cr43520_state[(0)] = cr43520_block_6);

return missionary.core.park(cr43520_place_12);
}catch (e43579){var cr43520_exception = e43579;
(cr43520_state[(0)] = null);

(cr43520_state[(1)] = null);

throw cr43520_exception;
}});
var cr43520_block_0 = (function contrib$missionary_contrib$poll_task_$_cr43520_block_0(cr43520_state){
try{var cr43520_place_0 = task;
(cr43520_state[(0)] = cr43520_block_1);

return missionary.core.park(cr43520_place_0);
}catch (e43582){var cr43520_exception = e43582;
(cr43520_state[(0)] = null);

throw cr43520_exception;
}});
return cloroutine.impl.coroutine((function (){var G__43583 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__43583[(0)] = cr43520_block_0);

return G__43583;
})());
})(),missionary.core.ap_run);
});
/**
 * compare (document log) to (d/entity db eid). if a datomic txn is [op eid a v], 
 * log here is [op a v], or in other words, there is only one entity (the `eid` is 
 * constant) so we are left with not an entity but a document.
 */
contrib.missionary_contrib.document = (function contrib$missionary_contrib$document(_GT_txs){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3((function (m,p__43589){
var vec__43590 = p__43589;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43590,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43590,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43590,(2),null);
var G__43594 = op;
var G__43594__$1 = (((G__43594 instanceof cljs.core.Keyword))?G__43594.fqn:null);
switch (G__43594__$1) {
case "contrib.missionary-contrib/add":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,a,v);

break;
case "contrib.missionary-contrib/retract":
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,a);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43594__$1)].join('')));

}
}),cljs.core.PersistentArrayMap.EMPTY,_GT_txs);
});

//# sourceMappingURL=contrib.missionary_contrib.js.map
