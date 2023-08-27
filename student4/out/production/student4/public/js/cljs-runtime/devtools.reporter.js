goog.provide('devtools.reporter');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31701 = arguments.length;
var i__5770__auto___31702 = (0);
while(true){
if((i__5770__auto___31702 < len__5769__auto___31701)){
args__5775__auto__.push((arguments[i__5770__auto___31702]));

var G__31703 = (i__5770__auto___31702 + (1));
i__5770__auto___31702 = G__31703;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__31662){
var vec__31663 = p__31662;
var context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31663,(0),null);
var footer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31663,(1),null);
var console__$1 = devtools.context.get_console.call(null);
try{var message = (((e instanceof Error))?(function (){var or__5045__auto__ = e.message;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",devtools.util.get_lib_info(),(cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):"."),"\n\n"].join('');
var footer_msg = (((!((footer == null))))?footer:["\n\n","---\n","Please report the issue here: ",devtools.reporter.issues_url].join(''));
var details = [context_msg,e,footer_msg];
var group_collapsed = (console__$1["groupCollapsed"]);
var log = (console__$1["log"]);
var group_end = (console__$1["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(console__$1,header);

log.apply(console__$1,details);

return group_end.call(console__$1);
}catch (e31667){var e__$1 = e31667;
return console__$1.error("FATAL: report-internal-error! failed",e__$1);
}}));

(devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq31653){
var G__31654 = cljs.core.first(seq31653);
var seq31653__$1 = cljs.core.next(seq31653);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31654,seq31653__$1);
}));


//# sourceMappingURL=devtools.reporter.js.map
