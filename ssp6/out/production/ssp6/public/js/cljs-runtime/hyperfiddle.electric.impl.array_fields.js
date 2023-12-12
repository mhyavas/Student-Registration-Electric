goog.provide('hyperfiddle.electric.impl.array_fields');
hyperfiddle.electric.impl.array_fields.swap = (function hyperfiddle$electric$impl$array_fields$swap(var_args){
var G__45511 = arguments.length;
switch (G__45511) {
case 3:
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___45700 = arguments.length;
var i__5770__auto___45701 = (0);
while(true){
if((i__5770__auto___45701 < len__5769__auto___45700)){
args_arr__5794__auto__.push((arguments[i__5770__auto___45701]));

var G__45702 = (i__5770__auto___45701 + (1));
i__5770__auto___45701 = G__45702;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((6)),(0),null));
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5795__auto__);

}
});

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3 = (function (a,k,f){
return (a[k] = (function (){var G__45527 = (a[k]);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45527) : f.call(null,G__45527));
})());
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$4 = (function (a,k,f,x){
return (a[k] = (function (){var G__45528 = (a[k]);
var G__45529 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__45528,G__45529) : f.call(null,G__45528,G__45529));
})());
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$5 = (function (a,k,f,x,y){
return (a[k] = (function (){var G__45530 = (a[k]);
var G__45531 = x;
var G__45532 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__45530,G__45531,G__45532) : f.call(null,G__45530,G__45531,G__45532));
})());
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$6 = (function (a,k,f,x,y,z){
return (a[k] = (function (){var G__45533 = (a[k]);
var G__45534 = x;
var G__45535 = y;
var G__45536 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__45533,G__45534,G__45535,G__45536) : f.call(null,G__45533,G__45534,G__45535,G__45536));
})());
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$variadic = (function (a,k,f,x,y,z,more){
return (a[k] = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,(a[k]),x,y,z,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)));
}));

/** @this {Function} */
(hyperfiddle.electric.impl.array_fields.swap.cljs$lang$applyTo = (function (seq45504){
var G__45505 = cljs.core.first(seq45504);
var seq45504__$1 = cljs.core.next(seq45504);
var G__45506 = cljs.core.first(seq45504__$1);
var seq45504__$2 = cljs.core.next(seq45504__$1);
var G__45507 = cljs.core.first(seq45504__$2);
var seq45504__$3 = cljs.core.next(seq45504__$2);
var G__45508 = cljs.core.first(seq45504__$3);
var seq45504__$4 = cljs.core.next(seq45504__$3);
var G__45509 = cljs.core.first(seq45504__$4);
var seq45504__$5 = cljs.core.next(seq45504__$4);
var G__45510 = cljs.core.first(seq45504__$5);
var seq45504__$6 = cljs.core.next(seq45504__$5);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45505,G__45506,G__45507,G__45508,G__45509,G__45510,seq45504__$6);
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$lang$maxFixedArity = (6));

hyperfiddle.electric.impl.array_fields.get = (function hyperfiddle$electric$impl$array_fields$get(a,k){
return (a[k]);
});
hyperfiddle.electric.impl.array_fields.getset = (function hyperfiddle$electric$impl$array_fields$getset(a,k,v){
var ret = (a[k]);
(a[k] = v);

return ret;
});
hyperfiddle.electric.impl.array_fields.getswap = (function hyperfiddle$electric$impl$array_fields$getswap(a,k,f){
var ret = (a[k]);
hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3(a,k,f);

return ret;
});

/**
* @constructor
*/
hyperfiddle.electric.impl.array_fields.P = (function (state_){
this.state_ = state_;
});

(hyperfiddle.electric.impl.array_fields.P.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-","state-",-416998234,null)], null);
}));

(hyperfiddle.electric.impl.array_fields.P.cljs$lang$type = true);

(hyperfiddle.electric.impl.array_fields.P.cljs$lang$ctorStr = "hyperfiddle.electric.impl.array-fields/P");

(hyperfiddle.electric.impl.array_fields.P.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.array-fields/P");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.array-fields/P.
 */
hyperfiddle.electric.impl.array_fields.__GT_P = (function hyperfiddle$electric$impl$array_fields$__GT_P(state_){
return (new hyperfiddle.electric.impl.array_fields.P(state_));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields45678 = (function (meta45679){
this.meta45679 = meta45679;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields45678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45680,meta45679__$1){
var self__ = this;
var _45680__$1 = this;
return (new hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields45678(meta45679__$1));
}));

(hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields45678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45680){
var self__ = this;
var _45680__$1 = this;
return self__.meta45679;
}));

(hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields45678.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields45678.prototype.call = (function (unused__27532__auto__){
var self__ = this;
var self__ = this;
var G__45687 = (arguments.length - (1));
switch (G__45687) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields45678.prototype.apply = (function (self__,args45683){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45683)));
}));

(hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields45678.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_45659){
var self__ = this;
var ___27185__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(9,done_45659);
hyperfiddle.electric.impl.array_fields.x = ((0) | (0));

hyperfiddle.electric.impl.array_fields.y = ((1) | (0));

hyperfiddle.electric.impl.array_fields.aP = hyperfiddle.electric.impl.array_fields.__GT_P(cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2)));

var aP = hyperfiddle.electric.impl.array_fields.aP;
try{var values__10777__auto___45705 = (new cljs.core.List(null,(function (){var arr45613 = aP.state_;
(arr45613[hyperfiddle.electric.impl.array_fields.x] = cljs.core.identity((1)));

return (arr45613[hyperfiddle.electric.impl.array_fields.y] = cljs.core.identity((2)));
})(),(new cljs.core.List(null,(2),null,(1),null)),(2),null));
var result__10778__auto___45706 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___45705);
if(cljs.core.truth_(result__10778__auto___45706)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fset","fset",1551687988,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null),(1),new cljs.core.Symbol(null,"y","y",-117328249,null),(2)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___45705),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fset","fset",1551687988,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null),(1),new cljs.core.Symbol(null,"y","y",-117328249,null),(2)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___45705),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___45705);
}catch (e45690){var t__10765__auto___45707 = e45690;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"arr45613","arr45613",320668101,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"objects","objects",-554722035,null)], null)),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null))], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol("clojure.core","aset","clojure.core/aset",-1001104939,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arr45613","arr45613",320668101,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"objects","objects",-554722035,null)], null)),new cljs.core.Symbol(null,"x","x",-555367584,null),cljs.core.list(new cljs.core.Symbol("clojure.core","identity","clojure.core/identity",286947313,null),(1))),cljs.core.list(new cljs.core.Symbol("clojure.core","aset","clojure.core/aset",-1001104939,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arr45613","arr45613",320668101,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"objects","objects",-554722035,null)], null)),new cljs.core.Symbol(null,"y","y",-117328249,null),cljs.core.list(new cljs.core.Symbol("clojure.core","identity","clojure.core/identity",286947313,null),(2))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"fset","fset",1551687988,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null),(1),new cljs.core.Symbol(null,"y","y",-117328249,null),(2)))], null)),(2)),null,t__10765__auto___45707,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___45708 = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hyperfiddle.electric.impl.array_fields.get(aP.state_,hyperfiddle.electric.impl.array_fields.x),hyperfiddle.electric.impl.array_fields.get(aP.state_,hyperfiddle.electric.impl.array_fields.y)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),null,(1),null)),(2),null));
var result__10778__auto___45709 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___45708);
if(cljs.core.truth_(result__10778__auto___45709)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("hyperfiddle.electric.impl.array-fields","get","hyperfiddle.electric.impl.array-fields/get",962376922,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol("hyperfiddle.electric.impl.array-fields","get","hyperfiddle.electric.impl.array-fields/get",962376922,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"y","y",-117328249,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___45708),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("hyperfiddle.electric.impl.array-fields","get","hyperfiddle.electric.impl.array-fields/get",962376922,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol("hyperfiddle.electric.impl.array-fields","get","hyperfiddle.electric.impl.array-fields/get",962376922,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"y","y",-117328249,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___45708),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___45708);
}catch (e45691){var t__10765__auto___45710 = e45691;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("hyperfiddle.electric.impl.array-fields","get","hyperfiddle.electric.impl.array-fields/get",962376922,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol("hyperfiddle.electric.impl.array-fields","get","hyperfiddle.electric.impl.array-fields/get",962376922,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"y","y",-117328249,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)),null,t__10765__auto___45710,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___45711 = (new cljs.core.List(null,hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3(aP.state_,hyperfiddle.electric.impl.array_fields.x,cljs.core.inc),(new cljs.core.List(null,(2),null,(1),null)),(2),null));
var result__10778__auto___45712 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___45711);
if(cljs.core.truth_(result__10778__auto___45712)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fswap","fswap",-2114192645,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___45711),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fswap","fswap",-2114192645,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___45711),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___45711);
}catch (e45692){var t__10765__auto___45713 = e45692;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("hyperfiddle.electric.impl.array-fields","swap","hyperfiddle.electric.impl.array-fields/swap",-601049012,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"fswap","fswap",-2114192645,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)))], null)),(2)),null,t__10765__auto___45713,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___45715 = (new cljs.core.List(null,hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3(aP.state_,hyperfiddle.electric.impl.array_fields.x,cljs.core.inc),(new cljs.core.List(null,(3),null,(1),null)),(2),null));
var result__10778__auto___45716 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___45715);
if(cljs.core.truth_(result__10778__auto___45716)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"swap","swap",1869207164,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___45715),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"swap","swap",1869207164,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___45715),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___45715);
}catch (e45693){var t__10765__auto___45718 = e45693;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"swap","swap",1869207164,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),(3)),null,t__10765__auto___45718,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___45719 = (new cljs.core.List(null,hyperfiddle.electric.impl.array_fields.getset(aP.state_,hyperfiddle.electric.impl.array_fields.x,(0)),(new cljs.core.List(null,(3),null,(1),null)),(2),null));
var result__10778__auto___45720 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___45719);
if(cljs.core.truth_(result__10778__auto___45720)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fgetset","fgetset",1744389016,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null),(0)),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___45719),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fgetset","fgetset",1744389016,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null),(0)),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___45719),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___45719);
}catch (e45694){var t__10765__auto___45725 = e45694;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("hyperfiddle.electric.impl.array-fields","getset","hyperfiddle.electric.impl.array-fields/getset",-1343467261,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null),(0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"fgetset","fgetset",1744389016,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null),(0)))], null)),(3)),null,t__10765__auto___45725,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___45726 = (new cljs.core.List(null,hyperfiddle.electric.impl.array_fields.getset(aP.state_,hyperfiddle.electric.impl.array_fields.x,(100)),(new cljs.core.List(null,(0),null,(1),null)),(2),null));
var result__10778__auto___45727 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___45726);
if(cljs.core.truth_(result__10778__auto___45727)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"getset","getset",1025936179,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null),(100)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___45726),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"getset","getset",1025936179,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null),(100)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___45726),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___45726);
}catch (e45695){var t__10765__auto___45729 = e45695;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"getset","getset",1025936179,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null),(100)),(0)),null,t__10765__auto___45729,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___45730 = (new cljs.core.List(null,hyperfiddle.electric.impl.array_fields.get(aP.state_,hyperfiddle.electric.impl.array_fields.x),(new cljs.core.List(null,(100),null,(1),null)),(2),null));
var result__10778__auto___45731 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___45730);
if(cljs.core.truth_(result__10778__auto___45731)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fget","fget",1054684438,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),(100)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___45730),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fget","fget",1054684438,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),(100)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___45730),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___45730);
}catch (e45696){var t__10765__auto___45733 = e45696;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("hyperfiddle.electric.impl.array-fields","get","hyperfiddle.electric.impl.array-fields/get",962376922,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"fget","fget",1054684438,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], null)),(100)),null,t__10765__auto___45733,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___45734 = (new cljs.core.List(null,hyperfiddle.electric.impl.array_fields.getswap(aP.state_,hyperfiddle.electric.impl.array_fields.x,cljs.core.inc),(new cljs.core.List(null,(100),null,(1),null)),(2),null));
var result__10778__auto___45735 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___45734);
if(cljs.core.truth_(result__10778__auto___45735)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"getswap","getswap",-1972572248,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),(100)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___45734),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"getswap","getswap",-1972572248,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),(100)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___45734),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___45734);
}catch (e45697){var t__10765__auto___45738 = e45697;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"getswap","getswap",-1972572248,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),(100)),null,t__10765__auto___45738,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto__ = (new cljs.core.List(null,hyperfiddle.electric.impl.array_fields.get(aP.state_,hyperfiddle.electric.impl.array_fields.x),(new cljs.core.List(null,(101),null,(1),null)),(2),null));
var result__10778__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto__);
if(cljs.core.truth_(result__10778__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fget","fget",1054684438,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),(101)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fget","fget",1054684438,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),(101)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10777__auto__);
}catch (e45698){var t__10765__auto__ = e45698;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.with_meta(cljs.core.list(new cljs.core.Symbol("hyperfiddle.electric.impl.array-fields","get","hyperfiddle.electric.impl.array-fields/get",962376922,null),cljs.core.list(new cljs.core.Symbol(null,".-state-",".-state-",855100129,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null)),new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.analyzer","macroexpanded","hyperfiddle.rcf.analyzer/macroexpanded",180562122),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"fget","fget",1054684438,null),new cljs.core.Symbol(null,"aP","aP",-1121382077,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], null)),(101)),null,t__10765__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields45678.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45679","meta45679",-1881443642,null)], null);
}));

(hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields45678.cljs$lang$type = true);

(hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields45678.cljs$lang$ctorStr = "hyperfiddle.electric.impl.array-fields/t_hyperfiddle$electric$impl$array_fields45678");

(hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields45678.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.array-fields/t_hyperfiddle$electric$impl$array_fields45678");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.array-fields/t_hyperfiddle$electric$impl$array_fields45678.
 */
hyperfiddle.electric.impl.array_fields.__GT_t_hyperfiddle$electric$impl$array_fields45678 = (function hyperfiddle$electric$impl$array_fields$__GT_t_hyperfiddle$electric$impl$array_fields45678(meta45679){
return (new hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields45678(meta45679));
});


hyperfiddle.electric.impl.array_fields.generated__hyperfiddle_electric_impl_array_fields_31 = (function hyperfiddle$electric$impl$array_fields$generated__hyperfiddle_electric_impl_array_fields_31(){
return (new hyperfiddle.electric.impl.array_fields.t_hyperfiddle$electric$impl$array_fields45678(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return hyperfiddle.electric.impl.array_fields.generated__hyperfiddle_electric_impl_array_fields_31;},new cljs.core.Symbol("hyperfiddle.electric.impl.array-fields","generated__hyperfiddle_electric_impl_array_fields_31","hyperfiddle.electric.impl.array-fields/generated__hyperfiddle_electric_impl_array_fields_31",2092578177,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"hyperfiddle/electric/impl/array_fields.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"hyperfiddle.electric.impl.array-fields","hyperfiddle.electric.impl.array-fields",1216360241,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),31,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__hyperfiddle_electric_impl_array_fields_31","generated__hyperfiddle_electric_impl_array_fields_31",-1914179631,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(hyperfiddle.electric.impl.array_fields.generated__hyperfiddle_electric_impl_array_fields_31)?hyperfiddle.electric.impl.array_fields.generated__hyperfiddle_electric_impl_array_fields_31.cljs$lang$test:null)], null)),hyperfiddle.electric.impl.array_fields.generated__hyperfiddle_electric_impl_array_fields_31));
} else {
}

//# sourceMappingURL=hyperfiddle.electric.impl.array_fields.js.map
