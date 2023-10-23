goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34933 = (function (f,blockable,meta34934){
this.f = f;
this.blockable = blockable;
this.meta34934 = meta34934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34935,meta34934__$1){
var self__ = this;
var _34935__$1 = this;
return (new cljs.core.async.t_cljs$core$async34933(self__.f,self__.blockable,meta34934__$1));
}));

(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34935){
var self__ = this;
var _34935__$1 = this;
return self__.meta34934;
}));

(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34934","meta34934",549643707,null)], null);
}));

(cljs.core.async.t_cljs$core$async34933.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34933");

(cljs.core.async.t_cljs$core$async34933.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34933");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34933.
 */
cljs.core.async.__GT_t_cljs$core$async34933 = (function cljs$core$async$__GT_t_cljs$core$async34933(f,blockable,meta34934){
return (new cljs.core.async.t_cljs$core$async34933(f,blockable,meta34934));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34921 = arguments.length;
switch (G__34921) {
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
return (new cljs.core.async.t_cljs$core$async34933(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34962 = arguments.length;
switch (G__34962) {
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
var G__34968 = arguments.length;
switch (G__34968) {
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
var G__34990 = arguments.length;
switch (G__34990) {
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
var val_37180 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37180) : fn1.call(null,val_37180));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37180) : fn1.call(null,val_37180));
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
var G__35011 = arguments.length;
switch (G__35011) {
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
var n__5636__auto___37182 = n;
var x_37183 = (0);
while(true){
if((x_37183 < n__5636__auto___37182)){
(a[x_37183] = x_37183);

var G__37184 = (x_37183 + (1));
x_37183 = G__37184;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35025 = (function (flag,meta35026){
this.flag = flag;
this.meta35026 = meta35026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35027,meta35026__$1){
var self__ = this;
var _35027__$1 = this;
return (new cljs.core.async.t_cljs$core$async35025(self__.flag,meta35026__$1));
}));

(cljs.core.async.t_cljs$core$async35025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35027){
var self__ = this;
var _35027__$1 = this;
return self__.meta35026;
}));

(cljs.core.async.t_cljs$core$async35025.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35025.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35025.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35025.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async35025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35026","meta35026",1018041455,null)], null);
}));

(cljs.core.async.t_cljs$core$async35025.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35025");

(cljs.core.async.t_cljs$core$async35025.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35025");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35025.
 */
cljs.core.async.__GT_t_cljs$core$async35025 = (function cljs$core$async$__GT_t_cljs$core$async35025(flag,meta35026){
return (new cljs.core.async.t_cljs$core$async35025(flag,meta35026));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async35025(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35052 = (function (flag,cb,meta35053){
this.flag = flag;
this.cb = cb;
this.meta35053 = meta35053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35054,meta35053__$1){
var self__ = this;
var _35054__$1 = this;
return (new cljs.core.async.t_cljs$core$async35052(self__.flag,self__.cb,meta35053__$1));
}));

(cljs.core.async.t_cljs$core$async35052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35054){
var self__ = this;
var _35054__$1 = this;
return self__.meta35053;
}));

(cljs.core.async.t_cljs$core$async35052.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35052.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35052.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35052.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async35052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35053","meta35053",1028203628,null)], null);
}));

(cljs.core.async.t_cljs$core$async35052.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35052");

(cljs.core.async.t_cljs$core$async35052.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35052");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35052.
 */
cljs.core.async.__GT_t_cljs$core$async35052 = (function cljs$core$async$__GT_t_cljs$core$async35052(flag,cb,meta35053){
return (new cljs.core.async.t_cljs$core$async35052(flag,cb,meta35053));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async35052(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__35059_SHARP_){
var G__35061 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35059_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35061) : fret.call(null,G__35061));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35060_SHARP_){
var G__35063 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35060_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35063) : fret.call(null,G__35063));
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
var G__37185 = (i + (1));
i = G__37185;
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
var len__5769__auto___37188 = arguments.length;
var i__5770__auto___37189 = (0);
while(true){
if((i__5770__auto___37189 < len__5769__auto___37188)){
args__5775__auto__.push((arguments[i__5770__auto___37189]));

var G__37190 = (i__5770__auto___37189 + (1));
i__5770__auto___37189 = G__37190;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35086){
var map__35087 = p__35086;
var map__35087__$1 = cljs.core.__destructure_map(map__35087);
var opts = map__35087__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35072){
var G__35073 = cljs.core.first(seq35072);
var seq35072__$1 = cljs.core.next(seq35072);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35073,seq35072__$1);
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
var G__35089 = arguments.length;
switch (G__35089) {
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
var c__34851__auto___37194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34852__auto__ = (function (){var switch__34630__auto__ = (function (state_35115){
var state_val_35117 = (state_35115[(1)]);
if((state_val_35117 === (7))){
var inst_35111 = (state_35115[(2)]);
var state_35115__$1 = state_35115;
var statearr_35141_37195 = state_35115__$1;
(statearr_35141_37195[(2)] = inst_35111);

(statearr_35141_37195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (1))){
var state_35115__$1 = state_35115;
var statearr_35142_37196 = state_35115__$1;
(statearr_35142_37196[(2)] = null);

(statearr_35142_37196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (4))){
var inst_35094 = (state_35115[(7)]);
var inst_35094__$1 = (state_35115[(2)]);
var inst_35095 = (inst_35094__$1 == null);
var state_35115__$1 = (function (){var statearr_35143 = state_35115;
(statearr_35143[(7)] = inst_35094__$1);

return statearr_35143;
})();
if(cljs.core.truth_(inst_35095)){
var statearr_35144_37198 = state_35115__$1;
(statearr_35144_37198[(1)] = (5));

} else {
var statearr_35145_37199 = state_35115__$1;
(statearr_35145_37199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (13))){
var state_35115__$1 = state_35115;
var statearr_35148_37200 = state_35115__$1;
(statearr_35148_37200[(2)] = null);

(statearr_35148_37200[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (6))){
var inst_35094 = (state_35115[(7)]);
var state_35115__$1 = state_35115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35115__$1,(11),to,inst_35094);
} else {
if((state_val_35117 === (3))){
var inst_35113 = (state_35115[(2)]);
var state_35115__$1 = state_35115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35115__$1,inst_35113);
} else {
if((state_val_35117 === (12))){
var state_35115__$1 = state_35115;
var statearr_35152_37201 = state_35115__$1;
(statearr_35152_37201[(2)] = null);

(statearr_35152_37201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (2))){
var state_35115__$1 = state_35115;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35115__$1,(4),from);
} else {
if((state_val_35117 === (11))){
var inst_35104 = (state_35115[(2)]);
var state_35115__$1 = state_35115;
if(cljs.core.truth_(inst_35104)){
var statearr_35154_37202 = state_35115__$1;
(statearr_35154_37202[(1)] = (12));

} else {
var statearr_35155_37203 = state_35115__$1;
(statearr_35155_37203[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (9))){
var state_35115__$1 = state_35115;
var statearr_35156_37204 = state_35115__$1;
(statearr_35156_37204[(2)] = null);

(statearr_35156_37204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (5))){
var state_35115__$1 = state_35115;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35157_37205 = state_35115__$1;
(statearr_35157_37205[(1)] = (8));

} else {
var statearr_35158_37206 = state_35115__$1;
(statearr_35158_37206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (14))){
var inst_35109 = (state_35115[(2)]);
var state_35115__$1 = state_35115;
var statearr_35164_37207 = state_35115__$1;
(statearr_35164_37207[(2)] = inst_35109);

(statearr_35164_37207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (10))){
var inst_35101 = (state_35115[(2)]);
var state_35115__$1 = state_35115;
var statearr_35170_37208 = state_35115__$1;
(statearr_35170_37208[(2)] = inst_35101);

(statearr_35170_37208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (8))){
var inst_35098 = cljs.core.async.close_BANG_(to);
var state_35115__$1 = state_35115;
var statearr_35178_37209 = state_35115__$1;
(statearr_35178_37209[(2)] = inst_35098);

(statearr_35178_37209[(1)] = (10));


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
var cljs$core$async$state_machine__34631__auto__ = null;
var cljs$core$async$state_machine__34631__auto____0 = (function (){
var statearr_35184 = [null,null,null,null,null,null,null,null];
(statearr_35184[(0)] = cljs$core$async$state_machine__34631__auto__);

(statearr_35184[(1)] = (1));

return statearr_35184;
});
var cljs$core$async$state_machine__34631__auto____1 = (function (state_35115){
while(true){
var ret_value__34632__auto__ = (function (){try{while(true){
var result__34633__auto__ = switch__34630__auto__(state_35115);
if(cljs.core.keyword_identical_QMARK_(result__34633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34633__auto__;
}
break;
}
}catch (e35185){var ex__34634__auto__ = e35185;
var statearr_35186_37213 = state_35115;
(statearr_35186_37213[(2)] = ex__34634__auto__);


if(cljs.core.seq((state_35115[(4)]))){
var statearr_35187_37220 = state_35115;
(statearr_35187_37220[(1)] = cljs.core.first((state_35115[(4)])));

} else {
throw ex__34634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37221 = state_35115;
state_35115 = G__37221;
continue;
} else {
return ret_value__34632__auto__;
}
break;
}
});
cljs$core$async$state_machine__34631__auto__ = function(state_35115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34631__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34631__auto____1.call(this,state_35115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34631__auto____0;
cljs$core$async$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34631__auto____1;
return cljs$core$async$state_machine__34631__auto__;
})()
})();
var state__34853__auto__ = (function (){var statearr_35188 = f__34852__auto__();
(statearr_35188[(6)] = c__34851__auto___37194);

return statearr_35188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34853__auto__);
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
var process__$1 = (function (p__35215){
var vec__35217 = p__35215;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35217,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35217,(1),null);
var job = vec__35217;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34851__auto___37223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34852__auto__ = (function (){var switch__34630__auto__ = (function (state_35240){
var state_val_35241 = (state_35240[(1)]);
if((state_val_35241 === (1))){
var state_35240__$1 = state_35240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35240__$1,(2),res,v);
} else {
if((state_val_35241 === (2))){
var inst_35237 = (state_35240[(2)]);
var inst_35238 = cljs.core.async.close_BANG_(res);
var state_35240__$1 = (function (){var statearr_35243 = state_35240;
(statearr_35243[(7)] = inst_35237);

return statearr_35243;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35240__$1,inst_35238);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____0 = (function (){
var statearr_35244 = [null,null,null,null,null,null,null,null];
(statearr_35244[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__);

(statearr_35244[(1)] = (1));

return statearr_35244;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____1 = (function (state_35240){
while(true){
var ret_value__34632__auto__ = (function (){try{while(true){
var result__34633__auto__ = switch__34630__auto__(state_35240);
if(cljs.core.keyword_identical_QMARK_(result__34633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34633__auto__;
}
break;
}
}catch (e35245){var ex__34634__auto__ = e35245;
var statearr_35246_37225 = state_35240;
(statearr_35246_37225[(2)] = ex__34634__auto__);


if(cljs.core.seq((state_35240[(4)]))){
var statearr_35248_37226 = state_35240;
(statearr_35248_37226[(1)] = cljs.core.first((state_35240[(4)])));

} else {
throw ex__34634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37227 = state_35240;
state_35240 = G__37227;
continue;
} else {
return ret_value__34632__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__ = function(state_35240){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____1.call(this,state_35240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__;
})()
})();
var state__34853__auto__ = (function (){var statearr_35249 = f__34852__auto__();
(statearr_35249[(6)] = c__34851__auto___37223);

return statearr_35249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34853__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__35250){
var vec__35251 = p__35250;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35251,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35251,(1),null);
var job = vec__35251;
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
var n__5636__auto___37230 = n;
var __37231 = (0);
while(true){
if((__37231 < n__5636__auto___37230)){
var G__35263_37232 = type;
var G__35263_37233__$1 = (((G__35263_37232 instanceof cljs.core.Keyword))?G__35263_37232.fqn:null);
switch (G__35263_37233__$1) {
case "compute":
var c__34851__auto___37235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37231,c__34851__auto___37235,G__35263_37232,G__35263_37233__$1,n__5636__auto___37230,jobs,results,process__$1,async){
return (function (){
var f__34852__auto__ = (function (){var switch__34630__auto__ = ((function (__37231,c__34851__auto___37235,G__35263_37232,G__35263_37233__$1,n__5636__auto___37230,jobs,results,process__$1,async){
return (function (state_35281){
var state_val_35282 = (state_35281[(1)]);
if((state_val_35282 === (1))){
var state_35281__$1 = state_35281;
var statearr_35283_37236 = state_35281__$1;
(statearr_35283_37236[(2)] = null);

(statearr_35283_37236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35282 === (2))){
var state_35281__$1 = state_35281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35281__$1,(4),jobs);
} else {
if((state_val_35282 === (3))){
var inst_35279 = (state_35281[(2)]);
var state_35281__$1 = state_35281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35281__$1,inst_35279);
} else {
if((state_val_35282 === (4))){
var inst_35270 = (state_35281[(2)]);
var inst_35271 = process__$1(inst_35270);
var state_35281__$1 = state_35281;
if(cljs.core.truth_(inst_35271)){
var statearr_35285_37237 = state_35281__$1;
(statearr_35285_37237[(1)] = (5));

} else {
var statearr_35286_37238 = state_35281__$1;
(statearr_35286_37238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35282 === (5))){
var state_35281__$1 = state_35281;
var statearr_35288_37239 = state_35281__$1;
(statearr_35288_37239[(2)] = null);

(statearr_35288_37239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35282 === (6))){
var state_35281__$1 = state_35281;
var statearr_35289_37240 = state_35281__$1;
(statearr_35289_37240[(2)] = null);

(statearr_35289_37240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35282 === (7))){
var inst_35276 = (state_35281[(2)]);
var state_35281__$1 = state_35281;
var statearr_35290_37241 = state_35281__$1;
(statearr_35290_37241[(2)] = inst_35276);

(statearr_35290_37241[(1)] = (3));


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
});})(__37231,c__34851__auto___37235,G__35263_37232,G__35263_37233__$1,n__5636__auto___37230,jobs,results,process__$1,async))
;
return ((function (__37231,switch__34630__auto__,c__34851__auto___37235,G__35263_37232,G__35263_37233__$1,n__5636__auto___37230,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____0 = (function (){
var statearr_35291 = [null,null,null,null,null,null,null];
(statearr_35291[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__);

(statearr_35291[(1)] = (1));

return statearr_35291;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____1 = (function (state_35281){
while(true){
var ret_value__34632__auto__ = (function (){try{while(true){
var result__34633__auto__ = switch__34630__auto__(state_35281);
if(cljs.core.keyword_identical_QMARK_(result__34633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34633__auto__;
}
break;
}
}catch (e35292){var ex__34634__auto__ = e35292;
var statearr_35293_37244 = state_35281;
(statearr_35293_37244[(2)] = ex__34634__auto__);


if(cljs.core.seq((state_35281[(4)]))){
var statearr_35294_37245 = state_35281;
(statearr_35294_37245[(1)] = cljs.core.first((state_35281[(4)])));

} else {
throw ex__34634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37246 = state_35281;
state_35281 = G__37246;
continue;
} else {
return ret_value__34632__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__ = function(state_35281){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____1.call(this,state_35281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__;
})()
;})(__37231,switch__34630__auto__,c__34851__auto___37235,G__35263_37232,G__35263_37233__$1,n__5636__auto___37230,jobs,results,process__$1,async))
})();
var state__34853__auto__ = (function (){var statearr_35296 = f__34852__auto__();
(statearr_35296[(6)] = c__34851__auto___37235);

return statearr_35296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34853__auto__);
});})(__37231,c__34851__auto___37235,G__35263_37232,G__35263_37233__$1,n__5636__auto___37230,jobs,results,process__$1,async))
);


break;
case "async":
var c__34851__auto___37247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37231,c__34851__auto___37247,G__35263_37232,G__35263_37233__$1,n__5636__auto___37230,jobs,results,process__$1,async){
return (function (){
var f__34852__auto__ = (function (){var switch__34630__auto__ = ((function (__37231,c__34851__auto___37247,G__35263_37232,G__35263_37233__$1,n__5636__auto___37230,jobs,results,process__$1,async){
return (function (state_35309){
var state_val_35310 = (state_35309[(1)]);
if((state_val_35310 === (1))){
var state_35309__$1 = state_35309;
var statearr_35311_37248 = state_35309__$1;
(statearr_35311_37248[(2)] = null);

(statearr_35311_37248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35310 === (2))){
var state_35309__$1 = state_35309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35309__$1,(4),jobs);
} else {
if((state_val_35310 === (3))){
var inst_35307 = (state_35309[(2)]);
var state_35309__$1 = state_35309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35309__$1,inst_35307);
} else {
if((state_val_35310 === (4))){
var inst_35299 = (state_35309[(2)]);
var inst_35300 = async(inst_35299);
var state_35309__$1 = state_35309;
if(cljs.core.truth_(inst_35300)){
var statearr_35312_37249 = state_35309__$1;
(statearr_35312_37249[(1)] = (5));

} else {
var statearr_35313_37250 = state_35309__$1;
(statearr_35313_37250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35310 === (5))){
var state_35309__$1 = state_35309;
var statearr_35314_37251 = state_35309__$1;
(statearr_35314_37251[(2)] = null);

(statearr_35314_37251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35310 === (6))){
var state_35309__$1 = state_35309;
var statearr_35316_37254 = state_35309__$1;
(statearr_35316_37254[(2)] = null);

(statearr_35316_37254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35310 === (7))){
var inst_35305 = (state_35309[(2)]);
var state_35309__$1 = state_35309;
var statearr_35317_37255 = state_35309__$1;
(statearr_35317_37255[(2)] = inst_35305);

(statearr_35317_37255[(1)] = (3));


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
});})(__37231,c__34851__auto___37247,G__35263_37232,G__35263_37233__$1,n__5636__auto___37230,jobs,results,process__$1,async))
;
return ((function (__37231,switch__34630__auto__,c__34851__auto___37247,G__35263_37232,G__35263_37233__$1,n__5636__auto___37230,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____0 = (function (){
var statearr_35318 = [null,null,null,null,null,null,null];
(statearr_35318[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__);

(statearr_35318[(1)] = (1));

return statearr_35318;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____1 = (function (state_35309){
while(true){
var ret_value__34632__auto__ = (function (){try{while(true){
var result__34633__auto__ = switch__34630__auto__(state_35309);
if(cljs.core.keyword_identical_QMARK_(result__34633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34633__auto__;
}
break;
}
}catch (e35319){var ex__34634__auto__ = e35319;
var statearr_35320_37257 = state_35309;
(statearr_35320_37257[(2)] = ex__34634__auto__);


if(cljs.core.seq((state_35309[(4)]))){
var statearr_35321_37258 = state_35309;
(statearr_35321_37258[(1)] = cljs.core.first((state_35309[(4)])));

} else {
throw ex__34634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37260 = state_35309;
state_35309 = G__37260;
continue;
} else {
return ret_value__34632__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__ = function(state_35309){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____1.call(this,state_35309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__;
})()
;})(__37231,switch__34630__auto__,c__34851__auto___37247,G__35263_37232,G__35263_37233__$1,n__5636__auto___37230,jobs,results,process__$1,async))
})();
var state__34853__auto__ = (function (){var statearr_35322 = f__34852__auto__();
(statearr_35322[(6)] = c__34851__auto___37247);

return statearr_35322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34853__auto__);
});})(__37231,c__34851__auto___37247,G__35263_37232,G__35263_37233__$1,n__5636__auto___37230,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35263_37233__$1)].join('')));

}

var G__37262 = (__37231 + (1));
__37231 = G__37262;
continue;
} else {
}
break;
}

var c__34851__auto___37263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34852__auto__ = (function (){var switch__34630__auto__ = (function (state_35345){
var state_val_35346 = (state_35345[(1)]);
if((state_val_35346 === (7))){
var inst_35341 = (state_35345[(2)]);
var state_35345__$1 = state_35345;
var statearr_35347_37265 = state_35345__$1;
(statearr_35347_37265[(2)] = inst_35341);

(statearr_35347_37265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35346 === (1))){
var state_35345__$1 = state_35345;
var statearr_35349_37266 = state_35345__$1;
(statearr_35349_37266[(2)] = null);

(statearr_35349_37266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35346 === (4))){
var inst_35325 = (state_35345[(7)]);
var inst_35325__$1 = (state_35345[(2)]);
var inst_35326 = (inst_35325__$1 == null);
var state_35345__$1 = (function (){var statearr_35350 = state_35345;
(statearr_35350[(7)] = inst_35325__$1);

return statearr_35350;
})();
if(cljs.core.truth_(inst_35326)){
var statearr_35351_37267 = state_35345__$1;
(statearr_35351_37267[(1)] = (5));

} else {
var statearr_35352_37268 = state_35345__$1;
(statearr_35352_37268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35346 === (6))){
var inst_35325 = (state_35345[(7)]);
var inst_35330 = (state_35345[(8)]);
var inst_35330__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_35332 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35333 = [inst_35325,inst_35330__$1];
var inst_35334 = (new cljs.core.PersistentVector(null,2,(5),inst_35332,inst_35333,null));
var state_35345__$1 = (function (){var statearr_35353 = state_35345;
(statearr_35353[(8)] = inst_35330__$1);

return statearr_35353;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35345__$1,(8),jobs,inst_35334);
} else {
if((state_val_35346 === (3))){
var inst_35343 = (state_35345[(2)]);
var state_35345__$1 = state_35345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35345__$1,inst_35343);
} else {
if((state_val_35346 === (2))){
var state_35345__$1 = state_35345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35345__$1,(4),from);
} else {
if((state_val_35346 === (9))){
var inst_35338 = (state_35345[(2)]);
var state_35345__$1 = (function (){var statearr_35355 = state_35345;
(statearr_35355[(9)] = inst_35338);

return statearr_35355;
})();
var statearr_35356_37271 = state_35345__$1;
(statearr_35356_37271[(2)] = null);

(statearr_35356_37271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35346 === (5))){
var inst_35328 = cljs.core.async.close_BANG_(jobs);
var state_35345__$1 = state_35345;
var statearr_35357_37272 = state_35345__$1;
(statearr_35357_37272[(2)] = inst_35328);

(statearr_35357_37272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35346 === (8))){
var inst_35330 = (state_35345[(8)]);
var inst_35336 = (state_35345[(2)]);
var state_35345__$1 = (function (){var statearr_35358 = state_35345;
(statearr_35358[(10)] = inst_35336);

return statearr_35358;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35345__$1,(9),results,inst_35330);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____0 = (function (){
var statearr_35359 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35359[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__);

(statearr_35359[(1)] = (1));

return statearr_35359;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____1 = (function (state_35345){
while(true){
var ret_value__34632__auto__ = (function (){try{while(true){
var result__34633__auto__ = switch__34630__auto__(state_35345);
if(cljs.core.keyword_identical_QMARK_(result__34633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34633__auto__;
}
break;
}
}catch (e35360){var ex__34634__auto__ = e35360;
var statearr_35361_37273 = state_35345;
(statearr_35361_37273[(2)] = ex__34634__auto__);


if(cljs.core.seq((state_35345[(4)]))){
var statearr_35362_37274 = state_35345;
(statearr_35362_37274[(1)] = cljs.core.first((state_35345[(4)])));

} else {
throw ex__34634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37275 = state_35345;
state_35345 = G__37275;
continue;
} else {
return ret_value__34632__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__ = function(state_35345){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____1.call(this,state_35345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__;
})()
})();
var state__34853__auto__ = (function (){var statearr_35364 = f__34852__auto__();
(statearr_35364[(6)] = c__34851__auto___37263);

return statearr_35364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34853__auto__);
}));


var c__34851__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34852__auto__ = (function (){var switch__34630__auto__ = (function (state_35402){
var state_val_35403 = (state_35402[(1)]);
if((state_val_35403 === (7))){
var inst_35398 = (state_35402[(2)]);
var state_35402__$1 = state_35402;
var statearr_35404_37276 = state_35402__$1;
(statearr_35404_37276[(2)] = inst_35398);

(statearr_35404_37276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (20))){
var state_35402__$1 = state_35402;
var statearr_35405_37277 = state_35402__$1;
(statearr_35405_37277[(2)] = null);

(statearr_35405_37277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (1))){
var state_35402__$1 = state_35402;
var statearr_35406_37278 = state_35402__$1;
(statearr_35406_37278[(2)] = null);

(statearr_35406_37278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (4))){
var inst_35367 = (state_35402[(7)]);
var inst_35367__$1 = (state_35402[(2)]);
var inst_35368 = (inst_35367__$1 == null);
var state_35402__$1 = (function (){var statearr_35408 = state_35402;
(statearr_35408[(7)] = inst_35367__$1);

return statearr_35408;
})();
if(cljs.core.truth_(inst_35368)){
var statearr_35409_37280 = state_35402__$1;
(statearr_35409_37280[(1)] = (5));

} else {
var statearr_35410_37285 = state_35402__$1;
(statearr_35410_37285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (15))){
var inst_35380 = (state_35402[(8)]);
var state_35402__$1 = state_35402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35402__$1,(18),to,inst_35380);
} else {
if((state_val_35403 === (21))){
var inst_35393 = (state_35402[(2)]);
var state_35402__$1 = state_35402;
var statearr_35411_37289 = state_35402__$1;
(statearr_35411_37289[(2)] = inst_35393);

(statearr_35411_37289[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (13))){
var inst_35395 = (state_35402[(2)]);
var state_35402__$1 = (function (){var statearr_35413 = state_35402;
(statearr_35413[(9)] = inst_35395);

return statearr_35413;
})();
var statearr_35414_37291 = state_35402__$1;
(statearr_35414_37291[(2)] = null);

(statearr_35414_37291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (6))){
var inst_35367 = (state_35402[(7)]);
var state_35402__$1 = state_35402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35402__$1,(11),inst_35367);
} else {
if((state_val_35403 === (17))){
var inst_35388 = (state_35402[(2)]);
var state_35402__$1 = state_35402;
if(cljs.core.truth_(inst_35388)){
var statearr_35415_37292 = state_35402__$1;
(statearr_35415_37292[(1)] = (19));

} else {
var statearr_35416_37293 = state_35402__$1;
(statearr_35416_37293[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (3))){
var inst_35400 = (state_35402[(2)]);
var state_35402__$1 = state_35402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35402__$1,inst_35400);
} else {
if((state_val_35403 === (12))){
var inst_35377 = (state_35402[(10)]);
var state_35402__$1 = state_35402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35402__$1,(14),inst_35377);
} else {
if((state_val_35403 === (2))){
var state_35402__$1 = state_35402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35402__$1,(4),results);
} else {
if((state_val_35403 === (19))){
var state_35402__$1 = state_35402;
var statearr_35417_37295 = state_35402__$1;
(statearr_35417_37295[(2)] = null);

(statearr_35417_37295[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (11))){
var inst_35377 = (state_35402[(2)]);
var state_35402__$1 = (function (){var statearr_35418 = state_35402;
(statearr_35418[(10)] = inst_35377);

return statearr_35418;
})();
var statearr_35419_37296 = state_35402__$1;
(statearr_35419_37296[(2)] = null);

(statearr_35419_37296[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (9))){
var state_35402__$1 = state_35402;
var statearr_35421_37297 = state_35402__$1;
(statearr_35421_37297[(2)] = null);

(statearr_35421_37297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (5))){
var state_35402__$1 = state_35402;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35422_37298 = state_35402__$1;
(statearr_35422_37298[(1)] = (8));

} else {
var statearr_35423_37299 = state_35402__$1;
(statearr_35423_37299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (14))){
var inst_35382 = (state_35402[(11)]);
var inst_35380 = (state_35402[(8)]);
var inst_35380__$1 = (state_35402[(2)]);
var inst_35381 = (inst_35380__$1 == null);
var inst_35382__$1 = cljs.core.not(inst_35381);
var state_35402__$1 = (function (){var statearr_35424 = state_35402;
(statearr_35424[(11)] = inst_35382__$1);

(statearr_35424[(8)] = inst_35380__$1);

return statearr_35424;
})();
if(inst_35382__$1){
var statearr_35425_37300 = state_35402__$1;
(statearr_35425_37300[(1)] = (15));

} else {
var statearr_35426_37301 = state_35402__$1;
(statearr_35426_37301[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (16))){
var inst_35382 = (state_35402[(11)]);
var state_35402__$1 = state_35402;
var statearr_35427_37302 = state_35402__$1;
(statearr_35427_37302[(2)] = inst_35382);

(statearr_35427_37302[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (10))){
var inst_35374 = (state_35402[(2)]);
var state_35402__$1 = state_35402;
var statearr_35428_37303 = state_35402__$1;
(statearr_35428_37303[(2)] = inst_35374);

(statearr_35428_37303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (18))){
var inst_35385 = (state_35402[(2)]);
var state_35402__$1 = state_35402;
var statearr_35429_37307 = state_35402__$1;
(statearr_35429_37307[(2)] = inst_35385);

(statearr_35429_37307[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (8))){
var inst_35371 = cljs.core.async.close_BANG_(to);
var state_35402__$1 = state_35402;
var statearr_35431_37314 = state_35402__$1;
(statearr_35431_37314[(2)] = inst_35371);

(statearr_35431_37314[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____0 = (function (){
var statearr_35432 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35432[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__);

(statearr_35432[(1)] = (1));

return statearr_35432;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____1 = (function (state_35402){
while(true){
var ret_value__34632__auto__ = (function (){try{while(true){
var result__34633__auto__ = switch__34630__auto__(state_35402);
if(cljs.core.keyword_identical_QMARK_(result__34633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34633__auto__;
}
break;
}
}catch (e35433){var ex__34634__auto__ = e35433;
var statearr_35434_37315 = state_35402;
(statearr_35434_37315[(2)] = ex__34634__auto__);


if(cljs.core.seq((state_35402[(4)]))){
var statearr_35435_37316 = state_35402;
(statearr_35435_37316[(1)] = cljs.core.first((state_35402[(4)])));

} else {
throw ex__34634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37317 = state_35402;
state_35402 = G__37317;
continue;
} else {
return ret_value__34632__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__ = function(state_35402){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____1.call(this,state_35402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34631__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34631__auto__;
})()
})();
var state__34853__auto__ = (function (){var statearr_35436 = f__34852__auto__();
(statearr_35436[(6)] = c__34851__auto__);

return statearr_35436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34853__auto__);
}));

return c__34851__auto__;
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
var G__35439 = arguments.length;
switch (G__35439) {
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
var G__35442 = arguments.length;
switch (G__35442) {
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
var G__35445 = arguments.length;
switch (G__35445) {
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
var c__34851__auto___37334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34852__auto__ = (function (){var switch__34630__auto__ = (function (state_35472){
var state_val_35473 = (state_35472[(1)]);
if((state_val_35473 === (7))){
var inst_35468 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
var statearr_35474_37335 = state_35472__$1;
(statearr_35474_37335[(2)] = inst_35468);

(statearr_35474_37335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (1))){
var state_35472__$1 = state_35472;
var statearr_35475_37336 = state_35472__$1;
(statearr_35475_37336[(2)] = null);

(statearr_35475_37336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (4))){
var inst_35448 = (state_35472[(7)]);
var inst_35448__$1 = (state_35472[(2)]);
var inst_35449 = (inst_35448__$1 == null);
var state_35472__$1 = (function (){var statearr_35476 = state_35472;
(statearr_35476[(7)] = inst_35448__$1);

return statearr_35476;
})();
if(cljs.core.truth_(inst_35449)){
var statearr_35478_37337 = state_35472__$1;
(statearr_35478_37337[(1)] = (5));

} else {
var statearr_35479_37338 = state_35472__$1;
(statearr_35479_37338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (13))){
var state_35472__$1 = state_35472;
var statearr_35480_37339 = state_35472__$1;
(statearr_35480_37339[(2)] = null);

(statearr_35480_37339[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (6))){
var inst_35448 = (state_35472[(7)]);
var inst_35455 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35448) : p.call(null,inst_35448));
var state_35472__$1 = state_35472;
if(cljs.core.truth_(inst_35455)){
var statearr_35481_37341 = state_35472__$1;
(statearr_35481_37341[(1)] = (9));

} else {
var statearr_35482_37342 = state_35472__$1;
(statearr_35482_37342[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (3))){
var inst_35470 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35472__$1,inst_35470);
} else {
if((state_val_35473 === (12))){
var state_35472__$1 = state_35472;
var statearr_35483_37343 = state_35472__$1;
(statearr_35483_37343[(2)] = null);

(statearr_35483_37343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (2))){
var state_35472__$1 = state_35472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35472__$1,(4),ch);
} else {
if((state_val_35473 === (11))){
var inst_35448 = (state_35472[(7)]);
var inst_35459 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35472__$1,(8),inst_35459,inst_35448);
} else {
if((state_val_35473 === (9))){
var state_35472__$1 = state_35472;
var statearr_35484_37344 = state_35472__$1;
(statearr_35484_37344[(2)] = tc);

(statearr_35484_37344[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (5))){
var inst_35452 = cljs.core.async.close_BANG_(tc);
var inst_35453 = cljs.core.async.close_BANG_(fc);
var state_35472__$1 = (function (){var statearr_35486 = state_35472;
(statearr_35486[(8)] = inst_35452);

return statearr_35486;
})();
var statearr_35487_37345 = state_35472__$1;
(statearr_35487_37345[(2)] = inst_35453);

(statearr_35487_37345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (14))){
var inst_35466 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
var statearr_35488_37346 = state_35472__$1;
(statearr_35488_37346[(2)] = inst_35466);

(statearr_35488_37346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (10))){
var state_35472__$1 = state_35472;
var statearr_35489_37348 = state_35472__$1;
(statearr_35489_37348[(2)] = fc);

(statearr_35489_37348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (8))){
var inst_35461 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
if(cljs.core.truth_(inst_35461)){
var statearr_35490_37349 = state_35472__$1;
(statearr_35490_37349[(1)] = (12));

} else {
var statearr_35491_37350 = state_35472__$1;
(statearr_35491_37350[(1)] = (13));

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
var cljs$core$async$state_machine__34631__auto__ = null;
var cljs$core$async$state_machine__34631__auto____0 = (function (){
var statearr_35492 = [null,null,null,null,null,null,null,null,null];
(statearr_35492[(0)] = cljs$core$async$state_machine__34631__auto__);

(statearr_35492[(1)] = (1));

return statearr_35492;
});
var cljs$core$async$state_machine__34631__auto____1 = (function (state_35472){
while(true){
var ret_value__34632__auto__ = (function (){try{while(true){
var result__34633__auto__ = switch__34630__auto__(state_35472);
if(cljs.core.keyword_identical_QMARK_(result__34633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34633__auto__;
}
break;
}
}catch (e35493){var ex__34634__auto__ = e35493;
var statearr_35494_37353 = state_35472;
(statearr_35494_37353[(2)] = ex__34634__auto__);


if(cljs.core.seq((state_35472[(4)]))){
var statearr_35495_37354 = state_35472;
(statearr_35495_37354[(1)] = cljs.core.first((state_35472[(4)])));

} else {
throw ex__34634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37355 = state_35472;
state_35472 = G__37355;
continue;
} else {
return ret_value__34632__auto__;
}
break;
}
});
cljs$core$async$state_machine__34631__auto__ = function(state_35472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34631__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34631__auto____1.call(this,state_35472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34631__auto____0;
cljs$core$async$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34631__auto____1;
return cljs$core$async$state_machine__34631__auto__;
})()
})();
var state__34853__auto__ = (function (){var statearr_35497 = f__34852__auto__();
(statearr_35497[(6)] = c__34851__auto___37334);

return statearr_35497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34853__auto__);
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
var c__34851__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34852__auto__ = (function (){var switch__34630__auto__ = (function (state_35519){
var state_val_35520 = (state_35519[(1)]);
if((state_val_35520 === (7))){
var inst_35515 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35522_37359 = state_35519__$1;
(statearr_35522_37359[(2)] = inst_35515);

(statearr_35522_37359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (1))){
var inst_35498 = init;
var inst_35499 = inst_35498;
var state_35519__$1 = (function (){var statearr_35523 = state_35519;
(statearr_35523[(7)] = inst_35499);

return statearr_35523;
})();
var statearr_35524_37362 = state_35519__$1;
(statearr_35524_37362[(2)] = null);

(statearr_35524_37362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (4))){
var inst_35502 = (state_35519[(8)]);
var inst_35502__$1 = (state_35519[(2)]);
var inst_35503 = (inst_35502__$1 == null);
var state_35519__$1 = (function (){var statearr_35525 = state_35519;
(statearr_35525[(8)] = inst_35502__$1);

return statearr_35525;
})();
if(cljs.core.truth_(inst_35503)){
var statearr_35526_37363 = state_35519__$1;
(statearr_35526_37363[(1)] = (5));

} else {
var statearr_35527_37364 = state_35519__$1;
(statearr_35527_37364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (6))){
var inst_35506 = (state_35519[(9)]);
var inst_35502 = (state_35519[(8)]);
var inst_35499 = (state_35519[(7)]);
var inst_35506__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_35499,inst_35502) : f.call(null,inst_35499,inst_35502));
var inst_35507 = cljs.core.reduced_QMARK_(inst_35506__$1);
var state_35519__$1 = (function (){var statearr_35528 = state_35519;
(statearr_35528[(9)] = inst_35506__$1);

return statearr_35528;
})();
if(inst_35507){
var statearr_35529_37365 = state_35519__$1;
(statearr_35529_37365[(1)] = (8));

} else {
var statearr_35530_37366 = state_35519__$1;
(statearr_35530_37366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (3))){
var inst_35517 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35519__$1,inst_35517);
} else {
if((state_val_35520 === (2))){
var state_35519__$1 = state_35519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35519__$1,(4),ch);
} else {
if((state_val_35520 === (9))){
var inst_35506 = (state_35519[(9)]);
var inst_35499 = inst_35506;
var state_35519__$1 = (function (){var statearr_35531 = state_35519;
(statearr_35531[(7)] = inst_35499);

return statearr_35531;
})();
var statearr_35532_37367 = state_35519__$1;
(statearr_35532_37367[(2)] = null);

(statearr_35532_37367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (5))){
var inst_35499 = (state_35519[(7)]);
var state_35519__$1 = state_35519;
var statearr_35533_37372 = state_35519__$1;
(statearr_35533_37372[(2)] = inst_35499);

(statearr_35533_37372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (10))){
var inst_35513 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35534_37373 = state_35519__$1;
(statearr_35534_37373[(2)] = inst_35513);

(statearr_35534_37373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (8))){
var inst_35506 = (state_35519[(9)]);
var inst_35509 = cljs.core.deref(inst_35506);
var state_35519__$1 = state_35519;
var statearr_35535_37375 = state_35519__$1;
(statearr_35535_37375[(2)] = inst_35509);

(statearr_35535_37375[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__34631__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34631__auto____0 = (function (){
var statearr_35536 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35536[(0)] = cljs$core$async$reduce_$_state_machine__34631__auto__);

(statearr_35536[(1)] = (1));

return statearr_35536;
});
var cljs$core$async$reduce_$_state_machine__34631__auto____1 = (function (state_35519){
while(true){
var ret_value__34632__auto__ = (function (){try{while(true){
var result__34633__auto__ = switch__34630__auto__(state_35519);
if(cljs.core.keyword_identical_QMARK_(result__34633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34633__auto__;
}
break;
}
}catch (e35537){var ex__34634__auto__ = e35537;
var statearr_35538_37379 = state_35519;
(statearr_35538_37379[(2)] = ex__34634__auto__);


if(cljs.core.seq((state_35519[(4)]))){
var statearr_35539_37380 = state_35519;
(statearr_35539_37380[(1)] = cljs.core.first((state_35519[(4)])));

} else {
throw ex__34634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37381 = state_35519;
state_35519 = G__37381;
continue;
} else {
return ret_value__34632__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34631__auto__ = function(state_35519){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34631__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34631__auto____1.call(this,state_35519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34631__auto____0;
cljs$core$async$reduce_$_state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34631__auto____1;
return cljs$core$async$reduce_$_state_machine__34631__auto__;
})()
})();
var state__34853__auto__ = (function (){var statearr_35541 = f__34852__auto__();
(statearr_35541[(6)] = c__34851__auto__);

return statearr_35541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34853__auto__);
}));

return c__34851__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34851__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34852__auto__ = (function (){var switch__34630__auto__ = (function (state_35547){
var state_val_35548 = (state_35547[(1)]);
if((state_val_35548 === (1))){
var inst_35542 = cljs.core.async.reduce(f__$1,init,ch);
var state_35547__$1 = state_35547;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35547__$1,(2),inst_35542);
} else {
if((state_val_35548 === (2))){
var inst_35544 = (state_35547[(2)]);
var inst_35545 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_35544) : f__$1.call(null,inst_35544));
var state_35547__$1 = state_35547;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35547__$1,inst_35545);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34631__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34631__auto____0 = (function (){
var statearr_35550 = [null,null,null,null,null,null,null];
(statearr_35550[(0)] = cljs$core$async$transduce_$_state_machine__34631__auto__);

(statearr_35550[(1)] = (1));

return statearr_35550;
});
var cljs$core$async$transduce_$_state_machine__34631__auto____1 = (function (state_35547){
while(true){
var ret_value__34632__auto__ = (function (){try{while(true){
var result__34633__auto__ = switch__34630__auto__(state_35547);
if(cljs.core.keyword_identical_QMARK_(result__34633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34633__auto__;
}
break;
}
}catch (e35551){var ex__34634__auto__ = e35551;
var statearr_35552_37383 = state_35547;
(statearr_35552_37383[(2)] = ex__34634__auto__);


if(cljs.core.seq((state_35547[(4)]))){
var statearr_35553_37384 = state_35547;
(statearr_35553_37384[(1)] = cljs.core.first((state_35547[(4)])));

} else {
throw ex__34634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37385 = state_35547;
state_35547 = G__37385;
continue;
} else {
return ret_value__34632__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34631__auto__ = function(state_35547){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34631__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34631__auto____1.call(this,state_35547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34631__auto____0;
cljs$core$async$transduce_$_state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34631__auto____1;
return cljs$core$async$transduce_$_state_machine__34631__auto__;
})()
})();
var state__34853__auto__ = (function (){var statearr_35554 = f__34852__auto__();
(statearr_35554[(6)] = c__34851__auto__);

return statearr_35554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34853__auto__);
}));

return c__34851__auto__;
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
var G__35556 = arguments.length;
switch (G__35556) {
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
var c__34851__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34852__auto__ = (function (){var switch__34630__auto__ = (function (state_35582){
var state_val_35583 = (state_35582[(1)]);
if((state_val_35583 === (7))){
var inst_35564 = (state_35582[(2)]);
var state_35582__$1 = state_35582;
var statearr_35585_37388 = state_35582__$1;
(statearr_35585_37388[(2)] = inst_35564);

(statearr_35585_37388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (1))){
var inst_35558 = cljs.core.seq(coll);
var inst_35559 = inst_35558;
var state_35582__$1 = (function (){var statearr_35586 = state_35582;
(statearr_35586[(7)] = inst_35559);

return statearr_35586;
})();
var statearr_35587_37389 = state_35582__$1;
(statearr_35587_37389[(2)] = null);

(statearr_35587_37389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (4))){
var inst_35559 = (state_35582[(7)]);
var inst_35562 = cljs.core.first(inst_35559);
var state_35582__$1 = state_35582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35582__$1,(7),ch,inst_35562);
} else {
if((state_val_35583 === (13))){
var inst_35576 = (state_35582[(2)]);
var state_35582__$1 = state_35582;
var statearr_35588_37390 = state_35582__$1;
(statearr_35588_37390[(2)] = inst_35576);

(statearr_35588_37390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (6))){
var inst_35567 = (state_35582[(2)]);
var state_35582__$1 = state_35582;
if(cljs.core.truth_(inst_35567)){
var statearr_35589_37398 = state_35582__$1;
(statearr_35589_37398[(1)] = (8));

} else {
var statearr_35590_37400 = state_35582__$1;
(statearr_35590_37400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (3))){
var inst_35580 = (state_35582[(2)]);
var state_35582__$1 = state_35582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35582__$1,inst_35580);
} else {
if((state_val_35583 === (12))){
var state_35582__$1 = state_35582;
var statearr_35592_37401 = state_35582__$1;
(statearr_35592_37401[(2)] = null);

(statearr_35592_37401[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (2))){
var inst_35559 = (state_35582[(7)]);
var state_35582__$1 = state_35582;
if(cljs.core.truth_(inst_35559)){
var statearr_35593_37403 = state_35582__$1;
(statearr_35593_37403[(1)] = (4));

} else {
var statearr_35594_37404 = state_35582__$1;
(statearr_35594_37404[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (11))){
var inst_35573 = cljs.core.async.close_BANG_(ch);
var state_35582__$1 = state_35582;
var statearr_35595_37405 = state_35582__$1;
(statearr_35595_37405[(2)] = inst_35573);

(statearr_35595_37405[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (9))){
var state_35582__$1 = state_35582;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35596_37406 = state_35582__$1;
(statearr_35596_37406[(1)] = (11));

} else {
var statearr_35597_37408 = state_35582__$1;
(statearr_35597_37408[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (5))){
var inst_35559 = (state_35582[(7)]);
var state_35582__$1 = state_35582;
var statearr_35598_37409 = state_35582__$1;
(statearr_35598_37409[(2)] = inst_35559);

(statearr_35598_37409[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (10))){
var inst_35578 = (state_35582[(2)]);
var state_35582__$1 = state_35582;
var statearr_35599_37410 = state_35582__$1;
(statearr_35599_37410[(2)] = inst_35578);

(statearr_35599_37410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (8))){
var inst_35559 = (state_35582[(7)]);
var inst_35569 = cljs.core.next(inst_35559);
var inst_35559__$1 = inst_35569;
var state_35582__$1 = (function (){var statearr_35601 = state_35582;
(statearr_35601[(7)] = inst_35559__$1);

return statearr_35601;
})();
var statearr_35602_37411 = state_35582__$1;
(statearr_35602_37411[(2)] = null);

(statearr_35602_37411[(1)] = (2));


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
var cljs$core$async$state_machine__34631__auto__ = null;
var cljs$core$async$state_machine__34631__auto____0 = (function (){
var statearr_35603 = [null,null,null,null,null,null,null,null];
(statearr_35603[(0)] = cljs$core$async$state_machine__34631__auto__);

(statearr_35603[(1)] = (1));

return statearr_35603;
});
var cljs$core$async$state_machine__34631__auto____1 = (function (state_35582){
while(true){
var ret_value__34632__auto__ = (function (){try{while(true){
var result__34633__auto__ = switch__34630__auto__(state_35582);
if(cljs.core.keyword_identical_QMARK_(result__34633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34633__auto__;
}
break;
}
}catch (e35604){var ex__34634__auto__ = e35604;
var statearr_35605_37412 = state_35582;
(statearr_35605_37412[(2)] = ex__34634__auto__);


if(cljs.core.seq((state_35582[(4)]))){
var statearr_35606_37413 = state_35582;
(statearr_35606_37413[(1)] = cljs.core.first((state_35582[(4)])));

} else {
throw ex__34634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37414 = state_35582;
state_35582 = G__37414;
continue;
} else {
return ret_value__34632__auto__;
}
break;
}
});
cljs$core$async$state_machine__34631__auto__ = function(state_35582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34631__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34631__auto____1.call(this,state_35582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34631__auto____0;
cljs$core$async$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34631__auto____1;
return cljs$core$async$state_machine__34631__auto__;
})()
})();
var state__34853__auto__ = (function (){var statearr_35608 = f__34852__auto__();
(statearr_35608[(6)] = c__34851__auto__);

return statearr_35608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34853__auto__);
}));

return c__34851__auto__;
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
var G__35611 = arguments.length;
switch (G__35611) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_37418 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_37418(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_37421 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_37421(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_37429 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_37429(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_37430 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_37430(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35616 = (function (ch,cs,meta35617){
this.ch = ch;
this.cs = cs;
this.meta35617 = meta35617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35618,meta35617__$1){
var self__ = this;
var _35618__$1 = this;
return (new cljs.core.async.t_cljs$core$async35616(self__.ch,self__.cs,meta35617__$1));
}));

(cljs.core.async.t_cljs$core$async35616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35618){
var self__ = this;
var _35618__$1 = this;
return self__.meta35617;
}));

(cljs.core.async.t_cljs$core$async35616.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35616.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35616.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35616.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async35616.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async35616.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async35616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35617","meta35617",1291816997,null)], null);
}));

(cljs.core.async.t_cljs$core$async35616.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35616.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35616");

(cljs.core.async.t_cljs$core$async35616.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35616");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35616.
 */
cljs.core.async.__GT_t_cljs$core$async35616 = (function cljs$core$async$__GT_t_cljs$core$async35616(ch,cs,meta35617){
return (new cljs.core.async.t_cljs$core$async35616(ch,cs,meta35617));
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
var m = (new cljs.core.async.t_cljs$core$async35616(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__34851__auto___37438 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34852__auto__ = (function (){var switch__34630__auto__ = (function (state_35755){
var state_val_35756 = (state_35755[(1)]);
if((state_val_35756 === (7))){
var inst_35751 = (state_35755[(2)]);
var state_35755__$1 = state_35755;
var statearr_35758_37440 = state_35755__$1;
(statearr_35758_37440[(2)] = inst_35751);

(statearr_35758_37440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (20))){
var inst_35655 = (state_35755[(7)]);
var inst_35667 = cljs.core.first(inst_35655);
var inst_35668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35667,(0),null);
var inst_35669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35667,(1),null);
var state_35755__$1 = (function (){var statearr_35759 = state_35755;
(statearr_35759[(8)] = inst_35668);

return statearr_35759;
})();
if(cljs.core.truth_(inst_35669)){
var statearr_35760_37441 = state_35755__$1;
(statearr_35760_37441[(1)] = (22));

} else {
var statearr_35761_37442 = state_35755__$1;
(statearr_35761_37442[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (27))){
var inst_35699 = (state_35755[(9)]);
var inst_35704 = (state_35755[(10)]);
var inst_35697 = (state_35755[(11)]);
var inst_35623 = (state_35755[(12)]);
var inst_35704__$1 = cljs.core._nth(inst_35697,inst_35699);
var inst_35705 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35704__$1,inst_35623,done);
var state_35755__$1 = (function (){var statearr_35762 = state_35755;
(statearr_35762[(10)] = inst_35704__$1);

return statearr_35762;
})();
if(cljs.core.truth_(inst_35705)){
var statearr_35763_37446 = state_35755__$1;
(statearr_35763_37446[(1)] = (30));

} else {
var statearr_35764_37447 = state_35755__$1;
(statearr_35764_37447[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (1))){
var state_35755__$1 = state_35755;
var statearr_35765_37448 = state_35755__$1;
(statearr_35765_37448[(2)] = null);

(statearr_35765_37448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (24))){
var inst_35655 = (state_35755[(7)]);
var inst_35674 = (state_35755[(2)]);
var inst_35675 = cljs.core.next(inst_35655);
var inst_35632 = inst_35675;
var inst_35633 = null;
var inst_35634 = (0);
var inst_35635 = (0);
var state_35755__$1 = (function (){var statearr_35767 = state_35755;
(statearr_35767[(13)] = inst_35635);

(statearr_35767[(14)] = inst_35634);

(statearr_35767[(15)] = inst_35674);

(statearr_35767[(16)] = inst_35633);

(statearr_35767[(17)] = inst_35632);

return statearr_35767;
})();
var statearr_35768_37449 = state_35755__$1;
(statearr_35768_37449[(2)] = null);

(statearr_35768_37449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (39))){
var state_35755__$1 = state_35755;
var statearr_35772_37450 = state_35755__$1;
(statearr_35772_37450[(2)] = null);

(statearr_35772_37450[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (4))){
var inst_35623 = (state_35755[(12)]);
var inst_35623__$1 = (state_35755[(2)]);
var inst_35624 = (inst_35623__$1 == null);
var state_35755__$1 = (function (){var statearr_35773 = state_35755;
(statearr_35773[(12)] = inst_35623__$1);

return statearr_35773;
})();
if(cljs.core.truth_(inst_35624)){
var statearr_35774_37451 = state_35755__$1;
(statearr_35774_37451[(1)] = (5));

} else {
var statearr_35775_37452 = state_35755__$1;
(statearr_35775_37452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (15))){
var inst_35635 = (state_35755[(13)]);
var inst_35634 = (state_35755[(14)]);
var inst_35633 = (state_35755[(16)]);
var inst_35632 = (state_35755[(17)]);
var inst_35650 = (state_35755[(2)]);
var inst_35652 = (inst_35635 + (1));
var tmp35769 = inst_35634;
var tmp35770 = inst_35633;
var tmp35771 = inst_35632;
var inst_35632__$1 = tmp35771;
var inst_35633__$1 = tmp35770;
var inst_35634__$1 = tmp35769;
var inst_35635__$1 = inst_35652;
var state_35755__$1 = (function (){var statearr_35776 = state_35755;
(statearr_35776[(13)] = inst_35635__$1);

(statearr_35776[(18)] = inst_35650);

(statearr_35776[(14)] = inst_35634__$1);

(statearr_35776[(16)] = inst_35633__$1);

(statearr_35776[(17)] = inst_35632__$1);

return statearr_35776;
})();
var statearr_35778_37460 = state_35755__$1;
(statearr_35778_37460[(2)] = null);

(statearr_35778_37460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (21))){
var inst_35678 = (state_35755[(2)]);
var state_35755__$1 = state_35755;
var statearr_35782_37461 = state_35755__$1;
(statearr_35782_37461[(2)] = inst_35678);

(statearr_35782_37461[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (31))){
var inst_35704 = (state_35755[(10)]);
var inst_35708 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35704);
var state_35755__$1 = state_35755;
var statearr_35783_37466 = state_35755__$1;
(statearr_35783_37466[(2)] = inst_35708);

(statearr_35783_37466[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (32))){
var inst_35699 = (state_35755[(9)]);
var inst_35698 = (state_35755[(19)]);
var inst_35697 = (state_35755[(11)]);
var inst_35696 = (state_35755[(20)]);
var inst_35710 = (state_35755[(2)]);
var inst_35711 = (inst_35699 + (1));
var tmp35779 = inst_35698;
var tmp35780 = inst_35697;
var tmp35781 = inst_35696;
var inst_35696__$1 = tmp35781;
var inst_35697__$1 = tmp35780;
var inst_35698__$1 = tmp35779;
var inst_35699__$1 = inst_35711;
var state_35755__$1 = (function (){var statearr_35784 = state_35755;
(statearr_35784[(9)] = inst_35699__$1);

(statearr_35784[(19)] = inst_35698__$1);

(statearr_35784[(21)] = inst_35710);

(statearr_35784[(11)] = inst_35697__$1);

(statearr_35784[(20)] = inst_35696__$1);

return statearr_35784;
})();
var statearr_35785_37470 = state_35755__$1;
(statearr_35785_37470[(2)] = null);

(statearr_35785_37470[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (40))){
var inst_35724 = (state_35755[(22)]);
var inst_35728 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35724);
var state_35755__$1 = state_35755;
var statearr_35788_37471 = state_35755__$1;
(statearr_35788_37471[(2)] = inst_35728);

(statearr_35788_37471[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (33))){
var inst_35714 = (state_35755[(23)]);
var inst_35717 = cljs.core.chunked_seq_QMARK_(inst_35714);
var state_35755__$1 = state_35755;
if(inst_35717){
var statearr_35789_37473 = state_35755__$1;
(statearr_35789_37473[(1)] = (36));

} else {
var statearr_35790_37474 = state_35755__$1;
(statearr_35790_37474[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (13))){
var inst_35644 = (state_35755[(24)]);
var inst_35647 = cljs.core.async.close_BANG_(inst_35644);
var state_35755__$1 = state_35755;
var statearr_35791_37478 = state_35755__$1;
(statearr_35791_37478[(2)] = inst_35647);

(statearr_35791_37478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (22))){
var inst_35668 = (state_35755[(8)]);
var inst_35671 = cljs.core.async.close_BANG_(inst_35668);
var state_35755__$1 = state_35755;
var statearr_35792_37479 = state_35755__$1;
(statearr_35792_37479[(2)] = inst_35671);

(statearr_35792_37479[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (36))){
var inst_35714 = (state_35755[(23)]);
var inst_35719 = cljs.core.chunk_first(inst_35714);
var inst_35720 = cljs.core.chunk_rest(inst_35714);
var inst_35721 = cljs.core.count(inst_35719);
var inst_35696 = inst_35720;
var inst_35697 = inst_35719;
var inst_35698 = inst_35721;
var inst_35699 = (0);
var state_35755__$1 = (function (){var statearr_35793 = state_35755;
(statearr_35793[(9)] = inst_35699);

(statearr_35793[(19)] = inst_35698);

(statearr_35793[(11)] = inst_35697);

(statearr_35793[(20)] = inst_35696);

return statearr_35793;
})();
var statearr_35794_37486 = state_35755__$1;
(statearr_35794_37486[(2)] = null);

(statearr_35794_37486[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (41))){
var inst_35714 = (state_35755[(23)]);
var inst_35730 = (state_35755[(2)]);
var inst_35731 = cljs.core.next(inst_35714);
var inst_35696 = inst_35731;
var inst_35697 = null;
var inst_35698 = (0);
var inst_35699 = (0);
var state_35755__$1 = (function (){var statearr_35795 = state_35755;
(statearr_35795[(25)] = inst_35730);

(statearr_35795[(9)] = inst_35699);

(statearr_35795[(19)] = inst_35698);

(statearr_35795[(11)] = inst_35697);

(statearr_35795[(20)] = inst_35696);

return statearr_35795;
})();
var statearr_35798_37490 = state_35755__$1;
(statearr_35798_37490[(2)] = null);

(statearr_35798_37490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (43))){
var state_35755__$1 = state_35755;
var statearr_35799_37494 = state_35755__$1;
(statearr_35799_37494[(2)] = null);

(statearr_35799_37494[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (29))){
var inst_35739 = (state_35755[(2)]);
var state_35755__$1 = state_35755;
var statearr_35800_37495 = state_35755__$1;
(statearr_35800_37495[(2)] = inst_35739);

(statearr_35800_37495[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (44))){
var inst_35748 = (state_35755[(2)]);
var state_35755__$1 = (function (){var statearr_35801 = state_35755;
(statearr_35801[(26)] = inst_35748);

return statearr_35801;
})();
var statearr_35802_37496 = state_35755__$1;
(statearr_35802_37496[(2)] = null);

(statearr_35802_37496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (6))){
var inst_35688 = (state_35755[(27)]);
var inst_35687 = cljs.core.deref(cs);
var inst_35688__$1 = cljs.core.keys(inst_35687);
var inst_35689 = cljs.core.count(inst_35688__$1);
var inst_35690 = cljs.core.reset_BANG_(dctr,inst_35689);
var inst_35695 = cljs.core.seq(inst_35688__$1);
var inst_35696 = inst_35695;
var inst_35697 = null;
var inst_35698 = (0);
var inst_35699 = (0);
var state_35755__$1 = (function (){var statearr_35803 = state_35755;
(statearr_35803[(27)] = inst_35688__$1);

(statearr_35803[(9)] = inst_35699);

(statearr_35803[(19)] = inst_35698);

(statearr_35803[(28)] = inst_35690);

(statearr_35803[(11)] = inst_35697);

(statearr_35803[(20)] = inst_35696);

return statearr_35803;
})();
var statearr_35804_37501 = state_35755__$1;
(statearr_35804_37501[(2)] = null);

(statearr_35804_37501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (28))){
var inst_35696 = (state_35755[(20)]);
var inst_35714 = (state_35755[(23)]);
var inst_35714__$1 = cljs.core.seq(inst_35696);
var state_35755__$1 = (function (){var statearr_35805 = state_35755;
(statearr_35805[(23)] = inst_35714__$1);

return statearr_35805;
})();
if(inst_35714__$1){
var statearr_35806_37503 = state_35755__$1;
(statearr_35806_37503[(1)] = (33));

} else {
var statearr_35807_37504 = state_35755__$1;
(statearr_35807_37504[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (25))){
var inst_35699 = (state_35755[(9)]);
var inst_35698 = (state_35755[(19)]);
var inst_35701 = (inst_35699 < inst_35698);
var inst_35702 = inst_35701;
var state_35755__$1 = state_35755;
if(cljs.core.truth_(inst_35702)){
var statearr_35808_37505 = state_35755__$1;
(statearr_35808_37505[(1)] = (27));

} else {
var statearr_35809_37506 = state_35755__$1;
(statearr_35809_37506[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (34))){
var state_35755__$1 = state_35755;
var statearr_35810_37507 = state_35755__$1;
(statearr_35810_37507[(2)] = null);

(statearr_35810_37507[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (17))){
var state_35755__$1 = state_35755;
var statearr_35811_37508 = state_35755__$1;
(statearr_35811_37508[(2)] = null);

(statearr_35811_37508[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (3))){
var inst_35753 = (state_35755[(2)]);
var state_35755__$1 = state_35755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35755__$1,inst_35753);
} else {
if((state_val_35756 === (12))){
var inst_35683 = (state_35755[(2)]);
var state_35755__$1 = state_35755;
var statearr_35812_37509 = state_35755__$1;
(statearr_35812_37509[(2)] = inst_35683);

(statearr_35812_37509[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (2))){
var state_35755__$1 = state_35755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35755__$1,(4),ch);
} else {
if((state_val_35756 === (23))){
var state_35755__$1 = state_35755;
var statearr_35814_37516 = state_35755__$1;
(statearr_35814_37516[(2)] = null);

(statearr_35814_37516[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (35))){
var inst_35737 = (state_35755[(2)]);
var state_35755__$1 = state_35755;
var statearr_35816_37517 = state_35755__$1;
(statearr_35816_37517[(2)] = inst_35737);

(statearr_35816_37517[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (19))){
var inst_35655 = (state_35755[(7)]);
var inst_35659 = cljs.core.chunk_first(inst_35655);
var inst_35660 = cljs.core.chunk_rest(inst_35655);
var inst_35661 = cljs.core.count(inst_35659);
var inst_35632 = inst_35660;
var inst_35633 = inst_35659;
var inst_35634 = inst_35661;
var inst_35635 = (0);
var state_35755__$1 = (function (){var statearr_35817 = state_35755;
(statearr_35817[(13)] = inst_35635);

(statearr_35817[(14)] = inst_35634);

(statearr_35817[(16)] = inst_35633);

(statearr_35817[(17)] = inst_35632);

return statearr_35817;
})();
var statearr_35818_37524 = state_35755__$1;
(statearr_35818_37524[(2)] = null);

(statearr_35818_37524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (11))){
var inst_35655 = (state_35755[(7)]);
var inst_35632 = (state_35755[(17)]);
var inst_35655__$1 = cljs.core.seq(inst_35632);
var state_35755__$1 = (function (){var statearr_35819 = state_35755;
(statearr_35819[(7)] = inst_35655__$1);

return statearr_35819;
})();
if(inst_35655__$1){
var statearr_35820_37525 = state_35755__$1;
(statearr_35820_37525[(1)] = (16));

} else {
var statearr_35821_37526 = state_35755__$1;
(statearr_35821_37526[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (9))){
var inst_35685 = (state_35755[(2)]);
var state_35755__$1 = state_35755;
var statearr_35822_37527 = state_35755__$1;
(statearr_35822_37527[(2)] = inst_35685);

(statearr_35822_37527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (5))){
var inst_35630 = cljs.core.deref(cs);
var inst_35631 = cljs.core.seq(inst_35630);
var inst_35632 = inst_35631;
var inst_35633 = null;
var inst_35634 = (0);
var inst_35635 = (0);
var state_35755__$1 = (function (){var statearr_35823 = state_35755;
(statearr_35823[(13)] = inst_35635);

(statearr_35823[(14)] = inst_35634);

(statearr_35823[(16)] = inst_35633);

(statearr_35823[(17)] = inst_35632);

return statearr_35823;
})();
var statearr_35824_37528 = state_35755__$1;
(statearr_35824_37528[(2)] = null);

(statearr_35824_37528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (14))){
var state_35755__$1 = state_35755;
var statearr_35825_37529 = state_35755__$1;
(statearr_35825_37529[(2)] = null);

(statearr_35825_37529[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (45))){
var inst_35745 = (state_35755[(2)]);
var state_35755__$1 = state_35755;
var statearr_35826_37531 = state_35755__$1;
(statearr_35826_37531[(2)] = inst_35745);

(statearr_35826_37531[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (26))){
var inst_35688 = (state_35755[(27)]);
var inst_35741 = (state_35755[(2)]);
var inst_35742 = cljs.core.seq(inst_35688);
var state_35755__$1 = (function (){var statearr_35827 = state_35755;
(statearr_35827[(29)] = inst_35741);

return statearr_35827;
})();
if(inst_35742){
var statearr_35828_37532 = state_35755__$1;
(statearr_35828_37532[(1)] = (42));

} else {
var statearr_35829_37533 = state_35755__$1;
(statearr_35829_37533[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (16))){
var inst_35655 = (state_35755[(7)]);
var inst_35657 = cljs.core.chunked_seq_QMARK_(inst_35655);
var state_35755__$1 = state_35755;
if(inst_35657){
var statearr_35830_37535 = state_35755__$1;
(statearr_35830_37535[(1)] = (19));

} else {
var statearr_35831_37536 = state_35755__$1;
(statearr_35831_37536[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (38))){
var inst_35734 = (state_35755[(2)]);
var state_35755__$1 = state_35755;
var statearr_35832_37537 = state_35755__$1;
(statearr_35832_37537[(2)] = inst_35734);

(statearr_35832_37537[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (30))){
var state_35755__$1 = state_35755;
var statearr_35833_37538 = state_35755__$1;
(statearr_35833_37538[(2)] = null);

(statearr_35833_37538[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (10))){
var inst_35635 = (state_35755[(13)]);
var inst_35633 = (state_35755[(16)]);
var inst_35643 = cljs.core._nth(inst_35633,inst_35635);
var inst_35644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35643,(0),null);
var inst_35645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35643,(1),null);
var state_35755__$1 = (function (){var statearr_35836 = state_35755;
(statearr_35836[(24)] = inst_35644);

return statearr_35836;
})();
if(cljs.core.truth_(inst_35645)){
var statearr_35838_37539 = state_35755__$1;
(statearr_35838_37539[(1)] = (13));

} else {
var statearr_35839_37540 = state_35755__$1;
(statearr_35839_37540[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (18))){
var inst_35681 = (state_35755[(2)]);
var state_35755__$1 = state_35755;
var statearr_35840_37541 = state_35755__$1;
(statearr_35840_37541[(2)] = inst_35681);

(statearr_35840_37541[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (42))){
var state_35755__$1 = state_35755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35755__$1,(45),dchan);
} else {
if((state_val_35756 === (37))){
var inst_35724 = (state_35755[(22)]);
var inst_35623 = (state_35755[(12)]);
var inst_35714 = (state_35755[(23)]);
var inst_35724__$1 = cljs.core.first(inst_35714);
var inst_35725 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35724__$1,inst_35623,done);
var state_35755__$1 = (function (){var statearr_35843 = state_35755;
(statearr_35843[(22)] = inst_35724__$1);

return statearr_35843;
})();
if(cljs.core.truth_(inst_35725)){
var statearr_35845_37542 = state_35755__$1;
(statearr_35845_37542[(1)] = (39));

} else {
var statearr_35846_37543 = state_35755__$1;
(statearr_35846_37543[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35756 === (8))){
var inst_35635 = (state_35755[(13)]);
var inst_35634 = (state_35755[(14)]);
var inst_35637 = (inst_35635 < inst_35634);
var inst_35638 = inst_35637;
var state_35755__$1 = state_35755;
if(cljs.core.truth_(inst_35638)){
var statearr_35847_37544 = state_35755__$1;
(statearr_35847_37544[(1)] = (10));

} else {
var statearr_35851_37545 = state_35755__$1;
(statearr_35851_37545[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__34631__auto__ = null;
var cljs$core$async$mult_$_state_machine__34631__auto____0 = (function (){
var statearr_35852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35852[(0)] = cljs$core$async$mult_$_state_machine__34631__auto__);

(statearr_35852[(1)] = (1));

return statearr_35852;
});
var cljs$core$async$mult_$_state_machine__34631__auto____1 = (function (state_35755){
while(true){
var ret_value__34632__auto__ = (function (){try{while(true){
var result__34633__auto__ = switch__34630__auto__(state_35755);
if(cljs.core.keyword_identical_QMARK_(result__34633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34633__auto__;
}
break;
}
}catch (e35853){var ex__34634__auto__ = e35853;
var statearr_35854_37556 = state_35755;
(statearr_35854_37556[(2)] = ex__34634__auto__);


if(cljs.core.seq((state_35755[(4)]))){
var statearr_35855_37557 = state_35755;
(statearr_35855_37557[(1)] = cljs.core.first((state_35755[(4)])));

} else {
throw ex__34634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37558 = state_35755;
state_35755 = G__37558;
continue;
} else {
return ret_value__34632__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34631__auto__ = function(state_35755){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34631__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34631__auto____1.call(this,state_35755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34631__auto____0;
cljs$core$async$mult_$_state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34631__auto____1;
return cljs$core$async$mult_$_state_machine__34631__auto__;
})()
})();
var state__34853__auto__ = (function (){var statearr_35860 = f__34852__auto__();
(statearr_35860[(6)] = c__34851__auto___37438);

return statearr_35860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34853__auto__);
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
var G__35870 = arguments.length;
switch (G__35870) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_37560 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_37560(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_37562 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_37562(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_37565 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_37565(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_37570 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_37570(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_37572 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_37572(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37579 = arguments.length;
var i__5770__auto___37580 = (0);
while(true){
if((i__5770__auto___37580 < len__5769__auto___37579)){
args__5775__auto__.push((arguments[i__5770__auto___37580]));

var G__37582 = (i__5770__auto___37580 + (1));
i__5770__auto___37580 = G__37582;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35939){
var map__35940 = p__35939;
var map__35940__$1 = cljs.core.__destructure_map(map__35940);
var opts = map__35940__$1;
var statearr_35941_37583 = state;
(statearr_35941_37583[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35945_37584 = state;
(statearr_35945_37584[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_35947_37585 = state;
(statearr_35947_37585[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35930){
var G__35931 = cljs.core.first(seq35930);
var seq35930__$1 = cljs.core.next(seq35930);
var G__35932 = cljs.core.first(seq35930__$1);
var seq35930__$2 = cljs.core.next(seq35930__$1);
var G__35933 = cljs.core.first(seq35930__$2);
var seq35930__$3 = cljs.core.next(seq35930__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35931,G__35932,G__35933,seq35930__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35968 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35969){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35969 = meta35969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35970,meta35969__$1){
var self__ = this;
var _35970__$1 = this;
return (new cljs.core.async.t_cljs$core$async35968(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35969__$1));
}));

(cljs.core.async.t_cljs$core$async35968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35970){
var self__ = this;
var _35970__$1 = this;
return self__.meta35969;
}));

(cljs.core.async.t_cljs$core$async35968.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35968.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35968.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35968.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35968.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35968.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35968.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35968.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35968.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35969","meta35969",-1157231358,null)], null);
}));

(cljs.core.async.t_cljs$core$async35968.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35968");

(cljs.core.async.t_cljs$core$async35968.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35968");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35968.
 */
cljs.core.async.__GT_t_cljs$core$async35968 = (function cljs$core$async$__GT_t_cljs$core$async35968(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35969){
return (new cljs.core.async.t_cljs$core$async35968(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35969));
});


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
var m = (new cljs.core.async.t_cljs$core$async35968(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__34851__auto___37602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34852__auto__ = (function (){var switch__34630__auto__ = (function (state_36071){
var state_val_36072 = (state_36071[(1)]);
if((state_val_36072 === (7))){
var inst_36027 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
if(cljs.core.truth_(inst_36027)){
var statearr_36078_37606 = state_36071__$1;
(statearr_36078_37606[(1)] = (8));

} else {
var statearr_36080_37607 = state_36071__$1;
(statearr_36080_37607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (20))){
var inst_36017 = (state_36071[(7)]);
var state_36071__$1 = state_36071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36071__$1,(23),out,inst_36017);
} else {
if((state_val_36072 === (1))){
var inst_35999 = calc_state();
var inst_36000 = cljs.core.__destructure_map(inst_35999);
var inst_36001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36000,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36000,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36000,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36004 = inst_35999;
var state_36071__$1 = (function (){var statearr_36084 = state_36071;
(statearr_36084[(8)] = inst_36001);

(statearr_36084[(9)] = inst_36004);

(statearr_36084[(10)] = inst_36002);

(statearr_36084[(11)] = inst_36003);

return statearr_36084;
})();
var statearr_36086_37614 = state_36071__$1;
(statearr_36086_37614[(2)] = null);

(statearr_36086_37614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (24))){
var inst_36008 = (state_36071[(12)]);
var inst_36004 = inst_36008;
var state_36071__$1 = (function (){var statearr_36087 = state_36071;
(statearr_36087[(9)] = inst_36004);

return statearr_36087;
})();
var statearr_36089_37619 = state_36071__$1;
(statearr_36089_37619[(2)] = null);

(statearr_36089_37619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (4))){
var inst_36021 = (state_36071[(13)]);
var inst_36017 = (state_36071[(7)]);
var inst_36016 = (state_36071[(2)]);
var inst_36017__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36016,(0),null);
var inst_36018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36016,(1),null);
var inst_36021__$1 = (inst_36017__$1 == null);
var state_36071__$1 = (function (){var statearr_36092 = state_36071;
(statearr_36092[(13)] = inst_36021__$1);

(statearr_36092[(7)] = inst_36017__$1);

(statearr_36092[(14)] = inst_36018);

return statearr_36092;
})();
if(cljs.core.truth_(inst_36021__$1)){
var statearr_36094_37621 = state_36071__$1;
(statearr_36094_37621[(1)] = (5));

} else {
var statearr_36095_37627 = state_36071__$1;
(statearr_36095_37627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (15))){
var inst_36042 = (state_36071[(15)]);
var inst_36009 = (state_36071[(16)]);
var inst_36042__$1 = cljs.core.empty_QMARK_(inst_36009);
var state_36071__$1 = (function (){var statearr_36098 = state_36071;
(statearr_36098[(15)] = inst_36042__$1);

return statearr_36098;
})();
if(inst_36042__$1){
var statearr_36101_37628 = state_36071__$1;
(statearr_36101_37628[(1)] = (17));

} else {
var statearr_36102_37629 = state_36071__$1;
(statearr_36102_37629[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (21))){
var inst_36008 = (state_36071[(12)]);
var inst_36004 = inst_36008;
var state_36071__$1 = (function (){var statearr_36104 = state_36071;
(statearr_36104[(9)] = inst_36004);

return statearr_36104;
})();
var statearr_36105_37630 = state_36071__$1;
(statearr_36105_37630[(2)] = null);

(statearr_36105_37630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (13))){
var inst_36034 = (state_36071[(2)]);
var inst_36035 = calc_state();
var inst_36004 = inst_36035;
var state_36071__$1 = (function (){var statearr_36109 = state_36071;
(statearr_36109[(17)] = inst_36034);

(statearr_36109[(9)] = inst_36004);

return statearr_36109;
})();
var statearr_36111_37631 = state_36071__$1;
(statearr_36111_37631[(2)] = null);

(statearr_36111_37631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (22))){
var inst_36062 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
var statearr_36113_37632 = state_36071__$1;
(statearr_36113_37632[(2)] = inst_36062);

(statearr_36113_37632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (6))){
var inst_36018 = (state_36071[(14)]);
var inst_36025 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36018,change);
var state_36071__$1 = state_36071;
var statearr_36116_37633 = state_36071__$1;
(statearr_36116_37633[(2)] = inst_36025);

(statearr_36116_37633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (25))){
var state_36071__$1 = state_36071;
var statearr_36118_37634 = state_36071__$1;
(statearr_36118_37634[(2)] = null);

(statearr_36118_37634[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (17))){
var inst_36018 = (state_36071[(14)]);
var inst_36010 = (state_36071[(18)]);
var inst_36044 = (inst_36010.cljs$core$IFn$_invoke$arity$1 ? inst_36010.cljs$core$IFn$_invoke$arity$1(inst_36018) : inst_36010.call(null,inst_36018));
var inst_36045 = cljs.core.not(inst_36044);
var state_36071__$1 = state_36071;
var statearr_36122_37635 = state_36071__$1;
(statearr_36122_37635[(2)] = inst_36045);

(statearr_36122_37635[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (3))){
var inst_36066 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36071__$1,inst_36066);
} else {
if((state_val_36072 === (12))){
var state_36071__$1 = state_36071;
var statearr_36127_37639 = state_36071__$1;
(statearr_36127_37639[(2)] = null);

(statearr_36127_37639[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (2))){
var inst_36004 = (state_36071[(9)]);
var inst_36008 = (state_36071[(12)]);
var inst_36008__$1 = cljs.core.__destructure_map(inst_36004);
var inst_36009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36008__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36008__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36008__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36071__$1 = (function (){var statearr_36132 = state_36071;
(statearr_36132[(12)] = inst_36008__$1);

(statearr_36132[(16)] = inst_36009);

(statearr_36132[(18)] = inst_36010);

return statearr_36132;
})();
return cljs.core.async.ioc_alts_BANG_(state_36071__$1,(4),inst_36011);
} else {
if((state_val_36072 === (23))){
var inst_36053 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
if(cljs.core.truth_(inst_36053)){
var statearr_36134_37640 = state_36071__$1;
(statearr_36134_37640[(1)] = (24));

} else {
var statearr_36135_37641 = state_36071__$1;
(statearr_36135_37641[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (19))){
var inst_36048 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
var statearr_36139_37642 = state_36071__$1;
(statearr_36139_37642[(2)] = inst_36048);

(statearr_36139_37642[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (11))){
var inst_36018 = (state_36071[(14)]);
var inst_36031 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_36018);
var state_36071__$1 = state_36071;
var statearr_36143_37643 = state_36071__$1;
(statearr_36143_37643[(2)] = inst_36031);

(statearr_36143_37643[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (9))){
var inst_36038 = (state_36071[(19)]);
var inst_36018 = (state_36071[(14)]);
var inst_36009 = (state_36071[(16)]);
var inst_36038__$1 = (inst_36009.cljs$core$IFn$_invoke$arity$1 ? inst_36009.cljs$core$IFn$_invoke$arity$1(inst_36018) : inst_36009.call(null,inst_36018));
var state_36071__$1 = (function (){var statearr_36146 = state_36071;
(statearr_36146[(19)] = inst_36038__$1);

return statearr_36146;
})();
if(cljs.core.truth_(inst_36038__$1)){
var statearr_36147_37644 = state_36071__$1;
(statearr_36147_37644[(1)] = (14));

} else {
var statearr_36148_37645 = state_36071__$1;
(statearr_36148_37645[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (5))){
var inst_36021 = (state_36071[(13)]);
var state_36071__$1 = state_36071;
var statearr_36149_37652 = state_36071__$1;
(statearr_36149_37652[(2)] = inst_36021);

(statearr_36149_37652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (14))){
var inst_36038 = (state_36071[(19)]);
var state_36071__$1 = state_36071;
var statearr_36150_37653 = state_36071__$1;
(statearr_36150_37653[(2)] = inst_36038);

(statearr_36150_37653[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (26))){
var inst_36058 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
var statearr_36155_37654 = state_36071__$1;
(statearr_36155_37654[(2)] = inst_36058);

(statearr_36155_37654[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (16))){
var inst_36050 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
if(cljs.core.truth_(inst_36050)){
var statearr_36161_37655 = state_36071__$1;
(statearr_36161_37655[(1)] = (20));

} else {
var statearr_36162_37656 = state_36071__$1;
(statearr_36162_37656[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (10))){
var inst_36064 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
var statearr_36163_37657 = state_36071__$1;
(statearr_36163_37657[(2)] = inst_36064);

(statearr_36163_37657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (18))){
var inst_36042 = (state_36071[(15)]);
var state_36071__$1 = state_36071;
var statearr_36164_37658 = state_36071__$1;
(statearr_36164_37658[(2)] = inst_36042);

(statearr_36164_37658[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (8))){
var inst_36017 = (state_36071[(7)]);
var inst_36029 = (inst_36017 == null);
var state_36071__$1 = state_36071;
if(cljs.core.truth_(inst_36029)){
var statearr_36172_37659 = state_36071__$1;
(statearr_36172_37659[(1)] = (11));

} else {
var statearr_36173_37660 = state_36071__$1;
(statearr_36173_37660[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__34631__auto__ = null;
var cljs$core$async$mix_$_state_machine__34631__auto____0 = (function (){
var statearr_36175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36175[(0)] = cljs$core$async$mix_$_state_machine__34631__auto__);

(statearr_36175[(1)] = (1));

return statearr_36175;
});
var cljs$core$async$mix_$_state_machine__34631__auto____1 = (function (state_36071){
while(true){
var ret_value__34632__auto__ = (function (){try{while(true){
var result__34633__auto__ = switch__34630__auto__(state_36071);
if(cljs.core.keyword_identical_QMARK_(result__34633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34633__auto__;
}
break;
}
}catch (e36180){var ex__34634__auto__ = e36180;
var statearr_36181_37661 = state_36071;
(statearr_36181_37661[(2)] = ex__34634__auto__);


if(cljs.core.seq((state_36071[(4)]))){
var statearr_36182_37662 = state_36071;
(statearr_36182_37662[(1)] = cljs.core.first((state_36071[(4)])));

} else {
throw ex__34634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37663 = state_36071;
state_36071 = G__37663;
continue;
} else {
return ret_value__34632__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34631__auto__ = function(state_36071){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34631__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34631__auto____1.call(this,state_36071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34631__auto____0;
cljs$core$async$mix_$_state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34631__auto____1;
return cljs$core$async$mix_$_state_machine__34631__auto__;
})()
})();
var state__34853__auto__ = (function (){var statearr_36187 = f__34852__auto__();
(statearr_36187[(6)] = c__34851__auto___37602);

return statearr_36187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34853__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_37664 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_37664(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_37671 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_37671(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_37672 = (function() {
var G__37673 = null;
var G__37673__1 = (function (p){
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
var G__37673__2 = (function (p,v){
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
G__37673 = function(p,v){
switch(arguments.length){
case 1:
return G__37673__1.call(this,p);
case 2:
return G__37673__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37673.cljs$core$IFn$_invoke$arity$1 = G__37673__1;
G__37673.cljs$core$IFn$_invoke$arity$2 = G__37673__2;
return G__37673;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36215 = arguments.length;
switch (G__36215) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37672(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37672(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36239 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36240){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36240 = meta36240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36241,meta36240__$1){
var self__ = this;
var _36241__$1 = this;
return (new cljs.core.async.t_cljs$core$async36239(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36240__$1));
}));

(cljs.core.async.t_cljs$core$async36239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36241){
var self__ = this;
var _36241__$1 = this;
return self__.meta36240;
}));

(cljs.core.async.t_cljs$core$async36239.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36239.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36239.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36239.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async36239.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async36239.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async36239.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async36239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36240","meta36240",-1696893342,null)], null);
}));

(cljs.core.async.t_cljs$core$async36239.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36239");

(cljs.core.async.t_cljs$core$async36239.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36239");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36239.
 */
cljs.core.async.__GT_t_cljs$core$async36239 = (function cljs$core$async$__GT_t_cljs$core$async36239(ch,topic_fn,buf_fn,mults,ensure_mult,meta36240){
return (new cljs.core.async.t_cljs$core$async36239(ch,topic_fn,buf_fn,mults,ensure_mult,meta36240));
});


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
var G__36233 = arguments.length;
switch (G__36233) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__36227_SHARP_){
if(cljs.core.truth_((p1__36227_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36227_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__36227_SHARP_.call(null,topic)))){
return p1__36227_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36227_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async36239(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__34851__auto___37683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34852__auto__ = (function (){var switch__34630__auto__ = (function (state_36334){
var state_val_36335 = (state_36334[(1)]);
if((state_val_36335 === (7))){
var inst_36330 = (state_36334[(2)]);
var state_36334__$1 = state_36334;
var statearr_36340_37684 = state_36334__$1;
(statearr_36340_37684[(2)] = inst_36330);

(statearr_36340_37684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (20))){
var state_36334__$1 = state_36334;
var statearr_36341_37685 = state_36334__$1;
(statearr_36341_37685[(2)] = null);

(statearr_36341_37685[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (1))){
var state_36334__$1 = state_36334;
var statearr_36343_37686 = state_36334__$1;
(statearr_36343_37686[(2)] = null);

(statearr_36343_37686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (24))){
var inst_36313 = (state_36334[(7)]);
var inst_36322 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_36313);
var state_36334__$1 = state_36334;
var statearr_36344_37687 = state_36334__$1;
(statearr_36344_37687[(2)] = inst_36322);

(statearr_36344_37687[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (4))){
var inst_36264 = (state_36334[(8)]);
var inst_36264__$1 = (state_36334[(2)]);
var inst_36265 = (inst_36264__$1 == null);
var state_36334__$1 = (function (){var statearr_36345 = state_36334;
(statearr_36345[(8)] = inst_36264__$1);

return statearr_36345;
})();
if(cljs.core.truth_(inst_36265)){
var statearr_36346_37688 = state_36334__$1;
(statearr_36346_37688[(1)] = (5));

} else {
var statearr_36347_37689 = state_36334__$1;
(statearr_36347_37689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (15))){
var inst_36307 = (state_36334[(2)]);
var state_36334__$1 = state_36334;
var statearr_36348_37690 = state_36334__$1;
(statearr_36348_37690[(2)] = inst_36307);

(statearr_36348_37690[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (21))){
var inst_36327 = (state_36334[(2)]);
var state_36334__$1 = (function (){var statearr_36349 = state_36334;
(statearr_36349[(9)] = inst_36327);

return statearr_36349;
})();
var statearr_36350_37691 = state_36334__$1;
(statearr_36350_37691[(2)] = null);

(statearr_36350_37691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (13))){
var inst_36289 = (state_36334[(10)]);
var inst_36291 = cljs.core.chunked_seq_QMARK_(inst_36289);
var state_36334__$1 = state_36334;
if(inst_36291){
var statearr_36352_37692 = state_36334__$1;
(statearr_36352_37692[(1)] = (16));

} else {
var statearr_36353_37696 = state_36334__$1;
(statearr_36353_37696[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (22))){
var inst_36319 = (state_36334[(2)]);
var state_36334__$1 = state_36334;
if(cljs.core.truth_(inst_36319)){
var statearr_36355_37697 = state_36334__$1;
(statearr_36355_37697[(1)] = (23));

} else {
var statearr_36356_37698 = state_36334__$1;
(statearr_36356_37698[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (6))){
var inst_36264 = (state_36334[(8)]);
var inst_36315 = (state_36334[(11)]);
var inst_36313 = (state_36334[(7)]);
var inst_36313__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_36264) : topic_fn.call(null,inst_36264));
var inst_36314 = cljs.core.deref(mults);
var inst_36315__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36314,inst_36313__$1);
var state_36334__$1 = (function (){var statearr_36357 = state_36334;
(statearr_36357[(11)] = inst_36315__$1);

(statearr_36357[(7)] = inst_36313__$1);

return statearr_36357;
})();
if(cljs.core.truth_(inst_36315__$1)){
var statearr_36358_37699 = state_36334__$1;
(statearr_36358_37699[(1)] = (19));

} else {
var statearr_36359_37700 = state_36334__$1;
(statearr_36359_37700[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (25))){
var inst_36324 = (state_36334[(2)]);
var state_36334__$1 = state_36334;
var statearr_36360_37701 = state_36334__$1;
(statearr_36360_37701[(2)] = inst_36324);

(statearr_36360_37701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (17))){
var inst_36289 = (state_36334[(10)]);
var inst_36298 = cljs.core.first(inst_36289);
var inst_36299 = cljs.core.async.muxch_STAR_(inst_36298);
var inst_36300 = cljs.core.async.close_BANG_(inst_36299);
var inst_36301 = cljs.core.next(inst_36289);
var inst_36275 = inst_36301;
var inst_36276 = null;
var inst_36277 = (0);
var inst_36278 = (0);
var state_36334__$1 = (function (){var statearr_36361 = state_36334;
(statearr_36361[(12)] = inst_36277);

(statearr_36361[(13)] = inst_36275);

(statearr_36361[(14)] = inst_36278);

(statearr_36361[(15)] = inst_36276);

(statearr_36361[(16)] = inst_36300);

return statearr_36361;
})();
var statearr_36362_37702 = state_36334__$1;
(statearr_36362_37702[(2)] = null);

(statearr_36362_37702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (3))){
var inst_36332 = (state_36334[(2)]);
var state_36334__$1 = state_36334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36334__$1,inst_36332);
} else {
if((state_val_36335 === (12))){
var inst_36309 = (state_36334[(2)]);
var state_36334__$1 = state_36334;
var statearr_36363_37703 = state_36334__$1;
(statearr_36363_37703[(2)] = inst_36309);

(statearr_36363_37703[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (2))){
var state_36334__$1 = state_36334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36334__$1,(4),ch);
} else {
if((state_val_36335 === (23))){
var state_36334__$1 = state_36334;
var statearr_36364_37704 = state_36334__$1;
(statearr_36364_37704[(2)] = null);

(statearr_36364_37704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (19))){
var inst_36264 = (state_36334[(8)]);
var inst_36315 = (state_36334[(11)]);
var inst_36317 = cljs.core.async.muxch_STAR_(inst_36315);
var state_36334__$1 = state_36334;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36334__$1,(22),inst_36317,inst_36264);
} else {
if((state_val_36335 === (11))){
var inst_36275 = (state_36334[(13)]);
var inst_36289 = (state_36334[(10)]);
var inst_36289__$1 = cljs.core.seq(inst_36275);
var state_36334__$1 = (function (){var statearr_36365 = state_36334;
(statearr_36365[(10)] = inst_36289__$1);

return statearr_36365;
})();
if(inst_36289__$1){
var statearr_36366_37708 = state_36334__$1;
(statearr_36366_37708[(1)] = (13));

} else {
var statearr_36367_37709 = state_36334__$1;
(statearr_36367_37709[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (9))){
var inst_36311 = (state_36334[(2)]);
var state_36334__$1 = state_36334;
var statearr_36368_37710 = state_36334__$1;
(statearr_36368_37710[(2)] = inst_36311);

(statearr_36368_37710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (5))){
var inst_36272 = cljs.core.deref(mults);
var inst_36273 = cljs.core.vals(inst_36272);
var inst_36274 = cljs.core.seq(inst_36273);
var inst_36275 = inst_36274;
var inst_36276 = null;
var inst_36277 = (0);
var inst_36278 = (0);
var state_36334__$1 = (function (){var statearr_36369 = state_36334;
(statearr_36369[(12)] = inst_36277);

(statearr_36369[(13)] = inst_36275);

(statearr_36369[(14)] = inst_36278);

(statearr_36369[(15)] = inst_36276);

return statearr_36369;
})();
var statearr_36370_37711 = state_36334__$1;
(statearr_36370_37711[(2)] = null);

(statearr_36370_37711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (14))){
var state_36334__$1 = state_36334;
var statearr_36374_37712 = state_36334__$1;
(statearr_36374_37712[(2)] = null);

(statearr_36374_37712[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (16))){
var inst_36289 = (state_36334[(10)]);
var inst_36293 = cljs.core.chunk_first(inst_36289);
var inst_36294 = cljs.core.chunk_rest(inst_36289);
var inst_36295 = cljs.core.count(inst_36293);
var inst_36275 = inst_36294;
var inst_36276 = inst_36293;
var inst_36277 = inst_36295;
var inst_36278 = (0);
var state_36334__$1 = (function (){var statearr_36375 = state_36334;
(statearr_36375[(12)] = inst_36277);

(statearr_36375[(13)] = inst_36275);

(statearr_36375[(14)] = inst_36278);

(statearr_36375[(15)] = inst_36276);

return statearr_36375;
})();
var statearr_36376_37713 = state_36334__$1;
(statearr_36376_37713[(2)] = null);

(statearr_36376_37713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (10))){
var inst_36277 = (state_36334[(12)]);
var inst_36275 = (state_36334[(13)]);
var inst_36278 = (state_36334[(14)]);
var inst_36276 = (state_36334[(15)]);
var inst_36283 = cljs.core._nth(inst_36276,inst_36278);
var inst_36284 = cljs.core.async.muxch_STAR_(inst_36283);
var inst_36285 = cljs.core.async.close_BANG_(inst_36284);
var inst_36286 = (inst_36278 + (1));
var tmp36371 = inst_36277;
var tmp36372 = inst_36275;
var tmp36373 = inst_36276;
var inst_36275__$1 = tmp36372;
var inst_36276__$1 = tmp36373;
var inst_36277__$1 = tmp36371;
var inst_36278__$1 = inst_36286;
var state_36334__$1 = (function (){var statearr_36379 = state_36334;
(statearr_36379[(12)] = inst_36277__$1);

(statearr_36379[(17)] = inst_36285);

(statearr_36379[(13)] = inst_36275__$1);

(statearr_36379[(14)] = inst_36278__$1);

(statearr_36379[(15)] = inst_36276__$1);

return statearr_36379;
})();
var statearr_36380_37714 = state_36334__$1;
(statearr_36380_37714[(2)] = null);

(statearr_36380_37714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (18))){
var inst_36304 = (state_36334[(2)]);
var state_36334__$1 = state_36334;
var statearr_36381_37715 = state_36334__$1;
(statearr_36381_37715[(2)] = inst_36304);

(statearr_36381_37715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (8))){
var inst_36277 = (state_36334[(12)]);
var inst_36278 = (state_36334[(14)]);
var inst_36280 = (inst_36278 < inst_36277);
var inst_36281 = inst_36280;
var state_36334__$1 = state_36334;
if(cljs.core.truth_(inst_36281)){
var statearr_36382_37716 = state_36334__$1;
(statearr_36382_37716[(1)] = (10));

} else {
var statearr_36383_37717 = state_36334__$1;
(statearr_36383_37717[(1)] = (11));

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
var cljs$core$async$state_machine__34631__auto__ = null;
var cljs$core$async$state_machine__34631__auto____0 = (function (){
var statearr_36384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36384[(0)] = cljs$core$async$state_machine__34631__auto__);

(statearr_36384[(1)] = (1));

return statearr_36384;
});
var cljs$core$async$state_machine__34631__auto____1 = (function (state_36334){
while(true){
var ret_value__34632__auto__ = (function (){try{while(true){
var result__34633__auto__ = switch__34630__auto__(state_36334);
if(cljs.core.keyword_identical_QMARK_(result__34633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34633__auto__;
}
break;
}
}catch (e36386){var ex__34634__auto__ = e36386;
var statearr_36387_37723 = state_36334;
(statearr_36387_37723[(2)] = ex__34634__auto__);


if(cljs.core.seq((state_36334[(4)]))){
var statearr_36389_37724 = state_36334;
(statearr_36389_37724[(1)] = cljs.core.first((state_36334[(4)])));

} else {
throw ex__34634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37725 = state_36334;
state_36334 = G__37725;
continue;
} else {
return ret_value__34632__auto__;
}
break;
}
});
cljs$core$async$state_machine__34631__auto__ = function(state_36334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34631__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34631__auto____1.call(this,state_36334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34631__auto____0;
cljs$core$async$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34631__auto____1;
return cljs$core$async$state_machine__34631__auto__;
})()
})();
var state__34853__auto__ = (function (){var statearr_36390 = f__34852__auto__();
(statearr_36390[(6)] = c__34851__auto___37683);

return statearr_36390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34853__auto__);
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
var G__36393 = arguments.length;
switch (G__36393) {
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
var G__36396 = arguments.length;
switch (G__36396) {
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
var G__36399 = arguments.length;
switch (G__36399) {
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
var c__34851__auto___37730 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34852__auto__ = (function (){var switch__34630__auto__ = (function (state_36451){
var state_val_36452 = (state_36451[(1)]);
if((state_val_36452 === (7))){
var state_36451__$1 = state_36451;
var statearr_36454_37731 = state_36451__$1;
(statearr_36454_37731[(2)] = null);

(statearr_36454_37731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (1))){
var state_36451__$1 = state_36451;
var statearr_36455_37732 = state_36451__$1;
(statearr_36455_37732[(2)] = null);

(statearr_36455_37732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (4))){
var inst_36408 = (state_36451[(7)]);
var inst_36407 = (state_36451[(8)]);
var inst_36410 = (inst_36408 < inst_36407);
var state_36451__$1 = state_36451;
if(cljs.core.truth_(inst_36410)){
var statearr_36459_37733 = state_36451__$1;
(statearr_36459_37733[(1)] = (6));

} else {
var statearr_36460_37734 = state_36451__$1;
(statearr_36460_37734[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (15))){
var inst_36436 = (state_36451[(9)]);
var inst_36441 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36436);
var state_36451__$1 = state_36451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36451__$1,(17),out,inst_36441);
} else {
if((state_val_36452 === (13))){
var inst_36436 = (state_36451[(9)]);
var inst_36436__$1 = (state_36451[(2)]);
var inst_36437 = cljs.core.some(cljs.core.nil_QMARK_,inst_36436__$1);
var state_36451__$1 = (function (){var statearr_36461 = state_36451;
(statearr_36461[(9)] = inst_36436__$1);

return statearr_36461;
})();
if(cljs.core.truth_(inst_36437)){
var statearr_36462_37735 = state_36451__$1;
(statearr_36462_37735[(1)] = (14));

} else {
var statearr_36463_37736 = state_36451__$1;
(statearr_36463_37736[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (6))){
var state_36451__$1 = state_36451;
var statearr_36464_37742 = state_36451__$1;
(statearr_36464_37742[(2)] = null);

(statearr_36464_37742[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (17))){
var inst_36443 = (state_36451[(2)]);
var state_36451__$1 = (function (){var statearr_36466 = state_36451;
(statearr_36466[(10)] = inst_36443);

return statearr_36466;
})();
var statearr_36467_37744 = state_36451__$1;
(statearr_36467_37744[(2)] = null);

(statearr_36467_37744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (3))){
var inst_36448 = (state_36451[(2)]);
var state_36451__$1 = state_36451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36451__$1,inst_36448);
} else {
if((state_val_36452 === (12))){
var _ = (function (){var statearr_36481 = state_36451;
(statearr_36481[(4)] = cljs.core.rest((state_36451[(4)])));

return statearr_36481;
})();
var state_36451__$1 = state_36451;
var ex36465 = (state_36451__$1[(2)]);
var statearr_36482_37745 = state_36451__$1;
(statearr_36482_37745[(5)] = ex36465);


if((ex36465 instanceof Object)){
var statearr_36489_37746 = state_36451__$1;
(statearr_36489_37746[(1)] = (11));

(statearr_36489_37746[(5)] = null);

} else {
throw ex36465;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (2))){
var inst_36406 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36407 = cnt;
var inst_36408 = (0);
var state_36451__$1 = (function (){var statearr_36490 = state_36451;
(statearr_36490[(7)] = inst_36408);

(statearr_36490[(8)] = inst_36407);

(statearr_36490[(11)] = inst_36406);

return statearr_36490;
})();
var statearr_36491_37751 = state_36451__$1;
(statearr_36491_37751[(2)] = null);

(statearr_36491_37751[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (11))){
var inst_36414 = (state_36451[(2)]);
var inst_36415 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36451__$1 = (function (){var statearr_36492 = state_36451;
(statearr_36492[(12)] = inst_36414);

return statearr_36492;
})();
var statearr_36493_37752 = state_36451__$1;
(statearr_36493_37752[(2)] = inst_36415);

(statearr_36493_37752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (9))){
var inst_36408 = (state_36451[(7)]);
var _ = (function (){var statearr_36494 = state_36451;
(statearr_36494[(4)] = cljs.core.cons((12),(state_36451[(4)])));

return statearr_36494;
})();
var inst_36421 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36408) : chs__$1.call(null,inst_36408));
var inst_36422 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36408) : done.call(null,inst_36408));
var inst_36423 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36421,inst_36422);
var ___$1 = (function (){var statearr_36499 = state_36451;
(statearr_36499[(4)] = cljs.core.rest((state_36451[(4)])));

return statearr_36499;
})();
var state_36451__$1 = state_36451;
var statearr_36500_37753 = state_36451__$1;
(statearr_36500_37753[(2)] = inst_36423);

(statearr_36500_37753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (5))){
var inst_36434 = (state_36451[(2)]);
var state_36451__$1 = (function (){var statearr_36504 = state_36451;
(statearr_36504[(13)] = inst_36434);

return statearr_36504;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36451__$1,(13),dchan);
} else {
if((state_val_36452 === (14))){
var inst_36439 = cljs.core.async.close_BANG_(out);
var state_36451__$1 = state_36451;
var statearr_36508_37754 = state_36451__$1;
(statearr_36508_37754[(2)] = inst_36439);

(statearr_36508_37754[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (16))){
var inst_36446 = (state_36451[(2)]);
var state_36451__$1 = state_36451;
var statearr_36509_37756 = state_36451__$1;
(statearr_36509_37756[(2)] = inst_36446);

(statearr_36509_37756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (10))){
var inst_36408 = (state_36451[(7)]);
var inst_36426 = (state_36451[(2)]);
var inst_36428 = (inst_36408 + (1));
var inst_36408__$1 = inst_36428;
var state_36451__$1 = (function (){var statearr_36510 = state_36451;
(statearr_36510[(14)] = inst_36426);

(statearr_36510[(7)] = inst_36408__$1);

return statearr_36510;
})();
var statearr_36511_37758 = state_36451__$1;
(statearr_36511_37758[(2)] = null);

(statearr_36511_37758[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (8))){
var inst_36432 = (state_36451[(2)]);
var state_36451__$1 = state_36451;
var statearr_36512_37759 = state_36451__$1;
(statearr_36512_37759[(2)] = inst_36432);

(statearr_36512_37759[(1)] = (5));


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
var cljs$core$async$state_machine__34631__auto__ = null;
var cljs$core$async$state_machine__34631__auto____0 = (function (){
var statearr_36516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36516[(0)] = cljs$core$async$state_machine__34631__auto__);

(statearr_36516[(1)] = (1));

return statearr_36516;
});
var cljs$core$async$state_machine__34631__auto____1 = (function (state_36451){
while(true){
var ret_value__34632__auto__ = (function (){try{while(true){
var result__34633__auto__ = switch__34630__auto__(state_36451);
if(cljs.core.keyword_identical_QMARK_(result__34633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34633__auto__;
}
break;
}
}catch (e36517){var ex__34634__auto__ = e36517;
var statearr_36518_37760 = state_36451;
(statearr_36518_37760[(2)] = ex__34634__auto__);


if(cljs.core.seq((state_36451[(4)]))){
var statearr_36519_37761 = state_36451;
(statearr_36519_37761[(1)] = cljs.core.first((state_36451[(4)])));

} else {
throw ex__34634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37762 = state_36451;
state_36451 = G__37762;
continue;
} else {
return ret_value__34632__auto__;
}
break;
}
});
cljs$core$async$state_machine__34631__auto__ = function(state_36451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34631__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34631__auto____1.call(this,state_36451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34631__auto____0;
cljs$core$async$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34631__auto____1;
return cljs$core$async$state_machine__34631__auto__;
})()
})();
var state__34853__auto__ = (function (){var statearr_36520 = f__34852__auto__();
(statearr_36520[(6)] = c__34851__auto___37730);

return statearr_36520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34853__auto__);
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
var G__36523 = arguments.length;
switch (G__36523) {
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
var c__34851__auto___37764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34852__auto__ = (function (){var switch__34630__auto__ = (function (state_36559){
var state_val_36560 = (state_36559[(1)]);
if((state_val_36560 === (7))){
var inst_36539 = (state_36559[(7)]);
var inst_36538 = (state_36559[(8)]);
var inst_36538__$1 = (state_36559[(2)]);
var inst_36539__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36538__$1,(0),null);
var inst_36540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36538__$1,(1),null);
var inst_36541 = (inst_36539__$1 == null);
var state_36559__$1 = (function (){var statearr_36561 = state_36559;
(statearr_36561[(7)] = inst_36539__$1);

(statearr_36561[(9)] = inst_36540);

(statearr_36561[(8)] = inst_36538__$1);

return statearr_36561;
})();
if(cljs.core.truth_(inst_36541)){
var statearr_36562_37765 = state_36559__$1;
(statearr_36562_37765[(1)] = (8));

} else {
var statearr_36563_37766 = state_36559__$1;
(statearr_36563_37766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (1))){
var inst_36528 = cljs.core.vec(chs);
var inst_36529 = inst_36528;
var state_36559__$1 = (function (){var statearr_36564 = state_36559;
(statearr_36564[(10)] = inst_36529);

return statearr_36564;
})();
var statearr_36565_37767 = state_36559__$1;
(statearr_36565_37767[(2)] = null);

(statearr_36565_37767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (4))){
var inst_36529 = (state_36559[(10)]);
var state_36559__$1 = state_36559;
return cljs.core.async.ioc_alts_BANG_(state_36559__$1,(7),inst_36529);
} else {
if((state_val_36560 === (6))){
var inst_36555 = (state_36559[(2)]);
var state_36559__$1 = state_36559;
var statearr_36570_37770 = state_36559__$1;
(statearr_36570_37770[(2)] = inst_36555);

(statearr_36570_37770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (3))){
var inst_36557 = (state_36559[(2)]);
var state_36559__$1 = state_36559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36559__$1,inst_36557);
} else {
if((state_val_36560 === (2))){
var inst_36529 = (state_36559[(10)]);
var inst_36531 = cljs.core.count(inst_36529);
var inst_36532 = (inst_36531 > (0));
var state_36559__$1 = state_36559;
if(cljs.core.truth_(inst_36532)){
var statearr_36574_37771 = state_36559__$1;
(statearr_36574_37771[(1)] = (4));

} else {
var statearr_36575_37773 = state_36559__$1;
(statearr_36575_37773[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (11))){
var inst_36529 = (state_36559[(10)]);
var inst_36548 = (state_36559[(2)]);
var tmp36571 = inst_36529;
var inst_36529__$1 = tmp36571;
var state_36559__$1 = (function (){var statearr_36577 = state_36559;
(statearr_36577[(11)] = inst_36548);

(statearr_36577[(10)] = inst_36529__$1);

return statearr_36577;
})();
var statearr_36579_37775 = state_36559__$1;
(statearr_36579_37775[(2)] = null);

(statearr_36579_37775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (9))){
var inst_36539 = (state_36559[(7)]);
var state_36559__$1 = state_36559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36559__$1,(11),out,inst_36539);
} else {
if((state_val_36560 === (5))){
var inst_36553 = cljs.core.async.close_BANG_(out);
var state_36559__$1 = state_36559;
var statearr_36580_37776 = state_36559__$1;
(statearr_36580_37776[(2)] = inst_36553);

(statearr_36580_37776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (10))){
var inst_36551 = (state_36559[(2)]);
var state_36559__$1 = state_36559;
var statearr_36581_37777 = state_36559__$1;
(statearr_36581_37777[(2)] = inst_36551);

(statearr_36581_37777[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (8))){
var inst_36539 = (state_36559[(7)]);
var inst_36540 = (state_36559[(9)]);
var inst_36538 = (state_36559[(8)]);
var inst_36529 = (state_36559[(10)]);
var inst_36543 = (function (){var cs = inst_36529;
var vec__36534 = inst_36538;
var v = inst_36539;
var c = inst_36540;
return (function (p1__36521_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36521_SHARP_);
});
})();
var inst_36544 = cljs.core.filterv(inst_36543,inst_36529);
var inst_36529__$1 = inst_36544;
var state_36559__$1 = (function (){var statearr_36582 = state_36559;
(statearr_36582[(10)] = inst_36529__$1);

return statearr_36582;
})();
var statearr_36583_37778 = state_36559__$1;
(statearr_36583_37778[(2)] = null);

(statearr_36583_37778[(1)] = (2));


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
var cljs$core$async$state_machine__34631__auto__ = null;
var cljs$core$async$state_machine__34631__auto____0 = (function (){
var statearr_36584 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36584[(0)] = cljs$core$async$state_machine__34631__auto__);

(statearr_36584[(1)] = (1));

return statearr_36584;
});
var cljs$core$async$state_machine__34631__auto____1 = (function (state_36559){
while(true){
var ret_value__34632__auto__ = (function (){try{while(true){
var result__34633__auto__ = switch__34630__auto__(state_36559);
if(cljs.core.keyword_identical_QMARK_(result__34633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34633__auto__;
}
break;
}
}catch (e36586){var ex__34634__auto__ = e36586;
var statearr_36587_37779 = state_36559;
(statearr_36587_37779[(2)] = ex__34634__auto__);


if(cljs.core.seq((state_36559[(4)]))){
var statearr_36589_37780 = state_36559;
(statearr_36589_37780[(1)] = cljs.core.first((state_36559[(4)])));

} else {
throw ex__34634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37781 = state_36559;
state_36559 = G__37781;
continue;
} else {
return ret_value__34632__auto__;
}
break;
}
});
cljs$core$async$state_machine__34631__auto__ = function(state_36559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34631__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34631__auto____1.call(this,state_36559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34631__auto____0;
cljs$core$async$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34631__auto____1;
return cljs$core$async$state_machine__34631__auto__;
})()
})();
var state__34853__auto__ = (function (){var statearr_36590 = f__34852__auto__();
(statearr_36590[(6)] = c__34851__auto___37764);

return statearr_36590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34853__auto__);
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
var G__36597 = arguments.length;
switch (G__36597) {
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
var c__34851__auto___37783 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34852__auto__ = (function (){var switch__34630__auto__ = (function (state_36621){
var state_val_36622 = (state_36621[(1)]);
if((state_val_36622 === (7))){
var inst_36603 = (state_36621[(7)]);
var inst_36603__$1 = (state_36621[(2)]);
var inst_36604 = (inst_36603__$1 == null);
var inst_36605 = cljs.core.not(inst_36604);
var state_36621__$1 = (function (){var statearr_36623 = state_36621;
(statearr_36623[(7)] = inst_36603__$1);

return statearr_36623;
})();
if(inst_36605){
var statearr_36624_37784 = state_36621__$1;
(statearr_36624_37784[(1)] = (8));

} else {
var statearr_36625_37785 = state_36621__$1;
(statearr_36625_37785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36622 === (1))){
var inst_36598 = (0);
var state_36621__$1 = (function (){var statearr_36626 = state_36621;
(statearr_36626[(8)] = inst_36598);

return statearr_36626;
})();
var statearr_36627_37786 = state_36621__$1;
(statearr_36627_37786[(2)] = null);

(statearr_36627_37786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36622 === (4))){
var state_36621__$1 = state_36621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36621__$1,(7),ch);
} else {
if((state_val_36622 === (6))){
var inst_36616 = (state_36621[(2)]);
var state_36621__$1 = state_36621;
var statearr_36628_37787 = state_36621__$1;
(statearr_36628_37787[(2)] = inst_36616);

(statearr_36628_37787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36622 === (3))){
var inst_36618 = (state_36621[(2)]);
var inst_36619 = cljs.core.async.close_BANG_(out);
var state_36621__$1 = (function (){var statearr_36629 = state_36621;
(statearr_36629[(9)] = inst_36618);

return statearr_36629;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36621__$1,inst_36619);
} else {
if((state_val_36622 === (2))){
var inst_36598 = (state_36621[(8)]);
var inst_36600 = (inst_36598 < n);
var state_36621__$1 = state_36621;
if(cljs.core.truth_(inst_36600)){
var statearr_36630_37788 = state_36621__$1;
(statearr_36630_37788[(1)] = (4));

} else {
var statearr_36631_37789 = state_36621__$1;
(statearr_36631_37789[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36622 === (11))){
var inst_36598 = (state_36621[(8)]);
var inst_36608 = (state_36621[(2)]);
var inst_36609 = (inst_36598 + (1));
var inst_36598__$1 = inst_36609;
var state_36621__$1 = (function (){var statearr_36632 = state_36621;
(statearr_36632[(8)] = inst_36598__$1);

(statearr_36632[(10)] = inst_36608);

return statearr_36632;
})();
var statearr_36633_37790 = state_36621__$1;
(statearr_36633_37790[(2)] = null);

(statearr_36633_37790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36622 === (9))){
var state_36621__$1 = state_36621;
var statearr_36634_37791 = state_36621__$1;
(statearr_36634_37791[(2)] = null);

(statearr_36634_37791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36622 === (5))){
var state_36621__$1 = state_36621;
var statearr_36636_37792 = state_36621__$1;
(statearr_36636_37792[(2)] = null);

(statearr_36636_37792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36622 === (10))){
var inst_36613 = (state_36621[(2)]);
var state_36621__$1 = state_36621;
var statearr_36640_37793 = state_36621__$1;
(statearr_36640_37793[(2)] = inst_36613);

(statearr_36640_37793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36622 === (8))){
var inst_36603 = (state_36621[(7)]);
var state_36621__$1 = state_36621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36621__$1,(11),out,inst_36603);
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
var cljs$core$async$state_machine__34631__auto__ = null;
var cljs$core$async$state_machine__34631__auto____0 = (function (){
var statearr_36642 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36642[(0)] = cljs$core$async$state_machine__34631__auto__);

(statearr_36642[(1)] = (1));

return statearr_36642;
});
var cljs$core$async$state_machine__34631__auto____1 = (function (state_36621){
while(true){
var ret_value__34632__auto__ = (function (){try{while(true){
var result__34633__auto__ = switch__34630__auto__(state_36621);
if(cljs.core.keyword_identical_QMARK_(result__34633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34633__auto__;
}
break;
}
}catch (e36644){var ex__34634__auto__ = e36644;
var statearr_36645_37795 = state_36621;
(statearr_36645_37795[(2)] = ex__34634__auto__);


if(cljs.core.seq((state_36621[(4)]))){
var statearr_36647_37796 = state_36621;
(statearr_36647_37796[(1)] = cljs.core.first((state_36621[(4)])));

} else {
throw ex__34634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37797 = state_36621;
state_36621 = G__37797;
continue;
} else {
return ret_value__34632__auto__;
}
break;
}
});
cljs$core$async$state_machine__34631__auto__ = function(state_36621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34631__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34631__auto____1.call(this,state_36621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34631__auto____0;
cljs$core$async$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34631__auto____1;
return cljs$core$async$state_machine__34631__auto__;
})()
})();
var state__34853__auto__ = (function (){var statearr_36648 = f__34852__auto__();
(statearr_36648[(6)] = c__34851__auto___37783);

return statearr_36648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34853__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36658 = (function (f,ch,meta36651,_,fn1,meta36659){
this.f = f;
this.ch = ch;
this.meta36651 = meta36651;
this._ = _;
this.fn1 = fn1;
this.meta36659 = meta36659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36660,meta36659__$1){
var self__ = this;
var _36660__$1 = this;
return (new cljs.core.async.t_cljs$core$async36658(self__.f,self__.ch,self__.meta36651,self__._,self__.fn1,meta36659__$1));
}));

(cljs.core.async.t_cljs$core$async36658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36660){
var self__ = this;
var _36660__$1 = this;
return self__.meta36659;
}));

(cljs.core.async.t_cljs$core$async36658.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36658.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36658.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36658.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36649_SHARP_){
var G__36661 = (((p1__36649_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36649_SHARP_) : self__.f.call(null,p1__36649_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36661) : f1.call(null,G__36661));
});
}));

(cljs.core.async.t_cljs$core$async36658.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36651","meta36651",2029827787,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36650","cljs.core.async/t_cljs$core$async36650",-158196195,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36659","meta36659",-1702229851,null)], null);
}));

(cljs.core.async.t_cljs$core$async36658.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36658");

(cljs.core.async.t_cljs$core$async36658.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36658");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36658.
 */
cljs.core.async.__GT_t_cljs$core$async36658 = (function cljs$core$async$__GT_t_cljs$core$async36658(f,ch,meta36651,_,fn1,meta36659){
return (new cljs.core.async.t_cljs$core$async36658(f,ch,meta36651,_,fn1,meta36659));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36650 = (function (f,ch,meta36651){
this.f = f;
this.ch = ch;
this.meta36651 = meta36651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36652,meta36651__$1){
var self__ = this;
var _36652__$1 = this;
return (new cljs.core.async.t_cljs$core$async36650(self__.f,self__.ch,meta36651__$1));
}));

(cljs.core.async.t_cljs$core$async36650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36652){
var self__ = this;
var _36652__$1 = this;
return self__.meta36651;
}));

(cljs.core.async.t_cljs$core$async36650.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36650.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36650.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36650.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36650.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async36658(self__.f,self__.ch,self__.meta36651,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36663 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36663) : self__.f.call(null,G__36663));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36650.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36650.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36651","meta36651",2029827787,null)], null);
}));

(cljs.core.async.t_cljs$core$async36650.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36650");

(cljs.core.async.t_cljs$core$async36650.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36650");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36650.
 */
cljs.core.async.__GT_t_cljs$core$async36650 = (function cljs$core$async$__GT_t_cljs$core$async36650(f,ch,meta36651){
return (new cljs.core.async.t_cljs$core$async36650(f,ch,meta36651));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async36650(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36671 = (function (f,ch,meta36672){
this.f = f;
this.ch = ch;
this.meta36672 = meta36672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36673,meta36672__$1){
var self__ = this;
var _36673__$1 = this;
return (new cljs.core.async.t_cljs$core$async36671(self__.f,self__.ch,meta36672__$1));
}));

(cljs.core.async.t_cljs$core$async36671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36673){
var self__ = this;
var _36673__$1 = this;
return self__.meta36672;
}));

(cljs.core.async.t_cljs$core$async36671.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36671.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36671.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36671.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36671.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36671.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36671.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36672","meta36672",1529470552,null)], null);
}));

(cljs.core.async.t_cljs$core$async36671.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36671");

(cljs.core.async.t_cljs$core$async36671.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36671");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36671.
 */
cljs.core.async.__GT_t_cljs$core$async36671 = (function cljs$core$async$__GT_t_cljs$core$async36671(f,ch,meta36672){
return (new cljs.core.async.t_cljs$core$async36671(f,ch,meta36672));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async36671(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36676 = (function (p,ch,meta36677){
this.p = p;
this.ch = ch;
this.meta36677 = meta36677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36678,meta36677__$1){
var self__ = this;
var _36678__$1 = this;
return (new cljs.core.async.t_cljs$core$async36676(self__.p,self__.ch,meta36677__$1));
}));

(cljs.core.async.t_cljs$core$async36676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36678){
var self__ = this;
var _36678__$1 = this;
return self__.meta36677;
}));

(cljs.core.async.t_cljs$core$async36676.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36676.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36676.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36676.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36676.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36676.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36676.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36677","meta36677",455417745,null)], null);
}));

(cljs.core.async.t_cljs$core$async36676.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36676");

(cljs.core.async.t_cljs$core$async36676.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36676");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36676.
 */
cljs.core.async.__GT_t_cljs$core$async36676 = (function cljs$core$async$__GT_t_cljs$core$async36676(p,ch,meta36677){
return (new cljs.core.async.t_cljs$core$async36676(p,ch,meta36677));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async36676(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36683 = arguments.length;
switch (G__36683) {
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
var c__34851__auto___37817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34852__auto__ = (function (){var switch__34630__auto__ = (function (state_36704){
var state_val_36705 = (state_36704[(1)]);
if((state_val_36705 === (7))){
var inst_36700 = (state_36704[(2)]);
var state_36704__$1 = state_36704;
var statearr_36706_37822 = state_36704__$1;
(statearr_36706_37822[(2)] = inst_36700);

(statearr_36706_37822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (1))){
var state_36704__$1 = state_36704;
var statearr_36707_37823 = state_36704__$1;
(statearr_36707_37823[(2)] = null);

(statearr_36707_37823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (4))){
var inst_36686 = (state_36704[(7)]);
var inst_36686__$1 = (state_36704[(2)]);
var inst_36687 = (inst_36686__$1 == null);
var state_36704__$1 = (function (){var statearr_36708 = state_36704;
(statearr_36708[(7)] = inst_36686__$1);

return statearr_36708;
})();
if(cljs.core.truth_(inst_36687)){
var statearr_36709_37824 = state_36704__$1;
(statearr_36709_37824[(1)] = (5));

} else {
var statearr_36710_37825 = state_36704__$1;
(statearr_36710_37825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (6))){
var inst_36686 = (state_36704[(7)]);
var inst_36691 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36686) : p.call(null,inst_36686));
var state_36704__$1 = state_36704;
if(cljs.core.truth_(inst_36691)){
var statearr_36711_37826 = state_36704__$1;
(statearr_36711_37826[(1)] = (8));

} else {
var statearr_36712_37827 = state_36704__$1;
(statearr_36712_37827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (3))){
var inst_36702 = (state_36704[(2)]);
var state_36704__$1 = state_36704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36704__$1,inst_36702);
} else {
if((state_val_36705 === (2))){
var state_36704__$1 = state_36704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36704__$1,(4),ch);
} else {
if((state_val_36705 === (11))){
var inst_36694 = (state_36704[(2)]);
var state_36704__$1 = state_36704;
var statearr_36713_37831 = state_36704__$1;
(statearr_36713_37831[(2)] = inst_36694);

(statearr_36713_37831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (9))){
var state_36704__$1 = state_36704;
var statearr_36714_37832 = state_36704__$1;
(statearr_36714_37832[(2)] = null);

(statearr_36714_37832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (5))){
var inst_36689 = cljs.core.async.close_BANG_(out);
var state_36704__$1 = state_36704;
var statearr_36715_37833 = state_36704__$1;
(statearr_36715_37833[(2)] = inst_36689);

(statearr_36715_37833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (10))){
var inst_36697 = (state_36704[(2)]);
var state_36704__$1 = (function (){var statearr_36716 = state_36704;
(statearr_36716[(8)] = inst_36697);

return statearr_36716;
})();
var statearr_36717_37834 = state_36704__$1;
(statearr_36717_37834[(2)] = null);

(statearr_36717_37834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (8))){
var inst_36686 = (state_36704[(7)]);
var state_36704__$1 = state_36704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36704__$1,(11),out,inst_36686);
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
var cljs$core$async$state_machine__34631__auto__ = null;
var cljs$core$async$state_machine__34631__auto____0 = (function (){
var statearr_36718 = [null,null,null,null,null,null,null,null,null];
(statearr_36718[(0)] = cljs$core$async$state_machine__34631__auto__);

(statearr_36718[(1)] = (1));

return statearr_36718;
});
var cljs$core$async$state_machine__34631__auto____1 = (function (state_36704){
while(true){
var ret_value__34632__auto__ = (function (){try{while(true){
var result__34633__auto__ = switch__34630__auto__(state_36704);
if(cljs.core.keyword_identical_QMARK_(result__34633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34633__auto__;
}
break;
}
}catch (e36719){var ex__34634__auto__ = e36719;
var statearr_36720_37838 = state_36704;
(statearr_36720_37838[(2)] = ex__34634__auto__);


if(cljs.core.seq((state_36704[(4)]))){
var statearr_36721_37839 = state_36704;
(statearr_36721_37839[(1)] = cljs.core.first((state_36704[(4)])));

} else {
throw ex__34634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37847 = state_36704;
state_36704 = G__37847;
continue;
} else {
return ret_value__34632__auto__;
}
break;
}
});
cljs$core$async$state_machine__34631__auto__ = function(state_36704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34631__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34631__auto____1.call(this,state_36704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34631__auto____0;
cljs$core$async$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34631__auto____1;
return cljs$core$async$state_machine__34631__auto__;
})()
})();
var state__34853__auto__ = (function (){var statearr_36722 = f__34852__auto__();
(statearr_36722[(6)] = c__34851__auto___37817);

return statearr_36722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34853__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36724 = arguments.length;
switch (G__36724) {
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
var c__34851__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34852__auto__ = (function (){var switch__34630__auto__ = (function (state_36790){
var state_val_36791 = (state_36790[(1)]);
if((state_val_36791 === (7))){
var inst_36786 = (state_36790[(2)]);
var state_36790__$1 = state_36790;
var statearr_36793_37849 = state_36790__$1;
(statearr_36793_37849[(2)] = inst_36786);

(statearr_36793_37849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (20))){
var inst_36753 = (state_36790[(7)]);
var inst_36767 = (state_36790[(2)]);
var inst_36768 = cljs.core.next(inst_36753);
var inst_36739 = inst_36768;
var inst_36740 = null;
var inst_36741 = (0);
var inst_36742 = (0);
var state_36790__$1 = (function (){var statearr_36797 = state_36790;
(statearr_36797[(8)] = inst_36740);

(statearr_36797[(9)] = inst_36741);

(statearr_36797[(10)] = inst_36739);

(statearr_36797[(11)] = inst_36742);

(statearr_36797[(12)] = inst_36767);

return statearr_36797;
})();
var statearr_36798_37851 = state_36790__$1;
(statearr_36798_37851[(2)] = null);

(statearr_36798_37851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (1))){
var state_36790__$1 = state_36790;
var statearr_36799_37852 = state_36790__$1;
(statearr_36799_37852[(2)] = null);

(statearr_36799_37852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (4))){
var inst_36728 = (state_36790[(13)]);
var inst_36728__$1 = (state_36790[(2)]);
var inst_36729 = (inst_36728__$1 == null);
var state_36790__$1 = (function (){var statearr_36800 = state_36790;
(statearr_36800[(13)] = inst_36728__$1);

return statearr_36800;
})();
if(cljs.core.truth_(inst_36729)){
var statearr_36801_37854 = state_36790__$1;
(statearr_36801_37854[(1)] = (5));

} else {
var statearr_36802_37855 = state_36790__$1;
(statearr_36802_37855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (15))){
var state_36790__$1 = state_36790;
var statearr_36806_37856 = state_36790__$1;
(statearr_36806_37856[(2)] = null);

(statearr_36806_37856[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (21))){
var state_36790__$1 = state_36790;
var statearr_36807_37857 = state_36790__$1;
(statearr_36807_37857[(2)] = null);

(statearr_36807_37857[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (13))){
var inst_36740 = (state_36790[(8)]);
var inst_36741 = (state_36790[(9)]);
var inst_36739 = (state_36790[(10)]);
var inst_36742 = (state_36790[(11)]);
var inst_36749 = (state_36790[(2)]);
var inst_36750 = (inst_36742 + (1));
var tmp36803 = inst_36740;
var tmp36804 = inst_36741;
var tmp36805 = inst_36739;
var inst_36739__$1 = tmp36805;
var inst_36740__$1 = tmp36803;
var inst_36741__$1 = tmp36804;
var inst_36742__$1 = inst_36750;
var state_36790__$1 = (function (){var statearr_36808 = state_36790;
(statearr_36808[(8)] = inst_36740__$1);

(statearr_36808[(14)] = inst_36749);

(statearr_36808[(9)] = inst_36741__$1);

(statearr_36808[(10)] = inst_36739__$1);

(statearr_36808[(11)] = inst_36742__$1);

return statearr_36808;
})();
var statearr_36809_37858 = state_36790__$1;
(statearr_36809_37858[(2)] = null);

(statearr_36809_37858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (22))){
var state_36790__$1 = state_36790;
var statearr_36810_37859 = state_36790__$1;
(statearr_36810_37859[(2)] = null);

(statearr_36810_37859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (6))){
var inst_36728 = (state_36790[(13)]);
var inst_36737 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36728) : f.call(null,inst_36728));
var inst_36738 = cljs.core.seq(inst_36737);
var inst_36739 = inst_36738;
var inst_36740 = null;
var inst_36741 = (0);
var inst_36742 = (0);
var state_36790__$1 = (function (){var statearr_36811 = state_36790;
(statearr_36811[(8)] = inst_36740);

(statearr_36811[(9)] = inst_36741);

(statearr_36811[(10)] = inst_36739);

(statearr_36811[(11)] = inst_36742);

return statearr_36811;
})();
var statearr_36812_37860 = state_36790__$1;
(statearr_36812_37860[(2)] = null);

(statearr_36812_37860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (17))){
var inst_36753 = (state_36790[(7)]);
var inst_36757 = cljs.core.chunk_first(inst_36753);
var inst_36761 = cljs.core.chunk_rest(inst_36753);
var inst_36762 = cljs.core.count(inst_36757);
var inst_36739 = inst_36761;
var inst_36740 = inst_36757;
var inst_36741 = inst_36762;
var inst_36742 = (0);
var state_36790__$1 = (function (){var statearr_36813 = state_36790;
(statearr_36813[(8)] = inst_36740);

(statearr_36813[(9)] = inst_36741);

(statearr_36813[(10)] = inst_36739);

(statearr_36813[(11)] = inst_36742);

return statearr_36813;
})();
var statearr_36814_37861 = state_36790__$1;
(statearr_36814_37861[(2)] = null);

(statearr_36814_37861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (3))){
var inst_36788 = (state_36790[(2)]);
var state_36790__$1 = state_36790;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36790__$1,inst_36788);
} else {
if((state_val_36791 === (12))){
var inst_36776 = (state_36790[(2)]);
var state_36790__$1 = state_36790;
var statearr_36823_37862 = state_36790__$1;
(statearr_36823_37862[(2)] = inst_36776);

(statearr_36823_37862[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (2))){
var state_36790__$1 = state_36790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36790__$1,(4),in$);
} else {
if((state_val_36791 === (23))){
var inst_36784 = (state_36790[(2)]);
var state_36790__$1 = state_36790;
var statearr_36830_37863 = state_36790__$1;
(statearr_36830_37863[(2)] = inst_36784);

(statearr_36830_37863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (19))){
var inst_36771 = (state_36790[(2)]);
var state_36790__$1 = state_36790;
var statearr_36837_37864 = state_36790__$1;
(statearr_36837_37864[(2)] = inst_36771);

(statearr_36837_37864[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (11))){
var inst_36753 = (state_36790[(7)]);
var inst_36739 = (state_36790[(10)]);
var inst_36753__$1 = cljs.core.seq(inst_36739);
var state_36790__$1 = (function (){var statearr_36838 = state_36790;
(statearr_36838[(7)] = inst_36753__$1);

return statearr_36838;
})();
if(inst_36753__$1){
var statearr_36839_37865 = state_36790__$1;
(statearr_36839_37865[(1)] = (14));

} else {
var statearr_36840_37866 = state_36790__$1;
(statearr_36840_37866[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (9))){
var inst_36778 = (state_36790[(2)]);
var inst_36779 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36790__$1 = (function (){var statearr_36841 = state_36790;
(statearr_36841[(15)] = inst_36778);

return statearr_36841;
})();
if(cljs.core.truth_(inst_36779)){
var statearr_36842_37867 = state_36790__$1;
(statearr_36842_37867[(1)] = (21));

} else {
var statearr_36843_37868 = state_36790__$1;
(statearr_36843_37868[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (5))){
var inst_36731 = cljs.core.async.close_BANG_(out);
var state_36790__$1 = state_36790;
var statearr_36852_37869 = state_36790__$1;
(statearr_36852_37869[(2)] = inst_36731);

(statearr_36852_37869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (14))){
var inst_36753 = (state_36790[(7)]);
var inst_36755 = cljs.core.chunked_seq_QMARK_(inst_36753);
var state_36790__$1 = state_36790;
if(inst_36755){
var statearr_36859_37870 = state_36790__$1;
(statearr_36859_37870[(1)] = (17));

} else {
var statearr_36860_37871 = state_36790__$1;
(statearr_36860_37871[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (16))){
var inst_36774 = (state_36790[(2)]);
var state_36790__$1 = state_36790;
var statearr_36867_37872 = state_36790__$1;
(statearr_36867_37872[(2)] = inst_36774);

(statearr_36867_37872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (10))){
var inst_36740 = (state_36790[(8)]);
var inst_36742 = (state_36790[(11)]);
var inst_36747 = cljs.core._nth(inst_36740,inst_36742);
var state_36790__$1 = state_36790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36790__$1,(13),out,inst_36747);
} else {
if((state_val_36791 === (18))){
var inst_36753 = (state_36790[(7)]);
var inst_36765 = cljs.core.first(inst_36753);
var state_36790__$1 = state_36790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36790__$1,(20),out,inst_36765);
} else {
if((state_val_36791 === (8))){
var inst_36741 = (state_36790[(9)]);
var inst_36742 = (state_36790[(11)]);
var inst_36744 = (inst_36742 < inst_36741);
var inst_36745 = inst_36744;
var state_36790__$1 = state_36790;
if(cljs.core.truth_(inst_36745)){
var statearr_36868_37874 = state_36790__$1;
(statearr_36868_37874[(1)] = (10));

} else {
var statearr_36869_37875 = state_36790__$1;
(statearr_36869_37875[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__34631__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34631__auto____0 = (function (){
var statearr_36872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36872[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34631__auto__);

(statearr_36872[(1)] = (1));

return statearr_36872;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34631__auto____1 = (function (state_36790){
while(true){
var ret_value__34632__auto__ = (function (){try{while(true){
var result__34633__auto__ = switch__34630__auto__(state_36790);
if(cljs.core.keyword_identical_QMARK_(result__34633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34633__auto__;
}
break;
}
}catch (e36873){var ex__34634__auto__ = e36873;
var statearr_36874_37877 = state_36790;
(statearr_36874_37877[(2)] = ex__34634__auto__);


if(cljs.core.seq((state_36790[(4)]))){
var statearr_36876_37879 = state_36790;
(statearr_36876_37879[(1)] = cljs.core.first((state_36790[(4)])));

} else {
throw ex__34634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37880 = state_36790;
state_36790 = G__37880;
continue;
} else {
return ret_value__34632__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34631__auto__ = function(state_36790){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34631__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34631__auto____1.call(this,state_36790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34631__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34631__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34631__auto__;
})()
})();
var state__34853__auto__ = (function (){var statearr_36877 = f__34852__auto__();
(statearr_36877[(6)] = c__34851__auto__);

return statearr_36877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34853__auto__);
}));

return c__34851__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36879 = arguments.length;
switch (G__36879) {
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
var G__36884 = arguments.length;
switch (G__36884) {
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
var G__36886 = arguments.length;
switch (G__36886) {
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
var c__34851__auto___37888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34852__auto__ = (function (){var switch__34630__auto__ = (function (state_36910){
var state_val_36911 = (state_36910[(1)]);
if((state_val_36911 === (7))){
var inst_36905 = (state_36910[(2)]);
var state_36910__$1 = state_36910;
var statearr_36912_37889 = state_36910__$1;
(statearr_36912_37889[(2)] = inst_36905);

(statearr_36912_37889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36911 === (1))){
var inst_36887 = null;
var state_36910__$1 = (function (){var statearr_36913 = state_36910;
(statearr_36913[(7)] = inst_36887);

return statearr_36913;
})();
var statearr_36914_37890 = state_36910__$1;
(statearr_36914_37890[(2)] = null);

(statearr_36914_37890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36911 === (4))){
var inst_36890 = (state_36910[(8)]);
var inst_36890__$1 = (state_36910[(2)]);
var inst_36891 = (inst_36890__$1 == null);
var inst_36892 = cljs.core.not(inst_36891);
var state_36910__$1 = (function (){var statearr_36915 = state_36910;
(statearr_36915[(8)] = inst_36890__$1);

return statearr_36915;
})();
if(inst_36892){
var statearr_36916_37891 = state_36910__$1;
(statearr_36916_37891[(1)] = (5));

} else {
var statearr_36917_37892 = state_36910__$1;
(statearr_36917_37892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36911 === (6))){
var state_36910__$1 = state_36910;
var statearr_36918_37893 = state_36910__$1;
(statearr_36918_37893[(2)] = null);

(statearr_36918_37893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36911 === (3))){
var inst_36907 = (state_36910[(2)]);
var inst_36908 = cljs.core.async.close_BANG_(out);
var state_36910__$1 = (function (){var statearr_36919 = state_36910;
(statearr_36919[(9)] = inst_36907);

return statearr_36919;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36910__$1,inst_36908);
} else {
if((state_val_36911 === (2))){
var state_36910__$1 = state_36910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36910__$1,(4),ch);
} else {
if((state_val_36911 === (11))){
var inst_36890 = (state_36910[(8)]);
var inst_36899 = (state_36910[(2)]);
var inst_36887 = inst_36890;
var state_36910__$1 = (function (){var statearr_36920 = state_36910;
(statearr_36920[(10)] = inst_36899);

(statearr_36920[(7)] = inst_36887);

return statearr_36920;
})();
var statearr_36921_37894 = state_36910__$1;
(statearr_36921_37894[(2)] = null);

(statearr_36921_37894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36911 === (9))){
var inst_36890 = (state_36910[(8)]);
var state_36910__$1 = state_36910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36910__$1,(11),out,inst_36890);
} else {
if((state_val_36911 === (5))){
var inst_36890 = (state_36910[(8)]);
var inst_36887 = (state_36910[(7)]);
var inst_36894 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36890,inst_36887);
var state_36910__$1 = state_36910;
if(inst_36894){
var statearr_36923_37895 = state_36910__$1;
(statearr_36923_37895[(1)] = (8));

} else {
var statearr_36924_37896 = state_36910__$1;
(statearr_36924_37896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36911 === (10))){
var inst_36902 = (state_36910[(2)]);
var state_36910__$1 = state_36910;
var statearr_36925_37901 = state_36910__$1;
(statearr_36925_37901[(2)] = inst_36902);

(statearr_36925_37901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36911 === (8))){
var inst_36887 = (state_36910[(7)]);
var tmp36922 = inst_36887;
var inst_36887__$1 = tmp36922;
var state_36910__$1 = (function (){var statearr_36926 = state_36910;
(statearr_36926[(7)] = inst_36887__$1);

return statearr_36926;
})();
var statearr_36927_37903 = state_36910__$1;
(statearr_36927_37903[(2)] = null);

(statearr_36927_37903[(1)] = (2));


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
var cljs$core$async$state_machine__34631__auto__ = null;
var cljs$core$async$state_machine__34631__auto____0 = (function (){
var statearr_36936 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36936[(0)] = cljs$core$async$state_machine__34631__auto__);

(statearr_36936[(1)] = (1));

return statearr_36936;
});
var cljs$core$async$state_machine__34631__auto____1 = (function (state_36910){
while(true){
var ret_value__34632__auto__ = (function (){try{while(true){
var result__34633__auto__ = switch__34630__auto__(state_36910);
if(cljs.core.keyword_identical_QMARK_(result__34633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34633__auto__;
}
break;
}
}catch (e36937){var ex__34634__auto__ = e36937;
var statearr_36941_37904 = state_36910;
(statearr_36941_37904[(2)] = ex__34634__auto__);


if(cljs.core.seq((state_36910[(4)]))){
var statearr_36942_37905 = state_36910;
(statearr_36942_37905[(1)] = cljs.core.first((state_36910[(4)])));

} else {
throw ex__34634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37906 = state_36910;
state_36910 = G__37906;
continue;
} else {
return ret_value__34632__auto__;
}
break;
}
});
cljs$core$async$state_machine__34631__auto__ = function(state_36910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34631__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34631__auto____1.call(this,state_36910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34631__auto____0;
cljs$core$async$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34631__auto____1;
return cljs$core$async$state_machine__34631__auto__;
})()
})();
var state__34853__auto__ = (function (){var statearr_36943 = f__34852__auto__();
(statearr_36943[(6)] = c__34851__auto___37888);

return statearr_36943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34853__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36945 = arguments.length;
switch (G__36945) {
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
var c__34851__auto___37909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34852__auto__ = (function (){var switch__34630__auto__ = (function (state_36983){
var state_val_36984 = (state_36983[(1)]);
if((state_val_36984 === (7))){
var inst_36979 = (state_36983[(2)]);
var state_36983__$1 = state_36983;
var statearr_36985_37910 = state_36983__$1;
(statearr_36985_37910[(2)] = inst_36979);

(statearr_36985_37910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36984 === (1))){
var inst_36946 = (new Array(n));
var inst_36947 = inst_36946;
var inst_36948 = (0);
var state_36983__$1 = (function (){var statearr_36986 = state_36983;
(statearr_36986[(7)] = inst_36948);

(statearr_36986[(8)] = inst_36947);

return statearr_36986;
})();
var statearr_36987_37911 = state_36983__$1;
(statearr_36987_37911[(2)] = null);

(statearr_36987_37911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36984 === (4))){
var inst_36951 = (state_36983[(9)]);
var inst_36951__$1 = (state_36983[(2)]);
var inst_36952 = (inst_36951__$1 == null);
var inst_36953 = cljs.core.not(inst_36952);
var state_36983__$1 = (function (){var statearr_36988 = state_36983;
(statearr_36988[(9)] = inst_36951__$1);

return statearr_36988;
})();
if(inst_36953){
var statearr_36989_37913 = state_36983__$1;
(statearr_36989_37913[(1)] = (5));

} else {
var statearr_36990_37914 = state_36983__$1;
(statearr_36990_37914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36984 === (15))){
var inst_36973 = (state_36983[(2)]);
var state_36983__$1 = state_36983;
var statearr_36992_37918 = state_36983__$1;
(statearr_36992_37918[(2)] = inst_36973);

(statearr_36992_37918[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36984 === (13))){
var state_36983__$1 = state_36983;
var statearr_36994_37919 = state_36983__$1;
(statearr_36994_37919[(2)] = null);

(statearr_36994_37919[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36984 === (6))){
var inst_36948 = (state_36983[(7)]);
var inst_36969 = (inst_36948 > (0));
var state_36983__$1 = state_36983;
if(cljs.core.truth_(inst_36969)){
var statearr_36995_37920 = state_36983__$1;
(statearr_36995_37920[(1)] = (12));

} else {
var statearr_36997_37921 = state_36983__$1;
(statearr_36997_37921[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36984 === (3))){
var inst_36981 = (state_36983[(2)]);
var state_36983__$1 = state_36983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36983__$1,inst_36981);
} else {
if((state_val_36984 === (12))){
var inst_36947 = (state_36983[(8)]);
var inst_36971 = cljs.core.vec(inst_36947);
var state_36983__$1 = state_36983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36983__$1,(15),out,inst_36971);
} else {
if((state_val_36984 === (2))){
var state_36983__$1 = state_36983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36983__$1,(4),ch);
} else {
if((state_val_36984 === (11))){
var inst_36963 = (state_36983[(2)]);
var inst_36964 = (new Array(n));
var inst_36947 = inst_36964;
var inst_36948 = (0);
var state_36983__$1 = (function (){var statearr_37000 = state_36983;
(statearr_37000[(7)] = inst_36948);

(statearr_37000[(8)] = inst_36947);

(statearr_37000[(10)] = inst_36963);

return statearr_37000;
})();
var statearr_37001_37922 = state_36983__$1;
(statearr_37001_37922[(2)] = null);

(statearr_37001_37922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36984 === (9))){
var inst_36947 = (state_36983[(8)]);
var inst_36961 = cljs.core.vec(inst_36947);
var state_36983__$1 = state_36983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36983__$1,(11),out,inst_36961);
} else {
if((state_val_36984 === (5))){
var inst_36948 = (state_36983[(7)]);
var inst_36951 = (state_36983[(9)]);
var inst_36956 = (state_36983[(11)]);
var inst_36947 = (state_36983[(8)]);
var inst_36955 = (inst_36947[inst_36948] = inst_36951);
var inst_36956__$1 = (inst_36948 + (1));
var inst_36957 = (inst_36956__$1 < n);
var state_36983__$1 = (function (){var statearr_37003 = state_36983;
(statearr_37003[(11)] = inst_36956__$1);

(statearr_37003[(12)] = inst_36955);

return statearr_37003;
})();
if(cljs.core.truth_(inst_36957)){
var statearr_37004_37927 = state_36983__$1;
(statearr_37004_37927[(1)] = (8));

} else {
var statearr_37005_37928 = state_36983__$1;
(statearr_37005_37928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36984 === (14))){
var inst_36976 = (state_36983[(2)]);
var inst_36977 = cljs.core.async.close_BANG_(out);
var state_36983__$1 = (function (){var statearr_37008 = state_36983;
(statearr_37008[(13)] = inst_36976);

return statearr_37008;
})();
var statearr_37010_37929 = state_36983__$1;
(statearr_37010_37929[(2)] = inst_36977);

(statearr_37010_37929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36984 === (10))){
var inst_36967 = (state_36983[(2)]);
var state_36983__$1 = state_36983;
var statearr_37011_37930 = state_36983__$1;
(statearr_37011_37930[(2)] = inst_36967);

(statearr_37011_37930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36984 === (8))){
var inst_36956 = (state_36983[(11)]);
var inst_36947 = (state_36983[(8)]);
var tmp37006 = inst_36947;
var inst_36947__$1 = tmp37006;
var inst_36948 = inst_36956;
var state_36983__$1 = (function (){var statearr_37012 = state_36983;
(statearr_37012[(7)] = inst_36948);

(statearr_37012[(8)] = inst_36947__$1);

return statearr_37012;
})();
var statearr_37013_37935 = state_36983__$1;
(statearr_37013_37935[(2)] = null);

(statearr_37013_37935[(1)] = (2));


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
var cljs$core$async$state_machine__34631__auto__ = null;
var cljs$core$async$state_machine__34631__auto____0 = (function (){
var statearr_37014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37014[(0)] = cljs$core$async$state_machine__34631__auto__);

(statearr_37014[(1)] = (1));

return statearr_37014;
});
var cljs$core$async$state_machine__34631__auto____1 = (function (state_36983){
while(true){
var ret_value__34632__auto__ = (function (){try{while(true){
var result__34633__auto__ = switch__34630__auto__(state_36983);
if(cljs.core.keyword_identical_QMARK_(result__34633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34633__auto__;
}
break;
}
}catch (e37015){var ex__34634__auto__ = e37015;
var statearr_37016_37936 = state_36983;
(statearr_37016_37936[(2)] = ex__34634__auto__);


if(cljs.core.seq((state_36983[(4)]))){
var statearr_37017_37937 = state_36983;
(statearr_37017_37937[(1)] = cljs.core.first((state_36983[(4)])));

} else {
throw ex__34634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37938 = state_36983;
state_36983 = G__37938;
continue;
} else {
return ret_value__34632__auto__;
}
break;
}
});
cljs$core$async$state_machine__34631__auto__ = function(state_36983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34631__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34631__auto____1.call(this,state_36983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34631__auto____0;
cljs$core$async$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34631__auto____1;
return cljs$core$async$state_machine__34631__auto__;
})()
})();
var state__34853__auto__ = (function (){var statearr_37018 = f__34852__auto__();
(statearr_37018[(6)] = c__34851__auto___37909);

return statearr_37018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34853__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37020 = arguments.length;
switch (G__37020) {
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
var c__34851__auto___37940 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34852__auto__ = (function (){var switch__34630__auto__ = (function (state_37068){
var state_val_37069 = (state_37068[(1)]);
if((state_val_37069 === (7))){
var inst_37064 = (state_37068[(2)]);
var state_37068__$1 = state_37068;
var statearr_37070_37941 = state_37068__$1;
(statearr_37070_37941[(2)] = inst_37064);

(statearr_37070_37941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37069 === (1))){
var inst_37021 = [];
var inst_37022 = inst_37021;
var inst_37023 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37068__$1 = (function (){var statearr_37077 = state_37068;
(statearr_37077[(7)] = inst_37023);

(statearr_37077[(8)] = inst_37022);

return statearr_37077;
})();
var statearr_37082_37942 = state_37068__$1;
(statearr_37082_37942[(2)] = null);

(statearr_37082_37942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37069 === (4))){
var inst_37029 = (state_37068[(9)]);
var inst_37029__$1 = (state_37068[(2)]);
var inst_37030 = (inst_37029__$1 == null);
var inst_37031 = cljs.core.not(inst_37030);
var state_37068__$1 = (function (){var statearr_37086 = state_37068;
(statearr_37086[(9)] = inst_37029__$1);

return statearr_37086;
})();
if(inst_37031){
var statearr_37087_37943 = state_37068__$1;
(statearr_37087_37943[(1)] = (5));

} else {
var statearr_37088_37944 = state_37068__$1;
(statearr_37088_37944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37069 === (15))){
var inst_37022 = (state_37068[(8)]);
var inst_37056 = cljs.core.vec(inst_37022);
var state_37068__$1 = state_37068;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37068__$1,(18),out,inst_37056);
} else {
if((state_val_37069 === (13))){
var inst_37051 = (state_37068[(2)]);
var state_37068__$1 = state_37068;
var statearr_37089_37945 = state_37068__$1;
(statearr_37089_37945[(2)] = inst_37051);

(statearr_37089_37945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37069 === (6))){
var inst_37022 = (state_37068[(8)]);
var inst_37053 = inst_37022.length;
var inst_37054 = (inst_37053 > (0));
var state_37068__$1 = state_37068;
if(cljs.core.truth_(inst_37054)){
var statearr_37094_37946 = state_37068__$1;
(statearr_37094_37946[(1)] = (15));

} else {
var statearr_37098_37947 = state_37068__$1;
(statearr_37098_37947[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37069 === (17))){
var inst_37061 = (state_37068[(2)]);
var inst_37062 = cljs.core.async.close_BANG_(out);
var state_37068__$1 = (function (){var statearr_37099 = state_37068;
(statearr_37099[(10)] = inst_37061);

return statearr_37099;
})();
var statearr_37103_37948 = state_37068__$1;
(statearr_37103_37948[(2)] = inst_37062);

(statearr_37103_37948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37069 === (3))){
var inst_37066 = (state_37068[(2)]);
var state_37068__$1 = state_37068;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37068__$1,inst_37066);
} else {
if((state_val_37069 === (12))){
var inst_37022 = (state_37068[(8)]);
var inst_37044 = cljs.core.vec(inst_37022);
var state_37068__$1 = state_37068;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37068__$1,(14),out,inst_37044);
} else {
if((state_val_37069 === (2))){
var state_37068__$1 = state_37068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37068__$1,(4),ch);
} else {
if((state_val_37069 === (11))){
var inst_37029 = (state_37068[(9)]);
var inst_37022 = (state_37068[(8)]);
var inst_37033 = (state_37068[(11)]);
var inst_37041 = inst_37022.push(inst_37029);
var tmp37104 = inst_37022;
var inst_37022__$1 = tmp37104;
var inst_37023 = inst_37033;
var state_37068__$1 = (function (){var statearr_37108 = state_37068;
(statearr_37108[(7)] = inst_37023);

(statearr_37108[(12)] = inst_37041);

(statearr_37108[(8)] = inst_37022__$1);

return statearr_37108;
})();
var statearr_37113_37950 = state_37068__$1;
(statearr_37113_37950[(2)] = null);

(statearr_37113_37950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37069 === (9))){
var inst_37023 = (state_37068[(7)]);
var inst_37037 = cljs.core.keyword_identical_QMARK_(inst_37023,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_37068__$1 = state_37068;
var statearr_37117_37951 = state_37068__$1;
(statearr_37117_37951[(2)] = inst_37037);

(statearr_37117_37951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37069 === (5))){
var inst_37023 = (state_37068[(7)]);
var inst_37034 = (state_37068[(13)]);
var inst_37029 = (state_37068[(9)]);
var inst_37033 = (state_37068[(11)]);
var inst_37033__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37029) : f.call(null,inst_37029));
var inst_37034__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37033__$1,inst_37023);
var state_37068__$1 = (function (){var statearr_37125 = state_37068;
(statearr_37125[(13)] = inst_37034__$1);

(statearr_37125[(11)] = inst_37033__$1);

return statearr_37125;
})();
if(inst_37034__$1){
var statearr_37126_37955 = state_37068__$1;
(statearr_37126_37955[(1)] = (8));

} else {
var statearr_37127_37956 = state_37068__$1;
(statearr_37127_37956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37069 === (14))){
var inst_37029 = (state_37068[(9)]);
var inst_37033 = (state_37068[(11)]);
var inst_37046 = (state_37068[(2)]);
var inst_37047 = [];
var inst_37048 = inst_37047.push(inst_37029);
var inst_37022 = inst_37047;
var inst_37023 = inst_37033;
var state_37068__$1 = (function (){var statearr_37128 = state_37068;
(statearr_37128[(7)] = inst_37023);

(statearr_37128[(14)] = inst_37046);

(statearr_37128[(8)] = inst_37022);

(statearr_37128[(15)] = inst_37048);

return statearr_37128;
})();
var statearr_37129_37957 = state_37068__$1;
(statearr_37129_37957[(2)] = null);

(statearr_37129_37957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37069 === (16))){
var state_37068__$1 = state_37068;
var statearr_37132_37958 = state_37068__$1;
(statearr_37132_37958[(2)] = null);

(statearr_37132_37958[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37069 === (10))){
var inst_37039 = (state_37068[(2)]);
var state_37068__$1 = state_37068;
if(cljs.core.truth_(inst_37039)){
var statearr_37133_37959 = state_37068__$1;
(statearr_37133_37959[(1)] = (11));

} else {
var statearr_37134_37960 = state_37068__$1;
(statearr_37134_37960[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37069 === (18))){
var inst_37058 = (state_37068[(2)]);
var state_37068__$1 = state_37068;
var statearr_37135_37961 = state_37068__$1;
(statearr_37135_37961[(2)] = inst_37058);

(statearr_37135_37961[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37069 === (8))){
var inst_37034 = (state_37068[(13)]);
var state_37068__$1 = state_37068;
var statearr_37136_37964 = state_37068__$1;
(statearr_37136_37964[(2)] = inst_37034);

(statearr_37136_37964[(1)] = (10));


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
var cljs$core$async$state_machine__34631__auto__ = null;
var cljs$core$async$state_machine__34631__auto____0 = (function (){
var statearr_37137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37137[(0)] = cljs$core$async$state_machine__34631__auto__);

(statearr_37137[(1)] = (1));

return statearr_37137;
});
var cljs$core$async$state_machine__34631__auto____1 = (function (state_37068){
while(true){
var ret_value__34632__auto__ = (function (){try{while(true){
var result__34633__auto__ = switch__34630__auto__(state_37068);
if(cljs.core.keyword_identical_QMARK_(result__34633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34633__auto__;
}
break;
}
}catch (e37138){var ex__34634__auto__ = e37138;
var statearr_37139_37965 = state_37068;
(statearr_37139_37965[(2)] = ex__34634__auto__);


if(cljs.core.seq((state_37068[(4)]))){
var statearr_37140_37966 = state_37068;
(statearr_37140_37966[(1)] = cljs.core.first((state_37068[(4)])));

} else {
throw ex__34634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37967 = state_37068;
state_37068 = G__37967;
continue;
} else {
return ret_value__34632__auto__;
}
break;
}
});
cljs$core$async$state_machine__34631__auto__ = function(state_37068){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34631__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34631__auto____1.call(this,state_37068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34631__auto____0;
cljs$core$async$state_machine__34631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34631__auto____1;
return cljs$core$async$state_machine__34631__auto__;
})()
})();
var state__34853__auto__ = (function (){var statearr_37141 = f__34852__auto__();
(statearr_37141[(6)] = c__34851__auto___37940);

return statearr_37141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34853__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
