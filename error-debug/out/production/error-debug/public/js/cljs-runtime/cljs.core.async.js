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
cljs.core.async.t_cljs$core$async33019 = (function (f,blockable,meta33020){
this.f = f;
this.blockable = blockable;
this.meta33020 = meta33020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33021,meta33020__$1){
var self__ = this;
var _33021__$1 = this;
return (new cljs.core.async.t_cljs$core$async33019(self__.f,self__.blockable,meta33020__$1));
}));

(cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33021){
var self__ = this;
var _33021__$1 = this;
return self__.meta33020;
}));

(cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33020","meta33020",971271479,null)], null);
}));

(cljs.core.async.t_cljs$core$async33019.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33019");

(cljs.core.async.t_cljs$core$async33019.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33019");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33019.
 */
cljs.core.async.__GT_t_cljs$core$async33019 = (function cljs$core$async$__GT_t_cljs$core$async33019(f,blockable,meta33020){
return (new cljs.core.async.t_cljs$core$async33019(f,blockable,meta33020));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33018 = arguments.length;
switch (G__33018) {
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
return (new cljs.core.async.t_cljs$core$async33019(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33028 = arguments.length;
switch (G__33028) {
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
var G__33034 = arguments.length;
switch (G__33034) {
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
var G__33038 = arguments.length;
switch (G__33038) {
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
var val_35272 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35272) : fn1.call(null,val_35272));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35272) : fn1.call(null,val_35272));
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
var G__33042 = arguments.length;
switch (G__33042) {
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
var temp__5814__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5814__auto__)){
var ret = temp__5814__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5814__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5814__auto__)){
var retb = temp__5814__auto__;
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
var n__5636__auto___35274 = n;
var x_35275 = (0);
while(true){
if((x_35275 < n__5636__auto___35274)){
(a[x_35275] = x_35275);

var G__35276 = (x_35275 + (1));
x_35275 = G__35276;
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
cljs.core.async.t_cljs$core$async33078 = (function (flag,meta33079){
this.flag = flag;
this.meta33079 = meta33079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33080,meta33079__$1){
var self__ = this;
var _33080__$1 = this;
return (new cljs.core.async.t_cljs$core$async33078(self__.flag,meta33079__$1));
}));

(cljs.core.async.t_cljs$core$async33078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33080){
var self__ = this;
var _33080__$1 = this;
return self__.meta33079;
}));

(cljs.core.async.t_cljs$core$async33078.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33078.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33078.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33078.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33078.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33079","meta33079",928512381,null)], null);
}));

(cljs.core.async.t_cljs$core$async33078.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33078.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33078");

(cljs.core.async.t_cljs$core$async33078.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33078");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33078.
 */
cljs.core.async.__GT_t_cljs$core$async33078 = (function cljs$core$async$__GT_t_cljs$core$async33078(flag,meta33079){
return (new cljs.core.async.t_cljs$core$async33078(flag,meta33079));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async33078(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33101 = (function (flag,cb,meta33102){
this.flag = flag;
this.cb = cb;
this.meta33102 = meta33102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33103,meta33102__$1){
var self__ = this;
var _33103__$1 = this;
return (new cljs.core.async.t_cljs$core$async33101(self__.flag,self__.cb,meta33102__$1));
}));

(cljs.core.async.t_cljs$core$async33101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33103){
var self__ = this;
var _33103__$1 = this;
return self__.meta33102;
}));

(cljs.core.async.t_cljs$core$async33101.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33101.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33101.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33101.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33101.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33102","meta33102",1701655999,null)], null);
}));

(cljs.core.async.t_cljs$core$async33101.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33101");

(cljs.core.async.t_cljs$core$async33101.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33101");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33101.
 */
cljs.core.async.__GT_t_cljs$core$async33101 = (function cljs$core$async$__GT_t_cljs$core$async33101(flag,cb,meta33102){
return (new cljs.core.async.t_cljs$core$async33101(flag,cb,meta33102));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async33101(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33104_SHARP_){
var G__33113 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33104_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33113) : fret.call(null,G__33113));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33105_SHARP_){
var G__33114 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33105_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33114) : fret.call(null,G__33114));
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
var G__35277 = (i + (1));
i = G__35277;
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
var temp__5816__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5816__auto__)){
var got = temp__5816__auto__;
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
var len__5769__auto___35278 = arguments.length;
var i__5770__auto___35279 = (0);
while(true){
if((i__5770__auto___35279 < len__5769__auto___35278)){
args__5775__auto__.push((arguments[i__5770__auto___35279]));

var G__35280 = (i__5770__auto___35279 + (1));
i__5770__auto___35279 = G__35280;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33122){
var map__33123 = p__33122;
var map__33123__$1 = cljs.core.__destructure_map(map__33123);
var opts = map__33123__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33119){
var G__33120 = cljs.core.first(seq33119);
var seq33119__$1 = cljs.core.next(seq33119);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33120,seq33119__$1);
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
var G__33134 = arguments.length;
switch (G__33134) {
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
var c__32949__auto___35284 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32950__auto__ = (function (){var switch__32811__auto__ = (function (state_33184){
var state_val_33185 = (state_33184[(1)]);
if((state_val_33185 === (7))){
var inst_33180 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
var statearr_33220_35285 = state_33184__$1;
(statearr_33220_35285[(2)] = inst_33180);

(statearr_33220_35285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (1))){
var state_33184__$1 = state_33184;
var statearr_33233_35286 = state_33184__$1;
(statearr_33233_35286[(2)] = null);

(statearr_33233_35286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (4))){
var inst_33160 = (state_33184[(7)]);
var inst_33160__$1 = (state_33184[(2)]);
var inst_33162 = (inst_33160__$1 == null);
var state_33184__$1 = (function (){var statearr_33245 = state_33184;
(statearr_33245[(7)] = inst_33160__$1);

return statearr_33245;
})();
if(cljs.core.truth_(inst_33162)){
var statearr_33256_35287 = state_33184__$1;
(statearr_33256_35287[(1)] = (5));

} else {
var statearr_33257_35288 = state_33184__$1;
(statearr_33257_35288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (13))){
var state_33184__$1 = state_33184;
var statearr_33262_35289 = state_33184__$1;
(statearr_33262_35289[(2)] = null);

(statearr_33262_35289[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (6))){
var inst_33160 = (state_33184[(7)]);
var state_33184__$1 = state_33184;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33184__$1,(11),to,inst_33160);
} else {
if((state_val_33185 === (3))){
var inst_33182 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33184__$1,inst_33182);
} else {
if((state_val_33185 === (12))){
var state_33184__$1 = state_33184;
var statearr_33264_35290 = state_33184__$1;
(statearr_33264_35290[(2)] = null);

(statearr_33264_35290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (2))){
var state_33184__$1 = state_33184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33184__$1,(4),from);
} else {
if((state_val_33185 === (11))){
var inst_33173 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
if(cljs.core.truth_(inst_33173)){
var statearr_33272_35291 = state_33184__$1;
(statearr_33272_35291[(1)] = (12));

} else {
var statearr_33273_35292 = state_33184__$1;
(statearr_33273_35292[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (9))){
var state_33184__$1 = state_33184;
var statearr_33274_35293 = state_33184__$1;
(statearr_33274_35293[(2)] = null);

(statearr_33274_35293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (5))){
var state_33184__$1 = state_33184;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33275_35294 = state_33184__$1;
(statearr_33275_35294[(1)] = (8));

} else {
var statearr_33276_35295 = state_33184__$1;
(statearr_33276_35295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (14))){
var inst_33178 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
var statearr_33277_35296 = state_33184__$1;
(statearr_33277_35296[(2)] = inst_33178);

(statearr_33277_35296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (10))){
var inst_33170 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
var statearr_33278_35297 = state_33184__$1;
(statearr_33278_35297[(2)] = inst_33170);

(statearr_33278_35297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (8))){
var inst_33165 = cljs.core.async.close_BANG_(to);
var state_33184__$1 = state_33184;
var statearr_33279_35298 = state_33184__$1;
(statearr_33279_35298[(2)] = inst_33165);

(statearr_33279_35298[(1)] = (10));


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
var cljs$core$async$state_machine__32812__auto__ = null;
var cljs$core$async$state_machine__32812__auto____0 = (function (){
var statearr_33293 = [null,null,null,null,null,null,null,null];
(statearr_33293[(0)] = cljs$core$async$state_machine__32812__auto__);

(statearr_33293[(1)] = (1));

return statearr_33293;
});
var cljs$core$async$state_machine__32812__auto____1 = (function (state_33184){
while(true){
var ret_value__32813__auto__ = (function (){try{while(true){
var result__32814__auto__ = switch__32811__auto__(state_33184);
if(cljs.core.keyword_identical_QMARK_(result__32814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32814__auto__;
}
break;
}
}catch (e33295){var ex__32815__auto__ = e33295;
var statearr_33296_35301 = state_33184;
(statearr_33296_35301[(2)] = ex__32815__auto__);


if(cljs.core.seq((state_33184[(4)]))){
var statearr_33297_35302 = state_33184;
(statearr_33297_35302[(1)] = cljs.core.first((state_33184[(4)])));

} else {
throw ex__32815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35303 = state_33184;
state_33184 = G__35303;
continue;
} else {
return ret_value__32813__auto__;
}
break;
}
});
cljs$core$async$state_machine__32812__auto__ = function(state_33184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32812__auto____1.call(this,state_33184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32812__auto____0;
cljs$core$async$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32812__auto____1;
return cljs$core$async$state_machine__32812__auto__;
})()
})();
var state__32951__auto__ = (function (){var statearr_33299 = f__32950__auto__();
(statearr_33299[(6)] = c__32949__auto___35284);

return statearr_33299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32951__auto__);
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
var process__$1 = (function (p__33304){
var vec__33305 = p__33304;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33305,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33305,(1),null);
var job = vec__33305;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32949__auto___35305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32950__auto__ = (function (){var switch__32811__auto__ = (function (state_33316){
var state_val_33317 = (state_33316[(1)]);
if((state_val_33317 === (1))){
var state_33316__$1 = state_33316;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33316__$1,(2),res,v);
} else {
if((state_val_33317 === (2))){
var inst_33313 = (state_33316[(2)]);
var inst_33314 = cljs.core.async.close_BANG_(res);
var state_33316__$1 = (function (){var statearr_33338 = state_33316;
(statearr_33338[(7)] = inst_33313);

return statearr_33338;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33316__$1,inst_33314);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____0 = (function (){
var statearr_33339 = [null,null,null,null,null,null,null,null];
(statearr_33339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__);

(statearr_33339[(1)] = (1));

return statearr_33339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____1 = (function (state_33316){
while(true){
var ret_value__32813__auto__ = (function (){try{while(true){
var result__32814__auto__ = switch__32811__auto__(state_33316);
if(cljs.core.keyword_identical_QMARK_(result__32814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32814__auto__;
}
break;
}
}catch (e33340){var ex__32815__auto__ = e33340;
var statearr_33341_35319 = state_33316;
(statearr_33341_35319[(2)] = ex__32815__auto__);


if(cljs.core.seq((state_33316[(4)]))){
var statearr_33342_35320 = state_33316;
(statearr_33342_35320[(1)] = cljs.core.first((state_33316[(4)])));

} else {
throw ex__32815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35322 = state_33316;
state_33316 = G__35322;
continue;
} else {
return ret_value__32813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__ = function(state_33316){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____1.call(this,state_33316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__;
})()
})();
var state__32951__auto__ = (function (){var statearr_33344 = f__32950__auto__();
(statearr_33344[(6)] = c__32949__auto___35305);

return statearr_33344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32951__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33347){
var vec__33348 = p__33347;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33348,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33348,(1),null);
var job = vec__33348;
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
var n__5636__auto___35324 = n;
var __35325 = (0);
while(true){
if((__35325 < n__5636__auto___35324)){
var G__33352_35326 = type;
var G__33352_35327__$1 = (((G__33352_35326 instanceof cljs.core.Keyword))?G__33352_35326.fqn:null);
switch (G__33352_35327__$1) {
case "compute":
var c__32949__auto___35329 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35325,c__32949__auto___35329,G__33352_35326,G__33352_35327__$1,n__5636__auto___35324,jobs,results,process__$1,async){
return (function (){
var f__32950__auto__ = (function (){var switch__32811__auto__ = ((function (__35325,c__32949__auto___35329,G__33352_35326,G__33352_35327__$1,n__5636__auto___35324,jobs,results,process__$1,async){
return (function (state_33365){
var state_val_33366 = (state_33365[(1)]);
if((state_val_33366 === (1))){
var state_33365__$1 = state_33365;
var statearr_33368_35331 = state_33365__$1;
(statearr_33368_35331[(2)] = null);

(statearr_33368_35331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (2))){
var state_33365__$1 = state_33365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33365__$1,(4),jobs);
} else {
if((state_val_33366 === (3))){
var inst_33363 = (state_33365[(2)]);
var state_33365__$1 = state_33365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33365__$1,inst_33363);
} else {
if((state_val_33366 === (4))){
var inst_33355 = (state_33365[(2)]);
var inst_33356 = process__$1(inst_33355);
var state_33365__$1 = state_33365;
if(cljs.core.truth_(inst_33356)){
var statearr_33389_35333 = state_33365__$1;
(statearr_33389_35333[(1)] = (5));

} else {
var statearr_33390_35334 = state_33365__$1;
(statearr_33390_35334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (5))){
var state_33365__$1 = state_33365;
var statearr_33391_35335 = state_33365__$1;
(statearr_33391_35335[(2)] = null);

(statearr_33391_35335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (6))){
var state_33365__$1 = state_33365;
var statearr_33392_35336 = state_33365__$1;
(statearr_33392_35336[(2)] = null);

(statearr_33392_35336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (7))){
var inst_33361 = (state_33365[(2)]);
var state_33365__$1 = state_33365;
var statearr_33394_35337 = state_33365__$1;
(statearr_33394_35337[(2)] = inst_33361);

(statearr_33394_35337[(1)] = (3));


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
});})(__35325,c__32949__auto___35329,G__33352_35326,G__33352_35327__$1,n__5636__auto___35324,jobs,results,process__$1,async))
;
return ((function (__35325,switch__32811__auto__,c__32949__auto___35329,G__33352_35326,G__33352_35327__$1,n__5636__auto___35324,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____0 = (function (){
var statearr_33395 = [null,null,null,null,null,null,null];
(statearr_33395[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__);

(statearr_33395[(1)] = (1));

return statearr_33395;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____1 = (function (state_33365){
while(true){
var ret_value__32813__auto__ = (function (){try{while(true){
var result__32814__auto__ = switch__32811__auto__(state_33365);
if(cljs.core.keyword_identical_QMARK_(result__32814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32814__auto__;
}
break;
}
}catch (e33396){var ex__32815__auto__ = e33396;
var statearr_33397_35339 = state_33365;
(statearr_33397_35339[(2)] = ex__32815__auto__);


if(cljs.core.seq((state_33365[(4)]))){
var statearr_33398_35340 = state_33365;
(statearr_33398_35340[(1)] = cljs.core.first((state_33365[(4)])));

} else {
throw ex__32815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35342 = state_33365;
state_33365 = G__35342;
continue;
} else {
return ret_value__32813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__ = function(state_33365){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____1.call(this,state_33365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__;
})()
;})(__35325,switch__32811__auto__,c__32949__auto___35329,G__33352_35326,G__33352_35327__$1,n__5636__auto___35324,jobs,results,process__$1,async))
})();
var state__32951__auto__ = (function (){var statearr_33399 = f__32950__auto__();
(statearr_33399[(6)] = c__32949__auto___35329);

return statearr_33399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32951__auto__);
});})(__35325,c__32949__auto___35329,G__33352_35326,G__33352_35327__$1,n__5636__auto___35324,jobs,results,process__$1,async))
);


break;
case "async":
var c__32949__auto___35343 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35325,c__32949__auto___35343,G__33352_35326,G__33352_35327__$1,n__5636__auto___35324,jobs,results,process__$1,async){
return (function (){
var f__32950__auto__ = (function (){var switch__32811__auto__ = ((function (__35325,c__32949__auto___35343,G__33352_35326,G__33352_35327__$1,n__5636__auto___35324,jobs,results,process__$1,async){
return (function (state_33413){
var state_val_33414 = (state_33413[(1)]);
if((state_val_33414 === (1))){
var state_33413__$1 = state_33413;
var statearr_33415_35344 = state_33413__$1;
(statearr_33415_35344[(2)] = null);

(statearr_33415_35344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33414 === (2))){
var state_33413__$1 = state_33413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33413__$1,(4),jobs);
} else {
if((state_val_33414 === (3))){
var inst_33411 = (state_33413[(2)]);
var state_33413__$1 = state_33413;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33413__$1,inst_33411);
} else {
if((state_val_33414 === (4))){
var inst_33403 = (state_33413[(2)]);
var inst_33404 = async(inst_33403);
var state_33413__$1 = state_33413;
if(cljs.core.truth_(inst_33404)){
var statearr_33416_35345 = state_33413__$1;
(statearr_33416_35345[(1)] = (5));

} else {
var statearr_33418_35346 = state_33413__$1;
(statearr_33418_35346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33414 === (5))){
var state_33413__$1 = state_33413;
var statearr_33419_35347 = state_33413__$1;
(statearr_33419_35347[(2)] = null);

(statearr_33419_35347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33414 === (6))){
var state_33413__$1 = state_33413;
var statearr_33420_35348 = state_33413__$1;
(statearr_33420_35348[(2)] = null);

(statearr_33420_35348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33414 === (7))){
var inst_33409 = (state_33413[(2)]);
var state_33413__$1 = state_33413;
var statearr_33421_35349 = state_33413__$1;
(statearr_33421_35349[(2)] = inst_33409);

(statearr_33421_35349[(1)] = (3));


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
});})(__35325,c__32949__auto___35343,G__33352_35326,G__33352_35327__$1,n__5636__auto___35324,jobs,results,process__$1,async))
;
return ((function (__35325,switch__32811__auto__,c__32949__auto___35343,G__33352_35326,G__33352_35327__$1,n__5636__auto___35324,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____0 = (function (){
var statearr_33422 = [null,null,null,null,null,null,null];
(statearr_33422[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__);

(statearr_33422[(1)] = (1));

return statearr_33422;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____1 = (function (state_33413){
while(true){
var ret_value__32813__auto__ = (function (){try{while(true){
var result__32814__auto__ = switch__32811__auto__(state_33413);
if(cljs.core.keyword_identical_QMARK_(result__32814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32814__auto__;
}
break;
}
}catch (e33423){var ex__32815__auto__ = e33423;
var statearr_33424_35351 = state_33413;
(statearr_33424_35351[(2)] = ex__32815__auto__);


if(cljs.core.seq((state_33413[(4)]))){
var statearr_33425_35353 = state_33413;
(statearr_33425_35353[(1)] = cljs.core.first((state_33413[(4)])));

} else {
throw ex__32815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35354 = state_33413;
state_33413 = G__35354;
continue;
} else {
return ret_value__32813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__ = function(state_33413){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____1.call(this,state_33413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__;
})()
;})(__35325,switch__32811__auto__,c__32949__auto___35343,G__33352_35326,G__33352_35327__$1,n__5636__auto___35324,jobs,results,process__$1,async))
})();
var state__32951__auto__ = (function (){var statearr_33427 = f__32950__auto__();
(statearr_33427[(6)] = c__32949__auto___35343);

return statearr_33427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32951__auto__);
});})(__35325,c__32949__auto___35343,G__33352_35326,G__33352_35327__$1,n__5636__auto___35324,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33352_35327__$1)].join('')));

}

var G__35355 = (__35325 + (1));
__35325 = G__35355;
continue;
} else {
}
break;
}

var c__32949__auto___35356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32950__auto__ = (function (){var switch__32811__auto__ = (function (state_33449){
var state_val_33450 = (state_33449[(1)]);
if((state_val_33450 === (7))){
var inst_33445 = (state_33449[(2)]);
var state_33449__$1 = state_33449;
var statearr_33452_35357 = state_33449__$1;
(statearr_33452_35357[(2)] = inst_33445);

(statearr_33452_35357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (1))){
var state_33449__$1 = state_33449;
var statearr_33453_35358 = state_33449__$1;
(statearr_33453_35358[(2)] = null);

(statearr_33453_35358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (4))){
var inst_33430 = (state_33449[(7)]);
var inst_33430__$1 = (state_33449[(2)]);
var inst_33431 = (inst_33430__$1 == null);
var state_33449__$1 = (function (){var statearr_33454 = state_33449;
(statearr_33454[(7)] = inst_33430__$1);

return statearr_33454;
})();
if(cljs.core.truth_(inst_33431)){
var statearr_33456_35359 = state_33449__$1;
(statearr_33456_35359[(1)] = (5));

} else {
var statearr_33457_35360 = state_33449__$1;
(statearr_33457_35360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (6))){
var inst_33430 = (state_33449[(7)]);
var inst_33435 = (state_33449[(8)]);
var inst_33435__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33436 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33437 = [inst_33430,inst_33435__$1];
var inst_33438 = (new cljs.core.PersistentVector(null,2,(5),inst_33436,inst_33437,null));
var state_33449__$1 = (function (){var statearr_33458 = state_33449;
(statearr_33458[(8)] = inst_33435__$1);

return statearr_33458;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33449__$1,(8),jobs,inst_33438);
} else {
if((state_val_33450 === (3))){
var inst_33447 = (state_33449[(2)]);
var state_33449__$1 = state_33449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33449__$1,inst_33447);
} else {
if((state_val_33450 === (2))){
var state_33449__$1 = state_33449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33449__$1,(4),from);
} else {
if((state_val_33450 === (9))){
var inst_33442 = (state_33449[(2)]);
var state_33449__$1 = (function (){var statearr_33459 = state_33449;
(statearr_33459[(9)] = inst_33442);

return statearr_33459;
})();
var statearr_33460_35361 = state_33449__$1;
(statearr_33460_35361[(2)] = null);

(statearr_33460_35361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (5))){
var inst_33433 = cljs.core.async.close_BANG_(jobs);
var state_33449__$1 = state_33449;
var statearr_33461_35362 = state_33449__$1;
(statearr_33461_35362[(2)] = inst_33433);

(statearr_33461_35362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (8))){
var inst_33435 = (state_33449[(8)]);
var inst_33440 = (state_33449[(2)]);
var state_33449__$1 = (function (){var statearr_33463 = state_33449;
(statearr_33463[(10)] = inst_33440);

return statearr_33463;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33449__$1,(9),results,inst_33435);
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
var cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____0 = (function (){
var statearr_33464 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33464[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__);

(statearr_33464[(1)] = (1));

return statearr_33464;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____1 = (function (state_33449){
while(true){
var ret_value__32813__auto__ = (function (){try{while(true){
var result__32814__auto__ = switch__32811__auto__(state_33449);
if(cljs.core.keyword_identical_QMARK_(result__32814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32814__auto__;
}
break;
}
}catch (e33465){var ex__32815__auto__ = e33465;
var statearr_33466_35363 = state_33449;
(statearr_33466_35363[(2)] = ex__32815__auto__);


if(cljs.core.seq((state_33449[(4)]))){
var statearr_33467_35364 = state_33449;
(statearr_33467_35364[(1)] = cljs.core.first((state_33449[(4)])));

} else {
throw ex__32815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35368 = state_33449;
state_33449 = G__35368;
continue;
} else {
return ret_value__32813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__ = function(state_33449){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____1.call(this,state_33449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__;
})()
})();
var state__32951__auto__ = (function (){var statearr_33468 = f__32950__auto__();
(statearr_33468[(6)] = c__32949__auto___35356);

return statearr_33468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32951__auto__);
}));


var c__32949__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32950__auto__ = (function (){var switch__32811__auto__ = (function (state_33507){
var state_val_33508 = (state_33507[(1)]);
if((state_val_33508 === (7))){
var inst_33503 = (state_33507[(2)]);
var state_33507__$1 = state_33507;
var statearr_33509_35370 = state_33507__$1;
(statearr_33509_35370[(2)] = inst_33503);

(statearr_33509_35370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (20))){
var state_33507__$1 = state_33507;
var statearr_33510_35371 = state_33507__$1;
(statearr_33510_35371[(2)] = null);

(statearr_33510_35371[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (1))){
var state_33507__$1 = state_33507;
var statearr_33511_35372 = state_33507__$1;
(statearr_33511_35372[(2)] = null);

(statearr_33511_35372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (4))){
var inst_33471 = (state_33507[(7)]);
var inst_33471__$1 = (state_33507[(2)]);
var inst_33472 = (inst_33471__$1 == null);
var state_33507__$1 = (function (){var statearr_33512 = state_33507;
(statearr_33512[(7)] = inst_33471__$1);

return statearr_33512;
})();
if(cljs.core.truth_(inst_33472)){
var statearr_33513_35373 = state_33507__$1;
(statearr_33513_35373[(1)] = (5));

} else {
var statearr_33514_35374 = state_33507__$1;
(statearr_33514_35374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (15))){
var inst_33484 = (state_33507[(8)]);
var state_33507__$1 = state_33507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33507__$1,(18),to,inst_33484);
} else {
if((state_val_33508 === (21))){
var inst_33497 = (state_33507[(2)]);
var state_33507__$1 = state_33507;
var statearr_33516_35376 = state_33507__$1;
(statearr_33516_35376[(2)] = inst_33497);

(statearr_33516_35376[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (13))){
var inst_33500 = (state_33507[(2)]);
var state_33507__$1 = (function (){var statearr_33517 = state_33507;
(statearr_33517[(9)] = inst_33500);

return statearr_33517;
})();
var statearr_33518_35377 = state_33507__$1;
(statearr_33518_35377[(2)] = null);

(statearr_33518_35377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (6))){
var inst_33471 = (state_33507[(7)]);
var state_33507__$1 = state_33507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33507__$1,(11),inst_33471);
} else {
if((state_val_33508 === (17))){
var inst_33492 = (state_33507[(2)]);
var state_33507__$1 = state_33507;
if(cljs.core.truth_(inst_33492)){
var statearr_33519_35378 = state_33507__$1;
(statearr_33519_35378[(1)] = (19));

} else {
var statearr_33520_35379 = state_33507__$1;
(statearr_33520_35379[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (3))){
var inst_33505 = (state_33507[(2)]);
var state_33507__$1 = state_33507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33507__$1,inst_33505);
} else {
if((state_val_33508 === (12))){
var inst_33481 = (state_33507[(10)]);
var state_33507__$1 = state_33507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33507__$1,(14),inst_33481);
} else {
if((state_val_33508 === (2))){
var state_33507__$1 = state_33507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33507__$1,(4),results);
} else {
if((state_val_33508 === (19))){
var state_33507__$1 = state_33507;
var statearr_33521_35380 = state_33507__$1;
(statearr_33521_35380[(2)] = null);

(statearr_33521_35380[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (11))){
var inst_33481 = (state_33507[(2)]);
var state_33507__$1 = (function (){var statearr_33523 = state_33507;
(statearr_33523[(10)] = inst_33481);

return statearr_33523;
})();
var statearr_33524_35381 = state_33507__$1;
(statearr_33524_35381[(2)] = null);

(statearr_33524_35381[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (9))){
var state_33507__$1 = state_33507;
var statearr_33525_35382 = state_33507__$1;
(statearr_33525_35382[(2)] = null);

(statearr_33525_35382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (5))){
var state_33507__$1 = state_33507;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33526_35383 = state_33507__$1;
(statearr_33526_35383[(1)] = (8));

} else {
var statearr_33527_35384 = state_33507__$1;
(statearr_33527_35384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (14))){
var inst_33486 = (state_33507[(11)]);
var inst_33484 = (state_33507[(8)]);
var inst_33484__$1 = (state_33507[(2)]);
var inst_33485 = (inst_33484__$1 == null);
var inst_33486__$1 = cljs.core.not(inst_33485);
var state_33507__$1 = (function (){var statearr_33528 = state_33507;
(statearr_33528[(11)] = inst_33486__$1);

(statearr_33528[(8)] = inst_33484__$1);

return statearr_33528;
})();
if(inst_33486__$1){
var statearr_33529_35385 = state_33507__$1;
(statearr_33529_35385[(1)] = (15));

} else {
var statearr_33530_35386 = state_33507__$1;
(statearr_33530_35386[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (16))){
var inst_33486 = (state_33507[(11)]);
var state_33507__$1 = state_33507;
var statearr_33532_35396 = state_33507__$1;
(statearr_33532_35396[(2)] = inst_33486);

(statearr_33532_35396[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (10))){
var inst_33478 = (state_33507[(2)]);
var state_33507__$1 = state_33507;
var statearr_33533_35397 = state_33507__$1;
(statearr_33533_35397[(2)] = inst_33478);

(statearr_33533_35397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (18))){
var inst_33489 = (state_33507[(2)]);
var state_33507__$1 = state_33507;
var statearr_33534_35398 = state_33507__$1;
(statearr_33534_35398[(2)] = inst_33489);

(statearr_33534_35398[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33508 === (8))){
var inst_33475 = cljs.core.async.close_BANG_(to);
var state_33507__$1 = state_33507;
var statearr_33535_35400 = state_33507__$1;
(statearr_33535_35400[(2)] = inst_33475);

(statearr_33535_35400[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____0 = (function (){
var statearr_33536 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33536[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__);

(statearr_33536[(1)] = (1));

return statearr_33536;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____1 = (function (state_33507){
while(true){
var ret_value__32813__auto__ = (function (){try{while(true){
var result__32814__auto__ = switch__32811__auto__(state_33507);
if(cljs.core.keyword_identical_QMARK_(result__32814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32814__auto__;
}
break;
}
}catch (e33537){var ex__32815__auto__ = e33537;
var statearr_33538_35402 = state_33507;
(statearr_33538_35402[(2)] = ex__32815__auto__);


if(cljs.core.seq((state_33507[(4)]))){
var statearr_33540_35403 = state_33507;
(statearr_33540_35403[(1)] = cljs.core.first((state_33507[(4)])));

} else {
throw ex__32815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35404 = state_33507;
state_33507 = G__35404;
continue;
} else {
return ret_value__32813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__ = function(state_33507){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____1.call(this,state_33507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32812__auto__;
})()
})();
var state__32951__auto__ = (function (){var statearr_33542 = f__32950__auto__();
(statearr_33542[(6)] = c__32949__auto__);

return statearr_33542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32951__auto__);
}));

return c__32949__auto__;
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
var G__33544 = arguments.length;
switch (G__33544) {
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
var G__33547 = arguments.length;
switch (G__33547) {
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
var G__33550 = arguments.length;
switch (G__33550) {
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
var c__32949__auto___35410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32950__auto__ = (function (){var switch__32811__auto__ = (function (state_33577){
var state_val_33578 = (state_33577[(1)]);
if((state_val_33578 === (7))){
var inst_33572 = (state_33577[(2)]);
var state_33577__$1 = state_33577;
var statearr_33579_35411 = state_33577__$1;
(statearr_33579_35411[(2)] = inst_33572);

(statearr_33579_35411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (1))){
var state_33577__$1 = state_33577;
var statearr_33580_35412 = state_33577__$1;
(statearr_33580_35412[(2)] = null);

(statearr_33580_35412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (4))){
var inst_33553 = (state_33577[(7)]);
var inst_33553__$1 = (state_33577[(2)]);
var inst_33554 = (inst_33553__$1 == null);
var state_33577__$1 = (function (){var statearr_33581 = state_33577;
(statearr_33581[(7)] = inst_33553__$1);

return statearr_33581;
})();
if(cljs.core.truth_(inst_33554)){
var statearr_33582_35417 = state_33577__$1;
(statearr_33582_35417[(1)] = (5));

} else {
var statearr_33583_35418 = state_33577__$1;
(statearr_33583_35418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (13))){
var state_33577__$1 = state_33577;
var statearr_33585_35419 = state_33577__$1;
(statearr_33585_35419[(2)] = null);

(statearr_33585_35419[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (6))){
var inst_33553 = (state_33577[(7)]);
var inst_33559 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33553) : p.call(null,inst_33553));
var state_33577__$1 = state_33577;
if(cljs.core.truth_(inst_33559)){
var statearr_33586_35420 = state_33577__$1;
(statearr_33586_35420[(1)] = (9));

} else {
var statearr_33587_35421 = state_33577__$1;
(statearr_33587_35421[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (3))){
var inst_33574 = (state_33577[(2)]);
var state_33577__$1 = state_33577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33577__$1,inst_33574);
} else {
if((state_val_33578 === (12))){
var state_33577__$1 = state_33577;
var statearr_33588_35422 = state_33577__$1;
(statearr_33588_35422[(2)] = null);

(statearr_33588_35422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (2))){
var state_33577__$1 = state_33577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33577__$1,(4),ch);
} else {
if((state_val_33578 === (11))){
var inst_33553 = (state_33577[(7)]);
var inst_33563 = (state_33577[(2)]);
var state_33577__$1 = state_33577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33577__$1,(8),inst_33563,inst_33553);
} else {
if((state_val_33578 === (9))){
var state_33577__$1 = state_33577;
var statearr_33589_35423 = state_33577__$1;
(statearr_33589_35423[(2)] = tc);

(statearr_33589_35423[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (5))){
var inst_33556 = cljs.core.async.close_BANG_(tc);
var inst_33557 = cljs.core.async.close_BANG_(fc);
var state_33577__$1 = (function (){var statearr_33591 = state_33577;
(statearr_33591[(8)] = inst_33556);

return statearr_33591;
})();
var statearr_33592_35424 = state_33577__$1;
(statearr_33592_35424[(2)] = inst_33557);

(statearr_33592_35424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (14))){
var inst_33570 = (state_33577[(2)]);
var state_33577__$1 = state_33577;
var statearr_33593_35425 = state_33577__$1;
(statearr_33593_35425[(2)] = inst_33570);

(statearr_33593_35425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (10))){
var state_33577__$1 = state_33577;
var statearr_33594_35426 = state_33577__$1;
(statearr_33594_35426[(2)] = fc);

(statearr_33594_35426[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (8))){
var inst_33565 = (state_33577[(2)]);
var state_33577__$1 = state_33577;
if(cljs.core.truth_(inst_33565)){
var statearr_33595_35429 = state_33577__$1;
(statearr_33595_35429[(1)] = (12));

} else {
var statearr_33596_35430 = state_33577__$1;
(statearr_33596_35430[(1)] = (13));

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
var cljs$core$async$state_machine__32812__auto__ = null;
var cljs$core$async$state_machine__32812__auto____0 = (function (){
var statearr_33597 = [null,null,null,null,null,null,null,null,null];
(statearr_33597[(0)] = cljs$core$async$state_machine__32812__auto__);

(statearr_33597[(1)] = (1));

return statearr_33597;
});
var cljs$core$async$state_machine__32812__auto____1 = (function (state_33577){
while(true){
var ret_value__32813__auto__ = (function (){try{while(true){
var result__32814__auto__ = switch__32811__auto__(state_33577);
if(cljs.core.keyword_identical_QMARK_(result__32814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32814__auto__;
}
break;
}
}catch (e33598){var ex__32815__auto__ = e33598;
var statearr_33599_35431 = state_33577;
(statearr_33599_35431[(2)] = ex__32815__auto__);


if(cljs.core.seq((state_33577[(4)]))){
var statearr_33600_35432 = state_33577;
(statearr_33600_35432[(1)] = cljs.core.first((state_33577[(4)])));

} else {
throw ex__32815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35433 = state_33577;
state_33577 = G__35433;
continue;
} else {
return ret_value__32813__auto__;
}
break;
}
});
cljs$core$async$state_machine__32812__auto__ = function(state_33577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32812__auto____1.call(this,state_33577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32812__auto____0;
cljs$core$async$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32812__auto____1;
return cljs$core$async$state_machine__32812__auto__;
})()
})();
var state__32951__auto__ = (function (){var statearr_33602 = f__32950__auto__();
(statearr_33602[(6)] = c__32949__auto___35410);

return statearr_33602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32951__auto__);
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
var c__32949__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32950__auto__ = (function (){var switch__32811__auto__ = (function (state_33625){
var state_val_33626 = (state_33625[(1)]);
if((state_val_33626 === (7))){
var inst_33620 = (state_33625[(2)]);
var state_33625__$1 = state_33625;
var statearr_33627_35434 = state_33625__$1;
(statearr_33627_35434[(2)] = inst_33620);

(statearr_33627_35434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (1))){
var inst_33603 = init;
var inst_33604 = inst_33603;
var state_33625__$1 = (function (){var statearr_33628 = state_33625;
(statearr_33628[(7)] = inst_33604);

return statearr_33628;
})();
var statearr_33629_35436 = state_33625__$1;
(statearr_33629_35436[(2)] = null);

(statearr_33629_35436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (4))){
var inst_33607 = (state_33625[(8)]);
var inst_33607__$1 = (state_33625[(2)]);
var inst_33608 = (inst_33607__$1 == null);
var state_33625__$1 = (function (){var statearr_33630 = state_33625;
(statearr_33630[(8)] = inst_33607__$1);

return statearr_33630;
})();
if(cljs.core.truth_(inst_33608)){
var statearr_33631_35439 = state_33625__$1;
(statearr_33631_35439[(1)] = (5));

} else {
var statearr_33632_35441 = state_33625__$1;
(statearr_33632_35441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (6))){
var inst_33611 = (state_33625[(9)]);
var inst_33604 = (state_33625[(7)]);
var inst_33607 = (state_33625[(8)]);
var inst_33611__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33604,inst_33607) : f.call(null,inst_33604,inst_33607));
var inst_33612 = cljs.core.reduced_QMARK_(inst_33611__$1);
var state_33625__$1 = (function (){var statearr_33633 = state_33625;
(statearr_33633[(9)] = inst_33611__$1);

return statearr_33633;
})();
if(inst_33612){
var statearr_33634_35442 = state_33625__$1;
(statearr_33634_35442[(1)] = (8));

} else {
var statearr_33635_35443 = state_33625__$1;
(statearr_33635_35443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (3))){
var inst_33622 = (state_33625[(2)]);
var state_33625__$1 = state_33625;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33625__$1,inst_33622);
} else {
if((state_val_33626 === (2))){
var state_33625__$1 = state_33625;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33625__$1,(4),ch);
} else {
if((state_val_33626 === (9))){
var inst_33611 = (state_33625[(9)]);
var inst_33604 = inst_33611;
var state_33625__$1 = (function (){var statearr_33636 = state_33625;
(statearr_33636[(7)] = inst_33604);

return statearr_33636;
})();
var statearr_33637_35444 = state_33625__$1;
(statearr_33637_35444[(2)] = null);

(statearr_33637_35444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (5))){
var inst_33604 = (state_33625[(7)]);
var state_33625__$1 = state_33625;
var statearr_33639_35445 = state_33625__$1;
(statearr_33639_35445[(2)] = inst_33604);

(statearr_33639_35445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (10))){
var inst_33618 = (state_33625[(2)]);
var state_33625__$1 = state_33625;
var statearr_33640_35446 = state_33625__$1;
(statearr_33640_35446[(2)] = inst_33618);

(statearr_33640_35446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (8))){
var inst_33611 = (state_33625[(9)]);
var inst_33614 = cljs.core.deref(inst_33611);
var state_33625__$1 = state_33625;
var statearr_33641_35447 = state_33625__$1;
(statearr_33641_35447[(2)] = inst_33614);

(statearr_33641_35447[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__32812__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32812__auto____0 = (function (){
var statearr_33642 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33642[(0)] = cljs$core$async$reduce_$_state_machine__32812__auto__);

(statearr_33642[(1)] = (1));

return statearr_33642;
});
var cljs$core$async$reduce_$_state_machine__32812__auto____1 = (function (state_33625){
while(true){
var ret_value__32813__auto__ = (function (){try{while(true){
var result__32814__auto__ = switch__32811__auto__(state_33625);
if(cljs.core.keyword_identical_QMARK_(result__32814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32814__auto__;
}
break;
}
}catch (e33643){var ex__32815__auto__ = e33643;
var statearr_33644_35448 = state_33625;
(statearr_33644_35448[(2)] = ex__32815__auto__);


if(cljs.core.seq((state_33625[(4)]))){
var statearr_33645_35449 = state_33625;
(statearr_33645_35449[(1)] = cljs.core.first((state_33625[(4)])));

} else {
throw ex__32815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35450 = state_33625;
state_33625 = G__35450;
continue;
} else {
return ret_value__32813__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32812__auto__ = function(state_33625){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32812__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32812__auto____1.call(this,state_33625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32812__auto____0;
cljs$core$async$reduce_$_state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32812__auto____1;
return cljs$core$async$reduce_$_state_machine__32812__auto__;
})()
})();
var state__32951__auto__ = (function (){var statearr_33646 = f__32950__auto__();
(statearr_33646[(6)] = c__32949__auto__);

return statearr_33646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32951__auto__);
}));

return c__32949__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32949__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32950__auto__ = (function (){var switch__32811__auto__ = (function (state_33653){
var state_val_33654 = (state_33653[(1)]);
if((state_val_33654 === (1))){
var inst_33648 = cljs.core.async.reduce(f__$1,init,ch);
var state_33653__$1 = state_33653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33653__$1,(2),inst_33648);
} else {
if((state_val_33654 === (2))){
var inst_33650 = (state_33653[(2)]);
var inst_33651 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33650) : f__$1.call(null,inst_33650));
var state_33653__$1 = state_33653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33653__$1,inst_33651);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32812__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32812__auto____0 = (function (){
var statearr_33656 = [null,null,null,null,null,null,null];
(statearr_33656[(0)] = cljs$core$async$transduce_$_state_machine__32812__auto__);

(statearr_33656[(1)] = (1));

return statearr_33656;
});
var cljs$core$async$transduce_$_state_machine__32812__auto____1 = (function (state_33653){
while(true){
var ret_value__32813__auto__ = (function (){try{while(true){
var result__32814__auto__ = switch__32811__auto__(state_33653);
if(cljs.core.keyword_identical_QMARK_(result__32814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32814__auto__;
}
break;
}
}catch (e33657){var ex__32815__auto__ = e33657;
var statearr_33658_35451 = state_33653;
(statearr_33658_35451[(2)] = ex__32815__auto__);


if(cljs.core.seq((state_33653[(4)]))){
var statearr_33659_35452 = state_33653;
(statearr_33659_35452[(1)] = cljs.core.first((state_33653[(4)])));

} else {
throw ex__32815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35457 = state_33653;
state_33653 = G__35457;
continue;
} else {
return ret_value__32813__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32812__auto__ = function(state_33653){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32812__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32812__auto____1.call(this,state_33653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32812__auto____0;
cljs$core$async$transduce_$_state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32812__auto____1;
return cljs$core$async$transduce_$_state_machine__32812__auto__;
})()
})();
var state__32951__auto__ = (function (){var statearr_33660 = f__32950__auto__();
(statearr_33660[(6)] = c__32949__auto__);

return statearr_33660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32951__auto__);
}));

return c__32949__auto__;
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
var G__33662 = arguments.length;
switch (G__33662) {
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
var c__32949__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32950__auto__ = (function (){var switch__32811__auto__ = (function (state_33688){
var state_val_33689 = (state_33688[(1)]);
if((state_val_33689 === (7))){
var inst_33670 = (state_33688[(2)]);
var state_33688__$1 = state_33688;
var statearr_33690_35470 = state_33688__$1;
(statearr_33690_35470[(2)] = inst_33670);

(statearr_33690_35470[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33689 === (1))){
var inst_33664 = cljs.core.seq(coll);
var inst_33665 = inst_33664;
var state_33688__$1 = (function (){var statearr_33692 = state_33688;
(statearr_33692[(7)] = inst_33665);

return statearr_33692;
})();
var statearr_33693_35471 = state_33688__$1;
(statearr_33693_35471[(2)] = null);

(statearr_33693_35471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33689 === (4))){
var inst_33665 = (state_33688[(7)]);
var inst_33668 = cljs.core.first(inst_33665);
var state_33688__$1 = state_33688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33688__$1,(7),ch,inst_33668);
} else {
if((state_val_33689 === (13))){
var inst_33682 = (state_33688[(2)]);
var state_33688__$1 = state_33688;
var statearr_33694_35484 = state_33688__$1;
(statearr_33694_35484[(2)] = inst_33682);

(statearr_33694_35484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33689 === (6))){
var inst_33673 = (state_33688[(2)]);
var state_33688__$1 = state_33688;
if(cljs.core.truth_(inst_33673)){
var statearr_33695_35485 = state_33688__$1;
(statearr_33695_35485[(1)] = (8));

} else {
var statearr_33696_35489 = state_33688__$1;
(statearr_33696_35489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33689 === (3))){
var inst_33686 = (state_33688[(2)]);
var state_33688__$1 = state_33688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33688__$1,inst_33686);
} else {
if((state_val_33689 === (12))){
var state_33688__$1 = state_33688;
var statearr_33697_35490 = state_33688__$1;
(statearr_33697_35490[(2)] = null);

(statearr_33697_35490[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33689 === (2))){
var inst_33665 = (state_33688[(7)]);
var state_33688__$1 = state_33688;
if(cljs.core.truth_(inst_33665)){
var statearr_33698_35491 = state_33688__$1;
(statearr_33698_35491[(1)] = (4));

} else {
var statearr_33699_35497 = state_33688__$1;
(statearr_33699_35497[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33689 === (11))){
var inst_33679 = cljs.core.async.close_BANG_(ch);
var state_33688__$1 = state_33688;
var statearr_33701_35500 = state_33688__$1;
(statearr_33701_35500[(2)] = inst_33679);

(statearr_33701_35500[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33689 === (9))){
var state_33688__$1 = state_33688;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33702_35501 = state_33688__$1;
(statearr_33702_35501[(1)] = (11));

} else {
var statearr_33703_35502 = state_33688__$1;
(statearr_33703_35502[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33689 === (5))){
var inst_33665 = (state_33688[(7)]);
var state_33688__$1 = state_33688;
var statearr_33704_35503 = state_33688__$1;
(statearr_33704_35503[(2)] = inst_33665);

(statearr_33704_35503[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33689 === (10))){
var inst_33684 = (state_33688[(2)]);
var state_33688__$1 = state_33688;
var statearr_33705_35512 = state_33688__$1;
(statearr_33705_35512[(2)] = inst_33684);

(statearr_33705_35512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33689 === (8))){
var inst_33665 = (state_33688[(7)]);
var inst_33675 = cljs.core.next(inst_33665);
var inst_33665__$1 = inst_33675;
var state_33688__$1 = (function (){var statearr_33706 = state_33688;
(statearr_33706[(7)] = inst_33665__$1);

return statearr_33706;
})();
var statearr_33707_35519 = state_33688__$1;
(statearr_33707_35519[(2)] = null);

(statearr_33707_35519[(1)] = (2));


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
var cljs$core$async$state_machine__32812__auto__ = null;
var cljs$core$async$state_machine__32812__auto____0 = (function (){
var statearr_33708 = [null,null,null,null,null,null,null,null];
(statearr_33708[(0)] = cljs$core$async$state_machine__32812__auto__);

(statearr_33708[(1)] = (1));

return statearr_33708;
});
var cljs$core$async$state_machine__32812__auto____1 = (function (state_33688){
while(true){
var ret_value__32813__auto__ = (function (){try{while(true){
var result__32814__auto__ = switch__32811__auto__(state_33688);
if(cljs.core.keyword_identical_QMARK_(result__32814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32814__auto__;
}
break;
}
}catch (e33710){var ex__32815__auto__ = e33710;
var statearr_33711_35520 = state_33688;
(statearr_33711_35520[(2)] = ex__32815__auto__);


if(cljs.core.seq((state_33688[(4)]))){
var statearr_33712_35521 = state_33688;
(statearr_33712_35521[(1)] = cljs.core.first((state_33688[(4)])));

} else {
throw ex__32815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35523 = state_33688;
state_33688 = G__35523;
continue;
} else {
return ret_value__32813__auto__;
}
break;
}
});
cljs$core$async$state_machine__32812__auto__ = function(state_33688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32812__auto____1.call(this,state_33688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32812__auto____0;
cljs$core$async$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32812__auto____1;
return cljs$core$async$state_machine__32812__auto__;
})()
})();
var state__32951__auto__ = (function (){var statearr_33713 = f__32950__auto__();
(statearr_33713[(6)] = c__32949__auto__);

return statearr_33713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32951__auto__);
}));

return c__32949__auto__;
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
var G__33716 = arguments.length;
switch (G__33716) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_35533 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_35533(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35542 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_35542(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35545 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_35545(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35549 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_35549(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33720 = (function (ch,cs,meta33721){
this.ch = ch;
this.cs = cs;
this.meta33721 = meta33721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33722,meta33721__$1){
var self__ = this;
var _33722__$1 = this;
return (new cljs.core.async.t_cljs$core$async33720(self__.ch,self__.cs,meta33721__$1));
}));

(cljs.core.async.t_cljs$core$async33720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33722){
var self__ = this;
var _33722__$1 = this;
return self__.meta33721;
}));

(cljs.core.async.t_cljs$core$async33720.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33720.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33720.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33720.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33720.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33720.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33720.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33721","meta33721",-2045946964,null)], null);
}));

(cljs.core.async.t_cljs$core$async33720.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33720.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33720");

(cljs.core.async.t_cljs$core$async33720.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33720");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33720.
 */
cljs.core.async.__GT_t_cljs$core$async33720 = (function cljs$core$async$__GT_t_cljs$core$async33720(ch,cs,meta33721){
return (new cljs.core.async.t_cljs$core$async33720(ch,cs,meta33721));
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
var m = (new cljs.core.async.t_cljs$core$async33720(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32949__auto___35552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32950__auto__ = (function (){var switch__32811__auto__ = (function (state_33860){
var state_val_33861 = (state_33860[(1)]);
if((state_val_33861 === (7))){
var inst_33856 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33862_35553 = state_33860__$1;
(statearr_33862_35553[(2)] = inst_33856);

(statearr_33862_35553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (20))){
var inst_33759 = (state_33860[(7)]);
var inst_33771 = cljs.core.first(inst_33759);
var inst_33773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33771,(0),null);
var inst_33774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33771,(1),null);
var state_33860__$1 = (function (){var statearr_33864 = state_33860;
(statearr_33864[(8)] = inst_33773);

return statearr_33864;
})();
if(cljs.core.truth_(inst_33774)){
var statearr_33865_35561 = state_33860__$1;
(statearr_33865_35561[(1)] = (22));

} else {
var statearr_33866_35562 = state_33860__$1;
(statearr_33866_35562[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (27))){
var inst_33802 = (state_33860[(9)]);
var inst_33809 = (state_33860[(10)]);
var inst_33728 = (state_33860[(11)]);
var inst_33804 = (state_33860[(12)]);
var inst_33809__$1 = cljs.core._nth(inst_33802,inst_33804);
var inst_33810 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33809__$1,inst_33728,done);
var state_33860__$1 = (function (){var statearr_33867 = state_33860;
(statearr_33867[(10)] = inst_33809__$1);

return statearr_33867;
})();
if(cljs.core.truth_(inst_33810)){
var statearr_33868_35563 = state_33860__$1;
(statearr_33868_35563[(1)] = (30));

} else {
var statearr_33869_35564 = state_33860__$1;
(statearr_33869_35564[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (1))){
var state_33860__$1 = state_33860;
var statearr_33870_35566 = state_33860__$1;
(statearr_33870_35566[(2)] = null);

(statearr_33870_35566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (24))){
var inst_33759 = (state_33860[(7)]);
var inst_33779 = (state_33860[(2)]);
var inst_33780 = cljs.core.next(inst_33759);
var inst_33737 = inst_33780;
var inst_33738 = null;
var inst_33739 = (0);
var inst_33740 = (0);
var state_33860__$1 = (function (){var statearr_33872 = state_33860;
(statearr_33872[(13)] = inst_33779);

(statearr_33872[(14)] = inst_33738);

(statearr_33872[(15)] = inst_33739);

(statearr_33872[(16)] = inst_33740);

(statearr_33872[(17)] = inst_33737);

return statearr_33872;
})();
var statearr_33873_35567 = state_33860__$1;
(statearr_33873_35567[(2)] = null);

(statearr_33873_35567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (39))){
var state_33860__$1 = state_33860;
var statearr_33877_35568 = state_33860__$1;
(statearr_33877_35568[(2)] = null);

(statearr_33877_35568[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (4))){
var inst_33728 = (state_33860[(11)]);
var inst_33728__$1 = (state_33860[(2)]);
var inst_33729 = (inst_33728__$1 == null);
var state_33860__$1 = (function (){var statearr_33878 = state_33860;
(statearr_33878[(11)] = inst_33728__$1);

return statearr_33878;
})();
if(cljs.core.truth_(inst_33729)){
var statearr_33879_35569 = state_33860__$1;
(statearr_33879_35569[(1)] = (5));

} else {
var statearr_33881_35570 = state_33860__$1;
(statearr_33881_35570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (15))){
var inst_33738 = (state_33860[(14)]);
var inst_33739 = (state_33860[(15)]);
var inst_33740 = (state_33860[(16)]);
var inst_33737 = (state_33860[(17)]);
var inst_33755 = (state_33860[(2)]);
var inst_33756 = (inst_33740 + (1));
var tmp33874 = inst_33738;
var tmp33875 = inst_33739;
var tmp33876 = inst_33737;
var inst_33737__$1 = tmp33876;
var inst_33738__$1 = tmp33874;
var inst_33739__$1 = tmp33875;
var inst_33740__$1 = inst_33756;
var state_33860__$1 = (function (){var statearr_33882 = state_33860;
(statearr_33882[(14)] = inst_33738__$1);

(statearr_33882[(15)] = inst_33739__$1);

(statearr_33882[(16)] = inst_33740__$1);

(statearr_33882[(17)] = inst_33737__$1);

(statearr_33882[(18)] = inst_33755);

return statearr_33882;
})();
var statearr_33883_35573 = state_33860__$1;
(statearr_33883_35573[(2)] = null);

(statearr_33883_35573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (21))){
var inst_33783 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33888_35574 = state_33860__$1;
(statearr_33888_35574[(2)] = inst_33783);

(statearr_33888_35574[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (31))){
var inst_33809 = (state_33860[(10)]);
var inst_33813 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33809);
var state_33860__$1 = state_33860;
var statearr_33889_35575 = state_33860__$1;
(statearr_33889_35575[(2)] = inst_33813);

(statearr_33889_35575[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (32))){
var inst_33802 = (state_33860[(9)]);
var inst_33803 = (state_33860[(19)]);
var inst_33804 = (state_33860[(12)]);
var inst_33801 = (state_33860[(20)]);
var inst_33815 = (state_33860[(2)]);
var inst_33816 = (inst_33804 + (1));
var tmp33884 = inst_33802;
var tmp33885 = inst_33803;
var tmp33886 = inst_33801;
var inst_33801__$1 = tmp33886;
var inst_33802__$1 = tmp33884;
var inst_33803__$1 = tmp33885;
var inst_33804__$1 = inst_33816;
var state_33860__$1 = (function (){var statearr_33890 = state_33860;
(statearr_33890[(9)] = inst_33802__$1);

(statearr_33890[(19)] = inst_33803__$1);

(statearr_33890[(12)] = inst_33804__$1);

(statearr_33890[(20)] = inst_33801__$1);

(statearr_33890[(21)] = inst_33815);

return statearr_33890;
})();
var statearr_33891_35578 = state_33860__$1;
(statearr_33891_35578[(2)] = null);

(statearr_33891_35578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (40))){
var inst_33829 = (state_33860[(22)]);
var inst_33833 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33829);
var state_33860__$1 = state_33860;
var statearr_33892_35579 = state_33860__$1;
(statearr_33892_35579[(2)] = inst_33833);

(statearr_33892_35579[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (33))){
var inst_33819 = (state_33860[(23)]);
var inst_33821 = cljs.core.chunked_seq_QMARK_(inst_33819);
var state_33860__$1 = state_33860;
if(inst_33821){
var statearr_33894_35580 = state_33860__$1;
(statearr_33894_35580[(1)] = (36));

} else {
var statearr_33895_35581 = state_33860__$1;
(statearr_33895_35581[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (13))){
var inst_33749 = (state_33860[(24)]);
var inst_33752 = cljs.core.async.close_BANG_(inst_33749);
var state_33860__$1 = state_33860;
var statearr_33896_35582 = state_33860__$1;
(statearr_33896_35582[(2)] = inst_33752);

(statearr_33896_35582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (22))){
var inst_33773 = (state_33860[(8)]);
var inst_33776 = cljs.core.async.close_BANG_(inst_33773);
var state_33860__$1 = state_33860;
var statearr_33897_35583 = state_33860__$1;
(statearr_33897_35583[(2)] = inst_33776);

(statearr_33897_35583[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (36))){
var inst_33819 = (state_33860[(23)]);
var inst_33823 = cljs.core.chunk_first(inst_33819);
var inst_33824 = cljs.core.chunk_rest(inst_33819);
var inst_33826 = cljs.core.count(inst_33823);
var inst_33801 = inst_33824;
var inst_33802 = inst_33823;
var inst_33803 = inst_33826;
var inst_33804 = (0);
var state_33860__$1 = (function (){var statearr_33899 = state_33860;
(statearr_33899[(9)] = inst_33802);

(statearr_33899[(19)] = inst_33803);

(statearr_33899[(12)] = inst_33804);

(statearr_33899[(20)] = inst_33801);

return statearr_33899;
})();
var statearr_33901_35585 = state_33860__$1;
(statearr_33901_35585[(2)] = null);

(statearr_33901_35585[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (41))){
var inst_33819 = (state_33860[(23)]);
var inst_33835 = (state_33860[(2)]);
var inst_33836 = cljs.core.next(inst_33819);
var inst_33801 = inst_33836;
var inst_33802 = null;
var inst_33803 = (0);
var inst_33804 = (0);
var state_33860__$1 = (function (){var statearr_33902 = state_33860;
(statearr_33902[(9)] = inst_33802);

(statearr_33902[(19)] = inst_33803);

(statearr_33902[(25)] = inst_33835);

(statearr_33902[(12)] = inst_33804);

(statearr_33902[(20)] = inst_33801);

return statearr_33902;
})();
var statearr_33903_35587 = state_33860__$1;
(statearr_33903_35587[(2)] = null);

(statearr_33903_35587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (43))){
var state_33860__$1 = state_33860;
var statearr_33904_35588 = state_33860__$1;
(statearr_33904_35588[(2)] = null);

(statearr_33904_35588[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (29))){
var inst_33844 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33905_35589 = state_33860__$1;
(statearr_33905_35589[(2)] = inst_33844);

(statearr_33905_35589[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (44))){
var inst_33853 = (state_33860[(2)]);
var state_33860__$1 = (function (){var statearr_33906 = state_33860;
(statearr_33906[(26)] = inst_33853);

return statearr_33906;
})();
var statearr_33907_35590 = state_33860__$1;
(statearr_33907_35590[(2)] = null);

(statearr_33907_35590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (6))){
var inst_33793 = (state_33860[(27)]);
var inst_33792 = cljs.core.deref(cs);
var inst_33793__$1 = cljs.core.keys(inst_33792);
var inst_33794 = cljs.core.count(inst_33793__$1);
var inst_33795 = cljs.core.reset_BANG_(dctr,inst_33794);
var inst_33800 = cljs.core.seq(inst_33793__$1);
var inst_33801 = inst_33800;
var inst_33802 = null;
var inst_33803 = (0);
var inst_33804 = (0);
var state_33860__$1 = (function (){var statearr_33908 = state_33860;
(statearr_33908[(9)] = inst_33802);

(statearr_33908[(27)] = inst_33793__$1);

(statearr_33908[(19)] = inst_33803);

(statearr_33908[(12)] = inst_33804);

(statearr_33908[(20)] = inst_33801);

(statearr_33908[(28)] = inst_33795);

return statearr_33908;
})();
var statearr_33911_35595 = state_33860__$1;
(statearr_33911_35595[(2)] = null);

(statearr_33911_35595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (28))){
var inst_33819 = (state_33860[(23)]);
var inst_33801 = (state_33860[(20)]);
var inst_33819__$1 = cljs.core.seq(inst_33801);
var state_33860__$1 = (function (){var statearr_33912 = state_33860;
(statearr_33912[(23)] = inst_33819__$1);

return statearr_33912;
})();
if(inst_33819__$1){
var statearr_33913_35596 = state_33860__$1;
(statearr_33913_35596[(1)] = (33));

} else {
var statearr_33914_35598 = state_33860__$1;
(statearr_33914_35598[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (25))){
var inst_33803 = (state_33860[(19)]);
var inst_33804 = (state_33860[(12)]);
var inst_33806 = (inst_33804 < inst_33803);
var inst_33807 = inst_33806;
var state_33860__$1 = state_33860;
if(cljs.core.truth_(inst_33807)){
var statearr_33915_35600 = state_33860__$1;
(statearr_33915_35600[(1)] = (27));

} else {
var statearr_33916_35601 = state_33860__$1;
(statearr_33916_35601[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (34))){
var state_33860__$1 = state_33860;
var statearr_33917_35602 = state_33860__$1;
(statearr_33917_35602[(2)] = null);

(statearr_33917_35602[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (17))){
var state_33860__$1 = state_33860;
var statearr_33918_35603 = state_33860__$1;
(statearr_33918_35603[(2)] = null);

(statearr_33918_35603[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (3))){
var inst_33858 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33860__$1,inst_33858);
} else {
if((state_val_33861 === (12))){
var inst_33788 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33919_35604 = state_33860__$1;
(statearr_33919_35604[(2)] = inst_33788);

(statearr_33919_35604[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (2))){
var state_33860__$1 = state_33860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33860__$1,(4),ch);
} else {
if((state_val_33861 === (23))){
var state_33860__$1 = state_33860;
var statearr_33920_35605 = state_33860__$1;
(statearr_33920_35605[(2)] = null);

(statearr_33920_35605[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (35))){
var inst_33842 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33921_35607 = state_33860__$1;
(statearr_33921_35607[(2)] = inst_33842);

(statearr_33921_35607[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (19))){
var inst_33759 = (state_33860[(7)]);
var inst_33763 = cljs.core.chunk_first(inst_33759);
var inst_33764 = cljs.core.chunk_rest(inst_33759);
var inst_33765 = cljs.core.count(inst_33763);
var inst_33737 = inst_33764;
var inst_33738 = inst_33763;
var inst_33739 = inst_33765;
var inst_33740 = (0);
var state_33860__$1 = (function (){var statearr_33922 = state_33860;
(statearr_33922[(14)] = inst_33738);

(statearr_33922[(15)] = inst_33739);

(statearr_33922[(16)] = inst_33740);

(statearr_33922[(17)] = inst_33737);

return statearr_33922;
})();
var statearr_33923_35609 = state_33860__$1;
(statearr_33923_35609[(2)] = null);

(statearr_33923_35609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (11))){
var inst_33759 = (state_33860[(7)]);
var inst_33737 = (state_33860[(17)]);
var inst_33759__$1 = cljs.core.seq(inst_33737);
var state_33860__$1 = (function (){var statearr_33924 = state_33860;
(statearr_33924[(7)] = inst_33759__$1);

return statearr_33924;
})();
if(inst_33759__$1){
var statearr_33925_35610 = state_33860__$1;
(statearr_33925_35610[(1)] = (16));

} else {
var statearr_33926_35611 = state_33860__$1;
(statearr_33926_35611[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (9))){
var inst_33790 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33927_35612 = state_33860__$1;
(statearr_33927_35612[(2)] = inst_33790);

(statearr_33927_35612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (5))){
var inst_33735 = cljs.core.deref(cs);
var inst_33736 = cljs.core.seq(inst_33735);
var inst_33737 = inst_33736;
var inst_33738 = null;
var inst_33739 = (0);
var inst_33740 = (0);
var state_33860__$1 = (function (){var statearr_33930 = state_33860;
(statearr_33930[(14)] = inst_33738);

(statearr_33930[(15)] = inst_33739);

(statearr_33930[(16)] = inst_33740);

(statearr_33930[(17)] = inst_33737);

return statearr_33930;
})();
var statearr_33931_35613 = state_33860__$1;
(statearr_33931_35613[(2)] = null);

(statearr_33931_35613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (14))){
var state_33860__$1 = state_33860;
var statearr_33932_35614 = state_33860__$1;
(statearr_33932_35614[(2)] = null);

(statearr_33932_35614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (45))){
var inst_33850 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33933_35615 = state_33860__$1;
(statearr_33933_35615[(2)] = inst_33850);

(statearr_33933_35615[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (26))){
var inst_33793 = (state_33860[(27)]);
var inst_33846 = (state_33860[(2)]);
var inst_33847 = cljs.core.seq(inst_33793);
var state_33860__$1 = (function (){var statearr_33934 = state_33860;
(statearr_33934[(29)] = inst_33846);

return statearr_33934;
})();
if(inst_33847){
var statearr_33935_35616 = state_33860__$1;
(statearr_33935_35616[(1)] = (42));

} else {
var statearr_33936_35617 = state_33860__$1;
(statearr_33936_35617[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (16))){
var inst_33759 = (state_33860[(7)]);
var inst_33761 = cljs.core.chunked_seq_QMARK_(inst_33759);
var state_33860__$1 = state_33860;
if(inst_33761){
var statearr_33937_35618 = state_33860__$1;
(statearr_33937_35618[(1)] = (19));

} else {
var statearr_33938_35619 = state_33860__$1;
(statearr_33938_35619[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (38))){
var inst_33839 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33939_35620 = state_33860__$1;
(statearr_33939_35620[(2)] = inst_33839);

(statearr_33939_35620[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (30))){
var state_33860__$1 = state_33860;
var statearr_33940_35621 = state_33860__$1;
(statearr_33940_35621[(2)] = null);

(statearr_33940_35621[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (10))){
var inst_33738 = (state_33860[(14)]);
var inst_33740 = (state_33860[(16)]);
var inst_33748 = cljs.core._nth(inst_33738,inst_33740);
var inst_33749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33748,(0),null);
var inst_33750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33748,(1),null);
var state_33860__$1 = (function (){var statearr_33941 = state_33860;
(statearr_33941[(24)] = inst_33749);

return statearr_33941;
})();
if(cljs.core.truth_(inst_33750)){
var statearr_33942_35622 = state_33860__$1;
(statearr_33942_35622[(1)] = (13));

} else {
var statearr_33943_35623 = state_33860__$1;
(statearr_33943_35623[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (18))){
var inst_33786 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33944_35625 = state_33860__$1;
(statearr_33944_35625[(2)] = inst_33786);

(statearr_33944_35625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (42))){
var state_33860__$1 = state_33860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33860__$1,(45),dchan);
} else {
if((state_val_33861 === (37))){
var inst_33829 = (state_33860[(22)]);
var inst_33819 = (state_33860[(23)]);
var inst_33728 = (state_33860[(11)]);
var inst_33829__$1 = cljs.core.first(inst_33819);
var inst_33830 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33829__$1,inst_33728,done);
var state_33860__$1 = (function (){var statearr_33948 = state_33860;
(statearr_33948[(22)] = inst_33829__$1);

return statearr_33948;
})();
if(cljs.core.truth_(inst_33830)){
var statearr_33952_35633 = state_33860__$1;
(statearr_33952_35633[(1)] = (39));

} else {
var statearr_33953_35634 = state_33860__$1;
(statearr_33953_35634[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (8))){
var inst_33739 = (state_33860[(15)]);
var inst_33740 = (state_33860[(16)]);
var inst_33742 = (inst_33740 < inst_33739);
var inst_33743 = inst_33742;
var state_33860__$1 = state_33860;
if(cljs.core.truth_(inst_33743)){
var statearr_33957_35635 = state_33860__$1;
(statearr_33957_35635[(1)] = (10));

} else {
var statearr_33958_35636 = state_33860__$1;
(statearr_33958_35636[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__32812__auto__ = null;
var cljs$core$async$mult_$_state_machine__32812__auto____0 = (function (){
var statearr_33963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33963[(0)] = cljs$core$async$mult_$_state_machine__32812__auto__);

(statearr_33963[(1)] = (1));

return statearr_33963;
});
var cljs$core$async$mult_$_state_machine__32812__auto____1 = (function (state_33860){
while(true){
var ret_value__32813__auto__ = (function (){try{while(true){
var result__32814__auto__ = switch__32811__auto__(state_33860);
if(cljs.core.keyword_identical_QMARK_(result__32814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32814__auto__;
}
break;
}
}catch (e33967){var ex__32815__auto__ = e33967;
var statearr_33969_35639 = state_33860;
(statearr_33969_35639[(2)] = ex__32815__auto__);


if(cljs.core.seq((state_33860[(4)]))){
var statearr_33970_35640 = state_33860;
(statearr_33970_35640[(1)] = cljs.core.first((state_33860[(4)])));

} else {
throw ex__32815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35643 = state_33860;
state_33860 = G__35643;
continue;
} else {
return ret_value__32813__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32812__auto__ = function(state_33860){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32812__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32812__auto____1.call(this,state_33860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32812__auto____0;
cljs$core$async$mult_$_state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32812__auto____1;
return cljs$core$async$mult_$_state_machine__32812__auto__;
})()
})();
var state__32951__auto__ = (function (){var statearr_33973 = f__32950__auto__();
(statearr_33973[(6)] = c__32949__auto___35552);

return statearr_33973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32951__auto__);
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
var G__33981 = arguments.length;
switch (G__33981) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35646 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_35646(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35660 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_35660(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35670 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35670(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35671 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_35671(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35676 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35676(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35677 = arguments.length;
var i__5770__auto___35678 = (0);
while(true){
if((i__5770__auto___35678 < len__5769__auto___35677)){
args__5775__auto__.push((arguments[i__5770__auto___35678]));

var G__35679 = (i__5770__auto___35678 + (1));
i__5770__auto___35678 = G__35679;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34039){
var map__34042 = p__34039;
var map__34042__$1 = cljs.core.__destructure_map(map__34042);
var opts = map__34042__$1;
var statearr_34044_35680 = state;
(statearr_34044_35680[(1)] = cont_block);


var temp__5816__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34046_35681 = state;
(statearr_34046_35681[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5816__auto__)){
var cb = temp__5816__auto__;
var statearr_34050_35682 = state;
(statearr_34050_35682[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34030){
var G__34031 = cljs.core.first(seq34030);
var seq34030__$1 = cljs.core.next(seq34030);
var G__34032 = cljs.core.first(seq34030__$1);
var seq34030__$2 = cljs.core.next(seq34030__$1);
var G__34033 = cljs.core.first(seq34030__$2);
var seq34030__$3 = cljs.core.next(seq34030__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34031,G__34032,G__34033,seq34030__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34077 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34078){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34078 = meta34078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34079,meta34078__$1){
var self__ = this;
var _34079__$1 = this;
return (new cljs.core.async.t_cljs$core$async34077(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34078__$1));
}));

(cljs.core.async.t_cljs$core$async34077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34079){
var self__ = this;
var _34079__$1 = this;
return self__.meta34078;
}));

(cljs.core.async.t_cljs$core$async34077.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34077.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34077.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34077.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34077.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34077.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34077.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34077.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34078","meta34078",1593319493,null)], null);
}));

(cljs.core.async.t_cljs$core$async34077.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34077");

(cljs.core.async.t_cljs$core$async34077.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34077");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34077.
 */
cljs.core.async.__GT_t_cljs$core$async34077 = (function cljs$core$async$__GT_t_cljs$core$async34077(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34078){
return (new cljs.core.async.t_cljs$core$async34077(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34078));
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
var m = (new cljs.core.async.t_cljs$core$async34077(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__32949__auto___35702 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32950__auto__ = (function (){var switch__32811__auto__ = (function (state_34219){
var state_val_34220 = (state_34219[(1)]);
if((state_val_34220 === (7))){
var inst_34179 = (state_34219[(2)]);
var state_34219__$1 = state_34219;
if(cljs.core.truth_(inst_34179)){
var statearr_34223_35703 = state_34219__$1;
(statearr_34223_35703[(1)] = (8));

} else {
var statearr_34224_35704 = state_34219__$1;
(statearr_34224_35704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (20))){
var inst_34169 = (state_34219[(7)]);
var state_34219__$1 = state_34219;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34219__$1,(23),out,inst_34169);
} else {
if((state_val_34220 === (1))){
var inst_34151 = calc_state();
var inst_34153 = cljs.core.__destructure_map(inst_34151);
var inst_34154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34153,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34153,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34153,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34157 = inst_34151;
var state_34219__$1 = (function (){var statearr_34225 = state_34219;
(statearr_34225[(8)] = inst_34156);

(statearr_34225[(9)] = inst_34157);

(statearr_34225[(10)] = inst_34155);

(statearr_34225[(11)] = inst_34154);

return statearr_34225;
})();
var statearr_34226_35706 = state_34219__$1;
(statearr_34226_35706[(2)] = null);

(statearr_34226_35706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (24))){
var inst_34160 = (state_34219[(12)]);
var inst_34157 = inst_34160;
var state_34219__$1 = (function (){var statearr_34227 = state_34219;
(statearr_34227[(9)] = inst_34157);

return statearr_34227;
})();
var statearr_34228_35707 = state_34219__$1;
(statearr_34228_35707[(2)] = null);

(statearr_34228_35707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (4))){
var inst_34171 = (state_34219[(13)]);
var inst_34169 = (state_34219[(7)]);
var inst_34168 = (state_34219[(2)]);
var inst_34169__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34168,(0),null);
var inst_34170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34168,(1),null);
var inst_34171__$1 = (inst_34169__$1 == null);
var state_34219__$1 = (function (){var statearr_34229 = state_34219;
(statearr_34229[(14)] = inst_34170);

(statearr_34229[(13)] = inst_34171__$1);

(statearr_34229[(7)] = inst_34169__$1);

return statearr_34229;
})();
if(cljs.core.truth_(inst_34171__$1)){
var statearr_34230_35714 = state_34219__$1;
(statearr_34230_35714[(1)] = (5));

} else {
var statearr_34231_35715 = state_34219__$1;
(statearr_34231_35715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (15))){
var inst_34161 = (state_34219[(15)]);
var inst_34193 = (state_34219[(16)]);
var inst_34193__$1 = cljs.core.empty_QMARK_(inst_34161);
var state_34219__$1 = (function (){var statearr_34232 = state_34219;
(statearr_34232[(16)] = inst_34193__$1);

return statearr_34232;
})();
if(inst_34193__$1){
var statearr_34233_35716 = state_34219__$1;
(statearr_34233_35716[(1)] = (17));

} else {
var statearr_34234_35722 = state_34219__$1;
(statearr_34234_35722[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (21))){
var inst_34160 = (state_34219[(12)]);
var inst_34157 = inst_34160;
var state_34219__$1 = (function (){var statearr_34235 = state_34219;
(statearr_34235[(9)] = inst_34157);

return statearr_34235;
})();
var statearr_34236_35723 = state_34219__$1;
(statearr_34236_35723[(2)] = null);

(statearr_34236_35723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (13))){
var inst_34186 = (state_34219[(2)]);
var inst_34187 = calc_state();
var inst_34157 = inst_34187;
var state_34219__$1 = (function (){var statearr_34237 = state_34219;
(statearr_34237[(9)] = inst_34157);

(statearr_34237[(17)] = inst_34186);

return statearr_34237;
})();
var statearr_34238_35729 = state_34219__$1;
(statearr_34238_35729[(2)] = null);

(statearr_34238_35729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (22))){
var inst_34213 = (state_34219[(2)]);
var state_34219__$1 = state_34219;
var statearr_34239_35730 = state_34219__$1;
(statearr_34239_35730[(2)] = inst_34213);

(statearr_34239_35730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (6))){
var inst_34170 = (state_34219[(14)]);
var inst_34177 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34170,change);
var state_34219__$1 = state_34219;
var statearr_34240_35731 = state_34219__$1;
(statearr_34240_35731[(2)] = inst_34177);

(statearr_34240_35731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (25))){
var state_34219__$1 = state_34219;
var statearr_34241_35732 = state_34219__$1;
(statearr_34241_35732[(2)] = null);

(statearr_34241_35732[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (17))){
var inst_34170 = (state_34219[(14)]);
var inst_34162 = (state_34219[(18)]);
var inst_34195 = (inst_34162.cljs$core$IFn$_invoke$arity$1 ? inst_34162.cljs$core$IFn$_invoke$arity$1(inst_34170) : inst_34162.call(null,inst_34170));
var inst_34196 = cljs.core.not(inst_34195);
var state_34219__$1 = state_34219;
var statearr_34242_35733 = state_34219__$1;
(statearr_34242_35733[(2)] = inst_34196);

(statearr_34242_35733[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (3))){
var inst_34217 = (state_34219[(2)]);
var state_34219__$1 = state_34219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34219__$1,inst_34217);
} else {
if((state_val_34220 === (12))){
var state_34219__$1 = state_34219;
var statearr_34245_35734 = state_34219__$1;
(statearr_34245_35734[(2)] = null);

(statearr_34245_35734[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (2))){
var inst_34160 = (state_34219[(12)]);
var inst_34157 = (state_34219[(9)]);
var inst_34160__$1 = cljs.core.__destructure_map(inst_34157);
var inst_34161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34160__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34160__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34160__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34219__$1 = (function (){var statearr_34246 = state_34219;
(statearr_34246[(12)] = inst_34160__$1);

(statearr_34246[(15)] = inst_34161);

(statearr_34246[(18)] = inst_34162);

return statearr_34246;
})();
return cljs.core.async.ioc_alts_BANG_(state_34219__$1,(4),inst_34163);
} else {
if((state_val_34220 === (23))){
var inst_34204 = (state_34219[(2)]);
var state_34219__$1 = state_34219;
if(cljs.core.truth_(inst_34204)){
var statearr_34247_35735 = state_34219__$1;
(statearr_34247_35735[(1)] = (24));

} else {
var statearr_34248_35736 = state_34219__$1;
(statearr_34248_35736[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (19))){
var inst_34199 = (state_34219[(2)]);
var state_34219__$1 = state_34219;
var statearr_34249_35737 = state_34219__$1;
(statearr_34249_35737[(2)] = inst_34199);

(statearr_34249_35737[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (11))){
var inst_34170 = (state_34219[(14)]);
var inst_34183 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34170);
var state_34219__$1 = state_34219;
var statearr_34250_35739 = state_34219__$1;
(statearr_34250_35739[(2)] = inst_34183);

(statearr_34250_35739[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (9))){
var inst_34170 = (state_34219[(14)]);
var inst_34161 = (state_34219[(15)]);
var inst_34190 = (state_34219[(19)]);
var inst_34190__$1 = (inst_34161.cljs$core$IFn$_invoke$arity$1 ? inst_34161.cljs$core$IFn$_invoke$arity$1(inst_34170) : inst_34161.call(null,inst_34170));
var state_34219__$1 = (function (){var statearr_34251 = state_34219;
(statearr_34251[(19)] = inst_34190__$1);

return statearr_34251;
})();
if(cljs.core.truth_(inst_34190__$1)){
var statearr_34252_35740 = state_34219__$1;
(statearr_34252_35740[(1)] = (14));

} else {
var statearr_34253_35741 = state_34219__$1;
(statearr_34253_35741[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (5))){
var inst_34171 = (state_34219[(13)]);
var state_34219__$1 = state_34219;
var statearr_34254_35748 = state_34219__$1;
(statearr_34254_35748[(2)] = inst_34171);

(statearr_34254_35748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (14))){
var inst_34190 = (state_34219[(19)]);
var state_34219__$1 = state_34219;
var statearr_34255_35750 = state_34219__$1;
(statearr_34255_35750[(2)] = inst_34190);

(statearr_34255_35750[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (26))){
var inst_34209 = (state_34219[(2)]);
var state_34219__$1 = state_34219;
var statearr_34256_35751 = state_34219__$1;
(statearr_34256_35751[(2)] = inst_34209);

(statearr_34256_35751[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (16))){
var inst_34201 = (state_34219[(2)]);
var state_34219__$1 = state_34219;
if(cljs.core.truth_(inst_34201)){
var statearr_34257_35752 = state_34219__$1;
(statearr_34257_35752[(1)] = (20));

} else {
var statearr_34258_35753 = state_34219__$1;
(statearr_34258_35753[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (10))){
var inst_34215 = (state_34219[(2)]);
var state_34219__$1 = state_34219;
var statearr_34259_35759 = state_34219__$1;
(statearr_34259_35759[(2)] = inst_34215);

(statearr_34259_35759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (18))){
var inst_34193 = (state_34219[(16)]);
var state_34219__$1 = state_34219;
var statearr_34260_35760 = state_34219__$1;
(statearr_34260_35760[(2)] = inst_34193);

(statearr_34260_35760[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (8))){
var inst_34169 = (state_34219[(7)]);
var inst_34181 = (inst_34169 == null);
var state_34219__$1 = state_34219;
if(cljs.core.truth_(inst_34181)){
var statearr_34261_35761 = state_34219__$1;
(statearr_34261_35761[(1)] = (11));

} else {
var statearr_34262_35762 = state_34219__$1;
(statearr_34262_35762[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__32812__auto__ = null;
var cljs$core$async$mix_$_state_machine__32812__auto____0 = (function (){
var statearr_34263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34263[(0)] = cljs$core$async$mix_$_state_machine__32812__auto__);

(statearr_34263[(1)] = (1));

return statearr_34263;
});
var cljs$core$async$mix_$_state_machine__32812__auto____1 = (function (state_34219){
while(true){
var ret_value__32813__auto__ = (function (){try{while(true){
var result__32814__auto__ = switch__32811__auto__(state_34219);
if(cljs.core.keyword_identical_QMARK_(result__32814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32814__auto__;
}
break;
}
}catch (e34264){var ex__32815__auto__ = e34264;
var statearr_34265_35763 = state_34219;
(statearr_34265_35763[(2)] = ex__32815__auto__);


if(cljs.core.seq((state_34219[(4)]))){
var statearr_34266_35764 = state_34219;
(statearr_34266_35764[(1)] = cljs.core.first((state_34219[(4)])));

} else {
throw ex__32815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35765 = state_34219;
state_34219 = G__35765;
continue;
} else {
return ret_value__32813__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32812__auto__ = function(state_34219){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32812__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32812__auto____1.call(this,state_34219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32812__auto____0;
cljs$core$async$mix_$_state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32812__auto____1;
return cljs$core$async$mix_$_state_machine__32812__auto__;
})()
})();
var state__32951__auto__ = (function (){var statearr_34267 = f__32950__auto__();
(statearr_34267[(6)] = c__32949__auto___35702);

return statearr_34267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32951__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35767 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35767(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35771 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35771(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35772 = (function() {
var G__35773 = null;
var G__35773__1 = (function (p){
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
var G__35773__2 = (function (p,v){
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
G__35773 = function(p,v){
switch(arguments.length){
case 1:
return G__35773__1.call(this,p);
case 2:
return G__35773__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35773.cljs$core$IFn$_invoke$arity$1 = G__35773__1;
G__35773.cljs$core$IFn$_invoke$arity$2 = G__35773__2;
return G__35773;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34299 = arguments.length;
switch (G__34299) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35772(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35772(p,v);
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
cljs.core.async.t_cljs$core$async34320 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34321){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34321 = meta34321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34322,meta34321__$1){
var self__ = this;
var _34322__$1 = this;
return (new cljs.core.async.t_cljs$core$async34320(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34321__$1));
}));

(cljs.core.async.t_cljs$core$async34320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34322){
var self__ = this;
var _34322__$1 = this;
return self__.meta34321;
}));

(cljs.core.async.t_cljs$core$async34320.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34320.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34320.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34320.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34320.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5816__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5816__auto__)){
var m = temp__5816__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34320.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34320.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34321","meta34321",-1265173626,null)], null);
}));

(cljs.core.async.t_cljs$core$async34320.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34320");

(cljs.core.async.t_cljs$core$async34320.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34320");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34320.
 */
cljs.core.async.__GT_t_cljs$core$async34320 = (function cljs$core$async$__GT_t_cljs$core$async34320(ch,topic_fn,buf_fn,mults,ensure_mult,meta34321){
return (new cljs.core.async.t_cljs$core$async34320(ch,topic_fn,buf_fn,mults,ensure_mult,meta34321));
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
var G__34311 = arguments.length;
switch (G__34311) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34302_SHARP_){
if(cljs.core.truth_((p1__34302_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34302_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34302_SHARP_.call(null,topic)))){
return p1__34302_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34302_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async34320(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__32949__auto___35794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32950__auto__ = (function (){var switch__32811__auto__ = (function (state_34421){
var state_val_34422 = (state_34421[(1)]);
if((state_val_34422 === (7))){
var inst_34417 = (state_34421[(2)]);
var state_34421__$1 = state_34421;
var statearr_34430_35795 = state_34421__$1;
(statearr_34430_35795[(2)] = inst_34417);

(statearr_34430_35795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (20))){
var state_34421__$1 = state_34421;
var statearr_34431_35796 = state_34421__$1;
(statearr_34431_35796[(2)] = null);

(statearr_34431_35796[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (1))){
var state_34421__$1 = state_34421;
var statearr_34433_35797 = state_34421__$1;
(statearr_34433_35797[(2)] = null);

(statearr_34433_35797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (24))){
var inst_34400 = (state_34421[(7)]);
var inst_34409 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34400);
var state_34421__$1 = state_34421;
var statearr_34434_35798 = state_34421__$1;
(statearr_34434_35798[(2)] = inst_34409);

(statearr_34434_35798[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (4))){
var inst_34347 = (state_34421[(8)]);
var inst_34347__$1 = (state_34421[(2)]);
var inst_34348 = (inst_34347__$1 == null);
var state_34421__$1 = (function (){var statearr_34438 = state_34421;
(statearr_34438[(8)] = inst_34347__$1);

return statearr_34438;
})();
if(cljs.core.truth_(inst_34348)){
var statearr_34440_35799 = state_34421__$1;
(statearr_34440_35799[(1)] = (5));

} else {
var statearr_34441_35800 = state_34421__$1;
(statearr_34441_35800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (15))){
var inst_34394 = (state_34421[(2)]);
var state_34421__$1 = state_34421;
var statearr_34442_35801 = state_34421__$1;
(statearr_34442_35801[(2)] = inst_34394);

(statearr_34442_35801[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (21))){
var inst_34414 = (state_34421[(2)]);
var state_34421__$1 = (function (){var statearr_34446 = state_34421;
(statearr_34446[(9)] = inst_34414);

return statearr_34446;
})();
var statearr_34447_35802 = state_34421__$1;
(statearr_34447_35802[(2)] = null);

(statearr_34447_35802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (13))){
var inst_34375 = (state_34421[(10)]);
var inst_34377 = cljs.core.chunked_seq_QMARK_(inst_34375);
var state_34421__$1 = state_34421;
if(inst_34377){
var statearr_34449_35803 = state_34421__$1;
(statearr_34449_35803[(1)] = (16));

} else {
var statearr_34450_35804 = state_34421__$1;
(statearr_34450_35804[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (22))){
var inst_34406 = (state_34421[(2)]);
var state_34421__$1 = state_34421;
if(cljs.core.truth_(inst_34406)){
var statearr_34451_35805 = state_34421__$1;
(statearr_34451_35805[(1)] = (23));

} else {
var statearr_34452_35806 = state_34421__$1;
(statearr_34452_35806[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (6))){
var inst_34400 = (state_34421[(7)]);
var inst_34402 = (state_34421[(11)]);
var inst_34347 = (state_34421[(8)]);
var inst_34400__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34347) : topic_fn.call(null,inst_34347));
var inst_34401 = cljs.core.deref(mults);
var inst_34402__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34401,inst_34400__$1);
var state_34421__$1 = (function (){var statearr_34457 = state_34421;
(statearr_34457[(7)] = inst_34400__$1);

(statearr_34457[(11)] = inst_34402__$1);

return statearr_34457;
})();
if(cljs.core.truth_(inst_34402__$1)){
var statearr_34458_35809 = state_34421__$1;
(statearr_34458_35809[(1)] = (19));

} else {
var statearr_34459_35810 = state_34421__$1;
(statearr_34459_35810[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (25))){
var inst_34411 = (state_34421[(2)]);
var state_34421__$1 = state_34421;
var statearr_34460_35811 = state_34421__$1;
(statearr_34460_35811[(2)] = inst_34411);

(statearr_34460_35811[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (17))){
var inst_34375 = (state_34421[(10)]);
var inst_34385 = cljs.core.first(inst_34375);
var inst_34386 = cljs.core.async.muxch_STAR_(inst_34385);
var inst_34387 = cljs.core.async.close_BANG_(inst_34386);
var inst_34388 = cljs.core.next(inst_34375);
var inst_34357 = inst_34388;
var inst_34358 = null;
var inst_34359 = (0);
var inst_34360 = (0);
var state_34421__$1 = (function (){var statearr_34461 = state_34421;
(statearr_34461[(12)] = inst_34360);

(statearr_34461[(13)] = inst_34359);

(statearr_34461[(14)] = inst_34387);

(statearr_34461[(15)] = inst_34357);

(statearr_34461[(16)] = inst_34358);

return statearr_34461;
})();
var statearr_34462_35812 = state_34421__$1;
(statearr_34462_35812[(2)] = null);

(statearr_34462_35812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (3))){
var inst_34419 = (state_34421[(2)]);
var state_34421__$1 = state_34421;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34421__$1,inst_34419);
} else {
if((state_val_34422 === (12))){
var inst_34396 = (state_34421[(2)]);
var state_34421__$1 = state_34421;
var statearr_34463_35813 = state_34421__$1;
(statearr_34463_35813[(2)] = inst_34396);

(statearr_34463_35813[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (2))){
var state_34421__$1 = state_34421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34421__$1,(4),ch);
} else {
if((state_val_34422 === (23))){
var state_34421__$1 = state_34421;
var statearr_34468_35814 = state_34421__$1;
(statearr_34468_35814[(2)] = null);

(statearr_34468_35814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (19))){
var inst_34402 = (state_34421[(11)]);
var inst_34347 = (state_34421[(8)]);
var inst_34404 = cljs.core.async.muxch_STAR_(inst_34402);
var state_34421__$1 = state_34421;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34421__$1,(22),inst_34404,inst_34347);
} else {
if((state_val_34422 === (11))){
var inst_34357 = (state_34421[(15)]);
var inst_34375 = (state_34421[(10)]);
var inst_34375__$1 = cljs.core.seq(inst_34357);
var state_34421__$1 = (function (){var statearr_34469 = state_34421;
(statearr_34469[(10)] = inst_34375__$1);

return statearr_34469;
})();
if(inst_34375__$1){
var statearr_34470_35817 = state_34421__$1;
(statearr_34470_35817[(1)] = (13));

} else {
var statearr_34471_35818 = state_34421__$1;
(statearr_34471_35818[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (9))){
var inst_34398 = (state_34421[(2)]);
var state_34421__$1 = state_34421;
var statearr_34473_35819 = state_34421__$1;
(statearr_34473_35819[(2)] = inst_34398);

(statearr_34473_35819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (5))){
var inst_34354 = cljs.core.deref(mults);
var inst_34355 = cljs.core.vals(inst_34354);
var inst_34356 = cljs.core.seq(inst_34355);
var inst_34357 = inst_34356;
var inst_34358 = null;
var inst_34359 = (0);
var inst_34360 = (0);
var state_34421__$1 = (function (){var statearr_34474 = state_34421;
(statearr_34474[(12)] = inst_34360);

(statearr_34474[(13)] = inst_34359);

(statearr_34474[(15)] = inst_34357);

(statearr_34474[(16)] = inst_34358);

return statearr_34474;
})();
var statearr_34475_35820 = state_34421__$1;
(statearr_34475_35820[(2)] = null);

(statearr_34475_35820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (14))){
var state_34421__$1 = state_34421;
var statearr_34479_35821 = state_34421__$1;
(statearr_34479_35821[(2)] = null);

(statearr_34479_35821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (16))){
var inst_34375 = (state_34421[(10)]);
var inst_34379 = cljs.core.chunk_first(inst_34375);
var inst_34380 = cljs.core.chunk_rest(inst_34375);
var inst_34381 = cljs.core.count(inst_34379);
var inst_34357 = inst_34380;
var inst_34358 = inst_34379;
var inst_34359 = inst_34381;
var inst_34360 = (0);
var state_34421__$1 = (function (){var statearr_34480 = state_34421;
(statearr_34480[(12)] = inst_34360);

(statearr_34480[(13)] = inst_34359);

(statearr_34480[(15)] = inst_34357);

(statearr_34480[(16)] = inst_34358);

return statearr_34480;
})();
var statearr_34482_35822 = state_34421__$1;
(statearr_34482_35822[(2)] = null);

(statearr_34482_35822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (10))){
var inst_34360 = (state_34421[(12)]);
var inst_34359 = (state_34421[(13)]);
var inst_34357 = (state_34421[(15)]);
var inst_34358 = (state_34421[(16)]);
var inst_34368 = cljs.core._nth(inst_34358,inst_34360);
var inst_34369 = cljs.core.async.muxch_STAR_(inst_34368);
var inst_34371 = cljs.core.async.close_BANG_(inst_34369);
var inst_34372 = (inst_34360 + (1));
var tmp34476 = inst_34359;
var tmp34477 = inst_34357;
var tmp34478 = inst_34358;
var inst_34357__$1 = tmp34477;
var inst_34358__$1 = tmp34478;
var inst_34359__$1 = tmp34476;
var inst_34360__$1 = inst_34372;
var state_34421__$1 = (function (){var statearr_34484 = state_34421;
(statearr_34484[(12)] = inst_34360__$1);

(statearr_34484[(13)] = inst_34359__$1);

(statearr_34484[(15)] = inst_34357__$1);

(statearr_34484[(17)] = inst_34371);

(statearr_34484[(16)] = inst_34358__$1);

return statearr_34484;
})();
var statearr_34485_35824 = state_34421__$1;
(statearr_34485_35824[(2)] = null);

(statearr_34485_35824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (18))){
var inst_34391 = (state_34421[(2)]);
var state_34421__$1 = state_34421;
var statearr_34486_35825 = state_34421__$1;
(statearr_34486_35825[(2)] = inst_34391);

(statearr_34486_35825[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (8))){
var inst_34360 = (state_34421[(12)]);
var inst_34359 = (state_34421[(13)]);
var inst_34365 = (inst_34360 < inst_34359);
var inst_34366 = inst_34365;
var state_34421__$1 = state_34421;
if(cljs.core.truth_(inst_34366)){
var statearr_34487_35826 = state_34421__$1;
(statearr_34487_35826[(1)] = (10));

} else {
var statearr_34488_35827 = state_34421__$1;
(statearr_34488_35827[(1)] = (11));

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
var cljs$core$async$state_machine__32812__auto__ = null;
var cljs$core$async$state_machine__32812__auto____0 = (function (){
var statearr_34489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34489[(0)] = cljs$core$async$state_machine__32812__auto__);

(statearr_34489[(1)] = (1));

return statearr_34489;
});
var cljs$core$async$state_machine__32812__auto____1 = (function (state_34421){
while(true){
var ret_value__32813__auto__ = (function (){try{while(true){
var result__32814__auto__ = switch__32811__auto__(state_34421);
if(cljs.core.keyword_identical_QMARK_(result__32814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32814__auto__;
}
break;
}
}catch (e34490){var ex__32815__auto__ = e34490;
var statearr_34491_35828 = state_34421;
(statearr_34491_35828[(2)] = ex__32815__auto__);


if(cljs.core.seq((state_34421[(4)]))){
var statearr_34492_35829 = state_34421;
(statearr_34492_35829[(1)] = cljs.core.first((state_34421[(4)])));

} else {
throw ex__32815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35830 = state_34421;
state_34421 = G__35830;
continue;
} else {
return ret_value__32813__auto__;
}
break;
}
});
cljs$core$async$state_machine__32812__auto__ = function(state_34421){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32812__auto____1.call(this,state_34421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32812__auto____0;
cljs$core$async$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32812__auto____1;
return cljs$core$async$state_machine__32812__auto__;
})()
})();
var state__32951__auto__ = (function (){var statearr_34493 = f__32950__auto__();
(statearr_34493[(6)] = c__32949__auto___35794);

return statearr_34493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32951__auto__);
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
var G__34495 = arguments.length;
switch (G__34495) {
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
var G__34497 = arguments.length;
switch (G__34497) {
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
var G__34499 = arguments.length;
switch (G__34499) {
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
var c__32949__auto___35842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32950__auto__ = (function (){var switch__32811__auto__ = (function (state_34546){
var state_val_34547 = (state_34546[(1)]);
if((state_val_34547 === (7))){
var state_34546__$1 = state_34546;
var statearr_34548_35843 = state_34546__$1;
(statearr_34548_35843[(2)] = null);

(statearr_34548_35843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34547 === (1))){
var state_34546__$1 = state_34546;
var statearr_34550_35844 = state_34546__$1;
(statearr_34550_35844[(2)] = null);

(statearr_34550_35844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34547 === (4))){
var inst_34505 = (state_34546[(7)]);
var inst_34504 = (state_34546[(8)]);
var inst_34507 = (inst_34505 < inst_34504);
var state_34546__$1 = state_34546;
if(cljs.core.truth_(inst_34507)){
var statearr_34552_35845 = state_34546__$1;
(statearr_34552_35845[(1)] = (6));

} else {
var statearr_34553_35846 = state_34546__$1;
(statearr_34553_35846[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34547 === (15))){
var inst_34532 = (state_34546[(9)]);
var inst_34537 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34532);
var state_34546__$1 = state_34546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34546__$1,(17),out,inst_34537);
} else {
if((state_val_34547 === (13))){
var inst_34532 = (state_34546[(9)]);
var inst_34532__$1 = (state_34546[(2)]);
var inst_34533 = cljs.core.some(cljs.core.nil_QMARK_,inst_34532__$1);
var state_34546__$1 = (function (){var statearr_34554 = state_34546;
(statearr_34554[(9)] = inst_34532__$1);

return statearr_34554;
})();
if(cljs.core.truth_(inst_34533)){
var statearr_34555_35847 = state_34546__$1;
(statearr_34555_35847[(1)] = (14));

} else {
var statearr_34556_35848 = state_34546__$1;
(statearr_34556_35848[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34547 === (6))){
var state_34546__$1 = state_34546;
var statearr_34557_35849 = state_34546__$1;
(statearr_34557_35849[(2)] = null);

(statearr_34557_35849[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34547 === (17))){
var inst_34539 = (state_34546[(2)]);
var state_34546__$1 = (function (){var statearr_34559 = state_34546;
(statearr_34559[(10)] = inst_34539);

return statearr_34559;
})();
var statearr_34560_35850 = state_34546__$1;
(statearr_34560_35850[(2)] = null);

(statearr_34560_35850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34547 === (3))){
var inst_34544 = (state_34546[(2)]);
var state_34546__$1 = state_34546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34546__$1,inst_34544);
} else {
if((state_val_34547 === (12))){
var _ = (function (){var statearr_34561 = state_34546;
(statearr_34561[(4)] = cljs.core.rest((state_34546[(4)])));

return statearr_34561;
})();
var state_34546__$1 = state_34546;
var ex34558 = (state_34546__$1[(2)]);
var statearr_34562_35851 = state_34546__$1;
(statearr_34562_35851[(5)] = ex34558);


if((ex34558 instanceof Object)){
var statearr_34563_35852 = state_34546__$1;
(statearr_34563_35852[(1)] = (11));

(statearr_34563_35852[(5)] = null);

} else {
throw ex34558;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34547 === (2))){
var inst_34503 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34504 = cnt;
var inst_34505 = (0);
var state_34546__$1 = (function (){var statearr_34564 = state_34546;
(statearr_34564[(11)] = inst_34503);

(statearr_34564[(7)] = inst_34505);

(statearr_34564[(8)] = inst_34504);

return statearr_34564;
})();
var statearr_34565_35853 = state_34546__$1;
(statearr_34565_35853[(2)] = null);

(statearr_34565_35853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34547 === (11))){
var inst_34511 = (state_34546[(2)]);
var inst_34512 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34546__$1 = (function (){var statearr_34566 = state_34546;
(statearr_34566[(12)] = inst_34511);

return statearr_34566;
})();
var statearr_34568_35855 = state_34546__$1;
(statearr_34568_35855[(2)] = inst_34512);

(statearr_34568_35855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34547 === (9))){
var inst_34505 = (state_34546[(7)]);
var _ = (function (){var statearr_34570 = state_34546;
(statearr_34570[(4)] = cljs.core.cons((12),(state_34546[(4)])));

return statearr_34570;
})();
var inst_34518 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34505) : chs__$1.call(null,inst_34505));
var inst_34519 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34505) : done.call(null,inst_34505));
var inst_34520 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34518,inst_34519);
var ___$1 = (function (){var statearr_34571 = state_34546;
(statearr_34571[(4)] = cljs.core.rest((state_34546[(4)])));

return statearr_34571;
})();
var state_34546__$1 = state_34546;
var statearr_34572_35857 = state_34546__$1;
(statearr_34572_35857[(2)] = inst_34520);

(statearr_34572_35857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34547 === (5))){
var inst_34530 = (state_34546[(2)]);
var state_34546__$1 = (function (){var statearr_34573 = state_34546;
(statearr_34573[(13)] = inst_34530);

return statearr_34573;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34546__$1,(13),dchan);
} else {
if((state_val_34547 === (14))){
var inst_34535 = cljs.core.async.close_BANG_(out);
var state_34546__$1 = state_34546;
var statearr_34574_35858 = state_34546__$1;
(statearr_34574_35858[(2)] = inst_34535);

(statearr_34574_35858[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34547 === (16))){
var inst_34542 = (state_34546[(2)]);
var state_34546__$1 = state_34546;
var statearr_34579_35859 = state_34546__$1;
(statearr_34579_35859[(2)] = inst_34542);

(statearr_34579_35859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34547 === (10))){
var inst_34505 = (state_34546[(7)]);
var inst_34523 = (state_34546[(2)]);
var inst_34524 = (inst_34505 + (1));
var inst_34505__$1 = inst_34524;
var state_34546__$1 = (function (){var statearr_34580 = state_34546;
(statearr_34580[(7)] = inst_34505__$1);

(statearr_34580[(14)] = inst_34523);

return statearr_34580;
})();
var statearr_34581_35860 = state_34546__$1;
(statearr_34581_35860[(2)] = null);

(statearr_34581_35860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34547 === (8))){
var inst_34528 = (state_34546[(2)]);
var state_34546__$1 = state_34546;
var statearr_34582_35865 = state_34546__$1;
(statearr_34582_35865[(2)] = inst_34528);

(statearr_34582_35865[(1)] = (5));


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
var cljs$core$async$state_machine__32812__auto__ = null;
var cljs$core$async$state_machine__32812__auto____0 = (function (){
var statearr_34584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34584[(0)] = cljs$core$async$state_machine__32812__auto__);

(statearr_34584[(1)] = (1));

return statearr_34584;
});
var cljs$core$async$state_machine__32812__auto____1 = (function (state_34546){
while(true){
var ret_value__32813__auto__ = (function (){try{while(true){
var result__32814__auto__ = switch__32811__auto__(state_34546);
if(cljs.core.keyword_identical_QMARK_(result__32814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32814__auto__;
}
break;
}
}catch (e34585){var ex__32815__auto__ = e34585;
var statearr_34587_35870 = state_34546;
(statearr_34587_35870[(2)] = ex__32815__auto__);


if(cljs.core.seq((state_34546[(4)]))){
var statearr_34588_35871 = state_34546;
(statearr_34588_35871[(1)] = cljs.core.first((state_34546[(4)])));

} else {
throw ex__32815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35872 = state_34546;
state_34546 = G__35872;
continue;
} else {
return ret_value__32813__auto__;
}
break;
}
});
cljs$core$async$state_machine__32812__auto__ = function(state_34546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32812__auto____1.call(this,state_34546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32812__auto____0;
cljs$core$async$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32812__auto____1;
return cljs$core$async$state_machine__32812__auto__;
})()
})();
var state__32951__auto__ = (function (){var statearr_34592 = f__32950__auto__();
(statearr_34592[(6)] = c__32949__auto___35842);

return statearr_34592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32951__auto__);
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
var G__34595 = arguments.length;
switch (G__34595) {
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
var c__32949__auto___35878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32950__auto__ = (function (){var switch__32811__auto__ = (function (state_34630){
var state_val_34631 = (state_34630[(1)]);
if((state_val_34631 === (7))){
var inst_34610 = (state_34630[(7)]);
var inst_34609 = (state_34630[(8)]);
var inst_34609__$1 = (state_34630[(2)]);
var inst_34610__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34609__$1,(0),null);
var inst_34611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34609__$1,(1),null);
var inst_34612 = (inst_34610__$1 == null);
var state_34630__$1 = (function (){var statearr_34645 = state_34630;
(statearr_34645[(9)] = inst_34611);

(statearr_34645[(7)] = inst_34610__$1);

(statearr_34645[(8)] = inst_34609__$1);

return statearr_34645;
})();
if(cljs.core.truth_(inst_34612)){
var statearr_34646_35879 = state_34630__$1;
(statearr_34646_35879[(1)] = (8));

} else {
var statearr_34647_35880 = state_34630__$1;
(statearr_34647_35880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (1))){
var inst_34599 = cljs.core.vec(chs);
var inst_34600 = inst_34599;
var state_34630__$1 = (function (){var statearr_34654 = state_34630;
(statearr_34654[(10)] = inst_34600);

return statearr_34654;
})();
var statearr_34655_35881 = state_34630__$1;
(statearr_34655_35881[(2)] = null);

(statearr_34655_35881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (4))){
var inst_34600 = (state_34630[(10)]);
var state_34630__$1 = state_34630;
return cljs.core.async.ioc_alts_BANG_(state_34630__$1,(7),inst_34600);
} else {
if((state_val_34631 === (6))){
var inst_34626 = (state_34630[(2)]);
var state_34630__$1 = state_34630;
var statearr_34656_35882 = state_34630__$1;
(statearr_34656_35882[(2)] = inst_34626);

(statearr_34656_35882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (3))){
var inst_34628 = (state_34630[(2)]);
var state_34630__$1 = state_34630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34630__$1,inst_34628);
} else {
if((state_val_34631 === (2))){
var inst_34600 = (state_34630[(10)]);
var inst_34602 = cljs.core.count(inst_34600);
var inst_34603 = (inst_34602 > (0));
var state_34630__$1 = state_34630;
if(cljs.core.truth_(inst_34603)){
var statearr_34658_35883 = state_34630__$1;
(statearr_34658_35883[(1)] = (4));

} else {
var statearr_34659_35884 = state_34630__$1;
(statearr_34659_35884[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (11))){
var inst_34600 = (state_34630[(10)]);
var inst_34619 = (state_34630[(2)]);
var tmp34657 = inst_34600;
var inst_34600__$1 = tmp34657;
var state_34630__$1 = (function (){var statearr_34664 = state_34630;
(statearr_34664[(11)] = inst_34619);

(statearr_34664[(10)] = inst_34600__$1);

return statearr_34664;
})();
var statearr_34668_35885 = state_34630__$1;
(statearr_34668_35885[(2)] = null);

(statearr_34668_35885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (9))){
var inst_34610 = (state_34630[(7)]);
var state_34630__$1 = state_34630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34630__$1,(11),out,inst_34610);
} else {
if((state_val_34631 === (5))){
var inst_34624 = cljs.core.async.close_BANG_(out);
var state_34630__$1 = state_34630;
var statearr_34675_35886 = state_34630__$1;
(statearr_34675_35886[(2)] = inst_34624);

(statearr_34675_35886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (10))){
var inst_34622 = (state_34630[(2)]);
var state_34630__$1 = state_34630;
var statearr_34676_35887 = state_34630__$1;
(statearr_34676_35887[(2)] = inst_34622);

(statearr_34676_35887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (8))){
var inst_34611 = (state_34630[(9)]);
var inst_34600 = (state_34630[(10)]);
var inst_34610 = (state_34630[(7)]);
var inst_34609 = (state_34630[(8)]);
var inst_34614 = (function (){var cs = inst_34600;
var vec__34605 = inst_34609;
var v = inst_34610;
var c = inst_34611;
return (function (p1__34593_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34593_SHARP_);
});
})();
var inst_34615 = cljs.core.filterv(inst_34614,inst_34600);
var inst_34600__$1 = inst_34615;
var state_34630__$1 = (function (){var statearr_34677 = state_34630;
(statearr_34677[(10)] = inst_34600__$1);

return statearr_34677;
})();
var statearr_34678_35888 = state_34630__$1;
(statearr_34678_35888[(2)] = null);

(statearr_34678_35888[(1)] = (2));


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
var cljs$core$async$state_machine__32812__auto__ = null;
var cljs$core$async$state_machine__32812__auto____0 = (function (){
var statearr_34679 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34679[(0)] = cljs$core$async$state_machine__32812__auto__);

(statearr_34679[(1)] = (1));

return statearr_34679;
});
var cljs$core$async$state_machine__32812__auto____1 = (function (state_34630){
while(true){
var ret_value__32813__auto__ = (function (){try{while(true){
var result__32814__auto__ = switch__32811__auto__(state_34630);
if(cljs.core.keyword_identical_QMARK_(result__32814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32814__auto__;
}
break;
}
}catch (e34680){var ex__32815__auto__ = e34680;
var statearr_34681_35893 = state_34630;
(statearr_34681_35893[(2)] = ex__32815__auto__);


if(cljs.core.seq((state_34630[(4)]))){
var statearr_34682_35894 = state_34630;
(statearr_34682_35894[(1)] = cljs.core.first((state_34630[(4)])));

} else {
throw ex__32815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35895 = state_34630;
state_34630 = G__35895;
continue;
} else {
return ret_value__32813__auto__;
}
break;
}
});
cljs$core$async$state_machine__32812__auto__ = function(state_34630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32812__auto____1.call(this,state_34630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32812__auto____0;
cljs$core$async$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32812__auto____1;
return cljs$core$async$state_machine__32812__auto__;
})()
})();
var state__32951__auto__ = (function (){var statearr_34683 = f__32950__auto__();
(statearr_34683[(6)] = c__32949__auto___35878);

return statearr_34683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32951__auto__);
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
var G__34685 = arguments.length;
switch (G__34685) {
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
var c__32949__auto___35902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32950__auto__ = (function (){var switch__32811__auto__ = (function (state_34713){
var state_val_34714 = (state_34713[(1)]);
if((state_val_34714 === (7))){
var inst_34695 = (state_34713[(7)]);
var inst_34695__$1 = (state_34713[(2)]);
var inst_34696 = (inst_34695__$1 == null);
var inst_34697 = cljs.core.not(inst_34696);
var state_34713__$1 = (function (){var statearr_34715 = state_34713;
(statearr_34715[(7)] = inst_34695__$1);

return statearr_34715;
})();
if(inst_34697){
var statearr_34716_35903 = state_34713__$1;
(statearr_34716_35903[(1)] = (8));

} else {
var statearr_34717_35904 = state_34713__$1;
(statearr_34717_35904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (1))){
var inst_34690 = (0);
var state_34713__$1 = (function (){var statearr_34718 = state_34713;
(statearr_34718[(8)] = inst_34690);

return statearr_34718;
})();
var statearr_34719_35905 = state_34713__$1;
(statearr_34719_35905[(2)] = null);

(statearr_34719_35905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (4))){
var state_34713__$1 = state_34713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34713__$1,(7),ch);
} else {
if((state_val_34714 === (6))){
var inst_34708 = (state_34713[(2)]);
var state_34713__$1 = state_34713;
var statearr_34721_35906 = state_34713__$1;
(statearr_34721_35906[(2)] = inst_34708);

(statearr_34721_35906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (3))){
var inst_34710 = (state_34713[(2)]);
var inst_34711 = cljs.core.async.close_BANG_(out);
var state_34713__$1 = (function (){var statearr_34725 = state_34713;
(statearr_34725[(9)] = inst_34710);

return statearr_34725;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34713__$1,inst_34711);
} else {
if((state_val_34714 === (2))){
var inst_34690 = (state_34713[(8)]);
var inst_34692 = (inst_34690 < n);
var state_34713__$1 = state_34713;
if(cljs.core.truth_(inst_34692)){
var statearr_34726_35907 = state_34713__$1;
(statearr_34726_35907[(1)] = (4));

} else {
var statearr_34727_35908 = state_34713__$1;
(statearr_34727_35908[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (11))){
var inst_34690 = (state_34713[(8)]);
var inst_34700 = (state_34713[(2)]);
var inst_34701 = (inst_34690 + (1));
var inst_34690__$1 = inst_34701;
var state_34713__$1 = (function (){var statearr_34730 = state_34713;
(statearr_34730[(10)] = inst_34700);

(statearr_34730[(8)] = inst_34690__$1);

return statearr_34730;
})();
var statearr_34731_35909 = state_34713__$1;
(statearr_34731_35909[(2)] = null);

(statearr_34731_35909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (9))){
var state_34713__$1 = state_34713;
var statearr_34733_35910 = state_34713__$1;
(statearr_34733_35910[(2)] = null);

(statearr_34733_35910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (5))){
var state_34713__$1 = state_34713;
var statearr_34734_35914 = state_34713__$1;
(statearr_34734_35914[(2)] = null);

(statearr_34734_35914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (10))){
var inst_34705 = (state_34713[(2)]);
var state_34713__$1 = state_34713;
var statearr_34736_35915 = state_34713__$1;
(statearr_34736_35915[(2)] = inst_34705);

(statearr_34736_35915[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (8))){
var inst_34695 = (state_34713[(7)]);
var state_34713__$1 = state_34713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34713__$1,(11),out,inst_34695);
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
var cljs$core$async$state_machine__32812__auto__ = null;
var cljs$core$async$state_machine__32812__auto____0 = (function (){
var statearr_34737 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34737[(0)] = cljs$core$async$state_machine__32812__auto__);

(statearr_34737[(1)] = (1));

return statearr_34737;
});
var cljs$core$async$state_machine__32812__auto____1 = (function (state_34713){
while(true){
var ret_value__32813__auto__ = (function (){try{while(true){
var result__32814__auto__ = switch__32811__auto__(state_34713);
if(cljs.core.keyword_identical_QMARK_(result__32814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32814__auto__;
}
break;
}
}catch (e34738){var ex__32815__auto__ = e34738;
var statearr_34739_35916 = state_34713;
(statearr_34739_35916[(2)] = ex__32815__auto__);


if(cljs.core.seq((state_34713[(4)]))){
var statearr_34740_35917 = state_34713;
(statearr_34740_35917[(1)] = cljs.core.first((state_34713[(4)])));

} else {
throw ex__32815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35918 = state_34713;
state_34713 = G__35918;
continue;
} else {
return ret_value__32813__auto__;
}
break;
}
});
cljs$core$async$state_machine__32812__auto__ = function(state_34713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32812__auto____1.call(this,state_34713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32812__auto____0;
cljs$core$async$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32812__auto____1;
return cljs$core$async$state_machine__32812__auto__;
})()
})();
var state__32951__auto__ = (function (){var statearr_34741 = f__32950__auto__();
(statearr_34741[(6)] = c__32949__auto___35902);

return statearr_34741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32951__auto__);
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
cljs.core.async.t_cljs$core$async34753 = (function (f,ch,meta34746,_,fn1,meta34754){
this.f = f;
this.ch = ch;
this.meta34746 = meta34746;
this._ = _;
this.fn1 = fn1;
this.meta34754 = meta34754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34755,meta34754__$1){
var self__ = this;
var _34755__$1 = this;
return (new cljs.core.async.t_cljs$core$async34753(self__.f,self__.ch,self__.meta34746,self__._,self__.fn1,meta34754__$1));
}));

(cljs.core.async.t_cljs$core$async34753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34755){
var self__ = this;
var _34755__$1 = this;
return self__.meta34754;
}));

(cljs.core.async.t_cljs$core$async34753.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34753.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34753.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34753.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34743_SHARP_){
var G__34756 = (((p1__34743_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34743_SHARP_) : self__.f.call(null,p1__34743_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34756) : f1.call(null,G__34756));
});
}));

(cljs.core.async.t_cljs$core$async34753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34746","meta34746",-1610959902,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34745","cljs.core.async/t_cljs$core$async34745",28566537,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34754","meta34754",-221136215,null)], null);
}));

(cljs.core.async.t_cljs$core$async34753.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34753");

(cljs.core.async.t_cljs$core$async34753.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34753");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34753.
 */
cljs.core.async.__GT_t_cljs$core$async34753 = (function cljs$core$async$__GT_t_cljs$core$async34753(f,ch,meta34746,_,fn1,meta34754){
return (new cljs.core.async.t_cljs$core$async34753(f,ch,meta34746,_,fn1,meta34754));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34745 = (function (f,ch,meta34746){
this.f = f;
this.ch = ch;
this.meta34746 = meta34746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34747,meta34746__$1){
var self__ = this;
var _34747__$1 = this;
return (new cljs.core.async.t_cljs$core$async34745(self__.f,self__.ch,meta34746__$1));
}));

(cljs.core.async.t_cljs$core$async34745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34747){
var self__ = this;
var _34747__$1 = this;
return self__.meta34746;
}));

(cljs.core.async.t_cljs$core$async34745.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34745.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34745.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34745.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34745.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async34753(self__.f,self__.ch,self__.meta34746,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34757 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34757) : self__.f.call(null,G__34757));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34745.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34745.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34746","meta34746",-1610959902,null)], null);
}));

(cljs.core.async.t_cljs$core$async34745.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34745");

(cljs.core.async.t_cljs$core$async34745.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34745");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34745.
 */
cljs.core.async.__GT_t_cljs$core$async34745 = (function cljs$core$async$__GT_t_cljs$core$async34745(f,ch,meta34746){
return (new cljs.core.async.t_cljs$core$async34745(f,ch,meta34746));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34745(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34763 = (function (f,ch,meta34764){
this.f = f;
this.ch = ch;
this.meta34764 = meta34764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34765,meta34764__$1){
var self__ = this;
var _34765__$1 = this;
return (new cljs.core.async.t_cljs$core$async34763(self__.f,self__.ch,meta34764__$1));
}));

(cljs.core.async.t_cljs$core$async34763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34765){
var self__ = this;
var _34765__$1 = this;
return self__.meta34764;
}));

(cljs.core.async.t_cljs$core$async34763.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34763.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34763.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34763.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34763.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34763.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34764","meta34764",-1515269290,null)], null);
}));

(cljs.core.async.t_cljs$core$async34763.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34763");

(cljs.core.async.t_cljs$core$async34763.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34763");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34763.
 */
cljs.core.async.__GT_t_cljs$core$async34763 = (function cljs$core$async$__GT_t_cljs$core$async34763(f,ch,meta34764){
return (new cljs.core.async.t_cljs$core$async34763(f,ch,meta34764));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34763(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34773 = (function (p,ch,meta34774){
this.p = p;
this.ch = ch;
this.meta34774 = meta34774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34775,meta34774__$1){
var self__ = this;
var _34775__$1 = this;
return (new cljs.core.async.t_cljs$core$async34773(self__.p,self__.ch,meta34774__$1));
}));

(cljs.core.async.t_cljs$core$async34773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34775){
var self__ = this;
var _34775__$1 = this;
return self__.meta34774;
}));

(cljs.core.async.t_cljs$core$async34773.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34773.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34773.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34773.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34773.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34773.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34773.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34773.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34774","meta34774",-1171669992,null)], null);
}));

(cljs.core.async.t_cljs$core$async34773.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34773.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34773");

(cljs.core.async.t_cljs$core$async34773.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34773");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34773.
 */
cljs.core.async.__GT_t_cljs$core$async34773 = (function cljs$core$async$__GT_t_cljs$core$async34773(p,ch,meta34774){
return (new cljs.core.async.t_cljs$core$async34773(p,ch,meta34774));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async34773(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34785 = arguments.length;
switch (G__34785) {
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
var c__32949__auto___35938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32950__auto__ = (function (){var switch__32811__auto__ = (function (state_34806){
var state_val_34807 = (state_34806[(1)]);
if((state_val_34807 === (7))){
var inst_34802 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
var statearr_34808_35940 = state_34806__$1;
(statearr_34808_35940[(2)] = inst_34802);

(statearr_34808_35940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (1))){
var state_34806__$1 = state_34806;
var statearr_34809_35941 = state_34806__$1;
(statearr_34809_35941[(2)] = null);

(statearr_34809_35941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (4))){
var inst_34788 = (state_34806[(7)]);
var inst_34788__$1 = (state_34806[(2)]);
var inst_34789 = (inst_34788__$1 == null);
var state_34806__$1 = (function (){var statearr_34810 = state_34806;
(statearr_34810[(7)] = inst_34788__$1);

return statearr_34810;
})();
if(cljs.core.truth_(inst_34789)){
var statearr_34811_35942 = state_34806__$1;
(statearr_34811_35942[(1)] = (5));

} else {
var statearr_34812_35943 = state_34806__$1;
(statearr_34812_35943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (6))){
var inst_34788 = (state_34806[(7)]);
var inst_34793 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34788) : p.call(null,inst_34788));
var state_34806__$1 = state_34806;
if(cljs.core.truth_(inst_34793)){
var statearr_34814_35944 = state_34806__$1;
(statearr_34814_35944[(1)] = (8));

} else {
var statearr_34815_35945 = state_34806__$1;
(statearr_34815_35945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (3))){
var inst_34804 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34806__$1,inst_34804);
} else {
if((state_val_34807 === (2))){
var state_34806__$1 = state_34806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34806__$1,(4),ch);
} else {
if((state_val_34807 === (11))){
var inst_34796 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
var statearr_34817_35946 = state_34806__$1;
(statearr_34817_35946[(2)] = inst_34796);

(statearr_34817_35946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (9))){
var state_34806__$1 = state_34806;
var statearr_34818_35947 = state_34806__$1;
(statearr_34818_35947[(2)] = null);

(statearr_34818_35947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (5))){
var inst_34791 = cljs.core.async.close_BANG_(out);
var state_34806__$1 = state_34806;
var statearr_34819_35948 = state_34806__$1;
(statearr_34819_35948[(2)] = inst_34791);

(statearr_34819_35948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (10))){
var inst_34799 = (state_34806[(2)]);
var state_34806__$1 = (function (){var statearr_34820 = state_34806;
(statearr_34820[(8)] = inst_34799);

return statearr_34820;
})();
var statearr_34821_35949 = state_34806__$1;
(statearr_34821_35949[(2)] = null);

(statearr_34821_35949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (8))){
var inst_34788 = (state_34806[(7)]);
var state_34806__$1 = state_34806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34806__$1,(11),out,inst_34788);
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
var cljs$core$async$state_machine__32812__auto__ = null;
var cljs$core$async$state_machine__32812__auto____0 = (function (){
var statearr_34825 = [null,null,null,null,null,null,null,null,null];
(statearr_34825[(0)] = cljs$core$async$state_machine__32812__auto__);

(statearr_34825[(1)] = (1));

return statearr_34825;
});
var cljs$core$async$state_machine__32812__auto____1 = (function (state_34806){
while(true){
var ret_value__32813__auto__ = (function (){try{while(true){
var result__32814__auto__ = switch__32811__auto__(state_34806);
if(cljs.core.keyword_identical_QMARK_(result__32814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32814__auto__;
}
break;
}
}catch (e34826){var ex__32815__auto__ = e34826;
var statearr_34827_35950 = state_34806;
(statearr_34827_35950[(2)] = ex__32815__auto__);


if(cljs.core.seq((state_34806[(4)]))){
var statearr_34828_35951 = state_34806;
(statearr_34828_35951[(1)] = cljs.core.first((state_34806[(4)])));

} else {
throw ex__32815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35953 = state_34806;
state_34806 = G__35953;
continue;
} else {
return ret_value__32813__auto__;
}
break;
}
});
cljs$core$async$state_machine__32812__auto__ = function(state_34806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32812__auto____1.call(this,state_34806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32812__auto____0;
cljs$core$async$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32812__auto____1;
return cljs$core$async$state_machine__32812__auto__;
})()
})();
var state__32951__auto__ = (function (){var statearr_34829 = f__32950__auto__();
(statearr_34829[(6)] = c__32949__auto___35938);

return statearr_34829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32951__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34831 = arguments.length;
switch (G__34831) {
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
var c__32949__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32950__auto__ = (function (){var switch__32811__auto__ = (function (state_34893){
var state_val_34894 = (state_34893[(1)]);
if((state_val_34894 === (7))){
var inst_34889 = (state_34893[(2)]);
var state_34893__$1 = state_34893;
var statearr_34895_35955 = state_34893__$1;
(statearr_34895_35955[(2)] = inst_34889);

(statearr_34895_35955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (20))){
var inst_34859 = (state_34893[(7)]);
var inst_34870 = (state_34893[(2)]);
var inst_34871 = cljs.core.next(inst_34859);
var inst_34845 = inst_34871;
var inst_34846 = null;
var inst_34847 = (0);
var inst_34848 = (0);
var state_34893__$1 = (function (){var statearr_34896 = state_34893;
(statearr_34896[(8)] = inst_34848);

(statearr_34896[(9)] = inst_34845);

(statearr_34896[(10)] = inst_34870);

(statearr_34896[(11)] = inst_34846);

(statearr_34896[(12)] = inst_34847);

return statearr_34896;
})();
var statearr_34897_35956 = state_34893__$1;
(statearr_34897_35956[(2)] = null);

(statearr_34897_35956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (1))){
var state_34893__$1 = state_34893;
var statearr_34898_35957 = state_34893__$1;
(statearr_34898_35957[(2)] = null);

(statearr_34898_35957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (4))){
var inst_34834 = (state_34893[(13)]);
var inst_34834__$1 = (state_34893[(2)]);
var inst_34835 = (inst_34834__$1 == null);
var state_34893__$1 = (function (){var statearr_34899 = state_34893;
(statearr_34899[(13)] = inst_34834__$1);

return statearr_34899;
})();
if(cljs.core.truth_(inst_34835)){
var statearr_34900_35958 = state_34893__$1;
(statearr_34900_35958[(1)] = (5));

} else {
var statearr_34901_35959 = state_34893__$1;
(statearr_34901_35959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (15))){
var state_34893__$1 = state_34893;
var statearr_34905_35960 = state_34893__$1;
(statearr_34905_35960[(2)] = null);

(statearr_34905_35960[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (21))){
var state_34893__$1 = state_34893;
var statearr_34906_35961 = state_34893__$1;
(statearr_34906_35961[(2)] = null);

(statearr_34906_35961[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (13))){
var inst_34848 = (state_34893[(8)]);
var inst_34845 = (state_34893[(9)]);
var inst_34846 = (state_34893[(11)]);
var inst_34847 = (state_34893[(12)]);
var inst_34855 = (state_34893[(2)]);
var inst_34856 = (inst_34848 + (1));
var tmp34902 = inst_34845;
var tmp34903 = inst_34846;
var tmp34904 = inst_34847;
var inst_34845__$1 = tmp34902;
var inst_34846__$1 = tmp34903;
var inst_34847__$1 = tmp34904;
var inst_34848__$1 = inst_34856;
var state_34893__$1 = (function (){var statearr_34907 = state_34893;
(statearr_34907[(8)] = inst_34848__$1);

(statearr_34907[(9)] = inst_34845__$1);

(statearr_34907[(11)] = inst_34846__$1);

(statearr_34907[(14)] = inst_34855);

(statearr_34907[(12)] = inst_34847__$1);

return statearr_34907;
})();
var statearr_34908_35962 = state_34893__$1;
(statearr_34908_35962[(2)] = null);

(statearr_34908_35962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (22))){
var state_34893__$1 = state_34893;
var statearr_34909_35963 = state_34893__$1;
(statearr_34909_35963[(2)] = null);

(statearr_34909_35963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (6))){
var inst_34834 = (state_34893[(13)]);
var inst_34843 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34834) : f.call(null,inst_34834));
var inst_34844 = cljs.core.seq(inst_34843);
var inst_34845 = inst_34844;
var inst_34846 = null;
var inst_34847 = (0);
var inst_34848 = (0);
var state_34893__$1 = (function (){var statearr_34910 = state_34893;
(statearr_34910[(8)] = inst_34848);

(statearr_34910[(9)] = inst_34845);

(statearr_34910[(11)] = inst_34846);

(statearr_34910[(12)] = inst_34847);

return statearr_34910;
})();
var statearr_34911_35964 = state_34893__$1;
(statearr_34911_35964[(2)] = null);

(statearr_34911_35964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (17))){
var inst_34859 = (state_34893[(7)]);
var inst_34863 = cljs.core.chunk_first(inst_34859);
var inst_34864 = cljs.core.chunk_rest(inst_34859);
var inst_34865 = cljs.core.count(inst_34863);
var inst_34845 = inst_34864;
var inst_34846 = inst_34863;
var inst_34847 = inst_34865;
var inst_34848 = (0);
var state_34893__$1 = (function (){var statearr_34912 = state_34893;
(statearr_34912[(8)] = inst_34848);

(statearr_34912[(9)] = inst_34845);

(statearr_34912[(11)] = inst_34846);

(statearr_34912[(12)] = inst_34847);

return statearr_34912;
})();
var statearr_34913_35972 = state_34893__$1;
(statearr_34913_35972[(2)] = null);

(statearr_34913_35972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (3))){
var inst_34891 = (state_34893[(2)]);
var state_34893__$1 = state_34893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34893__$1,inst_34891);
} else {
if((state_val_34894 === (12))){
var inst_34879 = (state_34893[(2)]);
var state_34893__$1 = state_34893;
var statearr_34914_35973 = state_34893__$1;
(statearr_34914_35973[(2)] = inst_34879);

(statearr_34914_35973[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (2))){
var state_34893__$1 = state_34893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34893__$1,(4),in$);
} else {
if((state_val_34894 === (23))){
var inst_34887 = (state_34893[(2)]);
var state_34893__$1 = state_34893;
var statearr_34915_35974 = state_34893__$1;
(statearr_34915_35974[(2)] = inst_34887);

(statearr_34915_35974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (19))){
var inst_34874 = (state_34893[(2)]);
var state_34893__$1 = state_34893;
var statearr_34916_35975 = state_34893__$1;
(statearr_34916_35975[(2)] = inst_34874);

(statearr_34916_35975[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (11))){
var inst_34845 = (state_34893[(9)]);
var inst_34859 = (state_34893[(7)]);
var inst_34859__$1 = cljs.core.seq(inst_34845);
var state_34893__$1 = (function (){var statearr_34917 = state_34893;
(statearr_34917[(7)] = inst_34859__$1);

return statearr_34917;
})();
if(inst_34859__$1){
var statearr_34918_35976 = state_34893__$1;
(statearr_34918_35976[(1)] = (14));

} else {
var statearr_34919_35981 = state_34893__$1;
(statearr_34919_35981[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (9))){
var inst_34881 = (state_34893[(2)]);
var inst_34882 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34893__$1 = (function (){var statearr_34920 = state_34893;
(statearr_34920[(15)] = inst_34881);

return statearr_34920;
})();
if(cljs.core.truth_(inst_34882)){
var statearr_34921_35982 = state_34893__$1;
(statearr_34921_35982[(1)] = (21));

} else {
var statearr_34922_35983 = state_34893__$1;
(statearr_34922_35983[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (5))){
var inst_34837 = cljs.core.async.close_BANG_(out);
var state_34893__$1 = state_34893;
var statearr_34923_35984 = state_34893__$1;
(statearr_34923_35984[(2)] = inst_34837);

(statearr_34923_35984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (14))){
var inst_34859 = (state_34893[(7)]);
var inst_34861 = cljs.core.chunked_seq_QMARK_(inst_34859);
var state_34893__$1 = state_34893;
if(inst_34861){
var statearr_34925_35986 = state_34893__$1;
(statearr_34925_35986[(1)] = (17));

} else {
var statearr_34926_35987 = state_34893__$1;
(statearr_34926_35987[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (16))){
var inst_34877 = (state_34893[(2)]);
var state_34893__$1 = state_34893;
var statearr_34927_35988 = state_34893__$1;
(statearr_34927_35988[(2)] = inst_34877);

(statearr_34927_35988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (10))){
var inst_34848 = (state_34893[(8)]);
var inst_34846 = (state_34893[(11)]);
var inst_34853 = cljs.core._nth(inst_34846,inst_34848);
var state_34893__$1 = state_34893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34893__$1,(13),out,inst_34853);
} else {
if((state_val_34894 === (18))){
var inst_34859 = (state_34893[(7)]);
var inst_34868 = cljs.core.first(inst_34859);
var state_34893__$1 = state_34893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34893__$1,(20),out,inst_34868);
} else {
if((state_val_34894 === (8))){
var inst_34848 = (state_34893[(8)]);
var inst_34847 = (state_34893[(12)]);
var inst_34850 = (inst_34848 < inst_34847);
var inst_34851 = inst_34850;
var state_34893__$1 = state_34893;
if(cljs.core.truth_(inst_34851)){
var statearr_34928_35989 = state_34893__$1;
(statearr_34928_35989[(1)] = (10));

} else {
var statearr_34929_35990 = state_34893__$1;
(statearr_34929_35990[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__32812__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32812__auto____0 = (function (){
var statearr_34933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34933[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32812__auto__);

(statearr_34933[(1)] = (1));

return statearr_34933;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32812__auto____1 = (function (state_34893){
while(true){
var ret_value__32813__auto__ = (function (){try{while(true){
var result__32814__auto__ = switch__32811__auto__(state_34893);
if(cljs.core.keyword_identical_QMARK_(result__32814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32814__auto__;
}
break;
}
}catch (e34934){var ex__32815__auto__ = e34934;
var statearr_34935_35992 = state_34893;
(statearr_34935_35992[(2)] = ex__32815__auto__);


if(cljs.core.seq((state_34893[(4)]))){
var statearr_34936_35993 = state_34893;
(statearr_34936_35993[(1)] = cljs.core.first((state_34893[(4)])));

} else {
throw ex__32815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35994 = state_34893;
state_34893 = G__35994;
continue;
} else {
return ret_value__32813__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32812__auto__ = function(state_34893){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32812__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32812__auto____1.call(this,state_34893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32812__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32812__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32812__auto__;
})()
})();
var state__32951__auto__ = (function (){var statearr_34937 = f__32950__auto__();
(statearr_34937[(6)] = c__32949__auto__);

return statearr_34937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32951__auto__);
}));

return c__32949__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34943 = arguments.length;
switch (G__34943) {
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
var G__34945 = arguments.length;
switch (G__34945) {
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
var G__34953 = arguments.length;
switch (G__34953) {
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
var c__32949__auto___36002 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32950__auto__ = (function (){var switch__32811__auto__ = (function (state_35011){
var state_val_35012 = (state_35011[(1)]);
if((state_val_35012 === (7))){
var inst_35000 = (state_35011[(2)]);
var state_35011__$1 = state_35011;
var statearr_35013_36003 = state_35011__$1;
(statearr_35013_36003[(2)] = inst_35000);

(statearr_35013_36003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35012 === (1))){
var inst_34968 = null;
var state_35011__$1 = (function (){var statearr_35015 = state_35011;
(statearr_35015[(7)] = inst_34968);

return statearr_35015;
})();
var statearr_35017_36004 = state_35011__$1;
(statearr_35017_36004[(2)] = null);

(statearr_35017_36004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35012 === (4))){
var inst_34979 = (state_35011[(8)]);
var inst_34979__$1 = (state_35011[(2)]);
var inst_34986 = (inst_34979__$1 == null);
var inst_34987 = cljs.core.not(inst_34986);
var state_35011__$1 = (function (){var statearr_35018 = state_35011;
(statearr_35018[(8)] = inst_34979__$1);

return statearr_35018;
})();
if(inst_34987){
var statearr_35019_36005 = state_35011__$1;
(statearr_35019_36005[(1)] = (5));

} else {
var statearr_35020_36006 = state_35011__$1;
(statearr_35020_36006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35012 === (6))){
var state_35011__$1 = state_35011;
var statearr_35021_36007 = state_35011__$1;
(statearr_35021_36007[(2)] = null);

(statearr_35021_36007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35012 === (3))){
var inst_35002 = (state_35011[(2)]);
var inst_35003 = cljs.core.async.close_BANG_(out);
var state_35011__$1 = (function (){var statearr_35022 = state_35011;
(statearr_35022[(9)] = inst_35002);

return statearr_35022;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35011__$1,inst_35003);
} else {
if((state_val_35012 === (2))){
var state_35011__$1 = state_35011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35011__$1,(4),ch);
} else {
if((state_val_35012 === (11))){
var inst_34979 = (state_35011[(8)]);
var inst_34994 = (state_35011[(2)]);
var inst_34968 = inst_34979;
var state_35011__$1 = (function (){var statearr_35024 = state_35011;
(statearr_35024[(7)] = inst_34968);

(statearr_35024[(10)] = inst_34994);

return statearr_35024;
})();
var statearr_35025_36008 = state_35011__$1;
(statearr_35025_36008[(2)] = null);

(statearr_35025_36008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35012 === (9))){
var inst_34979 = (state_35011[(8)]);
var state_35011__$1 = state_35011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35011__$1,(11),out,inst_34979);
} else {
if((state_val_35012 === (5))){
var inst_34979 = (state_35011[(8)]);
var inst_34968 = (state_35011[(7)]);
var inst_34989 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34979,inst_34968);
var state_35011__$1 = state_35011;
if(inst_34989){
var statearr_35027_36010 = state_35011__$1;
(statearr_35027_36010[(1)] = (8));

} else {
var statearr_35028_36012 = state_35011__$1;
(statearr_35028_36012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35012 === (10))){
var inst_34997 = (state_35011[(2)]);
var state_35011__$1 = state_35011;
var statearr_35029_36013 = state_35011__$1;
(statearr_35029_36013[(2)] = inst_34997);

(statearr_35029_36013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35012 === (8))){
var inst_34968 = (state_35011[(7)]);
var tmp35026 = inst_34968;
var inst_34968__$1 = tmp35026;
var state_35011__$1 = (function (){var statearr_35033 = state_35011;
(statearr_35033[(7)] = inst_34968__$1);

return statearr_35033;
})();
var statearr_35034_36015 = state_35011__$1;
(statearr_35034_36015[(2)] = null);

(statearr_35034_36015[(1)] = (2));


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
var cljs$core$async$state_machine__32812__auto__ = null;
var cljs$core$async$state_machine__32812__auto____0 = (function (){
var statearr_35035 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35035[(0)] = cljs$core$async$state_machine__32812__auto__);

(statearr_35035[(1)] = (1));

return statearr_35035;
});
var cljs$core$async$state_machine__32812__auto____1 = (function (state_35011){
while(true){
var ret_value__32813__auto__ = (function (){try{while(true){
var result__32814__auto__ = switch__32811__auto__(state_35011);
if(cljs.core.keyword_identical_QMARK_(result__32814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32814__auto__;
}
break;
}
}catch (e35036){var ex__32815__auto__ = e35036;
var statearr_35037_36016 = state_35011;
(statearr_35037_36016[(2)] = ex__32815__auto__);


if(cljs.core.seq((state_35011[(4)]))){
var statearr_35038_36017 = state_35011;
(statearr_35038_36017[(1)] = cljs.core.first((state_35011[(4)])));

} else {
throw ex__32815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36018 = state_35011;
state_35011 = G__36018;
continue;
} else {
return ret_value__32813__auto__;
}
break;
}
});
cljs$core$async$state_machine__32812__auto__ = function(state_35011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32812__auto____1.call(this,state_35011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32812__auto____0;
cljs$core$async$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32812__auto____1;
return cljs$core$async$state_machine__32812__auto__;
})()
})();
var state__32951__auto__ = (function (){var statearr_35039 = f__32950__auto__();
(statearr_35039[(6)] = c__32949__auto___36002);

return statearr_35039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32951__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35041 = arguments.length;
switch (G__35041) {
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
var c__32949__auto___36020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32950__auto__ = (function (){var switch__32811__auto__ = (function (state_35079){
var state_val_35080 = (state_35079[(1)]);
if((state_val_35080 === (7))){
var inst_35075 = (state_35079[(2)]);
var state_35079__$1 = state_35079;
var statearr_35081_36021 = state_35079__$1;
(statearr_35081_36021[(2)] = inst_35075);

(statearr_35081_36021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (1))){
var inst_35042 = (new Array(n));
var inst_35043 = inst_35042;
var inst_35044 = (0);
var state_35079__$1 = (function (){var statearr_35082 = state_35079;
(statearr_35082[(7)] = inst_35044);

(statearr_35082[(8)] = inst_35043);

return statearr_35082;
})();
var statearr_35083_36022 = state_35079__$1;
(statearr_35083_36022[(2)] = null);

(statearr_35083_36022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (4))){
var inst_35047 = (state_35079[(9)]);
var inst_35047__$1 = (state_35079[(2)]);
var inst_35048 = (inst_35047__$1 == null);
var inst_35049 = cljs.core.not(inst_35048);
var state_35079__$1 = (function (){var statearr_35084 = state_35079;
(statearr_35084[(9)] = inst_35047__$1);

return statearr_35084;
})();
if(inst_35049){
var statearr_35085_36024 = state_35079__$1;
(statearr_35085_36024[(1)] = (5));

} else {
var statearr_35086_36025 = state_35079__$1;
(statearr_35086_36025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (15))){
var inst_35069 = (state_35079[(2)]);
var state_35079__$1 = state_35079;
var statearr_35087_36026 = state_35079__$1;
(statearr_35087_36026[(2)] = inst_35069);

(statearr_35087_36026[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (13))){
var state_35079__$1 = state_35079;
var statearr_35088_36027 = state_35079__$1;
(statearr_35088_36027[(2)] = null);

(statearr_35088_36027[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (6))){
var inst_35044 = (state_35079[(7)]);
var inst_35065 = (inst_35044 > (0));
var state_35079__$1 = state_35079;
if(cljs.core.truth_(inst_35065)){
var statearr_35089_36031 = state_35079__$1;
(statearr_35089_36031[(1)] = (12));

} else {
var statearr_35090_36032 = state_35079__$1;
(statearr_35090_36032[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (3))){
var inst_35077 = (state_35079[(2)]);
var state_35079__$1 = state_35079;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35079__$1,inst_35077);
} else {
if((state_val_35080 === (12))){
var inst_35043 = (state_35079[(8)]);
var inst_35067 = cljs.core.vec(inst_35043);
var state_35079__$1 = state_35079;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35079__$1,(15),out,inst_35067);
} else {
if((state_val_35080 === (2))){
var state_35079__$1 = state_35079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35079__$1,(4),ch);
} else {
if((state_val_35080 === (11))){
var inst_35059 = (state_35079[(2)]);
var inst_35060 = (new Array(n));
var inst_35043 = inst_35060;
var inst_35044 = (0);
var state_35079__$1 = (function (){var statearr_35091 = state_35079;
(statearr_35091[(7)] = inst_35044);

(statearr_35091[(8)] = inst_35043);

(statearr_35091[(10)] = inst_35059);

return statearr_35091;
})();
var statearr_35092_36033 = state_35079__$1;
(statearr_35092_36033[(2)] = null);

(statearr_35092_36033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (9))){
var inst_35043 = (state_35079[(8)]);
var inst_35057 = cljs.core.vec(inst_35043);
var state_35079__$1 = state_35079;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35079__$1,(11),out,inst_35057);
} else {
if((state_val_35080 === (5))){
var inst_35047 = (state_35079[(9)]);
var inst_35052 = (state_35079[(11)]);
var inst_35044 = (state_35079[(7)]);
var inst_35043 = (state_35079[(8)]);
var inst_35051 = (inst_35043[inst_35044] = inst_35047);
var inst_35052__$1 = (inst_35044 + (1));
var inst_35053 = (inst_35052__$1 < n);
var state_35079__$1 = (function (){var statearr_35093 = state_35079;
(statearr_35093[(11)] = inst_35052__$1);

(statearr_35093[(12)] = inst_35051);

return statearr_35093;
})();
if(cljs.core.truth_(inst_35053)){
var statearr_35094_36034 = state_35079__$1;
(statearr_35094_36034[(1)] = (8));

} else {
var statearr_35095_36035 = state_35079__$1;
(statearr_35095_36035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (14))){
var inst_35072 = (state_35079[(2)]);
var inst_35073 = cljs.core.async.close_BANG_(out);
var state_35079__$1 = (function (){var statearr_35097 = state_35079;
(statearr_35097[(13)] = inst_35072);

return statearr_35097;
})();
var statearr_35098_36036 = state_35079__$1;
(statearr_35098_36036[(2)] = inst_35073);

(statearr_35098_36036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (10))){
var inst_35063 = (state_35079[(2)]);
var state_35079__$1 = state_35079;
var statearr_35099_36037 = state_35079__$1;
(statearr_35099_36037[(2)] = inst_35063);

(statearr_35099_36037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35080 === (8))){
var inst_35052 = (state_35079[(11)]);
var inst_35043 = (state_35079[(8)]);
var tmp35096 = inst_35043;
var inst_35043__$1 = tmp35096;
var inst_35044 = inst_35052;
var state_35079__$1 = (function (){var statearr_35108 = state_35079;
(statearr_35108[(7)] = inst_35044);

(statearr_35108[(8)] = inst_35043__$1);

return statearr_35108;
})();
var statearr_35109_36038 = state_35079__$1;
(statearr_35109_36038[(2)] = null);

(statearr_35109_36038[(1)] = (2));


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
var cljs$core$async$state_machine__32812__auto__ = null;
var cljs$core$async$state_machine__32812__auto____0 = (function (){
var statearr_35113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35113[(0)] = cljs$core$async$state_machine__32812__auto__);

(statearr_35113[(1)] = (1));

return statearr_35113;
});
var cljs$core$async$state_machine__32812__auto____1 = (function (state_35079){
while(true){
var ret_value__32813__auto__ = (function (){try{while(true){
var result__32814__auto__ = switch__32811__auto__(state_35079);
if(cljs.core.keyword_identical_QMARK_(result__32814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32814__auto__;
}
break;
}
}catch (e35114){var ex__32815__auto__ = e35114;
var statearr_35115_36040 = state_35079;
(statearr_35115_36040[(2)] = ex__32815__auto__);


if(cljs.core.seq((state_35079[(4)]))){
var statearr_35116_36041 = state_35079;
(statearr_35116_36041[(1)] = cljs.core.first((state_35079[(4)])));

} else {
throw ex__32815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36042 = state_35079;
state_35079 = G__36042;
continue;
} else {
return ret_value__32813__auto__;
}
break;
}
});
cljs$core$async$state_machine__32812__auto__ = function(state_35079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32812__auto____1.call(this,state_35079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32812__auto____0;
cljs$core$async$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32812__auto____1;
return cljs$core$async$state_machine__32812__auto__;
})()
})();
var state__32951__auto__ = (function (){var statearr_35117 = f__32950__auto__();
(statearr_35117[(6)] = c__32949__auto___36020);

return statearr_35117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32951__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35119 = arguments.length;
switch (G__35119) {
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
var c__32949__auto___36044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32950__auto__ = (function (){var switch__32811__auto__ = (function (state_35164){
var state_val_35165 = (state_35164[(1)]);
if((state_val_35165 === (7))){
var inst_35160 = (state_35164[(2)]);
var state_35164__$1 = state_35164;
var statearr_35166_36045 = state_35164__$1;
(statearr_35166_36045[(2)] = inst_35160);

(statearr_35166_36045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35165 === (1))){
var inst_35120 = [];
var inst_35121 = inst_35120;
var inst_35122 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35164__$1 = (function (){var statearr_35167 = state_35164;
(statearr_35167[(7)] = inst_35122);

(statearr_35167[(8)] = inst_35121);

return statearr_35167;
})();
var statearr_35168_36046 = state_35164__$1;
(statearr_35168_36046[(2)] = null);

(statearr_35168_36046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35165 === (4))){
var inst_35125 = (state_35164[(9)]);
var inst_35125__$1 = (state_35164[(2)]);
var inst_35126 = (inst_35125__$1 == null);
var inst_35127 = cljs.core.not(inst_35126);
var state_35164__$1 = (function (){var statearr_35169 = state_35164;
(statearr_35169[(9)] = inst_35125__$1);

return statearr_35169;
})();
if(inst_35127){
var statearr_35170_36047 = state_35164__$1;
(statearr_35170_36047[(1)] = (5));

} else {
var statearr_35171_36048 = state_35164__$1;
(statearr_35171_36048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35165 === (15))){
var inst_35121 = (state_35164[(8)]);
var inst_35152 = cljs.core.vec(inst_35121);
var state_35164__$1 = state_35164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35164__$1,(18),out,inst_35152);
} else {
if((state_val_35165 === (13))){
var inst_35147 = (state_35164[(2)]);
var state_35164__$1 = state_35164;
var statearr_35174_36053 = state_35164__$1;
(statearr_35174_36053[(2)] = inst_35147);

(statearr_35174_36053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35165 === (6))){
var inst_35121 = (state_35164[(8)]);
var inst_35149 = inst_35121.length;
var inst_35150 = (inst_35149 > (0));
var state_35164__$1 = state_35164;
if(cljs.core.truth_(inst_35150)){
var statearr_35175_36054 = state_35164__$1;
(statearr_35175_36054[(1)] = (15));

} else {
var statearr_35176_36055 = state_35164__$1;
(statearr_35176_36055[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35165 === (17))){
var inst_35157 = (state_35164[(2)]);
var inst_35158 = cljs.core.async.close_BANG_(out);
var state_35164__$1 = (function (){var statearr_35179 = state_35164;
(statearr_35179[(10)] = inst_35157);

return statearr_35179;
})();
var statearr_35180_36056 = state_35164__$1;
(statearr_35180_36056[(2)] = inst_35158);

(statearr_35180_36056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35165 === (3))){
var inst_35162 = (state_35164[(2)]);
var state_35164__$1 = state_35164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35164__$1,inst_35162);
} else {
if((state_val_35165 === (12))){
var inst_35121 = (state_35164[(8)]);
var inst_35140 = cljs.core.vec(inst_35121);
var state_35164__$1 = state_35164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35164__$1,(14),out,inst_35140);
} else {
if((state_val_35165 === (2))){
var state_35164__$1 = state_35164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35164__$1,(4),ch);
} else {
if((state_val_35165 === (11))){
var inst_35121 = (state_35164[(8)]);
var inst_35129 = (state_35164[(11)]);
var inst_35125 = (state_35164[(9)]);
var inst_35137 = inst_35121.push(inst_35125);
var tmp35181 = inst_35121;
var inst_35121__$1 = tmp35181;
var inst_35122 = inst_35129;
var state_35164__$1 = (function (){var statearr_35184 = state_35164;
(statearr_35184[(7)] = inst_35122);

(statearr_35184[(8)] = inst_35121__$1);

(statearr_35184[(12)] = inst_35137);

return statearr_35184;
})();
var statearr_35185_36061 = state_35164__$1;
(statearr_35185_36061[(2)] = null);

(statearr_35185_36061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35165 === (9))){
var inst_35122 = (state_35164[(7)]);
var inst_35133 = cljs.core.keyword_identical_QMARK_(inst_35122,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35164__$1 = state_35164;
var statearr_35186_36066 = state_35164__$1;
(statearr_35186_36066[(2)] = inst_35133);

(statearr_35186_36066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35165 === (5))){
var inst_35130 = (state_35164[(13)]);
var inst_35122 = (state_35164[(7)]);
var inst_35129 = (state_35164[(11)]);
var inst_35125 = (state_35164[(9)]);
var inst_35129__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35125) : f.call(null,inst_35125));
var inst_35130__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35129__$1,inst_35122);
var state_35164__$1 = (function (){var statearr_35187 = state_35164;
(statearr_35187[(13)] = inst_35130__$1);

(statearr_35187[(11)] = inst_35129__$1);

return statearr_35187;
})();
if(inst_35130__$1){
var statearr_35189_36068 = state_35164__$1;
(statearr_35189_36068[(1)] = (8));

} else {
var statearr_35191_36069 = state_35164__$1;
(statearr_35191_36069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35165 === (14))){
var inst_35129 = (state_35164[(11)]);
var inst_35125 = (state_35164[(9)]);
var inst_35142 = (state_35164[(2)]);
var inst_35143 = [];
var inst_35144 = inst_35143.push(inst_35125);
var inst_35121 = inst_35143;
var inst_35122 = inst_35129;
var state_35164__$1 = (function (){var statearr_35192 = state_35164;
(statearr_35192[(7)] = inst_35122);

(statearr_35192[(14)] = inst_35142);

(statearr_35192[(8)] = inst_35121);

(statearr_35192[(15)] = inst_35144);

return statearr_35192;
})();
var statearr_35193_36070 = state_35164__$1;
(statearr_35193_36070[(2)] = null);

(statearr_35193_36070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35165 === (16))){
var state_35164__$1 = state_35164;
var statearr_35194_36071 = state_35164__$1;
(statearr_35194_36071[(2)] = null);

(statearr_35194_36071[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35165 === (10))){
var inst_35135 = (state_35164[(2)]);
var state_35164__$1 = state_35164;
if(cljs.core.truth_(inst_35135)){
var statearr_35195_36072 = state_35164__$1;
(statearr_35195_36072[(1)] = (11));

} else {
var statearr_35196_36073 = state_35164__$1;
(statearr_35196_36073[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35165 === (18))){
var inst_35154 = (state_35164[(2)]);
var state_35164__$1 = state_35164;
var statearr_35197_36074 = state_35164__$1;
(statearr_35197_36074[(2)] = inst_35154);

(statearr_35197_36074[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35165 === (8))){
var inst_35130 = (state_35164[(13)]);
var state_35164__$1 = state_35164;
var statearr_35198_36076 = state_35164__$1;
(statearr_35198_36076[(2)] = inst_35130);

(statearr_35198_36076[(1)] = (10));


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
var cljs$core$async$state_machine__32812__auto__ = null;
var cljs$core$async$state_machine__32812__auto____0 = (function (){
var statearr_35199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35199[(0)] = cljs$core$async$state_machine__32812__auto__);

(statearr_35199[(1)] = (1));

return statearr_35199;
});
var cljs$core$async$state_machine__32812__auto____1 = (function (state_35164){
while(true){
var ret_value__32813__auto__ = (function (){try{while(true){
var result__32814__auto__ = switch__32811__auto__(state_35164);
if(cljs.core.keyword_identical_QMARK_(result__32814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32814__auto__;
}
break;
}
}catch (e35200){var ex__32815__auto__ = e35200;
var statearr_35201_36077 = state_35164;
(statearr_35201_36077[(2)] = ex__32815__auto__);


if(cljs.core.seq((state_35164[(4)]))){
var statearr_35202_36078 = state_35164;
(statearr_35202_36078[(1)] = cljs.core.first((state_35164[(4)])));

} else {
throw ex__32815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36080 = state_35164;
state_35164 = G__36080;
continue;
} else {
return ret_value__32813__auto__;
}
break;
}
});
cljs$core$async$state_machine__32812__auto__ = function(state_35164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32812__auto____1.call(this,state_35164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32812__auto____0;
cljs$core$async$state_machine__32812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32812__auto____1;
return cljs$core$async$state_machine__32812__auto__;
})()
})();
var state__32951__auto__ = (function (){var statearr_35203 = f__32950__auto__();
(statearr_35203[(6)] = c__32949__auto___36044);

return statearr_35203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32951__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
