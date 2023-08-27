goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27305 = arguments.length;
switch (G__27305) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27313 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27313 = (function (f,blockable,meta27314){
this.f = f;
this.blockable = blockable;
this.meta27314 = meta27314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27315,meta27314__$1){
var self__ = this;
var _27315__$1 = this;
return (new cljs.core.async.t_cljs$core$async27313(self__.f,self__.blockable,meta27314__$1));
}));

(cljs.core.async.t_cljs$core$async27313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27315){
var self__ = this;
var _27315__$1 = this;
return self__.meta27314;
}));

(cljs.core.async.t_cljs$core$async27313.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27313.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27313.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async27313.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async27313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27314","meta27314",1591564646,null)], null);
}));

(cljs.core.async.t_cljs$core$async27313.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27313");

(cljs.core.async.t_cljs$core$async27313.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async27313");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27313.
 */
cljs.core.async.__GT_t_cljs$core$async27313 = (function cljs$core$async$__GT_t_cljs$core$async27313(f__$1,blockable__$1,meta27314){
return (new cljs.core.async.t_cljs$core$async27313(f__$1,blockable__$1,meta27314));
});

}

return (new cljs.core.async.t_cljs$core$async27313(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27331 = arguments.length;
switch (G__27331) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27333 = arguments.length;
switch (G__27333) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27335 = arguments.length;
switch (G__27335) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_30012 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30012) : fn1.call(null,val_30012));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30012) : fn1.call(null,val_30012));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27337 = arguments.length;
switch (G__27337) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___30014 = n;
var x_30015 = (0);
while(true){
if((x_30015 < n__5636__auto___30014)){
(a[x_30015] = x_30015);

var G__30016 = (x_30015 + (1));
x_30015 = G__30016;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27342 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27342 = (function (flag,meta27343){
this.flag = flag;
this.meta27343 = meta27343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27344,meta27343__$1){
var self__ = this;
var _27344__$1 = this;
return (new cljs.core.async.t_cljs$core$async27342(self__.flag,meta27343__$1));
}));

(cljs.core.async.t_cljs$core$async27342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27344){
var self__ = this;
var _27344__$1 = this;
return self__.meta27343;
}));

(cljs.core.async.t_cljs$core$async27342.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27342.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async27342.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27342.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async27342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27343","meta27343",967472031,null)], null);
}));

(cljs.core.async.t_cljs$core$async27342.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27342");

(cljs.core.async.t_cljs$core$async27342.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async27342");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27342.
 */
cljs.core.async.__GT_t_cljs$core$async27342 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27342(flag__$1,meta27343){
return (new cljs.core.async.t_cljs$core$async27342(flag__$1,meta27343));
});

}

return (new cljs.core.async.t_cljs$core$async27342(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27353 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27353 = (function (flag,cb,meta27354){
this.flag = flag;
this.cb = cb;
this.meta27354 = meta27354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27355,meta27354__$1){
var self__ = this;
var _27355__$1 = this;
return (new cljs.core.async.t_cljs$core$async27353(self__.flag,self__.cb,meta27354__$1));
}));

(cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27355){
var self__ = this;
var _27355__$1 = this;
return self__.meta27354;
}));

(cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async27353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27354","meta27354",819625597,null)], null);
}));

(cljs.core.async.t_cljs$core$async27353.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27353");

(cljs.core.async.t_cljs$core$async27353.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async27353");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27353.
 */
cljs.core.async.__GT_t_cljs$core$async27353 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27353(flag__$1,cb__$1,meta27354){
return (new cljs.core.async.t_cljs$core$async27353(flag__$1,cb__$1,meta27354));
});

}

return (new cljs.core.async.t_cljs$core$async27353(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__27372_SHARP_){
var G__27387 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27372_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27387) : fret.call(null,G__27387));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__27375_SHARP_){
var G__27390 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27375_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27390) : fret.call(null,G__27390));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30034 = (i + (1));
i = G__30034;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30040 = arguments.length;
var i__5770__auto___30041 = (0);
while(true){
if((i__5770__auto___30041 < len__5769__auto___30040)){
args__5775__auto__.push((arguments[i__5770__auto___30041]));

var G__30043 = (i__5770__auto___30041 + (1));
i__5770__auto___30041 = G__30043;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27412){
var map__27413 = p__27412;
var map__27413__$1 = cljs.core.__destructure_map(map__27413);
var opts = map__27413__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27401){
var G__27405 = cljs.core.first(seq27401);
var seq27401__$1 = cljs.core.next(seq27401);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27405,seq27401__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27436 = arguments.length;
switch (G__27436) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27245__auto___30054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27246__auto__ = (function (){var switch__27050__auto__ = (function (state_27479){
var state_val_27480 = (state_27479[(1)]);
if((state_val_27480 === (7))){
var inst_27474 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
var statearr_27487_30056 = state_27479__$1;
(statearr_27487_30056[(2)] = inst_27474);

(statearr_27487_30056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (1))){
var state_27479__$1 = state_27479;
var statearr_27489_30058 = state_27479__$1;
(statearr_27489_30058[(2)] = null);

(statearr_27489_30058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (4))){
var inst_27453 = (state_27479[(7)]);
var inst_27453__$1 = (state_27479[(2)]);
var inst_27456 = (inst_27453__$1 == null);
var state_27479__$1 = (function (){var statearr_27491 = state_27479;
(statearr_27491[(7)] = inst_27453__$1);

return statearr_27491;
})();
if(cljs.core.truth_(inst_27456)){
var statearr_27492_30059 = state_27479__$1;
(statearr_27492_30059[(1)] = (5));

} else {
var statearr_27493_30060 = state_27479__$1;
(statearr_27493_30060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (13))){
var state_27479__$1 = state_27479;
var statearr_27496_30061 = state_27479__$1;
(statearr_27496_30061[(2)] = null);

(statearr_27496_30061[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (6))){
var inst_27453 = (state_27479[(7)]);
var state_27479__$1 = state_27479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27479__$1,(11),to,inst_27453);
} else {
if((state_val_27480 === (3))){
var inst_27477 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27479__$1,inst_27477);
} else {
if((state_val_27480 === (12))){
var state_27479__$1 = state_27479;
var statearr_27502_30067 = state_27479__$1;
(statearr_27502_30067[(2)] = null);

(statearr_27502_30067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (2))){
var state_27479__$1 = state_27479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27479__$1,(4),from);
} else {
if((state_val_27480 === (11))){
var inst_27467 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
if(cljs.core.truth_(inst_27467)){
var statearr_27506_30069 = state_27479__$1;
(statearr_27506_30069[(1)] = (12));

} else {
var statearr_27508_30070 = state_27479__$1;
(statearr_27508_30070[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (9))){
var state_27479__$1 = state_27479;
var statearr_27510_30071 = state_27479__$1;
(statearr_27510_30071[(2)] = null);

(statearr_27510_30071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (5))){
var state_27479__$1 = state_27479;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27513_30077 = state_27479__$1;
(statearr_27513_30077[(1)] = (8));

} else {
var statearr_27514_30078 = state_27479__$1;
(statearr_27514_30078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (14))){
var inst_27472 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
var statearr_27516_30080 = state_27479__$1;
(statearr_27516_30080[(2)] = inst_27472);

(statearr_27516_30080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (10))){
var inst_27464 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
var statearr_27520_30081 = state_27479__$1;
(statearr_27520_30081[(2)] = inst_27464);

(statearr_27520_30081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (8))){
var inst_27460 = cljs.core.async.close_BANG_(to);
var state_27479__$1 = state_27479;
var statearr_27521_30085 = state_27479__$1;
(statearr_27521_30085[(2)] = inst_27460);

(statearr_27521_30085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27051__auto__ = null;
var cljs$core$async$state_machine__27051__auto____0 = (function (){
var statearr_27523 = [null,null,null,null,null,null,null,null];
(statearr_27523[(0)] = cljs$core$async$state_machine__27051__auto__);

(statearr_27523[(1)] = (1));

return statearr_27523;
});
var cljs$core$async$state_machine__27051__auto____1 = (function (state_27479){
while(true){
var ret_value__27052__auto__ = (function (){try{while(true){
var result__27053__auto__ = switch__27050__auto__(state_27479);
if(cljs.core.keyword_identical_QMARK_(result__27053__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27053__auto__;
}
break;
}
}catch (e27527){var ex__27054__auto__ = e27527;
var statearr_27528_30088 = state_27479;
(statearr_27528_30088[(2)] = ex__27054__auto__);


if(cljs.core.seq((state_27479[(4)]))){
var statearr_27529_30091 = state_27479;
(statearr_27529_30091[(1)] = cljs.core.first((state_27479[(4)])));

} else {
throw ex__27054__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30093 = state_27479;
state_27479 = G__30093;
continue;
} else {
return ret_value__27052__auto__;
}
break;
}
});
cljs$core$async$state_machine__27051__auto__ = function(state_27479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27051__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27051__auto____1.call(this,state_27479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27051__auto____0;
cljs$core$async$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27051__auto____1;
return cljs$core$async$state_machine__27051__auto__;
})()
})();
var state__27247__auto__ = (function (){var statearr_27536 = f__27246__auto__();
(statearr_27536[(6)] = c__27245__auto___30054);

return statearr_27536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27247__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__27548){
var vec__27551 = p__27548;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27551,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27551,(1),null);
var job = vec__27551;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__27245__auto___30103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27246__auto__ = (function (){var switch__27050__auto__ = (function (state_27565){
var state_val_27566 = (state_27565[(1)]);
if((state_val_27566 === (1))){
var state_27565__$1 = state_27565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27565__$1,(2),res,v);
} else {
if((state_val_27566 === (2))){
var inst_27562 = (state_27565[(2)]);
var inst_27563 = cljs.core.async.close_BANG_(res);
var state_27565__$1 = (function (){var statearr_27571 = state_27565;
(statearr_27571[(7)] = inst_27562);

return statearr_27571;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27565__$1,inst_27563);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____0 = (function (){
var statearr_27578 = [null,null,null,null,null,null,null,null];
(statearr_27578[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__);

(statearr_27578[(1)] = (1));

return statearr_27578;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____1 = (function (state_27565){
while(true){
var ret_value__27052__auto__ = (function (){try{while(true){
var result__27053__auto__ = switch__27050__auto__(state_27565);
if(cljs.core.keyword_identical_QMARK_(result__27053__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27053__auto__;
}
break;
}
}catch (e27580){var ex__27054__auto__ = e27580;
var statearr_27582_30107 = state_27565;
(statearr_27582_30107[(2)] = ex__27054__auto__);


if(cljs.core.seq((state_27565[(4)]))){
var statearr_27583_30108 = state_27565;
(statearr_27583_30108[(1)] = cljs.core.first((state_27565[(4)])));

} else {
throw ex__27054__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30110 = state_27565;
state_27565 = G__30110;
continue;
} else {
return ret_value__27052__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__ = function(state_27565){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____1.call(this,state_27565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__;
})()
})();
var state__27247__auto__ = (function (){var statearr_27590 = f__27246__auto__();
(statearr_27590[(6)] = c__27245__auto___30103);

return statearr_27590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27247__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__27593){
var vec__27595 = p__27593;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27595,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27595,(1),null);
var job = vec__27595;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___30116 = n;
var __30117 = (0);
while(true){
if((__30117 < n__5636__auto___30116)){
var G__27603_30118 = type;
var G__27603_30119__$1 = (((G__27603_30118 instanceof cljs.core.Keyword))?G__27603_30118.fqn:null);
switch (G__27603_30119__$1) {
case "compute":
var c__27245__auto___30122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__30117,c__27245__auto___30122,G__27603_30118,G__27603_30119__$1,n__5636__auto___30116,jobs,results,process__$1,async){
return (function (){
var f__27246__auto__ = (function (){var switch__27050__auto__ = ((function (__30117,c__27245__auto___30122,G__27603_30118,G__27603_30119__$1,n__5636__auto___30116,jobs,results,process__$1,async){
return (function (state_27627){
var state_val_27628 = (state_27627[(1)]);
if((state_val_27628 === (1))){
var state_27627__$1 = state_27627;
var statearr_27630_30124 = state_27627__$1;
(statearr_27630_30124[(2)] = null);

(statearr_27630_30124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (2))){
var state_27627__$1 = state_27627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27627__$1,(4),jobs);
} else {
if((state_val_27628 === (3))){
var inst_27625 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27627__$1,inst_27625);
} else {
if((state_val_27628 === (4))){
var inst_27617 = (state_27627[(2)]);
var inst_27618 = process__$1(inst_27617);
var state_27627__$1 = state_27627;
if(cljs.core.truth_(inst_27618)){
var statearr_27637_30125 = state_27627__$1;
(statearr_27637_30125[(1)] = (5));

} else {
var statearr_27638_30126 = state_27627__$1;
(statearr_27638_30126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (5))){
var state_27627__$1 = state_27627;
var statearr_27640_30127 = state_27627__$1;
(statearr_27640_30127[(2)] = null);

(statearr_27640_30127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (6))){
var state_27627__$1 = state_27627;
var statearr_27642_30129 = state_27627__$1;
(statearr_27642_30129[(2)] = null);

(statearr_27642_30129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (7))){
var inst_27623 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
var statearr_27643_30130 = state_27627__$1;
(statearr_27643_30130[(2)] = inst_27623);

(statearr_27643_30130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30117,c__27245__auto___30122,G__27603_30118,G__27603_30119__$1,n__5636__auto___30116,jobs,results,process__$1,async))
;
return ((function (__30117,switch__27050__auto__,c__27245__auto___30122,G__27603_30118,G__27603_30119__$1,n__5636__auto___30116,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____0 = (function (){
var statearr_27647 = [null,null,null,null,null,null,null];
(statearr_27647[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__);

(statearr_27647[(1)] = (1));

return statearr_27647;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____1 = (function (state_27627){
while(true){
var ret_value__27052__auto__ = (function (){try{while(true){
var result__27053__auto__ = switch__27050__auto__(state_27627);
if(cljs.core.keyword_identical_QMARK_(result__27053__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27053__auto__;
}
break;
}
}catch (e27649){var ex__27054__auto__ = e27649;
var statearr_27650_30131 = state_27627;
(statearr_27650_30131[(2)] = ex__27054__auto__);


if(cljs.core.seq((state_27627[(4)]))){
var statearr_27651_30132 = state_27627;
(statearr_27651_30132[(1)] = cljs.core.first((state_27627[(4)])));

} else {
throw ex__27054__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30133 = state_27627;
state_27627 = G__30133;
continue;
} else {
return ret_value__27052__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__ = function(state_27627){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____1.call(this,state_27627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__;
})()
;})(__30117,switch__27050__auto__,c__27245__auto___30122,G__27603_30118,G__27603_30119__$1,n__5636__auto___30116,jobs,results,process__$1,async))
})();
var state__27247__auto__ = (function (){var statearr_27655 = f__27246__auto__();
(statearr_27655[(6)] = c__27245__auto___30122);

return statearr_27655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27247__auto__);
});})(__30117,c__27245__auto___30122,G__27603_30118,G__27603_30119__$1,n__5636__auto___30116,jobs,results,process__$1,async))
);


break;
case "async":
var c__27245__auto___30134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__30117,c__27245__auto___30134,G__27603_30118,G__27603_30119__$1,n__5636__auto___30116,jobs,results,process__$1,async){
return (function (){
var f__27246__auto__ = (function (){var switch__27050__auto__ = ((function (__30117,c__27245__auto___30134,G__27603_30118,G__27603_30119__$1,n__5636__auto___30116,jobs,results,process__$1,async){
return (function (state_27674){
var state_val_27675 = (state_27674[(1)]);
if((state_val_27675 === (1))){
var state_27674__$1 = state_27674;
var statearr_27677_30135 = state_27674__$1;
(statearr_27677_30135[(2)] = null);

(statearr_27677_30135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27675 === (2))){
var state_27674__$1 = state_27674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27674__$1,(4),jobs);
} else {
if((state_val_27675 === (3))){
var inst_27672 = (state_27674[(2)]);
var state_27674__$1 = state_27674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27674__$1,inst_27672);
} else {
if((state_val_27675 === (4))){
var inst_27660 = (state_27674[(2)]);
var inst_27661 = async(inst_27660);
var state_27674__$1 = state_27674;
if(cljs.core.truth_(inst_27661)){
var statearr_27681_30136 = state_27674__$1;
(statearr_27681_30136[(1)] = (5));

} else {
var statearr_27682_30137 = state_27674__$1;
(statearr_27682_30137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27675 === (5))){
var state_27674__$1 = state_27674;
var statearr_27685_30140 = state_27674__$1;
(statearr_27685_30140[(2)] = null);

(statearr_27685_30140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27675 === (6))){
var state_27674__$1 = state_27674;
var statearr_27688_30141 = state_27674__$1;
(statearr_27688_30141[(2)] = null);

(statearr_27688_30141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27675 === (7))){
var inst_27669 = (state_27674[(2)]);
var state_27674__$1 = state_27674;
var statearr_27691_30142 = state_27674__$1;
(statearr_27691_30142[(2)] = inst_27669);

(statearr_27691_30142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30117,c__27245__auto___30134,G__27603_30118,G__27603_30119__$1,n__5636__auto___30116,jobs,results,process__$1,async))
;
return ((function (__30117,switch__27050__auto__,c__27245__auto___30134,G__27603_30118,G__27603_30119__$1,n__5636__auto___30116,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____0 = (function (){
var statearr_27693 = [null,null,null,null,null,null,null];
(statearr_27693[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__);

(statearr_27693[(1)] = (1));

return statearr_27693;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____1 = (function (state_27674){
while(true){
var ret_value__27052__auto__ = (function (){try{while(true){
var result__27053__auto__ = switch__27050__auto__(state_27674);
if(cljs.core.keyword_identical_QMARK_(result__27053__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27053__auto__;
}
break;
}
}catch (e27696){var ex__27054__auto__ = e27696;
var statearr_27697_30147 = state_27674;
(statearr_27697_30147[(2)] = ex__27054__auto__);


if(cljs.core.seq((state_27674[(4)]))){
var statearr_27698_30148 = state_27674;
(statearr_27698_30148[(1)] = cljs.core.first((state_27674[(4)])));

} else {
throw ex__27054__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30149 = state_27674;
state_27674 = G__30149;
continue;
} else {
return ret_value__27052__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__ = function(state_27674){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____1.call(this,state_27674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__;
})()
;})(__30117,switch__27050__auto__,c__27245__auto___30134,G__27603_30118,G__27603_30119__$1,n__5636__auto___30116,jobs,results,process__$1,async))
})();
var state__27247__auto__ = (function (){var statearr_27700 = f__27246__auto__();
(statearr_27700[(6)] = c__27245__auto___30134);

return statearr_27700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27247__auto__);
});})(__30117,c__27245__auto___30134,G__27603_30118,G__27603_30119__$1,n__5636__auto___30116,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27603_30119__$1)].join('')));

}

var G__30153 = (__30117 + (1));
__30117 = G__30153;
continue;
} else {
}
break;
}

var c__27245__auto___30155 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27246__auto__ = (function (){var switch__27050__auto__ = (function (state_27731){
var state_val_27732 = (state_27731[(1)]);
if((state_val_27732 === (7))){
var inst_27722 = (state_27731[(2)]);
var state_27731__$1 = state_27731;
var statearr_27742_30156 = state_27731__$1;
(statearr_27742_30156[(2)] = inst_27722);

(statearr_27742_30156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (1))){
var state_27731__$1 = state_27731;
var statearr_27743_30157 = state_27731__$1;
(statearr_27743_30157[(2)] = null);

(statearr_27743_30157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (4))){
var inst_27704 = (state_27731[(7)]);
var inst_27704__$1 = (state_27731[(2)]);
var inst_27705 = (inst_27704__$1 == null);
var state_27731__$1 = (function (){var statearr_27745 = state_27731;
(statearr_27745[(7)] = inst_27704__$1);

return statearr_27745;
})();
if(cljs.core.truth_(inst_27705)){
var statearr_27747_30158 = state_27731__$1;
(statearr_27747_30158[(1)] = (5));

} else {
var statearr_27748_30159 = state_27731__$1;
(statearr_27748_30159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (6))){
var inst_27704 = (state_27731[(7)]);
var inst_27709 = (state_27731[(8)]);
var inst_27709__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_27711 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27712 = [inst_27704,inst_27709__$1];
var inst_27713 = (new cljs.core.PersistentVector(null,2,(5),inst_27711,inst_27712,null));
var state_27731__$1 = (function (){var statearr_27751 = state_27731;
(statearr_27751[(8)] = inst_27709__$1);

return statearr_27751;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27731__$1,(8),jobs,inst_27713);
} else {
if((state_val_27732 === (3))){
var inst_27725 = (state_27731[(2)]);
var state_27731__$1 = state_27731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27731__$1,inst_27725);
} else {
if((state_val_27732 === (2))){
var state_27731__$1 = state_27731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27731__$1,(4),from);
} else {
if((state_val_27732 === (9))){
var inst_27717 = (state_27731[(2)]);
var state_27731__$1 = (function (){var statearr_27762 = state_27731;
(statearr_27762[(9)] = inst_27717);

return statearr_27762;
})();
var statearr_27763_30165 = state_27731__$1;
(statearr_27763_30165[(2)] = null);

(statearr_27763_30165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (5))){
var inst_27707 = cljs.core.async.close_BANG_(jobs);
var state_27731__$1 = state_27731;
var statearr_27764_30166 = state_27731__$1;
(statearr_27764_30166[(2)] = inst_27707);

(statearr_27764_30166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (8))){
var inst_27709 = (state_27731[(8)]);
var inst_27715 = (state_27731[(2)]);
var state_27731__$1 = (function (){var statearr_27766 = state_27731;
(statearr_27766[(10)] = inst_27715);

return statearr_27766;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27731__$1,(9),results,inst_27709);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____0 = (function (){
var statearr_27772 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27772[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__);

(statearr_27772[(1)] = (1));

return statearr_27772;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____1 = (function (state_27731){
while(true){
var ret_value__27052__auto__ = (function (){try{while(true){
var result__27053__auto__ = switch__27050__auto__(state_27731);
if(cljs.core.keyword_identical_QMARK_(result__27053__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27053__auto__;
}
break;
}
}catch (e27775){var ex__27054__auto__ = e27775;
var statearr_27776_30171 = state_27731;
(statearr_27776_30171[(2)] = ex__27054__auto__);


if(cljs.core.seq((state_27731[(4)]))){
var statearr_27777_30172 = state_27731;
(statearr_27777_30172[(1)] = cljs.core.first((state_27731[(4)])));

} else {
throw ex__27054__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30173 = state_27731;
state_27731 = G__30173;
continue;
} else {
return ret_value__27052__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__ = function(state_27731){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____1.call(this,state_27731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__;
})()
})();
var state__27247__auto__ = (function (){var statearr_27781 = f__27246__auto__();
(statearr_27781[(6)] = c__27245__auto___30155);

return statearr_27781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27247__auto__);
}));


var c__27245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27246__auto__ = (function (){var switch__27050__auto__ = (function (state_27826){
var state_val_27827 = (state_27826[(1)]);
if((state_val_27827 === (7))){
var inst_27822 = (state_27826[(2)]);
var state_27826__$1 = state_27826;
var statearr_27833_30174 = state_27826__$1;
(statearr_27833_30174[(2)] = inst_27822);

(statearr_27833_30174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (20))){
var state_27826__$1 = state_27826;
var statearr_27835_30175 = state_27826__$1;
(statearr_27835_30175[(2)] = null);

(statearr_27835_30175[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (1))){
var state_27826__$1 = state_27826;
var statearr_27838_30176 = state_27826__$1;
(statearr_27838_30176[(2)] = null);

(statearr_27838_30176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (4))){
var inst_27785 = (state_27826[(7)]);
var inst_27785__$1 = (state_27826[(2)]);
var inst_27787 = (inst_27785__$1 == null);
var state_27826__$1 = (function (){var statearr_27841 = state_27826;
(statearr_27841[(7)] = inst_27785__$1);

return statearr_27841;
})();
if(cljs.core.truth_(inst_27787)){
var statearr_27845_30177 = state_27826__$1;
(statearr_27845_30177[(1)] = (5));

} else {
var statearr_27846_30178 = state_27826__$1;
(statearr_27846_30178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (15))){
var inst_27801 = (state_27826[(8)]);
var state_27826__$1 = state_27826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27826__$1,(18),to,inst_27801);
} else {
if((state_val_27827 === (21))){
var inst_27817 = (state_27826[(2)]);
var state_27826__$1 = state_27826;
var statearr_27849_30179 = state_27826__$1;
(statearr_27849_30179[(2)] = inst_27817);

(statearr_27849_30179[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (13))){
var inst_27819 = (state_27826[(2)]);
var state_27826__$1 = (function (){var statearr_27851 = state_27826;
(statearr_27851[(9)] = inst_27819);

return statearr_27851;
})();
var statearr_27853_30180 = state_27826__$1;
(statearr_27853_30180[(2)] = null);

(statearr_27853_30180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (6))){
var inst_27785 = (state_27826[(7)]);
var state_27826__$1 = state_27826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27826__$1,(11),inst_27785);
} else {
if((state_val_27827 === (17))){
var inst_27812 = (state_27826[(2)]);
var state_27826__$1 = state_27826;
if(cljs.core.truth_(inst_27812)){
var statearr_27856_30181 = state_27826__$1;
(statearr_27856_30181[(1)] = (19));

} else {
var statearr_27857_30182 = state_27826__$1;
(statearr_27857_30182[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (3))){
var inst_27824 = (state_27826[(2)]);
var state_27826__$1 = state_27826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27826__$1,inst_27824);
} else {
if((state_val_27827 === (12))){
var inst_27797 = (state_27826[(10)]);
var state_27826__$1 = state_27826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27826__$1,(14),inst_27797);
} else {
if((state_val_27827 === (2))){
var state_27826__$1 = state_27826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27826__$1,(4),results);
} else {
if((state_val_27827 === (19))){
var state_27826__$1 = state_27826;
var statearr_27862_30183 = state_27826__$1;
(statearr_27862_30183[(2)] = null);

(statearr_27862_30183[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (11))){
var inst_27797 = (state_27826[(2)]);
var state_27826__$1 = (function (){var statearr_27864 = state_27826;
(statearr_27864[(10)] = inst_27797);

return statearr_27864;
})();
var statearr_27865_30184 = state_27826__$1;
(statearr_27865_30184[(2)] = null);

(statearr_27865_30184[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (9))){
var state_27826__$1 = state_27826;
var statearr_27870_30185 = state_27826__$1;
(statearr_27870_30185[(2)] = null);

(statearr_27870_30185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (5))){
var state_27826__$1 = state_27826;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27874_30186 = state_27826__$1;
(statearr_27874_30186[(1)] = (8));

} else {
var statearr_27875_30187 = state_27826__$1;
(statearr_27875_30187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (14))){
var inst_27801 = (state_27826[(8)]);
var inst_27806 = (state_27826[(11)]);
var inst_27801__$1 = (state_27826[(2)]);
var inst_27805 = (inst_27801__$1 == null);
var inst_27806__$1 = cljs.core.not(inst_27805);
var state_27826__$1 = (function (){var statearr_27877 = state_27826;
(statearr_27877[(8)] = inst_27801__$1);

(statearr_27877[(11)] = inst_27806__$1);

return statearr_27877;
})();
if(inst_27806__$1){
var statearr_27879_30188 = state_27826__$1;
(statearr_27879_30188[(1)] = (15));

} else {
var statearr_27881_30189 = state_27826__$1;
(statearr_27881_30189[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (16))){
var inst_27806 = (state_27826[(11)]);
var state_27826__$1 = state_27826;
var statearr_27884_30190 = state_27826__$1;
(statearr_27884_30190[(2)] = inst_27806);

(statearr_27884_30190[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (10))){
var inst_27793 = (state_27826[(2)]);
var state_27826__$1 = state_27826;
var statearr_27887_30191 = state_27826__$1;
(statearr_27887_30191[(2)] = inst_27793);

(statearr_27887_30191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (18))){
var inst_27809 = (state_27826[(2)]);
var state_27826__$1 = state_27826;
var statearr_27890_30194 = state_27826__$1;
(statearr_27890_30194[(2)] = inst_27809);

(statearr_27890_30194[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (8))){
var inst_27790 = cljs.core.async.close_BANG_(to);
var state_27826__$1 = state_27826;
var statearr_27893_30195 = state_27826__$1;
(statearr_27893_30195[(2)] = inst_27790);

(statearr_27893_30195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____0 = (function (){
var statearr_27896 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27896[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__);

(statearr_27896[(1)] = (1));

return statearr_27896;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____1 = (function (state_27826){
while(true){
var ret_value__27052__auto__ = (function (){try{while(true){
var result__27053__auto__ = switch__27050__auto__(state_27826);
if(cljs.core.keyword_identical_QMARK_(result__27053__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27053__auto__;
}
break;
}
}catch (e27900){var ex__27054__auto__ = e27900;
var statearr_27901_30196 = state_27826;
(statearr_27901_30196[(2)] = ex__27054__auto__);


if(cljs.core.seq((state_27826[(4)]))){
var statearr_27903_30197 = state_27826;
(statearr_27903_30197[(1)] = cljs.core.first((state_27826[(4)])));

} else {
throw ex__27054__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30198 = state_27826;
state_27826 = G__30198;
continue;
} else {
return ret_value__27052__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__ = function(state_27826){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____1.call(this,state_27826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27051__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27051__auto__;
})()
})();
var state__27247__auto__ = (function (){var statearr_27906 = f__27246__auto__();
(statearr_27906[(6)] = c__27245__auto__);

return statearr_27906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27247__auto__);
}));

return c__27245__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27911 = arguments.length;
switch (G__27911) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27924 = arguments.length;
switch (G__27924) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27935 = arguments.length;
switch (G__27935) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__27245__auto___30202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27246__auto__ = (function (){var switch__27050__auto__ = (function (state_27968){
var state_val_27969 = (state_27968[(1)]);
if((state_val_27969 === (7))){
var inst_27964 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
var statearr_27974_30203 = state_27968__$1;
(statearr_27974_30203[(2)] = inst_27964);

(statearr_27974_30203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (1))){
var state_27968__$1 = state_27968;
var statearr_27977_30205 = state_27968__$1;
(statearr_27977_30205[(2)] = null);

(statearr_27977_30205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (4))){
var inst_27945 = (state_27968[(7)]);
var inst_27945__$1 = (state_27968[(2)]);
var inst_27946 = (inst_27945__$1 == null);
var state_27968__$1 = (function (){var statearr_27979 = state_27968;
(statearr_27979[(7)] = inst_27945__$1);

return statearr_27979;
})();
if(cljs.core.truth_(inst_27946)){
var statearr_27980_30208 = state_27968__$1;
(statearr_27980_30208[(1)] = (5));

} else {
var statearr_27981_30210 = state_27968__$1;
(statearr_27981_30210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (13))){
var state_27968__$1 = state_27968;
var statearr_27985_30212 = state_27968__$1;
(statearr_27985_30212[(2)] = null);

(statearr_27985_30212[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (6))){
var inst_27945 = (state_27968[(7)]);
var inst_27951 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_27945) : p.call(null,inst_27945));
var state_27968__$1 = state_27968;
if(cljs.core.truth_(inst_27951)){
var statearr_27986_30213 = state_27968__$1;
(statearr_27986_30213[(1)] = (9));

} else {
var statearr_27987_30214 = state_27968__$1;
(statearr_27987_30214[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (3))){
var inst_27966 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27968__$1,inst_27966);
} else {
if((state_val_27969 === (12))){
var state_27968__$1 = state_27968;
var statearr_27988_30215 = state_27968__$1;
(statearr_27988_30215[(2)] = null);

(statearr_27988_30215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (2))){
var state_27968__$1 = state_27968;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27968__$1,(4),ch);
} else {
if((state_val_27969 === (11))){
var inst_27945 = (state_27968[(7)]);
var inst_27955 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27968__$1,(8),inst_27955,inst_27945);
} else {
if((state_val_27969 === (9))){
var state_27968__$1 = state_27968;
var statearr_27991_30217 = state_27968__$1;
(statearr_27991_30217[(2)] = tc);

(statearr_27991_30217[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (5))){
var inst_27948 = cljs.core.async.close_BANG_(tc);
var inst_27949 = cljs.core.async.close_BANG_(fc);
var state_27968__$1 = (function (){var statearr_27995 = state_27968;
(statearr_27995[(8)] = inst_27948);

return statearr_27995;
})();
var statearr_27997_30218 = state_27968__$1;
(statearr_27997_30218[(2)] = inst_27949);

(statearr_27997_30218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (14))){
var inst_27962 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
var statearr_28000_30219 = state_27968__$1;
(statearr_28000_30219[(2)] = inst_27962);

(statearr_28000_30219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (10))){
var state_27968__$1 = state_27968;
var statearr_28001_30221 = state_27968__$1;
(statearr_28001_30221[(2)] = fc);

(statearr_28001_30221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (8))){
var inst_27957 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
if(cljs.core.truth_(inst_27957)){
var statearr_28002_30222 = state_27968__$1;
(statearr_28002_30222[(1)] = (12));

} else {
var statearr_28004_30223 = state_27968__$1;
(statearr_28004_30223[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27051__auto__ = null;
var cljs$core$async$state_machine__27051__auto____0 = (function (){
var statearr_28006 = [null,null,null,null,null,null,null,null,null];
(statearr_28006[(0)] = cljs$core$async$state_machine__27051__auto__);

(statearr_28006[(1)] = (1));

return statearr_28006;
});
var cljs$core$async$state_machine__27051__auto____1 = (function (state_27968){
while(true){
var ret_value__27052__auto__ = (function (){try{while(true){
var result__27053__auto__ = switch__27050__auto__(state_27968);
if(cljs.core.keyword_identical_QMARK_(result__27053__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27053__auto__;
}
break;
}
}catch (e28008){var ex__27054__auto__ = e28008;
var statearr_28009_30226 = state_27968;
(statearr_28009_30226[(2)] = ex__27054__auto__);


if(cljs.core.seq((state_27968[(4)]))){
var statearr_28012_30228 = state_27968;
(statearr_28012_30228[(1)] = cljs.core.first((state_27968[(4)])));

} else {
throw ex__27054__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30229 = state_27968;
state_27968 = G__30229;
continue;
} else {
return ret_value__27052__auto__;
}
break;
}
});
cljs$core$async$state_machine__27051__auto__ = function(state_27968){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27051__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27051__auto____1.call(this,state_27968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27051__auto____0;
cljs$core$async$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27051__auto____1;
return cljs$core$async$state_machine__27051__auto__;
})()
})();
var state__27247__auto__ = (function (){var statearr_28014 = f__27246__auto__();
(statearr_28014[(6)] = c__27245__auto___30202);

return statearr_28014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27247__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27246__auto__ = (function (){var switch__27050__auto__ = (function (state_28047){
var state_val_28048 = (state_28047[(1)]);
if((state_val_28048 === (7))){
var inst_28042 = (state_28047[(2)]);
var state_28047__$1 = state_28047;
var statearr_28052_30233 = state_28047__$1;
(statearr_28052_30233[(2)] = inst_28042);

(statearr_28052_30233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28048 === (1))){
var inst_28018 = init;
var inst_28019 = inst_28018;
var state_28047__$1 = (function (){var statearr_28054 = state_28047;
(statearr_28054[(7)] = inst_28019);

return statearr_28054;
})();
var statearr_28056_30239 = state_28047__$1;
(statearr_28056_30239[(2)] = null);

(statearr_28056_30239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28048 === (4))){
var inst_28026 = (state_28047[(8)]);
var inst_28026__$1 = (state_28047[(2)]);
var inst_28027 = (inst_28026__$1 == null);
var state_28047__$1 = (function (){var statearr_28058 = state_28047;
(statearr_28058[(8)] = inst_28026__$1);

return statearr_28058;
})();
if(cljs.core.truth_(inst_28027)){
var statearr_28059_30243 = state_28047__$1;
(statearr_28059_30243[(1)] = (5));

} else {
var statearr_28060_30244 = state_28047__$1;
(statearr_28060_30244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28048 === (6))){
var inst_28019 = (state_28047[(7)]);
var inst_28026 = (state_28047[(8)]);
var inst_28030 = (state_28047[(9)]);
var inst_28030__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_28019,inst_28026) : f.call(null,inst_28019,inst_28026));
var inst_28031 = cljs.core.reduced_QMARK_(inst_28030__$1);
var state_28047__$1 = (function (){var statearr_28062 = state_28047;
(statearr_28062[(9)] = inst_28030__$1);

return statearr_28062;
})();
if(inst_28031){
var statearr_28063_30248 = state_28047__$1;
(statearr_28063_30248[(1)] = (8));

} else {
var statearr_28064_30249 = state_28047__$1;
(statearr_28064_30249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28048 === (3))){
var inst_28044 = (state_28047[(2)]);
var state_28047__$1 = state_28047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28047__$1,inst_28044);
} else {
if((state_val_28048 === (2))){
var state_28047__$1 = state_28047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28047__$1,(4),ch);
} else {
if((state_val_28048 === (9))){
var inst_28030 = (state_28047[(9)]);
var inst_28019 = inst_28030;
var state_28047__$1 = (function (){var statearr_28066 = state_28047;
(statearr_28066[(7)] = inst_28019);

return statearr_28066;
})();
var statearr_28067_30251 = state_28047__$1;
(statearr_28067_30251[(2)] = null);

(statearr_28067_30251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28048 === (5))){
var inst_28019 = (state_28047[(7)]);
var state_28047__$1 = state_28047;
var statearr_28068_30252 = state_28047__$1;
(statearr_28068_30252[(2)] = inst_28019);

(statearr_28068_30252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28048 === (10))){
var inst_28040 = (state_28047[(2)]);
var state_28047__$1 = state_28047;
var statearr_28069_30254 = state_28047__$1;
(statearr_28069_30254[(2)] = inst_28040);

(statearr_28069_30254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28048 === (8))){
var inst_28030 = (state_28047[(9)]);
var inst_28033 = cljs.core.deref(inst_28030);
var state_28047__$1 = state_28047;
var statearr_28072_30257 = state_28047__$1;
(statearr_28072_30257[(2)] = inst_28033);

(statearr_28072_30257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__27051__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27051__auto____0 = (function (){
var statearr_28076 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28076[(0)] = cljs$core$async$reduce_$_state_machine__27051__auto__);

(statearr_28076[(1)] = (1));

return statearr_28076;
});
var cljs$core$async$reduce_$_state_machine__27051__auto____1 = (function (state_28047){
while(true){
var ret_value__27052__auto__ = (function (){try{while(true){
var result__27053__auto__ = switch__27050__auto__(state_28047);
if(cljs.core.keyword_identical_QMARK_(result__27053__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27053__auto__;
}
break;
}
}catch (e28077){var ex__27054__auto__ = e28077;
var statearr_28079_30262 = state_28047;
(statearr_28079_30262[(2)] = ex__27054__auto__);


if(cljs.core.seq((state_28047[(4)]))){
var statearr_28080_30263 = state_28047;
(statearr_28080_30263[(1)] = cljs.core.first((state_28047[(4)])));

} else {
throw ex__27054__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30265 = state_28047;
state_28047 = G__30265;
continue;
} else {
return ret_value__27052__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27051__auto__ = function(state_28047){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27051__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27051__auto____1.call(this,state_28047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27051__auto____0;
cljs$core$async$reduce_$_state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27051__auto____1;
return cljs$core$async$reduce_$_state_machine__27051__auto__;
})()
})();
var state__27247__auto__ = (function (){var statearr_28081 = f__27246__auto__();
(statearr_28081[(6)] = c__27245__auto__);

return statearr_28081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27247__auto__);
}));

return c__27245__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__27245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27246__auto__ = (function (){var switch__27050__auto__ = (function (state_28087){
var state_val_28088 = (state_28087[(1)]);
if((state_val_28088 === (1))){
var inst_28082 = cljs.core.async.reduce(f__$1,init,ch);
var state_28087__$1 = state_28087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28087__$1,(2),inst_28082);
} else {
if((state_val_28088 === (2))){
var inst_28084 = (state_28087[(2)]);
var inst_28085 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_28084) : f__$1.call(null,inst_28084));
var state_28087__$1 = state_28087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28087__$1,inst_28085);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27051__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27051__auto____0 = (function (){
var statearr_28095 = [null,null,null,null,null,null,null];
(statearr_28095[(0)] = cljs$core$async$transduce_$_state_machine__27051__auto__);

(statearr_28095[(1)] = (1));

return statearr_28095;
});
var cljs$core$async$transduce_$_state_machine__27051__auto____1 = (function (state_28087){
while(true){
var ret_value__27052__auto__ = (function (){try{while(true){
var result__27053__auto__ = switch__27050__auto__(state_28087);
if(cljs.core.keyword_identical_QMARK_(result__27053__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27053__auto__;
}
break;
}
}catch (e28096){var ex__27054__auto__ = e28096;
var statearr_28097_30271 = state_28087;
(statearr_28097_30271[(2)] = ex__27054__auto__);


if(cljs.core.seq((state_28087[(4)]))){
var statearr_28098_30272 = state_28087;
(statearr_28098_30272[(1)] = cljs.core.first((state_28087[(4)])));

} else {
throw ex__27054__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30273 = state_28087;
state_28087 = G__30273;
continue;
} else {
return ret_value__27052__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27051__auto__ = function(state_28087){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27051__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27051__auto____1.call(this,state_28087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27051__auto____0;
cljs$core$async$transduce_$_state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27051__auto____1;
return cljs$core$async$transduce_$_state_machine__27051__auto__;
})()
})();
var state__27247__auto__ = (function (){var statearr_28103 = f__27246__auto__();
(statearr_28103[(6)] = c__27245__auto__);

return statearr_28103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27247__auto__);
}));

return c__27245__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__28106 = arguments.length;
switch (G__28106) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27246__auto__ = (function (){var switch__27050__auto__ = (function (state_28139){
var state_val_28140 = (state_28139[(1)]);
if((state_val_28140 === (7))){
var inst_28120 = (state_28139[(2)]);
var state_28139__$1 = state_28139;
var statearr_28142_30277 = state_28139__$1;
(statearr_28142_30277[(2)] = inst_28120);

(statearr_28142_30277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (1))){
var inst_28113 = cljs.core.seq(coll);
var inst_28114 = inst_28113;
var state_28139__$1 = (function (){var statearr_28146 = state_28139;
(statearr_28146[(7)] = inst_28114);

return statearr_28146;
})();
var statearr_28147_30279 = state_28139__$1;
(statearr_28147_30279[(2)] = null);

(statearr_28147_30279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (4))){
var inst_28114 = (state_28139[(7)]);
var inst_28118 = cljs.core.first(inst_28114);
var state_28139__$1 = state_28139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28139__$1,(7),ch,inst_28118);
} else {
if((state_val_28140 === (13))){
var inst_28133 = (state_28139[(2)]);
var state_28139__$1 = state_28139;
var statearr_28149_30280 = state_28139__$1;
(statearr_28149_30280[(2)] = inst_28133);

(statearr_28149_30280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (6))){
var inst_28123 = (state_28139[(2)]);
var state_28139__$1 = state_28139;
if(cljs.core.truth_(inst_28123)){
var statearr_28150_30283 = state_28139__$1;
(statearr_28150_30283[(1)] = (8));

} else {
var statearr_28151_30284 = state_28139__$1;
(statearr_28151_30284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (3))){
var inst_28137 = (state_28139[(2)]);
var state_28139__$1 = state_28139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28139__$1,inst_28137);
} else {
if((state_val_28140 === (12))){
var state_28139__$1 = state_28139;
var statearr_28152_30288 = state_28139__$1;
(statearr_28152_30288[(2)] = null);

(statearr_28152_30288[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (2))){
var inst_28114 = (state_28139[(7)]);
var state_28139__$1 = state_28139;
if(cljs.core.truth_(inst_28114)){
var statearr_28156_30292 = state_28139__$1;
(statearr_28156_30292[(1)] = (4));

} else {
var statearr_28159_30293 = state_28139__$1;
(statearr_28159_30293[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (11))){
var inst_28130 = cljs.core.async.close_BANG_(ch);
var state_28139__$1 = state_28139;
var statearr_28161_30295 = state_28139__$1;
(statearr_28161_30295[(2)] = inst_28130);

(statearr_28161_30295[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (9))){
var state_28139__$1 = state_28139;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28165_30297 = state_28139__$1;
(statearr_28165_30297[(1)] = (11));

} else {
var statearr_28166_30298 = state_28139__$1;
(statearr_28166_30298[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (5))){
var inst_28114 = (state_28139[(7)]);
var state_28139__$1 = state_28139;
var statearr_28169_30299 = state_28139__$1;
(statearr_28169_30299[(2)] = inst_28114);

(statearr_28169_30299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (10))){
var inst_28135 = (state_28139[(2)]);
var state_28139__$1 = state_28139;
var statearr_28173_30301 = state_28139__$1;
(statearr_28173_30301[(2)] = inst_28135);

(statearr_28173_30301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (8))){
var inst_28114 = (state_28139[(7)]);
var inst_28125 = cljs.core.next(inst_28114);
var inst_28114__$1 = inst_28125;
var state_28139__$1 = (function (){var statearr_28176 = state_28139;
(statearr_28176[(7)] = inst_28114__$1);

return statearr_28176;
})();
var statearr_28177_30302 = state_28139__$1;
(statearr_28177_30302[(2)] = null);

(statearr_28177_30302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27051__auto__ = null;
var cljs$core$async$state_machine__27051__auto____0 = (function (){
var statearr_28179 = [null,null,null,null,null,null,null,null];
(statearr_28179[(0)] = cljs$core$async$state_machine__27051__auto__);

(statearr_28179[(1)] = (1));

return statearr_28179;
});
var cljs$core$async$state_machine__27051__auto____1 = (function (state_28139){
while(true){
var ret_value__27052__auto__ = (function (){try{while(true){
var result__27053__auto__ = switch__27050__auto__(state_28139);
if(cljs.core.keyword_identical_QMARK_(result__27053__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27053__auto__;
}
break;
}
}catch (e28180){var ex__27054__auto__ = e28180;
var statearr_28181_30303 = state_28139;
(statearr_28181_30303[(2)] = ex__27054__auto__);


if(cljs.core.seq((state_28139[(4)]))){
var statearr_28183_30304 = state_28139;
(statearr_28183_30304[(1)] = cljs.core.first((state_28139[(4)])));

} else {
throw ex__27054__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30305 = state_28139;
state_28139 = G__30305;
continue;
} else {
return ret_value__27052__auto__;
}
break;
}
});
cljs$core$async$state_machine__27051__auto__ = function(state_28139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27051__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27051__auto____1.call(this,state_28139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27051__auto____0;
cljs$core$async$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27051__auto____1;
return cljs$core$async$state_machine__27051__auto__;
})()
})();
var state__27247__auto__ = (function (){var statearr_28184 = f__27246__auto__();
(statearr_28184[(6)] = c__27245__auto__);

return statearr_28184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27247__auto__);
}));

return c__27245__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28194 = arguments.length;
switch (G__28194) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_30311 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_30311(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_30312 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_30312(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_30313 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_30313(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_30314 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_30314(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28233 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28233 = (function (ch,cs,meta28234){
this.ch = ch;
this.cs = cs;
this.meta28234 = meta28234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28235,meta28234__$1){
var self__ = this;
var _28235__$1 = this;
return (new cljs.core.async.t_cljs$core$async28233(self__.ch,self__.cs,meta28234__$1));
}));

(cljs.core.async.t_cljs$core$async28233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28235){
var self__ = this;
var _28235__$1 = this;
return self__.meta28234;
}));

(cljs.core.async.t_cljs$core$async28233.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28233.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28233.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28233.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async28233.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async28233.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async28233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28234","meta28234",128674985,null)], null);
}));

(cljs.core.async.t_cljs$core$async28233.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28233");

(cljs.core.async.t_cljs$core$async28233.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async28233");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28233.
 */
cljs.core.async.__GT_t_cljs$core$async28233 = (function cljs$core$async$mult_$___GT_t_cljs$core$async28233(ch__$1,cs__$1,meta28234){
return (new cljs.core.async.t_cljs$core$async28233(ch__$1,cs__$1,meta28234));
});

}

return (new cljs.core.async.t_cljs$core$async28233(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__27245__auto___30317 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27246__auto__ = (function (){var switch__27050__auto__ = (function (state_28424){
var state_val_28426 = (state_28424[(1)]);
if((state_val_28426 === (7))){
var inst_28419 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28428_30318 = state_28424__$1;
(statearr_28428_30318[(2)] = inst_28419);

(statearr_28428_30318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (20))){
var inst_28316 = (state_28424[(7)]);
var inst_28329 = cljs.core.first(inst_28316);
var inst_28330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28329,(0),null);
var inst_28331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28329,(1),null);
var state_28424__$1 = (function (){var statearr_28430 = state_28424;
(statearr_28430[(8)] = inst_28330);

return statearr_28430;
})();
if(cljs.core.truth_(inst_28331)){
var statearr_28431_30319 = state_28424__$1;
(statearr_28431_30319[(1)] = (22));

} else {
var statearr_28432_30320 = state_28424__$1;
(statearr_28432_30320[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (27))){
var inst_28365 = (state_28424[(9)]);
var inst_28367 = (state_28424[(10)]);
var inst_28372 = (state_28424[(11)]);
var inst_28281 = (state_28424[(12)]);
var inst_28372__$1 = cljs.core._nth(inst_28365,inst_28367);
var inst_28373 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28372__$1,inst_28281,done);
var state_28424__$1 = (function (){var statearr_28433 = state_28424;
(statearr_28433[(11)] = inst_28372__$1);

return statearr_28433;
})();
if(cljs.core.truth_(inst_28373)){
var statearr_28437_30321 = state_28424__$1;
(statearr_28437_30321[(1)] = (30));

} else {
var statearr_28438_30322 = state_28424__$1;
(statearr_28438_30322[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (1))){
var state_28424__$1 = state_28424;
var statearr_28440_30323 = state_28424__$1;
(statearr_28440_30323[(2)] = null);

(statearr_28440_30323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (24))){
var inst_28316 = (state_28424[(7)]);
var inst_28336 = (state_28424[(2)]);
var inst_28337 = cljs.core.next(inst_28316);
var inst_28290 = inst_28337;
var inst_28291 = null;
var inst_28292 = (0);
var inst_28293 = (0);
var state_28424__$1 = (function (){var statearr_28442 = state_28424;
(statearr_28442[(13)] = inst_28336);

(statearr_28442[(14)] = inst_28290);

(statearr_28442[(15)] = inst_28291);

(statearr_28442[(16)] = inst_28292);

(statearr_28442[(17)] = inst_28293);

return statearr_28442;
})();
var statearr_28443_30324 = state_28424__$1;
(statearr_28443_30324[(2)] = null);

(statearr_28443_30324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (39))){
var state_28424__$1 = state_28424;
var statearr_28452_30325 = state_28424__$1;
(statearr_28452_30325[(2)] = null);

(statearr_28452_30325[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (4))){
var inst_28281 = (state_28424[(12)]);
var inst_28281__$1 = (state_28424[(2)]);
var inst_28282 = (inst_28281__$1 == null);
var state_28424__$1 = (function (){var statearr_28457 = state_28424;
(statearr_28457[(12)] = inst_28281__$1);

return statearr_28457;
})();
if(cljs.core.truth_(inst_28282)){
var statearr_28458_30330 = state_28424__$1;
(statearr_28458_30330[(1)] = (5));

} else {
var statearr_28459_30331 = state_28424__$1;
(statearr_28459_30331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (15))){
var inst_28293 = (state_28424[(17)]);
var inst_28290 = (state_28424[(14)]);
var inst_28291 = (state_28424[(15)]);
var inst_28292 = (state_28424[(16)]);
var inst_28311 = (state_28424[(2)]);
var inst_28313 = (inst_28293 + (1));
var tmp28448 = inst_28292;
var tmp28449 = inst_28291;
var tmp28450 = inst_28290;
var inst_28290__$1 = tmp28450;
var inst_28291__$1 = tmp28449;
var inst_28292__$1 = tmp28448;
var inst_28293__$1 = inst_28313;
var state_28424__$1 = (function (){var statearr_28468 = state_28424;
(statearr_28468[(18)] = inst_28311);

(statearr_28468[(14)] = inst_28290__$1);

(statearr_28468[(15)] = inst_28291__$1);

(statearr_28468[(16)] = inst_28292__$1);

(statearr_28468[(17)] = inst_28293__$1);

return statearr_28468;
})();
var statearr_28473_30335 = state_28424__$1;
(statearr_28473_30335[(2)] = null);

(statearr_28473_30335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (21))){
var inst_28340 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28479_30336 = state_28424__$1;
(statearr_28479_30336[(2)] = inst_28340);

(statearr_28479_30336[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (31))){
var inst_28372 = (state_28424[(11)]);
var inst_28377 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28372);
var state_28424__$1 = state_28424;
var statearr_28483_30340 = state_28424__$1;
(statearr_28483_30340[(2)] = inst_28377);

(statearr_28483_30340[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (32))){
var inst_28367 = (state_28424[(10)]);
var inst_28364 = (state_28424[(19)]);
var inst_28365 = (state_28424[(9)]);
var inst_28366 = (state_28424[(20)]);
var inst_28379 = (state_28424[(2)]);
var inst_28380 = (inst_28367 + (1));
var tmp28475 = inst_28366;
var tmp28476 = inst_28365;
var tmp28477 = inst_28364;
var inst_28364__$1 = tmp28477;
var inst_28365__$1 = tmp28476;
var inst_28366__$1 = tmp28475;
var inst_28367__$1 = inst_28380;
var state_28424__$1 = (function (){var statearr_28487 = state_28424;
(statearr_28487[(21)] = inst_28379);

(statearr_28487[(19)] = inst_28364__$1);

(statearr_28487[(9)] = inst_28365__$1);

(statearr_28487[(20)] = inst_28366__$1);

(statearr_28487[(10)] = inst_28367__$1);

return statearr_28487;
})();
var statearr_28488_30341 = state_28424__$1;
(statearr_28488_30341[(2)] = null);

(statearr_28488_30341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (40))){
var inst_28392 = (state_28424[(22)]);
var inst_28396 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28392);
var state_28424__$1 = state_28424;
var statearr_28492_30345 = state_28424__$1;
(statearr_28492_30345[(2)] = inst_28396);

(statearr_28492_30345[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (33))){
var inst_28383 = (state_28424[(23)]);
var inst_28385 = cljs.core.chunked_seq_QMARK_(inst_28383);
var state_28424__$1 = state_28424;
if(inst_28385){
var statearr_28494_30346 = state_28424__$1;
(statearr_28494_30346[(1)] = (36));

} else {
var statearr_28497_30347 = state_28424__$1;
(statearr_28497_30347[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (13))){
var inst_28305 = (state_28424[(24)]);
var inst_28308 = cljs.core.async.close_BANG_(inst_28305);
var state_28424__$1 = state_28424;
var statearr_28499_30348 = state_28424__$1;
(statearr_28499_30348[(2)] = inst_28308);

(statearr_28499_30348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (22))){
var inst_28330 = (state_28424[(8)]);
var inst_28333 = cljs.core.async.close_BANG_(inst_28330);
var state_28424__$1 = state_28424;
var statearr_28501_30352 = state_28424__$1;
(statearr_28501_30352[(2)] = inst_28333);

(statearr_28501_30352[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (36))){
var inst_28383 = (state_28424[(23)]);
var inst_28387 = cljs.core.chunk_first(inst_28383);
var inst_28388 = cljs.core.chunk_rest(inst_28383);
var inst_28389 = cljs.core.count(inst_28387);
var inst_28364 = inst_28388;
var inst_28365 = inst_28387;
var inst_28366 = inst_28389;
var inst_28367 = (0);
var state_28424__$1 = (function (){var statearr_28504 = state_28424;
(statearr_28504[(19)] = inst_28364);

(statearr_28504[(9)] = inst_28365);

(statearr_28504[(20)] = inst_28366);

(statearr_28504[(10)] = inst_28367);

return statearr_28504;
})();
var statearr_28506_30353 = state_28424__$1;
(statearr_28506_30353[(2)] = null);

(statearr_28506_30353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (41))){
var inst_28383 = (state_28424[(23)]);
var inst_28398 = (state_28424[(2)]);
var inst_28399 = cljs.core.next(inst_28383);
var inst_28364 = inst_28399;
var inst_28365 = null;
var inst_28366 = (0);
var inst_28367 = (0);
var state_28424__$1 = (function (){var statearr_28508 = state_28424;
(statearr_28508[(25)] = inst_28398);

(statearr_28508[(19)] = inst_28364);

(statearr_28508[(9)] = inst_28365);

(statearr_28508[(20)] = inst_28366);

(statearr_28508[(10)] = inst_28367);

return statearr_28508;
})();
var statearr_28509_30355 = state_28424__$1;
(statearr_28509_30355[(2)] = null);

(statearr_28509_30355[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (43))){
var state_28424__$1 = state_28424;
var statearr_28510_30361 = state_28424__$1;
(statearr_28510_30361[(2)] = null);

(statearr_28510_30361[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (29))){
var inst_28407 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28513_30362 = state_28424__$1;
(statearr_28513_30362[(2)] = inst_28407);

(statearr_28513_30362[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (44))){
var inst_28416 = (state_28424[(2)]);
var state_28424__$1 = (function (){var statearr_28515 = state_28424;
(statearr_28515[(26)] = inst_28416);

return statearr_28515;
})();
var statearr_28516_30366 = state_28424__$1;
(statearr_28516_30366[(2)] = null);

(statearr_28516_30366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (6))){
var inst_28356 = (state_28424[(27)]);
var inst_28355 = cljs.core.deref(cs);
var inst_28356__$1 = cljs.core.keys(inst_28355);
var inst_28357 = cljs.core.count(inst_28356__$1);
var inst_28358 = cljs.core.reset_BANG_(dctr,inst_28357);
var inst_28363 = cljs.core.seq(inst_28356__$1);
var inst_28364 = inst_28363;
var inst_28365 = null;
var inst_28366 = (0);
var inst_28367 = (0);
var state_28424__$1 = (function (){var statearr_28518 = state_28424;
(statearr_28518[(27)] = inst_28356__$1);

(statearr_28518[(28)] = inst_28358);

(statearr_28518[(19)] = inst_28364);

(statearr_28518[(9)] = inst_28365);

(statearr_28518[(20)] = inst_28366);

(statearr_28518[(10)] = inst_28367);

return statearr_28518;
})();
var statearr_28519_30367 = state_28424__$1;
(statearr_28519_30367[(2)] = null);

(statearr_28519_30367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (28))){
var inst_28364 = (state_28424[(19)]);
var inst_28383 = (state_28424[(23)]);
var inst_28383__$1 = cljs.core.seq(inst_28364);
var state_28424__$1 = (function (){var statearr_28520 = state_28424;
(statearr_28520[(23)] = inst_28383__$1);

return statearr_28520;
})();
if(inst_28383__$1){
var statearr_28521_30371 = state_28424__$1;
(statearr_28521_30371[(1)] = (33));

} else {
var statearr_28522_30372 = state_28424__$1;
(statearr_28522_30372[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (25))){
var inst_28367 = (state_28424[(10)]);
var inst_28366 = (state_28424[(20)]);
var inst_28369 = (inst_28367 < inst_28366);
var inst_28370 = inst_28369;
var state_28424__$1 = state_28424;
if(cljs.core.truth_(inst_28370)){
var statearr_28524_30374 = state_28424__$1;
(statearr_28524_30374[(1)] = (27));

} else {
var statearr_28525_30375 = state_28424__$1;
(statearr_28525_30375[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (34))){
var state_28424__$1 = state_28424;
var statearr_28526_30380 = state_28424__$1;
(statearr_28526_30380[(2)] = null);

(statearr_28526_30380[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (17))){
var state_28424__$1 = state_28424;
var statearr_28527_30381 = state_28424__$1;
(statearr_28527_30381[(2)] = null);

(statearr_28527_30381[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (3))){
var inst_28421 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28424__$1,inst_28421);
} else {
if((state_val_28426 === (12))){
var inst_28345 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28531_30382 = state_28424__$1;
(statearr_28531_30382[(2)] = inst_28345);

(statearr_28531_30382[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (2))){
var state_28424__$1 = state_28424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28424__$1,(4),ch);
} else {
if((state_val_28426 === (23))){
var state_28424__$1 = state_28424;
var statearr_28533_30383 = state_28424__$1;
(statearr_28533_30383[(2)] = null);

(statearr_28533_30383[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (35))){
var inst_28405 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28537_30387 = state_28424__$1;
(statearr_28537_30387[(2)] = inst_28405);

(statearr_28537_30387[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (19))){
var inst_28316 = (state_28424[(7)]);
var inst_28320 = cljs.core.chunk_first(inst_28316);
var inst_28321 = cljs.core.chunk_rest(inst_28316);
var inst_28322 = cljs.core.count(inst_28320);
var inst_28290 = inst_28321;
var inst_28291 = inst_28320;
var inst_28292 = inst_28322;
var inst_28293 = (0);
var state_28424__$1 = (function (){var statearr_28544 = state_28424;
(statearr_28544[(14)] = inst_28290);

(statearr_28544[(15)] = inst_28291);

(statearr_28544[(16)] = inst_28292);

(statearr_28544[(17)] = inst_28293);

return statearr_28544;
})();
var statearr_28546_30389 = state_28424__$1;
(statearr_28546_30389[(2)] = null);

(statearr_28546_30389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (11))){
var inst_28290 = (state_28424[(14)]);
var inst_28316 = (state_28424[(7)]);
var inst_28316__$1 = cljs.core.seq(inst_28290);
var state_28424__$1 = (function (){var statearr_28549 = state_28424;
(statearr_28549[(7)] = inst_28316__$1);

return statearr_28549;
})();
if(inst_28316__$1){
var statearr_28551_30390 = state_28424__$1;
(statearr_28551_30390[(1)] = (16));

} else {
var statearr_28552_30391 = state_28424__$1;
(statearr_28552_30391[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (9))){
var inst_28347 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28553_30392 = state_28424__$1;
(statearr_28553_30392[(2)] = inst_28347);

(statearr_28553_30392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (5))){
var inst_28288 = cljs.core.deref(cs);
var inst_28289 = cljs.core.seq(inst_28288);
var inst_28290 = inst_28289;
var inst_28291 = null;
var inst_28292 = (0);
var inst_28293 = (0);
var state_28424__$1 = (function (){var statearr_28557 = state_28424;
(statearr_28557[(14)] = inst_28290);

(statearr_28557[(15)] = inst_28291);

(statearr_28557[(16)] = inst_28292);

(statearr_28557[(17)] = inst_28293);

return statearr_28557;
})();
var statearr_28558_30394 = state_28424__$1;
(statearr_28558_30394[(2)] = null);

(statearr_28558_30394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (14))){
var state_28424__$1 = state_28424;
var statearr_28561_30395 = state_28424__$1;
(statearr_28561_30395[(2)] = null);

(statearr_28561_30395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (45))){
var inst_28413 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28566_30397 = state_28424__$1;
(statearr_28566_30397[(2)] = inst_28413);

(statearr_28566_30397[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (26))){
var inst_28356 = (state_28424[(27)]);
var inst_28409 = (state_28424[(2)]);
var inst_28410 = cljs.core.seq(inst_28356);
var state_28424__$1 = (function (){var statearr_28570 = state_28424;
(statearr_28570[(29)] = inst_28409);

return statearr_28570;
})();
if(inst_28410){
var statearr_28571_30399 = state_28424__$1;
(statearr_28571_30399[(1)] = (42));

} else {
var statearr_28573_30401 = state_28424__$1;
(statearr_28573_30401[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (16))){
var inst_28316 = (state_28424[(7)]);
var inst_28318 = cljs.core.chunked_seq_QMARK_(inst_28316);
var state_28424__$1 = state_28424;
if(inst_28318){
var statearr_28578_30402 = state_28424__$1;
(statearr_28578_30402[(1)] = (19));

} else {
var statearr_28580_30404 = state_28424__$1;
(statearr_28580_30404[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (38))){
var inst_28402 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28583_30405 = state_28424__$1;
(statearr_28583_30405[(2)] = inst_28402);

(statearr_28583_30405[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (30))){
var state_28424__$1 = state_28424;
var statearr_28584_30406 = state_28424__$1;
(statearr_28584_30406[(2)] = null);

(statearr_28584_30406[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (10))){
var inst_28291 = (state_28424[(15)]);
var inst_28293 = (state_28424[(17)]);
var inst_28304 = cljs.core._nth(inst_28291,inst_28293);
var inst_28305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28304,(0),null);
var inst_28306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28304,(1),null);
var state_28424__$1 = (function (){var statearr_28588 = state_28424;
(statearr_28588[(24)] = inst_28305);

return statearr_28588;
})();
if(cljs.core.truth_(inst_28306)){
var statearr_28589_30407 = state_28424__$1;
(statearr_28589_30407[(1)] = (13));

} else {
var statearr_28590_30408 = state_28424__$1;
(statearr_28590_30408[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (18))){
var inst_28343 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28591_30411 = state_28424__$1;
(statearr_28591_30411[(2)] = inst_28343);

(statearr_28591_30411[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (42))){
var state_28424__$1 = state_28424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28424__$1,(45),dchan);
} else {
if((state_val_28426 === (37))){
var inst_28383 = (state_28424[(23)]);
var inst_28392 = (state_28424[(22)]);
var inst_28281 = (state_28424[(12)]);
var inst_28392__$1 = cljs.core.first(inst_28383);
var inst_28393 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28392__$1,inst_28281,done);
var state_28424__$1 = (function (){var statearr_28596 = state_28424;
(statearr_28596[(22)] = inst_28392__$1);

return statearr_28596;
})();
if(cljs.core.truth_(inst_28393)){
var statearr_28598_30415 = state_28424__$1;
(statearr_28598_30415[(1)] = (39));

} else {
var statearr_28599_30416 = state_28424__$1;
(statearr_28599_30416[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28426 === (8))){
var inst_28293 = (state_28424[(17)]);
var inst_28292 = (state_28424[(16)]);
var inst_28298 = (inst_28293 < inst_28292);
var inst_28299 = inst_28298;
var state_28424__$1 = state_28424;
if(cljs.core.truth_(inst_28299)){
var statearr_28601_30418 = state_28424__$1;
(statearr_28601_30418[(1)] = (10));

} else {
var statearr_28603_30419 = state_28424__$1;
(statearr_28603_30419[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__27051__auto__ = null;
var cljs$core$async$mult_$_state_machine__27051__auto____0 = (function (){
var statearr_28609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28609[(0)] = cljs$core$async$mult_$_state_machine__27051__auto__);

(statearr_28609[(1)] = (1));

return statearr_28609;
});
var cljs$core$async$mult_$_state_machine__27051__auto____1 = (function (state_28424){
while(true){
var ret_value__27052__auto__ = (function (){try{while(true){
var result__27053__auto__ = switch__27050__auto__(state_28424);
if(cljs.core.keyword_identical_QMARK_(result__27053__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27053__auto__;
}
break;
}
}catch (e28610){var ex__27054__auto__ = e28610;
var statearr_28611_30420 = state_28424;
(statearr_28611_30420[(2)] = ex__27054__auto__);


if(cljs.core.seq((state_28424[(4)]))){
var statearr_28612_30421 = state_28424;
(statearr_28612_30421[(1)] = cljs.core.first((state_28424[(4)])));

} else {
throw ex__27054__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30424 = state_28424;
state_28424 = G__30424;
continue;
} else {
return ret_value__27052__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27051__auto__ = function(state_28424){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27051__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27051__auto____1.call(this,state_28424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27051__auto____0;
cljs$core$async$mult_$_state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27051__auto____1;
return cljs$core$async$mult_$_state_machine__27051__auto__;
})()
})();
var state__27247__auto__ = (function (){var statearr_28615 = f__27246__auto__();
(statearr_28615[(6)] = c__27245__auto___30317);

return statearr_28615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27247__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28626 = arguments.length;
switch (G__28626) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_30426 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_30426(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_30429 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_30429(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_30430 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_30430(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_30431 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_30431(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_30436 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_30436(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30441 = arguments.length;
var i__5770__auto___30443 = (0);
while(true){
if((i__5770__auto___30443 < len__5769__auto___30441)){
args__5775__auto__.push((arguments[i__5770__auto___30443]));

var G__30444 = (i__5770__auto___30443 + (1));
i__5770__auto___30443 = G__30444;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28681){
var map__28684 = p__28681;
var map__28684__$1 = cljs.core.__destructure_map(map__28684);
var opts = map__28684__$1;
var statearr_28685_30450 = state;
(statearr_28685_30450[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_28688_30451 = state;
(statearr_28688_30451[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_28690_30452 = state;
(statearr_28690_30452[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28671){
var G__28672 = cljs.core.first(seq28671);
var seq28671__$1 = cljs.core.next(seq28671);
var G__28673 = cljs.core.first(seq28671__$1);
var seq28671__$2 = cljs.core.next(seq28671__$1);
var G__28674 = cljs.core.first(seq28671__$2);
var seq28671__$3 = cljs.core.next(seq28671__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28672,G__28673,G__28674,seq28671__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28719 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28719 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28720){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28720 = meta28720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28721,meta28720__$1){
var self__ = this;
var _28721__$1 = this;
return (new cljs.core.async.t_cljs$core$async28719(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28720__$1));
}));

(cljs.core.async.t_cljs$core$async28719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28721){
var self__ = this;
var _28721__$1 = this;
return self__.meta28720;
}));

(cljs.core.async.t_cljs$core$async28719.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28719.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async28719.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28719.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28719.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28719.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28719.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28719.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28720","meta28720",-902012297,null)], null);
}));

(cljs.core.async.t_cljs$core$async28719.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28719");

(cljs.core.async.t_cljs$core$async28719.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async28719");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28719.
 */
cljs.core.async.__GT_t_cljs$core$async28719 = (function cljs$core$async$mix_$___GT_t_cljs$core$async28719(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28720){
return (new cljs.core.async.t_cljs$core$async28719(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28720));
});

}

return (new cljs.core.async.t_cljs$core$async28719(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27245__auto___30466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27246__auto__ = (function (){var switch__27050__auto__ = (function (state_28820){
var state_val_28821 = (state_28820[(1)]);
if((state_val_28821 === (7))){
var inst_28779 = (state_28820[(2)]);
var state_28820__$1 = state_28820;
if(cljs.core.truth_(inst_28779)){
var statearr_28824_30468 = state_28820__$1;
(statearr_28824_30468[(1)] = (8));

} else {
var statearr_28825_30469 = state_28820__$1;
(statearr_28825_30469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28821 === (20))){
var inst_28772 = (state_28820[(7)]);
var state_28820__$1 = state_28820;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28820__$1,(23),out,inst_28772);
} else {
if((state_val_28821 === (1))){
var inst_28755 = calc_state();
var inst_28756 = cljs.core.__destructure_map(inst_28755);
var inst_28757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28756,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28756,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28756,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28760 = inst_28755;
var state_28820__$1 = (function (){var statearr_28828 = state_28820;
(statearr_28828[(8)] = inst_28757);

(statearr_28828[(9)] = inst_28758);

(statearr_28828[(10)] = inst_28759);

(statearr_28828[(11)] = inst_28760);

return statearr_28828;
})();
var statearr_28830_30479 = state_28820__$1;
(statearr_28830_30479[(2)] = null);

(statearr_28830_30479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28821 === (24))){
var inst_28763 = (state_28820[(12)]);
var inst_28760 = inst_28763;
var state_28820__$1 = (function (){var statearr_28831 = state_28820;
(statearr_28831[(11)] = inst_28760);

return statearr_28831;
})();
var statearr_28834_30486 = state_28820__$1;
(statearr_28834_30486[(2)] = null);

(statearr_28834_30486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28821 === (4))){
var inst_28772 = (state_28820[(7)]);
var inst_28774 = (state_28820[(13)]);
var inst_28771 = (state_28820[(2)]);
var inst_28772__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28771,(0),null);
var inst_28773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28771,(1),null);
var inst_28774__$1 = (inst_28772__$1 == null);
var state_28820__$1 = (function (){var statearr_28838 = state_28820;
(statearr_28838[(7)] = inst_28772__$1);

(statearr_28838[(14)] = inst_28773);

(statearr_28838[(13)] = inst_28774__$1);

return statearr_28838;
})();
if(cljs.core.truth_(inst_28774__$1)){
var statearr_28840_30489 = state_28820__$1;
(statearr_28840_30489[(1)] = (5));

} else {
var statearr_28841_30490 = state_28820__$1;
(statearr_28841_30490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28821 === (15))){
var inst_28764 = (state_28820[(15)]);
var inst_28793 = (state_28820[(16)]);
var inst_28793__$1 = cljs.core.empty_QMARK_(inst_28764);
var state_28820__$1 = (function (){var statearr_28846 = state_28820;
(statearr_28846[(16)] = inst_28793__$1);

return statearr_28846;
})();
if(inst_28793__$1){
var statearr_28849_30493 = state_28820__$1;
(statearr_28849_30493[(1)] = (17));

} else {
var statearr_28850_30494 = state_28820__$1;
(statearr_28850_30494[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28821 === (21))){
var inst_28763 = (state_28820[(12)]);
var inst_28760 = inst_28763;
var state_28820__$1 = (function (){var statearr_28852 = state_28820;
(statearr_28852[(11)] = inst_28760);

return statearr_28852;
})();
var statearr_28854_30496 = state_28820__$1;
(statearr_28854_30496[(2)] = null);

(statearr_28854_30496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28821 === (13))){
var inst_28786 = (state_28820[(2)]);
var inst_28787 = calc_state();
var inst_28760 = inst_28787;
var state_28820__$1 = (function (){var statearr_28859 = state_28820;
(statearr_28859[(17)] = inst_28786);

(statearr_28859[(11)] = inst_28760);

return statearr_28859;
})();
var statearr_28860_30499 = state_28820__$1;
(statearr_28860_30499[(2)] = null);

(statearr_28860_30499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28821 === (22))){
var inst_28814 = (state_28820[(2)]);
var state_28820__$1 = state_28820;
var statearr_28861_30500 = state_28820__$1;
(statearr_28861_30500[(2)] = inst_28814);

(statearr_28861_30500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28821 === (6))){
var inst_28773 = (state_28820[(14)]);
var inst_28777 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28773,change);
var state_28820__$1 = state_28820;
var statearr_28865_30501 = state_28820__$1;
(statearr_28865_30501[(2)] = inst_28777);

(statearr_28865_30501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28821 === (25))){
var state_28820__$1 = state_28820;
var statearr_28869_30502 = state_28820__$1;
(statearr_28869_30502[(2)] = null);

(statearr_28869_30502[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28821 === (17))){
var inst_28765 = (state_28820[(18)]);
var inst_28773 = (state_28820[(14)]);
var inst_28795 = (inst_28765.cljs$core$IFn$_invoke$arity$1 ? inst_28765.cljs$core$IFn$_invoke$arity$1(inst_28773) : inst_28765.call(null,inst_28773));
var inst_28796 = cljs.core.not(inst_28795);
var state_28820__$1 = state_28820;
var statearr_28871_30503 = state_28820__$1;
(statearr_28871_30503[(2)] = inst_28796);

(statearr_28871_30503[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28821 === (3))){
var inst_28818 = (state_28820[(2)]);
var state_28820__$1 = state_28820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28820__$1,inst_28818);
} else {
if((state_val_28821 === (12))){
var state_28820__$1 = state_28820;
var statearr_28873_30504 = state_28820__$1;
(statearr_28873_30504[(2)] = null);

(statearr_28873_30504[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28821 === (2))){
var inst_28760 = (state_28820[(11)]);
var inst_28763 = (state_28820[(12)]);
var inst_28763__$1 = cljs.core.__destructure_map(inst_28760);
var inst_28764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28763__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28763__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28763__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28820__$1 = (function (){var statearr_28878 = state_28820;
(statearr_28878[(12)] = inst_28763__$1);

(statearr_28878[(15)] = inst_28764);

(statearr_28878[(18)] = inst_28765);

return statearr_28878;
})();
return cljs.core.async.ioc_alts_BANG_(state_28820__$1,(4),inst_28766);
} else {
if((state_val_28821 === (23))){
var inst_28804 = (state_28820[(2)]);
var state_28820__$1 = state_28820;
if(cljs.core.truth_(inst_28804)){
var statearr_28884_30505 = state_28820__$1;
(statearr_28884_30505[(1)] = (24));

} else {
var statearr_28885_30506 = state_28820__$1;
(statearr_28885_30506[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28821 === (19))){
var inst_28799 = (state_28820[(2)]);
var state_28820__$1 = state_28820;
var statearr_28888_30507 = state_28820__$1;
(statearr_28888_30507[(2)] = inst_28799);

(statearr_28888_30507[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28821 === (11))){
var inst_28773 = (state_28820[(14)]);
var inst_28783 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_28773);
var state_28820__$1 = state_28820;
var statearr_28892_30508 = state_28820__$1;
(statearr_28892_30508[(2)] = inst_28783);

(statearr_28892_30508[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28821 === (9))){
var inst_28764 = (state_28820[(15)]);
var inst_28773 = (state_28820[(14)]);
var inst_28790 = (state_28820[(19)]);
var inst_28790__$1 = (inst_28764.cljs$core$IFn$_invoke$arity$1 ? inst_28764.cljs$core$IFn$_invoke$arity$1(inst_28773) : inst_28764.call(null,inst_28773));
var state_28820__$1 = (function (){var statearr_28893 = state_28820;
(statearr_28893[(19)] = inst_28790__$1);

return statearr_28893;
})();
if(cljs.core.truth_(inst_28790__$1)){
var statearr_28894_30510 = state_28820__$1;
(statearr_28894_30510[(1)] = (14));

} else {
var statearr_28896_30511 = state_28820__$1;
(statearr_28896_30511[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28821 === (5))){
var inst_28774 = (state_28820[(13)]);
var state_28820__$1 = state_28820;
var statearr_28897_30512 = state_28820__$1;
(statearr_28897_30512[(2)] = inst_28774);

(statearr_28897_30512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28821 === (14))){
var inst_28790 = (state_28820[(19)]);
var state_28820__$1 = state_28820;
var statearr_28899_30513 = state_28820__$1;
(statearr_28899_30513[(2)] = inst_28790);

(statearr_28899_30513[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28821 === (26))){
var inst_28810 = (state_28820[(2)]);
var state_28820__$1 = state_28820;
var statearr_28903_30514 = state_28820__$1;
(statearr_28903_30514[(2)] = inst_28810);

(statearr_28903_30514[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28821 === (16))){
var inst_28801 = (state_28820[(2)]);
var state_28820__$1 = state_28820;
if(cljs.core.truth_(inst_28801)){
var statearr_28908_30521 = state_28820__$1;
(statearr_28908_30521[(1)] = (20));

} else {
var statearr_28909_30522 = state_28820__$1;
(statearr_28909_30522[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28821 === (10))){
var inst_28816 = (state_28820[(2)]);
var state_28820__$1 = state_28820;
var statearr_28910_30523 = state_28820__$1;
(statearr_28910_30523[(2)] = inst_28816);

(statearr_28910_30523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28821 === (18))){
var inst_28793 = (state_28820[(16)]);
var state_28820__$1 = state_28820;
var statearr_28914_30526 = state_28820__$1;
(statearr_28914_30526[(2)] = inst_28793);

(statearr_28914_30526[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28821 === (8))){
var inst_28772 = (state_28820[(7)]);
var inst_28781 = (inst_28772 == null);
var state_28820__$1 = state_28820;
if(cljs.core.truth_(inst_28781)){
var statearr_28916_30527 = state_28820__$1;
(statearr_28916_30527[(1)] = (11));

} else {
var statearr_28917_30528 = state_28820__$1;
(statearr_28917_30528[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__27051__auto__ = null;
var cljs$core$async$mix_$_state_machine__27051__auto____0 = (function (){
var statearr_28919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28919[(0)] = cljs$core$async$mix_$_state_machine__27051__auto__);

(statearr_28919[(1)] = (1));

return statearr_28919;
});
var cljs$core$async$mix_$_state_machine__27051__auto____1 = (function (state_28820){
while(true){
var ret_value__27052__auto__ = (function (){try{while(true){
var result__27053__auto__ = switch__27050__auto__(state_28820);
if(cljs.core.keyword_identical_QMARK_(result__27053__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27053__auto__;
}
break;
}
}catch (e28923){var ex__27054__auto__ = e28923;
var statearr_28924_30529 = state_28820;
(statearr_28924_30529[(2)] = ex__27054__auto__);


if(cljs.core.seq((state_28820[(4)]))){
var statearr_28925_30531 = state_28820;
(statearr_28925_30531[(1)] = cljs.core.first((state_28820[(4)])));

} else {
throw ex__27054__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30532 = state_28820;
state_28820 = G__30532;
continue;
} else {
return ret_value__27052__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27051__auto__ = function(state_28820){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27051__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27051__auto____1.call(this,state_28820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27051__auto____0;
cljs$core$async$mix_$_state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27051__auto____1;
return cljs$core$async$mix_$_state_machine__27051__auto__;
})()
})();
var state__27247__auto__ = (function (){var statearr_28928 = f__27246__auto__();
(statearr_28928[(6)] = c__27245__auto___30466);

return statearr_28928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27247__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_30533 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_30533(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_30536 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_30536(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_30543 = (function() {
var G__30544 = null;
var G__30544__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__30544__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__30544 = function(p,v){
switch(arguments.length){
case 1:
return G__30544__1.call(this,p);
case 2:
return G__30544__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30544.cljs$core$IFn$_invoke$arity$1 = G__30544__1;
G__30544.cljs$core$IFn$_invoke$arity$2 = G__30544__2;
return G__30544;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28936 = arguments.length;
switch (G__28936) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_30543(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_30543(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28939 = arguments.length;
switch (G__28939) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__28937_SHARP_){
if(cljs.core.truth_((p1__28937_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28937_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__28937_SHARP_.call(null,topic)))){
return p1__28937_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28937_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28943 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28943 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28944){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28944 = meta28944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28945,meta28944__$1){
var self__ = this;
var _28945__$1 = this;
return (new cljs.core.async.t_cljs$core$async28943(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28944__$1));
}));

(cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28945){
var self__ = this;
var _28945__$1 = this;
return self__.meta28944;
}));

(cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async28943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28944","meta28944",1751288134,null)], null);
}));

(cljs.core.async.t_cljs$core$async28943.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28943");

(cljs.core.async.t_cljs$core$async28943.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async28943");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28943.
 */
cljs.core.async.__GT_t_cljs$core$async28943 = (function cljs$core$async$__GT_t_cljs$core$async28943(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28944){
return (new cljs.core.async.t_cljs$core$async28943(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28944));
});

}

return (new cljs.core.async.t_cljs$core$async28943(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27245__auto___30585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27246__auto__ = (function (){var switch__27050__auto__ = (function (state_29020){
var state_val_29021 = (state_29020[(1)]);
if((state_val_29021 === (7))){
var inst_29016 = (state_29020[(2)]);
var state_29020__$1 = state_29020;
var statearr_29022_30586 = state_29020__$1;
(statearr_29022_30586[(2)] = inst_29016);

(statearr_29022_30586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (20))){
var state_29020__$1 = state_29020;
var statearr_29023_30588 = state_29020__$1;
(statearr_29023_30588[(2)] = null);

(statearr_29023_30588[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (1))){
var state_29020__$1 = state_29020;
var statearr_29024_30591 = state_29020__$1;
(statearr_29024_30591[(2)] = null);

(statearr_29024_30591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (24))){
var inst_28999 = (state_29020[(7)]);
var inst_29008 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_28999);
var state_29020__$1 = state_29020;
var statearr_29025_30602 = state_29020__$1;
(statearr_29025_30602[(2)] = inst_29008);

(statearr_29025_30602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (4))){
var inst_28951 = (state_29020[(8)]);
var inst_28951__$1 = (state_29020[(2)]);
var inst_28952 = (inst_28951__$1 == null);
var state_29020__$1 = (function (){var statearr_29026 = state_29020;
(statearr_29026[(8)] = inst_28951__$1);

return statearr_29026;
})();
if(cljs.core.truth_(inst_28952)){
var statearr_29027_30607 = state_29020__$1;
(statearr_29027_30607[(1)] = (5));

} else {
var statearr_29028_30608 = state_29020__$1;
(statearr_29028_30608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (15))){
var inst_28993 = (state_29020[(2)]);
var state_29020__$1 = state_29020;
var statearr_29029_30610 = state_29020__$1;
(statearr_29029_30610[(2)] = inst_28993);

(statearr_29029_30610[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (21))){
var inst_29013 = (state_29020[(2)]);
var state_29020__$1 = (function (){var statearr_29030 = state_29020;
(statearr_29030[(9)] = inst_29013);

return statearr_29030;
})();
var statearr_29031_30612 = state_29020__$1;
(statearr_29031_30612[(2)] = null);

(statearr_29031_30612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (13))){
var inst_28975 = (state_29020[(10)]);
var inst_28977 = cljs.core.chunked_seq_QMARK_(inst_28975);
var state_29020__$1 = state_29020;
if(inst_28977){
var statearr_29032_30613 = state_29020__$1;
(statearr_29032_30613[(1)] = (16));

} else {
var statearr_29033_30614 = state_29020__$1;
(statearr_29033_30614[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (22))){
var inst_29005 = (state_29020[(2)]);
var state_29020__$1 = state_29020;
if(cljs.core.truth_(inst_29005)){
var statearr_29034_30615 = state_29020__$1;
(statearr_29034_30615[(1)] = (23));

} else {
var statearr_29035_30616 = state_29020__$1;
(statearr_29035_30616[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (6))){
var inst_28951 = (state_29020[(8)]);
var inst_28999 = (state_29020[(7)]);
var inst_29001 = (state_29020[(11)]);
var inst_28999__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_28951) : topic_fn.call(null,inst_28951));
var inst_29000 = cljs.core.deref(mults);
var inst_29001__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29000,inst_28999__$1);
var state_29020__$1 = (function (){var statearr_29036 = state_29020;
(statearr_29036[(7)] = inst_28999__$1);

(statearr_29036[(11)] = inst_29001__$1);

return statearr_29036;
})();
if(cljs.core.truth_(inst_29001__$1)){
var statearr_29037_30617 = state_29020__$1;
(statearr_29037_30617[(1)] = (19));

} else {
var statearr_29038_30618 = state_29020__$1;
(statearr_29038_30618[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (25))){
var inst_29010 = (state_29020[(2)]);
var state_29020__$1 = state_29020;
var statearr_29039_30619 = state_29020__$1;
(statearr_29039_30619[(2)] = inst_29010);

(statearr_29039_30619[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (17))){
var inst_28975 = (state_29020[(10)]);
var inst_28984 = cljs.core.first(inst_28975);
var inst_28985 = cljs.core.async.muxch_STAR_(inst_28984);
var inst_28986 = cljs.core.async.close_BANG_(inst_28985);
var inst_28987 = cljs.core.next(inst_28975);
var inst_28961 = inst_28987;
var inst_28962 = null;
var inst_28963 = (0);
var inst_28964 = (0);
var state_29020__$1 = (function (){var statearr_29040 = state_29020;
(statearr_29040[(12)] = inst_28986);

(statearr_29040[(13)] = inst_28961);

(statearr_29040[(14)] = inst_28962);

(statearr_29040[(15)] = inst_28963);

(statearr_29040[(16)] = inst_28964);

return statearr_29040;
})();
var statearr_29041_30620 = state_29020__$1;
(statearr_29041_30620[(2)] = null);

(statearr_29041_30620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (3))){
var inst_29018 = (state_29020[(2)]);
var state_29020__$1 = state_29020;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29020__$1,inst_29018);
} else {
if((state_val_29021 === (12))){
var inst_28995 = (state_29020[(2)]);
var state_29020__$1 = state_29020;
var statearr_29042_30621 = state_29020__$1;
(statearr_29042_30621[(2)] = inst_28995);

(statearr_29042_30621[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (2))){
var state_29020__$1 = state_29020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29020__$1,(4),ch);
} else {
if((state_val_29021 === (23))){
var state_29020__$1 = state_29020;
var statearr_29043_30622 = state_29020__$1;
(statearr_29043_30622[(2)] = null);

(statearr_29043_30622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (19))){
var inst_29001 = (state_29020[(11)]);
var inst_28951 = (state_29020[(8)]);
var inst_29003 = cljs.core.async.muxch_STAR_(inst_29001);
var state_29020__$1 = state_29020;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29020__$1,(22),inst_29003,inst_28951);
} else {
if((state_val_29021 === (11))){
var inst_28961 = (state_29020[(13)]);
var inst_28975 = (state_29020[(10)]);
var inst_28975__$1 = cljs.core.seq(inst_28961);
var state_29020__$1 = (function (){var statearr_29044 = state_29020;
(statearr_29044[(10)] = inst_28975__$1);

return statearr_29044;
})();
if(inst_28975__$1){
var statearr_29045_30623 = state_29020__$1;
(statearr_29045_30623[(1)] = (13));

} else {
var statearr_29046_30624 = state_29020__$1;
(statearr_29046_30624[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (9))){
var inst_28997 = (state_29020[(2)]);
var state_29020__$1 = state_29020;
var statearr_29047_30625 = state_29020__$1;
(statearr_29047_30625[(2)] = inst_28997);

(statearr_29047_30625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (5))){
var inst_28958 = cljs.core.deref(mults);
var inst_28959 = cljs.core.vals(inst_28958);
var inst_28960 = cljs.core.seq(inst_28959);
var inst_28961 = inst_28960;
var inst_28962 = null;
var inst_28963 = (0);
var inst_28964 = (0);
var state_29020__$1 = (function (){var statearr_29048 = state_29020;
(statearr_29048[(13)] = inst_28961);

(statearr_29048[(14)] = inst_28962);

(statearr_29048[(15)] = inst_28963);

(statearr_29048[(16)] = inst_28964);

return statearr_29048;
})();
var statearr_29049_30626 = state_29020__$1;
(statearr_29049_30626[(2)] = null);

(statearr_29049_30626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (14))){
var state_29020__$1 = state_29020;
var statearr_29053_30627 = state_29020__$1;
(statearr_29053_30627[(2)] = null);

(statearr_29053_30627[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (16))){
var inst_28975 = (state_29020[(10)]);
var inst_28979 = cljs.core.chunk_first(inst_28975);
var inst_28980 = cljs.core.chunk_rest(inst_28975);
var inst_28981 = cljs.core.count(inst_28979);
var inst_28961 = inst_28980;
var inst_28962 = inst_28979;
var inst_28963 = inst_28981;
var inst_28964 = (0);
var state_29020__$1 = (function (){var statearr_29054 = state_29020;
(statearr_29054[(13)] = inst_28961);

(statearr_29054[(14)] = inst_28962);

(statearr_29054[(15)] = inst_28963);

(statearr_29054[(16)] = inst_28964);

return statearr_29054;
})();
var statearr_29055_30628 = state_29020__$1;
(statearr_29055_30628[(2)] = null);

(statearr_29055_30628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (10))){
var inst_28962 = (state_29020[(14)]);
var inst_28964 = (state_29020[(16)]);
var inst_28961 = (state_29020[(13)]);
var inst_28963 = (state_29020[(15)]);
var inst_28969 = cljs.core._nth(inst_28962,inst_28964);
var inst_28970 = cljs.core.async.muxch_STAR_(inst_28969);
var inst_28971 = cljs.core.async.close_BANG_(inst_28970);
var inst_28972 = (inst_28964 + (1));
var tmp29050 = inst_28963;
var tmp29051 = inst_28961;
var tmp29052 = inst_28962;
var inst_28961__$1 = tmp29051;
var inst_28962__$1 = tmp29052;
var inst_28963__$1 = tmp29050;
var inst_28964__$1 = inst_28972;
var state_29020__$1 = (function (){var statearr_29056 = state_29020;
(statearr_29056[(17)] = inst_28971);

(statearr_29056[(13)] = inst_28961__$1);

(statearr_29056[(14)] = inst_28962__$1);

(statearr_29056[(15)] = inst_28963__$1);

(statearr_29056[(16)] = inst_28964__$1);

return statearr_29056;
})();
var statearr_29057_30629 = state_29020__$1;
(statearr_29057_30629[(2)] = null);

(statearr_29057_30629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (18))){
var inst_28990 = (state_29020[(2)]);
var state_29020__$1 = state_29020;
var statearr_29058_30630 = state_29020__$1;
(statearr_29058_30630[(2)] = inst_28990);

(statearr_29058_30630[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (8))){
var inst_28964 = (state_29020[(16)]);
var inst_28963 = (state_29020[(15)]);
var inst_28966 = (inst_28964 < inst_28963);
var inst_28967 = inst_28966;
var state_29020__$1 = state_29020;
if(cljs.core.truth_(inst_28967)){
var statearr_29059_30631 = state_29020__$1;
(statearr_29059_30631[(1)] = (10));

} else {
var statearr_29060_30632 = state_29020__$1;
(statearr_29060_30632[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27051__auto__ = null;
var cljs$core$async$state_machine__27051__auto____0 = (function (){
var statearr_29063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29063[(0)] = cljs$core$async$state_machine__27051__auto__);

(statearr_29063[(1)] = (1));

return statearr_29063;
});
var cljs$core$async$state_machine__27051__auto____1 = (function (state_29020){
while(true){
var ret_value__27052__auto__ = (function (){try{while(true){
var result__27053__auto__ = switch__27050__auto__(state_29020);
if(cljs.core.keyword_identical_QMARK_(result__27053__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27053__auto__;
}
break;
}
}catch (e29066){var ex__27054__auto__ = e29066;
var statearr_29067_30633 = state_29020;
(statearr_29067_30633[(2)] = ex__27054__auto__);


if(cljs.core.seq((state_29020[(4)]))){
var statearr_29068_30634 = state_29020;
(statearr_29068_30634[(1)] = cljs.core.first((state_29020[(4)])));

} else {
throw ex__27054__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30635 = state_29020;
state_29020 = G__30635;
continue;
} else {
return ret_value__27052__auto__;
}
break;
}
});
cljs$core$async$state_machine__27051__auto__ = function(state_29020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27051__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27051__auto____1.call(this,state_29020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27051__auto____0;
cljs$core$async$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27051__auto____1;
return cljs$core$async$state_machine__27051__auto__;
})()
})();
var state__27247__auto__ = (function (){var statearr_29069 = f__27246__auto__();
(statearr_29069[(6)] = c__27245__auto___30585);

return statearr_29069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27247__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29072 = arguments.length;
switch (G__29072) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29080 = arguments.length;
switch (G__29080) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__29093 = arguments.length;
switch (G__29093) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__27245__auto___30640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27246__auto__ = (function (){var switch__27050__auto__ = (function (state_29151){
var state_val_29152 = (state_29151[(1)]);
if((state_val_29152 === (7))){
var state_29151__$1 = state_29151;
var statearr_29156_30641 = state_29151__$1;
(statearr_29156_30641[(2)] = null);

(statearr_29156_30641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29152 === (1))){
var state_29151__$1 = state_29151;
var statearr_29157_30642 = state_29151__$1;
(statearr_29157_30642[(2)] = null);

(statearr_29157_30642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29152 === (4))){
var inst_29102 = (state_29151[(7)]);
var inst_29101 = (state_29151[(8)]);
var inst_29104 = (inst_29102 < inst_29101);
var state_29151__$1 = state_29151;
if(cljs.core.truth_(inst_29104)){
var statearr_29160_30647 = state_29151__$1;
(statearr_29160_30647[(1)] = (6));

} else {
var statearr_29161_30648 = state_29151__$1;
(statearr_29161_30648[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29152 === (15))){
var inst_29135 = (state_29151[(9)]);
var inst_29141 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_29135);
var state_29151__$1 = state_29151;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29151__$1,(17),out,inst_29141);
} else {
if((state_val_29152 === (13))){
var inst_29135 = (state_29151[(9)]);
var inst_29135__$1 = (state_29151[(2)]);
var inst_29136 = cljs.core.some(cljs.core.nil_QMARK_,inst_29135__$1);
var state_29151__$1 = (function (){var statearr_29164 = state_29151;
(statearr_29164[(9)] = inst_29135__$1);

return statearr_29164;
})();
if(cljs.core.truth_(inst_29136)){
var statearr_29166_30649 = state_29151__$1;
(statearr_29166_30649[(1)] = (14));

} else {
var statearr_29167_30650 = state_29151__$1;
(statearr_29167_30650[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29152 === (6))){
var state_29151__$1 = state_29151;
var statearr_29168_30651 = state_29151__$1;
(statearr_29168_30651[(2)] = null);

(statearr_29168_30651[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29152 === (17))){
var inst_29143 = (state_29151[(2)]);
var state_29151__$1 = (function (){var statearr_29172 = state_29151;
(statearr_29172[(10)] = inst_29143);

return statearr_29172;
})();
var statearr_29173_30652 = state_29151__$1;
(statearr_29173_30652[(2)] = null);

(statearr_29173_30652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29152 === (3))){
var inst_29149 = (state_29151[(2)]);
var state_29151__$1 = state_29151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29151__$1,inst_29149);
} else {
if((state_val_29152 === (12))){
var _ = (function (){var statearr_29175 = state_29151;
(statearr_29175[(4)] = cljs.core.rest((state_29151[(4)])));

return statearr_29175;
})();
var state_29151__$1 = state_29151;
var ex29171 = (state_29151__$1[(2)]);
var statearr_29176_30653 = state_29151__$1;
(statearr_29176_30653[(5)] = ex29171);


if((ex29171 instanceof Object)){
var statearr_29177_30654 = state_29151__$1;
(statearr_29177_30654[(1)] = (11));

(statearr_29177_30654[(5)] = null);

} else {
throw ex29171;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29152 === (2))){
var inst_29099 = cljs.core.reset_BANG_(dctr,cnt);
var inst_29101 = cnt;
var inst_29102 = (0);
var state_29151__$1 = (function (){var statearr_29184 = state_29151;
(statearr_29184[(11)] = inst_29099);

(statearr_29184[(8)] = inst_29101);

(statearr_29184[(7)] = inst_29102);

return statearr_29184;
})();
var statearr_29185_30655 = state_29151__$1;
(statearr_29185_30655[(2)] = null);

(statearr_29185_30655[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29152 === (11))){
var inst_29110 = (state_29151[(2)]);
var inst_29111 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_29151__$1 = (function (){var statearr_29187 = state_29151;
(statearr_29187[(12)] = inst_29110);

return statearr_29187;
})();
var statearr_29188_30656 = state_29151__$1;
(statearr_29188_30656[(2)] = inst_29111);

(statearr_29188_30656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29152 === (9))){
var inst_29102 = (state_29151[(7)]);
var _ = (function (){var statearr_29189 = state_29151;
(statearr_29189[(4)] = cljs.core.cons((12),(state_29151[(4)])));

return statearr_29189;
})();
var inst_29117 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_29102) : chs__$1.call(null,inst_29102));
var inst_29118 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_29102) : done.call(null,inst_29102));
var inst_29120 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_29117,inst_29118);
var ___$1 = (function (){var statearr_29190 = state_29151;
(statearr_29190[(4)] = cljs.core.rest((state_29151[(4)])));

return statearr_29190;
})();
var state_29151__$1 = state_29151;
var statearr_29192_30657 = state_29151__$1;
(statearr_29192_30657[(2)] = inst_29120);

(statearr_29192_30657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29152 === (5))){
var inst_29133 = (state_29151[(2)]);
var state_29151__$1 = (function (){var statearr_29193 = state_29151;
(statearr_29193[(13)] = inst_29133);

return statearr_29193;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29151__$1,(13),dchan);
} else {
if((state_val_29152 === (14))){
var inst_29139 = cljs.core.async.close_BANG_(out);
var state_29151__$1 = state_29151;
var statearr_29194_30658 = state_29151__$1;
(statearr_29194_30658[(2)] = inst_29139);

(statearr_29194_30658[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29152 === (16))){
var inst_29147 = (state_29151[(2)]);
var state_29151__$1 = state_29151;
var statearr_29196_30659 = state_29151__$1;
(statearr_29196_30659[(2)] = inst_29147);

(statearr_29196_30659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29152 === (10))){
var inst_29102 = (state_29151[(7)]);
var inst_29123 = (state_29151[(2)]);
var inst_29127 = (inst_29102 + (1));
var inst_29102__$1 = inst_29127;
var state_29151__$1 = (function (){var statearr_29197 = state_29151;
(statearr_29197[(14)] = inst_29123);

(statearr_29197[(7)] = inst_29102__$1);

return statearr_29197;
})();
var statearr_29198_30660 = state_29151__$1;
(statearr_29198_30660[(2)] = null);

(statearr_29198_30660[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29152 === (8))){
var inst_29131 = (state_29151[(2)]);
var state_29151__$1 = state_29151;
var statearr_29200_30661 = state_29151__$1;
(statearr_29200_30661[(2)] = inst_29131);

(statearr_29200_30661[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27051__auto__ = null;
var cljs$core$async$state_machine__27051__auto____0 = (function (){
var statearr_29201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29201[(0)] = cljs$core$async$state_machine__27051__auto__);

(statearr_29201[(1)] = (1));

return statearr_29201;
});
var cljs$core$async$state_machine__27051__auto____1 = (function (state_29151){
while(true){
var ret_value__27052__auto__ = (function (){try{while(true){
var result__27053__auto__ = switch__27050__auto__(state_29151);
if(cljs.core.keyword_identical_QMARK_(result__27053__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27053__auto__;
}
break;
}
}catch (e29203){var ex__27054__auto__ = e29203;
var statearr_29204_30664 = state_29151;
(statearr_29204_30664[(2)] = ex__27054__auto__);


if(cljs.core.seq((state_29151[(4)]))){
var statearr_29205_30665 = state_29151;
(statearr_29205_30665[(1)] = cljs.core.first((state_29151[(4)])));

} else {
throw ex__27054__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30666 = state_29151;
state_29151 = G__30666;
continue;
} else {
return ret_value__27052__auto__;
}
break;
}
});
cljs$core$async$state_machine__27051__auto__ = function(state_29151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27051__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27051__auto____1.call(this,state_29151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27051__auto____0;
cljs$core$async$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27051__auto____1;
return cljs$core$async$state_machine__27051__auto__;
})()
})();
var state__27247__auto__ = (function (){var statearr_29207 = f__27246__auto__();
(statearr_29207[(6)] = c__27245__auto___30640);

return statearr_29207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27247__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29215 = arguments.length;
switch (G__29215) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27245__auto___30668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27246__auto__ = (function (){var switch__27050__auto__ = (function (state_29253){
var state_val_29254 = (state_29253[(1)]);
if((state_val_29254 === (7))){
var inst_29229 = (state_29253[(7)]);
var inst_29230 = (state_29253[(8)]);
var inst_29229__$1 = (state_29253[(2)]);
var inst_29230__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29229__$1,(0),null);
var inst_29231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29229__$1,(1),null);
var inst_29232 = (inst_29230__$1 == null);
var state_29253__$1 = (function (){var statearr_29258 = state_29253;
(statearr_29258[(7)] = inst_29229__$1);

(statearr_29258[(8)] = inst_29230__$1);

(statearr_29258[(9)] = inst_29231);

return statearr_29258;
})();
if(cljs.core.truth_(inst_29232)){
var statearr_29259_30671 = state_29253__$1;
(statearr_29259_30671[(1)] = (8));

} else {
var statearr_29261_30672 = state_29253__$1;
(statearr_29261_30672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (1))){
var inst_29219 = cljs.core.vec(chs);
var inst_29220 = inst_29219;
var state_29253__$1 = (function (){var statearr_29262 = state_29253;
(statearr_29262[(10)] = inst_29220);

return statearr_29262;
})();
var statearr_29264_30673 = state_29253__$1;
(statearr_29264_30673[(2)] = null);

(statearr_29264_30673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (4))){
var inst_29220 = (state_29253[(10)]);
var state_29253__$1 = state_29253;
return cljs.core.async.ioc_alts_BANG_(state_29253__$1,(7),inst_29220);
} else {
if((state_val_29254 === (6))){
var inst_29247 = (state_29253[(2)]);
var state_29253__$1 = state_29253;
var statearr_29269_30674 = state_29253__$1;
(statearr_29269_30674[(2)] = inst_29247);

(statearr_29269_30674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (3))){
var inst_29249 = (state_29253[(2)]);
var state_29253__$1 = state_29253;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29253__$1,inst_29249);
} else {
if((state_val_29254 === (2))){
var inst_29220 = (state_29253[(10)]);
var inst_29222 = cljs.core.count(inst_29220);
var inst_29223 = (inst_29222 > (0));
var state_29253__$1 = state_29253;
if(cljs.core.truth_(inst_29223)){
var statearr_29279_30675 = state_29253__$1;
(statearr_29279_30675[(1)] = (4));

} else {
var statearr_29280_30676 = state_29253__$1;
(statearr_29280_30676[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (11))){
var inst_29220 = (state_29253[(10)]);
var inst_29240 = (state_29253[(2)]);
var tmp29272 = inst_29220;
var inst_29220__$1 = tmp29272;
var state_29253__$1 = (function (){var statearr_29281 = state_29253;
(statearr_29281[(11)] = inst_29240);

(statearr_29281[(10)] = inst_29220__$1);

return statearr_29281;
})();
var statearr_29282_30677 = state_29253__$1;
(statearr_29282_30677[(2)] = null);

(statearr_29282_30677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (9))){
var inst_29230 = (state_29253[(8)]);
var state_29253__$1 = state_29253;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29253__$1,(11),out,inst_29230);
} else {
if((state_val_29254 === (5))){
var inst_29245 = cljs.core.async.close_BANG_(out);
var state_29253__$1 = state_29253;
var statearr_29285_30678 = state_29253__$1;
(statearr_29285_30678[(2)] = inst_29245);

(statearr_29285_30678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (10))){
var inst_29243 = (state_29253[(2)]);
var state_29253__$1 = state_29253;
var statearr_29288_30679 = state_29253__$1;
(statearr_29288_30679[(2)] = inst_29243);

(statearr_29288_30679[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (8))){
var inst_29220 = (state_29253[(10)]);
var inst_29229 = (state_29253[(7)]);
var inst_29230 = (state_29253[(8)]);
var inst_29231 = (state_29253[(9)]);
var inst_29235 = (function (){var cs = inst_29220;
var vec__29225 = inst_29229;
var v = inst_29230;
var c = inst_29231;
return (function (p1__29212_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__29212_SHARP_);
});
})();
var inst_29236 = cljs.core.filterv(inst_29235,inst_29220);
var inst_29220__$1 = inst_29236;
var state_29253__$1 = (function (){var statearr_29293 = state_29253;
(statearr_29293[(10)] = inst_29220__$1);

return statearr_29293;
})();
var statearr_29294_30680 = state_29253__$1;
(statearr_29294_30680[(2)] = null);

(statearr_29294_30680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27051__auto__ = null;
var cljs$core$async$state_machine__27051__auto____0 = (function (){
var statearr_29296 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29296[(0)] = cljs$core$async$state_machine__27051__auto__);

(statearr_29296[(1)] = (1));

return statearr_29296;
});
var cljs$core$async$state_machine__27051__auto____1 = (function (state_29253){
while(true){
var ret_value__27052__auto__ = (function (){try{while(true){
var result__27053__auto__ = switch__27050__auto__(state_29253);
if(cljs.core.keyword_identical_QMARK_(result__27053__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27053__auto__;
}
break;
}
}catch (e29299){var ex__27054__auto__ = e29299;
var statearr_29300_30681 = state_29253;
(statearr_29300_30681[(2)] = ex__27054__auto__);


if(cljs.core.seq((state_29253[(4)]))){
var statearr_29301_30682 = state_29253;
(statearr_29301_30682[(1)] = cljs.core.first((state_29253[(4)])));

} else {
throw ex__27054__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30683 = state_29253;
state_29253 = G__30683;
continue;
} else {
return ret_value__27052__auto__;
}
break;
}
});
cljs$core$async$state_machine__27051__auto__ = function(state_29253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27051__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27051__auto____1.call(this,state_29253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27051__auto____0;
cljs$core$async$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27051__auto____1;
return cljs$core$async$state_machine__27051__auto__;
})()
})();
var state__27247__auto__ = (function (){var statearr_29303 = f__27246__auto__();
(statearr_29303[(6)] = c__27245__auto___30668);

return statearr_29303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27247__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29306 = arguments.length;
switch (G__29306) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27245__auto___30688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27246__auto__ = (function (){var switch__27050__auto__ = (function (state_29336){
var state_val_29337 = (state_29336[(1)]);
if((state_val_29337 === (7))){
var inst_29317 = (state_29336[(7)]);
var inst_29317__$1 = (state_29336[(2)]);
var inst_29318 = (inst_29317__$1 == null);
var inst_29319 = cljs.core.not(inst_29318);
var state_29336__$1 = (function (){var statearr_29342 = state_29336;
(statearr_29342[(7)] = inst_29317__$1);

return statearr_29342;
})();
if(inst_29319){
var statearr_29343_30690 = state_29336__$1;
(statearr_29343_30690[(1)] = (8));

} else {
var statearr_29344_30691 = state_29336__$1;
(statearr_29344_30691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29337 === (1))){
var inst_29312 = (0);
var state_29336__$1 = (function (){var statearr_29345 = state_29336;
(statearr_29345[(8)] = inst_29312);

return statearr_29345;
})();
var statearr_29346_30692 = state_29336__$1;
(statearr_29346_30692[(2)] = null);

(statearr_29346_30692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29337 === (4))){
var state_29336__$1 = state_29336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29336__$1,(7),ch);
} else {
if((state_val_29337 === (6))){
var inst_29331 = (state_29336[(2)]);
var state_29336__$1 = state_29336;
var statearr_29347_30693 = state_29336__$1;
(statearr_29347_30693[(2)] = inst_29331);

(statearr_29347_30693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29337 === (3))){
var inst_29333 = (state_29336[(2)]);
var inst_29334 = cljs.core.async.close_BANG_(out);
var state_29336__$1 = (function (){var statearr_29348 = state_29336;
(statearr_29348[(9)] = inst_29333);

return statearr_29348;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29336__$1,inst_29334);
} else {
if((state_val_29337 === (2))){
var inst_29312 = (state_29336[(8)]);
var inst_29314 = (inst_29312 < n);
var state_29336__$1 = state_29336;
if(cljs.core.truth_(inst_29314)){
var statearr_29349_30694 = state_29336__$1;
(statearr_29349_30694[(1)] = (4));

} else {
var statearr_29350_30695 = state_29336__$1;
(statearr_29350_30695[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29337 === (11))){
var inst_29312 = (state_29336[(8)]);
var inst_29322 = (state_29336[(2)]);
var inst_29324 = (inst_29312 + (1));
var inst_29312__$1 = inst_29324;
var state_29336__$1 = (function (){var statearr_29351 = state_29336;
(statearr_29351[(10)] = inst_29322);

(statearr_29351[(8)] = inst_29312__$1);

return statearr_29351;
})();
var statearr_29352_30696 = state_29336__$1;
(statearr_29352_30696[(2)] = null);

(statearr_29352_30696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29337 === (9))){
var state_29336__$1 = state_29336;
var statearr_29353_30697 = state_29336__$1;
(statearr_29353_30697[(2)] = null);

(statearr_29353_30697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29337 === (5))){
var state_29336__$1 = state_29336;
var statearr_29354_30698 = state_29336__$1;
(statearr_29354_30698[(2)] = null);

(statearr_29354_30698[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29337 === (10))){
var inst_29328 = (state_29336[(2)]);
var state_29336__$1 = state_29336;
var statearr_29355_30699 = state_29336__$1;
(statearr_29355_30699[(2)] = inst_29328);

(statearr_29355_30699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29337 === (8))){
var inst_29317 = (state_29336[(7)]);
var state_29336__$1 = state_29336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29336__$1,(11),out,inst_29317);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27051__auto__ = null;
var cljs$core$async$state_machine__27051__auto____0 = (function (){
var statearr_29356 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29356[(0)] = cljs$core$async$state_machine__27051__auto__);

(statearr_29356[(1)] = (1));

return statearr_29356;
});
var cljs$core$async$state_machine__27051__auto____1 = (function (state_29336){
while(true){
var ret_value__27052__auto__ = (function (){try{while(true){
var result__27053__auto__ = switch__27050__auto__(state_29336);
if(cljs.core.keyword_identical_QMARK_(result__27053__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27053__auto__;
}
break;
}
}catch (e29357){var ex__27054__auto__ = e29357;
var statearr_29358_30700 = state_29336;
(statearr_29358_30700[(2)] = ex__27054__auto__);


if(cljs.core.seq((state_29336[(4)]))){
var statearr_29359_30701 = state_29336;
(statearr_29359_30701[(1)] = cljs.core.first((state_29336[(4)])));

} else {
throw ex__27054__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30703 = state_29336;
state_29336 = G__30703;
continue;
} else {
return ret_value__27052__auto__;
}
break;
}
});
cljs$core$async$state_machine__27051__auto__ = function(state_29336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27051__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27051__auto____1.call(this,state_29336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27051__auto____0;
cljs$core$async$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27051__auto____1;
return cljs$core$async$state_machine__27051__auto__;
})()
})();
var state__27247__auto__ = (function (){var statearr_29360 = f__27246__auto__();
(statearr_29360[(6)] = c__27245__auto___30688);

return statearr_29360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27247__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29362 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29362 = (function (f,ch,meta29363){
this.f = f;
this.ch = ch;
this.meta29363 = meta29363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29364,meta29363__$1){
var self__ = this;
var _29364__$1 = this;
return (new cljs.core.async.t_cljs$core$async29362(self__.f,self__.ch,meta29363__$1));
}));

(cljs.core.async.t_cljs$core$async29362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29364){
var self__ = this;
var _29364__$1 = this;
return self__.meta29363;
}));

(cljs.core.async.t_cljs$core$async29362.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29362.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29362.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29362.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29362.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29365 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29365 = (function (f,ch,meta29363,_,fn1,meta29366){
this.f = f;
this.ch = ch;
this.meta29363 = meta29363;
this._ = _;
this.fn1 = fn1;
this.meta29366 = meta29366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29367,meta29366__$1){
var self__ = this;
var _29367__$1 = this;
return (new cljs.core.async.t_cljs$core$async29365(self__.f,self__.ch,self__.meta29363,self__._,self__.fn1,meta29366__$1));
}));

(cljs.core.async.t_cljs$core$async29365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29367){
var self__ = this;
var _29367__$1 = this;
return self__.meta29366;
}));

(cljs.core.async.t_cljs$core$async29365.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29365.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async29365.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29365.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__29361_SHARP_){
var G__29368 = (((p1__29361_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__29361_SHARP_) : self__.f.call(null,p1__29361_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__29368) : f1.call(null,G__29368));
});
}));

(cljs.core.async.t_cljs$core$async29365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29363","meta29363",2043624207,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29362","cljs.core.async/t_cljs$core$async29362",562911858,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29366","meta29366",-1887453757,null)], null);
}));

(cljs.core.async.t_cljs$core$async29365.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29365");

(cljs.core.async.t_cljs$core$async29365.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29365");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29365.
 */
cljs.core.async.__GT_t_cljs$core$async29365 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29365(f__$1,ch__$1,meta29363__$1,___$2,fn1__$1,meta29366){
return (new cljs.core.async.t_cljs$core$async29365(f__$1,ch__$1,meta29363__$1,___$2,fn1__$1,meta29366));
});

}

return (new cljs.core.async.t_cljs$core$async29365(self__.f,self__.ch,self__.meta29363,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__29369 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__29369) : self__.f.call(null,G__29369));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async29362.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29362.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async29362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29363","meta29363",2043624207,null)], null);
}));

(cljs.core.async.t_cljs$core$async29362.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29362");

(cljs.core.async.t_cljs$core$async29362.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29362");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29362.
 */
cljs.core.async.__GT_t_cljs$core$async29362 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29362(f__$1,ch__$1,meta29363){
return (new cljs.core.async.t_cljs$core$async29362(f__$1,ch__$1,meta29363));
});

}

return (new cljs.core.async.t_cljs$core$async29362(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29370 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29370 = (function (f,ch,meta29371){
this.f = f;
this.ch = ch;
this.meta29371 = meta29371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29372,meta29371__$1){
var self__ = this;
var _29372__$1 = this;
return (new cljs.core.async.t_cljs$core$async29370(self__.f,self__.ch,meta29371__$1));
}));

(cljs.core.async.t_cljs$core$async29370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29372){
var self__ = this;
var _29372__$1 = this;
return self__.meta29371;
}));

(cljs.core.async.t_cljs$core$async29370.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29370.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29370.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29370.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29370.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29370.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async29370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29371","meta29371",581254478,null)], null);
}));

(cljs.core.async.t_cljs$core$async29370.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29370");

(cljs.core.async.t_cljs$core$async29370.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29370");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29370.
 */
cljs.core.async.__GT_t_cljs$core$async29370 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29370(f__$1,ch__$1,meta29371){
return (new cljs.core.async.t_cljs$core$async29370(f__$1,ch__$1,meta29371));
});

}

return (new cljs.core.async.t_cljs$core$async29370(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29373 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29373 = (function (p,ch,meta29374){
this.p = p;
this.ch = ch;
this.meta29374 = meta29374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29375,meta29374__$1){
var self__ = this;
var _29375__$1 = this;
return (new cljs.core.async.t_cljs$core$async29373(self__.p,self__.ch,meta29374__$1));
}));

(cljs.core.async.t_cljs$core$async29373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29375){
var self__ = this;
var _29375__$1 = this;
return self__.meta29374;
}));

(cljs.core.async.t_cljs$core$async29373.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29373.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29373.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29373.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29373.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29373.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29373.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async29373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29374","meta29374",82112118,null)], null);
}));

(cljs.core.async.t_cljs$core$async29373.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29373");

(cljs.core.async.t_cljs$core$async29373.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29373");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29373.
 */
cljs.core.async.__GT_t_cljs$core$async29373 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29373(p__$1,ch__$1,meta29374){
return (new cljs.core.async.t_cljs$core$async29373(p__$1,ch__$1,meta29374));
});

}

return (new cljs.core.async.t_cljs$core$async29373(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__29377 = arguments.length;
switch (G__29377) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27245__auto___30735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27246__auto__ = (function (){var switch__27050__auto__ = (function (state_29398){
var state_val_29399 = (state_29398[(1)]);
if((state_val_29399 === (7))){
var inst_29394 = (state_29398[(2)]);
var state_29398__$1 = state_29398;
var statearr_29400_30740 = state_29398__$1;
(statearr_29400_30740[(2)] = inst_29394);

(statearr_29400_30740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (1))){
var state_29398__$1 = state_29398;
var statearr_29401_30741 = state_29398__$1;
(statearr_29401_30741[(2)] = null);

(statearr_29401_30741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (4))){
var inst_29380 = (state_29398[(7)]);
var inst_29380__$1 = (state_29398[(2)]);
var inst_29381 = (inst_29380__$1 == null);
var state_29398__$1 = (function (){var statearr_29402 = state_29398;
(statearr_29402[(7)] = inst_29380__$1);

return statearr_29402;
})();
if(cljs.core.truth_(inst_29381)){
var statearr_29403_30745 = state_29398__$1;
(statearr_29403_30745[(1)] = (5));

} else {
var statearr_29404_30746 = state_29398__$1;
(statearr_29404_30746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (6))){
var inst_29380 = (state_29398[(7)]);
var inst_29385 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29380) : p.call(null,inst_29380));
var state_29398__$1 = state_29398;
if(cljs.core.truth_(inst_29385)){
var statearr_29405_30747 = state_29398__$1;
(statearr_29405_30747[(1)] = (8));

} else {
var statearr_29406_30748 = state_29398__$1;
(statearr_29406_30748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (3))){
var inst_29396 = (state_29398[(2)]);
var state_29398__$1 = state_29398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29398__$1,inst_29396);
} else {
if((state_val_29399 === (2))){
var state_29398__$1 = state_29398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29398__$1,(4),ch);
} else {
if((state_val_29399 === (11))){
var inst_29388 = (state_29398[(2)]);
var state_29398__$1 = state_29398;
var statearr_29407_30753 = state_29398__$1;
(statearr_29407_30753[(2)] = inst_29388);

(statearr_29407_30753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (9))){
var state_29398__$1 = state_29398;
var statearr_29408_30755 = state_29398__$1;
(statearr_29408_30755[(2)] = null);

(statearr_29408_30755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (5))){
var inst_29383 = cljs.core.async.close_BANG_(out);
var state_29398__$1 = state_29398;
var statearr_29409_30759 = state_29398__$1;
(statearr_29409_30759[(2)] = inst_29383);

(statearr_29409_30759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (10))){
var inst_29391 = (state_29398[(2)]);
var state_29398__$1 = (function (){var statearr_29410 = state_29398;
(statearr_29410[(8)] = inst_29391);

return statearr_29410;
})();
var statearr_29411_30761 = state_29398__$1;
(statearr_29411_30761[(2)] = null);

(statearr_29411_30761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (8))){
var inst_29380 = (state_29398[(7)]);
var state_29398__$1 = state_29398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29398__$1,(11),out,inst_29380);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27051__auto__ = null;
var cljs$core$async$state_machine__27051__auto____0 = (function (){
var statearr_29412 = [null,null,null,null,null,null,null,null,null];
(statearr_29412[(0)] = cljs$core$async$state_machine__27051__auto__);

(statearr_29412[(1)] = (1));

return statearr_29412;
});
var cljs$core$async$state_machine__27051__auto____1 = (function (state_29398){
while(true){
var ret_value__27052__auto__ = (function (){try{while(true){
var result__27053__auto__ = switch__27050__auto__(state_29398);
if(cljs.core.keyword_identical_QMARK_(result__27053__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27053__auto__;
}
break;
}
}catch (e29413){var ex__27054__auto__ = e29413;
var statearr_29414_30763 = state_29398;
(statearr_29414_30763[(2)] = ex__27054__auto__);


if(cljs.core.seq((state_29398[(4)]))){
var statearr_29415_30765 = state_29398;
(statearr_29415_30765[(1)] = cljs.core.first((state_29398[(4)])));

} else {
throw ex__27054__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30767 = state_29398;
state_29398 = G__30767;
continue;
} else {
return ret_value__27052__auto__;
}
break;
}
});
cljs$core$async$state_machine__27051__auto__ = function(state_29398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27051__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27051__auto____1.call(this,state_29398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27051__auto____0;
cljs$core$async$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27051__auto____1;
return cljs$core$async$state_machine__27051__auto__;
})()
})();
var state__27247__auto__ = (function (){var statearr_29416 = f__27246__auto__();
(statearr_29416[(6)] = c__27245__auto___30735);

return statearr_29416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27247__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29418 = arguments.length;
switch (G__29418) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27246__auto__ = (function (){var switch__27050__auto__ = (function (state_29480){
var state_val_29481 = (state_29480[(1)]);
if((state_val_29481 === (7))){
var inst_29476 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29482_30775 = state_29480__$1;
(statearr_29482_30775[(2)] = inst_29476);

(statearr_29482_30775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (20))){
var inst_29446 = (state_29480[(7)]);
var inst_29457 = (state_29480[(2)]);
var inst_29458 = cljs.core.next(inst_29446);
var inst_29432 = inst_29458;
var inst_29433 = null;
var inst_29434 = (0);
var inst_29435 = (0);
var state_29480__$1 = (function (){var statearr_29483 = state_29480;
(statearr_29483[(8)] = inst_29457);

(statearr_29483[(9)] = inst_29432);

(statearr_29483[(10)] = inst_29433);

(statearr_29483[(11)] = inst_29434);

(statearr_29483[(12)] = inst_29435);

return statearr_29483;
})();
var statearr_29484_30778 = state_29480__$1;
(statearr_29484_30778[(2)] = null);

(statearr_29484_30778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (1))){
var state_29480__$1 = state_29480;
var statearr_29487_30779 = state_29480__$1;
(statearr_29487_30779[(2)] = null);

(statearr_29487_30779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (4))){
var inst_29421 = (state_29480[(13)]);
var inst_29421__$1 = (state_29480[(2)]);
var inst_29422 = (inst_29421__$1 == null);
var state_29480__$1 = (function (){var statearr_29488 = state_29480;
(statearr_29488[(13)] = inst_29421__$1);

return statearr_29488;
})();
if(cljs.core.truth_(inst_29422)){
var statearr_29489_30780 = state_29480__$1;
(statearr_29489_30780[(1)] = (5));

} else {
var statearr_29492_30781 = state_29480__$1;
(statearr_29492_30781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (15))){
var state_29480__$1 = state_29480;
var statearr_29497_30783 = state_29480__$1;
(statearr_29497_30783[(2)] = null);

(statearr_29497_30783[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (21))){
var state_29480__$1 = state_29480;
var statearr_29499_30784 = state_29480__$1;
(statearr_29499_30784[(2)] = null);

(statearr_29499_30784[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (13))){
var inst_29435 = (state_29480[(12)]);
var inst_29432 = (state_29480[(9)]);
var inst_29433 = (state_29480[(10)]);
var inst_29434 = (state_29480[(11)]);
var inst_29442 = (state_29480[(2)]);
var inst_29443 = (inst_29435 + (1));
var tmp29493 = inst_29433;
var tmp29494 = inst_29432;
var tmp29495 = inst_29434;
var inst_29432__$1 = tmp29494;
var inst_29433__$1 = tmp29493;
var inst_29434__$1 = tmp29495;
var inst_29435__$1 = inst_29443;
var state_29480__$1 = (function (){var statearr_29502 = state_29480;
(statearr_29502[(14)] = inst_29442);

(statearr_29502[(9)] = inst_29432__$1);

(statearr_29502[(10)] = inst_29433__$1);

(statearr_29502[(11)] = inst_29434__$1);

(statearr_29502[(12)] = inst_29435__$1);

return statearr_29502;
})();
var statearr_29503_30785 = state_29480__$1;
(statearr_29503_30785[(2)] = null);

(statearr_29503_30785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (22))){
var state_29480__$1 = state_29480;
var statearr_29504_30788 = state_29480__$1;
(statearr_29504_30788[(2)] = null);

(statearr_29504_30788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (6))){
var inst_29421 = (state_29480[(13)]);
var inst_29430 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29421) : f.call(null,inst_29421));
var inst_29431 = cljs.core.seq(inst_29430);
var inst_29432 = inst_29431;
var inst_29433 = null;
var inst_29434 = (0);
var inst_29435 = (0);
var state_29480__$1 = (function (){var statearr_29505 = state_29480;
(statearr_29505[(9)] = inst_29432);

(statearr_29505[(10)] = inst_29433);

(statearr_29505[(11)] = inst_29434);

(statearr_29505[(12)] = inst_29435);

return statearr_29505;
})();
var statearr_29507_30789 = state_29480__$1;
(statearr_29507_30789[(2)] = null);

(statearr_29507_30789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (17))){
var inst_29446 = (state_29480[(7)]);
var inst_29450 = cljs.core.chunk_first(inst_29446);
var inst_29451 = cljs.core.chunk_rest(inst_29446);
var inst_29452 = cljs.core.count(inst_29450);
var inst_29432 = inst_29451;
var inst_29433 = inst_29450;
var inst_29434 = inst_29452;
var inst_29435 = (0);
var state_29480__$1 = (function (){var statearr_29511 = state_29480;
(statearr_29511[(9)] = inst_29432);

(statearr_29511[(10)] = inst_29433);

(statearr_29511[(11)] = inst_29434);

(statearr_29511[(12)] = inst_29435);

return statearr_29511;
})();
var statearr_29512_30792 = state_29480__$1;
(statearr_29512_30792[(2)] = null);

(statearr_29512_30792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (3))){
var inst_29478 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29480__$1,inst_29478);
} else {
if((state_val_29481 === (12))){
var inst_29466 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29515_30793 = state_29480__$1;
(statearr_29515_30793[(2)] = inst_29466);

(statearr_29515_30793[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (2))){
var state_29480__$1 = state_29480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29480__$1,(4),in$);
} else {
if((state_val_29481 === (23))){
var inst_29474 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29516_30794 = state_29480__$1;
(statearr_29516_30794[(2)] = inst_29474);

(statearr_29516_30794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (19))){
var inst_29461 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29517_30795 = state_29480__$1;
(statearr_29517_30795[(2)] = inst_29461);

(statearr_29517_30795[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (11))){
var inst_29432 = (state_29480[(9)]);
var inst_29446 = (state_29480[(7)]);
var inst_29446__$1 = cljs.core.seq(inst_29432);
var state_29480__$1 = (function (){var statearr_29518 = state_29480;
(statearr_29518[(7)] = inst_29446__$1);

return statearr_29518;
})();
if(inst_29446__$1){
var statearr_29522_30796 = state_29480__$1;
(statearr_29522_30796[(1)] = (14));

} else {
var statearr_29524_30797 = state_29480__$1;
(statearr_29524_30797[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (9))){
var inst_29468 = (state_29480[(2)]);
var inst_29469 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_29480__$1 = (function (){var statearr_29526 = state_29480;
(statearr_29526[(15)] = inst_29468);

return statearr_29526;
})();
if(cljs.core.truth_(inst_29469)){
var statearr_29527_30798 = state_29480__$1;
(statearr_29527_30798[(1)] = (21));

} else {
var statearr_29528_30799 = state_29480__$1;
(statearr_29528_30799[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (5))){
var inst_29424 = cljs.core.async.close_BANG_(out);
var state_29480__$1 = state_29480;
var statearr_29530_30800 = state_29480__$1;
(statearr_29530_30800[(2)] = inst_29424);

(statearr_29530_30800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (14))){
var inst_29446 = (state_29480[(7)]);
var inst_29448 = cljs.core.chunked_seq_QMARK_(inst_29446);
var state_29480__$1 = state_29480;
if(inst_29448){
var statearr_29531_30801 = state_29480__$1;
(statearr_29531_30801[(1)] = (17));

} else {
var statearr_29532_30802 = state_29480__$1;
(statearr_29532_30802[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (16))){
var inst_29464 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29537_30803 = state_29480__$1;
(statearr_29537_30803[(2)] = inst_29464);

(statearr_29537_30803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (10))){
var inst_29433 = (state_29480[(10)]);
var inst_29435 = (state_29480[(12)]);
var inst_29440 = cljs.core._nth(inst_29433,inst_29435);
var state_29480__$1 = state_29480;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29480__$1,(13),out,inst_29440);
} else {
if((state_val_29481 === (18))){
var inst_29446 = (state_29480[(7)]);
var inst_29455 = cljs.core.first(inst_29446);
var state_29480__$1 = state_29480;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29480__$1,(20),out,inst_29455);
} else {
if((state_val_29481 === (8))){
var inst_29435 = (state_29480[(12)]);
var inst_29434 = (state_29480[(11)]);
var inst_29437 = (inst_29435 < inst_29434);
var inst_29438 = inst_29437;
var state_29480__$1 = state_29480;
if(cljs.core.truth_(inst_29438)){
var statearr_29540_30804 = state_29480__$1;
(statearr_29540_30804[(1)] = (10));

} else {
var statearr_29542_30805 = state_29480__$1;
(statearr_29542_30805[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27051__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27051__auto____0 = (function (){
var statearr_29546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29546[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27051__auto__);

(statearr_29546[(1)] = (1));

return statearr_29546;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27051__auto____1 = (function (state_29480){
while(true){
var ret_value__27052__auto__ = (function (){try{while(true){
var result__27053__auto__ = switch__27050__auto__(state_29480);
if(cljs.core.keyword_identical_QMARK_(result__27053__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27053__auto__;
}
break;
}
}catch (e29552){var ex__27054__auto__ = e29552;
var statearr_29553_30811 = state_29480;
(statearr_29553_30811[(2)] = ex__27054__auto__);


if(cljs.core.seq((state_29480[(4)]))){
var statearr_29554_30812 = state_29480;
(statearr_29554_30812[(1)] = cljs.core.first((state_29480[(4)])));

} else {
throw ex__27054__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30813 = state_29480;
state_29480 = G__30813;
continue;
} else {
return ret_value__27052__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27051__auto__ = function(state_29480){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27051__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27051__auto____1.call(this,state_29480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27051__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27051__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27051__auto__;
})()
})();
var state__27247__auto__ = (function (){var statearr_29559 = f__27246__auto__();
(statearr_29559[(6)] = c__27245__auto__);

return statearr_29559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27247__auto__);
}));

return c__27245__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29564 = arguments.length;
switch (G__29564) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29572 = arguments.length;
switch (G__29572) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29585 = arguments.length;
switch (G__29585) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27245__auto___30824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27246__auto__ = (function (){var switch__27050__auto__ = (function (state_29609){
var state_val_29610 = (state_29609[(1)]);
if((state_val_29610 === (7))){
var inst_29604 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
var statearr_29612_30828 = state_29609__$1;
(statearr_29612_30828[(2)] = inst_29604);

(statearr_29612_30828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (1))){
var inst_29586 = null;
var state_29609__$1 = (function (){var statearr_29615 = state_29609;
(statearr_29615[(7)] = inst_29586);

return statearr_29615;
})();
var statearr_29616_30833 = state_29609__$1;
(statearr_29616_30833[(2)] = null);

(statearr_29616_30833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (4))){
var inst_29589 = (state_29609[(8)]);
var inst_29589__$1 = (state_29609[(2)]);
var inst_29590 = (inst_29589__$1 == null);
var inst_29591 = cljs.core.not(inst_29590);
var state_29609__$1 = (function (){var statearr_29622 = state_29609;
(statearr_29622[(8)] = inst_29589__$1);

return statearr_29622;
})();
if(inst_29591){
var statearr_29624_30839 = state_29609__$1;
(statearr_29624_30839[(1)] = (5));

} else {
var statearr_29625_30841 = state_29609__$1;
(statearr_29625_30841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (6))){
var state_29609__$1 = state_29609;
var statearr_29631_30842 = state_29609__$1;
(statearr_29631_30842[(2)] = null);

(statearr_29631_30842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (3))){
var inst_29606 = (state_29609[(2)]);
var inst_29607 = cljs.core.async.close_BANG_(out);
var state_29609__$1 = (function (){var statearr_29639 = state_29609;
(statearr_29639[(9)] = inst_29606);

return statearr_29639;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29609__$1,inst_29607);
} else {
if((state_val_29610 === (2))){
var state_29609__$1 = state_29609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29609__$1,(4),ch);
} else {
if((state_val_29610 === (11))){
var inst_29589 = (state_29609[(8)]);
var inst_29598 = (state_29609[(2)]);
var inst_29586 = inst_29589;
var state_29609__$1 = (function (){var statearr_29648 = state_29609;
(statearr_29648[(10)] = inst_29598);

(statearr_29648[(7)] = inst_29586);

return statearr_29648;
})();
var statearr_29649_30843 = state_29609__$1;
(statearr_29649_30843[(2)] = null);

(statearr_29649_30843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (9))){
var inst_29589 = (state_29609[(8)]);
var state_29609__$1 = state_29609;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29609__$1,(11),out,inst_29589);
} else {
if((state_val_29610 === (5))){
var inst_29589 = (state_29609[(8)]);
var inst_29586 = (state_29609[(7)]);
var inst_29593 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29589,inst_29586);
var state_29609__$1 = state_29609;
if(inst_29593){
var statearr_29655_30844 = state_29609__$1;
(statearr_29655_30844[(1)] = (8));

} else {
var statearr_29656_30845 = state_29609__$1;
(statearr_29656_30845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (10))){
var inst_29601 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
var statearr_29660_30846 = state_29609__$1;
(statearr_29660_30846[(2)] = inst_29601);

(statearr_29660_30846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (8))){
var inst_29586 = (state_29609[(7)]);
var tmp29652 = inst_29586;
var inst_29586__$1 = tmp29652;
var state_29609__$1 = (function (){var statearr_29662 = state_29609;
(statearr_29662[(7)] = inst_29586__$1);

return statearr_29662;
})();
var statearr_29663_30849 = state_29609__$1;
(statearr_29663_30849[(2)] = null);

(statearr_29663_30849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27051__auto__ = null;
var cljs$core$async$state_machine__27051__auto____0 = (function (){
var statearr_29669 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29669[(0)] = cljs$core$async$state_machine__27051__auto__);

(statearr_29669[(1)] = (1));

return statearr_29669;
});
var cljs$core$async$state_machine__27051__auto____1 = (function (state_29609){
while(true){
var ret_value__27052__auto__ = (function (){try{while(true){
var result__27053__auto__ = switch__27050__auto__(state_29609);
if(cljs.core.keyword_identical_QMARK_(result__27053__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27053__auto__;
}
break;
}
}catch (e29671){var ex__27054__auto__ = e29671;
var statearr_29672_30853 = state_29609;
(statearr_29672_30853[(2)] = ex__27054__auto__);


if(cljs.core.seq((state_29609[(4)]))){
var statearr_29673_30854 = state_29609;
(statearr_29673_30854[(1)] = cljs.core.first((state_29609[(4)])));

} else {
throw ex__27054__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30855 = state_29609;
state_29609 = G__30855;
continue;
} else {
return ret_value__27052__auto__;
}
break;
}
});
cljs$core$async$state_machine__27051__auto__ = function(state_29609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27051__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27051__auto____1.call(this,state_29609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27051__auto____0;
cljs$core$async$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27051__auto____1;
return cljs$core$async$state_machine__27051__auto__;
})()
})();
var state__27247__auto__ = (function (){var statearr_29678 = f__27246__auto__();
(statearr_29678[(6)] = c__27245__auto___30824);

return statearr_29678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27247__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29688 = arguments.length;
switch (G__29688) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27245__auto___30857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27246__auto__ = (function (){var switch__27050__auto__ = (function (state_29739){
var state_val_29741 = (state_29739[(1)]);
if((state_val_29741 === (7))){
var inst_29734 = (state_29739[(2)]);
var state_29739__$1 = state_29739;
var statearr_29751_30859 = state_29739__$1;
(statearr_29751_30859[(2)] = inst_29734);

(statearr_29751_30859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (1))){
var inst_29696 = (new Array(n));
var inst_29698 = inst_29696;
var inst_29699 = (0);
var state_29739__$1 = (function (){var statearr_29755 = state_29739;
(statearr_29755[(7)] = inst_29698);

(statearr_29755[(8)] = inst_29699);

return statearr_29755;
})();
var statearr_29757_30860 = state_29739__$1;
(statearr_29757_30860[(2)] = null);

(statearr_29757_30860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (4))){
var inst_29702 = (state_29739[(9)]);
var inst_29702__$1 = (state_29739[(2)]);
var inst_29703 = (inst_29702__$1 == null);
var inst_29704 = cljs.core.not(inst_29703);
var state_29739__$1 = (function (){var statearr_29761 = state_29739;
(statearr_29761[(9)] = inst_29702__$1);

return statearr_29761;
})();
if(inst_29704){
var statearr_29762_30861 = state_29739__$1;
(statearr_29762_30861[(1)] = (5));

} else {
var statearr_29763_30862 = state_29739__$1;
(statearr_29763_30862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (15))){
var inst_29728 = (state_29739[(2)]);
var state_29739__$1 = state_29739;
var statearr_29765_30863 = state_29739__$1;
(statearr_29765_30863[(2)] = inst_29728);

(statearr_29765_30863[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (13))){
var state_29739__$1 = state_29739;
var statearr_29770_30868 = state_29739__$1;
(statearr_29770_30868[(2)] = null);

(statearr_29770_30868[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (6))){
var inst_29699 = (state_29739[(8)]);
var inst_29723 = (inst_29699 > (0));
var state_29739__$1 = state_29739;
if(cljs.core.truth_(inst_29723)){
var statearr_29772_30869 = state_29739__$1;
(statearr_29772_30869[(1)] = (12));

} else {
var statearr_29775_30870 = state_29739__$1;
(statearr_29775_30870[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (3))){
var inst_29736 = (state_29739[(2)]);
var state_29739__$1 = state_29739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29739__$1,inst_29736);
} else {
if((state_val_29741 === (12))){
var inst_29698 = (state_29739[(7)]);
var inst_29725 = cljs.core.vec(inst_29698);
var state_29739__$1 = state_29739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29739__$1,(15),out,inst_29725);
} else {
if((state_val_29741 === (2))){
var state_29739__$1 = state_29739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29739__$1,(4),ch);
} else {
if((state_val_29741 === (11))){
var inst_29716 = (state_29739[(2)]);
var inst_29717 = (new Array(n));
var inst_29698 = inst_29717;
var inst_29699 = (0);
var state_29739__$1 = (function (){var statearr_29780 = state_29739;
(statearr_29780[(10)] = inst_29716);

(statearr_29780[(7)] = inst_29698);

(statearr_29780[(8)] = inst_29699);

return statearr_29780;
})();
var statearr_29781_30871 = state_29739__$1;
(statearr_29781_30871[(2)] = null);

(statearr_29781_30871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (9))){
var inst_29698 = (state_29739[(7)]);
var inst_29714 = cljs.core.vec(inst_29698);
var state_29739__$1 = state_29739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29739__$1,(11),out,inst_29714);
} else {
if((state_val_29741 === (5))){
var inst_29698 = (state_29739[(7)]);
var inst_29699 = (state_29739[(8)]);
var inst_29702 = (state_29739[(9)]);
var inst_29707 = (state_29739[(11)]);
var inst_29706 = (inst_29698[inst_29699] = inst_29702);
var inst_29707__$1 = (inst_29699 + (1));
var inst_29710 = (inst_29707__$1 < n);
var state_29739__$1 = (function (){var statearr_29784 = state_29739;
(statearr_29784[(12)] = inst_29706);

(statearr_29784[(11)] = inst_29707__$1);

return statearr_29784;
})();
if(cljs.core.truth_(inst_29710)){
var statearr_29785_30872 = state_29739__$1;
(statearr_29785_30872[(1)] = (8));

} else {
var statearr_29789_30873 = state_29739__$1;
(statearr_29789_30873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (14))){
var inst_29731 = (state_29739[(2)]);
var inst_29732 = cljs.core.async.close_BANG_(out);
var state_29739__$1 = (function (){var statearr_29794 = state_29739;
(statearr_29794[(13)] = inst_29731);

return statearr_29794;
})();
var statearr_29795_30874 = state_29739__$1;
(statearr_29795_30874[(2)] = inst_29732);

(statearr_29795_30874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (10))){
var inst_29720 = (state_29739[(2)]);
var state_29739__$1 = state_29739;
var statearr_29796_30875 = state_29739__$1;
(statearr_29796_30875[(2)] = inst_29720);

(statearr_29796_30875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (8))){
var inst_29698 = (state_29739[(7)]);
var inst_29707 = (state_29739[(11)]);
var tmp29792 = inst_29698;
var inst_29698__$1 = tmp29792;
var inst_29699 = inst_29707;
var state_29739__$1 = (function (){var statearr_29800 = state_29739;
(statearr_29800[(7)] = inst_29698__$1);

(statearr_29800[(8)] = inst_29699);

return statearr_29800;
})();
var statearr_29801_30876 = state_29739__$1;
(statearr_29801_30876[(2)] = null);

(statearr_29801_30876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27051__auto__ = null;
var cljs$core$async$state_machine__27051__auto____0 = (function (){
var statearr_29810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29810[(0)] = cljs$core$async$state_machine__27051__auto__);

(statearr_29810[(1)] = (1));

return statearr_29810;
});
var cljs$core$async$state_machine__27051__auto____1 = (function (state_29739){
while(true){
var ret_value__27052__auto__ = (function (){try{while(true){
var result__27053__auto__ = switch__27050__auto__(state_29739);
if(cljs.core.keyword_identical_QMARK_(result__27053__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27053__auto__;
}
break;
}
}catch (e29813){var ex__27054__auto__ = e29813;
var statearr_29814_30877 = state_29739;
(statearr_29814_30877[(2)] = ex__27054__auto__);


if(cljs.core.seq((state_29739[(4)]))){
var statearr_29816_30878 = state_29739;
(statearr_29816_30878[(1)] = cljs.core.first((state_29739[(4)])));

} else {
throw ex__27054__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30879 = state_29739;
state_29739 = G__30879;
continue;
} else {
return ret_value__27052__auto__;
}
break;
}
});
cljs$core$async$state_machine__27051__auto__ = function(state_29739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27051__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27051__auto____1.call(this,state_29739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27051__auto____0;
cljs$core$async$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27051__auto____1;
return cljs$core$async$state_machine__27051__auto__;
})()
})();
var state__27247__auto__ = (function (){var statearr_29817 = f__27246__auto__();
(statearr_29817[(6)] = c__27245__auto___30857);

return statearr_29817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27247__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29831 = arguments.length;
switch (G__29831) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27245__auto___30881 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27246__auto__ = (function (){var switch__27050__auto__ = (function (state_29884){
var state_val_29885 = (state_29884[(1)]);
if((state_val_29885 === (7))){
var inst_29880 = (state_29884[(2)]);
var state_29884__$1 = state_29884;
var statearr_29887_30882 = state_29884__$1;
(statearr_29887_30882[(2)] = inst_29880);

(statearr_29887_30882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (1))){
var inst_29836 = [];
var inst_29837 = inst_29836;
var inst_29838 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29884__$1 = (function (){var statearr_29892 = state_29884;
(statearr_29892[(7)] = inst_29837);

(statearr_29892[(8)] = inst_29838);

return statearr_29892;
})();
var statearr_29894_30883 = state_29884__$1;
(statearr_29894_30883[(2)] = null);

(statearr_29894_30883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (4))){
var inst_29842 = (state_29884[(9)]);
var inst_29842__$1 = (state_29884[(2)]);
var inst_29843 = (inst_29842__$1 == null);
var inst_29844 = cljs.core.not(inst_29843);
var state_29884__$1 = (function (){var statearr_29897 = state_29884;
(statearr_29897[(9)] = inst_29842__$1);

return statearr_29897;
})();
if(inst_29844){
var statearr_29900_30884 = state_29884__$1;
(statearr_29900_30884[(1)] = (5));

} else {
var statearr_29901_30885 = state_29884__$1;
(statearr_29901_30885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (15))){
var inst_29837 = (state_29884[(7)]);
var inst_29872 = cljs.core.vec(inst_29837);
var state_29884__$1 = state_29884;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29884__$1,(18),out,inst_29872);
} else {
if((state_val_29885 === (13))){
var inst_29867 = (state_29884[(2)]);
var state_29884__$1 = state_29884;
var statearr_29905_30886 = state_29884__$1;
(statearr_29905_30886[(2)] = inst_29867);

(statearr_29905_30886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (6))){
var inst_29837 = (state_29884[(7)]);
var inst_29869 = inst_29837.length;
var inst_29870 = (inst_29869 > (0));
var state_29884__$1 = state_29884;
if(cljs.core.truth_(inst_29870)){
var statearr_29909_30889 = state_29884__$1;
(statearr_29909_30889[(1)] = (15));

} else {
var statearr_29910_30890 = state_29884__$1;
(statearr_29910_30890[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (17))){
var inst_29877 = (state_29884[(2)]);
var inst_29878 = cljs.core.async.close_BANG_(out);
var state_29884__$1 = (function (){var statearr_29912 = state_29884;
(statearr_29912[(10)] = inst_29877);

return statearr_29912;
})();
var statearr_29914_30892 = state_29884__$1;
(statearr_29914_30892[(2)] = inst_29878);

(statearr_29914_30892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (3))){
var inst_29882 = (state_29884[(2)]);
var state_29884__$1 = state_29884;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29884__$1,inst_29882);
} else {
if((state_val_29885 === (12))){
var inst_29837 = (state_29884[(7)]);
var inst_29859 = cljs.core.vec(inst_29837);
var state_29884__$1 = state_29884;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29884__$1,(14),out,inst_29859);
} else {
if((state_val_29885 === (2))){
var state_29884__$1 = state_29884;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29884__$1,(4),ch);
} else {
if((state_val_29885 === (11))){
var inst_29837 = (state_29884[(7)]);
var inst_29842 = (state_29884[(9)]);
var inst_29846 = (state_29884[(11)]);
var inst_29856 = inst_29837.push(inst_29842);
var tmp29917 = inst_29837;
var inst_29837__$1 = tmp29917;
var inst_29838 = inst_29846;
var state_29884__$1 = (function (){var statearr_29925 = state_29884;
(statearr_29925[(12)] = inst_29856);

(statearr_29925[(7)] = inst_29837__$1);

(statearr_29925[(8)] = inst_29838);

return statearr_29925;
})();
var statearr_29927_30895 = state_29884__$1;
(statearr_29927_30895[(2)] = null);

(statearr_29927_30895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (9))){
var inst_29838 = (state_29884[(8)]);
var inst_29852 = cljs.core.keyword_identical_QMARK_(inst_29838,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_29884__$1 = state_29884;
var statearr_29928_30897 = state_29884__$1;
(statearr_29928_30897[(2)] = inst_29852);

(statearr_29928_30897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (5))){
var inst_29842 = (state_29884[(9)]);
var inst_29846 = (state_29884[(11)]);
var inst_29838 = (state_29884[(8)]);
var inst_29847 = (state_29884[(13)]);
var inst_29846__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29842) : f.call(null,inst_29842));
var inst_29847__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29846__$1,inst_29838);
var state_29884__$1 = (function (){var statearr_29931 = state_29884;
(statearr_29931[(11)] = inst_29846__$1);

(statearr_29931[(13)] = inst_29847__$1);

return statearr_29931;
})();
if(inst_29847__$1){
var statearr_29932_30898 = state_29884__$1;
(statearr_29932_30898[(1)] = (8));

} else {
var statearr_29934_30899 = state_29884__$1;
(statearr_29934_30899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (14))){
var inst_29842 = (state_29884[(9)]);
var inst_29846 = (state_29884[(11)]);
var inst_29861 = (state_29884[(2)]);
var inst_29863 = [];
var inst_29864 = inst_29863.push(inst_29842);
var inst_29837 = inst_29863;
var inst_29838 = inst_29846;
var state_29884__$1 = (function (){var statearr_29936 = state_29884;
(statearr_29936[(14)] = inst_29861);

(statearr_29936[(15)] = inst_29864);

(statearr_29936[(7)] = inst_29837);

(statearr_29936[(8)] = inst_29838);

return statearr_29936;
})();
var statearr_29937_30900 = state_29884__$1;
(statearr_29937_30900[(2)] = null);

(statearr_29937_30900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (16))){
var state_29884__$1 = state_29884;
var statearr_29944_30901 = state_29884__$1;
(statearr_29944_30901[(2)] = null);

(statearr_29944_30901[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (10))){
var inst_29854 = (state_29884[(2)]);
var state_29884__$1 = state_29884;
if(cljs.core.truth_(inst_29854)){
var statearr_29945_30903 = state_29884__$1;
(statearr_29945_30903[(1)] = (11));

} else {
var statearr_29947_30904 = state_29884__$1;
(statearr_29947_30904[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (18))){
var inst_29874 = (state_29884[(2)]);
var state_29884__$1 = state_29884;
var statearr_29948_30906 = state_29884__$1;
(statearr_29948_30906[(2)] = inst_29874);

(statearr_29948_30906[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (8))){
var inst_29847 = (state_29884[(13)]);
var state_29884__$1 = state_29884;
var statearr_29949_30907 = state_29884__$1;
(statearr_29949_30907[(2)] = inst_29847);

(statearr_29949_30907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27051__auto__ = null;
var cljs$core$async$state_machine__27051__auto____0 = (function (){
var statearr_29951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29951[(0)] = cljs$core$async$state_machine__27051__auto__);

(statearr_29951[(1)] = (1));

return statearr_29951;
});
var cljs$core$async$state_machine__27051__auto____1 = (function (state_29884){
while(true){
var ret_value__27052__auto__ = (function (){try{while(true){
var result__27053__auto__ = switch__27050__auto__(state_29884);
if(cljs.core.keyword_identical_QMARK_(result__27053__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27053__auto__;
}
break;
}
}catch (e29956){var ex__27054__auto__ = e29956;
var statearr_29957_30908 = state_29884;
(statearr_29957_30908[(2)] = ex__27054__auto__);


if(cljs.core.seq((state_29884[(4)]))){
var statearr_29958_30909 = state_29884;
(statearr_29958_30909[(1)] = cljs.core.first((state_29884[(4)])));

} else {
throw ex__27054__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30910 = state_29884;
state_29884 = G__30910;
continue;
} else {
return ret_value__27052__auto__;
}
break;
}
});
cljs$core$async$state_machine__27051__auto__ = function(state_29884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27051__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27051__auto____1.call(this,state_29884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27051__auto____0;
cljs$core$async$state_machine__27051__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27051__auto____1;
return cljs$core$async$state_machine__27051__auto__;
})()
})();
var state__27247__auto__ = (function (){var statearr_29962 = f__27246__auto__();
(statearr_29962[(6)] = c__27245__auto___30881);

return statearr_29962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27247__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
