goog.provide('missionary.impl.Zip');


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Zip.Process = (function (combinator,notifier,flusher,iterators,results,pending){
this.combinator = combinator;
this.notifier = notifier;
this.flusher = flusher;
this.iterators = iterators;
this.results = results;
this.pending = pending;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Zip.Process.prototype.call = (function (unused__13640__auto__){
var self__ = this;
var self__ = this;
var G__31766 = (arguments.length - (1));
switch (G__31766) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Zip.Process.prototype.apply = (function (self__,args31764){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args31764)));
}));

(missionary.impl.Zip.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var z = this;
return (missionary.impl.Zip.cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Zip.cancel.cljs$core$IFn$_invoke$arity$1(z) : missionary.impl.Zip.cancel.call(null,z));
}));

(missionary.impl.Zip.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (z){
var self__ = this;
var z__$1 = this;
return (missionary.impl.Zip.transfer.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Zip.transfer.cljs$core$IFn$_invoke$arity$1(z__$1) : missionary.impl.Zip.transfer.call(null,z__$1));
}));

(missionary.impl.Zip.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinator","combinator",-746639828,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"flusher","flusher",1361929109,null),new cljs.core.Symbol(null,"iterators","iterators",58622696,null),new cljs.core.Symbol(null,"results","results",506361414,null),cljs.core.with_meta(new cljs.core.Symbol(null,"pending","pending",1420494800,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null))], null);
}));

(missionary.impl.Zip.Process.cljs$lang$type = true);

(missionary.impl.Zip.Process.cljs$lang$ctorStr = "missionary.impl.Zip/Process");

(missionary.impl.Zip.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Zip/Process");
}));

/**
 * Positional factory function for missionary.impl.Zip/Process.
 */
missionary.impl.Zip.__GT_Process = (function missionary$impl$Zip$__GT_Process(combinator,notifier,flusher,iterators,results,pending){
return (new missionary.impl.Zip.Process(combinator,notifier,flusher,iterators,results,pending));
});

missionary.impl.Zip.cancel = (function missionary$impl$Zip$cancel(z){
var its = z.iterators;
var n__5636__auto__ = its.length;
var i = (0);
while(true){
if((i < n__5636__auto__)){
var temp__5808__auto___31809 = (its[i]);
if((temp__5808__auto___31809 == null)){
} else {
var it_31810 = temp__5808__auto___31809;
(it_31810.cljs$core$IFn$_invoke$arity$0 ? it_31810.cljs$core$IFn$_invoke$arity$0() : it_31810.call(null));
}

var G__31811 = (i + (1));
i = G__31811;
continue;
} else {
return null;
}
break;
}
});
missionary.impl.Zip.transfer = (function missionary$impl$Zip$transfer(z){
var its = z.iterators;
var res = z.results;
try{(z.pending = (z.pending - (1)));

var n__5636__auto___31814 = its.length;
var i_31815 = (0);
while(true){
if((i_31815 < n__5636__auto___31814)){
(z.pending = (z.pending + (1)));

(res[i_31815] = cljs.core.deref((its[i_31815])));

var G__31819 = (i_31815 + (1));
i_31815 = G__31819;
continue;
} else {
}
break;
}

return z.combinator.apply(null,res);
}catch (e31783){var e = e31783;
(z.notifier = z.flusher);

throw e;
}finally {(z.pending = (z.pending + (1)));

if((z.pending === (0))){
var fexpr__31782_31820 = z.notifier;
(fexpr__31782_31820.cljs$core$IFn$_invoke$arity$0 ? fexpr__31782_31820.cljs$core$IFn$_invoke$arity$0() : fexpr__31782_31820.call(null));
} else {
}

if((z.notifier === z.flusher)){
missionary.impl.Zip.cancel(z);
} else {
}
}});
missionary.impl.Zip.run = (function missionary$impl$Zip$run(f,fs,n,t){
var c = cljs.core.count(fs);
var i = cljs.core.iter(fs);
var z = missionary.impl.Zip.__GT_Process(f,n,null,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(c),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(c),(0));
(z.flusher = (function (){
var its = z.iterators;
var cnt = its.length;
while(true){
var flushed = (function (){var i__$1 = (0);
var f__$1 = (0);
while(true){
if((i__$1 < cnt)){
var G__31821 = (i__$1 + (1));
var G__31822 = (function (){var temp__5806__auto__ = (its[i__$1]);
if((temp__5806__auto__ == null)){
return f__$1;
} else {
var it = temp__5806__auto__;
try{cljs.core.deref(it);
}catch (e31789){var __31823 = e31789;
}
return (f__$1 + (1));
}
})();
i__$1 = G__31821;
f__$1 = G__31822;
continue;
} else {
return f__$1;
}
break;
}
})();
if((flushed === (0))){
return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
} else {
if(((z.pending = (z.pending + flushed)) === (0))){
continue;
} else {
return null;
}
}
break;
}
}));

var index_31824 = (0);
while(true){
(z.iterators[index_31824] = (function (){var G__31792 = ((function (index_31824,c,i,z){
return (function (){
var p = (z.pending - (1));
(z.pending = p);

if((p === (0))){
var fexpr__31797 = z.notifier;
return (fexpr__31797.cljs$core$IFn$_invoke$arity$0 ? fexpr__31797.cljs$core$IFn$_invoke$arity$0() : fexpr__31797.call(null));
} else {
return null;
}
});})(index_31824,c,i,z))
;
var G__31793 = ((function (index_31824,G__31792,c,i,z){
return (function (){
(z.iterators[index_31824] = null);

(z.notifier = z.flusher);

var p = (z.pending = (z.pending - (1)));
if((p < (0))){
return null;
} else {
missionary.impl.Zip.cancel(z);

if((p === (0))){
var fexpr__31799 = z.notifier;
return (fexpr__31799.cljs$core$IFn$_invoke$arity$0 ? fexpr__31799.cljs$core$IFn$_invoke$arity$0() : fexpr__31799.call(null));
} else {
return null;
}
}
});})(index_31824,G__31792,c,i,z))
;
var fexpr__31791 = i.next();
return (fexpr__31791.cljs$core$IFn$_invoke$arity$2 ? fexpr__31791.cljs$core$IFn$_invoke$arity$2(G__31792,G__31793) : fexpr__31791.call(null,G__31792,G__31793));
})());

if(cljs.core.truth_(i.hasNext())){
var G__31830 = (index_31824 + (1));
index_31824 = G__31830;
continue;
} else {
}
break;
}

if(((z.pending = (z.pending + c)) === (0))){
var fexpr__31800_31831 = z.notifier;
(fexpr__31800_31831.cljs$core$IFn$_invoke$arity$0 ? fexpr__31800_31831.cljs$core$IFn$_invoke$arity$0() : fexpr__31800_31831.call(null));
} else {
}

return z;
});

//# sourceMappingURL=missionary.impl.Zip.js.map
