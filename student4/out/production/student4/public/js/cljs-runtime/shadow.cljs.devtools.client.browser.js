goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40564 = arguments.length;
var i__5770__auto___40565 = (0);
while(true){
if((i__5770__auto___40565 < len__5769__auto___40564)){
args__5775__auto__.push((arguments[i__5770__auto___40565]));

var G__40567 = (i__5770__auto___40565 + (1));
i__5770__auto___40565 = G__40567;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39862){
var G__39863 = cljs.core.first(seq39862);
var seq39862__$1 = cljs.core.next(seq39862);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39863,seq39862__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__39873 = cljs.core.seq(sources);
var chunk__39874 = null;
var count__39875 = (0);
var i__39876 = (0);
while(true){
if((i__39876 < count__39875)){
var map__39889 = chunk__39874.cljs$core$IIndexed$_nth$arity$2(null,i__39876);
var map__39889__$1 = cljs.core.__destructure_map(map__39889);
var src = map__39889__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39889__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39889__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39889__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39889__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39893){var e_40601 = e39893;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40601);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40601.message)].join('')));
}

var G__40605 = seq__39873;
var G__40606 = chunk__39874;
var G__40607 = count__39875;
var G__40608 = (i__39876 + (1));
seq__39873 = G__40605;
chunk__39874 = G__40606;
count__39875 = G__40607;
i__39876 = G__40608;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39873);
if(temp__5804__auto__){
var seq__39873__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39873__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39873__$1);
var G__40621 = cljs.core.chunk_rest(seq__39873__$1);
var G__40622 = c__5568__auto__;
var G__40623 = cljs.core.count(c__5568__auto__);
var G__40624 = (0);
seq__39873 = G__40621;
chunk__39874 = G__40622;
count__39875 = G__40623;
i__39876 = G__40624;
continue;
} else {
var map__39894 = cljs.core.first(seq__39873__$1);
var map__39894__$1 = cljs.core.__destructure_map(map__39894);
var src = map__39894__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39894__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39894__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39894__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39894__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39895){var e_40626 = e39895;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40626);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40626.message)].join('')));
}

var G__40627 = cljs.core.next(seq__39873__$1);
var G__40628 = null;
var G__40629 = (0);
var G__40630 = (0);
seq__39873 = G__40627;
chunk__39874 = G__40628;
count__39875 = G__40629;
i__39876 = G__40630;
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
var seq__39902 = cljs.core.seq(js_requires);
var chunk__39903 = null;
var count__39904 = (0);
var i__39905 = (0);
while(true){
if((i__39905 < count__39904)){
var js_ns = chunk__39903.cljs$core$IIndexed$_nth$arity$2(null,i__39905);
var require_str_40632 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40632);


var G__40633 = seq__39902;
var G__40634 = chunk__39903;
var G__40635 = count__39904;
var G__40636 = (i__39905 + (1));
seq__39902 = G__40633;
chunk__39903 = G__40634;
count__39904 = G__40635;
i__39905 = G__40636;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39902);
if(temp__5804__auto__){
var seq__39902__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39902__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39902__$1);
var G__40638 = cljs.core.chunk_rest(seq__39902__$1);
var G__40639 = c__5568__auto__;
var G__40640 = cljs.core.count(c__5568__auto__);
var G__40641 = (0);
seq__39902 = G__40638;
chunk__39903 = G__40639;
count__39904 = G__40640;
i__39905 = G__40641;
continue;
} else {
var js_ns = cljs.core.first(seq__39902__$1);
var require_str_40642 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40642);


var G__40643 = cljs.core.next(seq__39902__$1);
var G__40644 = null;
var G__40645 = (0);
var G__40646 = (0);
seq__39902 = G__40643;
chunk__39903 = G__40644;
count__39904 = G__40645;
i__39905 = G__40646;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__39924){
var map__39925 = p__39924;
var map__39925__$1 = cljs.core.__destructure_map(map__39925);
var msg = map__39925__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39925__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39925__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39927(s__39928){
return (new cljs.core.LazySeq(null,(function (){
var s__39928__$1 = s__39928;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__39928__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__39934 = cljs.core.first(xs__6360__auto__);
var map__39934__$1 = cljs.core.__destructure_map(map__39934);
var src = map__39934__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39934__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39934__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__39928__$1,map__39934,map__39934__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39925,map__39925__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39927_$_iter__39929(s__39930){
return (new cljs.core.LazySeq(null,((function (s__39928__$1,map__39934,map__39934__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39925,map__39925__$1,msg,info,reload_info){
return (function (){
var s__39930__$1 = s__39930;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__39930__$1);
if(temp__5804__auto____$1){
var s__39930__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39930__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__39930__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__39932 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__39931 = (0);
while(true){
if((i__39931 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__39931);
cljs.core.chunk_append(b__39932,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__40648 = (i__39931 + (1));
i__39931 = G__40648;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39932),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39927_$_iter__39929(cljs.core.chunk_rest(s__39930__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39932),null);
}
} else {
var warning = cljs.core.first(s__39930__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39927_$_iter__39929(cljs.core.rest(s__39930__$2)));
}
} else {
return null;
}
break;
}
});})(s__39928__$1,map__39934,map__39934__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39925,map__39925__$1,msg,info,reload_info))
,null,null));
});})(s__39928__$1,map__39934,map__39934__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39925,map__39925__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39927(cljs.core.rest(s__39928__$1)));
} else {
var G__40654 = cljs.core.rest(s__39928__$1);
s__39928__$1 = G__40654;
continue;
}
} else {
var G__40655 = cljs.core.rest(s__39928__$1);
s__39928__$1 = G__40655;
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
var seq__39944_40656 = cljs.core.seq(warnings);
var chunk__39945_40657 = null;
var count__39946_40658 = (0);
var i__39947_40659 = (0);
while(true){
if((i__39947_40659 < count__39946_40658)){
var map__39953_40660 = chunk__39945_40657.cljs$core$IIndexed$_nth$arity$2(null,i__39947_40659);
var map__39953_40661__$1 = cljs.core.__destructure_map(map__39953_40660);
var w_40662 = map__39953_40661__$1;
var msg_40663__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39953_40661__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39953_40661__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39953_40661__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39953_40661__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40666)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40664),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40665),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40663__$1)].join(''));


var G__40670 = seq__39944_40656;
var G__40671 = chunk__39945_40657;
var G__40672 = count__39946_40658;
var G__40673 = (i__39947_40659 + (1));
seq__39944_40656 = G__40670;
chunk__39945_40657 = G__40671;
count__39946_40658 = G__40672;
i__39947_40659 = G__40673;
continue;
} else {
var temp__5804__auto___40674 = cljs.core.seq(seq__39944_40656);
if(temp__5804__auto___40674){
var seq__39944_40675__$1 = temp__5804__auto___40674;
if(cljs.core.chunked_seq_QMARK_(seq__39944_40675__$1)){
var c__5568__auto___40676 = cljs.core.chunk_first(seq__39944_40675__$1);
var G__40677 = cljs.core.chunk_rest(seq__39944_40675__$1);
var G__40678 = c__5568__auto___40676;
var G__40679 = cljs.core.count(c__5568__auto___40676);
var G__40680 = (0);
seq__39944_40656 = G__40677;
chunk__39945_40657 = G__40678;
count__39946_40658 = G__40679;
i__39947_40659 = G__40680;
continue;
} else {
var map__39960_40681 = cljs.core.first(seq__39944_40675__$1);
var map__39960_40682__$1 = cljs.core.__destructure_map(map__39960_40681);
var w_40683 = map__39960_40682__$1;
var msg_40684__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39960_40682__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39960_40682__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39960_40682__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39960_40682__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40687)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40685),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40686),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40684__$1)].join(''));


var G__40688 = cljs.core.next(seq__39944_40675__$1);
var G__40689 = null;
var G__40690 = (0);
var G__40691 = (0);
seq__39944_40656 = G__40688;
chunk__39945_40657 = G__40689;
count__39946_40658 = G__40690;
i__39947_40659 = G__40691;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__39921_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39921_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39969){
var map__39970 = p__39969;
var map__39970__$1 = cljs.core.__destructure_map(map__39970);
var msg = map__39970__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39970__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39970__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__39971 = cljs.core.seq(updates);
var chunk__39973 = null;
var count__39974 = (0);
var i__39975 = (0);
while(true){
if((i__39975 < count__39974)){
var path = chunk__39973.cljs$core$IIndexed$_nth$arity$2(null,i__39975);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40275_40695 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40279_40696 = null;
var count__40280_40697 = (0);
var i__40281_40698 = (0);
while(true){
if((i__40281_40698 < count__40280_40697)){
var node_40699 = chunk__40279_40696.cljs$core$IIndexed$_nth$arity$2(null,i__40281_40698);
if(cljs.core.not(node_40699.shadow$old)){
var path_match_40700 = shadow.cljs.devtools.client.browser.match_paths(node_40699.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40700)){
var new_link_40701 = (function (){var G__40332 = node_40699.cloneNode(true);
G__40332.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40700),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40332;
})();
(node_40699.shadow$old = true);

(new_link_40701.onload = ((function (seq__40275_40695,chunk__40279_40696,count__40280_40697,i__40281_40698,seq__39971,chunk__39973,count__39974,i__39975,new_link_40701,path_match_40700,node_40699,path,map__39970,map__39970__$1,msg,updates,reload_info){
return (function (e){
var seq__40333_40702 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40335_40703 = null;
var count__40336_40704 = (0);
var i__40337_40705 = (0);
while(true){
if((i__40337_40705 < count__40336_40704)){
var map__40341_40706 = chunk__40335_40703.cljs$core$IIndexed$_nth$arity$2(null,i__40337_40705);
var map__40341_40707__$1 = cljs.core.__destructure_map(map__40341_40706);
var task_40708 = map__40341_40707__$1;
var fn_str_40709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40341_40707__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40341_40707__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40712 = goog.getObjectByName(fn_str_40709,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40710)].join(''));

(fn_obj_40712.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40712.cljs$core$IFn$_invoke$arity$2(path,new_link_40701) : fn_obj_40712.call(null,path,new_link_40701));


var G__40714 = seq__40333_40702;
var G__40715 = chunk__40335_40703;
var G__40716 = count__40336_40704;
var G__40717 = (i__40337_40705 + (1));
seq__40333_40702 = G__40714;
chunk__40335_40703 = G__40715;
count__40336_40704 = G__40716;
i__40337_40705 = G__40717;
continue;
} else {
var temp__5804__auto___40718 = cljs.core.seq(seq__40333_40702);
if(temp__5804__auto___40718){
var seq__40333_40719__$1 = temp__5804__auto___40718;
if(cljs.core.chunked_seq_QMARK_(seq__40333_40719__$1)){
var c__5568__auto___40720 = cljs.core.chunk_first(seq__40333_40719__$1);
var G__40721 = cljs.core.chunk_rest(seq__40333_40719__$1);
var G__40722 = c__5568__auto___40720;
var G__40723 = cljs.core.count(c__5568__auto___40720);
var G__40724 = (0);
seq__40333_40702 = G__40721;
chunk__40335_40703 = G__40722;
count__40336_40704 = G__40723;
i__40337_40705 = G__40724;
continue;
} else {
var map__40343_40725 = cljs.core.first(seq__40333_40719__$1);
var map__40343_40726__$1 = cljs.core.__destructure_map(map__40343_40725);
var task_40727 = map__40343_40726__$1;
var fn_str_40728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40343_40726__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40343_40726__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40731 = goog.getObjectByName(fn_str_40728,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40729)].join(''));

(fn_obj_40731.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40731.cljs$core$IFn$_invoke$arity$2(path,new_link_40701) : fn_obj_40731.call(null,path,new_link_40701));


var G__40732 = cljs.core.next(seq__40333_40719__$1);
var G__40733 = null;
var G__40734 = (0);
var G__40735 = (0);
seq__40333_40702 = G__40732;
chunk__40335_40703 = G__40733;
count__40336_40704 = G__40734;
i__40337_40705 = G__40735;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40699);
});})(seq__40275_40695,chunk__40279_40696,count__40280_40697,i__40281_40698,seq__39971,chunk__39973,count__39974,i__39975,new_link_40701,path_match_40700,node_40699,path,map__39970,map__39970__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40700], 0));

goog.dom.insertSiblingAfter(new_link_40701,node_40699);


var G__40736 = seq__40275_40695;
var G__40737 = chunk__40279_40696;
var G__40738 = count__40280_40697;
var G__40739 = (i__40281_40698 + (1));
seq__40275_40695 = G__40736;
chunk__40279_40696 = G__40737;
count__40280_40697 = G__40738;
i__40281_40698 = G__40739;
continue;
} else {
var G__40740 = seq__40275_40695;
var G__40741 = chunk__40279_40696;
var G__40742 = count__40280_40697;
var G__40743 = (i__40281_40698 + (1));
seq__40275_40695 = G__40740;
chunk__40279_40696 = G__40741;
count__40280_40697 = G__40742;
i__40281_40698 = G__40743;
continue;
}
} else {
var G__40744 = seq__40275_40695;
var G__40745 = chunk__40279_40696;
var G__40746 = count__40280_40697;
var G__40747 = (i__40281_40698 + (1));
seq__40275_40695 = G__40744;
chunk__40279_40696 = G__40745;
count__40280_40697 = G__40746;
i__40281_40698 = G__40747;
continue;
}
} else {
var temp__5804__auto___40748 = cljs.core.seq(seq__40275_40695);
if(temp__5804__auto___40748){
var seq__40275_40749__$1 = temp__5804__auto___40748;
if(cljs.core.chunked_seq_QMARK_(seq__40275_40749__$1)){
var c__5568__auto___40750 = cljs.core.chunk_first(seq__40275_40749__$1);
var G__40751 = cljs.core.chunk_rest(seq__40275_40749__$1);
var G__40752 = c__5568__auto___40750;
var G__40753 = cljs.core.count(c__5568__auto___40750);
var G__40754 = (0);
seq__40275_40695 = G__40751;
chunk__40279_40696 = G__40752;
count__40280_40697 = G__40753;
i__40281_40698 = G__40754;
continue;
} else {
var node_40755 = cljs.core.first(seq__40275_40749__$1);
if(cljs.core.not(node_40755.shadow$old)){
var path_match_40756 = shadow.cljs.devtools.client.browser.match_paths(node_40755.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40756)){
var new_link_40757 = (function (){var G__40345 = node_40755.cloneNode(true);
G__40345.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40756),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40345;
})();
(node_40755.shadow$old = true);

(new_link_40757.onload = ((function (seq__40275_40695,chunk__40279_40696,count__40280_40697,i__40281_40698,seq__39971,chunk__39973,count__39974,i__39975,new_link_40757,path_match_40756,node_40755,seq__40275_40749__$1,temp__5804__auto___40748,path,map__39970,map__39970__$1,msg,updates,reload_info){
return (function (e){
var seq__40346_40758 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40348_40759 = null;
var count__40349_40760 = (0);
var i__40350_40761 = (0);
while(true){
if((i__40350_40761 < count__40349_40760)){
var map__40357_40762 = chunk__40348_40759.cljs$core$IIndexed$_nth$arity$2(null,i__40350_40761);
var map__40357_40763__$1 = cljs.core.__destructure_map(map__40357_40762);
var task_40764 = map__40357_40763__$1;
var fn_str_40765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40357_40763__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40357_40763__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40767 = goog.getObjectByName(fn_str_40765,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40766)].join(''));

(fn_obj_40767.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40767.cljs$core$IFn$_invoke$arity$2(path,new_link_40757) : fn_obj_40767.call(null,path,new_link_40757));


var G__40768 = seq__40346_40758;
var G__40769 = chunk__40348_40759;
var G__40770 = count__40349_40760;
var G__40771 = (i__40350_40761 + (1));
seq__40346_40758 = G__40768;
chunk__40348_40759 = G__40769;
count__40349_40760 = G__40770;
i__40350_40761 = G__40771;
continue;
} else {
var temp__5804__auto___40772__$1 = cljs.core.seq(seq__40346_40758);
if(temp__5804__auto___40772__$1){
var seq__40346_40773__$1 = temp__5804__auto___40772__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40346_40773__$1)){
var c__5568__auto___40774 = cljs.core.chunk_first(seq__40346_40773__$1);
var G__40775 = cljs.core.chunk_rest(seq__40346_40773__$1);
var G__40776 = c__5568__auto___40774;
var G__40777 = cljs.core.count(c__5568__auto___40774);
var G__40778 = (0);
seq__40346_40758 = G__40775;
chunk__40348_40759 = G__40776;
count__40349_40760 = G__40777;
i__40350_40761 = G__40778;
continue;
} else {
var map__40364_40779 = cljs.core.first(seq__40346_40773__$1);
var map__40364_40780__$1 = cljs.core.__destructure_map(map__40364_40779);
var task_40781 = map__40364_40780__$1;
var fn_str_40782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40364_40780__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40364_40780__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40784 = goog.getObjectByName(fn_str_40782,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40783)].join(''));

(fn_obj_40784.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40784.cljs$core$IFn$_invoke$arity$2(path,new_link_40757) : fn_obj_40784.call(null,path,new_link_40757));


var G__40785 = cljs.core.next(seq__40346_40773__$1);
var G__40786 = null;
var G__40787 = (0);
var G__40788 = (0);
seq__40346_40758 = G__40785;
chunk__40348_40759 = G__40786;
count__40349_40760 = G__40787;
i__40350_40761 = G__40788;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40755);
});})(seq__40275_40695,chunk__40279_40696,count__40280_40697,i__40281_40698,seq__39971,chunk__39973,count__39974,i__39975,new_link_40757,path_match_40756,node_40755,seq__40275_40749__$1,temp__5804__auto___40748,path,map__39970,map__39970__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40756], 0));

goog.dom.insertSiblingAfter(new_link_40757,node_40755);


var G__40789 = cljs.core.next(seq__40275_40749__$1);
var G__40790 = null;
var G__40791 = (0);
var G__40792 = (0);
seq__40275_40695 = G__40789;
chunk__40279_40696 = G__40790;
count__40280_40697 = G__40791;
i__40281_40698 = G__40792;
continue;
} else {
var G__40793 = cljs.core.next(seq__40275_40749__$1);
var G__40794 = null;
var G__40795 = (0);
var G__40796 = (0);
seq__40275_40695 = G__40793;
chunk__40279_40696 = G__40794;
count__40280_40697 = G__40795;
i__40281_40698 = G__40796;
continue;
}
} else {
var G__40797 = cljs.core.next(seq__40275_40749__$1);
var G__40798 = null;
var G__40799 = (0);
var G__40800 = (0);
seq__40275_40695 = G__40797;
chunk__40279_40696 = G__40798;
count__40280_40697 = G__40799;
i__40281_40698 = G__40800;
continue;
}
}
} else {
}
}
break;
}


var G__40801 = seq__39971;
var G__40802 = chunk__39973;
var G__40803 = count__39974;
var G__40804 = (i__39975 + (1));
seq__39971 = G__40801;
chunk__39973 = G__40802;
count__39974 = G__40803;
i__39975 = G__40804;
continue;
} else {
var G__40805 = seq__39971;
var G__40806 = chunk__39973;
var G__40807 = count__39974;
var G__40808 = (i__39975 + (1));
seq__39971 = G__40805;
chunk__39973 = G__40806;
count__39974 = G__40807;
i__39975 = G__40808;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39971);
if(temp__5804__auto__){
var seq__39971__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39971__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39971__$1);
var G__40809 = cljs.core.chunk_rest(seq__39971__$1);
var G__40810 = c__5568__auto__;
var G__40811 = cljs.core.count(c__5568__auto__);
var G__40812 = (0);
seq__39971 = G__40809;
chunk__39973 = G__40810;
count__39974 = G__40811;
i__39975 = G__40812;
continue;
} else {
var path = cljs.core.first(seq__39971__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40369_40813 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40373_40814 = null;
var count__40374_40815 = (0);
var i__40375_40816 = (0);
while(true){
if((i__40375_40816 < count__40374_40815)){
var node_40817 = chunk__40373_40814.cljs$core$IIndexed$_nth$arity$2(null,i__40375_40816);
if(cljs.core.not(node_40817.shadow$old)){
var path_match_40818 = shadow.cljs.devtools.client.browser.match_paths(node_40817.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40818)){
var new_link_40819 = (function (){var G__40430 = node_40817.cloneNode(true);
G__40430.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40818),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40430;
})();
(node_40817.shadow$old = true);

(new_link_40819.onload = ((function (seq__40369_40813,chunk__40373_40814,count__40374_40815,i__40375_40816,seq__39971,chunk__39973,count__39974,i__39975,new_link_40819,path_match_40818,node_40817,path,seq__39971__$1,temp__5804__auto__,map__39970,map__39970__$1,msg,updates,reload_info){
return (function (e){
var seq__40431_40820 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40433_40821 = null;
var count__40434_40822 = (0);
var i__40435_40823 = (0);
while(true){
if((i__40435_40823 < count__40434_40822)){
var map__40446_40824 = chunk__40433_40821.cljs$core$IIndexed$_nth$arity$2(null,i__40435_40823);
var map__40446_40825__$1 = cljs.core.__destructure_map(map__40446_40824);
var task_40826 = map__40446_40825__$1;
var fn_str_40827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40446_40825__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40446_40825__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40829 = goog.getObjectByName(fn_str_40827,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40828)].join(''));

(fn_obj_40829.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40829.cljs$core$IFn$_invoke$arity$2(path,new_link_40819) : fn_obj_40829.call(null,path,new_link_40819));


var G__40830 = seq__40431_40820;
var G__40831 = chunk__40433_40821;
var G__40832 = count__40434_40822;
var G__40833 = (i__40435_40823 + (1));
seq__40431_40820 = G__40830;
chunk__40433_40821 = G__40831;
count__40434_40822 = G__40832;
i__40435_40823 = G__40833;
continue;
} else {
var temp__5804__auto___40834__$1 = cljs.core.seq(seq__40431_40820);
if(temp__5804__auto___40834__$1){
var seq__40431_40835__$1 = temp__5804__auto___40834__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40431_40835__$1)){
var c__5568__auto___40836 = cljs.core.chunk_first(seq__40431_40835__$1);
var G__40837 = cljs.core.chunk_rest(seq__40431_40835__$1);
var G__40838 = c__5568__auto___40836;
var G__40839 = cljs.core.count(c__5568__auto___40836);
var G__40840 = (0);
seq__40431_40820 = G__40837;
chunk__40433_40821 = G__40838;
count__40434_40822 = G__40839;
i__40435_40823 = G__40840;
continue;
} else {
var map__40452_40841 = cljs.core.first(seq__40431_40835__$1);
var map__40452_40842__$1 = cljs.core.__destructure_map(map__40452_40841);
var task_40843 = map__40452_40842__$1;
var fn_str_40844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40452_40842__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40452_40842__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40846 = goog.getObjectByName(fn_str_40844,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40845)].join(''));

(fn_obj_40846.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40846.cljs$core$IFn$_invoke$arity$2(path,new_link_40819) : fn_obj_40846.call(null,path,new_link_40819));


var G__40847 = cljs.core.next(seq__40431_40835__$1);
var G__40848 = null;
var G__40849 = (0);
var G__40850 = (0);
seq__40431_40820 = G__40847;
chunk__40433_40821 = G__40848;
count__40434_40822 = G__40849;
i__40435_40823 = G__40850;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40817);
});})(seq__40369_40813,chunk__40373_40814,count__40374_40815,i__40375_40816,seq__39971,chunk__39973,count__39974,i__39975,new_link_40819,path_match_40818,node_40817,path,seq__39971__$1,temp__5804__auto__,map__39970,map__39970__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40818], 0));

goog.dom.insertSiblingAfter(new_link_40819,node_40817);


var G__40851 = seq__40369_40813;
var G__40852 = chunk__40373_40814;
var G__40853 = count__40374_40815;
var G__40854 = (i__40375_40816 + (1));
seq__40369_40813 = G__40851;
chunk__40373_40814 = G__40852;
count__40374_40815 = G__40853;
i__40375_40816 = G__40854;
continue;
} else {
var G__40855 = seq__40369_40813;
var G__40856 = chunk__40373_40814;
var G__40857 = count__40374_40815;
var G__40858 = (i__40375_40816 + (1));
seq__40369_40813 = G__40855;
chunk__40373_40814 = G__40856;
count__40374_40815 = G__40857;
i__40375_40816 = G__40858;
continue;
}
} else {
var G__40859 = seq__40369_40813;
var G__40860 = chunk__40373_40814;
var G__40861 = count__40374_40815;
var G__40862 = (i__40375_40816 + (1));
seq__40369_40813 = G__40859;
chunk__40373_40814 = G__40860;
count__40374_40815 = G__40861;
i__40375_40816 = G__40862;
continue;
}
} else {
var temp__5804__auto___40863__$1 = cljs.core.seq(seq__40369_40813);
if(temp__5804__auto___40863__$1){
var seq__40369_40864__$1 = temp__5804__auto___40863__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40369_40864__$1)){
var c__5568__auto___40865 = cljs.core.chunk_first(seq__40369_40864__$1);
var G__40866 = cljs.core.chunk_rest(seq__40369_40864__$1);
var G__40867 = c__5568__auto___40865;
var G__40868 = cljs.core.count(c__5568__auto___40865);
var G__40869 = (0);
seq__40369_40813 = G__40866;
chunk__40373_40814 = G__40867;
count__40374_40815 = G__40868;
i__40375_40816 = G__40869;
continue;
} else {
var node_40870 = cljs.core.first(seq__40369_40864__$1);
if(cljs.core.not(node_40870.shadow$old)){
var path_match_40871 = shadow.cljs.devtools.client.browser.match_paths(node_40870.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40871)){
var new_link_40872 = (function (){var G__40482 = node_40870.cloneNode(true);
G__40482.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40871),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40482;
})();
(node_40870.shadow$old = true);

(new_link_40872.onload = ((function (seq__40369_40813,chunk__40373_40814,count__40374_40815,i__40375_40816,seq__39971,chunk__39973,count__39974,i__39975,new_link_40872,path_match_40871,node_40870,seq__40369_40864__$1,temp__5804__auto___40863__$1,path,seq__39971__$1,temp__5804__auto__,map__39970,map__39970__$1,msg,updates,reload_info){
return (function (e){
var seq__40484_40873 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40486_40874 = null;
var count__40487_40875 = (0);
var i__40488_40876 = (0);
while(true){
if((i__40488_40876 < count__40487_40875)){
var map__40498_40877 = chunk__40486_40874.cljs$core$IIndexed$_nth$arity$2(null,i__40488_40876);
var map__40498_40878__$1 = cljs.core.__destructure_map(map__40498_40877);
var task_40879 = map__40498_40878__$1;
var fn_str_40880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40498_40878__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40498_40878__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40883 = goog.getObjectByName(fn_str_40880,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40881)].join(''));

(fn_obj_40883.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40883.cljs$core$IFn$_invoke$arity$2(path,new_link_40872) : fn_obj_40883.call(null,path,new_link_40872));


var G__40884 = seq__40484_40873;
var G__40885 = chunk__40486_40874;
var G__40886 = count__40487_40875;
var G__40887 = (i__40488_40876 + (1));
seq__40484_40873 = G__40884;
chunk__40486_40874 = G__40885;
count__40487_40875 = G__40886;
i__40488_40876 = G__40887;
continue;
} else {
var temp__5804__auto___40888__$2 = cljs.core.seq(seq__40484_40873);
if(temp__5804__auto___40888__$2){
var seq__40484_40889__$1 = temp__5804__auto___40888__$2;
if(cljs.core.chunked_seq_QMARK_(seq__40484_40889__$1)){
var c__5568__auto___40890 = cljs.core.chunk_first(seq__40484_40889__$1);
var G__40891 = cljs.core.chunk_rest(seq__40484_40889__$1);
var G__40892 = c__5568__auto___40890;
var G__40893 = cljs.core.count(c__5568__auto___40890);
var G__40894 = (0);
seq__40484_40873 = G__40891;
chunk__40486_40874 = G__40892;
count__40487_40875 = G__40893;
i__40488_40876 = G__40894;
continue;
} else {
var map__40501_40895 = cljs.core.first(seq__40484_40889__$1);
var map__40501_40896__$1 = cljs.core.__destructure_map(map__40501_40895);
var task_40897 = map__40501_40896__$1;
var fn_str_40898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40501_40896__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40501_40896__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40901 = goog.getObjectByName(fn_str_40898,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40899)].join(''));

(fn_obj_40901.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40901.cljs$core$IFn$_invoke$arity$2(path,new_link_40872) : fn_obj_40901.call(null,path,new_link_40872));


var G__40902 = cljs.core.next(seq__40484_40889__$1);
var G__40903 = null;
var G__40904 = (0);
var G__40905 = (0);
seq__40484_40873 = G__40902;
chunk__40486_40874 = G__40903;
count__40487_40875 = G__40904;
i__40488_40876 = G__40905;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40870);
});})(seq__40369_40813,chunk__40373_40814,count__40374_40815,i__40375_40816,seq__39971,chunk__39973,count__39974,i__39975,new_link_40872,path_match_40871,node_40870,seq__40369_40864__$1,temp__5804__auto___40863__$1,path,seq__39971__$1,temp__5804__auto__,map__39970,map__39970__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40871], 0));

goog.dom.insertSiblingAfter(new_link_40872,node_40870);


var G__40907 = cljs.core.next(seq__40369_40864__$1);
var G__40908 = null;
var G__40909 = (0);
var G__40910 = (0);
seq__40369_40813 = G__40907;
chunk__40373_40814 = G__40908;
count__40374_40815 = G__40909;
i__40375_40816 = G__40910;
continue;
} else {
var G__40911 = cljs.core.next(seq__40369_40864__$1);
var G__40912 = null;
var G__40913 = (0);
var G__40914 = (0);
seq__40369_40813 = G__40911;
chunk__40373_40814 = G__40912;
count__40374_40815 = G__40913;
i__40375_40816 = G__40914;
continue;
}
} else {
var G__40915 = cljs.core.next(seq__40369_40864__$1);
var G__40916 = null;
var G__40917 = (0);
var G__40918 = (0);
seq__40369_40813 = G__40915;
chunk__40373_40814 = G__40916;
count__40374_40815 = G__40917;
i__40375_40816 = G__40918;
continue;
}
}
} else {
}
}
break;
}


var G__40919 = cljs.core.next(seq__39971__$1);
var G__40920 = null;
var G__40921 = (0);
var G__40922 = (0);
seq__39971 = G__40919;
chunk__39973 = G__40920;
count__39974 = G__40921;
i__39975 = G__40922;
continue;
} else {
var G__40923 = cljs.core.next(seq__39971__$1);
var G__40924 = null;
var G__40925 = (0);
var G__40926 = (0);
seq__39971 = G__40923;
chunk__39973 = G__40924;
count__39974 = G__40925;
i__39975 = G__40926;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__40506){
var map__40507 = p__40506;
var map__40507__$1 = cljs.core.__destructure_map(map__40507);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40507__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__40539){
var map__40540 = p__40539;
var map__40540__$1 = cljs.core.__destructure_map(map__40540);
var _ = map__40540__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40540__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__40543,done,error){
var map__40544 = p__40543;
var map__40544__$1 = cljs.core.__destructure_map(map__40544);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40544__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__40547,done,error){
var map__40548 = p__40547;
var map__40548__$1 = cljs.core.__destructure_map(map__40548);
var msg = map__40548__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40548__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40548__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40548__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__40549){
var map__40550 = p__40549;
var map__40550__$1 = cljs.core.__destructure_map(map__40550);
var src = map__40550__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40550__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__40553 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__40553) : done.call(null,G__40553));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__40554){
var map__40555 = p__40554;
var map__40555__$1 = cljs.core.__destructure_map(map__40555);
var msg__$1 = map__40555__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40555__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e40556){var ex = e40556;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__40557){
var map__40558 = p__40557;
var map__40558__$1 = cljs.core.__destructure_map(map__40558);
var env = map__40558__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40558__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__40559){
var map__40560 = p__40559;
var map__40560__$1 = cljs.core.__destructure_map(map__40560);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40560__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40560__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__40562){
var map__40563 = p__40562;
var map__40563__$1 = cljs.core.__destructure_map(map__40563);
var svc = map__40563__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40563__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
