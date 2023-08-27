goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34933 = arguments.length;
switch (G__34933) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34934 = (function (f,blockable,meta34935){
this.f = f;
this.blockable = blockable;
this.meta34935 = meta34935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34936,meta34935__$1){
var self__ = this;
var _34936__$1 = this;
return (new cljs.core.async.t_cljs$core$async34934(self__.f,self__.blockable,meta34935__$1));
}));

(cljs.core.async.t_cljs$core$async34934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34936){
var self__ = this;
var _34936__$1 = this;
return self__.meta34935;
}));

(cljs.core.async.t_cljs$core$async34934.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34934.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34935","meta34935",1387864313,null)], null);
}));

(cljs.core.async.t_cljs$core$async34934.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34934");

(cljs.core.async.t_cljs$core$async34934.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34934");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34934.
 */
cljs.core.async.__GT_t_cljs$core$async34934 = (function cljs$core$async$__GT_t_cljs$core$async34934(f__$1,blockable__$1,meta34935){
return (new cljs.core.async.t_cljs$core$async34934(f__$1,blockable__$1,meta34935));
});

}

return (new cljs.core.async.t_cljs$core$async34934(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34943 = arguments.length;
switch (G__34943) {
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
var G__34957 = arguments.length;
switch (G__34957) {
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
var G__34963 = arguments.length;
switch (G__34963) {
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
var val_37234 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37234) : fn1.call(null,val_37234));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37234) : fn1.call(null,val_37234));
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
var G__34966 = arguments.length;
switch (G__34966) {
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
var n__5636__auto___37245 = n;
var x_37246 = (0);
while(true){
if((x_37246 < n__5636__auto___37245)){
(a[x_37246] = x_37246);

var G__37247 = (x_37246 + (1));
x_37246 = G__37247;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34971 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34971 = (function (flag,meta34972){
this.flag = flag;
this.meta34972 = meta34972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34973,meta34972__$1){
var self__ = this;
var _34973__$1 = this;
return (new cljs.core.async.t_cljs$core$async34971(self__.flag,meta34972__$1));
}));

(cljs.core.async.t_cljs$core$async34971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34973){
var self__ = this;
var _34973__$1 = this;
return self__.meta34972;
}));

(cljs.core.async.t_cljs$core$async34971.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34971.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34971.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34971.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34971.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34972","meta34972",-1002216405,null)], null);
}));

(cljs.core.async.t_cljs$core$async34971.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34971");

(cljs.core.async.t_cljs$core$async34971.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34971");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34971.
 */
cljs.core.async.__GT_t_cljs$core$async34971 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34971(flag__$1,meta34972){
return (new cljs.core.async.t_cljs$core$async34971(flag__$1,meta34972));
});

}

return (new cljs.core.async.t_cljs$core$async34971(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34978 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34978 = (function (flag,cb,meta34979){
this.flag = flag;
this.cb = cb;
this.meta34979 = meta34979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34980,meta34979__$1){
var self__ = this;
var _34980__$1 = this;
return (new cljs.core.async.t_cljs$core$async34978(self__.flag,self__.cb,meta34979__$1));
}));

(cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34980){
var self__ = this;
var _34980__$1 = this;
return self__.meta34979;
}));

(cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34979","meta34979",109464284,null)], null);
}));

(cljs.core.async.t_cljs$core$async34978.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34978");

(cljs.core.async.t_cljs$core$async34978.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34978");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34978.
 */
cljs.core.async.__GT_t_cljs$core$async34978 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34978(flag__$1,cb__$1,meta34979){
return (new cljs.core.async.t_cljs$core$async34978(flag__$1,cb__$1,meta34979));
});

}

return (new cljs.core.async.t_cljs$core$async34978(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34982_SHARP_){
var G__34984 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34982_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34984) : fret.call(null,G__34984));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34983_SHARP_){
var G__34985 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34983_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34985) : fret.call(null,G__34985));
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
var G__37262 = (i + (1));
i = G__37262;
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
var len__5769__auto___37270 = arguments.length;
var i__5770__auto___37271 = (0);
while(true){
if((i__5770__auto___37271 < len__5769__auto___37270)){
args__5775__auto__.push((arguments[i__5770__auto___37271]));

var G__37272 = (i__5770__auto___37271 + (1));
i__5770__auto___37271 = G__37272;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34988){
var map__34989 = p__34988;
var map__34989__$1 = cljs.core.__destructure_map(map__34989);
var opts = map__34989__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34986){
var G__34987 = cljs.core.first(seq34986);
var seq34986__$1 = cljs.core.next(seq34986);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34987,seq34986__$1);
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
var G__35008 = arguments.length;
switch (G__35008) {
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
var c__34853__auto___37275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34854__auto__ = (function (){var switch__34654__auto__ = (function (state_35069){
var state_val_35073 = (state_35069[(1)]);
if((state_val_35073 === (7))){
var inst_35063 = (state_35069[(2)]);
var state_35069__$1 = state_35069;
var statearr_35078_37276 = state_35069__$1;
(statearr_35078_37276[(2)] = inst_35063);

(statearr_35078_37276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35073 === (1))){
var state_35069__$1 = state_35069;
var statearr_35079_37280 = state_35069__$1;
(statearr_35079_37280[(2)] = null);

(statearr_35079_37280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35073 === (4))){
var inst_35037 = (state_35069[(7)]);
var inst_35037__$1 = (state_35069[(2)]);
var inst_35047 = (inst_35037__$1 == null);
var state_35069__$1 = (function (){var statearr_35082 = state_35069;
(statearr_35082[(7)] = inst_35037__$1);

return statearr_35082;
})();
if(cljs.core.truth_(inst_35047)){
var statearr_35085_37282 = state_35069__$1;
(statearr_35085_37282[(1)] = (5));

} else {
var statearr_35086_37283 = state_35069__$1;
(statearr_35086_37283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35073 === (13))){
var state_35069__$1 = state_35069;
var statearr_35093_37284 = state_35069__$1;
(statearr_35093_37284[(2)] = null);

(statearr_35093_37284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35073 === (6))){
var inst_35037 = (state_35069[(7)]);
var state_35069__$1 = state_35069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35069__$1,(11),to,inst_35037);
} else {
if((state_val_35073 === (3))){
var inst_35065 = (state_35069[(2)]);
var state_35069__$1 = state_35069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35069__$1,inst_35065);
} else {
if((state_val_35073 === (12))){
var state_35069__$1 = state_35069;
var statearr_35095_37285 = state_35069__$1;
(statearr_35095_37285[(2)] = null);

(statearr_35095_37285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35073 === (2))){
var state_35069__$1 = state_35069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35069__$1,(4),from);
} else {
if((state_val_35073 === (11))){
var inst_35056 = (state_35069[(2)]);
var state_35069__$1 = state_35069;
if(cljs.core.truth_(inst_35056)){
var statearr_35097_37286 = state_35069__$1;
(statearr_35097_37286[(1)] = (12));

} else {
var statearr_35099_37287 = state_35069__$1;
(statearr_35099_37287[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35073 === (9))){
var state_35069__$1 = state_35069;
var statearr_35101_37288 = state_35069__$1;
(statearr_35101_37288[(2)] = null);

(statearr_35101_37288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35073 === (5))){
var state_35069__$1 = state_35069;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35102_37289 = state_35069__$1;
(statearr_35102_37289[(1)] = (8));

} else {
var statearr_35103_37290 = state_35069__$1;
(statearr_35103_37290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35073 === (14))){
var inst_35061 = (state_35069[(2)]);
var state_35069__$1 = state_35069;
var statearr_35104_37291 = state_35069__$1;
(statearr_35104_37291[(2)] = inst_35061);

(statearr_35104_37291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35073 === (10))){
var inst_35053 = (state_35069[(2)]);
var state_35069__$1 = state_35069;
var statearr_35107_37292 = state_35069__$1;
(statearr_35107_37292[(2)] = inst_35053);

(statearr_35107_37292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35073 === (8))){
var inst_35050 = cljs.core.async.close_BANG_(to);
var state_35069__$1 = state_35069;
var statearr_35108_37293 = state_35069__$1;
(statearr_35108_37293[(2)] = inst_35050);

(statearr_35108_37293[(1)] = (10));


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
var cljs$core$async$state_machine__34655__auto__ = null;
var cljs$core$async$state_machine__34655__auto____0 = (function (){
var statearr_35110 = [null,null,null,null,null,null,null,null];
(statearr_35110[(0)] = cljs$core$async$state_machine__34655__auto__);

(statearr_35110[(1)] = (1));

return statearr_35110;
});
var cljs$core$async$state_machine__34655__auto____1 = (function (state_35069){
while(true){
var ret_value__34656__auto__ = (function (){try{while(true){
var result__34657__auto__ = switch__34654__auto__(state_35069);
if(cljs.core.keyword_identical_QMARK_(result__34657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34657__auto__;
}
break;
}
}catch (e35111){var ex__34658__auto__ = e35111;
var statearr_35112_37294 = state_35069;
(statearr_35112_37294[(2)] = ex__34658__auto__);


if(cljs.core.seq((state_35069[(4)]))){
var statearr_35115_37295 = state_35069;
(statearr_35115_37295[(1)] = cljs.core.first((state_35069[(4)])));

} else {
throw ex__34658__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37296 = state_35069;
state_35069 = G__37296;
continue;
} else {
return ret_value__34656__auto__;
}
break;
}
});
cljs$core$async$state_machine__34655__auto__ = function(state_35069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34655__auto____1.call(this,state_35069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34655__auto____0;
cljs$core$async$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34655__auto____1;
return cljs$core$async$state_machine__34655__auto__;
})()
})();
var state__34855__auto__ = (function (){var statearr_35118 = f__34854__auto__();
(statearr_35118[(6)] = c__34853__auto___37275);

return statearr_35118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34855__auto__);
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
var process__$1 = (function (p__35128){
var vec__35129 = p__35128;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35129,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35129,(1),null);
var job = vec__35129;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34853__auto___37299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34854__auto__ = (function (){var switch__34654__auto__ = (function (state_35136){
var state_val_35137 = (state_35136[(1)]);
if((state_val_35137 === (1))){
var state_35136__$1 = state_35136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35136__$1,(2),res,v);
} else {
if((state_val_35137 === (2))){
var inst_35133 = (state_35136[(2)]);
var inst_35134 = cljs.core.async.close_BANG_(res);
var state_35136__$1 = (function (){var statearr_35140 = state_35136;
(statearr_35140[(7)] = inst_35133);

return statearr_35140;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35136__$1,inst_35134);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____0 = (function (){
var statearr_35142 = [null,null,null,null,null,null,null,null];
(statearr_35142[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__);

(statearr_35142[(1)] = (1));

return statearr_35142;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____1 = (function (state_35136){
while(true){
var ret_value__34656__auto__ = (function (){try{while(true){
var result__34657__auto__ = switch__34654__auto__(state_35136);
if(cljs.core.keyword_identical_QMARK_(result__34657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34657__auto__;
}
break;
}
}catch (e35144){var ex__34658__auto__ = e35144;
var statearr_35145_37308 = state_35136;
(statearr_35145_37308[(2)] = ex__34658__auto__);


if(cljs.core.seq((state_35136[(4)]))){
var statearr_35146_37309 = state_35136;
(statearr_35146_37309[(1)] = cljs.core.first((state_35136[(4)])));

} else {
throw ex__34658__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37312 = state_35136;
state_35136 = G__37312;
continue;
} else {
return ret_value__34656__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__ = function(state_35136){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____1.call(this,state_35136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__;
})()
})();
var state__34855__auto__ = (function (){var statearr_35150 = f__34854__auto__();
(statearr_35150[(6)] = c__34853__auto___37299);

return statearr_35150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34855__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__35165){
var vec__35168 = p__35165;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35168,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35168,(1),null);
var job = vec__35168;
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
var n__5636__auto___37313 = n;
var __37314 = (0);
while(true){
if((__37314 < n__5636__auto___37313)){
var G__35177_37315 = type;
var G__35177_37316__$1 = (((G__35177_37315 instanceof cljs.core.Keyword))?G__35177_37315.fqn:null);
switch (G__35177_37316__$1) {
case "compute":
var c__34853__auto___37318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37314,c__34853__auto___37318,G__35177_37315,G__35177_37316__$1,n__5636__auto___37313,jobs,results,process__$1,async){
return (function (){
var f__34854__auto__ = (function (){var switch__34654__auto__ = ((function (__37314,c__34853__auto___37318,G__35177_37315,G__35177_37316__$1,n__5636__auto___37313,jobs,results,process__$1,async){
return (function (state_35194){
var state_val_35195 = (state_35194[(1)]);
if((state_val_35195 === (1))){
var state_35194__$1 = state_35194;
var statearr_35210_37319 = state_35194__$1;
(statearr_35210_37319[(2)] = null);

(statearr_35210_37319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35195 === (2))){
var state_35194__$1 = state_35194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35194__$1,(4),jobs);
} else {
if((state_val_35195 === (3))){
var inst_35191 = (state_35194[(2)]);
var state_35194__$1 = state_35194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35194__$1,inst_35191);
} else {
if((state_val_35195 === (4))){
var inst_35182 = (state_35194[(2)]);
var inst_35183 = process__$1(inst_35182);
var state_35194__$1 = state_35194;
if(cljs.core.truth_(inst_35183)){
var statearr_35220_37323 = state_35194__$1;
(statearr_35220_37323[(1)] = (5));

} else {
var statearr_35221_37324 = state_35194__$1;
(statearr_35221_37324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35195 === (5))){
var state_35194__$1 = state_35194;
var statearr_35222_37325 = state_35194__$1;
(statearr_35222_37325[(2)] = null);

(statearr_35222_37325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35195 === (6))){
var state_35194__$1 = state_35194;
var statearr_35223_37327 = state_35194__$1;
(statearr_35223_37327[(2)] = null);

(statearr_35223_37327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35195 === (7))){
var inst_35189 = (state_35194[(2)]);
var state_35194__$1 = state_35194;
var statearr_35224_37328 = state_35194__$1;
(statearr_35224_37328[(2)] = inst_35189);

(statearr_35224_37328[(1)] = (3));


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
});})(__37314,c__34853__auto___37318,G__35177_37315,G__35177_37316__$1,n__5636__auto___37313,jobs,results,process__$1,async))
;
return ((function (__37314,switch__34654__auto__,c__34853__auto___37318,G__35177_37315,G__35177_37316__$1,n__5636__auto___37313,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____0 = (function (){
var statearr_35234 = [null,null,null,null,null,null,null];
(statearr_35234[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__);

(statearr_35234[(1)] = (1));

return statearr_35234;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____1 = (function (state_35194){
while(true){
var ret_value__34656__auto__ = (function (){try{while(true){
var result__34657__auto__ = switch__34654__auto__(state_35194);
if(cljs.core.keyword_identical_QMARK_(result__34657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34657__auto__;
}
break;
}
}catch (e35238){var ex__34658__auto__ = e35238;
var statearr_35243_37329 = state_35194;
(statearr_35243_37329[(2)] = ex__34658__auto__);


if(cljs.core.seq((state_35194[(4)]))){
var statearr_35249_37332 = state_35194;
(statearr_35249_37332[(1)] = cljs.core.first((state_35194[(4)])));

} else {
throw ex__34658__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37333 = state_35194;
state_35194 = G__37333;
continue;
} else {
return ret_value__34656__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__ = function(state_35194){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____1.call(this,state_35194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__;
})()
;})(__37314,switch__34654__auto__,c__34853__auto___37318,G__35177_37315,G__35177_37316__$1,n__5636__auto___37313,jobs,results,process__$1,async))
})();
var state__34855__auto__ = (function (){var statearr_35251 = f__34854__auto__();
(statearr_35251[(6)] = c__34853__auto___37318);

return statearr_35251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34855__auto__);
});})(__37314,c__34853__auto___37318,G__35177_37315,G__35177_37316__$1,n__5636__auto___37313,jobs,results,process__$1,async))
);


break;
case "async":
var c__34853__auto___37334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37314,c__34853__auto___37334,G__35177_37315,G__35177_37316__$1,n__5636__auto___37313,jobs,results,process__$1,async){
return (function (){
var f__34854__auto__ = (function (){var switch__34654__auto__ = ((function (__37314,c__34853__auto___37334,G__35177_37315,G__35177_37316__$1,n__5636__auto___37313,jobs,results,process__$1,async){
return (function (state_35264){
var state_val_35265 = (state_35264[(1)]);
if((state_val_35265 === (1))){
var state_35264__$1 = state_35264;
var statearr_35282_37335 = state_35264__$1;
(statearr_35282_37335[(2)] = null);

(statearr_35282_37335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (2))){
var state_35264__$1 = state_35264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35264__$1,(4),jobs);
} else {
if((state_val_35265 === (3))){
var inst_35262 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35264__$1,inst_35262);
} else {
if((state_val_35265 === (4))){
var inst_35254 = (state_35264[(2)]);
var inst_35255 = async(inst_35254);
var state_35264__$1 = state_35264;
if(cljs.core.truth_(inst_35255)){
var statearr_35293_37338 = state_35264__$1;
(statearr_35293_37338[(1)] = (5));

} else {
var statearr_35299_37339 = state_35264__$1;
(statearr_35299_37339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (5))){
var state_35264__$1 = state_35264;
var statearr_35312_37340 = state_35264__$1;
(statearr_35312_37340[(2)] = null);

(statearr_35312_37340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (6))){
var state_35264__$1 = state_35264;
var statearr_35313_37342 = state_35264__$1;
(statearr_35313_37342[(2)] = null);

(statearr_35313_37342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (7))){
var inst_35260 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35314_37343 = state_35264__$1;
(statearr_35314_37343[(2)] = inst_35260);

(statearr_35314_37343[(1)] = (3));


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
});})(__37314,c__34853__auto___37334,G__35177_37315,G__35177_37316__$1,n__5636__auto___37313,jobs,results,process__$1,async))
;
return ((function (__37314,switch__34654__auto__,c__34853__auto___37334,G__35177_37315,G__35177_37316__$1,n__5636__auto___37313,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____0 = (function (){
var statearr_35323 = [null,null,null,null,null,null,null];
(statearr_35323[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__);

(statearr_35323[(1)] = (1));

return statearr_35323;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____1 = (function (state_35264){
while(true){
var ret_value__34656__auto__ = (function (){try{while(true){
var result__34657__auto__ = switch__34654__auto__(state_35264);
if(cljs.core.keyword_identical_QMARK_(result__34657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34657__auto__;
}
break;
}
}catch (e35328){var ex__34658__auto__ = e35328;
var statearr_35329_37345 = state_35264;
(statearr_35329_37345[(2)] = ex__34658__auto__);


if(cljs.core.seq((state_35264[(4)]))){
var statearr_35330_37346 = state_35264;
(statearr_35330_37346[(1)] = cljs.core.first((state_35264[(4)])));

} else {
throw ex__34658__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37347 = state_35264;
state_35264 = G__37347;
continue;
} else {
return ret_value__34656__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__ = function(state_35264){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____1.call(this,state_35264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__;
})()
;})(__37314,switch__34654__auto__,c__34853__auto___37334,G__35177_37315,G__35177_37316__$1,n__5636__auto___37313,jobs,results,process__$1,async))
})();
var state__34855__auto__ = (function (){var statearr_35341 = f__34854__auto__();
(statearr_35341[(6)] = c__34853__auto___37334);

return statearr_35341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34855__auto__);
});})(__37314,c__34853__auto___37334,G__35177_37315,G__35177_37316__$1,n__5636__auto___37313,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35177_37316__$1)].join('')));

}

var G__37348 = (__37314 + (1));
__37314 = G__37348;
continue;
} else {
}
break;
}

var c__34853__auto___37349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34854__auto__ = (function (){var switch__34654__auto__ = (function (state_35363){
var state_val_35364 = (state_35363[(1)]);
if((state_val_35364 === (7))){
var inst_35359 = (state_35363[(2)]);
var state_35363__$1 = state_35363;
var statearr_35379_37350 = state_35363__$1;
(statearr_35379_37350[(2)] = inst_35359);

(statearr_35379_37350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35364 === (1))){
var state_35363__$1 = state_35363;
var statearr_35380_37351 = state_35363__$1;
(statearr_35380_37351[(2)] = null);

(statearr_35380_37351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35364 === (4))){
var inst_35344 = (state_35363[(7)]);
var inst_35344__$1 = (state_35363[(2)]);
var inst_35345 = (inst_35344__$1 == null);
var state_35363__$1 = (function (){var statearr_35381 = state_35363;
(statearr_35381[(7)] = inst_35344__$1);

return statearr_35381;
})();
if(cljs.core.truth_(inst_35345)){
var statearr_35382_37353 = state_35363__$1;
(statearr_35382_37353[(1)] = (5));

} else {
var statearr_35383_37354 = state_35363__$1;
(statearr_35383_37354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35364 === (6))){
var inst_35344 = (state_35363[(7)]);
var inst_35349 = (state_35363[(8)]);
var inst_35349__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_35350 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35351 = [inst_35344,inst_35349__$1];
var inst_35352 = (new cljs.core.PersistentVector(null,2,(5),inst_35350,inst_35351,null));
var state_35363__$1 = (function (){var statearr_35385 = state_35363;
(statearr_35385[(8)] = inst_35349__$1);

return statearr_35385;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35363__$1,(8),jobs,inst_35352);
} else {
if((state_val_35364 === (3))){
var inst_35361 = (state_35363[(2)]);
var state_35363__$1 = state_35363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35363__$1,inst_35361);
} else {
if((state_val_35364 === (2))){
var state_35363__$1 = state_35363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35363__$1,(4),from);
} else {
if((state_val_35364 === (9))){
var inst_35356 = (state_35363[(2)]);
var state_35363__$1 = (function (){var statearr_35386 = state_35363;
(statearr_35386[(9)] = inst_35356);

return statearr_35386;
})();
var statearr_35387_37356 = state_35363__$1;
(statearr_35387_37356[(2)] = null);

(statearr_35387_37356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35364 === (5))){
var inst_35347 = cljs.core.async.close_BANG_(jobs);
var state_35363__$1 = state_35363;
var statearr_35388_37357 = state_35363__$1;
(statearr_35388_37357[(2)] = inst_35347);

(statearr_35388_37357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35364 === (8))){
var inst_35349 = (state_35363[(8)]);
var inst_35354 = (state_35363[(2)]);
var state_35363__$1 = (function (){var statearr_35389 = state_35363;
(statearr_35389[(10)] = inst_35354);

return statearr_35389;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35363__$1,(9),results,inst_35349);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____0 = (function (){
var statearr_35390 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35390[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__);

(statearr_35390[(1)] = (1));

return statearr_35390;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____1 = (function (state_35363){
while(true){
var ret_value__34656__auto__ = (function (){try{while(true){
var result__34657__auto__ = switch__34654__auto__(state_35363);
if(cljs.core.keyword_identical_QMARK_(result__34657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34657__auto__;
}
break;
}
}catch (e35392){var ex__34658__auto__ = e35392;
var statearr_35393_37358 = state_35363;
(statearr_35393_37358[(2)] = ex__34658__auto__);


if(cljs.core.seq((state_35363[(4)]))){
var statearr_35394_37359 = state_35363;
(statearr_35394_37359[(1)] = cljs.core.first((state_35363[(4)])));

} else {
throw ex__34658__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37360 = state_35363;
state_35363 = G__37360;
continue;
} else {
return ret_value__34656__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__ = function(state_35363){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____1.call(this,state_35363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__;
})()
})();
var state__34855__auto__ = (function (){var statearr_35395 = f__34854__auto__();
(statearr_35395[(6)] = c__34853__auto___37349);

return statearr_35395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34855__auto__);
}));


var c__34853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34854__auto__ = (function (){var switch__34654__auto__ = (function (state_35433){
var state_val_35434 = (state_35433[(1)]);
if((state_val_35434 === (7))){
var inst_35429 = (state_35433[(2)]);
var state_35433__$1 = state_35433;
var statearr_35435_37365 = state_35433__$1;
(statearr_35435_37365[(2)] = inst_35429);

(statearr_35435_37365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (20))){
var state_35433__$1 = state_35433;
var statearr_35436_37366 = state_35433__$1;
(statearr_35436_37366[(2)] = null);

(statearr_35436_37366[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (1))){
var state_35433__$1 = state_35433;
var statearr_35437_37368 = state_35433__$1;
(statearr_35437_37368[(2)] = null);

(statearr_35437_37368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (4))){
var inst_35398 = (state_35433[(7)]);
var inst_35398__$1 = (state_35433[(2)]);
var inst_35399 = (inst_35398__$1 == null);
var state_35433__$1 = (function (){var statearr_35439 = state_35433;
(statearr_35439[(7)] = inst_35398__$1);

return statearr_35439;
})();
if(cljs.core.truth_(inst_35399)){
var statearr_35440_37370 = state_35433__$1;
(statearr_35440_37370[(1)] = (5));

} else {
var statearr_35441_37371 = state_35433__$1;
(statearr_35441_37371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (15))){
var inst_35411 = (state_35433[(8)]);
var state_35433__$1 = state_35433;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35433__$1,(18),to,inst_35411);
} else {
if((state_val_35434 === (21))){
var inst_35424 = (state_35433[(2)]);
var state_35433__$1 = state_35433;
var statearr_35442_37372 = state_35433__$1;
(statearr_35442_37372[(2)] = inst_35424);

(statearr_35442_37372[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (13))){
var inst_35426 = (state_35433[(2)]);
var state_35433__$1 = (function (){var statearr_35443 = state_35433;
(statearr_35443[(9)] = inst_35426);

return statearr_35443;
})();
var statearr_35444_37374 = state_35433__$1;
(statearr_35444_37374[(2)] = null);

(statearr_35444_37374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (6))){
var inst_35398 = (state_35433[(7)]);
var state_35433__$1 = state_35433;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35433__$1,(11),inst_35398);
} else {
if((state_val_35434 === (17))){
var inst_35419 = (state_35433[(2)]);
var state_35433__$1 = state_35433;
if(cljs.core.truth_(inst_35419)){
var statearr_35446_37375 = state_35433__$1;
(statearr_35446_37375[(1)] = (19));

} else {
var statearr_35447_37376 = state_35433__$1;
(statearr_35447_37376[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (3))){
var inst_35431 = (state_35433[(2)]);
var state_35433__$1 = state_35433;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35433__$1,inst_35431);
} else {
if((state_val_35434 === (12))){
var inst_35408 = (state_35433[(10)]);
var state_35433__$1 = state_35433;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35433__$1,(14),inst_35408);
} else {
if((state_val_35434 === (2))){
var state_35433__$1 = state_35433;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35433__$1,(4),results);
} else {
if((state_val_35434 === (19))){
var state_35433__$1 = state_35433;
var statearr_35448_37377 = state_35433__$1;
(statearr_35448_37377[(2)] = null);

(statearr_35448_37377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (11))){
var inst_35408 = (state_35433[(2)]);
var state_35433__$1 = (function (){var statearr_35449 = state_35433;
(statearr_35449[(10)] = inst_35408);

return statearr_35449;
})();
var statearr_35450_37378 = state_35433__$1;
(statearr_35450_37378[(2)] = null);

(statearr_35450_37378[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (9))){
var state_35433__$1 = state_35433;
var statearr_35451_37379 = state_35433__$1;
(statearr_35451_37379[(2)] = null);

(statearr_35451_37379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (5))){
var state_35433__$1 = state_35433;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35453_37380 = state_35433__$1;
(statearr_35453_37380[(1)] = (8));

} else {
var statearr_35454_37381 = state_35433__$1;
(statearr_35454_37381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (14))){
var inst_35411 = (state_35433[(8)]);
var inst_35413 = (state_35433[(11)]);
var inst_35411__$1 = (state_35433[(2)]);
var inst_35412 = (inst_35411__$1 == null);
var inst_35413__$1 = cljs.core.not(inst_35412);
var state_35433__$1 = (function (){var statearr_35455 = state_35433;
(statearr_35455[(8)] = inst_35411__$1);

(statearr_35455[(11)] = inst_35413__$1);

return statearr_35455;
})();
if(inst_35413__$1){
var statearr_35456_37388 = state_35433__$1;
(statearr_35456_37388[(1)] = (15));

} else {
var statearr_35457_37389 = state_35433__$1;
(statearr_35457_37389[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (16))){
var inst_35413 = (state_35433[(11)]);
var state_35433__$1 = state_35433;
var statearr_35458_37390 = state_35433__$1;
(statearr_35458_37390[(2)] = inst_35413);

(statearr_35458_37390[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (10))){
var inst_35405 = (state_35433[(2)]);
var state_35433__$1 = state_35433;
var statearr_35459_37391 = state_35433__$1;
(statearr_35459_37391[(2)] = inst_35405);

(statearr_35459_37391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (18))){
var inst_35416 = (state_35433[(2)]);
var state_35433__$1 = state_35433;
var statearr_35460_37395 = state_35433__$1;
(statearr_35460_37395[(2)] = inst_35416);

(statearr_35460_37395[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (8))){
var inst_35402 = cljs.core.async.close_BANG_(to);
var state_35433__$1 = state_35433;
var statearr_35461_37396 = state_35433__$1;
(statearr_35461_37396[(2)] = inst_35402);

(statearr_35461_37396[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____0 = (function (){
var statearr_35463 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__);

(statearr_35463[(1)] = (1));

return statearr_35463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____1 = (function (state_35433){
while(true){
var ret_value__34656__auto__ = (function (){try{while(true){
var result__34657__auto__ = switch__34654__auto__(state_35433);
if(cljs.core.keyword_identical_QMARK_(result__34657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34657__auto__;
}
break;
}
}catch (e35464){var ex__34658__auto__ = e35464;
var statearr_35465_37398 = state_35433;
(statearr_35465_37398[(2)] = ex__34658__auto__);


if(cljs.core.seq((state_35433[(4)]))){
var statearr_35466_37399 = state_35433;
(statearr_35466_37399[(1)] = cljs.core.first((state_35433[(4)])));

} else {
throw ex__34658__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37401 = state_35433;
state_35433 = G__37401;
continue;
} else {
return ret_value__34656__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__ = function(state_35433){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____1.call(this,state_35433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34655__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34655__auto__;
})()
})();
var state__34855__auto__ = (function (){var statearr_35467 = f__34854__auto__();
(statearr_35467[(6)] = c__34853__auto__);

return statearr_35467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34855__auto__);
}));

return c__34853__auto__;
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
var G__35469 = arguments.length;
switch (G__35469) {
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
var G__35472 = arguments.length;
switch (G__35472) {
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
var G__35476 = arguments.length;
switch (G__35476) {
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
var c__34853__auto___37415 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34854__auto__ = (function (){var switch__34654__auto__ = (function (state_35503){
var state_val_35504 = (state_35503[(1)]);
if((state_val_35504 === (7))){
var inst_35499 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
var statearr_35505_37416 = state_35503__$1;
(statearr_35505_37416[(2)] = inst_35499);

(statearr_35505_37416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (1))){
var state_35503__$1 = state_35503;
var statearr_35506_37417 = state_35503__$1;
(statearr_35506_37417[(2)] = null);

(statearr_35506_37417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (4))){
var inst_35480 = (state_35503[(7)]);
var inst_35480__$1 = (state_35503[(2)]);
var inst_35481 = (inst_35480__$1 == null);
var state_35503__$1 = (function (){var statearr_35507 = state_35503;
(statearr_35507[(7)] = inst_35480__$1);

return statearr_35507;
})();
if(cljs.core.truth_(inst_35481)){
var statearr_35508_37419 = state_35503__$1;
(statearr_35508_37419[(1)] = (5));

} else {
var statearr_35509_37426 = state_35503__$1;
(statearr_35509_37426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (13))){
var state_35503__$1 = state_35503;
var statearr_35511_37427 = state_35503__$1;
(statearr_35511_37427[(2)] = null);

(statearr_35511_37427[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (6))){
var inst_35480 = (state_35503[(7)]);
var inst_35486 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35480) : p.call(null,inst_35480));
var state_35503__$1 = state_35503;
if(cljs.core.truth_(inst_35486)){
var statearr_35512_37428 = state_35503__$1;
(statearr_35512_37428[(1)] = (9));

} else {
var statearr_35513_37429 = state_35503__$1;
(statearr_35513_37429[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (3))){
var inst_35501 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35503__$1,inst_35501);
} else {
if((state_val_35504 === (12))){
var state_35503__$1 = state_35503;
var statearr_35514_37430 = state_35503__$1;
(statearr_35514_37430[(2)] = null);

(statearr_35514_37430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (2))){
var state_35503__$1 = state_35503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35503__$1,(4),ch);
} else {
if((state_val_35504 === (11))){
var inst_35480 = (state_35503[(7)]);
var inst_35490 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35503__$1,(8),inst_35490,inst_35480);
} else {
if((state_val_35504 === (9))){
var state_35503__$1 = state_35503;
var statearr_35515_37431 = state_35503__$1;
(statearr_35515_37431[(2)] = tc);

(statearr_35515_37431[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (5))){
var inst_35483 = cljs.core.async.close_BANG_(tc);
var inst_35484 = cljs.core.async.close_BANG_(fc);
var state_35503__$1 = (function (){var statearr_35516 = state_35503;
(statearr_35516[(8)] = inst_35483);

return statearr_35516;
})();
var statearr_35517_37433 = state_35503__$1;
(statearr_35517_37433[(2)] = inst_35484);

(statearr_35517_37433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (14))){
var inst_35497 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
var statearr_35518_37434 = state_35503__$1;
(statearr_35518_37434[(2)] = inst_35497);

(statearr_35518_37434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (10))){
var state_35503__$1 = state_35503;
var statearr_35519_37435 = state_35503__$1;
(statearr_35519_37435[(2)] = fc);

(statearr_35519_37435[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (8))){
var inst_35492 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
if(cljs.core.truth_(inst_35492)){
var statearr_35520_37436 = state_35503__$1;
(statearr_35520_37436[(1)] = (12));

} else {
var statearr_35522_37437 = state_35503__$1;
(statearr_35522_37437[(1)] = (13));

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
var cljs$core$async$state_machine__34655__auto__ = null;
var cljs$core$async$state_machine__34655__auto____0 = (function (){
var statearr_35523 = [null,null,null,null,null,null,null,null,null];
(statearr_35523[(0)] = cljs$core$async$state_machine__34655__auto__);

(statearr_35523[(1)] = (1));

return statearr_35523;
});
var cljs$core$async$state_machine__34655__auto____1 = (function (state_35503){
while(true){
var ret_value__34656__auto__ = (function (){try{while(true){
var result__34657__auto__ = switch__34654__auto__(state_35503);
if(cljs.core.keyword_identical_QMARK_(result__34657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34657__auto__;
}
break;
}
}catch (e35524){var ex__34658__auto__ = e35524;
var statearr_35525_37443 = state_35503;
(statearr_35525_37443[(2)] = ex__34658__auto__);


if(cljs.core.seq((state_35503[(4)]))){
var statearr_35526_37444 = state_35503;
(statearr_35526_37444[(1)] = cljs.core.first((state_35503[(4)])));

} else {
throw ex__34658__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37445 = state_35503;
state_35503 = G__37445;
continue;
} else {
return ret_value__34656__auto__;
}
break;
}
});
cljs$core$async$state_machine__34655__auto__ = function(state_35503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34655__auto____1.call(this,state_35503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34655__auto____0;
cljs$core$async$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34655__auto____1;
return cljs$core$async$state_machine__34655__auto__;
})()
})();
var state__34855__auto__ = (function (){var statearr_35527 = f__34854__auto__();
(statearr_35527[(6)] = c__34853__auto___37415);

return statearr_35527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34855__auto__);
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
var c__34853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34854__auto__ = (function (){var switch__34654__auto__ = (function (state_35550){
var state_val_35551 = (state_35550[(1)]);
if((state_val_35551 === (7))){
var inst_35546 = (state_35550[(2)]);
var state_35550__$1 = state_35550;
var statearr_35553_37446 = state_35550__$1;
(statearr_35553_37446[(2)] = inst_35546);

(statearr_35553_37446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (1))){
var inst_35529 = init;
var inst_35530 = inst_35529;
var state_35550__$1 = (function (){var statearr_35554 = state_35550;
(statearr_35554[(7)] = inst_35530);

return statearr_35554;
})();
var statearr_35555_37447 = state_35550__$1;
(statearr_35555_37447[(2)] = null);

(statearr_35555_37447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (4))){
var inst_35533 = (state_35550[(8)]);
var inst_35533__$1 = (state_35550[(2)]);
var inst_35534 = (inst_35533__$1 == null);
var state_35550__$1 = (function (){var statearr_35556 = state_35550;
(statearr_35556[(8)] = inst_35533__$1);

return statearr_35556;
})();
if(cljs.core.truth_(inst_35534)){
var statearr_35557_37448 = state_35550__$1;
(statearr_35557_37448[(1)] = (5));

} else {
var statearr_35558_37449 = state_35550__$1;
(statearr_35558_37449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (6))){
var inst_35533 = (state_35550[(8)]);
var inst_35530 = (state_35550[(7)]);
var inst_35537 = (state_35550[(9)]);
var inst_35537__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_35530,inst_35533) : f.call(null,inst_35530,inst_35533));
var inst_35538 = cljs.core.reduced_QMARK_(inst_35537__$1);
var state_35550__$1 = (function (){var statearr_35559 = state_35550;
(statearr_35559[(9)] = inst_35537__$1);

return statearr_35559;
})();
if(inst_35538){
var statearr_35560_37455 = state_35550__$1;
(statearr_35560_37455[(1)] = (8));

} else {
var statearr_35561_37456 = state_35550__$1;
(statearr_35561_37456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (3))){
var inst_35548 = (state_35550[(2)]);
var state_35550__$1 = state_35550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35550__$1,inst_35548);
} else {
if((state_val_35551 === (2))){
var state_35550__$1 = state_35550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35550__$1,(4),ch);
} else {
if((state_val_35551 === (9))){
var inst_35537 = (state_35550[(9)]);
var inst_35530 = inst_35537;
var state_35550__$1 = (function (){var statearr_35562 = state_35550;
(statearr_35562[(7)] = inst_35530);

return statearr_35562;
})();
var statearr_35563_37462 = state_35550__$1;
(statearr_35563_37462[(2)] = null);

(statearr_35563_37462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (5))){
var inst_35530 = (state_35550[(7)]);
var state_35550__$1 = state_35550;
var statearr_35565_37463 = state_35550__$1;
(statearr_35565_37463[(2)] = inst_35530);

(statearr_35565_37463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (10))){
var inst_35544 = (state_35550[(2)]);
var state_35550__$1 = state_35550;
var statearr_35566_37464 = state_35550__$1;
(statearr_35566_37464[(2)] = inst_35544);

(statearr_35566_37464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (8))){
var inst_35537 = (state_35550[(9)]);
var inst_35540 = cljs.core.deref(inst_35537);
var state_35550__$1 = state_35550;
var statearr_35567_37465 = state_35550__$1;
(statearr_35567_37465[(2)] = inst_35540);

(statearr_35567_37465[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__34655__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34655__auto____0 = (function (){
var statearr_35568 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35568[(0)] = cljs$core$async$reduce_$_state_machine__34655__auto__);

(statearr_35568[(1)] = (1));

return statearr_35568;
});
var cljs$core$async$reduce_$_state_machine__34655__auto____1 = (function (state_35550){
while(true){
var ret_value__34656__auto__ = (function (){try{while(true){
var result__34657__auto__ = switch__34654__auto__(state_35550);
if(cljs.core.keyword_identical_QMARK_(result__34657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34657__auto__;
}
break;
}
}catch (e35569){var ex__34658__auto__ = e35569;
var statearr_35570_37467 = state_35550;
(statearr_35570_37467[(2)] = ex__34658__auto__);


if(cljs.core.seq((state_35550[(4)]))){
var statearr_35571_37468 = state_35550;
(statearr_35571_37468[(1)] = cljs.core.first((state_35550[(4)])));

} else {
throw ex__34658__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37470 = state_35550;
state_35550 = G__37470;
continue;
} else {
return ret_value__34656__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34655__auto__ = function(state_35550){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34655__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34655__auto____1.call(this,state_35550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34655__auto____0;
cljs$core$async$reduce_$_state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34655__auto____1;
return cljs$core$async$reduce_$_state_machine__34655__auto__;
})()
})();
var state__34855__auto__ = (function (){var statearr_35573 = f__34854__auto__();
(statearr_35573[(6)] = c__34853__auto__);

return statearr_35573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34855__auto__);
}));

return c__34853__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34854__auto__ = (function (){var switch__34654__auto__ = (function (state_35579){
var state_val_35580 = (state_35579[(1)]);
if((state_val_35580 === (1))){
var inst_35574 = cljs.core.async.reduce(f__$1,init,ch);
var state_35579__$1 = state_35579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35579__$1,(2),inst_35574);
} else {
if((state_val_35580 === (2))){
var inst_35576 = (state_35579[(2)]);
var inst_35577 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_35576) : f__$1.call(null,inst_35576));
var state_35579__$1 = state_35579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35579__$1,inst_35577);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34655__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34655__auto____0 = (function (){
var statearr_35582 = [null,null,null,null,null,null,null];
(statearr_35582[(0)] = cljs$core$async$transduce_$_state_machine__34655__auto__);

(statearr_35582[(1)] = (1));

return statearr_35582;
});
var cljs$core$async$transduce_$_state_machine__34655__auto____1 = (function (state_35579){
while(true){
var ret_value__34656__auto__ = (function (){try{while(true){
var result__34657__auto__ = switch__34654__auto__(state_35579);
if(cljs.core.keyword_identical_QMARK_(result__34657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34657__auto__;
}
break;
}
}catch (e35583){var ex__34658__auto__ = e35583;
var statearr_35584_37473 = state_35579;
(statearr_35584_37473[(2)] = ex__34658__auto__);


if(cljs.core.seq((state_35579[(4)]))){
var statearr_35585_37474 = state_35579;
(statearr_35585_37474[(1)] = cljs.core.first((state_35579[(4)])));

} else {
throw ex__34658__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37475 = state_35579;
state_35579 = G__37475;
continue;
} else {
return ret_value__34656__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34655__auto__ = function(state_35579){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34655__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34655__auto____1.call(this,state_35579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34655__auto____0;
cljs$core$async$transduce_$_state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34655__auto____1;
return cljs$core$async$transduce_$_state_machine__34655__auto__;
})()
})();
var state__34855__auto__ = (function (){var statearr_35586 = f__34854__auto__();
(statearr_35586[(6)] = c__34853__auto__);

return statearr_35586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34855__auto__);
}));

return c__34853__auto__;
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
var G__35589 = arguments.length;
switch (G__35589) {
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
var c__34853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34854__auto__ = (function (){var switch__34654__auto__ = (function (state_35615){
var state_val_35616 = (state_35615[(1)]);
if((state_val_35616 === (7))){
var inst_35596 = (state_35615[(2)]);
var state_35615__$1 = state_35615;
var statearr_35617_37486 = state_35615__$1;
(statearr_35617_37486[(2)] = inst_35596);

(statearr_35617_37486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (1))){
var inst_35590 = cljs.core.seq(coll);
var inst_35591 = inst_35590;
var state_35615__$1 = (function (){var statearr_35618 = state_35615;
(statearr_35618[(7)] = inst_35591);

return statearr_35618;
})();
var statearr_35619_37490 = state_35615__$1;
(statearr_35619_37490[(2)] = null);

(statearr_35619_37490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (4))){
var inst_35591 = (state_35615[(7)]);
var inst_35594 = cljs.core.first(inst_35591);
var state_35615__$1 = state_35615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35615__$1,(7),ch,inst_35594);
} else {
if((state_val_35616 === (13))){
var inst_35609 = (state_35615[(2)]);
var state_35615__$1 = state_35615;
var statearr_35621_37491 = state_35615__$1;
(statearr_35621_37491[(2)] = inst_35609);

(statearr_35621_37491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (6))){
var inst_35599 = (state_35615[(2)]);
var state_35615__$1 = state_35615;
if(cljs.core.truth_(inst_35599)){
var statearr_35622_37495 = state_35615__$1;
(statearr_35622_37495[(1)] = (8));

} else {
var statearr_35623_37496 = state_35615__$1;
(statearr_35623_37496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (3))){
var inst_35613 = (state_35615[(2)]);
var state_35615__$1 = state_35615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35615__$1,inst_35613);
} else {
if((state_val_35616 === (12))){
var state_35615__$1 = state_35615;
var statearr_35624_37497 = state_35615__$1;
(statearr_35624_37497[(2)] = null);

(statearr_35624_37497[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (2))){
var inst_35591 = (state_35615[(7)]);
var state_35615__$1 = state_35615;
if(cljs.core.truth_(inst_35591)){
var statearr_35626_37501 = state_35615__$1;
(statearr_35626_37501[(1)] = (4));

} else {
var statearr_35627_37502 = state_35615__$1;
(statearr_35627_37502[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (11))){
var inst_35606 = cljs.core.async.close_BANG_(ch);
var state_35615__$1 = state_35615;
var statearr_35628_37503 = state_35615__$1;
(statearr_35628_37503[(2)] = inst_35606);

(statearr_35628_37503[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (9))){
var state_35615__$1 = state_35615;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35629_37504 = state_35615__$1;
(statearr_35629_37504[(1)] = (11));

} else {
var statearr_35630_37505 = state_35615__$1;
(statearr_35630_37505[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (5))){
var inst_35591 = (state_35615[(7)]);
var state_35615__$1 = state_35615;
var statearr_35631_37506 = state_35615__$1;
(statearr_35631_37506[(2)] = inst_35591);

(statearr_35631_37506[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (10))){
var inst_35611 = (state_35615[(2)]);
var state_35615__$1 = state_35615;
var statearr_35633_37511 = state_35615__$1;
(statearr_35633_37511[(2)] = inst_35611);

(statearr_35633_37511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (8))){
var inst_35591 = (state_35615[(7)]);
var inst_35602 = cljs.core.next(inst_35591);
var inst_35591__$1 = inst_35602;
var state_35615__$1 = (function (){var statearr_35634 = state_35615;
(statearr_35634[(7)] = inst_35591__$1);

return statearr_35634;
})();
var statearr_35635_37515 = state_35615__$1;
(statearr_35635_37515[(2)] = null);

(statearr_35635_37515[(1)] = (2));


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
var cljs$core$async$state_machine__34655__auto__ = null;
var cljs$core$async$state_machine__34655__auto____0 = (function (){
var statearr_35636 = [null,null,null,null,null,null,null,null];
(statearr_35636[(0)] = cljs$core$async$state_machine__34655__auto__);

(statearr_35636[(1)] = (1));

return statearr_35636;
});
var cljs$core$async$state_machine__34655__auto____1 = (function (state_35615){
while(true){
var ret_value__34656__auto__ = (function (){try{while(true){
var result__34657__auto__ = switch__34654__auto__(state_35615);
if(cljs.core.keyword_identical_QMARK_(result__34657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34657__auto__;
}
break;
}
}catch (e35637){var ex__34658__auto__ = e35637;
var statearr_35638_37520 = state_35615;
(statearr_35638_37520[(2)] = ex__34658__auto__);


if(cljs.core.seq((state_35615[(4)]))){
var statearr_35639_37524 = state_35615;
(statearr_35639_37524[(1)] = cljs.core.first((state_35615[(4)])));

} else {
throw ex__34658__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37525 = state_35615;
state_35615 = G__37525;
continue;
} else {
return ret_value__34656__auto__;
}
break;
}
});
cljs$core$async$state_machine__34655__auto__ = function(state_35615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34655__auto____1.call(this,state_35615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34655__auto____0;
cljs$core$async$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34655__auto____1;
return cljs$core$async$state_machine__34655__auto__;
})()
})();
var state__34855__auto__ = (function (){var statearr_35641 = f__34854__auto__();
(statearr_35641[(6)] = c__34853__auto__);

return statearr_35641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34855__auto__);
}));

return c__34853__auto__;
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
var G__35643 = arguments.length;
switch (G__35643) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_37535 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_37535(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_37541 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_37541(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_37548 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_37548(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_37549 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_37549(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35649 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35649 = (function (ch,cs,meta35650){
this.ch = ch;
this.cs = cs;
this.meta35650 = meta35650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35651,meta35650__$1){
var self__ = this;
var _35651__$1 = this;
return (new cljs.core.async.t_cljs$core$async35649(self__.ch,self__.cs,meta35650__$1));
}));

(cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35651){
var self__ = this;
var _35651__$1 = this;
return self__.meta35650;
}));

(cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async35649.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35650","meta35650",435039319,null)], null);
}));

(cljs.core.async.t_cljs$core$async35649.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35649");

(cljs.core.async.t_cljs$core$async35649.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35649");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35649.
 */
cljs.core.async.__GT_t_cljs$core$async35649 = (function cljs$core$async$mult_$___GT_t_cljs$core$async35649(ch__$1,cs__$1,meta35650){
return (new cljs.core.async.t_cljs$core$async35649(ch__$1,cs__$1,meta35650));
});

}

return (new cljs.core.async.t_cljs$core$async35649(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34853__auto___37554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34854__auto__ = (function (){var switch__34654__auto__ = (function (state_35789){
var state_val_35790 = (state_35789[(1)]);
if((state_val_35790 === (7))){
var inst_35785 = (state_35789[(2)]);
var state_35789__$1 = state_35789;
var statearr_35791_37555 = state_35789__$1;
(statearr_35791_37555[(2)] = inst_35785);

(statearr_35791_37555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (20))){
var inst_35687 = (state_35789[(7)]);
var inst_35700 = cljs.core.first(inst_35687);
var inst_35701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35700,(0),null);
var inst_35702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35700,(1),null);
var state_35789__$1 = (function (){var statearr_35792 = state_35789;
(statearr_35792[(8)] = inst_35701);

return statearr_35792;
})();
if(cljs.core.truth_(inst_35702)){
var statearr_35793_37556 = state_35789__$1;
(statearr_35793_37556[(1)] = (22));

} else {
var statearr_35794_37557 = state_35789__$1;
(statearr_35794_37557[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (27))){
var inst_35737 = (state_35789[(9)]);
var inst_35730 = (state_35789[(10)]);
var inst_35732 = (state_35789[(11)]);
var inst_35656 = (state_35789[(12)]);
var inst_35737__$1 = cljs.core._nth(inst_35730,inst_35732);
var inst_35738 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35737__$1,inst_35656,done);
var state_35789__$1 = (function (){var statearr_35797 = state_35789;
(statearr_35797[(9)] = inst_35737__$1);

return statearr_35797;
})();
if(cljs.core.truth_(inst_35738)){
var statearr_35798_37558 = state_35789__$1;
(statearr_35798_37558[(1)] = (30));

} else {
var statearr_35799_37559 = state_35789__$1;
(statearr_35799_37559[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (1))){
var state_35789__$1 = state_35789;
var statearr_35800_37560 = state_35789__$1;
(statearr_35800_37560[(2)] = null);

(statearr_35800_37560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (24))){
var inst_35687 = (state_35789[(7)]);
var inst_35707 = (state_35789[(2)]);
var inst_35708 = cljs.core.next(inst_35687);
var inst_35665 = inst_35708;
var inst_35666 = null;
var inst_35667 = (0);
var inst_35668 = (0);
var state_35789__$1 = (function (){var statearr_35801 = state_35789;
(statearr_35801[(13)] = inst_35667);

(statearr_35801[(14)] = inst_35666);

(statearr_35801[(15)] = inst_35668);

(statearr_35801[(16)] = inst_35665);

(statearr_35801[(17)] = inst_35707);

return statearr_35801;
})();
var statearr_35802_37561 = state_35789__$1;
(statearr_35802_37561[(2)] = null);

(statearr_35802_37561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (39))){
var state_35789__$1 = state_35789;
var statearr_35806_37562 = state_35789__$1;
(statearr_35806_37562[(2)] = null);

(statearr_35806_37562[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (4))){
var inst_35656 = (state_35789[(12)]);
var inst_35656__$1 = (state_35789[(2)]);
var inst_35657 = (inst_35656__$1 == null);
var state_35789__$1 = (function (){var statearr_35807 = state_35789;
(statearr_35807[(12)] = inst_35656__$1);

return statearr_35807;
})();
if(cljs.core.truth_(inst_35657)){
var statearr_35808_37563 = state_35789__$1;
(statearr_35808_37563[(1)] = (5));

} else {
var statearr_35809_37564 = state_35789__$1;
(statearr_35809_37564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (15))){
var inst_35667 = (state_35789[(13)]);
var inst_35666 = (state_35789[(14)]);
var inst_35668 = (state_35789[(15)]);
var inst_35665 = (state_35789[(16)]);
var inst_35683 = (state_35789[(2)]);
var inst_35684 = (inst_35668 + (1));
var tmp35803 = inst_35667;
var tmp35804 = inst_35666;
var tmp35805 = inst_35665;
var inst_35665__$1 = tmp35805;
var inst_35666__$1 = tmp35804;
var inst_35667__$1 = tmp35803;
var inst_35668__$1 = inst_35684;
var state_35789__$1 = (function (){var statearr_35810 = state_35789;
(statearr_35810[(13)] = inst_35667__$1);

(statearr_35810[(18)] = inst_35683);

(statearr_35810[(14)] = inst_35666__$1);

(statearr_35810[(15)] = inst_35668__$1);

(statearr_35810[(16)] = inst_35665__$1);

return statearr_35810;
})();
var statearr_35811_37565 = state_35789__$1;
(statearr_35811_37565[(2)] = null);

(statearr_35811_37565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (21))){
var inst_35711 = (state_35789[(2)]);
var state_35789__$1 = state_35789;
var statearr_35816_37566 = state_35789__$1;
(statearr_35816_37566[(2)] = inst_35711);

(statearr_35816_37566[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (31))){
var inst_35737 = (state_35789[(9)]);
var inst_35741 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35737);
var state_35789__$1 = state_35789;
var statearr_35818_37567 = state_35789__$1;
(statearr_35818_37567[(2)] = inst_35741);

(statearr_35818_37567[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (32))){
var inst_35730 = (state_35789[(10)]);
var inst_35732 = (state_35789[(11)]);
var inst_35731 = (state_35789[(19)]);
var inst_35729 = (state_35789[(20)]);
var inst_35743 = (state_35789[(2)]);
var inst_35744 = (inst_35732 + (1));
var tmp35812 = inst_35730;
var tmp35813 = inst_35731;
var tmp35814 = inst_35729;
var inst_35729__$1 = tmp35814;
var inst_35730__$1 = tmp35812;
var inst_35731__$1 = tmp35813;
var inst_35732__$1 = inst_35744;
var state_35789__$1 = (function (){var statearr_35819 = state_35789;
(statearr_35819[(10)] = inst_35730__$1);

(statearr_35819[(21)] = inst_35743);

(statearr_35819[(11)] = inst_35732__$1);

(statearr_35819[(19)] = inst_35731__$1);

(statearr_35819[(20)] = inst_35729__$1);

return statearr_35819;
})();
var statearr_35820_37568 = state_35789__$1;
(statearr_35820_37568[(2)] = null);

(statearr_35820_37568[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (40))){
var inst_35757 = (state_35789[(22)]);
var inst_35762 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35757);
var state_35789__$1 = state_35789;
var statearr_35821_37569 = state_35789__$1;
(statearr_35821_37569[(2)] = inst_35762);

(statearr_35821_37569[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (33))){
var inst_35747 = (state_35789[(23)]);
var inst_35749 = cljs.core.chunked_seq_QMARK_(inst_35747);
var state_35789__$1 = state_35789;
if(inst_35749){
var statearr_35822_37570 = state_35789__$1;
(statearr_35822_37570[(1)] = (36));

} else {
var statearr_35823_37571 = state_35789__$1;
(statearr_35823_37571[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (13))){
var inst_35677 = (state_35789[(24)]);
var inst_35680 = cljs.core.async.close_BANG_(inst_35677);
var state_35789__$1 = state_35789;
var statearr_35824_37572 = state_35789__$1;
(statearr_35824_37572[(2)] = inst_35680);

(statearr_35824_37572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (22))){
var inst_35701 = (state_35789[(8)]);
var inst_35704 = cljs.core.async.close_BANG_(inst_35701);
var state_35789__$1 = state_35789;
var statearr_35825_37573 = state_35789__$1;
(statearr_35825_37573[(2)] = inst_35704);

(statearr_35825_37573[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (36))){
var inst_35747 = (state_35789[(23)]);
var inst_35752 = cljs.core.chunk_first(inst_35747);
var inst_35753 = cljs.core.chunk_rest(inst_35747);
var inst_35754 = cljs.core.count(inst_35752);
var inst_35729 = inst_35753;
var inst_35730 = inst_35752;
var inst_35731 = inst_35754;
var inst_35732 = (0);
var state_35789__$1 = (function (){var statearr_35826 = state_35789;
(statearr_35826[(10)] = inst_35730);

(statearr_35826[(11)] = inst_35732);

(statearr_35826[(19)] = inst_35731);

(statearr_35826[(20)] = inst_35729);

return statearr_35826;
})();
var statearr_35827_37574 = state_35789__$1;
(statearr_35827_37574[(2)] = null);

(statearr_35827_37574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (41))){
var inst_35747 = (state_35789[(23)]);
var inst_35764 = (state_35789[(2)]);
var inst_35765 = cljs.core.next(inst_35747);
var inst_35729 = inst_35765;
var inst_35730 = null;
var inst_35731 = (0);
var inst_35732 = (0);
var state_35789__$1 = (function (){var statearr_35828 = state_35789;
(statearr_35828[(10)] = inst_35730);

(statearr_35828[(25)] = inst_35764);

(statearr_35828[(11)] = inst_35732);

(statearr_35828[(19)] = inst_35731);

(statearr_35828[(20)] = inst_35729);

return statearr_35828;
})();
var statearr_35829_37577 = state_35789__$1;
(statearr_35829_37577[(2)] = null);

(statearr_35829_37577[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (43))){
var state_35789__$1 = state_35789;
var statearr_35830_37578 = state_35789__$1;
(statearr_35830_37578[(2)] = null);

(statearr_35830_37578[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (29))){
var inst_35773 = (state_35789[(2)]);
var state_35789__$1 = state_35789;
var statearr_35831_37582 = state_35789__$1;
(statearr_35831_37582[(2)] = inst_35773);

(statearr_35831_37582[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (44))){
var inst_35782 = (state_35789[(2)]);
var state_35789__$1 = (function (){var statearr_35834 = state_35789;
(statearr_35834[(26)] = inst_35782);

return statearr_35834;
})();
var statearr_35836_37583 = state_35789__$1;
(statearr_35836_37583[(2)] = null);

(statearr_35836_37583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (6))){
var inst_35721 = (state_35789[(27)]);
var inst_35720 = cljs.core.deref(cs);
var inst_35721__$1 = cljs.core.keys(inst_35720);
var inst_35722 = cljs.core.count(inst_35721__$1);
var inst_35723 = cljs.core.reset_BANG_(dctr,inst_35722);
var inst_35728 = cljs.core.seq(inst_35721__$1);
var inst_35729 = inst_35728;
var inst_35730 = null;
var inst_35731 = (0);
var inst_35732 = (0);
var state_35789__$1 = (function (){var statearr_35837 = state_35789;
(statearr_35837[(10)] = inst_35730);

(statearr_35837[(11)] = inst_35732);

(statearr_35837[(28)] = inst_35723);

(statearr_35837[(27)] = inst_35721__$1);

(statearr_35837[(19)] = inst_35731);

(statearr_35837[(20)] = inst_35729);

return statearr_35837;
})();
var statearr_35838_37586 = state_35789__$1;
(statearr_35838_37586[(2)] = null);

(statearr_35838_37586[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (28))){
var inst_35747 = (state_35789[(23)]);
var inst_35729 = (state_35789[(20)]);
var inst_35747__$1 = cljs.core.seq(inst_35729);
var state_35789__$1 = (function (){var statearr_35842 = state_35789;
(statearr_35842[(23)] = inst_35747__$1);

return statearr_35842;
})();
if(inst_35747__$1){
var statearr_35843_37588 = state_35789__$1;
(statearr_35843_37588[(1)] = (33));

} else {
var statearr_35844_37589 = state_35789__$1;
(statearr_35844_37589[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (25))){
var inst_35732 = (state_35789[(11)]);
var inst_35731 = (state_35789[(19)]);
var inst_35734 = (inst_35732 < inst_35731);
var inst_35735 = inst_35734;
var state_35789__$1 = state_35789;
if(cljs.core.truth_(inst_35735)){
var statearr_35848_37591 = state_35789__$1;
(statearr_35848_37591[(1)] = (27));

} else {
var statearr_35849_37592 = state_35789__$1;
(statearr_35849_37592[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (34))){
var state_35789__$1 = state_35789;
var statearr_35850_37593 = state_35789__$1;
(statearr_35850_37593[(2)] = null);

(statearr_35850_37593[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (17))){
var state_35789__$1 = state_35789;
var statearr_35851_37594 = state_35789__$1;
(statearr_35851_37594[(2)] = null);

(statearr_35851_37594[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (3))){
var inst_35787 = (state_35789[(2)]);
var state_35789__$1 = state_35789;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35789__$1,inst_35787);
} else {
if((state_val_35790 === (12))){
var inst_35716 = (state_35789[(2)]);
var state_35789__$1 = state_35789;
var statearr_35853_37595 = state_35789__$1;
(statearr_35853_37595[(2)] = inst_35716);

(statearr_35853_37595[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (2))){
var state_35789__$1 = state_35789;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35789__$1,(4),ch);
} else {
if((state_val_35790 === (23))){
var state_35789__$1 = state_35789;
var statearr_35857_37599 = state_35789__$1;
(statearr_35857_37599[(2)] = null);

(statearr_35857_37599[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (35))){
var inst_35771 = (state_35789[(2)]);
var state_35789__$1 = state_35789;
var statearr_35859_37600 = state_35789__$1;
(statearr_35859_37600[(2)] = inst_35771);

(statearr_35859_37600[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (19))){
var inst_35687 = (state_35789[(7)]);
var inst_35691 = cljs.core.chunk_first(inst_35687);
var inst_35692 = cljs.core.chunk_rest(inst_35687);
var inst_35693 = cljs.core.count(inst_35691);
var inst_35665 = inst_35692;
var inst_35666 = inst_35691;
var inst_35667 = inst_35693;
var inst_35668 = (0);
var state_35789__$1 = (function (){var statearr_35863 = state_35789;
(statearr_35863[(13)] = inst_35667);

(statearr_35863[(14)] = inst_35666);

(statearr_35863[(15)] = inst_35668);

(statearr_35863[(16)] = inst_35665);

return statearr_35863;
})();
var statearr_35865_37601 = state_35789__$1;
(statearr_35865_37601[(2)] = null);

(statearr_35865_37601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (11))){
var inst_35687 = (state_35789[(7)]);
var inst_35665 = (state_35789[(16)]);
var inst_35687__$1 = cljs.core.seq(inst_35665);
var state_35789__$1 = (function (){var statearr_35868 = state_35789;
(statearr_35868[(7)] = inst_35687__$1);

return statearr_35868;
})();
if(inst_35687__$1){
var statearr_35870_37602 = state_35789__$1;
(statearr_35870_37602[(1)] = (16));

} else {
var statearr_35871_37603 = state_35789__$1;
(statearr_35871_37603[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (9))){
var inst_35718 = (state_35789[(2)]);
var state_35789__$1 = state_35789;
var statearr_35872_37604 = state_35789__$1;
(statearr_35872_37604[(2)] = inst_35718);

(statearr_35872_37604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (5))){
var inst_35663 = cljs.core.deref(cs);
var inst_35664 = cljs.core.seq(inst_35663);
var inst_35665 = inst_35664;
var inst_35666 = null;
var inst_35667 = (0);
var inst_35668 = (0);
var state_35789__$1 = (function (){var statearr_35873 = state_35789;
(statearr_35873[(13)] = inst_35667);

(statearr_35873[(14)] = inst_35666);

(statearr_35873[(15)] = inst_35668);

(statearr_35873[(16)] = inst_35665);

return statearr_35873;
})();
var statearr_35875_37605 = state_35789__$1;
(statearr_35875_37605[(2)] = null);

(statearr_35875_37605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (14))){
var state_35789__$1 = state_35789;
var statearr_35879_37607 = state_35789__$1;
(statearr_35879_37607[(2)] = null);

(statearr_35879_37607[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (45))){
var inst_35779 = (state_35789[(2)]);
var state_35789__$1 = state_35789;
var statearr_35880_37614 = state_35789__$1;
(statearr_35880_37614[(2)] = inst_35779);

(statearr_35880_37614[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (26))){
var inst_35721 = (state_35789[(27)]);
var inst_35775 = (state_35789[(2)]);
var inst_35776 = cljs.core.seq(inst_35721);
var state_35789__$1 = (function (){var statearr_35882 = state_35789;
(statearr_35882[(29)] = inst_35775);

return statearr_35882;
})();
if(inst_35776){
var statearr_35883_37615 = state_35789__$1;
(statearr_35883_37615[(1)] = (42));

} else {
var statearr_35884_37616 = state_35789__$1;
(statearr_35884_37616[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (16))){
var inst_35687 = (state_35789[(7)]);
var inst_35689 = cljs.core.chunked_seq_QMARK_(inst_35687);
var state_35789__$1 = state_35789;
if(inst_35689){
var statearr_35888_37617 = state_35789__$1;
(statearr_35888_37617[(1)] = (19));

} else {
var statearr_35889_37618 = state_35789__$1;
(statearr_35889_37618[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (38))){
var inst_35768 = (state_35789[(2)]);
var state_35789__$1 = state_35789;
var statearr_35891_37621 = state_35789__$1;
(statearr_35891_37621[(2)] = inst_35768);

(statearr_35891_37621[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (30))){
var state_35789__$1 = state_35789;
var statearr_35895_37622 = state_35789__$1;
(statearr_35895_37622[(2)] = null);

(statearr_35895_37622[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (10))){
var inst_35666 = (state_35789[(14)]);
var inst_35668 = (state_35789[(15)]);
var inst_35676 = cljs.core._nth(inst_35666,inst_35668);
var inst_35677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35676,(0),null);
var inst_35678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35676,(1),null);
var state_35789__$1 = (function (){var statearr_35897 = state_35789;
(statearr_35897[(24)] = inst_35677);

return statearr_35897;
})();
if(cljs.core.truth_(inst_35678)){
var statearr_35898_37625 = state_35789__$1;
(statearr_35898_37625[(1)] = (13));

} else {
var statearr_35901_37626 = state_35789__$1;
(statearr_35901_37626[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (18))){
var inst_35714 = (state_35789[(2)]);
var state_35789__$1 = state_35789;
var statearr_35903_37627 = state_35789__$1;
(statearr_35903_37627[(2)] = inst_35714);

(statearr_35903_37627[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (42))){
var state_35789__$1 = state_35789;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35789__$1,(45),dchan);
} else {
if((state_val_35790 === (37))){
var inst_35757 = (state_35789[(22)]);
var inst_35747 = (state_35789[(23)]);
var inst_35656 = (state_35789[(12)]);
var inst_35757__$1 = cljs.core.first(inst_35747);
var inst_35758 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35757__$1,inst_35656,done);
var state_35789__$1 = (function (){var statearr_35908 = state_35789;
(statearr_35908[(22)] = inst_35757__$1);

return statearr_35908;
})();
if(cljs.core.truth_(inst_35758)){
var statearr_35909_37631 = state_35789__$1;
(statearr_35909_37631[(1)] = (39));

} else {
var statearr_35911_37633 = state_35789__$1;
(statearr_35911_37633[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (8))){
var inst_35667 = (state_35789[(13)]);
var inst_35668 = (state_35789[(15)]);
var inst_35670 = (inst_35668 < inst_35667);
var inst_35671 = inst_35670;
var state_35789__$1 = state_35789;
if(cljs.core.truth_(inst_35671)){
var statearr_35915_37637 = state_35789__$1;
(statearr_35915_37637[(1)] = (10));

} else {
var statearr_35916_37638 = state_35789__$1;
(statearr_35916_37638[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__34655__auto__ = null;
var cljs$core$async$mult_$_state_machine__34655__auto____0 = (function (){
var statearr_35921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35921[(0)] = cljs$core$async$mult_$_state_machine__34655__auto__);

(statearr_35921[(1)] = (1));

return statearr_35921;
});
var cljs$core$async$mult_$_state_machine__34655__auto____1 = (function (state_35789){
while(true){
var ret_value__34656__auto__ = (function (){try{while(true){
var result__34657__auto__ = switch__34654__auto__(state_35789);
if(cljs.core.keyword_identical_QMARK_(result__34657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34657__auto__;
}
break;
}
}catch (e35923){var ex__34658__auto__ = e35923;
var statearr_35925_37645 = state_35789;
(statearr_35925_37645[(2)] = ex__34658__auto__);


if(cljs.core.seq((state_35789[(4)]))){
var statearr_35928_37646 = state_35789;
(statearr_35928_37646[(1)] = cljs.core.first((state_35789[(4)])));

} else {
throw ex__34658__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37647 = state_35789;
state_35789 = G__37647;
continue;
} else {
return ret_value__34656__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34655__auto__ = function(state_35789){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34655__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34655__auto____1.call(this,state_35789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34655__auto____0;
cljs$core$async$mult_$_state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34655__auto____1;
return cljs$core$async$mult_$_state_machine__34655__auto__;
})()
})();
var state__34855__auto__ = (function (){var statearr_35930 = f__34854__auto__();
(statearr_35930[(6)] = c__34853__auto___37554);

return statearr_35930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34855__auto__);
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
var G__35938 = arguments.length;
switch (G__35938) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_37650 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_37650(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_37651 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_37651(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_37658 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_37658(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_37659 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_37659(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_37660 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_37660(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37665 = arguments.length;
var i__5770__auto___37666 = (0);
while(true){
if((i__5770__auto___37666 < len__5769__auto___37665)){
args__5775__auto__.push((arguments[i__5770__auto___37666]));

var G__37667 = (i__5770__auto___37666 + (1));
i__5770__auto___37666 = G__37667;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36015){
var map__36017 = p__36015;
var map__36017__$1 = cljs.core.__destructure_map(map__36017);
var opts = map__36017__$1;
var statearr_36019_37668 = state;
(statearr_36019_37668[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_36021_37669 = state;
(statearr_36021_37669[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_36025_37674 = state;
(statearr_36025_37674[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36006){
var G__36007 = cljs.core.first(seq36006);
var seq36006__$1 = cljs.core.next(seq36006);
var G__36008 = cljs.core.first(seq36006__$1);
var seq36006__$2 = cljs.core.next(seq36006__$1);
var G__36009 = cljs.core.first(seq36006__$2);
var seq36006__$3 = cljs.core.next(seq36006__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36007,G__36008,G__36009,seq36006__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36053 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36053 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36054){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36054 = meta36054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36055,meta36054__$1){
var self__ = this;
var _36055__$1 = this;
return (new cljs.core.async.t_cljs$core$async36053(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36054__$1));
}));

(cljs.core.async.t_cljs$core$async36053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36055){
var self__ = this;
var _36055__$1 = this;
return self__.meta36054;
}));

(cljs.core.async.t_cljs$core$async36053.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36053.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async36053.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36053.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36053.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36053.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36053.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36053.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36053.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36054","meta36054",967676063,null)], null);
}));

(cljs.core.async.t_cljs$core$async36053.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36053.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36053");

(cljs.core.async.t_cljs$core$async36053.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36053");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36053.
 */
cljs.core.async.__GT_t_cljs$core$async36053 = (function cljs$core$async$mix_$___GT_t_cljs$core$async36053(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36054){
return (new cljs.core.async.t_cljs$core$async36053(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36054));
});

}

return (new cljs.core.async.t_cljs$core$async36053(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34853__auto___37687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34854__auto__ = (function (){var switch__34654__auto__ = (function (state_36147){
var state_val_36148 = (state_36147[(1)]);
if((state_val_36148 === (7))){
var inst_36105 = (state_36147[(2)]);
var state_36147__$1 = state_36147;
if(cljs.core.truth_(inst_36105)){
var statearr_36149_37688 = state_36147__$1;
(statearr_36149_37688[(1)] = (8));

} else {
var statearr_36150_37689 = state_36147__$1;
(statearr_36150_37689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (20))){
var inst_36098 = (state_36147[(7)]);
var state_36147__$1 = state_36147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36147__$1,(23),out,inst_36098);
} else {
if((state_val_36148 === (1))){
var inst_36081 = calc_state();
var inst_36082 = cljs.core.__destructure_map(inst_36081);
var inst_36083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36082,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36082,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36082,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36086 = inst_36081;
var state_36147__$1 = (function (){var statearr_36155 = state_36147;
(statearr_36155[(8)] = inst_36083);

(statearr_36155[(9)] = inst_36084);

(statearr_36155[(10)] = inst_36086);

(statearr_36155[(11)] = inst_36085);

return statearr_36155;
})();
var statearr_36160_37690 = state_36147__$1;
(statearr_36160_37690[(2)] = null);

(statearr_36160_37690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (24))){
var inst_36089 = (state_36147[(12)]);
var inst_36086 = inst_36089;
var state_36147__$1 = (function (){var statearr_36162 = state_36147;
(statearr_36162[(10)] = inst_36086);

return statearr_36162;
})();
var statearr_36163_37691 = state_36147__$1;
(statearr_36163_37691[(2)] = null);

(statearr_36163_37691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (4))){
var inst_36100 = (state_36147[(13)]);
var inst_36098 = (state_36147[(7)]);
var inst_36097 = (state_36147[(2)]);
var inst_36098__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36097,(0),null);
var inst_36099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36097,(1),null);
var inst_36100__$1 = (inst_36098__$1 == null);
var state_36147__$1 = (function (){var statearr_36164 = state_36147;
(statearr_36164[(14)] = inst_36099);

(statearr_36164[(13)] = inst_36100__$1);

(statearr_36164[(7)] = inst_36098__$1);

return statearr_36164;
})();
if(cljs.core.truth_(inst_36100__$1)){
var statearr_36165_37692 = state_36147__$1;
(statearr_36165_37692[(1)] = (5));

} else {
var statearr_36166_37693 = state_36147__$1;
(statearr_36166_37693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (15))){
var inst_36119 = (state_36147[(15)]);
var inst_36090 = (state_36147[(16)]);
var inst_36119__$1 = cljs.core.empty_QMARK_(inst_36090);
var state_36147__$1 = (function (){var statearr_36167 = state_36147;
(statearr_36167[(15)] = inst_36119__$1);

return statearr_36167;
})();
if(inst_36119__$1){
var statearr_36168_37696 = state_36147__$1;
(statearr_36168_37696[(1)] = (17));

} else {
var statearr_36169_37697 = state_36147__$1;
(statearr_36169_37697[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (21))){
var inst_36089 = (state_36147[(12)]);
var inst_36086 = inst_36089;
var state_36147__$1 = (function (){var statearr_36174 = state_36147;
(statearr_36174[(10)] = inst_36086);

return statearr_36174;
})();
var statearr_36175_37698 = state_36147__$1;
(statearr_36175_37698[(2)] = null);

(statearr_36175_37698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (13))){
var inst_36112 = (state_36147[(2)]);
var inst_36113 = calc_state();
var inst_36086 = inst_36113;
var state_36147__$1 = (function (){var statearr_36179 = state_36147;
(statearr_36179[(17)] = inst_36112);

(statearr_36179[(10)] = inst_36086);

return statearr_36179;
})();
var statearr_36181_37699 = state_36147__$1;
(statearr_36181_37699[(2)] = null);

(statearr_36181_37699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (22))){
var inst_36139 = (state_36147[(2)]);
var state_36147__$1 = state_36147;
var statearr_36182_37700 = state_36147__$1;
(statearr_36182_37700[(2)] = inst_36139);

(statearr_36182_37700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (6))){
var inst_36099 = (state_36147[(14)]);
var inst_36103 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36099,change);
var state_36147__$1 = state_36147;
var statearr_36183_37701 = state_36147__$1;
(statearr_36183_37701[(2)] = inst_36103);

(statearr_36183_37701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (25))){
var state_36147__$1 = state_36147;
var statearr_36184_37702 = state_36147__$1;
(statearr_36184_37702[(2)] = null);

(statearr_36184_37702[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (17))){
var inst_36091 = (state_36147[(18)]);
var inst_36099 = (state_36147[(14)]);
var inst_36121 = (inst_36091.cljs$core$IFn$_invoke$arity$1 ? inst_36091.cljs$core$IFn$_invoke$arity$1(inst_36099) : inst_36091.call(null,inst_36099));
var inst_36122 = cljs.core.not(inst_36121);
var state_36147__$1 = state_36147;
var statearr_36188_37703 = state_36147__$1;
(statearr_36188_37703[(2)] = inst_36122);

(statearr_36188_37703[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (3))){
var inst_36143 = (state_36147[(2)]);
var state_36147__$1 = state_36147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36147__$1,inst_36143);
} else {
if((state_val_36148 === (12))){
var state_36147__$1 = state_36147;
var statearr_36190_37704 = state_36147__$1;
(statearr_36190_37704[(2)] = null);

(statearr_36190_37704[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (2))){
var inst_36086 = (state_36147[(10)]);
var inst_36089 = (state_36147[(12)]);
var inst_36089__$1 = cljs.core.__destructure_map(inst_36086);
var inst_36090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36089__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36091 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36089__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36089__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36147__$1 = (function (){var statearr_36195 = state_36147;
(statearr_36195[(18)] = inst_36091);

(statearr_36195[(12)] = inst_36089__$1);

(statearr_36195[(16)] = inst_36090);

return statearr_36195;
})();
return cljs.core.async.ioc_alts_BANG_(state_36147__$1,(4),inst_36092);
} else {
if((state_val_36148 === (23))){
var inst_36130 = (state_36147[(2)]);
var state_36147__$1 = state_36147;
if(cljs.core.truth_(inst_36130)){
var statearr_36196_37705 = state_36147__$1;
(statearr_36196_37705[(1)] = (24));

} else {
var statearr_36197_37706 = state_36147__$1;
(statearr_36197_37706[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (19))){
var inst_36125 = (state_36147[(2)]);
var state_36147__$1 = state_36147;
var statearr_36198_37707 = state_36147__$1;
(statearr_36198_37707[(2)] = inst_36125);

(statearr_36198_37707[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (11))){
var inst_36099 = (state_36147[(14)]);
var inst_36109 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_36099);
var state_36147__$1 = state_36147;
var statearr_36202_37708 = state_36147__$1;
(statearr_36202_37708[(2)] = inst_36109);

(statearr_36202_37708[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (9))){
var inst_36099 = (state_36147[(14)]);
var inst_36090 = (state_36147[(16)]);
var inst_36116 = (state_36147[(19)]);
var inst_36116__$1 = (inst_36090.cljs$core$IFn$_invoke$arity$1 ? inst_36090.cljs$core$IFn$_invoke$arity$1(inst_36099) : inst_36090.call(null,inst_36099));
var state_36147__$1 = (function (){var statearr_36204 = state_36147;
(statearr_36204[(19)] = inst_36116__$1);

return statearr_36204;
})();
if(cljs.core.truth_(inst_36116__$1)){
var statearr_36205_37709 = state_36147__$1;
(statearr_36205_37709[(1)] = (14));

} else {
var statearr_36206_37710 = state_36147__$1;
(statearr_36206_37710[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (5))){
var inst_36100 = (state_36147[(13)]);
var state_36147__$1 = state_36147;
var statearr_36207_37711 = state_36147__$1;
(statearr_36207_37711[(2)] = inst_36100);

(statearr_36207_37711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (14))){
var inst_36116 = (state_36147[(19)]);
var state_36147__$1 = state_36147;
var statearr_36208_37712 = state_36147__$1;
(statearr_36208_37712[(2)] = inst_36116);

(statearr_36208_37712[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (26))){
var inst_36135 = (state_36147[(2)]);
var state_36147__$1 = state_36147;
var statearr_36210_37713 = state_36147__$1;
(statearr_36210_37713[(2)] = inst_36135);

(statearr_36210_37713[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (16))){
var inst_36127 = (state_36147[(2)]);
var state_36147__$1 = state_36147;
if(cljs.core.truth_(inst_36127)){
var statearr_36211_37714 = state_36147__$1;
(statearr_36211_37714[(1)] = (20));

} else {
var statearr_36212_37715 = state_36147__$1;
(statearr_36212_37715[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (10))){
var inst_36141 = (state_36147[(2)]);
var state_36147__$1 = state_36147;
var statearr_36213_37716 = state_36147__$1;
(statearr_36213_37716[(2)] = inst_36141);

(statearr_36213_37716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (18))){
var inst_36119 = (state_36147[(15)]);
var state_36147__$1 = state_36147;
var statearr_36214_37717 = state_36147__$1;
(statearr_36214_37717[(2)] = inst_36119);

(statearr_36214_37717[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (8))){
var inst_36098 = (state_36147[(7)]);
var inst_36107 = (inst_36098 == null);
var state_36147__$1 = state_36147;
if(cljs.core.truth_(inst_36107)){
var statearr_36215_37718 = state_36147__$1;
(statearr_36215_37718[(1)] = (11));

} else {
var statearr_36216_37719 = state_36147__$1;
(statearr_36216_37719[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__34655__auto__ = null;
var cljs$core$async$mix_$_state_machine__34655__auto____0 = (function (){
var statearr_36224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36224[(0)] = cljs$core$async$mix_$_state_machine__34655__auto__);

(statearr_36224[(1)] = (1));

return statearr_36224;
});
var cljs$core$async$mix_$_state_machine__34655__auto____1 = (function (state_36147){
while(true){
var ret_value__34656__auto__ = (function (){try{while(true){
var result__34657__auto__ = switch__34654__auto__(state_36147);
if(cljs.core.keyword_identical_QMARK_(result__34657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34657__auto__;
}
break;
}
}catch (e36226){var ex__34658__auto__ = e36226;
var statearr_36227_37721 = state_36147;
(statearr_36227_37721[(2)] = ex__34658__auto__);


if(cljs.core.seq((state_36147[(4)]))){
var statearr_36228_37723 = state_36147;
(statearr_36228_37723[(1)] = cljs.core.first((state_36147[(4)])));

} else {
throw ex__34658__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37727 = state_36147;
state_36147 = G__37727;
continue;
} else {
return ret_value__34656__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34655__auto__ = function(state_36147){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34655__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34655__auto____1.call(this,state_36147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34655__auto____0;
cljs$core$async$mix_$_state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34655__auto____1;
return cljs$core$async$mix_$_state_machine__34655__auto__;
})()
})();
var state__34855__auto__ = (function (){var statearr_36229 = f__34854__auto__();
(statearr_36229[(6)] = c__34853__auto___37687);

return statearr_36229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34855__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_37728 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_37728(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_37729 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_37729(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_37734 = (function() {
var G__37735 = null;
var G__37735__1 = (function (p){
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
var G__37735__2 = (function (p,v){
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
G__37735 = function(p,v){
switch(arguments.length){
case 1:
return G__37735__1.call(this,p);
case 2:
return G__37735__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37735.cljs$core$IFn$_invoke$arity$1 = G__37735__1;
G__37735.cljs$core$IFn$_invoke$arity$2 = G__37735__2;
return G__37735;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36260 = arguments.length;
switch (G__36260) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37734(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37734(p,v);
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
var G__36268 = arguments.length;
switch (G__36268) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__36265_SHARP_){
if(cljs.core.truth_((p1__36265_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36265_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__36265_SHARP_.call(null,topic)))){
return p1__36265_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36265_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36273 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36273 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36274){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36274 = meta36274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36275,meta36274__$1){
var self__ = this;
var _36275__$1 = this;
return (new cljs.core.async.t_cljs$core$async36273(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36274__$1));
}));

(cljs.core.async.t_cljs$core$async36273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36275){
var self__ = this;
var _36275__$1 = this;
return self__.meta36274;
}));

(cljs.core.async.t_cljs$core$async36273.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36273.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36273.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36273.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async36273.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async36273.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async36273.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async36273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36274","meta36274",579413488,null)], null);
}));

(cljs.core.async.t_cljs$core$async36273.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36273");

(cljs.core.async.t_cljs$core$async36273.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36273");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36273.
 */
cljs.core.async.__GT_t_cljs$core$async36273 = (function cljs$core$async$__GT_t_cljs$core$async36273(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36274){
return (new cljs.core.async.t_cljs$core$async36273(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36274));
});

}

return (new cljs.core.async.t_cljs$core$async36273(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34853__auto___37746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34854__auto__ = (function (){var switch__34654__auto__ = (function (state_36367){
var state_val_36368 = (state_36367[(1)]);
if((state_val_36368 === (7))){
var inst_36359 = (state_36367[(2)]);
var state_36367__$1 = state_36367;
var statearr_36369_37747 = state_36367__$1;
(statearr_36369_37747[(2)] = inst_36359);

(statearr_36369_37747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36368 === (20))){
var state_36367__$1 = state_36367;
var statearr_36370_37749 = state_36367__$1;
(statearr_36370_37749[(2)] = null);

(statearr_36370_37749[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36368 === (1))){
var state_36367__$1 = state_36367;
var statearr_36372_37751 = state_36367__$1;
(statearr_36372_37751[(2)] = null);

(statearr_36372_37751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36368 === (24))){
var inst_36342 = (state_36367[(7)]);
var inst_36351 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_36342);
var state_36367__$1 = state_36367;
var statearr_36373_37752 = state_36367__$1;
(statearr_36373_37752[(2)] = inst_36351);

(statearr_36373_37752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36368 === (4))){
var inst_36294 = (state_36367[(8)]);
var inst_36294__$1 = (state_36367[(2)]);
var inst_36295 = (inst_36294__$1 == null);
var state_36367__$1 = (function (){var statearr_36374 = state_36367;
(statearr_36374[(8)] = inst_36294__$1);

return statearr_36374;
})();
if(cljs.core.truth_(inst_36295)){
var statearr_36375_37753 = state_36367__$1;
(statearr_36375_37753[(1)] = (5));

} else {
var statearr_36376_37754 = state_36367__$1;
(statearr_36376_37754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36368 === (15))){
var inst_36336 = (state_36367[(2)]);
var state_36367__$1 = state_36367;
var statearr_36377_37755 = state_36367__$1;
(statearr_36377_37755[(2)] = inst_36336);

(statearr_36377_37755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36368 === (21))){
var inst_36356 = (state_36367[(2)]);
var state_36367__$1 = (function (){var statearr_36379 = state_36367;
(statearr_36379[(9)] = inst_36356);

return statearr_36379;
})();
var statearr_36381_37756 = state_36367__$1;
(statearr_36381_37756[(2)] = null);

(statearr_36381_37756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36368 === (13))){
var inst_36318 = (state_36367[(10)]);
var inst_36320 = cljs.core.chunked_seq_QMARK_(inst_36318);
var state_36367__$1 = state_36367;
if(inst_36320){
var statearr_36382_37757 = state_36367__$1;
(statearr_36382_37757[(1)] = (16));

} else {
var statearr_36383_37758 = state_36367__$1;
(statearr_36383_37758[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36368 === (22))){
var inst_36348 = (state_36367[(2)]);
var state_36367__$1 = state_36367;
if(cljs.core.truth_(inst_36348)){
var statearr_36384_37762 = state_36367__$1;
(statearr_36384_37762[(1)] = (23));

} else {
var statearr_36385_37763 = state_36367__$1;
(statearr_36385_37763[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36368 === (6))){
var inst_36342 = (state_36367[(7)]);
var inst_36294 = (state_36367[(8)]);
var inst_36344 = (state_36367[(11)]);
var inst_36342__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_36294) : topic_fn.call(null,inst_36294));
var inst_36343 = cljs.core.deref(mults);
var inst_36344__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36343,inst_36342__$1);
var state_36367__$1 = (function (){var statearr_36386 = state_36367;
(statearr_36386[(7)] = inst_36342__$1);

(statearr_36386[(11)] = inst_36344__$1);

return statearr_36386;
})();
if(cljs.core.truth_(inst_36344__$1)){
var statearr_36387_37764 = state_36367__$1;
(statearr_36387_37764[(1)] = (19));

} else {
var statearr_36388_37765 = state_36367__$1;
(statearr_36388_37765[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36368 === (25))){
var inst_36353 = (state_36367[(2)]);
var state_36367__$1 = state_36367;
var statearr_36389_37766 = state_36367__$1;
(statearr_36389_37766[(2)] = inst_36353);

(statearr_36389_37766[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36368 === (17))){
var inst_36318 = (state_36367[(10)]);
var inst_36327 = cljs.core.first(inst_36318);
var inst_36328 = cljs.core.async.muxch_STAR_(inst_36327);
var inst_36329 = cljs.core.async.close_BANG_(inst_36328);
var inst_36330 = cljs.core.next(inst_36318);
var inst_36304 = inst_36330;
var inst_36305 = null;
var inst_36306 = (0);
var inst_36307 = (0);
var state_36367__$1 = (function (){var statearr_36390 = state_36367;
(statearr_36390[(12)] = inst_36305);

(statearr_36390[(13)] = inst_36307);

(statearr_36390[(14)] = inst_36306);

(statearr_36390[(15)] = inst_36304);

(statearr_36390[(16)] = inst_36329);

return statearr_36390;
})();
var statearr_36391_37767 = state_36367__$1;
(statearr_36391_37767[(2)] = null);

(statearr_36391_37767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36368 === (3))){
var inst_36361 = (state_36367[(2)]);
var state_36367__$1 = state_36367;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36367__$1,inst_36361);
} else {
if((state_val_36368 === (12))){
var inst_36338 = (state_36367[(2)]);
var state_36367__$1 = state_36367;
var statearr_36392_37768 = state_36367__$1;
(statearr_36392_37768[(2)] = inst_36338);

(statearr_36392_37768[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36368 === (2))){
var state_36367__$1 = state_36367;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36367__$1,(4),ch);
} else {
if((state_val_36368 === (23))){
var state_36367__$1 = state_36367;
var statearr_36393_37769 = state_36367__$1;
(statearr_36393_37769[(2)] = null);

(statearr_36393_37769[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36368 === (19))){
var inst_36294 = (state_36367[(8)]);
var inst_36344 = (state_36367[(11)]);
var inst_36346 = cljs.core.async.muxch_STAR_(inst_36344);
var state_36367__$1 = state_36367;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36367__$1,(22),inst_36346,inst_36294);
} else {
if((state_val_36368 === (11))){
var inst_36318 = (state_36367[(10)]);
var inst_36304 = (state_36367[(15)]);
var inst_36318__$1 = cljs.core.seq(inst_36304);
var state_36367__$1 = (function (){var statearr_36394 = state_36367;
(statearr_36394[(10)] = inst_36318__$1);

return statearr_36394;
})();
if(inst_36318__$1){
var statearr_36395_37770 = state_36367__$1;
(statearr_36395_37770[(1)] = (13));

} else {
var statearr_36396_37771 = state_36367__$1;
(statearr_36396_37771[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36368 === (9))){
var inst_36340 = (state_36367[(2)]);
var state_36367__$1 = state_36367;
var statearr_36397_37772 = state_36367__$1;
(statearr_36397_37772[(2)] = inst_36340);

(statearr_36397_37772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36368 === (5))){
var inst_36301 = cljs.core.deref(mults);
var inst_36302 = cljs.core.vals(inst_36301);
var inst_36303 = cljs.core.seq(inst_36302);
var inst_36304 = inst_36303;
var inst_36305 = null;
var inst_36306 = (0);
var inst_36307 = (0);
var state_36367__$1 = (function (){var statearr_36398 = state_36367;
(statearr_36398[(12)] = inst_36305);

(statearr_36398[(13)] = inst_36307);

(statearr_36398[(14)] = inst_36306);

(statearr_36398[(15)] = inst_36304);

return statearr_36398;
})();
var statearr_36399_37773 = state_36367__$1;
(statearr_36399_37773[(2)] = null);

(statearr_36399_37773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36368 === (14))){
var state_36367__$1 = state_36367;
var statearr_36403_37774 = state_36367__$1;
(statearr_36403_37774[(2)] = null);

(statearr_36403_37774[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36368 === (16))){
var inst_36318 = (state_36367[(10)]);
var inst_36322 = cljs.core.chunk_first(inst_36318);
var inst_36323 = cljs.core.chunk_rest(inst_36318);
var inst_36324 = cljs.core.count(inst_36322);
var inst_36304 = inst_36323;
var inst_36305 = inst_36322;
var inst_36306 = inst_36324;
var inst_36307 = (0);
var state_36367__$1 = (function (){var statearr_36404 = state_36367;
(statearr_36404[(12)] = inst_36305);

(statearr_36404[(13)] = inst_36307);

(statearr_36404[(14)] = inst_36306);

(statearr_36404[(15)] = inst_36304);

return statearr_36404;
})();
var statearr_36405_37775 = state_36367__$1;
(statearr_36405_37775[(2)] = null);

(statearr_36405_37775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36368 === (10))){
var inst_36305 = (state_36367[(12)]);
var inst_36307 = (state_36367[(13)]);
var inst_36306 = (state_36367[(14)]);
var inst_36304 = (state_36367[(15)]);
var inst_36312 = cljs.core._nth(inst_36305,inst_36307);
var inst_36313 = cljs.core.async.muxch_STAR_(inst_36312);
var inst_36314 = cljs.core.async.close_BANG_(inst_36313);
var inst_36315 = (inst_36307 + (1));
var tmp36400 = inst_36305;
var tmp36401 = inst_36306;
var tmp36402 = inst_36304;
var inst_36304__$1 = tmp36402;
var inst_36305__$1 = tmp36400;
var inst_36306__$1 = tmp36401;
var inst_36307__$1 = inst_36315;
var state_36367__$1 = (function (){var statearr_36408 = state_36367;
(statearr_36408[(12)] = inst_36305__$1);

(statearr_36408[(13)] = inst_36307__$1);

(statearr_36408[(14)] = inst_36306__$1);

(statearr_36408[(15)] = inst_36304__$1);

(statearr_36408[(17)] = inst_36314);

return statearr_36408;
})();
var statearr_36409_37776 = state_36367__$1;
(statearr_36409_37776[(2)] = null);

(statearr_36409_37776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36368 === (18))){
var inst_36333 = (state_36367[(2)]);
var state_36367__$1 = state_36367;
var statearr_36410_37777 = state_36367__$1;
(statearr_36410_37777[(2)] = inst_36333);

(statearr_36410_37777[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36368 === (8))){
var inst_36307 = (state_36367[(13)]);
var inst_36306 = (state_36367[(14)]);
var inst_36309 = (inst_36307 < inst_36306);
var inst_36310 = inst_36309;
var state_36367__$1 = state_36367;
if(cljs.core.truth_(inst_36310)){
var statearr_36411_37778 = state_36367__$1;
(statearr_36411_37778[(1)] = (10));

} else {
var statearr_36412_37779 = state_36367__$1;
(statearr_36412_37779[(1)] = (11));

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
var cljs$core$async$state_machine__34655__auto__ = null;
var cljs$core$async$state_machine__34655__auto____0 = (function (){
var statearr_36414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36414[(0)] = cljs$core$async$state_machine__34655__auto__);

(statearr_36414[(1)] = (1));

return statearr_36414;
});
var cljs$core$async$state_machine__34655__auto____1 = (function (state_36367){
while(true){
var ret_value__34656__auto__ = (function (){try{while(true){
var result__34657__auto__ = switch__34654__auto__(state_36367);
if(cljs.core.keyword_identical_QMARK_(result__34657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34657__auto__;
}
break;
}
}catch (e36416){var ex__34658__auto__ = e36416;
var statearr_36417_37780 = state_36367;
(statearr_36417_37780[(2)] = ex__34658__auto__);


if(cljs.core.seq((state_36367[(4)]))){
var statearr_36418_37781 = state_36367;
(statearr_36418_37781[(1)] = cljs.core.first((state_36367[(4)])));

} else {
throw ex__34658__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37783 = state_36367;
state_36367 = G__37783;
continue;
} else {
return ret_value__34656__auto__;
}
break;
}
});
cljs$core$async$state_machine__34655__auto__ = function(state_36367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34655__auto____1.call(this,state_36367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34655__auto____0;
cljs$core$async$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34655__auto____1;
return cljs$core$async$state_machine__34655__auto__;
})()
})();
var state__34855__auto__ = (function (){var statearr_36419 = f__34854__auto__();
(statearr_36419[(6)] = c__34853__auto___37746);

return statearr_36419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34855__auto__);
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
var G__36423 = arguments.length;
switch (G__36423) {
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
var G__36425 = arguments.length;
switch (G__36425) {
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
var G__36429 = arguments.length;
switch (G__36429) {
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
var c__34853__auto___37792 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34854__auto__ = (function (){var switch__34654__auto__ = (function (state_36484){
var state_val_36485 = (state_36484[(1)]);
if((state_val_36485 === (7))){
var state_36484__$1 = state_36484;
var statearr_36486_37815 = state_36484__$1;
(statearr_36486_37815[(2)] = null);

(statearr_36486_37815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (1))){
var state_36484__$1 = state_36484;
var statearr_36487_37818 = state_36484__$1;
(statearr_36487_37818[(2)] = null);

(statearr_36487_37818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (4))){
var inst_36440 = (state_36484[(7)]);
var inst_36439 = (state_36484[(8)]);
var inst_36442 = (inst_36440 < inst_36439);
var state_36484__$1 = state_36484;
if(cljs.core.truth_(inst_36442)){
var statearr_36488_37823 = state_36484__$1;
(statearr_36488_37823[(1)] = (6));

} else {
var statearr_36489_37824 = state_36484__$1;
(statearr_36489_37824[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (15))){
var inst_36470 = (state_36484[(9)]);
var inst_36475 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36470);
var state_36484__$1 = state_36484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36484__$1,(17),out,inst_36475);
} else {
if((state_val_36485 === (13))){
var inst_36470 = (state_36484[(9)]);
var inst_36470__$1 = (state_36484[(2)]);
var inst_36471 = cljs.core.some(cljs.core.nil_QMARK_,inst_36470__$1);
var state_36484__$1 = (function (){var statearr_36503 = state_36484;
(statearr_36503[(9)] = inst_36470__$1);

return statearr_36503;
})();
if(cljs.core.truth_(inst_36471)){
var statearr_36510_37829 = state_36484__$1;
(statearr_36510_37829[(1)] = (14));

} else {
var statearr_36511_37830 = state_36484__$1;
(statearr_36511_37830[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (6))){
var state_36484__$1 = state_36484;
var statearr_36512_37831 = state_36484__$1;
(statearr_36512_37831[(2)] = null);

(statearr_36512_37831[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (17))){
var inst_36477 = (state_36484[(2)]);
var state_36484__$1 = (function (){var statearr_36524 = state_36484;
(statearr_36524[(10)] = inst_36477);

return statearr_36524;
})();
var statearr_36525_37832 = state_36484__$1;
(statearr_36525_37832[(2)] = null);

(statearr_36525_37832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (3))){
var inst_36482 = (state_36484[(2)]);
var state_36484__$1 = state_36484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36484__$1,inst_36482);
} else {
if((state_val_36485 === (12))){
var _ = (function (){var statearr_36529 = state_36484;
(statearr_36529[(4)] = cljs.core.rest((state_36484[(4)])));

return statearr_36529;
})();
var state_36484__$1 = state_36484;
var ex36520 = (state_36484__$1[(2)]);
var statearr_36530_37833 = state_36484__$1;
(statearr_36530_37833[(5)] = ex36520);


if((ex36520 instanceof Object)){
var statearr_36531_37834 = state_36484__$1;
(statearr_36531_37834[(1)] = (11));

(statearr_36531_37834[(5)] = null);

} else {
throw ex36520;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (2))){
var inst_36437 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36439 = cnt;
var inst_36440 = (0);
var state_36484__$1 = (function (){var statearr_36536 = state_36484;
(statearr_36536[(7)] = inst_36440);

(statearr_36536[(8)] = inst_36439);

(statearr_36536[(11)] = inst_36437);

return statearr_36536;
})();
var statearr_36537_37835 = state_36484__$1;
(statearr_36537_37835[(2)] = null);

(statearr_36537_37835[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (11))){
var inst_36446 = (state_36484[(2)]);
var inst_36447 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36484__$1 = (function (){var statearr_36538 = state_36484;
(statearr_36538[(12)] = inst_36446);

return statearr_36538;
})();
var statearr_36539_37841 = state_36484__$1;
(statearr_36539_37841[(2)] = inst_36447);

(statearr_36539_37841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (9))){
var inst_36440 = (state_36484[(7)]);
var _ = (function (){var statearr_36540 = state_36484;
(statearr_36540[(4)] = cljs.core.cons((12),(state_36484[(4)])));

return statearr_36540;
})();
var inst_36453 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36440) : chs__$1.call(null,inst_36440));
var inst_36454 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36440) : done.call(null,inst_36440));
var inst_36455 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36453,inst_36454);
var ___$1 = (function (){var statearr_36541 = state_36484;
(statearr_36541[(4)] = cljs.core.rest((state_36484[(4)])));

return statearr_36541;
})();
var state_36484__$1 = state_36484;
var statearr_36542_37847 = state_36484__$1;
(statearr_36542_37847[(2)] = inst_36455);

(statearr_36542_37847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (5))){
var inst_36468 = (state_36484[(2)]);
var state_36484__$1 = (function (){var statearr_36544 = state_36484;
(statearr_36544[(13)] = inst_36468);

return statearr_36544;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36484__$1,(13),dchan);
} else {
if((state_val_36485 === (14))){
var inst_36473 = cljs.core.async.close_BANG_(out);
var state_36484__$1 = state_36484;
var statearr_36548_37849 = state_36484__$1;
(statearr_36548_37849[(2)] = inst_36473);

(statearr_36548_37849[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (16))){
var inst_36480 = (state_36484[(2)]);
var state_36484__$1 = state_36484;
var statearr_36551_37854 = state_36484__$1;
(statearr_36551_37854[(2)] = inst_36480);

(statearr_36551_37854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (10))){
var inst_36440 = (state_36484[(7)]);
var inst_36458 = (state_36484[(2)]);
var inst_36462 = (inst_36440 + (1));
var inst_36440__$1 = inst_36462;
var state_36484__$1 = (function (){var statearr_36552 = state_36484;
(statearr_36552[(7)] = inst_36440__$1);

(statearr_36552[(14)] = inst_36458);

return statearr_36552;
})();
var statearr_36553_37856 = state_36484__$1;
(statearr_36553_37856[(2)] = null);

(statearr_36553_37856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (8))){
var inst_36466 = (state_36484[(2)]);
var state_36484__$1 = state_36484;
var statearr_36555_37857 = state_36484__$1;
(statearr_36555_37857[(2)] = inst_36466);

(statearr_36555_37857[(1)] = (5));


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
var cljs$core$async$state_machine__34655__auto__ = null;
var cljs$core$async$state_machine__34655__auto____0 = (function (){
var statearr_36557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36557[(0)] = cljs$core$async$state_machine__34655__auto__);

(statearr_36557[(1)] = (1));

return statearr_36557;
});
var cljs$core$async$state_machine__34655__auto____1 = (function (state_36484){
while(true){
var ret_value__34656__auto__ = (function (){try{while(true){
var result__34657__auto__ = switch__34654__auto__(state_36484);
if(cljs.core.keyword_identical_QMARK_(result__34657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34657__auto__;
}
break;
}
}catch (e36558){var ex__34658__auto__ = e36558;
var statearr_36559_37859 = state_36484;
(statearr_36559_37859[(2)] = ex__34658__auto__);


if(cljs.core.seq((state_36484[(4)]))){
var statearr_36560_37860 = state_36484;
(statearr_36560_37860[(1)] = cljs.core.first((state_36484[(4)])));

} else {
throw ex__34658__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37861 = state_36484;
state_36484 = G__37861;
continue;
} else {
return ret_value__34656__auto__;
}
break;
}
});
cljs$core$async$state_machine__34655__auto__ = function(state_36484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34655__auto____1.call(this,state_36484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34655__auto____0;
cljs$core$async$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34655__auto____1;
return cljs$core$async$state_machine__34655__auto__;
})()
})();
var state__34855__auto__ = (function (){var statearr_36561 = f__34854__auto__();
(statearr_36561[(6)] = c__34853__auto___37792);

return statearr_36561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34855__auto__);
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
var G__36564 = arguments.length;
switch (G__36564) {
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
var c__34853__auto___37868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34854__auto__ = (function (){var switch__34654__auto__ = (function (state_36598){
var state_val_36599 = (state_36598[(1)]);
if((state_val_36599 === (7))){
var inst_36576 = (state_36598[(7)]);
var inst_36575 = (state_36598[(8)]);
var inst_36575__$1 = (state_36598[(2)]);
var inst_36576__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36575__$1,(0),null);
var inst_36577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36575__$1,(1),null);
var inst_36578 = (inst_36576__$1 == null);
var state_36598__$1 = (function (){var statearr_36602 = state_36598;
(statearr_36602[(9)] = inst_36577);

(statearr_36602[(7)] = inst_36576__$1);

(statearr_36602[(8)] = inst_36575__$1);

return statearr_36602;
})();
if(cljs.core.truth_(inst_36578)){
var statearr_36606_37869 = state_36598__$1;
(statearr_36606_37869[(1)] = (8));

} else {
var statearr_36607_37870 = state_36598__$1;
(statearr_36607_37870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36599 === (1))){
var inst_36565 = cljs.core.vec(chs);
var inst_36566 = inst_36565;
var state_36598__$1 = (function (){var statearr_36608 = state_36598;
(statearr_36608[(10)] = inst_36566);

return statearr_36608;
})();
var statearr_36609_37871 = state_36598__$1;
(statearr_36609_37871[(2)] = null);

(statearr_36609_37871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36599 === (4))){
var inst_36566 = (state_36598[(10)]);
var state_36598__$1 = state_36598;
return cljs.core.async.ioc_alts_BANG_(state_36598__$1,(7),inst_36566);
} else {
if((state_val_36599 === (6))){
var inst_36594 = (state_36598[(2)]);
var state_36598__$1 = state_36598;
var statearr_36610_37872 = state_36598__$1;
(statearr_36610_37872[(2)] = inst_36594);

(statearr_36610_37872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36599 === (3))){
var inst_36596 = (state_36598[(2)]);
var state_36598__$1 = state_36598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36598__$1,inst_36596);
} else {
if((state_val_36599 === (2))){
var inst_36566 = (state_36598[(10)]);
var inst_36568 = cljs.core.count(inst_36566);
var inst_36569 = (inst_36568 > (0));
var state_36598__$1 = state_36598;
if(cljs.core.truth_(inst_36569)){
var statearr_36612_37878 = state_36598__$1;
(statearr_36612_37878[(1)] = (4));

} else {
var statearr_36613_37880 = state_36598__$1;
(statearr_36613_37880[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36599 === (11))){
var inst_36566 = (state_36598[(10)]);
var inst_36587 = (state_36598[(2)]);
var tmp36611 = inst_36566;
var inst_36566__$1 = tmp36611;
var state_36598__$1 = (function (){var statearr_36614 = state_36598;
(statearr_36614[(10)] = inst_36566__$1);

(statearr_36614[(11)] = inst_36587);

return statearr_36614;
})();
var statearr_36615_37886 = state_36598__$1;
(statearr_36615_37886[(2)] = null);

(statearr_36615_37886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36599 === (9))){
var inst_36576 = (state_36598[(7)]);
var state_36598__$1 = state_36598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36598__$1,(11),out,inst_36576);
} else {
if((state_val_36599 === (5))){
var inst_36592 = cljs.core.async.close_BANG_(out);
var state_36598__$1 = state_36598;
var statearr_36616_37887 = state_36598__$1;
(statearr_36616_37887[(2)] = inst_36592);

(statearr_36616_37887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36599 === (10))){
var inst_36590 = (state_36598[(2)]);
var state_36598__$1 = state_36598;
var statearr_36617_37888 = state_36598__$1;
(statearr_36617_37888[(2)] = inst_36590);

(statearr_36617_37888[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36599 === (8))){
var inst_36577 = (state_36598[(9)]);
var inst_36576 = (state_36598[(7)]);
var inst_36575 = (state_36598[(8)]);
var inst_36566 = (state_36598[(10)]);
var inst_36581 = (function (){var cs = inst_36566;
var vec__36571 = inst_36575;
var v = inst_36576;
var c = inst_36577;
return (function (p1__36562_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36562_SHARP_);
});
})();
var inst_36583 = cljs.core.filterv(inst_36581,inst_36566);
var inst_36566__$1 = inst_36583;
var state_36598__$1 = (function (){var statearr_36622 = state_36598;
(statearr_36622[(10)] = inst_36566__$1);

return statearr_36622;
})();
var statearr_36623_37894 = state_36598__$1;
(statearr_36623_37894[(2)] = null);

(statearr_36623_37894[(1)] = (2));


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
var cljs$core$async$state_machine__34655__auto__ = null;
var cljs$core$async$state_machine__34655__auto____0 = (function (){
var statearr_36625 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36625[(0)] = cljs$core$async$state_machine__34655__auto__);

(statearr_36625[(1)] = (1));

return statearr_36625;
});
var cljs$core$async$state_machine__34655__auto____1 = (function (state_36598){
while(true){
var ret_value__34656__auto__ = (function (){try{while(true){
var result__34657__auto__ = switch__34654__auto__(state_36598);
if(cljs.core.keyword_identical_QMARK_(result__34657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34657__auto__;
}
break;
}
}catch (e36626){var ex__34658__auto__ = e36626;
var statearr_36627_37899 = state_36598;
(statearr_36627_37899[(2)] = ex__34658__auto__);


if(cljs.core.seq((state_36598[(4)]))){
var statearr_36628_37900 = state_36598;
(statearr_36628_37900[(1)] = cljs.core.first((state_36598[(4)])));

} else {
throw ex__34658__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37901 = state_36598;
state_36598 = G__37901;
continue;
} else {
return ret_value__34656__auto__;
}
break;
}
});
cljs$core$async$state_machine__34655__auto__ = function(state_36598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34655__auto____1.call(this,state_36598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34655__auto____0;
cljs$core$async$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34655__auto____1;
return cljs$core$async$state_machine__34655__auto__;
})()
})();
var state__34855__auto__ = (function (){var statearr_36631 = f__34854__auto__();
(statearr_36631[(6)] = c__34853__auto___37868);

return statearr_36631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34855__auto__);
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
var G__36634 = arguments.length;
switch (G__36634) {
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
var c__34853__auto___37909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34854__auto__ = (function (){var switch__34654__auto__ = (function (state_36662){
var state_val_36663 = (state_36662[(1)]);
if((state_val_36663 === (7))){
var inst_36644 = (state_36662[(7)]);
var inst_36644__$1 = (state_36662[(2)]);
var inst_36645 = (inst_36644__$1 == null);
var inst_36646 = cljs.core.not(inst_36645);
var state_36662__$1 = (function (){var statearr_36664 = state_36662;
(statearr_36664[(7)] = inst_36644__$1);

return statearr_36664;
})();
if(inst_36646){
var statearr_36665_37914 = state_36662__$1;
(statearr_36665_37914[(1)] = (8));

} else {
var statearr_36666_37915 = state_36662__$1;
(statearr_36666_37915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (1))){
var inst_36639 = (0);
var state_36662__$1 = (function (){var statearr_36667 = state_36662;
(statearr_36667[(8)] = inst_36639);

return statearr_36667;
})();
var statearr_36668_37916 = state_36662__$1;
(statearr_36668_37916[(2)] = null);

(statearr_36668_37916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (4))){
var state_36662__$1 = state_36662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36662__$1,(7),ch);
} else {
if((state_val_36663 === (6))){
var inst_36657 = (state_36662[(2)]);
var state_36662__$1 = state_36662;
var statearr_36669_37917 = state_36662__$1;
(statearr_36669_37917[(2)] = inst_36657);

(statearr_36669_37917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (3))){
var inst_36659 = (state_36662[(2)]);
var inst_36660 = cljs.core.async.close_BANG_(out);
var state_36662__$1 = (function (){var statearr_36670 = state_36662;
(statearr_36670[(9)] = inst_36659);

return statearr_36670;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36662__$1,inst_36660);
} else {
if((state_val_36663 === (2))){
var inst_36639 = (state_36662[(8)]);
var inst_36641 = (inst_36639 < n);
var state_36662__$1 = state_36662;
if(cljs.core.truth_(inst_36641)){
var statearr_36671_37922 = state_36662__$1;
(statearr_36671_37922[(1)] = (4));

} else {
var statearr_36672_37923 = state_36662__$1;
(statearr_36672_37923[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (11))){
var inst_36639 = (state_36662[(8)]);
var inst_36649 = (state_36662[(2)]);
var inst_36650 = (inst_36639 + (1));
var inst_36639__$1 = inst_36650;
var state_36662__$1 = (function (){var statearr_36677 = state_36662;
(statearr_36677[(8)] = inst_36639__$1);

(statearr_36677[(10)] = inst_36649);

return statearr_36677;
})();
var statearr_36678_37924 = state_36662__$1;
(statearr_36678_37924[(2)] = null);

(statearr_36678_37924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (9))){
var state_36662__$1 = state_36662;
var statearr_36679_37925 = state_36662__$1;
(statearr_36679_37925[(2)] = null);

(statearr_36679_37925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (5))){
var state_36662__$1 = state_36662;
var statearr_36680_37926 = state_36662__$1;
(statearr_36680_37926[(2)] = null);

(statearr_36680_37926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (10))){
var inst_36654 = (state_36662[(2)]);
var state_36662__$1 = state_36662;
var statearr_36681_37927 = state_36662__$1;
(statearr_36681_37927[(2)] = inst_36654);

(statearr_36681_37927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (8))){
var inst_36644 = (state_36662[(7)]);
var state_36662__$1 = state_36662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36662__$1,(11),out,inst_36644);
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
var cljs$core$async$state_machine__34655__auto__ = null;
var cljs$core$async$state_machine__34655__auto____0 = (function (){
var statearr_36686 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36686[(0)] = cljs$core$async$state_machine__34655__auto__);

(statearr_36686[(1)] = (1));

return statearr_36686;
});
var cljs$core$async$state_machine__34655__auto____1 = (function (state_36662){
while(true){
var ret_value__34656__auto__ = (function (){try{while(true){
var result__34657__auto__ = switch__34654__auto__(state_36662);
if(cljs.core.keyword_identical_QMARK_(result__34657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34657__auto__;
}
break;
}
}catch (e36687){var ex__34658__auto__ = e36687;
var statearr_36688_37932 = state_36662;
(statearr_36688_37932[(2)] = ex__34658__auto__);


if(cljs.core.seq((state_36662[(4)]))){
var statearr_36689_37933 = state_36662;
(statearr_36689_37933[(1)] = cljs.core.first((state_36662[(4)])));

} else {
throw ex__34658__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37938 = state_36662;
state_36662 = G__37938;
continue;
} else {
return ret_value__34656__auto__;
}
break;
}
});
cljs$core$async$state_machine__34655__auto__ = function(state_36662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34655__auto____1.call(this,state_36662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34655__auto____0;
cljs$core$async$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34655__auto____1;
return cljs$core$async$state_machine__34655__auto__;
})()
})();
var state__34855__auto__ = (function (){var statearr_36690 = f__34854__auto__();
(statearr_36690[(6)] = c__34853__auto___37909);

return statearr_36690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34855__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36692 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36692 = (function (f,ch,meta36693){
this.f = f;
this.ch = ch;
this.meta36693 = meta36693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36694,meta36693__$1){
var self__ = this;
var _36694__$1 = this;
return (new cljs.core.async.t_cljs$core$async36692(self__.f,self__.ch,meta36693__$1));
}));

(cljs.core.async.t_cljs$core$async36692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36694){
var self__ = this;
var _36694__$1 = this;
return self__.meta36693;
}));

(cljs.core.async.t_cljs$core$async36692.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36692.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36692.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36692.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36692.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36697 = (function (f,ch,meta36693,_,fn1,meta36698){
this.f = f;
this.ch = ch;
this.meta36693 = meta36693;
this._ = _;
this.fn1 = fn1;
this.meta36698 = meta36698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36699,meta36698__$1){
var self__ = this;
var _36699__$1 = this;
return (new cljs.core.async.t_cljs$core$async36697(self__.f,self__.ch,self__.meta36693,self__._,self__.fn1,meta36698__$1));
}));

(cljs.core.async.t_cljs$core$async36697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36699){
var self__ = this;
var _36699__$1 = this;
return self__.meta36698;
}));

(cljs.core.async.t_cljs$core$async36697.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36697.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36691_SHARP_){
var G__36703 = (((p1__36691_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36691_SHARP_) : self__.f.call(null,p1__36691_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36703) : f1.call(null,G__36703));
});
}));

(cljs.core.async.t_cljs$core$async36697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36693","meta36693",1342194991,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36692","cljs.core.async/t_cljs$core$async36692",-1796248622,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36698","meta36698",-1519770975,null)], null);
}));

(cljs.core.async.t_cljs$core$async36697.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36697");

(cljs.core.async.t_cljs$core$async36697.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36697");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36697.
 */
cljs.core.async.__GT_t_cljs$core$async36697 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36697(f__$1,ch__$1,meta36693__$1,___$2,fn1__$1,meta36698){
return (new cljs.core.async.t_cljs$core$async36697(f__$1,ch__$1,meta36693__$1,___$2,fn1__$1,meta36698));
});

}

return (new cljs.core.async.t_cljs$core$async36697(self__.f,self__.ch,self__.meta36693,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36704 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36704) : self__.f.call(null,G__36704));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36692.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36692.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36693","meta36693",1342194991,null)], null);
}));

(cljs.core.async.t_cljs$core$async36692.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36692");

(cljs.core.async.t_cljs$core$async36692.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36692");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36692.
 */
cljs.core.async.__GT_t_cljs$core$async36692 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36692(f__$1,ch__$1,meta36693){
return (new cljs.core.async.t_cljs$core$async36692(f__$1,ch__$1,meta36693));
});

}

return (new cljs.core.async.t_cljs$core$async36692(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36705 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36705 = (function (f,ch,meta36706){
this.f = f;
this.ch = ch;
this.meta36706 = meta36706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36707,meta36706__$1){
var self__ = this;
var _36707__$1 = this;
return (new cljs.core.async.t_cljs$core$async36705(self__.f,self__.ch,meta36706__$1));
}));

(cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36707){
var self__ = this;
var _36707__$1 = this;
return self__.meta36706;
}));

(cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36706","meta36706",-1493704698,null)], null);
}));

(cljs.core.async.t_cljs$core$async36705.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36705");

(cljs.core.async.t_cljs$core$async36705.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36705");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36705.
 */
cljs.core.async.__GT_t_cljs$core$async36705 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36705(f__$1,ch__$1,meta36706){
return (new cljs.core.async.t_cljs$core$async36705(f__$1,ch__$1,meta36706));
});

}

return (new cljs.core.async.t_cljs$core$async36705(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36708 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36708 = (function (p,ch,meta36709){
this.p = p;
this.ch = ch;
this.meta36709 = meta36709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36710,meta36709__$1){
var self__ = this;
var _36710__$1 = this;
return (new cljs.core.async.t_cljs$core$async36708(self__.p,self__.ch,meta36709__$1));
}));

(cljs.core.async.t_cljs$core$async36708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36710){
var self__ = this;
var _36710__$1 = this;
return self__.meta36709;
}));

(cljs.core.async.t_cljs$core$async36708.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36708.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36708.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36708.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36708.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36708.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36708.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36708.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36709","meta36709",194055902,null)], null);
}));

(cljs.core.async.t_cljs$core$async36708.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36708");

(cljs.core.async.t_cljs$core$async36708.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36708");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36708.
 */
cljs.core.async.__GT_t_cljs$core$async36708 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36708(p__$1,ch__$1,meta36709){
return (new cljs.core.async.t_cljs$core$async36708(p__$1,ch__$1,meta36709));
});

}

return (new cljs.core.async.t_cljs$core$async36708(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36716 = arguments.length;
switch (G__36716) {
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
var c__34853__auto___38032 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34854__auto__ = (function (){var switch__34654__auto__ = (function (state_36741){
var state_val_36742 = (state_36741[(1)]);
if((state_val_36742 === (7))){
var inst_36737 = (state_36741[(2)]);
var state_36741__$1 = state_36741;
var statearr_36743_38033 = state_36741__$1;
(statearr_36743_38033[(2)] = inst_36737);

(statearr_36743_38033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36742 === (1))){
var state_36741__$1 = state_36741;
var statearr_36744_38034 = state_36741__$1;
(statearr_36744_38034[(2)] = null);

(statearr_36744_38034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36742 === (4))){
var inst_36723 = (state_36741[(7)]);
var inst_36723__$1 = (state_36741[(2)]);
var inst_36724 = (inst_36723__$1 == null);
var state_36741__$1 = (function (){var statearr_36745 = state_36741;
(statearr_36745[(7)] = inst_36723__$1);

return statearr_36745;
})();
if(cljs.core.truth_(inst_36724)){
var statearr_36746_38036 = state_36741__$1;
(statearr_36746_38036[(1)] = (5));

} else {
var statearr_36747_38037 = state_36741__$1;
(statearr_36747_38037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36742 === (6))){
var inst_36723 = (state_36741[(7)]);
var inst_36728 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36723) : p.call(null,inst_36723));
var state_36741__$1 = state_36741;
if(cljs.core.truth_(inst_36728)){
var statearr_36748_38040 = state_36741__$1;
(statearr_36748_38040[(1)] = (8));

} else {
var statearr_36749_38041 = state_36741__$1;
(statearr_36749_38041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36742 === (3))){
var inst_36739 = (state_36741[(2)]);
var state_36741__$1 = state_36741;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36741__$1,inst_36739);
} else {
if((state_val_36742 === (2))){
var state_36741__$1 = state_36741;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36741__$1,(4),ch);
} else {
if((state_val_36742 === (11))){
var inst_36731 = (state_36741[(2)]);
var state_36741__$1 = state_36741;
var statearr_36764_38043 = state_36741__$1;
(statearr_36764_38043[(2)] = inst_36731);

(statearr_36764_38043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36742 === (9))){
var state_36741__$1 = state_36741;
var statearr_36771_38044 = state_36741__$1;
(statearr_36771_38044[(2)] = null);

(statearr_36771_38044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36742 === (5))){
var inst_36726 = cljs.core.async.close_BANG_(out);
var state_36741__$1 = state_36741;
var statearr_36772_38045 = state_36741__$1;
(statearr_36772_38045[(2)] = inst_36726);

(statearr_36772_38045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36742 === (10))){
var inst_36734 = (state_36741[(2)]);
var state_36741__$1 = (function (){var statearr_36773 = state_36741;
(statearr_36773[(8)] = inst_36734);

return statearr_36773;
})();
var statearr_36774_38049 = state_36741__$1;
(statearr_36774_38049[(2)] = null);

(statearr_36774_38049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36742 === (8))){
var inst_36723 = (state_36741[(7)]);
var state_36741__$1 = state_36741;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36741__$1,(11),out,inst_36723);
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
var cljs$core$async$state_machine__34655__auto__ = null;
var cljs$core$async$state_machine__34655__auto____0 = (function (){
var statearr_36795 = [null,null,null,null,null,null,null,null,null];
(statearr_36795[(0)] = cljs$core$async$state_machine__34655__auto__);

(statearr_36795[(1)] = (1));

return statearr_36795;
});
var cljs$core$async$state_machine__34655__auto____1 = (function (state_36741){
while(true){
var ret_value__34656__auto__ = (function (){try{while(true){
var result__34657__auto__ = switch__34654__auto__(state_36741);
if(cljs.core.keyword_identical_QMARK_(result__34657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34657__auto__;
}
break;
}
}catch (e36796){var ex__34658__auto__ = e36796;
var statearr_36797_38055 = state_36741;
(statearr_36797_38055[(2)] = ex__34658__auto__);


if(cljs.core.seq((state_36741[(4)]))){
var statearr_36798_38057 = state_36741;
(statearr_36798_38057[(1)] = cljs.core.first((state_36741[(4)])));

} else {
throw ex__34658__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38058 = state_36741;
state_36741 = G__38058;
continue;
} else {
return ret_value__34656__auto__;
}
break;
}
});
cljs$core$async$state_machine__34655__auto__ = function(state_36741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34655__auto____1.call(this,state_36741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34655__auto____0;
cljs$core$async$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34655__auto____1;
return cljs$core$async$state_machine__34655__auto__;
})()
})();
var state__34855__auto__ = (function (){var statearr_36801 = f__34854__auto__();
(statearr_36801[(6)] = c__34853__auto___38032);

return statearr_36801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34855__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36804 = arguments.length;
switch (G__36804) {
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
var c__34853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34854__auto__ = (function (){var switch__34654__auto__ = (function (state_36869){
var state_val_36870 = (state_36869[(1)]);
if((state_val_36870 === (7))){
var inst_36865 = (state_36869[(2)]);
var state_36869__$1 = state_36869;
var statearr_36871_38066 = state_36869__$1;
(statearr_36871_38066[(2)] = inst_36865);

(statearr_36871_38066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36870 === (20))){
var inst_36835 = (state_36869[(7)]);
var inst_36846 = (state_36869[(2)]);
var inst_36847 = cljs.core.next(inst_36835);
var inst_36821 = inst_36847;
var inst_36822 = null;
var inst_36823 = (0);
var inst_36824 = (0);
var state_36869__$1 = (function (){var statearr_36872 = state_36869;
(statearr_36872[(8)] = inst_36824);

(statearr_36872[(9)] = inst_36821);

(statearr_36872[(10)] = inst_36846);

(statearr_36872[(11)] = inst_36822);

(statearr_36872[(12)] = inst_36823);

return statearr_36872;
})();
var statearr_36873_38069 = state_36869__$1;
(statearr_36873_38069[(2)] = null);

(statearr_36873_38069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36870 === (1))){
var state_36869__$1 = state_36869;
var statearr_36874_38072 = state_36869__$1;
(statearr_36874_38072[(2)] = null);

(statearr_36874_38072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36870 === (4))){
var inst_36810 = (state_36869[(13)]);
var inst_36810__$1 = (state_36869[(2)]);
var inst_36811 = (inst_36810__$1 == null);
var state_36869__$1 = (function (){var statearr_36875 = state_36869;
(statearr_36875[(13)] = inst_36810__$1);

return statearr_36875;
})();
if(cljs.core.truth_(inst_36811)){
var statearr_36876_38073 = state_36869__$1;
(statearr_36876_38073[(1)] = (5));

} else {
var statearr_36877_38074 = state_36869__$1;
(statearr_36877_38074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36870 === (15))){
var state_36869__$1 = state_36869;
var statearr_36881_38076 = state_36869__$1;
(statearr_36881_38076[(2)] = null);

(statearr_36881_38076[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36870 === (21))){
var state_36869__$1 = state_36869;
var statearr_36882_38083 = state_36869__$1;
(statearr_36882_38083[(2)] = null);

(statearr_36882_38083[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36870 === (13))){
var inst_36824 = (state_36869[(8)]);
var inst_36821 = (state_36869[(9)]);
var inst_36822 = (state_36869[(11)]);
var inst_36823 = (state_36869[(12)]);
var inst_36831 = (state_36869[(2)]);
var inst_36832 = (inst_36824 + (1));
var tmp36878 = inst_36821;
var tmp36879 = inst_36822;
var tmp36880 = inst_36823;
var inst_36821__$1 = tmp36878;
var inst_36822__$1 = tmp36879;
var inst_36823__$1 = tmp36880;
var inst_36824__$1 = inst_36832;
var state_36869__$1 = (function (){var statearr_36883 = state_36869;
(statearr_36883[(8)] = inst_36824__$1);

(statearr_36883[(9)] = inst_36821__$1);

(statearr_36883[(11)] = inst_36822__$1);

(statearr_36883[(12)] = inst_36823__$1);

(statearr_36883[(14)] = inst_36831);

return statearr_36883;
})();
var statearr_36884_38085 = state_36869__$1;
(statearr_36884_38085[(2)] = null);

(statearr_36884_38085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36870 === (22))){
var state_36869__$1 = state_36869;
var statearr_36885_38086 = state_36869__$1;
(statearr_36885_38086[(2)] = null);

(statearr_36885_38086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36870 === (6))){
var inst_36810 = (state_36869[(13)]);
var inst_36819 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36810) : f.call(null,inst_36810));
var inst_36820 = cljs.core.seq(inst_36819);
var inst_36821 = inst_36820;
var inst_36822 = null;
var inst_36823 = (0);
var inst_36824 = (0);
var state_36869__$1 = (function (){var statearr_36886 = state_36869;
(statearr_36886[(8)] = inst_36824);

(statearr_36886[(9)] = inst_36821);

(statearr_36886[(11)] = inst_36822);

(statearr_36886[(12)] = inst_36823);

return statearr_36886;
})();
var statearr_36887_38088 = state_36869__$1;
(statearr_36887_38088[(2)] = null);

(statearr_36887_38088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36870 === (17))){
var inst_36835 = (state_36869[(7)]);
var inst_36839 = cljs.core.chunk_first(inst_36835);
var inst_36840 = cljs.core.chunk_rest(inst_36835);
var inst_36841 = cljs.core.count(inst_36839);
var inst_36821 = inst_36840;
var inst_36822 = inst_36839;
var inst_36823 = inst_36841;
var inst_36824 = (0);
var state_36869__$1 = (function (){var statearr_36888 = state_36869;
(statearr_36888[(8)] = inst_36824);

(statearr_36888[(9)] = inst_36821);

(statearr_36888[(11)] = inst_36822);

(statearr_36888[(12)] = inst_36823);

return statearr_36888;
})();
var statearr_36889_38092 = state_36869__$1;
(statearr_36889_38092[(2)] = null);

(statearr_36889_38092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36870 === (3))){
var inst_36867 = (state_36869[(2)]);
var state_36869__$1 = state_36869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36869__$1,inst_36867);
} else {
if((state_val_36870 === (12))){
var inst_36855 = (state_36869[(2)]);
var state_36869__$1 = state_36869;
var statearr_36892_38094 = state_36869__$1;
(statearr_36892_38094[(2)] = inst_36855);

(statearr_36892_38094[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36870 === (2))){
var state_36869__$1 = state_36869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36869__$1,(4),in$);
} else {
if((state_val_36870 === (23))){
var inst_36863 = (state_36869[(2)]);
var state_36869__$1 = state_36869;
var statearr_36899_38096 = state_36869__$1;
(statearr_36899_38096[(2)] = inst_36863);

(statearr_36899_38096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36870 === (19))){
var inst_36850 = (state_36869[(2)]);
var state_36869__$1 = state_36869;
var statearr_36903_38097 = state_36869__$1;
(statearr_36903_38097[(2)] = inst_36850);

(statearr_36903_38097[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36870 === (11))){
var inst_36821 = (state_36869[(9)]);
var inst_36835 = (state_36869[(7)]);
var inst_36835__$1 = cljs.core.seq(inst_36821);
var state_36869__$1 = (function (){var statearr_36904 = state_36869;
(statearr_36904[(7)] = inst_36835__$1);

return statearr_36904;
})();
if(inst_36835__$1){
var statearr_36905_38098 = state_36869__$1;
(statearr_36905_38098[(1)] = (14));

} else {
var statearr_36906_38099 = state_36869__$1;
(statearr_36906_38099[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36870 === (9))){
var inst_36857 = (state_36869[(2)]);
var inst_36858 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36869__$1 = (function (){var statearr_36907 = state_36869;
(statearr_36907[(15)] = inst_36857);

return statearr_36907;
})();
if(cljs.core.truth_(inst_36858)){
var statearr_36908_38100 = state_36869__$1;
(statearr_36908_38100[(1)] = (21));

} else {
var statearr_36909_38101 = state_36869__$1;
(statearr_36909_38101[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36870 === (5))){
var inst_36813 = cljs.core.async.close_BANG_(out);
var state_36869__$1 = state_36869;
var statearr_36910_38102 = state_36869__$1;
(statearr_36910_38102[(2)] = inst_36813);

(statearr_36910_38102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36870 === (14))){
var inst_36835 = (state_36869[(7)]);
var inst_36837 = cljs.core.chunked_seq_QMARK_(inst_36835);
var state_36869__$1 = state_36869;
if(inst_36837){
var statearr_36911_38103 = state_36869__$1;
(statearr_36911_38103[(1)] = (17));

} else {
var statearr_36912_38104 = state_36869__$1;
(statearr_36912_38104[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36870 === (16))){
var inst_36853 = (state_36869[(2)]);
var state_36869__$1 = state_36869;
var statearr_36913_38105 = state_36869__$1;
(statearr_36913_38105[(2)] = inst_36853);

(statearr_36913_38105[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36870 === (10))){
var inst_36824 = (state_36869[(8)]);
var inst_36822 = (state_36869[(11)]);
var inst_36829 = cljs.core._nth(inst_36822,inst_36824);
var state_36869__$1 = state_36869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36869__$1,(13),out,inst_36829);
} else {
if((state_val_36870 === (18))){
var inst_36835 = (state_36869[(7)]);
var inst_36844 = cljs.core.first(inst_36835);
var state_36869__$1 = state_36869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36869__$1,(20),out,inst_36844);
} else {
if((state_val_36870 === (8))){
var inst_36824 = (state_36869[(8)]);
var inst_36823 = (state_36869[(12)]);
var inst_36826 = (inst_36824 < inst_36823);
var inst_36827 = inst_36826;
var state_36869__$1 = state_36869;
if(cljs.core.truth_(inst_36827)){
var statearr_36914_38111 = state_36869__$1;
(statearr_36914_38111[(1)] = (10));

} else {
var statearr_36915_38112 = state_36869__$1;
(statearr_36915_38112[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__34655__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34655__auto____0 = (function (){
var statearr_36916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36916[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34655__auto__);

(statearr_36916[(1)] = (1));

return statearr_36916;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34655__auto____1 = (function (state_36869){
while(true){
var ret_value__34656__auto__ = (function (){try{while(true){
var result__34657__auto__ = switch__34654__auto__(state_36869);
if(cljs.core.keyword_identical_QMARK_(result__34657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34657__auto__;
}
break;
}
}catch (e36917){var ex__34658__auto__ = e36917;
var statearr_36918_38116 = state_36869;
(statearr_36918_38116[(2)] = ex__34658__auto__);


if(cljs.core.seq((state_36869[(4)]))){
var statearr_36919_38117 = state_36869;
(statearr_36919_38117[(1)] = cljs.core.first((state_36869[(4)])));

} else {
throw ex__34658__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38121 = state_36869;
state_36869 = G__38121;
continue;
} else {
return ret_value__34656__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34655__auto__ = function(state_36869){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34655__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34655__auto____1.call(this,state_36869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34655__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34655__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34655__auto__;
})()
})();
var state__34855__auto__ = (function (){var statearr_36920 = f__34854__auto__();
(statearr_36920[(6)] = c__34853__auto__);

return statearr_36920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34855__auto__);
}));

return c__34853__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36922 = arguments.length;
switch (G__36922) {
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
var G__36926 = arguments.length;
switch (G__36926) {
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
var G__36931 = arguments.length;
switch (G__36931) {
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
var c__34853__auto___38130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34854__auto__ = (function (){var switch__34654__auto__ = (function (state_36958){
var state_val_36959 = (state_36958[(1)]);
if((state_val_36959 === (7))){
var inst_36953 = (state_36958[(2)]);
var state_36958__$1 = state_36958;
var statearr_36960_38132 = state_36958__$1;
(statearr_36960_38132[(2)] = inst_36953);

(statearr_36960_38132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36959 === (1))){
var inst_36935 = null;
var state_36958__$1 = (function (){var statearr_36961 = state_36958;
(statearr_36961[(7)] = inst_36935);

return statearr_36961;
})();
var statearr_36962_38137 = state_36958__$1;
(statearr_36962_38137[(2)] = null);

(statearr_36962_38137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36959 === (4))){
var inst_36938 = (state_36958[(8)]);
var inst_36938__$1 = (state_36958[(2)]);
var inst_36939 = (inst_36938__$1 == null);
var inst_36940 = cljs.core.not(inst_36939);
var state_36958__$1 = (function (){var statearr_36963 = state_36958;
(statearr_36963[(8)] = inst_36938__$1);

return statearr_36963;
})();
if(inst_36940){
var statearr_36964_38142 = state_36958__$1;
(statearr_36964_38142[(1)] = (5));

} else {
var statearr_36965_38143 = state_36958__$1;
(statearr_36965_38143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36959 === (6))){
var state_36958__$1 = state_36958;
var statearr_36966_38144 = state_36958__$1;
(statearr_36966_38144[(2)] = null);

(statearr_36966_38144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36959 === (3))){
var inst_36955 = (state_36958[(2)]);
var inst_36956 = cljs.core.async.close_BANG_(out);
var state_36958__$1 = (function (){var statearr_36967 = state_36958;
(statearr_36967[(9)] = inst_36955);

return statearr_36967;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36958__$1,inst_36956);
} else {
if((state_val_36959 === (2))){
var state_36958__$1 = state_36958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36958__$1,(4),ch);
} else {
if((state_val_36959 === (11))){
var inst_36938 = (state_36958[(8)]);
var inst_36947 = (state_36958[(2)]);
var inst_36935 = inst_36938;
var state_36958__$1 = (function (){var statearr_36968 = state_36958;
(statearr_36968[(7)] = inst_36935);

(statearr_36968[(10)] = inst_36947);

return statearr_36968;
})();
var statearr_36969_38145 = state_36958__$1;
(statearr_36969_38145[(2)] = null);

(statearr_36969_38145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36959 === (9))){
var inst_36938 = (state_36958[(8)]);
var state_36958__$1 = state_36958;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36958__$1,(11),out,inst_36938);
} else {
if((state_val_36959 === (5))){
var inst_36938 = (state_36958[(8)]);
var inst_36935 = (state_36958[(7)]);
var inst_36942 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36938,inst_36935);
var state_36958__$1 = state_36958;
if(inst_36942){
var statearr_36971_38146 = state_36958__$1;
(statearr_36971_38146[(1)] = (8));

} else {
var statearr_36972_38147 = state_36958__$1;
(statearr_36972_38147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36959 === (10))){
var inst_36950 = (state_36958[(2)]);
var state_36958__$1 = state_36958;
var statearr_36973_38148 = state_36958__$1;
(statearr_36973_38148[(2)] = inst_36950);

(statearr_36973_38148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36959 === (8))){
var inst_36935 = (state_36958[(7)]);
var tmp36970 = inst_36935;
var inst_36935__$1 = tmp36970;
var state_36958__$1 = (function (){var statearr_36974 = state_36958;
(statearr_36974[(7)] = inst_36935__$1);

return statearr_36974;
})();
var statearr_36975_38154 = state_36958__$1;
(statearr_36975_38154[(2)] = null);

(statearr_36975_38154[(1)] = (2));


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
var cljs$core$async$state_machine__34655__auto__ = null;
var cljs$core$async$state_machine__34655__auto____0 = (function (){
var statearr_36976 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36976[(0)] = cljs$core$async$state_machine__34655__auto__);

(statearr_36976[(1)] = (1));

return statearr_36976;
});
var cljs$core$async$state_machine__34655__auto____1 = (function (state_36958){
while(true){
var ret_value__34656__auto__ = (function (){try{while(true){
var result__34657__auto__ = switch__34654__auto__(state_36958);
if(cljs.core.keyword_identical_QMARK_(result__34657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34657__auto__;
}
break;
}
}catch (e36977){var ex__34658__auto__ = e36977;
var statearr_36978_38166 = state_36958;
(statearr_36978_38166[(2)] = ex__34658__auto__);


if(cljs.core.seq((state_36958[(4)]))){
var statearr_36982_38167 = state_36958;
(statearr_36982_38167[(1)] = cljs.core.first((state_36958[(4)])));

} else {
throw ex__34658__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38168 = state_36958;
state_36958 = G__38168;
continue;
} else {
return ret_value__34656__auto__;
}
break;
}
});
cljs$core$async$state_machine__34655__auto__ = function(state_36958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34655__auto____1.call(this,state_36958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34655__auto____0;
cljs$core$async$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34655__auto____1;
return cljs$core$async$state_machine__34655__auto__;
})()
})();
var state__34855__auto__ = (function (){var statearr_36983 = f__34854__auto__();
(statearr_36983[(6)] = c__34853__auto___38130);

return statearr_36983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34855__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36985 = arguments.length;
switch (G__36985) {
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
var c__34853__auto___38178 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34854__auto__ = (function (){var switch__34654__auto__ = (function (state_37036){
var state_val_37037 = (state_37036[(1)]);
if((state_val_37037 === (7))){
var inst_37032 = (state_37036[(2)]);
var state_37036__$1 = state_37036;
var statearr_37045_38179 = state_37036__$1;
(statearr_37045_38179[(2)] = inst_37032);

(statearr_37045_38179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (1))){
var inst_36993 = (new Array(n));
var inst_36994 = inst_36993;
var inst_36995 = (0);
var state_37036__$1 = (function (){var statearr_37049 = state_37036;
(statearr_37049[(7)] = inst_36995);

(statearr_37049[(8)] = inst_36994);

return statearr_37049;
})();
var statearr_37050_38180 = state_37036__$1;
(statearr_37050_38180[(2)] = null);

(statearr_37050_38180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (4))){
var inst_37001 = (state_37036[(9)]);
var inst_37001__$1 = (state_37036[(2)]);
var inst_37002 = (inst_37001__$1 == null);
var inst_37003 = cljs.core.not(inst_37002);
var state_37036__$1 = (function (){var statearr_37051 = state_37036;
(statearr_37051[(9)] = inst_37001__$1);

return statearr_37051;
})();
if(inst_37003){
var statearr_37052_38186 = state_37036__$1;
(statearr_37052_38186[(1)] = (5));

} else {
var statearr_37053_38187 = state_37036__$1;
(statearr_37053_38187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (15))){
var inst_37026 = (state_37036[(2)]);
var state_37036__$1 = state_37036;
var statearr_37057_38188 = state_37036__$1;
(statearr_37057_38188[(2)] = inst_37026);

(statearr_37057_38188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (13))){
var state_37036__$1 = state_37036;
var statearr_37062_38189 = state_37036__$1;
(statearr_37062_38189[(2)] = null);

(statearr_37062_38189[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (6))){
var inst_36995 = (state_37036[(7)]);
var inst_37022 = (inst_36995 > (0));
var state_37036__$1 = state_37036;
if(cljs.core.truth_(inst_37022)){
var statearr_37066_38190 = state_37036__$1;
(statearr_37066_38190[(1)] = (12));

} else {
var statearr_37067_38191 = state_37036__$1;
(statearr_37067_38191[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (3))){
var inst_37034 = (state_37036[(2)]);
var state_37036__$1 = state_37036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37036__$1,inst_37034);
} else {
if((state_val_37037 === (12))){
var inst_36994 = (state_37036[(8)]);
var inst_37024 = cljs.core.vec(inst_36994);
var state_37036__$1 = state_37036;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37036__$1,(15),out,inst_37024);
} else {
if((state_val_37037 === (2))){
var state_37036__$1 = state_37036;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37036__$1,(4),ch);
} else {
if((state_val_37037 === (11))){
var inst_37016 = (state_37036[(2)]);
var inst_37017 = (new Array(n));
var inst_36994 = inst_37017;
var inst_36995 = (0);
var state_37036__$1 = (function (){var statearr_37075 = state_37036;
(statearr_37075[(7)] = inst_36995);

(statearr_37075[(10)] = inst_37016);

(statearr_37075[(8)] = inst_36994);

return statearr_37075;
})();
var statearr_37076_38193 = state_37036__$1;
(statearr_37076_38193[(2)] = null);

(statearr_37076_38193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (9))){
var inst_36994 = (state_37036[(8)]);
var inst_37014 = cljs.core.vec(inst_36994);
var state_37036__$1 = state_37036;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37036__$1,(11),out,inst_37014);
} else {
if((state_val_37037 === (5))){
var inst_37006 = (state_37036[(11)]);
var inst_36995 = (state_37036[(7)]);
var inst_37001 = (state_37036[(9)]);
var inst_36994 = (state_37036[(8)]);
var inst_37005 = (inst_36994[inst_36995] = inst_37001);
var inst_37006__$1 = (inst_36995 + (1));
var inst_37010 = (inst_37006__$1 < n);
var state_37036__$1 = (function (){var statearr_37079 = state_37036;
(statearr_37079[(11)] = inst_37006__$1);

(statearr_37079[(12)] = inst_37005);

return statearr_37079;
})();
if(cljs.core.truth_(inst_37010)){
var statearr_37080_38211 = state_37036__$1;
(statearr_37080_38211[(1)] = (8));

} else {
var statearr_37081_38216 = state_37036__$1;
(statearr_37081_38216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (14))){
var inst_37029 = (state_37036[(2)]);
var inst_37030 = cljs.core.async.close_BANG_(out);
var state_37036__$1 = (function (){var statearr_37083 = state_37036;
(statearr_37083[(13)] = inst_37029);

return statearr_37083;
})();
var statearr_37084_38218 = state_37036__$1;
(statearr_37084_38218[(2)] = inst_37030);

(statearr_37084_38218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (10))){
var inst_37020 = (state_37036[(2)]);
var state_37036__$1 = state_37036;
var statearr_37085_38219 = state_37036__$1;
(statearr_37085_38219[(2)] = inst_37020);

(statearr_37085_38219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (8))){
var inst_37006 = (state_37036[(11)]);
var inst_36994 = (state_37036[(8)]);
var tmp37082 = inst_36994;
var inst_36994__$1 = tmp37082;
var inst_36995 = inst_37006;
var state_37036__$1 = (function (){var statearr_37086 = state_37036;
(statearr_37086[(7)] = inst_36995);

(statearr_37086[(8)] = inst_36994__$1);

return statearr_37086;
})();
var statearr_37087_38220 = state_37036__$1;
(statearr_37087_38220[(2)] = null);

(statearr_37087_38220[(1)] = (2));


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
var cljs$core$async$state_machine__34655__auto__ = null;
var cljs$core$async$state_machine__34655__auto____0 = (function (){
var statearr_37088 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37088[(0)] = cljs$core$async$state_machine__34655__auto__);

(statearr_37088[(1)] = (1));

return statearr_37088;
});
var cljs$core$async$state_machine__34655__auto____1 = (function (state_37036){
while(true){
var ret_value__34656__auto__ = (function (){try{while(true){
var result__34657__auto__ = switch__34654__auto__(state_37036);
if(cljs.core.keyword_identical_QMARK_(result__34657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34657__auto__;
}
break;
}
}catch (e37089){var ex__34658__auto__ = e37089;
var statearr_37090_38231 = state_37036;
(statearr_37090_38231[(2)] = ex__34658__auto__);


if(cljs.core.seq((state_37036[(4)]))){
var statearr_37091_38232 = state_37036;
(statearr_37091_38232[(1)] = cljs.core.first((state_37036[(4)])));

} else {
throw ex__34658__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38237 = state_37036;
state_37036 = G__38237;
continue;
} else {
return ret_value__34656__auto__;
}
break;
}
});
cljs$core$async$state_machine__34655__auto__ = function(state_37036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34655__auto____1.call(this,state_37036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34655__auto____0;
cljs$core$async$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34655__auto____1;
return cljs$core$async$state_machine__34655__auto__;
})()
})();
var state__34855__auto__ = (function (){var statearr_37092 = f__34854__auto__();
(statearr_37092[(6)] = c__34853__auto___38178);

return statearr_37092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34855__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37094 = arguments.length;
switch (G__37094) {
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
var c__34853__auto___38241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34854__auto__ = (function (){var switch__34654__auto__ = (function (state_37139){
var state_val_37140 = (state_37139[(1)]);
if((state_val_37140 === (7))){
var inst_37135 = (state_37139[(2)]);
var state_37139__$1 = state_37139;
var statearr_37141_38242 = state_37139__$1;
(statearr_37141_38242[(2)] = inst_37135);

(statearr_37141_38242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (1))){
var inst_37095 = [];
var inst_37096 = inst_37095;
var inst_37097 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37139__$1 = (function (){var statearr_37144 = state_37139;
(statearr_37144[(7)] = inst_37096);

(statearr_37144[(8)] = inst_37097);

return statearr_37144;
})();
var statearr_37145_38243 = state_37139__$1;
(statearr_37145_38243[(2)] = null);

(statearr_37145_38243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (4))){
var inst_37100 = (state_37139[(9)]);
var inst_37100__$1 = (state_37139[(2)]);
var inst_37101 = (inst_37100__$1 == null);
var inst_37102 = cljs.core.not(inst_37101);
var state_37139__$1 = (function (){var statearr_37146 = state_37139;
(statearr_37146[(9)] = inst_37100__$1);

return statearr_37146;
})();
if(inst_37102){
var statearr_37147_38244 = state_37139__$1;
(statearr_37147_38244[(1)] = (5));

} else {
var statearr_37148_38245 = state_37139__$1;
(statearr_37148_38245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (15))){
var inst_37096 = (state_37139[(7)]);
var inst_37127 = cljs.core.vec(inst_37096);
var state_37139__$1 = state_37139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37139__$1,(18),out,inst_37127);
} else {
if((state_val_37140 === (13))){
var inst_37122 = (state_37139[(2)]);
var state_37139__$1 = state_37139;
var statearr_37150_38252 = state_37139__$1;
(statearr_37150_38252[(2)] = inst_37122);

(statearr_37150_38252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (6))){
var inst_37096 = (state_37139[(7)]);
var inst_37124 = inst_37096.length;
var inst_37125 = (inst_37124 > (0));
var state_37139__$1 = state_37139;
if(cljs.core.truth_(inst_37125)){
var statearr_37161_38259 = state_37139__$1;
(statearr_37161_38259[(1)] = (15));

} else {
var statearr_37162_38260 = state_37139__$1;
(statearr_37162_38260[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (17))){
var inst_37132 = (state_37139[(2)]);
var inst_37133 = cljs.core.async.close_BANG_(out);
var state_37139__$1 = (function (){var statearr_37163 = state_37139;
(statearr_37163[(10)] = inst_37132);

return statearr_37163;
})();
var statearr_37164_38267 = state_37139__$1;
(statearr_37164_38267[(2)] = inst_37133);

(statearr_37164_38267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (3))){
var inst_37137 = (state_37139[(2)]);
var state_37139__$1 = state_37139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37139__$1,inst_37137);
} else {
if((state_val_37140 === (12))){
var inst_37096 = (state_37139[(7)]);
var inst_37115 = cljs.core.vec(inst_37096);
var state_37139__$1 = state_37139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37139__$1,(14),out,inst_37115);
} else {
if((state_val_37140 === (2))){
var state_37139__$1 = state_37139;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37139__$1,(4),ch);
} else {
if((state_val_37140 === (11))){
var inst_37096 = (state_37139[(7)]);
var inst_37104 = (state_37139[(11)]);
var inst_37100 = (state_37139[(9)]);
var inst_37112 = inst_37096.push(inst_37100);
var tmp37165 = inst_37096;
var inst_37096__$1 = tmp37165;
var inst_37097 = inst_37104;
var state_37139__$1 = (function (){var statearr_37167 = state_37139;
(statearr_37167[(7)] = inst_37096__$1);

(statearr_37167[(12)] = inst_37112);

(statearr_37167[(8)] = inst_37097);

return statearr_37167;
})();
var statearr_37169_38278 = state_37139__$1;
(statearr_37169_38278[(2)] = null);

(statearr_37169_38278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (9))){
var inst_37097 = (state_37139[(8)]);
var inst_37108 = cljs.core.keyword_identical_QMARK_(inst_37097,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_37139__$1 = state_37139;
var statearr_37170_38283 = state_37139__$1;
(statearr_37170_38283[(2)] = inst_37108);

(statearr_37170_38283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (5))){
var inst_37104 = (state_37139[(11)]);
var inst_37105 = (state_37139[(13)]);
var inst_37097 = (state_37139[(8)]);
var inst_37100 = (state_37139[(9)]);
var inst_37104__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37100) : f.call(null,inst_37100));
var inst_37105__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37104__$1,inst_37097);
var state_37139__$1 = (function (){var statearr_37171 = state_37139;
(statearr_37171[(11)] = inst_37104__$1);

(statearr_37171[(13)] = inst_37105__$1);

return statearr_37171;
})();
if(inst_37105__$1){
var statearr_37172_38298 = state_37139__$1;
(statearr_37172_38298[(1)] = (8));

} else {
var statearr_37173_38299 = state_37139__$1;
(statearr_37173_38299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (14))){
var inst_37104 = (state_37139[(11)]);
var inst_37100 = (state_37139[(9)]);
var inst_37117 = (state_37139[(2)]);
var inst_37118 = [];
var inst_37119 = inst_37118.push(inst_37100);
var inst_37096 = inst_37118;
var inst_37097 = inst_37104;
var state_37139__$1 = (function (){var statearr_37174 = state_37139;
(statearr_37174[(7)] = inst_37096);

(statearr_37174[(14)] = inst_37117);

(statearr_37174[(15)] = inst_37119);

(statearr_37174[(8)] = inst_37097);

return statearr_37174;
})();
var statearr_37175_38300 = state_37139__$1;
(statearr_37175_38300[(2)] = null);

(statearr_37175_38300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (16))){
var state_37139__$1 = state_37139;
var statearr_37176_38301 = state_37139__$1;
(statearr_37176_38301[(2)] = null);

(statearr_37176_38301[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (10))){
var inst_37110 = (state_37139[(2)]);
var state_37139__$1 = state_37139;
if(cljs.core.truth_(inst_37110)){
var statearr_37177_38303 = state_37139__$1;
(statearr_37177_38303[(1)] = (11));

} else {
var statearr_37178_38309 = state_37139__$1;
(statearr_37178_38309[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (18))){
var inst_37129 = (state_37139[(2)]);
var state_37139__$1 = state_37139;
var statearr_37179_38310 = state_37139__$1;
(statearr_37179_38310[(2)] = inst_37129);

(statearr_37179_38310[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (8))){
var inst_37105 = (state_37139[(13)]);
var state_37139__$1 = state_37139;
var statearr_37180_38311 = state_37139__$1;
(statearr_37180_38311[(2)] = inst_37105);

(statearr_37180_38311[(1)] = (10));


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
var cljs$core$async$state_machine__34655__auto__ = null;
var cljs$core$async$state_machine__34655__auto____0 = (function (){
var statearr_37181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37181[(0)] = cljs$core$async$state_machine__34655__auto__);

(statearr_37181[(1)] = (1));

return statearr_37181;
});
var cljs$core$async$state_machine__34655__auto____1 = (function (state_37139){
while(true){
var ret_value__34656__auto__ = (function (){try{while(true){
var result__34657__auto__ = switch__34654__auto__(state_37139);
if(cljs.core.keyword_identical_QMARK_(result__34657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34657__auto__;
}
break;
}
}catch (e37182){var ex__34658__auto__ = e37182;
var statearr_37183_38313 = state_37139;
(statearr_37183_38313[(2)] = ex__34658__auto__);


if(cljs.core.seq((state_37139[(4)]))){
var statearr_37184_38314 = state_37139;
(statearr_37184_38314[(1)] = cljs.core.first((state_37139[(4)])));

} else {
throw ex__34658__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38317 = state_37139;
state_37139 = G__38317;
continue;
} else {
return ret_value__34656__auto__;
}
break;
}
});
cljs$core$async$state_machine__34655__auto__ = function(state_37139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34655__auto____1.call(this,state_37139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34655__auto____0;
cljs$core$async$state_machine__34655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34655__auto____1;
return cljs$core$async$state_machine__34655__auto__;
})()
})();
var state__34855__auto__ = (function (){var statearr_37185 = f__34854__auto__();
(statearr_37185[(6)] = c__34853__auto___38241);

return statearr_37185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34855__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
