goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39871 = arguments.length;
var i__5770__auto___39872 = (0);
while(true){
if((i__5770__auto___39872 < len__5769__auto___39871)){
args__5775__auto__.push((arguments[i__5770__auto___39872]));

var G__39873 = (i__5770__auto___39872 + (1));
i__5770__auto___39872 = G__39873;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39414){
var G__39415 = cljs.core.first(seq39414);
var seq39414__$1 = cljs.core.next(seq39414);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39415,seq39414__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__39437 = cljs.core.seq(sources);
var chunk__39438 = null;
var count__39439 = (0);
var i__39440 = (0);
while(true){
if((i__39440 < count__39439)){
var map__39447 = chunk__39438.cljs$core$IIndexed$_nth$arity$2(null,i__39440);
var map__39447__$1 = cljs.core.__destructure_map(map__39447);
var src = map__39447__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39447__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39447__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39447__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39447__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39448){var e_39874 = e39448;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39874);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39874.message)].join('')));
}

var G__39875 = seq__39437;
var G__39876 = chunk__39438;
var G__39877 = count__39439;
var G__39878 = (i__39440 + (1));
seq__39437 = G__39875;
chunk__39438 = G__39876;
count__39439 = G__39877;
i__39440 = G__39878;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39437);
if(temp__5804__auto__){
var seq__39437__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39437__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39437__$1);
var G__39879 = cljs.core.chunk_rest(seq__39437__$1);
var G__39880 = c__5568__auto__;
var G__39881 = cljs.core.count(c__5568__auto__);
var G__39882 = (0);
seq__39437 = G__39879;
chunk__39438 = G__39880;
count__39439 = G__39881;
i__39440 = G__39882;
continue;
} else {
var map__39449 = cljs.core.first(seq__39437__$1);
var map__39449__$1 = cljs.core.__destructure_map(map__39449);
var src = map__39449__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39449__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39449__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39449__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39449__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39453){var e_39883 = e39453;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39883);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39883.message)].join('')));
}

var G__39884 = cljs.core.next(seq__39437__$1);
var G__39885 = null;
var G__39886 = (0);
var G__39887 = (0);
seq__39437 = G__39884;
chunk__39438 = G__39885;
count__39439 = G__39886;
i__39440 = G__39887;
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
var seq__39458 = cljs.core.seq(js_requires);
var chunk__39459 = null;
var count__39460 = (0);
var i__39461 = (0);
while(true){
if((i__39461 < count__39460)){
var js_ns = chunk__39459.cljs$core$IIndexed$_nth$arity$2(null,i__39461);
var require_str_39888 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39888);


var G__39889 = seq__39458;
var G__39890 = chunk__39459;
var G__39891 = count__39460;
var G__39892 = (i__39461 + (1));
seq__39458 = G__39889;
chunk__39459 = G__39890;
count__39460 = G__39891;
i__39461 = G__39892;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39458);
if(temp__5804__auto__){
var seq__39458__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39458__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39458__$1);
var G__39893 = cljs.core.chunk_rest(seq__39458__$1);
var G__39894 = c__5568__auto__;
var G__39895 = cljs.core.count(c__5568__auto__);
var G__39896 = (0);
seq__39458 = G__39893;
chunk__39459 = G__39894;
count__39460 = G__39895;
i__39461 = G__39896;
continue;
} else {
var js_ns = cljs.core.first(seq__39458__$1);
var require_str_39897 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39897);


var G__39898 = cljs.core.next(seq__39458__$1);
var G__39899 = null;
var G__39900 = (0);
var G__39901 = (0);
seq__39458 = G__39898;
chunk__39459 = G__39899;
count__39460 = G__39900;
i__39461 = G__39901;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__39470){
var map__39471 = p__39470;
var map__39471__$1 = cljs.core.__destructure_map(map__39471);
var msg = map__39471__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39471__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39471__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39472(s__39473){
return (new cljs.core.LazySeq(null,(function (){
var s__39473__$1 = s__39473;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__39473__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__39478 = cljs.core.first(xs__6360__auto__);
var map__39478__$1 = cljs.core.__destructure_map(map__39478);
var src = map__39478__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39478__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39478__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__39473__$1,map__39478,map__39478__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39471,map__39471__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39472_$_iter__39474(s__39475){
return (new cljs.core.LazySeq(null,((function (s__39473__$1,map__39478,map__39478__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39471,map__39471__$1,msg,info,reload_info){
return (function (){
var s__39475__$1 = s__39475;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__39475__$1);
if(temp__5804__auto____$1){
var s__39475__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39475__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__39475__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__39477 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__39476 = (0);
while(true){
if((i__39476 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__39476);
cljs.core.chunk_append(b__39477,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39902 = (i__39476 + (1));
i__39476 = G__39902;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39477),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39472_$_iter__39474(cljs.core.chunk_rest(s__39475__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39477),null);
}
} else {
var warning = cljs.core.first(s__39475__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39472_$_iter__39474(cljs.core.rest(s__39475__$2)));
}
} else {
return null;
}
break;
}
});})(s__39473__$1,map__39478,map__39478__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39471,map__39471__$1,msg,info,reload_info))
,null,null));
});})(s__39473__$1,map__39478,map__39478__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39471,map__39471__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39472(cljs.core.rest(s__39473__$1)));
} else {
var G__39903 = cljs.core.rest(s__39473__$1);
s__39473__$1 = G__39903;
continue;
}
} else {
var G__39904 = cljs.core.rest(s__39473__$1);
s__39473__$1 = G__39904;
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
var seq__39479_39905 = cljs.core.seq(warnings);
var chunk__39480_39906 = null;
var count__39481_39907 = (0);
var i__39482_39908 = (0);
while(true){
if((i__39482_39908 < count__39481_39907)){
var map__39485_39909 = chunk__39480_39906.cljs$core$IIndexed$_nth$arity$2(null,i__39482_39908);
var map__39485_39910__$1 = cljs.core.__destructure_map(map__39485_39909);
var w_39911 = map__39485_39910__$1;
var msg_39912__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39485_39910__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39485_39910__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39485_39910__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39485_39910__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39915)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39913),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39914),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39912__$1)].join(''));


var G__39916 = seq__39479_39905;
var G__39917 = chunk__39480_39906;
var G__39918 = count__39481_39907;
var G__39919 = (i__39482_39908 + (1));
seq__39479_39905 = G__39916;
chunk__39480_39906 = G__39917;
count__39481_39907 = G__39918;
i__39482_39908 = G__39919;
continue;
} else {
var temp__5804__auto___39920 = cljs.core.seq(seq__39479_39905);
if(temp__5804__auto___39920){
var seq__39479_39921__$1 = temp__5804__auto___39920;
if(cljs.core.chunked_seq_QMARK_(seq__39479_39921__$1)){
var c__5568__auto___39922 = cljs.core.chunk_first(seq__39479_39921__$1);
var G__39923 = cljs.core.chunk_rest(seq__39479_39921__$1);
var G__39924 = c__5568__auto___39922;
var G__39925 = cljs.core.count(c__5568__auto___39922);
var G__39926 = (0);
seq__39479_39905 = G__39923;
chunk__39480_39906 = G__39924;
count__39481_39907 = G__39925;
i__39482_39908 = G__39926;
continue;
} else {
var map__39486_39927 = cljs.core.first(seq__39479_39921__$1);
var map__39486_39928__$1 = cljs.core.__destructure_map(map__39486_39927);
var w_39929 = map__39486_39928__$1;
var msg_39930__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39486_39928__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39486_39928__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39486_39928__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39486_39928__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39933)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39931),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39932),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39930__$1)].join(''));


var G__39934 = cljs.core.next(seq__39479_39921__$1);
var G__39935 = null;
var G__39936 = (0);
var G__39937 = (0);
seq__39479_39905 = G__39934;
chunk__39480_39906 = G__39935;
count__39481_39907 = G__39936;
i__39482_39908 = G__39937;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__39469_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39469_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39490){
var map__39491 = p__39490;
var map__39491__$1 = cljs.core.__destructure_map(map__39491);
var msg = map__39491__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39491__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39491__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__39492 = cljs.core.seq(updates);
var chunk__39494 = null;
var count__39495 = (0);
var i__39496 = (0);
while(true){
if((i__39496 < count__39495)){
var path = chunk__39494.cljs$core$IIndexed$_nth$arity$2(null,i__39496);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39716_39938 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39720_39939 = null;
var count__39721_39940 = (0);
var i__39722_39941 = (0);
while(true){
if((i__39722_39941 < count__39721_39940)){
var node_39942 = chunk__39720_39939.cljs$core$IIndexed$_nth$arity$2(null,i__39722_39941);
if(cljs.core.not(node_39942.shadow$old)){
var path_match_39943 = shadow.cljs.devtools.client.browser.match_paths(node_39942.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39943)){
var new_link_39944 = (function (){var G__39748 = node_39942.cloneNode(true);
G__39748.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39943),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39748;
})();
(node_39942.shadow$old = true);

(new_link_39944.onload = ((function (seq__39716_39938,chunk__39720_39939,count__39721_39940,i__39722_39941,seq__39492,chunk__39494,count__39495,i__39496,new_link_39944,path_match_39943,node_39942,path,map__39491,map__39491__$1,msg,updates,reload_info){
return (function (e){
var seq__39749_39945 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39751_39946 = null;
var count__39752_39947 = (0);
var i__39753_39948 = (0);
while(true){
if((i__39753_39948 < count__39752_39947)){
var map__39757_39949 = chunk__39751_39946.cljs$core$IIndexed$_nth$arity$2(null,i__39753_39948);
var map__39757_39950__$1 = cljs.core.__destructure_map(map__39757_39949);
var task_39951 = map__39757_39950__$1;
var fn_str_39952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39757_39950__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39757_39950__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39954 = goog.getObjectByName(fn_str_39952,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39953)].join(''));

(fn_obj_39954.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39954.cljs$core$IFn$_invoke$arity$2(path,new_link_39944) : fn_obj_39954.call(null,path,new_link_39944));


var G__39955 = seq__39749_39945;
var G__39956 = chunk__39751_39946;
var G__39957 = count__39752_39947;
var G__39958 = (i__39753_39948 + (1));
seq__39749_39945 = G__39955;
chunk__39751_39946 = G__39956;
count__39752_39947 = G__39957;
i__39753_39948 = G__39958;
continue;
} else {
var temp__5804__auto___39959 = cljs.core.seq(seq__39749_39945);
if(temp__5804__auto___39959){
var seq__39749_39960__$1 = temp__5804__auto___39959;
if(cljs.core.chunked_seq_QMARK_(seq__39749_39960__$1)){
var c__5568__auto___39961 = cljs.core.chunk_first(seq__39749_39960__$1);
var G__39962 = cljs.core.chunk_rest(seq__39749_39960__$1);
var G__39963 = c__5568__auto___39961;
var G__39964 = cljs.core.count(c__5568__auto___39961);
var G__39965 = (0);
seq__39749_39945 = G__39962;
chunk__39751_39946 = G__39963;
count__39752_39947 = G__39964;
i__39753_39948 = G__39965;
continue;
} else {
var map__39759_39966 = cljs.core.first(seq__39749_39960__$1);
var map__39759_39967__$1 = cljs.core.__destructure_map(map__39759_39966);
var task_39968 = map__39759_39967__$1;
var fn_str_39969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39759_39967__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39759_39967__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39971 = goog.getObjectByName(fn_str_39969,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39970)].join(''));

(fn_obj_39971.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39971.cljs$core$IFn$_invoke$arity$2(path,new_link_39944) : fn_obj_39971.call(null,path,new_link_39944));


var G__39972 = cljs.core.next(seq__39749_39960__$1);
var G__39973 = null;
var G__39974 = (0);
var G__39975 = (0);
seq__39749_39945 = G__39972;
chunk__39751_39946 = G__39973;
count__39752_39947 = G__39974;
i__39753_39948 = G__39975;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39942);
});})(seq__39716_39938,chunk__39720_39939,count__39721_39940,i__39722_39941,seq__39492,chunk__39494,count__39495,i__39496,new_link_39944,path_match_39943,node_39942,path,map__39491,map__39491__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39943], 0));

goog.dom.insertSiblingAfter(new_link_39944,node_39942);


var G__39976 = seq__39716_39938;
var G__39977 = chunk__39720_39939;
var G__39978 = count__39721_39940;
var G__39979 = (i__39722_39941 + (1));
seq__39716_39938 = G__39976;
chunk__39720_39939 = G__39977;
count__39721_39940 = G__39978;
i__39722_39941 = G__39979;
continue;
} else {
var G__39980 = seq__39716_39938;
var G__39981 = chunk__39720_39939;
var G__39982 = count__39721_39940;
var G__39983 = (i__39722_39941 + (1));
seq__39716_39938 = G__39980;
chunk__39720_39939 = G__39981;
count__39721_39940 = G__39982;
i__39722_39941 = G__39983;
continue;
}
} else {
var G__39984 = seq__39716_39938;
var G__39985 = chunk__39720_39939;
var G__39986 = count__39721_39940;
var G__39987 = (i__39722_39941 + (1));
seq__39716_39938 = G__39984;
chunk__39720_39939 = G__39985;
count__39721_39940 = G__39986;
i__39722_39941 = G__39987;
continue;
}
} else {
var temp__5804__auto___39988 = cljs.core.seq(seq__39716_39938);
if(temp__5804__auto___39988){
var seq__39716_39989__$1 = temp__5804__auto___39988;
if(cljs.core.chunked_seq_QMARK_(seq__39716_39989__$1)){
var c__5568__auto___39990 = cljs.core.chunk_first(seq__39716_39989__$1);
var G__39991 = cljs.core.chunk_rest(seq__39716_39989__$1);
var G__39992 = c__5568__auto___39990;
var G__39993 = cljs.core.count(c__5568__auto___39990);
var G__39994 = (0);
seq__39716_39938 = G__39991;
chunk__39720_39939 = G__39992;
count__39721_39940 = G__39993;
i__39722_39941 = G__39994;
continue;
} else {
var node_39995 = cljs.core.first(seq__39716_39989__$1);
if(cljs.core.not(node_39995.shadow$old)){
var path_match_39996 = shadow.cljs.devtools.client.browser.match_paths(node_39995.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39996)){
var new_link_39997 = (function (){var G__39761 = node_39995.cloneNode(true);
G__39761.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39996),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39761;
})();
(node_39995.shadow$old = true);

(new_link_39997.onload = ((function (seq__39716_39938,chunk__39720_39939,count__39721_39940,i__39722_39941,seq__39492,chunk__39494,count__39495,i__39496,new_link_39997,path_match_39996,node_39995,seq__39716_39989__$1,temp__5804__auto___39988,path,map__39491,map__39491__$1,msg,updates,reload_info){
return (function (e){
var seq__39762_39998 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39764_39999 = null;
var count__39765_40000 = (0);
var i__39766_40001 = (0);
while(true){
if((i__39766_40001 < count__39765_40000)){
var map__39796_40002 = chunk__39764_39999.cljs$core$IIndexed$_nth$arity$2(null,i__39766_40001);
var map__39796_40003__$1 = cljs.core.__destructure_map(map__39796_40002);
var task_40004 = map__39796_40003__$1;
var fn_str_40005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39796_40003__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39796_40003__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40007 = goog.getObjectByName(fn_str_40005,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40006)].join(''));

(fn_obj_40007.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40007.cljs$core$IFn$_invoke$arity$2(path,new_link_39997) : fn_obj_40007.call(null,path,new_link_39997));


var G__40008 = seq__39762_39998;
var G__40009 = chunk__39764_39999;
var G__40010 = count__39765_40000;
var G__40011 = (i__39766_40001 + (1));
seq__39762_39998 = G__40008;
chunk__39764_39999 = G__40009;
count__39765_40000 = G__40010;
i__39766_40001 = G__40011;
continue;
} else {
var temp__5804__auto___40012__$1 = cljs.core.seq(seq__39762_39998);
if(temp__5804__auto___40012__$1){
var seq__39762_40013__$1 = temp__5804__auto___40012__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39762_40013__$1)){
var c__5568__auto___40014 = cljs.core.chunk_first(seq__39762_40013__$1);
var G__40015 = cljs.core.chunk_rest(seq__39762_40013__$1);
var G__40016 = c__5568__auto___40014;
var G__40017 = cljs.core.count(c__5568__auto___40014);
var G__40018 = (0);
seq__39762_39998 = G__40015;
chunk__39764_39999 = G__40016;
count__39765_40000 = G__40017;
i__39766_40001 = G__40018;
continue;
} else {
var map__39797_40019 = cljs.core.first(seq__39762_40013__$1);
var map__39797_40020__$1 = cljs.core.__destructure_map(map__39797_40019);
var task_40021 = map__39797_40020__$1;
var fn_str_40022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39797_40020__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39797_40020__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40024 = goog.getObjectByName(fn_str_40022,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40023)].join(''));

(fn_obj_40024.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40024.cljs$core$IFn$_invoke$arity$2(path,new_link_39997) : fn_obj_40024.call(null,path,new_link_39997));


var G__40025 = cljs.core.next(seq__39762_40013__$1);
var G__40026 = null;
var G__40027 = (0);
var G__40028 = (0);
seq__39762_39998 = G__40025;
chunk__39764_39999 = G__40026;
count__39765_40000 = G__40027;
i__39766_40001 = G__40028;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39995);
});})(seq__39716_39938,chunk__39720_39939,count__39721_39940,i__39722_39941,seq__39492,chunk__39494,count__39495,i__39496,new_link_39997,path_match_39996,node_39995,seq__39716_39989__$1,temp__5804__auto___39988,path,map__39491,map__39491__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39996], 0));

goog.dom.insertSiblingAfter(new_link_39997,node_39995);


var G__40029 = cljs.core.next(seq__39716_39989__$1);
var G__40030 = null;
var G__40031 = (0);
var G__40032 = (0);
seq__39716_39938 = G__40029;
chunk__39720_39939 = G__40030;
count__39721_39940 = G__40031;
i__39722_39941 = G__40032;
continue;
} else {
var G__40033 = cljs.core.next(seq__39716_39989__$1);
var G__40034 = null;
var G__40035 = (0);
var G__40036 = (0);
seq__39716_39938 = G__40033;
chunk__39720_39939 = G__40034;
count__39721_39940 = G__40035;
i__39722_39941 = G__40036;
continue;
}
} else {
var G__40037 = cljs.core.next(seq__39716_39989__$1);
var G__40038 = null;
var G__40039 = (0);
var G__40040 = (0);
seq__39716_39938 = G__40037;
chunk__39720_39939 = G__40038;
count__39721_39940 = G__40039;
i__39722_39941 = G__40040;
continue;
}
}
} else {
}
}
break;
}


var G__40041 = seq__39492;
var G__40042 = chunk__39494;
var G__40043 = count__39495;
var G__40044 = (i__39496 + (1));
seq__39492 = G__40041;
chunk__39494 = G__40042;
count__39495 = G__40043;
i__39496 = G__40044;
continue;
} else {
var G__40045 = seq__39492;
var G__40046 = chunk__39494;
var G__40047 = count__39495;
var G__40048 = (i__39496 + (1));
seq__39492 = G__40045;
chunk__39494 = G__40046;
count__39495 = G__40047;
i__39496 = G__40048;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39492);
if(temp__5804__auto__){
var seq__39492__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39492__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39492__$1);
var G__40049 = cljs.core.chunk_rest(seq__39492__$1);
var G__40050 = c__5568__auto__;
var G__40051 = cljs.core.count(c__5568__auto__);
var G__40052 = (0);
seq__39492 = G__40049;
chunk__39494 = G__40050;
count__39495 = G__40051;
i__39496 = G__40052;
continue;
} else {
var path = cljs.core.first(seq__39492__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39799_40053 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39803_40054 = null;
var count__39804_40055 = (0);
var i__39805_40056 = (0);
while(true){
if((i__39805_40056 < count__39804_40055)){
var node_40057 = chunk__39803_40054.cljs$core$IIndexed$_nth$arity$2(null,i__39805_40056);
if(cljs.core.not(node_40057.shadow$old)){
var path_match_40058 = shadow.cljs.devtools.client.browser.match_paths(node_40057.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40058)){
var new_link_40059 = (function (){var G__39831 = node_40057.cloneNode(true);
G__39831.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40058),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39831;
})();
(node_40057.shadow$old = true);

(new_link_40059.onload = ((function (seq__39799_40053,chunk__39803_40054,count__39804_40055,i__39805_40056,seq__39492,chunk__39494,count__39495,i__39496,new_link_40059,path_match_40058,node_40057,path,seq__39492__$1,temp__5804__auto__,map__39491,map__39491__$1,msg,updates,reload_info){
return (function (e){
var seq__39832_40060 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39834_40061 = null;
var count__39835_40062 = (0);
var i__39836_40063 = (0);
while(true){
if((i__39836_40063 < count__39835_40062)){
var map__39840_40064 = chunk__39834_40061.cljs$core$IIndexed$_nth$arity$2(null,i__39836_40063);
var map__39840_40065__$1 = cljs.core.__destructure_map(map__39840_40064);
var task_40066 = map__39840_40065__$1;
var fn_str_40067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39840_40065__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39840_40065__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40069 = goog.getObjectByName(fn_str_40067,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40068)].join(''));

(fn_obj_40069.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40069.cljs$core$IFn$_invoke$arity$2(path,new_link_40059) : fn_obj_40069.call(null,path,new_link_40059));


var G__40070 = seq__39832_40060;
var G__40071 = chunk__39834_40061;
var G__40072 = count__39835_40062;
var G__40073 = (i__39836_40063 + (1));
seq__39832_40060 = G__40070;
chunk__39834_40061 = G__40071;
count__39835_40062 = G__40072;
i__39836_40063 = G__40073;
continue;
} else {
var temp__5804__auto___40074__$1 = cljs.core.seq(seq__39832_40060);
if(temp__5804__auto___40074__$1){
var seq__39832_40075__$1 = temp__5804__auto___40074__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39832_40075__$1)){
var c__5568__auto___40076 = cljs.core.chunk_first(seq__39832_40075__$1);
var G__40077 = cljs.core.chunk_rest(seq__39832_40075__$1);
var G__40078 = c__5568__auto___40076;
var G__40079 = cljs.core.count(c__5568__auto___40076);
var G__40080 = (0);
seq__39832_40060 = G__40077;
chunk__39834_40061 = G__40078;
count__39835_40062 = G__40079;
i__39836_40063 = G__40080;
continue;
} else {
var map__39841_40081 = cljs.core.first(seq__39832_40075__$1);
var map__39841_40082__$1 = cljs.core.__destructure_map(map__39841_40081);
var task_40083 = map__39841_40082__$1;
var fn_str_40084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39841_40082__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39841_40082__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40086 = goog.getObjectByName(fn_str_40084,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40085)].join(''));

(fn_obj_40086.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40086.cljs$core$IFn$_invoke$arity$2(path,new_link_40059) : fn_obj_40086.call(null,path,new_link_40059));


var G__40087 = cljs.core.next(seq__39832_40075__$1);
var G__40088 = null;
var G__40089 = (0);
var G__40090 = (0);
seq__39832_40060 = G__40087;
chunk__39834_40061 = G__40088;
count__39835_40062 = G__40089;
i__39836_40063 = G__40090;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40057);
});})(seq__39799_40053,chunk__39803_40054,count__39804_40055,i__39805_40056,seq__39492,chunk__39494,count__39495,i__39496,new_link_40059,path_match_40058,node_40057,path,seq__39492__$1,temp__5804__auto__,map__39491,map__39491__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40058], 0));

goog.dom.insertSiblingAfter(new_link_40059,node_40057);


var G__40091 = seq__39799_40053;
var G__40092 = chunk__39803_40054;
var G__40093 = count__39804_40055;
var G__40094 = (i__39805_40056 + (1));
seq__39799_40053 = G__40091;
chunk__39803_40054 = G__40092;
count__39804_40055 = G__40093;
i__39805_40056 = G__40094;
continue;
} else {
var G__40095 = seq__39799_40053;
var G__40096 = chunk__39803_40054;
var G__40097 = count__39804_40055;
var G__40098 = (i__39805_40056 + (1));
seq__39799_40053 = G__40095;
chunk__39803_40054 = G__40096;
count__39804_40055 = G__40097;
i__39805_40056 = G__40098;
continue;
}
} else {
var G__40099 = seq__39799_40053;
var G__40100 = chunk__39803_40054;
var G__40101 = count__39804_40055;
var G__40102 = (i__39805_40056 + (1));
seq__39799_40053 = G__40099;
chunk__39803_40054 = G__40100;
count__39804_40055 = G__40101;
i__39805_40056 = G__40102;
continue;
}
} else {
var temp__5804__auto___40103__$1 = cljs.core.seq(seq__39799_40053);
if(temp__5804__auto___40103__$1){
var seq__39799_40104__$1 = temp__5804__auto___40103__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39799_40104__$1)){
var c__5568__auto___40105 = cljs.core.chunk_first(seq__39799_40104__$1);
var G__40106 = cljs.core.chunk_rest(seq__39799_40104__$1);
var G__40107 = c__5568__auto___40105;
var G__40108 = cljs.core.count(c__5568__auto___40105);
var G__40109 = (0);
seq__39799_40053 = G__40106;
chunk__39803_40054 = G__40107;
count__39804_40055 = G__40108;
i__39805_40056 = G__40109;
continue;
} else {
var node_40110 = cljs.core.first(seq__39799_40104__$1);
if(cljs.core.not(node_40110.shadow$old)){
var path_match_40111 = shadow.cljs.devtools.client.browser.match_paths(node_40110.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40111)){
var new_link_40112 = (function (){var G__39842 = node_40110.cloneNode(true);
G__39842.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40111),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39842;
})();
(node_40110.shadow$old = true);

(new_link_40112.onload = ((function (seq__39799_40053,chunk__39803_40054,count__39804_40055,i__39805_40056,seq__39492,chunk__39494,count__39495,i__39496,new_link_40112,path_match_40111,node_40110,seq__39799_40104__$1,temp__5804__auto___40103__$1,path,seq__39492__$1,temp__5804__auto__,map__39491,map__39491__$1,msg,updates,reload_info){
return (function (e){
var seq__39843_40113 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39845_40114 = null;
var count__39846_40115 = (0);
var i__39847_40116 = (0);
while(true){
if((i__39847_40116 < count__39846_40115)){
var map__39851_40117 = chunk__39845_40114.cljs$core$IIndexed$_nth$arity$2(null,i__39847_40116);
var map__39851_40118__$1 = cljs.core.__destructure_map(map__39851_40117);
var task_40119 = map__39851_40118__$1;
var fn_str_40120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39851_40118__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39851_40118__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40122 = goog.getObjectByName(fn_str_40120,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40121)].join(''));

(fn_obj_40122.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40122.cljs$core$IFn$_invoke$arity$2(path,new_link_40112) : fn_obj_40122.call(null,path,new_link_40112));


var G__40123 = seq__39843_40113;
var G__40124 = chunk__39845_40114;
var G__40125 = count__39846_40115;
var G__40126 = (i__39847_40116 + (1));
seq__39843_40113 = G__40123;
chunk__39845_40114 = G__40124;
count__39846_40115 = G__40125;
i__39847_40116 = G__40126;
continue;
} else {
var temp__5804__auto___40127__$2 = cljs.core.seq(seq__39843_40113);
if(temp__5804__auto___40127__$2){
var seq__39843_40128__$1 = temp__5804__auto___40127__$2;
if(cljs.core.chunked_seq_QMARK_(seq__39843_40128__$1)){
var c__5568__auto___40129 = cljs.core.chunk_first(seq__39843_40128__$1);
var G__40130 = cljs.core.chunk_rest(seq__39843_40128__$1);
var G__40131 = c__5568__auto___40129;
var G__40132 = cljs.core.count(c__5568__auto___40129);
var G__40133 = (0);
seq__39843_40113 = G__40130;
chunk__39845_40114 = G__40131;
count__39846_40115 = G__40132;
i__39847_40116 = G__40133;
continue;
} else {
var map__39852_40134 = cljs.core.first(seq__39843_40128__$1);
var map__39852_40135__$1 = cljs.core.__destructure_map(map__39852_40134);
var task_40136 = map__39852_40135__$1;
var fn_str_40137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39852_40135__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39852_40135__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40139 = goog.getObjectByName(fn_str_40137,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40138)].join(''));

(fn_obj_40139.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40139.cljs$core$IFn$_invoke$arity$2(path,new_link_40112) : fn_obj_40139.call(null,path,new_link_40112));


var G__40140 = cljs.core.next(seq__39843_40128__$1);
var G__40141 = null;
var G__40142 = (0);
var G__40143 = (0);
seq__39843_40113 = G__40140;
chunk__39845_40114 = G__40141;
count__39846_40115 = G__40142;
i__39847_40116 = G__40143;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40110);
});})(seq__39799_40053,chunk__39803_40054,count__39804_40055,i__39805_40056,seq__39492,chunk__39494,count__39495,i__39496,new_link_40112,path_match_40111,node_40110,seq__39799_40104__$1,temp__5804__auto___40103__$1,path,seq__39492__$1,temp__5804__auto__,map__39491,map__39491__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40111], 0));

goog.dom.insertSiblingAfter(new_link_40112,node_40110);


var G__40144 = cljs.core.next(seq__39799_40104__$1);
var G__40145 = null;
var G__40146 = (0);
var G__40147 = (0);
seq__39799_40053 = G__40144;
chunk__39803_40054 = G__40145;
count__39804_40055 = G__40146;
i__39805_40056 = G__40147;
continue;
} else {
var G__40148 = cljs.core.next(seq__39799_40104__$1);
var G__40149 = null;
var G__40150 = (0);
var G__40151 = (0);
seq__39799_40053 = G__40148;
chunk__39803_40054 = G__40149;
count__39804_40055 = G__40150;
i__39805_40056 = G__40151;
continue;
}
} else {
var G__40152 = cljs.core.next(seq__39799_40104__$1);
var G__40153 = null;
var G__40154 = (0);
var G__40155 = (0);
seq__39799_40053 = G__40152;
chunk__39803_40054 = G__40153;
count__39804_40055 = G__40154;
i__39805_40056 = G__40155;
continue;
}
}
} else {
}
}
break;
}


var G__40156 = cljs.core.next(seq__39492__$1);
var G__40157 = null;
var G__40158 = (0);
var G__40159 = (0);
seq__39492 = G__40156;
chunk__39494 = G__40157;
count__39495 = G__40158;
i__39496 = G__40159;
continue;
} else {
var G__40160 = cljs.core.next(seq__39492__$1);
var G__40161 = null;
var G__40162 = (0);
var G__40163 = (0);
seq__39492 = G__40160;
chunk__39494 = G__40161;
count__39495 = G__40162;
i__39496 = G__40163;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__39853){
var map__39854 = p__39853;
var map__39854__$1 = cljs.core.__destructure_map(map__39854);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39854__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39855,done,error){
var map__39856 = p__39855;
var map__39856__$1 = cljs.core.__destructure_map(map__39856);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39856__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39857,done,error){
var map__39858 = p__39857;
var map__39858__$1 = cljs.core.__destructure_map(map__39858);
var msg = map__39858__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39858__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39858__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39858__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39859){
var map__39860 = p__39859;
var map__39860__$1 = cljs.core.__destructure_map(map__39860);
var src = map__39860__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39860__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39861 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39861) : done.call(null,G__39861));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39862){
var map__39863 = p__39862;
var map__39863__$1 = cljs.core.__destructure_map(map__39863);
var msg__$1 = map__39863__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39863__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39864){var ex = e39864;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39865){
var map__39866 = p__39865;
var map__39866__$1 = cljs.core.__destructure_map(map__39866);
var env = map__39866__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39866__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39867){
var map__39868 = p__39867;
var map__39868__$1 = cljs.core.__destructure_map(map__39868);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39868__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39868__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__39869){
var map__39870 = p__39869;
var map__39870__$1 = cljs.core.__destructure_map(map__39870);
var svc = map__39870__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39870__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
