goog.provide('contrib.char$');
contrib.char$.char_upper = (function contrib$char$$char_upper(c){
return clojure.string.upper_case(c);
});
contrib.char$.char_lower = (function contrib$char$$char_lower(c){
return clojure.string.lower_case(c);
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.char$.t_contrib$char$47325 = (function (meta47326){
this.meta47326 = meta47326;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.char$.t_contrib$char$47325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47327,meta47326__$1){
var self__ = this;
var _47327__$1 = this;
return (new contrib.char$.t_contrib$char$47325(meta47326__$1));
}));

(contrib.char$.t_contrib$char$47325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47327){
var self__ = this;
var _47327__$1 = this;
return self__.meta47326;
}));

(contrib.char$.t_contrib$char$47325.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.char$.t_contrib$char$47325.prototype.call = (function (unused__27532__auto__){
var self__ = this;
var self__ = this;
var G__47333 = (arguments.length - (1));
switch (G__47333) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.char$.t_contrib$char$47325.prototype.apply = (function (self__,args47332){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47332)));
}));

(contrib.char$.t_contrib$char$47325.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_47312){
var self__ = this;
var ___27185__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(4,done_47312);
try{var values__10777__auto___47427 = (new cljs.core.List(null,contrib.char$.char_upper("c"),(new cljs.core.List(null,"C",null,(1),null)),(2),null));
var result__10778__auto___47428 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___47427);
if(cljs.core.truth_(result__10778__auto___47428)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char-upper","char-upper",-842703348,null),"c"),"C"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___47427),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char-upper","char-upper",-842703348,null),"c"),"C"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___47427),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___47427);
}catch (e47340){var t__10765__auto___47429 = e47340;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"char-upper","char-upper",-842703348,null),"c"),"C"),null,t__10765__auto___47429,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___47430 = (new cljs.core.List(null,contrib.char$.char_lower("C"),(new cljs.core.List(null,"c",null,(1),null)),(2),null));
var result__10778__auto___47431 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___47430);
if(cljs.core.truth_(result__10778__auto___47431)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char-lower","char-lower",1972076385,null),"C"),"c"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___47430),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char-lower","char-lower",1972076385,null),"C"),"c"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___47430),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___47430);
}catch (e47341){var t__10765__auto___47432 = e47341;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"char-lower","char-lower",1972076385,null),"C"),"c"),null,t__10765__auto___47432,null]));
}finally {RCF__done_BANG_();
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["works on strings"], 0));

try{try{var values__10777__auto___47433 = (new cljs.core.List(null,contrib.char$.char_upper("c"),(new cljs.core.List(null,"C",null,(1),null)),(2),null));
var result__10778__auto___47434 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___47433);
if(cljs.core.truth_(result__10778__auto___47434)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char-upper","char-upper",-842703348,null),"c"),"C"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___47433),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char-upper","char-upper",-842703348,null),"c"),"C"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___47433),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___47433);
}catch (e47343){var t__10765__auto___47435 = e47343;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"char-upper","char-upper",-842703348,null),"c"),"C"),null,t__10765__auto___47435,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto__ = (new cljs.core.List(null,contrib.char$.char_lower("C"),(new cljs.core.List(null,"c",null,(1),null)),(2),null));
var result__10778__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto__);
if(cljs.core.truth_(result__10778__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char-lower","char-lower",1972076385,null),"C"),"c"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char-lower","char-lower",1972076385,null),"C"),"c"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10777__auto__);
}catch (e47344){var t__10765__auto__ = e47344;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"char-lower","char-lower",1972076385,null),"C"),"c"),null,t__10765__auto__,null]));
}finally {RCF__done_BANG_();
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}));

(contrib.char$.t_contrib$char$47325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta47326","meta47326",696428373,null)], null);
}));

(contrib.char$.t_contrib$char$47325.cljs$lang$type = true);

(contrib.char$.t_contrib$char$47325.cljs$lang$ctorStr = "contrib.char$/t_contrib$char$47325");

(contrib.char$.t_contrib$char$47325.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.char$/t_contrib$char$47325");
}));

/**
 * Positional factory function for contrib.char$/t_contrib$char$47325.
 */
contrib.char$.__GT_t_contrib$char$47325 = (function contrib$char$$__GT_t_contrib$char$47325(meta47326){
return (new contrib.char$.t_contrib$char$47325(meta47326));
});


contrib.char$.generated__contrib_char$_14 = (function contrib$char$$generated__contrib_char$_14(){
return (new contrib.char$.t_contrib$char$47325(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.char$.generated__contrib_char$_14;},new cljs.core.Symbol("contrib.char$","generated__contrib_char$_14","contrib.char$/generated__contrib_char$_14",1941671940,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/char$.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.char$","contrib.char$",1360832943,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),14,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_char$_14","generated__contrib_char$_14",-270309873,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.char$.generated__contrib_char$_14)?contrib.char$.generated__contrib_char$_14.cljs$lang$test:null)], null)),contrib.char$.generated__contrib_char$_14));
} else {
}
contrib.char$.char_code = (function contrib$char$$char_code(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

return c.charCodeAt();
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.char$.t_contrib$char$47374 = (function (meta47375){
this.meta47375 = meta47375;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.char$.t_contrib$char$47374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47376,meta47375__$1){
var self__ = this;
var _47376__$1 = this;
return (new contrib.char$.t_contrib$char$47374(meta47375__$1));
}));

(contrib.char$.t_contrib$char$47374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47376){
var self__ = this;
var _47376__$1 = this;
return self__.meta47375;
}));

(contrib.char$.t_contrib$char$47374.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.char$.t_contrib$char$47374.prototype.call = (function (unused__27532__auto__){
var self__ = this;
var self__ = this;
var G__47381 = (arguments.length - (1));
switch (G__47381) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.char$.t_contrib$char$47374.prototype.apply = (function (self__,args47377){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47377)));
}));

(contrib.char$.t_contrib$char$47374.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_47367){
var self__ = this;
var ___27185__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(1,done_47367);
try{var values__10777__auto__ = (new cljs.core.List(null,cljs.core.map.cljs$core$IFn$_invoke$arity$2(contrib.char$.char_code,"abcd|"),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(97),(98),(99),(100),(124)], null),null,(1),null)),(2),null));
var result__10778__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto__);
if(cljs.core.truth_(result__10778__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"char-code","char-code",-1900072444,null),"abcd|"),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(97),(98),(99),(100),(124)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"char-code","char-code",-1900072444,null),"abcd|"),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(97),(98),(99),(100),(124)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10777__auto__);
}catch (e47382){var t__10765__auto__ = e47382;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"char-code","char-code",-1900072444,null),"abcd|"),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(97),(98),(99),(100),(124)], null)),null,t__10765__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.char$.t_contrib$char$47374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta47375","meta47375",-1881734889,null)], null);
}));

(contrib.char$.t_contrib$char$47374.cljs$lang$type = true);

(contrib.char$.t_contrib$char$47374.cljs$lang$ctorStr = "contrib.char$/t_contrib$char$47374");

(contrib.char$.t_contrib$char$47374.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.char$/t_contrib$char$47374");
}));

/**
 * Positional factory function for contrib.char$/t_contrib$char$47374.
 */
contrib.char$.__GT_t_contrib$char$47374 = (function contrib$char$$__GT_t_contrib$char$47374(meta47375){
return (new contrib.char$.t_contrib$char$47374(meta47375));
});


contrib.char$.generated__contrib_char$_32 = (function contrib$char$$generated__contrib_char$_32(){
return (new contrib.char$.t_contrib$char$47374(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.char$.generated__contrib_char$_32;},new cljs.core.Symbol("contrib.char$","generated__contrib_char$_32","contrib.char$/generated__contrib_char$_32",199399699,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/char$.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.char$","contrib.char$",1360832943,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),32,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_char$_32","generated__contrib_char$_32",-1618146534,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.char$.generated__contrib_char$_32)?contrib.char$.generated__contrib_char$_32.cljs$lang$test:null)], null)),contrib.char$.generated__contrib_char$_32));
} else {
}
contrib.char$.dec__GT_hex = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(15),(13),(6),(3),(12),(2),(11),(9),(5),(14),(10),(8)],["0","7","1","4","F","D","6","3","C","2","B","9","5","E","A","8"]);
contrib.char$.hex__GT_dec = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.set.map_invert(contrib.char$.dec__GT_hex),clojure.set.map_invert(cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,contrib.char$.char_lower(v));
}),cljs.core.PersistentArrayMap.EMPTY,contrib.char$.dec__GT_hex))], 0));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.char$.t_contrib$char$47398 = (function (meta47399){
this.meta47399 = meta47399;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.char$.t_contrib$char$47398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47400,meta47399__$1){
var self__ = this;
var _47400__$1 = this;
return (new contrib.char$.t_contrib$char$47398(meta47399__$1));
}));

(contrib.char$.t_contrib$char$47398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47400){
var self__ = this;
var _47400__$1 = this;
return self__.meta47399;
}));

(contrib.char$.t_contrib$char$47398.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.char$.t_contrib$char$47398.prototype.call = (function (unused__27532__auto__){
var self__ = this;
var self__ = this;
var G__47402 = (arguments.length - (1));
switch (G__47402) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.char$.t_contrib$char$47398.prototype.apply = (function (self__,args47401){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47401)));
}));

(contrib.char$.t_contrib$char$47398.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_47394){
var self__ = this;
var ___27185__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(2,done_47394);
try{var values__10777__auto___47438 = (new cljs.core.List(null,(contrib.char$.dec__GT_hex.cljs$core$IFn$_invoke$arity$1 ? contrib.char$.dec__GT_hex.cljs$core$IFn$_invoke$arity$1((10)) : contrib.char$.dec__GT_hex.call(null,(10))),(new cljs.core.List(null,"A",null,(1),null)),(2),null));
var result__10778__auto___47439 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___47438);
if(cljs.core.truth_(result__10778__auto___47439)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"dec->hex","dec->hex",-879458606,null),(10)),"A"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___47438),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"dec->hex","dec->hex",-879458606,null),(10)),"A"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___47438),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___47438);
}catch (e47403){var t__10765__auto___47440 = e47403;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"dec->hex","dec->hex",-879458606,null),(10)),"A"),null,t__10765__auto___47440,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto__ = (new cljs.core.List(null,(function (){var G__47405 = "A";
return (contrib.char$.hex__GT_dec.cljs$core$IFn$_invoke$arity$1 ? contrib.char$.hex__GT_dec.cljs$core$IFn$_invoke$arity$1(G__47405) : contrib.char$.hex__GT_dec.call(null,G__47405));
})(),(new cljs.core.List(null,(10),null,(1),null)),(2),null));
var result__10778__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto__);
if(cljs.core.truth_(result__10778__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"hex->dec","hex->dec",47681776,null),"A"),(10)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"hex->dec","hex->dec",47681776,null),"A"),(10)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10777__auto__);
}catch (e47404){var t__10765__auto__ = e47404;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"hex->dec","hex->dec",47681776,null),"A"),(10)),null,t__10765__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.char$.t_contrib$char$47398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta47399","meta47399",296539761,null)], null);
}));

(contrib.char$.t_contrib$char$47398.cljs$lang$type = true);

(contrib.char$.t_contrib$char$47398.cljs$lang$ctorStr = "contrib.char$/t_contrib$char$47398");

(contrib.char$.t_contrib$char$47398.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.char$/t_contrib$char$47398");
}));

/**
 * Positional factory function for contrib.char$/t_contrib$char$47398.
 */
contrib.char$.__GT_t_contrib$char$47398 = (function contrib$char$$__GT_t_contrib$char$47398(meta47399){
return (new contrib.char$.t_contrib$char$47398(meta47399));
});


contrib.char$.generated__contrib_char$_38 = (function contrib$char$$generated__contrib_char$_38(){
return (new contrib.char$.t_contrib$char$47398(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.char$.generated__contrib_char$_38;},new cljs.core.Symbol("contrib.char$","generated__contrib_char$_38","contrib.char$/generated__contrib_char$_38",1946324044,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/char$.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.char$","contrib.char$",1360832943,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),38,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_char$_38","generated__contrib_char$_38",-520392009,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.char$.generated__contrib_char$_38)?contrib.char$.generated__contrib_char$_38.cljs$lang$test:null)], null)),contrib.char$.generated__contrib_char$_38));
} else {
}
contrib.char$.char__GT_hex_str = (function contrib$char$$char__GT_hex_str(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(contrib.char$.dec__GT_hex,cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__47406_SHARP_){
return cljs.core.quot(p1__47406_SHARP_,(16));
}),(function (p1__47407_SHARP_){
return cljs.core.mod(p1__47407_SHARP_,(16));
}))(contrib.char$.char_code(c))));
});
contrib.char$.hex_str__GT_char = (function contrib$char$$hex_str__GT_char(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(s))){
} else {
throw (new Error("Assert failed: (= 2 (count s))"));
}

var vec__47408 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(contrib.char$.hex__GT_dec,s);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47408,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47408,(1),null);
return cljs.core.char$((((16) * (a | (0))) + (b | (0))));
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
contrib.char$.t_contrib$char$47412 = (function (meta47413){
this.meta47413 = meta47413;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(contrib.char$.t_contrib$char$47412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47414,meta47413__$1){
var self__ = this;
var _47414__$1 = this;
return (new contrib.char$.t_contrib$char$47412(meta47413__$1));
}));

(contrib.char$.t_contrib$char$47412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47414){
var self__ = this;
var _47414__$1 = this;
return self__.meta47413;
}));

(contrib.char$.t_contrib$char$47412.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(contrib.char$.t_contrib$char$47412.prototype.call = (function (unused__27532__auto__){
var self__ = this;
var self__ = this;
var G__47416 = (arguments.length - (1));
switch (G__47416) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(contrib.char$.t_contrib$char$47412.prototype.apply = (function (self__,args47415){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47415)));
}));

(contrib.char$.t_contrib$char$47412.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done_47411){
var self__ = this;
var ___27185__auto__ = this;
var RCF__done_BANG_ = hyperfiddle.rcf.async_notifier(7,done_47411);
try{var values__10777__auto___47442 = (new cljs.core.List(null,(function (){var G__47418 = "a";
return (contrib.char$.hex__GT_dec.cljs$core$IFn$_invoke$arity$1 ? contrib.char$.hex__GT_dec.cljs$core$IFn$_invoke$arity$1(G__47418) : contrib.char$.hex__GT_dec.call(null,G__47418));
})(),(new cljs.core.List(null,(function (){var G__47419 = "A";
return (contrib.char$.hex__GT_dec.cljs$core$IFn$_invoke$arity$1 ? contrib.char$.hex__GT_dec.cljs$core$IFn$_invoke$arity$1(G__47419) : contrib.char$.hex__GT_dec.call(null,G__47419));
})(),null,(1),null)),(2),null));
var result__10778__auto___47443 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___47442);
if(cljs.core.truth_(result__10778__auto___47443)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"hex->dec","hex->dec",47681776,null),"a"),cljs.core.list(new cljs.core.Symbol(null,"hex->dec","hex->dec",47681776,null),"A")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___47442),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"hex->dec","hex->dec",47681776,null),"a"),cljs.core.list(new cljs.core.Symbol(null,"hex->dec","hex->dec",47681776,null),"A")),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___47442),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___47442);
}catch (e47417){var t__10765__auto___47444 = e47417;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"hex->dec","hex->dec",47681776,null),"a"),cljs.core.list(new cljs.core.Symbol(null,"hex->dec","hex->dec",47681776,null),"A")),null,t__10765__auto___47444,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___47445 = (new cljs.core.List(null,contrib.char$.char__GT_hex_str(" "),(new cljs.core.List(null,"20",null,(1),null)),(2),null));
var result__10778__auto___47446 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___47445);
if(cljs.core.truth_(result__10778__auto___47446)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null)," "),"20"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___47445),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null)," "),"20"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___47445),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___47445);
}catch (e47420){var t__10765__auto___47447 = e47420;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null)," "),"20"),null,t__10765__auto___47447,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___47448 = (new cljs.core.List(null,contrib.char$.char__GT_hex_str("\n"),(new cljs.core.List(null,"0A",null,(1),null)),(2),null));
var result__10778__auto___47449 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___47448);
if(cljs.core.truth_(result__10778__auto___47449)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null),"\n"),"0A"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___47448),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null),"\n"),"0A"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___47448),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___47448);
}catch (e47421){var t__10765__auto___47450 = e47421;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null),"\n"),"0A"),null,t__10765__auto___47450,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___47451 = (new cljs.core.List(null,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(contrib.char$.char__GT_hex_str("\n"),"0a"),(new cljs.core.List(null,true,null,(1),null)),(2),null));
var result__10778__auto___47452 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___47451);
if(cljs.core.truth_(result__10778__auto___47452)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),cljs.core.list(new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null),"\n"),"0a"),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___47451),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),cljs.core.list(new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null),"\n"),"0a"),true),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___47451),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___47451);
}catch (e47422){var t__10765__auto___47453 = e47422;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),cljs.core.list(new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null),"\n"),"0a"),true),null,t__10765__auto___47453,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___47454 = (new cljs.core.List(null,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(contrib.char$.hex_str__GT_char,contrib.char$.char__GT_hex_str)(" "),(new cljs.core.List(null," ",null,(1),null)),(2),null));
var result__10778__auto___47455 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___47454);
if(cljs.core.truth_(result__10778__auto___47455)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"hex-str->char","hex-str->char",-1318485928,null),new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null))," ")," "),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___47454),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"hex-str->char","hex-str->char",-1318485928,null),new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null))," ")," "),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___47454),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___47454);
}catch (e47423){var t__10765__auto___47456 = e47423;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"hex-str->char","hex-str->char",-1318485928,null),new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null))," ")," "),null,t__10765__auto___47456,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto___47457 = (new cljs.core.List(null,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(contrib.char$.hex_str__GT_char,contrib.char$.char__GT_hex_str)("\n"),(new cljs.core.List(null,"\n",null,(1),null)),(2),null));
var result__10778__auto___47458 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto___47457);
if(cljs.core.truth_(result__10778__auto___47458)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"hex-str->char","hex-str->char",-1318485928,null),new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null)),"\n"),"\n"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto___47457),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"hex-str->char","hex-str->char",-1318485928,null),new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null)),"\n"),"\n"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto___47457),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

cljs.core.first(values__10777__auto___47457);
}catch (e47424){var t__10765__auto___47459 = e47424;
cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"hex-str->char","hex-str->char",-1318485928,null),new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null)),"\n"),"\n"),null,t__10765__auto___47459,null]));
}finally {RCF__done_BANG_();
}
try{var values__10777__auto__ = (new cljs.core.List(null,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(contrib.char$.hex_str__GT_char,contrib.char$.char__GT_hex_str)("a"),(new cljs.core.List(null,"a",null,(1),null)),(2),null));
var result__10778__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hyperfiddle.rcf._EQ_,values__10777__auto__);
if(cljs.core.truth_(result__10778__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"hex-str->char","hex-str->char",-1318485928,null),new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null)),"a"),"a"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),values__10777__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"hex-str->char","hex-str->char",-1318485928,null),new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null)),"a"),"a"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10777__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return cljs.core.first(values__10777__auto__);
}catch (e47425){var t__10765__auto__ = e47425;
return cljs.test.do_report(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("hyperfiddle.rcf","=","hyperfiddle.rcf/=",1390812464,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"hex-str->char","hex-str->char",-1318485928,null),new cljs.core.Symbol(null,"char->hex-str","char->hex-str",1028178356,null)),"a"),"a"),null,t__10765__auto__,null]));
}finally {RCF__done_BANG_();
}}));

(contrib.char$.t_contrib$char$47412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta47413","meta47413",1593035109,null)], null);
}));

(contrib.char$.t_contrib$char$47412.cljs$lang$type = true);

(contrib.char$.t_contrib$char$47412.cljs$lang$ctorStr = "contrib.char$/t_contrib$char$47412");

(contrib.char$.t_contrib$char$47412.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"contrib.char$/t_contrib$char$47412");
}));

/**
 * Positional factory function for contrib.char$/t_contrib$char$47412.
 */
contrib.char$.__GT_t_contrib$char$47412 = (function contrib$char$$__GT_t_contrib$char$47412(meta47413){
return (new contrib.char$.t_contrib$char$47412(meta47413));
});


contrib.char$.generated__contrib_char$_56 = (function contrib$char$$generated__contrib_char$_56(){
return (new contrib.char$.t_contrib$char$47412(null));
});

if(hyperfiddle.rcf._STAR_enabled_STAR_){
cljs.test.run_block(cljs.test.test_var_block_STAR_(new cljs.core.Var(function(){return contrib.char$.generated__contrib_char$_56;},new cljs.core.Symbol("contrib.char$","generated__contrib_char$_56","contrib.char$/generated__contrib_char$_56",538760709,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"file","file",-1269645878),"contrib/char$.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contrib.char$","contrib.char$",1360832943,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),56,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"generated__contrib_char$_56","generated__contrib_char$_56",-1263253478,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(contrib.char$.generated__contrib_char$_56)?contrib.char$.generated__contrib_char$_56.cljs$lang$test:null)], null)),contrib.char$.generated__contrib_char$_56));
} else {
}

//# sourceMappingURL=contrib.char$.js.map
