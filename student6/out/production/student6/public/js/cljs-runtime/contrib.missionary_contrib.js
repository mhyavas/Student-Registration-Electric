goog.provide('contrib.missionary_contrib');
contrib.missionary_contrib.mix = (function contrib$missionary_contrib$mix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33193 = arguments.length;
var i__5770__auto___33194 = (0);
while(true){
if((i__5770__auto___33194 < len__5769__auto___33193)){
args__5775__auto__.push((arguments[i__5770__auto___33194]));

var G__33195 = (i__5770__auto___33194 + (1));
i__5770__auto___33194 = G__33195;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return contrib.missionary_contrib.mix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(contrib.missionary_contrib.mix.cljs$core$IFn$_invoke$arity$variadic = (function (flows){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr32692_block_0 = (function contrib$missionary_contrib$cr32692_block_0(cr32692_state){
try{var cr32692_place_0 = (1);
var cr32692_place_1 = cljs.core.count;
var cr32692_place_2 = flows;
var cr32692_place_3 = (function (){var G__32708 = cr32692_place_2;
var fexpr__32707 = cr32692_place_1;
return (fexpr__32707.cljs$core$IFn$_invoke$arity$1 ? fexpr__32707.cljs$core$IFn$_invoke$arity$1(G__32708) : fexpr__32707.call(null,G__32708));
})();
var cr32692_place_4 = missionary.core.seed;
var cr32692_place_5 = flows;
var cr32692_place_6 = (function (){var G__32710 = cr32692_place_5;
var fexpr__32709 = cr32692_place_4;
return (fexpr__32709.cljs$core$IFn$_invoke$arity$1 ? fexpr__32709.cljs$core$IFn$_invoke$arity$1(G__32710) : fexpr__32709.call(null,G__32710));
})();
(cr32692_state[(0)] = cr32692_block_1);

(cr32692_state[(1)] = cr32692_place_0);

return missionary.core.fork(cr32692_place_3,cr32692_place_6);
}catch (e32706){var cr32692_exception = e32706;
(cr32692_state[(0)] = null);

throw cr32692_exception;
}});
var cr32692_block_1 = (function contrib$missionary_contrib$cr32692_block_1(cr32692_state){
try{var cr32692_place_0 = (cr32692_state[(1)]);
var cr32692_place_7 = missionary.core.unpark();
(cr32692_state[(0)] = cr32692_block_2);

(cr32692_state[(1)] = null);

return missionary.core.fork(cr32692_place_0,cr32692_place_7);
}catch (e32711){var cr32692_exception = e32711;
(cr32692_state[(0)] = null);

(cr32692_state[(1)] = null);

throw cr32692_exception;
}});
var cr32692_block_2 = (function contrib$missionary_contrib$cr32692_block_2(cr32692_state){
try{var cr32692_place_8 = missionary.core.unpark();
(cr32692_state[(0)] = null);

return cr32692_place_8;
}catch (e32716){var cr32692_exception = e32716;
(cr32692_state[(0)] = null);

throw cr32692_exception;
}});
return cloroutine.impl.coroutine((function (){var G__32717 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__32717[(0)] = cr32692_block_0);

return G__32717;
})());
})(),missionary.core.ap_run);
}));

(contrib.missionary_contrib.mix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(contrib.missionary_contrib.mix.cljs$lang$applyTo = (function (seq32689){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32689));
}));

/**
 * blocking iterable pattern
 */
contrib.missionary_contrib.iterator_consumer = (function contrib$missionary_contrib$iterator_consumer(it){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr32720_block_9 = (function contrib$missionary_contrib$iterator_consumer_$_cr32720_block_9(cr32720_state){
try{(cr32720_state[(0)] = cr32720_block_1);

return cr32720_state;
}catch (e32784){var cr32720_exception = e32784;
(cr32720_state[(0)] = null);

throw cr32720_exception;
}});
var cr32720_block_11 = (function contrib$missionary_contrib$iterator_consumer_$_cr32720_block_11(cr32720_state){
try{var cr32720_place_17 = (cr32720_state[(2)]);
(cr32720_state[(0)] = cr32720_block_12);

(cr32720_state[(2)] = null);

(cr32720_state[(1)] = cr32720_place_17);

return cr32720_state;
}catch (e32785){var cr32720_exception = e32785;
(cr32720_state[(0)] = null);

(cr32720_state[(1)] = null);

(cr32720_state[(2)] = null);

throw cr32720_exception;
}});
var cr32720_block_5 = (function contrib$missionary_contrib$iterator_consumer_$_cr32720_block_5(cr32720_state){
try{var cr32720_place_9 = (1);
var cr32720_place_10 = missionary.core.seed;
var cr32720_place_11 = cljs.core.range;
var cr32720_place_12 = (2);
var cr32720_place_13 = (function (){var G__32788 = cr32720_place_12;
var fexpr__32787 = cr32720_place_11;
return (fexpr__32787.cljs$core$IFn$_invoke$arity$1 ? fexpr__32787.cljs$core$IFn$_invoke$arity$1(G__32788) : fexpr__32787.call(null,G__32788));
})();
var cr32720_place_14 = (function (){var G__32790 = cr32720_place_13;
var fexpr__32789 = cr32720_place_10;
return (fexpr__32789.cljs$core$IFn$_invoke$arity$1 ? fexpr__32789.cljs$core$IFn$_invoke$arity$1(G__32790) : fexpr__32789.call(null,G__32790));
})();
(cr32720_state[(0)] = cr32720_block_6);

return missionary.core.fork(cr32720_place_9,cr32720_place_14);
}catch (e32786){var cr32720_exception = e32786;
(cr32720_state[(0)] = null);

(cr32720_state[(1)] = null);

throw cr32720_exception;
}});
var cr32720_block_4 = (function contrib$missionary_contrib$iterator_consumer_$_cr32720_block_4(cr32720_state){
try{var cr32720_place_8 = missionary.core.unpark();
(cr32720_state[(0)] = cr32720_block_12);

(cr32720_state[(1)] = cr32720_place_8);

return cr32720_state;
}catch (e32791){var cr32720_exception = e32791;
(cr32720_state[(0)] = null);

(cr32720_state[(1)] = null);

throw cr32720_exception;
}});
var cr32720_block_3 = (function contrib$missionary_contrib$iterator_consumer_$_cr32720_block_3(cr32720_state){
try{var cr32720_place_6 = (1);
var cr32720_place_7 = missionary.core.none;
(cr32720_state[(0)] = cr32720_block_4);

return missionary.core.fork(cr32720_place_6,cr32720_place_7);
}catch (e32792){var cr32720_exception = e32792;
(cr32720_state[(0)] = null);

(cr32720_state[(1)] = null);

throw cr32720_exception;
}});
var cr32720_block_2 = (function contrib$missionary_contrib$iterator_consumer_$_cr32720_block_2(cr32720_state){
try{var cr32720_place_4 = missionary.core.unpark();
var cr32720_place_5 = null;
if(cljs.core.truth_(cr32720_place_4)){
(cr32720_state[(0)] = cr32720_block_5);

(cr32720_state[(1)] = cr32720_place_5);

return cr32720_state;
} else {
(cr32720_state[(0)] = cr32720_block_3);

(cr32720_state[(1)] = cr32720_place_5);

return cr32720_state;
}
}catch (e32793){var cr32720_exception = e32793;
(cr32720_state[(0)] = null);

throw cr32720_exception;
}});
var cr32720_block_8 = (function contrib$missionary_contrib$iterator_consumer_$_cr32720_block_8(cr32720_state){
try{var cr32720_place_22 = missionary.core.unpark();
(cr32720_state[(0)] = cr32720_block_11);

(cr32720_state[(2)] = cr32720_place_22);

return cr32720_state;
}catch (e32794){var cr32720_exception = e32794;
(cr32720_state[(0)] = null);

(cr32720_state[(1)] = null);

(cr32720_state[(2)] = null);

throw cr32720_exception;
}});
var cr32720_block_1 = (function contrib$missionary_contrib$iterator_consumer_$_cr32720_block_1(cr32720_state){
try{var cr32720_place_0 = missionary.core.via_call;
var cr32720_place_1 = missionary.core.blk;
var cr32720_place_2 = (function (){
return it.hasNext();
});
var cr32720_place_3 = (function (){var G__32797 = cr32720_place_1;
var G__32798 = cr32720_place_2;
var fexpr__32796 = cr32720_place_0;
return (fexpr__32796.cljs$core$IFn$_invoke$arity$2 ? fexpr__32796.cljs$core$IFn$_invoke$arity$2(G__32797,G__32798) : fexpr__32796.call(null,G__32797,G__32798));
})();
(cr32720_state[(0)] = cr32720_block_2);

return missionary.core.park(cr32720_place_3);
}catch (e32795){var cr32720_exception = e32795;
(cr32720_state[(0)] = null);

throw cr32720_exception;
}});
var cr32720_block_6 = (function contrib$missionary_contrib$iterator_consumer_$_cr32720_block_6(cr32720_state){
try{var cr32720_place_15 = missionary.core.unpark();
var cr32720_place_16 = cr32720_place_15;
var cr32720_place_17 = null;
var G__32800 = cr32720_place_16;
switch (G__32800) {
case (0):
(cr32720_state[(0)] = cr32720_block_7);

(cr32720_state[(2)] = cr32720_place_17);

return cr32720_state;

break;
case (1):
(cr32720_state[(0)] = cr32720_block_9);

(cr32720_state[(1)] = null);

return cr32720_state;

break;
default:
(cr32720_state[(0)] = cr32720_block_10);

(cr32720_state[(1)] = null);

(cr32720_state[(1)] = cr32720_place_15);

return cr32720_state;

}
}catch (e32799){var cr32720_exception = e32799;
(cr32720_state[(0)] = null);

(cr32720_state[(1)] = null);

throw cr32720_exception;
}});
var cr32720_block_12 = (function contrib$missionary_contrib$iterator_consumer_$_cr32720_block_12(cr32720_state){
try{var cr32720_place_5 = (cr32720_state[(1)]);
(cr32720_state[(0)] = null);

(cr32720_state[(1)] = null);

return cr32720_place_5;
}catch (e32802){var cr32720_exception = e32802;
(cr32720_state[(0)] = null);

(cr32720_state[(1)] = null);

throw cr32720_exception;
}});
var cr32720_block_7 = (function contrib$missionary_contrib$iterator_consumer_$_cr32720_block_7(cr32720_state){
try{var cr32720_place_18 = missionary.core.via_call;
var cr32720_place_19 = missionary.core.blk;
var cr32720_place_20 = (function (){
return it.next();
});
var cr32720_place_21 = (function (){var G__32807 = cr32720_place_19;
var G__32808 = cr32720_place_20;
var fexpr__32806 = cr32720_place_18;
return (fexpr__32806.cljs$core$IFn$_invoke$arity$2 ? fexpr__32806.cljs$core$IFn$_invoke$arity$2(G__32807,G__32808) : fexpr__32806.call(null,G__32807,G__32808));
})();
(cr32720_state[(0)] = cr32720_block_8);

return missionary.core.park(cr32720_place_21);
}catch (e32804){var cr32720_exception = e32804;
(cr32720_state[(0)] = null);

(cr32720_state[(1)] = null);

(cr32720_state[(2)] = null);

throw cr32720_exception;
}});
var cr32720_block_0 = (function contrib$missionary_contrib$iterator_consumer_$_cr32720_block_0(cr32720_state){
try{(cr32720_state[(0)] = cr32720_block_1);

return cr32720_state;
}catch (e32810){var cr32720_exception = e32810;
(cr32720_state[(0)] = null);

throw cr32720_exception;
}});
var cr32720_block_10 = (function contrib$missionary_contrib$iterator_consumer_$_cr32720_block_10(cr32720_state){
try{var cr32720_place_15 = (cr32720_state[(1)]);
var cr32720_place_23 = "No matching clause: ";
var cr32720_place_24 = cr32720_place_15;
var cr32720_place_25 = [cr32720_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr32720_place_24)].join('');
var cr32720_place_26 = (new Error(cr32720_place_25));
var cr32720_place_27 = (function(){throw cr32720_place_26})();
(cr32720_state[(0)] = null);

(cr32720_state[(1)] = null);

return null;
}catch (e32812){var cr32720_exception = e32812;
(cr32720_state[(0)] = null);

(cr32720_state[(1)] = null);

throw cr32720_exception;
}});
return cloroutine.impl.coroutine((function (){var G__32813 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__32813[(0)] = cr32720_block_0);

return G__32813;
})());
})(),missionary.core.ap_run);
});
contrib.missionary_contrib.seq_consumer = (function contrib$missionary_contrib$seq_consumer(xs){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr32817_block_4 = (function contrib$missionary_contrib$seq_consumer_$_cr32817_block_4(cr32817_state){
try{var cr32817_place_9 = missionary.core.unpark();
(cr32817_state[(0)] = cr32817_block_12);

(cr32817_state[(2)] = cr32817_place_9);

return cr32817_state;
}catch (e32948){var cr32817_exception = e32948;
(cr32817_state[(0)] = null);

(cr32817_state[(2)] = null);

throw cr32817_exception;
}});
var cr32817_block_5 = (function contrib$missionary_contrib$seq_consumer_$_cr32817_block_5(cr32817_state){
try{var cr32817_place_10 = (1);
var cr32817_place_11 = missionary.core.seed;
var cr32817_place_12 = cljs.core.range;
var cr32817_place_13 = (2);
var cr32817_place_14 = (function (){var G__32959 = cr32817_place_13;
var fexpr__32958 = cr32817_place_12;
return (fexpr__32958.cljs$core$IFn$_invoke$arity$1 ? fexpr__32958.cljs$core$IFn$_invoke$arity$1(G__32959) : fexpr__32958.call(null,G__32959));
})();
var cr32817_place_15 = (function (){var G__32961 = cr32817_place_14;
var fexpr__32960 = cr32817_place_11;
return (fexpr__32960.cljs$core$IFn$_invoke$arity$1 ? fexpr__32960.cljs$core$IFn$_invoke$arity$1(G__32961) : fexpr__32960.call(null,G__32961));
})();
(cr32817_state[(0)] = cr32817_block_6);

return missionary.core.fork(cr32817_place_10,cr32817_place_15);
}catch (e32953){var cr32817_exception = e32953;
(cr32817_state[(0)] = null);

(cr32817_state[(1)] = null);

(cr32817_state[(2)] = null);

throw cr32817_exception;
}});
var cr32817_block_6 = (function contrib$missionary_contrib$seq_consumer_$_cr32817_block_6(cr32817_state){
try{var cr32817_place_16 = missionary.core.unpark();
var cr32817_place_17 = cr32817_place_16;
var cr32817_place_18 = null;
var G__32969 = cr32817_place_17;
switch (G__32969) {
case (0):
(cr32817_state[(0)] = cr32817_block_7);

(cr32817_state[(3)] = cr32817_place_18);

return cr32817_state;

break;
case (1):
(cr32817_state[(0)] = cr32817_block_9);

(cr32817_state[(2)] = null);

return cr32817_state;

break;
default:
(cr32817_state[(0)] = cr32817_block_10);

(cr32817_state[(1)] = null);

(cr32817_state[(2)] = null);

(cr32817_state[(1)] = cr32817_place_16);

return cr32817_state;

}
}catch (e32962){var cr32817_exception = e32962;
(cr32817_state[(0)] = null);

(cr32817_state[(1)] = null);

(cr32817_state[(2)] = null);

throw cr32817_exception;
}});
var cr32817_block_0 = (function contrib$missionary_contrib$seq_consumer_$_cr32817_block_0(cr32817_state){
try{var cr32817_place_0 = xs;
(cr32817_state[(0)] = cr32817_block_1);

(cr32817_state[(1)] = cr32817_place_0);

return cr32817_state;
}catch (e32978){var cr32817_exception = e32978;
(cr32817_state[(0)] = null);

throw cr32817_exception;
}});
var cr32817_block_11 = (function contrib$missionary_contrib$seq_consumer_$_cr32817_block_11(cr32817_state){
try{var cr32817_place_18 = (cr32817_state[(3)]);
(cr32817_state[(0)] = cr32817_block_12);

(cr32817_state[(3)] = null);

(cr32817_state[(2)] = cr32817_place_18);

return cr32817_state;
}catch (e32981){var cr32817_exception = e32981;
(cr32817_state[(0)] = null);

(cr32817_state[(3)] = null);

(cr32817_state[(2)] = null);

throw cr32817_exception;
}});
var cr32817_block_2 = (function contrib$missionary_contrib$seq_consumer_$_cr32817_block_2(cr32817_state){
try{var cr32817_place_5 = missionary.core.unpark();
var cr32817_place_6 = null;
if(cljs.core.truth_(cr32817_place_5)){
(cr32817_state[(0)] = cr32817_block_5);

(cr32817_state[(2)] = cr32817_place_6);

return cr32817_state;
} else {
(cr32817_state[(0)] = cr32817_block_3);

(cr32817_state[(1)] = null);

(cr32817_state[(2)] = cr32817_place_6);

return cr32817_state;
}
}catch (e33011){var cr32817_exception = e33011;
(cr32817_state[(0)] = null);

(cr32817_state[(1)] = null);

throw cr32817_exception;
}});
var cr32817_block_1 = (function contrib$missionary_contrib$seq_consumer_$_cr32817_block_1(cr32817_state){
try{var cr32817_place_0 = (cr32817_state[(1)]);
var cr32817_place_1 = missionary.core.via_call;
var cr32817_place_2 = missionary.core.blk;
var cr32817_place_3 = (function (){
return cljs.core.seq(cr32817_place_0);
});
var cr32817_place_4 = (function (){var G__33021 = cr32817_place_2;
var G__33022 = cr32817_place_3;
var fexpr__33020 = cr32817_place_1;
return (fexpr__33020.cljs$core$IFn$_invoke$arity$2 ? fexpr__33020.cljs$core$IFn$_invoke$arity$2(G__33021,G__33022) : fexpr__33020.call(null,G__33021,G__33022));
})();
(cr32817_state[(0)] = cr32817_block_2);

return missionary.core.park(cr32817_place_4);
}catch (e33019){var cr32817_exception = e33019;
(cr32817_state[(0)] = null);

(cr32817_state[(1)] = null);

throw cr32817_exception;
}});
var cr32817_block_8 = (function contrib$missionary_contrib$seq_consumer_$_cr32817_block_8(cr32817_state){
try{var cr32817_place_23 = missionary.core.unpark();
(cr32817_state[(0)] = cr32817_block_11);

(cr32817_state[(3)] = cr32817_place_23);

return cr32817_state;
}catch (e33024){var cr32817_exception = e33024;
(cr32817_state[(0)] = null);

(cr32817_state[(3)] = null);

(cr32817_state[(2)] = null);

throw cr32817_exception;
}});
var cr32817_block_12 = (function contrib$missionary_contrib$seq_consumer_$_cr32817_block_12(cr32817_state){
try{var cr32817_place_6 = (cr32817_state[(2)]);
(cr32817_state[(0)] = null);

(cr32817_state[(2)] = null);

return cr32817_place_6;
}catch (e33025){var cr32817_exception = e33025;
(cr32817_state[(0)] = null);

(cr32817_state[(2)] = null);

throw cr32817_exception;
}});
var cr32817_block_9 = (function contrib$missionary_contrib$seq_consumer_$_cr32817_block_9(cr32817_state){
try{var cr32817_place_0 = (cr32817_state[(1)]);
var cr32817_place_24 = cljs.core.rest;
var cr32817_place_25 = cr32817_place_0;
var cr32817_place_26 = (function (){var G__33029 = cr32817_place_25;
var fexpr__33028 = cr32817_place_24;
return (fexpr__33028.cljs$core$IFn$_invoke$arity$1 ? fexpr__33028.cljs$core$IFn$_invoke$arity$1(G__33029) : fexpr__33028.call(null,G__33029));
})();
(cr32817_state[(0)] = cr32817_block_1);

(cr32817_state[(1)] = cr32817_place_26);

return cr32817_state;
}catch (e33027){var cr32817_exception = e33027;
(cr32817_state[(0)] = null);

(cr32817_state[(1)] = null);

throw cr32817_exception;
}});
var cr32817_block_7 = (function contrib$missionary_contrib$seq_consumer_$_cr32817_block_7(cr32817_state){
try{var cr32817_place_0 = (cr32817_state[(1)]);
var cr32817_place_19 = missionary.core.via_call;
var cr32817_place_20 = missionary.core.blk;
var cr32817_place_21 = (function (){
return cljs.core.first(cr32817_place_0);
});
var cr32817_place_22 = (function (){var G__33079 = cr32817_place_20;
var G__33080 = cr32817_place_21;
var fexpr__33078 = cr32817_place_19;
return (fexpr__33078.cljs$core$IFn$_invoke$arity$2 ? fexpr__33078.cljs$core$IFn$_invoke$arity$2(G__33079,G__33080) : fexpr__33078.call(null,G__33079,G__33080));
})();
(cr32817_state[(0)] = cr32817_block_8);

(cr32817_state[(1)] = null);

return missionary.core.park(cr32817_place_22);
}catch (e33031){var cr32817_exception = e33031;
(cr32817_state[(0)] = null);

(cr32817_state[(1)] = null);

(cr32817_state[(3)] = null);

(cr32817_state[(2)] = null);

throw cr32817_exception;
}});
var cr32817_block_3 = (function contrib$missionary_contrib$seq_consumer_$_cr32817_block_3(cr32817_state){
try{var cr32817_place_7 = (1);
var cr32817_place_8 = missionary.core.none;
(cr32817_state[(0)] = cr32817_block_4);

return missionary.core.fork(cr32817_place_7,cr32817_place_8);
}catch (e33084){var cr32817_exception = e33084;
(cr32817_state[(0)] = null);

(cr32817_state[(2)] = null);

throw cr32817_exception;
}});
var cr32817_block_10 = (function contrib$missionary_contrib$seq_consumer_$_cr32817_block_10(cr32817_state){
try{var cr32817_place_16 = (cr32817_state[(1)]);
var cr32817_place_27 = "No matching clause: ";
var cr32817_place_28 = cr32817_place_16;
var cr32817_place_29 = [cr32817_place_27,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr32817_place_28)].join('');
var cr32817_place_30 = (new Error(cr32817_place_29));
var cr32817_place_31 = (function(){throw cr32817_place_30})();
(cr32817_state[(0)] = null);

(cr32817_state[(1)] = null);

return null;
}catch (e33088){var cr32817_exception = e33088;
(cr32817_state[(0)] = null);

(cr32817_state[(1)] = null);

throw cr32817_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33090 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((4));
(G__33090[(0)] = cr32817_block_0);

return G__33090;
})());
})(),missionary.core.ap_run);
});
/**
 * derive discrete flow from succession of polled values from a task (or mbox)
 */
contrib.missionary_contrib.poll_task = (function contrib$missionary_contrib$poll_task(task){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr33099_block_0 = (function contrib$missionary_contrib$poll_task_$_cr33099_block_0(cr33099_state){
try{var cr33099_place_0 = task;
(cr33099_state[(0)] = cr33099_block_1);

return missionary.core.park(cr33099_place_0);
}catch (e33144){var cr33099_exception = e33144;
(cr33099_state[(0)] = null);

throw cr33099_exception;
}});
var cr33099_block_6 = (function contrib$missionary_contrib$poll_task_$_cr33099_block_6(cr33099_state){
try{var cr33099_place_13 = missionary.core.unpark();
(cr33099_state[(0)] = cr33099_block_2);

(cr33099_state[(1)] = cr33099_place_13);

return cr33099_state;
}catch (e33145){var cr33099_exception = e33145;
(cr33099_state[(0)] = null);

(cr33099_state[(1)] = null);

throw cr33099_exception;
}});
var cr33099_block_3 = (function contrib$missionary_contrib$poll_task_$_cr33099_block_3(cr33099_state){
try{var cr33099_place_8 = missionary.core.unpark();
var cr33099_place_9 = cr33099_place_8;
var cr33099_place_10 = null;
var G__33150 = cr33099_place_9;
switch (G__33150) {
case (0):
(cr33099_state[(0)] = cr33099_block_4);

(cr33099_state[(2)] = cr33099_place_10);

return cr33099_state;

break;
case (1):
(cr33099_state[(0)] = cr33099_block_5);

return cr33099_state;

break;
default:
(cr33099_state[(0)] = cr33099_block_7);

(cr33099_state[(1)] = null);

(cr33099_state[(1)] = cr33099_place_8);

return cr33099_state;

}
}catch (e33149){var cr33099_exception = e33149;
(cr33099_state[(0)] = null);

(cr33099_state[(1)] = null);

throw cr33099_exception;
}});
var cr33099_block_1 = (function contrib$missionary_contrib$poll_task_$_cr33099_block_1(cr33099_state){
try{var cr33099_place_1 = missionary.core.unpark();
(cr33099_state[(0)] = cr33099_block_2);

(cr33099_state[(1)] = cr33099_place_1);

return cr33099_state;
}catch (e33151){var cr33099_exception = e33151;
(cr33099_state[(0)] = null);

throw cr33099_exception;
}});
var cr33099_block_7 = (function contrib$missionary_contrib$poll_task_$_cr33099_block_7(cr33099_state){
try{var cr33099_place_8 = (cr33099_state[(1)]);
var cr33099_place_14 = "No matching clause: ";
var cr33099_place_15 = cr33099_place_8;
var cr33099_place_16 = [cr33099_place_14,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr33099_place_15)].join('');
var cr33099_place_17 = (new Error(cr33099_place_16));
var cr33099_place_18 = (function(){throw cr33099_place_17})();
(cr33099_state[(0)] = null);

(cr33099_state[(1)] = null);

return null;
}catch (e33157){var cr33099_exception = e33157;
(cr33099_state[(0)] = null);

(cr33099_state[(1)] = null);

throw cr33099_exception;
}});
var cr33099_block_2 = (function contrib$missionary_contrib$poll_task_$_cr33099_block_2(cr33099_state){
try{var cr33099_place_2 = (1);
var cr33099_place_3 = missionary.core.seed;
var cr33099_place_4 = cljs.core.range;
var cr33099_place_5 = (2);
var cr33099_place_6 = (function (){var G__33163 = cr33099_place_5;
var fexpr__33162 = cr33099_place_4;
return (fexpr__33162.cljs$core$IFn$_invoke$arity$1 ? fexpr__33162.cljs$core$IFn$_invoke$arity$1(G__33163) : fexpr__33162.call(null,G__33163));
})();
var cr33099_place_7 = (function (){var G__33168 = cr33099_place_6;
var fexpr__33167 = cr33099_place_3;
return (fexpr__33167.cljs$core$IFn$_invoke$arity$1 ? fexpr__33167.cljs$core$IFn$_invoke$arity$1(G__33168) : fexpr__33167.call(null,G__33168));
})();
(cr33099_state[(0)] = cr33099_block_3);

return missionary.core.fork(cr33099_place_2,cr33099_place_7);
}catch (e33160){var cr33099_exception = e33160;
(cr33099_state[(0)] = null);

(cr33099_state[(1)] = null);

throw cr33099_exception;
}});
var cr33099_block_4 = (function contrib$missionary_contrib$poll_task_$_cr33099_block_4(cr33099_state){
try{var cr33099_place_1 = (cr33099_state[(1)]);
var cr33099_place_11 = cr33099_place_1;
(cr33099_state[(0)] = cr33099_block_8);

(cr33099_state[(1)] = null);

(cr33099_state[(2)] = cr33099_place_11);

return cr33099_state;
}catch (e33169){var cr33099_exception = e33169;
(cr33099_state[(0)] = null);

(cr33099_state[(2)] = null);

(cr33099_state[(1)] = null);

throw cr33099_exception;
}});
var cr33099_block_8 = (function contrib$missionary_contrib$poll_task_$_cr33099_block_8(cr33099_state){
try{var cr33099_place_10 = (cr33099_state[(2)]);
(cr33099_state[(0)] = null);

(cr33099_state[(2)] = null);

return cr33099_place_10;
}catch (e33171){var cr33099_exception = e33171;
(cr33099_state[(0)] = null);

(cr33099_state[(2)] = null);

throw cr33099_exception;
}});
var cr33099_block_5 = (function contrib$missionary_contrib$poll_task_$_cr33099_block_5(cr33099_state){
try{var cr33099_place_12 = task;
(cr33099_state[(0)] = cr33099_block_6);

return missionary.core.park(cr33099_place_12);
}catch (e33173){var cr33099_exception = e33173;
(cr33099_state[(0)] = null);

(cr33099_state[(1)] = null);

throw cr33099_exception;
}});
return cloroutine.impl.coroutine((function (){var G__33175 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__33175[(0)] = cr33099_block_0);

return G__33175;
})());
})(),missionary.core.ap_run);
});
/**
 * compare (document log) to (d/entity db eid). if a datomic txn is [op eid a v], 
 * log here is [op a v], or in other words, there is only one entity (the `eid` is 
 * constant) so we are left with not an entity but a document.
 */
contrib.missionary_contrib.document = (function contrib$missionary_contrib$document(_GT_txs){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3((function (m,p__33180){
var vec__33181 = p__33180;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33181,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33181,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33181,(2),null);
var G__33188 = op;
var G__33188__$1 = (((G__33188 instanceof cljs.core.Keyword))?G__33188.fqn:null);
switch (G__33188__$1) {
case "contrib.missionary-contrib/add":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,a,v);

break;
case "contrib.missionary-contrib/retract":
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,a);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33188__$1)].join('')));

}
}),cljs.core.PersistentArrayMap.EMPTY,_GT_txs);
});

//# sourceMappingURL=contrib.missionary_contrib.js.map
