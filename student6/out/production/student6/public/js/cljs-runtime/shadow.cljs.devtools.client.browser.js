goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33833 = arguments.length;
var i__5770__auto___33834 = (0);
while(true){
if((i__5770__auto___33834 < len__5769__auto___33833)){
args__5775__auto__.push((arguments[i__5770__auto___33834]));

var G__33835 = (i__5770__auto___33834 + (1));
i__5770__auto___33834 = G__33835;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq33165){
var G__33166 = cljs.core.first(seq33165);
var seq33165__$1 = cljs.core.next(seq33165);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33166,seq33165__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__33182 = cljs.core.seq(sources);
var chunk__33185 = null;
var count__33186 = (0);
var i__33187 = (0);
while(true){
if((i__33187 < count__33186)){
var map__33199 = chunk__33185.cljs$core$IIndexed$_nth$arity$2(null,i__33187);
var map__33199__$1 = cljs.core.__destructure_map(map__33199);
var src = map__33199__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33199__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33199__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33199__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33199__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e33200){var e_33848 = e33200;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_33848);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_33848.message)].join('')));
}

var G__33849 = seq__33182;
var G__33850 = chunk__33185;
var G__33851 = count__33186;
var G__33852 = (i__33187 + (1));
seq__33182 = G__33849;
chunk__33185 = G__33850;
count__33186 = G__33851;
i__33187 = G__33852;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33182);
if(temp__5804__auto__){
var seq__33182__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33182__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33182__$1);
var G__33853 = cljs.core.chunk_rest(seq__33182__$1);
var G__33854 = c__5568__auto__;
var G__33855 = cljs.core.count(c__5568__auto__);
var G__33856 = (0);
seq__33182 = G__33853;
chunk__33185 = G__33854;
count__33186 = G__33855;
i__33187 = G__33856;
continue;
} else {
var map__33201 = cljs.core.first(seq__33182__$1);
var map__33201__$1 = cljs.core.__destructure_map(map__33201);
var src = map__33201__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33201__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33201__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33201__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33201__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e33202){var e_33857 = e33202;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_33857);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_33857.message)].join('')));
}

var G__33858 = cljs.core.next(seq__33182__$1);
var G__33859 = null;
var G__33860 = (0);
var G__33861 = (0);
seq__33182 = G__33858;
chunk__33185 = G__33859;
count__33186 = G__33860;
i__33187 = G__33861;
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
var seq__33219 = cljs.core.seq(js_requires);
var chunk__33220 = null;
var count__33221 = (0);
var i__33222 = (0);
while(true){
if((i__33222 < count__33221)){
var js_ns = chunk__33220.cljs$core$IIndexed$_nth$arity$2(null,i__33222);
var require_str_33862 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_33862);


var G__33864 = seq__33219;
var G__33865 = chunk__33220;
var G__33866 = count__33221;
var G__33867 = (i__33222 + (1));
seq__33219 = G__33864;
chunk__33220 = G__33865;
count__33221 = G__33866;
i__33222 = G__33867;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33219);
if(temp__5804__auto__){
var seq__33219__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33219__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33219__$1);
var G__33869 = cljs.core.chunk_rest(seq__33219__$1);
var G__33870 = c__5568__auto__;
var G__33871 = cljs.core.count(c__5568__auto__);
var G__33872 = (0);
seq__33219 = G__33869;
chunk__33220 = G__33870;
count__33221 = G__33871;
i__33222 = G__33872;
continue;
} else {
var js_ns = cljs.core.first(seq__33219__$1);
var require_str_33874 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_33874);


var G__33876 = cljs.core.next(seq__33219__$1);
var G__33877 = null;
var G__33878 = (0);
var G__33879 = (0);
seq__33219 = G__33876;
chunk__33220 = G__33877;
count__33221 = G__33878;
i__33222 = G__33879;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__33228){
var map__33229 = p__33228;
var map__33229__$1 = cljs.core.__destructure_map(map__33229);
var msg = map__33229__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33229__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33229__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33230(s__33231){
return (new cljs.core.LazySeq(null,(function (){
var s__33231__$1 = s__33231;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33231__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__33239 = cljs.core.first(xs__6360__auto__);
var map__33239__$1 = cljs.core.__destructure_map(map__33239);
var src = map__33239__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33239__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33239__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__33231__$1,map__33239,map__33239__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__33229,map__33229__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33230_$_iter__33232(s__33233){
return (new cljs.core.LazySeq(null,((function (s__33231__$1,map__33239,map__33239__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__33229,map__33229__$1,msg,info,reload_info){
return (function (){
var s__33233__$1 = s__33233;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__33233__$1);
if(temp__5804__auto____$1){
var s__33233__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__33233__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33233__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33235 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33234 = (0);
while(true){
if((i__33234 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__33234);
cljs.core.chunk_append(b__33235,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__33887 = (i__33234 + (1));
i__33234 = G__33887;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33235),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33230_$_iter__33232(cljs.core.chunk_rest(s__33233__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33235),null);
}
} else {
var warning = cljs.core.first(s__33233__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33230_$_iter__33232(cljs.core.rest(s__33233__$2)));
}
} else {
return null;
}
break;
}
});})(s__33231__$1,map__33239,map__33239__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__33229,map__33229__$1,msg,info,reload_info))
,null,null));
});})(s__33231__$1,map__33239,map__33239__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__33229,map__33229__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33230(cljs.core.rest(s__33231__$1)));
} else {
var G__33892 = cljs.core.rest(s__33231__$1);
s__33231__$1 = G__33892;
continue;
}
} else {
var G__33893 = cljs.core.rest(s__33231__$1);
s__33231__$1 = G__33893;
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
var seq__33242_33894 = cljs.core.seq(warnings);
var chunk__33243_33895 = null;
var count__33244_33896 = (0);
var i__33245_33897 = (0);
while(true){
if((i__33245_33897 < count__33244_33896)){
var map__33248_33898 = chunk__33243_33895.cljs$core$IIndexed$_nth$arity$2(null,i__33245_33897);
var map__33248_33899__$1 = cljs.core.__destructure_map(map__33248_33898);
var w_33900 = map__33248_33899__$1;
var msg_33901__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33248_33899__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_33902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33248_33899__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_33903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33248_33899__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_33904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33248_33899__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_33904)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_33902),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_33903),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_33901__$1)].join(''));


var G__33908 = seq__33242_33894;
var G__33909 = chunk__33243_33895;
var G__33910 = count__33244_33896;
var G__33911 = (i__33245_33897 + (1));
seq__33242_33894 = G__33908;
chunk__33243_33895 = G__33909;
count__33244_33896 = G__33910;
i__33245_33897 = G__33911;
continue;
} else {
var temp__5804__auto___33912 = cljs.core.seq(seq__33242_33894);
if(temp__5804__auto___33912){
var seq__33242_33916__$1 = temp__5804__auto___33912;
if(cljs.core.chunked_seq_QMARK_(seq__33242_33916__$1)){
var c__5568__auto___33917 = cljs.core.chunk_first(seq__33242_33916__$1);
var G__33918 = cljs.core.chunk_rest(seq__33242_33916__$1);
var G__33919 = c__5568__auto___33917;
var G__33920 = cljs.core.count(c__5568__auto___33917);
var G__33921 = (0);
seq__33242_33894 = G__33918;
chunk__33243_33895 = G__33919;
count__33244_33896 = G__33920;
i__33245_33897 = G__33921;
continue;
} else {
var map__33252_33922 = cljs.core.first(seq__33242_33916__$1);
var map__33252_33923__$1 = cljs.core.__destructure_map(map__33252_33922);
var w_33924 = map__33252_33923__$1;
var msg_33925__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33252_33923__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_33926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33252_33923__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_33927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33252_33923__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_33928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33252_33923__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_33928)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_33926),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_33927),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_33925__$1)].join(''));


var G__33935 = cljs.core.next(seq__33242_33916__$1);
var G__33936 = null;
var G__33937 = (0);
var G__33938 = (0);
seq__33242_33894 = G__33935;
chunk__33243_33895 = G__33936;
count__33244_33896 = G__33937;
i__33245_33897 = G__33938;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__33227_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__33227_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__33257){
var map__33258 = p__33257;
var map__33258__$1 = cljs.core.__destructure_map(map__33258);
var msg = map__33258__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33258__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33258__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__33259 = cljs.core.seq(updates);
var chunk__33261 = null;
var count__33262 = (0);
var i__33263 = (0);
while(true){
if((i__33263 < count__33262)){
var path = chunk__33261.cljs$core$IIndexed$_nth$arity$2(null,i__33263);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__33557_33942 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__33561_33943 = null;
var count__33562_33944 = (0);
var i__33563_33945 = (0);
while(true){
if((i__33563_33945 < count__33562_33944)){
var node_33946 = chunk__33561_33943.cljs$core$IIndexed$_nth$arity$2(null,i__33563_33945);
if(cljs.core.not(node_33946.shadow$old)){
var path_match_33947 = shadow.cljs.devtools.client.browser.match_paths(node_33946.getAttribute("href"),path);
if(cljs.core.truth_(path_match_33947)){
var new_link_33948 = (function (){var G__33662 = node_33946.cloneNode(true);
G__33662.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_33947),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__33662;
})();
(node_33946.shadow$old = true);

(new_link_33948.onload = ((function (seq__33557_33942,chunk__33561_33943,count__33562_33944,i__33563_33945,seq__33259,chunk__33261,count__33262,i__33263,new_link_33948,path_match_33947,node_33946,path,map__33258,map__33258__$1,msg,updates,reload_info){
return (function (e){
var seq__33668_33949 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__33670_33950 = null;
var count__33671_33951 = (0);
var i__33672_33952 = (0);
while(true){
if((i__33672_33952 < count__33671_33951)){
var map__33683_33953 = chunk__33670_33950.cljs$core$IIndexed$_nth$arity$2(null,i__33672_33952);
var map__33683_33954__$1 = cljs.core.__destructure_map(map__33683_33953);
var task_33955 = map__33683_33954__$1;
var fn_str_33956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33683_33954__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_33957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33683_33954__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_33958 = goog.getObjectByName(fn_str_33956,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_33957)].join(''));

(fn_obj_33958.cljs$core$IFn$_invoke$arity$2 ? fn_obj_33958.cljs$core$IFn$_invoke$arity$2(path,new_link_33948) : fn_obj_33958.call(null,path,new_link_33948));


var G__33959 = seq__33668_33949;
var G__33960 = chunk__33670_33950;
var G__33961 = count__33671_33951;
var G__33962 = (i__33672_33952 + (1));
seq__33668_33949 = G__33959;
chunk__33670_33950 = G__33960;
count__33671_33951 = G__33961;
i__33672_33952 = G__33962;
continue;
} else {
var temp__5804__auto___33963 = cljs.core.seq(seq__33668_33949);
if(temp__5804__auto___33963){
var seq__33668_33964__$1 = temp__5804__auto___33963;
if(cljs.core.chunked_seq_QMARK_(seq__33668_33964__$1)){
var c__5568__auto___33965 = cljs.core.chunk_first(seq__33668_33964__$1);
var G__33966 = cljs.core.chunk_rest(seq__33668_33964__$1);
var G__33967 = c__5568__auto___33965;
var G__33968 = cljs.core.count(c__5568__auto___33965);
var G__33969 = (0);
seq__33668_33949 = G__33966;
chunk__33670_33950 = G__33967;
count__33671_33951 = G__33968;
i__33672_33952 = G__33969;
continue;
} else {
var map__33687_33970 = cljs.core.first(seq__33668_33964__$1);
var map__33687_33971__$1 = cljs.core.__destructure_map(map__33687_33970);
var task_33972 = map__33687_33971__$1;
var fn_str_33973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33687_33971__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_33974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33687_33971__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_33975 = goog.getObjectByName(fn_str_33973,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_33974)].join(''));

(fn_obj_33975.cljs$core$IFn$_invoke$arity$2 ? fn_obj_33975.cljs$core$IFn$_invoke$arity$2(path,new_link_33948) : fn_obj_33975.call(null,path,new_link_33948));


var G__33976 = cljs.core.next(seq__33668_33964__$1);
var G__33977 = null;
var G__33978 = (0);
var G__33979 = (0);
seq__33668_33949 = G__33976;
chunk__33670_33950 = G__33977;
count__33671_33951 = G__33978;
i__33672_33952 = G__33979;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_33946);
});})(seq__33557_33942,chunk__33561_33943,count__33562_33944,i__33563_33945,seq__33259,chunk__33261,count__33262,i__33263,new_link_33948,path_match_33947,node_33946,path,map__33258,map__33258__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_33947], 0));

goog.dom.insertSiblingAfter(new_link_33948,node_33946);


var G__33980 = seq__33557_33942;
var G__33981 = chunk__33561_33943;
var G__33982 = count__33562_33944;
var G__33983 = (i__33563_33945 + (1));
seq__33557_33942 = G__33980;
chunk__33561_33943 = G__33981;
count__33562_33944 = G__33982;
i__33563_33945 = G__33983;
continue;
} else {
var G__33984 = seq__33557_33942;
var G__33985 = chunk__33561_33943;
var G__33986 = count__33562_33944;
var G__33987 = (i__33563_33945 + (1));
seq__33557_33942 = G__33984;
chunk__33561_33943 = G__33985;
count__33562_33944 = G__33986;
i__33563_33945 = G__33987;
continue;
}
} else {
var G__33988 = seq__33557_33942;
var G__33989 = chunk__33561_33943;
var G__33990 = count__33562_33944;
var G__33991 = (i__33563_33945 + (1));
seq__33557_33942 = G__33988;
chunk__33561_33943 = G__33989;
count__33562_33944 = G__33990;
i__33563_33945 = G__33991;
continue;
}
} else {
var temp__5804__auto___33992 = cljs.core.seq(seq__33557_33942);
if(temp__5804__auto___33992){
var seq__33557_33993__$1 = temp__5804__auto___33992;
if(cljs.core.chunked_seq_QMARK_(seq__33557_33993__$1)){
var c__5568__auto___33994 = cljs.core.chunk_first(seq__33557_33993__$1);
var G__33995 = cljs.core.chunk_rest(seq__33557_33993__$1);
var G__33996 = c__5568__auto___33994;
var G__33997 = cljs.core.count(c__5568__auto___33994);
var G__33998 = (0);
seq__33557_33942 = G__33995;
chunk__33561_33943 = G__33996;
count__33562_33944 = G__33997;
i__33563_33945 = G__33998;
continue;
} else {
var node_33999 = cljs.core.first(seq__33557_33993__$1);
if(cljs.core.not(node_33999.shadow$old)){
var path_match_34000 = shadow.cljs.devtools.client.browser.match_paths(node_33999.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34000)){
var new_link_34001 = (function (){var G__33692 = node_33999.cloneNode(true);
G__33692.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34000),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__33692;
})();
(node_33999.shadow$old = true);

(new_link_34001.onload = ((function (seq__33557_33942,chunk__33561_33943,count__33562_33944,i__33563_33945,seq__33259,chunk__33261,count__33262,i__33263,new_link_34001,path_match_34000,node_33999,seq__33557_33993__$1,temp__5804__auto___33992,path,map__33258,map__33258__$1,msg,updates,reload_info){
return (function (e){
var seq__33694_34002 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__33696_34003 = null;
var count__33697_34004 = (0);
var i__33698_34005 = (0);
while(true){
if((i__33698_34005 < count__33697_34004)){
var map__33714_34006 = chunk__33696_34003.cljs$core$IIndexed$_nth$arity$2(null,i__33698_34005);
var map__33714_34007__$1 = cljs.core.__destructure_map(map__33714_34006);
var task_34008 = map__33714_34007__$1;
var fn_str_34009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33714_34007__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33714_34007__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34011 = goog.getObjectByName(fn_str_34009,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34010)].join(''));

(fn_obj_34011.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34011.cljs$core$IFn$_invoke$arity$2(path,new_link_34001) : fn_obj_34011.call(null,path,new_link_34001));


var G__34012 = seq__33694_34002;
var G__34013 = chunk__33696_34003;
var G__34014 = count__33697_34004;
var G__34015 = (i__33698_34005 + (1));
seq__33694_34002 = G__34012;
chunk__33696_34003 = G__34013;
count__33697_34004 = G__34014;
i__33698_34005 = G__34015;
continue;
} else {
var temp__5804__auto___34016__$1 = cljs.core.seq(seq__33694_34002);
if(temp__5804__auto___34016__$1){
var seq__33694_34017__$1 = temp__5804__auto___34016__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33694_34017__$1)){
var c__5568__auto___34018 = cljs.core.chunk_first(seq__33694_34017__$1);
var G__34019 = cljs.core.chunk_rest(seq__33694_34017__$1);
var G__34020 = c__5568__auto___34018;
var G__34021 = cljs.core.count(c__5568__auto___34018);
var G__34022 = (0);
seq__33694_34002 = G__34019;
chunk__33696_34003 = G__34020;
count__33697_34004 = G__34021;
i__33698_34005 = G__34022;
continue;
} else {
var map__33717_34024 = cljs.core.first(seq__33694_34017__$1);
var map__33717_34025__$1 = cljs.core.__destructure_map(map__33717_34024);
var task_34026 = map__33717_34025__$1;
var fn_str_34027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33717_34025__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33717_34025__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34032 = goog.getObjectByName(fn_str_34027,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34028)].join(''));

(fn_obj_34032.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34032.cljs$core$IFn$_invoke$arity$2(path,new_link_34001) : fn_obj_34032.call(null,path,new_link_34001));


var G__34033 = cljs.core.next(seq__33694_34017__$1);
var G__34034 = null;
var G__34035 = (0);
var G__34036 = (0);
seq__33694_34002 = G__34033;
chunk__33696_34003 = G__34034;
count__33697_34004 = G__34035;
i__33698_34005 = G__34036;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_33999);
});})(seq__33557_33942,chunk__33561_33943,count__33562_33944,i__33563_33945,seq__33259,chunk__33261,count__33262,i__33263,new_link_34001,path_match_34000,node_33999,seq__33557_33993__$1,temp__5804__auto___33992,path,map__33258,map__33258__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34000], 0));

goog.dom.insertSiblingAfter(new_link_34001,node_33999);


var G__34037 = cljs.core.next(seq__33557_33993__$1);
var G__34038 = null;
var G__34039 = (0);
var G__34040 = (0);
seq__33557_33942 = G__34037;
chunk__33561_33943 = G__34038;
count__33562_33944 = G__34039;
i__33563_33945 = G__34040;
continue;
} else {
var G__34041 = cljs.core.next(seq__33557_33993__$1);
var G__34042 = null;
var G__34043 = (0);
var G__34044 = (0);
seq__33557_33942 = G__34041;
chunk__33561_33943 = G__34042;
count__33562_33944 = G__34043;
i__33563_33945 = G__34044;
continue;
}
} else {
var G__34045 = cljs.core.next(seq__33557_33993__$1);
var G__34046 = null;
var G__34047 = (0);
var G__34048 = (0);
seq__33557_33942 = G__34045;
chunk__33561_33943 = G__34046;
count__33562_33944 = G__34047;
i__33563_33945 = G__34048;
continue;
}
}
} else {
}
}
break;
}


var G__34049 = seq__33259;
var G__34050 = chunk__33261;
var G__34051 = count__33262;
var G__34052 = (i__33263 + (1));
seq__33259 = G__34049;
chunk__33261 = G__34050;
count__33262 = G__34051;
i__33263 = G__34052;
continue;
} else {
var G__34053 = seq__33259;
var G__34054 = chunk__33261;
var G__34055 = count__33262;
var G__34056 = (i__33263 + (1));
seq__33259 = G__34053;
chunk__33261 = G__34054;
count__33262 = G__34055;
i__33263 = G__34056;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33259);
if(temp__5804__auto__){
var seq__33259__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33259__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33259__$1);
var G__34058 = cljs.core.chunk_rest(seq__33259__$1);
var G__34059 = c__5568__auto__;
var G__34060 = cljs.core.count(c__5568__auto__);
var G__34061 = (0);
seq__33259 = G__34058;
chunk__33261 = G__34059;
count__33262 = G__34060;
i__33263 = G__34061;
continue;
} else {
var path = cljs.core.first(seq__33259__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__33720_34062 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__33724_34063 = null;
var count__33725_34064 = (0);
var i__33726_34065 = (0);
while(true){
if((i__33726_34065 < count__33725_34064)){
var node_34066 = chunk__33724_34063.cljs$core$IIndexed$_nth$arity$2(null,i__33726_34065);
if(cljs.core.not(node_34066.shadow$old)){
var path_match_34067 = shadow.cljs.devtools.client.browser.match_paths(node_34066.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34067)){
var new_link_34068 = (function (){var G__33778 = node_34066.cloneNode(true);
G__33778.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34067),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__33778;
})();
(node_34066.shadow$old = true);

(new_link_34068.onload = ((function (seq__33720_34062,chunk__33724_34063,count__33725_34064,i__33726_34065,seq__33259,chunk__33261,count__33262,i__33263,new_link_34068,path_match_34067,node_34066,path,seq__33259__$1,temp__5804__auto__,map__33258,map__33258__$1,msg,updates,reload_info){
return (function (e){
var seq__33779_34069 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__33781_34070 = null;
var count__33782_34071 = (0);
var i__33783_34072 = (0);
while(true){
if((i__33783_34072 < count__33782_34071)){
var map__33792_34073 = chunk__33781_34070.cljs$core$IIndexed$_nth$arity$2(null,i__33783_34072);
var map__33792_34074__$1 = cljs.core.__destructure_map(map__33792_34073);
var task_34075 = map__33792_34074__$1;
var fn_str_34076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33792_34074__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33792_34074__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34078 = goog.getObjectByName(fn_str_34076,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34077)].join(''));

(fn_obj_34078.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34078.cljs$core$IFn$_invoke$arity$2(path,new_link_34068) : fn_obj_34078.call(null,path,new_link_34068));


var G__34079 = seq__33779_34069;
var G__34080 = chunk__33781_34070;
var G__34081 = count__33782_34071;
var G__34082 = (i__33783_34072 + (1));
seq__33779_34069 = G__34079;
chunk__33781_34070 = G__34080;
count__33782_34071 = G__34081;
i__33783_34072 = G__34082;
continue;
} else {
var temp__5804__auto___34083__$1 = cljs.core.seq(seq__33779_34069);
if(temp__5804__auto___34083__$1){
var seq__33779_34084__$1 = temp__5804__auto___34083__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33779_34084__$1)){
var c__5568__auto___34085 = cljs.core.chunk_first(seq__33779_34084__$1);
var G__34086 = cljs.core.chunk_rest(seq__33779_34084__$1);
var G__34087 = c__5568__auto___34085;
var G__34088 = cljs.core.count(c__5568__auto___34085);
var G__34089 = (0);
seq__33779_34069 = G__34086;
chunk__33781_34070 = G__34087;
count__33782_34071 = G__34088;
i__33783_34072 = G__34089;
continue;
} else {
var map__33794_34090 = cljs.core.first(seq__33779_34084__$1);
var map__33794_34091__$1 = cljs.core.__destructure_map(map__33794_34090);
var task_34092 = map__33794_34091__$1;
var fn_str_34093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33794_34091__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33794_34091__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34095 = goog.getObjectByName(fn_str_34093,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34094)].join(''));

(fn_obj_34095.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34095.cljs$core$IFn$_invoke$arity$2(path,new_link_34068) : fn_obj_34095.call(null,path,new_link_34068));


var G__34096 = cljs.core.next(seq__33779_34084__$1);
var G__34097 = null;
var G__34098 = (0);
var G__34099 = (0);
seq__33779_34069 = G__34096;
chunk__33781_34070 = G__34097;
count__33782_34071 = G__34098;
i__33783_34072 = G__34099;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_34066);
});})(seq__33720_34062,chunk__33724_34063,count__33725_34064,i__33726_34065,seq__33259,chunk__33261,count__33262,i__33263,new_link_34068,path_match_34067,node_34066,path,seq__33259__$1,temp__5804__auto__,map__33258,map__33258__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34067], 0));

goog.dom.insertSiblingAfter(new_link_34068,node_34066);


var G__34100 = seq__33720_34062;
var G__34101 = chunk__33724_34063;
var G__34102 = count__33725_34064;
var G__34103 = (i__33726_34065 + (1));
seq__33720_34062 = G__34100;
chunk__33724_34063 = G__34101;
count__33725_34064 = G__34102;
i__33726_34065 = G__34103;
continue;
} else {
var G__34104 = seq__33720_34062;
var G__34105 = chunk__33724_34063;
var G__34106 = count__33725_34064;
var G__34107 = (i__33726_34065 + (1));
seq__33720_34062 = G__34104;
chunk__33724_34063 = G__34105;
count__33725_34064 = G__34106;
i__33726_34065 = G__34107;
continue;
}
} else {
var G__34108 = seq__33720_34062;
var G__34109 = chunk__33724_34063;
var G__34110 = count__33725_34064;
var G__34111 = (i__33726_34065 + (1));
seq__33720_34062 = G__34108;
chunk__33724_34063 = G__34109;
count__33725_34064 = G__34110;
i__33726_34065 = G__34111;
continue;
}
} else {
var temp__5804__auto___34112__$1 = cljs.core.seq(seq__33720_34062);
if(temp__5804__auto___34112__$1){
var seq__33720_34113__$1 = temp__5804__auto___34112__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33720_34113__$1)){
var c__5568__auto___34114 = cljs.core.chunk_first(seq__33720_34113__$1);
var G__34115 = cljs.core.chunk_rest(seq__33720_34113__$1);
var G__34116 = c__5568__auto___34114;
var G__34117 = cljs.core.count(c__5568__auto___34114);
var G__34118 = (0);
seq__33720_34062 = G__34115;
chunk__33724_34063 = G__34116;
count__33725_34064 = G__34117;
i__33726_34065 = G__34118;
continue;
} else {
var node_34119 = cljs.core.first(seq__33720_34113__$1);
if(cljs.core.not(node_34119.shadow$old)){
var path_match_34120 = shadow.cljs.devtools.client.browser.match_paths(node_34119.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34120)){
var new_link_34121 = (function (){var G__33797 = node_34119.cloneNode(true);
G__33797.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34120),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__33797;
})();
(node_34119.shadow$old = true);

(new_link_34121.onload = ((function (seq__33720_34062,chunk__33724_34063,count__33725_34064,i__33726_34065,seq__33259,chunk__33261,count__33262,i__33263,new_link_34121,path_match_34120,node_34119,seq__33720_34113__$1,temp__5804__auto___34112__$1,path,seq__33259__$1,temp__5804__auto__,map__33258,map__33258__$1,msg,updates,reload_info){
return (function (e){
var seq__33798_34122 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__33800_34123 = null;
var count__33801_34124 = (0);
var i__33802_34125 = (0);
while(true){
if((i__33802_34125 < count__33801_34124)){
var map__33808_34126 = chunk__33800_34123.cljs$core$IIndexed$_nth$arity$2(null,i__33802_34125);
var map__33808_34127__$1 = cljs.core.__destructure_map(map__33808_34126);
var task_34128 = map__33808_34127__$1;
var fn_str_34129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33808_34127__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33808_34127__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34131 = goog.getObjectByName(fn_str_34129,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34130)].join(''));

(fn_obj_34131.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34131.cljs$core$IFn$_invoke$arity$2(path,new_link_34121) : fn_obj_34131.call(null,path,new_link_34121));


var G__34132 = seq__33798_34122;
var G__34133 = chunk__33800_34123;
var G__34134 = count__33801_34124;
var G__34135 = (i__33802_34125 + (1));
seq__33798_34122 = G__34132;
chunk__33800_34123 = G__34133;
count__33801_34124 = G__34134;
i__33802_34125 = G__34135;
continue;
} else {
var temp__5804__auto___34136__$2 = cljs.core.seq(seq__33798_34122);
if(temp__5804__auto___34136__$2){
var seq__33798_34137__$1 = temp__5804__auto___34136__$2;
if(cljs.core.chunked_seq_QMARK_(seq__33798_34137__$1)){
var c__5568__auto___34139 = cljs.core.chunk_first(seq__33798_34137__$1);
var G__34140 = cljs.core.chunk_rest(seq__33798_34137__$1);
var G__34141 = c__5568__auto___34139;
var G__34142 = cljs.core.count(c__5568__auto___34139);
var G__34143 = (0);
seq__33798_34122 = G__34140;
chunk__33800_34123 = G__34141;
count__33801_34124 = G__34142;
i__33802_34125 = G__34143;
continue;
} else {
var map__33810_34144 = cljs.core.first(seq__33798_34137__$1);
var map__33810_34145__$1 = cljs.core.__destructure_map(map__33810_34144);
var task_34146 = map__33810_34145__$1;
var fn_str_34147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33810_34145__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33810_34145__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34149 = goog.getObjectByName(fn_str_34147,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34148)].join(''));

(fn_obj_34149.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34149.cljs$core$IFn$_invoke$arity$2(path,new_link_34121) : fn_obj_34149.call(null,path,new_link_34121));


var G__34151 = cljs.core.next(seq__33798_34137__$1);
var G__34152 = null;
var G__34153 = (0);
var G__34154 = (0);
seq__33798_34122 = G__34151;
chunk__33800_34123 = G__34152;
count__33801_34124 = G__34153;
i__33802_34125 = G__34154;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_34119);
});})(seq__33720_34062,chunk__33724_34063,count__33725_34064,i__33726_34065,seq__33259,chunk__33261,count__33262,i__33263,new_link_34121,path_match_34120,node_34119,seq__33720_34113__$1,temp__5804__auto___34112__$1,path,seq__33259__$1,temp__5804__auto__,map__33258,map__33258__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34120], 0));

goog.dom.insertSiblingAfter(new_link_34121,node_34119);


var G__34155 = cljs.core.next(seq__33720_34113__$1);
var G__34156 = null;
var G__34157 = (0);
var G__34158 = (0);
seq__33720_34062 = G__34155;
chunk__33724_34063 = G__34156;
count__33725_34064 = G__34157;
i__33726_34065 = G__34158;
continue;
} else {
var G__34159 = cljs.core.next(seq__33720_34113__$1);
var G__34160 = null;
var G__34161 = (0);
var G__34162 = (0);
seq__33720_34062 = G__34159;
chunk__33724_34063 = G__34160;
count__33725_34064 = G__34161;
i__33726_34065 = G__34162;
continue;
}
} else {
var G__34163 = cljs.core.next(seq__33720_34113__$1);
var G__34164 = null;
var G__34165 = (0);
var G__34166 = (0);
seq__33720_34062 = G__34163;
chunk__33724_34063 = G__34164;
count__33725_34064 = G__34165;
i__33726_34065 = G__34166;
continue;
}
}
} else {
}
}
break;
}


var G__34167 = cljs.core.next(seq__33259__$1);
var G__34168 = null;
var G__34169 = (0);
var G__34170 = (0);
seq__33259 = G__34167;
chunk__33261 = G__34168;
count__33262 = G__34169;
i__33263 = G__34170;
continue;
} else {
var G__34171 = cljs.core.next(seq__33259__$1);
var G__34172 = null;
var G__34173 = (0);
var G__34174 = (0);
seq__33259 = G__34171;
chunk__33261 = G__34172;
count__33262 = G__34173;
i__33263 = G__34174;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__33813){
var map__33814 = p__33813;
var map__33814__$1 = cljs.core.__destructure_map(map__33814);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33814__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__33815){
var map__33816 = p__33815;
var map__33816__$1 = cljs.core.__destructure_map(map__33816);
var _ = map__33816__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33816__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__33817,done,error){
var map__33818 = p__33817;
var map__33818__$1 = cljs.core.__destructure_map(map__33818);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33818__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__33819,done,error){
var map__33820 = p__33819;
var map__33820__$1 = cljs.core.__destructure_map(map__33820);
var msg = map__33820__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33820__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33820__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33820__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__33821){
var map__33822 = p__33821;
var map__33822__$1 = cljs.core.__destructure_map(map__33822);
var src = map__33822__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33822__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__33823 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__33823) : done.call(null,G__33823));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__33824){
var map__33825 = p__33824;
var map__33825__$1 = cljs.core.__destructure_map(map__33825);
var msg__$1 = map__33825__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33825__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e33826){var ex = e33826;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__33827){
var map__33828 = p__33827;
var map__33828__$1 = cljs.core.__destructure_map(map__33828);
var env = map__33828__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33828__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__33829){
var map__33830 = p__33829;
var map__33830__$1 = cljs.core.__destructure_map(map__33830);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33830__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33830__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__33831){
var map__33832 = p__33831;
var map__33832__$1 = cljs.core.__destructure_map(map__33832);
var svc = map__33832__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33832__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
