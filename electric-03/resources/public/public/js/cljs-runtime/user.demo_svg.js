goog.provide('user.demo_svg');
user.demo_svg.wave = (function user$demo_svg$wave(time){
return Math.cos(((cljs.core.mod(Math.round((time / (10))),(360)) * Math.PI) / (180)));
});

//# sourceMappingURL=user.demo_svg.js.map
