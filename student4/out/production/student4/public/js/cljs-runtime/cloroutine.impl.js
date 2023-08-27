goog.provide('cloroutine.impl');
cloroutine.impl.box__GT_prim = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Symbol(null,"java.lang.Boolean","java.lang.Boolean",-468769523,null),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Symbol(null,"java.lang.Byte","java.lang.Byte",-1356683913,null),new cljs.core.Symbol(null,"byte","byte",-1970660549,null),new cljs.core.Symbol(null,"java.lang.Character","java.lang.Character",-2129351830,null),new cljs.core.Symbol(null,"char","char",998943941,null),new cljs.core.Symbol(null,"java.lang.Short","java.lang.Short",-1406367104,null),new cljs.core.Symbol(null,"short","short",-725675253,null),new cljs.core.Symbol(null,"java.lang.Integer","java.lang.Integer",142580962,null),new cljs.core.Symbol(null,"int","int",-100885395,null),new cljs.core.Symbol(null,"java.lang.Long","java.lang.Long",2034224465,null),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Symbol(null,"java.lang.Float","java.lang.Float",-502961298,null),new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"java.lang.Double","java.lang.Double",1981763627,null),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null);
cloroutine.impl.prim__GT_box = cljs.core.reduce_kv((function (p1__42645_SHARP_,p2__42647_SHARP_,p3__42646_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42645_SHARP_,p3__42646_SHARP_,p2__42647_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cloroutine.impl.box__GT_prim);
cloroutine.impl.with_tag = (function cloroutine$impl$with_tag(form,tag){
if((((!((form == null))))?(((((form.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === form.cljs$core$IMeta$))))?true:(((!form.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,form):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,form))){
return cljs.core.with_meta(form,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(form),new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return form;
}
});
cloroutine.impl.var_name = (function cloroutine$impl$var_name(ast){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast))){
var or__5045__auto__ = (function (){var temp__5808__auto__ = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast);
if((temp__5808__auto__ == null)){
return null;
} else {
var v = temp__5808__auto__;
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(v);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var temp__5808__auto__ = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(ast);
if((temp__5808__auto__ == null)){
return null;
} else {
var v = temp__5808__auto__;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(v)),cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(v)));
}
}
} else {
return null;
}
});
cloroutine.impl.coroutine = (function cloroutine$impl$coroutine(state){
return (function() {
var G__43605 = null;
var G__43605__0 = (function (){
while(true){
var result = (function (){var fexpr__42649 = (state[(0)]);
return (fexpr__42649.cljs$core$IFn$_invoke$arity$1 ? fexpr__42649.cljs$core$IFn$_invoke$arity$1(state) : fexpr__42649.call(null,state));
})();
if((result === state)){
continue;
} else {
return result;
}
break;
}
});
var G__43605__1 = (function (f){
var G__42650 = (function (){var G__42651 = cljs.core.aclone(state);
return (cloroutine.impl.coroutine.cljs$core$IFn$_invoke$arity$1 ? cloroutine.impl.coroutine.cljs$core$IFn$_invoke$arity$1(G__42651) : cloroutine.impl.coroutine.call(null,G__42651));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42650) : f.call(null,G__42650));
});
var G__43605__2 = (function (f,a){
var G__42652 = (function (){var G__42654 = cljs.core.aclone(state);
return (cloroutine.impl.coroutine.cljs$core$IFn$_invoke$arity$1 ? cloroutine.impl.coroutine.cljs$core$IFn$_invoke$arity$1(G__42654) : cloroutine.impl.coroutine.call(null,G__42654));
})();
var G__42653 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__42652,G__42653) : f.call(null,G__42652,G__42653));
});
var G__43605__3 = (function (f,a,b){
var G__42655 = (function (){var G__42658 = cljs.core.aclone(state);
return (cloroutine.impl.coroutine.cljs$core$IFn$_invoke$arity$1 ? cloroutine.impl.coroutine.cljs$core$IFn$_invoke$arity$1(G__42658) : cloroutine.impl.coroutine.call(null,G__42658));
})();
var G__42656 = a;
var G__42657 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__42655,G__42656,G__42657) : f.call(null,G__42655,G__42656,G__42657));
});
var G__43605__4 = (function (f,a,b,c){
var G__42659 = (function (){var G__42663 = cljs.core.aclone(state);
return (cloroutine.impl.coroutine.cljs$core$IFn$_invoke$arity$1 ? cloroutine.impl.coroutine.cljs$core$IFn$_invoke$arity$1(G__42663) : cloroutine.impl.coroutine.call(null,G__42663));
})();
var G__42660 = a;
var G__42661 = b;
var G__42662 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__42659,G__42660,G__42661,G__42662) : f.call(null,G__42659,G__42660,G__42661,G__42662));
});
var G__43605__5 = (function() { 
var G__43618__delegate = function (f,a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,(function (){var G__42664 = cljs.core.aclone(state);
return (cloroutine.impl.coroutine.cljs$core$IFn$_invoke$arity$1 ? cloroutine.impl.coroutine.cljs$core$IFn$_invoke$arity$1(G__42664) : cloroutine.impl.coroutine.call(null,G__42664));
})(),a,b,c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ds], 0));
};
var G__43618 = function (f,a,b,c,var_args){
var ds = null;
if (arguments.length > 4) {
var G__43619__i = 0, G__43619__a = new Array(arguments.length -  4);
while (G__43619__i < G__43619__a.length) {G__43619__a[G__43619__i] = arguments[G__43619__i + 4]; ++G__43619__i;}
  ds = new cljs.core.IndexedSeq(G__43619__a,0,null);
} 
return G__43618__delegate.call(this,f,a,b,c,ds);};
G__43618.cljs$lang$maxFixedArity = 4;
G__43618.cljs$lang$applyTo = (function (arglist__43620){
var f = cljs.core.first(arglist__43620);
arglist__43620 = cljs.core.next(arglist__43620);
var a = cljs.core.first(arglist__43620);
arglist__43620 = cljs.core.next(arglist__43620);
var b = cljs.core.first(arglist__43620);
arglist__43620 = cljs.core.next(arglist__43620);
var c = cljs.core.first(arglist__43620);
var ds = cljs.core.rest(arglist__43620);
return G__43618__delegate(f,a,b,c,ds);
});
G__43618.cljs$core$IFn$_invoke$arity$variadic = G__43618__delegate;
return G__43618;
})()
;
G__43605 = function(f,a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__43605__0.call(this);
case 1:
return G__43605__1.call(this,f);
case 2:
return G__43605__2.call(this,f,a);
case 3:
return G__43605__3.call(this,f,a,b);
case 4:
return G__43605__4.call(this,f,a,b,c);
default:
var G__43623 = null;
if (arguments.length > 4) {
var G__43624__i = 0, G__43624__a = new Array(arguments.length -  4);
while (G__43624__i < G__43624__a.length) {G__43624__a[G__43624__i] = arguments[G__43624__i + 4]; ++G__43624__i;}
G__43623 = new cljs.core.IndexedSeq(G__43624__a,0,null);
}
return G__43605__5.cljs$core$IFn$_invoke$arity$variadic(f,a,b,c, G__43623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43605.cljs$lang$maxFixedArity = 4;
G__43605.cljs$lang$applyTo = G__43605__5.cljs$lang$applyTo;
G__43605.cljs$core$IFn$_invoke$arity$0 = G__43605__0;
G__43605.cljs$core$IFn$_invoke$arity$1 = G__43605__1;
G__43605.cljs$core$IFn$_invoke$arity$2 = G__43605__2;
G__43605.cljs$core$IFn$_invoke$arity$3 = G__43605__3;
G__43605.cljs$core$IFn$_invoke$arity$4 = G__43605__4;
G__43605.cljs$core$IFn$_invoke$arity$variadic = G__43605__5.cljs$core$IFn$_invoke$arity$variadic;
return G__43605;
})()
});
cloroutine.impl.sym = (function cloroutine$impl$sym(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43626 = arguments.length;
var i__5770__auto___43627 = (0);
while(true){
if((i__5770__auto___43627 < len__5769__auto___43626)){
args__5775__auto__.push((arguments[i__5770__auto___43627]));

var G__43628 = (i__5770__auto___43627 + (1));
i__5770__auto___43627 = G__43628;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return cloroutine.impl.sym.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(cloroutine.impl.sym.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("-",args)));
}));

(cloroutine.impl.sym.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cloroutine.impl.sym.cljs$lang$applyTo = (function (seq42665){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42665));
}));

cloroutine.impl.conj_vec = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY);
cloroutine.impl.conj_set = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
cloroutine.impl.into_set = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY);
cloroutine.impl.analyze = (function cloroutine$impl$analyze(env,form){
if(cljs.core.truth_(new cljs.core.Keyword(null,"js-globals","js-globals",1670394727).cljs$core$IFn$_invoke$arity$1(env))){
var _STAR_compiler_STAR__orig_val__42666 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__42667 = (function (){var or__5045__auto__ = cljs.env._STAR_compiler_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
}
})();
(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__42667);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(env,form,null,null);
}finally {(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__42666);
}} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't target JVM from clojurescript.",cljs.core.PersistentArrayMap.EMPTY);
}
});
cloroutine.impl.coerce_js_literal_key = (function cloroutine$impl$coerce_js_literal_key(k){
var or__5045__auto__ = (function (){var and__5043__auto__ = typeof k === 'string';
if(and__5043__auto__){
return k;
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var and__5043__auto__ = (k instanceof cljs.core.Keyword);
if(and__5043__auto__){
var and__5043__auto____$1 = (cljs.core.namespace(k) == null);
if(and__5043__auto____$1){
return cljs.core.name(k);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid JS literal key - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null));
}
}
});
cloroutine.impl.ssa = (function (){var js_template = (function cloroutine$impl$js_template(ast){
var or__5045__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("~{}",new cljs.core.Keyword(null,"segs","segs",-1940299576).cljs$core$IFn$_invoke$arity$1(ast)));
}
});
var emit_vec = (function cloroutine$impl$emit_vec(args,meta){
return cljs.core.with_meta(cljs.core.vec(args),meta);
});
var with_continue = (function cloroutine$impl$with_continue(ssa,origin,write){
return with_transition.cljs$core$IFn$_invoke$arity$variadic(ssa,origin,current_block(ssa),write,cloroutine.impl.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(ssa),new cljs.core.Symbol(null,"state","state",-348086572,null)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default","default",-1987822328)], 0));
});
var emit_js_object = (function cloroutine$impl$emit_js_object(args,meta,keys){
return cljs.core.with_meta(cljs.core.cons(new cljs.core.Symbol("cljs.core","js-obj","cljs.core/js-obj",1009370607,null),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,args)),meta);
});
var add_block = (function cloroutine$impl$add_block(ssa){
var block = cloroutine.impl.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(ssa),new cljs.core.Symbol(null,"block","block",-1989749559,null),cljs.core.count(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(ssa))], 0));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(ssa,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.assoc,block,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"caught","caught",443476795),cloroutine.impl.conj_set,block);
});
var with_joins = (function cloroutine$impl$with_joins(ssa,target,branches){
return cljs.core.reduce_kv((function (ssa__$1,block,place){
return with_continue(ssa__$1,block,cljs.core.PersistentArrayMap.createAsIfByAssoc([target,place]));
}),ssa,branches);
});
var tag__GT_symbol = (function cloroutine$impl$tag__GT_symbol(c){
var or__5045__auto__ = (((c instanceof cljs.core.Symbol))?c:null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return class__GT_symbol(c);
}
});
var emit_case = (function cloroutine$impl$emit_case(p__43310,meta,tests){
var vec__43311 = p__43310;
var seq__43312 = cljs.core.seq(vec__43311);
var first__43313 = cljs.core.first(seq__43312);
var seq__43312__$1 = cljs.core.next(seq__43312);
var test = first__43313;
var first__43313__$1 = cljs.core.first(seq__43312__$1);
var seq__43312__$2 = cljs.core.next(seq__43312__$1);
var default$ = first__43313__$1;
var thens = seq__43312__$2;
return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","case","cljs.core/case",-1674122212,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens),(new cljs.core.List(null,default$,null,(1),null))], 0)))),meta);
});
var add_place = (function() {
var cloroutine$impl$add_place = null;
var cloroutine$impl$add_place__2 = (function (ssa,init){
return cloroutine$impl$add_place.cljs$core$IFn$_invoke$arity$3(ssa,init,null);
});
var cloroutine$impl$add_place__3 = (function (p__43314,init,tag){
var map__43315 = p__43314;
var map__43315__$1 = cljs.core.__destructure_map(map__43315);
var ssa = map__43315__$1;
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43315__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var places = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43315__$1,new cljs.core.Keyword(null,"places","places",1043491706));
var block = current_block(ssa);
var place = cloroutine.impl.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"place","place",820842061,null),cljs.core.count(places)], 0));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ssa,new cljs.core.Keyword(null,"result","result",1415092211),place,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),place], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),init,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"block","block",664686210),block], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),block,new cljs.core.Keyword(null,"bind","bind",-113428417)], null),cloroutine.impl.conj_vec,place);
});
cloroutine$impl$add_place = function(p__43314,init,tag){
switch(arguments.length){
case 2:
return cloroutine$impl$add_place__2.call(this,p__43314,init);
case 3:
return cloroutine$impl$add_place__3.call(this,p__43314,init,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloroutine$impl$add_place.cljs$core$IFn$_invoke$arity$2 = cloroutine$impl$add_place__2;
cloroutine$impl$add_place.cljs$core$IFn$_invoke$arity$3 = cloroutine$impl$add_place__3;
return cloroutine$impl$add_place;
})()
;
var with_place = (function cloroutine$impl$with_place(ssa,place){
var block = current_block(ssa);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1((function (){var G__43316 = new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(ssa);
return (place.cljs$core$IFn$_invoke$arity$1 ? place.cljs$core$IFn$_invoke$arity$1(G__43316) : place.call(null,G__43316));
})()))){
return ssa;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ssa,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),block,new cljs.core.Keyword(null,"read","read",1140058661)], null),cloroutine.impl.conj_set,place);
}
});
var add_conditional = (function cloroutine$impl$add_conditional(ssa,test,clauses,default$){
var ssa__$1 = add_breaking(ssa,test);
var block = current_block(ssa__$1);
var temp__5806__auto__ = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(ssa__$1);
if((temp__5806__auto__ == null)){
return ssa__$1;
} else {
var place = temp__5806__auto__;
var map__43317 = add_place(with_test(with_place(ssa__$1,place),place),null);
var map__43317__$1 = cljs.core.__destructure_map(map__43317);
var ssa__$2 = map__43317__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43317__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var map__43318 = add_branch(with_default_jump(add_block(cljs.core.reduce_kv((function (ssa__$3,test__$1,then){
return add_branch(with_clause_jump(add_block(ssa__$3),block,test__$1),then);
}),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ssa__$2,new cljs.core.Keyword(null,"result","result",1415092211)),clauses)),block),default$);
var map__43318__$1 = cljs.core.__destructure_map(map__43318);
var ssa__$3 = map__43318__$1;
var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43318__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core.truth_(branches)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(with_place(with_joins(add_block(ssa__$3),target,branches),target),new cljs.core.Keyword(null,"result","result",1415092211),target);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ssa__$3,new cljs.core.Keyword(null,"result","result",1415092211));
}
}
});
var emit_set = (function cloroutine$impl$emit_set(args,meta){
return cljs.core.with_meta(cljs.core.set(args),meta);
});
var emit_member_access = (function cloroutine$impl$emit_member_access(p__43327,meta,member){
var vec__43328 = p__43327;
var seq__43329 = cljs.core.seq(vec__43328);
var first__43330 = cljs.core.first(seq__43329);
var seq__43329__$1 = cljs.core.next(seq__43329);
var inst = first__43330;
var args = seq__43329__$1;
return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,inst,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,member,null,(1),null)),args], 0)))),meta);
});
var emit_member_assign = (function cloroutine$impl$emit_member_assign(p__43331,meta,member){
var vec__43332 = p__43331;
var inst = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43332,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43332,(1),null);
return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,inst,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,member,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,val,null,(1),null))], 0)))),meta);
});
var current_block = (function cloroutine$impl$current_block(ssa){
return cloroutine.impl.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(ssa),new cljs.core.Symbol(null,"block","block",-1989749559,null),(cljs.core.count(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(ssa)) - (1))], 0));
});
var with_resume = (function cloroutine$impl$with_resume(ssa,origin,state){
return with_transition.cljs$core$IFn$_invoke$arity$variadic(ssa,origin,current_block(ssa),cljs.core.PersistentArrayMap.EMPTY,state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default","default",-1987822328)], 0));
});
var add_breaking = (function cloroutine$impl$add_breaking(ssa,ast){
var tag = tag__GT_symbol(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ast));
var met = ast_meta(ast);
var G__43335 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var G__43335__$1 = (((G__43335 instanceof cljs.core.Keyword))?G__43335.fqn:null);
switch (G__43335__$1) {
case "with-meta":
var ssa__$1 = cloroutine$impl$add_breaking(ssa,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(ast));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ssa__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(ssa__$1),new cljs.core.Keyword(null,"init","init",-1875481434)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.list,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(ast)));

break;
case "local":
var temp__5806__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ssa,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], null));
if((temp__5806__auto__ == null)){
return add_place(ssa,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(ast),tag);
} else {
var place = temp__5806__auto__;
return add_place(with_place(ssa,place),emit_place(ssa,tag,place),tag);
}

break;
case "const":
case "var":
case "js-var":
case "quote":
case "the-var":
case "static-field":
return add_place(ssa,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cloroutine.impl","hint","cloroutine.impl/hint",-2075398011,null),null,(1),null)),(new cljs.core.List(null,tag,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,tag__GT_symbol(new cljs.core.Keyword(null,"o-tag","o-tag",442833710).cljs$core$IFn$_invoke$arity$1(ast)),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(ast),null,(1),null))], 0)))),tag);

break;
case "fn":
case "reify":
case "deftype":
var ssa__$1 = add_closing(ssa,ast);
return add_place(ssa__$1,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(ssa__$1),tag);

break;
case "invoke":
case "prim-invoke":
var temp__5806__auto__ = cljs.core.find(new cljs.core.Keyword(null,"breaks","breaks",1602244677).cljs$core$IFn$_invoke$arity$1(ssa),cloroutine.impl.var_name(function$(ast)));
if((temp__5806__auto__ == null)){
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_breaking,cljs.core.cons(function$(ast),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast)),add_many,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag,emit_apply,met], 0));
} else {
var vec__43336 = temp__5806__auto__;
var suspend = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43336,(0),null);
var resume = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43336,(1),null);
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_breaking,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast),add_break,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([suspend,resume], 0));
}

break;
case "keyword-invoke":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_breaking,(new cljs.core.List(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast),null,(1),null)),add_many,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag,emit_apply,met,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(ast))], 0));

break;
case "protocol-invoke":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_breaking,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"protocol-fn","protocol-fn",-865541389).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast)),add_many,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag,emit_apply,met], 0));

break;
case "instance?":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_breaking,(new cljs.core.List(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast),null,(1),null)),add_many,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag,emit_apply,met,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(ast)], 0));

break;
case "instance-call":
case "host-call":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_breaking,cljs.core.cons(instance(ast),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast)),add_many,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag,emit_member_access,met,new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(ast)], 0));

break;
case "instance-field":
case "host-field":
case "host-interop":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_breaking,cljs.core.cons(instance(ast),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast)),add_many,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag,emit_member_access,met,field(ast)], 0));

break;
case "static-call":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_breaking,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast),add_many,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag,emit_apply,met,new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(ast)], 0));

break;
case "new":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_breaking,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast),add_many,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag,emit_apply,met,new cljs.core.Symbol(null,"new","new",-444906321,null),constructor$(ast)], 0));

break;
case "set!":
var map__43339 = ast;
var map__43339__$1 = cljs.core.__destructure_map(map__43339);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43339__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43339__$1,new cljs.core.Keyword(null,"val","val",128701612));
var G__43340 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(target);
var G__43340__$1 = (((G__43340 instanceof cljs.core.Keyword))?G__43340.fqn:null);
switch (G__43340__$1) {
case "var":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_breaking,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val], null),add_many,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag,emit_apply,met,new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(target)], 0));

break;
case "instance-field":
case "host-field":
case "host-interop":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_breaking,(new cljs.core.List(null,instance(target),(new cljs.core.List(null,val,null,(1),null)),(2),null)),add_many,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag,emit_member_assign,met,field(target)], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43340__$1)].join('')));

}

break;
case "def":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_breaking,(new cljs.core.List(null,new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(ast),null,(1),null)),add_many,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag,emit_apply,met,new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(ast))], 0));

break;
case "js":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_breaking,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast),add_many,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag,emit_apply,met,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),js_template(ast)], 0));

break;
case "js-array":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_breaking,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(ast),add_many,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag,emit_js_array,met], 0));

break;
case "js-object":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_breaking,new cljs.core.Keyword(null,"vals","vals",768058733).cljs$core$IFn$_invoke$arity$1(ast),add_many,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag,emit_js_object,met,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cloroutine.impl.coerce_js_literal_key,new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(ast))], 0));

break;
case "vector":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_breaking,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(ast),add_many,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag,emit_vec,met], 0));

break;
case "set":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_breaking,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(ast),add_many,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag,emit_set,met], 0));

break;
case "map":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_breaking,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"vals","vals",768058733).cljs$core$IFn$_invoke$arity$1(ast)),add_many,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag,emit_map,met], 0));

break;
case "let":
return add_bindings.cljs$core$IFn$_invoke$arity$variadic(ssa,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ast),cloroutine$impl$add_breaking,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ast)], 0));

break;
case "loop":
return add_bindings.cljs$core$IFn$_invoke$arity$variadic(ssa,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ast),add_loop_body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ast)], 0));

break;
case "recur":
return collect(ssa,cloroutine$impl$add_breaking,new cljs.core.Keyword(null,"exprs","exprs",1795829094).cljs$core$IFn$_invoke$arity$1(ast),add_recur);

break;
case "do":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_breaking,new cljs.core.Keyword(null,"statements","statements",600349855).cljs$core$IFn$_invoke$arity$1(ast),cloroutine$impl$add_breaking,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(ast)], 0));

break;
case "case":
return add_conditional(ssa,new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.zipmap(case_tests(ast),case_thens(ast)),new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(ast));

break;
case "if":
return add_conditional(ssa,new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(null,false),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(ast)], null),new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(ast));

break;
case "try":
var caught = new cljs.core.Keyword(null,"caught","caught",443476795).cljs$core$IFn$_invoke$arity$1(ssa);
var handled = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cloroutine.impl.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(ssa),new cljs.core.Symbol(null,"exception","exception",1305254463,null)], 0));
}
})();
var map__43343 = add_place(ssa,null);
var map__43343__$1 = cljs.core.__destructure_map(map__43343);
var ssa__$1 = map__43343__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43343__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var map__43344 = add_place(ssa__$1,false);
var map__43344__$1 = cljs.core.__destructure_map(map__43344);
var ssa__$2 = map__43344__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43344__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return add_place(with_place(with_place((function (){var ssa__$3 = add_branch(with_default_jump(add_block(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(ssa__$2,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"caught","caught",443476795)], 0))),current_block(ssa__$2)),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ast));
var ssa__$4 = restore.cljs$core$IFn$_invoke$arity$variadic(add_branch(cljs.core.update.cljs$core$IFn$_invoke$arity$5(with_handler(add_block(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ssa__$3,new cljs.core.Keyword(null,"caught","caught",443476795))),new cljs.core.Keyword(null,"caught","caught",443476795).cljs$core$IFn$_invoke$arity$1(ssa__$3),cljs.core.PersistentArrayMap.createAsIfByAssoc([target,cloroutine.impl.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(ssa__$3),new cljs.core.Symbol(null,"exception","exception",1305254463,null)], 0))])),new cljs.core.Keyword(null,"locals","locals",535295783),cljs.core.assoc,handled,target),try_handler(ast,handled)),ssa__$3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"locals","locals",535295783)], 0));
var ssa__$5 = with_joins(with_handler(add_block(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ssa__$4,new cljs.core.Keyword(null,"caught","caught",443476795),caught)),new cljs.core.Keyword(null,"caught","caught",443476795).cljs$core$IFn$_invoke$arity$1(ssa__$4),cljs.core.PersistentArrayMap.createAsIfByAssoc([status,true,target,cloroutine.impl.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(ssa__$4),new cljs.core.Symbol(null,"exception","exception",1305254463,null)], 0))])),target,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(ssa__$4));
var temp__5806__auto__ = new cljs.core.Keyword(null,"finally","finally",1589088705).cljs$core$IFn$_invoke$arity$1(ast);
if((temp__5806__auto__ == null)){
return ssa__$5;
} else {
var ast__$1 = temp__5806__auto__;
return cloroutine$impl$add_breaking(ssa__$5,ast__$1);
}
})(),target),status),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,status,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,target,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,target,null,(1),null))], 0)))));

break;
case "throw":
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_breaking,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception","exception",-335277064).cljs$core$IFn$_invoke$arity$1(ast)], null),add_many,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag,emit_apply,met,new cljs.core.Symbol(null,"throw","throw",595905694,null)], 0)),new cljs.core.Keyword(null,"result","result",1415092211));

break;
case "monitor-enter":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_breaking,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast)], null),add_many,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag,emit_apply,met,new cljs.core.Symbol(null,".monitorEnter",".monitorEnter",-717493882,null),cljs.core.with_meta(new cljs.core.Symbol("cloroutine.impl","unsafe","cloroutine.impl/unsafe",-537495270,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cloroutine.impl","Unsafe","cloroutine.impl/Unsafe",784691560,null),null,(1),null)))))))], 0));

break;
case "monitor-exit":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_breaking,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast)], null),add_many,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag,emit_apply,met,new cljs.core.Symbol(null,".monitorExit",".monitorExit",-974216109,null),cljs.core.with_meta(new cljs.core.Symbol("cloroutine.impl","unsafe","cloroutine.impl/unsafe",-537495270,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cloroutine.impl","Unsafe","cloroutine.impl/Unsafe",784691560,null),null,(1),null)))))))], 0));

break;
case "letfn":
var prev = ssa;
var block = current_block(ssa);
var symbols = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ast));
var map__43349 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__43350,local){
var map__43351 = p__43350;
var map__43351__$1 = cljs.core.__destructure_map(map__43351);
var ssa__$1 = map__43351__$1;
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43351__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var places = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43351__$1,new cljs.core.Keyword(null,"places","places",1043491706));
var place = cloroutine.impl.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"place","place",820842061,null),cljs.core.count(places)], 0));
return cljs.core.assoc_in(cljs.core.assoc_in(ssa__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),local], null),place),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),place,new cljs.core.Keyword(null,"block","block",664686210)], null),block);
}),ssa,symbols);
var map__43349__$1 = cljs.core.__destructure_map(map__43349);
var ssa__$1 = map__43349__$1;
var locals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43349__$1,new cljs.core.Keyword(null,"locals","locals",535295783));
return restore.cljs$core$IFn$_invoke$arity$variadic(cloroutine$impl$add_breaking(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ssa__$2,p__43352){
var map__43353 = p__43352;
var map__43353__$1 = cljs.core.__destructure_map(map__43353);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43353__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43353__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var place = (locals.cljs$core$IFn$_invoke$arity$1 ? locals.cljs$core$IFn$_invoke$arity$1(name) : locals.call(null,name));
var ssa__$3 = add_closing(cljs.core.assoc_in(ssa__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"local","local",-1497766724).cljs$core$IFn$_invoke$arity$1(init))], null),place),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(init,new cljs.core.Keyword(null,"local","local",-1497766724)));
return cljs.core.assoc_in(ssa__$3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),place,new cljs.core.Keyword(null,"init","init",-1875481434)], null),cljs.core.with_meta(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(ssa__$3),null));
}),ssa__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ast)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),block,new cljs.core.Keyword(null,"bind","bind",-113428417)], null),cloroutine.impl.conj_vec,cljs.core.map.cljs$core$IFn$_invoke$arity$2(locals,symbols)),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ast)),prev,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"locals","locals",535295783)], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43335__$1)].join('')));

}
});
var with_test = (function cloroutine$impl$with_test(ssa,test){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(ssa,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),current_block(ssa)], null),cljs.core.assoc,new cljs.core.Keyword(null,"test","test",577538877),test);
});
var with_transition = (function() { 
var cloroutine$impl$with_transition__delegate = function (ssa,origin,target,write,state,path){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(ssa,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),origin], null),path),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block","block",664686210),target,new cljs.core.Keyword(null,"write","write",-1857649168),write,new cljs.core.Keyword(null,"state","state",-1988618099),state], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),target,new cljs.core.Keyword(null,"origins","origins",-1970258462)], null),cloroutine.impl.conj_set,origin);
};
var cloroutine$impl$with_transition = function (ssa,origin,target,write,state,var_args){
var path = null;
if (arguments.length > 5) {
var G__43681__i = 0, G__43681__a = new Array(arguments.length -  5);
while (G__43681__i < G__43681__a.length) {G__43681__a[G__43681__i] = arguments[G__43681__i + 5]; ++G__43681__i;}
  path = new cljs.core.IndexedSeq(G__43681__a,0,null);
} 
return cloroutine$impl$with_transition__delegate.call(this,ssa,origin,target,write,state,path);};
cloroutine$impl$with_transition.cljs$lang$maxFixedArity = 5;
cloroutine$impl$with_transition.cljs$lang$applyTo = (function (arglist__43682){
var ssa = cljs.core.first(arglist__43682);
arglist__43682 = cljs.core.next(arglist__43682);
var origin = cljs.core.first(arglist__43682);
arglist__43682 = cljs.core.next(arglist__43682);
var target = cljs.core.first(arglist__43682);
arglist__43682 = cljs.core.next(arglist__43682);
var write = cljs.core.first(arglist__43682);
arglist__43682 = cljs.core.next(arglist__43682);
var state = cljs.core.first(arglist__43682);
var path = cljs.core.rest(arglist__43682);
return cloroutine$impl$with_transition__delegate(ssa,origin,target,write,state,path);
});
cloroutine$impl$with_transition.cljs$core$IFn$_invoke$arity$variadic = cloroutine$impl$with_transition__delegate;
return cloroutine$impl$with_transition;
})()
;
var case_thens = (function cloroutine$impl$case_thens(p__43356){
var map__43357 = p__43356;
var map__43357__$1 = cljs.core.__destructure_map(map__43357);
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43357__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43357__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
if(cljs.core.truth_(thens)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"then","then",460598070),thens);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.Keyword(null,"then","then",460598070)),nodes);
}
});
var instance = (function cloroutine$impl$instance(ast){
var or__5045__auto__ = new cljs.core.Keyword(null,"instance","instance",-2121349050).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast);
}
});
var add_branch = (function cloroutine$impl$add_branch(ssa,ast){
var prv = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(ssa);
var ssa__$1 = add_breaking(ssa,ast);
var temp__5806__auto__ = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(ssa__$1);
if((temp__5806__auto__ == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ssa__$1,new cljs.core.Keyword(null,"result","result",1415092211),prv);
} else {
var place = temp__5806__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(with_place(ssa__$1,place),new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(prv,current_block(ssa__$1),place));
}
});
var add_closing = (function cloroutine$impl$add_closing(ssa,ast){
var met = ast_meta(ast);
var G__43358 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var G__43358__$1 = (((G__43358 instanceof cljs.core.Keyword))?G__43358.fqn:null);
switch (G__43358__$1) {
case "with-meta":
var ssa__$1 = cloroutine$impl$add_closing(ssa,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(ast));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ssa__$1,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.list,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(ast)));

break;
case "const":
case "var":
case "js-var":
case "quote":
case "the-var":
case "static-field":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ssa,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(ast));

break;
case "local":
var l = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast);
var s = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ssa,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shadow","shadow",873231803),l], null));
var p = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ssa,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),l], null));
if(cljs.core.truth_(s)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ssa,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cloroutine.impl","hint","cloroutine.impl/hint",-2075398011,null),null,(1),null)),(new cljs.core.List(null,tag__GT_symbol(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ast)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(met),null,(1),null)),(new cljs.core.List(null,s,null,(1),null))], 0)))));
} else {
if(cljs.core.truth_(p)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(with_place(ssa,p),new cljs.core.Keyword(null,"result","result",1415092211),emit_place(ssa,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(met),p));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ssa,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cloroutine.impl","hint","cloroutine.impl/hint",-2075398011,null),null,(1),null)),(new cljs.core.List(null,tag__GT_symbol(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ast)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(met),null,(1),null)),(new cljs.core.List(null,l,null,(1),null))], 0)))));
}
}

break;
case "let":
case "loop":
var previous = ssa;
var map__43359 = ast;
var map__43359__$1 = cljs.core.__destructure_map(map__43359);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43359__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43359__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43359__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__43360 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__43362,p__43363){
var map__43364 = p__43362;
var map__43364__$1 = cljs.core.__destructure_map(map__43364);
var ssa__$1 = map__43364__$1;
var bindings__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43364__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var map__43365 = p__43363;
var map__43365__$1 = cljs.core.__destructure_map(map__43365);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43365__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43365__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var map__43366 = cloroutine$impl$add_closing(ssa__$1,init);
var map__43366__$1 = cljs.core.__destructure_map(map__43366);
var ssa__$2 = map__43366__$1;
var init__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43366__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ssa__$2,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(bindings__$1,name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([init__$1], 0))),new cljs.core.Keyword(null,"shadow","shadow",873231803),cloroutine.impl.conj_set,name);
}),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ssa,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.PersistentVector.EMPTY),bindings);
var map__43360__$1 = cljs.core.__destructure_map(map__43360);
var ssa__$1 = map__43360__$1;
var bindings__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43360__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var map__43361 = cloroutine$impl$add_closing(ssa__$1,body);
var map__43361__$1 = cljs.core.__destructure_map(map__43361);
var ssa__$2 = map__43361__$1;
var body__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43361__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(restore.cljs$core$IFn$_invoke$arity$variadic(ssa__$2,previous,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shadow","shadow",873231803)], 0)),new cljs.core.Keyword(null,"result","result",1415092211),emit_apply.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bindings__$1,body__$1], null),met,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__43367 = op;
var G__43367__$1 = (((G__43367 instanceof cljs.core.Keyword))?G__43367.fqn:null);
switch (G__43367__$1) {
case "let":
return new cljs.core.Symbol(null,"let*","let*",1920721458,null);

break;
case "loop":
return new cljs.core.Symbol(null,"loop*","loop*",615029416,null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43367__$1)].join('')));

}
})()], 0)));

break;
case "invoke":
case "prim-invoke":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_closing,cljs.core.cons(function$(ast),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast)),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),emit_apply,met], 0));

break;
case "keyword-invoke":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_closing,(new cljs.core.List(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast),null,(1),null)),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),emit_apply,met,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(ast))], 0));

break;
case "protocol-invoke":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_closing,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"protocol-fn","protocol-fn",-865541389).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast)),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),emit_apply,met], 0));

break;
case "instance?":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_closing,(new cljs.core.List(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast),null,(1),null)),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),emit_apply,met,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(ast)], 0));

break;
case "instance-call":
case "host-call":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_closing,cljs.core.cons(instance(ast),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast)),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),emit_member_access,met,new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(ast)], 0));

break;
case "instance-field":
case "host-field":
case "host-interop":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_closing,cljs.core.cons(instance(ast),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast)),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),emit_member_access,met,field(ast)], 0));

break;
case "static-call":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_closing,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),emit_apply,met,new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(ast)], 0));

break;
case "new":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_closing,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),emit_apply,met,new cljs.core.Symbol(null,"new","new",-444906321,null),constructor$(ast)], 0));

break;
case "set!":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_closing,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(ast)], null),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),emit_apply,met,new cljs.core.Symbol(null,"set!","set!",250714521,null)], 0));

break;
case "def":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_closing,(new cljs.core.List(null,new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(ast),null,(1),null)),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),emit_apply,met,new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(ast))], 0));

break;
case "js":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_closing,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),emit_apply,met,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),js_template(ast)], 0));

break;
case "js-array":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_closing,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),emit_js_array,met], 0));

break;
case "js-object":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_closing,new cljs.core.Keyword(null,"vals","vals",768058733).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),emit_js_object,met,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cloroutine.impl.coerce_js_literal_key,new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(ast))], 0));

break;
case "vector":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_closing,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),emit_vec,met], 0));

break;
case "set":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_closing,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),emit_set,met], 0));

break;
case "map":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_closing,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"vals","vals",768058733).cljs$core$IFn$_invoke$arity$1(ast)),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),emit_map,met], 0));

break;
case "recur":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_closing,new cljs.core.Keyword(null,"exprs","exprs",1795829094).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),emit_apply,met,new cljs.core.Symbol(null,"recur","recur",1202958259,null)], 0));

break;
case "do":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_closing,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(new cljs.core.Keyword(null,"statements","statements",600349855).cljs$core$IFn$_invoke$arity$1(ast)),new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(ast)),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),emit_apply,met,new cljs.core.Symbol(null,"do","do",1686842252,null)], 0));

break;
case "if":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_closing,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(ast)], null),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),emit_apply,met,new cljs.core.Symbol(null,"if","if",1181717262,null)], 0));

break;
case "case":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_closing,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(ast),case_thens(ast)),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),emit_case,met,case_tests(ast)], 0));

break;
case "throw":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_closing,(new cljs.core.List(null,new cljs.core.Keyword(null,"exception","exception",-335277064).cljs$core$IFn$_invoke$arity$1(ast),null,(1),null)),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),emit_apply,met,new cljs.core.Symbol(null,"throw","throw",595905694,null)], 0));

break;
case "monitor-enter":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_closing,(new cljs.core.List(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast),null,(1),null)),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),emit_apply,met,new cljs.core.Symbol(null,"monitor-enter","monitor-enter",-1460737698,null)], 0));

break;
case "monitor-exit":
return collect.cljs$core$IFn$_invoke$arity$variadic(ssa,cloroutine$impl$add_closing,(new cljs.core.List(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast),null,(1),null)),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),emit_apply,met,new cljs.core.Symbol(null,"monitor-exit","monitor-exit",1649308096,null)], 0));

break;
case "fn":
var local = new cljs.core.Keyword(null,"local","local",-1497766724).cljs$core$IFn$_invoke$arity$1(ast);
var cljs_crap = (function (){var temp__5808__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(ast)));
if((temp__5808__auto__ == null)){
return null;
} else {
var t = temp__5808__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742),t], null);
}
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(restore.cljs$core$IFn$_invoke$arity$variadic(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ssa__$1,method){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(add_closing_method(ssa__$1,method),new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cloroutine.impl.conj_vec,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(ssa__$1)));
}),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(local)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(ssa,new cljs.core.Keyword(null,"shadow","shadow",873231803),cloroutine.impl.conj_set,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(local)):ssa),new cljs.core.Keyword(null,"result","result",1415092211)),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(ast)),ssa,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shadow","shadow",873231803)], 0)),new cljs.core.Keyword(null,"result","result",1415092211),(cljs.core.truth_(local)?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cons,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(local)):cljs.core.identity)),new cljs.core.Keyword(null,"result","result",1415092211),emit_apply,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([met,cljs_crap], 0)),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null));

break;
case "reify":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ssa__$1,method){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(add_closing_method(ssa__$1,cljs.core.update.cljs$core$IFn$_invoke$arity$3(method,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"this","this",-611633625).cljs$core$IFn$_invoke$arity$1(method)], null)))),new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cons,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(method))),new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(ssa__$1)));
}),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ssa,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(ast)),new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.partial,cljs.core.list_STAR_,new cljs.core.Symbol("cljs.core","reify","cljs.core/reify",463577556,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tag__GT_symbol,new cljs.core.Keyword(null,"interfaces","interfaces",-171349120).cljs$core$IFn$_invoke$arity$1(ast))));

break;
case "deftype":
var map__43371 = ast;
var map__43371__$1 = cljs.core.__destructure_map(map__43371);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43371__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43371__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43371__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43371__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43371__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(restore.cljs$core$IFn$_invoke$arity$variadic(cloroutine$impl$add_closing(cljs.core.update.cljs$core$IFn$_invoke$arity$4(ssa,new cljs.core.Keyword(null,"shadow","shadow",873231803),cloroutine.impl.into_set,fields),body),ssa,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shadow","shadow",873231803)], 0)),new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.list,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols),fields,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pmasks], 0)));

break;
case "letfn":
var prev = ssa;
var map__43372 = ast;
var map__43372__$1 = cljs.core.__destructure_map(map__43372);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43372__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43372__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__43373 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__43374,p__43375){
var map__43376 = p__43374;
var map__43376__$1 = cljs.core.__destructure_map(map__43376);
var ssa__$1 = map__43376__$1;
var bindings__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43376__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var map__43377 = p__43375;
var map__43377__$1 = cljs.core.__destructure_map(map__43377);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43377__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43377__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cloroutine$impl$add_closing(ssa__$1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(init,new cljs.core.Keyword(null,"local","local",-1497766724))),new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.with_meta,null),new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cloroutine.impl.conj_vec,bindings__$1,name));
}),cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ssa,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"shadow","shadow",873231803),cloroutine.impl.into_set,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177)),bindings),bindings);
var map__43373__$1 = cljs.core.__destructure_map(map__43373);
var ssa__$1 = map__43373__$1;
var bindings__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43373__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return cljs.core.update.cljs$core$IFn$_invoke$arity$6(cljs.core.update.cljs$core$IFn$_invoke$arity$3(restore.cljs$core$IFn$_invoke$arity$variadic(cloroutine$impl$add_closing(ssa__$1,body),prev,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shadow","shadow",873231803)], 0)),new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.list),new cljs.core.Keyword(null,"result","result",1415092211),emit_apply,met,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),bindings__$1);

break;
case "try":
var handled = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cloroutine.impl.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(ssa),new cljs.core.Symbol(null,"exception","exception",1305254463,null)], 0));
}
})();
var map__43378 = cloroutine$impl$add_closing(ssa,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ast));
var map__43378__$1 = cljs.core.__destructure_map(map__43378);
var ssa__$1 = map__43378__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43378__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var map__43379 = restore.cljs$core$IFn$_invoke$arity$variadic(cloroutine$impl$add_closing(cljs.core.update.cljs$core$IFn$_invoke$arity$4(ssa__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803),cloroutine.impl.conj_set,handled),try_handler(ast,handled)),ssa__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shadow","shadow",873231803)], 0));
var map__43379__$1 = cljs.core.__destructure_map(map__43379);
var ssa__$2 = map__43379__$1;
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43379__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var map__43380 = (function (){var temp__5806__auto__ = new cljs.core.Keyword(null,"finally","finally",1589088705).cljs$core$IFn$_invoke$arity$1(ast);
if((temp__5806__auto__ == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ssa__$2,new cljs.core.Keyword(null,"result","result",1415092211));
} else {
var ast__$1 = temp__5806__auto__;
return cloroutine$impl$add_closing(ssa__$2,ast__$1);
}
})();
var map__43380__$1 = cljs.core.__destructure_map(map__43380);
var ssa__$3 = map__43380__$1;
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43380__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ssa__$3,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cloroutine.impl","safe","cloroutine.impl/safe",618880593,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,handled,null,(1),null)),(new cljs.core.List(null,body,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,handler,null,(1),null)),(cljs.core.truth_(finally$)?(new cljs.core.List(null,finally$,null,(1),null)):null)], 0)))),met));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43358__$1)].join('')));

}
});
var restore = (function() { 
var cloroutine$impl$restore__delegate = function (m,p,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){
var temp__5806__auto__ = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(k) : p.call(null,k));
if((temp__5806__auto__ == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
var x = temp__5806__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,x);
}
}),m,ks);
};
var cloroutine$impl$restore = function (m,p,var_args){
var ks = null;
if (arguments.length > 2) {
var G__43702__i = 0, G__43702__a = new Array(arguments.length -  2);
while (G__43702__i < G__43702__a.length) {G__43702__a[G__43702__i] = arguments[G__43702__i + 2]; ++G__43702__i;}
  ks = new cljs.core.IndexedSeq(G__43702__a,0,null);
} 
return cloroutine$impl$restore__delegate.call(this,m,p,ks);};
cloroutine$impl$restore.cljs$lang$maxFixedArity = 2;
cloroutine$impl$restore.cljs$lang$applyTo = (function (arglist__43703){
var m = cljs.core.first(arglist__43703);
arglist__43703 = cljs.core.next(arglist__43703);
var p = cljs.core.first(arglist__43703);
var ks = cljs.core.rest(arglist__43703);
return cloroutine$impl$restore__delegate(m,p,ks);
});
cloroutine$impl$restore.cljs$core$IFn$_invoke$arity$variadic = cloroutine$impl$restore__delegate;
return cloroutine$impl$restore;
})()
;
var add_bindings = (function() { 
var cloroutine$impl$add_bindings__delegate = function (previous,bindings,f,args){
var ssa = previous;
var bindings__$1 = cljs.core.seq(bindings);
var places = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5806__auto__ = bindings__$1;
if((temp__5806__auto__ == null)){
var ssa__$1 = ssa;
var ssa__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ssa__$1,new cljs.core.Keyword(null,"result","result",1415092211),places);
var ssa__$3 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,ssa__$2,args);
return restore(ssa__$3,previous,new cljs.core.Keyword(null,"locals","locals",535295783));
} else {
var vec__43385 = temp__5806__auto__;
var seq__43386 = cljs.core.seq(vec__43385);
var first__43387 = cljs.core.first(seq__43386);
var seq__43386__$1 = cljs.core.next(seq__43386);
var map__43388 = first__43387;
var map__43388__$1 = cljs.core.__destructure_map(map__43388);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43388__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43388__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var bindings__$2 = seq__43386__$1;
var ssa__$1 = ssa;
var ssa__$2 = add_breaking(ssa__$1,init);
var ssa__$3 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(ssa__$2,new cljs.core.Keyword(null,"locals","locals",535295783),cljs.core.assoc,name,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(ssa__$2));
var temp__5806__auto____$1 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(ssa__$3);
if((temp__5806__auto____$1 == null)){
return ssa__$3;
} else {
var place = temp__5806__auto____$1;
var G__43704 = ssa__$3;
var G__43705 = bindings__$2;
var G__43706 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(places,place);
ssa = G__43704;
bindings__$1 = G__43705;
places = G__43706;
continue;
}
}
break;
}
};
var cloroutine$impl$add_bindings = function (previous,bindings,f,var_args){
var args = null;
if (arguments.length > 3) {
var G__43707__i = 0, G__43707__a = new Array(arguments.length -  3);
while (G__43707__i < G__43707__a.length) {G__43707__a[G__43707__i] = arguments[G__43707__i + 3]; ++G__43707__i;}
  args = new cljs.core.IndexedSeq(G__43707__a,0,null);
} 
return cloroutine$impl$add_bindings__delegate.call(this,previous,bindings,f,args);};
cloroutine$impl$add_bindings.cljs$lang$maxFixedArity = 3;
cloroutine$impl$add_bindings.cljs$lang$applyTo = (function (arglist__43708){
var previous = cljs.core.first(arglist__43708);
arglist__43708 = cljs.core.next(arglist__43708);
var bindings = cljs.core.first(arglist__43708);
arglist__43708 = cljs.core.next(arglist__43708);
var f = cljs.core.first(arglist__43708);
var args = cljs.core.rest(arglist__43708);
return cloroutine$impl$add_bindings__delegate(previous,bindings,f,args);
});
cloroutine$impl$add_bindings.cljs$core$IFn$_invoke$arity$variadic = cloroutine$impl$add_bindings__delegate;
return cloroutine$impl$add_bindings;
})()
;
var add_break = (function cloroutine$impl$add_break(ssa,suspend,resume){
return add_place(with_resume(add_block(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(with_place,ssa,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(ssa))),current_block(ssa),cljs.core.cons(suspend,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(ssa))),(new cljs.core.List(null,resume,null,(1),null)));
});
var with_clause_jump = (function cloroutine$impl$with_clause_jump(ssa,origin,value){
return with_transition(ssa,origin,current_block(ssa),cljs.core.PersistentArrayMap.EMPTY,cloroutine.impl.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(ssa),new cljs.core.Symbol(null,"state","state",-348086572,null)], 0)),new cljs.core.Keyword(null,"clauses","clauses",1454841241),value);
});
var emit_js_array = (function cloroutine$impl$emit_js_array(args,meta){
return cljs.core.with_meta(cljs.core.cons(new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),args),meta);
});
var field = (function cloroutine$impl$field(ast){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"m-or-f","m-or-f",-1817813361).cljs$core$IFn$_invoke$arity$1(ast);
}
})())].join(''));
});
var add_many = (function() { 
var cloroutine$impl$add_many__delegate = function (ssa,tag,f,args){
return add_place(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(with_place,ssa,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(ssa)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cloroutine.impl","hint","cloroutine.impl/hint",-2075398011,null),null,(1),null)),(new cljs.core.List(null,tag,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(emit_place,ssa),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ssa),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(ssa)),args),null,(1),null))], 0)))),tag);
};
var cloroutine$impl$add_many = function (ssa,tag,f,var_args){
var args = null;
if (arguments.length > 3) {
var G__43709__i = 0, G__43709__a = new Array(arguments.length -  3);
while (G__43709__i < G__43709__a.length) {G__43709__a[G__43709__i] = arguments[G__43709__i + 3]; ++G__43709__i;}
  args = new cljs.core.IndexedSeq(G__43709__a,0,null);
} 
return cloroutine$impl$add_many__delegate.call(this,ssa,tag,f,args);};
cloroutine$impl$add_many.cljs$lang$maxFixedArity = 3;
cloroutine$impl$add_many.cljs$lang$applyTo = (function (arglist__43710){
var ssa = cljs.core.first(arglist__43710);
arglist__43710 = cljs.core.next(arglist__43710);
var tag = cljs.core.first(arglist__43710);
arglist__43710 = cljs.core.next(arglist__43710);
var f = cljs.core.first(arglist__43710);
var args = cljs.core.rest(arglist__43710);
return cloroutine$impl$add_many__delegate(ssa,tag,f,args);
});
cloroutine$impl$add_many.cljs$core$IFn$_invoke$arity$variadic = cloroutine$impl$add_many__delegate;
return cloroutine$impl$add_many;
})()
;
var case_tests = (function cloroutine$impl$case_tests(p__43392){
var map__43393 = p__43392;
var map__43393__$1 = cljs.core.__destructure_map(map__43393);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43393__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43393__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
if(cljs.core.truth_(tests)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.list,new cljs.core.Keyword(null,"form","form",-1624062471)),tests);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,new cljs.core.Keyword(null,"form","form",-1624062471)),new cljs.core.Keyword(null,"tests","tests",-1041085625)),nodes);
}
});
var add_loop_body = (function cloroutine$impl$add_loop_body(previous,body){
var ssa = previous;
var ssa__$1 = with_default_jump(add_block(ssa),current_block(ssa));
var ssa__$2 = add_breaking(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ssa__$1,new cljs.core.Keyword(null,"loop","loop",-395552849),cljs.core.cons(current_block(ssa__$1),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(ssa__$1))),body);
return restore(ssa__$2,previous,new cljs.core.Keyword(null,"loop","loop",-395552849));
});
var function$ = (function cloroutine$impl$function(ast){
var or__5045__auto__ = new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(ast);
}
});
var add_recur = (function cloroutine$impl$add_recur(p__43394){
var map__43395 = p__43394;
var map__43395__$1 = cljs.core.__destructure_map(map__43395);
var ssa = map__43395__$1;
var vec__43396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43395__$1,new cljs.core.Keyword(null,"loop","loop",-395552849));
var seq__43397 = cljs.core.seq(vec__43396);
var first__43398 = cljs.core.first(seq__43397);
var seq__43397__$1 = cljs.core.next(seq__43397);
var block = first__43398;
var targets = seq__43397__$1;
var places = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43395__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43395__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(with_transition(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(with_place,ssa,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(ssa)),current_block(ssa),block,cljs.core.zipmap(targets,places),cloroutine.impl.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"state","state",-348086572,null)], 0)),new cljs.core.Keyword(null,"default","default",-1987822328)),new cljs.core.Keyword(null,"result","result",1415092211));
});
var with_handler = (function cloroutine$impl$with_handler(p__43399,caught,write){
var map__43400 = p__43399;
var map__43400__$1 = cljs.core.__destructure_map(map__43400);
var ssa = map__43400__$1;
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43400__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ssa__$1,block){
return with_transition(ssa__$1,block,current_block(ssa__$1),write,cloroutine.impl.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"state","state",-348086572,null)], 0)),new cljs.core.Keyword(null,"handler","handler",-195596612));
}),ssa,caught);
});
var collect = (function() { 
var cloroutine$impl$collect__delegate = function (ssa,rf,asts,f,args){
var ssa__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ssa,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.PersistentVector.EMPTY], 0));
var asts__$1 = cljs.core.seq(asts);
while(true){
var temp__5806__auto__ = asts__$1;
if((temp__5806__auto__ == null)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,ssa__$1,args);
} else {
var vec__43408 = temp__5806__auto__;
var seq__43409 = cljs.core.seq(vec__43408);
var first__43410 = cljs.core.first(seq__43409);
var seq__43409__$1 = cljs.core.next(seq__43409);
var ast = first__43410;
var asts__$2 = seq__43409__$1;
var res = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(ssa__$1);
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ssa__$1);
var ssa__$2 = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(ssa__$1,ast) : rf.call(null,ssa__$1,ast));
if(cljs.core.contains_QMARK_(ssa__$2,new cljs.core.Keyword(null,"result","result",1415092211))){
var G__43715 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ssa__$2,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,res)),new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,tag));
var G__43716 = asts__$2;
ssa__$1 = G__43715;
asts__$1 = G__43716;
continue;
} else {
return ssa__$2;
}
}
break;
}
};
var cloroutine$impl$collect = function (ssa,rf,asts,f,var_args){
var args = null;
if (arguments.length > 4) {
var G__43717__i = 0, G__43717__a = new Array(arguments.length -  4);
while (G__43717__i < G__43717__a.length) {G__43717__a[G__43717__i] = arguments[G__43717__i + 4]; ++G__43717__i;}
  args = new cljs.core.IndexedSeq(G__43717__a,0,null);
} 
return cloroutine$impl$collect__delegate.call(this,ssa,rf,asts,f,args);};
cloroutine$impl$collect.cljs$lang$maxFixedArity = 4;
cloroutine$impl$collect.cljs$lang$applyTo = (function (arglist__43718){
var ssa = cljs.core.first(arglist__43718);
arglist__43718 = cljs.core.next(arglist__43718);
var rf = cljs.core.first(arglist__43718);
arglist__43718 = cljs.core.next(arglist__43718);
var asts = cljs.core.first(arglist__43718);
arglist__43718 = cljs.core.next(arglist__43718);
var f = cljs.core.first(arglist__43718);
var args = cljs.core.rest(arglist__43718);
return cloroutine$impl$collect__delegate(ssa,rf,asts,f,args);
});
cloroutine$impl$collect.cljs$core$IFn$_invoke$arity$variadic = cloroutine$impl$collect__delegate;
return cloroutine$impl$collect;
})()
;
var class__GT_symbol = (function cloroutine$impl$class__GT_symbol(c){
return null;
});
var add_closing_method = (function cloroutine$impl$add_closing_method(ssa,p__43411){
var map__43412 = p__43411;
var map__43412__$1 = cljs.core.__destructure_map(map__43412);
var variadic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43412__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43412__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43412__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(restore(add_closing(cljs.core.update.cljs$core$IFn$_invoke$arity$5(ssa,new cljs.core.Keyword(null,"shadow","shadow",873231803),cloroutine.impl.into_set,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177)),params),body),ssa,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.list,(cljs.core.truth_(variadic_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177)),cljs.core.pop(params)),new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.peek(params))], 0)):cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177)),params))));
});
var emit_map = (function cloroutine$impl$emit_map(args,meta){
return cljs.core.with_meta(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args),meta);
});
var ast_meta = (function cloroutine$impl$ast_meta(ast){
return cljs.core.select_keys(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235)], null));
});
var emit_apply = (function() { 
var cloroutine$impl$emit_apply__delegate = function (args,meta,prefixes){
return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(prefixes,args))),meta);
};
var cloroutine$impl$emit_apply = function (args,meta,var_args){
var prefixes = null;
if (arguments.length > 2) {
var G__43719__i = 0, G__43719__a = new Array(arguments.length -  2);
while (G__43719__i < G__43719__a.length) {G__43719__a[G__43719__i] = arguments[G__43719__i + 2]; ++G__43719__i;}
  prefixes = new cljs.core.IndexedSeq(G__43719__a,0,null);
} 
return cloroutine$impl$emit_apply__delegate.call(this,args,meta,prefixes);};
cloroutine$impl$emit_apply.cljs$lang$maxFixedArity = 2;
cloroutine$impl$emit_apply.cljs$lang$applyTo = (function (arglist__43720){
var args = cljs.core.first(arglist__43720);
arglist__43720 = cljs.core.next(arglist__43720);
var meta = cljs.core.first(arglist__43720);
var prefixes = cljs.core.rest(arglist__43720);
return cloroutine$impl$emit_apply__delegate(args,meta,prefixes);
});
cloroutine$impl$emit_apply.cljs$core$IFn$_invoke$arity$variadic = cloroutine$impl$emit_apply__delegate;
return cloroutine$impl$emit_apply;
})()
;
var emit_place = (function cloroutine$impl$emit_place(ssa,tag,place){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cloroutine.impl","hint","cloroutine.impl/hint",-2075398011,null),null,(1),null)),(new cljs.core.List(null,tag,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1((function (){var G__43413 = new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(ssa);
return (place.cljs$core$IFn$_invoke$arity$1 ? place.cljs$core$IFn$_invoke$arity$1(G__43413) : place.call(null,G__43413));
})()),null,(1),null)),(new cljs.core.List(null,place,null,(1),null))], 0))));
});
var constructor$ = (function cloroutine$impl$constructor(p__43414){
var map__43415 = p__43414;
var map__43415__$1 = cljs.core.__destructure_map(map__43415);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43415__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__5045__auto__ = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(class$);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(class$);
}
});
var try_handler = (function cloroutine$impl$try_handler(ast,sym){
if(cljs.core.truth_(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))){
return new cljs.core.Keyword(null,"catch","catch",1038065524).cljs$core$IFn$_invoke$arity$1(ast);
} else {
return (function cloroutine$impl$try_handler_$_rec(catch$,catches){
var temp__5806__auto__ = catches;
if((temp__5806__auto__ == null)){
return catch$;
} else {
var vec__43416 = temp__5806__auto__;
var seq__43417 = cljs.core.seq(vec__43416);
var first__43418 = cljs.core.first(seq__43417);
var seq__43417__$1 = cljs.core.next(seq__43417);
var map__43419 = first__43418;
var map__43419__$1 = cljs.core.__destructure_map(map__43419);
var map__43420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43419__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var map__43420__$1 = cljs.core.__destructure_map(map__43420);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43420__$1,new cljs.core.Keyword(null,"val","val",128701612));
var local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43419__$1,new cljs.core.Keyword(null,"local","local",-1497766724));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43419__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches__$1 = seq__43417__$1;
var then = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(local,new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"local","local",-1497766724),new cljs.core.Keyword(null,"name","name",1843675177),sym], null))], null),new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
var G__43421 = class$;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"java.lang.Throwable","java.lang.Throwable",648042246,null),G__43421)){
return then;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"instance?","instance?",-564591604),new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"local","local",-1497766724),new cljs.core.Keyword(null,"name","name",1843675177),sym], null)], null),new cljs.core.Keyword(null,"then","then",460598070),then,new cljs.core.Keyword(null,"else","else",-1508377146),cloroutine$impl$try_handler_$_rec(catch$,catches__$1)], null);

}
}
})(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"local","local",-1497766724),new cljs.core.Keyword(null,"name","name",1843675177),sym], null)], null),cljs.core.seq(new cljs.core.Keyword(null,"catches","catches",-1478797617).cljs$core$IFn$_invoke$arity$1(ast)));
}
});
var with_default_jump = (function cloroutine$impl$with_default_jump(ssa,origin){
return with_transition(ssa,origin,current_block(ssa),cljs.core.PersistentArrayMap.EMPTY,cloroutine.impl.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(ssa),new cljs.core.Symbol(null,"state","state",-348086572,null)], 0)),new cljs.core.Keyword(null,"default","default",-1987822328));
});
return (function (ssa,ast){
var ssa__$1 = add_breaking(add_block(ssa),ast);
var ssa__$2 = (function (){var temp__5806__auto__ = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(ssa__$1);
if((temp__5806__auto__ == null)){
return ssa__$1;
} else {
var place = temp__5806__auto__;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_in(with_place(ssa__$1,place),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),current_block(ssa__$1),new cljs.core.Keyword(null,"default","default",-1987822328)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),place], null)),new cljs.core.Keyword(null,"result","result",1415092211));
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ssa__$3,block){
return cljs.core.assoc_in(ssa__$3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),block,new cljs.core.Keyword(null,"handler","handler",-195596612)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cloroutine.impl.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(ssa__$3),new cljs.core.Symbol(null,"exception","exception",1305254463,null)], 0)),null,(1),null)))))], null));
}),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ssa__$2,new cljs.core.Keyword(null,"caught","caught",443476795)),new cljs.core.Keyword(null,"caught","caught",443476795).cljs$core$IFn$_invoke$arity$1(ssa__$2));
});
})();
cloroutine.impl.span = (function (){var with_overlap = (function cloroutine$impl$with_overlap(ssa,p1,p2){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ssa,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),p1,new cljs.core.Keyword(null,"overlaps","overlaps",1398230580)], null),cloroutine.impl.conj_set,p2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),p2,new cljs.core.Keyword(null,"overlaps","overlaps",1398230580)], null),cloroutine.impl.conj_set,p1);
});
var backtrack = (function cloroutine$impl$backtrack(p__43432,block,place){
var map__43433 = p__43432;
var map__43433__$1 = cljs.core.__destructure_map(map__43433);
var ssa = map__43433__$1;
var places = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43433__$1,new cljs.core.Keyword(null,"places","places",1043491706));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43433__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var map__43435 = (blocks.cljs$core$IFn$_invoke$arity$1 ? blocks.cljs$core$IFn$_invoke$arity$1(block) : blocks.call(null,block));
var map__43435__$1 = cljs.core.__destructure_map(map__43435);
var heap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43435__$1,new cljs.core.Keyword(null,"heap","heap",1039710192));
var origins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43435__$1,new cljs.core.Keyword(null,"origins","origins",-1970258462));
var ssa__$1 = ssa;
var ssa__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ssa__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),block,new cljs.core.Keyword(null,"heap","heap",1039710192)], null),cloroutine.impl.conj_set,place);
var ssa__$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ssa__$3,overlap){
return with_overlap(ssa__$3,overlap,place);
}),ssa__$2,heap);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ssa__$4,block__$1){
return cloroutine$impl$backtrack(ssa__$4,block__$1,place);
}),ssa__$3,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1((place.cljs$core$IFn$_invoke$arity$1 ? place.cljs$core$IFn$_invoke$arity$1(places) : place.call(null,places)))]),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(place,new cljs.core.Keyword(null,"heap","heap",1039710192),blocks)),origins));
});
var span_block = (function cloroutine$impl$span_block(ssa,block,p__43436){
var map__43437 = p__43436;
var map__43437__$1 = cljs.core.__destructure_map(map__43437);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43437__$1,new cljs.core.Keyword(null,"read","read",1140058661));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ssa__$1,place){
return backtrack(ssa__$1,block,place);
}),ssa,read);
});
return (function (p__43441){
var map__43442 = p__43441;
var map__43442__$1 = cljs.core.__destructure_map(map__43442);
var ssa = map__43442__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43442__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
return cljs.core.reduce_kv(span_block,ssa,blocks);
});
})();
cloroutine.impl.color = (function (){var color_place = (function cloroutine$impl$color_place(p__43460,place){
var map__43461 = p__43460;
var map__43461__$1 = cljs.core.__destructure_map(map__43461);
var ssa = map__43461__$1;
var places = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43461__$1,new cljs.core.Keyword(null,"places","places",1043491706));
var color = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1((place.cljs$core$IFn$_invoke$arity$1 ? place.cljs$core$IFn$_invoke$arity$1(places) : place.call(null,places)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color","color",1011675173),places)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_)),new cljs.core.Keyword(null,"overlaps","overlaps",1398230580).cljs$core$IFn$_invoke$arity$1((place.cljs$core$IFn$_invoke$arity$1 ? place.cljs$core$IFn$_invoke$arity$1(places) : place.call(null,places)))),cljs.core.next(cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
}
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(ssa,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),place,new cljs.core.Keyword(null,"color","color",1011675173)], null),color),new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.max,color);
});
return (function (p__43462){
var map__43463 = p__43462;
var map__43463__$1 = cljs.core.__destructure_map(map__43463);
var ssa = map__43463__$1;
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43463__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43463__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(color_place,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ssa,new cljs.core.Keyword(null,"colors","colors",1157174732),(0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"heap","heap",1039710192),blocks,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cloroutine.impl.sym,prefix,new cljs.core.Symbol(null,"block","block",-1989749559,null))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(blocks))], 0)));
});
})();
cloroutine.impl.emit = (function (){var emit_state_symbol = (function cloroutine$impl$emit_state_symbol(ssa){
return cljs.core.with_meta(cloroutine.impl.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(ssa),new cljs.core.Symbol(null,"state","state",-348086572,null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"objects","objects",-554722035,null)], null));
});
var emit_fetch = (function cloroutine$impl$emit_fetch(ssa,place){
var map__43521 = (function (){var G__43522 = new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(ssa);
return (place.cljs$core$IFn$_invoke$arity$1 ? place.cljs$core$IFn$_invoke$arity$1(G__43522) : place.call(null,G__43522));
})();
var map__43521__$1 = cljs.core.__destructure_map(map__43521);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43521__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43521__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cloroutine.impl","hint","cloroutine.impl/hint",-2075398011,null),null,(1),null)),(new cljs.core.List(null,tag,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",6345791,null),null,(1),null)),(new cljs.core.List(null,emit_state_symbol(ssa),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,color,null,(1),null))], 0)))),null,(1),null))], 0))));
});
var emit_store = (function cloroutine$impl$emit_store(ssa,p__43523){
var vec__43524 = p__43523;
var place = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43524,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43524,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,emit_state_symbol(ssa),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ssa,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),place,new cljs.core.Keyword(null,"color","color",1011675173)], null)),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(value)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cloroutine.impl","hint","cloroutine.impl/hint",-2075398011,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ssa,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),value,new cljs.core.Keyword(null,"tag","tag",-1290361223)], null)),null,(1),null)),(new cljs.core.List(null,value,null,(1),null))], 0)))):null),null,(1),null))], 0))));
});
var emit_jump = (function cloroutine$impl$emit_jump(ssa,origin,p__43527){
var map__43528 = p__43527;
var map__43528__$1 = cljs.core.__destructure_map(map__43528);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43528__$1,new cljs.core.Keyword(null,"block","block",664686210));
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43528__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43528__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__43535 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ssa,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),origin], null));
var map__43535__$1 = cljs.core.__destructure_map(map__43535);
var heap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43535__$1,new cljs.core.Keyword(null,"heap","heap",1039710192));
var bind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43535__$1,new cljs.core.Keyword(null,"bind","bind",-113428417));
var needed = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(ssa,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),block,new cljs.core.Keyword(null,"heap","heap",1039710192)], null),cljs.core.PersistentHashSet.EMPTY);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,emit_state_symbol(ssa),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,block,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(emit_store,ssa),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(needed,cljs.core.key),cljs.core.zipmap(heap,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null))),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(needed,cljs.core.key),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([write,cljs.core.zipmap(bind,bind)], 0))))),(new cljs.core.List(null,state,null,(1),null))], 0))));
});
var emit_block = (function cloroutine$impl$emit_block(p__43542,block){
var map__43543 = p__43542;
var map__43543__$1 = cljs.core.__destructure_map(map__43543);
var ssa = map__43543__$1;
var places = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43543__$1,new cljs.core.Keyword(null,"places","places",1043491706));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43543__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43543__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var map__43544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks,block);
var map__43544__$1 = cljs.core.__destructure_map(map__43544);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43544__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var bind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43544__$1,new cljs.core.Keyword(null,"bind","bind",-113428417));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43544__$1,new cljs.core.Keyword(null,"test","test",577538877));
var clauses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43544__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43544__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43544__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var tests = cljs.core.keys(clauses);
var thens = cljs.core.vals(clauses);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cloroutine.impl","safe","cloroutine.impl/safe",618880593,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cloroutine.impl.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"exception","exception",1305254463,null)], 0)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(emit_fetch,ssa)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([read], 0)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(function cloroutine$impl$emit_block_$_rec(bind__$1){
var vec__43557 = cljs.core.split_with(cljs.core.symbol_QMARK_,bind__$1);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43557,(0),null);
var bind__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43557,(1),null);
var temp__5806__auto__ = cljs.core.seq(items);
if((temp__5806__auto__ == null)){
var temp__5806__auto____$1 = cljs.core.seq(bind__$2);
if((temp__5806__auto____$1 == null)){
var G__43565 = tests;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__43565)){
return emit_jump(ssa,block,default$);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,false], null)], null),G__43565)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emit_jump(ssa,block,default$),null,(1),null)),(new cljs.core.List(null,emit_jump(ssa,block,cljs.core.first(thens)),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","case","cljs.core/case",-1674122212,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(emit_jump,ssa,block),thens)),(new cljs.core.List(null,emit_jump(ssa,block,default$),null,(1),null))], 0))));

}
}
} else {
var vec__43566 = temp__5806__auto____$1;
var seq__43567 = cljs.core.seq(vec__43566);
var first__43568 = cljs.core.first(seq__43567);
var seq__43567__$1 = cljs.core.next(seq__43567);
var items__$1 = first__43568;
var bind__$3 = seq__43567__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init","init",-1875481434),places),items__$1)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cloroutine$impl$emit_block_$_rec(bind__$3),null,(1),null))], 0))));
}
} else {
var items__$1 = temp__5806__auto__;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init","init",-1875481434),places),items__$1)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cloroutine$impl$emit_block_$_rec(bind__$2),null,(1),null))], 0))));
}
})(bind),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emit_jump(ssa,block,handler),null,(1),null))], 0))));
});
return (function (p__43571){
var map__43572 = p__43571;
var map__43572__$1 = cljs.core.__destructure_map(map__43572);
var ssa = map__43572__$1;
var colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43572__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43572__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43572__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","letfn","cljs.core/letfn",-874326064,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
return (new cljs.core.List(null,block,(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloroutine.impl.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"state","state",-348086572,null)], 0))], null),(new cljs.core.List(null,emit_block(ssa,block),null,(1),null)),(2),null)),(3),null));
}),cljs.core.keys(blocks)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cloroutine.impl","coroutine","cloroutine.impl/coroutine",1807202868,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","doto","cljs.core/doto",-1284816239,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","object-array","cljs.core/object-array",613323432,null),null,(1),null)),(new cljs.core.List(null,(colors + (1)),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cloroutine.impl.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"block","block",-1989749559,null),(0)], 0)),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0))));
});
})();
cloroutine.impl.compile = (function cloroutine$impl$compile(prefix,breaks,env,form){
var G__43586 = (function (){var G__43588 = (function (){var G__43593 = (function (){var G__43594 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),prefix,new cljs.core.Keyword(null,"breaks","breaks",1602244677),cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cloroutine.impl.var_name,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cloroutine.impl.analyze,env)),cljs.core.keys(breaks)),cljs.core.vals(breaks))], null);
var G__43595 = cloroutine.impl.analyze(env,form);
return (cloroutine.impl.ssa.cljs$core$IFn$_invoke$arity$2 ? cloroutine.impl.ssa.cljs$core$IFn$_invoke$arity$2(G__43594,G__43595) : cloroutine.impl.ssa.call(null,G__43594,G__43595));
})();
return (cloroutine.impl.span.cljs$core$IFn$_invoke$arity$1 ? cloroutine.impl.span.cljs$core$IFn$_invoke$arity$1(G__43593) : cloroutine.impl.span.call(null,G__43593));
})();
return (cloroutine.impl.color.cljs$core$IFn$_invoke$arity$1 ? cloroutine.impl.color.cljs$core$IFn$_invoke$arity$1(G__43588) : cloroutine.impl.color.call(null,G__43588));
})();
return (cloroutine.impl.emit.cljs$core$IFn$_invoke$arity$1 ? cloroutine.impl.emit.cljs$core$IFn$_invoke$arity$1(G__43586) : cloroutine.impl.emit.call(null,G__43586));
});

//# sourceMappingURL=cloroutine.impl.js.map
