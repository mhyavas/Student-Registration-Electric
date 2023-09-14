goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52553 = arguments.length;
var i__5770__auto___52554 = (0);
while(true){
if((i__5770__auto___52554 < len__5769__auto___52553)){
args__5775__auto__.push((arguments[i__5770__auto___52554]));

var G__52555 = (i__5770__auto___52554 + (1));
i__5770__auto___52554 = G__52555;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq52251){
var G__52252 = cljs.core.first(seq52251);
var seq52251__$1 = cljs.core.next(seq52251);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52252,seq52251__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__52256 = cljs.core.seq(sources);
var chunk__52257 = null;
var count__52258 = (0);
var i__52259 = (0);
while(true){
if((i__52259 < count__52258)){
var map__52266 = chunk__52257.cljs$core$IIndexed$_nth$arity$2(null,i__52259);
var map__52266__$1 = cljs.core.__destructure_map(map__52266);
var src = map__52266__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52266__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52266__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52266__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52266__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52267){var e_52556 = e52267;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52556);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52556.message)].join('')));
}

var G__52557 = seq__52256;
var G__52558 = chunk__52257;
var G__52559 = count__52258;
var G__52560 = (i__52259 + (1));
seq__52256 = G__52557;
chunk__52257 = G__52558;
count__52258 = G__52559;
i__52259 = G__52560;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__52256);
if(temp__5804__auto__){
var seq__52256__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52256__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__52256__$1);
var G__52561 = cljs.core.chunk_rest(seq__52256__$1);
var G__52562 = c__5568__auto__;
var G__52563 = cljs.core.count(c__5568__auto__);
var G__52564 = (0);
seq__52256 = G__52561;
chunk__52257 = G__52562;
count__52258 = G__52563;
i__52259 = G__52564;
continue;
} else {
var map__52268 = cljs.core.first(seq__52256__$1);
var map__52268__$1 = cljs.core.__destructure_map(map__52268);
var src = map__52268__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52268__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52268__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52268__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52268__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52269){var e_52565 = e52269;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52565);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52565.message)].join('')));
}

var G__52566 = cljs.core.next(seq__52256__$1);
var G__52567 = null;
var G__52568 = (0);
var G__52569 = (0);
seq__52256 = G__52566;
chunk__52257 = G__52567;
count__52258 = G__52568;
i__52259 = G__52569;
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
var seq__52271 = cljs.core.seq(js_requires);
var chunk__52272 = null;
var count__52273 = (0);
var i__52274 = (0);
while(true){
if((i__52274 < count__52273)){
var js_ns = chunk__52272.cljs$core$IIndexed$_nth$arity$2(null,i__52274);
var require_str_52570 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52570);


var G__52571 = seq__52271;
var G__52572 = chunk__52272;
var G__52573 = count__52273;
var G__52574 = (i__52274 + (1));
seq__52271 = G__52571;
chunk__52272 = G__52572;
count__52273 = G__52573;
i__52274 = G__52574;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__52271);
if(temp__5804__auto__){
var seq__52271__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52271__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__52271__$1);
var G__52575 = cljs.core.chunk_rest(seq__52271__$1);
var G__52576 = c__5568__auto__;
var G__52577 = cljs.core.count(c__5568__auto__);
var G__52578 = (0);
seq__52271 = G__52575;
chunk__52272 = G__52576;
count__52273 = G__52577;
i__52274 = G__52578;
continue;
} else {
var js_ns = cljs.core.first(seq__52271__$1);
var require_str_52579 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52579);


var G__52580 = cljs.core.next(seq__52271__$1);
var G__52581 = null;
var G__52582 = (0);
var G__52583 = (0);
seq__52271 = G__52580;
chunk__52272 = G__52581;
count__52273 = G__52582;
i__52274 = G__52583;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__52277){
var map__52278 = p__52277;
var map__52278__$1 = cljs.core.__destructure_map(map__52278);
var msg = map__52278__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52278__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52278__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52279(s__52280){
return (new cljs.core.LazySeq(null,(function (){
var s__52280__$1 = s__52280;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__52280__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__52285 = cljs.core.first(xs__6360__auto__);
var map__52285__$1 = cljs.core.__destructure_map(map__52285);
var src = map__52285__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52285__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52285__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__52280__$1,map__52285,map__52285__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__52278,map__52278__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52279_$_iter__52281(s__52282){
return (new cljs.core.LazySeq(null,((function (s__52280__$1,map__52285,map__52285__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__52278,map__52278__$1,msg,info,reload_info){
return (function (){
var s__52282__$1 = s__52282;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__52282__$1);
if(temp__5804__auto____$1){
var s__52282__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52282__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__52282__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__52284 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__52283 = (0);
while(true){
if((i__52283 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__52283);
cljs.core.chunk_append(b__52284,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__52584 = (i__52283 + (1));
i__52283 = G__52584;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52284),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52279_$_iter__52281(cljs.core.chunk_rest(s__52282__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52284),null);
}
} else {
var warning = cljs.core.first(s__52282__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52279_$_iter__52281(cljs.core.rest(s__52282__$2)));
}
} else {
return null;
}
break;
}
});})(s__52280__$1,map__52285,map__52285__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__52278,map__52278__$1,msg,info,reload_info))
,null,null));
});})(s__52280__$1,map__52285,map__52285__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__52278,map__52278__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52279(cljs.core.rest(s__52280__$1)));
} else {
var G__52585 = cljs.core.rest(s__52280__$1);
s__52280__$1 = G__52585;
continue;
}
} else {
var G__52586 = cljs.core.rest(s__52280__$1);
s__52280__$1 = G__52586;
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
var seq__52286_52587 = cljs.core.seq(warnings);
var chunk__52287_52588 = null;
var count__52288_52589 = (0);
var i__52289_52590 = (0);
while(true){
if((i__52289_52590 < count__52288_52589)){
var map__52292_52591 = chunk__52287_52588.cljs$core$IIndexed$_nth$arity$2(null,i__52289_52590);
var map__52292_52592__$1 = cljs.core.__destructure_map(map__52292_52591);
var w_52593 = map__52292_52592__$1;
var msg_52594__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52292_52592__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52292_52592__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52292_52592__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52292_52592__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52597)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52595),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52596),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52594__$1)].join(''));


var G__52598 = seq__52286_52587;
var G__52599 = chunk__52287_52588;
var G__52600 = count__52288_52589;
var G__52601 = (i__52289_52590 + (1));
seq__52286_52587 = G__52598;
chunk__52287_52588 = G__52599;
count__52288_52589 = G__52600;
i__52289_52590 = G__52601;
continue;
} else {
var temp__5804__auto___52602 = cljs.core.seq(seq__52286_52587);
if(temp__5804__auto___52602){
var seq__52286_52603__$1 = temp__5804__auto___52602;
if(cljs.core.chunked_seq_QMARK_(seq__52286_52603__$1)){
var c__5568__auto___52604 = cljs.core.chunk_first(seq__52286_52603__$1);
var G__52605 = cljs.core.chunk_rest(seq__52286_52603__$1);
var G__52606 = c__5568__auto___52604;
var G__52607 = cljs.core.count(c__5568__auto___52604);
var G__52608 = (0);
seq__52286_52587 = G__52605;
chunk__52287_52588 = G__52606;
count__52288_52589 = G__52607;
i__52289_52590 = G__52608;
continue;
} else {
var map__52293_52609 = cljs.core.first(seq__52286_52603__$1);
var map__52293_52610__$1 = cljs.core.__destructure_map(map__52293_52609);
var w_52611 = map__52293_52610__$1;
var msg_52612__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52293_52610__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52293_52610__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52293_52610__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52293_52610__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52615)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52613),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52614),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52612__$1)].join(''));


var G__52616 = cljs.core.next(seq__52286_52603__$1);
var G__52617 = null;
var G__52618 = (0);
var G__52619 = (0);
seq__52286_52587 = G__52616;
chunk__52287_52588 = G__52617;
count__52288_52589 = G__52618;
i__52289_52590 = G__52619;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__52276_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__52276_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__52295){
var map__52296 = p__52295;
var map__52296__$1 = cljs.core.__destructure_map(map__52296);
var msg = map__52296__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52296__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52296__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__52297 = cljs.core.seq(updates);
var chunk__52299 = null;
var count__52300 = (0);
var i__52301 = (0);
while(true){
if((i__52301 < count__52300)){
var path = chunk__52299.cljs$core$IIndexed$_nth$arity$2(null,i__52301);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52411_52620 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52415_52621 = null;
var count__52416_52622 = (0);
var i__52417_52623 = (0);
while(true){
if((i__52417_52623 < count__52416_52622)){
var node_52624 = chunk__52415_52621.cljs$core$IIndexed$_nth$arity$2(null,i__52417_52623);
if(cljs.core.not(node_52624.shadow$old)){
var path_match_52625 = shadow.cljs.devtools.client.browser.match_paths(node_52624.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52625)){
var new_link_52626 = (function (){var G__52445 = node_52624.cloneNode(true);
G__52445.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52625),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52445;
})();
(node_52624.shadow$old = true);

(new_link_52626.onload = ((function (seq__52411_52620,chunk__52415_52621,count__52416_52622,i__52417_52623,seq__52297,chunk__52299,count__52300,i__52301,new_link_52626,path_match_52625,node_52624,path,map__52296,map__52296__$1,msg,updates,reload_info){
return (function (e){
var seq__52446_52627 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__52448_52628 = null;
var count__52449_52629 = (0);
var i__52450_52630 = (0);
while(true){
if((i__52450_52630 < count__52449_52629)){
var map__52454_52631 = chunk__52448_52628.cljs$core$IIndexed$_nth$arity$2(null,i__52450_52630);
var map__52454_52632__$1 = cljs.core.__destructure_map(map__52454_52631);
var task_52633 = map__52454_52632__$1;
var fn_str_52634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52454_52632__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52454_52632__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52636 = goog.getObjectByName(fn_str_52634,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52635)].join(''));

(fn_obj_52636.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52636.cljs$core$IFn$_invoke$arity$2(path,new_link_52626) : fn_obj_52636.call(null,path,new_link_52626));


var G__52637 = seq__52446_52627;
var G__52638 = chunk__52448_52628;
var G__52639 = count__52449_52629;
var G__52640 = (i__52450_52630 + (1));
seq__52446_52627 = G__52637;
chunk__52448_52628 = G__52638;
count__52449_52629 = G__52639;
i__52450_52630 = G__52640;
continue;
} else {
var temp__5804__auto___52641 = cljs.core.seq(seq__52446_52627);
if(temp__5804__auto___52641){
var seq__52446_52642__$1 = temp__5804__auto___52641;
if(cljs.core.chunked_seq_QMARK_(seq__52446_52642__$1)){
var c__5568__auto___52643 = cljs.core.chunk_first(seq__52446_52642__$1);
var G__52644 = cljs.core.chunk_rest(seq__52446_52642__$1);
var G__52645 = c__5568__auto___52643;
var G__52646 = cljs.core.count(c__5568__auto___52643);
var G__52647 = (0);
seq__52446_52627 = G__52644;
chunk__52448_52628 = G__52645;
count__52449_52629 = G__52646;
i__52450_52630 = G__52647;
continue;
} else {
var map__52455_52648 = cljs.core.first(seq__52446_52642__$1);
var map__52455_52649__$1 = cljs.core.__destructure_map(map__52455_52648);
var task_52650 = map__52455_52649__$1;
var fn_str_52651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52455_52649__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52455_52649__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52653 = goog.getObjectByName(fn_str_52651,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52652)].join(''));

(fn_obj_52653.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52653.cljs$core$IFn$_invoke$arity$2(path,new_link_52626) : fn_obj_52653.call(null,path,new_link_52626));


var G__52654 = cljs.core.next(seq__52446_52642__$1);
var G__52655 = null;
var G__52656 = (0);
var G__52657 = (0);
seq__52446_52627 = G__52654;
chunk__52448_52628 = G__52655;
count__52449_52629 = G__52656;
i__52450_52630 = G__52657;
continue;
}
} else {
}
}
break;
}

return (goog.dom.removeNode.cljs$core$IFn$_invoke$arity$1 ? goog.dom.removeNode.cljs$core$IFn$_invoke$arity$1(node_52624) : goog.dom.removeNode.call(null,node_52624));
});})(seq__52411_52620,chunk__52415_52621,count__52416_52622,i__52417_52623,seq__52297,chunk__52299,count__52300,i__52301,new_link_52626,path_match_52625,node_52624,path,map__52296,map__52296__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52625], 0));

(goog.dom.insertSiblingAfter.cljs$core$IFn$_invoke$arity$2 ? goog.dom.insertSiblingAfter.cljs$core$IFn$_invoke$arity$2(new_link_52626,node_52624) : goog.dom.insertSiblingAfter.call(null,new_link_52626,node_52624));


var G__52658 = seq__52411_52620;
var G__52659 = chunk__52415_52621;
var G__52660 = count__52416_52622;
var G__52661 = (i__52417_52623 + (1));
seq__52411_52620 = G__52658;
chunk__52415_52621 = G__52659;
count__52416_52622 = G__52660;
i__52417_52623 = G__52661;
continue;
} else {
var G__52662 = seq__52411_52620;
var G__52663 = chunk__52415_52621;
var G__52664 = count__52416_52622;
var G__52665 = (i__52417_52623 + (1));
seq__52411_52620 = G__52662;
chunk__52415_52621 = G__52663;
count__52416_52622 = G__52664;
i__52417_52623 = G__52665;
continue;
}
} else {
var G__52666 = seq__52411_52620;
var G__52667 = chunk__52415_52621;
var G__52668 = count__52416_52622;
var G__52669 = (i__52417_52623 + (1));
seq__52411_52620 = G__52666;
chunk__52415_52621 = G__52667;
count__52416_52622 = G__52668;
i__52417_52623 = G__52669;
continue;
}
} else {
var temp__5804__auto___52670 = cljs.core.seq(seq__52411_52620);
if(temp__5804__auto___52670){
var seq__52411_52671__$1 = temp__5804__auto___52670;
if(cljs.core.chunked_seq_QMARK_(seq__52411_52671__$1)){
var c__5568__auto___52672 = cljs.core.chunk_first(seq__52411_52671__$1);
var G__52673 = cljs.core.chunk_rest(seq__52411_52671__$1);
var G__52674 = c__5568__auto___52672;
var G__52675 = cljs.core.count(c__5568__auto___52672);
var G__52676 = (0);
seq__52411_52620 = G__52673;
chunk__52415_52621 = G__52674;
count__52416_52622 = G__52675;
i__52417_52623 = G__52676;
continue;
} else {
var node_52677 = cljs.core.first(seq__52411_52671__$1);
if(cljs.core.not(node_52677.shadow$old)){
var path_match_52678 = shadow.cljs.devtools.client.browser.match_paths(node_52677.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52678)){
var new_link_52679 = (function (){var G__52456 = node_52677.cloneNode(true);
G__52456.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52678),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52456;
})();
(node_52677.shadow$old = true);

(new_link_52679.onload = ((function (seq__52411_52620,chunk__52415_52621,count__52416_52622,i__52417_52623,seq__52297,chunk__52299,count__52300,i__52301,new_link_52679,path_match_52678,node_52677,seq__52411_52671__$1,temp__5804__auto___52670,path,map__52296,map__52296__$1,msg,updates,reload_info){
return (function (e){
var seq__52457_52680 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__52459_52681 = null;
var count__52460_52682 = (0);
var i__52461_52683 = (0);
while(true){
if((i__52461_52683 < count__52460_52682)){
var map__52468_52684 = chunk__52459_52681.cljs$core$IIndexed$_nth$arity$2(null,i__52461_52683);
var map__52468_52685__$1 = cljs.core.__destructure_map(map__52468_52684);
var task_52686 = map__52468_52685__$1;
var fn_str_52687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52468_52685__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52468_52685__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52689 = goog.getObjectByName(fn_str_52687,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52688)].join(''));

(fn_obj_52689.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52689.cljs$core$IFn$_invoke$arity$2(path,new_link_52679) : fn_obj_52689.call(null,path,new_link_52679));


var G__52690 = seq__52457_52680;
var G__52691 = chunk__52459_52681;
var G__52692 = count__52460_52682;
var G__52693 = (i__52461_52683 + (1));
seq__52457_52680 = G__52690;
chunk__52459_52681 = G__52691;
count__52460_52682 = G__52692;
i__52461_52683 = G__52693;
continue;
} else {
var temp__5804__auto___52694__$1 = cljs.core.seq(seq__52457_52680);
if(temp__5804__auto___52694__$1){
var seq__52457_52695__$1 = temp__5804__auto___52694__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52457_52695__$1)){
var c__5568__auto___52696 = cljs.core.chunk_first(seq__52457_52695__$1);
var G__52697 = cljs.core.chunk_rest(seq__52457_52695__$1);
var G__52698 = c__5568__auto___52696;
var G__52699 = cljs.core.count(c__5568__auto___52696);
var G__52700 = (0);
seq__52457_52680 = G__52697;
chunk__52459_52681 = G__52698;
count__52460_52682 = G__52699;
i__52461_52683 = G__52700;
continue;
} else {
var map__52469_52701 = cljs.core.first(seq__52457_52695__$1);
var map__52469_52702__$1 = cljs.core.__destructure_map(map__52469_52701);
var task_52703 = map__52469_52702__$1;
var fn_str_52704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52469_52702__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52469_52702__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52706 = goog.getObjectByName(fn_str_52704,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52705)].join(''));

(fn_obj_52706.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52706.cljs$core$IFn$_invoke$arity$2(path,new_link_52679) : fn_obj_52706.call(null,path,new_link_52679));


var G__52707 = cljs.core.next(seq__52457_52695__$1);
var G__52708 = null;
var G__52709 = (0);
var G__52710 = (0);
seq__52457_52680 = G__52707;
chunk__52459_52681 = G__52708;
count__52460_52682 = G__52709;
i__52461_52683 = G__52710;
continue;
}
} else {
}
}
break;
}

return (goog.dom.removeNode.cljs$core$IFn$_invoke$arity$1 ? goog.dom.removeNode.cljs$core$IFn$_invoke$arity$1(node_52677) : goog.dom.removeNode.call(null,node_52677));
});})(seq__52411_52620,chunk__52415_52621,count__52416_52622,i__52417_52623,seq__52297,chunk__52299,count__52300,i__52301,new_link_52679,path_match_52678,node_52677,seq__52411_52671__$1,temp__5804__auto___52670,path,map__52296,map__52296__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52678], 0));

(goog.dom.insertSiblingAfter.cljs$core$IFn$_invoke$arity$2 ? goog.dom.insertSiblingAfter.cljs$core$IFn$_invoke$arity$2(new_link_52679,node_52677) : goog.dom.insertSiblingAfter.call(null,new_link_52679,node_52677));


var G__52711 = cljs.core.next(seq__52411_52671__$1);
var G__52712 = null;
var G__52713 = (0);
var G__52714 = (0);
seq__52411_52620 = G__52711;
chunk__52415_52621 = G__52712;
count__52416_52622 = G__52713;
i__52417_52623 = G__52714;
continue;
} else {
var G__52715 = cljs.core.next(seq__52411_52671__$1);
var G__52716 = null;
var G__52717 = (0);
var G__52718 = (0);
seq__52411_52620 = G__52715;
chunk__52415_52621 = G__52716;
count__52416_52622 = G__52717;
i__52417_52623 = G__52718;
continue;
}
} else {
var G__52719 = cljs.core.next(seq__52411_52671__$1);
var G__52720 = null;
var G__52721 = (0);
var G__52722 = (0);
seq__52411_52620 = G__52719;
chunk__52415_52621 = G__52720;
count__52416_52622 = G__52721;
i__52417_52623 = G__52722;
continue;
}
}
} else {
}
}
break;
}


var G__52723 = seq__52297;
var G__52724 = chunk__52299;
var G__52725 = count__52300;
var G__52726 = (i__52301 + (1));
seq__52297 = G__52723;
chunk__52299 = G__52724;
count__52300 = G__52725;
i__52301 = G__52726;
continue;
} else {
var G__52727 = seq__52297;
var G__52728 = chunk__52299;
var G__52729 = count__52300;
var G__52730 = (i__52301 + (1));
seq__52297 = G__52727;
chunk__52299 = G__52728;
count__52300 = G__52729;
i__52301 = G__52730;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__52297);
if(temp__5804__auto__){
var seq__52297__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52297__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__52297__$1);
var G__52731 = cljs.core.chunk_rest(seq__52297__$1);
var G__52732 = c__5568__auto__;
var G__52733 = cljs.core.count(c__5568__auto__);
var G__52734 = (0);
seq__52297 = G__52731;
chunk__52299 = G__52732;
count__52300 = G__52733;
i__52301 = G__52734;
continue;
} else {
var path = cljs.core.first(seq__52297__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52470_52735 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52474_52736 = null;
var count__52475_52737 = (0);
var i__52476_52738 = (0);
while(true){
if((i__52476_52738 < count__52475_52737)){
var node_52739 = chunk__52474_52736.cljs$core$IIndexed$_nth$arity$2(null,i__52476_52738);
if(cljs.core.not(node_52739.shadow$old)){
var path_match_52740 = shadow.cljs.devtools.client.browser.match_paths(node_52739.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52740)){
var new_link_52741 = (function (){var G__52502 = node_52739.cloneNode(true);
G__52502.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52740),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52502;
})();
(node_52739.shadow$old = true);

(new_link_52741.onload = ((function (seq__52470_52735,chunk__52474_52736,count__52475_52737,i__52476_52738,seq__52297,chunk__52299,count__52300,i__52301,new_link_52741,path_match_52740,node_52739,path,seq__52297__$1,temp__5804__auto__,map__52296,map__52296__$1,msg,updates,reload_info){
return (function (e){
var seq__52503_52742 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__52505_52743 = null;
var count__52506_52744 = (0);
var i__52507_52745 = (0);
while(true){
if((i__52507_52745 < count__52506_52744)){
var map__52511_52746 = chunk__52505_52743.cljs$core$IIndexed$_nth$arity$2(null,i__52507_52745);
var map__52511_52747__$1 = cljs.core.__destructure_map(map__52511_52746);
var task_52748 = map__52511_52747__$1;
var fn_str_52749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52511_52747__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52511_52747__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52751 = goog.getObjectByName(fn_str_52749,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52750)].join(''));

(fn_obj_52751.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52751.cljs$core$IFn$_invoke$arity$2(path,new_link_52741) : fn_obj_52751.call(null,path,new_link_52741));


var G__52752 = seq__52503_52742;
var G__52753 = chunk__52505_52743;
var G__52754 = count__52506_52744;
var G__52755 = (i__52507_52745 + (1));
seq__52503_52742 = G__52752;
chunk__52505_52743 = G__52753;
count__52506_52744 = G__52754;
i__52507_52745 = G__52755;
continue;
} else {
var temp__5804__auto___52756__$1 = cljs.core.seq(seq__52503_52742);
if(temp__5804__auto___52756__$1){
var seq__52503_52757__$1 = temp__5804__auto___52756__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52503_52757__$1)){
var c__5568__auto___52758 = cljs.core.chunk_first(seq__52503_52757__$1);
var G__52759 = cljs.core.chunk_rest(seq__52503_52757__$1);
var G__52760 = c__5568__auto___52758;
var G__52761 = cljs.core.count(c__5568__auto___52758);
var G__52762 = (0);
seq__52503_52742 = G__52759;
chunk__52505_52743 = G__52760;
count__52506_52744 = G__52761;
i__52507_52745 = G__52762;
continue;
} else {
var map__52512_52763 = cljs.core.first(seq__52503_52757__$1);
var map__52512_52764__$1 = cljs.core.__destructure_map(map__52512_52763);
var task_52765 = map__52512_52764__$1;
var fn_str_52766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52512_52764__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52512_52764__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52768 = goog.getObjectByName(fn_str_52766,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52767)].join(''));

(fn_obj_52768.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52768.cljs$core$IFn$_invoke$arity$2(path,new_link_52741) : fn_obj_52768.call(null,path,new_link_52741));


var G__52769 = cljs.core.next(seq__52503_52757__$1);
var G__52770 = null;
var G__52771 = (0);
var G__52772 = (0);
seq__52503_52742 = G__52769;
chunk__52505_52743 = G__52770;
count__52506_52744 = G__52771;
i__52507_52745 = G__52772;
continue;
}
} else {
}
}
break;
}

return (goog.dom.removeNode.cljs$core$IFn$_invoke$arity$1 ? goog.dom.removeNode.cljs$core$IFn$_invoke$arity$1(node_52739) : goog.dom.removeNode.call(null,node_52739));
});})(seq__52470_52735,chunk__52474_52736,count__52475_52737,i__52476_52738,seq__52297,chunk__52299,count__52300,i__52301,new_link_52741,path_match_52740,node_52739,path,seq__52297__$1,temp__5804__auto__,map__52296,map__52296__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52740], 0));

(goog.dom.insertSiblingAfter.cljs$core$IFn$_invoke$arity$2 ? goog.dom.insertSiblingAfter.cljs$core$IFn$_invoke$arity$2(new_link_52741,node_52739) : goog.dom.insertSiblingAfter.call(null,new_link_52741,node_52739));


var G__52773 = seq__52470_52735;
var G__52774 = chunk__52474_52736;
var G__52775 = count__52475_52737;
var G__52776 = (i__52476_52738 + (1));
seq__52470_52735 = G__52773;
chunk__52474_52736 = G__52774;
count__52475_52737 = G__52775;
i__52476_52738 = G__52776;
continue;
} else {
var G__52777 = seq__52470_52735;
var G__52778 = chunk__52474_52736;
var G__52779 = count__52475_52737;
var G__52780 = (i__52476_52738 + (1));
seq__52470_52735 = G__52777;
chunk__52474_52736 = G__52778;
count__52475_52737 = G__52779;
i__52476_52738 = G__52780;
continue;
}
} else {
var G__52781 = seq__52470_52735;
var G__52782 = chunk__52474_52736;
var G__52783 = count__52475_52737;
var G__52784 = (i__52476_52738 + (1));
seq__52470_52735 = G__52781;
chunk__52474_52736 = G__52782;
count__52475_52737 = G__52783;
i__52476_52738 = G__52784;
continue;
}
} else {
var temp__5804__auto___52785__$1 = cljs.core.seq(seq__52470_52735);
if(temp__5804__auto___52785__$1){
var seq__52470_52786__$1 = temp__5804__auto___52785__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52470_52786__$1)){
var c__5568__auto___52787 = cljs.core.chunk_first(seq__52470_52786__$1);
var G__52788 = cljs.core.chunk_rest(seq__52470_52786__$1);
var G__52789 = c__5568__auto___52787;
var G__52790 = cljs.core.count(c__5568__auto___52787);
var G__52791 = (0);
seq__52470_52735 = G__52788;
chunk__52474_52736 = G__52789;
count__52475_52737 = G__52790;
i__52476_52738 = G__52791;
continue;
} else {
var node_52792 = cljs.core.first(seq__52470_52786__$1);
if(cljs.core.not(node_52792.shadow$old)){
var path_match_52793 = shadow.cljs.devtools.client.browser.match_paths(node_52792.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52793)){
var new_link_52794 = (function (){var G__52516 = node_52792.cloneNode(true);
G__52516.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52793),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52516;
})();
(node_52792.shadow$old = true);

(new_link_52794.onload = ((function (seq__52470_52735,chunk__52474_52736,count__52475_52737,i__52476_52738,seq__52297,chunk__52299,count__52300,i__52301,new_link_52794,path_match_52793,node_52792,seq__52470_52786__$1,temp__5804__auto___52785__$1,path,seq__52297__$1,temp__5804__auto__,map__52296,map__52296__$1,msg,updates,reload_info){
return (function (e){
var seq__52517_52795 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__52519_52796 = null;
var count__52520_52797 = (0);
var i__52521_52798 = (0);
while(true){
if((i__52521_52798 < count__52520_52797)){
var map__52525_52799 = chunk__52519_52796.cljs$core$IIndexed$_nth$arity$2(null,i__52521_52798);
var map__52525_52800__$1 = cljs.core.__destructure_map(map__52525_52799);
var task_52801 = map__52525_52800__$1;
var fn_str_52802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52525_52800__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52525_52800__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52804 = goog.getObjectByName(fn_str_52802,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52803)].join(''));

(fn_obj_52804.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52804.cljs$core$IFn$_invoke$arity$2(path,new_link_52794) : fn_obj_52804.call(null,path,new_link_52794));


var G__52805 = seq__52517_52795;
var G__52806 = chunk__52519_52796;
var G__52807 = count__52520_52797;
var G__52808 = (i__52521_52798 + (1));
seq__52517_52795 = G__52805;
chunk__52519_52796 = G__52806;
count__52520_52797 = G__52807;
i__52521_52798 = G__52808;
continue;
} else {
var temp__5804__auto___52809__$2 = cljs.core.seq(seq__52517_52795);
if(temp__5804__auto___52809__$2){
var seq__52517_52810__$1 = temp__5804__auto___52809__$2;
if(cljs.core.chunked_seq_QMARK_(seq__52517_52810__$1)){
var c__5568__auto___52811 = cljs.core.chunk_first(seq__52517_52810__$1);
var G__52812 = cljs.core.chunk_rest(seq__52517_52810__$1);
var G__52813 = c__5568__auto___52811;
var G__52814 = cljs.core.count(c__5568__auto___52811);
var G__52815 = (0);
seq__52517_52795 = G__52812;
chunk__52519_52796 = G__52813;
count__52520_52797 = G__52814;
i__52521_52798 = G__52815;
continue;
} else {
var map__52526_52816 = cljs.core.first(seq__52517_52810__$1);
var map__52526_52817__$1 = cljs.core.__destructure_map(map__52526_52816);
var task_52818 = map__52526_52817__$1;
var fn_str_52819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52526_52817__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52526_52817__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52821 = goog.getObjectByName(fn_str_52819,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52820)].join(''));

(fn_obj_52821.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52821.cljs$core$IFn$_invoke$arity$2(path,new_link_52794) : fn_obj_52821.call(null,path,new_link_52794));


var G__52822 = cljs.core.next(seq__52517_52810__$1);
var G__52823 = null;
var G__52824 = (0);
var G__52825 = (0);
seq__52517_52795 = G__52822;
chunk__52519_52796 = G__52823;
count__52520_52797 = G__52824;
i__52521_52798 = G__52825;
continue;
}
} else {
}
}
break;
}

return (goog.dom.removeNode.cljs$core$IFn$_invoke$arity$1 ? goog.dom.removeNode.cljs$core$IFn$_invoke$arity$1(node_52792) : goog.dom.removeNode.call(null,node_52792));
});})(seq__52470_52735,chunk__52474_52736,count__52475_52737,i__52476_52738,seq__52297,chunk__52299,count__52300,i__52301,new_link_52794,path_match_52793,node_52792,seq__52470_52786__$1,temp__5804__auto___52785__$1,path,seq__52297__$1,temp__5804__auto__,map__52296,map__52296__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52793], 0));

(goog.dom.insertSiblingAfter.cljs$core$IFn$_invoke$arity$2 ? goog.dom.insertSiblingAfter.cljs$core$IFn$_invoke$arity$2(new_link_52794,node_52792) : goog.dom.insertSiblingAfter.call(null,new_link_52794,node_52792));


var G__52826 = cljs.core.next(seq__52470_52786__$1);
var G__52827 = null;
var G__52828 = (0);
var G__52829 = (0);
seq__52470_52735 = G__52826;
chunk__52474_52736 = G__52827;
count__52475_52737 = G__52828;
i__52476_52738 = G__52829;
continue;
} else {
var G__52830 = cljs.core.next(seq__52470_52786__$1);
var G__52831 = null;
var G__52832 = (0);
var G__52833 = (0);
seq__52470_52735 = G__52830;
chunk__52474_52736 = G__52831;
count__52475_52737 = G__52832;
i__52476_52738 = G__52833;
continue;
}
} else {
var G__52834 = cljs.core.next(seq__52470_52786__$1);
var G__52835 = null;
var G__52836 = (0);
var G__52837 = (0);
seq__52470_52735 = G__52834;
chunk__52474_52736 = G__52835;
count__52475_52737 = G__52836;
i__52476_52738 = G__52837;
continue;
}
}
} else {
}
}
break;
}


var G__52838 = cljs.core.next(seq__52297__$1);
var G__52839 = null;
var G__52840 = (0);
var G__52841 = (0);
seq__52297 = G__52838;
chunk__52299 = G__52839;
count__52300 = G__52840;
i__52301 = G__52841;
continue;
} else {
var G__52842 = cljs.core.next(seq__52297__$1);
var G__52843 = null;
var G__52844 = (0);
var G__52845 = (0);
seq__52297 = G__52842;
chunk__52299 = G__52843;
count__52300 = G__52844;
i__52301 = G__52845;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__52527){
var map__52528 = p__52527;
var map__52528__$1 = cljs.core.__destructure_map(map__52528);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52528__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__52529){
var map__52530 = p__52529;
var map__52530__$1 = cljs.core.__destructure_map(map__52530);
var _ = map__52530__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52530__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__52531,done,error){
var map__52532 = p__52531;
var map__52532__$1 = cljs.core.__destructure_map(map__52532);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52532__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__52533,done,error){
var map__52534 = p__52533;
var map__52534__$1 = cljs.core.__destructure_map(map__52534);
var msg = map__52534__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52534__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52534__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52534__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__52535){
var map__52536 = p__52535;
var map__52536__$1 = cljs.core.__destructure_map(map__52536);
var src = map__52536__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52536__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__52537 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__52537) : done.call(null,G__52537));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__52538){
var map__52539 = p__52538;
var map__52539__$1 = cljs.core.__destructure_map(map__52539);
var msg__$1 = map__52539__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52539__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e52540){var ex = e52540;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__52541){
var map__52542 = p__52541;
var map__52542__$1 = cljs.core.__destructure_map(map__52542);
var env = map__52542__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52542__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__52546){
var map__52547 = p__52546;
var map__52547__$1 = cljs.core.__destructure_map(map__52547);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52547__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52547__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__52548){
var map__52549 = p__52548;
var map__52549__$1 = cljs.core.__destructure_map(map__52549);
var svc = map__52549__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52549__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
