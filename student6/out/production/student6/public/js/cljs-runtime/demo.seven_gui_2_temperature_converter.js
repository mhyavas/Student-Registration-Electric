goog.provide('demo.seven_gui_2_temperature_converter');
demo.seven_gui_2_temperature_converter.c__GT_f = (function demo$seven_gui_2_temperature_converter$c__GT_f(c){
return ((c * ((9) / (5))) + (32));
});
demo.seven_gui_2_temperature_converter.f__GT_c = (function demo$seven_gui_2_temperature_converter$f__GT_c(f){
return ((f - (32)) * ((5) / (9)));
});
demo.seven_gui_2_temperature_converter.random_value = (function demo$seven_gui_2_temperature_converter$random_value(_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr39266_block_0 = (function demo$seven_gui_2_temperature_converter$random_value_$_cr39266_block_0(cr39266_state){
try{var cr39266_place_0 = missionary.core.sleep;
var cr39266_place_1 = (2000);
var cr39266_place_2 = (function (){var G__39275 = cr39266_place_1;
var fexpr__39274 = cr39266_place_0;
return (fexpr__39274.cljs$core$IFn$_invoke$arity$1 ? fexpr__39274.cljs$core$IFn$_invoke$arity$1(G__39275) : fexpr__39274.call(null,G__39275));
})();
(cr39266_state[(0)] = cr39266_block_1);

return missionary.core.park(cr39266_place_2);
}catch (e39273){var cr39266_exception = e39273;
(cr39266_state[(0)] = null);

throw cr39266_exception;
}});
var cr39266_block_1 = (function demo$seven_gui_2_temperature_converter$random_value_$_cr39266_block_1(cr39266_state){
try{var cr39266_place_3 = missionary.core.unpark();
var cr39266_place_4 = cljs.core.rand_int;
var cr39266_place_5 = (250);
var cr39266_place_6 = (function (){var G__39278 = cr39266_place_5;
var fexpr__39277 = cr39266_place_4;
return (fexpr__39277.cljs$core$IFn$_invoke$arity$1 ? fexpr__39277.cljs$core$IFn$_invoke$arity$1(G__39278) : fexpr__39277.call(null,G__39278));
})();
(cr39266_state[(0)] = null);

return cr39266_place_6;
}catch (e39276){var cr39266_exception = e39276;
(cr39266_state[(0)] = null);

throw cr39266_exception;
}});
return cloroutine.impl.coroutine((function (){var G__39279 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__39279[(0)] = cr39266_block_0);

return G__39279;
})());
})(),missionary.core.sp_run);
});

//# sourceMappingURL=demo.seven_gui_2_temperature_converter.js.map
