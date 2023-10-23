goog.provide('missionary.impl.Latest');


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Latest.Process = (function (combinator,notifier,terminator,value,args,inputs,dirty,alive){
this.combinator = combinator;
this.notifier = notifier;
this.terminator = terminator;
this.value = value;
this.args = args;
this.inputs = inputs;
this.dirty = dirty;
this.alive = alive;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Latest.Process.prototype.call = (function (unused__15668__auto__){
var self__ = this;
var self__ = this;
var G__41447 = (arguments.length - (1));
switch (G__41447) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Latest.Process.prototype.apply = (function (self__,args41445){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args41445)));
}));

(missionary.impl.Latest.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var ps = this;
return (missionary.impl.Latest.kill.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Latest.kill.cljs$core$IFn$_invoke$arity$1(ps) : missionary.impl.Latest.kill.call(null,ps));
}));

(missionary.impl.Latest.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (ps){
var self__ = this;
var ps__$1 = this;
return (missionary.impl.Latest.transfer.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Latest.transfer.cljs$core$IFn$_invoke$arity$1(ps__$1) : missionary.impl.Latest.transfer.call(null,ps__$1));
}));

(missionary.impl.Latest.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinator","combinator",-746639828,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"dirty","dirty",-1924882488,null),cljs.core.with_meta(new cljs.core.Symbol(null,"alive","alive",-1229505839,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null))], null);
}));

(missionary.impl.Latest.Process.cljs$lang$type = true);

(missionary.impl.Latest.Process.cljs$lang$ctorStr = "missionary.impl.Latest/Process");

(missionary.impl.Latest.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Latest/Process");
}));

/**
 * Positional factory function for missionary.impl.Latest/Process.
 */
missionary.impl.Latest.__GT_Process = (function missionary$impl$Latest$__GT_Process(combinator,notifier,terminator,value,args,inputs,dirty,alive){
return (new missionary.impl.Latest.Process(combinator,notifier,terminator,value,args,inputs,dirty,alive));
});

missionary.impl.Latest.kill = (function missionary$impl$Latest$kill(ps){
var inputs = ps.inputs;
var n__5636__auto__ = inputs.length;
var i = (0);
while(true){
if((i < n__5636__auto__)){
var fexpr__41450_41484 = (inputs[i]);
(fexpr__41450_41484.cljs$core$IFn$_invoke$arity$0 ? fexpr__41450_41484.cljs$core$IFn$_invoke$arity$0() : fexpr__41450_41484.call(null));

var G__41486 = (i + (1));
i = G__41486;
continue;
} else {
return null;
}
break;
}
});
missionary.impl.Latest.transfer = (function missionary$impl$Latest$transfer(ps){
var c = ps.combinator;
var args = ps.args;
var inputs = ps.inputs;
var dirty = ps.dirty;
var x = ps.value;
var x__$1 = (function (){try{(ps.value = ps);

if((args == null)){
throw (new Error("Undefined continuous flow."));
} else {
}

var x__$1 = x;
while(true){
var i = missionary.impl.Heap.dequeue(dirty);
var p = (args[i]);
(args[i] = cljs.core.deref((inputs[i])));

var x__$2 = (((x__$1 === ps))?x__$1:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,(args[i])))?x__$1:ps));
if((missionary.impl.Heap.size(dirty) === (0))){
if((x__$2 === ps)){
var x__$3 = c.apply(null,args);
if((missionary.impl.Heap.size(dirty) === (0))){
return x__$3;
} else {
var G__41509 = x__$3;
x__$1 = G__41509;
continue;
}
} else {
return x__$2;
}
} else {
var G__41510 = x__$2;
x__$1 = G__41510;
continue;
}
break;
}
}catch (e41452){var e = e41452;
missionary.impl.Latest.kill(ps);

while(true){
if((missionary.impl.Heap.size(dirty) > (0))){
try{cljs.core.deref((inputs[missionary.impl.Heap.dequeue(dirty)]));
}catch (e41453){var __41511 = e41453;
}
continue;
} else {
}
break;
}

(ps.notifier = null);

return e;
}})();
(ps.value = x__$1);

if((ps.alive === (0))){
var fexpr__41456_41512 = ps.terminator;
(fexpr__41456_41512.cljs$core$IFn$_invoke$arity$0 ? fexpr__41456_41512.cljs$core$IFn$_invoke$arity$0() : fexpr__41456_41512.call(null));
} else {
}

if((ps.notifier == null)){
throw x__$1;
} else {
return x__$1;
}
});
missionary.impl.Latest.run = (function missionary$impl$Latest$run(c,fs,n,t){
var it = cljs.core.iter(fs);
var arity = cljs.core.count(fs);
var args = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(arity);
var inputs = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(arity);
var dirty = missionary.impl.Heap.create(arity);
var ps = missionary.impl.Latest.__GT_Process(c,n,t,null,null,inputs,dirty,arity);
var done = (function (){
if(((ps.alive = (ps.alive - (1))) === (0))){
if((ps.value === ps)){
return null;
} else {
var fexpr__41462 = ps.terminator;
return (fexpr__41462.cljs$core$IFn$_invoke$arity$0 ? fexpr__41462.cljs$core$IFn$_invoke$arity$0() : fexpr__41462.call(null));
}
} else {
return null;
}
});
(ps.value = ps);

var n__5636__auto___41514 = arity;
var index_41515 = (0);
while(true){
if((index_41515 < n__5636__auto___41514)){
(inputs[index_41515] = (function (){var G__41464 = ((function (index_41515,n__5636__auto___41514,it,arity,args,inputs,dirty,ps,done){
return (function (){
missionary.impl.Heap.enqueue(dirty,index_41515);

if(((1) === missionary.impl.Heap.size(dirty))){
if((ps.value === ps)){
return null;
} else {
var temp__5806__auto__ = ps.notifier;
if((temp__5806__auto__ == null)){
while(true){
try{cljs.core.deref((inputs[missionary.impl.Heap.dequeue(dirty)]));
}catch (e41466){var __41522 = e41466;
}
if((missionary.impl.Heap.size(dirty) > (0))){
continue;
} else {
return null;
}
break;
}
} else {
var n__$1 = temp__5806__auto__;
return (n__$1.cljs$core$IFn$_invoke$arity$0 ? n__$1.cljs$core$IFn$_invoke$arity$0() : n__$1.call(null));
}
}
} else {
return null;
}
});})(index_41515,n__5636__auto___41514,it,arity,args,inputs,dirty,ps,done))
;
var G__41465 = done;
var fexpr__41463 = it.next();
return (fexpr__41463.cljs$core$IFn$_invoke$arity$2 ? fexpr__41463.cljs$core$IFn$_invoke$arity$2(G__41464,G__41465) : fexpr__41463.call(null,G__41464,G__41465));
})());

var G__41525 = (index_41515 + (1));
index_41515 = G__41525;
continue;
} else {
}
break;
}

if((missionary.impl.Heap.size(dirty) === arity)){
(ps.args = args);
} else {
}

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return ps;
});

//# sourceMappingURL=missionary.impl.Latest.js.map
