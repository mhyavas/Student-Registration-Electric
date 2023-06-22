goog.provide('contrib.debug');
contrib.debug._BANG_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
contrib.debug.instrument_STAR_ = (function contrib$debug$instrument_STAR_(nm,flow){
return (function (n,t){
var id = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(contrib.debug._BANG_id,cljs.core.inc);
var it = (function (){var G__35129 = (function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nm,id,new cljs.core.Keyword(null,"notified","notified",-1434696295)], 0));

return (n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));
});
var G__35130 = (function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nm,id,new cljs.core.Keyword(null,"terminated","terminated",-1954638860)], 0));

return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
});
return (flow.cljs$core$IFn$_invoke$arity$2 ? flow.cljs$core$IFn$_invoke$arity$2(G__35129,G__35130) : flow.call(null,G__35129,G__35130));
})();
if((typeof contrib !== 'undefined') && (typeof contrib.debug !== 'undefined') && (typeof contrib.debug.t_contrib$debug35134 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
contrib.debug.t_contrib$debug35134 = (function (nm,flow,n,t,id,it,meta35135){
this.nm = nm;
this.flow = flow;
this.n = n;
this.t = t;
this.id = id;
this.it = it;
this.meta35135 = meta35135;
this.cljs$lang$protocol_mask$partition0$ = 425985;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.debug.t_contrib$debug35134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35136,meta35135__$1){
var self__ = this;
var _35136__$1 = this;
return (new contrib.debug.t_contrib$debug35134(self__.nm,self__.flow,self__.n,self__.t,self__.id,self__.it,meta35135__$1));
}));

(contrib.debug.t_contrib$debug35134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35136){
var self__ = this;
var _35136__$1 = this;
return self__.meta35135;
}));

(contrib.debug.t_contrib$debug35134.prototype.call = (function (unused__14959__auto__){
var self__ = this;
var self__ = this;
var G__35142 = (arguments.length - (1));
switch (G__35142) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.debug.t_contrib$debug35134.prototype.apply = (function (self__,args35140){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args35140)));
}));

(contrib.debug.t_contrib$debug35134.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.nm,self__.id,new cljs.core.Keyword(null,"cancelled","cancelled",488726224)], 0));

return (self__.it.cljs$core$IFn$_invoke$arity$0 ? self__.it.cljs$core$IFn$_invoke$arity$0() : self__.it.call(null));
}));

(contrib.debug.t_contrib$debug35134.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var v = cljs.core.deref(self__.it);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.nm,self__.id,new cljs.core.Keyword(null,"transferred","transferred",-1781991629),(((v instanceof hyperfiddle.electric.Failure))?(function (){var e = v.error;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.type(e),cljs.core.ex_message(e)], null);
})():v)], 0));

return v;
}));

(contrib.debug.t_contrib$debug35134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nm","nm",-188384525,null),new cljs.core.Symbol(null,"flow","flow",-2063946737,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"it","it",-1630841225,null),new cljs.core.Symbol(null,"meta35135","meta35135",-1081079979,null)], null);
}));

(contrib.debug.t_contrib$debug35134.cljs$lang$type = true);

(contrib.debug.t_contrib$debug35134.cljs$lang$ctorStr = "contrib.debug/t_contrib$debug35134");

(contrib.debug.t_contrib$debug35134.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.debug/t_contrib$debug35134");
}));

/**
 * Positional factory function for contrib.debug/t_contrib$debug35134.
 */
contrib.debug.__GT_t_contrib$debug35134 = (function contrib$debug$instrument_STAR__$___GT_t_contrib$debug35134(nm__$1,flow__$1,n__$1,t__$1,id__$1,it__$1,meta35135){
return (new contrib.debug.t_contrib$debug35134(nm__$1,flow__$1,n__$1,t__$1,id__$1,it__$1,meta35135));
});

}

return (new contrib.debug.t_contrib$debug35134(nm,flow,n,t,id,it,cljs.core.PersistentArrayMap.EMPTY));
});
});

//# sourceMappingURL=contrib.debug.js.map
