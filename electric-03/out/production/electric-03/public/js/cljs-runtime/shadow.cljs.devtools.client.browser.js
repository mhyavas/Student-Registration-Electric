goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30437 = arguments.length;
var i__5770__auto___30438 = (0);
while(true){
if((i__5770__auto___30438 < len__5769__auto___30437)){
args__5775__auto__.push((arguments[i__5770__auto___30438]));

var G__30439 = (i__5770__auto___30438 + (1));
i__5770__auto___30438 = G__30439;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq29814){
var G__29823 = cljs.core.first(seq29814);
var seq29814__$1 = cljs.core.next(seq29814);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29823,seq29814__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__29833 = cljs.core.seq(sources);
var chunk__29834 = null;
var count__29835 = (0);
var i__29836 = (0);
while(true){
if((i__29836 < count__29835)){
var map__29845 = chunk__29834.cljs$core$IIndexed$_nth$arity$2(null,i__29836);
var map__29845__$1 = cljs.core.__destructure_map(map__29845);
var src = map__29845__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29845__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29845__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29845__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29845__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e29849){var e_30443 = e29849;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_30443);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_30443.message)].join('')));
}

var G__30444 = seq__29833;
var G__30445 = chunk__29834;
var G__30446 = count__29835;
var G__30447 = (i__29836 + (1));
seq__29833 = G__30444;
chunk__29834 = G__30445;
count__29835 = G__30446;
i__29836 = G__30447;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29833);
if(temp__5804__auto__){
var seq__29833__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29833__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29833__$1);
var G__30448 = cljs.core.chunk_rest(seq__29833__$1);
var G__30449 = c__5568__auto__;
var G__30450 = cljs.core.count(c__5568__auto__);
var G__30451 = (0);
seq__29833 = G__30448;
chunk__29834 = G__30449;
count__29835 = G__30450;
i__29836 = G__30451;
continue;
} else {
var map__29851 = cljs.core.first(seq__29833__$1);
var map__29851__$1 = cljs.core.__destructure_map(map__29851);
var src = map__29851__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29851__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29851__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29851__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29851__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e29852){var e_30453 = e29852;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_30453);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_30453.message)].join('')));
}

var G__30454 = cljs.core.next(seq__29833__$1);
var G__30455 = null;
var G__30456 = (0);
var G__30457 = (0);
seq__29833 = G__30454;
chunk__29834 = G__30455;
count__29835 = G__30456;
i__29836 = G__30457;
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
var seq__29855 = cljs.core.seq(js_requires);
var chunk__29856 = null;
var count__29857 = (0);
var i__29858 = (0);
while(true){
if((i__29858 < count__29857)){
var js_ns = chunk__29856.cljs$core$IIndexed$_nth$arity$2(null,i__29858);
var require_str_30461 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_30461);


var G__30465 = seq__29855;
var G__30466 = chunk__29856;
var G__30467 = count__29857;
var G__30468 = (i__29858 + (1));
seq__29855 = G__30465;
chunk__29856 = G__30466;
count__29857 = G__30467;
i__29858 = G__30468;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29855);
if(temp__5804__auto__){
var seq__29855__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29855__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29855__$1);
var G__30469 = cljs.core.chunk_rest(seq__29855__$1);
var G__30470 = c__5568__auto__;
var G__30471 = cljs.core.count(c__5568__auto__);
var G__30472 = (0);
seq__29855 = G__30469;
chunk__29856 = G__30470;
count__29857 = G__30471;
i__29858 = G__30472;
continue;
} else {
var js_ns = cljs.core.first(seq__29855__$1);
var require_str_30477 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_30477);


var G__30478 = cljs.core.next(seq__29855__$1);
var G__30479 = null;
var G__30480 = (0);
var G__30481 = (0);
seq__29855 = G__30478;
chunk__29856 = G__30479;
count__29857 = G__30480;
i__29858 = G__30481;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__29864){
var map__29865 = p__29864;
var map__29865__$1 = cljs.core.__destructure_map(map__29865);
var msg = map__29865__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29865__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29865__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29867(s__29868){
return (new cljs.core.LazySeq(null,(function (){
var s__29868__$1 = s__29868;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29868__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__29873 = cljs.core.first(xs__6360__auto__);
var map__29873__$1 = cljs.core.__destructure_map(map__29873);
var src = map__29873__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29873__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29873__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__29868__$1,map__29873,map__29873__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__29865,map__29865__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29867_$_iter__29869(s__29870){
return (new cljs.core.LazySeq(null,((function (s__29868__$1,map__29873,map__29873__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__29865,map__29865__$1,msg,info,reload_info){
return (function (){
var s__29870__$1 = s__29870;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__29870__$1);
if(temp__5804__auto____$1){
var s__29870__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29870__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29870__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29872 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29871 = (0);
while(true){
if((i__29871 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__29871);
cljs.core.chunk_append(b__29872,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__30494 = (i__29871 + (1));
i__29871 = G__30494;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29872),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29867_$_iter__29869(cljs.core.chunk_rest(s__29870__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29872),null);
}
} else {
var warning = cljs.core.first(s__29870__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29867_$_iter__29869(cljs.core.rest(s__29870__$2)));
}
} else {
return null;
}
break;
}
});})(s__29868__$1,map__29873,map__29873__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__29865,map__29865__$1,msg,info,reload_info))
,null,null));
});})(s__29868__$1,map__29873,map__29873__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__29865,map__29865__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29867(cljs.core.rest(s__29868__$1)));
} else {
var G__30499 = cljs.core.rest(s__29868__$1);
s__29868__$1 = G__30499;
continue;
}
} else {
var G__30501 = cljs.core.rest(s__29868__$1);
s__29868__$1 = G__30501;
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
var seq__29874_30502 = cljs.core.seq(warnings);
var chunk__29875_30503 = null;
var count__29876_30504 = (0);
var i__29877_30505 = (0);
while(true){
if((i__29877_30505 < count__29876_30504)){
var map__29880_30506 = chunk__29875_30503.cljs$core$IIndexed$_nth$arity$2(null,i__29877_30505);
var map__29880_30507__$1 = cljs.core.__destructure_map(map__29880_30506);
var w_30508 = map__29880_30507__$1;
var msg_30509__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29880_30507__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_30510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29880_30507__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_30511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29880_30507__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_30512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29880_30507__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_30512)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_30510),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_30511),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_30509__$1)].join(''));


var G__30513 = seq__29874_30502;
var G__30514 = chunk__29875_30503;
var G__30515 = count__29876_30504;
var G__30516 = (i__29877_30505 + (1));
seq__29874_30502 = G__30513;
chunk__29875_30503 = G__30514;
count__29876_30504 = G__30515;
i__29877_30505 = G__30516;
continue;
} else {
var temp__5804__auto___30517 = cljs.core.seq(seq__29874_30502);
if(temp__5804__auto___30517){
var seq__29874_30518__$1 = temp__5804__auto___30517;
if(cljs.core.chunked_seq_QMARK_(seq__29874_30518__$1)){
var c__5568__auto___30519 = cljs.core.chunk_first(seq__29874_30518__$1);
var G__30520 = cljs.core.chunk_rest(seq__29874_30518__$1);
var G__30521 = c__5568__auto___30519;
var G__30522 = cljs.core.count(c__5568__auto___30519);
var G__30523 = (0);
seq__29874_30502 = G__30520;
chunk__29875_30503 = G__30521;
count__29876_30504 = G__30522;
i__29877_30505 = G__30523;
continue;
} else {
var map__29881_30524 = cljs.core.first(seq__29874_30518__$1);
var map__29881_30525__$1 = cljs.core.__destructure_map(map__29881_30524);
var w_30526 = map__29881_30525__$1;
var msg_30527__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29881_30525__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_30528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29881_30525__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_30529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29881_30525__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_30530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29881_30525__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_30530)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_30528),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_30529),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_30527__$1)].join(''));


var G__30531 = cljs.core.next(seq__29874_30518__$1);
var G__30532 = null;
var G__30533 = (0);
var G__30534 = (0);
seq__29874_30502 = G__30531;
chunk__29875_30503 = G__30532;
count__29876_30504 = G__30533;
i__29877_30505 = G__30534;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__29863_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__29863_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__29890){
var map__29891 = p__29890;
var map__29891__$1 = cljs.core.__destructure_map(map__29891);
var msg = map__29891__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29891__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29891__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__29893 = cljs.core.seq(updates);
var chunk__29895 = null;
var count__29896 = (0);
var i__29897 = (0);
while(true){
if((i__29897 < count__29896)){
var path = chunk__29895.cljs$core$IIndexed$_nth$arity$2(null,i__29897);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__30173_30537 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__30177_30538 = null;
var count__30178_30539 = (0);
var i__30179_30540 = (0);
while(true){
if((i__30179_30540 < count__30178_30539)){
var node_30542 = chunk__30177_30538.cljs$core$IIndexed$_nth$arity$2(null,i__30179_30540);
if(cljs.core.not(node_30542.shadow$old)){
var path_match_30543 = shadow.cljs.devtools.client.browser.match_paths(node_30542.getAttribute("href"),path);
if(cljs.core.truth_(path_match_30543)){
var new_link_30544 = (function (){var G__30233 = node_30542.cloneNode(true);
G__30233.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_30543),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__30233;
})();
(node_30542.shadow$old = true);

(new_link_30544.onload = ((function (seq__30173_30537,chunk__30177_30538,count__30178_30539,i__30179_30540,seq__29893,chunk__29895,count__29896,i__29897,new_link_30544,path_match_30543,node_30542,path,map__29891,map__29891__$1,msg,updates,reload_info){
return (function (e){
var seq__30237_30547 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__30239_30548 = null;
var count__30240_30549 = (0);
var i__30241_30550 = (0);
while(true){
if((i__30241_30550 < count__30240_30549)){
var map__30247_30552 = chunk__30239_30548.cljs$core$IIndexed$_nth$arity$2(null,i__30241_30550);
var map__30247_30553__$1 = cljs.core.__destructure_map(map__30247_30552);
var task_30554 = map__30247_30553__$1;
var fn_str_30555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30247_30553__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_30556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30247_30553__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_30557 = goog.getObjectByName(fn_str_30555,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_30556)].join(''));

(fn_obj_30557.cljs$core$IFn$_invoke$arity$2 ? fn_obj_30557.cljs$core$IFn$_invoke$arity$2(path,new_link_30544) : fn_obj_30557.call(null,path,new_link_30544));


var G__30559 = seq__30237_30547;
var G__30560 = chunk__30239_30548;
var G__30561 = count__30240_30549;
var G__30562 = (i__30241_30550 + (1));
seq__30237_30547 = G__30559;
chunk__30239_30548 = G__30560;
count__30240_30549 = G__30561;
i__30241_30550 = G__30562;
continue;
} else {
var temp__5804__auto___30563 = cljs.core.seq(seq__30237_30547);
if(temp__5804__auto___30563){
var seq__30237_30564__$1 = temp__5804__auto___30563;
if(cljs.core.chunked_seq_QMARK_(seq__30237_30564__$1)){
var c__5568__auto___30565 = cljs.core.chunk_first(seq__30237_30564__$1);
var G__30566 = cljs.core.chunk_rest(seq__30237_30564__$1);
var G__30567 = c__5568__auto___30565;
var G__30568 = cljs.core.count(c__5568__auto___30565);
var G__30569 = (0);
seq__30237_30547 = G__30566;
chunk__30239_30548 = G__30567;
count__30240_30549 = G__30568;
i__30241_30550 = G__30569;
continue;
} else {
var map__30250_30571 = cljs.core.first(seq__30237_30564__$1);
var map__30250_30572__$1 = cljs.core.__destructure_map(map__30250_30571);
var task_30573 = map__30250_30572__$1;
var fn_str_30574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30250_30572__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_30575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30250_30572__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_30576 = goog.getObjectByName(fn_str_30574,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_30575)].join(''));

(fn_obj_30576.cljs$core$IFn$_invoke$arity$2 ? fn_obj_30576.cljs$core$IFn$_invoke$arity$2(path,new_link_30544) : fn_obj_30576.call(null,path,new_link_30544));


var G__30579 = cljs.core.next(seq__30237_30564__$1);
var G__30580 = null;
var G__30581 = (0);
var G__30582 = (0);
seq__30237_30547 = G__30579;
chunk__30239_30548 = G__30580;
count__30240_30549 = G__30581;
i__30241_30550 = G__30582;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_30542);
});})(seq__30173_30537,chunk__30177_30538,count__30178_30539,i__30179_30540,seq__29893,chunk__29895,count__29896,i__29897,new_link_30544,path_match_30543,node_30542,path,map__29891,map__29891__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_30543], 0));

goog.dom.insertSiblingAfter(new_link_30544,node_30542);


var G__30583 = seq__30173_30537;
var G__30584 = chunk__30177_30538;
var G__30585 = count__30178_30539;
var G__30586 = (i__30179_30540 + (1));
seq__30173_30537 = G__30583;
chunk__30177_30538 = G__30584;
count__30178_30539 = G__30585;
i__30179_30540 = G__30586;
continue;
} else {
var G__30587 = seq__30173_30537;
var G__30588 = chunk__30177_30538;
var G__30589 = count__30178_30539;
var G__30590 = (i__30179_30540 + (1));
seq__30173_30537 = G__30587;
chunk__30177_30538 = G__30588;
count__30178_30539 = G__30589;
i__30179_30540 = G__30590;
continue;
}
} else {
var G__30591 = seq__30173_30537;
var G__30592 = chunk__30177_30538;
var G__30593 = count__30178_30539;
var G__30594 = (i__30179_30540 + (1));
seq__30173_30537 = G__30591;
chunk__30177_30538 = G__30592;
count__30178_30539 = G__30593;
i__30179_30540 = G__30594;
continue;
}
} else {
var temp__5804__auto___30595 = cljs.core.seq(seq__30173_30537);
if(temp__5804__auto___30595){
var seq__30173_30596__$1 = temp__5804__auto___30595;
if(cljs.core.chunked_seq_QMARK_(seq__30173_30596__$1)){
var c__5568__auto___30598 = cljs.core.chunk_first(seq__30173_30596__$1);
var G__30599 = cljs.core.chunk_rest(seq__30173_30596__$1);
var G__30600 = c__5568__auto___30598;
var G__30601 = cljs.core.count(c__5568__auto___30598);
var G__30602 = (0);
seq__30173_30537 = G__30599;
chunk__30177_30538 = G__30600;
count__30178_30539 = G__30601;
i__30179_30540 = G__30602;
continue;
} else {
var node_30603 = cljs.core.first(seq__30173_30596__$1);
if(cljs.core.not(node_30603.shadow$old)){
var path_match_30604 = shadow.cljs.devtools.client.browser.match_paths(node_30603.getAttribute("href"),path);
if(cljs.core.truth_(path_match_30604)){
var new_link_30605 = (function (){var G__30253 = node_30603.cloneNode(true);
G__30253.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_30604),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__30253;
})();
(node_30603.shadow$old = true);

(new_link_30605.onload = ((function (seq__30173_30537,chunk__30177_30538,count__30178_30539,i__30179_30540,seq__29893,chunk__29895,count__29896,i__29897,new_link_30605,path_match_30604,node_30603,seq__30173_30596__$1,temp__5804__auto___30595,path,map__29891,map__29891__$1,msg,updates,reload_info){
return (function (e){
var seq__30254_30606 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__30256_30607 = null;
var count__30257_30608 = (0);
var i__30258_30609 = (0);
while(true){
if((i__30258_30609 < count__30257_30608)){
var map__30263_30610 = chunk__30256_30607.cljs$core$IIndexed$_nth$arity$2(null,i__30258_30609);
var map__30263_30611__$1 = cljs.core.__destructure_map(map__30263_30610);
var task_30612 = map__30263_30611__$1;
var fn_str_30613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30263_30611__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_30614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30263_30611__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_30615 = goog.getObjectByName(fn_str_30613,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_30614)].join(''));

(fn_obj_30615.cljs$core$IFn$_invoke$arity$2 ? fn_obj_30615.cljs$core$IFn$_invoke$arity$2(path,new_link_30605) : fn_obj_30615.call(null,path,new_link_30605));


var G__30616 = seq__30254_30606;
var G__30617 = chunk__30256_30607;
var G__30618 = count__30257_30608;
var G__30619 = (i__30258_30609 + (1));
seq__30254_30606 = G__30616;
chunk__30256_30607 = G__30617;
count__30257_30608 = G__30618;
i__30258_30609 = G__30619;
continue;
} else {
var temp__5804__auto___30620__$1 = cljs.core.seq(seq__30254_30606);
if(temp__5804__auto___30620__$1){
var seq__30254_30621__$1 = temp__5804__auto___30620__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30254_30621__$1)){
var c__5568__auto___30622 = cljs.core.chunk_first(seq__30254_30621__$1);
var G__30623 = cljs.core.chunk_rest(seq__30254_30621__$1);
var G__30624 = c__5568__auto___30622;
var G__30625 = cljs.core.count(c__5568__auto___30622);
var G__30626 = (0);
seq__30254_30606 = G__30623;
chunk__30256_30607 = G__30624;
count__30257_30608 = G__30625;
i__30258_30609 = G__30626;
continue;
} else {
var map__30264_30627 = cljs.core.first(seq__30254_30621__$1);
var map__30264_30628__$1 = cljs.core.__destructure_map(map__30264_30627);
var task_30629 = map__30264_30628__$1;
var fn_str_30630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30264_30628__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_30631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30264_30628__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_30632 = goog.getObjectByName(fn_str_30630,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_30631)].join(''));

(fn_obj_30632.cljs$core$IFn$_invoke$arity$2 ? fn_obj_30632.cljs$core$IFn$_invoke$arity$2(path,new_link_30605) : fn_obj_30632.call(null,path,new_link_30605));


var G__30633 = cljs.core.next(seq__30254_30621__$1);
var G__30634 = null;
var G__30635 = (0);
var G__30636 = (0);
seq__30254_30606 = G__30633;
chunk__30256_30607 = G__30634;
count__30257_30608 = G__30635;
i__30258_30609 = G__30636;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_30603);
});})(seq__30173_30537,chunk__30177_30538,count__30178_30539,i__30179_30540,seq__29893,chunk__29895,count__29896,i__29897,new_link_30605,path_match_30604,node_30603,seq__30173_30596__$1,temp__5804__auto___30595,path,map__29891,map__29891__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_30604], 0));

goog.dom.insertSiblingAfter(new_link_30605,node_30603);


var G__30637 = cljs.core.next(seq__30173_30596__$1);
var G__30638 = null;
var G__30639 = (0);
var G__30640 = (0);
seq__30173_30537 = G__30637;
chunk__30177_30538 = G__30638;
count__30178_30539 = G__30639;
i__30179_30540 = G__30640;
continue;
} else {
var G__30641 = cljs.core.next(seq__30173_30596__$1);
var G__30642 = null;
var G__30643 = (0);
var G__30644 = (0);
seq__30173_30537 = G__30641;
chunk__30177_30538 = G__30642;
count__30178_30539 = G__30643;
i__30179_30540 = G__30644;
continue;
}
} else {
var G__30645 = cljs.core.next(seq__30173_30596__$1);
var G__30646 = null;
var G__30647 = (0);
var G__30648 = (0);
seq__30173_30537 = G__30645;
chunk__30177_30538 = G__30646;
count__30178_30539 = G__30647;
i__30179_30540 = G__30648;
continue;
}
}
} else {
}
}
break;
}


var G__30649 = seq__29893;
var G__30650 = chunk__29895;
var G__30651 = count__29896;
var G__30652 = (i__29897 + (1));
seq__29893 = G__30649;
chunk__29895 = G__30650;
count__29896 = G__30651;
i__29897 = G__30652;
continue;
} else {
var G__30653 = seq__29893;
var G__30654 = chunk__29895;
var G__30655 = count__29896;
var G__30656 = (i__29897 + (1));
seq__29893 = G__30653;
chunk__29895 = G__30654;
count__29896 = G__30655;
i__29897 = G__30656;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29893);
if(temp__5804__auto__){
var seq__29893__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29893__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29893__$1);
var G__30657 = cljs.core.chunk_rest(seq__29893__$1);
var G__30658 = c__5568__auto__;
var G__30659 = cljs.core.count(c__5568__auto__);
var G__30660 = (0);
seq__29893 = G__30657;
chunk__29895 = G__30658;
count__29896 = G__30659;
i__29897 = G__30660;
continue;
} else {
var path = cljs.core.first(seq__29893__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__30266_30661 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__30270_30662 = null;
var count__30271_30663 = (0);
var i__30272_30664 = (0);
while(true){
if((i__30272_30664 < count__30271_30663)){
var node_30665 = chunk__30270_30662.cljs$core$IIndexed$_nth$arity$2(null,i__30272_30664);
if(cljs.core.not(node_30665.shadow$old)){
var path_match_30666 = shadow.cljs.devtools.client.browser.match_paths(node_30665.getAttribute("href"),path);
if(cljs.core.truth_(path_match_30666)){
var new_link_30667 = (function (){var G__30330 = node_30665.cloneNode(true);
G__30330.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_30666),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__30330;
})();
(node_30665.shadow$old = true);

(new_link_30667.onload = ((function (seq__30266_30661,chunk__30270_30662,count__30271_30663,i__30272_30664,seq__29893,chunk__29895,count__29896,i__29897,new_link_30667,path_match_30666,node_30665,path,seq__29893__$1,temp__5804__auto__,map__29891,map__29891__$1,msg,updates,reload_info){
return (function (e){
var seq__30332_30669 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__30334_30670 = null;
var count__30335_30671 = (0);
var i__30336_30672 = (0);
while(true){
if((i__30336_30672 < count__30335_30671)){
var map__30345_30673 = chunk__30334_30670.cljs$core$IIndexed$_nth$arity$2(null,i__30336_30672);
var map__30345_30674__$1 = cljs.core.__destructure_map(map__30345_30673);
var task_30675 = map__30345_30674__$1;
var fn_str_30676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30345_30674__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_30677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30345_30674__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_30678 = goog.getObjectByName(fn_str_30676,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_30677)].join(''));

(fn_obj_30678.cljs$core$IFn$_invoke$arity$2 ? fn_obj_30678.cljs$core$IFn$_invoke$arity$2(path,new_link_30667) : fn_obj_30678.call(null,path,new_link_30667));


var G__30679 = seq__30332_30669;
var G__30680 = chunk__30334_30670;
var G__30681 = count__30335_30671;
var G__30682 = (i__30336_30672 + (1));
seq__30332_30669 = G__30679;
chunk__30334_30670 = G__30680;
count__30335_30671 = G__30681;
i__30336_30672 = G__30682;
continue;
} else {
var temp__5804__auto___30683__$1 = cljs.core.seq(seq__30332_30669);
if(temp__5804__auto___30683__$1){
var seq__30332_30685__$1 = temp__5804__auto___30683__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30332_30685__$1)){
var c__5568__auto___30686 = cljs.core.chunk_first(seq__30332_30685__$1);
var G__30687 = cljs.core.chunk_rest(seq__30332_30685__$1);
var G__30688 = c__5568__auto___30686;
var G__30689 = cljs.core.count(c__5568__auto___30686);
var G__30690 = (0);
seq__30332_30669 = G__30687;
chunk__30334_30670 = G__30688;
count__30335_30671 = G__30689;
i__30336_30672 = G__30690;
continue;
} else {
var map__30353_30691 = cljs.core.first(seq__30332_30685__$1);
var map__30353_30692__$1 = cljs.core.__destructure_map(map__30353_30691);
var task_30693 = map__30353_30692__$1;
var fn_str_30694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30353_30692__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_30695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30353_30692__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_30696 = goog.getObjectByName(fn_str_30694,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_30695)].join(''));

(fn_obj_30696.cljs$core$IFn$_invoke$arity$2 ? fn_obj_30696.cljs$core$IFn$_invoke$arity$2(path,new_link_30667) : fn_obj_30696.call(null,path,new_link_30667));


var G__30697 = cljs.core.next(seq__30332_30685__$1);
var G__30698 = null;
var G__30699 = (0);
var G__30700 = (0);
seq__30332_30669 = G__30697;
chunk__30334_30670 = G__30698;
count__30335_30671 = G__30699;
i__30336_30672 = G__30700;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_30665);
});})(seq__30266_30661,chunk__30270_30662,count__30271_30663,i__30272_30664,seq__29893,chunk__29895,count__29896,i__29897,new_link_30667,path_match_30666,node_30665,path,seq__29893__$1,temp__5804__auto__,map__29891,map__29891__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_30666], 0));

goog.dom.insertSiblingAfter(new_link_30667,node_30665);


var G__30701 = seq__30266_30661;
var G__30702 = chunk__30270_30662;
var G__30703 = count__30271_30663;
var G__30704 = (i__30272_30664 + (1));
seq__30266_30661 = G__30701;
chunk__30270_30662 = G__30702;
count__30271_30663 = G__30703;
i__30272_30664 = G__30704;
continue;
} else {
var G__30706 = seq__30266_30661;
var G__30707 = chunk__30270_30662;
var G__30708 = count__30271_30663;
var G__30709 = (i__30272_30664 + (1));
seq__30266_30661 = G__30706;
chunk__30270_30662 = G__30707;
count__30271_30663 = G__30708;
i__30272_30664 = G__30709;
continue;
}
} else {
var G__30710 = seq__30266_30661;
var G__30711 = chunk__30270_30662;
var G__30712 = count__30271_30663;
var G__30713 = (i__30272_30664 + (1));
seq__30266_30661 = G__30710;
chunk__30270_30662 = G__30711;
count__30271_30663 = G__30712;
i__30272_30664 = G__30713;
continue;
}
} else {
var temp__5804__auto___30714__$1 = cljs.core.seq(seq__30266_30661);
if(temp__5804__auto___30714__$1){
var seq__30266_30715__$1 = temp__5804__auto___30714__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30266_30715__$1)){
var c__5568__auto___30716 = cljs.core.chunk_first(seq__30266_30715__$1);
var G__30717 = cljs.core.chunk_rest(seq__30266_30715__$1);
var G__30718 = c__5568__auto___30716;
var G__30719 = cljs.core.count(c__5568__auto___30716);
var G__30720 = (0);
seq__30266_30661 = G__30717;
chunk__30270_30662 = G__30718;
count__30271_30663 = G__30719;
i__30272_30664 = G__30720;
continue;
} else {
var node_30722 = cljs.core.first(seq__30266_30715__$1);
if(cljs.core.not(node_30722.shadow$old)){
var path_match_30723 = shadow.cljs.devtools.client.browser.match_paths(node_30722.getAttribute("href"),path);
if(cljs.core.truth_(path_match_30723)){
var new_link_30724 = (function (){var G__30357 = node_30722.cloneNode(true);
G__30357.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_30723),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__30357;
})();
(node_30722.shadow$old = true);

(new_link_30724.onload = ((function (seq__30266_30661,chunk__30270_30662,count__30271_30663,i__30272_30664,seq__29893,chunk__29895,count__29896,i__29897,new_link_30724,path_match_30723,node_30722,seq__30266_30715__$1,temp__5804__auto___30714__$1,path,seq__29893__$1,temp__5804__auto__,map__29891,map__29891__$1,msg,updates,reload_info){
return (function (e){
var seq__30358_30725 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__30360_30726 = null;
var count__30361_30727 = (0);
var i__30362_30728 = (0);
while(true){
if((i__30362_30728 < count__30361_30727)){
var map__30366_30729 = chunk__30360_30726.cljs$core$IIndexed$_nth$arity$2(null,i__30362_30728);
var map__30366_30730__$1 = cljs.core.__destructure_map(map__30366_30729);
var task_30731 = map__30366_30730__$1;
var fn_str_30732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30366_30730__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_30733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30366_30730__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_30734 = goog.getObjectByName(fn_str_30732,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_30733)].join(''));

(fn_obj_30734.cljs$core$IFn$_invoke$arity$2 ? fn_obj_30734.cljs$core$IFn$_invoke$arity$2(path,new_link_30724) : fn_obj_30734.call(null,path,new_link_30724));


var G__30736 = seq__30358_30725;
var G__30737 = chunk__30360_30726;
var G__30738 = count__30361_30727;
var G__30739 = (i__30362_30728 + (1));
seq__30358_30725 = G__30736;
chunk__30360_30726 = G__30737;
count__30361_30727 = G__30738;
i__30362_30728 = G__30739;
continue;
} else {
var temp__5804__auto___30740__$2 = cljs.core.seq(seq__30358_30725);
if(temp__5804__auto___30740__$2){
var seq__30358_30741__$1 = temp__5804__auto___30740__$2;
if(cljs.core.chunked_seq_QMARK_(seq__30358_30741__$1)){
var c__5568__auto___30742 = cljs.core.chunk_first(seq__30358_30741__$1);
var G__30743 = cljs.core.chunk_rest(seq__30358_30741__$1);
var G__30744 = c__5568__auto___30742;
var G__30745 = cljs.core.count(c__5568__auto___30742);
var G__30746 = (0);
seq__30358_30725 = G__30743;
chunk__30360_30726 = G__30744;
count__30361_30727 = G__30745;
i__30362_30728 = G__30746;
continue;
} else {
var map__30368_30747 = cljs.core.first(seq__30358_30741__$1);
var map__30368_30748__$1 = cljs.core.__destructure_map(map__30368_30747);
var task_30749 = map__30368_30748__$1;
var fn_str_30750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30368_30748__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_30751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30368_30748__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_30752 = goog.getObjectByName(fn_str_30750,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_30751)].join(''));

(fn_obj_30752.cljs$core$IFn$_invoke$arity$2 ? fn_obj_30752.cljs$core$IFn$_invoke$arity$2(path,new_link_30724) : fn_obj_30752.call(null,path,new_link_30724));


var G__30753 = cljs.core.next(seq__30358_30741__$1);
var G__30754 = null;
var G__30755 = (0);
var G__30756 = (0);
seq__30358_30725 = G__30753;
chunk__30360_30726 = G__30754;
count__30361_30727 = G__30755;
i__30362_30728 = G__30756;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_30722);
});})(seq__30266_30661,chunk__30270_30662,count__30271_30663,i__30272_30664,seq__29893,chunk__29895,count__29896,i__29897,new_link_30724,path_match_30723,node_30722,seq__30266_30715__$1,temp__5804__auto___30714__$1,path,seq__29893__$1,temp__5804__auto__,map__29891,map__29891__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_30723], 0));

goog.dom.insertSiblingAfter(new_link_30724,node_30722);


var G__30757 = cljs.core.next(seq__30266_30715__$1);
var G__30758 = null;
var G__30759 = (0);
var G__30760 = (0);
seq__30266_30661 = G__30757;
chunk__30270_30662 = G__30758;
count__30271_30663 = G__30759;
i__30272_30664 = G__30760;
continue;
} else {
var G__30761 = cljs.core.next(seq__30266_30715__$1);
var G__30762 = null;
var G__30763 = (0);
var G__30764 = (0);
seq__30266_30661 = G__30761;
chunk__30270_30662 = G__30762;
count__30271_30663 = G__30763;
i__30272_30664 = G__30764;
continue;
}
} else {
var G__30765 = cljs.core.next(seq__30266_30715__$1);
var G__30766 = null;
var G__30767 = (0);
var G__30768 = (0);
seq__30266_30661 = G__30765;
chunk__30270_30662 = G__30766;
count__30271_30663 = G__30767;
i__30272_30664 = G__30768;
continue;
}
}
} else {
}
}
break;
}


var G__30769 = cljs.core.next(seq__29893__$1);
var G__30770 = null;
var G__30771 = (0);
var G__30772 = (0);
seq__29893 = G__30769;
chunk__29895 = G__30770;
count__29896 = G__30771;
i__29897 = G__30772;
continue;
} else {
var G__30773 = cljs.core.next(seq__29893__$1);
var G__30775 = null;
var G__30776 = (0);
var G__30777 = (0);
seq__29893 = G__30773;
chunk__29895 = G__30775;
count__29896 = G__30776;
i__29897 = G__30777;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__30376){
var map__30377 = p__30376;
var map__30377__$1 = cljs.core.__destructure_map(map__30377);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30377__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__30385){
var map__30386 = p__30385;
var map__30386__$1 = cljs.core.__destructure_map(map__30386);
var _ = map__30386__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30386__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__30387,done,error){
var map__30389 = p__30387;
var map__30389__$1 = cljs.core.__destructure_map(map__30389);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30389__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__30390,done,error){
var map__30392 = p__30390;
var map__30392__$1 = cljs.core.__destructure_map(map__30392);
var msg = map__30392__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30392__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30392__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30392__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__30395){
var map__30396 = p__30395;
var map__30396__$1 = cljs.core.__destructure_map(map__30396);
var src = map__30396__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30396__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__30404 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__30404) : done.call(null,G__30404));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__30408){
var map__30409 = p__30408;
var map__30409__$1 = cljs.core.__destructure_map(map__30409);
var msg__$1 = map__30409__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30409__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e30412){var ex = e30412;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__30416){
var map__30418 = p__30416;
var map__30418__$1 = cljs.core.__destructure_map(map__30418);
var env = map__30418__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30418__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__30427){
var map__30428 = p__30427;
var map__30428__$1 = cljs.core.__destructure_map(map__30428);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30428__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30428__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__30431){
var map__30432 = p__30431;
var map__30432__$1 = cljs.core.__destructure_map(map__30432);
var svc = map__30432__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30432__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
