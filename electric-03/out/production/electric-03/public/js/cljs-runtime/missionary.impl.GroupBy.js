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
(missionary.impl.GroupBy.Process.prototype.call = (function (unused__13632__auto__){
var self__ = this;
var self__ = this;
var G__39844 = (arguments.length - (1));
switch (G__39844) {
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

(missionary.impl.GroupBy.Process.prototype.apply = (function (self__,args39834){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args39834)));
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
(missionary.impl.GroupBy.Group.prototype.call = (function (unused__13632__auto__){
var self__ = this;
var self__ = this;
var G__39869 = (arguments.length - (1));
switch (G__39869) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.GroupBy.Group.prototype.apply = (function (self__,args39868){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args39868)));
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

var fexpr__39870 = p.input;
return (fexpr__39870.cljs$core$IFn$_invoke$arity$0 ? fexpr__39870.cljs$core$IFn$_invoke$arity$0() : fexpr__39870.call(null));
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

var s_39924 = table.length;
var m_39925 = (s_39924 - (1));
var i_39926 = (cljs.core.hash(k) & m_39925);
while(true){
var G__39871_39927 = (table[i_39926]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__39871_39927)){
(table[i_39926] = g);
} else {
var G__39928 = missionary.impl.GroupBy.step(i_39926,m_39925);
i_39926 = G__39928;
continue;

}
break;
}

var ss_39929 = (s_39924 << (1));
if((ss_39929 <= ((3) * (p.load = (p.load + (1)))))){
var mm_39930 = (ss_39929 - (1));
var larger_39931 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(ss_39929);
(p.table = larger_39931);

var n__5636__auto___39932 = s_39924;
var i_39933 = (0);
while(true){
if((i_39933 < n__5636__auto___39932)){
var temp__5808__auto___39934 = (table[i_39933]);
if((temp__5808__auto___39934 == null)){
} else {
var h_39935 = temp__5808__auto___39934;
var j_39936 = (cljs.core.hash(h_39935.key) & mm_39930);
while(true){
var G__39872_39937 = (larger_39931[j_39936]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__39872_39937)){
(larger_39931[j_39936] = h_39935);
} else {
var G__39938 = missionary.impl.GroupBy.step(j_39936,mm_39930);
j_39936 = G__39938;
continue;

}
break;
}
}

var G__39939 = (i_39933 + (1));
i_39933 = G__39939;
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
var G__39944 = missionary.impl.GroupBy.step(i,m);
i = G__39944;
continue;
}
break;
}
})();
(table[i] = null);

(p.load = (p.load - (1)));

var i_39945__$1 = missionary.impl.GroupBy.step(i,m);
while(true){
var temp__5808__auto___39946 = (table[i_39945__$1]);
if((temp__5808__auto___39946 == null)){
} else {
var h_39947 = temp__5808__auto___39946;
var j_39948 = (cljs.core.hash(h_39947.key) & m);
if((i_39945__$1 === j_39948)){
} else {
(table[i_39945__$1] = null);

var j_39952__$1 = j_39948;
while(true){
if(((table[j_39952__$1]) == null)){
(table[j_39952__$1] = h_39947);
} else {
var G__39953 = missionary.impl.GroupBy.step(j_39952__$1,m);
j_39952__$1 = G__39953;
continue;
}
break;
}
}

var G__39954 = missionary.impl.GroupBy.step(i_39945__$1,m);
i_39945__$1 = G__39954;
continue;
}
break;
}

var fexpr__39873 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,p.key))?p.notifier:g.notifier);
return (fexpr__39873.cljs$core$IFn$_invoke$arity$0 ? fexpr__39873.cljs$core$IFn$_invoke$arity$0() : fexpr__39873.call(null));
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

var temp__5808__auto___39955 = p.table;
if((temp__5808__auto___39955 == null)){
} else {
var table_39956 = temp__5808__auto___39955;
(p.table = null);

var n__5636__auto___39957 = table_39956.length;
var i_39958 = (0);
while(true){
if((i_39958 < n__5636__auto___39957)){
var temp__5808__auto___39959__$1 = (table_39956[i_39958]);
if((temp__5808__auto___39959__$1 == null)){
} else {
var g_39960 = temp__5808__auto___39959__$1;
var fexpr__39874_39964 = g_39960.terminator;
(fexpr__39874_39964.cljs$core$IFn$_invoke$arity$0 ? fexpr__39874_39964.cljs$core$IFn$_invoke$arity$0() : fexpr__39874_39964.call(null));
}

var G__39965 = (i_39958 + (1));
i_39958 = G__39965;
continue;
} else {
}
break;
}
}

var fexpr__39875 = p.terminator;
return (fexpr__39875.cljs$core$IFn$_invoke$arity$0 ? fexpr__39875.cljs$core$IFn$_invoke$arity$0() : fexpr__39875.call(null));
} else {
if((p === p.value)){
var table = p.table;
try{var k = (p.key = (function (){var G__39880 = (p.value = cljs.core.deref(p.input));
var fexpr__39879 = p.keyfn;
return (fexpr__39879.cljs$core$IFn$_invoke$arity$1 ? fexpr__39879.cljs$core$IFn$_invoke$arity$1(G__39880) : fexpr__39879.call(null,G__39880));
})());
var m = (table.length - (1));
var i = (cljs.core.hash(k) & m);
while(true){
var temp__5806__auto__ = (table[i]);
if((temp__5806__auto__ == null)){
var fexpr__39881 = p.notifier;
return (fexpr__39881.cljs$core$IFn$_invoke$arity$0 ? fexpr__39881.cljs$core$IFn$_invoke$arity$0() : fexpr__39881.call(null));
} else {
var h = temp__5806__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,h.key)){
var fexpr__39882 = h.notifier;
return (fexpr__39882.cljs$core$IFn$_invoke$arity$0 ? fexpr__39882.cljs$core$IFn$_invoke$arity$0() : fexpr__39882.call(null));
} else {
var G__39966 = missionary.impl.GroupBy.step(i,m);
i = G__39966;
continue;
}
}
break;
}
}catch (e39876){var e = e39876;
(p.value = e);

(p.table = null);

missionary.impl.GroupBy.kill(p);

var n__5636__auto___39967 = table.length;
var i_39968 = (0);
while(true){
if((i_39968 < n__5636__auto___39967)){
var temp__5808__auto___39969 = (table[i_39968]);
if((temp__5808__auto___39969 == null)){
} else {
var g_39970 = temp__5808__auto___39969;
var fexpr__39877_39971 = g_39970.terminator;
(fexpr__39877_39971.cljs$core$IFn$_invoke$arity$0 ? fexpr__39877_39971.cljs$core$IFn$_invoke$arity$0() : fexpr__39877_39971.call(null));
}

var G__39972 = (i_39968 + (1));
i_39968 = G__39972;
continue;
} else {
}
break;
}

var fexpr__39878 = p.notifier;
return (fexpr__39878.cljs$core$IFn$_invoke$arity$0 ? fexpr__39878.cljs$core$IFn$_invoke$arity$0() : fexpr__39878.call(null));
}} else {
try{cljs.core.deref(p.input);
}catch (e39883){var __39973 = e39883;
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
var fexpr__39886_39974 = g.terminator;
(fexpr__39886_39974.cljs$core$IFn$_invoke$arity$0 ? fexpr__39886_39974.cljs$core$IFn$_invoke$arity$0() : fexpr__39886_39974.call(null));

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

(p.input = (function (){var G__39890 = (function (){
return missionary.impl.GroupBy.transfer(p);
});
var G__39891 = (function (){
(p.done = true);

return missionary.impl.GroupBy.transfer(p);
});
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__39890,G__39891) : f.call(null,G__39890,G__39891));
})());

missionary.impl.GroupBy.transfer(p);

return p;
});

//# sourceMappingURL=missionary.impl.GroupBy.js.map
