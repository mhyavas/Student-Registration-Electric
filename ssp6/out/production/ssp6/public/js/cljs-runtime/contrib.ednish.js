goog.provide('contrib.ednish');
contrib.ednish._edn_dialect_mappings = new cljs.core.PersistentArrayMap(null, 6, [" ",",","\"","'","#","~","/","!","[","(","]",")"], null);
/**
 * Re-encode an edn-string to url-safe dialect of edn-ish. Vectors, sets and maps
 * coalesce into lists and are not disambiguated.
 */
contrib.ednish.encode = (function contrib$ednish$encode(edn_str){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__47501){
var vec__47502 = p__47501;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47502,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47502,(1),null);
return clojure.string.replace(a,k,v);
}),edn_str,contrib.ednish._edn_dialect_mappings);
});
contrib.ednish.decode = (function contrib$ednish$decode(ednish_str){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__47505){
var vec__47506 = p__47505;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47506,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47506,(1),null);
return clojure.string.replace(a,k,v);
}),ednish_str,clojure.set.map_invert(contrib.ednish._edn_dialect_mappings));
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.ednish.t_contrib$ednish47510 = (function (meta47511){
this.meta47511 = meta47511;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.ednish.t_contrib$ednish47510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47512,meta47511__$1){
var self__ = this;
var _47512__$1 = this;
return (new contrib.ednish.t_contrib$ednish47510(meta47511__$1));
}));

(contrib.ednish.t_contrib$ednish47510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47512){
var self__ = this;
var _47512__$1 = this;
return self__.meta47511;
}));

(contrib.ednish.t_contrib$ednish47510.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.ednish.t_contrib$ednish47510.prototype.call = (function (unused__27532__auto__){
var self__ = this;
var self__ = this;
var G__47514 = (arguments.length - (1));
switch (G__47514) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.ednish.t_contrib$ednish47510.prototype.apply = (function (self__,args47513){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47513)));
}));

(contrib.ednish.t_contrib$ednish47510.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_47509){
var self__ = this;
var ___27185__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(5,done_47509);
try{var values__10777__auto___47530 = (new cljs.core.List(null,contrib.ednish.encode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("hyperfiddle.blog","post","hyperfiddle.blog/post",1744726431)], 0))),(new cljs.core.List(null,":hyperfiddle.blog!post",null,(1),null)),(2),null));
var result__10778__auto___47531 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___47530);
if(cljs.core.truth_(result__10778__auto___47531)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Keyword("hyperfiddle.blog","post","hyperfiddle.blog/post",1744726431))),":hyperfiddle.blog!post"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___47530),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Keyword("hyperfiddle.blog","post","hyperfiddle.blog/post",1744726431))),":hyperfiddle.blog!post"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___47530),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___47530);
}catch (e47515){var t__10765__auto___47532 = e47515;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Keyword("hyperfiddle.blog","post","hyperfiddle.blog/post",1744726431))),":hyperfiddle.blog!post"),null,t__10765__auto___47532,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___47533 = (new cljs.core.List(null,contrib.ednish.encode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"a!b","a!b",-99928603)], 0))),(new cljs.core.List(null,":a!b",null,(1),null)),(2),null));
var result__10778__auto___47534 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___47533);
if(cljs.core.truth_(result__10778__auto___47534)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Keyword(null,"a!b","a!b",-99928603))),":a!b"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___47533),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Keyword(null,"a!b","a!b",-99928603))),":a!b"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___47533),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___47533);
}catch (e47516){var t__10765__auto___47535 = e47516;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Keyword(null,"a!b","a!b",-99928603))),":a!b"),null,t__10765__auto___47535,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___47536 = (new cljs.core.List(null,contrib.ednish.encode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["kobe"], 0))),(new cljs.core.List(null,"'kobe'",null,(1),null)),(2),null));
var result__10778__auto___47537 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___47536);
if(cljs.core.truth_(result__10778__auto___47537)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),"kobe")),"'kobe'"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___47536),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),"kobe")),"'kobe'"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___47536),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___47536);
}catch (e47517){var t__10765__auto___47538 = e47517;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),"kobe")),"'kobe'"),null,t__10765__auto___47538,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___47539 = (new cljs.core.List(null,contrib.ednish.encode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["news",null,"events",null], null), null)], 0))),(new cljs.core.List(null,"~{'news','events'}",null,(1),null)),(2),null));
var result__10778__auto___47540 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___47539);
if(cljs.core.truth_(result__10778__auto___47540)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["news","null","events","null"], null), null))),"~{'news','events'}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___47539),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["news","null","events","null"], null), null))),"~{'news','events'}"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___47539),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___47539);
}catch (e47518){var t__10765__auto___47541 = e47518;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["news","null","events","null"], null), null))),"~{'news','events'}"),null,t__10765__auto___47541,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto__ = (new cljs.core.List(null,contrib.ednish.encode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.UUID("07655f77-608d-472b-bc5e-86fcecc40b00", 1459443043)], 0))),(new cljs.core.List(null,"~uuid,'07655f77-608d-472b-bc5e-86fcecc40b00'",null,(1),null)),(2),null));
var result__10778__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto__);
if(cljs.core.truth_(result__10778__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.UUID("07655f77-608d-472b-bc5e-86fcecc40b00", 1459443043))),"~uuid,'07655f77-608d-472b-bc5e-86fcecc40b00'"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.UUID("07655f77-608d-472b-bc5e-86fcecc40b00", 1459443043))),"~uuid,'07655f77-608d-472b-bc5e-86fcecc40b00'"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10777__auto__);
}catch (e47519){var t__10765__auto__ = e47519;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"encode","encode",-112898175,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.UUID("07655f77-608d-472b-bc5e-86fcecc40b00", 1459443043))),"~uuid,'07655f77-608d-472b-bc5e-86fcecc40b00'"),null,t__10765__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.ednish.t_contrib$ednish47510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta47511","meta47511",1597979110,null)], null);
}));

(contrib.ednish.t_contrib$ednish47510.cljs$lang$type = true);

(contrib.ednish.t_contrib$ednish47510.cljs$lang$ctorStr = "contrib.ednish/t_contrib$ednish47510");

(contrib.ednish.t_contrib$ednish47510.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.ednish/t_contrib$ednish47510");
}));

/**
 * Positional factory function for contrib.ednish/t_contrib$ednish47510.
 */
contrib.ednish.__GT_t_contrib$ednish47510 = (function contrib$ednish$__GT_t_contrib$ednish47510(meta47511){
return (new contrib.ednish.t_contrib$ednish47510(meta47511));
});


contrib.ednish.generated__contrib_ednish_37 = (function contrib$ednish$generated__contrib_ednish_37(){
return (new contrib.ednish.t_contrib$ednish47510(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.ednish.generated__contrib_ednish_37;},new cljs.core.Symbol("contrib.ednish","generated__contrib_ednish_37","contrib.ednish/generated__contrib_ednish_37",-1323992054,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/ednish.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.ednish","contrib.ednish",-889077725,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),37,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_ednish_37","generated__contrib_ednish_37",-1729876050,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.ednish.generated__contrib_ednish_37)?contrib.ednish.generated__contrib_ednish_37.cljs$lang$test:null)], null)),contrib.ednish.generated__contrib_ednish_37));
} else {
}
contrib.ednish.encode_uri = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(contrib.rfc3986.encode_pchar,contrib.ednish.encode,cljs.core.pr_str);
contrib.ednish.decode_uri = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(clojure.edn.read_string,contrib.ednish.decode,contrib.rfc3986.decode_pchar);

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.ednish.t_contrib$ednish47521 = (function (meta47522){
this.meta47522 = meta47522;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.ednish.t_contrib$ednish47521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47523,meta47522__$1){
var self__ = this;
var _47523__$1 = this;
return (new contrib.ednish.t_contrib$ednish47521(meta47522__$1));
}));

(contrib.ednish.t_contrib$ednish47521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47523){
var self__ = this;
var _47523__$1 = this;
return self__.meta47522;
}));

(contrib.ednish.t_contrib$ednish47521.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.ednish.t_contrib$ednish47521.prototype.call = (function (unused__27532__auto__){
var self__ = this;
var self__ = this;
var G__47525 = (arguments.length - (1));
switch (G__47525) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.ednish.t_contrib$ednish47521.prototype.apply = (function (self__,args47524){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47524)));
}));

(contrib.ednish.t_contrib$ednish47521.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_47520){
var self__ = this;
var ___27185__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(3,done_47520);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["url encoding"], 0));

try{try{var values__10777__auto___47543 = (new cljs.core.List(null,contrib.ednish.encode_uri("|"),(new cljs.core.List(null,"'%7C'",null,(1),null)),(2),null));
var result__10778__auto___47544 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___47543);
if(cljs.core.truth_(result__10778__auto___47544)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode-uri","encode-uri",-1221099955,null),"|"),"'%7C'"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___47543),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode-uri","encode-uri",-1221099955,null),"|"),"'%7C'"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___47543),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___47543);
}catch (e47526){var t__10765__auto___47545 = e47526;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"encode-uri","encode-uri",-1221099955,null),"|"),"'%7C'"),null,t__10765__auto___47545,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___47546 = (new cljs.core.List(null,contrib.ednish.decode_uri("'%7C'"),(new cljs.core.List(null,"|",null,(1),null)),(2),null));
var result__10778__auto___47547 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___47546);
if(cljs.core.truth_(result__10778__auto___47547)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"decode-uri","decode-uri",1921734364,null),"'%7C'"),"|"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___47546),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"decode-uri","decode-uri",1921734364,null),"'%7C'"),"|"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___47546),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___47546);
}catch (e47527){var t__10765__auto___47548 = e47527;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"decode-uri","decode-uri",1921734364,null),"'%7C'"),"|"),null,t__10765__auto___47548,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto__ = (new cljs.core.List(null,contrib.ednish.encode_uri("!$&'[]()*+,;=|"),(new cljs.core.List(null,"'!$&'()()*+,;=%7C'",null,(1),null)),(2),null));
var result__10778__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto__);
if(cljs.core.truth_(result__10778__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode-uri","encode-uri",-1221099955,null),"!$&'[]()*+,;=|"),"'!$&'()()*+,;=%7C'"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"encode-uri","encode-uri",-1221099955,null),"!$&'[]()*+,;=|"),"'!$&'()()*+,;=%7C'"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10777__auto__);
}catch (e47528){var t__10765__auto__ = e47528;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"encode-uri","encode-uri",-1221099955,null),"!$&'[]()*+,;=|"),"'!$&'()()*+,;=%7C'"),null,t__10765__auto__,null]));
}finally {RCF__done_BANG_();
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(contrib.ednish.t_contrib$ednish47521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta47522","meta47522",1107917078,null)], null);
}));

(contrib.ednish.t_contrib$ednish47521.cljs$lang$type = true);

(contrib.ednish.t_contrib$ednish47521.cljs$lang$ctorStr = "contrib.ednish/t_contrib$ednish47521");

(contrib.ednish.t_contrib$ednish47521.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.ednish/t_contrib$ednish47521");
}));

/**
 * Positional factory function for contrib.ednish/t_contrib$ednish47521.
 */
contrib.ednish.__GT_t_contrib$ednish47521 = (function contrib$ednish$__GT_t_contrib$ednish47521(meta47522){
return (new contrib.ednish.t_contrib$ednish47521(meta47522));
});


contrib.ednish.generated__contrib_ednish_48 = (function contrib$ednish$generated__contrib_ednish_48(){
return (new contrib.ednish.t_contrib$ednish47521(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.ednish.generated__contrib_ednish_48;},new cljs.core.Symbol("contrib.ednish","generated__contrib_ednish_48","contrib.ednish/generated__contrib_ednish_48",683599068,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/ednish.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.ednish","contrib.ednish",-889077725,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),48,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_ednish_48","generated__contrib_ednish_48",42874744,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.ednish.generated__contrib_ednish_48)?contrib.ednish.generated__contrib_ednish_48.cljs$lang$test:null)], null)),contrib.ednish.generated__contrib_ednish_48));
} else {
}
contrib.ednish.discard_leading_slash = (function contrib$ednish$discard_leading_slash(path){
if(clojure.string.starts_with_QMARK_(path,"/")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,(1));
} else {
return path;
}
});
contrib.ednish.decode_path = (function contrib$ednish$decode_path(path,read_edn_str){
if(typeof path === 'string'){
} else {
throw (new Error("Assert failed: (string? path)"));
}

if((!((read_edn_str == null)))){
} else {
throw (new Error("Assert failed: (some? read-edn-str)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,"/")){
return null;
} else {
var path__$1 = contrib.ednish.discard_leading_slash(path);
return contrib.ednish.decode_uri(path__$1);
}
});

//# sourceMappingURL=contrib.ednish.js.map
