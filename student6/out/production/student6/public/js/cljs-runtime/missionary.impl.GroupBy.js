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
(missionary.impl.GroupBy.Process.prototype.call = (function (unused__13640__auto__){
var self__ = this;
var self__ = this;
var G__30376 = (arguments.length - (1));
switch (G__30376) {
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

(missionary.impl.GroupBy.Process.prototype.apply = (function (self__,args30373){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args30373)));
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
(missionary.impl.GroupBy.Group.prototype.call = (function (unused__13640__auto__){
var self__ = this;
var self__ = this;
var G__30413 = (arguments.length - (1));
switch (G__30413) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.GroupBy.Group.prototype.apply = (function (self__,args30410){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args30410)));
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

var fexpr__30427 = p.input;
return (fexpr__30427.cljs$core$IFn$_invoke$arity$0 ? fexpr__30427.cljs$core$IFn$_invoke$arity$0() : fexpr__30427.call(null));
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

var s_30545 = table.length;
var m_30546 = (s_30545 - (1));
var i_30547 = (cljs.core.hash(k) & m_30546);
while(true){
var G__30439_30549 = (table[i_30547]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__30439_30549)){
(table[i_30547] = g);
} else {
var G__30550 = missionary.impl.GroupBy.step(i_30547,m_30546);
i_30547 = G__30550;
continue;

}
break;
}

var ss_30551 = (s_30545 << (1));
if((ss_30551 <= ((3) * (p.load = (p.load + (1)))))){
var mm_30552 = (ss_30551 - (1));
var larger_30553 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(ss_30551);
(p.table = larger_30553);

var n__5636__auto___30554 = s_30545;
var i_30555 = (0);
while(true){
if((i_30555 < n__5636__auto___30554)){
var temp__5808__auto___30556 = (table[i_30555]);
if((temp__5808__auto___30556 == null)){
} else {
var h_30557 = temp__5808__auto___30556;
var j_30559 = (cljs.core.hash(h_30557.key) & mm_30552);
while(true){
var G__30453_30560 = (larger_30553[j_30559]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__30453_30560)){
(larger_30553[j_30559] = h_30557);
} else {
var G__30561 = missionary.impl.GroupBy.step(j_30559,mm_30552);
j_30559 = G__30561;
continue;

}
break;
}
}

var G__30562 = (i_30555 + (1));
i_30555 = G__30562;
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
var G__30563 = missionary.impl.GroupBy.step(i,m);
i = G__30563;
continue;
}
break;
}
})();
(table[i] = null);

(p.load = (p.load - (1)));

var i_30564__$1 = missionary.impl.GroupBy.step(i,m);
while(true){
var temp__5808__auto___30565 = (table[i_30564__$1]);
if((temp__5808__auto___30565 == null)){
} else {
var h_30566 = temp__5808__auto___30565;
var j_30567 = (cljs.core.hash(h_30566.key) & m);
if((i_30564__$1 === j_30567)){
} else {
(table[i_30564__$1] = null);

var j_30568__$1 = j_30567;
while(true){
if(((table[j_30568__$1]) == null)){
(table[j_30568__$1] = h_30566);
} else {
var G__30569 = missionary.impl.GroupBy.step(j_30568__$1,m);
j_30568__$1 = G__30569;
continue;
}
break;
}
}

var G__30570 = missionary.impl.GroupBy.step(i_30564__$1,m);
i_30564__$1 = G__30570;
continue;
}
break;
}

var fexpr__30457 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,p.key))?p.notifier:g.notifier);
return (fexpr__30457.cljs$core$IFn$_invoke$arity$0 ? fexpr__30457.cljs$core$IFn$_invoke$arity$0() : fexpr__30457.call(null));
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

var temp__5808__auto___30571 = p.table;
if((temp__5808__auto___30571 == null)){
} else {
var table_30572 = temp__5808__auto___30571;
(p.table = null);

var n__5636__auto___30579 = table_30572.length;
var i_30580 = (0);
while(true){
if((i_30580 < n__5636__auto___30579)){
var temp__5808__auto___30581__$1 = (table_30572[i_30580]);
if((temp__5808__auto___30581__$1 == null)){
} else {
var g_30582 = temp__5808__auto___30581__$1;
var fexpr__30467_30583 = g_30582.terminator;
(fexpr__30467_30583.cljs$core$IFn$_invoke$arity$0 ? fexpr__30467_30583.cljs$core$IFn$_invoke$arity$0() : fexpr__30467_30583.call(null));
}

var G__30584 = (i_30580 + (1));
i_30580 = G__30584;
continue;
} else {
}
break;
}
}

var fexpr__30473 = p.terminator;
return (fexpr__30473.cljs$core$IFn$_invoke$arity$0 ? fexpr__30473.cljs$core$IFn$_invoke$arity$0() : fexpr__30473.call(null));
} else {
if((p === p.value)){
var table = p.table;
try{var k = (p.key = (function (){var G__30492 = (p.value = cljs.core.deref(p.input));
var fexpr__30491 = p.keyfn;
return (fexpr__30491.cljs$core$IFn$_invoke$arity$1 ? fexpr__30491.cljs$core$IFn$_invoke$arity$1(G__30492) : fexpr__30491.call(null,G__30492));
})());
var m = (table.length - (1));
var i = (cljs.core.hash(k) & m);
while(true){
var temp__5806__auto__ = (table[i]);
if((temp__5806__auto__ == null)){
var fexpr__30495 = p.notifier;
return (fexpr__30495.cljs$core$IFn$_invoke$arity$0 ? fexpr__30495.cljs$core$IFn$_invoke$arity$0() : fexpr__30495.call(null));
} else {
var h = temp__5806__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,h.key)){
var fexpr__30497 = h.notifier;
return (fexpr__30497.cljs$core$IFn$_invoke$arity$0 ? fexpr__30497.cljs$core$IFn$_invoke$arity$0() : fexpr__30497.call(null));
} else {
var G__30589 = missionary.impl.GroupBy.step(i,m);
i = G__30589;
continue;
}
}
break;
}
}catch (e30478){var e = e30478;
(p.value = e);

(p.table = null);

missionary.impl.GroupBy.kill(p);

var n__5636__auto___30593 = table.length;
var i_30594 = (0);
while(true){
if((i_30594 < n__5636__auto___30593)){
var temp__5808__auto___30598 = (table[i_30594]);
if((temp__5808__auto___30598 == null)){
} else {
var g_30599 = temp__5808__auto___30598;
var fexpr__30487_30601 = g_30599.terminator;
(fexpr__30487_30601.cljs$core$IFn$_invoke$arity$0 ? fexpr__30487_30601.cljs$core$IFn$_invoke$arity$0() : fexpr__30487_30601.call(null));
}

var G__30603 = (i_30594 + (1));
i_30594 = G__30603;
continue;
} else {
}
break;
}

var fexpr__30488 = p.notifier;
return (fexpr__30488.cljs$core$IFn$_invoke$arity$0 ? fexpr__30488.cljs$core$IFn$_invoke$arity$0() : fexpr__30488.call(null));
}} else {
try{cljs.core.deref(p.input);
}catch (e30498){var __30605 = e30498;
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
var fexpr__30509_30611 = g.terminator;
(fexpr__30509_30611.cljs$core$IFn$_invoke$arity$0 ? fexpr__30509_30611.cljs$core$IFn$_invoke$arity$0() : fexpr__30509_30611.call(null));

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

(p.input = (function (){var G__30524 = (function (){
return missionary.impl.GroupBy.transfer(p);
});
var G__30525 = (function (){
(p.done = true);

return missionary.impl.GroupBy.transfer(p);
});
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__30524,G__30525) : f.call(null,G__30524,G__30525));
})());

missionary.impl.GroupBy.transfer(p);

return p;
});

//# sourceMappingURL=missionary.impl.GroupBy.js.map
