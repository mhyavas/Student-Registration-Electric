goog.provide('contrib.missionary_contrib');
contrib.missionary_contrib.mix = (function contrib$missionary_contrib$mix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44039 = arguments.length;
var i__5770__auto___44040 = (0);
while(true){
if((i__5770__auto___44040 < len__5769__auto___44039)){
args__5775__auto__.push((arguments[i__5770__auto___44040]));

var G__44041 = (i__5770__auto___44040 + (1));
i__5770__auto___44040 = G__44041;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return contrib.missionary_contrib.mix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(contrib.missionary_contrib.mix.cljs$core$IFn$_invoke$arity$variadic = (function (flows){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43629_block_0 = (function contrib$missionary_contrib$cr43629_block_0(cr43629_state){
try{var cr43629_place_0 = (1);
var cr43629_place_1 = cljs.core.count;
var cr43629_place_2 = flows;
var cr43629_place_3 = (function (){var G__43676 = cr43629_place_2;
var fexpr__43675 = cr43629_place_1;
return (fexpr__43675.cljs$core$IFn$_invoke$arity$1 ? fexpr__43675.cljs$core$IFn$_invoke$arity$1(G__43676) : fexpr__43675.call(null,G__43676));
})();
var cr43629_place_4 = missionary.core.seed;
var cr43629_place_5 = flows;
var cr43629_place_6 = (function (){var G__43678 = cr43629_place_5;
var fexpr__43677 = cr43629_place_4;
return (fexpr__43677.cljs$core$IFn$_invoke$arity$1 ? fexpr__43677.cljs$core$IFn$_invoke$arity$1(G__43678) : fexpr__43677.call(null,G__43678));
})();
(cr43629_state[(0)] = cr43629_block_1);

(cr43629_state[(1)] = cr43629_place_0);

return missionary.core.fork(cr43629_place_3,cr43629_place_6);
}catch (e43668){var cr43629_exception = e43668;
(cr43629_state[(0)] = null);

throw cr43629_exception;
}});
var cr43629_block_1 = (function contrib$missionary_contrib$cr43629_block_1(cr43629_state){
try{var cr43629_place_0 = (cr43629_state[(1)]);
var cr43629_place_7 = missionary.core.unpark();
(cr43629_state[(0)] = cr43629_block_2);

(cr43629_state[(1)] = null);

return missionary.core.fork(cr43629_place_0,cr43629_place_7);
}catch (e43679){var cr43629_exception = e43679;
(cr43629_state[(0)] = null);

(cr43629_state[(1)] = null);

throw cr43629_exception;
}});
var cr43629_block_2 = (function contrib$missionary_contrib$cr43629_block_2(cr43629_state){
try{var cr43629_place_8 = missionary.core.unpark();
(cr43629_state[(0)] = null);

return cr43629_place_8;
}catch (e43680){var cr43629_exception = e43680;
(cr43629_state[(0)] = null);

throw cr43629_exception;
}});
return cloroutine.impl.coroutine((function (){var G__43681 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__43681[(0)] = cr43629_block_0);

return G__43681;
})());
})(),missionary.core.ap_run);
}));

(contrib.missionary_contrib.mix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(contrib.missionary_contrib.mix.cljs$lang$applyTo = (function (seq43613){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43613));
}));

/**
 * blocking iterable pattern
 */
contrib.missionary_contrib.iterator_consumer = (function contrib$missionary_contrib$iterator_consumer(it){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43683_block_6 = (function contrib$missionary_contrib$iterator_consumer_$_cr43683_block_6(cr43683_state){
try{var cr43683_place_15 = missionary.core.unpark();
var cr43683_place_16 = cr43683_place_15;
var cr43683_place_17 = null;
var G__43759 = cr43683_place_16;
switch (G__43759) {
case (0):
(cr43683_state[(0)] = cr43683_block_7);

(cr43683_state[(2)] = cr43683_place_17);

return cr43683_state;

break;
case (1):
(cr43683_state[(0)] = cr43683_block_9);

(cr43683_state[(1)] = null);

return cr43683_state;

break;
default:
(cr43683_state[(0)] = cr43683_block_10);

(cr43683_state[(1)] = null);

(cr43683_state[(1)] = cr43683_place_15);

return cr43683_state;

}
}catch (e43756){var cr43683_exception = e43756;
(cr43683_state[(0)] = null);

(cr43683_state[(1)] = null);

throw cr43683_exception;
}});
var cr43683_block_2 = (function contrib$missionary_contrib$iterator_consumer_$_cr43683_block_2(cr43683_state){
try{var cr43683_place_4 = missionary.core.unpark();
var cr43683_place_5 = null;
if(cljs.core.truth_(cr43683_place_4)){
(cr43683_state[(0)] = cr43683_block_5);

(cr43683_state[(1)] = cr43683_place_5);

return cr43683_state;
} else {
(cr43683_state[(0)] = cr43683_block_3);

(cr43683_state[(1)] = cr43683_place_5);

return cr43683_state;
}
}catch (e43770){var cr43683_exception = e43770;
(cr43683_state[(0)] = null);

throw cr43683_exception;
}});
var cr43683_block_3 = (function contrib$missionary_contrib$iterator_consumer_$_cr43683_block_3(cr43683_state){
try{var cr43683_place_6 = (1);
var cr43683_place_7 = missionary.core.none;
(cr43683_state[(0)] = cr43683_block_4);

return missionary.core.fork(cr43683_place_6,cr43683_place_7);
}catch (e43771){var cr43683_exception = e43771;
(cr43683_state[(0)] = null);

(cr43683_state[(1)] = null);

throw cr43683_exception;
}});
var cr43683_block_11 = (function contrib$missionary_contrib$iterator_consumer_$_cr43683_block_11(cr43683_state){
try{var cr43683_place_17 = (cr43683_state[(2)]);
(cr43683_state[(0)] = cr43683_block_12);

(cr43683_state[(2)] = null);

(cr43683_state[(1)] = cr43683_place_17);

return cr43683_state;
}catch (e43772){var cr43683_exception = e43772;
(cr43683_state[(0)] = null);

(cr43683_state[(1)] = null);

(cr43683_state[(2)] = null);

throw cr43683_exception;
}});
var cr43683_block_12 = (function contrib$missionary_contrib$iterator_consumer_$_cr43683_block_12(cr43683_state){
try{var cr43683_place_5 = (cr43683_state[(1)]);
(cr43683_state[(0)] = null);

(cr43683_state[(1)] = null);

return cr43683_place_5;
}catch (e43773){var cr43683_exception = e43773;
(cr43683_state[(0)] = null);

(cr43683_state[(1)] = null);

throw cr43683_exception;
}});
var cr43683_block_4 = (function contrib$missionary_contrib$iterator_consumer_$_cr43683_block_4(cr43683_state){
try{var cr43683_place_8 = missionary.core.unpark();
(cr43683_state[(0)] = cr43683_block_12);

(cr43683_state[(1)] = cr43683_place_8);

return cr43683_state;
}catch (e43774){var cr43683_exception = e43774;
(cr43683_state[(0)] = null);

(cr43683_state[(1)] = null);

throw cr43683_exception;
}});
var cr43683_block_0 = (function contrib$missionary_contrib$iterator_consumer_$_cr43683_block_0(cr43683_state){
try{(cr43683_state[(0)] = cr43683_block_1);

return cr43683_state;
}catch (e43775){var cr43683_exception = e43775;
(cr43683_state[(0)] = null);

throw cr43683_exception;
}});
var cr43683_block_8 = (function contrib$missionary_contrib$iterator_consumer_$_cr43683_block_8(cr43683_state){
try{var cr43683_place_22 = missionary.core.unpark();
(cr43683_state[(0)] = cr43683_block_11);

(cr43683_state[(2)] = cr43683_place_22);

return cr43683_state;
}catch (e43776){var cr43683_exception = e43776;
(cr43683_state[(0)] = null);

(cr43683_state[(1)] = null);

(cr43683_state[(2)] = null);

throw cr43683_exception;
}});
var cr43683_block_5 = (function contrib$missionary_contrib$iterator_consumer_$_cr43683_block_5(cr43683_state){
try{var cr43683_place_9 = (1);
var cr43683_place_10 = missionary.core.seed;
var cr43683_place_11 = cljs.core.range;
var cr43683_place_12 = (2);
var cr43683_place_13 = (function (){var G__43779 = cr43683_place_12;
var fexpr__43778 = cr43683_place_11;
return (fexpr__43778.cljs$core$IFn$_invoke$arity$1 ? fexpr__43778.cljs$core$IFn$_invoke$arity$1(G__43779) : fexpr__43778.call(null,G__43779));
})();
var cr43683_place_14 = (function (){var G__43782 = cr43683_place_13;
var fexpr__43781 = cr43683_place_10;
return (fexpr__43781.cljs$core$IFn$_invoke$arity$1 ? fexpr__43781.cljs$core$IFn$_invoke$arity$1(G__43782) : fexpr__43781.call(null,G__43782));
})();
(cr43683_state[(0)] = cr43683_block_6);

return missionary.core.fork(cr43683_place_9,cr43683_place_14);
}catch (e43777){var cr43683_exception = e43777;
(cr43683_state[(0)] = null);

(cr43683_state[(1)] = null);

throw cr43683_exception;
}});
var cr43683_block_1 = (function contrib$missionary_contrib$iterator_consumer_$_cr43683_block_1(cr43683_state){
try{var cr43683_place_0 = missionary.core.via_call;
var cr43683_place_1 = missionary.core.blk;
var cr43683_place_2 = (function (){
return it.hasNext();
});
var cr43683_place_3 = (function (){var G__43788 = cr43683_place_1;
var G__43789 = cr43683_place_2;
var fexpr__43787 = cr43683_place_0;
return (fexpr__43787.cljs$core$IFn$_invoke$arity$2 ? fexpr__43787.cljs$core$IFn$_invoke$arity$2(G__43788,G__43789) : fexpr__43787.call(null,G__43788,G__43789));
})();
(cr43683_state[(0)] = cr43683_block_2);

return missionary.core.park(cr43683_place_3);
}catch (e43785){var cr43683_exception = e43785;
(cr43683_state[(0)] = null);

throw cr43683_exception;
}});
var cr43683_block_7 = (function contrib$missionary_contrib$iterator_consumer_$_cr43683_block_7(cr43683_state){
try{var cr43683_place_18 = missionary.core.via_call;
var cr43683_place_19 = missionary.core.blk;
var cr43683_place_20 = (function (){
return it.next();
});
var cr43683_place_21 = (function (){var G__43794 = cr43683_place_19;
var G__43795 = cr43683_place_20;
var fexpr__43793 = cr43683_place_18;
return (fexpr__43793.cljs$core$IFn$_invoke$arity$2 ? fexpr__43793.cljs$core$IFn$_invoke$arity$2(G__43794,G__43795) : fexpr__43793.call(null,G__43794,G__43795));
})();
(cr43683_state[(0)] = cr43683_block_8);

return missionary.core.park(cr43683_place_21);
}catch (e43791){var cr43683_exception = e43791;
(cr43683_state[(0)] = null);

(cr43683_state[(1)] = null);

(cr43683_state[(2)] = null);

throw cr43683_exception;
}});
var cr43683_block_10 = (function contrib$missionary_contrib$iterator_consumer_$_cr43683_block_10(cr43683_state){
try{var cr43683_place_15 = (cr43683_state[(1)]);
var cr43683_place_23 = "No matching clause: ";
var cr43683_place_24 = cr43683_place_15;
var cr43683_place_25 = [cr43683_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr43683_place_24)].join('');
var cr43683_place_26 = (new Error(cr43683_place_25));
var cr43683_place_27 = (function(){throw cr43683_place_26})();
(cr43683_state[(0)] = null);

(cr43683_state[(1)] = null);

return null;
}catch (e43797){var cr43683_exception = e43797;
(cr43683_state[(0)] = null);

(cr43683_state[(1)] = null);

throw cr43683_exception;
}});
var cr43683_block_9 = (function contrib$missionary_contrib$iterator_consumer_$_cr43683_block_9(cr43683_state){
try{(cr43683_state[(0)] = cr43683_block_1);

return cr43683_state;
}catch (e43798){var cr43683_exception = e43798;
(cr43683_state[(0)] = null);

throw cr43683_exception;
}});
return cloroutine.impl.coroutine((function (){var G__43801 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__43801[(0)] = cr43683_block_0);

return G__43801;
})());
})(),missionary.core.ap_run);
});
contrib.missionary_contrib.seq_consumer = (function contrib$missionary_contrib$seq_consumer(xs){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43802_block_9 = (function contrib$missionary_contrib$seq_consumer_$_cr43802_block_9(cr43802_state){
try{var cr43802_place_0 = (cr43802_state[(1)]);
var cr43802_place_24 = cljs.core.rest;
var cr43802_place_25 = cr43802_place_0;
var cr43802_place_26 = (function (){var G__43879 = cr43802_place_25;
var fexpr__43878 = cr43802_place_24;
return (fexpr__43878.cljs$core$IFn$_invoke$arity$1 ? fexpr__43878.cljs$core$IFn$_invoke$arity$1(G__43879) : fexpr__43878.call(null,G__43879));
})();
(cr43802_state[(0)] = cr43802_block_1);

(cr43802_state[(1)] = cr43802_place_26);

return cr43802_state;
}catch (e43877){var cr43802_exception = e43877;
(cr43802_state[(0)] = null);

(cr43802_state[(1)] = null);

throw cr43802_exception;
}});
var cr43802_block_2 = (function contrib$missionary_contrib$seq_consumer_$_cr43802_block_2(cr43802_state){
try{var cr43802_place_5 = missionary.core.unpark();
var cr43802_place_6 = null;
if(cljs.core.truth_(cr43802_place_5)){
(cr43802_state[(0)] = cr43802_block_5);

(cr43802_state[(2)] = cr43802_place_6);

return cr43802_state;
} else {
(cr43802_state[(0)] = cr43802_block_3);

(cr43802_state[(1)] = null);

(cr43802_state[(2)] = cr43802_place_6);

return cr43802_state;
}
}catch (e43881){var cr43802_exception = e43881;
(cr43802_state[(0)] = null);

(cr43802_state[(1)] = null);

throw cr43802_exception;
}});
var cr43802_block_7 = (function contrib$missionary_contrib$seq_consumer_$_cr43802_block_7(cr43802_state){
try{var cr43802_place_0 = (cr43802_state[(1)]);
var cr43802_place_19 = missionary.core.via_call;
var cr43802_place_20 = missionary.core.blk;
var cr43802_place_21 = (function (){
return cljs.core.first(cr43802_place_0);
});
var cr43802_place_22 = (function (){var G__43886 = cr43802_place_20;
var G__43887 = cr43802_place_21;
var fexpr__43885 = cr43802_place_19;
return (fexpr__43885.cljs$core$IFn$_invoke$arity$2 ? fexpr__43885.cljs$core$IFn$_invoke$arity$2(G__43886,G__43887) : fexpr__43885.call(null,G__43886,G__43887));
})();
(cr43802_state[(0)] = cr43802_block_8);

(cr43802_state[(1)] = null);

return missionary.core.park(cr43802_place_22);
}catch (e43882){var cr43802_exception = e43882;
(cr43802_state[(0)] = null);

(cr43802_state[(1)] = null);

(cr43802_state[(2)] = null);

(cr43802_state[(3)] = null);

throw cr43802_exception;
}});
var cr43802_block_11 = (function contrib$missionary_contrib$seq_consumer_$_cr43802_block_11(cr43802_state){
try{var cr43802_place_18 = (cr43802_state[(3)]);
(cr43802_state[(0)] = cr43802_block_12);

(cr43802_state[(3)] = null);

(cr43802_state[(2)] = cr43802_place_18);

return cr43802_state;
}catch (e43888){var cr43802_exception = e43888;
(cr43802_state[(0)] = null);

(cr43802_state[(2)] = null);

(cr43802_state[(3)] = null);

throw cr43802_exception;
}});
var cr43802_block_8 = (function contrib$missionary_contrib$seq_consumer_$_cr43802_block_8(cr43802_state){
try{var cr43802_place_23 = missionary.core.unpark();
(cr43802_state[(0)] = cr43802_block_11);

(cr43802_state[(3)] = cr43802_place_23);

return cr43802_state;
}catch (e43890){var cr43802_exception = e43890;
(cr43802_state[(0)] = null);

(cr43802_state[(2)] = null);

(cr43802_state[(3)] = null);

throw cr43802_exception;
}});
var cr43802_block_3 = (function contrib$missionary_contrib$seq_consumer_$_cr43802_block_3(cr43802_state){
try{var cr43802_place_7 = (1);
var cr43802_place_8 = missionary.core.none;
(cr43802_state[(0)] = cr43802_block_4);

return missionary.core.fork(cr43802_place_7,cr43802_place_8);
}catch (e43891){var cr43802_exception = e43891;
(cr43802_state[(0)] = null);

(cr43802_state[(2)] = null);

throw cr43802_exception;
}});
var cr43802_block_1 = (function contrib$missionary_contrib$seq_consumer_$_cr43802_block_1(cr43802_state){
try{var cr43802_place_0 = (cr43802_state[(1)]);
var cr43802_place_1 = missionary.core.via_call;
var cr43802_place_2 = missionary.core.blk;
var cr43802_place_3 = (function (){
return cljs.core.seq(cr43802_place_0);
});
var cr43802_place_4 = (function (){var G__43895 = cr43802_place_2;
var G__43896 = cr43802_place_3;
var fexpr__43894 = cr43802_place_1;
return (fexpr__43894.cljs$core$IFn$_invoke$arity$2 ? fexpr__43894.cljs$core$IFn$_invoke$arity$2(G__43895,G__43896) : fexpr__43894.call(null,G__43895,G__43896));
})();
(cr43802_state[(0)] = cr43802_block_2);

return missionary.core.park(cr43802_place_4);
}catch (e43892){var cr43802_exception = e43892;
(cr43802_state[(0)] = null);

(cr43802_state[(1)] = null);

throw cr43802_exception;
}});
var cr43802_block_0 = (function contrib$missionary_contrib$seq_consumer_$_cr43802_block_0(cr43802_state){
try{var cr43802_place_0 = xs;
(cr43802_state[(0)] = cr43802_block_1);

(cr43802_state[(1)] = cr43802_place_0);

return cr43802_state;
}catch (e43899){var cr43802_exception = e43899;
(cr43802_state[(0)] = null);

throw cr43802_exception;
}});
var cr43802_block_5 = (function contrib$missionary_contrib$seq_consumer_$_cr43802_block_5(cr43802_state){
try{var cr43802_place_10 = (1);
var cr43802_place_11 = missionary.core.seed;
var cr43802_place_12 = cljs.core.range;
var cr43802_place_13 = (2);
var cr43802_place_14 = (function (){var G__43906 = cr43802_place_13;
var fexpr__43905 = cr43802_place_12;
return (fexpr__43905.cljs$core$IFn$_invoke$arity$1 ? fexpr__43905.cljs$core$IFn$_invoke$arity$1(G__43906) : fexpr__43905.call(null,G__43906));
})();
var cr43802_place_15 = (function (){var G__43909 = cr43802_place_14;
var fexpr__43908 = cr43802_place_11;
return (fexpr__43908.cljs$core$IFn$_invoke$arity$1 ? fexpr__43908.cljs$core$IFn$_invoke$arity$1(G__43909) : fexpr__43908.call(null,G__43909));
})();
(cr43802_state[(0)] = cr43802_block_6);

return missionary.core.fork(cr43802_place_10,cr43802_place_15);
}catch (e43904){var cr43802_exception = e43904;
(cr43802_state[(0)] = null);

(cr43802_state[(1)] = null);

(cr43802_state[(2)] = null);

throw cr43802_exception;
}});
var cr43802_block_6 = (function contrib$missionary_contrib$seq_consumer_$_cr43802_block_6(cr43802_state){
try{var cr43802_place_16 = missionary.core.unpark();
var cr43802_place_17 = cr43802_place_16;
var cr43802_place_18 = null;
var G__43914 = cr43802_place_17;
switch (G__43914) {
case (0):
(cr43802_state[(0)] = cr43802_block_7);

(cr43802_state[(3)] = cr43802_place_18);

return cr43802_state;

break;
case (1):
(cr43802_state[(0)] = cr43802_block_9);

(cr43802_state[(2)] = null);

return cr43802_state;

break;
default:
(cr43802_state[(0)] = cr43802_block_10);

(cr43802_state[(1)] = null);

(cr43802_state[(2)] = null);

(cr43802_state[(1)] = cr43802_place_16);

return cr43802_state;

}
}catch (e43911){var cr43802_exception = e43911;
(cr43802_state[(0)] = null);

(cr43802_state[(1)] = null);

(cr43802_state[(2)] = null);

throw cr43802_exception;
}});
var cr43802_block_10 = (function contrib$missionary_contrib$seq_consumer_$_cr43802_block_10(cr43802_state){
try{var cr43802_place_16 = (cr43802_state[(1)]);
var cr43802_place_27 = "No matching clause: ";
var cr43802_place_28 = cr43802_place_16;
var cr43802_place_29 = [cr43802_place_27,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr43802_place_28)].join('');
var cr43802_place_30 = (new Error(cr43802_place_29));
var cr43802_place_31 = (function(){throw cr43802_place_30})();
(cr43802_state[(0)] = null);

(cr43802_state[(1)] = null);

return null;
}catch (e43917){var cr43802_exception = e43917;
(cr43802_state[(0)] = null);

(cr43802_state[(1)] = null);

throw cr43802_exception;
}});
var cr43802_block_4 = (function contrib$missionary_contrib$seq_consumer_$_cr43802_block_4(cr43802_state){
try{var cr43802_place_9 = missionary.core.unpark();
(cr43802_state[(0)] = cr43802_block_12);

(cr43802_state[(2)] = cr43802_place_9);

return cr43802_state;
}catch (e43923){var cr43802_exception = e43923;
(cr43802_state[(0)] = null);

(cr43802_state[(2)] = null);

throw cr43802_exception;
}});
var cr43802_block_12 = (function contrib$missionary_contrib$seq_consumer_$_cr43802_block_12(cr43802_state){
try{var cr43802_place_6 = (cr43802_state[(2)]);
(cr43802_state[(0)] = null);

(cr43802_state[(2)] = null);

return cr43802_place_6;
}catch (e43927){var cr43802_exception = e43927;
(cr43802_state[(0)] = null);

(cr43802_state[(2)] = null);

throw cr43802_exception;
}});
return cloroutine.impl.coroutine((function (){var G__43928 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((4));
(G__43928[(0)] = cr43802_block_0);

return G__43928;
})());
})(),missionary.core.ap_run);
});
/**
 * derive discrete flow from succession of polled values from a task (or mbox)
 */
contrib.missionary_contrib.poll_task = (function contrib$missionary_contrib$poll_task(task){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43932_block_6 = (function contrib$missionary_contrib$poll_task_$_cr43932_block_6(cr43932_state){
try{var cr43932_place_13 = missionary.core.unpark();
(cr43932_state[(0)] = cr43932_block_2);

(cr43932_state[(1)] = cr43932_place_13);

return cr43932_state;
}catch (e43989){var cr43932_exception = e43989;
(cr43932_state[(0)] = null);

(cr43932_state[(1)] = null);

throw cr43932_exception;
}});
var cr43932_block_2 = (function contrib$missionary_contrib$poll_task_$_cr43932_block_2(cr43932_state){
try{var cr43932_place_2 = (1);
var cr43932_place_3 = missionary.core.seed;
var cr43932_place_4 = cljs.core.range;
var cr43932_place_5 = (2);
var cr43932_place_6 = (function (){var G__43994 = cr43932_place_5;
var fexpr__43993 = cr43932_place_4;
return (fexpr__43993.cljs$core$IFn$_invoke$arity$1 ? fexpr__43993.cljs$core$IFn$_invoke$arity$1(G__43994) : fexpr__43993.call(null,G__43994));
})();
var cr43932_place_7 = (function (){var G__43998 = cr43932_place_6;
var fexpr__43997 = cr43932_place_3;
return (fexpr__43997.cljs$core$IFn$_invoke$arity$1 ? fexpr__43997.cljs$core$IFn$_invoke$arity$1(G__43998) : fexpr__43997.call(null,G__43998));
})();
(cr43932_state[(0)] = cr43932_block_3);

return missionary.core.fork(cr43932_place_2,cr43932_place_7);
}catch (e43991){var cr43932_exception = e43991;
(cr43932_state[(0)] = null);

(cr43932_state[(1)] = null);

throw cr43932_exception;
}});
var cr43932_block_0 = (function contrib$missionary_contrib$poll_task_$_cr43932_block_0(cr43932_state){
try{var cr43932_place_0 = task;
(cr43932_state[(0)] = cr43932_block_1);

return missionary.core.park(cr43932_place_0);
}catch (e43999){var cr43932_exception = e43999;
(cr43932_state[(0)] = null);

throw cr43932_exception;
}});
var cr43932_block_8 = (function contrib$missionary_contrib$poll_task_$_cr43932_block_8(cr43932_state){
try{var cr43932_place_10 = (cr43932_state[(2)]);
(cr43932_state[(0)] = null);

(cr43932_state[(2)] = null);

return cr43932_place_10;
}catch (e44001){var cr43932_exception = e44001;
(cr43932_state[(0)] = null);

(cr43932_state[(2)] = null);

throw cr43932_exception;
}});
var cr43932_block_3 = (function contrib$missionary_contrib$poll_task_$_cr43932_block_3(cr43932_state){
try{var cr43932_place_8 = missionary.core.unpark();
var cr43932_place_9 = cr43932_place_8;
var cr43932_place_10 = null;
var G__44004 = cr43932_place_9;
switch (G__44004) {
case (0):
(cr43932_state[(0)] = cr43932_block_4);

(cr43932_state[(2)] = cr43932_place_10);

return cr43932_state;

break;
case (1):
(cr43932_state[(0)] = cr43932_block_5);

return cr43932_state;

break;
default:
(cr43932_state[(0)] = cr43932_block_7);

(cr43932_state[(1)] = null);

(cr43932_state[(1)] = cr43932_place_8);

return cr43932_state;

}
}catch (e44003){var cr43932_exception = e44003;
(cr43932_state[(0)] = null);

(cr43932_state[(1)] = null);

throw cr43932_exception;
}});
var cr43932_block_4 = (function contrib$missionary_contrib$poll_task_$_cr43932_block_4(cr43932_state){
try{var cr43932_place_1 = (cr43932_state[(1)]);
var cr43932_place_11 = cr43932_place_1;
(cr43932_state[(0)] = cr43932_block_8);

(cr43932_state[(1)] = null);

(cr43932_state[(2)] = cr43932_place_11);

return cr43932_state;
}catch (e44006){var cr43932_exception = e44006;
(cr43932_state[(0)] = null);

(cr43932_state[(1)] = null);

(cr43932_state[(2)] = null);

throw cr43932_exception;
}});
var cr43932_block_5 = (function contrib$missionary_contrib$poll_task_$_cr43932_block_5(cr43932_state){
try{var cr43932_place_12 = task;
(cr43932_state[(0)] = cr43932_block_6);

return missionary.core.park(cr43932_place_12);
}catch (e44008){var cr43932_exception = e44008;
(cr43932_state[(0)] = null);

(cr43932_state[(1)] = null);

throw cr43932_exception;
}});
var cr43932_block_1 = (function contrib$missionary_contrib$poll_task_$_cr43932_block_1(cr43932_state){
try{var cr43932_place_1 = missionary.core.unpark();
(cr43932_state[(0)] = cr43932_block_2);

(cr43932_state[(1)] = cr43932_place_1);

return cr43932_state;
}catch (e44011){var cr43932_exception = e44011;
(cr43932_state[(0)] = null);

throw cr43932_exception;
}});
var cr43932_block_7 = (function contrib$missionary_contrib$poll_task_$_cr43932_block_7(cr43932_state){
try{var cr43932_place_8 = (cr43932_state[(1)]);
var cr43932_place_14 = "No matching clause: ";
var cr43932_place_15 = cr43932_place_8;
var cr43932_place_16 = [cr43932_place_14,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr43932_place_15)].join('');
var cr43932_place_17 = (new Error(cr43932_place_16));
var cr43932_place_18 = (function(){throw cr43932_place_17})();
(cr43932_state[(0)] = null);

(cr43932_state[(1)] = null);

return null;
}catch (e44014){var cr43932_exception = e44014;
(cr43932_state[(0)] = null);

(cr43932_state[(1)] = null);

throw cr43932_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44015 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__44015[(0)] = cr43932_block_0);

return G__44015;
})());
})(),missionary.core.ap_run);
});
/**
 * compare (document log) to (d/entity db eid). if a datomic txn is [op eid a v], 
 * log here is [op a v], or in other words, there is only one entity (the `eid` is 
 * constant) so we are left with not an entity but a document.
 */
contrib.missionary_contrib.document = (function contrib$missionary_contrib$document(_GT_txs){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3((function (m,p__44024){
var vec__44025 = p__44024;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44025,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44025,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44025,(2),null);
var G__44028 = op;
var G__44028__$1 = (((G__44028 instanceof cljs.core.Keyword))?G__44028.fqn:null);
switch (G__44028__$1) {
case "contrib.missionary-contrib/add":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,a,v);

break;
case "contrib.missionary-contrib/retract":
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,a);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44028__$1)].join('')));

}
}),cljs.core.PersistentArrayMap.EMPTY,_GT_txs);
});

//# sourceMappingURL=contrib.missionary_contrib.js.map
