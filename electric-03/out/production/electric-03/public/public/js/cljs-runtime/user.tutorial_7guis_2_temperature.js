goog.provide('user.tutorial_7guis_2_temperature');
user.tutorial_7guis_2_temperature.c__GT_f = (function user$tutorial_7guis_2_temperature$c__GT_f(c){
return ((c * ((9) / (5))) + (32));
});
user.tutorial_7guis_2_temperature.f__GT_c = (function user$tutorial_7guis_2_temperature$f__GT_c(f){
return ((f - (32)) * ((5) / (9)));
});
user.tutorial_7guis_2_temperature.random_value = (function user$tutorial_7guis_2_temperature$random_value(_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr49721_block_0 = (function user$tutorial_7guis_2_temperature$random_value_$_cr49721_block_0(cr49721_state){
try{var cr49721_place_0 = missionary.core.sleep;
var cr49721_place_1 = (2000);
var cr49721_place_2 = (function (){var G__49730 = cr49721_place_1;
var fexpr__49729 = cr49721_place_0;
return (fexpr__49729.cljs$core$IFn$_invoke$arity$1 ? fexpr__49729.cljs$core$IFn$_invoke$arity$1(G__49730) : fexpr__49729.call(null,G__49730));
})();
(cr49721_state[(0)] = cr49721_block_1);

return missionary.core.park(cr49721_place_2);
}catch (e49728){var cr49721_exception = e49728;
(cr49721_state[(0)] = null);

throw cr49721_exception;
}});
var cr49721_block_1 = (function user$tutorial_7guis_2_temperature$random_value_$_cr49721_block_1(cr49721_state){
try{var cr49721_place_3 = missionary.core.unpark();
var cr49721_place_4 = cljs.core.rand_int;
var cr49721_place_5 = (250);
var cr49721_place_6 = (function (){var G__49733 = cr49721_place_5;
var fexpr__49732 = cr49721_place_4;
return (fexpr__49732.cljs$core$IFn$_invoke$arity$1 ? fexpr__49732.cljs$core$IFn$_invoke$arity$1(G__49733) : fexpr__49732.call(null,G__49733));
})();
(cr49721_state[(0)] = null);

return cr49721_place_6;
}catch (e49731){var cr49721_exception = e49731;
(cr49721_state[(0)] = null);

throw cr49721_exception;
}});
return cloroutine.impl.coroutine((function (){var G__49734 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__49734[(0)] = cr49721_block_0);

return G__49734;
})());
})(),missionary.core.sp_run);
});

//# sourceMappingURL=user.tutorial_7guis_2_temperature.js.map
