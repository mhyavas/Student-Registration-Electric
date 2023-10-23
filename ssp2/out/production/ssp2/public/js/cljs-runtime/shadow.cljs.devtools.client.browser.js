goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40732 = arguments.length;
var i__5770__auto___40734 = (0);
while(true){
if((i__5770__auto___40734 < len__5769__auto___40732)){
args__5775__auto__.push((arguments[i__5770__auto___40734]));

var G__40735 = (i__5770__auto___40734 + (1));
i__5770__auto___40734 = G__40735;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39945){
var G__39946 = cljs.core.first(seq39945);
var seq39945__$1 = cljs.core.next(seq39945);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39946,seq39945__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__40052 = cljs.core.seq(sources);
var chunk__40053 = null;
var count__40054 = (0);
var i__40055 = (0);
while(true){
if((i__40055 < count__40054)){
var map__40067 = chunk__40053.cljs$core$IIndexed$_nth$arity$2(null,i__40055);
var map__40067__$1 = cljs.core.__destructure_map(map__40067);
var src = map__40067__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40067__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40067__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40067__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40067__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40068){var e_40740 = e40068;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40740);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40740.message)].join('')));
}

var G__40741 = seq__40052;
var G__40742 = chunk__40053;
var G__40743 = count__40054;
var G__40744 = (i__40055 + (1));
seq__40052 = G__40741;
chunk__40053 = G__40742;
count__40054 = G__40743;
i__40055 = G__40744;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40052);
if(temp__5804__auto__){
var seq__40052__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40052__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40052__$1);
var G__40745 = cljs.core.chunk_rest(seq__40052__$1);
var G__40746 = c__5568__auto__;
var G__40747 = cljs.core.count(c__5568__auto__);
var G__40748 = (0);
seq__40052 = G__40745;
chunk__40053 = G__40746;
count__40054 = G__40747;
i__40055 = G__40748;
continue;
} else {
var map__40069 = cljs.core.first(seq__40052__$1);
var map__40069__$1 = cljs.core.__destructure_map(map__40069);
var src = map__40069__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40069__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40069__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40069__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40069__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40070){var e_40755 = e40070;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40755);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40755.message)].join('')));
}

var G__40756 = cljs.core.next(seq__40052__$1);
var G__40757 = null;
var G__40758 = (0);
var G__40759 = (0);
seq__40052 = G__40756;
chunk__40053 = G__40757;
count__40054 = G__40758;
i__40055 = G__40759;
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
var seq__40077 = cljs.core.seq(js_requires);
var chunk__40078 = null;
var count__40079 = (0);
var i__40080 = (0);
while(true){
if((i__40080 < count__40079)){
var js_ns = chunk__40078.cljs$core$IIndexed$_nth$arity$2(null,i__40080);
var require_str_40761 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40761);


var G__40762 = seq__40077;
var G__40763 = chunk__40078;
var G__40764 = count__40079;
var G__40765 = (i__40080 + (1));
seq__40077 = G__40762;
chunk__40078 = G__40763;
count__40079 = G__40764;
i__40080 = G__40765;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40077);
if(temp__5804__auto__){
var seq__40077__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40077__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40077__$1);
var G__40769 = cljs.core.chunk_rest(seq__40077__$1);
var G__40770 = c__5568__auto__;
var G__40771 = cljs.core.count(c__5568__auto__);
var G__40772 = (0);
seq__40077 = G__40769;
chunk__40078 = G__40770;
count__40079 = G__40771;
i__40080 = G__40772;
continue;
} else {
var js_ns = cljs.core.first(seq__40077__$1);
var require_str_40774 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40774);


var G__40775 = cljs.core.next(seq__40077__$1);
var G__40776 = null;
var G__40777 = (0);
var G__40778 = (0);
seq__40077 = G__40775;
chunk__40078 = G__40776;
count__40079 = G__40777;
i__40080 = G__40778;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__40088){
var map__40089 = p__40088;
var map__40089__$1 = cljs.core.__destructure_map(map__40089);
var msg = map__40089__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40089__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40089__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40090(s__40091){
return (new cljs.core.LazySeq(null,(function (){
var s__40091__$1 = s__40091;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__40091__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__40096 = cljs.core.first(xs__6360__auto__);
var map__40096__$1 = cljs.core.__destructure_map(map__40096);
var src = map__40096__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40096__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40096__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__40091__$1,map__40096,map__40096__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40089,map__40089__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40090_$_iter__40092(s__40093){
return (new cljs.core.LazySeq(null,((function (s__40091__$1,map__40096,map__40096__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40089,map__40089__$1,msg,info,reload_info){
return (function (){
var s__40093__$1 = s__40093;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__40093__$1);
if(temp__5804__auto____$1){
var s__40093__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40093__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40093__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40095 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40094 = (0);
while(true){
if((i__40094 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__40094);
cljs.core.chunk_append(b__40095,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__40788 = (i__40094 + (1));
i__40094 = G__40788;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40095),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40090_$_iter__40092(cljs.core.chunk_rest(s__40093__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40095),null);
}
} else {
var warning = cljs.core.first(s__40093__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40090_$_iter__40092(cljs.core.rest(s__40093__$2)));
}
} else {
return null;
}
break;
}
});})(s__40091__$1,map__40096,map__40096__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40089,map__40089__$1,msg,info,reload_info))
,null,null));
});})(s__40091__$1,map__40096,map__40096__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40089,map__40089__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40090(cljs.core.rest(s__40091__$1)));
} else {
var G__40790 = cljs.core.rest(s__40091__$1);
s__40091__$1 = G__40790;
continue;
}
} else {
var G__40791 = cljs.core.rest(s__40091__$1);
s__40091__$1 = G__40791;
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
var seq__40103_40793 = cljs.core.seq(warnings);
var chunk__40104_40794 = null;
var count__40105_40795 = (0);
var i__40106_40796 = (0);
while(true){
if((i__40106_40796 < count__40105_40795)){
var map__40112_40798 = chunk__40104_40794.cljs$core$IIndexed$_nth$arity$2(null,i__40106_40796);
var map__40112_40799__$1 = cljs.core.__destructure_map(map__40112_40798);
var w_40800 = map__40112_40799__$1;
var msg_40801__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40112_40799__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40112_40799__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40112_40799__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40112_40799__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40804)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40802),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40803),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40801__$1)].join(''));


var G__40807 = seq__40103_40793;
var G__40808 = chunk__40104_40794;
var G__40809 = count__40105_40795;
var G__40810 = (i__40106_40796 + (1));
seq__40103_40793 = G__40807;
chunk__40104_40794 = G__40808;
count__40105_40795 = G__40809;
i__40106_40796 = G__40810;
continue;
} else {
var temp__5804__auto___40811 = cljs.core.seq(seq__40103_40793);
if(temp__5804__auto___40811){
var seq__40103_40812__$1 = temp__5804__auto___40811;
if(cljs.core.chunked_seq_QMARK_(seq__40103_40812__$1)){
var c__5568__auto___40813 = cljs.core.chunk_first(seq__40103_40812__$1);
var G__40814 = cljs.core.chunk_rest(seq__40103_40812__$1);
var G__40815 = c__5568__auto___40813;
var G__40816 = cljs.core.count(c__5568__auto___40813);
var G__40817 = (0);
seq__40103_40793 = G__40814;
chunk__40104_40794 = G__40815;
count__40105_40795 = G__40816;
i__40106_40796 = G__40817;
continue;
} else {
var map__40113_40818 = cljs.core.first(seq__40103_40812__$1);
var map__40113_40819__$1 = cljs.core.__destructure_map(map__40113_40818);
var w_40820 = map__40113_40819__$1;
var msg_40821__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40113_40819__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40113_40819__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40113_40819__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40113_40819__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40824)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40822),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40823),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40821__$1)].join(''));


var G__40826 = cljs.core.next(seq__40103_40812__$1);
var G__40827 = null;
var G__40828 = (0);
var G__40829 = (0);
seq__40103_40793 = G__40826;
chunk__40104_40794 = G__40827;
count__40105_40795 = G__40828;
i__40106_40796 = G__40829;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__40086_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__40086_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__40115){
var map__40116 = p__40115;
var map__40116__$1 = cljs.core.__destructure_map(map__40116);
var msg = map__40116__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40116__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40116__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__40117 = cljs.core.seq(updates);
var chunk__40119 = null;
var count__40120 = (0);
var i__40121 = (0);
while(true){
if((i__40121 < count__40120)){
var path = chunk__40119.cljs$core$IIndexed$_nth$arity$2(null,i__40121);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40393_40835 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40397_40836 = null;
var count__40398_40837 = (0);
var i__40399_40838 = (0);
while(true){
if((i__40399_40838 < count__40398_40837)){
var node_40839 = chunk__40397_40836.cljs$core$IIndexed$_nth$arity$2(null,i__40399_40838);
if(cljs.core.not(node_40839.shadow$old)){
var path_match_40840 = shadow.cljs.devtools.client.browser.match_paths(node_40839.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40840)){
var new_link_40841 = (function (){var G__40441 = node_40839.cloneNode(true);
G__40441.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40840),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40441;
})();
(node_40839.shadow$old = true);

(new_link_40841.onload = ((function (seq__40393_40835,chunk__40397_40836,count__40398_40837,i__40399_40838,seq__40117,chunk__40119,count__40120,i__40121,new_link_40841,path_match_40840,node_40839,path,map__40116,map__40116__$1,msg,updates,reload_info){
return (function (e){
var seq__40442_40843 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40444_40844 = null;
var count__40445_40845 = (0);
var i__40446_40846 = (0);
while(true){
if((i__40446_40846 < count__40445_40845)){
var map__40450_40847 = chunk__40444_40844.cljs$core$IIndexed$_nth$arity$2(null,i__40446_40846);
var map__40450_40848__$1 = cljs.core.__destructure_map(map__40450_40847);
var task_40849 = map__40450_40848__$1;
var fn_str_40850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40450_40848__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40450_40848__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40852 = goog.getObjectByName(fn_str_40850,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40851)].join(''));

(fn_obj_40852.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40852.cljs$core$IFn$_invoke$arity$2(path,new_link_40841) : fn_obj_40852.call(null,path,new_link_40841));


var G__40854 = seq__40442_40843;
var G__40855 = chunk__40444_40844;
var G__40856 = count__40445_40845;
var G__40857 = (i__40446_40846 + (1));
seq__40442_40843 = G__40854;
chunk__40444_40844 = G__40855;
count__40445_40845 = G__40856;
i__40446_40846 = G__40857;
continue;
} else {
var temp__5804__auto___40858 = cljs.core.seq(seq__40442_40843);
if(temp__5804__auto___40858){
var seq__40442_40859__$1 = temp__5804__auto___40858;
if(cljs.core.chunked_seq_QMARK_(seq__40442_40859__$1)){
var c__5568__auto___40860 = cljs.core.chunk_first(seq__40442_40859__$1);
var G__40863 = cljs.core.chunk_rest(seq__40442_40859__$1);
var G__40864 = c__5568__auto___40860;
var G__40865 = cljs.core.count(c__5568__auto___40860);
var G__40866 = (0);
seq__40442_40843 = G__40863;
chunk__40444_40844 = G__40864;
count__40445_40845 = G__40865;
i__40446_40846 = G__40866;
continue;
} else {
var map__40451_40867 = cljs.core.first(seq__40442_40859__$1);
var map__40451_40868__$1 = cljs.core.__destructure_map(map__40451_40867);
var task_40869 = map__40451_40868__$1;
var fn_str_40870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40451_40868__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40451_40868__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40874 = goog.getObjectByName(fn_str_40870,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40871)].join(''));

(fn_obj_40874.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40874.cljs$core$IFn$_invoke$arity$2(path,new_link_40841) : fn_obj_40874.call(null,path,new_link_40841));


var G__40875 = cljs.core.next(seq__40442_40859__$1);
var G__40876 = null;
var G__40877 = (0);
var G__40878 = (0);
seq__40442_40843 = G__40875;
chunk__40444_40844 = G__40876;
count__40445_40845 = G__40877;
i__40446_40846 = G__40878;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40839);
});})(seq__40393_40835,chunk__40397_40836,count__40398_40837,i__40399_40838,seq__40117,chunk__40119,count__40120,i__40121,new_link_40841,path_match_40840,node_40839,path,map__40116,map__40116__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40840], 0));

goog.dom.insertSiblingAfter(new_link_40841,node_40839);


var G__40879 = seq__40393_40835;
var G__40880 = chunk__40397_40836;
var G__40881 = count__40398_40837;
var G__40882 = (i__40399_40838 + (1));
seq__40393_40835 = G__40879;
chunk__40397_40836 = G__40880;
count__40398_40837 = G__40881;
i__40399_40838 = G__40882;
continue;
} else {
var G__40883 = seq__40393_40835;
var G__40884 = chunk__40397_40836;
var G__40885 = count__40398_40837;
var G__40886 = (i__40399_40838 + (1));
seq__40393_40835 = G__40883;
chunk__40397_40836 = G__40884;
count__40398_40837 = G__40885;
i__40399_40838 = G__40886;
continue;
}
} else {
var G__40887 = seq__40393_40835;
var G__40888 = chunk__40397_40836;
var G__40889 = count__40398_40837;
var G__40890 = (i__40399_40838 + (1));
seq__40393_40835 = G__40887;
chunk__40397_40836 = G__40888;
count__40398_40837 = G__40889;
i__40399_40838 = G__40890;
continue;
}
} else {
var temp__5804__auto___40892 = cljs.core.seq(seq__40393_40835);
if(temp__5804__auto___40892){
var seq__40393_40893__$1 = temp__5804__auto___40892;
if(cljs.core.chunked_seq_QMARK_(seq__40393_40893__$1)){
var c__5568__auto___40894 = cljs.core.chunk_first(seq__40393_40893__$1);
var G__40895 = cljs.core.chunk_rest(seq__40393_40893__$1);
var G__40896 = c__5568__auto___40894;
var G__40897 = cljs.core.count(c__5568__auto___40894);
var G__40898 = (0);
seq__40393_40835 = G__40895;
chunk__40397_40836 = G__40896;
count__40398_40837 = G__40897;
i__40399_40838 = G__40898;
continue;
} else {
var node_40899 = cljs.core.first(seq__40393_40893__$1);
if(cljs.core.not(node_40899.shadow$old)){
var path_match_40900 = shadow.cljs.devtools.client.browser.match_paths(node_40899.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40900)){
var new_link_40901 = (function (){var G__40452 = node_40899.cloneNode(true);
G__40452.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40900),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40452;
})();
(node_40899.shadow$old = true);

(new_link_40901.onload = ((function (seq__40393_40835,chunk__40397_40836,count__40398_40837,i__40399_40838,seq__40117,chunk__40119,count__40120,i__40121,new_link_40901,path_match_40900,node_40899,seq__40393_40893__$1,temp__5804__auto___40892,path,map__40116,map__40116__$1,msg,updates,reload_info){
return (function (e){
var seq__40453_40906 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40455_40907 = null;
var count__40456_40908 = (0);
var i__40457_40909 = (0);
while(true){
if((i__40457_40909 < count__40456_40908)){
var map__40470_40911 = chunk__40455_40907.cljs$core$IIndexed$_nth$arity$2(null,i__40457_40909);
var map__40470_40912__$1 = cljs.core.__destructure_map(map__40470_40911);
var task_40913 = map__40470_40912__$1;
var fn_str_40914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40470_40912__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40470_40912__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40918 = goog.getObjectByName(fn_str_40914,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40915)].join(''));

(fn_obj_40918.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40918.cljs$core$IFn$_invoke$arity$2(path,new_link_40901) : fn_obj_40918.call(null,path,new_link_40901));


var G__40919 = seq__40453_40906;
var G__40920 = chunk__40455_40907;
var G__40921 = count__40456_40908;
var G__40922 = (i__40457_40909 + (1));
seq__40453_40906 = G__40919;
chunk__40455_40907 = G__40920;
count__40456_40908 = G__40921;
i__40457_40909 = G__40922;
continue;
} else {
var temp__5804__auto___40923__$1 = cljs.core.seq(seq__40453_40906);
if(temp__5804__auto___40923__$1){
var seq__40453_40924__$1 = temp__5804__auto___40923__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40453_40924__$1)){
var c__5568__auto___40925 = cljs.core.chunk_first(seq__40453_40924__$1);
var G__40926 = cljs.core.chunk_rest(seq__40453_40924__$1);
var G__40927 = c__5568__auto___40925;
var G__40928 = cljs.core.count(c__5568__auto___40925);
var G__40929 = (0);
seq__40453_40906 = G__40926;
chunk__40455_40907 = G__40927;
count__40456_40908 = G__40928;
i__40457_40909 = G__40929;
continue;
} else {
var map__40480_40930 = cljs.core.first(seq__40453_40924__$1);
var map__40480_40931__$1 = cljs.core.__destructure_map(map__40480_40930);
var task_40932 = map__40480_40931__$1;
var fn_str_40933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40480_40931__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40480_40931__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40935 = goog.getObjectByName(fn_str_40933,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40934)].join(''));

(fn_obj_40935.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40935.cljs$core$IFn$_invoke$arity$2(path,new_link_40901) : fn_obj_40935.call(null,path,new_link_40901));


var G__40936 = cljs.core.next(seq__40453_40924__$1);
var G__40937 = null;
var G__40938 = (0);
var G__40939 = (0);
seq__40453_40906 = G__40936;
chunk__40455_40907 = G__40937;
count__40456_40908 = G__40938;
i__40457_40909 = G__40939;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40899);
});})(seq__40393_40835,chunk__40397_40836,count__40398_40837,i__40399_40838,seq__40117,chunk__40119,count__40120,i__40121,new_link_40901,path_match_40900,node_40899,seq__40393_40893__$1,temp__5804__auto___40892,path,map__40116,map__40116__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40900], 0));

goog.dom.insertSiblingAfter(new_link_40901,node_40899);


var G__40940 = cljs.core.next(seq__40393_40893__$1);
var G__40941 = null;
var G__40942 = (0);
var G__40943 = (0);
seq__40393_40835 = G__40940;
chunk__40397_40836 = G__40941;
count__40398_40837 = G__40942;
i__40399_40838 = G__40943;
continue;
} else {
var G__40973 = cljs.core.next(seq__40393_40893__$1);
var G__40974 = null;
var G__40975 = (0);
var G__40976 = (0);
seq__40393_40835 = G__40973;
chunk__40397_40836 = G__40974;
count__40398_40837 = G__40975;
i__40399_40838 = G__40976;
continue;
}
} else {
var G__40977 = cljs.core.next(seq__40393_40893__$1);
var G__40978 = null;
var G__40979 = (0);
var G__40980 = (0);
seq__40393_40835 = G__40977;
chunk__40397_40836 = G__40978;
count__40398_40837 = G__40979;
i__40399_40838 = G__40980;
continue;
}
}
} else {
}
}
break;
}


var G__40981 = seq__40117;
var G__40982 = chunk__40119;
var G__40983 = count__40120;
var G__40984 = (i__40121 + (1));
seq__40117 = G__40981;
chunk__40119 = G__40982;
count__40120 = G__40983;
i__40121 = G__40984;
continue;
} else {
var G__40985 = seq__40117;
var G__40986 = chunk__40119;
var G__40987 = count__40120;
var G__40988 = (i__40121 + (1));
seq__40117 = G__40985;
chunk__40119 = G__40986;
count__40120 = G__40987;
i__40121 = G__40988;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40117);
if(temp__5804__auto__){
var seq__40117__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40117__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40117__$1);
var G__40989 = cljs.core.chunk_rest(seq__40117__$1);
var G__40990 = c__5568__auto__;
var G__40991 = cljs.core.count(c__5568__auto__);
var G__40992 = (0);
seq__40117 = G__40989;
chunk__40119 = G__40990;
count__40120 = G__40991;
i__40121 = G__40992;
continue;
} else {
var path = cljs.core.first(seq__40117__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40482_40993 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40486_40994 = null;
var count__40487_40995 = (0);
var i__40488_40996 = (0);
while(true){
if((i__40488_40996 < count__40487_40995)){
var node_40997 = chunk__40486_40994.cljs$core$IIndexed$_nth$arity$2(null,i__40488_40996);
if(cljs.core.not(node_40997.shadow$old)){
var path_match_40998 = shadow.cljs.devtools.client.browser.match_paths(node_40997.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40998)){
var new_link_40999 = (function (){var G__40564 = node_40997.cloneNode(true);
G__40564.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40998),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40564;
})();
(node_40997.shadow$old = true);

(new_link_40999.onload = ((function (seq__40482_40993,chunk__40486_40994,count__40487_40995,i__40488_40996,seq__40117,chunk__40119,count__40120,i__40121,new_link_40999,path_match_40998,node_40997,path,seq__40117__$1,temp__5804__auto__,map__40116,map__40116__$1,msg,updates,reload_info){
return (function (e){
var seq__40566_41000 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40568_41001 = null;
var count__40569_41002 = (0);
var i__40570_41003 = (0);
while(true){
if((i__40570_41003 < count__40569_41002)){
var map__40615_41004 = chunk__40568_41001.cljs$core$IIndexed$_nth$arity$2(null,i__40570_41003);
var map__40615_41005__$1 = cljs.core.__destructure_map(map__40615_41004);
var task_41006 = map__40615_41005__$1;
var fn_str_41007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40615_41005__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40615_41005__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41009 = goog.getObjectByName(fn_str_41007,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41008)].join(''));

(fn_obj_41009.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41009.cljs$core$IFn$_invoke$arity$2(path,new_link_40999) : fn_obj_41009.call(null,path,new_link_40999));


var G__41010 = seq__40566_41000;
var G__41011 = chunk__40568_41001;
var G__41012 = count__40569_41002;
var G__41013 = (i__40570_41003 + (1));
seq__40566_41000 = G__41010;
chunk__40568_41001 = G__41011;
count__40569_41002 = G__41012;
i__40570_41003 = G__41013;
continue;
} else {
var temp__5804__auto___41014__$1 = cljs.core.seq(seq__40566_41000);
if(temp__5804__auto___41014__$1){
var seq__40566_41015__$1 = temp__5804__auto___41014__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40566_41015__$1)){
var c__5568__auto___41016 = cljs.core.chunk_first(seq__40566_41015__$1);
var G__41017 = cljs.core.chunk_rest(seq__40566_41015__$1);
var G__41018 = c__5568__auto___41016;
var G__41019 = cljs.core.count(c__5568__auto___41016);
var G__41020 = (0);
seq__40566_41000 = G__41017;
chunk__40568_41001 = G__41018;
count__40569_41002 = G__41019;
i__40570_41003 = G__41020;
continue;
} else {
var map__40616_41021 = cljs.core.first(seq__40566_41015__$1);
var map__40616_41022__$1 = cljs.core.__destructure_map(map__40616_41021);
var task_41023 = map__40616_41022__$1;
var fn_str_41024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40616_41022__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40616_41022__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41026 = goog.getObjectByName(fn_str_41024,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41025)].join(''));

(fn_obj_41026.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41026.cljs$core$IFn$_invoke$arity$2(path,new_link_40999) : fn_obj_41026.call(null,path,new_link_40999));


var G__41027 = cljs.core.next(seq__40566_41015__$1);
var G__41028 = null;
var G__41029 = (0);
var G__41030 = (0);
seq__40566_41000 = G__41027;
chunk__40568_41001 = G__41028;
count__40569_41002 = G__41029;
i__40570_41003 = G__41030;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40997);
});})(seq__40482_40993,chunk__40486_40994,count__40487_40995,i__40488_40996,seq__40117,chunk__40119,count__40120,i__40121,new_link_40999,path_match_40998,node_40997,path,seq__40117__$1,temp__5804__auto__,map__40116,map__40116__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40998], 0));

goog.dom.insertSiblingAfter(new_link_40999,node_40997);


var G__41031 = seq__40482_40993;
var G__41032 = chunk__40486_40994;
var G__41033 = count__40487_40995;
var G__41034 = (i__40488_40996 + (1));
seq__40482_40993 = G__41031;
chunk__40486_40994 = G__41032;
count__40487_40995 = G__41033;
i__40488_40996 = G__41034;
continue;
} else {
var G__41035 = seq__40482_40993;
var G__41036 = chunk__40486_40994;
var G__41037 = count__40487_40995;
var G__41038 = (i__40488_40996 + (1));
seq__40482_40993 = G__41035;
chunk__40486_40994 = G__41036;
count__40487_40995 = G__41037;
i__40488_40996 = G__41038;
continue;
}
} else {
var G__41039 = seq__40482_40993;
var G__41040 = chunk__40486_40994;
var G__41041 = count__40487_40995;
var G__41042 = (i__40488_40996 + (1));
seq__40482_40993 = G__41039;
chunk__40486_40994 = G__41040;
count__40487_40995 = G__41041;
i__40488_40996 = G__41042;
continue;
}
} else {
var temp__5804__auto___41043__$1 = cljs.core.seq(seq__40482_40993);
if(temp__5804__auto___41043__$1){
var seq__40482_41044__$1 = temp__5804__auto___41043__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40482_41044__$1)){
var c__5568__auto___41045 = cljs.core.chunk_first(seq__40482_41044__$1);
var G__41046 = cljs.core.chunk_rest(seq__40482_41044__$1);
var G__41047 = c__5568__auto___41045;
var G__41048 = cljs.core.count(c__5568__auto___41045);
var G__41049 = (0);
seq__40482_40993 = G__41046;
chunk__40486_40994 = G__41047;
count__40487_40995 = G__41048;
i__40488_40996 = G__41049;
continue;
} else {
var node_41050 = cljs.core.first(seq__40482_41044__$1);
if(cljs.core.not(node_41050.shadow$old)){
var path_match_41051 = shadow.cljs.devtools.client.browser.match_paths(node_41050.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41051)){
var new_link_41052 = (function (){var G__40627 = node_41050.cloneNode(true);
G__40627.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41051),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40627;
})();
(node_41050.shadow$old = true);

(new_link_41052.onload = ((function (seq__40482_40993,chunk__40486_40994,count__40487_40995,i__40488_40996,seq__40117,chunk__40119,count__40120,i__40121,new_link_41052,path_match_41051,node_41050,seq__40482_41044__$1,temp__5804__auto___41043__$1,path,seq__40117__$1,temp__5804__auto__,map__40116,map__40116__$1,msg,updates,reload_info){
return (function (e){
var seq__40628_41053 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40630_41054 = null;
var count__40631_41055 = (0);
var i__40632_41056 = (0);
while(true){
if((i__40632_41056 < count__40631_41055)){
var map__40643_41057 = chunk__40630_41054.cljs$core$IIndexed$_nth$arity$2(null,i__40632_41056);
var map__40643_41058__$1 = cljs.core.__destructure_map(map__40643_41057);
var task_41059 = map__40643_41058__$1;
var fn_str_41060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40643_41058__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40643_41058__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41062 = goog.getObjectByName(fn_str_41060,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41061)].join(''));

(fn_obj_41062.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41062.cljs$core$IFn$_invoke$arity$2(path,new_link_41052) : fn_obj_41062.call(null,path,new_link_41052));


var G__41063 = seq__40628_41053;
var G__41064 = chunk__40630_41054;
var G__41065 = count__40631_41055;
var G__41066 = (i__40632_41056 + (1));
seq__40628_41053 = G__41063;
chunk__40630_41054 = G__41064;
count__40631_41055 = G__41065;
i__40632_41056 = G__41066;
continue;
} else {
var temp__5804__auto___41067__$2 = cljs.core.seq(seq__40628_41053);
if(temp__5804__auto___41067__$2){
var seq__40628_41068__$1 = temp__5804__auto___41067__$2;
if(cljs.core.chunked_seq_QMARK_(seq__40628_41068__$1)){
var c__5568__auto___41069 = cljs.core.chunk_first(seq__40628_41068__$1);
var G__41070 = cljs.core.chunk_rest(seq__40628_41068__$1);
var G__41071 = c__5568__auto___41069;
var G__41072 = cljs.core.count(c__5568__auto___41069);
var G__41073 = (0);
seq__40628_41053 = G__41070;
chunk__40630_41054 = G__41071;
count__40631_41055 = G__41072;
i__40632_41056 = G__41073;
continue;
} else {
var map__40649_41074 = cljs.core.first(seq__40628_41068__$1);
var map__40649_41075__$1 = cljs.core.__destructure_map(map__40649_41074);
var task_41076 = map__40649_41075__$1;
var fn_str_41077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40649_41075__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40649_41075__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41079 = goog.getObjectByName(fn_str_41077,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41078)].join(''));

(fn_obj_41079.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41079.cljs$core$IFn$_invoke$arity$2(path,new_link_41052) : fn_obj_41079.call(null,path,new_link_41052));


var G__41080 = cljs.core.next(seq__40628_41068__$1);
var G__41081 = null;
var G__41082 = (0);
var G__41083 = (0);
seq__40628_41053 = G__41080;
chunk__40630_41054 = G__41081;
count__40631_41055 = G__41082;
i__40632_41056 = G__41083;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41050);
});})(seq__40482_40993,chunk__40486_40994,count__40487_40995,i__40488_40996,seq__40117,chunk__40119,count__40120,i__40121,new_link_41052,path_match_41051,node_41050,seq__40482_41044__$1,temp__5804__auto___41043__$1,path,seq__40117__$1,temp__5804__auto__,map__40116,map__40116__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41051], 0));

goog.dom.insertSiblingAfter(new_link_41052,node_41050);


var G__41084 = cljs.core.next(seq__40482_41044__$1);
var G__41085 = null;
var G__41086 = (0);
var G__41087 = (0);
seq__40482_40993 = G__41084;
chunk__40486_40994 = G__41085;
count__40487_40995 = G__41086;
i__40488_40996 = G__41087;
continue;
} else {
var G__41088 = cljs.core.next(seq__40482_41044__$1);
var G__41089 = null;
var G__41090 = (0);
var G__41091 = (0);
seq__40482_40993 = G__41088;
chunk__40486_40994 = G__41089;
count__40487_40995 = G__41090;
i__40488_40996 = G__41091;
continue;
}
} else {
var G__41092 = cljs.core.next(seq__40482_41044__$1);
var G__41093 = null;
var G__41094 = (0);
var G__41095 = (0);
seq__40482_40993 = G__41092;
chunk__40486_40994 = G__41093;
count__40487_40995 = G__41094;
i__40488_40996 = G__41095;
continue;
}
}
} else {
}
}
break;
}


var G__41096 = cljs.core.next(seq__40117__$1);
var G__41097 = null;
var G__41098 = (0);
var G__41099 = (0);
seq__40117 = G__41096;
chunk__40119 = G__41097;
count__40120 = G__41098;
i__40121 = G__41099;
continue;
} else {
var G__41100 = cljs.core.next(seq__40117__$1);
var G__41101 = null;
var G__41102 = (0);
var G__41103 = (0);
seq__40117 = G__41100;
chunk__40119 = G__41101;
count__40120 = G__41102;
i__40121 = G__41103;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__40660){
var map__40661 = p__40660;
var map__40661__$1 = cljs.core.__destructure_map(map__40661);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40661__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__40662,done,error){
var map__40663 = p__40662;
var map__40663__$1 = cljs.core.__destructure_map(map__40663);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40663__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__40669,done,error){
var map__40671 = p__40669;
var map__40671__$1 = cljs.core.__destructure_map(map__40671);
var msg = map__40671__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40671__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40671__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40671__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__40672){
var map__40673 = p__40672;
var map__40673__$1 = cljs.core.__destructure_map(map__40673);
var src = map__40673__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40673__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__40676 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__40676) : done.call(null,G__40676));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__40679){
var map__40681 = p__40679;
var map__40681__$1 = cljs.core.__destructure_map(map__40681);
var msg__$1 = map__40681__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40681__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e40684){var ex = e40684;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__40686){
var map__40687 = p__40686;
var map__40687__$1 = cljs.core.__destructure_map(map__40687);
var env = map__40687__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40687__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__40715){
var map__40716 = p__40715;
var map__40716__$1 = cljs.core.__destructure_map(map__40716);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40716__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40716__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__40721){
var map__40722 = p__40721;
var map__40722__$1 = cljs.core.__destructure_map(map__40722);
var svc = map__40722__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40722__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
