goog.provide('contrib.str');
contrib.str.pprint_str = (function contrib$str$pprint_str(x){
var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45156_45191 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45157_45192 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45158_45193 = true;
var _STAR_print_fn_STAR__temp_val__45159_45194 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45158_45193);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45159_45194);

try{var _STAR_print_right_margin_STAR__orig_val__45161_45196 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_right_margin_STAR__temp_val__45162_45197 = (100);
(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__45162_45197);

try{var _STAR_print_pprint_dispatch_STAR__orig_val__45163_45198 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__45164_45199 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__45164_45199);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__45163_45198);
}}finally {(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__45161_45196);
}}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45157_45192);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45156_45191);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
});
contrib.str.includes_str_QMARK_ = (function contrib$str$includes_str_QMARK_(v,needle){
return clojure.string.includes_QMARK_(clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)),clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(needle)));
});
contrib.str.any_matches_QMARK_ = (function contrib$str$any_matches_QMARK_(coll,needle){
var substr = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(needle));
return cljs.core.some((function (p1__45170_SHARP_){
if(cljs.core.truth_(p1__45170_SHARP_)){
return clojure.string.includes_QMARK_(clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45170_SHARP_)),substr);
} else {
return null;
}
}),coll);
});
contrib.str.empty_QMARK_ = (function contrib$str$empty_QMARK_(s){
return ((((typeof s === 'string') && ((cljs.core.count(s) === (0))))) || ((s == null)));
});
contrib.str.empty__GT_nil = (function contrib$str$empty__GT_nil(s){
if(contrib.str.empty_QMARK_(s)){
return null;
} else {
return s;
}
});
/**
 * Nullify empty strings, identity on all other values.
 */
contrib.str.blank__GT_nil = (function contrib$str$blank__GT_nil(s){
if((!(typeof s === 'string'))){
return s;
} else {
if((!(clojure.string.blank_QMARK_(s)))){
return s;
} else {
return null;
}
}
});
contrib.str.or_str = (function contrib$str$or_str(var_args){
var G__45186 = arguments.length;
switch (G__45186) {
case 2:
return contrib.str.or_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return contrib.str.or_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(contrib.str.or_str.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var or__40231__auto__ = a;
if(cljs.core.seq(or__40231__auto__)){
return or__40231__auto__;
} else {
var or__40230__auto__ = b;
if(cljs.core.seq(or__40230__auto__)){
return or__40230__auto__;
} else {
return null;
}
}
}));

(contrib.str.or_str.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var or__40231__auto__ = a;
if(cljs.core.seq(or__40231__auto__)){
return or__40231__auto__;
} else {
var or__40231__auto____$1 = b;
if(cljs.core.seq(or__40231__auto____$1)){
return or__40231__auto____$1;
} else {
var or__40230__auto__ = c;
if(cljs.core.seq(or__40230__auto__)){
return or__40230__auto__;
} else {
return null;
}
}
}
}));

(contrib.str.or_str.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=contrib.str.js.map
