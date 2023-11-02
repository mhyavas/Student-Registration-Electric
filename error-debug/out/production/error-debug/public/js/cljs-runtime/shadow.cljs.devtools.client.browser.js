goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39452 = arguments.length;
var i__5770__auto___39453 = (0);
while(true){
if((i__5770__auto___39453 < len__5769__auto___39452)){
args__5775__auto__.push((arguments[i__5770__auto___39453]));

var G__39454 = (i__5770__auto___39453 + (1));
i__5770__auto___39453 = G__39454;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38910){
var G__38911 = cljs.core.first(seq38910);
var seq38910__$1 = cljs.core.next(seq38910);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38911,seq38910__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38920 = cljs.core.seq(sources);
var chunk__38921 = null;
var count__38922 = (0);
var i__38923 = (0);
while(true){
if((i__38923 < count__38922)){
var map__38934 = chunk__38921.cljs$core$IIndexed$_nth$arity$2(null,i__38923);
var map__38934__$1 = cljs.core.__destructure_map(map__38934);
var src = map__38934__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38934__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38934__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38934__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38934__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38935){var e_39455 = e38935;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39455);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39455.message)].join('')));
}

var G__39456 = seq__38920;
var G__39457 = chunk__38921;
var G__39458 = count__38922;
var G__39459 = (i__38923 + (1));
seq__38920 = G__39456;
chunk__38921 = G__39457;
count__38922 = G__39458;
i__38923 = G__39459;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__38920);
if(temp__5816__auto__){
var seq__38920__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38920__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38920__$1);
var G__39460 = cljs.core.chunk_rest(seq__38920__$1);
var G__39461 = c__5568__auto__;
var G__39462 = cljs.core.count(c__5568__auto__);
var G__39463 = (0);
seq__38920 = G__39460;
chunk__38921 = G__39461;
count__38922 = G__39462;
i__38923 = G__39463;
continue;
} else {
var map__38937 = cljs.core.first(seq__38920__$1);
var map__38937__$1 = cljs.core.__destructure_map(map__38937);
var src = map__38937__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38937__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38937__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38937__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38937__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38939){var e_39464 = e38939;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39464);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39464.message)].join('')));
}

var G__39465 = cljs.core.next(seq__38920__$1);
var G__39466 = null;
var G__39467 = (0);
var G__39468 = (0);
seq__38920 = G__39465;
chunk__38921 = G__39466;
count__38922 = G__39467;
i__38923 = G__39468;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__38968 = cljs.core.seq(js_requires);
var chunk__38975 = null;
var count__38976 = (0);
var i__38977 = (0);
while(true){
if((i__38977 < count__38976)){
var js_ns = chunk__38975.cljs$core$IIndexed$_nth$arity$2(null,i__38977);
var require_str_39469 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39469);


var G__39470 = seq__38968;
var G__39471 = chunk__38975;
var G__39472 = count__38976;
var G__39473 = (i__38977 + (1));
seq__38968 = G__39470;
chunk__38975 = G__39471;
count__38976 = G__39472;
i__38977 = G__39473;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__38968);
if(temp__5816__auto__){
var seq__38968__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38968__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38968__$1);
var G__39474 = cljs.core.chunk_rest(seq__38968__$1);
var G__39475 = c__5568__auto__;
var G__39476 = cljs.core.count(c__5568__auto__);
var G__39477 = (0);
seq__38968 = G__39474;
chunk__38975 = G__39475;
count__38976 = G__39476;
i__38977 = G__39477;
continue;
} else {
var js_ns = cljs.core.first(seq__38968__$1);
var require_str_39478 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39478);


var G__39479 = cljs.core.next(seq__38968__$1);
var G__39480 = null;
var G__39481 = (0);
var G__39482 = (0);
seq__38968 = G__39479;
chunk__38975 = G__39480;
count__38976 = G__39481;
i__38977 = G__39482;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__38990){
var map__38991 = p__38990;
var map__38991__$1 = cljs.core.__destructure_map(map__38991);
var msg = map__38991__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38991__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38991__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38992(s__38993){
return (new cljs.core.LazySeq(null,(function (){
var s__38993__$1 = s__38993;
while(true){
var temp__5816__auto__ = cljs.core.seq(s__38993__$1);
if(temp__5816__auto__){
var xs__6374__auto__ = temp__5816__auto__;
var map__38998 = cljs.core.first(xs__6374__auto__);
var map__38998__$1 = cljs.core.__destructure_map(map__38998);
var src = map__38998__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38998__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38998__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__38993__$1,map__38998,map__38998__$1,src,resource_name,warnings,xs__6374__auto__,temp__5816__auto__,map__38991,map__38991__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38992_$_iter__38994(s__38995){
return (new cljs.core.LazySeq(null,((function (s__38993__$1,map__38998,map__38998__$1,src,resource_name,warnings,xs__6374__auto__,temp__5816__auto__,map__38991,map__38991__$1,msg,info,reload_info){
return (function (){
var s__38995__$1 = s__38995;
while(true){
var temp__5816__auto____$1 = cljs.core.seq(s__38995__$1);
if(temp__5816__auto____$1){
var s__38995__$2 = temp__5816__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38995__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__38995__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__38997 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__38996 = (0);
while(true){
if((i__38996 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__38996);
cljs.core.chunk_append(b__38997,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39486 = (i__38996 + (1));
i__38996 = G__39486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38997),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38992_$_iter__38994(cljs.core.chunk_rest(s__38995__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38997),null);
}
} else {
var warning = cljs.core.first(s__38995__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38992_$_iter__38994(cljs.core.rest(s__38995__$2)));
}
} else {
return null;
}
break;
}
});})(s__38993__$1,map__38998,map__38998__$1,src,resource_name,warnings,xs__6374__auto__,temp__5816__auto__,map__38991,map__38991__$1,msg,info,reload_info))
,null,null));
});})(s__38993__$1,map__38998,map__38998__$1,src,resource_name,warnings,xs__6374__auto__,temp__5816__auto__,map__38991,map__38991__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38992(cljs.core.rest(s__38993__$1)));
} else {
var G__39488 = cljs.core.rest(s__38993__$1);
s__38993__$1 = G__39488;
continue;
}
} else {
var G__39489 = cljs.core.rest(s__38993__$1);
s__38993__$1 = G__39489;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__39006_39490 = cljs.core.seq(warnings);
var chunk__39007_39491 = null;
var count__39008_39492 = (0);
var i__39012_39493 = (0);
while(true){
if((i__39012_39493 < count__39008_39492)){
var map__39015_39494 = chunk__39007_39491.cljs$core$IIndexed$_nth$arity$2(null,i__39012_39493);
var map__39015_39495__$1 = cljs.core.__destructure_map(map__39015_39494);
var w_39496 = map__39015_39495__$1;
var msg_39497__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39015_39495__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39015_39495__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39015_39495__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39015_39495__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39500)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39498),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39499),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39497__$1)].join(''));


var G__39501 = seq__39006_39490;
var G__39502 = chunk__39007_39491;
var G__39503 = count__39008_39492;
var G__39504 = (i__39012_39493 + (1));
seq__39006_39490 = G__39501;
chunk__39007_39491 = G__39502;
count__39008_39492 = G__39503;
i__39012_39493 = G__39504;
continue;
} else {
var temp__5816__auto___39505 = cljs.core.seq(seq__39006_39490);
if(temp__5816__auto___39505){
var seq__39006_39506__$1 = temp__5816__auto___39505;
if(cljs.core.chunked_seq_QMARK_(seq__39006_39506__$1)){
var c__5568__auto___39507 = cljs.core.chunk_first(seq__39006_39506__$1);
var G__39508 = cljs.core.chunk_rest(seq__39006_39506__$1);
var G__39509 = c__5568__auto___39507;
var G__39510 = cljs.core.count(c__5568__auto___39507);
var G__39511 = (0);
seq__39006_39490 = G__39508;
chunk__39007_39491 = G__39509;
count__39008_39492 = G__39510;
i__39012_39493 = G__39511;
continue;
} else {
var map__39020_39512 = cljs.core.first(seq__39006_39506__$1);
var map__39020_39513__$1 = cljs.core.__destructure_map(map__39020_39512);
var w_39514 = map__39020_39513__$1;
var msg_39515__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39020_39513__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39020_39513__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39020_39513__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39020_39513__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39518)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39516),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39517),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39515__$1)].join(''));


var G__39519 = cljs.core.next(seq__39006_39506__$1);
var G__39520 = null;
var G__39521 = (0);
var G__39522 = (0);
seq__39006_39490 = G__39519;
chunk__39007_39491 = G__39520;
count__39008_39492 = G__39521;
i__39012_39493 = G__39522;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__38989_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38989_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39021){
var map__39023 = p__39021;
var map__39023__$1 = cljs.core.__destructure_map(map__39023);
var msg = map__39023__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39023__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39023__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__39024 = cljs.core.seq(updates);
var chunk__39026 = null;
var count__39027 = (0);
var i__39028 = (0);
while(true){
if((i__39028 < count__39027)){
var path = chunk__39026.cljs$core$IIndexed$_nth$arity$2(null,i__39028);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39233_39523 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39237_39524 = null;
var count__39238_39525 = (0);
var i__39239_39526 = (0);
while(true){
if((i__39239_39526 < count__39238_39525)){
var node_39527 = chunk__39237_39524.cljs$core$IIndexed$_nth$arity$2(null,i__39239_39526);
if(cljs.core.not(node_39527.shadow$old)){
var path_match_39528 = shadow.cljs.devtools.client.browser.match_paths(node_39527.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39528)){
var new_link_39529 = (function (){var G__39282 = node_39527.cloneNode(true);
G__39282.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39528),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39282;
})();
(node_39527.shadow$old = true);

(new_link_39529.onload = ((function (seq__39233_39523,chunk__39237_39524,count__39238_39525,i__39239_39526,seq__39024,chunk__39026,count__39027,i__39028,new_link_39529,path_match_39528,node_39527,path,map__39023,map__39023__$1,msg,updates,reload_info){
return (function (e){
var seq__39284_39530 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39286_39531 = null;
var count__39287_39532 = (0);
var i__39288_39533 = (0);
while(true){
if((i__39288_39533 < count__39287_39532)){
var map__39293_39534 = chunk__39286_39531.cljs$core$IIndexed$_nth$arity$2(null,i__39288_39533);
var map__39293_39535__$1 = cljs.core.__destructure_map(map__39293_39534);
var task_39536 = map__39293_39535__$1;
var fn_str_39537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39293_39535__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39293_39535__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39539 = goog.getObjectByName(fn_str_39537,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39538)].join(''));

(fn_obj_39539.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39539.cljs$core$IFn$_invoke$arity$2(path,new_link_39529) : fn_obj_39539.call(null,path,new_link_39529));


var G__39540 = seq__39284_39530;
var G__39541 = chunk__39286_39531;
var G__39542 = count__39287_39532;
var G__39543 = (i__39288_39533 + (1));
seq__39284_39530 = G__39540;
chunk__39286_39531 = G__39541;
count__39287_39532 = G__39542;
i__39288_39533 = G__39543;
continue;
} else {
var temp__5816__auto___39544 = cljs.core.seq(seq__39284_39530);
if(temp__5816__auto___39544){
var seq__39284_39545__$1 = temp__5816__auto___39544;
if(cljs.core.chunked_seq_QMARK_(seq__39284_39545__$1)){
var c__5568__auto___39546 = cljs.core.chunk_first(seq__39284_39545__$1);
var G__39547 = cljs.core.chunk_rest(seq__39284_39545__$1);
var G__39548 = c__5568__auto___39546;
var G__39549 = cljs.core.count(c__5568__auto___39546);
var G__39550 = (0);
seq__39284_39530 = G__39547;
chunk__39286_39531 = G__39548;
count__39287_39532 = G__39549;
i__39288_39533 = G__39550;
continue;
} else {
var map__39294_39551 = cljs.core.first(seq__39284_39545__$1);
var map__39294_39552__$1 = cljs.core.__destructure_map(map__39294_39551);
var task_39553 = map__39294_39552__$1;
var fn_str_39554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39294_39552__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39294_39552__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39556 = goog.getObjectByName(fn_str_39554,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39555)].join(''));

(fn_obj_39556.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39556.cljs$core$IFn$_invoke$arity$2(path,new_link_39529) : fn_obj_39556.call(null,path,new_link_39529));


var G__39557 = cljs.core.next(seq__39284_39545__$1);
var G__39558 = null;
var G__39559 = (0);
var G__39560 = (0);
seq__39284_39530 = G__39557;
chunk__39286_39531 = G__39558;
count__39287_39532 = G__39559;
i__39288_39533 = G__39560;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39527);
});})(seq__39233_39523,chunk__39237_39524,count__39238_39525,i__39239_39526,seq__39024,chunk__39026,count__39027,i__39028,new_link_39529,path_match_39528,node_39527,path,map__39023,map__39023__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39528], 0));

goog.dom.insertSiblingAfter(new_link_39529,node_39527);


var G__39561 = seq__39233_39523;
var G__39562 = chunk__39237_39524;
var G__39563 = count__39238_39525;
var G__39564 = (i__39239_39526 + (1));
seq__39233_39523 = G__39561;
chunk__39237_39524 = G__39562;
count__39238_39525 = G__39563;
i__39239_39526 = G__39564;
continue;
} else {
var G__39565 = seq__39233_39523;
var G__39566 = chunk__39237_39524;
var G__39567 = count__39238_39525;
var G__39568 = (i__39239_39526 + (1));
seq__39233_39523 = G__39565;
chunk__39237_39524 = G__39566;
count__39238_39525 = G__39567;
i__39239_39526 = G__39568;
continue;
}
} else {
var G__39569 = seq__39233_39523;
var G__39570 = chunk__39237_39524;
var G__39571 = count__39238_39525;
var G__39572 = (i__39239_39526 + (1));
seq__39233_39523 = G__39569;
chunk__39237_39524 = G__39570;
count__39238_39525 = G__39571;
i__39239_39526 = G__39572;
continue;
}
} else {
var temp__5816__auto___39573 = cljs.core.seq(seq__39233_39523);
if(temp__5816__auto___39573){
var seq__39233_39574__$1 = temp__5816__auto___39573;
if(cljs.core.chunked_seq_QMARK_(seq__39233_39574__$1)){
var c__5568__auto___39575 = cljs.core.chunk_first(seq__39233_39574__$1);
var G__39576 = cljs.core.chunk_rest(seq__39233_39574__$1);
var G__39577 = c__5568__auto___39575;
var G__39578 = cljs.core.count(c__5568__auto___39575);
var G__39579 = (0);
seq__39233_39523 = G__39576;
chunk__39237_39524 = G__39577;
count__39238_39525 = G__39578;
i__39239_39526 = G__39579;
continue;
} else {
var node_39580 = cljs.core.first(seq__39233_39574__$1);
if(cljs.core.not(node_39580.shadow$old)){
var path_match_39581 = shadow.cljs.devtools.client.browser.match_paths(node_39580.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39581)){
var new_link_39582 = (function (){var G__39296 = node_39580.cloneNode(true);
G__39296.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39581),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39296;
})();
(node_39580.shadow$old = true);

(new_link_39582.onload = ((function (seq__39233_39523,chunk__39237_39524,count__39238_39525,i__39239_39526,seq__39024,chunk__39026,count__39027,i__39028,new_link_39582,path_match_39581,node_39580,seq__39233_39574__$1,temp__5816__auto___39573,path,map__39023,map__39023__$1,msg,updates,reload_info){
return (function (e){
var seq__39297_39583 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39299_39584 = null;
var count__39300_39585 = (0);
var i__39301_39586 = (0);
while(true){
if((i__39301_39586 < count__39300_39585)){
var map__39313_39587 = chunk__39299_39584.cljs$core$IIndexed$_nth$arity$2(null,i__39301_39586);
var map__39313_39588__$1 = cljs.core.__destructure_map(map__39313_39587);
var task_39589 = map__39313_39588__$1;
var fn_str_39590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39313_39588__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39313_39588__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39592 = goog.getObjectByName(fn_str_39590,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39591)].join(''));

(fn_obj_39592.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39592.cljs$core$IFn$_invoke$arity$2(path,new_link_39582) : fn_obj_39592.call(null,path,new_link_39582));


var G__39593 = seq__39297_39583;
var G__39594 = chunk__39299_39584;
var G__39595 = count__39300_39585;
var G__39596 = (i__39301_39586 + (1));
seq__39297_39583 = G__39593;
chunk__39299_39584 = G__39594;
count__39300_39585 = G__39595;
i__39301_39586 = G__39596;
continue;
} else {
var temp__5816__auto___39597__$1 = cljs.core.seq(seq__39297_39583);
if(temp__5816__auto___39597__$1){
var seq__39297_39598__$1 = temp__5816__auto___39597__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39297_39598__$1)){
var c__5568__auto___39599 = cljs.core.chunk_first(seq__39297_39598__$1);
var G__39600 = cljs.core.chunk_rest(seq__39297_39598__$1);
var G__39601 = c__5568__auto___39599;
var G__39602 = cljs.core.count(c__5568__auto___39599);
var G__39603 = (0);
seq__39297_39583 = G__39600;
chunk__39299_39584 = G__39601;
count__39300_39585 = G__39602;
i__39301_39586 = G__39603;
continue;
} else {
var map__39316_39604 = cljs.core.first(seq__39297_39598__$1);
var map__39316_39605__$1 = cljs.core.__destructure_map(map__39316_39604);
var task_39606 = map__39316_39605__$1;
var fn_str_39607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39316_39605__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39316_39605__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39609 = goog.getObjectByName(fn_str_39607,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39608)].join(''));

(fn_obj_39609.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39609.cljs$core$IFn$_invoke$arity$2(path,new_link_39582) : fn_obj_39609.call(null,path,new_link_39582));


var G__39610 = cljs.core.next(seq__39297_39598__$1);
var G__39611 = null;
var G__39612 = (0);
var G__39613 = (0);
seq__39297_39583 = G__39610;
chunk__39299_39584 = G__39611;
count__39300_39585 = G__39612;
i__39301_39586 = G__39613;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39580);
});})(seq__39233_39523,chunk__39237_39524,count__39238_39525,i__39239_39526,seq__39024,chunk__39026,count__39027,i__39028,new_link_39582,path_match_39581,node_39580,seq__39233_39574__$1,temp__5816__auto___39573,path,map__39023,map__39023__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39581], 0));

goog.dom.insertSiblingAfter(new_link_39582,node_39580);


var G__39614 = cljs.core.next(seq__39233_39574__$1);
var G__39615 = null;
var G__39616 = (0);
var G__39617 = (0);
seq__39233_39523 = G__39614;
chunk__39237_39524 = G__39615;
count__39238_39525 = G__39616;
i__39239_39526 = G__39617;
continue;
} else {
var G__39618 = cljs.core.next(seq__39233_39574__$1);
var G__39619 = null;
var G__39620 = (0);
var G__39621 = (0);
seq__39233_39523 = G__39618;
chunk__39237_39524 = G__39619;
count__39238_39525 = G__39620;
i__39239_39526 = G__39621;
continue;
}
} else {
var G__39622 = cljs.core.next(seq__39233_39574__$1);
var G__39623 = null;
var G__39624 = (0);
var G__39625 = (0);
seq__39233_39523 = G__39622;
chunk__39237_39524 = G__39623;
count__39238_39525 = G__39624;
i__39239_39526 = G__39625;
continue;
}
}
} else {
}
}
break;
}


var G__39626 = seq__39024;
var G__39627 = chunk__39026;
var G__39628 = count__39027;
var G__39629 = (i__39028 + (1));
seq__39024 = G__39626;
chunk__39026 = G__39627;
count__39027 = G__39628;
i__39028 = G__39629;
continue;
} else {
var G__39630 = seq__39024;
var G__39631 = chunk__39026;
var G__39632 = count__39027;
var G__39633 = (i__39028 + (1));
seq__39024 = G__39630;
chunk__39026 = G__39631;
count__39027 = G__39632;
i__39028 = G__39633;
continue;
}
} else {
var temp__5816__auto__ = cljs.core.seq(seq__39024);
if(temp__5816__auto__){
var seq__39024__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39024__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39024__$1);
var G__39634 = cljs.core.chunk_rest(seq__39024__$1);
var G__39635 = c__5568__auto__;
var G__39636 = cljs.core.count(c__5568__auto__);
var G__39637 = (0);
seq__39024 = G__39634;
chunk__39026 = G__39635;
count__39027 = G__39636;
i__39028 = G__39637;
continue;
} else {
var path = cljs.core.first(seq__39024__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39318_39638 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39322_39639 = null;
var count__39323_39640 = (0);
var i__39324_39641 = (0);
while(true){
if((i__39324_39641 < count__39323_39640)){
var node_39642 = chunk__39322_39639.cljs$core$IIndexed$_nth$arity$2(null,i__39324_39641);
if(cljs.core.not(node_39642.shadow$old)){
var path_match_39643 = shadow.cljs.devtools.client.browser.match_paths(node_39642.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39643)){
var new_link_39644 = (function (){var G__39380 = node_39642.cloneNode(true);
G__39380.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39643),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39380;
})();
(node_39642.shadow$old = true);

(new_link_39644.onload = ((function (seq__39318_39638,chunk__39322_39639,count__39323_39640,i__39324_39641,seq__39024,chunk__39026,count__39027,i__39028,new_link_39644,path_match_39643,node_39642,path,seq__39024__$1,temp__5816__auto__,map__39023,map__39023__$1,msg,updates,reload_info){
return (function (e){
var seq__39389_39645 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39391_39646 = null;
var count__39392_39647 = (0);
var i__39393_39648 = (0);
while(true){
if((i__39393_39648 < count__39392_39647)){
var map__39399_39649 = chunk__39391_39646.cljs$core$IIndexed$_nth$arity$2(null,i__39393_39648);
var map__39399_39650__$1 = cljs.core.__destructure_map(map__39399_39649);
var task_39651 = map__39399_39650__$1;
var fn_str_39652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39399_39650__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39399_39650__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39654 = goog.getObjectByName(fn_str_39652,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39653)].join(''));

(fn_obj_39654.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39654.cljs$core$IFn$_invoke$arity$2(path,new_link_39644) : fn_obj_39654.call(null,path,new_link_39644));


var G__39655 = seq__39389_39645;
var G__39656 = chunk__39391_39646;
var G__39657 = count__39392_39647;
var G__39658 = (i__39393_39648 + (1));
seq__39389_39645 = G__39655;
chunk__39391_39646 = G__39656;
count__39392_39647 = G__39657;
i__39393_39648 = G__39658;
continue;
} else {
var temp__5816__auto___39659__$1 = cljs.core.seq(seq__39389_39645);
if(temp__5816__auto___39659__$1){
var seq__39389_39660__$1 = temp__5816__auto___39659__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39389_39660__$1)){
var c__5568__auto___39661 = cljs.core.chunk_first(seq__39389_39660__$1);
var G__39662 = cljs.core.chunk_rest(seq__39389_39660__$1);
var G__39663 = c__5568__auto___39661;
var G__39664 = cljs.core.count(c__5568__auto___39661);
var G__39665 = (0);
seq__39389_39645 = G__39662;
chunk__39391_39646 = G__39663;
count__39392_39647 = G__39664;
i__39393_39648 = G__39665;
continue;
} else {
var map__39402_39666 = cljs.core.first(seq__39389_39660__$1);
var map__39402_39667__$1 = cljs.core.__destructure_map(map__39402_39666);
var task_39668 = map__39402_39667__$1;
var fn_str_39669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39402_39667__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39402_39667__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39671 = goog.getObjectByName(fn_str_39669,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39670)].join(''));

(fn_obj_39671.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39671.cljs$core$IFn$_invoke$arity$2(path,new_link_39644) : fn_obj_39671.call(null,path,new_link_39644));


var G__39672 = cljs.core.next(seq__39389_39660__$1);
var G__39673 = null;
var G__39674 = (0);
var G__39675 = (0);
seq__39389_39645 = G__39672;
chunk__39391_39646 = G__39673;
count__39392_39647 = G__39674;
i__39393_39648 = G__39675;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39642);
});})(seq__39318_39638,chunk__39322_39639,count__39323_39640,i__39324_39641,seq__39024,chunk__39026,count__39027,i__39028,new_link_39644,path_match_39643,node_39642,path,seq__39024__$1,temp__5816__auto__,map__39023,map__39023__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39643], 0));

goog.dom.insertSiblingAfter(new_link_39644,node_39642);


var G__39676 = seq__39318_39638;
var G__39677 = chunk__39322_39639;
var G__39678 = count__39323_39640;
var G__39679 = (i__39324_39641 + (1));
seq__39318_39638 = G__39676;
chunk__39322_39639 = G__39677;
count__39323_39640 = G__39678;
i__39324_39641 = G__39679;
continue;
} else {
var G__39680 = seq__39318_39638;
var G__39681 = chunk__39322_39639;
var G__39682 = count__39323_39640;
var G__39683 = (i__39324_39641 + (1));
seq__39318_39638 = G__39680;
chunk__39322_39639 = G__39681;
count__39323_39640 = G__39682;
i__39324_39641 = G__39683;
continue;
}
} else {
var G__39684 = seq__39318_39638;
var G__39685 = chunk__39322_39639;
var G__39686 = count__39323_39640;
var G__39687 = (i__39324_39641 + (1));
seq__39318_39638 = G__39684;
chunk__39322_39639 = G__39685;
count__39323_39640 = G__39686;
i__39324_39641 = G__39687;
continue;
}
} else {
var temp__5816__auto___39688__$1 = cljs.core.seq(seq__39318_39638);
if(temp__5816__auto___39688__$1){
var seq__39318_39689__$1 = temp__5816__auto___39688__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39318_39689__$1)){
var c__5568__auto___39690 = cljs.core.chunk_first(seq__39318_39689__$1);
var G__39691 = cljs.core.chunk_rest(seq__39318_39689__$1);
var G__39692 = c__5568__auto___39690;
var G__39693 = cljs.core.count(c__5568__auto___39690);
var G__39694 = (0);
seq__39318_39638 = G__39691;
chunk__39322_39639 = G__39692;
count__39323_39640 = G__39693;
i__39324_39641 = G__39694;
continue;
} else {
var node_39695 = cljs.core.first(seq__39318_39689__$1);
if(cljs.core.not(node_39695.shadow$old)){
var path_match_39696 = shadow.cljs.devtools.client.browser.match_paths(node_39695.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39696)){
var new_link_39697 = (function (){var G__39406 = node_39695.cloneNode(true);
G__39406.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39696),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39406;
})();
(node_39695.shadow$old = true);

(new_link_39697.onload = ((function (seq__39318_39638,chunk__39322_39639,count__39323_39640,i__39324_39641,seq__39024,chunk__39026,count__39027,i__39028,new_link_39697,path_match_39696,node_39695,seq__39318_39689__$1,temp__5816__auto___39688__$1,path,seq__39024__$1,temp__5816__auto__,map__39023,map__39023__$1,msg,updates,reload_info){
return (function (e){
var seq__39408_39698 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39410_39699 = null;
var count__39411_39700 = (0);
var i__39412_39701 = (0);
while(true){
if((i__39412_39701 < count__39411_39700)){
var map__39419_39702 = chunk__39410_39699.cljs$core$IIndexed$_nth$arity$2(null,i__39412_39701);
var map__39419_39703__$1 = cljs.core.__destructure_map(map__39419_39702);
var task_39704 = map__39419_39703__$1;
var fn_str_39705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39419_39703__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39419_39703__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39707 = goog.getObjectByName(fn_str_39705,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39706)].join(''));

(fn_obj_39707.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39707.cljs$core$IFn$_invoke$arity$2(path,new_link_39697) : fn_obj_39707.call(null,path,new_link_39697));


var G__39708 = seq__39408_39698;
var G__39709 = chunk__39410_39699;
var G__39710 = count__39411_39700;
var G__39711 = (i__39412_39701 + (1));
seq__39408_39698 = G__39708;
chunk__39410_39699 = G__39709;
count__39411_39700 = G__39710;
i__39412_39701 = G__39711;
continue;
} else {
var temp__5816__auto___39712__$2 = cljs.core.seq(seq__39408_39698);
if(temp__5816__auto___39712__$2){
var seq__39408_39713__$1 = temp__5816__auto___39712__$2;
if(cljs.core.chunked_seq_QMARK_(seq__39408_39713__$1)){
var c__5568__auto___39714 = cljs.core.chunk_first(seq__39408_39713__$1);
var G__39715 = cljs.core.chunk_rest(seq__39408_39713__$1);
var G__39716 = c__5568__auto___39714;
var G__39717 = cljs.core.count(c__5568__auto___39714);
var G__39718 = (0);
seq__39408_39698 = G__39715;
chunk__39410_39699 = G__39716;
count__39411_39700 = G__39717;
i__39412_39701 = G__39718;
continue;
} else {
var map__39420_39719 = cljs.core.first(seq__39408_39713__$1);
var map__39420_39720__$1 = cljs.core.__destructure_map(map__39420_39719);
var task_39721 = map__39420_39720__$1;
var fn_str_39722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39420_39720__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39420_39720__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39724 = goog.getObjectByName(fn_str_39722,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39723)].join(''));

(fn_obj_39724.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39724.cljs$core$IFn$_invoke$arity$2(path,new_link_39697) : fn_obj_39724.call(null,path,new_link_39697));


var G__39725 = cljs.core.next(seq__39408_39713__$1);
var G__39726 = null;
var G__39727 = (0);
var G__39728 = (0);
seq__39408_39698 = G__39725;
chunk__39410_39699 = G__39726;
count__39411_39700 = G__39727;
i__39412_39701 = G__39728;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39695);
});})(seq__39318_39638,chunk__39322_39639,count__39323_39640,i__39324_39641,seq__39024,chunk__39026,count__39027,i__39028,new_link_39697,path_match_39696,node_39695,seq__39318_39689__$1,temp__5816__auto___39688__$1,path,seq__39024__$1,temp__5816__auto__,map__39023,map__39023__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39696], 0));

goog.dom.insertSiblingAfter(new_link_39697,node_39695);


var G__39729 = cljs.core.next(seq__39318_39689__$1);
var G__39730 = null;
var G__39731 = (0);
var G__39732 = (0);
seq__39318_39638 = G__39729;
chunk__39322_39639 = G__39730;
count__39323_39640 = G__39731;
i__39324_39641 = G__39732;
continue;
} else {
var G__39733 = cljs.core.next(seq__39318_39689__$1);
var G__39734 = null;
var G__39735 = (0);
var G__39736 = (0);
seq__39318_39638 = G__39733;
chunk__39322_39639 = G__39734;
count__39323_39640 = G__39735;
i__39324_39641 = G__39736;
continue;
}
} else {
var G__39737 = cljs.core.next(seq__39318_39689__$1);
var G__39738 = null;
var G__39739 = (0);
var G__39740 = (0);
seq__39318_39638 = G__39737;
chunk__39322_39639 = G__39738;
count__39323_39640 = G__39739;
i__39324_39641 = G__39740;
continue;
}
}
} else {
}
}
break;
}


var G__39741 = cljs.core.next(seq__39024__$1);
var G__39742 = null;
var G__39743 = (0);
var G__39744 = (0);
seq__39024 = G__39741;
chunk__39026 = G__39742;
count__39027 = G__39743;
i__39028 = G__39744;
continue;
} else {
var G__39745 = cljs.core.next(seq__39024__$1);
var G__39746 = null;
var G__39747 = (0);
var G__39748 = (0);
seq__39024 = G__39745;
chunk__39026 = G__39746;
count__39027 = G__39747;
i__39028 = G__39748;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__39425){
var map__39426 = p__39425;
var map__39426__$1 = cljs.core.__destructure_map(map__39426);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39426__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39430,done,error){
var map__39431 = p__39430;
var map__39431__$1 = cljs.core.__destructure_map(map__39431);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39431__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39432,done,error){
var map__39433 = p__39432;
var map__39433__$1 = cljs.core.__destructure_map(map__39433);
var msg = map__39433__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39433__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39433__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39433__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39434){
var map__39435 = p__39434;
var map__39435__$1 = cljs.core.__destructure_map(map__39435);
var src = map__39435__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39435__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39437 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39437) : done.call(null,G__39437));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39439){
var map__39440 = p__39439;
var map__39440__$1 = cljs.core.__destructure_map(map__39440);
var msg__$1 = map__39440__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39440__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39441){var ex = e39441;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39442){
var map__39443 = p__39442;
var map__39443__$1 = cljs.core.__destructure_map(map__39443);
var env = map__39443__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39443__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39448){
var map__39449 = p__39448;
var map__39449__$1 = cljs.core.__destructure_map(map__39449);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39449__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39449__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__39450){
var map__39451 = p__39450;
var map__39451__$1 = cljs.core.__destructure_map(map__39451);
var svc = map__39451__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39451__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
