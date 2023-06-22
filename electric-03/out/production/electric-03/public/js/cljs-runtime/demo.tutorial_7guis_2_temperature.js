goog.provide('demo.tutorial_7guis_2_temperature');
demo.tutorial_7guis_2_temperature.c__GT_f = (function demo$tutorial_7guis_2_temperature$c__GT_f(c){
return ((c * ((9) / (5))) + (32));
});
demo.tutorial_7guis_2_temperature.f__GT_c = (function demo$tutorial_7guis_2_temperature$f__GT_c(f){
return ((f - (32)) * ((5) / (9)));
});
demo.tutorial_7guis_2_temperature.random_value = (function demo$tutorial_7guis_2_temperature$random_value(_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr35647_block_0 = (function demo$tutorial_7guis_2_temperature$random_value_$_cr35647_block_0(cr35647_state){
try{var cr35647_place_0 = missionary.core.sleep;
var cr35647_place_1 = (2000);
var cr35647_place_2 = (function (){var G__35656 = cr35647_place_1;
var fexpr__35655 = cr35647_place_0;
return (fexpr__35655.cljs$core$IFn$_invoke$arity$1 ? fexpr__35655.cljs$core$IFn$_invoke$arity$1(G__35656) : fexpr__35655.call(null,G__35656));
})();
(cr35647_state[(0)] = cr35647_block_1);

return missionary.core.park(cr35647_place_2);
}catch (e35654){var cr35647_exception = e35654;
(cr35647_state[(0)] = null);

throw cr35647_exception;
}});
var cr35647_block_1 = (function demo$tutorial_7guis_2_temperature$random_value_$_cr35647_block_1(cr35647_state){
try{var cr35647_place_3 = missionary.core.unpark();
var cr35647_place_4 = cljs.core.rand_int;
var cr35647_place_5 = (250);
var cr35647_place_6 = (function (){var G__35659 = cr35647_place_5;
var fexpr__35658 = cr35647_place_4;
return (fexpr__35658.cljs$core$IFn$_invoke$arity$1 ? fexpr__35658.cljs$core$IFn$_invoke$arity$1(G__35659) : fexpr__35658.call(null,G__35659));
})();
(cr35647_state[(0)] = null);

return cr35647_place_6;
}catch (e35657){var cr35647_exception = e35657;
(cr35647_state[(0)] = null);

throw cr35647_exception;
}});
return cloroutine.impl.coroutine((function (){var G__35660 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__35660[(0)] = cr35647_block_0);

return G__35660;
})());
})(),missionary.core.sp_run);
});

//# sourceMappingURL=demo.tutorial_7guis_2_temperature.js.map
