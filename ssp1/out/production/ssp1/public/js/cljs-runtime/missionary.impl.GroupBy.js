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
(missionary.impl.GroupBy.Process.prototype.call = (function (unused__15668__auto__){
var self__ = this;
var self__ = this;
var G__41346 = (arguments.length - (1));
switch (G__41346) {
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

(missionary.impl.GroupBy.Process.prototype.apply = (function (self__,args41345){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args41345)));
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
(missionary.impl.GroupBy.Group.prototype.call = (function (unused__15668__auto__){
var self__ = this;
var self__ = this;
var G__41354 = (arguments.length - (1));
switch (G__41354) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.GroupBy.Group.prototype.apply = (function (self__,args41351){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args41351)));
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

var fexpr__41366 = p.input;
return (fexpr__41366.cljs$core$IFn$_invoke$arity$0 ? fexpr__41366.cljs$core$IFn$_invoke$arity$0() : fexpr__41366.call(null));
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

var s_41469 = table.length;
var m_41470 = (s_41469 - (1));
var i_41471 = (cljs.core.hash(k) & m_41470);
while(true){
var G__41380_41472 = (table[i_41471]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__41380_41472)){
(table[i_41471] = g);
} else {
var G__41473 = missionary.impl.GroupBy.step(i_41471,m_41470);
i_41471 = G__41473;
continue;

}
break;
}

var ss_41474 = (s_41469 << (1));
if((ss_41474 <= ((3) * (p.load = (p.load + (1)))))){
var mm_41476 = (ss_41474 - (1));
var larger_41477 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(ss_41474);
(p.table = larger_41477);

var n__5636__auto___41478 = s_41469;
var i_41479 = (0);
while(true){
if((i_41479 < n__5636__auto___41478)){
var temp__5808__auto___41480 = (table[i_41479]);
if((temp__5808__auto___41480 == null)){
} else {
var h_41481 = temp__5808__auto___41480;
var j_41482 = (cljs.core.hash(h_41481.key) & mm_41476);
while(true){
var G__41385_41483 = (larger_41477[j_41482]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__41385_41483)){
(larger_41477[j_41482] = h_41481);
} else {
var G__41485 = missionary.impl.GroupBy.step(j_41482,mm_41476);
j_41482 = G__41485;
continue;

}
break;
}
}

var G__41487 = (i_41479 + (1));
i_41479 = G__41487;
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
var G__41489 = missionary.impl.GroupBy.step(i,m);
i = G__41489;
continue;
}
break;
}
})();
(table[i] = null);

(p.load = (p.load - (1)));

var i_41490__$1 = missionary.impl.GroupBy.step(i,m);
while(true){
var temp__5808__auto___41491 = (table[i_41490__$1]);
if((temp__5808__auto___41491 == null)){
} else {
var h_41492 = temp__5808__auto___41491;
var j_41493 = (cljs.core.hash(h_41492.key) & m);
if((i_41490__$1 === j_41493)){
} else {
(table[i_41490__$1] = null);

var j_41494__$1 = j_41493;
while(true){
if(((table[j_41494__$1]) == null)){
(table[j_41494__$1] = h_41492);
} else {
var G__41495 = missionary.impl.GroupBy.step(j_41494__$1,m);
j_41494__$1 = G__41495;
continue;
}
break;
}
}

var G__41496 = missionary.impl.GroupBy.step(i_41490__$1,m);
i_41490__$1 = G__41496;
continue;
}
break;
}

var fexpr__41430 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,p.key))?p.notifier:g.notifier);
return (fexpr__41430.cljs$core$IFn$_invoke$arity$0 ? fexpr__41430.cljs$core$IFn$_invoke$arity$0() : fexpr__41430.call(null));
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

var temp__5808__auto___41500 = p.table;
if((temp__5808__auto___41500 == null)){
} else {
var table_41501 = temp__5808__auto___41500;
(p.table = null);

var n__5636__auto___41502 = table_41501.length;
var i_41503 = (0);
while(true){
if((i_41503 < n__5636__auto___41502)){
var temp__5808__auto___41504__$1 = (table_41501[i_41503]);
if((temp__5808__auto___41504__$1 == null)){
} else {
var g_41505 = temp__5808__auto___41504__$1;
var fexpr__41434_41506 = g_41505.terminator;
(fexpr__41434_41506.cljs$core$IFn$_invoke$arity$0 ? fexpr__41434_41506.cljs$core$IFn$_invoke$arity$0() : fexpr__41434_41506.call(null));
}

var G__41507 = (i_41503 + (1));
i_41503 = G__41507;
continue;
} else {
}
break;
}
}

var fexpr__41436 = p.terminator;
return (fexpr__41436.cljs$core$IFn$_invoke$arity$0 ? fexpr__41436.cljs$core$IFn$_invoke$arity$0() : fexpr__41436.call(null));
} else {
if((p === p.value)){
var table = p.table;
try{var k = (p.key = (function (){var G__41441 = (p.value = cljs.core.deref(p.input));
var fexpr__41440 = p.keyfn;
return (fexpr__41440.cljs$core$IFn$_invoke$arity$1 ? fexpr__41440.cljs$core$IFn$_invoke$arity$1(G__41441) : fexpr__41440.call(null,G__41441));
})());
var m = (table.length - (1));
var i = (cljs.core.hash(k) & m);
while(true){
var temp__5806__auto__ = (table[i]);
if((temp__5806__auto__ == null)){
var fexpr__41442 = p.notifier;
return (fexpr__41442.cljs$core$IFn$_invoke$arity$0 ? fexpr__41442.cljs$core$IFn$_invoke$arity$0() : fexpr__41442.call(null));
} else {
var h = temp__5806__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,h.key)){
var fexpr__41443 = h.notifier;
return (fexpr__41443.cljs$core$IFn$_invoke$arity$0 ? fexpr__41443.cljs$core$IFn$_invoke$arity$0() : fexpr__41443.call(null));
} else {
var G__41513 = missionary.impl.GroupBy.step(i,m);
i = G__41513;
continue;
}
}
break;
}
}catch (e41437){var e = e41437;
(p.value = e);

(p.table = null);

missionary.impl.GroupBy.kill(p);

var n__5636__auto___41516 = table.length;
var i_41517 = (0);
while(true){
if((i_41517 < n__5636__auto___41516)){
var temp__5808__auto___41518 = (table[i_41517]);
if((temp__5808__auto___41518 == null)){
} else {
var g_41519 = temp__5808__auto___41518;
var fexpr__41438_41520 = g_41519.terminator;
(fexpr__41438_41520.cljs$core$IFn$_invoke$arity$0 ? fexpr__41438_41520.cljs$core$IFn$_invoke$arity$0() : fexpr__41438_41520.call(null));
}

var G__41521 = (i_41517 + (1));
i_41517 = G__41521;
continue;
} else {
}
break;
}

var fexpr__41439 = p.notifier;
return (fexpr__41439.cljs$core$IFn$_invoke$arity$0 ? fexpr__41439.cljs$core$IFn$_invoke$arity$0() : fexpr__41439.call(null));
}} else {
try{cljs.core.deref(p.input);
}catch (e41451){var __41523 = e41451;
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
var fexpr__41454_41527 = g.terminator;
(fexpr__41454_41527.cljs$core$IFn$_invoke$arity$0 ? fexpr__41454_41527.cljs$core$IFn$_invoke$arity$0() : fexpr__41454_41527.call(null));

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

(p.input = (function (){var G__41457 = (function (){
return missionary.impl.GroupBy.transfer(p);
});
var G__41458 = (function (){
(p.done = true);

return missionary.impl.GroupBy.transfer(p);
});
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__41457,G__41458) : f.call(null,G__41457,G__41458));
})());

missionary.impl.GroupBy.transfer(p);

return p;
});

//# sourceMappingURL=missionary.impl.GroupBy.js.map
