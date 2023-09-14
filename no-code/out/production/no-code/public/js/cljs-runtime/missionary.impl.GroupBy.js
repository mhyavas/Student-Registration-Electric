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
(missionary.impl.GroupBy.Process.prototype.call = (function (unused__13625__auto__){
var self__ = this;
var self__ = this;
var G__28269 = (arguments.length - (1));
switch (G__28269) {
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

(missionary.impl.GroupBy.Process.prototype.apply = (function (self__,args28265){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28265)));
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
(missionary.impl.GroupBy.Group.prototype.call = (function (unused__13625__auto__){
var self__ = this;
var self__ = this;
var G__28304 = (arguments.length - (1));
switch (G__28304) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.GroupBy.Group.prototype.apply = (function (self__,args28300){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28300)));
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

var fexpr__28340 = p.input;
return (fexpr__28340.cljs$core$IFn$_invoke$arity$0 ? fexpr__28340.cljs$core$IFn$_invoke$arity$0() : fexpr__28340.call(null));
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

var s_28506 = table.length;
var m_28507 = (s_28506 - (1));
var i_28508 = (cljs.core.hash(k) & m_28507);
while(true){
var G__28354_28509 = (table[i_28508]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28354_28509)){
(table[i_28508] = g);
} else {
var G__28511 = missionary.impl.GroupBy.step(i_28508,m_28507);
i_28508 = G__28511;
continue;

}
break;
}

var ss_28513 = (s_28506 << (1));
if((ss_28513 <= ((3) * (p.load = (p.load + (1)))))){
var mm_28517 = (ss_28513 - (1));
var larger_28518 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(ss_28513);
(p.table = larger_28518);

var n__5636__auto___28522 = s_28506;
var i_28525 = (0);
while(true){
if((i_28525 < n__5636__auto___28522)){
var temp__5808__auto___28526 = (table[i_28525]);
if((temp__5808__auto___28526 == null)){
} else {
var h_28529 = temp__5808__auto___28526;
var j_28530 = (cljs.core.hash(h_28529.key) & mm_28517);
while(true){
var G__28362_28531 = (larger_28518[j_28530]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28362_28531)){
(larger_28518[j_28530] = h_28529);
} else {
var G__28533 = missionary.impl.GroupBy.step(j_28530,mm_28517);
j_28530 = G__28533;
continue;

}
break;
}
}

var G__28534 = (i_28525 + (1));
i_28525 = G__28534;
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
var G__28537 = missionary.impl.GroupBy.step(i,m);
i = G__28537;
continue;
}
break;
}
})();
(table[i] = null);

(p.load = (p.load - (1)));

var i_28538__$1 = missionary.impl.GroupBy.step(i,m);
while(true){
var temp__5808__auto___28539 = (table[i_28538__$1]);
if((temp__5808__auto___28539 == null)){
} else {
var h_28541 = temp__5808__auto___28539;
var j_28542 = (cljs.core.hash(h_28541.key) & m);
if((i_28538__$1 === j_28542)){
} else {
(table[i_28538__$1] = null);

var j_28545__$1 = j_28542;
while(true){
if(((table[j_28545__$1]) == null)){
(table[j_28545__$1] = h_28541);
} else {
var G__28546 = missionary.impl.GroupBy.step(j_28545__$1,m);
j_28545__$1 = G__28546;
continue;
}
break;
}
}

var G__28547 = missionary.impl.GroupBy.step(i_28538__$1,m);
i_28538__$1 = G__28547;
continue;
}
break;
}

var fexpr__28368 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,p.key))?p.notifier:g.notifier);
return (fexpr__28368.cljs$core$IFn$_invoke$arity$0 ? fexpr__28368.cljs$core$IFn$_invoke$arity$0() : fexpr__28368.call(null));
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

var temp__5808__auto___28556 = p.table;
if((temp__5808__auto___28556 == null)){
} else {
var table_28557 = temp__5808__auto___28556;
(p.table = null);

var n__5636__auto___28558 = table_28557.length;
var i_28560 = (0);
while(true){
if((i_28560 < n__5636__auto___28558)){
var temp__5808__auto___28561__$1 = (table_28557[i_28560]);
if((temp__5808__auto___28561__$1 == null)){
} else {
var g_28563 = temp__5808__auto___28561__$1;
var fexpr__28381_28564 = g_28563.terminator;
(fexpr__28381_28564.cljs$core$IFn$_invoke$arity$0 ? fexpr__28381_28564.cljs$core$IFn$_invoke$arity$0() : fexpr__28381_28564.call(null));
}

var G__28565 = (i_28560 + (1));
i_28560 = G__28565;
continue;
} else {
}
break;
}
}

var fexpr__28390 = p.terminator;
return (fexpr__28390.cljs$core$IFn$_invoke$arity$0 ? fexpr__28390.cljs$core$IFn$_invoke$arity$0() : fexpr__28390.call(null));
} else {
if((p === p.value)){
var table = p.table;
try{var k = (p.key = (function (){var G__28414 = (p.value = cljs.core.deref(p.input));
var fexpr__28413 = p.keyfn;
return (fexpr__28413.cljs$core$IFn$_invoke$arity$1 ? fexpr__28413.cljs$core$IFn$_invoke$arity$1(G__28414) : fexpr__28413.call(null,G__28414));
})());
var m = (table.length - (1));
var i = (cljs.core.hash(k) & m);
while(true){
var temp__5806__auto__ = (table[i]);
if((temp__5806__auto__ == null)){
var fexpr__28421 = p.notifier;
return (fexpr__28421.cljs$core$IFn$_invoke$arity$0 ? fexpr__28421.cljs$core$IFn$_invoke$arity$0() : fexpr__28421.call(null));
} else {
var h = temp__5806__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,h.key)){
var fexpr__28425 = h.notifier;
return (fexpr__28425.cljs$core$IFn$_invoke$arity$0 ? fexpr__28425.cljs$core$IFn$_invoke$arity$0() : fexpr__28425.call(null));
} else {
var G__28567 = missionary.impl.GroupBy.step(i,m);
i = G__28567;
continue;
}
}
break;
}
}catch (e28397){var e = e28397;
(p.value = e);

(p.table = null);

missionary.impl.GroupBy.kill(p);

var n__5636__auto___28568 = table.length;
var i_28569 = (0);
while(true){
if((i_28569 < n__5636__auto___28568)){
var temp__5808__auto___28570 = (table[i_28569]);
if((temp__5808__auto___28570 == null)){
} else {
var g_28571 = temp__5808__auto___28570;
var fexpr__28407_28572 = g_28571.terminator;
(fexpr__28407_28572.cljs$core$IFn$_invoke$arity$0 ? fexpr__28407_28572.cljs$core$IFn$_invoke$arity$0() : fexpr__28407_28572.call(null));
}

var G__28573 = (i_28569 + (1));
i_28569 = G__28573;
continue;
} else {
}
break;
}

var fexpr__28411 = p.notifier;
return (fexpr__28411.cljs$core$IFn$_invoke$arity$0 ? fexpr__28411.cljs$core$IFn$_invoke$arity$0() : fexpr__28411.call(null));
}} else {
try{cljs.core.deref(p.input);
}catch (e28429){var __28574 = e28429;
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
var fexpr__28446_28576 = g.terminator;
(fexpr__28446_28576.cljs$core$IFn$_invoke$arity$0 ? fexpr__28446_28576.cljs$core$IFn$_invoke$arity$0() : fexpr__28446_28576.call(null));

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

(p.input = (function (){var G__28468 = (function (){
return missionary.impl.GroupBy.transfer(p);
});
var G__28469 = (function (){
(p.done = true);

return missionary.impl.GroupBy.transfer(p);
});
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28468,G__28469) : f.call(null,G__28468,G__28469));
})());

missionary.impl.GroupBy.transfer(p);

return p;
});

//# sourceMappingURL=missionary.impl.GroupBy.js.map
