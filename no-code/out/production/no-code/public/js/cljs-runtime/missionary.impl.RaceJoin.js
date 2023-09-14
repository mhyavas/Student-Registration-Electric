goog.provide('missionary.impl.RaceJoin');

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
missionary.impl.RaceJoin.Process = (function (combinator,joincb,racecb,children,result,join,race){
this.combinator = combinator;
this.joincb = joincb;
this.racecb = racecb;
this.children = children;
this.result = result;
this.join = join;
this.race = race;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.RaceJoin.Process.prototype.call = (function (unused__13625__auto__){
var self__ = this;
var self__ = this;
var G__29088 = (arguments.length - (1));
switch (G__29088) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.RaceJoin.Process.prototype.apply = (function (self__,args29086){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args29086)));
}));

(missionary.impl.RaceJoin.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var j = this;
return (missionary.impl.RaceJoin.cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.RaceJoin.cancel.cljs$core$IFn$_invoke$arity$1(j) : missionary.impl.RaceJoin.cancel.call(null,j));
}));

(missionary.impl.RaceJoin.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinator","combinator",-746639828,null),new cljs.core.Symbol(null,"joincb","joincb",-885294516,null),new cljs.core.Symbol(null,"racecb","racecb",-738679350,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),cljs.core.with_meta(new cljs.core.Symbol(null,"join","join",881669637,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"race","race",-1960778897,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null))], null);
}));

(missionary.impl.RaceJoin.Process.cljs$lang$type = true);

(missionary.impl.RaceJoin.Process.cljs$lang$ctorStr = "missionary.impl.RaceJoin/Process");

(missionary.impl.RaceJoin.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.RaceJoin/Process");
}));

/**
 * Positional factory function for missionary.impl.RaceJoin/Process.
 */
missionary.impl.RaceJoin.__GT_Process = (function missionary$impl$RaceJoin$__GT_Process(combinator,joincb,racecb,children,result,join,race){
return (new missionary.impl.RaceJoin.Process(combinator,joincb,racecb,children,result,join,race));
});

missionary.impl.RaceJoin.cancel = (function missionary$impl$RaceJoin$cancel(j){
var n__5636__auto__ = j.children.length;
var i = (0);
while(true){
if((i < n__5636__auto__)){
var fexpr__29094_29120 = (j.children[i]);
(fexpr__29094_29120.cljs$core$IFn$_invoke$arity$0 ? fexpr__29094_29120.cljs$core$IFn$_invoke$arity$0() : fexpr__29094_29120.call(null));

var G__29121 = (i + (1));
i = G__29121;
continue;
} else {
return null;
}
break;
}
});
missionary.impl.RaceJoin.terminated = (function missionary$impl$RaceJoin$terminated(j){
var n = (j.join + (1));
(j.join = n);

if((n === j.result.length)){
var w = j.race;
if((w < (0))){
try{var G__29099 = j.combinator.apply(null,j.result);
var fexpr__29098 = j.joincb;
return (fexpr__29098.cljs$core$IFn$_invoke$arity$1 ? fexpr__29098.cljs$core$IFn$_invoke$arity$1(G__29099) : fexpr__29098.call(null,G__29099));
}catch (e29096){var e = e29096;
var fexpr__29097 = j.racecb;
return (fexpr__29097.cljs$core$IFn$_invoke$arity$1 ? fexpr__29097.cljs$core$IFn$_invoke$arity$1(e) : fexpr__29097.call(null,e));
}} else {
var G__29101 = (j.result[w]);
var fexpr__29100 = j.racecb;
return (fexpr__29100.cljs$core$IFn$_invoke$arity$1 ? fexpr__29100.cljs$core$IFn$_invoke$arity$1(G__29101) : fexpr__29100.call(null,G__29101));
}
} else {
return null;
}
});
missionary.impl.RaceJoin.run = (function missionary$impl$RaceJoin$run(r,c,ts,s,f){
var n = cljs.core.count(ts);
var i = cljs.core.iter(ts);
var j = missionary.impl.RaceJoin.__GT_Process(c,(cljs.core.truth_(r)?f:s),(cljs.core.truth_(r)?s:f),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(n),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(n),(0),(-2));
var index_29124 = (0);
while(true){
var join_29125 = ((function (index_29124,n,i,j){
return (function (x){
(j.result[index_29124] = x);

return missionary.impl.RaceJoin.terminated(j);
});})(index_29124,n,i,j))
;
var race_29126 = ((function (index_29124,join_29125,n,i,j){
return (function (x){
var w_29131 = j.race;
if((w_29131 < (0))){
(j.race = index_29124);

if(((-1) === w_29131)){
missionary.impl.RaceJoin.cancel(j);
} else {
}
} else {
}

return join_29125(x);
});})(index_29124,join_29125,n,i,j))
;
(j.children[index_29124] = (function (){var G__29110 = (cljs.core.truth_(r)?race_29126:join_29125);
var G__29111 = (cljs.core.truth_(r)?join_29125:race_29126);
var fexpr__29109 = i.next();
return (fexpr__29109.cljs$core$IFn$_invoke$arity$2 ? fexpr__29109.cljs$core$IFn$_invoke$arity$2(G__29110,G__29111) : fexpr__29109.call(null,G__29110,G__29111));
})());

if(cljs.core.truth_(i.hasNext())){
var G__29134 = (index_29124 + (1));
index_29124 = G__29134;
continue;
} else {
}
break;
}

if(((-2) === j.race)){
(j.race = (-1));
} else {
missionary.impl.RaceJoin.cancel(j);
}

return j;
});

//# sourceMappingURL=missionary.impl.RaceJoin.js.map
