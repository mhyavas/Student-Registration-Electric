goog.provide('user.demo_color');
user.demo_color.CANVAS_WIDTH = (360);
user.demo_color.CANVAS_HEIGHT = (100);
user.demo_color.format_rgb = (function user$demo_color$format_rgb(p__49920){
var vec__49921 = p__49920;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49921,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49921,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49921,(2),null);
return ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),")"].join('');
});
user.demo_color.draw_BANG_ = (function user$demo_color$draw_BANG_(canvas,colorf){
var ctx = canvas.getContext("2d");
var angle = (0);
while(true){
(ctx.strokeStyle = (colorf.cljs$core$IFn$_invoke$arity$1 ? colorf.cljs$core$IFn$_invoke$arity$1(angle) : colorf.call(null,angle)));

ctx.beginPath();

ctx.moveTo(angle,(0));

ctx.lineTo(angle,user.demo_color.CANVAS_HEIGHT);

ctx.closePath();

ctx.stroke();

if((angle < (360))){
var G__49929 = (angle + (1));
angle = G__49929;
continue;
} else {
return null;
}
break;
}
});
user.demo_color.draw_gradient_BANG_ = (function user$demo_color$draw_gradient_BANG_(canvas,hue,colorf){
return user.demo_color.draw_BANG_(canvas,(function (angle){
return user.demo_color.format_rgb(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(angle,hue))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null):(colorf.cljs$core$IFn$_invoke$arity$1 ? colorf.cljs$core$IFn$_invoke$arity$1(angle) : colorf.call(null,angle))));
}));
});
user.demo_color.saturation__GT_chroma = (function user$demo_color$saturation__GT_chroma(saturation){
return (0.158 * (saturation / (100)));
});

//# sourceMappingURL=user.demo_color.js.map
