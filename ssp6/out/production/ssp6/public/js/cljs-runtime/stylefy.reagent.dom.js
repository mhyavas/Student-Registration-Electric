goog.provide('stylefy.reagent.dom');
stylefy.reagent.dom.styles_in_dom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
stylefy.reagent.dom.dom_update_requested_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
stylefy.reagent.dom.styles_as_css = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
stylefy.reagent.dom.keyframes_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
stylefy.reagent.dom.font_faces_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.reagent.dom.custom_tags_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.reagent.dom.custom_classes_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.reagent.dom.style_by_hash = (function stylefy$reagent$dom$style_by_hash(style_hash){
if(cljs.core.truth_(style_hash)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.reagent.dom.styles_as_css),style_hash);
} else {
return null;
}
});
stylefy.reagent.dom.update_style_tags_BANG_ = (function stylefy$reagent$dom$update_style_tags_BANG_(node_stylefy,node_stylefy_constant){
var styles_in_css = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"css","css",1135045163),stylefy.reagent.dom.style_by_hash),cljs.core.keys(cljs.core.deref(stylefy.reagent.dom.styles_as_css)));
var keyframes_in_css = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.vals(cljs.core.deref(stylefy.reagent.dom.keyframes_in_use)));
var font_faces_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.deref(stylefy.reagent.dom.font_faces_in_use));
var custom_tags_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.deref(stylefy.reagent.dom.custom_tags_in_use));
var custom_classes_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.deref(stylefy.reagent.dom.custom_classes_in_use));
var new_style_constant_css = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(font_faces_in_use,keyframes_in_css,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([custom_tags_in_use,custom_classes_in_use], 0)));
var new_style_css = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,styles_in_css);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dommy.core.text(node_stylefy_constant),new_style_constant_css)){
} else {
dommy.core.set_text_BANG_(node_stylefy_constant,new_style_constant_css);
}

return dommy.core.set_text_BANG_(node_stylefy,new_style_css);
});
stylefy.reagent.dom.mark_all_styles_added_in_dom_BANG_ = (function stylefy$reagent$dom$mark_all_styles_added_in_dom_BANG_(){
var seq__48150 = cljs.core.seq(cljs.core.keys(cljs.core.deref(stylefy.reagent.dom.styles_in_dom)));
var chunk__48151 = null;
var count__48152 = (0);
var i__48153 = (0);
while(true){
if((i__48153 < count__48152)){
var style_hash = chunk__48151.cljs$core$IIndexed$_nth$arity$2(null,i__48153);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.reagent.dom.styles_in_dom),style_hash),true);


var G__48332 = seq__48150;
var G__48333 = chunk__48151;
var G__48334 = count__48152;
var G__48335 = (i__48153 + (1));
seq__48150 = G__48332;
chunk__48151 = G__48333;
count__48152 = G__48334;
i__48153 = G__48335;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48150);
if(temp__5804__auto__){
var seq__48150__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48150__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48150__$1);
var G__48338 = cljs.core.chunk_rest(seq__48150__$1);
var G__48339 = c__5568__auto__;
var G__48340 = cljs.core.count(c__5568__auto__);
var G__48341 = (0);
seq__48150 = G__48338;
chunk__48151 = G__48339;
count__48152 = G__48340;
i__48153 = G__48341;
continue;
} else {
var style_hash = cljs.core.first(seq__48150__$1);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.reagent.dom.styles_in_dom),style_hash),true);


var G__48342 = cljs.core.next(seq__48150__$1);
var G__48343 = null;
var G__48344 = (0);
var G__48345 = (0);
seq__48150 = G__48342;
chunk__48151 = G__48343;
count__48152 = G__48344;
i__48153 = G__48345;
continue;
}
} else {
return null;
}
}
break;
}
});
stylefy.reagent.dom.update_dom = (function stylefy$reagent$dom$update_dom(){
var node_stylefy = stylefy.impl.dom.get_stylefy_node(stylefy.impl.dom.stylefy_node_id,cljs.core.deref(stylefy.impl.dom.stylefy_base_node),cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));
var node_stylefy_constant = stylefy.impl.dom.get_stylefy_node(stylefy.impl.dom.stylefy_constant_node_id,cljs.core.deref(stylefy.impl.dom.stylefy_base_node),cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));
if(cljs.core.truth_((function (){var and__5043__auto__ = node_stylefy;
if(cljs.core.truth_(and__5043__auto__)){
return node_stylefy_constant;
} else {
return and__5043__auto__;
}
})())){
stylefy.reagent.dom.update_style_tags_BANG_(node_stylefy,node_stylefy_constant);

cljs.core.reset_BANG_(stylefy.reagent.dom.dom_update_requested_QMARK_,false);

try{stylefy.impl.cache.cache_styles.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.reagent.dom.styles_as_css),cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));
}catch (e48165){var e_48346 = e48165;
stylefy.impl.log.warn(["Unable to cache styles, error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48346)].join(''));

stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));

}
return stylefy.reagent.dom.mark_all_styles_added_in_dom_BANG_();
} else {
return stylefy.impl.log.error("stylefy is unable to find the required <style> tags!");
}
});
stylefy.reagent.dom.update_dom_if_requested = (function stylefy$reagent$dom$update_dom_if_requested(){
if(cljs.core.truth_(cljs.core.deref(stylefy.reagent.dom.dom_update_requested_QMARK_))){
return stylefy.reagent.dom.update_dom();
} else {
return null;
}
});
stylefy.reagent.dom.request_asynchronous_dom_update = (function stylefy$reagent$dom$request_asynchronous_dom_update(){
if(cljs.core.truth_(cljs.core.deref(stylefy.impl.state.stylefy_initialised_QMARK_))){
if(cljs.core.truth_(cljs.core.deref(stylefy.reagent.dom.dom_update_requested_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(stylefy.reagent.dom.dom_update_requested_QMARK_,true);

var c__41323__auto___48347 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41324__auto__ = (function (){var switch__41253__auto__ = (function (state_48170){
var state_val_48171 = (state_48170[(1)]);
if((state_val_48171 === (1))){
var inst_48167 = stylefy.reagent.dom.update_dom();
var state_48170__$1 = state_48170;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48170__$1,inst_48167);
} else {
return null;
}
});
return (function() {
var stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__41254__auto__ = null;
var stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__41254__auto____0 = (function (){
var statearr_48176 = [null,null,null,null,null,null,null];
(statearr_48176[(0)] = stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__41254__auto__);

(statearr_48176[(1)] = (1));

return statearr_48176;
});
var stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__41254__auto____1 = (function (state_48170){
while(true){
var ret_value__41255__auto__ = (function (){try{while(true){
var result__41256__auto__ = switch__41253__auto__(state_48170);
if(cljs.core.keyword_identical_QMARK_(result__41256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41256__auto__;
}
break;
}
}catch (e48177){var ex__41257__auto__ = e48177;
var statearr_48178_48349 = state_48170;
(statearr_48178_48349[(2)] = ex__41257__auto__);


if(cljs.core.seq((state_48170[(4)]))){
var statearr_48179_48350 = state_48170;
(statearr_48179_48350[(1)] = cljs.core.first((state_48170[(4)])));

} else {
throw ex__41257__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48351 = state_48170;
state_48170 = G__48351;
continue;
} else {
return ret_value__41255__auto__;
}
break;
}
});
stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__41254__auto__ = function(state_48170){
switch(arguments.length){
case 0:
return stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__41254__auto____0.call(this);
case 1:
return stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__41254__auto____1.call(this,state_48170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__41254__auto__.cljs$core$IFn$_invoke$arity$0 = stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__41254__auto____0;
stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__41254__auto__.cljs$core$IFn$_invoke$arity$1 = stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__41254__auto____1;
return stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__41254__auto__;
})()
})();
var state__41325__auto__ = (function (){var statearr_48180 = f__41324__auto__();
(statearr_48180[(6)] = c__41323__auto___48347);

return statearr_48180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41325__auto__);
}));


return null;
}
} else {
return null;
}
});
stylefy.reagent.dom.load_cache = (function stylefy$reagent$dom$load_cache(){
var temp__5804__auto__ = stylefy.impl.cache.read_cache_value(stylefy.impl.cache.cache_key_styles(cljs.core.deref(stylefy.impl.dom.stylefy_instance_id)));
if(cljs.core.truth_(temp__5804__auto__)){
var cached_styles = temp__5804__auto__;
cljs.core.reset_BANG_(stylefy.reagent.dom.styles_as_css,(function (){var or__5045__auto__ = cached_styles;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return cljs.core.reset_BANG_(stylefy.reagent.dom.styles_in_dom,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48183_SHARP_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__48183_SHARP_,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)]);
}),cljs.core.keys(cached_styles))));
} else {
return null;
}
});
/**
 * Stores the style in an atom. The style is going to be added into the DOM soon.
 */
stylefy.reagent.dom.add_style = (function stylefy$reagent$dom$add_style(p__48186){
var map__48187 = p__48186;
var map__48187__$1 = cljs.core.__destructure_map(map__48187);
var _style = map__48187__$1;
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48187__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48187__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
if(cljs.core.truth_(css)){
} else {
throw (new Error(["Assert failed: ","Unable to save empty style!","\n","css"].join('')));
}

if(cljs.core.truth_(hash)){
} else {
throw (new Error(["Assert failed: ","Unable to save style without hash!","\n","hash"].join('')));
}

var style_to_be_saved = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),css], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylefy.reagent.dom.styles_as_css,cljs.core.assoc,hash,style_to_be_saved);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylefy.reagent.dom.styles_in_dom,cljs.core.assoc,hash,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false));

return stylefy.reagent.dom.request_asynchronous_dom_update();
});
stylefy.reagent.dom.style_in_dom_QMARK_ = (function stylefy$reagent$dom$style_in_dom_QMARK_(style_hash){
return cljs.core.boolean$(cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.reagent.dom.styles_in_dom),style_hash)));
});
stylefy.reagent.dom.add_keyframes = (function stylefy$reagent$dom$add_keyframes(identifier,keyframes_as_css){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylefy.reagent.dom.keyframes_in_use,cljs.core.assoc,identifier,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),keyframes_as_css], null));

stylefy.reagent.dom.request_asynchronous_dom_update();

return null;
});
stylefy.reagent.dom.add_font_face = (function stylefy$reagent$dom$add_font_face(font_faces_as_css){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.reagent.dom.font_faces_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),font_faces_as_css], null));

stylefy.reagent.dom.request_asynchronous_dom_update();

return null;
});
stylefy.reagent.dom.add_tag = (function stylefy$reagent$dom$add_tag(tag_css){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.reagent.dom.custom_tags_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),tag_css], null));

stylefy.reagent.dom.request_asynchronous_dom_update();

return null;
});
stylefy.reagent.dom.add_class = (function stylefy$reagent$dom$add_class(class_as_css){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.reagent.dom.custom_classes_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),class_as_css], null));

stylefy.reagent.dom.request_asynchronous_dom_update();

return null;
});
stylefy.reagent.dom.load_uninitialised_styles = (function stylefy$reagent$dom$load_uninitialised_styles(uninitialised_styles){
var seq__48196_48354 = cljs.core.seq(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(uninitialised_styles));
var chunk__48197_48355 = null;
var count__48198_48356 = (0);
var i__48199_48357 = (0);
while(true){
if((i__48199_48357 < count__48198_48356)){
var tag_48358 = chunk__48197_48355.cljs$core$IIndexed$_nth$arity$2(null,i__48199_48357);
stylefy.reagent.dom.add_tag(tag_48358);


var G__48359 = seq__48196_48354;
var G__48360 = chunk__48197_48355;
var G__48361 = count__48198_48356;
var G__48362 = (i__48199_48357 + (1));
seq__48196_48354 = G__48359;
chunk__48197_48355 = G__48360;
count__48198_48356 = G__48361;
i__48199_48357 = G__48362;
continue;
} else {
var temp__5804__auto___48363 = cljs.core.seq(seq__48196_48354);
if(temp__5804__auto___48363){
var seq__48196_48364__$1 = temp__5804__auto___48363;
if(cljs.core.chunked_seq_QMARK_(seq__48196_48364__$1)){
var c__5568__auto___48365 = cljs.core.chunk_first(seq__48196_48364__$1);
var G__48366 = cljs.core.chunk_rest(seq__48196_48364__$1);
var G__48367 = c__5568__auto___48365;
var G__48368 = cljs.core.count(c__5568__auto___48365);
var G__48369 = (0);
seq__48196_48354 = G__48366;
chunk__48197_48355 = G__48367;
count__48198_48356 = G__48368;
i__48199_48357 = G__48369;
continue;
} else {
var tag_48370 = cljs.core.first(seq__48196_48364__$1);
stylefy.reagent.dom.add_tag(tag_48370);


var G__48371 = cljs.core.next(seq__48196_48364__$1);
var G__48372 = null;
var G__48373 = (0);
var G__48374 = (0);
seq__48196_48354 = G__48371;
chunk__48197_48355 = G__48372;
count__48198_48356 = G__48373;
i__48199_48357 = G__48374;
continue;
}
} else {
}
}
break;
}

var seq__48200_48375 = cljs.core.seq(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(uninitialised_styles));
var chunk__48201_48376 = null;
var count__48202_48377 = (0);
var i__48203_48378 = (0);
while(true){
if((i__48203_48378 < count__48202_48377)){
var class_48379 = chunk__48201_48376.cljs$core$IIndexed$_nth$arity$2(null,i__48203_48378);
stylefy.reagent.dom.add_class(class_48379);


var G__48380 = seq__48200_48375;
var G__48381 = chunk__48201_48376;
var G__48382 = count__48202_48377;
var G__48383 = (i__48203_48378 + (1));
seq__48200_48375 = G__48380;
chunk__48201_48376 = G__48381;
count__48202_48377 = G__48382;
i__48203_48378 = G__48383;
continue;
} else {
var temp__5804__auto___48384 = cljs.core.seq(seq__48200_48375);
if(temp__5804__auto___48384){
var seq__48200_48386__$1 = temp__5804__auto___48384;
if(cljs.core.chunked_seq_QMARK_(seq__48200_48386__$1)){
var c__5568__auto___48387 = cljs.core.chunk_first(seq__48200_48386__$1);
var G__48388 = cljs.core.chunk_rest(seq__48200_48386__$1);
var G__48389 = c__5568__auto___48387;
var G__48390 = cljs.core.count(c__5568__auto___48387);
var G__48391 = (0);
seq__48200_48375 = G__48388;
chunk__48201_48376 = G__48389;
count__48202_48377 = G__48390;
i__48203_48378 = G__48391;
continue;
} else {
var class_48392 = cljs.core.first(seq__48200_48386__$1);
stylefy.reagent.dom.add_class(class_48392);


var G__48393 = cljs.core.next(seq__48200_48386__$1);
var G__48394 = null;
var G__48395 = (0);
var G__48396 = (0);
seq__48200_48375 = G__48393;
chunk__48201_48376 = G__48394;
count__48202_48377 = G__48395;
i__48203_48378 = G__48396;
continue;
}
} else {
}
}
break;
}

var seq__48207_48397 = cljs.core.seq(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012).cljs$core$IFn$_invoke$arity$1(uninitialised_styles));
var chunk__48208_48398 = null;
var count__48209_48399 = (0);
var i__48210_48400 = (0);
while(true){
if((i__48210_48400 < count__48209_48399)){
var vec__48237_48401 = chunk__48208_48398.cljs$core$IIndexed$_nth$arity$2(null,i__48210_48400);
var identifier_48402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48237_48401,(0),null);
var keyframes_48403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48237_48401,(1),null);
stylefy.reagent.dom.add_keyframes(identifier_48402,keyframes_48403);


var G__48404 = seq__48207_48397;
var G__48405 = chunk__48208_48398;
var G__48406 = count__48209_48399;
var G__48407 = (i__48210_48400 + (1));
seq__48207_48397 = G__48404;
chunk__48208_48398 = G__48405;
count__48209_48399 = G__48406;
i__48210_48400 = G__48407;
continue;
} else {
var temp__5804__auto___48408 = cljs.core.seq(seq__48207_48397);
if(temp__5804__auto___48408){
var seq__48207_48409__$1 = temp__5804__auto___48408;
if(cljs.core.chunked_seq_QMARK_(seq__48207_48409__$1)){
var c__5568__auto___48410 = cljs.core.chunk_first(seq__48207_48409__$1);
var G__48411 = cljs.core.chunk_rest(seq__48207_48409__$1);
var G__48412 = c__5568__auto___48410;
var G__48413 = cljs.core.count(c__5568__auto___48410);
var G__48414 = (0);
seq__48207_48397 = G__48411;
chunk__48208_48398 = G__48412;
count__48209_48399 = G__48413;
i__48210_48400 = G__48414;
continue;
} else {
var vec__48240_48415 = cljs.core.first(seq__48207_48409__$1);
var identifier_48416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48240_48415,(0),null);
var keyframes_48417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48240_48415,(1),null);
stylefy.reagent.dom.add_keyframes(identifier_48416,keyframes_48417);


var G__48418 = cljs.core.next(seq__48207_48409__$1);
var G__48419 = null;
var G__48420 = (0);
var G__48421 = (0);
seq__48207_48397 = G__48418;
chunk__48208_48398 = G__48419;
count__48209_48399 = G__48420;
i__48210_48400 = G__48421;
continue;
}
} else {
}
}
break;
}

var seq__48243_48422 = cljs.core.seq(new cljs.core.Keyword(null,"font-face","font-face",-504453235).cljs$core$IFn$_invoke$arity$1(uninitialised_styles));
var chunk__48244_48423 = null;
var count__48245_48424 = (0);
var i__48246_48425 = (0);
while(true){
if((i__48246_48425 < count__48245_48424)){
var font_face_48428 = chunk__48244_48423.cljs$core$IIndexed$_nth$arity$2(null,i__48246_48425);
stylefy.reagent.dom.add_font_face(font_face_48428);


var G__48429 = seq__48243_48422;
var G__48430 = chunk__48244_48423;
var G__48431 = count__48245_48424;
var G__48432 = (i__48246_48425 + (1));
seq__48243_48422 = G__48429;
chunk__48244_48423 = G__48430;
count__48245_48424 = G__48431;
i__48246_48425 = G__48432;
continue;
} else {
var temp__5804__auto___48433 = cljs.core.seq(seq__48243_48422);
if(temp__5804__auto___48433){
var seq__48243_48434__$1 = temp__5804__auto___48433;
if(cljs.core.chunked_seq_QMARK_(seq__48243_48434__$1)){
var c__5568__auto___48435 = cljs.core.chunk_first(seq__48243_48434__$1);
var G__48437 = cljs.core.chunk_rest(seq__48243_48434__$1);
var G__48438 = c__5568__auto___48435;
var G__48439 = cljs.core.count(c__5568__auto___48435);
var G__48440 = (0);
seq__48243_48422 = G__48437;
chunk__48244_48423 = G__48438;
count__48245_48424 = G__48439;
i__48246_48425 = G__48440;
continue;
} else {
var font_face_48442 = cljs.core.first(seq__48243_48434__$1);
stylefy.reagent.dom.add_font_face(font_face_48442);


var G__48444 = cljs.core.next(seq__48243_48434__$1);
var G__48445 = null;
var G__48446 = (0);
var G__48447 = (0);
seq__48243_48422 = G__48444;
chunk__48244_48423 = G__48445;
count__48245_48424 = G__48446;
i__48246_48425 = G__48447;
continue;
}
} else {
}
}
break;
}

var seq__48253 = cljs.core.seq(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(uninitialised_styles));
var chunk__48254 = null;
var count__48255 = (0);
var i__48256 = (0);
while(true){
if((i__48256 < count__48255)){
var style = chunk__48254.cljs$core$IIndexed$_nth$arity$2(null,i__48256);
stylefy.reagent.dom.add_style(style);


var G__48449 = seq__48253;
var G__48450 = chunk__48254;
var G__48451 = count__48255;
var G__48452 = (i__48256 + (1));
seq__48253 = G__48449;
chunk__48254 = G__48450;
count__48255 = G__48451;
i__48256 = G__48452;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48253);
if(temp__5804__auto__){
var seq__48253__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48253__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48253__$1);
var G__48453 = cljs.core.chunk_rest(seq__48253__$1);
var G__48454 = c__5568__auto__;
var G__48455 = cljs.core.count(c__5568__auto__);
var G__48456 = (0);
seq__48253 = G__48453;
chunk__48254 = G__48454;
count__48255 = G__48455;
i__48256 = G__48456;
continue;
} else {
var style = cljs.core.first(seq__48253__$1);
stylefy.reagent.dom.add_style(style);


var G__48457 = cljs.core.next(seq__48253__$1);
var G__48458 = null;
var G__48459 = (0);
var G__48460 = (0);
seq__48253 = G__48457;
chunk__48254 = G__48458;
count__48255 = G__48459;
i__48256 = G__48460;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {stylefy.impl.dom.Dom}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
stylefy.reagent.dom.ReagentDom = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k48273,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__48302 = k48273;
switch (G__48302) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48273,else__5346__auto__);

}
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__48304){
var vec__48306 = p__48304;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48306,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48306,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#stylefy.reagent.dom.ReagentDom{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48272){
var self__ = this;
var G__48272__$1 = this;
return (new cljs.core.RecordIter((0),G__48272__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new stylefy.reagent.dom.ReagentDom(self__.__meta,self__.__extmap,self__.__hash));
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-281597602 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48275,other48276){
var self__ = this;
var this48275__$1 = this;
return (((!((other48276 == null)))) && ((((this48275__$1.constructor === other48276.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48275__$1.__extmap,other48276.__extmap)))));
}));

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$ = cljs.core.PROTOCOL_SENTINEL);

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$add_tag$arity$2 = (function (this$,tag_as_css){
var self__ = this;
var this$__$1 = this;
return stylefy.reagent.dom.add_tag(tag_as_css);
}));

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$add_style$arity$2 = (function (this$,style){
var self__ = this;
var this$__$1 = this;
return stylefy.reagent.dom.add_style(style);
}));

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$style_in_dom_QMARK_$arity$2 = (function (this$,style_hash){
var self__ = this;
var this$__$1 = this;
return stylefy.reagent.dom.style_in_dom_QMARK_(style_hash);
}));

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$add_font_face$arity$2 = (function (this$,font_face_as_css){
var self__ = this;
var this$__$1 = this;
return stylefy.reagent.dom.add_font_face(font_face_as_css);
}));

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$load_cache$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return stylefy.reagent.dom.load_cache();
}));

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$add_keyframes$arity$3 = (function (this$,identifier,keyframes_as_css){
var self__ = this;
var this$__$1 = this;
return stylefy.reagent.dom.add_keyframes(identifier,keyframes_as_css);
}));

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$update_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return stylefy.reagent.dom.update_dom();
}));

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$update_dom_if_needed$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return stylefy.reagent.dom.update_dom_if_requested();
}));

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$load_uninitialised_styles$arity$2 = (function (this$,uninitialised_styles){
var self__ = this;
var this$__$1 = this;
return stylefy.reagent.dom.load_uninitialised_styles(uninitialised_styles);
}));

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$style_by_hash$arity$2 = (function (this$,style_hash){
var self__ = this;
var this$__$1 = this;
return stylefy.reagent.dom.style_by_hash(style_hash);
}));

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$add_class$arity$2 = (function (this$,class_as_css){
var self__ = this;
var this$__$1 = this;
return stylefy.reagent.dom.add_class(class_as_css);
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new stylefy.reagent.dom.ReagentDom(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k48273){
var self__ = this;
var this__5350__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k48273);
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__48272){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__48321 = cljs.core.keyword_identical_QMARK_;
var expr__48322 = k__5352__auto__;
return (new stylefy.reagent.dom.ReagentDom(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__48272),null));
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__48272){
var self__ = this;
var this__5342__auto____$1 = this;
return (new stylefy.reagent.dom.ReagentDom(G__48272,self__.__extmap,self__.__hash));
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(stylefy.reagent.dom.ReagentDom.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(stylefy.reagent.dom.ReagentDom.cljs$lang$type = true);

(stylefy.reagent.dom.ReagentDom.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"stylefy.reagent.dom/ReagentDom",null,(1),null));
}));

(stylefy.reagent.dom.ReagentDom.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"stylefy.reagent.dom/ReagentDom");
}));

/**
 * Positional factory function for stylefy.reagent.dom/ReagentDom.
 */
stylefy.reagent.dom.__GT_ReagentDom = (function stylefy$reagent$dom$__GT_ReagentDom(){
return (new stylefy.reagent.dom.ReagentDom(null,null,null));
});

/**
 * Factory function for stylefy.reagent.dom/ReagentDom, taking a map of keywords to field values.
 */
stylefy.reagent.dom.map__GT_ReagentDom = (function stylefy$reagent$dom$map__GT_ReagentDom(G__48283){
var extmap__5385__auto__ = (function (){var G__48325 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__48283);
if(cljs.core.record_QMARK_(G__48283)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48325);
} else {
return G__48325;
}
})();
return (new stylefy.reagent.dom.ReagentDom(null,cljs.core.not_empty(extmap__5385__auto__),null));
});


//# sourceMappingURL=stylefy.reagent.dom.js.map
