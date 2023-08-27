goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41817 = arguments.length;
var i__5770__auto___41818 = (0);
while(true){
if((i__5770__auto___41818 < len__5769__auto___41817)){
args__5775__auto__.push((arguments[i__5770__auto___41818]));

var G__41819 = (i__5770__auto___41818 + (1));
i__5770__auto___41818 = G__41819;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__41727_41820 = keyvals;
var vec__41728_41821 = G__41727_41820;
var seq__41729_41822 = cljs.core.seq(vec__41728_41821);
var first__41730_41823 = cljs.core.first(seq__41729_41822);
var seq__41729_41824__$1 = cljs.core.next(seq__41729_41822);
var k_41825 = first__41730_41823;
var first__41730_41826__$1 = cljs.core.first(seq__41729_41824__$1);
var seq__41729_41827__$2 = cljs.core.next(seq__41729_41824__$1);
var v_41828 = first__41730_41826__$1;
var keyvals_41829__$1 = seq__41729_41827__$2;
var G__41727_41830__$1 = G__41727_41820;
while(true){
var vec__41731_41832 = G__41727_41830__$1;
var seq__41732_41833 = cljs.core.seq(vec__41731_41832);
var first__41733_41834 = cljs.core.first(seq__41732_41833);
var seq__41732_41835__$1 = cljs.core.next(seq__41732_41833);
var k_41836__$1 = first__41733_41834;
var first__41733_41837__$1 = cljs.core.first(seq__41732_41835__$1);
var seq__41732_41838__$2 = cljs.core.next(seq__41732_41835__$1);
var v_41839__$1 = first__41733_41837__$1;
var keyvals_41840__$2 = seq__41732_41838__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_41836__$1)] = v_41839__$1);

if(keyvals_41840__$2){
var G__41841 = keyvals_41840__$2;
G__41727_41830__$1 = G__41841;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq41722){
var G__41723 = cljs.core.first(seq41722);
var seq41722__$1 = cljs.core.next(seq41722);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41723,seq41722__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__41735 = arguments.length;
switch (G__41735) {
case 1:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1 = (function (k){
return (function (obj){
var obj41736 = obj;
if((!((obj41736 == null)))){
return (obj41736[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj41737 = obj;
if((!((obj41737 == null)))){
return (obj41737[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__40713__auto__ = (function (){var obj41738 = obj;
if((!((obj41738 == null)))){
return (obj41738[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__40713__auto__)){
return not_found;
} else {
return val__40713__auto__;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__41740 = arguments.length;
switch (G__41740) {
case 1:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
var ks__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks);
return (function (obj){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,ks__$1);
});
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj41741 = self__.obj;
if((!((obj41741 == null)))){
return (obj41741[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__40713__auto__ = (function (){var obj41742 = self__.obj;
if((!((obj41742 == null)))){
return (obj41742[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__40713__auto__)){
return not_found;
} else {
return val__40713__auto__;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41844 = arguments.length;
var i__5770__auto___41845 = (0);
while(true){
if((i__5770__auto___41845 < len__5769__auto___41844)){
args__5775__auto__.push((arguments[i__5770__auto___41845]));

var G__41846 = (i__5770__auto___41845 + (1));
i__5770__auto___41845 = G__41846;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__41748 = keyvals;
var vec__41749 = G__41748;
var seq__41750 = cljs.core.seq(vec__41749);
var first__41751 = cljs.core.first(seq__41750);
var seq__41750__$1 = cljs.core.next(seq__41750);
var k = first__41751;
var first__41751__$1 = cljs.core.first(seq__41750__$1);
var seq__41750__$2 = cljs.core.next(seq__41750__$1);
var v = first__41751__$1;
var kvs = seq__41750__$2;
var G__41748__$1 = G__41748;
while(true){
var vec__41752 = G__41748__$1;
var seq__41753 = cljs.core.seq(vec__41752);
var first__41754 = cljs.core.first(seq__41753);
var seq__41753__$1 = cljs.core.next(seq__41753);
var k__$1 = first__41754;
var first__41754__$1 = cljs.core.first(seq__41753__$1);
var seq__41753__$2 = cljs.core.next(seq__41753__$1);
var v__$1 = first__41754__$1;
var kvs__$1 = seq__41753__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__41850 = kvs__$1;
G__41748__$1 = G__41850;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq41743){
var G__41744 = cljs.core.first(seq41743);
var seq41743__$1 = cljs.core.next(seq41743);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41744,seq41743__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41851 = arguments.length;
var i__5770__auto___41852 = (0);
while(true){
if((i__5770__auto___41852 < len__5769__auto___41851)){
args__5775__auto__.push((arguments[i__5770__auto___41852]));

var G__41853 = (i__5770__auto___41852 + (1));
i__5770__auto___41852 = G__41853;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq41755){
var G__41756 = cljs.core.first(seq41755);
var seq41755__$1 = cljs.core.next(seq41755);
var G__41757 = cljs.core.first(seq41755__$1);
var seq41755__$2 = cljs.core.next(seq41755__$1);
var G__41758 = cljs.core.first(seq41755__$2);
var seq41755__$3 = cljs.core.next(seq41755__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41756,G__41757,G__41758,seq41755__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41854 = arguments.length;
var i__5770__auto___41855 = (0);
while(true){
if((i__5770__auto___41855 < len__5769__auto___41854)){
args__5775__auto__.push((arguments[i__5770__auto___41855]));

var G__41856 = (i__5770__auto___41855 + (1));
i__5770__auto___41855 = G__41856;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq41759){
var G__41760 = cljs.core.first(seq41759);
var seq41759__$1 = cljs.core.next(seq41759);
var G__41761 = cljs.core.first(seq41759__$1);
var seq41759__$2 = cljs.core.next(seq41759__$1);
var G__41762 = cljs.core.first(seq41759__$2);
var seq41759__$3 = cljs.core.next(seq41759__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41760,G__41761,G__41762,seq41759__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend! o other)
 *   (j/extend! o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__41767 = arguments.length;
switch (G__41767) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___41858 = arguments.length;
var i__5770__auto___41859 = (0);
while(true){
if((i__5770__auto___41859 < len__5769__auto___41858)){
args_arr__5794__auto__.push((arguments[i__5770__auto___41859]));

var G__41860 = (i__5770__auto___41859 + (1));
i__5770__auto___41859 = G__41860;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__41768_41861 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__41769_41862 = null;
var count__41770_41863 = (0);
var i__41771_41864 = (0);
while(true){
if((i__41771_41864 < count__41770_41863)){
var k_41865 = chunk__41769_41862.cljs$core$IIndexed$_nth$arity$2(null,i__41771_41864);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41865,applied_science.js_interop.unchecked_get(x,k_41865)], 0));


var G__41866 = seq__41768_41861;
var G__41867 = chunk__41769_41862;
var G__41868 = count__41770_41863;
var G__41869 = (i__41771_41864 + (1));
seq__41768_41861 = G__41866;
chunk__41769_41862 = G__41867;
count__41770_41863 = G__41868;
i__41771_41864 = G__41869;
continue;
} else {
var temp__5804__auto___41870 = cljs.core.seq(seq__41768_41861);
if(temp__5804__auto___41870){
var seq__41768_41871__$1 = temp__5804__auto___41870;
if(cljs.core.chunked_seq_QMARK_(seq__41768_41871__$1)){
var c__5568__auto___41872 = cljs.core.chunk_first(seq__41768_41871__$1);
var G__41873 = cljs.core.chunk_rest(seq__41768_41871__$1);
var G__41874 = c__5568__auto___41872;
var G__41875 = cljs.core.count(c__5568__auto___41872);
var G__41876 = (0);
seq__41768_41861 = G__41873;
chunk__41769_41862 = G__41874;
count__41770_41863 = G__41875;
i__41771_41864 = G__41876;
continue;
} else {
var k_41877 = cljs.core.first(seq__41768_41871__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41877,applied_science.js_interop.unchecked_get(x,k_41877)], 0));


var G__41878 = cljs.core.next(seq__41768_41871__$1);
var G__41879 = null;
var G__41880 = (0);
var G__41881 = (0);
seq__41768_41861 = G__41878;
chunk__41769_41862 = G__41879;
count__41770_41863 = G__41880;
i__41771_41864 = G__41881;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq41764){
var G__41765 = cljs.core.first(seq41764);
var seq41764__$1 = cljs.core.next(seq41764);
var G__41766 = cljs.core.first(seq41764__$1);
var seq41764__$2 = cljs.core.next(seq41764__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41765,G__41766,seq41764__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__41772 = array;
G__41772.push(x);

return G__41772;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__41773 = array;
G__41773.unshift(x);

return G__41773;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41882 = arguments.length;
var i__5770__auto___41883 = (0);
while(true){
if((i__5770__auto___41883 < len__5769__auto___41882)){
args__5775__auto__.push((arguments[i__5770__auto___41883]));

var G__41884 = (i__5770__auto___41883 + (1));
i__5770__auto___41883 = G__41884;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj41777 = obj;
if((!((obj41777 == null)))){
return (obj41777[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq41774){
var G__41775 = cljs.core.first(seq41774);
var seq41774__$1 = cljs.core.next(seq41774);
var G__41776 = cljs.core.first(seq41774__$1);
var seq41774__$2 = cljs.core.next(seq41774__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41775,G__41776,seq41774__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj41778 = obj;
if((!((obj41778 == null)))){
return (obj41778[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41885 = arguments.length;
var i__5770__auto___41886 = (0);
while(true){
if((i__5770__auto___41886 < len__5769__auto___41885)){
args__5775__auto__.push((arguments[i__5770__auto___41886]));

var G__41887 = (i__5770__auto___41886 + (1));
i__5770__auto___41886 = G__41887;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq41779){
var G__41780 = cljs.core.first(seq41779);
var seq41779__$1 = cljs.core.next(seq41779);
var G__41781 = cljs.core.first(seq41779__$1);
var seq41779__$2 = cljs.core.next(seq41779__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41780,G__41781,seq41779__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41888 = arguments.length;
var i__5770__auto___41889 = (0);
while(true){
if((i__5770__auto___41889 < len__5769__auto___41888)){
args__5775__auto__.push((arguments[i__5770__auto___41889]));

var G__41890 = (i__5770__auto___41889 + (1));
i__5770__auto___41889 = G__41890;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__41785_41891 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__41786_41892 = null;
var count__41787_41893 = (0);
var i__41788_41894 = (0);
while(true){
if((i__41788_41894 < count__41787_41893)){
var vec__41803_41895 = chunk__41786_41892.cljs$core$IIndexed$_nth$arity$2(null,i__41788_41894);
var k_41896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41803_41895,(0),null);
var v_41897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41803_41895,(1),null);
var obj41806_41898 = obj;
var obj41807_41899 = (((!((obj41806_41898 == null))))?obj41806_41898:({}));
(obj41807_41899[applied_science.js_interop.impl.wrap_key(k_41896)] = v_41897);



var G__41900 = seq__41785_41891;
var G__41901 = chunk__41786_41892;
var G__41902 = count__41787_41893;
var G__41903 = (i__41788_41894 + (1));
seq__41785_41891 = G__41900;
chunk__41786_41892 = G__41901;
count__41787_41893 = G__41902;
i__41788_41894 = G__41903;
continue;
} else {
var temp__5804__auto___41904 = cljs.core.seq(seq__41785_41891);
if(temp__5804__auto___41904){
var seq__41785_41905__$1 = temp__5804__auto___41904;
if(cljs.core.chunked_seq_QMARK_(seq__41785_41905__$1)){
var c__5568__auto___41906 = cljs.core.chunk_first(seq__41785_41905__$1);
var G__41907 = cljs.core.chunk_rest(seq__41785_41905__$1);
var G__41908 = c__5568__auto___41906;
var G__41909 = cljs.core.count(c__5568__auto___41906);
var G__41910 = (0);
seq__41785_41891 = G__41907;
chunk__41786_41892 = G__41908;
count__41787_41893 = G__41909;
i__41788_41894 = G__41910;
continue;
} else {
var vec__41810_41911 = cljs.core.first(seq__41785_41905__$1);
var k_41912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41810_41911,(0),null);
var v_41913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41810_41911,(1),null);
var obj41813_41914 = obj;
var obj41814_41915 = (((!((obj41813_41914 == null))))?obj41813_41914:({}));
(obj41814_41915[applied_science.js_interop.impl.wrap_key(k_41912)] = v_41913);



var G__41916 = cljs.core.next(seq__41785_41905__$1);
var G__41917 = null;
var G__41918 = (0);
var G__41919 = (0);
seq__41785_41891 = G__41916;
chunk__41786_41892 = G__41917;
count__41787_41893 = G__41918;
i__41788_41894 = G__41919;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq41782){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41782));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
