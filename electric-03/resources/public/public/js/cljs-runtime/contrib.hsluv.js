goog.provide('contrib.hsluv');
contrib.hsluv.MIN_F = 1.0E-8;
contrib.hsluv.MAX_F = 99.9999999;
contrib.hsluv.M = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3.240969941904521,-1.537383177570093,-0.498610760293], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.96924363628087,1.87596750150772,0.041555057407175], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.055630079696993,-0.20397695888897,1.056971514242878], null)], null);
contrib.hsluv.REF_Y = 1.0;
contrib.hsluv.REF_U = 0.19783000664283;
contrib.hsluv.REF_V = 0.46831999493879;
contrib.hsluv.KAPPA = 903.2962962;
contrib.hsluv.EPSILON = 0.0088564516;
contrib.hsluv.dot_product = (function contrib$hsluv$dot_product(a0,a1,a2,b0,b1,b2){
return (((a0 * b0) + (a1 * b1)) + (a2 * b2));
});
contrib.hsluv.from_linear = (function contrib$hsluv$from_linear(c){
if((c <= 0.0031308)){
return (12.92 * c);
} else {
return ((1.055 * Math.pow(c,((1) / 2.4))) - 0.055);
}
});
contrib.hsluv.lch__GT_luv = (function contrib$hsluv$lch__GT_luv(lch){
var l = (lch[((0) | (0))]);
var c = (lch[((1) | (0))]);
var h = (lch[((2) | (0))]);
var h_rad = ((h / (180)) * Math.PI);
var G__49834 = lch;
(G__49834[((0) | (0))] = l);

(G__49834[((1) | (0))] = (Math.cos(h_rad) * c));

(G__49834[((2) | (0))] = (Math.sin(h_rad) * c));

return G__49834;
});
var vec__49839_49881 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3.240969941904521,-1.537383177570093,-0.498610760293], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.96924363628087,1.87596750150772,0.041555057407175], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.055630079696993,-0.20397695888897,1.056971514242878], null)], null);
var vec__49842_49882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49839_49881,(0),null);
var m1a_49883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49842_49882,(0),null);
var m1b_49884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49842_49882,(1),null);
var m1c_49885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49842_49882,(2),null);
var vec__49845_49886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49839_49881,(1),null);
var m2a_49887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49845_49886,(0),null);
var m2b_49888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49845_49886,(1),null);
var m2c_49889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49845_49886,(2),null);
var vec__49848_49890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49839_49881,(2),null);
var m3a_49891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49848_49890,(0),null);
var m3b_49892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49848_49890,(1),null);
var m3c_49893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49848_49890,(2),null);
contrib.hsluv.xyz__GT_rgb = (function contrib$hsluv$xyz__GT_rgb(xyz){
var x = (xyz[((0) | (0))]);
var y = (xyz[((1) | (0))]);
var z = (xyz[((2) | (0))]);
var G__49855 = xyz;
(G__49855[((0) | (0))] = contrib.hsluv.from_linear(contrib.hsluv.dot_product(m1a_49883,m1b_49884,m1c_49885,x,y,z)));

(G__49855[((1) | (0))] = contrib.hsluv.from_linear(contrib.hsluv.dot_product(m2a_49887,m2b_49888,m2c_49889,x,y,z)));

(G__49855[((2) | (0))] = contrib.hsluv.from_linear(contrib.hsluv.dot_product(m3a_49891,m3b_49892,m3c_49893,x,y,z)));

return G__49855;
});
contrib.hsluv.l_to_y = (function contrib$hsluv$l_to_y(L){
if((L <= (8))){
return ((1.0 * L) / 903.2962962);
} else {
return (1.0 * Math.pow(((L + (16)) / (116)),(3)));
}
});
contrib.hsluv.luv__GT_xyz = (function contrib$hsluv$luv__GT_xyz(luv){
var l = (luv[((0) | (0))]);
var u = (luv[((1) | (0))]);
var v = (luv[((2) | (0))]);
if((l === (0))){
var G__49857 = luv;
(G__49857[((0) | (0))] = 0.0);

(G__49857[((1) | (0))] = 0.0);

(G__49857[((2) | (0))] = 0.0);

return G__49857;
} else {
var varU = ((u / ((13) * l)) + 0.19783000664283);
var varV = ((v / ((13) * l)) + 0.46831999493879);
var y = contrib.hsluv.l_to_y(l);
var x = ((0) - ((((9) * y) * varU) / (((varU - (4)) * varV) - (varU * varV))));
var z = (((((9) * y) - (((15) * varV) * y)) - (varV * x)) / ((3) * varV));
var G__49858 = luv;
(G__49858[((0) | (0))] = x);

(G__49858[((1) | (0))] = y);

(G__49858[((2) | (0))] = z);

return G__49858;
}
});
var vec__49859_49949 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3.240969941904521,-1.537383177570093,-0.498610760293], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.96924363628087,1.87596750150772,0.041555057407175], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.055630079696993,-0.20397695888897,1.056971514242878], null)], null);
var vec__49862_49950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49859_49949,(0),null);
var mr0_49951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49862_49950,(0),null);
var mr1_49952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49862_49950,(1),null);
var mr2_49953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49862_49950,(2),null);
var vec__49865_49954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49859_49949,(1),null);
var mg0_49955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49865_49954,(0),null);
var mg1_49956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49865_49954,(1),null);
var mg2_49957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49865_49954,(2),null);
var vec__49868_49958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49859_49949,(2),null);
var mb0_49959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49868_49958,(0),null);
var mb1_49960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49868_49958,(1),null);
var mb2_49961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49868_49958,(2),null);
var ra_49962 = (((284517) * mr0_49951) - ((94839) * mr2_49953));
var rb_49963 = ((((838422) * mr2_49953) + ((769860) * mr1_49952)) + ((731718) * mr0_49951));
var rc_49964 = (((632260) * mr2_49953) - ((126452) * mr1_49952));
var ga_49965 = (((284517) * mg0_49955) - ((94839) * mg2_49957));
var gb_49966 = ((((838422) * mg2_49957) + ((769860) * mg1_49956)) + ((731718) * mg0_49955));
var gc_49967 = (((632260) * mg2_49957) - ((126452) * mg1_49956));
var ba_49968 = (((284517) * mb0_49959) - ((94839) * mb2_49961));
var bb_49969 = ((((838422) * mb2_49961) + ((769860) * mb1_49960)) + ((731718) * mb0_49959));
var bc_49970 = (((632260) * mb2_49961) - ((126452) * mb1_49960));
contrib.hsluv.bounding_lines = (function contrib$hsluv$bounding_lines(l){
var sub1 = (Math.pow((l + (16)),(3)) / (1560896));
var sub2 = (((sub1 > 0.0088564516))?sub1:(l / 903.2962962));
var s1r = (sub2 * ra_49962);
var s2r = (sub2 * rb_49963);
var s3r = (sub2 * rc_49964);
var s1g = (sub2 * ga_49965);
var s2g = (sub2 * gb_49966);
var s3g = (sub2 * gc_49967);
var s1b = (sub2 * ba_49968);
var s2b = (sub2 * bb_49969);
var s3b = (sub2 * bc_49970);
var r0s = (s1r / s3r);
var r0i = ((s2r * l) / s3r);
var r1s = (s1r / (s3r + (126452)));
var r1i = (((s2r - (769860)) * l) / (s3r + (126452)));
var g0s = (s1g / s3g);
var g0i = ((s2g * l) / s3g);
var g1s = (s1g / (s3g + (126452)));
var g1i = (((s2g - (769860)) * l) / (s3g + (126452)));
var b0s = (s1b / s3b);
var b0i = ((s2b * l) / s3b);
var b1s = (s1b / (s3b + (126452)));
var b1i = (((s2b - (769860)) * l) / (s3b + (126452)));
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [r0s,r0i,r1s,r1i,g0s,g0i,g1s,g1i,b0s,b0i,b1s,b1i], null);
});
contrib.hsluv.distance_from_origin_angle = (function contrib$hsluv$distance_from_origin_angle(slope,intercept,angle){
var d = (intercept / (Math.sin(angle) - (slope * Math.cos(angle))));
if((d < (0))){
return Infinity;
} else {
return d;
}
});
contrib.hsluv.max_chroma_hsluv = (function contrib$hsluv$max_chroma_hsluv(l,h){
var hue_rad = (((h / (360)) * Math.PI) * (2));
var vec__49871 = contrib.hsluv.bounding_lines(l);
var r0s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49871,(0),null);
var r0i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49871,(1),null);
var r1s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49871,(2),null);
var r1i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49871,(3),null);
var g0s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49871,(4),null);
var g0i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49871,(5),null);
var g1s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49871,(6),null);
var g1i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49871,(7),null);
var b0s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49871,(8),null);
var b0i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49871,(9),null);
var b1s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49871,(10),null);
var b1i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49871,(11),null);
var x__5133__auto__ = (function (){var x__5133__auto__ = (function (){var x__5133__auto__ = (function (){var x__5133__auto__ = (function (){var x__5133__auto__ = contrib.hsluv.distance_from_origin_angle(r0s,r0i,hue_rad);
var y__5134__auto__ = contrib.hsluv.distance_from_origin_angle(r1s,r1i,hue_rad);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var y__5134__auto__ = contrib.hsluv.distance_from_origin_angle(g0s,g0i,hue_rad);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var y__5134__auto__ = contrib.hsluv.distance_from_origin_angle(g1s,g1i,hue_rad);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var y__5134__auto__ = contrib.hsluv.distance_from_origin_angle(b0s,b0i,hue_rad);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var y__5134__auto__ = contrib.hsluv.distance_from_origin_angle(b1s,b1i,hue_rad);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
});
contrib.hsluv.hsluv__GT_lch = (function contrib$hsluv$hsluv__GT_lch(hsl){
var h = (hsl[((0) | (0))]);
var s = (hsl[((1) | (0))]);
var l = (hsl[((2) | (0))]);
if((l > 99.9999999)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(0),h], null);
} else {
if((l < 1.0E-8)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),h], null);
} else {
var G__49874 = hsl;
(G__49874[((0) | (0))] = l);

(G__49874[((1) | (0))] = ((contrib.hsluv.max_chroma_hsluv(l,h) / (100)) * s));

(G__49874[((2) | (0))] = h);

return G__49874;
}
}
});
/**
 * `hsluv->rgb` convert HSLuv components to RGB
 */
contrib.hsluv.hsluv__GT_rgb = (function contrib$hsluv$hsluv__GT_rgb(hsl){
return cljs.core.vec(contrib.hsluv.xyz__GT_rgb(contrib.hsluv.luv__GT_xyz(contrib.hsluv.lch__GT_luv(contrib.hsluv.hsluv__GT_lch(cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(hsl))))));
});

//# sourceMappingURL=contrib.hsluv.js.map
