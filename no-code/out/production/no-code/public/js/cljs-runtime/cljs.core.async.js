goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__47555 = arguments.length;
switch (G__47555) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47557 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47557 = (function (f,blockable,meta47558){
this.f = f;
this.blockable = blockable;
this.meta47558 = meta47558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47559,meta47558__$1){
var self__ = this;
var _47559__$1 = this;
return (new cljs.core.async.t_cljs$core$async47557(self__.f,self__.blockable,meta47558__$1));
}));

(cljs.core.async.t_cljs$core$async47557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47559){
var self__ = this;
var _47559__$1 = this;
return self__.meta47558;
}));

(cljs.core.async.t_cljs$core$async47557.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47557.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47557.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async47557.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async47557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47558","meta47558",1147673373,null)], null);
}));

(cljs.core.async.t_cljs$core$async47557.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47557");

(cljs.core.async.t_cljs$core$async47557.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async47557");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47557.
 */
cljs.core.async.__GT_t_cljs$core$async47557 = (function cljs$core$async$__GT_t_cljs$core$async47557(f__$1,blockable__$1,meta47558){
return (new cljs.core.async.t_cljs$core$async47557(f__$1,blockable__$1,meta47558));
});

}

return (new cljs.core.async.t_cljs$core$async47557(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47562 = arguments.length;
switch (G__47562) {
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
var G__47564 = arguments.length;
switch (G__47564) {
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
var G__47567 = arguments.length;
switch (G__47567) {
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
var val_49776 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49776) : fn1.call(null,val_49776));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49776) : fn1.call(null,val_49776));
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
var G__47569 = arguments.length;
switch (G__47569) {
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
var n__5636__auto___49782 = n;
var x_49783 = (0);
while(true){
if((x_49783 < n__5636__auto___49782)){
(a[x_49783] = x_49783);

var G__49784 = (x_49783 + (1));
x_49783 = G__49784;
continue;
} else {
}
break;
}

(goog.array.shuffle.cljs$core$IFn$_invoke$arity$1 ? goog.array.shuffle.cljs$core$IFn$_invoke$arity$1(a) : goog.array.shuffle.call(null,a));

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47575 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47575 = (function (flag,meta47576){
this.flag = flag;
this.meta47576 = meta47576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47577,meta47576__$1){
var self__ = this;
var _47577__$1 = this;
return (new cljs.core.async.t_cljs$core$async47575(self__.flag,meta47576__$1));
}));

(cljs.core.async.t_cljs$core$async47575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47577){
var self__ = this;
var _47577__$1 = this;
return self__.meta47576;
}));

(cljs.core.async.t_cljs$core$async47575.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47575.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47575.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47575.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async47575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47576","meta47576",359263492,null)], null);
}));

(cljs.core.async.t_cljs$core$async47575.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47575");

(cljs.core.async.t_cljs$core$async47575.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async47575");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47575.
 */
cljs.core.async.__GT_t_cljs$core$async47575 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47575(flag__$1,meta47576){
return (new cljs.core.async.t_cljs$core$async47575(flag__$1,meta47576));
});

}

return (new cljs.core.async.t_cljs$core$async47575(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47595 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47595 = (function (flag,cb,meta47596){
this.flag = flag;
this.cb = cb;
this.meta47596 = meta47596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47597,meta47596__$1){
var self__ = this;
var _47597__$1 = this;
return (new cljs.core.async.t_cljs$core$async47595(self__.flag,self__.cb,meta47596__$1));
}));

(cljs.core.async.t_cljs$core$async47595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47597){
var self__ = this;
var _47597__$1 = this;
return self__.meta47596;
}));

(cljs.core.async.t_cljs$core$async47595.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47595.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47595.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47595.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async47595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47596","meta47596",1825276116,null)], null);
}));

(cljs.core.async.t_cljs$core$async47595.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47595");

(cljs.core.async.t_cljs$core$async47595.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async47595");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47595.
 */
cljs.core.async.__GT_t_cljs$core$async47595 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47595(flag__$1,cb__$1,meta47596){
return (new cljs.core.async.t_cljs$core$async47595(flag__$1,cb__$1,meta47596));
});

}

return (new cljs.core.async.t_cljs$core$async47595(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47604_SHARP_){
var G__47611 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47604_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47611) : fret.call(null,G__47611));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47605_SHARP_){
var G__47612 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47605_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47612) : fret.call(null,G__47612));
});})(i,idx,port,wport,flag,n,idxs,priority))
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
var G__49795 = (i + (1));
i = G__49795;
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
var len__5769__auto___49796 = arguments.length;
var i__5770__auto___49797 = (0);
while(true){
if((i__5770__auto___49797 < len__5769__auto___49796)){
args__5775__auto__.push((arguments[i__5770__auto___49797]));

var G__49798 = (i__5770__auto___49797 + (1));
i__5770__auto___49797 = G__49798;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47618){
var map__47619 = p__47618;
var map__47619__$1 = cljs.core.__destructure_map(map__47619);
var opts = map__47619__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47616){
var G__47617 = cljs.core.first(seq47616);
var seq47616__$1 = cljs.core.next(seq47616);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47617,seq47616__$1);
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
var G__47633 = arguments.length;
switch (G__47633) {
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
var c__27086__auto___49803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27087__auto__ = (function (){var switch__27016__auto__ = (function (state_47677){
var state_val_47679 = (state_47677[(1)]);
if((state_val_47679 === (7))){
var inst_47672 = (state_47677[(2)]);
var state_47677__$1 = state_47677;
var statearr_47682_49804 = state_47677__$1;
(statearr_47682_49804[(2)] = inst_47672);

(statearr_47682_49804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47679 === (1))){
var state_47677__$1 = state_47677;
var statearr_47683_49805 = state_47677__$1;
(statearr_47683_49805[(2)] = null);

(statearr_47683_49805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47679 === (4))){
var inst_47647 = (state_47677[(7)]);
var inst_47647__$1 = (state_47677[(2)]);
var inst_47648 = (inst_47647__$1 == null);
var state_47677__$1 = (function (){var statearr_47685 = state_47677;
(statearr_47685[(7)] = inst_47647__$1);

return statearr_47685;
})();
if(cljs.core.truth_(inst_47648)){
var statearr_47686_49806 = state_47677__$1;
(statearr_47686_49806[(1)] = (5));

} else {
var statearr_47687_49807 = state_47677__$1;
(statearr_47687_49807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47679 === (13))){
var state_47677__$1 = state_47677;
var statearr_47689_49808 = state_47677__$1;
(statearr_47689_49808[(2)] = null);

(statearr_47689_49808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47679 === (6))){
var inst_47647 = (state_47677[(7)]);
var state_47677__$1 = state_47677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47677__$1,(11),to,inst_47647);
} else {
if((state_val_47679 === (3))){
var inst_47674 = (state_47677[(2)]);
var state_47677__$1 = state_47677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47677__$1,inst_47674);
} else {
if((state_val_47679 === (12))){
var state_47677__$1 = state_47677;
var statearr_47694_49809 = state_47677__$1;
(statearr_47694_49809[(2)] = null);

(statearr_47694_49809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47679 === (2))){
var state_47677__$1 = state_47677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47677__$1,(4),from);
} else {
if((state_val_47679 === (11))){
var inst_47663 = (state_47677[(2)]);
var state_47677__$1 = state_47677;
if(cljs.core.truth_(inst_47663)){
var statearr_47707_49810 = state_47677__$1;
(statearr_47707_49810[(1)] = (12));

} else {
var statearr_47708_49811 = state_47677__$1;
(statearr_47708_49811[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47679 === (9))){
var state_47677__$1 = state_47677;
var statearr_47717_49812 = state_47677__$1;
(statearr_47717_49812[(2)] = null);

(statearr_47717_49812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47679 === (5))){
var state_47677__$1 = state_47677;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47718_49813 = state_47677__$1;
(statearr_47718_49813[(1)] = (8));

} else {
var statearr_47719_49814 = state_47677__$1;
(statearr_47719_49814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47679 === (14))){
var inst_47670 = (state_47677[(2)]);
var state_47677__$1 = state_47677;
var statearr_47720_49815 = state_47677__$1;
(statearr_47720_49815[(2)] = inst_47670);

(statearr_47720_49815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47679 === (10))){
var inst_47660 = (state_47677[(2)]);
var state_47677__$1 = state_47677;
var statearr_47721_49816 = state_47677__$1;
(statearr_47721_49816[(2)] = inst_47660);

(statearr_47721_49816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47679 === (8))){
var inst_47651 = cljs.core.async.close_BANG_(to);
var state_47677__$1 = state_47677;
var statearr_47723_49817 = state_47677__$1;
(statearr_47723_49817[(2)] = inst_47651);

(statearr_47723_49817[(1)] = (10));


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
var cljs$core$async$state_machine__27017__auto__ = null;
var cljs$core$async$state_machine__27017__auto____0 = (function (){
var statearr_47724 = [null,null,null,null,null,null,null,null];
(statearr_47724[(0)] = cljs$core$async$state_machine__27017__auto__);

(statearr_47724[(1)] = (1));

return statearr_47724;
});
var cljs$core$async$state_machine__27017__auto____1 = (function (state_47677){
while(true){
var ret_value__27018__auto__ = (function (){try{while(true){
var result__27019__auto__ = switch__27016__auto__(state_47677);
if(cljs.core.keyword_identical_QMARK_(result__27019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27019__auto__;
}
break;
}
}catch (e47725){var ex__27020__auto__ = e47725;
var statearr_47726_49818 = state_47677;
(statearr_47726_49818[(2)] = ex__27020__auto__);


if(cljs.core.seq((state_47677[(4)]))){
var statearr_47727_49819 = state_47677;
(statearr_47727_49819[(1)] = cljs.core.first((state_47677[(4)])));

} else {
throw ex__27020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49820 = state_47677;
state_47677 = G__49820;
continue;
} else {
return ret_value__27018__auto__;
}
break;
}
});
cljs$core$async$state_machine__27017__auto__ = function(state_47677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27017__auto____1.call(this,state_47677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27017__auto____0;
cljs$core$async$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27017__auto____1;
return cljs$core$async$state_machine__27017__auto__;
})()
})();
var state__27088__auto__ = (function (){var statearr_47728 = f__27087__auto__();
(statearr_47728[(6)] = c__27086__auto___49803);

return statearr_47728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27088__auto__);
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
var process__$1 = (function (p__47730){
var vec__47731 = p__47730;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47731,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47731,(1),null);
var job = vec__47731;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__27086__auto___49821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27087__auto__ = (function (){var switch__27016__auto__ = (function (state_47738){
var state_val_47739 = (state_47738[(1)]);
if((state_val_47739 === (1))){
var state_47738__$1 = state_47738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47738__$1,(2),res,v);
} else {
if((state_val_47739 === (2))){
var inst_47735 = (state_47738[(2)]);
var inst_47736 = cljs.core.async.close_BANG_(res);
var state_47738__$1 = (function (){var statearr_47740 = state_47738;
(statearr_47740[(7)] = inst_47735);

return statearr_47740;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47738__$1,inst_47736);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____0 = (function (){
var statearr_47753 = [null,null,null,null,null,null,null,null];
(statearr_47753[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__);

(statearr_47753[(1)] = (1));

return statearr_47753;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____1 = (function (state_47738){
while(true){
var ret_value__27018__auto__ = (function (){try{while(true){
var result__27019__auto__ = switch__27016__auto__(state_47738);
if(cljs.core.keyword_identical_QMARK_(result__27019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27019__auto__;
}
break;
}
}catch (e47754){var ex__27020__auto__ = e47754;
var statearr_47760_49822 = state_47738;
(statearr_47760_49822[(2)] = ex__27020__auto__);


if(cljs.core.seq((state_47738[(4)]))){
var statearr_47765_49823 = state_47738;
(statearr_47765_49823[(1)] = cljs.core.first((state_47738[(4)])));

} else {
throw ex__27020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49824 = state_47738;
state_47738 = G__49824;
continue;
} else {
return ret_value__27018__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__ = function(state_47738){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____1.call(this,state_47738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__;
})()
})();
var state__27088__auto__ = (function (){var statearr_47766 = f__27087__auto__();
(statearr_47766[(6)] = c__27086__auto___49821);

return statearr_47766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27088__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__47767){
var vec__47768 = p__47767;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47768,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47768,(1),null);
var job = vec__47768;
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
var n__5636__auto___49825 = n;
var __49826 = (0);
while(true){
if((__49826 < n__5636__auto___49825)){
var G__47771_49827 = type;
var G__47771_49828__$1 = (((G__47771_49827 instanceof cljs.core.Keyword))?G__47771_49827.fqn:null);
switch (G__47771_49828__$1) {
case "compute":
var c__27086__auto___49830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49826,c__27086__auto___49830,G__47771_49827,G__47771_49828__$1,n__5636__auto___49825,jobs,results,process__$1,async){
return (function (){
var f__27087__auto__ = (function (){var switch__27016__auto__ = ((function (__49826,c__27086__auto___49830,G__47771_49827,G__47771_49828__$1,n__5636__auto___49825,jobs,results,process__$1,async){
return (function (state_47784){
var state_val_47785 = (state_47784[(1)]);
if((state_val_47785 === (1))){
var state_47784__$1 = state_47784;
var statearr_47787_49831 = state_47784__$1;
(statearr_47787_49831[(2)] = null);

(statearr_47787_49831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47785 === (2))){
var state_47784__$1 = state_47784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47784__$1,(4),jobs);
} else {
if((state_val_47785 === (3))){
var inst_47782 = (state_47784[(2)]);
var state_47784__$1 = state_47784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47784__$1,inst_47782);
} else {
if((state_val_47785 === (4))){
var inst_47774 = (state_47784[(2)]);
var inst_47775 = process__$1(inst_47774);
var state_47784__$1 = state_47784;
if(cljs.core.truth_(inst_47775)){
var statearr_47788_49832 = state_47784__$1;
(statearr_47788_49832[(1)] = (5));

} else {
var statearr_47789_49833 = state_47784__$1;
(statearr_47789_49833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47785 === (5))){
var state_47784__$1 = state_47784;
var statearr_47790_49834 = state_47784__$1;
(statearr_47790_49834[(2)] = null);

(statearr_47790_49834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47785 === (6))){
var state_47784__$1 = state_47784;
var statearr_47792_49835 = state_47784__$1;
(statearr_47792_49835[(2)] = null);

(statearr_47792_49835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47785 === (7))){
var inst_47780 = (state_47784[(2)]);
var state_47784__$1 = state_47784;
var statearr_47793_49836 = state_47784__$1;
(statearr_47793_49836[(2)] = inst_47780);

(statearr_47793_49836[(1)] = (3));


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
});})(__49826,c__27086__auto___49830,G__47771_49827,G__47771_49828__$1,n__5636__auto___49825,jobs,results,process__$1,async))
;
return ((function (__49826,switch__27016__auto__,c__27086__auto___49830,G__47771_49827,G__47771_49828__$1,n__5636__auto___49825,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____0 = (function (){
var statearr_47794 = [null,null,null,null,null,null,null];
(statearr_47794[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__);

(statearr_47794[(1)] = (1));

return statearr_47794;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____1 = (function (state_47784){
while(true){
var ret_value__27018__auto__ = (function (){try{while(true){
var result__27019__auto__ = switch__27016__auto__(state_47784);
if(cljs.core.keyword_identical_QMARK_(result__27019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27019__auto__;
}
break;
}
}catch (e47795){var ex__27020__auto__ = e47795;
var statearr_47796_49837 = state_47784;
(statearr_47796_49837[(2)] = ex__27020__auto__);


if(cljs.core.seq((state_47784[(4)]))){
var statearr_47797_49838 = state_47784;
(statearr_47797_49838[(1)] = cljs.core.first((state_47784[(4)])));

} else {
throw ex__27020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49839 = state_47784;
state_47784 = G__49839;
continue;
} else {
return ret_value__27018__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__ = function(state_47784){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____1.call(this,state_47784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__;
})()
;})(__49826,switch__27016__auto__,c__27086__auto___49830,G__47771_49827,G__47771_49828__$1,n__5636__auto___49825,jobs,results,process__$1,async))
})();
var state__27088__auto__ = (function (){var statearr_47799 = f__27087__auto__();
(statearr_47799[(6)] = c__27086__auto___49830);

return statearr_47799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27088__auto__);
});})(__49826,c__27086__auto___49830,G__47771_49827,G__47771_49828__$1,n__5636__auto___49825,jobs,results,process__$1,async))
);


break;
case "async":
var c__27086__auto___49840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49826,c__27086__auto___49840,G__47771_49827,G__47771_49828__$1,n__5636__auto___49825,jobs,results,process__$1,async){
return (function (){
var f__27087__auto__ = (function (){var switch__27016__auto__ = ((function (__49826,c__27086__auto___49840,G__47771_49827,G__47771_49828__$1,n__5636__auto___49825,jobs,results,process__$1,async){
return (function (state_47812){
var state_val_47813 = (state_47812[(1)]);
if((state_val_47813 === (1))){
var state_47812__$1 = state_47812;
var statearr_47815_49841 = state_47812__$1;
(statearr_47815_49841[(2)] = null);

(statearr_47815_49841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47813 === (2))){
var state_47812__$1 = state_47812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47812__$1,(4),jobs);
} else {
if((state_val_47813 === (3))){
var inst_47810 = (state_47812[(2)]);
var state_47812__$1 = state_47812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47812__$1,inst_47810);
} else {
if((state_val_47813 === (4))){
var inst_47802 = (state_47812[(2)]);
var inst_47803 = async(inst_47802);
var state_47812__$1 = state_47812;
if(cljs.core.truth_(inst_47803)){
var statearr_47816_49842 = state_47812__$1;
(statearr_47816_49842[(1)] = (5));

} else {
var statearr_47817_49844 = state_47812__$1;
(statearr_47817_49844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47813 === (5))){
var state_47812__$1 = state_47812;
var statearr_47818_49845 = state_47812__$1;
(statearr_47818_49845[(2)] = null);

(statearr_47818_49845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47813 === (6))){
var state_47812__$1 = state_47812;
var statearr_47819_49846 = state_47812__$1;
(statearr_47819_49846[(2)] = null);

(statearr_47819_49846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47813 === (7))){
var inst_47808 = (state_47812[(2)]);
var state_47812__$1 = state_47812;
var statearr_47821_49847 = state_47812__$1;
(statearr_47821_49847[(2)] = inst_47808);

(statearr_47821_49847[(1)] = (3));


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
});})(__49826,c__27086__auto___49840,G__47771_49827,G__47771_49828__$1,n__5636__auto___49825,jobs,results,process__$1,async))
;
return ((function (__49826,switch__27016__auto__,c__27086__auto___49840,G__47771_49827,G__47771_49828__$1,n__5636__auto___49825,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____0 = (function (){
var statearr_47822 = [null,null,null,null,null,null,null];
(statearr_47822[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__);

(statearr_47822[(1)] = (1));

return statearr_47822;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____1 = (function (state_47812){
while(true){
var ret_value__27018__auto__ = (function (){try{while(true){
var result__27019__auto__ = switch__27016__auto__(state_47812);
if(cljs.core.keyword_identical_QMARK_(result__27019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27019__auto__;
}
break;
}
}catch (e47823){var ex__27020__auto__ = e47823;
var statearr_47824_49848 = state_47812;
(statearr_47824_49848[(2)] = ex__27020__auto__);


if(cljs.core.seq((state_47812[(4)]))){
var statearr_47825_49849 = state_47812;
(statearr_47825_49849[(1)] = cljs.core.first((state_47812[(4)])));

} else {
throw ex__27020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49850 = state_47812;
state_47812 = G__49850;
continue;
} else {
return ret_value__27018__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__ = function(state_47812){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____1.call(this,state_47812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__;
})()
;})(__49826,switch__27016__auto__,c__27086__auto___49840,G__47771_49827,G__47771_49828__$1,n__5636__auto___49825,jobs,results,process__$1,async))
})();
var state__27088__auto__ = (function (){var statearr_47827 = f__27087__auto__();
(statearr_47827[(6)] = c__27086__auto___49840);

return statearr_47827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27088__auto__);
});})(__49826,c__27086__auto___49840,G__47771_49827,G__47771_49828__$1,n__5636__auto___49825,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47771_49828__$1)].join('')));

}

var G__49854 = (__49826 + (1));
__49826 = G__49854;
continue;
} else {
}
break;
}

var c__27086__auto___49855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27087__auto__ = (function (){var switch__27016__auto__ = (function (state_47850){
var state_val_47851 = (state_47850[(1)]);
if((state_val_47851 === (7))){
var inst_47846 = (state_47850[(2)]);
var state_47850__$1 = state_47850;
var statearr_47852_49856 = state_47850__$1;
(statearr_47852_49856[(2)] = inst_47846);

(statearr_47852_49856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (1))){
var state_47850__$1 = state_47850;
var statearr_47853_49857 = state_47850__$1;
(statearr_47853_49857[(2)] = null);

(statearr_47853_49857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (4))){
var inst_47830 = (state_47850[(7)]);
var inst_47830__$1 = (state_47850[(2)]);
var inst_47831 = (inst_47830__$1 == null);
var state_47850__$1 = (function (){var statearr_47855 = state_47850;
(statearr_47855[(7)] = inst_47830__$1);

return statearr_47855;
})();
if(cljs.core.truth_(inst_47831)){
var statearr_47856_49858 = state_47850__$1;
(statearr_47856_49858[(1)] = (5));

} else {
var statearr_47857_49859 = state_47850__$1;
(statearr_47857_49859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (6))){
var inst_47830 = (state_47850[(7)]);
var inst_47835 = (state_47850[(8)]);
var inst_47835__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_47836 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47837 = [inst_47830,inst_47835__$1];
var inst_47839 = (new cljs.core.PersistentVector(null,2,(5),inst_47836,inst_47837,null));
var state_47850__$1 = (function (){var statearr_47858 = state_47850;
(statearr_47858[(8)] = inst_47835__$1);

return statearr_47858;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47850__$1,(8),jobs,inst_47839);
} else {
if((state_val_47851 === (3))){
var inst_47848 = (state_47850[(2)]);
var state_47850__$1 = state_47850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47850__$1,inst_47848);
} else {
if((state_val_47851 === (2))){
var state_47850__$1 = state_47850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47850__$1,(4),from);
} else {
if((state_val_47851 === (9))){
var inst_47843 = (state_47850[(2)]);
var state_47850__$1 = (function (){var statearr_47859 = state_47850;
(statearr_47859[(9)] = inst_47843);

return statearr_47859;
})();
var statearr_47860_49860 = state_47850__$1;
(statearr_47860_49860[(2)] = null);

(statearr_47860_49860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (5))){
var inst_47833 = cljs.core.async.close_BANG_(jobs);
var state_47850__$1 = state_47850;
var statearr_47862_49861 = state_47850__$1;
(statearr_47862_49861[(2)] = inst_47833);

(statearr_47862_49861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (8))){
var inst_47835 = (state_47850[(8)]);
var inst_47841 = (state_47850[(2)]);
var state_47850__$1 = (function (){var statearr_47863 = state_47850;
(statearr_47863[(10)] = inst_47841);

return statearr_47863;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47850__$1,(9),results,inst_47835);
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
var cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____0 = (function (){
var statearr_47864 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47864[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__);

(statearr_47864[(1)] = (1));

return statearr_47864;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____1 = (function (state_47850){
while(true){
var ret_value__27018__auto__ = (function (){try{while(true){
var result__27019__auto__ = switch__27016__auto__(state_47850);
if(cljs.core.keyword_identical_QMARK_(result__27019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27019__auto__;
}
break;
}
}catch (e47865){var ex__27020__auto__ = e47865;
var statearr_47866_49865 = state_47850;
(statearr_47866_49865[(2)] = ex__27020__auto__);


if(cljs.core.seq((state_47850[(4)]))){
var statearr_47867_49866 = state_47850;
(statearr_47867_49866[(1)] = cljs.core.first((state_47850[(4)])));

} else {
throw ex__27020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49867 = state_47850;
state_47850 = G__49867;
continue;
} else {
return ret_value__27018__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__ = function(state_47850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____1.call(this,state_47850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__;
})()
})();
var state__27088__auto__ = (function (){var statearr_47869 = f__27087__auto__();
(statearr_47869[(6)] = c__27086__auto___49855);

return statearr_47869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27088__auto__);
}));


var c__27086__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27087__auto__ = (function (){var switch__27016__auto__ = (function (state_47907){
var state_val_47908 = (state_47907[(1)]);
if((state_val_47908 === (7))){
var inst_47903 = (state_47907[(2)]);
var state_47907__$1 = state_47907;
var statearr_47910_49868 = state_47907__$1;
(statearr_47910_49868[(2)] = inst_47903);

(statearr_47910_49868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (20))){
var state_47907__$1 = state_47907;
var statearr_47911_49869 = state_47907__$1;
(statearr_47911_49869[(2)] = null);

(statearr_47911_49869[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (1))){
var state_47907__$1 = state_47907;
var statearr_47912_49870 = state_47907__$1;
(statearr_47912_49870[(2)] = null);

(statearr_47912_49870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (4))){
var inst_47872 = (state_47907[(7)]);
var inst_47872__$1 = (state_47907[(2)]);
var inst_47873 = (inst_47872__$1 == null);
var state_47907__$1 = (function (){var statearr_47913 = state_47907;
(statearr_47913[(7)] = inst_47872__$1);

return statearr_47913;
})();
if(cljs.core.truth_(inst_47873)){
var statearr_47914_49871 = state_47907__$1;
(statearr_47914_49871[(1)] = (5));

} else {
var statearr_47915_49872 = state_47907__$1;
(statearr_47915_49872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (15))){
var inst_47885 = (state_47907[(8)]);
var state_47907__$1 = state_47907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47907__$1,(18),to,inst_47885);
} else {
if((state_val_47908 === (21))){
var inst_47898 = (state_47907[(2)]);
var state_47907__$1 = state_47907;
var statearr_47917_49873 = state_47907__$1;
(statearr_47917_49873[(2)] = inst_47898);

(statearr_47917_49873[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (13))){
var inst_47900 = (state_47907[(2)]);
var state_47907__$1 = (function (){var statearr_47918 = state_47907;
(statearr_47918[(9)] = inst_47900);

return statearr_47918;
})();
var statearr_47919_49874 = state_47907__$1;
(statearr_47919_49874[(2)] = null);

(statearr_47919_49874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (6))){
var inst_47872 = (state_47907[(7)]);
var state_47907__$1 = state_47907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47907__$1,(11),inst_47872);
} else {
if((state_val_47908 === (17))){
var inst_47893 = (state_47907[(2)]);
var state_47907__$1 = state_47907;
if(cljs.core.truth_(inst_47893)){
var statearr_47920_49875 = state_47907__$1;
(statearr_47920_49875[(1)] = (19));

} else {
var statearr_47922_49876 = state_47907__$1;
(statearr_47922_49876[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (3))){
var inst_47905 = (state_47907[(2)]);
var state_47907__$1 = state_47907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47907__$1,inst_47905);
} else {
if((state_val_47908 === (12))){
var inst_47882 = (state_47907[(10)]);
var state_47907__$1 = state_47907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47907__$1,(14),inst_47882);
} else {
if((state_val_47908 === (2))){
var state_47907__$1 = state_47907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47907__$1,(4),results);
} else {
if((state_val_47908 === (19))){
var state_47907__$1 = state_47907;
var statearr_47923_49877 = state_47907__$1;
(statearr_47923_49877[(2)] = null);

(statearr_47923_49877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (11))){
var inst_47882 = (state_47907[(2)]);
var state_47907__$1 = (function (){var statearr_47924 = state_47907;
(statearr_47924[(10)] = inst_47882);

return statearr_47924;
})();
var statearr_47925_49878 = state_47907__$1;
(statearr_47925_49878[(2)] = null);

(statearr_47925_49878[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (9))){
var state_47907__$1 = state_47907;
var statearr_47926_49879 = state_47907__$1;
(statearr_47926_49879[(2)] = null);

(statearr_47926_49879[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (5))){
var state_47907__$1 = state_47907;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47927_49880 = state_47907__$1;
(statearr_47927_49880[(1)] = (8));

} else {
var statearr_47928_49881 = state_47907__$1;
(statearr_47928_49881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (14))){
var inst_47887 = (state_47907[(11)]);
var inst_47885 = (state_47907[(8)]);
var inst_47885__$1 = (state_47907[(2)]);
var inst_47886 = (inst_47885__$1 == null);
var inst_47887__$1 = cljs.core.not(inst_47886);
var state_47907__$1 = (function (){var statearr_47929 = state_47907;
(statearr_47929[(11)] = inst_47887__$1);

(statearr_47929[(8)] = inst_47885__$1);

return statearr_47929;
})();
if(inst_47887__$1){
var statearr_47930_49882 = state_47907__$1;
(statearr_47930_49882[(1)] = (15));

} else {
var statearr_47931_49883 = state_47907__$1;
(statearr_47931_49883[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (16))){
var inst_47887 = (state_47907[(11)]);
var state_47907__$1 = state_47907;
var statearr_47933_49884 = state_47907__$1;
(statearr_47933_49884[(2)] = inst_47887);

(statearr_47933_49884[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (10))){
var inst_47879 = (state_47907[(2)]);
var state_47907__$1 = state_47907;
var statearr_47934_49885 = state_47907__$1;
(statearr_47934_49885[(2)] = inst_47879);

(statearr_47934_49885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (18))){
var inst_47890 = (state_47907[(2)]);
var state_47907__$1 = state_47907;
var statearr_47935_49886 = state_47907__$1;
(statearr_47935_49886[(2)] = inst_47890);

(statearr_47935_49886[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (8))){
var inst_47876 = cljs.core.async.close_BANG_(to);
var state_47907__$1 = state_47907;
var statearr_47936_49887 = state_47907__$1;
(statearr_47936_49887[(2)] = inst_47876);

(statearr_47936_49887[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____0 = (function (){
var statearr_47937 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47937[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__);

(statearr_47937[(1)] = (1));

return statearr_47937;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____1 = (function (state_47907){
while(true){
var ret_value__27018__auto__ = (function (){try{while(true){
var result__27019__auto__ = switch__27016__auto__(state_47907);
if(cljs.core.keyword_identical_QMARK_(result__27019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27019__auto__;
}
break;
}
}catch (e47938){var ex__27020__auto__ = e47938;
var statearr_47939_49888 = state_47907;
(statearr_47939_49888[(2)] = ex__27020__auto__);


if(cljs.core.seq((state_47907[(4)]))){
var statearr_47940_49889 = state_47907;
(statearr_47940_49889[(1)] = cljs.core.first((state_47907[(4)])));

} else {
throw ex__27020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49891 = state_47907;
state_47907 = G__49891;
continue;
} else {
return ret_value__27018__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__ = function(state_47907){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____1.call(this,state_47907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27017__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27017__auto__;
})()
})();
var state__27088__auto__ = (function (){var statearr_47941 = f__27087__auto__();
(statearr_47941[(6)] = c__27086__auto__);

return statearr_47941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27088__auto__);
}));

return c__27086__auto__;
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
var G__47944 = arguments.length;
switch (G__47944) {
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
var G__47947 = arguments.length;
switch (G__47947) {
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
var G__47950 = arguments.length;
switch (G__47950) {
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
var c__27086__auto___49895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27087__auto__ = (function (){var switch__27016__auto__ = (function (state_47977){
var state_val_47978 = (state_47977[(1)]);
if((state_val_47978 === (7))){
var inst_47973 = (state_47977[(2)]);
var state_47977__$1 = state_47977;
var statearr_47979_49900 = state_47977__$1;
(statearr_47979_49900[(2)] = inst_47973);

(statearr_47979_49900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (1))){
var state_47977__$1 = state_47977;
var statearr_47981_49901 = state_47977__$1;
(statearr_47981_49901[(2)] = null);

(statearr_47981_49901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (4))){
var inst_47954 = (state_47977[(7)]);
var inst_47954__$1 = (state_47977[(2)]);
var inst_47955 = (inst_47954__$1 == null);
var state_47977__$1 = (function (){var statearr_47982 = state_47977;
(statearr_47982[(7)] = inst_47954__$1);

return statearr_47982;
})();
if(cljs.core.truth_(inst_47955)){
var statearr_47983_49902 = state_47977__$1;
(statearr_47983_49902[(1)] = (5));

} else {
var statearr_47984_49903 = state_47977__$1;
(statearr_47984_49903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (13))){
var state_47977__$1 = state_47977;
var statearr_47985_49904 = state_47977__$1;
(statearr_47985_49904[(2)] = null);

(statearr_47985_49904[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (6))){
var inst_47954 = (state_47977[(7)]);
var inst_47960 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47954) : p.call(null,inst_47954));
var state_47977__$1 = state_47977;
if(cljs.core.truth_(inst_47960)){
var statearr_47986_49909 = state_47977__$1;
(statearr_47986_49909[(1)] = (9));

} else {
var statearr_47987_49910 = state_47977__$1;
(statearr_47987_49910[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (3))){
var inst_47975 = (state_47977[(2)]);
var state_47977__$1 = state_47977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47977__$1,inst_47975);
} else {
if((state_val_47978 === (12))){
var state_47977__$1 = state_47977;
var statearr_47988_49911 = state_47977__$1;
(statearr_47988_49911[(2)] = null);

(statearr_47988_49911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (2))){
var state_47977__$1 = state_47977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47977__$1,(4),ch);
} else {
if((state_val_47978 === (11))){
var inst_47954 = (state_47977[(7)]);
var inst_47964 = (state_47977[(2)]);
var state_47977__$1 = state_47977;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47977__$1,(8),inst_47964,inst_47954);
} else {
if((state_val_47978 === (9))){
var state_47977__$1 = state_47977;
var statearr_47990_49912 = state_47977__$1;
(statearr_47990_49912[(2)] = tc);

(statearr_47990_49912[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (5))){
var inst_47957 = cljs.core.async.close_BANG_(tc);
var inst_47958 = cljs.core.async.close_BANG_(fc);
var state_47977__$1 = (function (){var statearr_47992 = state_47977;
(statearr_47992[(8)] = inst_47957);

return statearr_47992;
})();
var statearr_47993_49913 = state_47977__$1;
(statearr_47993_49913[(2)] = inst_47958);

(statearr_47993_49913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (14))){
var inst_47971 = (state_47977[(2)]);
var state_47977__$1 = state_47977;
var statearr_47994_49914 = state_47977__$1;
(statearr_47994_49914[(2)] = inst_47971);

(statearr_47994_49914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (10))){
var state_47977__$1 = state_47977;
var statearr_47995_49915 = state_47977__$1;
(statearr_47995_49915[(2)] = fc);

(statearr_47995_49915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (8))){
var inst_47966 = (state_47977[(2)]);
var state_47977__$1 = state_47977;
if(cljs.core.truth_(inst_47966)){
var statearr_47997_49916 = state_47977__$1;
(statearr_47997_49916[(1)] = (12));

} else {
var statearr_47998_49917 = state_47977__$1;
(statearr_47998_49917[(1)] = (13));

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
var cljs$core$async$state_machine__27017__auto__ = null;
var cljs$core$async$state_machine__27017__auto____0 = (function (){
var statearr_47999 = [null,null,null,null,null,null,null,null,null];
(statearr_47999[(0)] = cljs$core$async$state_machine__27017__auto__);

(statearr_47999[(1)] = (1));

return statearr_47999;
});
var cljs$core$async$state_machine__27017__auto____1 = (function (state_47977){
while(true){
var ret_value__27018__auto__ = (function (){try{while(true){
var result__27019__auto__ = switch__27016__auto__(state_47977);
if(cljs.core.keyword_identical_QMARK_(result__27019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27019__auto__;
}
break;
}
}catch (e48000){var ex__27020__auto__ = e48000;
var statearr_48001_49918 = state_47977;
(statearr_48001_49918[(2)] = ex__27020__auto__);


if(cljs.core.seq((state_47977[(4)]))){
var statearr_48002_49919 = state_47977;
(statearr_48002_49919[(1)] = cljs.core.first((state_47977[(4)])));

} else {
throw ex__27020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49920 = state_47977;
state_47977 = G__49920;
continue;
} else {
return ret_value__27018__auto__;
}
break;
}
});
cljs$core$async$state_machine__27017__auto__ = function(state_47977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27017__auto____1.call(this,state_47977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27017__auto____0;
cljs$core$async$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27017__auto____1;
return cljs$core$async$state_machine__27017__auto__;
})()
})();
var state__27088__auto__ = (function (){var statearr_48003 = f__27087__auto__();
(statearr_48003[(6)] = c__27086__auto___49895);

return statearr_48003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27088__auto__);
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
var c__27086__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27087__auto__ = (function (){var switch__27016__auto__ = (function (state_48026){
var state_val_48027 = (state_48026[(1)]);
if((state_val_48027 === (7))){
var inst_48022 = (state_48026[(2)]);
var state_48026__$1 = state_48026;
var statearr_48029_49921 = state_48026__$1;
(statearr_48029_49921[(2)] = inst_48022);

(statearr_48029_49921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48027 === (1))){
var inst_48005 = init;
var inst_48006 = inst_48005;
var state_48026__$1 = (function (){var statearr_48030 = state_48026;
(statearr_48030[(7)] = inst_48006);

return statearr_48030;
})();
var statearr_48031_49922 = state_48026__$1;
(statearr_48031_49922[(2)] = null);

(statearr_48031_49922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48027 === (4))){
var inst_48009 = (state_48026[(8)]);
var inst_48009__$1 = (state_48026[(2)]);
var inst_48010 = (inst_48009__$1 == null);
var state_48026__$1 = (function (){var statearr_48032 = state_48026;
(statearr_48032[(8)] = inst_48009__$1);

return statearr_48032;
})();
if(cljs.core.truth_(inst_48010)){
var statearr_48033_49925 = state_48026__$1;
(statearr_48033_49925[(1)] = (5));

} else {
var statearr_48034_49927 = state_48026__$1;
(statearr_48034_49927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48027 === (6))){
var inst_48006 = (state_48026[(7)]);
var inst_48013 = (state_48026[(9)]);
var inst_48009 = (state_48026[(8)]);
var inst_48013__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_48006,inst_48009) : f.call(null,inst_48006,inst_48009));
var inst_48014 = cljs.core.reduced_QMARK_(inst_48013__$1);
var state_48026__$1 = (function (){var statearr_48036 = state_48026;
(statearr_48036[(9)] = inst_48013__$1);

return statearr_48036;
})();
if(inst_48014){
var statearr_48037_49929 = state_48026__$1;
(statearr_48037_49929[(1)] = (8));

} else {
var statearr_48038_49930 = state_48026__$1;
(statearr_48038_49930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48027 === (3))){
var inst_48024 = (state_48026[(2)]);
var state_48026__$1 = state_48026;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48026__$1,inst_48024);
} else {
if((state_val_48027 === (2))){
var state_48026__$1 = state_48026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48026__$1,(4),ch);
} else {
if((state_val_48027 === (9))){
var inst_48013 = (state_48026[(9)]);
var inst_48006 = inst_48013;
var state_48026__$1 = (function (){var statearr_48039 = state_48026;
(statearr_48039[(7)] = inst_48006);

return statearr_48039;
})();
var statearr_48040_49931 = state_48026__$1;
(statearr_48040_49931[(2)] = null);

(statearr_48040_49931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48027 === (5))){
var inst_48006 = (state_48026[(7)]);
var state_48026__$1 = state_48026;
var statearr_48041_49932 = state_48026__$1;
(statearr_48041_49932[(2)] = inst_48006);

(statearr_48041_49932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48027 === (10))){
var inst_48020 = (state_48026[(2)]);
var state_48026__$1 = state_48026;
var statearr_48042_49933 = state_48026__$1;
(statearr_48042_49933[(2)] = inst_48020);

(statearr_48042_49933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48027 === (8))){
var inst_48013 = (state_48026[(9)]);
var inst_48016 = cljs.core.deref(inst_48013);
var state_48026__$1 = state_48026;
var statearr_48044_49934 = state_48026__$1;
(statearr_48044_49934[(2)] = inst_48016);

(statearr_48044_49934[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__27017__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27017__auto____0 = (function (){
var statearr_48045 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48045[(0)] = cljs$core$async$reduce_$_state_machine__27017__auto__);

(statearr_48045[(1)] = (1));

return statearr_48045;
});
var cljs$core$async$reduce_$_state_machine__27017__auto____1 = (function (state_48026){
while(true){
var ret_value__27018__auto__ = (function (){try{while(true){
var result__27019__auto__ = switch__27016__auto__(state_48026);
if(cljs.core.keyword_identical_QMARK_(result__27019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27019__auto__;
}
break;
}
}catch (e48046){var ex__27020__auto__ = e48046;
var statearr_48047_49935 = state_48026;
(statearr_48047_49935[(2)] = ex__27020__auto__);


if(cljs.core.seq((state_48026[(4)]))){
var statearr_48048_49936 = state_48026;
(statearr_48048_49936[(1)] = cljs.core.first((state_48026[(4)])));

} else {
throw ex__27020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49937 = state_48026;
state_48026 = G__49937;
continue;
} else {
return ret_value__27018__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27017__auto__ = function(state_48026){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27017__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27017__auto____1.call(this,state_48026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27017__auto____0;
cljs$core$async$reduce_$_state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27017__auto____1;
return cljs$core$async$reduce_$_state_machine__27017__auto__;
})()
})();
var state__27088__auto__ = (function (){var statearr_48049 = f__27087__auto__();
(statearr_48049[(6)] = c__27086__auto__);

return statearr_48049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27088__auto__);
}));

return c__27086__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__27086__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27087__auto__ = (function (){var switch__27016__auto__ = (function (state_48056){
var state_val_48057 = (state_48056[(1)]);
if((state_val_48057 === (1))){
var inst_48051 = cljs.core.async.reduce(f__$1,init,ch);
var state_48056__$1 = state_48056;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48056__$1,(2),inst_48051);
} else {
if((state_val_48057 === (2))){
var inst_48053 = (state_48056[(2)]);
var inst_48054 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_48053) : f__$1.call(null,inst_48053));
var state_48056__$1 = state_48056;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48056__$1,inst_48054);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27017__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27017__auto____0 = (function (){
var statearr_48058 = [null,null,null,null,null,null,null];
(statearr_48058[(0)] = cljs$core$async$transduce_$_state_machine__27017__auto__);

(statearr_48058[(1)] = (1));

return statearr_48058;
});
var cljs$core$async$transduce_$_state_machine__27017__auto____1 = (function (state_48056){
while(true){
var ret_value__27018__auto__ = (function (){try{while(true){
var result__27019__auto__ = switch__27016__auto__(state_48056);
if(cljs.core.keyword_identical_QMARK_(result__27019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27019__auto__;
}
break;
}
}catch (e48059){var ex__27020__auto__ = e48059;
var statearr_48060_49938 = state_48056;
(statearr_48060_49938[(2)] = ex__27020__auto__);


if(cljs.core.seq((state_48056[(4)]))){
var statearr_48062_49939 = state_48056;
(statearr_48062_49939[(1)] = cljs.core.first((state_48056[(4)])));

} else {
throw ex__27020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49940 = state_48056;
state_48056 = G__49940;
continue;
} else {
return ret_value__27018__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27017__auto__ = function(state_48056){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27017__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27017__auto____1.call(this,state_48056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27017__auto____0;
cljs$core$async$transduce_$_state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27017__auto____1;
return cljs$core$async$transduce_$_state_machine__27017__auto__;
})()
})();
var state__27088__auto__ = (function (){var statearr_48063 = f__27087__auto__();
(statearr_48063[(6)] = c__27086__auto__);

return statearr_48063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27088__auto__);
}));

return c__27086__auto__;
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
var G__48065 = arguments.length;
switch (G__48065) {
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
var c__27086__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27087__auto__ = (function (){var switch__27016__auto__ = (function (state_48093){
var state_val_48094 = (state_48093[(1)]);
if((state_val_48094 === (7))){
var inst_48074 = (state_48093[(2)]);
var state_48093__$1 = state_48093;
var statearr_48095_49943 = state_48093__$1;
(statearr_48095_49943[(2)] = inst_48074);

(statearr_48095_49943[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48094 === (1))){
var inst_48067 = cljs.core.seq(coll);
var inst_48068 = inst_48067;
var state_48093__$1 = (function (){var statearr_48096 = state_48093;
(statearr_48096[(7)] = inst_48068);

return statearr_48096;
})();
var statearr_48097_49944 = state_48093__$1;
(statearr_48097_49944[(2)] = null);

(statearr_48097_49944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48094 === (4))){
var inst_48068 = (state_48093[(7)]);
var inst_48072 = cljs.core.first(inst_48068);
var state_48093__$1 = state_48093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48093__$1,(7),ch,inst_48072);
} else {
if((state_val_48094 === (13))){
var inst_48087 = (state_48093[(2)]);
var state_48093__$1 = state_48093;
var statearr_48098_49946 = state_48093__$1;
(statearr_48098_49946[(2)] = inst_48087);

(statearr_48098_49946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48094 === (6))){
var inst_48077 = (state_48093[(2)]);
var state_48093__$1 = state_48093;
if(cljs.core.truth_(inst_48077)){
var statearr_48101_49949 = state_48093__$1;
(statearr_48101_49949[(1)] = (8));

} else {
var statearr_48102_49953 = state_48093__$1;
(statearr_48102_49953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48094 === (3))){
var inst_48091 = (state_48093[(2)]);
var state_48093__$1 = state_48093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48093__$1,inst_48091);
} else {
if((state_val_48094 === (12))){
var state_48093__$1 = state_48093;
var statearr_48103_49954 = state_48093__$1;
(statearr_48103_49954[(2)] = null);

(statearr_48103_49954[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48094 === (2))){
var inst_48068 = (state_48093[(7)]);
var state_48093__$1 = state_48093;
if(cljs.core.truth_(inst_48068)){
var statearr_48104_49955 = state_48093__$1;
(statearr_48104_49955[(1)] = (4));

} else {
var statearr_48105_49956 = state_48093__$1;
(statearr_48105_49956[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48094 === (11))){
var inst_48084 = cljs.core.async.close_BANG_(ch);
var state_48093__$1 = state_48093;
var statearr_48106_49957 = state_48093__$1;
(statearr_48106_49957[(2)] = inst_48084);

(statearr_48106_49957[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48094 === (9))){
var state_48093__$1 = state_48093;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48107_49958 = state_48093__$1;
(statearr_48107_49958[(1)] = (11));

} else {
var statearr_48108_49959 = state_48093__$1;
(statearr_48108_49959[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48094 === (5))){
var inst_48068 = (state_48093[(7)]);
var state_48093__$1 = state_48093;
var statearr_48109_49960 = state_48093__$1;
(statearr_48109_49960[(2)] = inst_48068);

(statearr_48109_49960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48094 === (10))){
var inst_48089 = (state_48093[(2)]);
var state_48093__$1 = state_48093;
var statearr_48110_49961 = state_48093__$1;
(statearr_48110_49961[(2)] = inst_48089);

(statearr_48110_49961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48094 === (8))){
var inst_48068 = (state_48093[(7)]);
var inst_48080 = cljs.core.next(inst_48068);
var inst_48068__$1 = inst_48080;
var state_48093__$1 = (function (){var statearr_48111 = state_48093;
(statearr_48111[(7)] = inst_48068__$1);

return statearr_48111;
})();
var statearr_48112_49964 = state_48093__$1;
(statearr_48112_49964[(2)] = null);

(statearr_48112_49964[(1)] = (2));


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
var cljs$core$async$state_machine__27017__auto__ = null;
var cljs$core$async$state_machine__27017__auto____0 = (function (){
var statearr_48113 = [null,null,null,null,null,null,null,null];
(statearr_48113[(0)] = cljs$core$async$state_machine__27017__auto__);

(statearr_48113[(1)] = (1));

return statearr_48113;
});
var cljs$core$async$state_machine__27017__auto____1 = (function (state_48093){
while(true){
var ret_value__27018__auto__ = (function (){try{while(true){
var result__27019__auto__ = switch__27016__auto__(state_48093);
if(cljs.core.keyword_identical_QMARK_(result__27019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27019__auto__;
}
break;
}
}catch (e48114){var ex__27020__auto__ = e48114;
var statearr_48115_49968 = state_48093;
(statearr_48115_49968[(2)] = ex__27020__auto__);


if(cljs.core.seq((state_48093[(4)]))){
var statearr_48116_49969 = state_48093;
(statearr_48116_49969[(1)] = cljs.core.first((state_48093[(4)])));

} else {
throw ex__27020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49970 = state_48093;
state_48093 = G__49970;
continue;
} else {
return ret_value__27018__auto__;
}
break;
}
});
cljs$core$async$state_machine__27017__auto__ = function(state_48093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27017__auto____1.call(this,state_48093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27017__auto____0;
cljs$core$async$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27017__auto____1;
return cljs$core$async$state_machine__27017__auto__;
})()
})();
var state__27088__auto__ = (function (){var statearr_48117 = f__27087__auto__();
(statearr_48117[(6)] = c__27086__auto__);

return statearr_48117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27088__auto__);
}));

return c__27086__auto__;
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
var G__48121 = arguments.length;
switch (G__48121) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_49974 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_49974(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_49975 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_49975(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_49976 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_49976(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_49979 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_49979(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48143 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48143 = (function (ch,cs,meta48144){
this.ch = ch;
this.cs = cs;
this.meta48144 = meta48144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48145,meta48144__$1){
var self__ = this;
var _48145__$1 = this;
return (new cljs.core.async.t_cljs$core$async48143(self__.ch,self__.cs,meta48144__$1));
}));

(cljs.core.async.t_cljs$core$async48143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48145){
var self__ = this;
var _48145__$1 = this;
return self__.meta48144;
}));

(cljs.core.async.t_cljs$core$async48143.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48143.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48143.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48143.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async48143.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async48143.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async48143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48144","meta48144",1844936406,null)], null);
}));

(cljs.core.async.t_cljs$core$async48143.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48143");

(cljs.core.async.t_cljs$core$async48143.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async48143");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48143.
 */
cljs.core.async.__GT_t_cljs$core$async48143 = (function cljs$core$async$mult_$___GT_t_cljs$core$async48143(ch__$1,cs__$1,meta48144){
return (new cljs.core.async.t_cljs$core$async48143(ch__$1,cs__$1,meta48144));
});

}

return (new cljs.core.async.t_cljs$core$async48143(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27086__auto___49982 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27087__auto__ = (function (){var switch__27016__auto__ = (function (state_48326){
var state_val_48327 = (state_48326[(1)]);
if((state_val_48327 === (7))){
var inst_48318 = (state_48326[(2)]);
var state_48326__$1 = state_48326;
var statearr_48333_49985 = state_48326__$1;
(statearr_48333_49985[(2)] = inst_48318);

(statearr_48333_49985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (20))){
var inst_48204 = (state_48326[(7)]);
var inst_48220 = cljs.core.first(inst_48204);
var inst_48221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48220,(0),null);
var inst_48222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48220,(1),null);
var state_48326__$1 = (function (){var statearr_48335 = state_48326;
(statearr_48335[(8)] = inst_48221);

return statearr_48335;
})();
if(cljs.core.truth_(inst_48222)){
var statearr_48337_49989 = state_48326__$1;
(statearr_48337_49989[(1)] = (22));

} else {
var statearr_48340_49990 = state_48326__$1;
(statearr_48340_49990[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (27))){
var inst_48264 = (state_48326[(9)]);
var inst_48256 = (state_48326[(10)]);
var inst_48169 = (state_48326[(11)]);
var inst_48254 = (state_48326[(12)]);
var inst_48264__$1 = cljs.core._nth(inst_48254,inst_48256);
var inst_48265 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48264__$1,inst_48169,done);
var state_48326__$1 = (function (){var statearr_48343 = state_48326;
(statearr_48343[(9)] = inst_48264__$1);

return statearr_48343;
})();
if(cljs.core.truth_(inst_48265)){
var statearr_48345_49991 = state_48326__$1;
(statearr_48345_49991[(1)] = (30));

} else {
var statearr_48348_49992 = state_48326__$1;
(statearr_48348_49992[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (1))){
var state_48326__$1 = state_48326;
var statearr_48350_49995 = state_48326__$1;
(statearr_48350_49995[(2)] = null);

(statearr_48350_49995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (24))){
var inst_48204 = (state_48326[(7)]);
var inst_48227 = (state_48326[(2)]);
var inst_48229 = cljs.core.next(inst_48204);
var inst_48181 = inst_48229;
var inst_48182 = null;
var inst_48183 = (0);
var inst_48184 = (0);
var state_48326__$1 = (function (){var statearr_48352 = state_48326;
(statearr_48352[(13)] = inst_48227);

(statearr_48352[(14)] = inst_48184);

(statearr_48352[(15)] = inst_48182);

(statearr_48352[(16)] = inst_48181);

(statearr_48352[(17)] = inst_48183);

return statearr_48352;
})();
var statearr_48356_49996 = state_48326__$1;
(statearr_48356_49996[(2)] = null);

(statearr_48356_49996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (39))){
var state_48326__$1 = state_48326;
var statearr_48368_49999 = state_48326__$1;
(statearr_48368_49999[(2)] = null);

(statearr_48368_49999[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (4))){
var inst_48169 = (state_48326[(11)]);
var inst_48169__$1 = (state_48326[(2)]);
var inst_48170 = (inst_48169__$1 == null);
var state_48326__$1 = (function (){var statearr_48371 = state_48326;
(statearr_48371[(11)] = inst_48169__$1);

return statearr_48371;
})();
if(cljs.core.truth_(inst_48170)){
var statearr_48375_50000 = state_48326__$1;
(statearr_48375_50000[(1)] = (5));

} else {
var statearr_48376_50001 = state_48326__$1;
(statearr_48376_50001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (15))){
var inst_48184 = (state_48326[(14)]);
var inst_48182 = (state_48326[(15)]);
var inst_48181 = (state_48326[(16)]);
var inst_48183 = (state_48326[(17)]);
var inst_48200 = (state_48326[(2)]);
var inst_48201 = (inst_48184 + (1));
var tmp48361 = inst_48182;
var tmp48362 = inst_48181;
var tmp48363 = inst_48183;
var inst_48181__$1 = tmp48362;
var inst_48182__$1 = tmp48361;
var inst_48183__$1 = tmp48363;
var inst_48184__$1 = inst_48201;
var state_48326__$1 = (function (){var statearr_48385 = state_48326;
(statearr_48385[(14)] = inst_48184__$1);

(statearr_48385[(18)] = inst_48200);

(statearr_48385[(15)] = inst_48182__$1);

(statearr_48385[(16)] = inst_48181__$1);

(statearr_48385[(17)] = inst_48183__$1);

return statearr_48385;
})();
var statearr_48389_50004 = state_48326__$1;
(statearr_48389_50004[(2)] = null);

(statearr_48389_50004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (21))){
var inst_48233 = (state_48326[(2)]);
var state_48326__$1 = state_48326;
var statearr_48394_50005 = state_48326__$1;
(statearr_48394_50005[(2)] = inst_48233);

(statearr_48394_50005[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (31))){
var inst_48264 = (state_48326[(9)]);
var inst_48268 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48264);
var state_48326__$1 = state_48326;
var statearr_48400_50009 = state_48326__$1;
(statearr_48400_50009[(2)] = inst_48268);

(statearr_48400_50009[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (32))){
var inst_48256 = (state_48326[(10)]);
var inst_48253 = (state_48326[(19)]);
var inst_48254 = (state_48326[(12)]);
var inst_48255 = (state_48326[(20)]);
var inst_48270 = (state_48326[(2)]);
var inst_48271 = (inst_48256 + (1));
var tmp48390 = inst_48253;
var tmp48391 = inst_48254;
var tmp48392 = inst_48255;
var inst_48253__$1 = tmp48390;
var inst_48254__$1 = tmp48391;
var inst_48255__$1 = tmp48392;
var inst_48256__$1 = inst_48271;
var state_48326__$1 = (function (){var statearr_48406 = state_48326;
(statearr_48406[(21)] = inst_48270);

(statearr_48406[(10)] = inst_48256__$1);

(statearr_48406[(19)] = inst_48253__$1);

(statearr_48406[(12)] = inst_48254__$1);

(statearr_48406[(20)] = inst_48255__$1);

return statearr_48406;
})();
var statearr_48409_50012 = state_48326__$1;
(statearr_48409_50012[(2)] = null);

(statearr_48409_50012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (40))){
var inst_48288 = (state_48326[(22)]);
var inst_48292 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48288);
var state_48326__$1 = state_48326;
var statearr_48411_50013 = state_48326__$1;
(statearr_48411_50013[(2)] = inst_48292);

(statearr_48411_50013[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (33))){
var inst_48275 = (state_48326[(23)]);
var inst_48279 = cljs.core.chunked_seq_QMARK_(inst_48275);
var state_48326__$1 = state_48326;
if(inst_48279){
var statearr_48413_50014 = state_48326__$1;
(statearr_48413_50014[(1)] = (36));

} else {
var statearr_48414_50015 = state_48326__$1;
(statearr_48414_50015[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (13))){
var inst_48193 = (state_48326[(24)]);
var inst_48197 = cljs.core.async.close_BANG_(inst_48193);
var state_48326__$1 = state_48326;
var statearr_48418_50016 = state_48326__$1;
(statearr_48418_50016[(2)] = inst_48197);

(statearr_48418_50016[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (22))){
var inst_48221 = (state_48326[(8)]);
var inst_48224 = cljs.core.async.close_BANG_(inst_48221);
var state_48326__$1 = state_48326;
var statearr_48419_50017 = state_48326__$1;
(statearr_48419_50017[(2)] = inst_48224);

(statearr_48419_50017[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (36))){
var inst_48275 = (state_48326[(23)]);
var inst_48282 = cljs.core.chunk_first(inst_48275);
var inst_48283 = cljs.core.chunk_rest(inst_48275);
var inst_48284 = cljs.core.count(inst_48282);
var inst_48253 = inst_48283;
var inst_48254 = inst_48282;
var inst_48255 = inst_48284;
var inst_48256 = (0);
var state_48326__$1 = (function (){var statearr_48423 = state_48326;
(statearr_48423[(10)] = inst_48256);

(statearr_48423[(19)] = inst_48253);

(statearr_48423[(12)] = inst_48254);

(statearr_48423[(20)] = inst_48255);

return statearr_48423;
})();
var statearr_48425_50019 = state_48326__$1;
(statearr_48425_50019[(2)] = null);

(statearr_48425_50019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (41))){
var inst_48275 = (state_48326[(23)]);
var inst_48294 = (state_48326[(2)]);
var inst_48295 = cljs.core.next(inst_48275);
var inst_48253 = inst_48295;
var inst_48254 = null;
var inst_48255 = (0);
var inst_48256 = (0);
var state_48326__$1 = (function (){var statearr_48427 = state_48326;
(statearr_48427[(10)] = inst_48256);

(statearr_48427[(25)] = inst_48294);

(statearr_48427[(19)] = inst_48253);

(statearr_48427[(12)] = inst_48254);

(statearr_48427[(20)] = inst_48255);

return statearr_48427;
})();
var statearr_48428_50020 = state_48326__$1;
(statearr_48428_50020[(2)] = null);

(statearr_48428_50020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (43))){
var state_48326__$1 = state_48326;
var statearr_48432_50021 = state_48326__$1;
(statearr_48432_50021[(2)] = null);

(statearr_48432_50021[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (29))){
var inst_48306 = (state_48326[(2)]);
var state_48326__$1 = state_48326;
var statearr_48433_50022 = state_48326__$1;
(statearr_48433_50022[(2)] = inst_48306);

(statearr_48433_50022[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (44))){
var inst_48315 = (state_48326[(2)]);
var state_48326__$1 = (function (){var statearr_48435 = state_48326;
(statearr_48435[(26)] = inst_48315);

return statearr_48435;
})();
var statearr_48436_50023 = state_48326__$1;
(statearr_48436_50023[(2)] = null);

(statearr_48436_50023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (6))){
var inst_48244 = (state_48326[(27)]);
var inst_48243 = cljs.core.deref(cs);
var inst_48244__$1 = cljs.core.keys(inst_48243);
var inst_48245 = cljs.core.count(inst_48244__$1);
var inst_48246 = cljs.core.reset_BANG_(dctr,inst_48245);
var inst_48252 = cljs.core.seq(inst_48244__$1);
var inst_48253 = inst_48252;
var inst_48254 = null;
var inst_48255 = (0);
var inst_48256 = (0);
var state_48326__$1 = (function (){var statearr_48441 = state_48326;
(statearr_48441[(28)] = inst_48246);

(statearr_48441[(10)] = inst_48256);

(statearr_48441[(19)] = inst_48253);

(statearr_48441[(27)] = inst_48244__$1);

(statearr_48441[(12)] = inst_48254);

(statearr_48441[(20)] = inst_48255);

return statearr_48441;
})();
var statearr_48444_50028 = state_48326__$1;
(statearr_48444_50028[(2)] = null);

(statearr_48444_50028[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (28))){
var inst_48275 = (state_48326[(23)]);
var inst_48253 = (state_48326[(19)]);
var inst_48275__$1 = cljs.core.seq(inst_48253);
var state_48326__$1 = (function (){var statearr_48448 = state_48326;
(statearr_48448[(23)] = inst_48275__$1);

return statearr_48448;
})();
if(inst_48275__$1){
var statearr_48449_50029 = state_48326__$1;
(statearr_48449_50029[(1)] = (33));

} else {
var statearr_48450_50030 = state_48326__$1;
(statearr_48450_50030[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (25))){
var inst_48256 = (state_48326[(10)]);
var inst_48255 = (state_48326[(20)]);
var inst_48259 = (inst_48256 < inst_48255);
var inst_48260 = inst_48259;
var state_48326__$1 = state_48326;
if(cljs.core.truth_(inst_48260)){
var statearr_48452_50031 = state_48326__$1;
(statearr_48452_50031[(1)] = (27));

} else {
var statearr_48453_50032 = state_48326__$1;
(statearr_48453_50032[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (34))){
var state_48326__$1 = state_48326;
var statearr_48457_50033 = state_48326__$1;
(statearr_48457_50033[(2)] = null);

(statearr_48457_50033[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (17))){
var state_48326__$1 = state_48326;
var statearr_48458_50034 = state_48326__$1;
(statearr_48458_50034[(2)] = null);

(statearr_48458_50034[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (3))){
var inst_48320 = (state_48326[(2)]);
var state_48326__$1 = state_48326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48326__$1,inst_48320);
} else {
if((state_val_48327 === (12))){
var inst_48238 = (state_48326[(2)]);
var state_48326__$1 = state_48326;
var statearr_48460_50035 = state_48326__$1;
(statearr_48460_50035[(2)] = inst_48238);

(statearr_48460_50035[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (2))){
var state_48326__$1 = state_48326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48326__$1,(4),ch);
} else {
if((state_val_48327 === (23))){
var state_48326__$1 = state_48326;
var statearr_48464_50036 = state_48326__$1;
(statearr_48464_50036[(2)] = null);

(statearr_48464_50036[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (35))){
var inst_48302 = (state_48326[(2)]);
var state_48326__$1 = state_48326;
var statearr_48466_50037 = state_48326__$1;
(statearr_48466_50037[(2)] = inst_48302);

(statearr_48466_50037[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (19))){
var inst_48204 = (state_48326[(7)]);
var inst_48211 = cljs.core.chunk_first(inst_48204);
var inst_48212 = cljs.core.chunk_rest(inst_48204);
var inst_48213 = cljs.core.count(inst_48211);
var inst_48181 = inst_48212;
var inst_48182 = inst_48211;
var inst_48183 = inst_48213;
var inst_48184 = (0);
var state_48326__$1 = (function (){var statearr_48470 = state_48326;
(statearr_48470[(14)] = inst_48184);

(statearr_48470[(15)] = inst_48182);

(statearr_48470[(16)] = inst_48181);

(statearr_48470[(17)] = inst_48183);

return statearr_48470;
})();
var statearr_48472_50038 = state_48326__$1;
(statearr_48472_50038[(2)] = null);

(statearr_48472_50038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (11))){
var inst_48204 = (state_48326[(7)]);
var inst_48181 = (state_48326[(16)]);
var inst_48204__$1 = cljs.core.seq(inst_48181);
var state_48326__$1 = (function (){var statearr_48476 = state_48326;
(statearr_48476[(7)] = inst_48204__$1);

return statearr_48476;
})();
if(inst_48204__$1){
var statearr_48478_50040 = state_48326__$1;
(statearr_48478_50040[(1)] = (16));

} else {
var statearr_48479_50041 = state_48326__$1;
(statearr_48479_50041[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (9))){
var inst_48241 = (state_48326[(2)]);
var state_48326__$1 = state_48326;
var statearr_48482_50042 = state_48326__$1;
(statearr_48482_50042[(2)] = inst_48241);

(statearr_48482_50042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (5))){
var inst_48179 = cljs.core.deref(cs);
var inst_48180 = cljs.core.seq(inst_48179);
var inst_48181 = inst_48180;
var inst_48182 = null;
var inst_48183 = (0);
var inst_48184 = (0);
var state_48326__$1 = (function (){var statearr_48485 = state_48326;
(statearr_48485[(14)] = inst_48184);

(statearr_48485[(15)] = inst_48182);

(statearr_48485[(16)] = inst_48181);

(statearr_48485[(17)] = inst_48183);

return statearr_48485;
})();
var statearr_48486_50045 = state_48326__$1;
(statearr_48486_50045[(2)] = null);

(statearr_48486_50045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (14))){
var state_48326__$1 = state_48326;
var statearr_48490_50046 = state_48326__$1;
(statearr_48490_50046[(2)] = null);

(statearr_48490_50046[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (45))){
var inst_48312 = (state_48326[(2)]);
var state_48326__$1 = state_48326;
var statearr_48492_50048 = state_48326__$1;
(statearr_48492_50048[(2)] = inst_48312);

(statearr_48492_50048[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (26))){
var inst_48244 = (state_48326[(27)]);
var inst_48308 = (state_48326[(2)]);
var inst_48309 = cljs.core.seq(inst_48244);
var state_48326__$1 = (function (){var statearr_48496 = state_48326;
(statearr_48496[(29)] = inst_48308);

return statearr_48496;
})();
if(inst_48309){
var statearr_48497_50050 = state_48326__$1;
(statearr_48497_50050[(1)] = (42));

} else {
var statearr_48499_50051 = state_48326__$1;
(statearr_48499_50051[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (16))){
var inst_48204 = (state_48326[(7)]);
var inst_48209 = cljs.core.chunked_seq_QMARK_(inst_48204);
var state_48326__$1 = state_48326;
if(inst_48209){
var statearr_48502_50052 = state_48326__$1;
(statearr_48502_50052[(1)] = (19));

} else {
var statearr_48504_50053 = state_48326__$1;
(statearr_48504_50053[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (38))){
var inst_48298 = (state_48326[(2)]);
var state_48326__$1 = state_48326;
var statearr_48506_50054 = state_48326__$1;
(statearr_48506_50054[(2)] = inst_48298);

(statearr_48506_50054[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (30))){
var state_48326__$1 = state_48326;
var statearr_48510_50055 = state_48326__$1;
(statearr_48510_50055[(2)] = null);

(statearr_48510_50055[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (10))){
var inst_48184 = (state_48326[(14)]);
var inst_48182 = (state_48326[(15)]);
var inst_48192 = cljs.core._nth(inst_48182,inst_48184);
var inst_48193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48192,(0),null);
var inst_48195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48192,(1),null);
var state_48326__$1 = (function (){var statearr_48514 = state_48326;
(statearr_48514[(24)] = inst_48193);

return statearr_48514;
})();
if(cljs.core.truth_(inst_48195)){
var statearr_48515_50056 = state_48326__$1;
(statearr_48515_50056[(1)] = (13));

} else {
var statearr_48516_50057 = state_48326__$1;
(statearr_48516_50057[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (18))){
var inst_48236 = (state_48326[(2)]);
var state_48326__$1 = state_48326;
var statearr_48517_50058 = state_48326__$1;
(statearr_48517_50058[(2)] = inst_48236);

(statearr_48517_50058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (42))){
var state_48326__$1 = state_48326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48326__$1,(45),dchan);
} else {
if((state_val_48327 === (37))){
var inst_48275 = (state_48326[(23)]);
var inst_48169 = (state_48326[(11)]);
var inst_48288 = (state_48326[(22)]);
var inst_48288__$1 = cljs.core.first(inst_48275);
var inst_48289 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48288__$1,inst_48169,done);
var state_48326__$1 = (function (){var statearr_48520 = state_48326;
(statearr_48520[(22)] = inst_48288__$1);

return statearr_48520;
})();
if(cljs.core.truth_(inst_48289)){
var statearr_48521_50059 = state_48326__$1;
(statearr_48521_50059[(1)] = (39));

} else {
var statearr_48522_50060 = state_48326__$1;
(statearr_48522_50060[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48327 === (8))){
var inst_48184 = (state_48326[(14)]);
var inst_48183 = (state_48326[(17)]);
var inst_48186 = (inst_48184 < inst_48183);
var inst_48187 = inst_48186;
var state_48326__$1 = state_48326;
if(cljs.core.truth_(inst_48187)){
var statearr_48523_50061 = state_48326__$1;
(statearr_48523_50061[(1)] = (10));

} else {
var statearr_48524_50062 = state_48326__$1;
(statearr_48524_50062[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__27017__auto__ = null;
var cljs$core$async$mult_$_state_machine__27017__auto____0 = (function (){
var statearr_48529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48529[(0)] = cljs$core$async$mult_$_state_machine__27017__auto__);

(statearr_48529[(1)] = (1));

return statearr_48529;
});
var cljs$core$async$mult_$_state_machine__27017__auto____1 = (function (state_48326){
while(true){
var ret_value__27018__auto__ = (function (){try{while(true){
var result__27019__auto__ = switch__27016__auto__(state_48326);
if(cljs.core.keyword_identical_QMARK_(result__27019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27019__auto__;
}
break;
}
}catch (e48534){var ex__27020__auto__ = e48534;
var statearr_48536_50063 = state_48326;
(statearr_48536_50063[(2)] = ex__27020__auto__);


if(cljs.core.seq((state_48326[(4)]))){
var statearr_48537_50064 = state_48326;
(statearr_48537_50064[(1)] = cljs.core.first((state_48326[(4)])));

} else {
throw ex__27020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50065 = state_48326;
state_48326 = G__50065;
continue;
} else {
return ret_value__27018__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27017__auto__ = function(state_48326){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27017__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27017__auto____1.call(this,state_48326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27017__auto____0;
cljs$core$async$mult_$_state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27017__auto____1;
return cljs$core$async$mult_$_state_machine__27017__auto__;
})()
})();
var state__27088__auto__ = (function (){var statearr_48538 = f__27087__auto__();
(statearr_48538[(6)] = c__27086__auto___49982);

return statearr_48538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27088__auto__);
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
var G__48548 = arguments.length;
switch (G__48548) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_50074 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_50074(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_50075 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_50075(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_50079 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_50079(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_50083 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_50083(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_50084 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_50084(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50092 = arguments.length;
var i__5770__auto___50093 = (0);
while(true){
if((i__5770__auto___50093 < len__5769__auto___50092)){
args__5775__auto__.push((arguments[i__5770__auto___50093]));

var G__50094 = (i__5770__auto___50093 + (1));
i__5770__auto___50093 = G__50094;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48603){
var map__48604 = p__48603;
var map__48604__$1 = cljs.core.__destructure_map(map__48604);
var opts = map__48604__$1;
var statearr_48605_50099 = state;
(statearr_48605_50099[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_48606_50100 = state;
(statearr_48606_50100[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_48611_50105 = state;
(statearr_48611_50105[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48594){
var G__48595 = cljs.core.first(seq48594);
var seq48594__$1 = cljs.core.next(seq48594);
var G__48596 = cljs.core.first(seq48594__$1);
var seq48594__$2 = cljs.core.next(seq48594__$1);
var G__48597 = cljs.core.first(seq48594__$2);
var seq48594__$3 = cljs.core.next(seq48594__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48595,G__48596,G__48597,seq48594__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48624 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48624 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48625){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta48625 = meta48625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48626,meta48625__$1){
var self__ = this;
var _48626__$1 = this;
return (new cljs.core.async.t_cljs$core$async48624(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48625__$1));
}));

(cljs.core.async.t_cljs$core$async48624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48626){
var self__ = this;
var _48626__$1 = this;
return self__.meta48625;
}));

(cljs.core.async.t_cljs$core$async48624.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48624.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async48624.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48624.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48624.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48624.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48624.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48624.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta48625","meta48625",2045706908,null)], null);
}));

(cljs.core.async.t_cljs$core$async48624.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48624");

(cljs.core.async.t_cljs$core$async48624.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async48624");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48624.
 */
cljs.core.async.__GT_t_cljs$core$async48624 = (function cljs$core$async$mix_$___GT_t_cljs$core$async48624(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48625){
return (new cljs.core.async.t_cljs$core$async48624(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48625));
});

}

return (new cljs.core.async.t_cljs$core$async48624(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27086__auto___50130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27087__auto__ = (function (){var switch__27016__auto__ = (function (state_48708){
var state_val_48709 = (state_48708[(1)]);
if((state_val_48709 === (7))){
var inst_48668 = (state_48708[(2)]);
var state_48708__$1 = state_48708;
if(cljs.core.truth_(inst_48668)){
var statearr_48710_50131 = state_48708__$1;
(statearr_48710_50131[(1)] = (8));

} else {
var statearr_48711_50132 = state_48708__$1;
(statearr_48711_50132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (20))){
var inst_48661 = (state_48708[(7)]);
var state_48708__$1 = state_48708;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48708__$1,(23),out,inst_48661);
} else {
if((state_val_48709 === (1))){
var inst_48643 = calc_state();
var inst_48644 = cljs.core.__destructure_map(inst_48643);
var inst_48645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48644,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48644,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48644,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48648 = inst_48643;
var state_48708__$1 = (function (){var statearr_48714 = state_48708;
(statearr_48714[(8)] = inst_48646);

(statearr_48714[(9)] = inst_48645);

(statearr_48714[(10)] = inst_48647);

(statearr_48714[(11)] = inst_48648);

return statearr_48714;
})();
var statearr_48715_50133 = state_48708__$1;
(statearr_48715_50133[(2)] = null);

(statearr_48715_50133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (24))){
var inst_48651 = (state_48708[(12)]);
var inst_48648 = inst_48651;
var state_48708__$1 = (function (){var statearr_48716 = state_48708;
(statearr_48716[(11)] = inst_48648);

return statearr_48716;
})();
var statearr_48717_50134 = state_48708__$1;
(statearr_48717_50134[(2)] = null);

(statearr_48717_50134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (4))){
var inst_48661 = (state_48708[(7)]);
var inst_48663 = (state_48708[(13)]);
var inst_48660 = (state_48708[(2)]);
var inst_48661__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48660,(0),null);
var inst_48662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48660,(1),null);
var inst_48663__$1 = (inst_48661__$1 == null);
var state_48708__$1 = (function (){var statearr_48718 = state_48708;
(statearr_48718[(7)] = inst_48661__$1);

(statearr_48718[(13)] = inst_48663__$1);

(statearr_48718[(14)] = inst_48662);

return statearr_48718;
})();
if(cljs.core.truth_(inst_48663__$1)){
var statearr_48719_50136 = state_48708__$1;
(statearr_48719_50136[(1)] = (5));

} else {
var statearr_48720_50137 = state_48708__$1;
(statearr_48720_50137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (15))){
var inst_48682 = (state_48708[(15)]);
var inst_48652 = (state_48708[(16)]);
var inst_48682__$1 = cljs.core.empty_QMARK_(inst_48652);
var state_48708__$1 = (function (){var statearr_48721 = state_48708;
(statearr_48721[(15)] = inst_48682__$1);

return statearr_48721;
})();
if(inst_48682__$1){
var statearr_48722_50138 = state_48708__$1;
(statearr_48722_50138[(1)] = (17));

} else {
var statearr_48723_50139 = state_48708__$1;
(statearr_48723_50139[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (21))){
var inst_48651 = (state_48708[(12)]);
var inst_48648 = inst_48651;
var state_48708__$1 = (function (){var statearr_48724 = state_48708;
(statearr_48724[(11)] = inst_48648);

return statearr_48724;
})();
var statearr_48725_50140 = state_48708__$1;
(statearr_48725_50140[(2)] = null);

(statearr_48725_50140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (13))){
var inst_48675 = (state_48708[(2)]);
var inst_48676 = calc_state();
var inst_48648 = inst_48676;
var state_48708__$1 = (function (){var statearr_48726 = state_48708;
(statearr_48726[(11)] = inst_48648);

(statearr_48726[(17)] = inst_48675);

return statearr_48726;
})();
var statearr_48727_50141 = state_48708__$1;
(statearr_48727_50141[(2)] = null);

(statearr_48727_50141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (22))){
var inst_48702 = (state_48708[(2)]);
var state_48708__$1 = state_48708;
var statearr_48728_50142 = state_48708__$1;
(statearr_48728_50142[(2)] = inst_48702);

(statearr_48728_50142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (6))){
var inst_48662 = (state_48708[(14)]);
var inst_48666 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48662,change);
var state_48708__$1 = state_48708;
var statearr_48729_50143 = state_48708__$1;
(statearr_48729_50143[(2)] = inst_48666);

(statearr_48729_50143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (25))){
var state_48708__$1 = state_48708;
var statearr_48730_50144 = state_48708__$1;
(statearr_48730_50144[(2)] = null);

(statearr_48730_50144[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (17))){
var inst_48653 = (state_48708[(18)]);
var inst_48662 = (state_48708[(14)]);
var inst_48684 = (inst_48653.cljs$core$IFn$_invoke$arity$1 ? inst_48653.cljs$core$IFn$_invoke$arity$1(inst_48662) : inst_48653.call(null,inst_48662));
var inst_48685 = cljs.core.not(inst_48684);
var state_48708__$1 = state_48708;
var statearr_48731_50145 = state_48708__$1;
(statearr_48731_50145[(2)] = inst_48685);

(statearr_48731_50145[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (3))){
var inst_48706 = (state_48708[(2)]);
var state_48708__$1 = state_48708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48708__$1,inst_48706);
} else {
if((state_val_48709 === (12))){
var state_48708__$1 = state_48708;
var statearr_48732_50146 = state_48708__$1;
(statearr_48732_50146[(2)] = null);

(statearr_48732_50146[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (2))){
var inst_48651 = (state_48708[(12)]);
var inst_48648 = (state_48708[(11)]);
var inst_48651__$1 = cljs.core.__destructure_map(inst_48648);
var inst_48652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48651__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48651__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48651__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48708__$1 = (function (){var statearr_48733 = state_48708;
(statearr_48733[(16)] = inst_48652);

(statearr_48733[(18)] = inst_48653);

(statearr_48733[(12)] = inst_48651__$1);

return statearr_48733;
})();
return cljs.core.async.ioc_alts_BANG_(state_48708__$1,(4),inst_48654);
} else {
if((state_val_48709 === (23))){
var inst_48693 = (state_48708[(2)]);
var state_48708__$1 = state_48708;
if(cljs.core.truth_(inst_48693)){
var statearr_48734_50147 = state_48708__$1;
(statearr_48734_50147[(1)] = (24));

} else {
var statearr_48735_50148 = state_48708__$1;
(statearr_48735_50148[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (19))){
var inst_48688 = (state_48708[(2)]);
var state_48708__$1 = state_48708;
var statearr_48736_50149 = state_48708__$1;
(statearr_48736_50149[(2)] = inst_48688);

(statearr_48736_50149[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (11))){
var inst_48662 = (state_48708[(14)]);
var inst_48672 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_48662);
var state_48708__$1 = state_48708;
var statearr_48737_50150 = state_48708__$1;
(statearr_48737_50150[(2)] = inst_48672);

(statearr_48737_50150[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (9))){
var inst_48652 = (state_48708[(16)]);
var inst_48679 = (state_48708[(19)]);
var inst_48662 = (state_48708[(14)]);
var inst_48679__$1 = (inst_48652.cljs$core$IFn$_invoke$arity$1 ? inst_48652.cljs$core$IFn$_invoke$arity$1(inst_48662) : inst_48652.call(null,inst_48662));
var state_48708__$1 = (function (){var statearr_48738 = state_48708;
(statearr_48738[(19)] = inst_48679__$1);

return statearr_48738;
})();
if(cljs.core.truth_(inst_48679__$1)){
var statearr_48739_50151 = state_48708__$1;
(statearr_48739_50151[(1)] = (14));

} else {
var statearr_48740_50152 = state_48708__$1;
(statearr_48740_50152[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (5))){
var inst_48663 = (state_48708[(13)]);
var state_48708__$1 = state_48708;
var statearr_48741_50153 = state_48708__$1;
(statearr_48741_50153[(2)] = inst_48663);

(statearr_48741_50153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (14))){
var inst_48679 = (state_48708[(19)]);
var state_48708__$1 = state_48708;
var statearr_48742_50155 = state_48708__$1;
(statearr_48742_50155[(2)] = inst_48679);

(statearr_48742_50155[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (26))){
var inst_48698 = (state_48708[(2)]);
var state_48708__$1 = state_48708;
var statearr_48743_50156 = state_48708__$1;
(statearr_48743_50156[(2)] = inst_48698);

(statearr_48743_50156[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (16))){
var inst_48690 = (state_48708[(2)]);
var state_48708__$1 = state_48708;
if(cljs.core.truth_(inst_48690)){
var statearr_48744_50157 = state_48708__$1;
(statearr_48744_50157[(1)] = (20));

} else {
var statearr_48745_50158 = state_48708__$1;
(statearr_48745_50158[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (10))){
var inst_48704 = (state_48708[(2)]);
var state_48708__$1 = state_48708;
var statearr_48746_50164 = state_48708__$1;
(statearr_48746_50164[(2)] = inst_48704);

(statearr_48746_50164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (18))){
var inst_48682 = (state_48708[(15)]);
var state_48708__$1 = state_48708;
var statearr_48747_50165 = state_48708__$1;
(statearr_48747_50165[(2)] = inst_48682);

(statearr_48747_50165[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (8))){
var inst_48661 = (state_48708[(7)]);
var inst_48670 = (inst_48661 == null);
var state_48708__$1 = state_48708;
if(cljs.core.truth_(inst_48670)){
var statearr_48748_50166 = state_48708__$1;
(statearr_48748_50166[(1)] = (11));

} else {
var statearr_48749_50167 = state_48708__$1;
(statearr_48749_50167[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__27017__auto__ = null;
var cljs$core$async$mix_$_state_machine__27017__auto____0 = (function (){
var statearr_48750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48750[(0)] = cljs$core$async$mix_$_state_machine__27017__auto__);

(statearr_48750[(1)] = (1));

return statearr_48750;
});
var cljs$core$async$mix_$_state_machine__27017__auto____1 = (function (state_48708){
while(true){
var ret_value__27018__auto__ = (function (){try{while(true){
var result__27019__auto__ = switch__27016__auto__(state_48708);
if(cljs.core.keyword_identical_QMARK_(result__27019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27019__auto__;
}
break;
}
}catch (e48751){var ex__27020__auto__ = e48751;
var statearr_48752_50169 = state_48708;
(statearr_48752_50169[(2)] = ex__27020__auto__);


if(cljs.core.seq((state_48708[(4)]))){
var statearr_48753_50170 = state_48708;
(statearr_48753_50170[(1)] = cljs.core.first((state_48708[(4)])));

} else {
throw ex__27020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50172 = state_48708;
state_48708 = G__50172;
continue;
} else {
return ret_value__27018__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27017__auto__ = function(state_48708){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27017__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27017__auto____1.call(this,state_48708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27017__auto____0;
cljs$core$async$mix_$_state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27017__auto____1;
return cljs$core$async$mix_$_state_machine__27017__auto__;
})()
})();
var state__27088__auto__ = (function (){var statearr_48754 = f__27087__auto__();
(statearr_48754[(6)] = c__27086__auto___50130);

return statearr_48754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27088__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_50178 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_50178(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_50180 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_50180(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_50182 = (function() {
var G__50183 = null;
var G__50183__1 = (function (p){
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
var G__50183__2 = (function (p,v){
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
G__50183 = function(p,v){
switch(arguments.length){
case 1:
return G__50183__1.call(this,p);
case 2:
return G__50183__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50183.cljs$core$IFn$_invoke$arity$1 = G__50183__1;
G__50183.cljs$core$IFn$_invoke$arity$2 = G__50183__2;
return G__50183;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48762 = arguments.length;
switch (G__48762) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50182(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50182(p,v);
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
var G__48765 = arguments.length;
switch (G__48765) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__48763_SHARP_){
if(cljs.core.truth_((p1__48763_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48763_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__48763_SHARP_.call(null,topic)))){
return p1__48763_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48763_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48766 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48766 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48767){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48767 = meta48767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48768,meta48767__$1){
var self__ = this;
var _48768__$1 = this;
return (new cljs.core.async.t_cljs$core$async48766(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48767__$1));
}));

(cljs.core.async.t_cljs$core$async48766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48768){
var self__ = this;
var _48768__$1 = this;
return self__.meta48767;
}));

(cljs.core.async.t_cljs$core$async48766.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48766.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48766.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48766.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async48766.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async48766.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async48766.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async48766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48767","meta48767",-1228574453,null)], null);
}));

(cljs.core.async.t_cljs$core$async48766.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48766");

(cljs.core.async.t_cljs$core$async48766.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async48766");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48766.
 */
cljs.core.async.__GT_t_cljs$core$async48766 = (function cljs$core$async$__GT_t_cljs$core$async48766(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48767){
return (new cljs.core.async.t_cljs$core$async48766(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48767));
});

}

return (new cljs.core.async.t_cljs$core$async48766(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27086__auto___50250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27087__auto__ = (function (){var switch__27016__auto__ = (function (state_48873){
var state_val_48874 = (state_48873[(1)]);
if((state_val_48874 === (7))){
var inst_48863 = (state_48873[(2)]);
var state_48873__$1 = state_48873;
var statearr_48875_50251 = state_48873__$1;
(statearr_48875_50251[(2)] = inst_48863);

(statearr_48875_50251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48874 === (20))){
var state_48873__$1 = state_48873;
var statearr_48876_50252 = state_48873__$1;
(statearr_48876_50252[(2)] = null);

(statearr_48876_50252[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48874 === (1))){
var state_48873__$1 = state_48873;
var statearr_48881_50253 = state_48873__$1;
(statearr_48881_50253[(2)] = null);

(statearr_48881_50253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48874 === (24))){
var inst_48840 = (state_48873[(7)]);
var inst_48855 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_48840);
var state_48873__$1 = state_48873;
var statearr_48888_50271 = state_48873__$1;
(statearr_48888_50271[(2)] = inst_48855);

(statearr_48888_50271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48874 === (4))){
var inst_48785 = (state_48873[(8)]);
var inst_48785__$1 = (state_48873[(2)]);
var inst_48786 = (inst_48785__$1 == null);
var state_48873__$1 = (function (){var statearr_48889 = state_48873;
(statearr_48889[(8)] = inst_48785__$1);

return statearr_48889;
})();
if(cljs.core.truth_(inst_48786)){
var statearr_48890_50279 = state_48873__$1;
(statearr_48890_50279[(1)] = (5));

} else {
var statearr_48894_50280 = state_48873__$1;
(statearr_48894_50280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48874 === (15))){
var inst_48827 = (state_48873[(2)]);
var state_48873__$1 = state_48873;
var statearr_48895_50287 = state_48873__$1;
(statearr_48895_50287[(2)] = inst_48827);

(statearr_48895_50287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48874 === (21))){
var inst_48860 = (state_48873[(2)]);
var state_48873__$1 = (function (){var statearr_48896 = state_48873;
(statearr_48896[(9)] = inst_48860);

return statearr_48896;
})();
var statearr_48897_50288 = state_48873__$1;
(statearr_48897_50288[(2)] = null);

(statearr_48897_50288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48874 === (13))){
var inst_48809 = (state_48873[(10)]);
var inst_48811 = cljs.core.chunked_seq_QMARK_(inst_48809);
var state_48873__$1 = state_48873;
if(inst_48811){
var statearr_48898_50289 = state_48873__$1;
(statearr_48898_50289[(1)] = (16));

} else {
var statearr_48899_50290 = state_48873__$1;
(statearr_48899_50290[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48874 === (22))){
var inst_48852 = (state_48873[(2)]);
var state_48873__$1 = state_48873;
if(cljs.core.truth_(inst_48852)){
var statearr_48900_50385 = state_48873__$1;
(statearr_48900_50385[(1)] = (23));

} else {
var statearr_48901_50386 = state_48873__$1;
(statearr_48901_50386[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48874 === (6))){
var inst_48785 = (state_48873[(8)]);
var inst_48848 = (state_48873[(11)]);
var inst_48840 = (state_48873[(7)]);
var inst_48840__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_48785) : topic_fn.call(null,inst_48785));
var inst_48847 = cljs.core.deref(mults);
var inst_48848__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48847,inst_48840__$1);
var state_48873__$1 = (function (){var statearr_48906 = state_48873;
(statearr_48906[(11)] = inst_48848__$1);

(statearr_48906[(7)] = inst_48840__$1);

return statearr_48906;
})();
if(cljs.core.truth_(inst_48848__$1)){
var statearr_48907_50388 = state_48873__$1;
(statearr_48907_50388[(1)] = (19));

} else {
var statearr_48908_50389 = state_48873__$1;
(statearr_48908_50389[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48874 === (25))){
var inst_48857 = (state_48873[(2)]);
var state_48873__$1 = state_48873;
var statearr_48909_50391 = state_48873__$1;
(statearr_48909_50391[(2)] = inst_48857);

(statearr_48909_50391[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48874 === (17))){
var inst_48809 = (state_48873[(10)]);
var inst_48818 = cljs.core.first(inst_48809);
var inst_48819 = cljs.core.async.muxch_STAR_(inst_48818);
var inst_48820 = cljs.core.async.close_BANG_(inst_48819);
var inst_48821 = cljs.core.next(inst_48809);
var inst_48795 = inst_48821;
var inst_48796 = null;
var inst_48797 = (0);
var inst_48798 = (0);
var state_48873__$1 = (function (){var statearr_48910 = state_48873;
(statearr_48910[(12)] = inst_48796);

(statearr_48910[(13)] = inst_48820);

(statearr_48910[(14)] = inst_48795);

(statearr_48910[(15)] = inst_48798);

(statearr_48910[(16)] = inst_48797);

return statearr_48910;
})();
var statearr_48911_50393 = state_48873__$1;
(statearr_48911_50393[(2)] = null);

(statearr_48911_50393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48874 === (3))){
var inst_48865 = (state_48873[(2)]);
var state_48873__$1 = state_48873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48873__$1,inst_48865);
} else {
if((state_val_48874 === (12))){
var inst_48829 = (state_48873[(2)]);
var state_48873__$1 = state_48873;
var statearr_48912_50396 = state_48873__$1;
(statearr_48912_50396[(2)] = inst_48829);

(statearr_48912_50396[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48874 === (2))){
var state_48873__$1 = state_48873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48873__$1,(4),ch);
} else {
if((state_val_48874 === (23))){
var state_48873__$1 = state_48873;
var statearr_48913_50397 = state_48873__$1;
(statearr_48913_50397[(2)] = null);

(statearr_48913_50397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48874 === (19))){
var inst_48785 = (state_48873[(8)]);
var inst_48848 = (state_48873[(11)]);
var inst_48850 = cljs.core.async.muxch_STAR_(inst_48848);
var state_48873__$1 = state_48873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48873__$1,(22),inst_48850,inst_48785);
} else {
if((state_val_48874 === (11))){
var inst_48809 = (state_48873[(10)]);
var inst_48795 = (state_48873[(14)]);
var inst_48809__$1 = cljs.core.seq(inst_48795);
var state_48873__$1 = (function (){var statearr_48918 = state_48873;
(statearr_48918[(10)] = inst_48809__$1);

return statearr_48918;
})();
if(inst_48809__$1){
var statearr_48919_50400 = state_48873__$1;
(statearr_48919_50400[(1)] = (13));

} else {
var statearr_48920_50401 = state_48873__$1;
(statearr_48920_50401[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48874 === (9))){
var inst_48837 = (state_48873[(2)]);
var state_48873__$1 = state_48873;
var statearr_48921_50402 = state_48873__$1;
(statearr_48921_50402[(2)] = inst_48837);

(statearr_48921_50402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48874 === (5))){
var inst_48792 = cljs.core.deref(mults);
var inst_48793 = cljs.core.vals(inst_48792);
var inst_48794 = cljs.core.seq(inst_48793);
var inst_48795 = inst_48794;
var inst_48796 = null;
var inst_48797 = (0);
var inst_48798 = (0);
var state_48873__$1 = (function (){var statearr_48924 = state_48873;
(statearr_48924[(12)] = inst_48796);

(statearr_48924[(14)] = inst_48795);

(statearr_48924[(15)] = inst_48798);

(statearr_48924[(16)] = inst_48797);

return statearr_48924;
})();
var statearr_48925_50404 = state_48873__$1;
(statearr_48925_50404[(2)] = null);

(statearr_48925_50404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48874 === (14))){
var state_48873__$1 = state_48873;
var statearr_48930_50405 = state_48873__$1;
(statearr_48930_50405[(2)] = null);

(statearr_48930_50405[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48874 === (16))){
var inst_48809 = (state_48873[(10)]);
var inst_48813 = cljs.core.chunk_first(inst_48809);
var inst_48814 = cljs.core.chunk_rest(inst_48809);
var inst_48815 = cljs.core.count(inst_48813);
var inst_48795 = inst_48814;
var inst_48796 = inst_48813;
var inst_48797 = inst_48815;
var inst_48798 = (0);
var state_48873__$1 = (function (){var statearr_48931 = state_48873;
(statearr_48931[(12)] = inst_48796);

(statearr_48931[(14)] = inst_48795);

(statearr_48931[(15)] = inst_48798);

(statearr_48931[(16)] = inst_48797);

return statearr_48931;
})();
var statearr_48933_50407 = state_48873__$1;
(statearr_48933_50407[(2)] = null);

(statearr_48933_50407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48874 === (10))){
var inst_48796 = (state_48873[(12)]);
var inst_48795 = (state_48873[(14)]);
var inst_48798 = (state_48873[(15)]);
var inst_48797 = (state_48873[(16)]);
var inst_48803 = cljs.core._nth(inst_48796,inst_48798);
var inst_48804 = cljs.core.async.muxch_STAR_(inst_48803);
var inst_48805 = cljs.core.async.close_BANG_(inst_48804);
var inst_48806 = (inst_48798 + (1));
var tmp48926 = inst_48796;
var tmp48927 = inst_48795;
var tmp48928 = inst_48797;
var inst_48795__$1 = tmp48927;
var inst_48796__$1 = tmp48926;
var inst_48797__$1 = tmp48928;
var inst_48798__$1 = inst_48806;
var state_48873__$1 = (function (){var statearr_48934 = state_48873;
(statearr_48934[(12)] = inst_48796__$1);

(statearr_48934[(14)] = inst_48795__$1);

(statearr_48934[(17)] = inst_48805);

(statearr_48934[(15)] = inst_48798__$1);

(statearr_48934[(16)] = inst_48797__$1);

return statearr_48934;
})();
var statearr_48935_50418 = state_48873__$1;
(statearr_48935_50418[(2)] = null);

(statearr_48935_50418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48874 === (18))){
var inst_48824 = (state_48873[(2)]);
var state_48873__$1 = state_48873;
var statearr_48936_50423 = state_48873__$1;
(statearr_48936_50423[(2)] = inst_48824);

(statearr_48936_50423[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48874 === (8))){
var inst_48798 = (state_48873[(15)]);
var inst_48797 = (state_48873[(16)]);
var inst_48800 = (inst_48798 < inst_48797);
var inst_48801 = inst_48800;
var state_48873__$1 = state_48873;
if(cljs.core.truth_(inst_48801)){
var statearr_48937_50424 = state_48873__$1;
(statearr_48937_50424[(1)] = (10));

} else {
var statearr_48938_50425 = state_48873__$1;
(statearr_48938_50425[(1)] = (11));

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
var cljs$core$async$state_machine__27017__auto__ = null;
var cljs$core$async$state_machine__27017__auto____0 = (function (){
var statearr_48939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48939[(0)] = cljs$core$async$state_machine__27017__auto__);

(statearr_48939[(1)] = (1));

return statearr_48939;
});
var cljs$core$async$state_machine__27017__auto____1 = (function (state_48873){
while(true){
var ret_value__27018__auto__ = (function (){try{while(true){
var result__27019__auto__ = switch__27016__auto__(state_48873);
if(cljs.core.keyword_identical_QMARK_(result__27019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27019__auto__;
}
break;
}
}catch (e48940){var ex__27020__auto__ = e48940;
var statearr_48941_50426 = state_48873;
(statearr_48941_50426[(2)] = ex__27020__auto__);


if(cljs.core.seq((state_48873[(4)]))){
var statearr_48942_50427 = state_48873;
(statearr_48942_50427[(1)] = cljs.core.first((state_48873[(4)])));

} else {
throw ex__27020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50428 = state_48873;
state_48873 = G__50428;
continue;
} else {
return ret_value__27018__auto__;
}
break;
}
});
cljs$core$async$state_machine__27017__auto__ = function(state_48873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27017__auto____1.call(this,state_48873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27017__auto____0;
cljs$core$async$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27017__auto____1;
return cljs$core$async$state_machine__27017__auto__;
})()
})();
var state__27088__auto__ = (function (){var statearr_48943 = f__27087__auto__();
(statearr_48943[(6)] = c__27086__auto___50250);

return statearr_48943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27088__auto__);
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
var G__48946 = arguments.length;
switch (G__48946) {
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
var G__48954 = arguments.length;
switch (G__48954) {
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
var G__48956 = arguments.length;
switch (G__48956) {
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
var c__27086__auto___50463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27087__auto__ = (function (){var switch__27016__auto__ = (function (state_49006){
var state_val_49007 = (state_49006[(1)]);
if((state_val_49007 === (7))){
var state_49006__$1 = state_49006;
var statearr_49010_50464 = state_49006__$1;
(statearr_49010_50464[(2)] = null);

(statearr_49010_50464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49007 === (1))){
var state_49006__$1 = state_49006;
var statearr_49011_50465 = state_49006__$1;
(statearr_49011_50465[(2)] = null);

(statearr_49011_50465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49007 === (4))){
var inst_48960 = (state_49006[(7)]);
var inst_48959 = (state_49006[(8)]);
var inst_48962 = (inst_48960 < inst_48959);
var state_49006__$1 = state_49006;
if(cljs.core.truth_(inst_48962)){
var statearr_49015_50471 = state_49006__$1;
(statearr_49015_50471[(1)] = (6));

} else {
var statearr_49016_50472 = state_49006__$1;
(statearr_49016_50472[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49007 === (15))){
var inst_48992 = (state_49006[(9)]);
var inst_48997 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48992);
var state_49006__$1 = state_49006;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49006__$1,(17),out,inst_48997);
} else {
if((state_val_49007 === (13))){
var inst_48992 = (state_49006[(9)]);
var inst_48992__$1 = (state_49006[(2)]);
var inst_48993 = cljs.core.some(cljs.core.nil_QMARK_,inst_48992__$1);
var state_49006__$1 = (function (){var statearr_49017 = state_49006;
(statearr_49017[(9)] = inst_48992__$1);

return statearr_49017;
})();
if(cljs.core.truth_(inst_48993)){
var statearr_49018_50473 = state_49006__$1;
(statearr_49018_50473[(1)] = (14));

} else {
var statearr_49019_50474 = state_49006__$1;
(statearr_49019_50474[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49007 === (6))){
var state_49006__$1 = state_49006;
var statearr_49020_50475 = state_49006__$1;
(statearr_49020_50475[(2)] = null);

(statearr_49020_50475[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49007 === (17))){
var inst_48999 = (state_49006[(2)]);
var state_49006__$1 = (function (){var statearr_49022 = state_49006;
(statearr_49022[(10)] = inst_48999);

return statearr_49022;
})();
var statearr_49023_50476 = state_49006__$1;
(statearr_49023_50476[(2)] = null);

(statearr_49023_50476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49007 === (3))){
var inst_49004 = (state_49006[(2)]);
var state_49006__$1 = state_49006;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49006__$1,inst_49004);
} else {
if((state_val_49007 === (12))){
var _ = (function (){var statearr_49024 = state_49006;
(statearr_49024[(4)] = cljs.core.rest((state_49006[(4)])));

return statearr_49024;
})();
var state_49006__$1 = state_49006;
var ex49021 = (state_49006__$1[(2)]);
var statearr_49025_50477 = state_49006__$1;
(statearr_49025_50477[(5)] = ex49021);


if((ex49021 instanceof Object)){
var statearr_49026_50478 = state_49006__$1;
(statearr_49026_50478[(1)] = (11));

(statearr_49026_50478[(5)] = null);

} else {
throw ex49021;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49007 === (2))){
var inst_48958 = cljs.core.reset_BANG_(dctr,cnt);
var inst_48959 = cnt;
var inst_48960 = (0);
var state_49006__$1 = (function (){var statearr_49027 = state_49006;
(statearr_49027[(11)] = inst_48958);

(statearr_49027[(7)] = inst_48960);

(statearr_49027[(8)] = inst_48959);

return statearr_49027;
})();
var statearr_49028_50479 = state_49006__$1;
(statearr_49028_50479[(2)] = null);

(statearr_49028_50479[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49007 === (11))){
var inst_48971 = (state_49006[(2)]);
var inst_48972 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_49006__$1 = (function (){var statearr_49033 = state_49006;
(statearr_49033[(12)] = inst_48971);

return statearr_49033;
})();
var statearr_49034_50480 = state_49006__$1;
(statearr_49034_50480[(2)] = inst_48972);

(statearr_49034_50480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49007 === (9))){
var inst_48960 = (state_49006[(7)]);
var _ = (function (){var statearr_49035 = state_49006;
(statearr_49035[(4)] = cljs.core.cons((12),(state_49006[(4)])));

return statearr_49035;
})();
var inst_48978 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48960) : chs__$1.call(null,inst_48960));
var inst_48979 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48960) : done.call(null,inst_48960));
var inst_48980 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48978,inst_48979);
var ___$1 = (function (){var statearr_49036 = state_49006;
(statearr_49036[(4)] = cljs.core.rest((state_49006[(4)])));

return statearr_49036;
})();
var state_49006__$1 = state_49006;
var statearr_49037_50481 = state_49006__$1;
(statearr_49037_50481[(2)] = inst_48980);

(statearr_49037_50481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49007 === (5))){
var inst_48990 = (state_49006[(2)]);
var state_49006__$1 = (function (){var statearr_49038 = state_49006;
(statearr_49038[(13)] = inst_48990);

return statearr_49038;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49006__$1,(13),dchan);
} else {
if((state_val_49007 === (14))){
var inst_48995 = cljs.core.async.close_BANG_(out);
var state_49006__$1 = state_49006;
var statearr_49039_50482 = state_49006__$1;
(statearr_49039_50482[(2)] = inst_48995);

(statearr_49039_50482[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49007 === (16))){
var inst_49002 = (state_49006[(2)]);
var state_49006__$1 = state_49006;
var statearr_49044_50483 = state_49006__$1;
(statearr_49044_50483[(2)] = inst_49002);

(statearr_49044_50483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49007 === (10))){
var inst_48960 = (state_49006[(7)]);
var inst_48983 = (state_49006[(2)]);
var inst_48984 = (inst_48960 + (1));
var inst_48960__$1 = inst_48984;
var state_49006__$1 = (function (){var statearr_49045 = state_49006;
(statearr_49045[(7)] = inst_48960__$1);

(statearr_49045[(14)] = inst_48983);

return statearr_49045;
})();
var statearr_49046_50493 = state_49006__$1;
(statearr_49046_50493[(2)] = null);

(statearr_49046_50493[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49007 === (8))){
var inst_48988 = (state_49006[(2)]);
var state_49006__$1 = state_49006;
var statearr_49047_50501 = state_49006__$1;
(statearr_49047_50501[(2)] = inst_48988);

(statearr_49047_50501[(1)] = (5));


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
var cljs$core$async$state_machine__27017__auto__ = null;
var cljs$core$async$state_machine__27017__auto____0 = (function (){
var statearr_49048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49048[(0)] = cljs$core$async$state_machine__27017__auto__);

(statearr_49048[(1)] = (1));

return statearr_49048;
});
var cljs$core$async$state_machine__27017__auto____1 = (function (state_49006){
while(true){
var ret_value__27018__auto__ = (function (){try{while(true){
var result__27019__auto__ = switch__27016__auto__(state_49006);
if(cljs.core.keyword_identical_QMARK_(result__27019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27019__auto__;
}
break;
}
}catch (e49049){var ex__27020__auto__ = e49049;
var statearr_49050_50576 = state_49006;
(statearr_49050_50576[(2)] = ex__27020__auto__);


if(cljs.core.seq((state_49006[(4)]))){
var statearr_49051_50577 = state_49006;
(statearr_49051_50577[(1)] = cljs.core.first((state_49006[(4)])));

} else {
throw ex__27020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50578 = state_49006;
state_49006 = G__50578;
continue;
} else {
return ret_value__27018__auto__;
}
break;
}
});
cljs$core$async$state_machine__27017__auto__ = function(state_49006){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27017__auto____1.call(this,state_49006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27017__auto____0;
cljs$core$async$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27017__auto____1;
return cljs$core$async$state_machine__27017__auto__;
})()
})();
var state__27088__auto__ = (function (){var statearr_49052 = f__27087__auto__();
(statearr_49052[(6)] = c__27086__auto___50463);

return statearr_49052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27088__auto__);
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
var G__49055 = arguments.length;
switch (G__49055) {
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
var c__27086__auto___50580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27087__auto__ = (function (){var switch__27016__auto__ = (function (state_49089){
var state_val_49090 = (state_49089[(1)]);
if((state_val_49090 === (7))){
var inst_49066 = (state_49089[(7)]);
var inst_49067 = (state_49089[(8)]);
var inst_49066__$1 = (state_49089[(2)]);
var inst_49067__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49066__$1,(0),null);
var inst_49068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49066__$1,(1),null);
var inst_49069 = (inst_49067__$1 == null);
var state_49089__$1 = (function (){var statearr_49091 = state_49089;
(statearr_49091[(7)] = inst_49066__$1);

(statearr_49091[(8)] = inst_49067__$1);

(statearr_49091[(9)] = inst_49068);

return statearr_49091;
})();
if(cljs.core.truth_(inst_49069)){
var statearr_49092_50582 = state_49089__$1;
(statearr_49092_50582[(1)] = (8));

} else {
var statearr_49093_50583 = state_49089__$1;
(statearr_49093_50583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (1))){
var inst_49056 = cljs.core.vec(chs);
var inst_49057 = inst_49056;
var state_49089__$1 = (function (){var statearr_49097 = state_49089;
(statearr_49097[(10)] = inst_49057);

return statearr_49097;
})();
var statearr_49098_50586 = state_49089__$1;
(statearr_49098_50586[(2)] = null);

(statearr_49098_50586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (4))){
var inst_49057 = (state_49089[(10)]);
var state_49089__$1 = state_49089;
return cljs.core.async.ioc_alts_BANG_(state_49089__$1,(7),inst_49057);
} else {
if((state_val_49090 === (6))){
var inst_49084 = (state_49089[(2)]);
var state_49089__$1 = state_49089;
var statearr_49099_50587 = state_49089__$1;
(statearr_49099_50587[(2)] = inst_49084);

(statearr_49099_50587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (3))){
var inst_49086 = (state_49089[(2)]);
var state_49089__$1 = state_49089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49089__$1,inst_49086);
} else {
if((state_val_49090 === (2))){
var inst_49057 = (state_49089[(10)]);
var inst_49059 = cljs.core.count(inst_49057);
var inst_49060 = (inst_49059 > (0));
var state_49089__$1 = state_49089;
if(cljs.core.truth_(inst_49060)){
var statearr_49101_50588 = state_49089__$1;
(statearr_49101_50588[(1)] = (4));

} else {
var statearr_49102_50589 = state_49089__$1;
(statearr_49102_50589[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (11))){
var inst_49057 = (state_49089[(10)]);
var inst_49077 = (state_49089[(2)]);
var tmp49100 = inst_49057;
var inst_49057__$1 = tmp49100;
var state_49089__$1 = (function (){var statearr_49103 = state_49089;
(statearr_49103[(11)] = inst_49077);

(statearr_49103[(10)] = inst_49057__$1);

return statearr_49103;
})();
var statearr_49104_50592 = state_49089__$1;
(statearr_49104_50592[(2)] = null);

(statearr_49104_50592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (9))){
var inst_49067 = (state_49089[(8)]);
var state_49089__$1 = state_49089;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49089__$1,(11),out,inst_49067);
} else {
if((state_val_49090 === (5))){
var inst_49082 = cljs.core.async.close_BANG_(out);
var state_49089__$1 = state_49089;
var statearr_49105_50596 = state_49089__$1;
(statearr_49105_50596[(2)] = inst_49082);

(statearr_49105_50596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (10))){
var inst_49080 = (state_49089[(2)]);
var state_49089__$1 = state_49089;
var statearr_49106_50597 = state_49089__$1;
(statearr_49106_50597[(2)] = inst_49080);

(statearr_49106_50597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (8))){
var inst_49066 = (state_49089[(7)]);
var inst_49067 = (state_49089[(8)]);
var inst_49068 = (state_49089[(9)]);
var inst_49057 = (state_49089[(10)]);
var inst_49071 = (function (){var cs = inst_49057;
var vec__49062 = inst_49066;
var v = inst_49067;
var c = inst_49068;
return (function (p1__49053_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__49053_SHARP_);
});
})();
var inst_49072 = cljs.core.filterv(inst_49071,inst_49057);
var inst_49057__$1 = inst_49072;
var state_49089__$1 = (function (){var statearr_49107 = state_49089;
(statearr_49107[(10)] = inst_49057__$1);

return statearr_49107;
})();
var statearr_49108_50601 = state_49089__$1;
(statearr_49108_50601[(2)] = null);

(statearr_49108_50601[(1)] = (2));


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
var cljs$core$async$state_machine__27017__auto__ = null;
var cljs$core$async$state_machine__27017__auto____0 = (function (){
var statearr_49109 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49109[(0)] = cljs$core$async$state_machine__27017__auto__);

(statearr_49109[(1)] = (1));

return statearr_49109;
});
var cljs$core$async$state_machine__27017__auto____1 = (function (state_49089){
while(true){
var ret_value__27018__auto__ = (function (){try{while(true){
var result__27019__auto__ = switch__27016__auto__(state_49089);
if(cljs.core.keyword_identical_QMARK_(result__27019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27019__auto__;
}
break;
}
}catch (e49110){var ex__27020__auto__ = e49110;
var statearr_49111_50603 = state_49089;
(statearr_49111_50603[(2)] = ex__27020__auto__);


if(cljs.core.seq((state_49089[(4)]))){
var statearr_49112_50605 = state_49089;
(statearr_49112_50605[(1)] = cljs.core.first((state_49089[(4)])));

} else {
throw ex__27020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50606 = state_49089;
state_49089 = G__50606;
continue;
} else {
return ret_value__27018__auto__;
}
break;
}
});
cljs$core$async$state_machine__27017__auto__ = function(state_49089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27017__auto____1.call(this,state_49089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27017__auto____0;
cljs$core$async$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27017__auto____1;
return cljs$core$async$state_machine__27017__auto__;
})()
})();
var state__27088__auto__ = (function (){var statearr_49113 = f__27087__auto__();
(statearr_49113[(6)] = c__27086__auto___50580);

return statearr_49113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27088__auto__);
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
var G__49115 = arguments.length;
switch (G__49115) {
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
var c__27086__auto___50616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27087__auto__ = (function (){var switch__27016__auto__ = (function (state_49139){
var state_val_49140 = (state_49139[(1)]);
if((state_val_49140 === (7))){
var inst_49121 = (state_49139[(7)]);
var inst_49121__$1 = (state_49139[(2)]);
var inst_49122 = (inst_49121__$1 == null);
var inst_49123 = cljs.core.not(inst_49122);
var state_49139__$1 = (function (){var statearr_49141 = state_49139;
(statearr_49141[(7)] = inst_49121__$1);

return statearr_49141;
})();
if(inst_49123){
var statearr_49142_50617 = state_49139__$1;
(statearr_49142_50617[(1)] = (8));

} else {
var statearr_49143_50618 = state_49139__$1;
(statearr_49143_50618[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49140 === (1))){
var inst_49116 = (0);
var state_49139__$1 = (function (){var statearr_49144 = state_49139;
(statearr_49144[(8)] = inst_49116);

return statearr_49144;
})();
var statearr_49145_50619 = state_49139__$1;
(statearr_49145_50619[(2)] = null);

(statearr_49145_50619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49140 === (4))){
var state_49139__$1 = state_49139;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49139__$1,(7),ch);
} else {
if((state_val_49140 === (6))){
var inst_49134 = (state_49139[(2)]);
var state_49139__$1 = state_49139;
var statearr_49146_50620 = state_49139__$1;
(statearr_49146_50620[(2)] = inst_49134);

(statearr_49146_50620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49140 === (3))){
var inst_49136 = (state_49139[(2)]);
var inst_49137 = cljs.core.async.close_BANG_(out);
var state_49139__$1 = (function (){var statearr_49147 = state_49139;
(statearr_49147[(9)] = inst_49136);

return statearr_49147;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49139__$1,inst_49137);
} else {
if((state_val_49140 === (2))){
var inst_49116 = (state_49139[(8)]);
var inst_49118 = (inst_49116 < n);
var state_49139__$1 = state_49139;
if(cljs.core.truth_(inst_49118)){
var statearr_49148_50621 = state_49139__$1;
(statearr_49148_50621[(1)] = (4));

} else {
var statearr_49149_50622 = state_49139__$1;
(statearr_49149_50622[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49140 === (11))){
var inst_49116 = (state_49139[(8)]);
var inst_49126 = (state_49139[(2)]);
var inst_49127 = (inst_49116 + (1));
var inst_49116__$1 = inst_49127;
var state_49139__$1 = (function (){var statearr_49150 = state_49139;
(statearr_49150[(8)] = inst_49116__$1);

(statearr_49150[(10)] = inst_49126);

return statearr_49150;
})();
var statearr_49151_50629 = state_49139__$1;
(statearr_49151_50629[(2)] = null);

(statearr_49151_50629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49140 === (9))){
var state_49139__$1 = state_49139;
var statearr_49152_50631 = state_49139__$1;
(statearr_49152_50631[(2)] = null);

(statearr_49152_50631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49140 === (5))){
var state_49139__$1 = state_49139;
var statearr_49153_50632 = state_49139__$1;
(statearr_49153_50632[(2)] = null);

(statearr_49153_50632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49140 === (10))){
var inst_49131 = (state_49139[(2)]);
var state_49139__$1 = state_49139;
var statearr_49154_50633 = state_49139__$1;
(statearr_49154_50633[(2)] = inst_49131);

(statearr_49154_50633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49140 === (8))){
var inst_49121 = (state_49139[(7)]);
var state_49139__$1 = state_49139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49139__$1,(11),out,inst_49121);
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
var cljs$core$async$state_machine__27017__auto__ = null;
var cljs$core$async$state_machine__27017__auto____0 = (function (){
var statearr_49156 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49156[(0)] = cljs$core$async$state_machine__27017__auto__);

(statearr_49156[(1)] = (1));

return statearr_49156;
});
var cljs$core$async$state_machine__27017__auto____1 = (function (state_49139){
while(true){
var ret_value__27018__auto__ = (function (){try{while(true){
var result__27019__auto__ = switch__27016__auto__(state_49139);
if(cljs.core.keyword_identical_QMARK_(result__27019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27019__auto__;
}
break;
}
}catch (e49157){var ex__27020__auto__ = e49157;
var statearr_49158_50634 = state_49139;
(statearr_49158_50634[(2)] = ex__27020__auto__);


if(cljs.core.seq((state_49139[(4)]))){
var statearr_49159_50635 = state_49139;
(statearr_49159_50635[(1)] = cljs.core.first((state_49139[(4)])));

} else {
throw ex__27020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50637 = state_49139;
state_49139 = G__50637;
continue;
} else {
return ret_value__27018__auto__;
}
break;
}
});
cljs$core$async$state_machine__27017__auto__ = function(state_49139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27017__auto____1.call(this,state_49139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27017__auto____0;
cljs$core$async$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27017__auto____1;
return cljs$core$async$state_machine__27017__auto__;
})()
})();
var state__27088__auto__ = (function (){var statearr_49160 = f__27087__auto__();
(statearr_49160[(6)] = c__27086__auto___50616);

return statearr_49160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27088__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49162 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49162 = (function (f,ch,meta49163){
this.f = f;
this.ch = ch;
this.meta49163 = meta49163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49164,meta49163__$1){
var self__ = this;
var _49164__$1 = this;
return (new cljs.core.async.t_cljs$core$async49162(self__.f,self__.ch,meta49163__$1));
}));

(cljs.core.async.t_cljs$core$async49162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49164){
var self__ = this;
var _49164__$1 = this;
return self__.meta49163;
}));

(cljs.core.async.t_cljs$core$async49162.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49162.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49162.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49162.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49162.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49168 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49168 = (function (f,ch,meta49163,_,fn1,meta49169){
this.f = f;
this.ch = ch;
this.meta49163 = meta49163;
this._ = _;
this.fn1 = fn1;
this.meta49169 = meta49169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49170,meta49169__$1){
var self__ = this;
var _49170__$1 = this;
return (new cljs.core.async.t_cljs$core$async49168(self__.f,self__.ch,self__.meta49163,self__._,self__.fn1,meta49169__$1));
}));

(cljs.core.async.t_cljs$core$async49168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49170){
var self__ = this;
var _49170__$1 = this;
return self__.meta49169;
}));

(cljs.core.async.t_cljs$core$async49168.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49168.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async49168.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49168.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__49161_SHARP_){
var G__49175 = (((p1__49161_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__49161_SHARP_) : self__.f.call(null,p1__49161_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__49175) : f1.call(null,G__49175));
});
}));

(cljs.core.async.t_cljs$core$async49168.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49163","meta49163",-769674574,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49162","cljs.core.async/t_cljs$core$async49162",626164148,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49169","meta49169",1837721213,null)], null);
}));

(cljs.core.async.t_cljs$core$async49168.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49168.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49168");

(cljs.core.async.t_cljs$core$async49168.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async49168");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49168.
 */
cljs.core.async.__GT_t_cljs$core$async49168 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49168(f__$1,ch__$1,meta49163__$1,___$2,fn1__$1,meta49169){
return (new cljs.core.async.t_cljs$core$async49168(f__$1,ch__$1,meta49163__$1,___$2,fn1__$1,meta49169));
});

}

return (new cljs.core.async.t_cljs$core$async49168(self__.f,self__.ch,self__.meta49163,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__49176 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__49176) : self__.f.call(null,G__49176));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async49162.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49162.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async49162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49163","meta49163",-769674574,null)], null);
}));

(cljs.core.async.t_cljs$core$async49162.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49162");

(cljs.core.async.t_cljs$core$async49162.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async49162");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49162.
 */
cljs.core.async.__GT_t_cljs$core$async49162 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49162(f__$1,ch__$1,meta49163){
return (new cljs.core.async.t_cljs$core$async49162(f__$1,ch__$1,meta49163));
});

}

return (new cljs.core.async.t_cljs$core$async49162(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49191 = (function (f,ch,meta49192){
this.f = f;
this.ch = ch;
this.meta49192 = meta49192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49193,meta49192__$1){
var self__ = this;
var _49193__$1 = this;
return (new cljs.core.async.t_cljs$core$async49191(self__.f,self__.ch,meta49192__$1));
}));

(cljs.core.async.t_cljs$core$async49191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49193){
var self__ = this;
var _49193__$1 = this;
return self__.meta49192;
}));

(cljs.core.async.t_cljs$core$async49191.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49191.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49191.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49191.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49191.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49191.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async49191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49192","meta49192",-943904052,null)], null);
}));

(cljs.core.async.t_cljs$core$async49191.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49191");

(cljs.core.async.t_cljs$core$async49191.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async49191");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49191.
 */
cljs.core.async.__GT_t_cljs$core$async49191 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49191(f__$1,ch__$1,meta49192){
return (new cljs.core.async.t_cljs$core$async49191(f__$1,ch__$1,meta49192));
});

}

return (new cljs.core.async.t_cljs$core$async49191(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49222 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49222 = (function (p,ch,meta49223){
this.p = p;
this.ch = ch;
this.meta49223 = meta49223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49224,meta49223__$1){
var self__ = this;
var _49224__$1 = this;
return (new cljs.core.async.t_cljs$core$async49222(self__.p,self__.ch,meta49223__$1));
}));

(cljs.core.async.t_cljs$core$async49222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49224){
var self__ = this;
var _49224__$1 = this;
return self__.meta49223;
}));

(cljs.core.async.t_cljs$core$async49222.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49222.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49222.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49222.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49222.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49222.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49222.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async49222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49223","meta49223",-248375142,null)], null);
}));

(cljs.core.async.t_cljs$core$async49222.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49222");

(cljs.core.async.t_cljs$core$async49222.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async49222");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49222.
 */
cljs.core.async.__GT_t_cljs$core$async49222 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49222(p__$1,ch__$1,meta49223){
return (new cljs.core.async.t_cljs$core$async49222(p__$1,ch__$1,meta49223));
});

}

return (new cljs.core.async.t_cljs$core$async49222(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__49230 = arguments.length;
switch (G__49230) {
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
var c__27086__auto___50652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27087__auto__ = (function (){var switch__27016__auto__ = (function (state_49251){
var state_val_49252 = (state_49251[(1)]);
if((state_val_49252 === (7))){
var inst_49247 = (state_49251[(2)]);
var state_49251__$1 = state_49251;
var statearr_49253_50656 = state_49251__$1;
(statearr_49253_50656[(2)] = inst_49247);

(statearr_49253_50656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49252 === (1))){
var state_49251__$1 = state_49251;
var statearr_49254_50657 = state_49251__$1;
(statearr_49254_50657[(2)] = null);

(statearr_49254_50657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49252 === (4))){
var inst_49233 = (state_49251[(7)]);
var inst_49233__$1 = (state_49251[(2)]);
var inst_49234 = (inst_49233__$1 == null);
var state_49251__$1 = (function (){var statearr_49258 = state_49251;
(statearr_49258[(7)] = inst_49233__$1);

return statearr_49258;
})();
if(cljs.core.truth_(inst_49234)){
var statearr_49264_50658 = state_49251__$1;
(statearr_49264_50658[(1)] = (5));

} else {
var statearr_49265_50659 = state_49251__$1;
(statearr_49265_50659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49252 === (6))){
var inst_49233 = (state_49251[(7)]);
var inst_49238 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49233) : p.call(null,inst_49233));
var state_49251__$1 = state_49251;
if(cljs.core.truth_(inst_49238)){
var statearr_49269_50664 = state_49251__$1;
(statearr_49269_50664[(1)] = (8));

} else {
var statearr_49270_50665 = state_49251__$1;
(statearr_49270_50665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49252 === (3))){
var inst_49249 = (state_49251[(2)]);
var state_49251__$1 = state_49251;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49251__$1,inst_49249);
} else {
if((state_val_49252 === (2))){
var state_49251__$1 = state_49251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49251__$1,(4),ch);
} else {
if((state_val_49252 === (11))){
var inst_49241 = (state_49251[(2)]);
var state_49251__$1 = state_49251;
var statearr_49271_50667 = state_49251__$1;
(statearr_49271_50667[(2)] = inst_49241);

(statearr_49271_50667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49252 === (9))){
var state_49251__$1 = state_49251;
var statearr_49272_50668 = state_49251__$1;
(statearr_49272_50668[(2)] = null);

(statearr_49272_50668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49252 === (5))){
var inst_49236 = cljs.core.async.close_BANG_(out);
var state_49251__$1 = state_49251;
var statearr_49273_50669 = state_49251__$1;
(statearr_49273_50669[(2)] = inst_49236);

(statearr_49273_50669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49252 === (10))){
var inst_49244 = (state_49251[(2)]);
var state_49251__$1 = (function (){var statearr_49274 = state_49251;
(statearr_49274[(8)] = inst_49244);

return statearr_49274;
})();
var statearr_49275_50670 = state_49251__$1;
(statearr_49275_50670[(2)] = null);

(statearr_49275_50670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49252 === (8))){
var inst_49233 = (state_49251[(7)]);
var state_49251__$1 = state_49251;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49251__$1,(11),out,inst_49233);
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
var cljs$core$async$state_machine__27017__auto__ = null;
var cljs$core$async$state_machine__27017__auto____0 = (function (){
var statearr_49276 = [null,null,null,null,null,null,null,null,null];
(statearr_49276[(0)] = cljs$core$async$state_machine__27017__auto__);

(statearr_49276[(1)] = (1));

return statearr_49276;
});
var cljs$core$async$state_machine__27017__auto____1 = (function (state_49251){
while(true){
var ret_value__27018__auto__ = (function (){try{while(true){
var result__27019__auto__ = switch__27016__auto__(state_49251);
if(cljs.core.keyword_identical_QMARK_(result__27019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27019__auto__;
}
break;
}
}catch (e49277){var ex__27020__auto__ = e49277;
var statearr_49278_50673 = state_49251;
(statearr_49278_50673[(2)] = ex__27020__auto__);


if(cljs.core.seq((state_49251[(4)]))){
var statearr_49279_50674 = state_49251;
(statearr_49279_50674[(1)] = cljs.core.first((state_49251[(4)])));

} else {
throw ex__27020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50675 = state_49251;
state_49251 = G__50675;
continue;
} else {
return ret_value__27018__auto__;
}
break;
}
});
cljs$core$async$state_machine__27017__auto__ = function(state_49251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27017__auto____1.call(this,state_49251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27017__auto____0;
cljs$core$async$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27017__auto____1;
return cljs$core$async$state_machine__27017__auto__;
})()
})();
var state__27088__auto__ = (function (){var statearr_49280 = f__27087__auto__();
(statearr_49280[(6)] = c__27086__auto___50652);

return statearr_49280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27088__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49284 = arguments.length;
switch (G__49284) {
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
var c__27086__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27087__auto__ = (function (){var switch__27016__auto__ = (function (state_49352){
var state_val_49353 = (state_49352[(1)]);
if((state_val_49353 === (7))){
var inst_49348 = (state_49352[(2)]);
var state_49352__$1 = state_49352;
var statearr_49354_50681 = state_49352__$1;
(statearr_49354_50681[(2)] = inst_49348);

(statearr_49354_50681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (20))){
var inst_49318 = (state_49352[(7)]);
var inst_49329 = (state_49352[(2)]);
var inst_49330 = cljs.core.next(inst_49318);
var inst_49304 = inst_49330;
var inst_49305 = null;
var inst_49306 = (0);
var inst_49307 = (0);
var state_49352__$1 = (function (){var statearr_49358 = state_49352;
(statearr_49358[(8)] = inst_49306);

(statearr_49358[(9)] = inst_49304);

(statearr_49358[(10)] = inst_49307);

(statearr_49358[(11)] = inst_49305);

(statearr_49358[(12)] = inst_49329);

return statearr_49358;
})();
var statearr_49359_50684 = state_49352__$1;
(statearr_49359_50684[(2)] = null);

(statearr_49359_50684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (1))){
var state_49352__$1 = state_49352;
var statearr_49360_50685 = state_49352__$1;
(statearr_49360_50685[(2)] = null);

(statearr_49360_50685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (4))){
var inst_49293 = (state_49352[(13)]);
var inst_49293__$1 = (state_49352[(2)]);
var inst_49294 = (inst_49293__$1 == null);
var state_49352__$1 = (function (){var statearr_49361 = state_49352;
(statearr_49361[(13)] = inst_49293__$1);

return statearr_49361;
})();
if(cljs.core.truth_(inst_49294)){
var statearr_49362_50686 = state_49352__$1;
(statearr_49362_50686[(1)] = (5));

} else {
var statearr_49363_50688 = state_49352__$1;
(statearr_49363_50688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (15))){
var state_49352__$1 = state_49352;
var statearr_49374_50690 = state_49352__$1;
(statearr_49374_50690[(2)] = null);

(statearr_49374_50690[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (21))){
var state_49352__$1 = state_49352;
var statearr_49378_50691 = state_49352__$1;
(statearr_49378_50691[(2)] = null);

(statearr_49378_50691[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (13))){
var inst_49306 = (state_49352[(8)]);
var inst_49304 = (state_49352[(9)]);
var inst_49307 = (state_49352[(10)]);
var inst_49305 = (state_49352[(11)]);
var inst_49314 = (state_49352[(2)]);
var inst_49315 = (inst_49307 + (1));
var tmp49367 = inst_49306;
var tmp49368 = inst_49304;
var tmp49369 = inst_49305;
var inst_49304__$1 = tmp49368;
var inst_49305__$1 = tmp49369;
var inst_49306__$1 = tmp49367;
var inst_49307__$1 = inst_49315;
var state_49352__$1 = (function (){var statearr_49382 = state_49352;
(statearr_49382[(8)] = inst_49306__$1);

(statearr_49382[(14)] = inst_49314);

(statearr_49382[(9)] = inst_49304__$1);

(statearr_49382[(10)] = inst_49307__$1);

(statearr_49382[(11)] = inst_49305__$1);

return statearr_49382;
})();
var statearr_49387_50692 = state_49352__$1;
(statearr_49387_50692[(2)] = null);

(statearr_49387_50692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (22))){
var state_49352__$1 = state_49352;
var statearr_49391_50693 = state_49352__$1;
(statearr_49391_50693[(2)] = null);

(statearr_49391_50693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (6))){
var inst_49293 = (state_49352[(13)]);
var inst_49302 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49293) : f.call(null,inst_49293));
var inst_49303 = cljs.core.seq(inst_49302);
var inst_49304 = inst_49303;
var inst_49305 = null;
var inst_49306 = (0);
var inst_49307 = (0);
var state_49352__$1 = (function (){var statearr_49395 = state_49352;
(statearr_49395[(8)] = inst_49306);

(statearr_49395[(9)] = inst_49304);

(statearr_49395[(10)] = inst_49307);

(statearr_49395[(11)] = inst_49305);

return statearr_49395;
})();
var statearr_49399_50696 = state_49352__$1;
(statearr_49399_50696[(2)] = null);

(statearr_49399_50696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (17))){
var inst_49318 = (state_49352[(7)]);
var inst_49322 = cljs.core.chunk_first(inst_49318);
var inst_49323 = cljs.core.chunk_rest(inst_49318);
var inst_49324 = cljs.core.count(inst_49322);
var inst_49304 = inst_49323;
var inst_49305 = inst_49322;
var inst_49306 = inst_49324;
var inst_49307 = (0);
var state_49352__$1 = (function (){var statearr_49410 = state_49352;
(statearr_49410[(8)] = inst_49306);

(statearr_49410[(9)] = inst_49304);

(statearr_49410[(10)] = inst_49307);

(statearr_49410[(11)] = inst_49305);

return statearr_49410;
})();
var statearr_49415_50697 = state_49352__$1;
(statearr_49415_50697[(2)] = null);

(statearr_49415_50697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (3))){
var inst_49350 = (state_49352[(2)]);
var state_49352__$1 = state_49352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49352__$1,inst_49350);
} else {
if((state_val_49353 === (12))){
var inst_49338 = (state_49352[(2)]);
var state_49352__$1 = state_49352;
var statearr_49418_50698 = state_49352__$1;
(statearr_49418_50698[(2)] = inst_49338);

(statearr_49418_50698[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (2))){
var state_49352__$1 = state_49352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49352__$1,(4),in$);
} else {
if((state_val_49353 === (23))){
var inst_49346 = (state_49352[(2)]);
var state_49352__$1 = state_49352;
var statearr_49419_50699 = state_49352__$1;
(statearr_49419_50699[(2)] = inst_49346);

(statearr_49419_50699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (19))){
var inst_49333 = (state_49352[(2)]);
var state_49352__$1 = state_49352;
var statearr_49420_50701 = state_49352__$1;
(statearr_49420_50701[(2)] = inst_49333);

(statearr_49420_50701[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (11))){
var inst_49318 = (state_49352[(7)]);
var inst_49304 = (state_49352[(9)]);
var inst_49318__$1 = cljs.core.seq(inst_49304);
var state_49352__$1 = (function (){var statearr_49421 = state_49352;
(statearr_49421[(7)] = inst_49318__$1);

return statearr_49421;
})();
if(inst_49318__$1){
var statearr_49422_50703 = state_49352__$1;
(statearr_49422_50703[(1)] = (14));

} else {
var statearr_49423_50704 = state_49352__$1;
(statearr_49423_50704[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (9))){
var inst_49340 = (state_49352[(2)]);
var inst_49341 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_49352__$1 = (function (){var statearr_49424 = state_49352;
(statearr_49424[(15)] = inst_49340);

return statearr_49424;
})();
if(cljs.core.truth_(inst_49341)){
var statearr_49425_50706 = state_49352__$1;
(statearr_49425_50706[(1)] = (21));

} else {
var statearr_49426_50708 = state_49352__$1;
(statearr_49426_50708[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (5))){
var inst_49296 = cljs.core.async.close_BANG_(out);
var state_49352__$1 = state_49352;
var statearr_49427_50709 = state_49352__$1;
(statearr_49427_50709[(2)] = inst_49296);

(statearr_49427_50709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (14))){
var inst_49318 = (state_49352[(7)]);
var inst_49320 = cljs.core.chunked_seq_QMARK_(inst_49318);
var state_49352__$1 = state_49352;
if(inst_49320){
var statearr_49428_50710 = state_49352__$1;
(statearr_49428_50710[(1)] = (17));

} else {
var statearr_49429_50711 = state_49352__$1;
(statearr_49429_50711[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (16))){
var inst_49336 = (state_49352[(2)]);
var state_49352__$1 = state_49352;
var statearr_49430_50713 = state_49352__$1;
(statearr_49430_50713[(2)] = inst_49336);

(statearr_49430_50713[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49353 === (10))){
var inst_49307 = (state_49352[(10)]);
var inst_49305 = (state_49352[(11)]);
var inst_49312 = cljs.core._nth(inst_49305,inst_49307);
var state_49352__$1 = state_49352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49352__$1,(13),out,inst_49312);
} else {
if((state_val_49353 === (18))){
var inst_49318 = (state_49352[(7)]);
var inst_49327 = cljs.core.first(inst_49318);
var state_49352__$1 = state_49352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49352__$1,(20),out,inst_49327);
} else {
if((state_val_49353 === (8))){
var inst_49306 = (state_49352[(8)]);
var inst_49307 = (state_49352[(10)]);
var inst_49309 = (inst_49307 < inst_49306);
var inst_49310 = inst_49309;
var state_49352__$1 = state_49352;
if(cljs.core.truth_(inst_49310)){
var statearr_49431_50722 = state_49352__$1;
(statearr_49431_50722[(1)] = (10));

} else {
var statearr_49432_50723 = state_49352__$1;
(statearr_49432_50723[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__27017__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27017__auto____0 = (function (){
var statearr_49433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49433[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27017__auto__);

(statearr_49433[(1)] = (1));

return statearr_49433;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27017__auto____1 = (function (state_49352){
while(true){
var ret_value__27018__auto__ = (function (){try{while(true){
var result__27019__auto__ = switch__27016__auto__(state_49352);
if(cljs.core.keyword_identical_QMARK_(result__27019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27019__auto__;
}
break;
}
}catch (e49434){var ex__27020__auto__ = e49434;
var statearr_49435_50724 = state_49352;
(statearr_49435_50724[(2)] = ex__27020__auto__);


if(cljs.core.seq((state_49352[(4)]))){
var statearr_49436_50725 = state_49352;
(statearr_49436_50725[(1)] = cljs.core.first((state_49352[(4)])));

} else {
throw ex__27020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50726 = state_49352;
state_49352 = G__50726;
continue;
} else {
return ret_value__27018__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27017__auto__ = function(state_49352){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27017__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27017__auto____1.call(this,state_49352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27017__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27017__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27017__auto__;
})()
})();
var state__27088__auto__ = (function (){var statearr_49437 = f__27087__auto__();
(statearr_49437[(6)] = c__27086__auto__);

return statearr_49437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27088__auto__);
}));

return c__27086__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49441 = arguments.length;
switch (G__49441) {
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
var G__49444 = arguments.length;
switch (G__49444) {
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
var G__49457 = arguments.length;
switch (G__49457) {
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
var c__27086__auto___50741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27087__auto__ = (function (){var switch__27016__auto__ = (function (state_49482){
var state_val_49483 = (state_49482[(1)]);
if((state_val_49483 === (7))){
var inst_49477 = (state_49482[(2)]);
var state_49482__$1 = state_49482;
var statearr_49484_50742 = state_49482__$1;
(statearr_49484_50742[(2)] = inst_49477);

(statearr_49484_50742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49483 === (1))){
var inst_49459 = null;
var state_49482__$1 = (function (){var statearr_49485 = state_49482;
(statearr_49485[(7)] = inst_49459);

return statearr_49485;
})();
var statearr_49486_50743 = state_49482__$1;
(statearr_49486_50743[(2)] = null);

(statearr_49486_50743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49483 === (4))){
var inst_49462 = (state_49482[(8)]);
var inst_49462__$1 = (state_49482[(2)]);
var inst_49463 = (inst_49462__$1 == null);
var inst_49464 = cljs.core.not(inst_49463);
var state_49482__$1 = (function (){var statearr_49487 = state_49482;
(statearr_49487[(8)] = inst_49462__$1);

return statearr_49487;
})();
if(inst_49464){
var statearr_49488_50744 = state_49482__$1;
(statearr_49488_50744[(1)] = (5));

} else {
var statearr_49489_50746 = state_49482__$1;
(statearr_49489_50746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49483 === (6))){
var state_49482__$1 = state_49482;
var statearr_49490_50748 = state_49482__$1;
(statearr_49490_50748[(2)] = null);

(statearr_49490_50748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49483 === (3))){
var inst_49479 = (state_49482[(2)]);
var inst_49480 = cljs.core.async.close_BANG_(out);
var state_49482__$1 = (function (){var statearr_49491 = state_49482;
(statearr_49491[(9)] = inst_49479);

return statearr_49491;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49482__$1,inst_49480);
} else {
if((state_val_49483 === (2))){
var state_49482__$1 = state_49482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49482__$1,(4),ch);
} else {
if((state_val_49483 === (11))){
var inst_49462 = (state_49482[(8)]);
var inst_49471 = (state_49482[(2)]);
var inst_49459 = inst_49462;
var state_49482__$1 = (function (){var statearr_49492 = state_49482;
(statearr_49492[(10)] = inst_49471);

(statearr_49492[(7)] = inst_49459);

return statearr_49492;
})();
var statearr_49493_50749 = state_49482__$1;
(statearr_49493_50749[(2)] = null);

(statearr_49493_50749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49483 === (9))){
var inst_49462 = (state_49482[(8)]);
var state_49482__$1 = state_49482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49482__$1,(11),out,inst_49462);
} else {
if((state_val_49483 === (5))){
var inst_49459 = (state_49482[(7)]);
var inst_49462 = (state_49482[(8)]);
var inst_49466 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49462,inst_49459);
var state_49482__$1 = state_49482;
if(inst_49466){
var statearr_49497_50750 = state_49482__$1;
(statearr_49497_50750[(1)] = (8));

} else {
var statearr_49498_50751 = state_49482__$1;
(statearr_49498_50751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49483 === (10))){
var inst_49474 = (state_49482[(2)]);
var state_49482__$1 = state_49482;
var statearr_49500_50755 = state_49482__$1;
(statearr_49500_50755[(2)] = inst_49474);

(statearr_49500_50755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49483 === (8))){
var inst_49459 = (state_49482[(7)]);
var tmp49496 = inst_49459;
var inst_49459__$1 = tmp49496;
var state_49482__$1 = (function (){var statearr_49501 = state_49482;
(statearr_49501[(7)] = inst_49459__$1);

return statearr_49501;
})();
var statearr_49502_50756 = state_49482__$1;
(statearr_49502_50756[(2)] = null);

(statearr_49502_50756[(1)] = (2));


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
var cljs$core$async$state_machine__27017__auto__ = null;
var cljs$core$async$state_machine__27017__auto____0 = (function (){
var statearr_49503 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49503[(0)] = cljs$core$async$state_machine__27017__auto__);

(statearr_49503[(1)] = (1));

return statearr_49503;
});
var cljs$core$async$state_machine__27017__auto____1 = (function (state_49482){
while(true){
var ret_value__27018__auto__ = (function (){try{while(true){
var result__27019__auto__ = switch__27016__auto__(state_49482);
if(cljs.core.keyword_identical_QMARK_(result__27019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27019__auto__;
}
break;
}
}catch (e49504){var ex__27020__auto__ = e49504;
var statearr_49505_50763 = state_49482;
(statearr_49505_50763[(2)] = ex__27020__auto__);


if(cljs.core.seq((state_49482[(4)]))){
var statearr_49506_50764 = state_49482;
(statearr_49506_50764[(1)] = cljs.core.first((state_49482[(4)])));

} else {
throw ex__27020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50788 = state_49482;
state_49482 = G__50788;
continue;
} else {
return ret_value__27018__auto__;
}
break;
}
});
cljs$core$async$state_machine__27017__auto__ = function(state_49482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27017__auto____1.call(this,state_49482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27017__auto____0;
cljs$core$async$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27017__auto____1;
return cljs$core$async$state_machine__27017__auto__;
})()
})();
var state__27088__auto__ = (function (){var statearr_49516 = f__27087__auto__();
(statearr_49516[(6)] = c__27086__auto___50741);

return statearr_49516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27088__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49519 = arguments.length;
switch (G__49519) {
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
var c__27086__auto___50798 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27087__auto__ = (function (){var switch__27016__auto__ = (function (state_49557){
var state_val_49558 = (state_49557[(1)]);
if((state_val_49558 === (7))){
var inst_49553 = (state_49557[(2)]);
var state_49557__$1 = state_49557;
var statearr_49559_50799 = state_49557__$1;
(statearr_49559_50799[(2)] = inst_49553);

(statearr_49559_50799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49558 === (1))){
var inst_49520 = (new Array(n));
var inst_49521 = inst_49520;
var inst_49522 = (0);
var state_49557__$1 = (function (){var statearr_49560 = state_49557;
(statearr_49560[(7)] = inst_49521);

(statearr_49560[(8)] = inst_49522);

return statearr_49560;
})();
var statearr_49561_50801 = state_49557__$1;
(statearr_49561_50801[(2)] = null);

(statearr_49561_50801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49558 === (4))){
var inst_49525 = (state_49557[(9)]);
var inst_49525__$1 = (state_49557[(2)]);
var inst_49526 = (inst_49525__$1 == null);
var inst_49527 = cljs.core.not(inst_49526);
var state_49557__$1 = (function (){var statearr_49564 = state_49557;
(statearr_49564[(9)] = inst_49525__$1);

return statearr_49564;
})();
if(inst_49527){
var statearr_49565_50802 = state_49557__$1;
(statearr_49565_50802[(1)] = (5));

} else {
var statearr_49566_50803 = state_49557__$1;
(statearr_49566_50803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49558 === (15))){
var inst_49547 = (state_49557[(2)]);
var state_49557__$1 = state_49557;
var statearr_49567_50804 = state_49557__$1;
(statearr_49567_50804[(2)] = inst_49547);

(statearr_49567_50804[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49558 === (13))){
var state_49557__$1 = state_49557;
var statearr_49568_50805 = state_49557__$1;
(statearr_49568_50805[(2)] = null);

(statearr_49568_50805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49558 === (6))){
var inst_49522 = (state_49557[(8)]);
var inst_49543 = (inst_49522 > (0));
var state_49557__$1 = state_49557;
if(cljs.core.truth_(inst_49543)){
var statearr_49570_50806 = state_49557__$1;
(statearr_49570_50806[(1)] = (12));

} else {
var statearr_49572_50807 = state_49557__$1;
(statearr_49572_50807[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49558 === (3))){
var inst_49555 = (state_49557[(2)]);
var state_49557__$1 = state_49557;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49557__$1,inst_49555);
} else {
if((state_val_49558 === (12))){
var inst_49521 = (state_49557[(7)]);
var inst_49545 = cljs.core.vec(inst_49521);
var state_49557__$1 = state_49557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49557__$1,(15),out,inst_49545);
} else {
if((state_val_49558 === (2))){
var state_49557__$1 = state_49557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49557__$1,(4),ch);
} else {
if((state_val_49558 === (11))){
var inst_49537 = (state_49557[(2)]);
var inst_49538 = (new Array(n));
var inst_49521 = inst_49538;
var inst_49522 = (0);
var state_49557__$1 = (function (){var statearr_49573 = state_49557;
(statearr_49573[(7)] = inst_49521);

(statearr_49573[(10)] = inst_49537);

(statearr_49573[(8)] = inst_49522);

return statearr_49573;
})();
var statearr_49574_50812 = state_49557__$1;
(statearr_49574_50812[(2)] = null);

(statearr_49574_50812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49558 === (9))){
var inst_49521 = (state_49557[(7)]);
var inst_49535 = cljs.core.vec(inst_49521);
var state_49557__$1 = state_49557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49557__$1,(11),out,inst_49535);
} else {
if((state_val_49558 === (5))){
var inst_49530 = (state_49557[(11)]);
var inst_49521 = (state_49557[(7)]);
var inst_49522 = (state_49557[(8)]);
var inst_49525 = (state_49557[(9)]);
var inst_49529 = (inst_49521[inst_49522] = inst_49525);
var inst_49530__$1 = (inst_49522 + (1));
var inst_49531 = (inst_49530__$1 < n);
var state_49557__$1 = (function (){var statearr_49575 = state_49557;
(statearr_49575[(11)] = inst_49530__$1);

(statearr_49575[(12)] = inst_49529);

return statearr_49575;
})();
if(cljs.core.truth_(inst_49531)){
var statearr_49576_50816 = state_49557__$1;
(statearr_49576_50816[(1)] = (8));

} else {
var statearr_49578_50817 = state_49557__$1;
(statearr_49578_50817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49558 === (14))){
var inst_49550 = (state_49557[(2)]);
var inst_49551 = cljs.core.async.close_BANG_(out);
var state_49557__$1 = (function (){var statearr_49586 = state_49557;
(statearr_49586[(13)] = inst_49550);

return statearr_49586;
})();
var statearr_49587_50818 = state_49557__$1;
(statearr_49587_50818[(2)] = inst_49551);

(statearr_49587_50818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49558 === (10))){
var inst_49541 = (state_49557[(2)]);
var state_49557__$1 = state_49557;
var statearr_49589_50819 = state_49557__$1;
(statearr_49589_50819[(2)] = inst_49541);

(statearr_49589_50819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49558 === (8))){
var inst_49530 = (state_49557[(11)]);
var inst_49521 = (state_49557[(7)]);
var tmp49585 = inst_49521;
var inst_49521__$1 = tmp49585;
var inst_49522 = inst_49530;
var state_49557__$1 = (function (){var statearr_49590 = state_49557;
(statearr_49590[(7)] = inst_49521__$1);

(statearr_49590[(8)] = inst_49522);

return statearr_49590;
})();
var statearr_49591_50820 = state_49557__$1;
(statearr_49591_50820[(2)] = null);

(statearr_49591_50820[(1)] = (2));


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
var cljs$core$async$state_machine__27017__auto__ = null;
var cljs$core$async$state_machine__27017__auto____0 = (function (){
var statearr_49601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49601[(0)] = cljs$core$async$state_machine__27017__auto__);

(statearr_49601[(1)] = (1));

return statearr_49601;
});
var cljs$core$async$state_machine__27017__auto____1 = (function (state_49557){
while(true){
var ret_value__27018__auto__ = (function (){try{while(true){
var result__27019__auto__ = switch__27016__auto__(state_49557);
if(cljs.core.keyword_identical_QMARK_(result__27019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27019__auto__;
}
break;
}
}catch (e49602){var ex__27020__auto__ = e49602;
var statearr_49603_50825 = state_49557;
(statearr_49603_50825[(2)] = ex__27020__auto__);


if(cljs.core.seq((state_49557[(4)]))){
var statearr_49604_50826 = state_49557;
(statearr_49604_50826[(1)] = cljs.core.first((state_49557[(4)])));

} else {
throw ex__27020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50827 = state_49557;
state_49557 = G__50827;
continue;
} else {
return ret_value__27018__auto__;
}
break;
}
});
cljs$core$async$state_machine__27017__auto__ = function(state_49557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27017__auto____1.call(this,state_49557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27017__auto____0;
cljs$core$async$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27017__auto____1;
return cljs$core$async$state_machine__27017__auto__;
})()
})();
var state__27088__auto__ = (function (){var statearr_49609 = f__27087__auto__();
(statearr_49609[(6)] = c__27086__auto___50798);

return statearr_49609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27088__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49619 = arguments.length;
switch (G__49619) {
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
var c__27086__auto___50830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27087__auto__ = (function (){var switch__27016__auto__ = (function (state_49675){
var state_val_49676 = (state_49675[(1)]);
if((state_val_49676 === (7))){
var inst_49668 = (state_49675[(2)]);
var state_49675__$1 = state_49675;
var statearr_49678_50831 = state_49675__$1;
(statearr_49678_50831[(2)] = inst_49668);

(statearr_49678_50831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49676 === (1))){
var inst_49627 = [];
var inst_49628 = inst_49627;
var inst_49629 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49675__$1 = (function (){var statearr_49679 = state_49675;
(statearr_49679[(7)] = inst_49629);

(statearr_49679[(8)] = inst_49628);

return statearr_49679;
})();
var statearr_49680_50833 = state_49675__$1;
(statearr_49680_50833[(2)] = null);

(statearr_49680_50833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49676 === (4))){
var inst_49632 = (state_49675[(9)]);
var inst_49632__$1 = (state_49675[(2)]);
var inst_49633 = (inst_49632__$1 == null);
var inst_49634 = cljs.core.not(inst_49633);
var state_49675__$1 = (function (){var statearr_49682 = state_49675;
(statearr_49682[(9)] = inst_49632__$1);

return statearr_49682;
})();
if(inst_49634){
var statearr_49683_50836 = state_49675__$1;
(statearr_49683_50836[(1)] = (5));

} else {
var statearr_49684_50837 = state_49675__$1;
(statearr_49684_50837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49676 === (15))){
var inst_49628 = (state_49675[(8)]);
var inst_49660 = cljs.core.vec(inst_49628);
var state_49675__$1 = state_49675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49675__$1,(18),out,inst_49660);
} else {
if((state_val_49676 === (13))){
var inst_49655 = (state_49675[(2)]);
var state_49675__$1 = state_49675;
var statearr_49689_50838 = state_49675__$1;
(statearr_49689_50838[(2)] = inst_49655);

(statearr_49689_50838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49676 === (6))){
var inst_49628 = (state_49675[(8)]);
var inst_49657 = inst_49628.length;
var inst_49658 = (inst_49657 > (0));
var state_49675__$1 = state_49675;
if(cljs.core.truth_(inst_49658)){
var statearr_49693_50839 = state_49675__$1;
(statearr_49693_50839[(1)] = (15));

} else {
var statearr_49694_50840 = state_49675__$1;
(statearr_49694_50840[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49676 === (17))){
var inst_49665 = (state_49675[(2)]);
var inst_49666 = cljs.core.async.close_BANG_(out);
var state_49675__$1 = (function (){var statearr_49696 = state_49675;
(statearr_49696[(10)] = inst_49665);

return statearr_49696;
})();
var statearr_49697_50850 = state_49675__$1;
(statearr_49697_50850[(2)] = inst_49666);

(statearr_49697_50850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49676 === (3))){
var inst_49670 = (state_49675[(2)]);
var state_49675__$1 = state_49675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49675__$1,inst_49670);
} else {
if((state_val_49676 === (12))){
var inst_49628 = (state_49675[(8)]);
var inst_49647 = cljs.core.vec(inst_49628);
var state_49675__$1 = state_49675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49675__$1,(14),out,inst_49647);
} else {
if((state_val_49676 === (2))){
var state_49675__$1 = state_49675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49675__$1,(4),ch);
} else {
if((state_val_49676 === (11))){
var inst_49636 = (state_49675[(11)]);
var inst_49628 = (state_49675[(8)]);
var inst_49632 = (state_49675[(9)]);
var inst_49644 = inst_49628.push(inst_49632);
var tmp49698 = inst_49628;
var inst_49628__$1 = tmp49698;
var inst_49629 = inst_49636;
var state_49675__$1 = (function (){var statearr_49701 = state_49675;
(statearr_49701[(7)] = inst_49629);

(statearr_49701[(12)] = inst_49644);

(statearr_49701[(8)] = inst_49628__$1);

return statearr_49701;
})();
var statearr_49702_50855 = state_49675__$1;
(statearr_49702_50855[(2)] = null);

(statearr_49702_50855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49676 === (9))){
var inst_49629 = (state_49675[(7)]);
var inst_49640 = cljs.core.keyword_identical_QMARK_(inst_49629,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_49675__$1 = state_49675;
var statearr_49705_50856 = state_49675__$1;
(statearr_49705_50856[(2)] = inst_49640);

(statearr_49705_50856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49676 === (5))){
var inst_49629 = (state_49675[(7)]);
var inst_49636 = (state_49675[(11)]);
var inst_49637 = (state_49675[(13)]);
var inst_49632 = (state_49675[(9)]);
var inst_49636__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49632) : f.call(null,inst_49632));
var inst_49637__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49636__$1,inst_49629);
var state_49675__$1 = (function (){var statearr_49706 = state_49675;
(statearr_49706[(11)] = inst_49636__$1);

(statearr_49706[(13)] = inst_49637__$1);

return statearr_49706;
})();
if(inst_49637__$1){
var statearr_49707_50857 = state_49675__$1;
(statearr_49707_50857[(1)] = (8));

} else {
var statearr_49708_50858 = state_49675__$1;
(statearr_49708_50858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49676 === (14))){
var inst_49636 = (state_49675[(11)]);
var inst_49632 = (state_49675[(9)]);
var inst_49649 = (state_49675[(2)]);
var inst_49650 = [];
var inst_49651 = inst_49650.push(inst_49632);
var inst_49628 = inst_49650;
var inst_49629 = inst_49636;
var state_49675__$1 = (function (){var statearr_49710 = state_49675;
(statearr_49710[(14)] = inst_49649);

(statearr_49710[(7)] = inst_49629);

(statearr_49710[(15)] = inst_49651);

(statearr_49710[(8)] = inst_49628);

return statearr_49710;
})();
var statearr_49711_50859 = state_49675__$1;
(statearr_49711_50859[(2)] = null);

(statearr_49711_50859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49676 === (16))){
var state_49675__$1 = state_49675;
var statearr_49713_50860 = state_49675__$1;
(statearr_49713_50860[(2)] = null);

(statearr_49713_50860[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49676 === (10))){
var inst_49642 = (state_49675[(2)]);
var state_49675__$1 = state_49675;
if(cljs.core.truth_(inst_49642)){
var statearr_49714_50861 = state_49675__$1;
(statearr_49714_50861[(1)] = (11));

} else {
var statearr_49715_50862 = state_49675__$1;
(statearr_49715_50862[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49676 === (18))){
var inst_49662 = (state_49675[(2)]);
var state_49675__$1 = state_49675;
var statearr_49716_50863 = state_49675__$1;
(statearr_49716_50863[(2)] = inst_49662);

(statearr_49716_50863[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49676 === (8))){
var inst_49637 = (state_49675[(13)]);
var state_49675__$1 = state_49675;
var statearr_49717_50864 = state_49675__$1;
(statearr_49717_50864[(2)] = inst_49637);

(statearr_49717_50864[(1)] = (10));


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
var cljs$core$async$state_machine__27017__auto__ = null;
var cljs$core$async$state_machine__27017__auto____0 = (function (){
var statearr_49718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49718[(0)] = cljs$core$async$state_machine__27017__auto__);

(statearr_49718[(1)] = (1));

return statearr_49718;
});
var cljs$core$async$state_machine__27017__auto____1 = (function (state_49675){
while(true){
var ret_value__27018__auto__ = (function (){try{while(true){
var result__27019__auto__ = switch__27016__auto__(state_49675);
if(cljs.core.keyword_identical_QMARK_(result__27019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27019__auto__;
}
break;
}
}catch (e49719){var ex__27020__auto__ = e49719;
var statearr_49720_50865 = state_49675;
(statearr_49720_50865[(2)] = ex__27020__auto__);


if(cljs.core.seq((state_49675[(4)]))){
var statearr_49721_50866 = state_49675;
(statearr_49721_50866[(1)] = cljs.core.first((state_49675[(4)])));

} else {
throw ex__27020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50867 = state_49675;
state_49675 = G__50867;
continue;
} else {
return ret_value__27018__auto__;
}
break;
}
});
cljs$core$async$state_machine__27017__auto__ = function(state_49675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27017__auto____1.call(this,state_49675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27017__auto____0;
cljs$core$async$state_machine__27017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27017__auto____1;
return cljs$core$async$state_machine__27017__auto__;
})()
})();
var state__27088__auto__ = (function (){var statearr_49722 = f__27087__auto__();
(statearr_49722[(6)] = c__27086__auto___50830);

return statearr_49722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27088__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
