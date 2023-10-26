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
(missionary.impl.GroupBy.Process.prototype.call = (function (unused__13671__auto__){
var self__ = this;
var self__ = this;
var G__39931 = (arguments.length - (1));
switch (G__39931) {
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

(missionary.impl.GroupBy.Process.prototype.apply = (function (self__,args39924){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args39924)));
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
(missionary.impl.GroupBy.Group.prototype.call = (function (unused__13671__auto__){
var self__ = this;
var self__ = this;
var G__39940 = (arguments.length - (1));
switch (G__39940) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.GroupBy.Group.prototype.apply = (function (self__,args39939){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args39939)));
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

var fexpr__39944 = p.input;
return (fexpr__39944.cljs$core$IFn$_invoke$arity$0 ? fexpr__39944.cljs$core$IFn$_invoke$arity$0() : fexpr__39944.call(null));
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

var s_39975 = table.length;
var m_39976 = (s_39975 - (1));
var i_39977 = (cljs.core.hash(k) & m_39976);
while(true){
var G__39947_39978 = (table[i_39977]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__39947_39978)){
(table[i_39977] = g);
} else {
var G__39979 = missionary.impl.GroupBy.step(i_39977,m_39976);
i_39977 = G__39979;
continue;

}
break;
}

var ss_39980 = (s_39975 << (1));
if((ss_39980 <= ((3) * (p.load = (p.load + (1)))))){
var mm_39981 = (ss_39980 - (1));
var larger_39982 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(ss_39980);
(p.table = larger_39982);

var n__5636__auto___39983 = s_39975;
var i_39984 = (0);
while(true){
if((i_39984 < n__5636__auto___39983)){
var temp__5820__auto___39985 = (table[i_39984]);
if((temp__5820__auto___39985 == null)){
} else {
var h_39986 = temp__5820__auto___39985;
var j_39987 = (cljs.core.hash(h_39986.key) & mm_39981);
while(true){
var G__39948_39988 = (larger_39982[j_39987]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__39948_39988)){
(larger_39982[j_39987] = h_39986);
} else {
var G__39989 = missionary.impl.GroupBy.step(j_39987,mm_39981);
j_39987 = G__39989;
continue;

}
break;
}
}

var G__39990 = (i_39984 + (1));
i_39984 = G__39990;
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
var G__39992 = missionary.impl.GroupBy.step(i,m);
i = G__39992;
continue;
}
break;
}
})();
(table[i] = null);

(p.load = (p.load - (1)));

var i_39993__$1 = missionary.impl.GroupBy.step(i,m);
while(true){
var temp__5820__auto___39994 = (table[i_39993__$1]);
if((temp__5820__auto___39994 == null)){
} else {
var h_39995 = temp__5820__auto___39994;
var j_39996 = (cljs.core.hash(h_39995.key) & m);
if((i_39993__$1 === j_39996)){
} else {
(table[i_39993__$1] = null);

var j_39997__$1 = j_39996;
while(true){
if(((table[j_39997__$1]) == null)){
(table[j_39997__$1] = h_39995);
} else {
var G__39998 = missionary.impl.GroupBy.step(j_39997__$1,m);
j_39997__$1 = G__39998;
continue;
}
break;
}
}

var G__39999 = missionary.impl.GroupBy.step(i_39993__$1,m);
i_39993__$1 = G__39999;
continue;
}
break;
}

var fexpr__39957 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,p.key))?p.notifier:g.notifier);
return (fexpr__39957.cljs$core$IFn$_invoke$arity$0 ? fexpr__39957.cljs$core$IFn$_invoke$arity$0() : fexpr__39957.call(null));
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

var temp__5820__auto___40000 = p.table;
if((temp__5820__auto___40000 == null)){
} else {
var table_40001 = temp__5820__auto___40000;
(p.table = null);

var n__5636__auto___40002 = table_40001.length;
var i_40003 = (0);
while(true){
if((i_40003 < n__5636__auto___40002)){
var temp__5820__auto___40004__$1 = (table_40001[i_40003]);
if((temp__5820__auto___40004__$1 == null)){
} else {
var g_40005 = temp__5820__auto___40004__$1;
var fexpr__39958_40006 = g_40005.terminator;
(fexpr__39958_40006.cljs$core$IFn$_invoke$arity$0 ? fexpr__39958_40006.cljs$core$IFn$_invoke$arity$0() : fexpr__39958_40006.call(null));
}

var G__40007 = (i_40003 + (1));
i_40003 = G__40007;
continue;
} else {
}
break;
}
}

var fexpr__39959 = p.terminator;
return (fexpr__39959.cljs$core$IFn$_invoke$arity$0 ? fexpr__39959.cljs$core$IFn$_invoke$arity$0() : fexpr__39959.call(null));
} else {
if((p === p.value)){
var table = p.table;
try{var k = (p.key = (function (){var G__39965 = (p.value = cljs.core.deref(p.input));
var fexpr__39964 = p.keyfn;
return (fexpr__39964.cljs$core$IFn$_invoke$arity$1 ? fexpr__39964.cljs$core$IFn$_invoke$arity$1(G__39965) : fexpr__39964.call(null,G__39965));
})());
var m = (table.length - (1));
var i = (cljs.core.hash(k) & m);
while(true){
var temp__5818__auto__ = (table[i]);
if((temp__5818__auto__ == null)){
var fexpr__39966 = p.notifier;
return (fexpr__39966.cljs$core$IFn$_invoke$arity$0 ? fexpr__39966.cljs$core$IFn$_invoke$arity$0() : fexpr__39966.call(null));
} else {
var h = temp__5818__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,h.key)){
var fexpr__39967 = h.notifier;
return (fexpr__39967.cljs$core$IFn$_invoke$arity$0 ? fexpr__39967.cljs$core$IFn$_invoke$arity$0() : fexpr__39967.call(null));
} else {
var G__40008 = missionary.impl.GroupBy.step(i,m);
i = G__40008;
continue;
}
}
break;
}
}catch (e39960){var e = e39960;
(p.value = e);

(p.table = null);

missionary.impl.GroupBy.kill(p);

var n__5636__auto___40009 = table.length;
var i_40010 = (0);
while(true){
if((i_40010 < n__5636__auto___40009)){
var temp__5820__auto___40011 = (table[i_40010]);
if((temp__5820__auto___40011 == null)){
} else {
var g_40012 = temp__5820__auto___40011;
var fexpr__39961_40013 = g_40012.terminator;
(fexpr__39961_40013.cljs$core$IFn$_invoke$arity$0 ? fexpr__39961_40013.cljs$core$IFn$_invoke$arity$0() : fexpr__39961_40013.call(null));
}

var G__40014 = (i_40010 + (1));
i_40010 = G__40014;
continue;
} else {
}
break;
}

var fexpr__39962 = p.notifier;
return (fexpr__39962.cljs$core$IFn$_invoke$arity$0 ? fexpr__39962.cljs$core$IFn$_invoke$arity$0() : fexpr__39962.call(null));
}} else {
try{cljs.core.deref(p.input);
}catch (e39968){var __40015 = e39968;
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
var fexpr__39969_40016 = g.terminator;
(fexpr__39969_40016.cljs$core$IFn$_invoke$arity$0 ? fexpr__39969_40016.cljs$core$IFn$_invoke$arity$0() : fexpr__39969_40016.call(null));

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

(p.input = (function (){var G__39970 = (function (){
return missionary.impl.GroupBy.transfer(p);
});
var G__39971 = (function (){
(p.done = true);

return missionary.impl.GroupBy.transfer(p);
});
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__39970,G__39971) : f.call(null,G__39970,G__39971));
})());

missionary.impl.GroupBy.transfer(p);

return p;
});

//# sourceMappingURL=missionary.impl.GroupBy.js.map
