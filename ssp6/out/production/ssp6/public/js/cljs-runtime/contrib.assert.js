goog.provide('contrib.assert');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.assert.t_contrib$assert73608 = (function (meta73609){
this.meta73609 = meta73609;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.assert.t_contrib$assert73608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73610,meta73609__$1){
var self__ = this;
var _73610__$1 = this;
return (new contrib.assert.t_contrib$assert73608(meta73609__$1));
}));

(contrib.assert.t_contrib$assert73608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73610){
var self__ = this;
var _73610__$1 = this;
return self__.meta73609;
}));

(contrib.assert.t_contrib$assert73608.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.assert.t_contrib$assert73608.prototype.call = (function (unused__27519__auto__){
var self__ = this;
var self__ = this;
var G__73612 = (arguments.length - (1));
switch (G__73612) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.assert.t_contrib$assert73608.prototype.apply = (function (self__,args73611){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args73611)));
}));

(contrib.assert.t_contrib$assert73608.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_73600){
var self__ = this;
var ___27172__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(3,done_73600);
try{try{var pred__73558__auto___73619 = cljs.core.some_QMARK_;
var v__73559__auto___73620 = null;
if(cljs.core.truth_((pred__73558__auto___73619.cljs$core$IFn$_invoke$arity$1 ? pred__73558__auto___73619.cljs$core$IFn$_invoke$arity$1(v__73559__auto___73620) : pred__73558__auto___73619.call(null,v__73559__auto___73620)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["check failed: (",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol("clojure.core","some?","clojure.core/some?",-543337038,null)], 0))," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),") for ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v__73559__auto___73620], 0))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}


cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred__73558__auto__","pred__73558__auto__",1966634571,null),new cljs.core.Symbol("clojure.core","some?","clojure.core/some?",-543337038,null),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null),null], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"pred__73558__auto__","pred__73558__auto__",1966634571,null),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null)),null,cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),cljs.core.list(new cljs.core.Symbol("clojure.core","str","clojure.core/str",-1801552045,null),"check failed: (",cljs.core.list(new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","some?","clojure.core/some?",-543337038,null)))," ",cljs.core.list(new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),null)),") for ",cljs.core.list(new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null))),cljs.core.PersistentArrayMap.EMPTY)))),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"check","check",-1428126865,null),null))], null)),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null)),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}catch (e73614){if((e73614 instanceof Error)){
var e__10698__auto___73628 = e73614;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred__73558__auto__","pred__73558__auto__",1966634571,null),new cljs.core.Symbol("clojure.core","some?","clojure.core/some?",-543337038,null),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null),null], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"pred__73558__auto__","pred__73558__auto__",1966634571,null),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null)),null,cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),cljs.core.list(new cljs.core.Symbol("clojure.core","str","clojure.core/str",-1801552045,null),"check failed: (",cljs.core.list(new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","some?","clojure.core/some?",-543337038,null)))," ",cljs.core.list(new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),null)),") for ",cljs.core.list(new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null))),cljs.core.PersistentArrayMap.EMPTY)))),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"check","check",-1428126865,null),null))], null)),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null)),new cljs.core.Keyword(null,"actual","actual",107306363),e__10698__auto___73628,new cljs.core.Keyword(null,"message","message",-406056002),null], null));

} else {
throw e73614;

}
}}catch (e73613){var t__10765__auto___73630 = e73613;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred__73558__auto__","pred__73558__auto__",1966634571,null),new cljs.core.Symbol("clojure.core","some?","clojure.core/some?",-543337038,null),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null),null], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"pred__73558__auto__","pred__73558__auto__",1966634571,null),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null)),null,cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),cljs.core.list(new cljs.core.Symbol("clojure.core","str","clojure.core/str",-1801552045,null),"check failed: (",cljs.core.list(new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("clojure.core","some?","clojure.core/some?",-543337038,null)))," ",cljs.core.list(new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),null)),") for ",cljs.core.list(new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null))),cljs.core.PersistentArrayMap.EMPTY)))),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"check","check",-1428126865,null),null))], null)),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null)),null,t__10765__auto___73630,null]));
}finally {RCF__done_BANG_();
}
try{try{var pred__73558__auto___73631 = cljs.core.odd_QMARK_;
var v__73559__auto___73632 = (2);
if(cljs.core.truth_((pred__73558__auto___73631.cljs$core$IFn$_invoke$arity$1 ? pred__73558__auto___73631.cljs$core$IFn$_invoke$arity$1(v__73559__auto___73632) : pred__73558__auto___73631.call(null,v__73559__auto___73632)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["check failed: (",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null)], 0))," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0)),") for ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v__73559__auto___73632], 0))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}


cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred__73558__auto__","pred__73558__auto__",1966634571,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null),(2)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"pred__73558__auto__","pred__73558__auto__",1966634571,null),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null)),null,cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),cljs.core.list(new cljs.core.Symbol("clojure.core","str","clojure.core/str",-1801552045,null),"check failed: (",cljs.core.list(new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null)))," ",cljs.core.list(new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),(2))),") for ",cljs.core.list(new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null))),cljs.core.PersistentArrayMap.EMPTY)))),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"check","check",-1428126865,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),(2)))], null)),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null)),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}catch (e73616){if((e73616 instanceof Error)){
var e__10698__auto___73636 = e73616;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred__73558__auto__","pred__73558__auto__",1966634571,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null),(2)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"pred__73558__auto__","pred__73558__auto__",1966634571,null),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null)),null,cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),cljs.core.list(new cljs.core.Symbol("clojure.core","str","clojure.core/str",-1801552045,null),"check failed: (",cljs.core.list(new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null)))," ",cljs.core.list(new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),(2))),") for ",cljs.core.list(new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null))),cljs.core.PersistentArrayMap.EMPTY)))),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"check","check",-1428126865,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),(2)))], null)),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null)),new cljs.core.Keyword(null,"actual","actual",107306363),e__10698__auto___73636,new cljs.core.Keyword(null,"message","message",-406056002),null], null));

} else {
throw e73616;

}
}}catch (e73615){var t__10765__auto___73638 = e73615;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","thrown?","hyperfiddle.rcf/thrown?",-965362836,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred__73558__auto__","pred__73558__auto__",1966634571,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null),(2)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"pred__73558__auto__","pred__73558__auto__",1966634571,null),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null)),null,cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),cljs.core.list(new cljs.core.Symbol("clojure.core","str","clojure.core/str",-1801552045,null),"check failed: (",cljs.core.list(new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null)))," ",cljs.core.list(new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),(2))),") for ",cljs.core.list(new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null))),cljs.core.PersistentArrayMap.EMPTY)))),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"check","check",-1428126865,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),(2)))], null)),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null)),null,t__10765__auto___73638,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto__ = (new cljs.core.List(null,(function (){var pred__73558__auto__ = cljs.core.odd_QMARK_;
var v__73559__auto__ = (1);
if(cljs.core.truth_((pred__73558__auto__.cljs$core$IFn$_invoke$arity$1 ? pred__73558__auto__.cljs$core$IFn$_invoke$arity$1(v__73559__auto__) : pred__73558__auto__.call(null,v__73559__auto__)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["check failed: (",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null)], 0))," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0)),") for ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v__73559__auto__], 0))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

return v__73559__auto__;
})(),(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__10778__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto__);
if(cljs.core.truth_(result__10778__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"check","check",-1428126865,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),(1)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"check","check",-1428126865,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),(1)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10777__auto__);
}catch (e73617){var t__10765__auto__ = e73617;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred__73558__auto__","pred__73558__auto__",1966634571,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null),(1)], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"pred__73558__auto__","pred__73558__auto__",1966634571,null),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null)),null,cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("clojure.core","ex-info","clojure.core/ex-info",-504237117,null),cljs.core.list(new cljs.core.Symbol("clojure.core","str","clojure.core/str",-1801552045,null),"check failed: (",cljs.core.list(new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null)))," ",cljs.core.list(new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),(1))),") for ",cljs.core.list(new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null))),cljs.core.PersistentArrayMap.EMPTY)))),new cljs.core.Symbol(null,"v__73559__auto__","v__73559__auto__",-187677742,null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"check","check",-1428126865,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),(1)))], null)),(1)),null,t__10765__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.assert.t_contrib$assert73608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta73609","meta73609",1661554728,null)], null);
}));

(contrib.assert.t_contrib$assert73608.cljs$lang$type = true);

(contrib.assert.t_contrib$assert73608.cljs$lang$ctorStr = "contrib.assert/t_contrib$assert73608");

(contrib.assert.t_contrib$assert73608.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.assert/t_contrib$assert73608");
}));

/**
 * Positional factory function for contrib.assert/t_contrib$assert73608.
 */
contrib.assert.__GT_t_contrib$assert73608 = (function contrib$assert$__GT_t_contrib$assert73608(meta73609){
return (new contrib.assert.t_contrib$assert73608(meta73609));
});


contrib.assert.generated__contrib_assert_12 = (function contrib$assert$generated__contrib_assert_12(){
return (new contrib.assert.t_contrib$assert73608(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.assert.generated__contrib_assert_12;},new cljs.core.Symbol("contrib.assert","generated__contrib_assert_12","contrib.assert/generated__contrib_assert_12",-1126367073,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/assert.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.assert","contrib.assert",1747470434,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_assert_12","generated__contrib_assert_12",-925877598,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.assert.generated__contrib_assert_12)?contrib.assert.generated__contrib_assert_12.cljs$lang$test:null)], null)),contrib.assert.generated__contrib_assert_12));
} else {
}

//# sourceMappingURL=contrib.assert.js.map
