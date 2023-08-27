goog.provide('missionary.impl.GroupBy');





/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.GroupBy.Process = (function (keyfn,notifier,terminator,key,value,input,table,load,live,busy,done){
this.keyfn = keyfn;
this.notifier = notifier;
this.terminator = terminator;
this.key = key;
this.value = value;
this.input = input;
this.table = table;
this.load = load;
this.live = live;
this.busy = busy;
this.done = done;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.GroupBy.Process.prototype.call = (function (unused__15562__auto__){
var self__ = this;
var self__ = this;
var G__40906 = (arguments.length - (1));
switch (G__40906) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.GroupBy.Process.prototype.apply = (function (self__,args40900){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40900)));
}));

(missionary.impl.GroupBy.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var p = this;
(missionary.impl.GroupBy.kill.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.kill.cljs$core$IFn$_invoke$arity$1(p) : missionary.impl.GroupBy.kill.call(null,p));

return null;
}));

(missionary.impl.GroupBy.Process.prototype.cljs$core$IFn$_invoke$arity$2 = (function (n,t){
var self__ = this;
var p = this;
return (missionary.impl.GroupBy.group.cljs$core$IFn$_invoke$arity$3 ? missionary.impl.GroupBy.group.cljs$core$IFn$_invoke$arity$3(p,n,t) : missionary.impl.GroupBy.group.call(null,p,n,t));
}));

(missionary.impl.GroupBy.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (p){
var self__ = this;
var p__$1 = this;
return (missionary.impl.GroupBy.sample.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.sample.cljs$core$IFn$_invoke$arity$1(p__$1) : missionary.impl.GroupBy.sample.call(null,p__$1));
}));

(missionary.impl.GroupBy.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keyfn","keyfn",-1874375437,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.Symbol(null,"table","table",1075588491,null),cljs.core.with_meta(new cljs.core.Symbol(null,"load","load",321890343,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"live","live",30383488,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null))], null);
}));

(missionary.impl.GroupBy.Process.cljs$lang$type = true);

(missionary.impl.GroupBy.Process.cljs$lang$ctorStr = "missionary.impl.GroupBy/Process");

(missionary.impl.GroupBy.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.GroupBy/Process");
}));

/**
 * Positional factory function for missionary.impl.GroupBy/Process.
 */
missionary.impl.GroupBy.__GT_Process = (function missionary$impl$GroupBy$__GT_Process(keyfn,notifier,terminator,key,value,input,table,load,live,busy,done){
return (new missionary.impl.GroupBy.Process(keyfn,notifier,terminator,key,value,input,table,load,live,busy,done));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.GroupBy.Group = (function (process,key,notifier,terminator){
this.process = process;
this.key = key;
this.notifier = notifier;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.GroupBy.Group.prototype.call = (function (unused__15562__auto__){
var self__ = this;
var self__ = this;
var G__40931 = (arguments.length - (1));
switch (G__40931) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.GroupBy.Group.prototype.apply = (function (self__,args40928){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40928)));
}));

(missionary.impl.GroupBy.Group.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var g = this;
(missionary.impl.GroupBy.cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.cancel.cljs$core$IFn$_invoke$arity$1(g) : missionary.impl.GroupBy.cancel.call(null,g));

return null;
}));

(missionary.impl.GroupBy.Group.prototype.cljs$core$IDeref$_deref$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return (missionary.impl.GroupBy.consume.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.consume.cljs$core$IFn$_invoke$arity$1(g__$1) : missionary.impl.GroupBy.consume.call(null,g__$1));
}));

(missionary.impl.GroupBy.Group.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(missionary.impl.GroupBy.Group.cljs$lang$type = true);

(missionary.impl.GroupBy.Group.cljs$lang$ctorStr = "missionary.impl.GroupBy/Group");

(missionary.impl.GroupBy.Group.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.GroupBy/Group");
}));

/**
 * Positional factory function for missionary.impl.GroupBy/Group.
 */
missionary.impl.GroupBy.__GT_Group = (function missionary$impl$GroupBy$__GT_Group(process,key,notifier,terminator){
return (new missionary.impl.GroupBy.Group(process,key,notifier,terminator));
});

missionary.impl.GroupBy.kill = (function missionary$impl$GroupBy$kill(p){
if(cljs.core.truth_(p.live)){
(p.live = false);

var fexpr__40941 = p.input;
return (fexpr__40941.cljs$core$IFn$_invoke$arity$0 ? fexpr__40941.cljs$core$IFn$_invoke$arity$0() : fexpr__40941.call(null));
} else {
return null;
}
});
missionary.impl.GroupBy.step = (function missionary$impl$GroupBy$step(i,m){
return ((i + (1)) & m);
});
missionary.impl.GroupBy.group = (function missionary$impl$GroupBy$group(p,n,t){
var k = p.key;
var g = missionary.impl.GroupBy.__GT_Group(p,k,n,t);
var table = p.table;
if((k === p)){
} else {
(p.key = p);

var s_40991 = table.length;
var m_40992 = (s_40991 - (1));
var i_40994 = (cljs.core.hash(k) & m_40992);
while(true){
var G__40945_40995 = (table[i_40994]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__40945_40995)){
(table[i_40994] = g);
} else {
var G__40996 = missionary.impl.GroupBy.step(i_40994,m_40992);
i_40994 = G__40996;
continue;

}
break;
}

var ss_40998 = (s_40991 << (1));
if((ss_40998 <= ((3) * (p.load = (p.load + (1)))))){
var mm_41003 = (ss_40998 - (1));
var larger_41004 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(ss_40998);
(p.table = larger_41004);

var n__5636__auto___41006 = s_40991;
var i_41007 = (0);
while(true){
if((i_41007 < n__5636__auto___41006)){
var temp__5808__auto___41008 = (table[i_41007]);
if((temp__5808__auto___41008 == null)){
} else {
var h_41009 = temp__5808__auto___41008;
var j_41011 = (cljs.core.hash(h_41009.key) & mm_41003);
while(true){
var G__40948_41013 = (larger_41004[j_41011]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__40948_41013)){
(larger_41004[j_41011] = h_41009);
} else {
var G__41015 = missionary.impl.GroupBy.step(j_41011,mm_41003);
j_41011 = G__41015;
continue;

}
break;
}
}

var G__41016 = (i_41007 + (1));
i_41007 = G__41016;
continue;
} else {
}
break;
}
} else {
}
}

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return g;
});
missionary.impl.GroupBy.cancel = (function missionary$impl$GroupBy$cancel(g){
var p = g.process;
var k = g.key;
if(cljs.core.truth_(p.live)){
if((k === p)){
return null;
} else {
(g.key = p);

var table = p.table;
var m = (table.length - (1));
var i = (function (){var i = (cljs.core.hash(k) & m);
while(true){
if((g === (table[i]))){
return i;
} else {
var G__41020 = missionary.impl.GroupBy.step(i,m);
i = G__41020;
continue;
}
break;
}
})();
(table[i] = null);

(p.load = (p.load - (1)));

var i_41021__$1 = missionary.impl.GroupBy.step(i,m);
while(true){
var temp__5808__auto___41022 = (table[i_41021__$1]);
if((temp__5808__auto___41022 == null)){
} else {
var h_41023 = temp__5808__auto___41022;
var j_41024 = (cljs.core.hash(h_41023.key) & m);
if((i_41021__$1 === j_41024)){
} else {
(table[i_41021__$1] = null);

var j_41025__$1 = j_41024;
while(true){
if(((table[j_41025__$1]) == null)){
(table[j_41025__$1] = h_41023);
} else {
var G__41026 = missionary.impl.GroupBy.step(j_41025__$1,m);
j_41025__$1 = G__41026;
continue;
}
break;
}
}

var G__41027 = missionary.impl.GroupBy.step(i_41021__$1,m);
i_41021__$1 = G__41027;
continue;
}
break;
}

var fexpr__40963 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,p.key))?p.notifier:g.notifier);
return (fexpr__40963.cljs$core$IFn$_invoke$arity$0 ? fexpr__40963.cljs$core$IFn$_invoke$arity$0() : fexpr__40963.call(null));
}
} else {
return null;
}
});
missionary.impl.GroupBy.transfer = (function missionary$impl$GroupBy$transfer(p){
while(true){
if(cljs.core.truth_((p.busy = cljs.core.not(p.busy)))){
if(cljs.core.truth_(p.done)){
(p.live = false);

var temp__5808__auto___41028 = p.table;
if((temp__5808__auto___41028 == null)){
} else {
var table_41029 = temp__5808__auto___41028;
(p.table = null);

var n__5636__auto___41030 = table_41029.length;
var i_41031 = (0);
while(true){
if((i_41031 < n__5636__auto___41030)){
var temp__5808__auto___41032__$1 = (table_41029[i_41031]);
if((temp__5808__auto___41032__$1 == null)){
} else {
var g_41033 = temp__5808__auto___41032__$1;
var fexpr__40968_41034 = g_41033.terminator;
(fexpr__40968_41034.cljs$core$IFn$_invoke$arity$0 ? fexpr__40968_41034.cljs$core$IFn$_invoke$arity$0() : fexpr__40968_41034.call(null));
}

var G__41035 = (i_41031 + (1));
i_41031 = G__41035;
continue;
} else {
}
break;
}
}

var fexpr__40969 = p.terminator;
return (fexpr__40969.cljs$core$IFn$_invoke$arity$0 ? fexpr__40969.cljs$core$IFn$_invoke$arity$0() : fexpr__40969.call(null));
} else {
if((p === p.value)){
var table = p.table;
try{var k = (p.key = (function (){var G__40978 = (p.value = cljs.core.deref(p.input));
var fexpr__40977 = p.keyfn;
return (fexpr__40977.cljs$core$IFn$_invoke$arity$1 ? fexpr__40977.cljs$core$IFn$_invoke$arity$1(G__40978) : fexpr__40977.call(null,G__40978));
})());
var m = (table.length - (1));
var i = (cljs.core.hash(k) & m);
while(true){
var temp__5806__auto__ = (table[i]);
if((temp__5806__auto__ == null)){
var fexpr__40982 = p.notifier;
return (fexpr__40982.cljs$core$IFn$_invoke$arity$0 ? fexpr__40982.cljs$core$IFn$_invoke$arity$0() : fexpr__40982.call(null));
} else {
var h = temp__5806__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,h.key)){
var fexpr__40983 = h.notifier;
return (fexpr__40983.cljs$core$IFn$_invoke$arity$0 ? fexpr__40983.cljs$core$IFn$_invoke$arity$0() : fexpr__40983.call(null));
} else {
var G__41036 = missionary.impl.GroupBy.step(i,m);
i = G__41036;
continue;
}
}
break;
}
}catch (e40970){var e = e40970;
(p.value = e);

(p.table = null);

missionary.impl.GroupBy.kill(p);

var n__5636__auto___41037 = table.length;
var i_41038 = (0);
while(true){
if((i_41038 < n__5636__auto___41037)){
var temp__5808__auto___41039 = (table[i_41038]);
if((temp__5808__auto___41039 == null)){
} else {
var g_41040 = temp__5808__auto___41039;
var fexpr__40971_41041 = g_41040.terminator;
(fexpr__40971_41041.cljs$core$IFn$_invoke$arity$0 ? fexpr__40971_41041.cljs$core$IFn$_invoke$arity$0() : fexpr__40971_41041.call(null));
}

var G__41042 = (i_41038 + (1));
i_41038 = G__41042;
continue;
} else {
}
break;
}

var fexpr__40972 = p.notifier;
return (fexpr__40972.cljs$core$IFn$_invoke$arity$0 ? fexpr__40972.cljs$core$IFn$_invoke$arity$0() : fexpr__40972.call(null));
}} else {
try{cljs.core.deref(p.input);
}catch (e40984){var __41043 = e40984;
}
continue;
}
}
} else {
return null;
}
break;
}
});
missionary.impl.GroupBy.sample = (function missionary$impl$GroupBy$sample(p){
var k = p.key;
if((k === p)){
missionary.impl.GroupBy.transfer(p);

throw p.value;
} else {
return cljs.core.__GT_MapEntry(k,p,null);
}
});
missionary.impl.GroupBy.consume = (function missionary$impl$GroupBy$consume(g){
var p = g.process;
if((p === g.key)){
var fexpr__40985_41044 = g.terminator;
(fexpr__40985_41044.cljs$core$IFn$_invoke$arity$0 ? fexpr__40985_41044.cljs$core$IFn$_invoke$arity$0() : fexpr__40985_41044.call(null));

throw (new missionary.Cancelled("Group consumer cancelled."));
} else {
var x = p.value;
(p.value = p);

(p.key = p);

missionary.impl.GroupBy.transfer(p);

return x;
}
});
missionary.impl.GroupBy.run = (function missionary$impl$GroupBy$run(k,f,n,t){
var p = missionary.impl.GroupBy.__GT_Process(k,n,t,null,null,null,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8)),(0),true,true,false);
(p.key = p);

(p.value = p);

(p.input = (function (){var G__40987 = (function (){
return missionary.impl.GroupBy.transfer(p);
});
var G__40988 = (function (){
(p.done = true);

return missionary.impl.GroupBy.transfer(p);
});
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__40987,G__40988) : f.call(null,G__40987,G__40988));
})());

missionary.impl.GroupBy.transfer(p);

return p;
});

//# sourceMappingURL=missionary.impl.GroupBy.js.map
