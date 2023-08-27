goog.provide('hyperfiddle.rcf');
hyperfiddle.rcf._EQ_ = cljs.core._EQ_;
/**
 * @define {boolean}
 */
hyperfiddle.rcf.ENABLED = goog.define("hyperfiddle.rcf.ENABLED",false);
/**
 * @define {number}
 */
hyperfiddle.rcf.TIMEOUT = goog.define("hyperfiddle.rcf.TIMEOUT",(400));
hyperfiddle.rcf._STAR_enabled_STAR_ = hyperfiddle.rcf.ENABLED;
hyperfiddle.rcf.enable_BANG_ = (function hyperfiddle$rcf$enable_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39937 = arguments.length;
var i__5770__auto___39938 = (0);
while(true){
if((i__5770__auto___39938 < len__5769__auto___39937)){
args__5775__auto__.push((arguments[i__5770__auto___39938]));

var G__39940 = (i__5770__auto___39938 + (1));
i__5770__auto___39938 = G__39940;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return hyperfiddle.rcf.enable_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(hyperfiddle.rcf.enable_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__39867){
var vec__39868 = p__39867;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39868,(0),null);
return (hyperfiddle.rcf._STAR_enabled_STAR_ = (((!((v == null))))?v:true));
}));

(hyperfiddle.rcf.enable_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hyperfiddle.rcf.enable_BANG_.cljs$lang$applyTo = (function (seq39865){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39865));
}));

hyperfiddle.rcf._STAR_timeout_STAR_ = hyperfiddle.rcf.TIMEOUT;
hyperfiddle.rcf.set_timeout_BANG_ = (function hyperfiddle$rcf$set_timeout_BANG_(ms){
return (hyperfiddle.rcf._STAR_timeout_STAR_ = ms);
});
/**
 * 
 * Function to push value to async queue, e.g. `(tap 42)`. RCF redefines this var in tests context. For REPL
 * convenience, defaults to println outside of tests context.
 */
hyperfiddle.rcf.tap = (function hyperfiddle$rcf$tap(x){
var G__39879 = x;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__39879], 0));

return G__39879;
});
/**
 * Deprecated alias for `tap`.
 */
hyperfiddle.rcf._BANG_ = hyperfiddle.rcf.tap;
hyperfiddle.rcf.push_binding = (function hyperfiddle$rcf$push_binding(q,d){
var vec__39883 = q;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39883,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39883,(1),null);
var _a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39883,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,c,b], null);
});
hyperfiddle.rcf.binding_queue = (function hyperfiddle$rcf$binding_queue(){
var _BANG_q = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null));
var push_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,_BANG_q,hyperfiddle.rcf.push_binding);
var peek_BANG_ = (function (p1__39888_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_q),p1__39888_SHARP_);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [push_BANG_,peek_BANG_], null);
});
hyperfiddle.rcf.gen_name = (function hyperfiddle$rcf$gen_name(form){
var map__39892 = cljs.core.meta(form);
var map__39892__$1 = cljs.core.__destructure_map(map__39892);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39892__$1,new cljs.core.Keyword(null,"line","line",212345235));
var _column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39892__$1,new cljs.core.Keyword(null,"_column","_column",1701250361));
var file = clojure.string.replace(cljs.core.name(cljs.core.ns_name(cljs.core._STAR_ns_STAR_)),/[-\.]/,"_");
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["generated__",file,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
});
hyperfiddle.rcf.done = (function hyperfiddle$rcf$done(){
return null;
});
hyperfiddle.rcf.async_notifier = (function hyperfiddle$rcf$async_notifier(n,done){
var _BANG_seen = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_seen,cljs.core.inc);

if(cljs.core.truth_((function (){var G__39896 = cljs.core.deref(_BANG_seen);
var G__39897 = n;
return (hyperfiddle.rcf._EQ_.cljs$core$IFn$_invoke$arity$2 ? hyperfiddle.rcf._EQ_.cljs$core$IFn$_invoke$arity$2(G__39896,G__39897) : hyperfiddle.rcf._EQ_.call(null,G__39896,G__39897));
})())){
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
} else {
return null;
}
});
});
hyperfiddle.rcf.rcf_shadow_hook = (function hyperfiddle$rcf$rcf_shadow_hook(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39950 = arguments.length;
var i__5770__auto___39951 = (0);
while(true){
if((i__5770__auto___39951 < len__5769__auto___39950)){
args__5775__auto__.push((arguments[i__5770__auto___39951]));

var G__39952 = (i__5770__auto___39951 + (1));
i__5770__auto___39951 = G__39952;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return hyperfiddle.rcf.rcf_shadow_hook.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(hyperfiddle.rcf.rcf_shadow_hook.cljs$core$IFn$_invoke$arity$variadic = (function (build_state,args){
var G__39933_39955 = new cljs.core.Keyword("shadow.build","stage","shadow.build/stage",1205499684).cljs$core$IFn$_invoke$arity$1(build_state);
var G__39933_39956__$1 = (((G__39933_39955 instanceof cljs.core.Keyword))?G__39933_39955.fqn:null);
switch (G__39933_39956__$1) {
case "configure":
hyperfiddle.rcf.enable_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0));

break;
case "flush":
hyperfiddle.rcf.enable_BANG_();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39933_39956__$1)].join('')));

}

return build_state;
}));

(hyperfiddle.rcf.rcf_shadow_hook.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hyperfiddle.rcf.rcf_shadow_hook.cljs$lang$applyTo = (function (seq39922){
var G__39923 = cljs.core.first(seq39922);
var seq39922__$1 = cljs.core.next(seq39922);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39923,seq39922__$1);
}));


//# sourceMappingURL=hyperfiddle.rcf.js.map
