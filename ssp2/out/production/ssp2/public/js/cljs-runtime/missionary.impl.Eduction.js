goog.provide('missionary.impl.Eduction');


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Eduction.Process = (function (reducer,iterator,notifier,terminator,buffer,offset,length,error,busy,done){
this.reducer = reducer;
this.iterator = iterator;
this.notifier = notifier;
this.terminator = terminator;
this.buffer = buffer;
this.offset = offset;
this.length = length;
this.error = error;
this.busy = busy;
this.done = done;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Eduction.Process.prototype.call = (function (unused__15668__auto__){
var self__ = this;
var self__ = this;
var G__41977 = (arguments.length - (1));
switch (G__41977) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Eduction.Process.prototype.apply = (function (self__,args41976){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args41976)));
}));

(missionary.impl.Eduction.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var t = this;
return (missionary.impl.Eduction.cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Eduction.cancel.cljs$core$IFn$_invoke$arity$1(t) : missionary.impl.Eduction.cancel.call(null,t));
}));

(missionary.impl.Eduction.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return (missionary.impl.Eduction.transfer.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Eduction.transfer.cljs$core$IFn$_invoke$arity$1(t__$1) : missionary.impl.Eduction.transfer.call(null,t__$1));
}));

(missionary.impl.Eduction.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reducer","reducer",-948842876,null),new cljs.core.Symbol(null,"iterator","iterator",-32550441,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null),cljs.core.with_meta(new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"length","length",-2065447907,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null))], null);
}));

(missionary.impl.Eduction.Process.cljs$lang$type = true);

(missionary.impl.Eduction.Process.cljs$lang$ctorStr = "missionary.impl.Eduction/Process");

(missionary.impl.Eduction.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Eduction/Process");
}));

/**
 * Positional factory function for missionary.impl.Eduction/Process.
 */
missionary.impl.Eduction.__GT_Process = (function missionary$impl$Eduction$__GT_Process(reducer,iterator,notifier,terminator,buffer,offset,length,error,busy,done){
return (new missionary.impl.Eduction.Process(reducer,iterator,notifier,terminator,buffer,offset,length,error,busy,done));
});

missionary.impl.Eduction.feed = (function missionary$impl$Eduction$feed(var_args){
var G__41985 = arguments.length;
switch (G__41985) {
case 1:
return missionary.impl.Eduction.feed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return missionary.impl.Eduction.feed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(missionary.impl.Eduction.feed.cljs$core$IFn$_invoke$arity$1 = (function (t){
return t;
}));

(missionary.impl.Eduction.feed.cljs$core$IFn$_invoke$arity$2 = (function (t,x){
if((t.length === t.buffer.length)){
t.buffer.push(x);
} else {
(t.buffer[t.length] = x);
}

(t.length = (t.length + (1)));

return t;
}));

(missionary.impl.Eduction.feed.cljs$lang$maxFixedArity = 2);

missionary.impl.Eduction.pull = (function missionary$impl$Eduction$pull(t){
while(true){
if(cljs.core.truth_(t.done)){
var temp__5806__auto__ = t.reducer;
if((temp__5806__auto__ == null)){
var fexpr__41991 = t.terminator;
return (fexpr__41991.cljs$core$IFn$_invoke$arity$0 ? fexpr__41991.cljs$core$IFn$_invoke$arity$0() : fexpr__41991.call(null));
} else {
var rf = temp__5806__auto__;
(t.offset = (0));

(t.length = (0));

try{(rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(t) : rf.call(null,t));
}catch (e41993){var e_42014 = e41993;
(t.error = t.length);

missionary.impl.Eduction.feed.cljs$core$IFn$_invoke$arity$2(t,e_42014);
}
(t.reducer = null);

if((t.length === (0))){
continue;
} else {
var fexpr__41995_42015 = t.notifier;
(fexpr__41995_42015.cljs$core$IFn$_invoke$arity$0 ? fexpr__41995_42015.cljs$core$IFn$_invoke$arity$0() : fexpr__41995_42015.call(null));

if(cljs.core.truth_((t.busy = cljs.core.not(t.busy)))){
continue;
} else {
return null;
}
}
}
} else {
var temp__5806__auto__ = t.reducer;
if((temp__5806__auto__ == null)){
try{cljs.core.deref(t.iterator);
}catch (e41996){var __42017 = e41996;
}
if(cljs.core.truth_((t.busy = cljs.core.not(t.busy)))){
continue;
} else {
return null;
}
} else {
var rf = temp__5806__auto__;
(t.offset = (0));

(t.length = (0));

try{if(cljs.core.reduced_QMARK_((function (){var G__41998 = t;
var G__41999 = cljs.core.deref(t.iterator);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__41998,G__41999) : rf.call(null,G__41998,G__41999));
})())){
(rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(t) : rf.call(null,t));

(t.reducer = null);

(missionary.impl.Eduction.cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Eduction.cancel.cljs$core$IFn$_invoke$arity$1(t) : missionary.impl.Eduction.cancel.call(null,t));
} else {
}
}catch (e41997){var e_42020 = e41997;
(t.error = t.length);

missionary.impl.Eduction.feed.cljs$core$IFn$_invoke$arity$2(t,e_42020);

(t.reducer = null);

(missionary.impl.Eduction.cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Eduction.cancel.cljs$core$IFn$_invoke$arity$1(t) : missionary.impl.Eduction.cancel.call(null,t));
}
if((t.length > (0))){
var fexpr__42000 = t.notifier;
return (fexpr__42000.cljs$core$IFn$_invoke$arity$0 ? fexpr__42000.cljs$core$IFn$_invoke$arity$0() : fexpr__42000.call(null));
} else {
if(cljs.core.truth_((t.busy = cljs.core.not(t.busy)))){
continue;
} else {
return null;
}
}
}
}
break;
}
});
missionary.impl.Eduction.cancel = (function missionary$impl$Eduction$cancel(t){
var fexpr__42003 = t.iterator;
return (fexpr__42003.cljs$core$IFn$_invoke$arity$0 ? fexpr__42003.cljs$core$IFn$_invoke$arity$0() : fexpr__42003.call(null));
});
missionary.impl.Eduction.transfer = (function missionary$impl$Eduction$transfer(t){
var o = t.offset;
var x = (t.buffer[o]);
(t.buffer[o] = null);

(t.offset = (o + (1)));

if((t.offset === t.length)){
if(cljs.core.truth_((t.busy = cljs.core.not(t.busy)))){
missionary.impl.Eduction.pull(t);
} else {
}
} else {
var fexpr__42004_42022 = t.notifier;
(fexpr__42004_42022.cljs$core$IFn$_invoke$arity$0 ? fexpr__42004_42022.cljs$core$IFn$_invoke$arity$0() : fexpr__42004_42022.call(null));
}

if((o === t.error)){
throw x;
} else {
return x;
}
});
missionary.impl.Eduction.run = (function missionary$impl$Eduction$run(xf,flow,n,t){
var t__$1 = missionary.impl.Eduction.__GT_Process((xf.cljs$core$IFn$_invoke$arity$1 ? xf.cljs$core$IFn$_invoke$arity$1(missionary.impl.Eduction.feed) : xf.call(null,missionary.impl.Eduction.feed)),null,n,t,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1)),(0),(0),(-1),true,false);
var n__$1 = (function (){
if(cljs.core.truth_((t__$1.busy = cljs.core.not(t__$1.busy)))){
return missionary.impl.Eduction.pull(t__$1);
} else {
return null;
}
});
(t__$1.iterator = (function (){var G__42006 = n__$1;
var G__42007 = (function (){
(t__$1.done = true);

return n__$1();
});
return (flow.cljs$core$IFn$_invoke$arity$2 ? flow.cljs$core$IFn$_invoke$arity$2(G__42006,G__42007) : flow.call(null,G__42006,G__42007));
})());

n__$1();

return t__$1;
});

//# sourceMappingURL=missionary.impl.Eduction.js.map
