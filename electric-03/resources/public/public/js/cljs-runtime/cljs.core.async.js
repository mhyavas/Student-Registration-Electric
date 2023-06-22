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
cljs.core.async.t_cljs$core$async34538 = (function (f,blockable,meta34539){
this.f = f;
this.blockable = blockable;
this.meta34539 = meta34539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34540,meta34539__$1){
var self__ = this;
var _34540__$1 = this;
return (new cljs.core.async.t_cljs$core$async34538(self__.f,self__.blockable,meta34539__$1));
}));

(cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34540){
var self__ = this;
var _34540__$1 = this;
return self__.meta34539;
}));

(cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34539","meta34539",-1770110104,null)], null);
}));

(cljs.core.async.t_cljs$core$async34538.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34538");

(cljs.core.async.t_cljs$core$async34538.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34538");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34538.
 */
cljs.core.async.__GT_t_cljs$core$async34538 = (function cljs$core$async$__GT_t_cljs$core$async34538(f,blockable,meta34539){
return (new cljs.core.async.t_cljs$core$async34538(f,blockable,meta34539));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34537 = arguments.length;
switch (G__34537) {
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
return (new cljs.core.async.t_cljs$core$async34538(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34565 = arguments.length;
switch (G__34565) {
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
var G__34572 = arguments.length;
switch (G__34572) {
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
var G__34580 = arguments.length;
switch (G__34580) {
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
var val_36786 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36786) : fn1.call(null,val_36786));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36786) : fn1.call(null,val_36786));
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
var G__34582 = arguments.length;
switch (G__34582) {
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
var n__5636__auto___36790 = n;
var x_36791 = (0);
while(true){
if((x_36791 < n__5636__auto___36790)){
(a[x_36791] = x_36791);

var G__36793 = (x_36791 + (1));
x_36791 = G__36793;
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
cljs.core.async.t_cljs$core$async34591 = (function (flag,meta34592){
this.flag = flag;
this.meta34592 = meta34592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34593,meta34592__$1){
var self__ = this;
var _34593__$1 = this;
return (new cljs.core.async.t_cljs$core$async34591(self__.flag,meta34592__$1));
}));

(cljs.core.async.t_cljs$core$async34591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34593){
var self__ = this;
var _34593__$1 = this;
return self__.meta34592;
}));

(cljs.core.async.t_cljs$core$async34591.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34591.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34592","meta34592",-416813986,null)], null);
}));

(cljs.core.async.t_cljs$core$async34591.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34591");

(cljs.core.async.t_cljs$core$async34591.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34591");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34591.
 */
cljs.core.async.__GT_t_cljs$core$async34591 = (function cljs$core$async$__GT_t_cljs$core$async34591(flag,meta34592){
return (new cljs.core.async.t_cljs$core$async34591(flag,meta34592));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async34591(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34611 = (function (flag,cb,meta34612){
this.flag = flag;
this.cb = cb;
this.meta34612 = meta34612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34613,meta34612__$1){
var self__ = this;
var _34613__$1 = this;
return (new cljs.core.async.t_cljs$core$async34611(self__.flag,self__.cb,meta34612__$1));
}));

(cljs.core.async.t_cljs$core$async34611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34613){
var self__ = this;
var _34613__$1 = this;
return self__.meta34612;
}));

(cljs.core.async.t_cljs$core$async34611.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34611.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34611.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34611.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34612","meta34612",344652967,null)], null);
}));

(cljs.core.async.t_cljs$core$async34611.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34611");

(cljs.core.async.t_cljs$core$async34611.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34611");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34611.
 */
cljs.core.async.__GT_t_cljs$core$async34611 = (function cljs$core$async$__GT_t_cljs$core$async34611(flag,cb,meta34612){
return (new cljs.core.async.t_cljs$core$async34611(flag,cb,meta34612));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async34611(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34645_SHARP_){
var G__34682 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34645_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34682) : fret.call(null,G__34682));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34646_SHARP_){
var G__34690 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34646_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34690) : fret.call(null,G__34690));
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
var G__36810 = (i + (1));
i = G__36810;
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
var len__5769__auto___36813 = arguments.length;
var i__5770__auto___36814 = (0);
while(true){
if((i__5770__auto___36814 < len__5769__auto___36813)){
args__5775__auto__.push((arguments[i__5770__auto___36814]));

var G__36815 = (i__5770__auto___36814 + (1));
i__5770__auto___36814 = G__36815;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34722){
var map__34723 = p__34722;
var map__34723__$1 = cljs.core.__destructure_map(map__34723);
var opts = map__34723__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34720){
var G__34721 = cljs.core.first(seq34720);
var seq34720__$1 = cljs.core.next(seq34720);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34721,seq34720__$1);
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
var G__34749 = arguments.length;
switch (G__34749) {
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
var c__34475__auto___36818 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34476__auto__ = (function (){var switch__34245__auto__ = (function (state_34788){
var state_val_34789 = (state_34788[(1)]);
if((state_val_34789 === (7))){
var inst_34784 = (state_34788[(2)]);
var state_34788__$1 = state_34788;
var statearr_34794_36820 = state_34788__$1;
(statearr_34794_36820[(2)] = inst_34784);

(statearr_34794_36820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (1))){
var state_34788__$1 = state_34788;
var statearr_34798_36821 = state_34788__$1;
(statearr_34798_36821[(2)] = null);

(statearr_34798_36821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (4))){
var inst_34757 = (state_34788[(7)]);
var inst_34757__$1 = (state_34788[(2)]);
var inst_34765 = (inst_34757__$1 == null);
var state_34788__$1 = (function (){var statearr_34799 = state_34788;
(statearr_34799[(7)] = inst_34757__$1);

return statearr_34799;
})();
if(cljs.core.truth_(inst_34765)){
var statearr_34804_36822 = state_34788__$1;
(statearr_34804_36822[(1)] = (5));

} else {
var statearr_34809_36823 = state_34788__$1;
(statearr_34809_36823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (13))){
var state_34788__$1 = state_34788;
var statearr_34822_36824 = state_34788__$1;
(statearr_34822_36824[(2)] = null);

(statearr_34822_36824[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (6))){
var inst_34757 = (state_34788[(7)]);
var state_34788__$1 = state_34788;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34788__$1,(11),to,inst_34757);
} else {
if((state_val_34789 === (3))){
var inst_34786 = (state_34788[(2)]);
var state_34788__$1 = state_34788;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34788__$1,inst_34786);
} else {
if((state_val_34789 === (12))){
var state_34788__$1 = state_34788;
var statearr_34823_36825 = state_34788__$1;
(statearr_34823_36825[(2)] = null);

(statearr_34823_36825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (2))){
var state_34788__$1 = state_34788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34788__$1,(4),from);
} else {
if((state_val_34789 === (11))){
var inst_34775 = (state_34788[(2)]);
var state_34788__$1 = state_34788;
if(cljs.core.truth_(inst_34775)){
var statearr_34824_36826 = state_34788__$1;
(statearr_34824_36826[(1)] = (12));

} else {
var statearr_34825_36827 = state_34788__$1;
(statearr_34825_36827[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (9))){
var state_34788__$1 = state_34788;
var statearr_34826_36828 = state_34788__$1;
(statearr_34826_36828[(2)] = null);

(statearr_34826_36828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (5))){
var state_34788__$1 = state_34788;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34827_36829 = state_34788__$1;
(statearr_34827_36829[(1)] = (8));

} else {
var statearr_34828_36830 = state_34788__$1;
(statearr_34828_36830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (14))){
var inst_34782 = (state_34788[(2)]);
var state_34788__$1 = state_34788;
var statearr_34829_36831 = state_34788__$1;
(statearr_34829_36831[(2)] = inst_34782);

(statearr_34829_36831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (10))){
var inst_34772 = (state_34788[(2)]);
var state_34788__$1 = state_34788;
var statearr_34830_36832 = state_34788__$1;
(statearr_34830_36832[(2)] = inst_34772);

(statearr_34830_36832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (8))){
var inst_34768 = cljs.core.async.close_BANG_(to);
var state_34788__$1 = state_34788;
var statearr_34831_36834 = state_34788__$1;
(statearr_34831_36834[(2)] = inst_34768);

(statearr_34831_36834[(1)] = (10));


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
var cljs$core$async$state_machine__34246__auto__ = null;
var cljs$core$async$state_machine__34246__auto____0 = (function (){
var statearr_34832 = [null,null,null,null,null,null,null,null];
(statearr_34832[(0)] = cljs$core$async$state_machine__34246__auto__);

(statearr_34832[(1)] = (1));

return statearr_34832;
});
var cljs$core$async$state_machine__34246__auto____1 = (function (state_34788){
while(true){
var ret_value__34247__auto__ = (function (){try{while(true){
var result__34248__auto__ = switch__34245__auto__(state_34788);
if(cljs.core.keyword_identical_QMARK_(result__34248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34248__auto__;
}
break;
}
}catch (e34841){var ex__34249__auto__ = e34841;
var statearr_34842_36836 = state_34788;
(statearr_34842_36836[(2)] = ex__34249__auto__);


if(cljs.core.seq((state_34788[(4)]))){
var statearr_34843_36837 = state_34788;
(statearr_34843_36837[(1)] = cljs.core.first((state_34788[(4)])));

} else {
throw ex__34249__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36840 = state_34788;
state_34788 = G__36840;
continue;
} else {
return ret_value__34247__auto__;
}
break;
}
});
cljs$core$async$state_machine__34246__auto__ = function(state_34788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34246__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34246__auto____1.call(this,state_34788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34246__auto____0;
cljs$core$async$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34246__auto____1;
return cljs$core$async$state_machine__34246__auto__;
})()
})();
var state__34477__auto__ = (function (){var statearr_34848 = f__34476__auto__();
(statearr_34848[(6)] = c__34475__auto___36818);

return statearr_34848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34477__auto__);
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
var process__$1 = (function (p__34857){
var vec__34858 = p__34857;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34858,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34858,(1),null);
var job = vec__34858;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34475__auto___36842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34476__auto__ = (function (){var switch__34245__auto__ = (function (state_34865){
var state_val_34866 = (state_34865[(1)]);
if((state_val_34866 === (1))){
var state_34865__$1 = state_34865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34865__$1,(2),res,v);
} else {
if((state_val_34866 === (2))){
var inst_34862 = (state_34865[(2)]);
var inst_34863 = cljs.core.async.close_BANG_(res);
var state_34865__$1 = (function (){var statearr_34867 = state_34865;
(statearr_34867[(7)] = inst_34862);

return statearr_34867;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34865__$1,inst_34863);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____0 = (function (){
var statearr_34868 = [null,null,null,null,null,null,null,null];
(statearr_34868[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__);

(statearr_34868[(1)] = (1));

return statearr_34868;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____1 = (function (state_34865){
while(true){
var ret_value__34247__auto__ = (function (){try{while(true){
var result__34248__auto__ = switch__34245__auto__(state_34865);
if(cljs.core.keyword_identical_QMARK_(result__34248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34248__auto__;
}
break;
}
}catch (e34869){var ex__34249__auto__ = e34869;
var statearr_34870_36843 = state_34865;
(statearr_34870_36843[(2)] = ex__34249__auto__);


if(cljs.core.seq((state_34865[(4)]))){
var statearr_34871_36844 = state_34865;
(statearr_34871_36844[(1)] = cljs.core.first((state_34865[(4)])));

} else {
throw ex__34249__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36845 = state_34865;
state_34865 = G__36845;
continue;
} else {
return ret_value__34247__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__ = function(state_34865){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____1.call(this,state_34865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__;
})()
})();
var state__34477__auto__ = (function (){var statearr_34872 = f__34476__auto__();
(statearr_34872[(6)] = c__34475__auto___36842);

return statearr_34872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34477__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34874){
var vec__34875 = p__34874;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34875,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34875,(1),null);
var job = vec__34875;
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
var n__5636__auto___36848 = n;
var __36849 = (0);
while(true){
if((__36849 < n__5636__auto___36848)){
var G__34878_36850 = type;
var G__34878_36851__$1 = (((G__34878_36850 instanceof cljs.core.Keyword))?G__34878_36850.fqn:null);
switch (G__34878_36851__$1) {
case "compute":
var c__34475__auto___36862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36849,c__34475__auto___36862,G__34878_36850,G__34878_36851__$1,n__5636__auto___36848,jobs,results,process__$1,async){
return (function (){
var f__34476__auto__ = (function (){var switch__34245__auto__ = ((function (__36849,c__34475__auto___36862,G__34878_36850,G__34878_36851__$1,n__5636__auto___36848,jobs,results,process__$1,async){
return (function (state_34891){
var state_val_34892 = (state_34891[(1)]);
if((state_val_34892 === (1))){
var state_34891__$1 = state_34891;
var statearr_34893_36863 = state_34891__$1;
(statearr_34893_36863[(2)] = null);

(statearr_34893_36863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (2))){
var state_34891__$1 = state_34891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34891__$1,(4),jobs);
} else {
if((state_val_34892 === (3))){
var inst_34889 = (state_34891[(2)]);
var state_34891__$1 = state_34891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34891__$1,inst_34889);
} else {
if((state_val_34892 === (4))){
var inst_34881 = (state_34891[(2)]);
var inst_34882 = process__$1(inst_34881);
var state_34891__$1 = state_34891;
if(cljs.core.truth_(inst_34882)){
var statearr_34895_36864 = state_34891__$1;
(statearr_34895_36864[(1)] = (5));

} else {
var statearr_34896_36865 = state_34891__$1;
(statearr_34896_36865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (5))){
var state_34891__$1 = state_34891;
var statearr_34897_36866 = state_34891__$1;
(statearr_34897_36866[(2)] = null);

(statearr_34897_36866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (6))){
var state_34891__$1 = state_34891;
var statearr_34898_36867 = state_34891__$1;
(statearr_34898_36867[(2)] = null);

(statearr_34898_36867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (7))){
var inst_34887 = (state_34891[(2)]);
var state_34891__$1 = state_34891;
var statearr_34899_36869 = state_34891__$1;
(statearr_34899_36869[(2)] = inst_34887);

(statearr_34899_36869[(1)] = (3));


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
});})(__36849,c__34475__auto___36862,G__34878_36850,G__34878_36851__$1,n__5636__auto___36848,jobs,results,process__$1,async))
;
return ((function (__36849,switch__34245__auto__,c__34475__auto___36862,G__34878_36850,G__34878_36851__$1,n__5636__auto___36848,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____0 = (function (){
var statearr_34900 = [null,null,null,null,null,null,null];
(statearr_34900[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__);

(statearr_34900[(1)] = (1));

return statearr_34900;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____1 = (function (state_34891){
while(true){
var ret_value__34247__auto__ = (function (){try{while(true){
var result__34248__auto__ = switch__34245__auto__(state_34891);
if(cljs.core.keyword_identical_QMARK_(result__34248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34248__auto__;
}
break;
}
}catch (e34901){var ex__34249__auto__ = e34901;
var statearr_34902_36871 = state_34891;
(statearr_34902_36871[(2)] = ex__34249__auto__);


if(cljs.core.seq((state_34891[(4)]))){
var statearr_34903_36872 = state_34891;
(statearr_34903_36872[(1)] = cljs.core.first((state_34891[(4)])));

} else {
throw ex__34249__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36873 = state_34891;
state_34891 = G__36873;
continue;
} else {
return ret_value__34247__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__ = function(state_34891){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____1.call(this,state_34891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__;
})()
;})(__36849,switch__34245__auto__,c__34475__auto___36862,G__34878_36850,G__34878_36851__$1,n__5636__auto___36848,jobs,results,process__$1,async))
})();
var state__34477__auto__ = (function (){var statearr_34904 = f__34476__auto__();
(statearr_34904[(6)] = c__34475__auto___36862);

return statearr_34904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34477__auto__);
});})(__36849,c__34475__auto___36862,G__34878_36850,G__34878_36851__$1,n__5636__auto___36848,jobs,results,process__$1,async))
);


break;
case "async":
var c__34475__auto___36874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36849,c__34475__auto___36874,G__34878_36850,G__34878_36851__$1,n__5636__auto___36848,jobs,results,process__$1,async){
return (function (){
var f__34476__auto__ = (function (){var switch__34245__auto__ = ((function (__36849,c__34475__auto___36874,G__34878_36850,G__34878_36851__$1,n__5636__auto___36848,jobs,results,process__$1,async){
return (function (state_34917){
var state_val_34918 = (state_34917[(1)]);
if((state_val_34918 === (1))){
var state_34917__$1 = state_34917;
var statearr_34920_36875 = state_34917__$1;
(statearr_34920_36875[(2)] = null);

(statearr_34920_36875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (2))){
var state_34917__$1 = state_34917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34917__$1,(4),jobs);
} else {
if((state_val_34918 === (3))){
var inst_34915 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34917__$1,inst_34915);
} else {
if((state_val_34918 === (4))){
var inst_34907 = (state_34917[(2)]);
var inst_34908 = async(inst_34907);
var state_34917__$1 = state_34917;
if(cljs.core.truth_(inst_34908)){
var statearr_34923_36876 = state_34917__$1;
(statearr_34923_36876[(1)] = (5));

} else {
var statearr_34924_36877 = state_34917__$1;
(statearr_34924_36877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (5))){
var state_34917__$1 = state_34917;
var statearr_34926_36878 = state_34917__$1;
(statearr_34926_36878[(2)] = null);

(statearr_34926_36878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (6))){
var state_34917__$1 = state_34917;
var statearr_34928_36879 = state_34917__$1;
(statearr_34928_36879[(2)] = null);

(statearr_34928_36879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (7))){
var inst_34913 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
var statearr_34929_36880 = state_34917__$1;
(statearr_34929_36880[(2)] = inst_34913);

(statearr_34929_36880[(1)] = (3));


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
});})(__36849,c__34475__auto___36874,G__34878_36850,G__34878_36851__$1,n__5636__auto___36848,jobs,results,process__$1,async))
;
return ((function (__36849,switch__34245__auto__,c__34475__auto___36874,G__34878_36850,G__34878_36851__$1,n__5636__auto___36848,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____0 = (function (){
var statearr_34930 = [null,null,null,null,null,null,null];
(statearr_34930[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__);

(statearr_34930[(1)] = (1));

return statearr_34930;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____1 = (function (state_34917){
while(true){
var ret_value__34247__auto__ = (function (){try{while(true){
var result__34248__auto__ = switch__34245__auto__(state_34917);
if(cljs.core.keyword_identical_QMARK_(result__34248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34248__auto__;
}
break;
}
}catch (e34931){var ex__34249__auto__ = e34931;
var statearr_34932_36885 = state_34917;
(statearr_34932_36885[(2)] = ex__34249__auto__);


if(cljs.core.seq((state_34917[(4)]))){
var statearr_34933_36886 = state_34917;
(statearr_34933_36886[(1)] = cljs.core.first((state_34917[(4)])));

} else {
throw ex__34249__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36887 = state_34917;
state_34917 = G__36887;
continue;
} else {
return ret_value__34247__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__ = function(state_34917){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____1.call(this,state_34917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__;
})()
;})(__36849,switch__34245__auto__,c__34475__auto___36874,G__34878_36850,G__34878_36851__$1,n__5636__auto___36848,jobs,results,process__$1,async))
})();
var state__34477__auto__ = (function (){var statearr_34934 = f__34476__auto__();
(statearr_34934[(6)] = c__34475__auto___36874);

return statearr_34934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34477__auto__);
});})(__36849,c__34475__auto___36874,G__34878_36850,G__34878_36851__$1,n__5636__auto___36848,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34878_36851__$1)].join('')));

}

var G__36888 = (__36849 + (1));
__36849 = G__36888;
continue;
} else {
}
break;
}

var c__34475__auto___36889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34476__auto__ = (function (){var switch__34245__auto__ = (function (state_34957){
var state_val_34958 = (state_34957[(1)]);
if((state_val_34958 === (7))){
var inst_34953 = (state_34957[(2)]);
var state_34957__$1 = state_34957;
var statearr_34960_36890 = state_34957__$1;
(statearr_34960_36890[(2)] = inst_34953);

(statearr_34960_36890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34958 === (1))){
var state_34957__$1 = state_34957;
var statearr_34961_36891 = state_34957__$1;
(statearr_34961_36891[(2)] = null);

(statearr_34961_36891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34958 === (4))){
var inst_34937 = (state_34957[(7)]);
var inst_34937__$1 = (state_34957[(2)]);
var inst_34938 = (inst_34937__$1 == null);
var state_34957__$1 = (function (){var statearr_34962 = state_34957;
(statearr_34962[(7)] = inst_34937__$1);

return statearr_34962;
})();
if(cljs.core.truth_(inst_34938)){
var statearr_34963_36892 = state_34957__$1;
(statearr_34963_36892[(1)] = (5));

} else {
var statearr_34964_36893 = state_34957__$1;
(statearr_34964_36893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34958 === (6))){
var inst_34937 = (state_34957[(7)]);
var inst_34942 = (state_34957[(8)]);
var inst_34942__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34944 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34945 = [inst_34937,inst_34942__$1];
var inst_34946 = (new cljs.core.PersistentVector(null,2,(5),inst_34944,inst_34945,null));
var state_34957__$1 = (function (){var statearr_34965 = state_34957;
(statearr_34965[(8)] = inst_34942__$1);

return statearr_34965;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34957__$1,(8),jobs,inst_34946);
} else {
if((state_val_34958 === (3))){
var inst_34955 = (state_34957[(2)]);
var state_34957__$1 = state_34957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34957__$1,inst_34955);
} else {
if((state_val_34958 === (2))){
var state_34957__$1 = state_34957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34957__$1,(4),from);
} else {
if((state_val_34958 === (9))){
var inst_34950 = (state_34957[(2)]);
var state_34957__$1 = (function (){var statearr_34967 = state_34957;
(statearr_34967[(9)] = inst_34950);

return statearr_34967;
})();
var statearr_34968_36896 = state_34957__$1;
(statearr_34968_36896[(2)] = null);

(statearr_34968_36896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34958 === (5))){
var inst_34940 = cljs.core.async.close_BANG_(jobs);
var state_34957__$1 = state_34957;
var statearr_34969_36897 = state_34957__$1;
(statearr_34969_36897[(2)] = inst_34940);

(statearr_34969_36897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34958 === (8))){
var inst_34942 = (state_34957[(8)]);
var inst_34948 = (state_34957[(2)]);
var state_34957__$1 = (function (){var statearr_34970 = state_34957;
(statearr_34970[(10)] = inst_34948);

return statearr_34970;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34957__$1,(9),results,inst_34942);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____0 = (function (){
var statearr_34972 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34972[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__);

(statearr_34972[(1)] = (1));

return statearr_34972;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____1 = (function (state_34957){
while(true){
var ret_value__34247__auto__ = (function (){try{while(true){
var result__34248__auto__ = switch__34245__auto__(state_34957);
if(cljs.core.keyword_identical_QMARK_(result__34248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34248__auto__;
}
break;
}
}catch (e34973){var ex__34249__auto__ = e34973;
var statearr_34975_36898 = state_34957;
(statearr_34975_36898[(2)] = ex__34249__auto__);


if(cljs.core.seq((state_34957[(4)]))){
var statearr_34976_36899 = state_34957;
(statearr_34976_36899[(1)] = cljs.core.first((state_34957[(4)])));

} else {
throw ex__34249__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36900 = state_34957;
state_34957 = G__36900;
continue;
} else {
return ret_value__34247__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__ = function(state_34957){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____1.call(this,state_34957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__;
})()
})();
var state__34477__auto__ = (function (){var statearr_34977 = f__34476__auto__();
(statearr_34977[(6)] = c__34475__auto___36889);

return statearr_34977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34477__auto__);
}));


var c__34475__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34476__auto__ = (function (){var switch__34245__auto__ = (function (state_35016){
var state_val_35017 = (state_35016[(1)]);
if((state_val_35017 === (7))){
var inst_35012 = (state_35016[(2)]);
var state_35016__$1 = state_35016;
var statearr_35018_36902 = state_35016__$1;
(statearr_35018_36902[(2)] = inst_35012);

(statearr_35018_36902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (20))){
var state_35016__$1 = state_35016;
var statearr_35019_36903 = state_35016__$1;
(statearr_35019_36903[(2)] = null);

(statearr_35019_36903[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (1))){
var state_35016__$1 = state_35016;
var statearr_35020_36904 = state_35016__$1;
(statearr_35020_36904[(2)] = null);

(statearr_35020_36904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (4))){
var inst_34980 = (state_35016[(7)]);
var inst_34980__$1 = (state_35016[(2)]);
var inst_34981 = (inst_34980__$1 == null);
var state_35016__$1 = (function (){var statearr_35022 = state_35016;
(statearr_35022[(7)] = inst_34980__$1);

return statearr_35022;
})();
if(cljs.core.truth_(inst_34981)){
var statearr_35023_36906 = state_35016__$1;
(statearr_35023_36906[(1)] = (5));

} else {
var statearr_35024_36907 = state_35016__$1;
(statearr_35024_36907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (15))){
var inst_34994 = (state_35016[(8)]);
var state_35016__$1 = state_35016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35016__$1,(18),to,inst_34994);
} else {
if((state_val_35017 === (21))){
var inst_35007 = (state_35016[(2)]);
var state_35016__$1 = state_35016;
var statearr_35025_36908 = state_35016__$1;
(statearr_35025_36908[(2)] = inst_35007);

(statearr_35025_36908[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (13))){
var inst_35009 = (state_35016[(2)]);
var state_35016__$1 = (function (){var statearr_35026 = state_35016;
(statearr_35026[(9)] = inst_35009);

return statearr_35026;
})();
var statearr_35027_36910 = state_35016__$1;
(statearr_35027_36910[(2)] = null);

(statearr_35027_36910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (6))){
var inst_34980 = (state_35016[(7)]);
var state_35016__$1 = state_35016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35016__$1,(11),inst_34980);
} else {
if((state_val_35017 === (17))){
var inst_35002 = (state_35016[(2)]);
var state_35016__$1 = state_35016;
if(cljs.core.truth_(inst_35002)){
var statearr_35029_36912 = state_35016__$1;
(statearr_35029_36912[(1)] = (19));

} else {
var statearr_35030_36913 = state_35016__$1;
(statearr_35030_36913[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (3))){
var inst_35014 = (state_35016[(2)]);
var state_35016__$1 = state_35016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35016__$1,inst_35014);
} else {
if((state_val_35017 === (12))){
var inst_34990 = (state_35016[(10)]);
var state_35016__$1 = state_35016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35016__$1,(14),inst_34990);
} else {
if((state_val_35017 === (2))){
var state_35016__$1 = state_35016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35016__$1,(4),results);
} else {
if((state_val_35017 === (19))){
var state_35016__$1 = state_35016;
var statearr_35031_36914 = state_35016__$1;
(statearr_35031_36914[(2)] = null);

(statearr_35031_36914[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (11))){
var inst_34990 = (state_35016[(2)]);
var state_35016__$1 = (function (){var statearr_35033 = state_35016;
(statearr_35033[(10)] = inst_34990);

return statearr_35033;
})();
var statearr_35034_36915 = state_35016__$1;
(statearr_35034_36915[(2)] = null);

(statearr_35034_36915[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (9))){
var state_35016__$1 = state_35016;
var statearr_35035_36916 = state_35016__$1;
(statearr_35035_36916[(2)] = null);

(statearr_35035_36916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (5))){
var state_35016__$1 = state_35016;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35036_36917 = state_35016__$1;
(statearr_35036_36917[(1)] = (8));

} else {
var statearr_35037_36918 = state_35016__$1;
(statearr_35037_36918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (14))){
var inst_34996 = (state_35016[(11)]);
var inst_34994 = (state_35016[(8)]);
var inst_34994__$1 = (state_35016[(2)]);
var inst_34995 = (inst_34994__$1 == null);
var inst_34996__$1 = cljs.core.not(inst_34995);
var state_35016__$1 = (function (){var statearr_35038 = state_35016;
(statearr_35038[(11)] = inst_34996__$1);

(statearr_35038[(8)] = inst_34994__$1);

return statearr_35038;
})();
if(inst_34996__$1){
var statearr_35039_36919 = state_35016__$1;
(statearr_35039_36919[(1)] = (15));

} else {
var statearr_35041_36920 = state_35016__$1;
(statearr_35041_36920[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (16))){
var inst_34996 = (state_35016[(11)]);
var state_35016__$1 = state_35016;
var statearr_35042_36921 = state_35016__$1;
(statearr_35042_36921[(2)] = inst_34996);

(statearr_35042_36921[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (10))){
var inst_34987 = (state_35016[(2)]);
var state_35016__$1 = state_35016;
var statearr_35043_36922 = state_35016__$1;
(statearr_35043_36922[(2)] = inst_34987);

(statearr_35043_36922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (18))){
var inst_34999 = (state_35016[(2)]);
var state_35016__$1 = state_35016;
var statearr_35044_36923 = state_35016__$1;
(statearr_35044_36923[(2)] = inst_34999);

(statearr_35044_36923[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (8))){
var inst_34984 = cljs.core.async.close_BANG_(to);
var state_35016__$1 = state_35016;
var statearr_35045_36924 = state_35016__$1;
(statearr_35045_36924[(2)] = inst_34984);

(statearr_35045_36924[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____0 = (function (){
var statearr_35046 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35046[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__);

(statearr_35046[(1)] = (1));

return statearr_35046;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____1 = (function (state_35016){
while(true){
var ret_value__34247__auto__ = (function (){try{while(true){
var result__34248__auto__ = switch__34245__auto__(state_35016);
if(cljs.core.keyword_identical_QMARK_(result__34248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34248__auto__;
}
break;
}
}catch (e35047){var ex__34249__auto__ = e35047;
var statearr_35048_36925 = state_35016;
(statearr_35048_36925[(2)] = ex__34249__auto__);


if(cljs.core.seq((state_35016[(4)]))){
var statearr_35049_36926 = state_35016;
(statearr_35049_36926[(1)] = cljs.core.first((state_35016[(4)])));

} else {
throw ex__34249__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36927 = state_35016;
state_35016 = G__36927;
continue;
} else {
return ret_value__34247__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__ = function(state_35016){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____1.call(this,state_35016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34246__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34246__auto__;
})()
})();
var state__34477__auto__ = (function (){var statearr_35051 = f__34476__auto__();
(statearr_35051[(6)] = c__34475__auto__);

return statearr_35051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34477__auto__);
}));

return c__34475__auto__;
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
var G__35053 = arguments.length;
switch (G__35053) {
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
var G__35057 = arguments.length;
switch (G__35057) {
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
var G__35060 = arguments.length;
switch (G__35060) {
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
var c__34475__auto___36958 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34476__auto__ = (function (){var switch__34245__auto__ = (function (state_35087){
var state_val_35088 = (state_35087[(1)]);
if((state_val_35088 === (7))){
var inst_35083 = (state_35087[(2)]);
var state_35087__$1 = state_35087;
var statearr_35089_36962 = state_35087__$1;
(statearr_35089_36962[(2)] = inst_35083);

(statearr_35089_36962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (1))){
var state_35087__$1 = state_35087;
var statearr_35090_36963 = state_35087__$1;
(statearr_35090_36963[(2)] = null);

(statearr_35090_36963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (4))){
var inst_35063 = (state_35087[(7)]);
var inst_35063__$1 = (state_35087[(2)]);
var inst_35064 = (inst_35063__$1 == null);
var state_35087__$1 = (function (){var statearr_35091 = state_35087;
(statearr_35091[(7)] = inst_35063__$1);

return statearr_35091;
})();
if(cljs.core.truth_(inst_35064)){
var statearr_35092_36967 = state_35087__$1;
(statearr_35092_36967[(1)] = (5));

} else {
var statearr_35093_36969 = state_35087__$1;
(statearr_35093_36969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (13))){
var state_35087__$1 = state_35087;
var statearr_35094_36970 = state_35087__$1;
(statearr_35094_36970[(2)] = null);

(statearr_35094_36970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (6))){
var inst_35063 = (state_35087[(7)]);
var inst_35070 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35063) : p.call(null,inst_35063));
var state_35087__$1 = state_35087;
if(cljs.core.truth_(inst_35070)){
var statearr_35095_36971 = state_35087__$1;
(statearr_35095_36971[(1)] = (9));

} else {
var statearr_35096_36972 = state_35087__$1;
(statearr_35096_36972[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (3))){
var inst_35085 = (state_35087[(2)]);
var state_35087__$1 = state_35087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35087__$1,inst_35085);
} else {
if((state_val_35088 === (12))){
var state_35087__$1 = state_35087;
var statearr_35098_36976 = state_35087__$1;
(statearr_35098_36976[(2)] = null);

(statearr_35098_36976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (2))){
var state_35087__$1 = state_35087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35087__$1,(4),ch);
} else {
if((state_val_35088 === (11))){
var inst_35063 = (state_35087[(7)]);
var inst_35074 = (state_35087[(2)]);
var state_35087__$1 = state_35087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35087__$1,(8),inst_35074,inst_35063);
} else {
if((state_val_35088 === (9))){
var state_35087__$1 = state_35087;
var statearr_35099_36984 = state_35087__$1;
(statearr_35099_36984[(2)] = tc);

(statearr_35099_36984[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (5))){
var inst_35066 = cljs.core.async.close_BANG_(tc);
var inst_35067 = cljs.core.async.close_BANG_(fc);
var state_35087__$1 = (function (){var statearr_35100 = state_35087;
(statearr_35100[(8)] = inst_35066);

return statearr_35100;
})();
var statearr_35101_36985 = state_35087__$1;
(statearr_35101_36985[(2)] = inst_35067);

(statearr_35101_36985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (14))){
var inst_35081 = (state_35087[(2)]);
var state_35087__$1 = state_35087;
var statearr_35102_36986 = state_35087__$1;
(statearr_35102_36986[(2)] = inst_35081);

(statearr_35102_36986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (10))){
var state_35087__$1 = state_35087;
var statearr_35103_36991 = state_35087__$1;
(statearr_35103_36991[(2)] = fc);

(statearr_35103_36991[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (8))){
var inst_35076 = (state_35087[(2)]);
var state_35087__$1 = state_35087;
if(cljs.core.truth_(inst_35076)){
var statearr_35104_36996 = state_35087__$1;
(statearr_35104_36996[(1)] = (12));

} else {
var statearr_35105_36997 = state_35087__$1;
(statearr_35105_36997[(1)] = (13));

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
var cljs$core$async$state_machine__34246__auto__ = null;
var cljs$core$async$state_machine__34246__auto____0 = (function (){
var statearr_35106 = [null,null,null,null,null,null,null,null,null];
(statearr_35106[(0)] = cljs$core$async$state_machine__34246__auto__);

(statearr_35106[(1)] = (1));

return statearr_35106;
});
var cljs$core$async$state_machine__34246__auto____1 = (function (state_35087){
while(true){
var ret_value__34247__auto__ = (function (){try{while(true){
var result__34248__auto__ = switch__34245__auto__(state_35087);
if(cljs.core.keyword_identical_QMARK_(result__34248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34248__auto__;
}
break;
}
}catch (e35107){var ex__34249__auto__ = e35107;
var statearr_35108_36998 = state_35087;
(statearr_35108_36998[(2)] = ex__34249__auto__);


if(cljs.core.seq((state_35087[(4)]))){
var statearr_35109_36999 = state_35087;
(statearr_35109_36999[(1)] = cljs.core.first((state_35087[(4)])));

} else {
throw ex__34249__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37000 = state_35087;
state_35087 = G__37000;
continue;
} else {
return ret_value__34247__auto__;
}
break;
}
});
cljs$core$async$state_machine__34246__auto__ = function(state_35087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34246__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34246__auto____1.call(this,state_35087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34246__auto____0;
cljs$core$async$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34246__auto____1;
return cljs$core$async$state_machine__34246__auto__;
})()
})();
var state__34477__auto__ = (function (){var statearr_35110 = f__34476__auto__();
(statearr_35110[(6)] = c__34475__auto___36958);

return statearr_35110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34477__auto__);
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
var c__34475__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34476__auto__ = (function (){var switch__34245__auto__ = (function (state_35133){
var state_val_35134 = (state_35133[(1)]);
if((state_val_35134 === (7))){
var inst_35129 = (state_35133[(2)]);
var state_35133__$1 = state_35133;
var statearr_35135_37004 = state_35133__$1;
(statearr_35135_37004[(2)] = inst_35129);

(statearr_35135_37004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (1))){
var inst_35112 = init;
var inst_35113 = inst_35112;
var state_35133__$1 = (function (){var statearr_35137 = state_35133;
(statearr_35137[(7)] = inst_35113);

return statearr_35137;
})();
var statearr_35138_37007 = state_35133__$1;
(statearr_35138_37007[(2)] = null);

(statearr_35138_37007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (4))){
var inst_35116 = (state_35133[(8)]);
var inst_35116__$1 = (state_35133[(2)]);
var inst_35117 = (inst_35116__$1 == null);
var state_35133__$1 = (function (){var statearr_35139 = state_35133;
(statearr_35139[(8)] = inst_35116__$1);

return statearr_35139;
})();
if(cljs.core.truth_(inst_35117)){
var statearr_35140_37011 = state_35133__$1;
(statearr_35140_37011[(1)] = (5));

} else {
var statearr_35141_37012 = state_35133__$1;
(statearr_35141_37012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (6))){
var inst_35113 = (state_35133[(7)]);
var inst_35120 = (state_35133[(9)]);
var inst_35116 = (state_35133[(8)]);
var inst_35120__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_35113,inst_35116) : f.call(null,inst_35113,inst_35116));
var inst_35121 = cljs.core.reduced_QMARK_(inst_35120__$1);
var state_35133__$1 = (function (){var statearr_35143 = state_35133;
(statearr_35143[(9)] = inst_35120__$1);

return statearr_35143;
})();
if(inst_35121){
var statearr_35144_37021 = state_35133__$1;
(statearr_35144_37021[(1)] = (8));

} else {
var statearr_35145_37022 = state_35133__$1;
(statearr_35145_37022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (3))){
var inst_35131 = (state_35133[(2)]);
var state_35133__$1 = state_35133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35133__$1,inst_35131);
} else {
if((state_val_35134 === (2))){
var state_35133__$1 = state_35133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35133__$1,(4),ch);
} else {
if((state_val_35134 === (9))){
var inst_35120 = (state_35133[(9)]);
var inst_35113 = inst_35120;
var state_35133__$1 = (function (){var statearr_35146 = state_35133;
(statearr_35146[(7)] = inst_35113);

return statearr_35146;
})();
var statearr_35147_37024 = state_35133__$1;
(statearr_35147_37024[(2)] = null);

(statearr_35147_37024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (5))){
var inst_35113 = (state_35133[(7)]);
var state_35133__$1 = state_35133;
var statearr_35148_37025 = state_35133__$1;
(statearr_35148_37025[(2)] = inst_35113);

(statearr_35148_37025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (10))){
var inst_35127 = (state_35133[(2)]);
var state_35133__$1 = state_35133;
var statearr_35150_37026 = state_35133__$1;
(statearr_35150_37026[(2)] = inst_35127);

(statearr_35150_37026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (8))){
var inst_35120 = (state_35133[(9)]);
var inst_35123 = cljs.core.deref(inst_35120);
var state_35133__$1 = state_35133;
var statearr_35151_37027 = state_35133__$1;
(statearr_35151_37027[(2)] = inst_35123);

(statearr_35151_37027[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__34246__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34246__auto____0 = (function (){
var statearr_35152 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35152[(0)] = cljs$core$async$reduce_$_state_machine__34246__auto__);

(statearr_35152[(1)] = (1));

return statearr_35152;
});
var cljs$core$async$reduce_$_state_machine__34246__auto____1 = (function (state_35133){
while(true){
var ret_value__34247__auto__ = (function (){try{while(true){
var result__34248__auto__ = switch__34245__auto__(state_35133);
if(cljs.core.keyword_identical_QMARK_(result__34248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34248__auto__;
}
break;
}
}catch (e35153){var ex__34249__auto__ = e35153;
var statearr_35154_37032 = state_35133;
(statearr_35154_37032[(2)] = ex__34249__auto__);


if(cljs.core.seq((state_35133[(4)]))){
var statearr_35155_37033 = state_35133;
(statearr_35155_37033[(1)] = cljs.core.first((state_35133[(4)])));

} else {
throw ex__34249__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37034 = state_35133;
state_35133 = G__37034;
continue;
} else {
return ret_value__34247__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34246__auto__ = function(state_35133){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34246__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34246__auto____1.call(this,state_35133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34246__auto____0;
cljs$core$async$reduce_$_state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34246__auto____1;
return cljs$core$async$reduce_$_state_machine__34246__auto__;
})()
})();
var state__34477__auto__ = (function (){var statearr_35156 = f__34476__auto__();
(statearr_35156[(6)] = c__34475__auto__);

return statearr_35156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34477__auto__);
}));

return c__34475__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34475__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34476__auto__ = (function (){var switch__34245__auto__ = (function (state_35162){
var state_val_35163 = (state_35162[(1)]);
if((state_val_35163 === (1))){
var inst_35157 = cljs.core.async.reduce(f__$1,init,ch);
var state_35162__$1 = state_35162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35162__$1,(2),inst_35157);
} else {
if((state_val_35163 === (2))){
var inst_35159 = (state_35162[(2)]);
var inst_35160 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_35159) : f__$1.call(null,inst_35159));
var state_35162__$1 = state_35162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35162__$1,inst_35160);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34246__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34246__auto____0 = (function (){
var statearr_35164 = [null,null,null,null,null,null,null];
(statearr_35164[(0)] = cljs$core$async$transduce_$_state_machine__34246__auto__);

(statearr_35164[(1)] = (1));

return statearr_35164;
});
var cljs$core$async$transduce_$_state_machine__34246__auto____1 = (function (state_35162){
while(true){
var ret_value__34247__auto__ = (function (){try{while(true){
var result__34248__auto__ = switch__34245__auto__(state_35162);
if(cljs.core.keyword_identical_QMARK_(result__34248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34248__auto__;
}
break;
}
}catch (e35166){var ex__34249__auto__ = e35166;
var statearr_35167_37036 = state_35162;
(statearr_35167_37036[(2)] = ex__34249__auto__);


if(cljs.core.seq((state_35162[(4)]))){
var statearr_35168_37037 = state_35162;
(statearr_35168_37037[(1)] = cljs.core.first((state_35162[(4)])));

} else {
throw ex__34249__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37038 = state_35162;
state_35162 = G__37038;
continue;
} else {
return ret_value__34247__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34246__auto__ = function(state_35162){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34246__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34246__auto____1.call(this,state_35162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34246__auto____0;
cljs$core$async$transduce_$_state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34246__auto____1;
return cljs$core$async$transduce_$_state_machine__34246__auto__;
})()
})();
var state__34477__auto__ = (function (){var statearr_35169 = f__34476__auto__();
(statearr_35169[(6)] = c__34475__auto__);

return statearr_35169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34477__auto__);
}));

return c__34475__auto__;
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
var G__35171 = arguments.length;
switch (G__35171) {
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
var c__34475__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34476__auto__ = (function (){var switch__34245__auto__ = (function (state_35197){
var state_val_35198 = (state_35197[(1)]);
if((state_val_35198 === (7))){
var inst_35179 = (state_35197[(2)]);
var state_35197__$1 = state_35197;
var statearr_35200_37041 = state_35197__$1;
(statearr_35200_37041[(2)] = inst_35179);

(statearr_35200_37041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35198 === (1))){
var inst_35173 = cljs.core.seq(coll);
var inst_35174 = inst_35173;
var state_35197__$1 = (function (){var statearr_35201 = state_35197;
(statearr_35201[(7)] = inst_35174);

return statearr_35201;
})();
var statearr_35202_37042 = state_35197__$1;
(statearr_35202_37042[(2)] = null);

(statearr_35202_37042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35198 === (4))){
var inst_35174 = (state_35197[(7)]);
var inst_35177 = cljs.core.first(inst_35174);
var state_35197__$1 = state_35197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35197__$1,(7),ch,inst_35177);
} else {
if((state_val_35198 === (13))){
var inst_35191 = (state_35197[(2)]);
var state_35197__$1 = state_35197;
var statearr_35203_37043 = state_35197__$1;
(statearr_35203_37043[(2)] = inst_35191);

(statearr_35203_37043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35198 === (6))){
var inst_35182 = (state_35197[(2)]);
var state_35197__$1 = state_35197;
if(cljs.core.truth_(inst_35182)){
var statearr_35204_37051 = state_35197__$1;
(statearr_35204_37051[(1)] = (8));

} else {
var statearr_35205_37052 = state_35197__$1;
(statearr_35205_37052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35198 === (3))){
var inst_35195 = (state_35197[(2)]);
var state_35197__$1 = state_35197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35197__$1,inst_35195);
} else {
if((state_val_35198 === (12))){
var state_35197__$1 = state_35197;
var statearr_35207_37053 = state_35197__$1;
(statearr_35207_37053[(2)] = null);

(statearr_35207_37053[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35198 === (2))){
var inst_35174 = (state_35197[(7)]);
var state_35197__$1 = state_35197;
if(cljs.core.truth_(inst_35174)){
var statearr_35208_37054 = state_35197__$1;
(statearr_35208_37054[(1)] = (4));

} else {
var statearr_35209_37055 = state_35197__$1;
(statearr_35209_37055[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35198 === (11))){
var inst_35188 = cljs.core.async.close_BANG_(ch);
var state_35197__$1 = state_35197;
var statearr_35210_37056 = state_35197__$1;
(statearr_35210_37056[(2)] = inst_35188);

(statearr_35210_37056[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35198 === (9))){
var state_35197__$1 = state_35197;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35211_37058 = state_35197__$1;
(statearr_35211_37058[(1)] = (11));

} else {
var statearr_35212_37059 = state_35197__$1;
(statearr_35212_37059[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35198 === (5))){
var inst_35174 = (state_35197[(7)]);
var state_35197__$1 = state_35197;
var statearr_35213_37060 = state_35197__$1;
(statearr_35213_37060[(2)] = inst_35174);

(statearr_35213_37060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35198 === (10))){
var inst_35193 = (state_35197[(2)]);
var state_35197__$1 = state_35197;
var statearr_35214_37061 = state_35197__$1;
(statearr_35214_37061[(2)] = inst_35193);

(statearr_35214_37061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35198 === (8))){
var inst_35174 = (state_35197[(7)]);
var inst_35184 = cljs.core.next(inst_35174);
var inst_35174__$1 = inst_35184;
var state_35197__$1 = (function (){var statearr_35216 = state_35197;
(statearr_35216[(7)] = inst_35174__$1);

return statearr_35216;
})();
var statearr_35217_37062 = state_35197__$1;
(statearr_35217_37062[(2)] = null);

(statearr_35217_37062[(1)] = (2));


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
var cljs$core$async$state_machine__34246__auto__ = null;
var cljs$core$async$state_machine__34246__auto____0 = (function (){
var statearr_35218 = [null,null,null,null,null,null,null,null];
(statearr_35218[(0)] = cljs$core$async$state_machine__34246__auto__);

(statearr_35218[(1)] = (1));

return statearr_35218;
});
var cljs$core$async$state_machine__34246__auto____1 = (function (state_35197){
while(true){
var ret_value__34247__auto__ = (function (){try{while(true){
var result__34248__auto__ = switch__34245__auto__(state_35197);
if(cljs.core.keyword_identical_QMARK_(result__34248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34248__auto__;
}
break;
}
}catch (e35219){var ex__34249__auto__ = e35219;
var statearr_35220_37065 = state_35197;
(statearr_35220_37065[(2)] = ex__34249__auto__);


if(cljs.core.seq((state_35197[(4)]))){
var statearr_35221_37066 = state_35197;
(statearr_35221_37066[(1)] = cljs.core.first((state_35197[(4)])));

} else {
throw ex__34249__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37067 = state_35197;
state_35197 = G__37067;
continue;
} else {
return ret_value__34247__auto__;
}
break;
}
});
cljs$core$async$state_machine__34246__auto__ = function(state_35197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34246__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34246__auto____1.call(this,state_35197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34246__auto____0;
cljs$core$async$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34246__auto____1;
return cljs$core$async$state_machine__34246__auto__;
})()
})();
var state__34477__auto__ = (function (){var statearr_35222 = f__34476__auto__();
(statearr_35222[(6)] = c__34475__auto__);

return statearr_35222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34477__auto__);
}));

return c__34475__auto__;
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
var G__35225 = arguments.length;
switch (G__35225) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_37071 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_37071(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_37074 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_37074(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_37077 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_37077(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_37082 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_37082(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35230 = (function (ch,cs,meta35231){
this.ch = ch;
this.cs = cs;
this.meta35231 = meta35231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35232,meta35231__$1){
var self__ = this;
var _35232__$1 = this;
return (new cljs.core.async.t_cljs$core$async35230(self__.ch,self__.cs,meta35231__$1));
}));

(cljs.core.async.t_cljs$core$async35230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35232){
var self__ = this;
var _35232__$1 = this;
return self__.meta35231;
}));

(cljs.core.async.t_cljs$core$async35230.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35230.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35230.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35230.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async35230.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async35230.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async35230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35231","meta35231",1882100601,null)], null);
}));

(cljs.core.async.t_cljs$core$async35230.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35230.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35230");

(cljs.core.async.t_cljs$core$async35230.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35230");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35230.
 */
cljs.core.async.__GT_t_cljs$core$async35230 = (function cljs$core$async$__GT_t_cljs$core$async35230(ch,cs,meta35231){
return (new cljs.core.async.t_cljs$core$async35230(ch,cs,meta35231));
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
var m = (new cljs.core.async.t_cljs$core$async35230(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__34475__auto___37089 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34476__auto__ = (function (){var switch__34245__auto__ = (function (state_35367){
var state_val_35368 = (state_35367[(1)]);
if((state_val_35368 === (7))){
var inst_35363 = (state_35367[(2)]);
var state_35367__$1 = state_35367;
var statearr_35369_37090 = state_35367__$1;
(statearr_35369_37090[(2)] = inst_35363);

(statearr_35369_37090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (20))){
var inst_35267 = (state_35367[(7)]);
var inst_35279 = cljs.core.first(inst_35267);
var inst_35280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35279,(0),null);
var inst_35281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35279,(1),null);
var state_35367__$1 = (function (){var statearr_35370 = state_35367;
(statearr_35370[(8)] = inst_35280);

return statearr_35370;
})();
if(cljs.core.truth_(inst_35281)){
var statearr_35372_37092 = state_35367__$1;
(statearr_35372_37092[(1)] = (22));

} else {
var statearr_35373_37093 = state_35367__$1;
(statearr_35373_37093[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (27))){
var inst_35311 = (state_35367[(9)]);
var inst_35235 = (state_35367[(10)]);
var inst_35309 = (state_35367[(11)]);
var inst_35316 = (state_35367[(12)]);
var inst_35316__$1 = cljs.core._nth(inst_35309,inst_35311);
var inst_35317 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35316__$1,inst_35235,done);
var state_35367__$1 = (function (){var statearr_35374 = state_35367;
(statearr_35374[(12)] = inst_35316__$1);

return statearr_35374;
})();
if(cljs.core.truth_(inst_35317)){
var statearr_35375_37094 = state_35367__$1;
(statearr_35375_37094[(1)] = (30));

} else {
var statearr_35376_37095 = state_35367__$1;
(statearr_35376_37095[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (1))){
var state_35367__$1 = state_35367;
var statearr_35377_37096 = state_35367__$1;
(statearr_35377_37096[(2)] = null);

(statearr_35377_37096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (24))){
var inst_35267 = (state_35367[(7)]);
var inst_35286 = (state_35367[(2)]);
var inst_35287 = cljs.core.next(inst_35267);
var inst_35244 = inst_35287;
var inst_35245 = null;
var inst_35246 = (0);
var inst_35247 = (0);
var state_35367__$1 = (function (){var statearr_35378 = state_35367;
(statearr_35378[(13)] = inst_35286);

(statearr_35378[(14)] = inst_35247);

(statearr_35378[(15)] = inst_35245);

(statearr_35378[(16)] = inst_35246);

(statearr_35378[(17)] = inst_35244);

return statearr_35378;
})();
var statearr_35380_37107 = state_35367__$1;
(statearr_35380_37107[(2)] = null);

(statearr_35380_37107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (39))){
var state_35367__$1 = state_35367;
var statearr_35384_37111 = state_35367__$1;
(statearr_35384_37111[(2)] = null);

(statearr_35384_37111[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (4))){
var inst_35235 = (state_35367[(10)]);
var inst_35235__$1 = (state_35367[(2)]);
var inst_35236 = (inst_35235__$1 == null);
var state_35367__$1 = (function (){var statearr_35385 = state_35367;
(statearr_35385[(10)] = inst_35235__$1);

return statearr_35385;
})();
if(cljs.core.truth_(inst_35236)){
var statearr_35386_37112 = state_35367__$1;
(statearr_35386_37112[(1)] = (5));

} else {
var statearr_35388_37115 = state_35367__$1;
(statearr_35388_37115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (15))){
var inst_35247 = (state_35367[(14)]);
var inst_35245 = (state_35367[(15)]);
var inst_35246 = (state_35367[(16)]);
var inst_35244 = (state_35367[(17)]);
var inst_35263 = (state_35367[(2)]);
var inst_35264 = (inst_35247 + (1));
var tmp35381 = inst_35245;
var tmp35382 = inst_35246;
var tmp35383 = inst_35244;
var inst_35244__$1 = tmp35383;
var inst_35245__$1 = tmp35381;
var inst_35246__$1 = tmp35382;
var inst_35247__$1 = inst_35264;
var state_35367__$1 = (function (){var statearr_35389 = state_35367;
(statearr_35389[(14)] = inst_35247__$1);

(statearr_35389[(15)] = inst_35245__$1);

(statearr_35389[(16)] = inst_35246__$1);

(statearr_35389[(17)] = inst_35244__$1);

(statearr_35389[(18)] = inst_35263);

return statearr_35389;
})();
var statearr_35390_37122 = state_35367__$1;
(statearr_35390_37122[(2)] = null);

(statearr_35390_37122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (21))){
var inst_35290 = (state_35367[(2)]);
var state_35367__$1 = state_35367;
var statearr_35394_37123 = state_35367__$1;
(statearr_35394_37123[(2)] = inst_35290);

(statearr_35394_37123[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (31))){
var inst_35316 = (state_35367[(12)]);
var inst_35320 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35316);
var state_35367__$1 = state_35367;
var statearr_35395_37124 = state_35367__$1;
(statearr_35395_37124[(2)] = inst_35320);

(statearr_35395_37124[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (32))){
var inst_35311 = (state_35367[(9)]);
var inst_35308 = (state_35367[(19)]);
var inst_35309 = (state_35367[(11)]);
var inst_35310 = (state_35367[(20)]);
var inst_35322 = (state_35367[(2)]);
var inst_35323 = (inst_35311 + (1));
var tmp35391 = inst_35308;
var tmp35392 = inst_35309;
var tmp35393 = inst_35310;
var inst_35308__$1 = tmp35391;
var inst_35309__$1 = tmp35392;
var inst_35310__$1 = tmp35393;
var inst_35311__$1 = inst_35323;
var state_35367__$1 = (function (){var statearr_35396 = state_35367;
(statearr_35396[(9)] = inst_35311__$1);

(statearr_35396[(19)] = inst_35308__$1);

(statearr_35396[(11)] = inst_35309__$1);

(statearr_35396[(20)] = inst_35310__$1);

(statearr_35396[(21)] = inst_35322);

return statearr_35396;
})();
var statearr_35397_37132 = state_35367__$1;
(statearr_35397_37132[(2)] = null);

(statearr_35397_37132[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (40))){
var inst_35336 = (state_35367[(22)]);
var inst_35340 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35336);
var state_35367__$1 = state_35367;
var statearr_35399_37139 = state_35367__$1;
(statearr_35399_37139[(2)] = inst_35340);

(statearr_35399_37139[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (33))){
var inst_35327 = (state_35367[(23)]);
var inst_35329 = cljs.core.chunked_seq_QMARK_(inst_35327);
var state_35367__$1 = state_35367;
if(inst_35329){
var statearr_35400_37146 = state_35367__$1;
(statearr_35400_37146[(1)] = (36));

} else {
var statearr_35401_37147 = state_35367__$1;
(statearr_35401_37147[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (13))){
var inst_35256 = (state_35367[(24)]);
var inst_35260 = cljs.core.async.close_BANG_(inst_35256);
var state_35367__$1 = state_35367;
var statearr_35402_37148 = state_35367__$1;
(statearr_35402_37148[(2)] = inst_35260);

(statearr_35402_37148[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (22))){
var inst_35280 = (state_35367[(8)]);
var inst_35283 = cljs.core.async.close_BANG_(inst_35280);
var state_35367__$1 = state_35367;
var statearr_35403_37149 = state_35367__$1;
(statearr_35403_37149[(2)] = inst_35283);

(statearr_35403_37149[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (36))){
var inst_35327 = (state_35367[(23)]);
var inst_35331 = cljs.core.chunk_first(inst_35327);
var inst_35332 = cljs.core.chunk_rest(inst_35327);
var inst_35333 = cljs.core.count(inst_35331);
var inst_35308 = inst_35332;
var inst_35309 = inst_35331;
var inst_35310 = inst_35333;
var inst_35311 = (0);
var state_35367__$1 = (function (){var statearr_35404 = state_35367;
(statearr_35404[(9)] = inst_35311);

(statearr_35404[(19)] = inst_35308);

(statearr_35404[(11)] = inst_35309);

(statearr_35404[(20)] = inst_35310);

return statearr_35404;
})();
var statearr_35405_37156 = state_35367__$1;
(statearr_35405_37156[(2)] = null);

(statearr_35405_37156[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (41))){
var inst_35327 = (state_35367[(23)]);
var inst_35342 = (state_35367[(2)]);
var inst_35343 = cljs.core.next(inst_35327);
var inst_35308 = inst_35343;
var inst_35309 = null;
var inst_35310 = (0);
var inst_35311 = (0);
var state_35367__$1 = (function (){var statearr_35406 = state_35367;
(statearr_35406[(25)] = inst_35342);

(statearr_35406[(9)] = inst_35311);

(statearr_35406[(19)] = inst_35308);

(statearr_35406[(11)] = inst_35309);

(statearr_35406[(20)] = inst_35310);

return statearr_35406;
})();
var statearr_35407_37157 = state_35367__$1;
(statearr_35407_37157[(2)] = null);

(statearr_35407_37157[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (43))){
var state_35367__$1 = state_35367;
var statearr_35409_37158 = state_35367__$1;
(statearr_35409_37158[(2)] = null);

(statearr_35409_37158[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (29))){
var inst_35351 = (state_35367[(2)]);
var state_35367__$1 = state_35367;
var statearr_35410_37159 = state_35367__$1;
(statearr_35410_37159[(2)] = inst_35351);

(statearr_35410_37159[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (44))){
var inst_35360 = (state_35367[(2)]);
var state_35367__$1 = (function (){var statearr_35411 = state_35367;
(statearr_35411[(26)] = inst_35360);

return statearr_35411;
})();
var statearr_35412_37161 = state_35367__$1;
(statearr_35412_37161[(2)] = null);

(statearr_35412_37161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (6))){
var inst_35300 = (state_35367[(27)]);
var inst_35299 = cljs.core.deref(cs);
var inst_35300__$1 = cljs.core.keys(inst_35299);
var inst_35301 = cljs.core.count(inst_35300__$1);
var inst_35302 = cljs.core.reset_BANG_(dctr,inst_35301);
var inst_35307 = cljs.core.seq(inst_35300__$1);
var inst_35308 = inst_35307;
var inst_35309 = null;
var inst_35310 = (0);
var inst_35311 = (0);
var state_35367__$1 = (function (){var statearr_35414 = state_35367;
(statearr_35414[(9)] = inst_35311);

(statearr_35414[(19)] = inst_35308);

(statearr_35414[(11)] = inst_35309);

(statearr_35414[(27)] = inst_35300__$1);

(statearr_35414[(28)] = inst_35302);

(statearr_35414[(20)] = inst_35310);

return statearr_35414;
})();
var statearr_35415_37162 = state_35367__$1;
(statearr_35415_37162[(2)] = null);

(statearr_35415_37162[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (28))){
var inst_35308 = (state_35367[(19)]);
var inst_35327 = (state_35367[(23)]);
var inst_35327__$1 = cljs.core.seq(inst_35308);
var state_35367__$1 = (function (){var statearr_35416 = state_35367;
(statearr_35416[(23)] = inst_35327__$1);

return statearr_35416;
})();
if(inst_35327__$1){
var statearr_35417_37163 = state_35367__$1;
(statearr_35417_37163[(1)] = (33));

} else {
var statearr_35418_37164 = state_35367__$1;
(statearr_35418_37164[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (25))){
var inst_35311 = (state_35367[(9)]);
var inst_35310 = (state_35367[(20)]);
var inst_35313 = (inst_35311 < inst_35310);
var inst_35314 = inst_35313;
var state_35367__$1 = state_35367;
if(cljs.core.truth_(inst_35314)){
var statearr_35420_37172 = state_35367__$1;
(statearr_35420_37172[(1)] = (27));

} else {
var statearr_35421_37173 = state_35367__$1;
(statearr_35421_37173[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (34))){
var state_35367__$1 = state_35367;
var statearr_35422_37174 = state_35367__$1;
(statearr_35422_37174[(2)] = null);

(statearr_35422_37174[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (17))){
var state_35367__$1 = state_35367;
var statearr_35423_37175 = state_35367__$1;
(statearr_35423_37175[(2)] = null);

(statearr_35423_37175[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (3))){
var inst_35365 = (state_35367[(2)]);
var state_35367__$1 = state_35367;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35367__$1,inst_35365);
} else {
if((state_val_35368 === (12))){
var inst_35295 = (state_35367[(2)]);
var state_35367__$1 = state_35367;
var statearr_35424_37176 = state_35367__$1;
(statearr_35424_37176[(2)] = inst_35295);

(statearr_35424_37176[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (2))){
var state_35367__$1 = state_35367;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35367__$1,(4),ch);
} else {
if((state_val_35368 === (23))){
var state_35367__$1 = state_35367;
var statearr_35426_37177 = state_35367__$1;
(statearr_35426_37177[(2)] = null);

(statearr_35426_37177[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (35))){
var inst_35349 = (state_35367[(2)]);
var state_35367__$1 = state_35367;
var statearr_35427_37178 = state_35367__$1;
(statearr_35427_37178[(2)] = inst_35349);

(statearr_35427_37178[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (19))){
var inst_35267 = (state_35367[(7)]);
var inst_35271 = cljs.core.chunk_first(inst_35267);
var inst_35272 = cljs.core.chunk_rest(inst_35267);
var inst_35273 = cljs.core.count(inst_35271);
var inst_35244 = inst_35272;
var inst_35245 = inst_35271;
var inst_35246 = inst_35273;
var inst_35247 = (0);
var state_35367__$1 = (function (){var statearr_35428 = state_35367;
(statearr_35428[(14)] = inst_35247);

(statearr_35428[(15)] = inst_35245);

(statearr_35428[(16)] = inst_35246);

(statearr_35428[(17)] = inst_35244);

return statearr_35428;
})();
var statearr_35429_37189 = state_35367__$1;
(statearr_35429_37189[(2)] = null);

(statearr_35429_37189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (11))){
var inst_35267 = (state_35367[(7)]);
var inst_35244 = (state_35367[(17)]);
var inst_35267__$1 = cljs.core.seq(inst_35244);
var state_35367__$1 = (function (){var statearr_35430 = state_35367;
(statearr_35430[(7)] = inst_35267__$1);

return statearr_35430;
})();
if(inst_35267__$1){
var statearr_35431_37190 = state_35367__$1;
(statearr_35431_37190[(1)] = (16));

} else {
var statearr_35432_37191 = state_35367__$1;
(statearr_35432_37191[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (9))){
var inst_35297 = (state_35367[(2)]);
var state_35367__$1 = state_35367;
var statearr_35433_37192 = state_35367__$1;
(statearr_35433_37192[(2)] = inst_35297);

(statearr_35433_37192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (5))){
var inst_35242 = cljs.core.deref(cs);
var inst_35243 = cljs.core.seq(inst_35242);
var inst_35244 = inst_35243;
var inst_35245 = null;
var inst_35246 = (0);
var inst_35247 = (0);
var state_35367__$1 = (function (){var statearr_35435 = state_35367;
(statearr_35435[(14)] = inst_35247);

(statearr_35435[(15)] = inst_35245);

(statearr_35435[(16)] = inst_35246);

(statearr_35435[(17)] = inst_35244);

return statearr_35435;
})();
var statearr_35436_37193 = state_35367__$1;
(statearr_35436_37193[(2)] = null);

(statearr_35436_37193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (14))){
var state_35367__$1 = state_35367;
var statearr_35439_37194 = state_35367__$1;
(statearr_35439_37194[(2)] = null);

(statearr_35439_37194[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (45))){
var inst_35357 = (state_35367[(2)]);
var state_35367__$1 = state_35367;
var statearr_35440_37195 = state_35367__$1;
(statearr_35440_37195[(2)] = inst_35357);

(statearr_35440_37195[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (26))){
var inst_35300 = (state_35367[(27)]);
var inst_35353 = (state_35367[(2)]);
var inst_35354 = cljs.core.seq(inst_35300);
var state_35367__$1 = (function (){var statearr_35441 = state_35367;
(statearr_35441[(29)] = inst_35353);

return statearr_35441;
})();
if(inst_35354){
var statearr_35442_37197 = state_35367__$1;
(statearr_35442_37197[(1)] = (42));

} else {
var statearr_35443_37198 = state_35367__$1;
(statearr_35443_37198[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (16))){
var inst_35267 = (state_35367[(7)]);
var inst_35269 = cljs.core.chunked_seq_QMARK_(inst_35267);
var state_35367__$1 = state_35367;
if(inst_35269){
var statearr_35444_37199 = state_35367__$1;
(statearr_35444_37199[(1)] = (19));

} else {
var statearr_35445_37200 = state_35367__$1;
(statearr_35445_37200[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (38))){
var inst_35346 = (state_35367[(2)]);
var state_35367__$1 = state_35367;
var statearr_35446_37201 = state_35367__$1;
(statearr_35446_37201[(2)] = inst_35346);

(statearr_35446_37201[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (30))){
var state_35367__$1 = state_35367;
var statearr_35447_37209 = state_35367__$1;
(statearr_35447_37209[(2)] = null);

(statearr_35447_37209[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (10))){
var inst_35247 = (state_35367[(14)]);
var inst_35245 = (state_35367[(15)]);
var inst_35255 = cljs.core._nth(inst_35245,inst_35247);
var inst_35256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35255,(0),null);
var inst_35258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35255,(1),null);
var state_35367__$1 = (function (){var statearr_35448 = state_35367;
(statearr_35448[(24)] = inst_35256);

return statearr_35448;
})();
if(cljs.core.truth_(inst_35258)){
var statearr_35449_37210 = state_35367__$1;
(statearr_35449_37210[(1)] = (13));

} else {
var statearr_35450_37211 = state_35367__$1;
(statearr_35450_37211[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (18))){
var inst_35293 = (state_35367[(2)]);
var state_35367__$1 = state_35367;
var statearr_35453_37212 = state_35367__$1;
(statearr_35453_37212[(2)] = inst_35293);

(statearr_35453_37212[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (42))){
var state_35367__$1 = state_35367;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35367__$1,(45),dchan);
} else {
if((state_val_35368 === (37))){
var inst_35235 = (state_35367[(10)]);
var inst_35336 = (state_35367[(22)]);
var inst_35327 = (state_35367[(23)]);
var inst_35336__$1 = cljs.core.first(inst_35327);
var inst_35337 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35336__$1,inst_35235,done);
var state_35367__$1 = (function (){var statearr_35454 = state_35367;
(statearr_35454[(22)] = inst_35336__$1);

return statearr_35454;
})();
if(cljs.core.truth_(inst_35337)){
var statearr_35455_37218 = state_35367__$1;
(statearr_35455_37218[(1)] = (39));

} else {
var statearr_35456_37219 = state_35367__$1;
(statearr_35456_37219[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35368 === (8))){
var inst_35247 = (state_35367[(14)]);
var inst_35246 = (state_35367[(16)]);
var inst_35249 = (inst_35247 < inst_35246);
var inst_35250 = inst_35249;
var state_35367__$1 = state_35367;
if(cljs.core.truth_(inst_35250)){
var statearr_35457_37220 = state_35367__$1;
(statearr_35457_37220[(1)] = (10));

} else {
var statearr_35458_37221 = state_35367__$1;
(statearr_35458_37221[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__34246__auto__ = null;
var cljs$core$async$mult_$_state_machine__34246__auto____0 = (function (){
var statearr_35459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35459[(0)] = cljs$core$async$mult_$_state_machine__34246__auto__);

(statearr_35459[(1)] = (1));

return statearr_35459;
});
var cljs$core$async$mult_$_state_machine__34246__auto____1 = (function (state_35367){
while(true){
var ret_value__34247__auto__ = (function (){try{while(true){
var result__34248__auto__ = switch__34245__auto__(state_35367);
if(cljs.core.keyword_identical_QMARK_(result__34248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34248__auto__;
}
break;
}
}catch (e35460){var ex__34249__auto__ = e35460;
var statearr_35461_37228 = state_35367;
(statearr_35461_37228[(2)] = ex__34249__auto__);


if(cljs.core.seq((state_35367[(4)]))){
var statearr_35462_37229 = state_35367;
(statearr_35462_37229[(1)] = cljs.core.first((state_35367[(4)])));

} else {
throw ex__34249__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37231 = state_35367;
state_35367 = G__37231;
continue;
} else {
return ret_value__34247__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34246__auto__ = function(state_35367){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34246__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34246__auto____1.call(this,state_35367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34246__auto____0;
cljs$core$async$mult_$_state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34246__auto____1;
return cljs$core$async$mult_$_state_machine__34246__auto__;
})()
})();
var state__34477__auto__ = (function (){var statearr_35463 = f__34476__auto__();
(statearr_35463[(6)] = c__34475__auto___37089);

return statearr_35463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34477__auto__);
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
var G__35465 = arguments.length;
switch (G__35465) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_37236 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_37236(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_37237 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_37237(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_37238 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_37238(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_37246 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_37246(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_37250 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_37250(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37251 = arguments.length;
var i__5770__auto___37252 = (0);
while(true){
if((i__5770__auto___37252 < len__5769__auto___37251)){
args__5775__auto__.push((arguments[i__5770__auto___37252]));

var G__37253 = (i__5770__auto___37252 + (1));
i__5770__auto___37252 = G__37253;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35501){
var map__35502 = p__35501;
var map__35502__$1 = cljs.core.__destructure_map(map__35502);
var opts = map__35502__$1;
var statearr_35504_37254 = state;
(statearr_35504_37254[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35508_37255 = state;
(statearr_35508_37255[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_35509_37256 = state;
(statearr_35509_37256[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35490){
var G__35494 = cljs.core.first(seq35490);
var seq35490__$1 = cljs.core.next(seq35490);
var G__35495 = cljs.core.first(seq35490__$1);
var seq35490__$2 = cljs.core.next(seq35490__$1);
var G__35496 = cljs.core.first(seq35490__$2);
var seq35490__$3 = cljs.core.next(seq35490__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35494,G__35495,G__35496,seq35490__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35522 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35523){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35523 = meta35523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35524,meta35523__$1){
var self__ = this;
var _35524__$1 = this;
return (new cljs.core.async.t_cljs$core$async35522(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35523__$1));
}));

(cljs.core.async.t_cljs$core$async35522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35524){
var self__ = this;
var _35524__$1 = this;
return self__.meta35523;
}));

(cljs.core.async.t_cljs$core$async35522.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35522.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35522.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35522.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35522.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35522.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35522.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35522.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35522.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35523","meta35523",1110997776,null)], null);
}));

(cljs.core.async.t_cljs$core$async35522.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35522.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35522");

(cljs.core.async.t_cljs$core$async35522.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35522");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35522.
 */
cljs.core.async.__GT_t_cljs$core$async35522 = (function cljs$core$async$__GT_t_cljs$core$async35522(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35523){
return (new cljs.core.async.t_cljs$core$async35522(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35523));
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
var m = (new cljs.core.async.t_cljs$core$async35522(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__34475__auto___37265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34476__auto__ = (function (){var switch__34245__auto__ = (function (state_35617){
var state_val_35618 = (state_35617[(1)]);
if((state_val_35618 === (7))){
var inst_35573 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
if(cljs.core.truth_(inst_35573)){
var statearr_35620_37267 = state_35617__$1;
(statearr_35620_37267[(1)] = (8));

} else {
var statearr_35621_37268 = state_35617__$1;
(statearr_35621_37268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (20))){
var inst_35565 = (state_35617[(7)]);
var state_35617__$1 = state_35617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35617__$1,(23),out,inst_35565);
} else {
if((state_val_35618 === (1))){
var inst_35544 = calc_state();
var inst_35546 = cljs.core.__destructure_map(inst_35544);
var inst_35547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35546,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35546,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35546,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35550 = inst_35544;
var state_35617__$1 = (function (){var statearr_35626 = state_35617;
(statearr_35626[(8)] = inst_35548);

(statearr_35626[(9)] = inst_35549);

(statearr_35626[(10)] = inst_35547);

(statearr_35626[(11)] = inst_35550);

return statearr_35626;
})();
var statearr_35627_37270 = state_35617__$1;
(statearr_35627_37270[(2)] = null);

(statearr_35627_37270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (24))){
var inst_35553 = (state_35617[(12)]);
var inst_35550 = inst_35553;
var state_35617__$1 = (function (){var statearr_35635 = state_35617;
(statearr_35635[(11)] = inst_35550);

return statearr_35635;
})();
var statearr_35637_37271 = state_35617__$1;
(statearr_35637_37271[(2)] = null);

(statearr_35637_37271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (4))){
var inst_35568 = (state_35617[(13)]);
var inst_35565 = (state_35617[(7)]);
var inst_35564 = (state_35617[(2)]);
var inst_35565__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35564,(0),null);
var inst_35566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35564,(1),null);
var inst_35568__$1 = (inst_35565__$1 == null);
var state_35617__$1 = (function (){var statearr_35640 = state_35617;
(statearr_35640[(13)] = inst_35568__$1);

(statearr_35640[(14)] = inst_35566);

(statearr_35640[(7)] = inst_35565__$1);

return statearr_35640;
})();
if(cljs.core.truth_(inst_35568__$1)){
var statearr_35641_37272 = state_35617__$1;
(statearr_35641_37272[(1)] = (5));

} else {
var statearr_35642_37274 = state_35617__$1;
(statearr_35642_37274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (15))){
var inst_35554 = (state_35617[(15)]);
var inst_35587 = (state_35617[(16)]);
var inst_35587__$1 = cljs.core.empty_QMARK_(inst_35554);
var state_35617__$1 = (function (){var statearr_35645 = state_35617;
(statearr_35645[(16)] = inst_35587__$1);

return statearr_35645;
})();
if(inst_35587__$1){
var statearr_35646_37276 = state_35617__$1;
(statearr_35646_37276[(1)] = (17));

} else {
var statearr_35647_37277 = state_35617__$1;
(statearr_35647_37277[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (21))){
var inst_35553 = (state_35617[(12)]);
var inst_35550 = inst_35553;
var state_35617__$1 = (function (){var statearr_35648 = state_35617;
(statearr_35648[(11)] = inst_35550);

return statearr_35648;
})();
var statearr_35651_37278 = state_35617__$1;
(statearr_35651_37278[(2)] = null);

(statearr_35651_37278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (13))){
var inst_35580 = (state_35617[(2)]);
var inst_35581 = calc_state();
var inst_35550 = inst_35581;
var state_35617__$1 = (function (){var statearr_35652 = state_35617;
(statearr_35652[(17)] = inst_35580);

(statearr_35652[(11)] = inst_35550);

return statearr_35652;
})();
var statearr_35653_37279 = state_35617__$1;
(statearr_35653_37279[(2)] = null);

(statearr_35653_37279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (22))){
var inst_35608 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35657_37280 = state_35617__$1;
(statearr_35657_37280[(2)] = inst_35608);

(statearr_35657_37280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (6))){
var inst_35566 = (state_35617[(14)]);
var inst_35571 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35566,change);
var state_35617__$1 = state_35617;
var statearr_35658_37281 = state_35617__$1;
(statearr_35658_37281[(2)] = inst_35571);

(statearr_35658_37281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (25))){
var state_35617__$1 = state_35617;
var statearr_35659_37282 = state_35617__$1;
(statearr_35659_37282[(2)] = null);

(statearr_35659_37282[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (17))){
var inst_35555 = (state_35617[(18)]);
var inst_35566 = (state_35617[(14)]);
var inst_35589 = (inst_35555.cljs$core$IFn$_invoke$arity$1 ? inst_35555.cljs$core$IFn$_invoke$arity$1(inst_35566) : inst_35555.call(null,inst_35566));
var inst_35590 = cljs.core.not(inst_35589);
var state_35617__$1 = state_35617;
var statearr_35661_37283 = state_35617__$1;
(statearr_35661_37283[(2)] = inst_35590);

(statearr_35661_37283[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (3))){
var inst_35612 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35617__$1,inst_35612);
} else {
if((state_val_35618 === (12))){
var state_35617__$1 = state_35617;
var statearr_35665_37284 = state_35617__$1;
(statearr_35665_37284[(2)] = null);

(statearr_35665_37284[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (2))){
var inst_35553 = (state_35617[(12)]);
var inst_35550 = (state_35617[(11)]);
var inst_35553__$1 = cljs.core.__destructure_map(inst_35550);
var inst_35554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35553__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35553__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35553__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35617__$1 = (function (){var statearr_35667 = state_35617;
(statearr_35667[(18)] = inst_35555);

(statearr_35667[(15)] = inst_35554);

(statearr_35667[(12)] = inst_35553__$1);

return statearr_35667;
})();
return cljs.core.async.ioc_alts_BANG_(state_35617__$1,(4),inst_35556);
} else {
if((state_val_35618 === (23))){
var inst_35599 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
if(cljs.core.truth_(inst_35599)){
var statearr_35676_37285 = state_35617__$1;
(statearr_35676_37285[(1)] = (24));

} else {
var statearr_35677_37286 = state_35617__$1;
(statearr_35677_37286[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (19))){
var inst_35594 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35678_37287 = state_35617__$1;
(statearr_35678_37287[(2)] = inst_35594);

(statearr_35678_37287[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (11))){
var inst_35566 = (state_35617[(14)]);
var inst_35577 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35566);
var state_35617__$1 = state_35617;
var statearr_35682_37288 = state_35617__$1;
(statearr_35682_37288[(2)] = inst_35577);

(statearr_35682_37288[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (9))){
var inst_35584 = (state_35617[(19)]);
var inst_35554 = (state_35617[(15)]);
var inst_35566 = (state_35617[(14)]);
var inst_35584__$1 = (inst_35554.cljs$core$IFn$_invoke$arity$1 ? inst_35554.cljs$core$IFn$_invoke$arity$1(inst_35566) : inst_35554.call(null,inst_35566));
var state_35617__$1 = (function (){var statearr_35685 = state_35617;
(statearr_35685[(19)] = inst_35584__$1);

return statearr_35685;
})();
if(cljs.core.truth_(inst_35584__$1)){
var statearr_35688_37289 = state_35617__$1;
(statearr_35688_37289[(1)] = (14));

} else {
var statearr_35693_37290 = state_35617__$1;
(statearr_35693_37290[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (5))){
var inst_35568 = (state_35617[(13)]);
var state_35617__$1 = state_35617;
var statearr_35697_37291 = state_35617__$1;
(statearr_35697_37291[(2)] = inst_35568);

(statearr_35697_37291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (14))){
var inst_35584 = (state_35617[(19)]);
var state_35617__$1 = state_35617;
var statearr_35698_37292 = state_35617__$1;
(statearr_35698_37292[(2)] = inst_35584);

(statearr_35698_37292[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (26))){
var inst_35604 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35699_37293 = state_35617__$1;
(statearr_35699_37293[(2)] = inst_35604);

(statearr_35699_37293[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (16))){
var inst_35596 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
if(cljs.core.truth_(inst_35596)){
var statearr_35700_37294 = state_35617__$1;
(statearr_35700_37294[(1)] = (20));

} else {
var statearr_35703_37295 = state_35617__$1;
(statearr_35703_37295[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (10))){
var inst_35610 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35704_37296 = state_35617__$1;
(statearr_35704_37296[(2)] = inst_35610);

(statearr_35704_37296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (18))){
var inst_35587 = (state_35617[(16)]);
var state_35617__$1 = state_35617;
var statearr_35706_37298 = state_35617__$1;
(statearr_35706_37298[(2)] = inst_35587);

(statearr_35706_37298[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (8))){
var inst_35565 = (state_35617[(7)]);
var inst_35575 = (inst_35565 == null);
var state_35617__$1 = state_35617;
if(cljs.core.truth_(inst_35575)){
var statearr_35707_37300 = state_35617__$1;
(statearr_35707_37300[(1)] = (11));

} else {
var statearr_35708_37301 = state_35617__$1;
(statearr_35708_37301[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__34246__auto__ = null;
var cljs$core$async$mix_$_state_machine__34246__auto____0 = (function (){
var statearr_35713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35713[(0)] = cljs$core$async$mix_$_state_machine__34246__auto__);

(statearr_35713[(1)] = (1));

return statearr_35713;
});
var cljs$core$async$mix_$_state_machine__34246__auto____1 = (function (state_35617){
while(true){
var ret_value__34247__auto__ = (function (){try{while(true){
var result__34248__auto__ = switch__34245__auto__(state_35617);
if(cljs.core.keyword_identical_QMARK_(result__34248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34248__auto__;
}
break;
}
}catch (e35714){var ex__34249__auto__ = e35714;
var statearr_35716_37303 = state_35617;
(statearr_35716_37303[(2)] = ex__34249__auto__);


if(cljs.core.seq((state_35617[(4)]))){
var statearr_35717_37304 = state_35617;
(statearr_35717_37304[(1)] = cljs.core.first((state_35617[(4)])));

} else {
throw ex__34249__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37305 = state_35617;
state_35617 = G__37305;
continue;
} else {
return ret_value__34247__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34246__auto__ = function(state_35617){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34246__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34246__auto____1.call(this,state_35617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34246__auto____0;
cljs$core$async$mix_$_state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34246__auto____1;
return cljs$core$async$mix_$_state_machine__34246__auto__;
})()
})();
var state__34477__auto__ = (function (){var statearr_35720 = f__34476__auto__();
(statearr_35720[(6)] = c__34475__auto___37265);

return statearr_35720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34477__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_37309 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_37309(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_37310 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_37310(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_37311 = (function() {
var G__37312 = null;
var G__37312__1 = (function (p){
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
var G__37312__2 = (function (p,v){
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
G__37312 = function(p,v){
switch(arguments.length){
case 1:
return G__37312__1.call(this,p);
case 2:
return G__37312__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37312.cljs$core$IFn$_invoke$arity$1 = G__37312__1;
G__37312.cljs$core$IFn$_invoke$arity$2 = G__37312__2;
return G__37312;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35766 = arguments.length;
switch (G__35766) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37311(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37311(p,v);
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
cljs.core.async.t_cljs$core$async35794 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35795){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35795 = meta35795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35796,meta35795__$1){
var self__ = this;
var _35796__$1 = this;
return (new cljs.core.async.t_cljs$core$async35794(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35795__$1));
}));

(cljs.core.async.t_cljs$core$async35794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35796){
var self__ = this;
var _35796__$1 = this;
return self__.meta35795;
}));

(cljs.core.async.t_cljs$core$async35794.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35794.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35794.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35794.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35794.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35794.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35794.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35795","meta35795",1942637930,null)], null);
}));

(cljs.core.async.t_cljs$core$async35794.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35794");

(cljs.core.async.t_cljs$core$async35794.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35794");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35794.
 */
cljs.core.async.__GT_t_cljs$core$async35794 = (function cljs$core$async$__GT_t_cljs$core$async35794(ch,topic_fn,buf_fn,mults,ensure_mult,meta35795){
return (new cljs.core.async.t_cljs$core$async35794(ch,topic_fn,buf_fn,mults,ensure_mult,meta35795));
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
var G__35785 = arguments.length;
switch (G__35785) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35777_SHARP_){
if(cljs.core.truth_((p1__35777_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35777_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35777_SHARP_.call(null,topic)))){
return p1__35777_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35777_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async35794(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__34475__auto___37321 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34476__auto__ = (function (){var switch__34245__auto__ = (function (state_35889){
var state_val_35890 = (state_35889[(1)]);
if((state_val_35890 === (7))){
var inst_35884 = (state_35889[(2)]);
var state_35889__$1 = state_35889;
var statearr_35891_37324 = state_35889__$1;
(statearr_35891_37324[(2)] = inst_35884);

(statearr_35891_37324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (20))){
var state_35889__$1 = state_35889;
var statearr_35892_37325 = state_35889__$1;
(statearr_35892_37325[(2)] = null);

(statearr_35892_37325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (1))){
var state_35889__$1 = state_35889;
var statearr_35893_37326 = state_35889__$1;
(statearr_35893_37326[(2)] = null);

(statearr_35893_37326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (24))){
var inst_35864 = (state_35889[(7)]);
var inst_35876 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35864);
var state_35889__$1 = state_35889;
var statearr_35895_37327 = state_35889__$1;
(statearr_35895_37327[(2)] = inst_35876);

(statearr_35895_37327[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (4))){
var inst_35816 = (state_35889[(8)]);
var inst_35816__$1 = (state_35889[(2)]);
var inst_35817 = (inst_35816__$1 == null);
var state_35889__$1 = (function (){var statearr_35896 = state_35889;
(statearr_35896[(8)] = inst_35816__$1);

return statearr_35896;
})();
if(cljs.core.truth_(inst_35817)){
var statearr_35897_37328 = state_35889__$1;
(statearr_35897_37328[(1)] = (5));

} else {
var statearr_35898_37329 = state_35889__$1;
(statearr_35898_37329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (15))){
var inst_35858 = (state_35889[(2)]);
var state_35889__$1 = state_35889;
var statearr_35899_37330 = state_35889__$1;
(statearr_35899_37330[(2)] = inst_35858);

(statearr_35899_37330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (21))){
var inst_35881 = (state_35889[(2)]);
var state_35889__$1 = (function (){var statearr_35900 = state_35889;
(statearr_35900[(9)] = inst_35881);

return statearr_35900;
})();
var statearr_35905_37331 = state_35889__$1;
(statearr_35905_37331[(2)] = null);

(statearr_35905_37331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (13))){
var inst_35840 = (state_35889[(10)]);
var inst_35842 = cljs.core.chunked_seq_QMARK_(inst_35840);
var state_35889__$1 = state_35889;
if(inst_35842){
var statearr_35910_37332 = state_35889__$1;
(statearr_35910_37332[(1)] = (16));

} else {
var statearr_35911_37333 = state_35889__$1;
(statearr_35911_37333[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (22))){
var inst_35870 = (state_35889[(2)]);
var state_35889__$1 = state_35889;
if(cljs.core.truth_(inst_35870)){
var statearr_35912_37334 = state_35889__$1;
(statearr_35912_37334[(1)] = (23));

} else {
var statearr_35913_37335 = state_35889__$1;
(statearr_35913_37335[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (6))){
var inst_35816 = (state_35889[(8)]);
var inst_35866 = (state_35889[(11)]);
var inst_35864 = (state_35889[(7)]);
var inst_35864__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35816) : topic_fn.call(null,inst_35816));
var inst_35865 = cljs.core.deref(mults);
var inst_35866__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35865,inst_35864__$1);
var state_35889__$1 = (function (){var statearr_35917 = state_35889;
(statearr_35917[(11)] = inst_35866__$1);

(statearr_35917[(7)] = inst_35864__$1);

return statearr_35917;
})();
if(cljs.core.truth_(inst_35866__$1)){
var statearr_35919_37336 = state_35889__$1;
(statearr_35919_37336[(1)] = (19));

} else {
var statearr_35920_37337 = state_35889__$1;
(statearr_35920_37337[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (25))){
var inst_35878 = (state_35889[(2)]);
var state_35889__$1 = state_35889;
var statearr_35921_37338 = state_35889__$1;
(statearr_35921_37338[(2)] = inst_35878);

(statearr_35921_37338[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (17))){
var inst_35840 = (state_35889[(10)]);
var inst_35849 = cljs.core.first(inst_35840);
var inst_35850 = cljs.core.async.muxch_STAR_(inst_35849);
var inst_35851 = cljs.core.async.close_BANG_(inst_35850);
var inst_35852 = cljs.core.next(inst_35840);
var inst_35826 = inst_35852;
var inst_35827 = null;
var inst_35828 = (0);
var inst_35829 = (0);
var state_35889__$1 = (function (){var statearr_35926 = state_35889;
(statearr_35926[(12)] = inst_35829);

(statearr_35926[(13)] = inst_35851);

(statearr_35926[(14)] = inst_35826);

(statearr_35926[(15)] = inst_35828);

(statearr_35926[(16)] = inst_35827);

return statearr_35926;
})();
var statearr_35927_37340 = state_35889__$1;
(statearr_35927_37340[(2)] = null);

(statearr_35927_37340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (3))){
var inst_35886 = (state_35889[(2)]);
var state_35889__$1 = state_35889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35889__$1,inst_35886);
} else {
if((state_val_35890 === (12))){
var inst_35860 = (state_35889[(2)]);
var state_35889__$1 = state_35889;
var statearr_35931_37348 = state_35889__$1;
(statearr_35931_37348[(2)] = inst_35860);

(statearr_35931_37348[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (2))){
var state_35889__$1 = state_35889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35889__$1,(4),ch);
} else {
if((state_val_35890 === (23))){
var state_35889__$1 = state_35889;
var statearr_35933_37349 = state_35889__$1;
(statearr_35933_37349[(2)] = null);

(statearr_35933_37349[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (19))){
var inst_35816 = (state_35889[(8)]);
var inst_35866 = (state_35889[(11)]);
var inst_35868 = cljs.core.async.muxch_STAR_(inst_35866);
var state_35889__$1 = state_35889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35889__$1,(22),inst_35868,inst_35816);
} else {
if((state_val_35890 === (11))){
var inst_35826 = (state_35889[(14)]);
var inst_35840 = (state_35889[(10)]);
var inst_35840__$1 = cljs.core.seq(inst_35826);
var state_35889__$1 = (function (){var statearr_35935 = state_35889;
(statearr_35935[(10)] = inst_35840__$1);

return statearr_35935;
})();
if(inst_35840__$1){
var statearr_35936_37353 = state_35889__$1;
(statearr_35936_37353[(1)] = (13));

} else {
var statearr_35937_37354 = state_35889__$1;
(statearr_35937_37354[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (9))){
var inst_35862 = (state_35889[(2)]);
var state_35889__$1 = state_35889;
var statearr_35938_37362 = state_35889__$1;
(statearr_35938_37362[(2)] = inst_35862);

(statearr_35938_37362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (5))){
var inst_35823 = cljs.core.deref(mults);
var inst_35824 = cljs.core.vals(inst_35823);
var inst_35825 = cljs.core.seq(inst_35824);
var inst_35826 = inst_35825;
var inst_35827 = null;
var inst_35828 = (0);
var inst_35829 = (0);
var state_35889__$1 = (function (){var statearr_35939 = state_35889;
(statearr_35939[(12)] = inst_35829);

(statearr_35939[(14)] = inst_35826);

(statearr_35939[(15)] = inst_35828);

(statearr_35939[(16)] = inst_35827);

return statearr_35939;
})();
var statearr_35940_37370 = state_35889__$1;
(statearr_35940_37370[(2)] = null);

(statearr_35940_37370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (14))){
var state_35889__$1 = state_35889;
var statearr_35948_37371 = state_35889__$1;
(statearr_35948_37371[(2)] = null);

(statearr_35948_37371[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (16))){
var inst_35840 = (state_35889[(10)]);
var inst_35844 = cljs.core.chunk_first(inst_35840);
var inst_35845 = cljs.core.chunk_rest(inst_35840);
var inst_35846 = cljs.core.count(inst_35844);
var inst_35826 = inst_35845;
var inst_35827 = inst_35844;
var inst_35828 = inst_35846;
var inst_35829 = (0);
var state_35889__$1 = (function (){var statearr_35953 = state_35889;
(statearr_35953[(12)] = inst_35829);

(statearr_35953[(14)] = inst_35826);

(statearr_35953[(15)] = inst_35828);

(statearr_35953[(16)] = inst_35827);

return statearr_35953;
})();
var statearr_35954_37373 = state_35889__$1;
(statearr_35954_37373[(2)] = null);

(statearr_35954_37373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (10))){
var inst_35829 = (state_35889[(12)]);
var inst_35826 = (state_35889[(14)]);
var inst_35828 = (state_35889[(15)]);
var inst_35827 = (state_35889[(16)]);
var inst_35834 = cljs.core._nth(inst_35827,inst_35829);
var inst_35835 = cljs.core.async.muxch_STAR_(inst_35834);
var inst_35836 = cljs.core.async.close_BANG_(inst_35835);
var inst_35837 = (inst_35829 + (1));
var tmp35945 = inst_35826;
var tmp35946 = inst_35828;
var tmp35947 = inst_35827;
var inst_35826__$1 = tmp35945;
var inst_35827__$1 = tmp35947;
var inst_35828__$1 = tmp35946;
var inst_35829__$1 = inst_35837;
var state_35889__$1 = (function (){var statearr_35959 = state_35889;
(statearr_35959[(12)] = inst_35829__$1);

(statearr_35959[(14)] = inst_35826__$1);

(statearr_35959[(15)] = inst_35828__$1);

(statearr_35959[(16)] = inst_35827__$1);

(statearr_35959[(17)] = inst_35836);

return statearr_35959;
})();
var statearr_35964_37377 = state_35889__$1;
(statearr_35964_37377[(2)] = null);

(statearr_35964_37377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (18))){
var inst_35855 = (state_35889[(2)]);
var state_35889__$1 = state_35889;
var statearr_35965_37378 = state_35889__$1;
(statearr_35965_37378[(2)] = inst_35855);

(statearr_35965_37378[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (8))){
var inst_35829 = (state_35889[(12)]);
var inst_35828 = (state_35889[(15)]);
var inst_35831 = (inst_35829 < inst_35828);
var inst_35832 = inst_35831;
var state_35889__$1 = state_35889;
if(cljs.core.truth_(inst_35832)){
var statearr_35969_37379 = state_35889__$1;
(statearr_35969_37379[(1)] = (10));

} else {
var statearr_35971_37380 = state_35889__$1;
(statearr_35971_37380[(1)] = (11));

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
var cljs$core$async$state_machine__34246__auto__ = null;
var cljs$core$async$state_machine__34246__auto____0 = (function (){
var statearr_35972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35972[(0)] = cljs$core$async$state_machine__34246__auto__);

(statearr_35972[(1)] = (1));

return statearr_35972;
});
var cljs$core$async$state_machine__34246__auto____1 = (function (state_35889){
while(true){
var ret_value__34247__auto__ = (function (){try{while(true){
var result__34248__auto__ = switch__34245__auto__(state_35889);
if(cljs.core.keyword_identical_QMARK_(result__34248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34248__auto__;
}
break;
}
}catch (e35974){var ex__34249__auto__ = e35974;
var statearr_35975_37381 = state_35889;
(statearr_35975_37381[(2)] = ex__34249__auto__);


if(cljs.core.seq((state_35889[(4)]))){
var statearr_35976_37382 = state_35889;
(statearr_35976_37382[(1)] = cljs.core.first((state_35889[(4)])));

} else {
throw ex__34249__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37383 = state_35889;
state_35889 = G__37383;
continue;
} else {
return ret_value__34247__auto__;
}
break;
}
});
cljs$core$async$state_machine__34246__auto__ = function(state_35889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34246__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34246__auto____1.call(this,state_35889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34246__auto____0;
cljs$core$async$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34246__auto____1;
return cljs$core$async$state_machine__34246__auto__;
})()
})();
var state__34477__auto__ = (function (){var statearr_35985 = f__34476__auto__();
(statearr_35985[(6)] = c__34475__auto___37321);

return statearr_35985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34477__auto__);
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
var G__35991 = arguments.length;
switch (G__35991) {
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
var G__36001 = arguments.length;
switch (G__36001) {
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
var G__36007 = arguments.length;
switch (G__36007) {
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
var c__34475__auto___37391 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34476__auto__ = (function (){var switch__34245__auto__ = (function (state_36053){
var state_val_36054 = (state_36053[(1)]);
if((state_val_36054 === (7))){
var state_36053__$1 = state_36053;
var statearr_36055_37392 = state_36053__$1;
(statearr_36055_37392[(2)] = null);

(statearr_36055_37392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (1))){
var state_36053__$1 = state_36053;
var statearr_36056_37393 = state_36053__$1;
(statearr_36056_37393[(2)] = null);

(statearr_36056_37393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (4))){
var inst_36012 = (state_36053[(7)]);
var inst_36011 = (state_36053[(8)]);
var inst_36015 = (inst_36012 < inst_36011);
var state_36053__$1 = state_36053;
if(cljs.core.truth_(inst_36015)){
var statearr_36057_37394 = state_36053__$1;
(statearr_36057_37394[(1)] = (6));

} else {
var statearr_36058_37395 = state_36053__$1;
(statearr_36058_37395[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (15))){
var inst_36039 = (state_36053[(9)]);
var inst_36044 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36039);
var state_36053__$1 = state_36053;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36053__$1,(17),out,inst_36044);
} else {
if((state_val_36054 === (13))){
var inst_36039 = (state_36053[(9)]);
var inst_36039__$1 = (state_36053[(2)]);
var inst_36040 = cljs.core.some(cljs.core.nil_QMARK_,inst_36039__$1);
var state_36053__$1 = (function (){var statearr_36059 = state_36053;
(statearr_36059[(9)] = inst_36039__$1);

return statearr_36059;
})();
if(cljs.core.truth_(inst_36040)){
var statearr_36060_37396 = state_36053__$1;
(statearr_36060_37396[(1)] = (14));

} else {
var statearr_36061_37397 = state_36053__$1;
(statearr_36061_37397[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (6))){
var state_36053__$1 = state_36053;
var statearr_36062_37398 = state_36053__$1;
(statearr_36062_37398[(2)] = null);

(statearr_36062_37398[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (17))){
var inst_36046 = (state_36053[(2)]);
var state_36053__$1 = (function (){var statearr_36064 = state_36053;
(statearr_36064[(10)] = inst_36046);

return statearr_36064;
})();
var statearr_36065_37399 = state_36053__$1;
(statearr_36065_37399[(2)] = null);

(statearr_36065_37399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (3))){
var inst_36051 = (state_36053[(2)]);
var state_36053__$1 = state_36053;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36053__$1,inst_36051);
} else {
if((state_val_36054 === (12))){
var _ = (function (){var statearr_36066 = state_36053;
(statearr_36066[(4)] = cljs.core.rest((state_36053[(4)])));

return statearr_36066;
})();
var state_36053__$1 = state_36053;
var ex36063 = (state_36053__$1[(2)]);
var statearr_36067_37400 = state_36053__$1;
(statearr_36067_37400[(5)] = ex36063);


if((ex36063 instanceof Object)){
var statearr_36068_37401 = state_36053__$1;
(statearr_36068_37401[(1)] = (11));

(statearr_36068_37401[(5)] = null);

} else {
throw ex36063;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (2))){
var inst_36010 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36011 = cnt;
var inst_36012 = (0);
var state_36053__$1 = (function (){var statearr_36071 = state_36053;
(statearr_36071[(7)] = inst_36012);

(statearr_36071[(11)] = inst_36010);

(statearr_36071[(8)] = inst_36011);

return statearr_36071;
})();
var statearr_36072_37402 = state_36053__$1;
(statearr_36072_37402[(2)] = null);

(statearr_36072_37402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (11))){
var inst_36018 = (state_36053[(2)]);
var inst_36019 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36053__$1 = (function (){var statearr_36073 = state_36053;
(statearr_36073[(12)] = inst_36018);

return statearr_36073;
})();
var statearr_36074_37403 = state_36053__$1;
(statearr_36074_37403[(2)] = inst_36019);

(statearr_36074_37403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (9))){
var inst_36012 = (state_36053[(7)]);
var _ = (function (){var statearr_36075 = state_36053;
(statearr_36075[(4)] = cljs.core.cons((12),(state_36053[(4)])));

return statearr_36075;
})();
var inst_36025 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36012) : chs__$1.call(null,inst_36012));
var inst_36026 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36012) : done.call(null,inst_36012));
var inst_36027 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36025,inst_36026);
var ___$1 = (function (){var statearr_36076 = state_36053;
(statearr_36076[(4)] = cljs.core.rest((state_36053[(4)])));

return statearr_36076;
})();
var state_36053__$1 = state_36053;
var statearr_36077_37404 = state_36053__$1;
(statearr_36077_37404[(2)] = inst_36027);

(statearr_36077_37404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (5))){
var inst_36037 = (state_36053[(2)]);
var state_36053__$1 = (function (){var statearr_36078 = state_36053;
(statearr_36078[(13)] = inst_36037);

return statearr_36078;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36053__$1,(13),dchan);
} else {
if((state_val_36054 === (14))){
var inst_36042 = cljs.core.async.close_BANG_(out);
var state_36053__$1 = state_36053;
var statearr_36079_37409 = state_36053__$1;
(statearr_36079_37409[(2)] = inst_36042);

(statearr_36079_37409[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (16))){
var inst_36049 = (state_36053[(2)]);
var state_36053__$1 = state_36053;
var statearr_36080_37410 = state_36053__$1;
(statearr_36080_37410[(2)] = inst_36049);

(statearr_36080_37410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (10))){
var inst_36012 = (state_36053[(7)]);
var inst_36030 = (state_36053[(2)]);
var inst_36031 = (inst_36012 + (1));
var inst_36012__$1 = inst_36031;
var state_36053__$1 = (function (){var statearr_36081 = state_36053;
(statearr_36081[(7)] = inst_36012__$1);

(statearr_36081[(14)] = inst_36030);

return statearr_36081;
})();
var statearr_36083_37411 = state_36053__$1;
(statearr_36083_37411[(2)] = null);

(statearr_36083_37411[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36054 === (8))){
var inst_36035 = (state_36053[(2)]);
var state_36053__$1 = state_36053;
var statearr_36085_37412 = state_36053__$1;
(statearr_36085_37412[(2)] = inst_36035);

(statearr_36085_37412[(1)] = (5));


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
var cljs$core$async$state_machine__34246__auto__ = null;
var cljs$core$async$state_machine__34246__auto____0 = (function (){
var statearr_36086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36086[(0)] = cljs$core$async$state_machine__34246__auto__);

(statearr_36086[(1)] = (1));

return statearr_36086;
});
var cljs$core$async$state_machine__34246__auto____1 = (function (state_36053){
while(true){
var ret_value__34247__auto__ = (function (){try{while(true){
var result__34248__auto__ = switch__34245__auto__(state_36053);
if(cljs.core.keyword_identical_QMARK_(result__34248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34248__auto__;
}
break;
}
}catch (e36087){var ex__34249__auto__ = e36087;
var statearr_36088_37413 = state_36053;
(statearr_36088_37413[(2)] = ex__34249__auto__);


if(cljs.core.seq((state_36053[(4)]))){
var statearr_36089_37414 = state_36053;
(statearr_36089_37414[(1)] = cljs.core.first((state_36053[(4)])));

} else {
throw ex__34249__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37419 = state_36053;
state_36053 = G__37419;
continue;
} else {
return ret_value__34247__auto__;
}
break;
}
});
cljs$core$async$state_machine__34246__auto__ = function(state_36053){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34246__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34246__auto____1.call(this,state_36053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34246__auto____0;
cljs$core$async$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34246__auto____1;
return cljs$core$async$state_machine__34246__auto__;
})()
})();
var state__34477__auto__ = (function (){var statearr_36090 = f__34476__auto__();
(statearr_36090[(6)] = c__34475__auto___37391);

return statearr_36090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34477__auto__);
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
var G__36095 = arguments.length;
switch (G__36095) {
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
var c__34475__auto___37422 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34476__auto__ = (function (){var switch__34245__auto__ = (function (state_36127){
var state_val_36128 = (state_36127[(1)]);
if((state_val_36128 === (7))){
var inst_36106 = (state_36127[(7)]);
var inst_36107 = (state_36127[(8)]);
var inst_36106__$1 = (state_36127[(2)]);
var inst_36107__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36106__$1,(0),null);
var inst_36108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36106__$1,(1),null);
var inst_36109 = (inst_36107__$1 == null);
var state_36127__$1 = (function (){var statearr_36129 = state_36127;
(statearr_36129[(7)] = inst_36106__$1);

(statearr_36129[(8)] = inst_36107__$1);

(statearr_36129[(9)] = inst_36108);

return statearr_36129;
})();
if(cljs.core.truth_(inst_36109)){
var statearr_36130_37428 = state_36127__$1;
(statearr_36130_37428[(1)] = (8));

} else {
var statearr_36131_37429 = state_36127__$1;
(statearr_36131_37429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (1))){
var inst_36096 = cljs.core.vec(chs);
var inst_36097 = inst_36096;
var state_36127__$1 = (function (){var statearr_36132 = state_36127;
(statearr_36132[(10)] = inst_36097);

return statearr_36132;
})();
var statearr_36133_37430 = state_36127__$1;
(statearr_36133_37430[(2)] = null);

(statearr_36133_37430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (4))){
var inst_36097 = (state_36127[(10)]);
var state_36127__$1 = state_36127;
return cljs.core.async.ioc_alts_BANG_(state_36127__$1,(7),inst_36097);
} else {
if((state_val_36128 === (6))){
var inst_36123 = (state_36127[(2)]);
var state_36127__$1 = state_36127;
var statearr_36136_37431 = state_36127__$1;
(statearr_36136_37431[(2)] = inst_36123);

(statearr_36136_37431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (3))){
var inst_36125 = (state_36127[(2)]);
var state_36127__$1 = state_36127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36127__$1,inst_36125);
} else {
if((state_val_36128 === (2))){
var inst_36097 = (state_36127[(10)]);
var inst_36099 = cljs.core.count(inst_36097);
var inst_36100 = (inst_36099 > (0));
var state_36127__$1 = state_36127;
if(cljs.core.truth_(inst_36100)){
var statearr_36138_37439 = state_36127__$1;
(statearr_36138_37439[(1)] = (4));

} else {
var statearr_36139_37440 = state_36127__$1;
(statearr_36139_37440[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (11))){
var inst_36097 = (state_36127[(10)]);
var inst_36116 = (state_36127[(2)]);
var tmp36137 = inst_36097;
var inst_36097__$1 = tmp36137;
var state_36127__$1 = (function (){var statearr_36140 = state_36127;
(statearr_36140[(10)] = inst_36097__$1);

(statearr_36140[(11)] = inst_36116);

return statearr_36140;
})();
var statearr_36141_37441 = state_36127__$1;
(statearr_36141_37441[(2)] = null);

(statearr_36141_37441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (9))){
var inst_36107 = (state_36127[(8)]);
var state_36127__$1 = state_36127;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36127__$1,(11),out,inst_36107);
} else {
if((state_val_36128 === (5))){
var inst_36121 = cljs.core.async.close_BANG_(out);
var state_36127__$1 = state_36127;
var statearr_36147_37442 = state_36127__$1;
(statearr_36147_37442[(2)] = inst_36121);

(statearr_36147_37442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (10))){
var inst_36119 = (state_36127[(2)]);
var state_36127__$1 = state_36127;
var statearr_36149_37443 = state_36127__$1;
(statearr_36149_37443[(2)] = inst_36119);

(statearr_36149_37443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (8))){
var inst_36097 = (state_36127[(10)]);
var inst_36106 = (state_36127[(7)]);
var inst_36107 = (state_36127[(8)]);
var inst_36108 = (state_36127[(9)]);
var inst_36111 = (function (){var cs = inst_36097;
var vec__36102 = inst_36106;
var v = inst_36107;
var c = inst_36108;
return (function (p1__36091_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36091_SHARP_);
});
})();
var inst_36112 = cljs.core.filterv(inst_36111,inst_36097);
var inst_36097__$1 = inst_36112;
var state_36127__$1 = (function (){var statearr_36151 = state_36127;
(statearr_36151[(10)] = inst_36097__$1);

return statearr_36151;
})();
var statearr_36152_37444 = state_36127__$1;
(statearr_36152_37444[(2)] = null);

(statearr_36152_37444[(1)] = (2));


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
var cljs$core$async$state_machine__34246__auto__ = null;
var cljs$core$async$state_machine__34246__auto____0 = (function (){
var statearr_36155 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36155[(0)] = cljs$core$async$state_machine__34246__auto__);

(statearr_36155[(1)] = (1));

return statearr_36155;
});
var cljs$core$async$state_machine__34246__auto____1 = (function (state_36127){
while(true){
var ret_value__34247__auto__ = (function (){try{while(true){
var result__34248__auto__ = switch__34245__auto__(state_36127);
if(cljs.core.keyword_identical_QMARK_(result__34248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34248__auto__;
}
break;
}
}catch (e36156){var ex__34249__auto__ = e36156;
var statearr_36157_37445 = state_36127;
(statearr_36157_37445[(2)] = ex__34249__auto__);


if(cljs.core.seq((state_36127[(4)]))){
var statearr_36158_37446 = state_36127;
(statearr_36158_37446[(1)] = cljs.core.first((state_36127[(4)])));

} else {
throw ex__34249__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37447 = state_36127;
state_36127 = G__37447;
continue;
} else {
return ret_value__34247__auto__;
}
break;
}
});
cljs$core$async$state_machine__34246__auto__ = function(state_36127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34246__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34246__auto____1.call(this,state_36127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34246__auto____0;
cljs$core$async$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34246__auto____1;
return cljs$core$async$state_machine__34246__auto__;
})()
})();
var state__34477__auto__ = (function (){var statearr_36159 = f__34476__auto__();
(statearr_36159[(6)] = c__34475__auto___37422);

return statearr_36159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34477__auto__);
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
var G__36164 = arguments.length;
switch (G__36164) {
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
var c__34475__auto___37450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34476__auto__ = (function (){var switch__34245__auto__ = (function (state_36188){
var state_val_36189 = (state_36188[(1)]);
if((state_val_36189 === (7))){
var inst_36170 = (state_36188[(7)]);
var inst_36170__$1 = (state_36188[(2)]);
var inst_36171 = (inst_36170__$1 == null);
var inst_36172 = cljs.core.not(inst_36171);
var state_36188__$1 = (function (){var statearr_36216 = state_36188;
(statearr_36216[(7)] = inst_36170__$1);

return statearr_36216;
})();
if(inst_36172){
var statearr_36217_37451 = state_36188__$1;
(statearr_36217_37451[(1)] = (8));

} else {
var statearr_36218_37452 = state_36188__$1;
(statearr_36218_37452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (1))){
var inst_36165 = (0);
var state_36188__$1 = (function (){var statearr_36219 = state_36188;
(statearr_36219[(8)] = inst_36165);

return statearr_36219;
})();
var statearr_36220_37453 = state_36188__$1;
(statearr_36220_37453[(2)] = null);

(statearr_36220_37453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (4))){
var state_36188__$1 = state_36188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36188__$1,(7),ch);
} else {
if((state_val_36189 === (6))){
var inst_36183 = (state_36188[(2)]);
var state_36188__$1 = state_36188;
var statearr_36224_37454 = state_36188__$1;
(statearr_36224_37454[(2)] = inst_36183);

(statearr_36224_37454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (3))){
var inst_36185 = (state_36188[(2)]);
var inst_36186 = cljs.core.async.close_BANG_(out);
var state_36188__$1 = (function (){var statearr_36225 = state_36188;
(statearr_36225[(9)] = inst_36185);

return statearr_36225;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36188__$1,inst_36186);
} else {
if((state_val_36189 === (2))){
var inst_36165 = (state_36188[(8)]);
var inst_36167 = (inst_36165 < n);
var state_36188__$1 = state_36188;
if(cljs.core.truth_(inst_36167)){
var statearr_36229_37456 = state_36188__$1;
(statearr_36229_37456[(1)] = (4));

} else {
var statearr_36230_37457 = state_36188__$1;
(statearr_36230_37457[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (11))){
var inst_36165 = (state_36188[(8)]);
var inst_36175 = (state_36188[(2)]);
var inst_36176 = (inst_36165 + (1));
var inst_36165__$1 = inst_36176;
var state_36188__$1 = (function (){var statearr_36231 = state_36188;
(statearr_36231[(8)] = inst_36165__$1);

(statearr_36231[(10)] = inst_36175);

return statearr_36231;
})();
var statearr_36232_37458 = state_36188__$1;
(statearr_36232_37458[(2)] = null);

(statearr_36232_37458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (9))){
var state_36188__$1 = state_36188;
var statearr_36233_37462 = state_36188__$1;
(statearr_36233_37462[(2)] = null);

(statearr_36233_37462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (5))){
var state_36188__$1 = state_36188;
var statearr_36234_37463 = state_36188__$1;
(statearr_36234_37463[(2)] = null);

(statearr_36234_37463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (10))){
var inst_36180 = (state_36188[(2)]);
var state_36188__$1 = state_36188;
var statearr_36235_37464 = state_36188__$1;
(statearr_36235_37464[(2)] = inst_36180);

(statearr_36235_37464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (8))){
var inst_36170 = (state_36188[(7)]);
var state_36188__$1 = state_36188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36188__$1,(11),out,inst_36170);
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
var cljs$core$async$state_machine__34246__auto__ = null;
var cljs$core$async$state_machine__34246__auto____0 = (function (){
var statearr_36240 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36240[(0)] = cljs$core$async$state_machine__34246__auto__);

(statearr_36240[(1)] = (1));

return statearr_36240;
});
var cljs$core$async$state_machine__34246__auto____1 = (function (state_36188){
while(true){
var ret_value__34247__auto__ = (function (){try{while(true){
var result__34248__auto__ = switch__34245__auto__(state_36188);
if(cljs.core.keyword_identical_QMARK_(result__34248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34248__auto__;
}
break;
}
}catch (e36241){var ex__34249__auto__ = e36241;
var statearr_36242_37465 = state_36188;
(statearr_36242_37465[(2)] = ex__34249__auto__);


if(cljs.core.seq((state_36188[(4)]))){
var statearr_36243_37466 = state_36188;
(statearr_36243_37466[(1)] = cljs.core.first((state_36188[(4)])));

} else {
throw ex__34249__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37470 = state_36188;
state_36188 = G__37470;
continue;
} else {
return ret_value__34247__auto__;
}
break;
}
});
cljs$core$async$state_machine__34246__auto__ = function(state_36188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34246__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34246__auto____1.call(this,state_36188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34246__auto____0;
cljs$core$async$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34246__auto____1;
return cljs$core$async$state_machine__34246__auto__;
})()
})();
var state__34477__auto__ = (function (){var statearr_36244 = f__34476__auto__();
(statearr_36244[(6)] = c__34475__auto___37450);

return statearr_36244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34477__auto__);
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
cljs.core.async.t_cljs$core$async36255 = (function (f,ch,meta36251,_,fn1,meta36256){
this.f = f;
this.ch = ch;
this.meta36251 = meta36251;
this._ = _;
this.fn1 = fn1;
this.meta36256 = meta36256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36257,meta36256__$1){
var self__ = this;
var _36257__$1 = this;
return (new cljs.core.async.t_cljs$core$async36255(self__.f,self__.ch,self__.meta36251,self__._,self__.fn1,meta36256__$1));
}));

(cljs.core.async.t_cljs$core$async36255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36257){
var self__ = this;
var _36257__$1 = this;
return self__.meta36256;
}));

(cljs.core.async.t_cljs$core$async36255.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36255.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36255.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36255.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36246_SHARP_){
var G__36260 = (((p1__36246_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36246_SHARP_) : self__.f.call(null,p1__36246_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36260) : f1.call(null,G__36260));
});
}));

(cljs.core.async.t_cljs$core$async36255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36251","meta36251",1064451899,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36250","cljs.core.async/t_cljs$core$async36250",1087524413,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36256","meta36256",-787218976,null)], null);
}));

(cljs.core.async.t_cljs$core$async36255.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36255");

(cljs.core.async.t_cljs$core$async36255.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36255");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36255.
 */
cljs.core.async.__GT_t_cljs$core$async36255 = (function cljs$core$async$__GT_t_cljs$core$async36255(f,ch,meta36251,_,fn1,meta36256){
return (new cljs.core.async.t_cljs$core$async36255(f,ch,meta36251,_,fn1,meta36256));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36250 = (function (f,ch,meta36251){
this.f = f;
this.ch = ch;
this.meta36251 = meta36251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36252,meta36251__$1){
var self__ = this;
var _36252__$1 = this;
return (new cljs.core.async.t_cljs$core$async36250(self__.f,self__.ch,meta36251__$1));
}));

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36252){
var self__ = this;
var _36252__$1 = this;
return self__.meta36251;
}));

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async36255(self__.f,self__.ch,self__.meta36251,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36261 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36261) : self__.f.call(null,G__36261));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36250.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36251","meta36251",1064451899,null)], null);
}));

(cljs.core.async.t_cljs$core$async36250.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36250.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36250");

(cljs.core.async.t_cljs$core$async36250.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36250");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36250.
 */
cljs.core.async.__GT_t_cljs$core$async36250 = (function cljs$core$async$__GT_t_cljs$core$async36250(f,ch,meta36251){
return (new cljs.core.async.t_cljs$core$async36250(f,ch,meta36251));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async36250(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36269 = (function (f,ch,meta36270){
this.f = f;
this.ch = ch;
this.meta36270 = meta36270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36271,meta36270__$1){
var self__ = this;
var _36271__$1 = this;
return (new cljs.core.async.t_cljs$core$async36269(self__.f,self__.ch,meta36270__$1));
}));

(cljs.core.async.t_cljs$core$async36269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36271){
var self__ = this;
var _36271__$1 = this;
return self__.meta36270;
}));

(cljs.core.async.t_cljs$core$async36269.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36269.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36269.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36269.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36269.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36269.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36270","meta36270",1341189309,null)], null);
}));

(cljs.core.async.t_cljs$core$async36269.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36269");

(cljs.core.async.t_cljs$core$async36269.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36269");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36269.
 */
cljs.core.async.__GT_t_cljs$core$async36269 = (function cljs$core$async$__GT_t_cljs$core$async36269(f,ch,meta36270){
return (new cljs.core.async.t_cljs$core$async36269(f,ch,meta36270));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async36269(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36280 = (function (p,ch,meta36281){
this.p = p;
this.ch = ch;
this.meta36281 = meta36281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36282,meta36281__$1){
var self__ = this;
var _36282__$1 = this;
return (new cljs.core.async.t_cljs$core$async36280(self__.p,self__.ch,meta36281__$1));
}));

(cljs.core.async.t_cljs$core$async36280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36282){
var self__ = this;
var _36282__$1 = this;
return self__.meta36281;
}));

(cljs.core.async.t_cljs$core$async36280.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36280.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36280.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36280.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36280.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36280.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36280.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36280.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36281","meta36281",-1585268573,null)], null);
}));

(cljs.core.async.t_cljs$core$async36280.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36280");

(cljs.core.async.t_cljs$core$async36280.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36280");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36280.
 */
cljs.core.async.__GT_t_cljs$core$async36280 = (function cljs$core$async$__GT_t_cljs$core$async36280(p,ch,meta36281){
return (new cljs.core.async.t_cljs$core$async36280(p,ch,meta36281));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async36280(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36293 = arguments.length;
switch (G__36293) {
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
var c__34475__auto___37478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34476__auto__ = (function (){var switch__34245__auto__ = (function (state_36317){
var state_val_36318 = (state_36317[(1)]);
if((state_val_36318 === (7))){
var inst_36313 = (state_36317[(2)]);
var state_36317__$1 = state_36317;
var statearr_36319_37480 = state_36317__$1;
(statearr_36319_37480[(2)] = inst_36313);

(statearr_36319_37480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (1))){
var state_36317__$1 = state_36317;
var statearr_36320_37481 = state_36317__$1;
(statearr_36320_37481[(2)] = null);

(statearr_36320_37481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (4))){
var inst_36299 = (state_36317[(7)]);
var inst_36299__$1 = (state_36317[(2)]);
var inst_36300 = (inst_36299__$1 == null);
var state_36317__$1 = (function (){var statearr_36321 = state_36317;
(statearr_36321[(7)] = inst_36299__$1);

return statearr_36321;
})();
if(cljs.core.truth_(inst_36300)){
var statearr_36322_37482 = state_36317__$1;
(statearr_36322_37482[(1)] = (5));

} else {
var statearr_36323_37484 = state_36317__$1;
(statearr_36323_37484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (6))){
var inst_36299 = (state_36317[(7)]);
var inst_36304 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36299) : p.call(null,inst_36299));
var state_36317__$1 = state_36317;
if(cljs.core.truth_(inst_36304)){
var statearr_36324_37488 = state_36317__$1;
(statearr_36324_37488[(1)] = (8));

} else {
var statearr_36325_37489 = state_36317__$1;
(statearr_36325_37489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (3))){
var inst_36315 = (state_36317[(2)]);
var state_36317__$1 = state_36317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36317__$1,inst_36315);
} else {
if((state_val_36318 === (2))){
var state_36317__$1 = state_36317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36317__$1,(4),ch);
} else {
if((state_val_36318 === (11))){
var inst_36307 = (state_36317[(2)]);
var state_36317__$1 = state_36317;
var statearr_36326_37490 = state_36317__$1;
(statearr_36326_37490[(2)] = inst_36307);

(statearr_36326_37490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (9))){
var state_36317__$1 = state_36317;
var statearr_36327_37492 = state_36317__$1;
(statearr_36327_37492[(2)] = null);

(statearr_36327_37492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (5))){
var inst_36302 = cljs.core.async.close_BANG_(out);
var state_36317__$1 = state_36317;
var statearr_36328_37493 = state_36317__$1;
(statearr_36328_37493[(2)] = inst_36302);

(statearr_36328_37493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (10))){
var inst_36310 = (state_36317[(2)]);
var state_36317__$1 = (function (){var statearr_36329 = state_36317;
(statearr_36329[(8)] = inst_36310);

return statearr_36329;
})();
var statearr_36330_37495 = state_36317__$1;
(statearr_36330_37495[(2)] = null);

(statearr_36330_37495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (8))){
var inst_36299 = (state_36317[(7)]);
var state_36317__$1 = state_36317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36317__$1,(11),out,inst_36299);
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
var cljs$core$async$state_machine__34246__auto__ = null;
var cljs$core$async$state_machine__34246__auto____0 = (function (){
var statearr_36331 = [null,null,null,null,null,null,null,null,null];
(statearr_36331[(0)] = cljs$core$async$state_machine__34246__auto__);

(statearr_36331[(1)] = (1));

return statearr_36331;
});
var cljs$core$async$state_machine__34246__auto____1 = (function (state_36317){
while(true){
var ret_value__34247__auto__ = (function (){try{while(true){
var result__34248__auto__ = switch__34245__auto__(state_36317);
if(cljs.core.keyword_identical_QMARK_(result__34248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34248__auto__;
}
break;
}
}catch (e36332){var ex__34249__auto__ = e36332;
var statearr_36333_37497 = state_36317;
(statearr_36333_37497[(2)] = ex__34249__auto__);


if(cljs.core.seq((state_36317[(4)]))){
var statearr_36334_37498 = state_36317;
(statearr_36334_37498[(1)] = cljs.core.first((state_36317[(4)])));

} else {
throw ex__34249__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37499 = state_36317;
state_36317 = G__37499;
continue;
} else {
return ret_value__34247__auto__;
}
break;
}
});
cljs$core$async$state_machine__34246__auto__ = function(state_36317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34246__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34246__auto____1.call(this,state_36317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34246__auto____0;
cljs$core$async$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34246__auto____1;
return cljs$core$async$state_machine__34246__auto__;
})()
})();
var state__34477__auto__ = (function (){var statearr_36336 = f__34476__auto__();
(statearr_36336[(6)] = c__34475__auto___37478);

return statearr_36336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34477__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36339 = arguments.length;
switch (G__36339) {
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
var c__34475__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34476__auto__ = (function (){var switch__34245__auto__ = (function (state_36404){
var state_val_36405 = (state_36404[(1)]);
if((state_val_36405 === (7))){
var inst_36400 = (state_36404[(2)]);
var state_36404__$1 = state_36404;
var statearr_36406_37501 = state_36404__$1;
(statearr_36406_37501[(2)] = inst_36400);

(statearr_36406_37501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (20))){
var inst_36370 = (state_36404[(7)]);
var inst_36381 = (state_36404[(2)]);
var inst_36382 = cljs.core.next(inst_36370);
var inst_36356 = inst_36382;
var inst_36357 = null;
var inst_36358 = (0);
var inst_36359 = (0);
var state_36404__$1 = (function (){var statearr_36407 = state_36404;
(statearr_36407[(8)] = inst_36357);

(statearr_36407[(9)] = inst_36356);

(statearr_36407[(10)] = inst_36358);

(statearr_36407[(11)] = inst_36359);

(statearr_36407[(12)] = inst_36381);

return statearr_36407;
})();
var statearr_36408_37502 = state_36404__$1;
(statearr_36408_37502[(2)] = null);

(statearr_36408_37502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (1))){
var state_36404__$1 = state_36404;
var statearr_36409_37507 = state_36404__$1;
(statearr_36409_37507[(2)] = null);

(statearr_36409_37507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (4))){
var inst_36345 = (state_36404[(13)]);
var inst_36345__$1 = (state_36404[(2)]);
var inst_36346 = (inst_36345__$1 == null);
var state_36404__$1 = (function (){var statearr_36410 = state_36404;
(statearr_36410[(13)] = inst_36345__$1);

return statearr_36410;
})();
if(cljs.core.truth_(inst_36346)){
var statearr_36411_37508 = state_36404__$1;
(statearr_36411_37508[(1)] = (5));

} else {
var statearr_36412_37509 = state_36404__$1;
(statearr_36412_37509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (15))){
var state_36404__$1 = state_36404;
var statearr_36416_37510 = state_36404__$1;
(statearr_36416_37510[(2)] = null);

(statearr_36416_37510[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (21))){
var state_36404__$1 = state_36404;
var statearr_36417_37511 = state_36404__$1;
(statearr_36417_37511[(2)] = null);

(statearr_36417_37511[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (13))){
var inst_36357 = (state_36404[(8)]);
var inst_36356 = (state_36404[(9)]);
var inst_36358 = (state_36404[(10)]);
var inst_36359 = (state_36404[(11)]);
var inst_36366 = (state_36404[(2)]);
var inst_36367 = (inst_36359 + (1));
var tmp36413 = inst_36357;
var tmp36414 = inst_36356;
var tmp36415 = inst_36358;
var inst_36356__$1 = tmp36414;
var inst_36357__$1 = tmp36413;
var inst_36358__$1 = tmp36415;
var inst_36359__$1 = inst_36367;
var state_36404__$1 = (function (){var statearr_36418 = state_36404;
(statearr_36418[(8)] = inst_36357__$1);

(statearr_36418[(9)] = inst_36356__$1);

(statearr_36418[(14)] = inst_36366);

(statearr_36418[(10)] = inst_36358__$1);

(statearr_36418[(11)] = inst_36359__$1);

return statearr_36418;
})();
var statearr_36419_37512 = state_36404__$1;
(statearr_36419_37512[(2)] = null);

(statearr_36419_37512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (22))){
var state_36404__$1 = state_36404;
var statearr_36420_37513 = state_36404__$1;
(statearr_36420_37513[(2)] = null);

(statearr_36420_37513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (6))){
var inst_36345 = (state_36404[(13)]);
var inst_36354 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36345) : f.call(null,inst_36345));
var inst_36355 = cljs.core.seq(inst_36354);
var inst_36356 = inst_36355;
var inst_36357 = null;
var inst_36358 = (0);
var inst_36359 = (0);
var state_36404__$1 = (function (){var statearr_36421 = state_36404;
(statearr_36421[(8)] = inst_36357);

(statearr_36421[(9)] = inst_36356);

(statearr_36421[(10)] = inst_36358);

(statearr_36421[(11)] = inst_36359);

return statearr_36421;
})();
var statearr_36422_37514 = state_36404__$1;
(statearr_36422_37514[(2)] = null);

(statearr_36422_37514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (17))){
var inst_36370 = (state_36404[(7)]);
var inst_36374 = cljs.core.chunk_first(inst_36370);
var inst_36375 = cljs.core.chunk_rest(inst_36370);
var inst_36376 = cljs.core.count(inst_36374);
var inst_36356 = inst_36375;
var inst_36357 = inst_36374;
var inst_36358 = inst_36376;
var inst_36359 = (0);
var state_36404__$1 = (function (){var statearr_36423 = state_36404;
(statearr_36423[(8)] = inst_36357);

(statearr_36423[(9)] = inst_36356);

(statearr_36423[(10)] = inst_36358);

(statearr_36423[(11)] = inst_36359);

return statearr_36423;
})();
var statearr_36425_37515 = state_36404__$1;
(statearr_36425_37515[(2)] = null);

(statearr_36425_37515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (3))){
var inst_36402 = (state_36404[(2)]);
var state_36404__$1 = state_36404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36404__$1,inst_36402);
} else {
if((state_val_36405 === (12))){
var inst_36390 = (state_36404[(2)]);
var state_36404__$1 = state_36404;
var statearr_36426_37520 = state_36404__$1;
(statearr_36426_37520[(2)] = inst_36390);

(statearr_36426_37520[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (2))){
var state_36404__$1 = state_36404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36404__$1,(4),in$);
} else {
if((state_val_36405 === (23))){
var inst_36398 = (state_36404[(2)]);
var state_36404__$1 = state_36404;
var statearr_36427_37525 = state_36404__$1;
(statearr_36427_37525[(2)] = inst_36398);

(statearr_36427_37525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (19))){
var inst_36385 = (state_36404[(2)]);
var state_36404__$1 = state_36404;
var statearr_36428_37526 = state_36404__$1;
(statearr_36428_37526[(2)] = inst_36385);

(statearr_36428_37526[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (11))){
var inst_36356 = (state_36404[(9)]);
var inst_36370 = (state_36404[(7)]);
var inst_36370__$1 = cljs.core.seq(inst_36356);
var state_36404__$1 = (function (){var statearr_36429 = state_36404;
(statearr_36429[(7)] = inst_36370__$1);

return statearr_36429;
})();
if(inst_36370__$1){
var statearr_36430_37528 = state_36404__$1;
(statearr_36430_37528[(1)] = (14));

} else {
var statearr_36431_37529 = state_36404__$1;
(statearr_36431_37529[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (9))){
var inst_36392 = (state_36404[(2)]);
var inst_36393 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36404__$1 = (function (){var statearr_36432 = state_36404;
(statearr_36432[(15)] = inst_36392);

return statearr_36432;
})();
if(cljs.core.truth_(inst_36393)){
var statearr_36433_37530 = state_36404__$1;
(statearr_36433_37530[(1)] = (21));

} else {
var statearr_36437_37531 = state_36404__$1;
(statearr_36437_37531[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (5))){
var inst_36348 = cljs.core.async.close_BANG_(out);
var state_36404__$1 = state_36404;
var statearr_36438_37532 = state_36404__$1;
(statearr_36438_37532[(2)] = inst_36348);

(statearr_36438_37532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (14))){
var inst_36370 = (state_36404[(7)]);
var inst_36372 = cljs.core.chunked_seq_QMARK_(inst_36370);
var state_36404__$1 = state_36404;
if(inst_36372){
var statearr_36439_37533 = state_36404__$1;
(statearr_36439_37533[(1)] = (17));

} else {
var statearr_36440_37534 = state_36404__$1;
(statearr_36440_37534[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (16))){
var inst_36388 = (state_36404[(2)]);
var state_36404__$1 = state_36404;
var statearr_36441_37535 = state_36404__$1;
(statearr_36441_37535[(2)] = inst_36388);

(statearr_36441_37535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (10))){
var inst_36357 = (state_36404[(8)]);
var inst_36359 = (state_36404[(11)]);
var inst_36364 = cljs.core._nth(inst_36357,inst_36359);
var state_36404__$1 = state_36404;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36404__$1,(13),out,inst_36364);
} else {
if((state_val_36405 === (18))){
var inst_36370 = (state_36404[(7)]);
var inst_36379 = cljs.core.first(inst_36370);
var state_36404__$1 = state_36404;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36404__$1,(20),out,inst_36379);
} else {
if((state_val_36405 === (8))){
var inst_36358 = (state_36404[(10)]);
var inst_36359 = (state_36404[(11)]);
var inst_36361 = (inst_36359 < inst_36358);
var inst_36362 = inst_36361;
var state_36404__$1 = state_36404;
if(cljs.core.truth_(inst_36362)){
var statearr_36446_37536 = state_36404__$1;
(statearr_36446_37536[(1)] = (10));

} else {
var statearr_36447_37537 = state_36404__$1;
(statearr_36447_37537[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__34246__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34246__auto____0 = (function (){
var statearr_36448 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36448[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34246__auto__);

(statearr_36448[(1)] = (1));

return statearr_36448;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34246__auto____1 = (function (state_36404){
while(true){
var ret_value__34247__auto__ = (function (){try{while(true){
var result__34248__auto__ = switch__34245__auto__(state_36404);
if(cljs.core.keyword_identical_QMARK_(result__34248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34248__auto__;
}
break;
}
}catch (e36449){var ex__34249__auto__ = e36449;
var statearr_36450_37538 = state_36404;
(statearr_36450_37538[(2)] = ex__34249__auto__);


if(cljs.core.seq((state_36404[(4)]))){
var statearr_36451_37539 = state_36404;
(statearr_36451_37539[(1)] = cljs.core.first((state_36404[(4)])));

} else {
throw ex__34249__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37540 = state_36404;
state_36404 = G__37540;
continue;
} else {
return ret_value__34247__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34246__auto__ = function(state_36404){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34246__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34246__auto____1.call(this,state_36404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34246__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34246__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34246__auto__;
})()
})();
var state__34477__auto__ = (function (){var statearr_36452 = f__34476__auto__();
(statearr_36452[(6)] = c__34475__auto__);

return statearr_36452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34477__auto__);
}));

return c__34475__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36454 = arguments.length;
switch (G__36454) {
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
var G__36456 = arguments.length;
switch (G__36456) {
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
var G__36478 = arguments.length;
switch (G__36478) {
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
var c__34475__auto___37556 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34476__auto__ = (function (){var switch__34245__auto__ = (function (state_36522){
var state_val_36523 = (state_36522[(1)]);
if((state_val_36523 === (7))){
var inst_36511 = (state_36522[(2)]);
var state_36522__$1 = state_36522;
var statearr_36526_37561 = state_36522__$1;
(statearr_36526_37561[(2)] = inst_36511);

(statearr_36526_37561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (1))){
var inst_36487 = null;
var state_36522__$1 = (function (){var statearr_36527 = state_36522;
(statearr_36527[(7)] = inst_36487);

return statearr_36527;
})();
var statearr_36528_37562 = state_36522__$1;
(statearr_36528_37562[(2)] = null);

(statearr_36528_37562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (4))){
var inst_36496 = (state_36522[(8)]);
var inst_36496__$1 = (state_36522[(2)]);
var inst_36497 = (inst_36496__$1 == null);
var inst_36498 = cljs.core.not(inst_36497);
var state_36522__$1 = (function (){var statearr_36530 = state_36522;
(statearr_36530[(8)] = inst_36496__$1);

return statearr_36530;
})();
if(inst_36498){
var statearr_36531_37563 = state_36522__$1;
(statearr_36531_37563[(1)] = (5));

} else {
var statearr_36532_37564 = state_36522__$1;
(statearr_36532_37564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (6))){
var state_36522__$1 = state_36522;
var statearr_36533_37565 = state_36522__$1;
(statearr_36533_37565[(2)] = null);

(statearr_36533_37565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (3))){
var inst_36513 = (state_36522[(2)]);
var inst_36514 = cljs.core.async.close_BANG_(out);
var state_36522__$1 = (function (){var statearr_36534 = state_36522;
(statearr_36534[(9)] = inst_36513);

return statearr_36534;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36522__$1,inst_36514);
} else {
if((state_val_36523 === (2))){
var state_36522__$1 = state_36522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36522__$1,(4),ch);
} else {
if((state_val_36523 === (11))){
var inst_36496 = (state_36522[(8)]);
var inst_36505 = (state_36522[(2)]);
var inst_36487 = inst_36496;
var state_36522__$1 = (function (){var statearr_36535 = state_36522;
(statearr_36535[(10)] = inst_36505);

(statearr_36535[(7)] = inst_36487);

return statearr_36535;
})();
var statearr_36539_37566 = state_36522__$1;
(statearr_36539_37566[(2)] = null);

(statearr_36539_37566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (9))){
var inst_36496 = (state_36522[(8)]);
var state_36522__$1 = state_36522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36522__$1,(11),out,inst_36496);
} else {
if((state_val_36523 === (5))){
var inst_36496 = (state_36522[(8)]);
var inst_36487 = (state_36522[(7)]);
var inst_36500 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36496,inst_36487);
var state_36522__$1 = state_36522;
if(inst_36500){
var statearr_36541_37571 = state_36522__$1;
(statearr_36541_37571[(1)] = (8));

} else {
var statearr_36542_37572 = state_36522__$1;
(statearr_36542_37572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (10))){
var inst_36508 = (state_36522[(2)]);
var state_36522__$1 = state_36522;
var statearr_36543_37573 = state_36522__$1;
(statearr_36543_37573[(2)] = inst_36508);

(statearr_36543_37573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (8))){
var inst_36487 = (state_36522[(7)]);
var tmp36540 = inst_36487;
var inst_36487__$1 = tmp36540;
var state_36522__$1 = (function (){var statearr_36544 = state_36522;
(statearr_36544[(7)] = inst_36487__$1);

return statearr_36544;
})();
var statearr_36545_37578 = state_36522__$1;
(statearr_36545_37578[(2)] = null);

(statearr_36545_37578[(1)] = (2));


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
var cljs$core$async$state_machine__34246__auto__ = null;
var cljs$core$async$state_machine__34246__auto____0 = (function (){
var statearr_36546 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36546[(0)] = cljs$core$async$state_machine__34246__auto__);

(statearr_36546[(1)] = (1));

return statearr_36546;
});
var cljs$core$async$state_machine__34246__auto____1 = (function (state_36522){
while(true){
var ret_value__34247__auto__ = (function (){try{while(true){
var result__34248__auto__ = switch__34245__auto__(state_36522);
if(cljs.core.keyword_identical_QMARK_(result__34248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34248__auto__;
}
break;
}
}catch (e36547){var ex__34249__auto__ = e36547;
var statearr_36548_37579 = state_36522;
(statearr_36548_37579[(2)] = ex__34249__auto__);


if(cljs.core.seq((state_36522[(4)]))){
var statearr_36549_37580 = state_36522;
(statearr_36549_37580[(1)] = cljs.core.first((state_36522[(4)])));

} else {
throw ex__34249__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37581 = state_36522;
state_36522 = G__37581;
continue;
} else {
return ret_value__34247__auto__;
}
break;
}
});
cljs$core$async$state_machine__34246__auto__ = function(state_36522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34246__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34246__auto____1.call(this,state_36522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34246__auto____0;
cljs$core$async$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34246__auto____1;
return cljs$core$async$state_machine__34246__auto__;
})()
})();
var state__34477__auto__ = (function (){var statearr_36550 = f__34476__auto__();
(statearr_36550[(6)] = c__34475__auto___37556);

return statearr_36550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34477__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36552 = arguments.length;
switch (G__36552) {
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
var c__34475__auto___37591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34476__auto__ = (function (){var switch__34245__auto__ = (function (state_36590){
var state_val_36591 = (state_36590[(1)]);
if((state_val_36591 === (7))){
var inst_36586 = (state_36590[(2)]);
var state_36590__$1 = state_36590;
var statearr_36592_37592 = state_36590__$1;
(statearr_36592_37592[(2)] = inst_36586);

(statearr_36592_37592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (1))){
var inst_36553 = (new Array(n));
var inst_36554 = inst_36553;
var inst_36555 = (0);
var state_36590__$1 = (function (){var statearr_36593 = state_36590;
(statearr_36593[(7)] = inst_36555);

(statearr_36593[(8)] = inst_36554);

return statearr_36593;
})();
var statearr_36594_37593 = state_36590__$1;
(statearr_36594_37593[(2)] = null);

(statearr_36594_37593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (4))){
var inst_36558 = (state_36590[(9)]);
var inst_36558__$1 = (state_36590[(2)]);
var inst_36559 = (inst_36558__$1 == null);
var inst_36560 = cljs.core.not(inst_36559);
var state_36590__$1 = (function (){var statearr_36595 = state_36590;
(statearr_36595[(9)] = inst_36558__$1);

return statearr_36595;
})();
if(inst_36560){
var statearr_36596_37594 = state_36590__$1;
(statearr_36596_37594[(1)] = (5));

} else {
var statearr_36597_37595 = state_36590__$1;
(statearr_36597_37595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (15))){
var inst_36580 = (state_36590[(2)]);
var state_36590__$1 = state_36590;
var statearr_36598_37596 = state_36590__$1;
(statearr_36598_37596[(2)] = inst_36580);

(statearr_36598_37596[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (13))){
var state_36590__$1 = state_36590;
var statearr_36599_37597 = state_36590__$1;
(statearr_36599_37597[(2)] = null);

(statearr_36599_37597[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (6))){
var inst_36555 = (state_36590[(7)]);
var inst_36576 = (inst_36555 > (0));
var state_36590__$1 = state_36590;
if(cljs.core.truth_(inst_36576)){
var statearr_36600_37605 = state_36590__$1;
(statearr_36600_37605[(1)] = (12));

} else {
var statearr_36601_37606 = state_36590__$1;
(statearr_36601_37606[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (3))){
var inst_36588 = (state_36590[(2)]);
var state_36590__$1 = state_36590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36590__$1,inst_36588);
} else {
if((state_val_36591 === (12))){
var inst_36554 = (state_36590[(8)]);
var inst_36578 = cljs.core.vec(inst_36554);
var state_36590__$1 = state_36590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36590__$1,(15),out,inst_36578);
} else {
if((state_val_36591 === (2))){
var state_36590__$1 = state_36590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36590__$1,(4),ch);
} else {
if((state_val_36591 === (11))){
var inst_36570 = (state_36590[(2)]);
var inst_36571 = (new Array(n));
var inst_36554 = inst_36571;
var inst_36555 = (0);
var state_36590__$1 = (function (){var statearr_36602 = state_36590;
(statearr_36602[(7)] = inst_36555);

(statearr_36602[(10)] = inst_36570);

(statearr_36602[(8)] = inst_36554);

return statearr_36602;
})();
var statearr_36603_37614 = state_36590__$1;
(statearr_36603_37614[(2)] = null);

(statearr_36603_37614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (9))){
var inst_36554 = (state_36590[(8)]);
var inst_36568 = cljs.core.vec(inst_36554);
var state_36590__$1 = state_36590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36590__$1,(11),out,inst_36568);
} else {
if((state_val_36591 === (5))){
var inst_36555 = (state_36590[(7)]);
var inst_36563 = (state_36590[(11)]);
var inst_36554 = (state_36590[(8)]);
var inst_36558 = (state_36590[(9)]);
var inst_36562 = (inst_36554[inst_36555] = inst_36558);
var inst_36563__$1 = (inst_36555 + (1));
var inst_36564 = (inst_36563__$1 < n);
var state_36590__$1 = (function (){var statearr_36612 = state_36590;
(statearr_36612[(12)] = inst_36562);

(statearr_36612[(11)] = inst_36563__$1);

return statearr_36612;
})();
if(cljs.core.truth_(inst_36564)){
var statearr_36613_37622 = state_36590__$1;
(statearr_36613_37622[(1)] = (8));

} else {
var statearr_36614_37623 = state_36590__$1;
(statearr_36614_37623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (14))){
var inst_36583 = (state_36590[(2)]);
var inst_36584 = cljs.core.async.close_BANG_(out);
var state_36590__$1 = (function (){var statearr_36619 = state_36590;
(statearr_36619[(13)] = inst_36583);

return statearr_36619;
})();
var statearr_36620_37624 = state_36590__$1;
(statearr_36620_37624[(2)] = inst_36584);

(statearr_36620_37624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (10))){
var inst_36574 = (state_36590[(2)]);
var state_36590__$1 = state_36590;
var statearr_36621_37625 = state_36590__$1;
(statearr_36621_37625[(2)] = inst_36574);

(statearr_36621_37625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (8))){
var inst_36563 = (state_36590[(11)]);
var inst_36554 = (state_36590[(8)]);
var tmp36618 = inst_36554;
var inst_36554__$1 = tmp36618;
var inst_36555 = inst_36563;
var state_36590__$1 = (function (){var statearr_36622 = state_36590;
(statearr_36622[(7)] = inst_36555);

(statearr_36622[(8)] = inst_36554__$1);

return statearr_36622;
})();
var statearr_36623_37626 = state_36590__$1;
(statearr_36623_37626[(2)] = null);

(statearr_36623_37626[(1)] = (2));


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
var cljs$core$async$state_machine__34246__auto__ = null;
var cljs$core$async$state_machine__34246__auto____0 = (function (){
var statearr_36624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36624[(0)] = cljs$core$async$state_machine__34246__auto__);

(statearr_36624[(1)] = (1));

return statearr_36624;
});
var cljs$core$async$state_machine__34246__auto____1 = (function (state_36590){
while(true){
var ret_value__34247__auto__ = (function (){try{while(true){
var result__34248__auto__ = switch__34245__auto__(state_36590);
if(cljs.core.keyword_identical_QMARK_(result__34248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34248__auto__;
}
break;
}
}catch (e36625){var ex__34249__auto__ = e36625;
var statearr_36626_37630 = state_36590;
(statearr_36626_37630[(2)] = ex__34249__auto__);


if(cljs.core.seq((state_36590[(4)]))){
var statearr_36627_37631 = state_36590;
(statearr_36627_37631[(1)] = cljs.core.first((state_36590[(4)])));

} else {
throw ex__34249__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37632 = state_36590;
state_36590 = G__37632;
continue;
} else {
return ret_value__34247__auto__;
}
break;
}
});
cljs$core$async$state_machine__34246__auto__ = function(state_36590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34246__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34246__auto____1.call(this,state_36590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34246__auto____0;
cljs$core$async$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34246__auto____1;
return cljs$core$async$state_machine__34246__auto__;
})()
})();
var state__34477__auto__ = (function (){var statearr_36628 = f__34476__auto__();
(statearr_36628[(6)] = c__34475__auto___37591);

return statearr_36628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34477__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36630 = arguments.length;
switch (G__36630) {
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
var c__34475__auto___37637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34476__auto__ = (function (){var switch__34245__auto__ = (function (state_36676){
var state_val_36677 = (state_36676[(1)]);
if((state_val_36677 === (7))){
var inst_36671 = (state_36676[(2)]);
var state_36676__$1 = state_36676;
var statearr_36681_37638 = state_36676__$1;
(statearr_36681_37638[(2)] = inst_36671);

(statearr_36681_37638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (1))){
var inst_36631 = [];
var inst_36632 = inst_36631;
var inst_36633 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36676__$1 = (function (){var statearr_36682 = state_36676;
(statearr_36682[(7)] = inst_36632);

(statearr_36682[(8)] = inst_36633);

return statearr_36682;
})();
var statearr_36683_37639 = state_36676__$1;
(statearr_36683_37639[(2)] = null);

(statearr_36683_37639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (4))){
var inst_36636 = (state_36676[(9)]);
var inst_36636__$1 = (state_36676[(2)]);
var inst_36637 = (inst_36636__$1 == null);
var inst_36638 = cljs.core.not(inst_36637);
var state_36676__$1 = (function (){var statearr_36685 = state_36676;
(statearr_36685[(9)] = inst_36636__$1);

return statearr_36685;
})();
if(inst_36638){
var statearr_36686_37640 = state_36676__$1;
(statearr_36686_37640[(1)] = (5));

} else {
var statearr_36688_37641 = state_36676__$1;
(statearr_36688_37641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (15))){
var inst_36632 = (state_36676[(7)]);
var inst_36663 = cljs.core.vec(inst_36632);
var state_36676__$1 = state_36676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36676__$1,(18),out,inst_36663);
} else {
if((state_val_36677 === (13))){
var inst_36658 = (state_36676[(2)]);
var state_36676__$1 = state_36676;
var statearr_36689_37642 = state_36676__$1;
(statearr_36689_37642[(2)] = inst_36658);

(statearr_36689_37642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (6))){
var inst_36632 = (state_36676[(7)]);
var inst_36660 = inst_36632.length;
var inst_36661 = (inst_36660 > (0));
var state_36676__$1 = state_36676;
if(cljs.core.truth_(inst_36661)){
var statearr_36690_37643 = state_36676__$1;
(statearr_36690_37643[(1)] = (15));

} else {
var statearr_36691_37644 = state_36676__$1;
(statearr_36691_37644[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (17))){
var inst_36668 = (state_36676[(2)]);
var inst_36669 = cljs.core.async.close_BANG_(out);
var state_36676__$1 = (function (){var statearr_36694 = state_36676;
(statearr_36694[(10)] = inst_36668);

return statearr_36694;
})();
var statearr_36695_37646 = state_36676__$1;
(statearr_36695_37646[(2)] = inst_36669);

(statearr_36695_37646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (3))){
var inst_36673 = (state_36676[(2)]);
var state_36676__$1 = state_36676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36676__$1,inst_36673);
} else {
if((state_val_36677 === (12))){
var inst_36632 = (state_36676[(7)]);
var inst_36651 = cljs.core.vec(inst_36632);
var state_36676__$1 = state_36676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36676__$1,(14),out,inst_36651);
} else {
if((state_val_36677 === (2))){
var state_36676__$1 = state_36676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36676__$1,(4),ch);
} else {
if((state_val_36677 === (11))){
var inst_36636 = (state_36676[(9)]);
var inst_36640 = (state_36676[(11)]);
var inst_36632 = (state_36676[(7)]);
var inst_36648 = inst_36632.push(inst_36636);
var tmp36696 = inst_36632;
var inst_36632__$1 = tmp36696;
var inst_36633 = inst_36640;
var state_36676__$1 = (function (){var statearr_36697 = state_36676;
(statearr_36697[(7)] = inst_36632__$1);

(statearr_36697[(12)] = inst_36648);

(statearr_36697[(8)] = inst_36633);

return statearr_36697;
})();
var statearr_36698_37647 = state_36676__$1;
(statearr_36698_37647[(2)] = null);

(statearr_36698_37647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (9))){
var inst_36633 = (state_36676[(8)]);
var inst_36644 = cljs.core.keyword_identical_QMARK_(inst_36633,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_36676__$1 = state_36676;
var statearr_36699_37657 = state_36676__$1;
(statearr_36699_37657[(2)] = inst_36644);

(statearr_36699_37657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (5))){
var inst_36636 = (state_36676[(9)]);
var inst_36640 = (state_36676[(11)]);
var inst_36633 = (state_36676[(8)]);
var inst_36641 = (state_36676[(13)]);
var inst_36640__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36636) : f.call(null,inst_36636));
var inst_36641__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36640__$1,inst_36633);
var state_36676__$1 = (function (){var statearr_36700 = state_36676;
(statearr_36700[(11)] = inst_36640__$1);

(statearr_36700[(13)] = inst_36641__$1);

return statearr_36700;
})();
if(inst_36641__$1){
var statearr_36701_37658 = state_36676__$1;
(statearr_36701_37658[(1)] = (8));

} else {
var statearr_36702_37659 = state_36676__$1;
(statearr_36702_37659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (14))){
var inst_36636 = (state_36676[(9)]);
var inst_36640 = (state_36676[(11)]);
var inst_36653 = (state_36676[(2)]);
var inst_36654 = [];
var inst_36655 = inst_36654.push(inst_36636);
var inst_36632 = inst_36654;
var inst_36633 = inst_36640;
var state_36676__$1 = (function (){var statearr_36703 = state_36676;
(statearr_36703[(14)] = inst_36653);

(statearr_36703[(15)] = inst_36655);

(statearr_36703[(7)] = inst_36632);

(statearr_36703[(8)] = inst_36633);

return statearr_36703;
})();
var statearr_36704_37666 = state_36676__$1;
(statearr_36704_37666[(2)] = null);

(statearr_36704_37666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (16))){
var state_36676__$1 = state_36676;
var statearr_36705_37667 = state_36676__$1;
(statearr_36705_37667[(2)] = null);

(statearr_36705_37667[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (10))){
var inst_36646 = (state_36676[(2)]);
var state_36676__$1 = state_36676;
if(cljs.core.truth_(inst_36646)){
var statearr_36706_37668 = state_36676__$1;
(statearr_36706_37668[(1)] = (11));

} else {
var statearr_36707_37669 = state_36676__$1;
(statearr_36707_37669[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (18))){
var inst_36665 = (state_36676[(2)]);
var state_36676__$1 = state_36676;
var statearr_36711_37670 = state_36676__$1;
(statearr_36711_37670[(2)] = inst_36665);

(statearr_36711_37670[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (8))){
var inst_36641 = (state_36676[(13)]);
var state_36676__$1 = state_36676;
var statearr_36712_37671 = state_36676__$1;
(statearr_36712_37671[(2)] = inst_36641);

(statearr_36712_37671[(1)] = (10));


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
var cljs$core$async$state_machine__34246__auto__ = null;
var cljs$core$async$state_machine__34246__auto____0 = (function (){
var statearr_36713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36713[(0)] = cljs$core$async$state_machine__34246__auto__);

(statearr_36713[(1)] = (1));

return statearr_36713;
});
var cljs$core$async$state_machine__34246__auto____1 = (function (state_36676){
while(true){
var ret_value__34247__auto__ = (function (){try{while(true){
var result__34248__auto__ = switch__34245__auto__(state_36676);
if(cljs.core.keyword_identical_QMARK_(result__34248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34248__auto__;
}
break;
}
}catch (e36714){var ex__34249__auto__ = e36714;
var statearr_36715_37672 = state_36676;
(statearr_36715_37672[(2)] = ex__34249__auto__);


if(cljs.core.seq((state_36676[(4)]))){
var statearr_36716_37673 = state_36676;
(statearr_36716_37673[(1)] = cljs.core.first((state_36676[(4)])));

} else {
throw ex__34249__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37674 = state_36676;
state_36676 = G__37674;
continue;
} else {
return ret_value__34247__auto__;
}
break;
}
});
cljs$core$async$state_machine__34246__auto__ = function(state_36676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34246__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34246__auto____1.call(this,state_36676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34246__auto____0;
cljs$core$async$state_machine__34246__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34246__auto____1;
return cljs$core$async$state_machine__34246__auto__;
})()
})();
var state__34477__auto__ = (function (){var statearr_36717 = f__34476__auto__();
(statearr_36717[(6)] = c__34475__auto___37637);

return statearr_36717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34477__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
