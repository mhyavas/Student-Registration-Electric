goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32998 = arguments.length;
switch (G__32998) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32999 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32999 = (function (f,blockable,meta33000){
this.f = f;
this.blockable = blockable;
this.meta33000 = meta33000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33001,meta33000__$1){
var self__ = this;
var _33001__$1 = this;
return (new cljs.core.async.t_cljs$core$async32999(self__.f,self__.blockable,meta33000__$1));
}));

(cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33001){
var self__ = this;
var _33001__$1 = this;
return self__.meta33000;
}));

(cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32999.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33000","meta33000",1845282059,null)], null);
}));

(cljs.core.async.t_cljs$core$async32999.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32999.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32999");

(cljs.core.async.t_cljs$core$async32999.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32999");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32999.
 */
cljs.core.async.__GT_t_cljs$core$async32999 = (function cljs$core$async$__GT_t_cljs$core$async32999(f__$1,blockable__$1,meta33000){
return (new cljs.core.async.t_cljs$core$async32999(f__$1,blockable__$1,meta33000));
});

}

return (new cljs.core.async.t_cljs$core$async32999(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33008 = arguments.length;
switch (G__33008) {
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
var G__33010 = arguments.length;
switch (G__33010) {
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
var G__33012 = arguments.length;
switch (G__33012) {
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
var val_35213 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35213) : fn1.call(null,val_35213));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35213) : fn1.call(null,val_35213));
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
var G__33019 = arguments.length;
switch (G__33019) {
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
var n__5636__auto___35232 = n;
var x_35233 = (0);
while(true){
if((x_35233 < n__5636__auto___35232)){
(a[x_35233] = x_35233);

var G__35234 = (x_35233 + (1));
x_35233 = G__35234;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33027 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33027 = (function (flag,meta33028){
this.flag = flag;
this.meta33028 = meta33028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33029,meta33028__$1){
var self__ = this;
var _33029__$1 = this;
return (new cljs.core.async.t_cljs$core$async33027(self__.flag,meta33028__$1));
}));

(cljs.core.async.t_cljs$core$async33027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33029){
var self__ = this;
var _33029__$1 = this;
return self__.meta33028;
}));

(cljs.core.async.t_cljs$core$async33027.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33027.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33027.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33027.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33028","meta33028",-274086913,null)], null);
}));

(cljs.core.async.t_cljs$core$async33027.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33027");

(cljs.core.async.t_cljs$core$async33027.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33027");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33027.
 */
cljs.core.async.__GT_t_cljs$core$async33027 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33027(flag__$1,meta33028){
return (new cljs.core.async.t_cljs$core$async33027(flag__$1,meta33028));
});

}

return (new cljs.core.async.t_cljs$core$async33027(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33034 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33034 = (function (flag,cb,meta33035){
this.flag = flag;
this.cb = cb;
this.meta33035 = meta33035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33036,meta33035__$1){
var self__ = this;
var _33036__$1 = this;
return (new cljs.core.async.t_cljs$core$async33034(self__.flag,self__.cb,meta33035__$1));
}));

(cljs.core.async.t_cljs$core$async33034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33036){
var self__ = this;
var _33036__$1 = this;
return self__.meta33035;
}));

(cljs.core.async.t_cljs$core$async33034.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33034.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33034.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33034.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33035","meta33035",2121980559,null)], null);
}));

(cljs.core.async.t_cljs$core$async33034.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33034");

(cljs.core.async.t_cljs$core$async33034.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33034");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33034.
 */
cljs.core.async.__GT_t_cljs$core$async33034 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33034(flag__$1,cb__$1,meta33035){
return (new cljs.core.async.t_cljs$core$async33034(flag__$1,cb__$1,meta33035));
});

}

return (new cljs.core.async.t_cljs$core$async33034(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33037_SHARP_){
var G__33039 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33037_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33039) : fret.call(null,G__33039));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33038_SHARP_){
var G__33040 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33038_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33040) : fret.call(null,G__33040));
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
var G__35262 = (i + (1));
i = G__35262;
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
var len__5769__auto___35267 = arguments.length;
var i__5770__auto___35268 = (0);
while(true){
if((i__5770__auto___35268 < len__5769__auto___35267)){
args__5775__auto__.push((arguments[i__5770__auto___35268]));

var G__35269 = (i__5770__auto___35268 + (1));
i__5770__auto___35268 = G__35269;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33047){
var map__33048 = p__33047;
var map__33048__$1 = cljs.core.__destructure_map(map__33048);
var opts = map__33048__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33045){
var G__33046 = cljs.core.first(seq33045);
var seq33045__$1 = cljs.core.next(seq33045);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33046,seq33045__$1);
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
var G__33055 = arguments.length;
switch (G__33055) {
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
var c__32940__auto___35271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32941__auto__ = (function (){var switch__32645__auto__ = (function (state_33080){
var state_val_33081 = (state_33080[(1)]);
if((state_val_33081 === (7))){
var inst_33075 = (state_33080[(2)]);
var state_33080__$1 = state_33080;
var statearr_33082_35272 = state_33080__$1;
(statearr_33082_35272[(2)] = inst_33075);

(statearr_33082_35272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (1))){
var state_33080__$1 = state_33080;
var statearr_33083_35273 = state_33080__$1;
(statearr_33083_35273[(2)] = null);

(statearr_33083_35273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (4))){
var inst_33058 = (state_33080[(7)]);
var inst_33058__$1 = (state_33080[(2)]);
var inst_33059 = (inst_33058__$1 == null);
var state_33080__$1 = (function (){var statearr_33084 = state_33080;
(statearr_33084[(7)] = inst_33058__$1);

return statearr_33084;
})();
if(cljs.core.truth_(inst_33059)){
var statearr_33085_35274 = state_33080__$1;
(statearr_33085_35274[(1)] = (5));

} else {
var statearr_33086_35275 = state_33080__$1;
(statearr_33086_35275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (13))){
var state_33080__$1 = state_33080;
var statearr_33087_35276 = state_33080__$1;
(statearr_33087_35276[(2)] = null);

(statearr_33087_35276[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (6))){
var inst_33058 = (state_33080[(7)]);
var state_33080__$1 = state_33080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33080__$1,(11),to,inst_33058);
} else {
if((state_val_33081 === (3))){
var inst_33077 = (state_33080[(2)]);
var state_33080__$1 = state_33080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33080__$1,inst_33077);
} else {
if((state_val_33081 === (12))){
var state_33080__$1 = state_33080;
var statearr_33090_35277 = state_33080__$1;
(statearr_33090_35277[(2)] = null);

(statearr_33090_35277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (2))){
var state_33080__$1 = state_33080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33080__$1,(4),from);
} else {
if((state_val_33081 === (11))){
var inst_33068 = (state_33080[(2)]);
var state_33080__$1 = state_33080;
if(cljs.core.truth_(inst_33068)){
var statearr_33091_35278 = state_33080__$1;
(statearr_33091_35278[(1)] = (12));

} else {
var statearr_33092_35279 = state_33080__$1;
(statearr_33092_35279[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (9))){
var state_33080__$1 = state_33080;
var statearr_33093_35280 = state_33080__$1;
(statearr_33093_35280[(2)] = null);

(statearr_33093_35280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (5))){
var state_33080__$1 = state_33080;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33094_35281 = state_33080__$1;
(statearr_33094_35281[(1)] = (8));

} else {
var statearr_33095_35282 = state_33080__$1;
(statearr_33095_35282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (14))){
var inst_33073 = (state_33080[(2)]);
var state_33080__$1 = state_33080;
var statearr_33096_35283 = state_33080__$1;
(statearr_33096_35283[(2)] = inst_33073);

(statearr_33096_35283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (10))){
var inst_33065 = (state_33080[(2)]);
var state_33080__$1 = state_33080;
var statearr_33097_35284 = state_33080__$1;
(statearr_33097_35284[(2)] = inst_33065);

(statearr_33097_35284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (8))){
var inst_33062 = cljs.core.async.close_BANG_(to);
var state_33080__$1 = state_33080;
var statearr_33098_35285 = state_33080__$1;
(statearr_33098_35285[(2)] = inst_33062);

(statearr_33098_35285[(1)] = (10));


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
var cljs$core$async$state_machine__32646__auto__ = null;
var cljs$core$async$state_machine__32646__auto____0 = (function (){
var statearr_33099 = [null,null,null,null,null,null,null,null];
(statearr_33099[(0)] = cljs$core$async$state_machine__32646__auto__);

(statearr_33099[(1)] = (1));

return statearr_33099;
});
var cljs$core$async$state_machine__32646__auto____1 = (function (state_33080){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_33080);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e33100){var ex__32649__auto__ = e33100;
var statearr_33101_35286 = state_33080;
(statearr_33101_35286[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_33080[(4)]))){
var statearr_33102_35287 = state_33080;
(statearr_33102_35287[(1)] = cljs.core.first((state_33080[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35288 = state_33080;
state_33080 = G__35288;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$state_machine__32646__auto__ = function(state_33080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32646__auto____1.call(this,state_33080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32646__auto____0;
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32646__auto____1;
return cljs$core$async$state_machine__32646__auto__;
})()
})();
var state__32942__auto__ = (function (){var statearr_33105 = f__32941__auto__();
(statearr_33105[(6)] = c__32940__auto___35271);

return statearr_33105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32942__auto__);
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
var process__$1 = (function (p__33119){
var vec__33120 = p__33119;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33120,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33120,(1),null);
var job = vec__33120;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32940__auto___35290 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32941__auto__ = (function (){var switch__32645__auto__ = (function (state_33132){
var state_val_33133 = (state_33132[(1)]);
if((state_val_33133 === (1))){
var state_33132__$1 = state_33132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33132__$1,(2),res,v);
} else {
if((state_val_33133 === (2))){
var inst_33126 = (state_33132[(2)]);
var inst_33127 = cljs.core.async.close_BANG_(res);
var state_33132__$1 = (function (){var statearr_33135 = state_33132;
(statearr_33135[(7)] = inst_33126);

return statearr_33135;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33132__$1,inst_33127);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0 = (function (){
var statearr_33136 = [null,null,null,null,null,null,null,null];
(statearr_33136[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__);

(statearr_33136[(1)] = (1));

return statearr_33136;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1 = (function (state_33132){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_33132);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e33139){var ex__32649__auto__ = e33139;
var statearr_33140_35291 = state_33132;
(statearr_33140_35291[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_33132[(4)]))){
var statearr_33141_35292 = state_33132;
(statearr_33141_35292[(1)] = cljs.core.first((state_33132[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35293 = state_33132;
state_33132 = G__35293;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__ = function(state_33132){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1.call(this,state_33132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__;
})()
})();
var state__32942__auto__ = (function (){var statearr_33142 = f__32941__auto__();
(statearr_33142[(6)] = c__32940__auto___35290);

return statearr_33142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32942__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33145){
var vec__33146 = p__33145;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33146,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33146,(1),null);
var job = vec__33146;
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
var n__5636__auto___35296 = n;
var __35297 = (0);
while(true){
if((__35297 < n__5636__auto___35296)){
var G__33150_35298 = type;
var G__33150_35299__$1 = (((G__33150_35298 instanceof cljs.core.Keyword))?G__33150_35298.fqn:null);
switch (G__33150_35299__$1) {
case "compute":
var c__32940__auto___35301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35297,c__32940__auto___35301,G__33150_35298,G__33150_35299__$1,n__5636__auto___35296,jobs,results,process__$1,async){
return (function (){
var f__32941__auto__ = (function (){var switch__32645__auto__ = ((function (__35297,c__32940__auto___35301,G__33150_35298,G__33150_35299__$1,n__5636__auto___35296,jobs,results,process__$1,async){
return (function (state_33168){
var state_val_33169 = (state_33168[(1)]);
if((state_val_33169 === (1))){
var state_33168__$1 = state_33168;
var statearr_33183_35302 = state_33168__$1;
(statearr_33183_35302[(2)] = null);

(statearr_33183_35302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33169 === (2))){
var state_33168__$1 = state_33168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33168__$1,(4),jobs);
} else {
if((state_val_33169 === (3))){
var inst_33166 = (state_33168[(2)]);
var state_33168__$1 = state_33168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33168__$1,inst_33166);
} else {
if((state_val_33169 === (4))){
var inst_33158 = (state_33168[(2)]);
var inst_33159 = process__$1(inst_33158);
var state_33168__$1 = state_33168;
if(cljs.core.truth_(inst_33159)){
var statearr_33184_35303 = state_33168__$1;
(statearr_33184_35303[(1)] = (5));

} else {
var statearr_33185_35304 = state_33168__$1;
(statearr_33185_35304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33169 === (5))){
var state_33168__$1 = state_33168;
var statearr_33187_35305 = state_33168__$1;
(statearr_33187_35305[(2)] = null);

(statearr_33187_35305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33169 === (6))){
var state_33168__$1 = state_33168;
var statearr_33188_35306 = state_33168__$1;
(statearr_33188_35306[(2)] = null);

(statearr_33188_35306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33169 === (7))){
var inst_33164 = (state_33168[(2)]);
var state_33168__$1 = state_33168;
var statearr_33189_35307 = state_33168__$1;
(statearr_33189_35307[(2)] = inst_33164);

(statearr_33189_35307[(1)] = (3));


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
});})(__35297,c__32940__auto___35301,G__33150_35298,G__33150_35299__$1,n__5636__auto___35296,jobs,results,process__$1,async))
;
return ((function (__35297,switch__32645__auto__,c__32940__auto___35301,G__33150_35298,G__33150_35299__$1,n__5636__auto___35296,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0 = (function (){
var statearr_33192 = [null,null,null,null,null,null,null];
(statearr_33192[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__);

(statearr_33192[(1)] = (1));

return statearr_33192;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1 = (function (state_33168){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_33168);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e33194){var ex__32649__auto__ = e33194;
var statearr_33195_35308 = state_33168;
(statearr_33195_35308[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_33168[(4)]))){
var statearr_33197_35309 = state_33168;
(statearr_33197_35309[(1)] = cljs.core.first((state_33168[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35311 = state_33168;
state_33168 = G__35311;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__ = function(state_33168){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1.call(this,state_33168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__;
})()
;})(__35297,switch__32645__auto__,c__32940__auto___35301,G__33150_35298,G__33150_35299__$1,n__5636__auto___35296,jobs,results,process__$1,async))
})();
var state__32942__auto__ = (function (){var statearr_33199 = f__32941__auto__();
(statearr_33199[(6)] = c__32940__auto___35301);

return statearr_33199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32942__auto__);
});})(__35297,c__32940__auto___35301,G__33150_35298,G__33150_35299__$1,n__5636__auto___35296,jobs,results,process__$1,async))
);


break;
case "async":
var c__32940__auto___35313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35297,c__32940__auto___35313,G__33150_35298,G__33150_35299__$1,n__5636__auto___35296,jobs,results,process__$1,async){
return (function (){
var f__32941__auto__ = (function (){var switch__32645__auto__ = ((function (__35297,c__32940__auto___35313,G__33150_35298,G__33150_35299__$1,n__5636__auto___35296,jobs,results,process__$1,async){
return (function (state_33213){
var state_val_33214 = (state_33213[(1)]);
if((state_val_33214 === (1))){
var state_33213__$1 = state_33213;
var statearr_33215_35314 = state_33213__$1;
(statearr_33215_35314[(2)] = null);

(statearr_33215_35314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (2))){
var state_33213__$1 = state_33213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33213__$1,(4),jobs);
} else {
if((state_val_33214 === (3))){
var inst_33211 = (state_33213[(2)]);
var state_33213__$1 = state_33213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33213__$1,inst_33211);
} else {
if((state_val_33214 === (4))){
var inst_33203 = (state_33213[(2)]);
var inst_33204 = async(inst_33203);
var state_33213__$1 = state_33213;
if(cljs.core.truth_(inst_33204)){
var statearr_33218_35315 = state_33213__$1;
(statearr_33218_35315[(1)] = (5));

} else {
var statearr_33219_35316 = state_33213__$1;
(statearr_33219_35316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (5))){
var state_33213__$1 = state_33213;
var statearr_33220_35317 = state_33213__$1;
(statearr_33220_35317[(2)] = null);

(statearr_33220_35317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (6))){
var state_33213__$1 = state_33213;
var statearr_33224_35318 = state_33213__$1;
(statearr_33224_35318[(2)] = null);

(statearr_33224_35318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (7))){
var inst_33209 = (state_33213[(2)]);
var state_33213__$1 = state_33213;
var statearr_33225_35319 = state_33213__$1;
(statearr_33225_35319[(2)] = inst_33209);

(statearr_33225_35319[(1)] = (3));


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
});})(__35297,c__32940__auto___35313,G__33150_35298,G__33150_35299__$1,n__5636__auto___35296,jobs,results,process__$1,async))
;
return ((function (__35297,switch__32645__auto__,c__32940__auto___35313,G__33150_35298,G__33150_35299__$1,n__5636__auto___35296,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0 = (function (){
var statearr_33227 = [null,null,null,null,null,null,null];
(statearr_33227[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__);

(statearr_33227[(1)] = (1));

return statearr_33227;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1 = (function (state_33213){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_33213);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e33228){var ex__32649__auto__ = e33228;
var statearr_33230_35322 = state_33213;
(statearr_33230_35322[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_33213[(4)]))){
var statearr_33231_35323 = state_33213;
(statearr_33231_35323[(1)] = cljs.core.first((state_33213[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35324 = state_33213;
state_33213 = G__35324;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__ = function(state_33213){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1.call(this,state_33213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__;
})()
;})(__35297,switch__32645__auto__,c__32940__auto___35313,G__33150_35298,G__33150_35299__$1,n__5636__auto___35296,jobs,results,process__$1,async))
})();
var state__32942__auto__ = (function (){var statearr_33232 = f__32941__auto__();
(statearr_33232[(6)] = c__32940__auto___35313);

return statearr_33232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32942__auto__);
});})(__35297,c__32940__auto___35313,G__33150_35298,G__33150_35299__$1,n__5636__auto___35296,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33150_35299__$1)].join('')));

}

var G__35326 = (__35297 + (1));
__35297 = G__35326;
continue;
} else {
}
break;
}

var c__32940__auto___35327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32941__auto__ = (function (){var switch__32645__auto__ = (function (state_33262){
var state_val_33263 = (state_33262[(1)]);
if((state_val_33263 === (7))){
var inst_33256 = (state_33262[(2)]);
var state_33262__$1 = state_33262;
var statearr_33271_35329 = state_33262__$1;
(statearr_33271_35329[(2)] = inst_33256);

(statearr_33271_35329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33263 === (1))){
var state_33262__$1 = state_33262;
var statearr_33272_35330 = state_33262__$1;
(statearr_33272_35330[(2)] = null);

(statearr_33272_35330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33263 === (4))){
var inst_33240 = (state_33262[(7)]);
var inst_33240__$1 = (state_33262[(2)]);
var inst_33241 = (inst_33240__$1 == null);
var state_33262__$1 = (function (){var statearr_33273 = state_33262;
(statearr_33273[(7)] = inst_33240__$1);

return statearr_33273;
})();
if(cljs.core.truth_(inst_33241)){
var statearr_33274_35331 = state_33262__$1;
(statearr_33274_35331[(1)] = (5));

} else {
var statearr_33275_35332 = state_33262__$1;
(statearr_33275_35332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33263 === (6))){
var inst_33245 = (state_33262[(8)]);
var inst_33240 = (state_33262[(7)]);
var inst_33245__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33247 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33248 = [inst_33240,inst_33245__$1];
var inst_33249 = (new cljs.core.PersistentVector(null,2,(5),inst_33247,inst_33248,null));
var state_33262__$1 = (function (){var statearr_33276 = state_33262;
(statearr_33276[(8)] = inst_33245__$1);

return statearr_33276;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33262__$1,(8),jobs,inst_33249);
} else {
if((state_val_33263 === (3))){
var inst_33258 = (state_33262[(2)]);
var state_33262__$1 = state_33262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33262__$1,inst_33258);
} else {
if((state_val_33263 === (2))){
var state_33262__$1 = state_33262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33262__$1,(4),from);
} else {
if((state_val_33263 === (9))){
var inst_33253 = (state_33262[(2)]);
var state_33262__$1 = (function (){var statearr_33280 = state_33262;
(statearr_33280[(9)] = inst_33253);

return statearr_33280;
})();
var statearr_33281_35334 = state_33262__$1;
(statearr_33281_35334[(2)] = null);

(statearr_33281_35334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33263 === (5))){
var inst_33243 = cljs.core.async.close_BANG_(jobs);
var state_33262__$1 = state_33262;
var statearr_33282_35335 = state_33262__$1;
(statearr_33282_35335[(2)] = inst_33243);

(statearr_33282_35335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33263 === (8))){
var inst_33245 = (state_33262[(8)]);
var inst_33251 = (state_33262[(2)]);
var state_33262__$1 = (function (){var statearr_33283 = state_33262;
(statearr_33283[(10)] = inst_33251);

return statearr_33283;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33262__$1,(9),results,inst_33245);
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
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0 = (function (){
var statearr_33291 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33291[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__);

(statearr_33291[(1)] = (1));

return statearr_33291;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1 = (function (state_33262){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_33262);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e33298){var ex__32649__auto__ = e33298;
var statearr_33299_35346 = state_33262;
(statearr_33299_35346[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_33262[(4)]))){
var statearr_33306_35347 = state_33262;
(statearr_33306_35347[(1)] = cljs.core.first((state_33262[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35348 = state_33262;
state_33262 = G__35348;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__ = function(state_33262){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1.call(this,state_33262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__;
})()
})();
var state__32942__auto__ = (function (){var statearr_33313 = f__32941__auto__();
(statearr_33313[(6)] = c__32940__auto___35327);

return statearr_33313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32942__auto__);
}));


var c__32940__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32941__auto__ = (function (){var switch__32645__auto__ = (function (state_33356){
var state_val_33357 = (state_33356[(1)]);
if((state_val_33357 === (7))){
var inst_33352 = (state_33356[(2)]);
var state_33356__$1 = state_33356;
var statearr_33359_35350 = state_33356__$1;
(statearr_33359_35350[(2)] = inst_33352);

(statearr_33359_35350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (20))){
var state_33356__$1 = state_33356;
var statearr_33366_35351 = state_33356__$1;
(statearr_33366_35351[(2)] = null);

(statearr_33366_35351[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (1))){
var state_33356__$1 = state_33356;
var statearr_33369_35353 = state_33356__$1;
(statearr_33369_35353[(2)] = null);

(statearr_33369_35353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (4))){
var inst_33321 = (state_33356[(7)]);
var inst_33321__$1 = (state_33356[(2)]);
var inst_33322 = (inst_33321__$1 == null);
var state_33356__$1 = (function (){var statearr_33372 = state_33356;
(statearr_33372[(7)] = inst_33321__$1);

return statearr_33372;
})();
if(cljs.core.truth_(inst_33322)){
var statearr_33373_35354 = state_33356__$1;
(statearr_33373_35354[(1)] = (5));

} else {
var statearr_33374_35355 = state_33356__$1;
(statearr_33374_35355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (15))){
var inst_33334 = (state_33356[(8)]);
var state_33356__$1 = state_33356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33356__$1,(18),to,inst_33334);
} else {
if((state_val_33357 === (21))){
var inst_33347 = (state_33356[(2)]);
var state_33356__$1 = state_33356;
var statearr_33375_35357 = state_33356__$1;
(statearr_33375_35357[(2)] = inst_33347);

(statearr_33375_35357[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (13))){
var inst_33349 = (state_33356[(2)]);
var state_33356__$1 = (function (){var statearr_33377 = state_33356;
(statearr_33377[(9)] = inst_33349);

return statearr_33377;
})();
var statearr_33378_35358 = state_33356__$1;
(statearr_33378_35358[(2)] = null);

(statearr_33378_35358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (6))){
var inst_33321 = (state_33356[(7)]);
var state_33356__$1 = state_33356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33356__$1,(11),inst_33321);
} else {
if((state_val_33357 === (17))){
var inst_33342 = (state_33356[(2)]);
var state_33356__$1 = state_33356;
if(cljs.core.truth_(inst_33342)){
var statearr_33379_35359 = state_33356__$1;
(statearr_33379_35359[(1)] = (19));

} else {
var statearr_33380_35360 = state_33356__$1;
(statearr_33380_35360[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (3))){
var inst_33354 = (state_33356[(2)]);
var state_33356__$1 = state_33356;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33356__$1,inst_33354);
} else {
if((state_val_33357 === (12))){
var inst_33331 = (state_33356[(10)]);
var state_33356__$1 = state_33356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33356__$1,(14),inst_33331);
} else {
if((state_val_33357 === (2))){
var state_33356__$1 = state_33356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33356__$1,(4),results);
} else {
if((state_val_33357 === (19))){
var state_33356__$1 = state_33356;
var statearr_33404_35362 = state_33356__$1;
(statearr_33404_35362[(2)] = null);

(statearr_33404_35362[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (11))){
var inst_33331 = (state_33356[(2)]);
var state_33356__$1 = (function (){var statearr_33406 = state_33356;
(statearr_33406[(10)] = inst_33331);

return statearr_33406;
})();
var statearr_33407_35363 = state_33356__$1;
(statearr_33407_35363[(2)] = null);

(statearr_33407_35363[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (9))){
var state_33356__$1 = state_33356;
var statearr_33408_35364 = state_33356__$1;
(statearr_33408_35364[(2)] = null);

(statearr_33408_35364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (5))){
var state_33356__$1 = state_33356;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33409_35365 = state_33356__$1;
(statearr_33409_35365[(1)] = (8));

} else {
var statearr_33410_35366 = state_33356__$1;
(statearr_33410_35366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (14))){
var inst_33334 = (state_33356[(8)]);
var inst_33336 = (state_33356[(11)]);
var inst_33334__$1 = (state_33356[(2)]);
var inst_33335 = (inst_33334__$1 == null);
var inst_33336__$1 = cljs.core.not(inst_33335);
var state_33356__$1 = (function (){var statearr_33423 = state_33356;
(statearr_33423[(8)] = inst_33334__$1);

(statearr_33423[(11)] = inst_33336__$1);

return statearr_33423;
})();
if(inst_33336__$1){
var statearr_33429_35367 = state_33356__$1;
(statearr_33429_35367[(1)] = (15));

} else {
var statearr_33434_35368 = state_33356__$1;
(statearr_33434_35368[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (16))){
var inst_33336 = (state_33356[(11)]);
var state_33356__$1 = state_33356;
var statearr_33435_35369 = state_33356__$1;
(statearr_33435_35369[(2)] = inst_33336);

(statearr_33435_35369[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (10))){
var inst_33328 = (state_33356[(2)]);
var state_33356__$1 = state_33356;
var statearr_33441_35370 = state_33356__$1;
(statearr_33441_35370[(2)] = inst_33328);

(statearr_33441_35370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (18))){
var inst_33339 = (state_33356[(2)]);
var state_33356__$1 = state_33356;
var statearr_33450_35371 = state_33356__$1;
(statearr_33450_35371[(2)] = inst_33339);

(statearr_33450_35371[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (8))){
var inst_33325 = cljs.core.async.close_BANG_(to);
var state_33356__$1 = state_33356;
var statearr_33461_35372 = state_33356__$1;
(statearr_33461_35372[(2)] = inst_33325);

(statearr_33461_35372[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0 = (function (){
var statearr_33465 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33465[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__);

(statearr_33465[(1)] = (1));

return statearr_33465;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1 = (function (state_33356){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_33356);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e33478){var ex__32649__auto__ = e33478;
var statearr_33483_35375 = state_33356;
(statearr_33483_35375[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_33356[(4)]))){
var statearr_33488_35376 = state_33356;
(statearr_33488_35376[(1)] = cljs.core.first((state_33356[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35377 = state_33356;
state_33356 = G__35377;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__ = function(state_33356){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1.call(this,state_33356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32646__auto__;
})()
})();
var state__32942__auto__ = (function (){var statearr_33489 = f__32941__auto__();
(statearr_33489[(6)] = c__32940__auto__);

return statearr_33489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32942__auto__);
}));

return c__32940__auto__;
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
var G__33493 = arguments.length;
switch (G__33493) {
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
var G__33508 = arguments.length;
switch (G__33508) {
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
var G__33532 = arguments.length;
switch (G__33532) {
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
var c__32940__auto___35383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32941__auto__ = (function (){var switch__32645__auto__ = (function (state_33559){
var state_val_33560 = (state_33559[(1)]);
if((state_val_33560 === (7))){
var inst_33555 = (state_33559[(2)]);
var state_33559__$1 = state_33559;
var statearr_33561_35384 = state_33559__$1;
(statearr_33561_35384[(2)] = inst_33555);

(statearr_33561_35384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (1))){
var state_33559__$1 = state_33559;
var statearr_33562_35385 = state_33559__$1;
(statearr_33562_35385[(2)] = null);

(statearr_33562_35385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (4))){
var inst_33536 = (state_33559[(7)]);
var inst_33536__$1 = (state_33559[(2)]);
var inst_33537 = (inst_33536__$1 == null);
var state_33559__$1 = (function (){var statearr_33564 = state_33559;
(statearr_33564[(7)] = inst_33536__$1);

return statearr_33564;
})();
if(cljs.core.truth_(inst_33537)){
var statearr_33565_35386 = state_33559__$1;
(statearr_33565_35386[(1)] = (5));

} else {
var statearr_33566_35387 = state_33559__$1;
(statearr_33566_35387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (13))){
var state_33559__$1 = state_33559;
var statearr_33567_35388 = state_33559__$1;
(statearr_33567_35388[(2)] = null);

(statearr_33567_35388[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (6))){
var inst_33536 = (state_33559[(7)]);
var inst_33542 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33536) : p.call(null,inst_33536));
var state_33559__$1 = state_33559;
if(cljs.core.truth_(inst_33542)){
var statearr_33568_35389 = state_33559__$1;
(statearr_33568_35389[(1)] = (9));

} else {
var statearr_33569_35390 = state_33559__$1;
(statearr_33569_35390[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (3))){
var inst_33557 = (state_33559[(2)]);
var state_33559__$1 = state_33559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33559__$1,inst_33557);
} else {
if((state_val_33560 === (12))){
var state_33559__$1 = state_33559;
var statearr_33570_35391 = state_33559__$1;
(statearr_33570_35391[(2)] = null);

(statearr_33570_35391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (2))){
var state_33559__$1 = state_33559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33559__$1,(4),ch);
} else {
if((state_val_33560 === (11))){
var inst_33536 = (state_33559[(7)]);
var inst_33546 = (state_33559[(2)]);
var state_33559__$1 = state_33559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33559__$1,(8),inst_33546,inst_33536);
} else {
if((state_val_33560 === (9))){
var state_33559__$1 = state_33559;
var statearr_33572_35394 = state_33559__$1;
(statearr_33572_35394[(2)] = tc);

(statearr_33572_35394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (5))){
var inst_33539 = cljs.core.async.close_BANG_(tc);
var inst_33540 = cljs.core.async.close_BANG_(fc);
var state_33559__$1 = (function (){var statearr_33573 = state_33559;
(statearr_33573[(8)] = inst_33539);

return statearr_33573;
})();
var statearr_33574_35396 = state_33559__$1;
(statearr_33574_35396[(2)] = inst_33540);

(statearr_33574_35396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (14))){
var inst_33553 = (state_33559[(2)]);
var state_33559__$1 = state_33559;
var statearr_33575_35397 = state_33559__$1;
(statearr_33575_35397[(2)] = inst_33553);

(statearr_33575_35397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (10))){
var state_33559__$1 = state_33559;
var statearr_33576_35398 = state_33559__$1;
(statearr_33576_35398[(2)] = fc);

(statearr_33576_35398[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (8))){
var inst_33548 = (state_33559[(2)]);
var state_33559__$1 = state_33559;
if(cljs.core.truth_(inst_33548)){
var statearr_33577_35399 = state_33559__$1;
(statearr_33577_35399[(1)] = (12));

} else {
var statearr_33578_35400 = state_33559__$1;
(statearr_33578_35400[(1)] = (13));

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
var cljs$core$async$state_machine__32646__auto__ = null;
var cljs$core$async$state_machine__32646__auto____0 = (function (){
var statearr_33579 = [null,null,null,null,null,null,null,null,null];
(statearr_33579[(0)] = cljs$core$async$state_machine__32646__auto__);

(statearr_33579[(1)] = (1));

return statearr_33579;
});
var cljs$core$async$state_machine__32646__auto____1 = (function (state_33559){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_33559);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e33581){var ex__32649__auto__ = e33581;
var statearr_33582_35402 = state_33559;
(statearr_33582_35402[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_33559[(4)]))){
var statearr_33583_35403 = state_33559;
(statearr_33583_35403[(1)] = cljs.core.first((state_33559[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35404 = state_33559;
state_33559 = G__35404;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$state_machine__32646__auto__ = function(state_33559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32646__auto____1.call(this,state_33559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32646__auto____0;
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32646__auto____1;
return cljs$core$async$state_machine__32646__auto__;
})()
})();
var state__32942__auto__ = (function (){var statearr_33584 = f__32941__auto__();
(statearr_33584[(6)] = c__32940__auto___35383);

return statearr_33584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32942__auto__);
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
var c__32940__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32941__auto__ = (function (){var switch__32645__auto__ = (function (state_33607){
var state_val_33608 = (state_33607[(1)]);
if((state_val_33608 === (7))){
var inst_33603 = (state_33607[(2)]);
var state_33607__$1 = state_33607;
var statearr_33609_35405 = state_33607__$1;
(statearr_33609_35405[(2)] = inst_33603);

(statearr_33609_35405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (1))){
var inst_33585 = init;
var inst_33586 = inst_33585;
var state_33607__$1 = (function (){var statearr_33610 = state_33607;
(statearr_33610[(7)] = inst_33586);

return statearr_33610;
})();
var statearr_33611_35410 = state_33607__$1;
(statearr_33611_35410[(2)] = null);

(statearr_33611_35410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (4))){
var inst_33590 = (state_33607[(8)]);
var inst_33590__$1 = (state_33607[(2)]);
var inst_33591 = (inst_33590__$1 == null);
var state_33607__$1 = (function (){var statearr_33612 = state_33607;
(statearr_33612[(8)] = inst_33590__$1);

return statearr_33612;
})();
if(cljs.core.truth_(inst_33591)){
var statearr_33614_35411 = state_33607__$1;
(statearr_33614_35411[(1)] = (5));

} else {
var statearr_33615_35412 = state_33607__$1;
(statearr_33615_35412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (6))){
var inst_33594 = (state_33607[(9)]);
var inst_33590 = (state_33607[(8)]);
var inst_33586 = (state_33607[(7)]);
var inst_33594__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33586,inst_33590) : f.call(null,inst_33586,inst_33590));
var inst_33595 = cljs.core.reduced_QMARK_(inst_33594__$1);
var state_33607__$1 = (function (){var statearr_33616 = state_33607;
(statearr_33616[(9)] = inst_33594__$1);

return statearr_33616;
})();
if(inst_33595){
var statearr_33617_35422 = state_33607__$1;
(statearr_33617_35422[(1)] = (8));

} else {
var statearr_33618_35423 = state_33607__$1;
(statearr_33618_35423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (3))){
var inst_33605 = (state_33607[(2)]);
var state_33607__$1 = state_33607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33607__$1,inst_33605);
} else {
if((state_val_33608 === (2))){
var state_33607__$1 = state_33607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33607__$1,(4),ch);
} else {
if((state_val_33608 === (9))){
var inst_33594 = (state_33607[(9)]);
var inst_33586 = inst_33594;
var state_33607__$1 = (function (){var statearr_33619 = state_33607;
(statearr_33619[(7)] = inst_33586);

return statearr_33619;
})();
var statearr_33620_35424 = state_33607__$1;
(statearr_33620_35424[(2)] = null);

(statearr_33620_35424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (5))){
var inst_33586 = (state_33607[(7)]);
var state_33607__$1 = state_33607;
var statearr_33621_35425 = state_33607__$1;
(statearr_33621_35425[(2)] = inst_33586);

(statearr_33621_35425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (10))){
var inst_33601 = (state_33607[(2)]);
var state_33607__$1 = state_33607;
var statearr_33623_35426 = state_33607__$1;
(statearr_33623_35426[(2)] = inst_33601);

(statearr_33623_35426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (8))){
var inst_33594 = (state_33607[(9)]);
var inst_33597 = cljs.core.deref(inst_33594);
var state_33607__$1 = state_33607;
var statearr_33624_35427 = state_33607__$1;
(statearr_33624_35427[(2)] = inst_33597);

(statearr_33624_35427[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__32646__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32646__auto____0 = (function (){
var statearr_33625 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33625[(0)] = cljs$core$async$reduce_$_state_machine__32646__auto__);

(statearr_33625[(1)] = (1));

return statearr_33625;
});
var cljs$core$async$reduce_$_state_machine__32646__auto____1 = (function (state_33607){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_33607);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e33626){var ex__32649__auto__ = e33626;
var statearr_33627_35429 = state_33607;
(statearr_33627_35429[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_33607[(4)]))){
var statearr_33628_35430 = state_33607;
(statearr_33628_35430[(1)] = cljs.core.first((state_33607[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35431 = state_33607;
state_33607 = G__35431;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32646__auto__ = function(state_33607){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32646__auto____1.call(this,state_33607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32646__auto____0;
cljs$core$async$reduce_$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32646__auto____1;
return cljs$core$async$reduce_$_state_machine__32646__auto__;
})()
})();
var state__32942__auto__ = (function (){var statearr_33629 = f__32941__auto__();
(statearr_33629[(6)] = c__32940__auto__);

return statearr_33629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32942__auto__);
}));

return c__32940__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32940__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32941__auto__ = (function (){var switch__32645__auto__ = (function (state_33636){
var state_val_33637 = (state_33636[(1)]);
if((state_val_33637 === (1))){
var inst_33631 = cljs.core.async.reduce(f__$1,init,ch);
var state_33636__$1 = state_33636;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33636__$1,(2),inst_33631);
} else {
if((state_val_33637 === (2))){
var inst_33633 = (state_33636[(2)]);
var inst_33634 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33633) : f__$1.call(null,inst_33633));
var state_33636__$1 = state_33636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33636__$1,inst_33634);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32646__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32646__auto____0 = (function (){
var statearr_33638 = [null,null,null,null,null,null,null];
(statearr_33638[(0)] = cljs$core$async$transduce_$_state_machine__32646__auto__);

(statearr_33638[(1)] = (1));

return statearr_33638;
});
var cljs$core$async$transduce_$_state_machine__32646__auto____1 = (function (state_33636){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_33636);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e33640){var ex__32649__auto__ = e33640;
var statearr_33641_35432 = state_33636;
(statearr_33641_35432[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_33636[(4)]))){
var statearr_33642_35433 = state_33636;
(statearr_33642_35433[(1)] = cljs.core.first((state_33636[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35434 = state_33636;
state_33636 = G__35434;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32646__auto__ = function(state_33636){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32646__auto____1.call(this,state_33636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32646__auto____0;
cljs$core$async$transduce_$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32646__auto____1;
return cljs$core$async$transduce_$_state_machine__32646__auto__;
})()
})();
var state__32942__auto__ = (function (){var statearr_33643 = f__32941__auto__();
(statearr_33643[(6)] = c__32940__auto__);

return statearr_33643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32942__auto__);
}));

return c__32940__auto__;
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
var G__33645 = arguments.length;
switch (G__33645) {
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
var c__32940__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32941__auto__ = (function (){var switch__32645__auto__ = (function (state_33671){
var state_val_33672 = (state_33671[(1)]);
if((state_val_33672 === (7))){
var inst_33653 = (state_33671[(2)]);
var state_33671__$1 = state_33671;
var statearr_33673_35438 = state_33671__$1;
(statearr_33673_35438[(2)] = inst_33653);

(statearr_33673_35438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (1))){
var inst_33647 = cljs.core.seq(coll);
var inst_33648 = inst_33647;
var state_33671__$1 = (function (){var statearr_33674 = state_33671;
(statearr_33674[(7)] = inst_33648);

return statearr_33674;
})();
var statearr_33675_35439 = state_33671__$1;
(statearr_33675_35439[(2)] = null);

(statearr_33675_35439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (4))){
var inst_33648 = (state_33671[(7)]);
var inst_33651 = cljs.core.first(inst_33648);
var state_33671__$1 = state_33671;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33671__$1,(7),ch,inst_33651);
} else {
if((state_val_33672 === (13))){
var inst_33665 = (state_33671[(2)]);
var state_33671__$1 = state_33671;
var statearr_33677_35440 = state_33671__$1;
(statearr_33677_35440[(2)] = inst_33665);

(statearr_33677_35440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (6))){
var inst_33656 = (state_33671[(2)]);
var state_33671__$1 = state_33671;
if(cljs.core.truth_(inst_33656)){
var statearr_33678_35441 = state_33671__$1;
(statearr_33678_35441[(1)] = (8));

} else {
var statearr_33679_35442 = state_33671__$1;
(statearr_33679_35442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (3))){
var inst_33669 = (state_33671[(2)]);
var state_33671__$1 = state_33671;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33671__$1,inst_33669);
} else {
if((state_val_33672 === (12))){
var state_33671__$1 = state_33671;
var statearr_33680_35443 = state_33671__$1;
(statearr_33680_35443[(2)] = null);

(statearr_33680_35443[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (2))){
var inst_33648 = (state_33671[(7)]);
var state_33671__$1 = state_33671;
if(cljs.core.truth_(inst_33648)){
var statearr_33681_35444 = state_33671__$1;
(statearr_33681_35444[(1)] = (4));

} else {
var statearr_33683_35445 = state_33671__$1;
(statearr_33683_35445[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (11))){
var inst_33662 = cljs.core.async.close_BANG_(ch);
var state_33671__$1 = state_33671;
var statearr_33684_35446 = state_33671__$1;
(statearr_33684_35446[(2)] = inst_33662);

(statearr_33684_35446[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (9))){
var state_33671__$1 = state_33671;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33685_35447 = state_33671__$1;
(statearr_33685_35447[(1)] = (11));

} else {
var statearr_33686_35448 = state_33671__$1;
(statearr_33686_35448[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (5))){
var inst_33648 = (state_33671[(7)]);
var state_33671__$1 = state_33671;
var statearr_33687_35449 = state_33671__$1;
(statearr_33687_35449[(2)] = inst_33648);

(statearr_33687_35449[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (10))){
var inst_33667 = (state_33671[(2)]);
var state_33671__$1 = state_33671;
var statearr_33688_35450 = state_33671__$1;
(statearr_33688_35450[(2)] = inst_33667);

(statearr_33688_35450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (8))){
var inst_33648 = (state_33671[(7)]);
var inst_33658 = cljs.core.next(inst_33648);
var inst_33648__$1 = inst_33658;
var state_33671__$1 = (function (){var statearr_33689 = state_33671;
(statearr_33689[(7)] = inst_33648__$1);

return statearr_33689;
})();
var statearr_33690_35451 = state_33671__$1;
(statearr_33690_35451[(2)] = null);

(statearr_33690_35451[(1)] = (2));


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
var cljs$core$async$state_machine__32646__auto__ = null;
var cljs$core$async$state_machine__32646__auto____0 = (function (){
var statearr_33692 = [null,null,null,null,null,null,null,null];
(statearr_33692[(0)] = cljs$core$async$state_machine__32646__auto__);

(statearr_33692[(1)] = (1));

return statearr_33692;
});
var cljs$core$async$state_machine__32646__auto____1 = (function (state_33671){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_33671);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e33693){var ex__32649__auto__ = e33693;
var statearr_33694_35461 = state_33671;
(statearr_33694_35461[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_33671[(4)]))){
var statearr_33695_35462 = state_33671;
(statearr_33695_35462[(1)] = cljs.core.first((state_33671[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35463 = state_33671;
state_33671 = G__35463;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$state_machine__32646__auto__ = function(state_33671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32646__auto____1.call(this,state_33671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32646__auto____0;
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32646__auto____1;
return cljs$core$async$state_machine__32646__auto__;
})()
})();
var state__32942__auto__ = (function (){var statearr_33696 = f__32941__auto__();
(statearr_33696[(6)] = c__32940__auto__);

return statearr_33696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32942__auto__);
}));

return c__32940__auto__;
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
var G__33699 = arguments.length;
switch (G__33699) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_35472 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_35472(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35474 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_35474(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35478 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_35478(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35483 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_35483(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33704 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33704 = (function (ch,cs,meta33705){
this.ch = ch;
this.cs = cs;
this.meta33705 = meta33705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33706,meta33705__$1){
var self__ = this;
var _33706__$1 = this;
return (new cljs.core.async.t_cljs$core$async33704(self__.ch,self__.cs,meta33705__$1));
}));

(cljs.core.async.t_cljs$core$async33704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33706){
var self__ = this;
var _33706__$1 = this;
return self__.meta33705;
}));

(cljs.core.async.t_cljs$core$async33704.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33704.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33704.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33704.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33704.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33704.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33705","meta33705",-1417213086,null)], null);
}));

(cljs.core.async.t_cljs$core$async33704.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33704");

(cljs.core.async.t_cljs$core$async33704.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33704");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33704.
 */
cljs.core.async.__GT_t_cljs$core$async33704 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33704(ch__$1,cs__$1,meta33705){
return (new cljs.core.async.t_cljs$core$async33704(ch__$1,cs__$1,meta33705));
});

}

return (new cljs.core.async.t_cljs$core$async33704(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32940__auto___35504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32941__auto__ = (function (){var switch__32645__auto__ = (function (state_33843){
var state_val_33844 = (state_33843[(1)]);
if((state_val_33844 === (7))){
var inst_33838 = (state_33843[(2)]);
var state_33843__$1 = state_33843;
var statearr_33845_35505 = state_33843__$1;
(statearr_33845_35505[(2)] = inst_33838);

(statearr_33845_35505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (20))){
var inst_33742 = (state_33843[(7)]);
var inst_33754 = cljs.core.first(inst_33742);
var inst_33755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33754,(0),null);
var inst_33756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33754,(1),null);
var state_33843__$1 = (function (){var statearr_33846 = state_33843;
(statearr_33846[(8)] = inst_33755);

return statearr_33846;
})();
if(cljs.core.truth_(inst_33756)){
var statearr_33847_35506 = state_33843__$1;
(statearr_33847_35506[(1)] = (22));

} else {
var statearr_33848_35507 = state_33843__$1;
(statearr_33848_35507[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (27))){
var inst_33792 = (state_33843[(9)]);
var inst_33711 = (state_33843[(10)]);
var inst_33787 = (state_33843[(11)]);
var inst_33785 = (state_33843[(12)]);
var inst_33792__$1 = cljs.core._nth(inst_33785,inst_33787);
var inst_33793 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33792__$1,inst_33711,done);
var state_33843__$1 = (function (){var statearr_33849 = state_33843;
(statearr_33849[(9)] = inst_33792__$1);

return statearr_33849;
})();
if(cljs.core.truth_(inst_33793)){
var statearr_33851_35518 = state_33843__$1;
(statearr_33851_35518[(1)] = (30));

} else {
var statearr_33852_35519 = state_33843__$1;
(statearr_33852_35519[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (1))){
var state_33843__$1 = state_33843;
var statearr_33853_35520 = state_33843__$1;
(statearr_33853_35520[(2)] = null);

(statearr_33853_35520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (24))){
var inst_33742 = (state_33843[(7)]);
var inst_33761 = (state_33843[(2)]);
var inst_33762 = cljs.core.next(inst_33742);
var inst_33720 = inst_33762;
var inst_33721 = null;
var inst_33722 = (0);
var inst_33723 = (0);
var state_33843__$1 = (function (){var statearr_33854 = state_33843;
(statearr_33854[(13)] = inst_33722);

(statearr_33854[(14)] = inst_33723);

(statearr_33854[(15)] = inst_33721);

(statearr_33854[(16)] = inst_33761);

(statearr_33854[(17)] = inst_33720);

return statearr_33854;
})();
var statearr_33855_35521 = state_33843__$1;
(statearr_33855_35521[(2)] = null);

(statearr_33855_35521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (39))){
var state_33843__$1 = state_33843;
var statearr_33859_35523 = state_33843__$1;
(statearr_33859_35523[(2)] = null);

(statearr_33859_35523[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (4))){
var inst_33711 = (state_33843[(10)]);
var inst_33711__$1 = (state_33843[(2)]);
var inst_33712 = (inst_33711__$1 == null);
var state_33843__$1 = (function (){var statearr_33860 = state_33843;
(statearr_33860[(10)] = inst_33711__$1);

return statearr_33860;
})();
if(cljs.core.truth_(inst_33712)){
var statearr_33861_35527 = state_33843__$1;
(statearr_33861_35527[(1)] = (5));

} else {
var statearr_33862_35528 = state_33843__$1;
(statearr_33862_35528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (15))){
var inst_33722 = (state_33843[(13)]);
var inst_33723 = (state_33843[(14)]);
var inst_33721 = (state_33843[(15)]);
var inst_33720 = (state_33843[(17)]);
var inst_33738 = (state_33843[(2)]);
var inst_33739 = (inst_33723 + (1));
var tmp33856 = inst_33722;
var tmp33857 = inst_33721;
var tmp33858 = inst_33720;
var inst_33720__$1 = tmp33858;
var inst_33721__$1 = tmp33857;
var inst_33722__$1 = tmp33856;
var inst_33723__$1 = inst_33739;
var state_33843__$1 = (function (){var statearr_33864 = state_33843;
(statearr_33864[(13)] = inst_33722__$1);

(statearr_33864[(18)] = inst_33738);

(statearr_33864[(14)] = inst_33723__$1);

(statearr_33864[(15)] = inst_33721__$1);

(statearr_33864[(17)] = inst_33720__$1);

return statearr_33864;
})();
var statearr_33865_35529 = state_33843__$1;
(statearr_33865_35529[(2)] = null);

(statearr_33865_35529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (21))){
var inst_33765 = (state_33843[(2)]);
var state_33843__$1 = state_33843;
var statearr_33869_35531 = state_33843__$1;
(statearr_33869_35531[(2)] = inst_33765);

(statearr_33869_35531[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (31))){
var inst_33792 = (state_33843[(9)]);
var inst_33796 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33792);
var state_33843__$1 = state_33843;
var statearr_33870_35538 = state_33843__$1;
(statearr_33870_35538[(2)] = inst_33796);

(statearr_33870_35538[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (32))){
var inst_33784 = (state_33843[(19)]);
var inst_33786 = (state_33843[(20)]);
var inst_33787 = (state_33843[(11)]);
var inst_33785 = (state_33843[(12)]);
var inst_33798 = (state_33843[(2)]);
var inst_33799 = (inst_33787 + (1));
var tmp33866 = inst_33784;
var tmp33867 = inst_33786;
var tmp33868 = inst_33785;
var inst_33784__$1 = tmp33866;
var inst_33785__$1 = tmp33868;
var inst_33786__$1 = tmp33867;
var inst_33787__$1 = inst_33799;
var state_33843__$1 = (function (){var statearr_33872 = state_33843;
(statearr_33872[(19)] = inst_33784__$1);

(statearr_33872[(20)] = inst_33786__$1);

(statearr_33872[(21)] = inst_33798);

(statearr_33872[(11)] = inst_33787__$1);

(statearr_33872[(12)] = inst_33785__$1);

return statearr_33872;
})();
var statearr_33873_35539 = state_33843__$1;
(statearr_33873_35539[(2)] = null);

(statearr_33873_35539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (40))){
var inst_33811 = (state_33843[(22)]);
var inst_33815 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33811);
var state_33843__$1 = state_33843;
var statearr_33874_35541 = state_33843__$1;
(statearr_33874_35541[(2)] = inst_33815);

(statearr_33874_35541[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (33))){
var inst_33802 = (state_33843[(23)]);
var inst_33804 = cljs.core.chunked_seq_QMARK_(inst_33802);
var state_33843__$1 = state_33843;
if(inst_33804){
var statearr_33875_35542 = state_33843__$1;
(statearr_33875_35542[(1)] = (36));

} else {
var statearr_33876_35543 = state_33843__$1;
(statearr_33876_35543[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (13))){
var inst_33732 = (state_33843[(24)]);
var inst_33735 = cljs.core.async.close_BANG_(inst_33732);
var state_33843__$1 = state_33843;
var statearr_33878_35544 = state_33843__$1;
(statearr_33878_35544[(2)] = inst_33735);

(statearr_33878_35544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (22))){
var inst_33755 = (state_33843[(8)]);
var inst_33758 = cljs.core.async.close_BANG_(inst_33755);
var state_33843__$1 = state_33843;
var statearr_33879_35545 = state_33843__$1;
(statearr_33879_35545[(2)] = inst_33758);

(statearr_33879_35545[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (36))){
var inst_33802 = (state_33843[(23)]);
var inst_33806 = cljs.core.chunk_first(inst_33802);
var inst_33807 = cljs.core.chunk_rest(inst_33802);
var inst_33808 = cljs.core.count(inst_33806);
var inst_33784 = inst_33807;
var inst_33785 = inst_33806;
var inst_33786 = inst_33808;
var inst_33787 = (0);
var state_33843__$1 = (function (){var statearr_33880 = state_33843;
(statearr_33880[(19)] = inst_33784);

(statearr_33880[(20)] = inst_33786);

(statearr_33880[(11)] = inst_33787);

(statearr_33880[(12)] = inst_33785);

return statearr_33880;
})();
var statearr_33881_35546 = state_33843__$1;
(statearr_33881_35546[(2)] = null);

(statearr_33881_35546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (41))){
var inst_33802 = (state_33843[(23)]);
var inst_33817 = (state_33843[(2)]);
var inst_33818 = cljs.core.next(inst_33802);
var inst_33784 = inst_33818;
var inst_33785 = null;
var inst_33786 = (0);
var inst_33787 = (0);
var state_33843__$1 = (function (){var statearr_33882 = state_33843;
(statearr_33882[(19)] = inst_33784);

(statearr_33882[(20)] = inst_33786);

(statearr_33882[(25)] = inst_33817);

(statearr_33882[(11)] = inst_33787);

(statearr_33882[(12)] = inst_33785);

return statearr_33882;
})();
var statearr_33883_35549 = state_33843__$1;
(statearr_33883_35549[(2)] = null);

(statearr_33883_35549[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (43))){
var state_33843__$1 = state_33843;
var statearr_33885_35550 = state_33843__$1;
(statearr_33885_35550[(2)] = null);

(statearr_33885_35550[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (29))){
var inst_33826 = (state_33843[(2)]);
var state_33843__$1 = state_33843;
var statearr_33886_35551 = state_33843__$1;
(statearr_33886_35551[(2)] = inst_33826);

(statearr_33886_35551[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (44))){
var inst_33835 = (state_33843[(2)]);
var state_33843__$1 = (function (){var statearr_33887 = state_33843;
(statearr_33887[(26)] = inst_33835);

return statearr_33887;
})();
var statearr_33888_35555 = state_33843__$1;
(statearr_33888_35555[(2)] = null);

(statearr_33888_35555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (6))){
var inst_33776 = (state_33843[(27)]);
var inst_33775 = cljs.core.deref(cs);
var inst_33776__$1 = cljs.core.keys(inst_33775);
var inst_33777 = cljs.core.count(inst_33776__$1);
var inst_33778 = cljs.core.reset_BANG_(dctr,inst_33777);
var inst_33783 = cljs.core.seq(inst_33776__$1);
var inst_33784 = inst_33783;
var inst_33785 = null;
var inst_33786 = (0);
var inst_33787 = (0);
var state_33843__$1 = (function (){var statearr_33890 = state_33843;
(statearr_33890[(19)] = inst_33784);

(statearr_33890[(20)] = inst_33786);

(statearr_33890[(28)] = inst_33778);

(statearr_33890[(11)] = inst_33787);

(statearr_33890[(27)] = inst_33776__$1);

(statearr_33890[(12)] = inst_33785);

return statearr_33890;
})();
var statearr_33891_35560 = state_33843__$1;
(statearr_33891_35560[(2)] = null);

(statearr_33891_35560[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (28))){
var inst_33784 = (state_33843[(19)]);
var inst_33802 = (state_33843[(23)]);
var inst_33802__$1 = cljs.core.seq(inst_33784);
var state_33843__$1 = (function (){var statearr_33892 = state_33843;
(statearr_33892[(23)] = inst_33802__$1);

return statearr_33892;
})();
if(inst_33802__$1){
var statearr_33893_35564 = state_33843__$1;
(statearr_33893_35564[(1)] = (33));

} else {
var statearr_33894_35565 = state_33843__$1;
(statearr_33894_35565[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (25))){
var inst_33786 = (state_33843[(20)]);
var inst_33787 = (state_33843[(11)]);
var inst_33789 = (inst_33787 < inst_33786);
var inst_33790 = inst_33789;
var state_33843__$1 = state_33843;
if(cljs.core.truth_(inst_33790)){
var statearr_33895_35567 = state_33843__$1;
(statearr_33895_35567[(1)] = (27));

} else {
var statearr_33896_35568 = state_33843__$1;
(statearr_33896_35568[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (34))){
var state_33843__$1 = state_33843;
var statearr_33898_35569 = state_33843__$1;
(statearr_33898_35569[(2)] = null);

(statearr_33898_35569[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (17))){
var state_33843__$1 = state_33843;
var statearr_33899_35570 = state_33843__$1;
(statearr_33899_35570[(2)] = null);

(statearr_33899_35570[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (3))){
var inst_33840 = (state_33843[(2)]);
var state_33843__$1 = state_33843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33843__$1,inst_33840);
} else {
if((state_val_33844 === (12))){
var inst_33770 = (state_33843[(2)]);
var state_33843__$1 = state_33843;
var statearr_33900_35573 = state_33843__$1;
(statearr_33900_35573[(2)] = inst_33770);

(statearr_33900_35573[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (2))){
var state_33843__$1 = state_33843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33843__$1,(4),ch);
} else {
if((state_val_33844 === (23))){
var state_33843__$1 = state_33843;
var statearr_33901_35578 = state_33843__$1;
(statearr_33901_35578[(2)] = null);

(statearr_33901_35578[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (35))){
var inst_33824 = (state_33843[(2)]);
var state_33843__$1 = state_33843;
var statearr_33903_35579 = state_33843__$1;
(statearr_33903_35579[(2)] = inst_33824);

(statearr_33903_35579[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (19))){
var inst_33742 = (state_33843[(7)]);
var inst_33746 = cljs.core.chunk_first(inst_33742);
var inst_33747 = cljs.core.chunk_rest(inst_33742);
var inst_33748 = cljs.core.count(inst_33746);
var inst_33720 = inst_33747;
var inst_33721 = inst_33746;
var inst_33722 = inst_33748;
var inst_33723 = (0);
var state_33843__$1 = (function (){var statearr_33904 = state_33843;
(statearr_33904[(13)] = inst_33722);

(statearr_33904[(14)] = inst_33723);

(statearr_33904[(15)] = inst_33721);

(statearr_33904[(17)] = inst_33720);

return statearr_33904;
})();
var statearr_33905_35581 = state_33843__$1;
(statearr_33905_35581[(2)] = null);

(statearr_33905_35581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (11))){
var inst_33742 = (state_33843[(7)]);
var inst_33720 = (state_33843[(17)]);
var inst_33742__$1 = cljs.core.seq(inst_33720);
var state_33843__$1 = (function (){var statearr_33906 = state_33843;
(statearr_33906[(7)] = inst_33742__$1);

return statearr_33906;
})();
if(inst_33742__$1){
var statearr_33907_35582 = state_33843__$1;
(statearr_33907_35582[(1)] = (16));

} else {
var statearr_33908_35583 = state_33843__$1;
(statearr_33908_35583[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (9))){
var inst_33772 = (state_33843[(2)]);
var state_33843__$1 = state_33843;
var statearr_33909_35584 = state_33843__$1;
(statearr_33909_35584[(2)] = inst_33772);

(statearr_33909_35584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (5))){
var inst_33718 = cljs.core.deref(cs);
var inst_33719 = cljs.core.seq(inst_33718);
var inst_33720 = inst_33719;
var inst_33721 = null;
var inst_33722 = (0);
var inst_33723 = (0);
var state_33843__$1 = (function (){var statearr_33910 = state_33843;
(statearr_33910[(13)] = inst_33722);

(statearr_33910[(14)] = inst_33723);

(statearr_33910[(15)] = inst_33721);

(statearr_33910[(17)] = inst_33720);

return statearr_33910;
})();
var statearr_33912_35585 = state_33843__$1;
(statearr_33912_35585[(2)] = null);

(statearr_33912_35585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (14))){
var state_33843__$1 = state_33843;
var statearr_33913_35586 = state_33843__$1;
(statearr_33913_35586[(2)] = null);

(statearr_33913_35586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (45))){
var inst_33832 = (state_33843[(2)]);
var state_33843__$1 = state_33843;
var statearr_33914_35588 = state_33843__$1;
(statearr_33914_35588[(2)] = inst_33832);

(statearr_33914_35588[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (26))){
var inst_33776 = (state_33843[(27)]);
var inst_33828 = (state_33843[(2)]);
var inst_33829 = cljs.core.seq(inst_33776);
var state_33843__$1 = (function (){var statearr_33915 = state_33843;
(statearr_33915[(29)] = inst_33828);

return statearr_33915;
})();
if(inst_33829){
var statearr_33916_35589 = state_33843__$1;
(statearr_33916_35589[(1)] = (42));

} else {
var statearr_33917_35590 = state_33843__$1;
(statearr_33917_35590[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (16))){
var inst_33742 = (state_33843[(7)]);
var inst_33744 = cljs.core.chunked_seq_QMARK_(inst_33742);
var state_33843__$1 = state_33843;
if(inst_33744){
var statearr_33919_35599 = state_33843__$1;
(statearr_33919_35599[(1)] = (19));

} else {
var statearr_33920_35600 = state_33843__$1;
(statearr_33920_35600[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (38))){
var inst_33821 = (state_33843[(2)]);
var state_33843__$1 = state_33843;
var statearr_33922_35604 = state_33843__$1;
(statearr_33922_35604[(2)] = inst_33821);

(statearr_33922_35604[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (30))){
var state_33843__$1 = state_33843;
var statearr_33923_35605 = state_33843__$1;
(statearr_33923_35605[(2)] = null);

(statearr_33923_35605[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (10))){
var inst_33723 = (state_33843[(14)]);
var inst_33721 = (state_33843[(15)]);
var inst_33731 = cljs.core._nth(inst_33721,inst_33723);
var inst_33732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33731,(0),null);
var inst_33733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33731,(1),null);
var state_33843__$1 = (function (){var statearr_33924 = state_33843;
(statearr_33924[(24)] = inst_33732);

return statearr_33924;
})();
if(cljs.core.truth_(inst_33733)){
var statearr_33925_35607 = state_33843__$1;
(statearr_33925_35607[(1)] = (13));

} else {
var statearr_33926_35608 = state_33843__$1;
(statearr_33926_35608[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (18))){
var inst_33768 = (state_33843[(2)]);
var state_33843__$1 = state_33843;
var statearr_33927_35611 = state_33843__$1;
(statearr_33927_35611[(2)] = inst_33768);

(statearr_33927_35611[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (42))){
var state_33843__$1 = state_33843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33843__$1,(45),dchan);
} else {
if((state_val_33844 === (37))){
var inst_33811 = (state_33843[(22)]);
var inst_33802 = (state_33843[(23)]);
var inst_33711 = (state_33843[(10)]);
var inst_33811__$1 = cljs.core.first(inst_33802);
var inst_33812 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33811__$1,inst_33711,done);
var state_33843__$1 = (function (){var statearr_33928 = state_33843;
(statearr_33928[(22)] = inst_33811__$1);

return statearr_33928;
})();
if(cljs.core.truth_(inst_33812)){
var statearr_33929_35614 = state_33843__$1;
(statearr_33929_35614[(1)] = (39));

} else {
var statearr_33930_35615 = state_33843__$1;
(statearr_33930_35615[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (8))){
var inst_33722 = (state_33843[(13)]);
var inst_33723 = (state_33843[(14)]);
var inst_33725 = (inst_33723 < inst_33722);
var inst_33726 = inst_33725;
var state_33843__$1 = state_33843;
if(cljs.core.truth_(inst_33726)){
var statearr_33933_35618 = state_33843__$1;
(statearr_33933_35618[(1)] = (10));

} else {
var statearr_33934_35619 = state_33843__$1;
(statearr_33934_35619[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__32646__auto__ = null;
var cljs$core$async$mult_$_state_machine__32646__auto____0 = (function (){
var statearr_33935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33935[(0)] = cljs$core$async$mult_$_state_machine__32646__auto__);

(statearr_33935[(1)] = (1));

return statearr_33935;
});
var cljs$core$async$mult_$_state_machine__32646__auto____1 = (function (state_33843){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_33843);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e33936){var ex__32649__auto__ = e33936;
var statearr_33937_35629 = state_33843;
(statearr_33937_35629[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_33843[(4)]))){
var statearr_33938_35630 = state_33843;
(statearr_33938_35630[(1)] = cljs.core.first((state_33843[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35636 = state_33843;
state_33843 = G__35636;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32646__auto__ = function(state_33843){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32646__auto____1.call(this,state_33843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32646__auto____0;
cljs$core$async$mult_$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32646__auto____1;
return cljs$core$async$mult_$_state_machine__32646__auto__;
})()
})();
var state__32942__auto__ = (function (){var statearr_33939 = f__32941__auto__();
(statearr_33939[(6)] = c__32940__auto___35504);

return statearr_33939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32942__auto__);
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
var G__33941 = arguments.length;
switch (G__33941) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35641 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_35641(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35642 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_35642(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35643 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35643(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35644 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_35644(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35651 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35651(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35656 = arguments.length;
var i__5770__auto___35657 = (0);
while(true){
if((i__5770__auto___35657 < len__5769__auto___35656)){
args__5775__auto__.push((arguments[i__5770__auto___35657]));

var G__35658 = (i__5770__auto___35657 + (1));
i__5770__auto___35657 = G__35658;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33969){
var map__33970 = p__33969;
var map__33970__$1 = cljs.core.__destructure_map(map__33970);
var opts = map__33970__$1;
var statearr_33971_35660 = state;
(statearr_33971_35660[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33973_35661 = state;
(statearr_33973_35661[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_33976_35662 = state;
(statearr_33976_35662[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33961){
var G__33962 = cljs.core.first(seq33961);
var seq33961__$1 = cljs.core.next(seq33961);
var G__33963 = cljs.core.first(seq33961__$1);
var seq33961__$2 = cljs.core.next(seq33961__$1);
var G__33964 = cljs.core.first(seq33961__$2);
var seq33961__$3 = cljs.core.next(seq33961__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33962,G__33963,G__33964,seq33961__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33994 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33994 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33995){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33995 = meta33995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33996,meta33995__$1){
var self__ = this;
var _33996__$1 = this;
return (new cljs.core.async.t_cljs$core$async33994(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33995__$1));
}));

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33996){
var self__ = this;
var _33996__$1 = this;
return self__.meta33995;
}));

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33995","meta33995",1362545496,null)], null);
}));

(cljs.core.async.t_cljs$core$async33994.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33994");

(cljs.core.async.t_cljs$core$async33994.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33994");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33994.
 */
cljs.core.async.__GT_t_cljs$core$async33994 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33994(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33995){
return (new cljs.core.async.t_cljs$core$async33994(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33995));
});

}

return (new cljs.core.async.t_cljs$core$async33994(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32940__auto___35694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32941__auto__ = (function (){var switch__32645__auto__ = (function (state_34104){
var state_val_34106 = (state_34104[(1)]);
if((state_val_34106 === (7))){
var inst_34057 = (state_34104[(2)]);
var state_34104__$1 = state_34104;
if(cljs.core.truth_(inst_34057)){
var statearr_34113_35695 = state_34104__$1;
(statearr_34113_35695[(1)] = (8));

} else {
var statearr_34114_35696 = state_34104__$1;
(statearr_34114_35696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (20))){
var inst_34049 = (state_34104[(7)]);
var state_34104__$1 = state_34104;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34104__$1,(23),out,inst_34049);
} else {
if((state_val_34106 === (1))){
var inst_34029 = calc_state();
var inst_34030 = cljs.core.__destructure_map(inst_34029);
var inst_34031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34030,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34030,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34030,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34034 = inst_34029;
var state_34104__$1 = (function (){var statearr_34122 = state_34104;
(statearr_34122[(8)] = inst_34033);

(statearr_34122[(9)] = inst_34032);

(statearr_34122[(10)] = inst_34034);

(statearr_34122[(11)] = inst_34031);

return statearr_34122;
})();
var statearr_34124_35704 = state_34104__$1;
(statearr_34124_35704[(2)] = null);

(statearr_34124_35704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (24))){
var inst_34038 = (state_34104[(12)]);
var inst_34034 = inst_34038;
var state_34104__$1 = (function (){var statearr_34126 = state_34104;
(statearr_34126[(10)] = inst_34034);

return statearr_34126;
})();
var statearr_34127_35705 = state_34104__$1;
(statearr_34127_35705[(2)] = null);

(statearr_34127_35705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (4))){
var inst_34052 = (state_34104[(13)]);
var inst_34049 = (state_34104[(7)]);
var inst_34048 = (state_34104[(2)]);
var inst_34049__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34048,(0),null);
var inst_34050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34048,(1),null);
var inst_34052__$1 = (inst_34049__$1 == null);
var state_34104__$1 = (function (){var statearr_34131 = state_34104;
(statearr_34131[(13)] = inst_34052__$1);

(statearr_34131[(7)] = inst_34049__$1);

(statearr_34131[(14)] = inst_34050);

return statearr_34131;
})();
if(cljs.core.truth_(inst_34052__$1)){
var statearr_34133_35707 = state_34104__$1;
(statearr_34133_35707[(1)] = (5));

} else {
var statearr_34134_35708 = state_34104__$1;
(statearr_34134_35708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (15))){
var inst_34039 = (state_34104[(15)]);
var inst_34074 = (state_34104[(16)]);
var inst_34074__$1 = cljs.core.empty_QMARK_(inst_34039);
var state_34104__$1 = (function (){var statearr_34137 = state_34104;
(statearr_34137[(16)] = inst_34074__$1);

return statearr_34137;
})();
if(inst_34074__$1){
var statearr_34139_35709 = state_34104__$1;
(statearr_34139_35709[(1)] = (17));

} else {
var statearr_34140_35710 = state_34104__$1;
(statearr_34140_35710[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (21))){
var inst_34038 = (state_34104[(12)]);
var inst_34034 = inst_34038;
var state_34104__$1 = (function (){var statearr_34142 = state_34104;
(statearr_34142[(10)] = inst_34034);

return statearr_34142;
})();
var statearr_34143_35711 = state_34104__$1;
(statearr_34143_35711[(2)] = null);

(statearr_34143_35711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (13))){
var inst_34065 = (state_34104[(2)]);
var inst_34066 = calc_state();
var inst_34034 = inst_34066;
var state_34104__$1 = (function (){var statearr_34145 = state_34104;
(statearr_34145[(10)] = inst_34034);

(statearr_34145[(17)] = inst_34065);

return statearr_34145;
})();
var statearr_34146_35713 = state_34104__$1;
(statearr_34146_35713[(2)] = null);

(statearr_34146_35713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (22))){
var inst_34096 = (state_34104[(2)]);
var state_34104__$1 = state_34104;
var statearr_34149_35718 = state_34104__$1;
(statearr_34149_35718[(2)] = inst_34096);

(statearr_34149_35718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (6))){
var inst_34050 = (state_34104[(14)]);
var inst_34055 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34050,change);
var state_34104__$1 = state_34104;
var statearr_34154_35719 = state_34104__$1;
(statearr_34154_35719[(2)] = inst_34055);

(statearr_34154_35719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (25))){
var state_34104__$1 = state_34104;
var statearr_34156_35725 = state_34104__$1;
(statearr_34156_35725[(2)] = null);

(statearr_34156_35725[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (17))){
var inst_34050 = (state_34104[(14)]);
var inst_34040 = (state_34104[(18)]);
var inst_34078 = (inst_34040.cljs$core$IFn$_invoke$arity$1 ? inst_34040.cljs$core$IFn$_invoke$arity$1(inst_34050) : inst_34040.call(null,inst_34050));
var inst_34079 = cljs.core.not(inst_34078);
var state_34104__$1 = state_34104;
var statearr_34157_35726 = state_34104__$1;
(statearr_34157_35726[(2)] = inst_34079);

(statearr_34157_35726[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (3))){
var inst_34100 = (state_34104[(2)]);
var state_34104__$1 = state_34104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34104__$1,inst_34100);
} else {
if((state_val_34106 === (12))){
var state_34104__$1 = state_34104;
var statearr_34161_35727 = state_34104__$1;
(statearr_34161_35727[(2)] = null);

(statearr_34161_35727[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (2))){
var inst_34034 = (state_34104[(10)]);
var inst_34038 = (state_34104[(12)]);
var inst_34038__$1 = cljs.core.__destructure_map(inst_34034);
var inst_34039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34038__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34038__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34038__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34104__$1 = (function (){var statearr_34163 = state_34104;
(statearr_34163[(15)] = inst_34039);

(statearr_34163[(18)] = inst_34040);

(statearr_34163[(12)] = inst_34038__$1);

return statearr_34163;
})();
return cljs.core.async.ioc_alts_BANG_(state_34104__$1,(4),inst_34041);
} else {
if((state_val_34106 === (23))){
var inst_34087 = (state_34104[(2)]);
var state_34104__$1 = state_34104;
if(cljs.core.truth_(inst_34087)){
var statearr_34167_35729 = state_34104__$1;
(statearr_34167_35729[(1)] = (24));

} else {
var statearr_34168_35730 = state_34104__$1;
(statearr_34168_35730[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (19))){
var inst_34082 = (state_34104[(2)]);
var state_34104__$1 = state_34104;
var statearr_34170_35731 = state_34104__$1;
(statearr_34170_35731[(2)] = inst_34082);

(statearr_34170_35731[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (11))){
var inst_34050 = (state_34104[(14)]);
var inst_34062 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34050);
var state_34104__$1 = state_34104;
var statearr_34172_35732 = state_34104__$1;
(statearr_34172_35732[(2)] = inst_34062);

(statearr_34172_35732[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (9))){
var inst_34039 = (state_34104[(15)]);
var inst_34069 = (state_34104[(19)]);
var inst_34050 = (state_34104[(14)]);
var inst_34069__$1 = (inst_34039.cljs$core$IFn$_invoke$arity$1 ? inst_34039.cljs$core$IFn$_invoke$arity$1(inst_34050) : inst_34039.call(null,inst_34050));
var state_34104__$1 = (function (){var statearr_34174 = state_34104;
(statearr_34174[(19)] = inst_34069__$1);

return statearr_34174;
})();
if(cljs.core.truth_(inst_34069__$1)){
var statearr_34175_35734 = state_34104__$1;
(statearr_34175_35734[(1)] = (14));

} else {
var statearr_34176_35735 = state_34104__$1;
(statearr_34176_35735[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (5))){
var inst_34052 = (state_34104[(13)]);
var state_34104__$1 = state_34104;
var statearr_34177_35736 = state_34104__$1;
(statearr_34177_35736[(2)] = inst_34052);

(statearr_34177_35736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (14))){
var inst_34069 = (state_34104[(19)]);
var state_34104__$1 = state_34104;
var statearr_34181_35742 = state_34104__$1;
(statearr_34181_35742[(2)] = inst_34069);

(statearr_34181_35742[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (26))){
var inst_34092 = (state_34104[(2)]);
var state_34104__$1 = state_34104;
var statearr_34182_35743 = state_34104__$1;
(statearr_34182_35743[(2)] = inst_34092);

(statearr_34182_35743[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (16))){
var inst_34084 = (state_34104[(2)]);
var state_34104__$1 = state_34104;
if(cljs.core.truth_(inst_34084)){
var statearr_34184_35744 = state_34104__$1;
(statearr_34184_35744[(1)] = (20));

} else {
var statearr_34185_35745 = state_34104__$1;
(statearr_34185_35745[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (10))){
var inst_34098 = (state_34104[(2)]);
var state_34104__$1 = state_34104;
var statearr_34189_35746 = state_34104__$1;
(statearr_34189_35746[(2)] = inst_34098);

(statearr_34189_35746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (18))){
var inst_34074 = (state_34104[(16)]);
var state_34104__$1 = state_34104;
var statearr_34190_35747 = state_34104__$1;
(statearr_34190_35747[(2)] = inst_34074);

(statearr_34190_35747[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (8))){
var inst_34049 = (state_34104[(7)]);
var inst_34059 = (inst_34049 == null);
var state_34104__$1 = state_34104;
if(cljs.core.truth_(inst_34059)){
var statearr_34192_35748 = state_34104__$1;
(statearr_34192_35748[(1)] = (11));

} else {
var statearr_34193_35749 = state_34104__$1;
(statearr_34193_35749[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__32646__auto__ = null;
var cljs$core$async$mix_$_state_machine__32646__auto____0 = (function (){
var statearr_34197 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34197[(0)] = cljs$core$async$mix_$_state_machine__32646__auto__);

(statearr_34197[(1)] = (1));

return statearr_34197;
});
var cljs$core$async$mix_$_state_machine__32646__auto____1 = (function (state_34104){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_34104);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e34199){var ex__32649__auto__ = e34199;
var statearr_34200_35750 = state_34104;
(statearr_34200_35750[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_34104[(4)]))){
var statearr_34203_35751 = state_34104;
(statearr_34203_35751[(1)] = cljs.core.first((state_34104[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35753 = state_34104;
state_34104 = G__35753;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32646__auto__ = function(state_34104){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32646__auto____1.call(this,state_34104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32646__auto____0;
cljs$core$async$mix_$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32646__auto____1;
return cljs$core$async$mix_$_state_machine__32646__auto__;
})()
})();
var state__32942__auto__ = (function (){var statearr_34206 = f__32941__auto__();
(statearr_34206[(6)] = c__32940__auto___35694);

return statearr_34206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32942__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35758 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35758(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35767 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35767(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35774 = (function() {
var G__35775 = null;
var G__35775__1 = (function (p){
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
var G__35775__2 = (function (p,v){
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
G__35775 = function(p,v){
switch(arguments.length){
case 1:
return G__35775__1.call(this,p);
case 2:
return G__35775__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35775.cljs$core$IFn$_invoke$arity$1 = G__35775__1;
G__35775.cljs$core$IFn$_invoke$arity$2 = G__35775__2;
return G__35775;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34250 = arguments.length;
switch (G__34250) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35774(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35774(p,v);
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
var G__34261 = arguments.length;
switch (G__34261) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34257_SHARP_){
if(cljs.core.truth_((p1__34257_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34257_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34257_SHARP_.call(null,topic)))){
return p1__34257_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34257_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34270 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34270 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34271){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34271 = meta34271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34272,meta34271__$1){
var self__ = this;
var _34272__$1 = this;
return (new cljs.core.async.t_cljs$core$async34270(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34271__$1));
}));

(cljs.core.async.t_cljs$core$async34270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34272){
var self__ = this;
var _34272__$1 = this;
return self__.meta34271;
}));

(cljs.core.async.t_cljs$core$async34270.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34270.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34270.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34270.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34270.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async34270.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34270.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34270.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34271","meta34271",-2010468967,null)], null);
}));

(cljs.core.async.t_cljs$core$async34270.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34270");

(cljs.core.async.t_cljs$core$async34270.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34270");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34270.
 */
cljs.core.async.__GT_t_cljs$core$async34270 = (function cljs$core$async$__GT_t_cljs$core$async34270(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34271){
return (new cljs.core.async.t_cljs$core$async34270(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34271));
});

}

return (new cljs.core.async.t_cljs$core$async34270(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32940__auto___35783 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32941__auto__ = (function (){var switch__32645__auto__ = (function (state_34366){
var state_val_34367 = (state_34366[(1)]);
if((state_val_34367 === (7))){
var inst_34362 = (state_34366[(2)]);
var state_34366__$1 = state_34366;
var statearr_34376_35785 = state_34366__$1;
(statearr_34376_35785[(2)] = inst_34362);

(statearr_34376_35785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (20))){
var state_34366__$1 = state_34366;
var statearr_34377_35786 = state_34366__$1;
(statearr_34377_35786[(2)] = null);

(statearr_34377_35786[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (1))){
var state_34366__$1 = state_34366;
var statearr_34378_35788 = state_34366__$1;
(statearr_34378_35788[(2)] = null);

(statearr_34378_35788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (24))){
var inst_34345 = (state_34366[(7)]);
var inst_34354 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34345);
var state_34366__$1 = state_34366;
var statearr_34382_35789 = state_34366__$1;
(statearr_34382_35789[(2)] = inst_34354);

(statearr_34382_35789[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (4))){
var inst_34296 = (state_34366[(8)]);
var inst_34296__$1 = (state_34366[(2)]);
var inst_34297 = (inst_34296__$1 == null);
var state_34366__$1 = (function (){var statearr_34384 = state_34366;
(statearr_34384[(8)] = inst_34296__$1);

return statearr_34384;
})();
if(cljs.core.truth_(inst_34297)){
var statearr_34385_35790 = state_34366__$1;
(statearr_34385_35790[(1)] = (5));

} else {
var statearr_34386_35791 = state_34366__$1;
(statearr_34386_35791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (15))){
var inst_34339 = (state_34366[(2)]);
var state_34366__$1 = state_34366;
var statearr_34387_35792 = state_34366__$1;
(statearr_34387_35792[(2)] = inst_34339);

(statearr_34387_35792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (21))){
var inst_34359 = (state_34366[(2)]);
var state_34366__$1 = (function (){var statearr_34391 = state_34366;
(statearr_34391[(9)] = inst_34359);

return statearr_34391;
})();
var statearr_34393_35793 = state_34366__$1;
(statearr_34393_35793[(2)] = null);

(statearr_34393_35793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (13))){
var inst_34320 = (state_34366[(10)]);
var inst_34322 = cljs.core.chunked_seq_QMARK_(inst_34320);
var state_34366__$1 = state_34366;
if(inst_34322){
var statearr_34394_35794 = state_34366__$1;
(statearr_34394_35794[(1)] = (16));

} else {
var statearr_34395_35795 = state_34366__$1;
(statearr_34395_35795[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (22))){
var inst_34351 = (state_34366[(2)]);
var state_34366__$1 = state_34366;
if(cljs.core.truth_(inst_34351)){
var statearr_34399_35796 = state_34366__$1;
(statearr_34399_35796[(1)] = (23));

} else {
var statearr_34400_35797 = state_34366__$1;
(statearr_34400_35797[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (6))){
var inst_34345 = (state_34366[(7)]);
var inst_34347 = (state_34366[(11)]);
var inst_34296 = (state_34366[(8)]);
var inst_34345__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34296) : topic_fn.call(null,inst_34296));
var inst_34346 = cljs.core.deref(mults);
var inst_34347__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34346,inst_34345__$1);
var state_34366__$1 = (function (){var statearr_34402 = state_34366;
(statearr_34402[(7)] = inst_34345__$1);

(statearr_34402[(11)] = inst_34347__$1);

return statearr_34402;
})();
if(cljs.core.truth_(inst_34347__$1)){
var statearr_34403_35798 = state_34366__$1;
(statearr_34403_35798[(1)] = (19));

} else {
var statearr_34405_35799 = state_34366__$1;
(statearr_34405_35799[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (25))){
var inst_34356 = (state_34366[(2)]);
var state_34366__$1 = state_34366;
var statearr_34406_35800 = state_34366__$1;
(statearr_34406_35800[(2)] = inst_34356);

(statearr_34406_35800[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (17))){
var inst_34320 = (state_34366[(10)]);
var inst_34330 = cljs.core.first(inst_34320);
var inst_34331 = cljs.core.async.muxch_STAR_(inst_34330);
var inst_34332 = cljs.core.async.close_BANG_(inst_34331);
var inst_34333 = cljs.core.next(inst_34320);
var inst_34306 = inst_34333;
var inst_34307 = null;
var inst_34308 = (0);
var inst_34309 = (0);
var state_34366__$1 = (function (){var statearr_34411 = state_34366;
(statearr_34411[(12)] = inst_34308);

(statearr_34411[(13)] = inst_34306);

(statearr_34411[(14)] = inst_34332);

(statearr_34411[(15)] = inst_34307);

(statearr_34411[(16)] = inst_34309);

return statearr_34411;
})();
var statearr_34415_35801 = state_34366__$1;
(statearr_34415_35801[(2)] = null);

(statearr_34415_35801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (3))){
var inst_34364 = (state_34366[(2)]);
var state_34366__$1 = state_34366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34366__$1,inst_34364);
} else {
if((state_val_34367 === (12))){
var inst_34341 = (state_34366[(2)]);
var state_34366__$1 = state_34366;
var statearr_34417_35802 = state_34366__$1;
(statearr_34417_35802[(2)] = inst_34341);

(statearr_34417_35802[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (2))){
var state_34366__$1 = state_34366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34366__$1,(4),ch);
} else {
if((state_val_34367 === (23))){
var state_34366__$1 = state_34366;
var statearr_34421_35803 = state_34366__$1;
(statearr_34421_35803[(2)] = null);

(statearr_34421_35803[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (19))){
var inst_34347 = (state_34366[(11)]);
var inst_34296 = (state_34366[(8)]);
var inst_34349 = cljs.core.async.muxch_STAR_(inst_34347);
var state_34366__$1 = state_34366;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34366__$1,(22),inst_34349,inst_34296);
} else {
if((state_val_34367 === (11))){
var inst_34306 = (state_34366[(13)]);
var inst_34320 = (state_34366[(10)]);
var inst_34320__$1 = cljs.core.seq(inst_34306);
var state_34366__$1 = (function (){var statearr_34426 = state_34366;
(statearr_34426[(10)] = inst_34320__$1);

return statearr_34426;
})();
if(inst_34320__$1){
var statearr_34427_35805 = state_34366__$1;
(statearr_34427_35805[(1)] = (13));

} else {
var statearr_34429_35806 = state_34366__$1;
(statearr_34429_35806[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (9))){
var inst_34343 = (state_34366[(2)]);
var state_34366__$1 = state_34366;
var statearr_34430_35808 = state_34366__$1;
(statearr_34430_35808[(2)] = inst_34343);

(statearr_34430_35808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (5))){
var inst_34303 = cljs.core.deref(mults);
var inst_34304 = cljs.core.vals(inst_34303);
var inst_34305 = cljs.core.seq(inst_34304);
var inst_34306 = inst_34305;
var inst_34307 = null;
var inst_34308 = (0);
var inst_34309 = (0);
var state_34366__$1 = (function (){var statearr_34431 = state_34366;
(statearr_34431[(12)] = inst_34308);

(statearr_34431[(13)] = inst_34306);

(statearr_34431[(15)] = inst_34307);

(statearr_34431[(16)] = inst_34309);

return statearr_34431;
})();
var statearr_34435_35809 = state_34366__$1;
(statearr_34435_35809[(2)] = null);

(statearr_34435_35809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (14))){
var state_34366__$1 = state_34366;
var statearr_34440_35810 = state_34366__$1;
(statearr_34440_35810[(2)] = null);

(statearr_34440_35810[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (16))){
var inst_34320 = (state_34366[(10)]);
var inst_34324 = cljs.core.chunk_first(inst_34320);
var inst_34326 = cljs.core.chunk_rest(inst_34320);
var inst_34327 = cljs.core.count(inst_34324);
var inst_34306 = inst_34326;
var inst_34307 = inst_34324;
var inst_34308 = inst_34327;
var inst_34309 = (0);
var state_34366__$1 = (function (){var statearr_34441 = state_34366;
(statearr_34441[(12)] = inst_34308);

(statearr_34441[(13)] = inst_34306);

(statearr_34441[(15)] = inst_34307);

(statearr_34441[(16)] = inst_34309);

return statearr_34441;
})();
var statearr_34443_35811 = state_34366__$1;
(statearr_34443_35811[(2)] = null);

(statearr_34443_35811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (10))){
var inst_34308 = (state_34366[(12)]);
var inst_34306 = (state_34366[(13)]);
var inst_34307 = (state_34366[(15)]);
var inst_34309 = (state_34366[(16)]);
var inst_34314 = cljs.core._nth(inst_34307,inst_34309);
var inst_34315 = cljs.core.async.muxch_STAR_(inst_34314);
var inst_34316 = cljs.core.async.close_BANG_(inst_34315);
var inst_34317 = (inst_34309 + (1));
var tmp34437 = inst_34308;
var tmp34438 = inst_34306;
var tmp34439 = inst_34307;
var inst_34306__$1 = tmp34438;
var inst_34307__$1 = tmp34439;
var inst_34308__$1 = tmp34437;
var inst_34309__$1 = inst_34317;
var state_34366__$1 = (function (){var statearr_34444 = state_34366;
(statearr_34444[(12)] = inst_34308__$1);

(statearr_34444[(13)] = inst_34306__$1);

(statearr_34444[(15)] = inst_34307__$1);

(statearr_34444[(17)] = inst_34316);

(statearr_34444[(16)] = inst_34309__$1);

return statearr_34444;
})();
var statearr_34445_35812 = state_34366__$1;
(statearr_34445_35812[(2)] = null);

(statearr_34445_35812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (18))){
var inst_34336 = (state_34366[(2)]);
var state_34366__$1 = state_34366;
var statearr_34450_35813 = state_34366__$1;
(statearr_34450_35813[(2)] = inst_34336);

(statearr_34450_35813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34367 === (8))){
var inst_34308 = (state_34366[(12)]);
var inst_34309 = (state_34366[(16)]);
var inst_34311 = (inst_34309 < inst_34308);
var inst_34312 = inst_34311;
var state_34366__$1 = state_34366;
if(cljs.core.truth_(inst_34312)){
var statearr_34454_35814 = state_34366__$1;
(statearr_34454_35814[(1)] = (10));

} else {
var statearr_34455_35815 = state_34366__$1;
(statearr_34455_35815[(1)] = (11));

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
var cljs$core$async$state_machine__32646__auto__ = null;
var cljs$core$async$state_machine__32646__auto____0 = (function (){
var statearr_34457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34457[(0)] = cljs$core$async$state_machine__32646__auto__);

(statearr_34457[(1)] = (1));

return statearr_34457;
});
var cljs$core$async$state_machine__32646__auto____1 = (function (state_34366){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_34366);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e34458){var ex__32649__auto__ = e34458;
var statearr_34462_35816 = state_34366;
(statearr_34462_35816[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_34366[(4)]))){
var statearr_34463_35817 = state_34366;
(statearr_34463_35817[(1)] = cljs.core.first((state_34366[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35818 = state_34366;
state_34366 = G__35818;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$state_machine__32646__auto__ = function(state_34366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32646__auto____1.call(this,state_34366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32646__auto____0;
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32646__auto____1;
return cljs$core$async$state_machine__32646__auto__;
})()
})();
var state__32942__auto__ = (function (){var statearr_34465 = f__32941__auto__();
(statearr_34465[(6)] = c__32940__auto___35783);

return statearr_34465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32942__auto__);
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
var G__34471 = arguments.length;
switch (G__34471) {
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
var G__34477 = arguments.length;
switch (G__34477) {
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
var G__34484 = arguments.length;
switch (G__34484) {
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
var c__32940__auto___35824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32941__auto__ = (function (){var switch__32645__auto__ = (function (state_34529){
var state_val_34530 = (state_34529[(1)]);
if((state_val_34530 === (7))){
var state_34529__$1 = state_34529;
var statearr_34531_35829 = state_34529__$1;
(statearr_34531_35829[(2)] = null);

(statearr_34531_35829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (1))){
var state_34529__$1 = state_34529;
var statearr_34532_35830 = state_34529__$1;
(statearr_34532_35830[(2)] = null);

(statearr_34532_35830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (4))){
var inst_34490 = (state_34529[(7)]);
var inst_34489 = (state_34529[(8)]);
var inst_34492 = (inst_34490 < inst_34489);
var state_34529__$1 = state_34529;
if(cljs.core.truth_(inst_34492)){
var statearr_34533_35831 = state_34529__$1;
(statearr_34533_35831[(1)] = (6));

} else {
var statearr_34534_35832 = state_34529__$1;
(statearr_34534_35832[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (15))){
var inst_34515 = (state_34529[(9)]);
var inst_34520 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34515);
var state_34529__$1 = state_34529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34529__$1,(17),out,inst_34520);
} else {
if((state_val_34530 === (13))){
var inst_34515 = (state_34529[(9)]);
var inst_34515__$1 = (state_34529[(2)]);
var inst_34516 = cljs.core.some(cljs.core.nil_QMARK_,inst_34515__$1);
var state_34529__$1 = (function (){var statearr_34535 = state_34529;
(statearr_34535[(9)] = inst_34515__$1);

return statearr_34535;
})();
if(cljs.core.truth_(inst_34516)){
var statearr_34536_35833 = state_34529__$1;
(statearr_34536_35833[(1)] = (14));

} else {
var statearr_34537_35837 = state_34529__$1;
(statearr_34537_35837[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (6))){
var state_34529__$1 = state_34529;
var statearr_34538_35838 = state_34529__$1;
(statearr_34538_35838[(2)] = null);

(statearr_34538_35838[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (17))){
var inst_34522 = (state_34529[(2)]);
var state_34529__$1 = (function (){var statearr_34540 = state_34529;
(statearr_34540[(10)] = inst_34522);

return statearr_34540;
})();
var statearr_34541_35839 = state_34529__$1;
(statearr_34541_35839[(2)] = null);

(statearr_34541_35839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (3))){
var inst_34527 = (state_34529[(2)]);
var state_34529__$1 = state_34529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34529__$1,inst_34527);
} else {
if((state_val_34530 === (12))){
var _ = (function (){var statearr_34542 = state_34529;
(statearr_34542[(4)] = cljs.core.rest((state_34529[(4)])));

return statearr_34542;
})();
var state_34529__$1 = state_34529;
var ex34539 = (state_34529__$1[(2)]);
var statearr_34543_35840 = state_34529__$1;
(statearr_34543_35840[(5)] = ex34539);


if((ex34539 instanceof Object)){
var statearr_34544_35841 = state_34529__$1;
(statearr_34544_35841[(1)] = (11));

(statearr_34544_35841[(5)] = null);

} else {
throw ex34539;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (2))){
var inst_34487 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34489 = cnt;
var inst_34490 = (0);
var state_34529__$1 = (function (){var statearr_34547 = state_34529;
(statearr_34547[(7)] = inst_34490);

(statearr_34547[(8)] = inst_34489);

(statearr_34547[(11)] = inst_34487);

return statearr_34547;
})();
var statearr_34548_35842 = state_34529__$1;
(statearr_34548_35842[(2)] = null);

(statearr_34548_35842[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (11))){
var inst_34494 = (state_34529[(2)]);
var inst_34495 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34529__$1 = (function (){var statearr_34549 = state_34529;
(statearr_34549[(12)] = inst_34494);

return statearr_34549;
})();
var statearr_34550_35843 = state_34529__$1;
(statearr_34550_35843[(2)] = inst_34495);

(statearr_34550_35843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (9))){
var inst_34490 = (state_34529[(7)]);
var _ = (function (){var statearr_34551 = state_34529;
(statearr_34551[(4)] = cljs.core.cons((12),(state_34529[(4)])));

return statearr_34551;
})();
var inst_34501 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34490) : chs__$1.call(null,inst_34490));
var inst_34502 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34490) : done.call(null,inst_34490));
var inst_34503 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34501,inst_34502);
var ___$1 = (function (){var statearr_34552 = state_34529;
(statearr_34552[(4)] = cljs.core.rest((state_34529[(4)])));

return statearr_34552;
})();
var state_34529__$1 = state_34529;
var statearr_34553_35851 = state_34529__$1;
(statearr_34553_35851[(2)] = inst_34503);

(statearr_34553_35851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (5))){
var inst_34513 = (state_34529[(2)]);
var state_34529__$1 = (function (){var statearr_34554 = state_34529;
(statearr_34554[(13)] = inst_34513);

return statearr_34554;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34529__$1,(13),dchan);
} else {
if((state_val_34530 === (14))){
var inst_34518 = cljs.core.async.close_BANG_(out);
var state_34529__$1 = state_34529;
var statearr_34555_35855 = state_34529__$1;
(statearr_34555_35855[(2)] = inst_34518);

(statearr_34555_35855[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (16))){
var inst_34525 = (state_34529[(2)]);
var state_34529__$1 = state_34529;
var statearr_34557_35856 = state_34529__$1;
(statearr_34557_35856[(2)] = inst_34525);

(statearr_34557_35856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (10))){
var inst_34490 = (state_34529[(7)]);
var inst_34506 = (state_34529[(2)]);
var inst_34507 = (inst_34490 + (1));
var inst_34490__$1 = inst_34507;
var state_34529__$1 = (function (){var statearr_34558 = state_34529;
(statearr_34558[(14)] = inst_34506);

(statearr_34558[(7)] = inst_34490__$1);

return statearr_34558;
})();
var statearr_34560_35860 = state_34529__$1;
(statearr_34560_35860[(2)] = null);

(statearr_34560_35860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (8))){
var inst_34511 = (state_34529[(2)]);
var state_34529__$1 = state_34529;
var statearr_34561_35864 = state_34529__$1;
(statearr_34561_35864[(2)] = inst_34511);

(statearr_34561_35864[(1)] = (5));


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
var cljs$core$async$state_machine__32646__auto__ = null;
var cljs$core$async$state_machine__32646__auto____0 = (function (){
var statearr_34562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34562[(0)] = cljs$core$async$state_machine__32646__auto__);

(statearr_34562[(1)] = (1));

return statearr_34562;
});
var cljs$core$async$state_machine__32646__auto____1 = (function (state_34529){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_34529);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e34563){var ex__32649__auto__ = e34563;
var statearr_34564_35865 = state_34529;
(statearr_34564_35865[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_34529[(4)]))){
var statearr_34565_35866 = state_34529;
(statearr_34565_35866[(1)] = cljs.core.first((state_34529[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35870 = state_34529;
state_34529 = G__35870;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$state_machine__32646__auto__ = function(state_34529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32646__auto____1.call(this,state_34529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32646__auto____0;
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32646__auto____1;
return cljs$core$async$state_machine__32646__auto__;
})()
})();
var state__32942__auto__ = (function (){var statearr_34566 = f__32941__auto__();
(statearr_34566[(6)] = c__32940__auto___35824);

return statearr_34566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32942__auto__);
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
var G__34570 = arguments.length;
switch (G__34570) {
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
var c__32940__auto___35876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32941__auto__ = (function (){var switch__32645__auto__ = (function (state_34603){
var state_val_34604 = (state_34603[(1)]);
if((state_val_34604 === (7))){
var inst_34583 = (state_34603[(7)]);
var inst_34582 = (state_34603[(8)]);
var inst_34582__$1 = (state_34603[(2)]);
var inst_34583__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34582__$1,(0),null);
var inst_34584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34582__$1,(1),null);
var inst_34585 = (inst_34583__$1 == null);
var state_34603__$1 = (function (){var statearr_34605 = state_34603;
(statearr_34605[(9)] = inst_34584);

(statearr_34605[(7)] = inst_34583__$1);

(statearr_34605[(8)] = inst_34582__$1);

return statearr_34605;
})();
if(cljs.core.truth_(inst_34585)){
var statearr_34606_35877 = state_34603__$1;
(statearr_34606_35877[(1)] = (8));

} else {
var statearr_34607_35878 = state_34603__$1;
(statearr_34607_35878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (1))){
var inst_34572 = cljs.core.vec(chs);
var inst_34573 = inst_34572;
var state_34603__$1 = (function (){var statearr_34608 = state_34603;
(statearr_34608[(10)] = inst_34573);

return statearr_34608;
})();
var statearr_34609_35880 = state_34603__$1;
(statearr_34609_35880[(2)] = null);

(statearr_34609_35880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (4))){
var inst_34573 = (state_34603[(10)]);
var state_34603__$1 = state_34603;
return cljs.core.async.ioc_alts_BANG_(state_34603__$1,(7),inst_34573);
} else {
if((state_val_34604 === (6))){
var inst_34599 = (state_34603[(2)]);
var state_34603__$1 = state_34603;
var statearr_34610_35881 = state_34603__$1;
(statearr_34610_35881[(2)] = inst_34599);

(statearr_34610_35881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (3))){
var inst_34601 = (state_34603[(2)]);
var state_34603__$1 = state_34603;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34603__$1,inst_34601);
} else {
if((state_val_34604 === (2))){
var inst_34573 = (state_34603[(10)]);
var inst_34575 = cljs.core.count(inst_34573);
var inst_34576 = (inst_34575 > (0));
var state_34603__$1 = state_34603;
if(cljs.core.truth_(inst_34576)){
var statearr_34612_35882 = state_34603__$1;
(statearr_34612_35882[(1)] = (4));

} else {
var statearr_34614_35883 = state_34603__$1;
(statearr_34614_35883[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (11))){
var inst_34573 = (state_34603[(10)]);
var inst_34592 = (state_34603[(2)]);
var tmp34611 = inst_34573;
var inst_34573__$1 = tmp34611;
var state_34603__$1 = (function (){var statearr_34616 = state_34603;
(statearr_34616[(10)] = inst_34573__$1);

(statearr_34616[(11)] = inst_34592);

return statearr_34616;
})();
var statearr_34617_35884 = state_34603__$1;
(statearr_34617_35884[(2)] = null);

(statearr_34617_35884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (9))){
var inst_34583 = (state_34603[(7)]);
var state_34603__$1 = state_34603;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34603__$1,(11),out,inst_34583);
} else {
if((state_val_34604 === (5))){
var inst_34597 = cljs.core.async.close_BANG_(out);
var state_34603__$1 = state_34603;
var statearr_34618_35885 = state_34603__$1;
(statearr_34618_35885[(2)] = inst_34597);

(statearr_34618_35885[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (10))){
var inst_34595 = (state_34603[(2)]);
var state_34603__$1 = state_34603;
var statearr_34619_35886 = state_34603__$1;
(statearr_34619_35886[(2)] = inst_34595);

(statearr_34619_35886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34604 === (8))){
var inst_34584 = (state_34603[(9)]);
var inst_34583 = (state_34603[(7)]);
var inst_34582 = (state_34603[(8)]);
var inst_34573 = (state_34603[(10)]);
var inst_34587 = (function (){var cs = inst_34573;
var vec__34578 = inst_34582;
var v = inst_34583;
var c = inst_34584;
return (function (p1__34567_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34567_SHARP_);
});
})();
var inst_34588 = cljs.core.filterv(inst_34587,inst_34573);
var inst_34573__$1 = inst_34588;
var state_34603__$1 = (function (){var statearr_34624 = state_34603;
(statearr_34624[(10)] = inst_34573__$1);

return statearr_34624;
})();
var statearr_34625_35893 = state_34603__$1;
(statearr_34625_35893[(2)] = null);

(statearr_34625_35893[(1)] = (2));


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
var cljs$core$async$state_machine__32646__auto__ = null;
var cljs$core$async$state_machine__32646__auto____0 = (function (){
var statearr_34626 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34626[(0)] = cljs$core$async$state_machine__32646__auto__);

(statearr_34626[(1)] = (1));

return statearr_34626;
});
var cljs$core$async$state_machine__32646__auto____1 = (function (state_34603){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_34603);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e34627){var ex__32649__auto__ = e34627;
var statearr_34628_35894 = state_34603;
(statearr_34628_35894[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_34603[(4)]))){
var statearr_34629_35899 = state_34603;
(statearr_34629_35899[(1)] = cljs.core.first((state_34603[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35900 = state_34603;
state_34603 = G__35900;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$state_machine__32646__auto__ = function(state_34603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32646__auto____1.call(this,state_34603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32646__auto____0;
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32646__auto____1;
return cljs$core$async$state_machine__32646__auto__;
})()
})();
var state__32942__auto__ = (function (){var statearr_34631 = f__32941__auto__();
(statearr_34631[(6)] = c__32940__auto___35876);

return statearr_34631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32942__auto__);
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
var G__34637 = arguments.length;
switch (G__34637) {
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
var c__32940__auto___35902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32941__auto__ = (function (){var switch__32645__auto__ = (function (state_34664){
var state_val_34665 = (state_34664[(1)]);
if((state_val_34665 === (7))){
var inst_34646 = (state_34664[(7)]);
var inst_34646__$1 = (state_34664[(2)]);
var inst_34647 = (inst_34646__$1 == null);
var inst_34648 = cljs.core.not(inst_34647);
var state_34664__$1 = (function (){var statearr_34666 = state_34664;
(statearr_34666[(7)] = inst_34646__$1);

return statearr_34666;
})();
if(inst_34648){
var statearr_34667_35903 = state_34664__$1;
(statearr_34667_35903[(1)] = (8));

} else {
var statearr_34668_35904 = state_34664__$1;
(statearr_34668_35904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (1))){
var inst_34641 = (0);
var state_34664__$1 = (function (){var statearr_34682 = state_34664;
(statearr_34682[(8)] = inst_34641);

return statearr_34682;
})();
var statearr_34683_35905 = state_34664__$1;
(statearr_34683_35905[(2)] = null);

(statearr_34683_35905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (4))){
var state_34664__$1 = state_34664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34664__$1,(7),ch);
} else {
if((state_val_34665 === (6))){
var inst_34659 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34690_35906 = state_34664__$1;
(statearr_34690_35906[(2)] = inst_34659);

(statearr_34690_35906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (3))){
var inst_34661 = (state_34664[(2)]);
var inst_34662 = cljs.core.async.close_BANG_(out);
var state_34664__$1 = (function (){var statearr_34691 = state_34664;
(statearr_34691[(9)] = inst_34661);

return statearr_34691;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34664__$1,inst_34662);
} else {
if((state_val_34665 === (2))){
var inst_34641 = (state_34664[(8)]);
var inst_34643 = (inst_34641 < n);
var state_34664__$1 = state_34664;
if(cljs.core.truth_(inst_34643)){
var statearr_34692_35907 = state_34664__$1;
(statearr_34692_35907[(1)] = (4));

} else {
var statearr_34697_35908 = state_34664__$1;
(statearr_34697_35908[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (11))){
var inst_34641 = (state_34664[(8)]);
var inst_34651 = (state_34664[(2)]);
var inst_34652 = (inst_34641 + (1));
var inst_34641__$1 = inst_34652;
var state_34664__$1 = (function (){var statearr_34701 = state_34664;
(statearr_34701[(10)] = inst_34651);

(statearr_34701[(8)] = inst_34641__$1);

return statearr_34701;
})();
var statearr_34705_35909 = state_34664__$1;
(statearr_34705_35909[(2)] = null);

(statearr_34705_35909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (9))){
var state_34664__$1 = state_34664;
var statearr_34706_35910 = state_34664__$1;
(statearr_34706_35910[(2)] = null);

(statearr_34706_35910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (5))){
var state_34664__$1 = state_34664;
var statearr_34707_35911 = state_34664__$1;
(statearr_34707_35911[(2)] = null);

(statearr_34707_35911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (10))){
var inst_34656 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34711_35912 = state_34664__$1;
(statearr_34711_35912[(2)] = inst_34656);

(statearr_34711_35912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (8))){
var inst_34646 = (state_34664[(7)]);
var state_34664__$1 = state_34664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34664__$1,(11),out,inst_34646);
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
var cljs$core$async$state_machine__32646__auto__ = null;
var cljs$core$async$state_machine__32646__auto____0 = (function (){
var statearr_34712 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34712[(0)] = cljs$core$async$state_machine__32646__auto__);

(statearr_34712[(1)] = (1));

return statearr_34712;
});
var cljs$core$async$state_machine__32646__auto____1 = (function (state_34664){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_34664);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e34713){var ex__32649__auto__ = e34713;
var statearr_34714_35917 = state_34664;
(statearr_34714_35917[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_34664[(4)]))){
var statearr_34715_35918 = state_34664;
(statearr_34715_35918[(1)] = cljs.core.first((state_34664[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35919 = state_34664;
state_34664 = G__35919;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$state_machine__32646__auto__ = function(state_34664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32646__auto____1.call(this,state_34664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32646__auto____0;
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32646__auto____1;
return cljs$core$async$state_machine__32646__auto__;
})()
})();
var state__32942__auto__ = (function (){var statearr_34716 = f__32941__auto__();
(statearr_34716[(6)] = c__32940__auto___35902);

return statearr_34716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32942__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34722 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34722 = (function (f,ch,meta34723){
this.f = f;
this.ch = ch;
this.meta34723 = meta34723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34724,meta34723__$1){
var self__ = this;
var _34724__$1 = this;
return (new cljs.core.async.t_cljs$core$async34722(self__.f,self__.ch,meta34723__$1));
}));

(cljs.core.async.t_cljs$core$async34722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34724){
var self__ = this;
var _34724__$1 = this;
return self__.meta34723;
}));

(cljs.core.async.t_cljs$core$async34722.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34722.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34722.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34722.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34722.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34725 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34725 = (function (f,ch,meta34723,_,fn1,meta34726){
this.f = f;
this.ch = ch;
this.meta34723 = meta34723;
this._ = _;
this.fn1 = fn1;
this.meta34726 = meta34726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34727,meta34726__$1){
var self__ = this;
var _34727__$1 = this;
return (new cljs.core.async.t_cljs$core$async34725(self__.f,self__.ch,self__.meta34723,self__._,self__.fn1,meta34726__$1));
}));

(cljs.core.async.t_cljs$core$async34725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34727){
var self__ = this;
var _34727__$1 = this;
return self__.meta34726;
}));

(cljs.core.async.t_cljs$core$async34725.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34725.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34725.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34725.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34717_SHARP_){
var G__34729 = (((p1__34717_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34717_SHARP_) : self__.f.call(null,p1__34717_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34729) : f1.call(null,G__34729));
});
}));

(cljs.core.async.t_cljs$core$async34725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34723","meta34723",2025984340,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34722","cljs.core.async/t_cljs$core$async34722",-1128561769,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34726","meta34726",1267955562,null)], null);
}));

(cljs.core.async.t_cljs$core$async34725.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34725");

(cljs.core.async.t_cljs$core$async34725.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34725");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34725.
 */
cljs.core.async.__GT_t_cljs$core$async34725 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34725(f__$1,ch__$1,meta34723__$1,___$2,fn1__$1,meta34726){
return (new cljs.core.async.t_cljs$core$async34725(f__$1,ch__$1,meta34723__$1,___$2,fn1__$1,meta34726));
});

}

return (new cljs.core.async.t_cljs$core$async34725(self__.f,self__.ch,self__.meta34723,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34736 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34736) : self__.f.call(null,G__34736));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34722.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34722.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34723","meta34723",2025984340,null)], null);
}));

(cljs.core.async.t_cljs$core$async34722.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34722");

(cljs.core.async.t_cljs$core$async34722.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34722");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34722.
 */
cljs.core.async.__GT_t_cljs$core$async34722 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34722(f__$1,ch__$1,meta34723){
return (new cljs.core.async.t_cljs$core$async34722(f__$1,ch__$1,meta34723));
});

}

return (new cljs.core.async.t_cljs$core$async34722(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34738 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34738 = (function (f,ch,meta34739){
this.f = f;
this.ch = ch;
this.meta34739 = meta34739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34740,meta34739__$1){
var self__ = this;
var _34740__$1 = this;
return (new cljs.core.async.t_cljs$core$async34738(self__.f,self__.ch,meta34739__$1));
}));

(cljs.core.async.t_cljs$core$async34738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34740){
var self__ = this;
var _34740__$1 = this;
return self__.meta34739;
}));

(cljs.core.async.t_cljs$core$async34738.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34738.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34738.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34738.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34738.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34738.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34739","meta34739",-1644857348,null)], null);
}));

(cljs.core.async.t_cljs$core$async34738.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34738");

(cljs.core.async.t_cljs$core$async34738.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34738");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34738.
 */
cljs.core.async.__GT_t_cljs$core$async34738 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34738(f__$1,ch__$1,meta34739){
return (new cljs.core.async.t_cljs$core$async34738(f__$1,ch__$1,meta34739));
});

}

return (new cljs.core.async.t_cljs$core$async34738(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34748 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34748 = (function (p,ch,meta34749){
this.p = p;
this.ch = ch;
this.meta34749 = meta34749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34750,meta34749__$1){
var self__ = this;
var _34750__$1 = this;
return (new cljs.core.async.t_cljs$core$async34748(self__.p,self__.ch,meta34749__$1));
}));

(cljs.core.async.t_cljs$core$async34748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34750){
var self__ = this;
var _34750__$1 = this;
return self__.meta34749;
}));

(cljs.core.async.t_cljs$core$async34748.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34748.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34748.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34748.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34748.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34748.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34748.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34749","meta34749",940204340,null)], null);
}));

(cljs.core.async.t_cljs$core$async34748.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34748");

(cljs.core.async.t_cljs$core$async34748.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34748");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34748.
 */
cljs.core.async.__GT_t_cljs$core$async34748 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34748(p__$1,ch__$1,meta34749){
return (new cljs.core.async.t_cljs$core$async34748(p__$1,ch__$1,meta34749));
});

}

return (new cljs.core.async.t_cljs$core$async34748(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34753 = arguments.length;
switch (G__34753) {
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
var c__32940__auto___35933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32941__auto__ = (function (){var switch__32645__auto__ = (function (state_34780){
var state_val_34781 = (state_34780[(1)]);
if((state_val_34781 === (7))){
var inst_34776 = (state_34780[(2)]);
var state_34780__$1 = state_34780;
var statearr_34782_35934 = state_34780__$1;
(statearr_34782_35934[(2)] = inst_34776);

(statearr_34782_35934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (1))){
var state_34780__$1 = state_34780;
var statearr_34784_35935 = state_34780__$1;
(statearr_34784_35935[(2)] = null);

(statearr_34784_35935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (4))){
var inst_34761 = (state_34780[(7)]);
var inst_34761__$1 = (state_34780[(2)]);
var inst_34762 = (inst_34761__$1 == null);
var state_34780__$1 = (function (){var statearr_34786 = state_34780;
(statearr_34786[(7)] = inst_34761__$1);

return statearr_34786;
})();
if(cljs.core.truth_(inst_34762)){
var statearr_34790_35936 = state_34780__$1;
(statearr_34790_35936[(1)] = (5));

} else {
var statearr_34791_35937 = state_34780__$1;
(statearr_34791_35937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (6))){
var inst_34761 = (state_34780[(7)]);
var inst_34767 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34761) : p.call(null,inst_34761));
var state_34780__$1 = state_34780;
if(cljs.core.truth_(inst_34767)){
var statearr_34792_35938 = state_34780__$1;
(statearr_34792_35938[(1)] = (8));

} else {
var statearr_34793_35939 = state_34780__$1;
(statearr_34793_35939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (3))){
var inst_34778 = (state_34780[(2)]);
var state_34780__$1 = state_34780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34780__$1,inst_34778);
} else {
if((state_val_34781 === (2))){
var state_34780__$1 = state_34780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34780__$1,(4),ch);
} else {
if((state_val_34781 === (11))){
var inst_34770 = (state_34780[(2)]);
var state_34780__$1 = state_34780;
var statearr_34794_35941 = state_34780__$1;
(statearr_34794_35941[(2)] = inst_34770);

(statearr_34794_35941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (9))){
var state_34780__$1 = state_34780;
var statearr_34795_35945 = state_34780__$1;
(statearr_34795_35945[(2)] = null);

(statearr_34795_35945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (5))){
var inst_34765 = cljs.core.async.close_BANG_(out);
var state_34780__$1 = state_34780;
var statearr_34796_35946 = state_34780__$1;
(statearr_34796_35946[(2)] = inst_34765);

(statearr_34796_35946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (10))){
var inst_34773 = (state_34780[(2)]);
var state_34780__$1 = (function (){var statearr_34797 = state_34780;
(statearr_34797[(8)] = inst_34773);

return statearr_34797;
})();
var statearr_34798_35947 = state_34780__$1;
(statearr_34798_35947[(2)] = null);

(statearr_34798_35947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (8))){
var inst_34761 = (state_34780[(7)]);
var state_34780__$1 = state_34780;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34780__$1,(11),out,inst_34761);
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
var cljs$core$async$state_machine__32646__auto__ = null;
var cljs$core$async$state_machine__32646__auto____0 = (function (){
var statearr_34799 = [null,null,null,null,null,null,null,null,null];
(statearr_34799[(0)] = cljs$core$async$state_machine__32646__auto__);

(statearr_34799[(1)] = (1));

return statearr_34799;
});
var cljs$core$async$state_machine__32646__auto____1 = (function (state_34780){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_34780);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e34801){var ex__32649__auto__ = e34801;
var statearr_34805_35951 = state_34780;
(statearr_34805_35951[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_34780[(4)]))){
var statearr_34806_35952 = state_34780;
(statearr_34806_35952[(1)] = cljs.core.first((state_34780[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35953 = state_34780;
state_34780 = G__35953;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$state_machine__32646__auto__ = function(state_34780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32646__auto____1.call(this,state_34780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32646__auto____0;
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32646__auto____1;
return cljs$core$async$state_machine__32646__auto__;
})()
})();
var state__32942__auto__ = (function (){var statearr_34807 = f__32941__auto__();
(statearr_34807[(6)] = c__32940__auto___35933);

return statearr_34807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32942__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34813 = arguments.length;
switch (G__34813) {
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
var c__32940__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32941__auto__ = (function (){var switch__32645__auto__ = (function (state_34877){
var state_val_34878 = (state_34877[(1)]);
if((state_val_34878 === (7))){
var inst_34873 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34879_35956 = state_34877__$1;
(statearr_34879_35956[(2)] = inst_34873);

(statearr_34879_35956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (20))){
var inst_34841 = (state_34877[(7)]);
var inst_34853 = (state_34877[(2)]);
var inst_34854 = cljs.core.next(inst_34841);
var inst_34827 = inst_34854;
var inst_34828 = null;
var inst_34829 = (0);
var inst_34830 = (0);
var state_34877__$1 = (function (){var statearr_34883 = state_34877;
(statearr_34883[(8)] = inst_34829);

(statearr_34883[(9)] = inst_34830);

(statearr_34883[(10)] = inst_34828);

(statearr_34883[(11)] = inst_34853);

(statearr_34883[(12)] = inst_34827);

return statearr_34883;
})();
var statearr_34884_35957 = state_34877__$1;
(statearr_34884_35957[(2)] = null);

(statearr_34884_35957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (1))){
var state_34877__$1 = state_34877;
var statearr_34885_35961 = state_34877__$1;
(statearr_34885_35961[(2)] = null);

(statearr_34885_35961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (4))){
var inst_34816 = (state_34877[(13)]);
var inst_34816__$1 = (state_34877[(2)]);
var inst_34817 = (inst_34816__$1 == null);
var state_34877__$1 = (function (){var statearr_34886 = state_34877;
(statearr_34886[(13)] = inst_34816__$1);

return statearr_34886;
})();
if(cljs.core.truth_(inst_34817)){
var statearr_34887_35962 = state_34877__$1;
(statearr_34887_35962[(1)] = (5));

} else {
var statearr_34888_35963 = state_34877__$1;
(statearr_34888_35963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (15))){
var state_34877__$1 = state_34877;
var statearr_34892_35964 = state_34877__$1;
(statearr_34892_35964[(2)] = null);

(statearr_34892_35964[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (21))){
var state_34877__$1 = state_34877;
var statearr_34893_35965 = state_34877__$1;
(statearr_34893_35965[(2)] = null);

(statearr_34893_35965[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (13))){
var inst_34829 = (state_34877[(8)]);
var inst_34830 = (state_34877[(9)]);
var inst_34828 = (state_34877[(10)]);
var inst_34827 = (state_34877[(12)]);
var inst_34837 = (state_34877[(2)]);
var inst_34838 = (inst_34830 + (1));
var tmp34889 = inst_34829;
var tmp34890 = inst_34828;
var tmp34891 = inst_34827;
var inst_34827__$1 = tmp34891;
var inst_34828__$1 = tmp34890;
var inst_34829__$1 = tmp34889;
var inst_34830__$1 = inst_34838;
var state_34877__$1 = (function (){var statearr_34894 = state_34877;
(statearr_34894[(8)] = inst_34829__$1);

(statearr_34894[(9)] = inst_34830__$1);

(statearr_34894[(14)] = inst_34837);

(statearr_34894[(10)] = inst_34828__$1);

(statearr_34894[(12)] = inst_34827__$1);

return statearr_34894;
})();
var statearr_34895_35966 = state_34877__$1;
(statearr_34895_35966[(2)] = null);

(statearr_34895_35966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (22))){
var state_34877__$1 = state_34877;
var statearr_34896_35967 = state_34877__$1;
(statearr_34896_35967[(2)] = null);

(statearr_34896_35967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (6))){
var inst_34816 = (state_34877[(13)]);
var inst_34825 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34816) : f.call(null,inst_34816));
var inst_34826 = cljs.core.seq(inst_34825);
var inst_34827 = inst_34826;
var inst_34828 = null;
var inst_34829 = (0);
var inst_34830 = (0);
var state_34877__$1 = (function (){var statearr_34897 = state_34877;
(statearr_34897[(8)] = inst_34829);

(statearr_34897[(9)] = inst_34830);

(statearr_34897[(10)] = inst_34828);

(statearr_34897[(12)] = inst_34827);

return statearr_34897;
})();
var statearr_34898_35968 = state_34877__$1;
(statearr_34898_35968[(2)] = null);

(statearr_34898_35968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (17))){
var inst_34841 = (state_34877[(7)]);
var inst_34845 = cljs.core.chunk_first(inst_34841);
var inst_34846 = cljs.core.chunk_rest(inst_34841);
var inst_34847 = cljs.core.count(inst_34845);
var inst_34827 = inst_34846;
var inst_34828 = inst_34845;
var inst_34829 = inst_34847;
var inst_34830 = (0);
var state_34877__$1 = (function (){var statearr_34899 = state_34877;
(statearr_34899[(8)] = inst_34829);

(statearr_34899[(9)] = inst_34830);

(statearr_34899[(10)] = inst_34828);

(statearr_34899[(12)] = inst_34827);

return statearr_34899;
})();
var statearr_34900_35970 = state_34877__$1;
(statearr_34900_35970[(2)] = null);

(statearr_34900_35970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (3))){
var inst_34875 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34877__$1,inst_34875);
} else {
if((state_val_34878 === (12))){
var inst_34862 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34901_35971 = state_34877__$1;
(statearr_34901_35971[(2)] = inst_34862);

(statearr_34901_35971[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (2))){
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34877__$1,(4),in$);
} else {
if((state_val_34878 === (23))){
var inst_34871 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34902_35972 = state_34877__$1;
(statearr_34902_35972[(2)] = inst_34871);

(statearr_34902_35972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (19))){
var inst_34857 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34903_35973 = state_34877__$1;
(statearr_34903_35973[(2)] = inst_34857);

(statearr_34903_35973[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (11))){
var inst_34827 = (state_34877[(12)]);
var inst_34841 = (state_34877[(7)]);
var inst_34841__$1 = cljs.core.seq(inst_34827);
var state_34877__$1 = (function (){var statearr_34904 = state_34877;
(statearr_34904[(7)] = inst_34841__$1);

return statearr_34904;
})();
if(inst_34841__$1){
var statearr_34905_35974 = state_34877__$1;
(statearr_34905_35974[(1)] = (14));

} else {
var statearr_34906_35975 = state_34877__$1;
(statearr_34906_35975[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (9))){
var inst_34864 = (state_34877[(2)]);
var inst_34866 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34877__$1 = (function (){var statearr_34907 = state_34877;
(statearr_34907[(15)] = inst_34864);

return statearr_34907;
})();
if(cljs.core.truth_(inst_34866)){
var statearr_34908_35976 = state_34877__$1;
(statearr_34908_35976[(1)] = (21));

} else {
var statearr_34909_35977 = state_34877__$1;
(statearr_34909_35977[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (5))){
var inst_34819 = cljs.core.async.close_BANG_(out);
var state_34877__$1 = state_34877;
var statearr_34910_35978 = state_34877__$1;
(statearr_34910_35978[(2)] = inst_34819);

(statearr_34910_35978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (14))){
var inst_34841 = (state_34877[(7)]);
var inst_34843 = cljs.core.chunked_seq_QMARK_(inst_34841);
var state_34877__$1 = state_34877;
if(inst_34843){
var statearr_34911_35979 = state_34877__$1;
(statearr_34911_35979[(1)] = (17));

} else {
var statearr_34912_35980 = state_34877__$1;
(statearr_34912_35980[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (16))){
var inst_34860 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34913_35982 = state_34877__$1;
(statearr_34913_35982[(2)] = inst_34860);

(statearr_34913_35982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (10))){
var inst_34830 = (state_34877[(9)]);
var inst_34828 = (state_34877[(10)]);
var inst_34835 = cljs.core._nth(inst_34828,inst_34830);
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34877__$1,(13),out,inst_34835);
} else {
if((state_val_34878 === (18))){
var inst_34841 = (state_34877[(7)]);
var inst_34851 = cljs.core.first(inst_34841);
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34877__$1,(20),out,inst_34851);
} else {
if((state_val_34878 === (8))){
var inst_34829 = (state_34877[(8)]);
var inst_34830 = (state_34877[(9)]);
var inst_34832 = (inst_34830 < inst_34829);
var inst_34833 = inst_34832;
var state_34877__$1 = state_34877;
if(cljs.core.truth_(inst_34833)){
var statearr_34914_35983 = state_34877__$1;
(statearr_34914_35983[(1)] = (10));

} else {
var statearr_34915_35984 = state_34877__$1;
(statearr_34915_35984[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__32646__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32646__auto____0 = (function (){
var statearr_34916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34916[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32646__auto__);

(statearr_34916[(1)] = (1));

return statearr_34916;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32646__auto____1 = (function (state_34877){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_34877);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e34917){var ex__32649__auto__ = e34917;
var statearr_34918_35985 = state_34877;
(statearr_34918_35985[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_34877[(4)]))){
var statearr_34919_35986 = state_34877;
(statearr_34919_35986[(1)] = cljs.core.first((state_34877[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35987 = state_34877;
state_34877 = G__35987;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32646__auto__ = function(state_34877){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32646__auto____1.call(this,state_34877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32646__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32646__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32646__auto__;
})()
})();
var state__32942__auto__ = (function (){var statearr_34920 = f__32941__auto__();
(statearr_34920[(6)] = c__32940__auto__);

return statearr_34920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32942__auto__);
}));

return c__32940__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34923 = arguments.length;
switch (G__34923) {
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
var G__34925 = arguments.length;
switch (G__34925) {
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
var G__34930 = arguments.length;
switch (G__34930) {
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
var c__32940__auto___35998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32941__auto__ = (function (){var switch__32645__auto__ = (function (state_34958){
var state_val_34959 = (state_34958[(1)]);
if((state_val_34959 === (7))){
var inst_34953 = (state_34958[(2)]);
var state_34958__$1 = state_34958;
var statearr_34960_35999 = state_34958__$1;
(statearr_34960_35999[(2)] = inst_34953);

(statearr_34960_35999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34959 === (1))){
var inst_34935 = null;
var state_34958__$1 = (function (){var statearr_34961 = state_34958;
(statearr_34961[(7)] = inst_34935);

return statearr_34961;
})();
var statearr_34962_36001 = state_34958__$1;
(statearr_34962_36001[(2)] = null);

(statearr_34962_36001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34959 === (4))){
var inst_34938 = (state_34958[(8)]);
var inst_34938__$1 = (state_34958[(2)]);
var inst_34939 = (inst_34938__$1 == null);
var inst_34940 = cljs.core.not(inst_34939);
var state_34958__$1 = (function (){var statearr_34963 = state_34958;
(statearr_34963[(8)] = inst_34938__$1);

return statearr_34963;
})();
if(inst_34940){
var statearr_34964_36002 = state_34958__$1;
(statearr_34964_36002[(1)] = (5));

} else {
var statearr_34965_36003 = state_34958__$1;
(statearr_34965_36003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34959 === (6))){
var state_34958__$1 = state_34958;
var statearr_34966_36004 = state_34958__$1;
(statearr_34966_36004[(2)] = null);

(statearr_34966_36004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34959 === (3))){
var inst_34955 = (state_34958[(2)]);
var inst_34956 = cljs.core.async.close_BANG_(out);
var state_34958__$1 = (function (){var statearr_34967 = state_34958;
(statearr_34967[(9)] = inst_34955);

return statearr_34967;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34958__$1,inst_34956);
} else {
if((state_val_34959 === (2))){
var state_34958__$1 = state_34958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34958__$1,(4),ch);
} else {
if((state_val_34959 === (11))){
var inst_34938 = (state_34958[(8)]);
var inst_34947 = (state_34958[(2)]);
var inst_34935 = inst_34938;
var state_34958__$1 = (function (){var statearr_34968 = state_34958;
(statearr_34968[(10)] = inst_34947);

(statearr_34968[(7)] = inst_34935);

return statearr_34968;
})();
var statearr_34969_36005 = state_34958__$1;
(statearr_34969_36005[(2)] = null);

(statearr_34969_36005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34959 === (9))){
var inst_34938 = (state_34958[(8)]);
var state_34958__$1 = state_34958;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34958__$1,(11),out,inst_34938);
} else {
if((state_val_34959 === (5))){
var inst_34935 = (state_34958[(7)]);
var inst_34938 = (state_34958[(8)]);
var inst_34942 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34938,inst_34935);
var state_34958__$1 = state_34958;
if(inst_34942){
var statearr_34971_36007 = state_34958__$1;
(statearr_34971_36007[(1)] = (8));

} else {
var statearr_34972_36008 = state_34958__$1;
(statearr_34972_36008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34959 === (10))){
var inst_34950 = (state_34958[(2)]);
var state_34958__$1 = state_34958;
var statearr_34981_36009 = state_34958__$1;
(statearr_34981_36009[(2)] = inst_34950);

(statearr_34981_36009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34959 === (8))){
var inst_34935 = (state_34958[(7)]);
var tmp34970 = inst_34935;
var inst_34935__$1 = tmp34970;
var state_34958__$1 = (function (){var statearr_34988 = state_34958;
(statearr_34988[(7)] = inst_34935__$1);

return statearr_34988;
})();
var statearr_34989_36010 = state_34958__$1;
(statearr_34989_36010[(2)] = null);

(statearr_34989_36010[(1)] = (2));


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
var cljs$core$async$state_machine__32646__auto__ = null;
var cljs$core$async$state_machine__32646__auto____0 = (function (){
var statearr_34996 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34996[(0)] = cljs$core$async$state_machine__32646__auto__);

(statearr_34996[(1)] = (1));

return statearr_34996;
});
var cljs$core$async$state_machine__32646__auto____1 = (function (state_34958){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_34958);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e34997){var ex__32649__auto__ = e34997;
var statearr_34998_36011 = state_34958;
(statearr_34998_36011[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_34958[(4)]))){
var statearr_34999_36012 = state_34958;
(statearr_34999_36012[(1)] = cljs.core.first((state_34958[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36017 = state_34958;
state_34958 = G__36017;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$state_machine__32646__auto__ = function(state_34958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32646__auto____1.call(this,state_34958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32646__auto____0;
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32646__auto____1;
return cljs$core$async$state_machine__32646__auto__;
})()
})();
var state__32942__auto__ = (function (){var statearr_35000 = f__32941__auto__();
(statearr_35000[(6)] = c__32940__auto___35998);

return statearr_35000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32942__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35022 = arguments.length;
switch (G__35022) {
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
var c__32940__auto___36019 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32941__auto__ = (function (){var switch__32645__auto__ = (function (state_35063){
var state_val_35064 = (state_35063[(1)]);
if((state_val_35064 === (7))){
var inst_35059 = (state_35063[(2)]);
var state_35063__$1 = state_35063;
var statearr_35065_36020 = state_35063__$1;
(statearr_35065_36020[(2)] = inst_35059);

(statearr_35065_36020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35064 === (1))){
var inst_35025 = (new Array(n));
var inst_35026 = inst_35025;
var inst_35027 = (0);
var state_35063__$1 = (function (){var statearr_35066 = state_35063;
(statearr_35066[(7)] = inst_35026);

(statearr_35066[(8)] = inst_35027);

return statearr_35066;
})();
var statearr_35070_36021 = state_35063__$1;
(statearr_35070_36021[(2)] = null);

(statearr_35070_36021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35064 === (4))){
var inst_35030 = (state_35063[(9)]);
var inst_35030__$1 = (state_35063[(2)]);
var inst_35031 = (inst_35030__$1 == null);
var inst_35032 = cljs.core.not(inst_35031);
var state_35063__$1 = (function (){var statearr_35071 = state_35063;
(statearr_35071[(9)] = inst_35030__$1);

return statearr_35071;
})();
if(inst_35032){
var statearr_35072_36022 = state_35063__$1;
(statearr_35072_36022[(1)] = (5));

} else {
var statearr_35073_36023 = state_35063__$1;
(statearr_35073_36023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35064 === (15))){
var inst_35053 = (state_35063[(2)]);
var state_35063__$1 = state_35063;
var statearr_35074_36024 = state_35063__$1;
(statearr_35074_36024[(2)] = inst_35053);

(statearr_35074_36024[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35064 === (13))){
var state_35063__$1 = state_35063;
var statearr_35075_36025 = state_35063__$1;
(statearr_35075_36025[(2)] = null);

(statearr_35075_36025[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35064 === (6))){
var inst_35027 = (state_35063[(8)]);
var inst_35049 = (inst_35027 > (0));
var state_35063__$1 = state_35063;
if(cljs.core.truth_(inst_35049)){
var statearr_35076_36026 = state_35063__$1;
(statearr_35076_36026[(1)] = (12));

} else {
var statearr_35077_36027 = state_35063__$1;
(statearr_35077_36027[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35064 === (3))){
var inst_35061 = (state_35063[(2)]);
var state_35063__$1 = state_35063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35063__$1,inst_35061);
} else {
if((state_val_35064 === (12))){
var inst_35026 = (state_35063[(7)]);
var inst_35051 = cljs.core.vec(inst_35026);
var state_35063__$1 = state_35063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35063__$1,(15),out,inst_35051);
} else {
if((state_val_35064 === (2))){
var state_35063__$1 = state_35063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35063__$1,(4),ch);
} else {
if((state_val_35064 === (11))){
var inst_35043 = (state_35063[(2)]);
var inst_35044 = (new Array(n));
var inst_35026 = inst_35044;
var inst_35027 = (0);
var state_35063__$1 = (function (){var statearr_35078 = state_35063;
(statearr_35078[(7)] = inst_35026);

(statearr_35078[(8)] = inst_35027);

(statearr_35078[(10)] = inst_35043);

return statearr_35078;
})();
var statearr_35079_36028 = state_35063__$1;
(statearr_35079_36028[(2)] = null);

(statearr_35079_36028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35064 === (9))){
var inst_35026 = (state_35063[(7)]);
var inst_35040 = cljs.core.vec(inst_35026);
var state_35063__$1 = state_35063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35063__$1,(11),out,inst_35040);
} else {
if((state_val_35064 === (5))){
var inst_35026 = (state_35063[(7)]);
var inst_35027 = (state_35063[(8)]);
var inst_35035 = (state_35063[(11)]);
var inst_35030 = (state_35063[(9)]);
var inst_35034 = (inst_35026[inst_35027] = inst_35030);
var inst_35035__$1 = (inst_35027 + (1));
var inst_35036 = (inst_35035__$1 < n);
var state_35063__$1 = (function (){var statearr_35080 = state_35063;
(statearr_35080[(11)] = inst_35035__$1);

(statearr_35080[(12)] = inst_35034);

return statearr_35080;
})();
if(cljs.core.truth_(inst_35036)){
var statearr_35081_36029 = state_35063__$1;
(statearr_35081_36029[(1)] = (8));

} else {
var statearr_35082_36030 = state_35063__$1;
(statearr_35082_36030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35064 === (14))){
var inst_35056 = (state_35063[(2)]);
var inst_35057 = cljs.core.async.close_BANG_(out);
var state_35063__$1 = (function (){var statearr_35084 = state_35063;
(statearr_35084[(13)] = inst_35056);

return statearr_35084;
})();
var statearr_35085_36031 = state_35063__$1;
(statearr_35085_36031[(2)] = inst_35057);

(statearr_35085_36031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35064 === (10))){
var inst_35047 = (state_35063[(2)]);
var state_35063__$1 = state_35063;
var statearr_35086_36032 = state_35063__$1;
(statearr_35086_36032[(2)] = inst_35047);

(statearr_35086_36032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35064 === (8))){
var inst_35026 = (state_35063[(7)]);
var inst_35035 = (state_35063[(11)]);
var tmp35083 = inst_35026;
var inst_35026__$1 = tmp35083;
var inst_35027 = inst_35035;
var state_35063__$1 = (function (){var statearr_35087 = state_35063;
(statearr_35087[(7)] = inst_35026__$1);

(statearr_35087[(8)] = inst_35027);

return statearr_35087;
})();
var statearr_35088_36033 = state_35063__$1;
(statearr_35088_36033[(2)] = null);

(statearr_35088_36033[(1)] = (2));


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
var cljs$core$async$state_machine__32646__auto__ = null;
var cljs$core$async$state_machine__32646__auto____0 = (function (){
var statearr_35089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35089[(0)] = cljs$core$async$state_machine__32646__auto__);

(statearr_35089[(1)] = (1));

return statearr_35089;
});
var cljs$core$async$state_machine__32646__auto____1 = (function (state_35063){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_35063);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e35090){var ex__32649__auto__ = e35090;
var statearr_35091_36034 = state_35063;
(statearr_35091_36034[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_35063[(4)]))){
var statearr_35092_36035 = state_35063;
(statearr_35092_36035[(1)] = cljs.core.first((state_35063[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36036 = state_35063;
state_35063 = G__36036;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$state_machine__32646__auto__ = function(state_35063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32646__auto____1.call(this,state_35063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32646__auto____0;
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32646__auto____1;
return cljs$core$async$state_machine__32646__auto__;
})()
})();
var state__32942__auto__ = (function (){var statearr_35093 = f__32941__auto__();
(statearr_35093[(6)] = c__32940__auto___36019);

return statearr_35093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32942__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35095 = arguments.length;
switch (G__35095) {
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
var c__32940__auto___36040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32941__auto__ = (function (){var switch__32645__auto__ = (function (state_35140){
var state_val_35141 = (state_35140[(1)]);
if((state_val_35141 === (7))){
var inst_35136 = (state_35140[(2)]);
var state_35140__$1 = state_35140;
var statearr_35142_36041 = state_35140__$1;
(statearr_35142_36041[(2)] = inst_35136);

(statearr_35142_36041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35141 === (1))){
var inst_35096 = [];
var inst_35097 = inst_35096;
var inst_35098 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35140__$1 = (function (){var statearr_35143 = state_35140;
(statearr_35143[(7)] = inst_35097);

(statearr_35143[(8)] = inst_35098);

return statearr_35143;
})();
var statearr_35144_36043 = state_35140__$1;
(statearr_35144_36043[(2)] = null);

(statearr_35144_36043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35141 === (4))){
var inst_35101 = (state_35140[(9)]);
var inst_35101__$1 = (state_35140[(2)]);
var inst_35102 = (inst_35101__$1 == null);
var inst_35103 = cljs.core.not(inst_35102);
var state_35140__$1 = (function (){var statearr_35145 = state_35140;
(statearr_35145[(9)] = inst_35101__$1);

return statearr_35145;
})();
if(inst_35103){
var statearr_35146_36044 = state_35140__$1;
(statearr_35146_36044[(1)] = (5));

} else {
var statearr_35149_36045 = state_35140__$1;
(statearr_35149_36045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35141 === (15))){
var inst_35097 = (state_35140[(7)]);
var inst_35128 = cljs.core.vec(inst_35097);
var state_35140__$1 = state_35140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35140__$1,(18),out,inst_35128);
} else {
if((state_val_35141 === (13))){
var inst_35123 = (state_35140[(2)]);
var state_35140__$1 = state_35140;
var statearr_35156_36047 = state_35140__$1;
(statearr_35156_36047[(2)] = inst_35123);

(statearr_35156_36047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35141 === (6))){
var inst_35097 = (state_35140[(7)]);
var inst_35125 = inst_35097.length;
var inst_35126 = (inst_35125 > (0));
var state_35140__$1 = state_35140;
if(cljs.core.truth_(inst_35126)){
var statearr_35157_36048 = state_35140__$1;
(statearr_35157_36048[(1)] = (15));

} else {
var statearr_35161_36049 = state_35140__$1;
(statearr_35161_36049[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35141 === (17))){
var inst_35133 = (state_35140[(2)]);
var inst_35134 = cljs.core.async.close_BANG_(out);
var state_35140__$1 = (function (){var statearr_35162 = state_35140;
(statearr_35162[(10)] = inst_35133);

return statearr_35162;
})();
var statearr_35163_36050 = state_35140__$1;
(statearr_35163_36050[(2)] = inst_35134);

(statearr_35163_36050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35141 === (3))){
var inst_35138 = (state_35140[(2)]);
var state_35140__$1 = state_35140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35140__$1,inst_35138);
} else {
if((state_val_35141 === (12))){
var inst_35097 = (state_35140[(7)]);
var inst_35116 = cljs.core.vec(inst_35097);
var state_35140__$1 = state_35140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35140__$1,(14),out,inst_35116);
} else {
if((state_val_35141 === (2))){
var state_35140__$1 = state_35140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35140__$1,(4),ch);
} else {
if((state_val_35141 === (11))){
var inst_35097 = (state_35140[(7)]);
var inst_35101 = (state_35140[(9)]);
var inst_35105 = (state_35140[(11)]);
var inst_35113 = inst_35097.push(inst_35101);
var tmp35164 = inst_35097;
var inst_35097__$1 = tmp35164;
var inst_35098 = inst_35105;
var state_35140__$1 = (function (){var statearr_35165 = state_35140;
(statearr_35165[(12)] = inst_35113);

(statearr_35165[(7)] = inst_35097__$1);

(statearr_35165[(8)] = inst_35098);

return statearr_35165;
})();
var statearr_35166_36054 = state_35140__$1;
(statearr_35166_36054[(2)] = null);

(statearr_35166_36054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35141 === (9))){
var inst_35098 = (state_35140[(8)]);
var inst_35109 = cljs.core.keyword_identical_QMARK_(inst_35098,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35140__$1 = state_35140;
var statearr_35167_36055 = state_35140__$1;
(statearr_35167_36055[(2)] = inst_35109);

(statearr_35167_36055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35141 === (5))){
var inst_35098 = (state_35140[(8)]);
var inst_35106 = (state_35140[(13)]);
var inst_35101 = (state_35140[(9)]);
var inst_35105 = (state_35140[(11)]);
var inst_35105__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35101) : f.call(null,inst_35101));
var inst_35106__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35105__$1,inst_35098);
var state_35140__$1 = (function (){var statearr_35168 = state_35140;
(statearr_35168[(13)] = inst_35106__$1);

(statearr_35168[(11)] = inst_35105__$1);

return statearr_35168;
})();
if(inst_35106__$1){
var statearr_35169_36056 = state_35140__$1;
(statearr_35169_36056[(1)] = (8));

} else {
var statearr_35170_36057 = state_35140__$1;
(statearr_35170_36057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35141 === (14))){
var inst_35101 = (state_35140[(9)]);
var inst_35105 = (state_35140[(11)]);
var inst_35118 = (state_35140[(2)]);
var inst_35119 = [];
var inst_35120 = inst_35119.push(inst_35101);
var inst_35097 = inst_35119;
var inst_35098 = inst_35105;
var state_35140__$1 = (function (){var statearr_35171 = state_35140;
(statearr_35171[(14)] = inst_35120);

(statearr_35171[(7)] = inst_35097);

(statearr_35171[(8)] = inst_35098);

(statearr_35171[(15)] = inst_35118);

return statearr_35171;
})();
var statearr_35172_36058 = state_35140__$1;
(statearr_35172_36058[(2)] = null);

(statearr_35172_36058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35141 === (16))){
var state_35140__$1 = state_35140;
var statearr_35173_36059 = state_35140__$1;
(statearr_35173_36059[(2)] = null);

(statearr_35173_36059[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35141 === (10))){
var inst_35111 = (state_35140[(2)]);
var state_35140__$1 = state_35140;
if(cljs.core.truth_(inst_35111)){
var statearr_35174_36060 = state_35140__$1;
(statearr_35174_36060[(1)] = (11));

} else {
var statearr_35175_36061 = state_35140__$1;
(statearr_35175_36061[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35141 === (18))){
var inst_35130 = (state_35140[(2)]);
var state_35140__$1 = state_35140;
var statearr_35176_36062 = state_35140__$1;
(statearr_35176_36062[(2)] = inst_35130);

(statearr_35176_36062[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35141 === (8))){
var inst_35106 = (state_35140[(13)]);
var state_35140__$1 = state_35140;
var statearr_35177_36063 = state_35140__$1;
(statearr_35177_36063[(2)] = inst_35106);

(statearr_35177_36063[(1)] = (10));


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
var cljs$core$async$state_machine__32646__auto__ = null;
var cljs$core$async$state_machine__32646__auto____0 = (function (){
var statearr_35178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35178[(0)] = cljs$core$async$state_machine__32646__auto__);

(statearr_35178[(1)] = (1));

return statearr_35178;
});
var cljs$core$async$state_machine__32646__auto____1 = (function (state_35140){
while(true){
var ret_value__32647__auto__ = (function (){try{while(true){
var result__32648__auto__ = switch__32645__auto__(state_35140);
if(cljs.core.keyword_identical_QMARK_(result__32648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32648__auto__;
}
break;
}
}catch (e35179){var ex__32649__auto__ = e35179;
var statearr_35180_36064 = state_35140;
(statearr_35180_36064[(2)] = ex__32649__auto__);


if(cljs.core.seq((state_35140[(4)]))){
var statearr_35181_36065 = state_35140;
(statearr_35181_36065[(1)] = cljs.core.first((state_35140[(4)])));

} else {
throw ex__32649__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36066 = state_35140;
state_35140 = G__36066;
continue;
} else {
return ret_value__32647__auto__;
}
break;
}
});
cljs$core$async$state_machine__32646__auto__ = function(state_35140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32646__auto____1.call(this,state_35140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32646__auto____0;
cljs$core$async$state_machine__32646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32646__auto____1;
return cljs$core$async$state_machine__32646__auto__;
})()
})();
var state__32942__auto__ = (function (){var statearr_35182 = f__32941__auto__();
(statearr_35182[(6)] = c__32940__auto___36040);

return statearr_35182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32942__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
