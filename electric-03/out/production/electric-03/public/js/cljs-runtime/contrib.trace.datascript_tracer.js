goog.provide('contrib.trace.datascript_tracer');
contrib.trace.datascript_tracer.ds_schema = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("contrib.trace","point-id","contrib.trace/point-id",-326308928),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("contrib.trace","trace-id","contrib.trace/trace-id",493536417),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("contrib.trace","traces","contrib.trace/traces",933611772),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null)], null);
contrib.trace.datascript_tracer.ds_listener = (function contrib$trace$datascript_tracer$ds_listener(conn){
return (function() {
var G__39738 = null;
var G__39738__1 = (function (point){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [point], null));
});
var G__39738__2 = (function (__GT_point_id,trace){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("contrib.trace","point-id","contrib.trace/point-id",-326308928),__GT_point_id,new cljs.core.Keyword("contrib.trace","traces","contrib.trace/traces",933611772),new cljs.core.Keyword("contrib.trace","trace-id","contrib.trace/trace-id",493536417).cljs$core$IFn$_invoke$arity$1(trace)], null),(function (){var G__39722 = trace;
if((new cljs.core.Keyword("contrib.trace","v","contrib.trace/v",-1803736045).cljs$core$IFn$_invoke$arity$1(trace) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39722,new cljs.core.Keyword("contrib.trace","v","contrib.trace/v",-1803736045),new cljs.core.Keyword("contrib.trace.datascript-tracer","nil","contrib.trace.datascript-tracer/nil",895239998));
} else {
return G__39722;
}
})()], null));
});
G__39738 = function(__GT_point_id,trace){
switch(arguments.length){
case 1:
return G__39738__1.call(this,__GT_point_id);
case 2:
return G__39738__2.call(this,__GT_point_id,trace);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39738.cljs$core$IFn$_invoke$arity$1 = G__39738__1;
G__39738.cljs$core$IFn$_invoke$arity$2 = G__39738__2;
return G__39738;
})()
});
contrib.trace.datascript_tracer.de_nil = (function contrib$trace$datascript_tracer$de_nil(v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("contrib.trace.datascript-tracer","nil","contrib.trace.datascript-tracer/nil",895239998),v)){
return null;
} else {
return v;
}
});
contrib.trace.datascript_tracer.textify = (function contrib$trace$datascript_tracer$textify(v){
if((v == null)){
return "nil";
} else {
if((v instanceof hyperfiddle.electric.Pending)){
return "\u231B";
} else {
if((v instanceof Error)){
return cljs.core.ex_message(v);
} else {
return v;

}
}
}
});
contrib.trace.datascript_tracer.default_point_id = (function contrib$trace$datascript_tracer$default_point_id(id,parent){
return contrib.crypt.sha256_base64(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,parent], null));
});
contrib.trace.datascript_tracer.__GT_default_trace_id = (function contrib$trace$datascript_tracer$__GT_default_trace_id(){
var _BANG_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (point_id,_v){
var nx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_cache,cljs.core.update,point_id,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))),point_id);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(point_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nx)].join('');
});
});
contrib.trace.datascript_tracer.ms = (function contrib$trace$datascript_tracer$ms(_){
return Date.now();
});
contrib.trace.datascript_tracer.ds_get = (function contrib$trace$datascript_tracer$ds_get(e,k,db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,e) : datascript.core.entity.call(null,db,e)),k);
});
contrib.trace.datascript_tracer.children = (function contrib$trace$datascript_tracer$children(parent_id,db){
return cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1((function (){var G__39723 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?trace","?trace",14463267,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?trace","?trace",14463267,null),new cljs.core.Keyword("contrib.trace","parent","contrib.trace/parent",-118975467),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null)], null)], null);
var G__39724 = db;
var G__39725 = parent_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__39723,G__39724,G__39725) : datascript.core.q.call(null,G__39723,G__39724,G__39725));
})()));
});
contrib.trace.datascript_tracer.__GT_traces = (function contrib$trace$datascript_tracer$__GT_traces(point,db){
return cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1((function (){var G__39726 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?point","?point",1419199820,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?point","?point",1419199820,null),new cljs.core.Keyword("contrib.trace","traces","contrib.trace/traces",933611772),new cljs.core.Symbol(null,"?tid","?tid",-69626177,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("contrib.trace","trace-id","contrib.trace/trace-id",493536417),new cljs.core.Symbol(null,"?tid","?tid",-69626177,null)], null)], null);
var G__39727 = db;
var G__39728 = point;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__39726,G__39727,G__39728) : datascript.core.q.call(null,G__39726,G__39727,G__39728));
})()));
});
contrib.trace.datascript_tracer.__GT_latest = (function contrib$trace$datascript_tracer$__GT_latest(traces,_db){
return cljs.core.peek(traces);
});
contrib.trace.datascript_tracer.next_measure_state = (function contrib$trace$datascript_tracer$next_measure_state(p__39730,id){
var map__39731 = p__39730;
var map__39731__$1 = cljs.core.__destructure_map(map__39731);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39731__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39731__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var G__39732 = status;
var G__39732__$1 = (((G__39732 instanceof cljs.core.Keyword))?G__39732.fqn:null);
switch (G__39732__$1) {
case "measured":
case "idle":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"began","began",-1662943309),new cljs.core.Keyword(null,"start","start",-355208981),id], null);

break;
case "began":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"measured","measured",566232064),new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),id], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39732__$1)].join('')));

}
});
contrib.trace.datascript_tracer.__GT_origin = (function contrib$trace$datascript_tracer$__GT_origin(db){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.min,contrib.trace.datascript_tracer.ms(null),(function (){var G__39733 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?stamp","?stamp",-463211993,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("contrib.trace","stamp","contrib.trace/stamp",-1179662282),new cljs.core.Symbol(null,"?stamp","?stamp",-463211993,null)], null)], null);
var G__39734 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__39733,G__39734) : datascript.core.q.call(null,G__39733,G__39734));
})());
});
contrib.trace.datascript_tracer.scroll_to_end = (function contrib$trace$datascript_tracer$scroll_to_end(node,_db){
return (node.scrollLeft = node.scrollWidth);
});
contrib.trace.datascript_tracer.time_str = (function contrib$trace$datascript_tracer$time_str(ms){
if((ms > (1000))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.math.round((ms / (10))) / (100))),"s"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ms),"ms"].join('');
}
});
contrib.trace.datascript_tracer.measure_distance = (function contrib$trace$datascript_tracer$measure_distance(start,end,db){
return cljs.core.abs((contrib.trace.datascript_tracer.ds_get(start,new cljs.core.Keyword("contrib.trace","stamp","contrib.trace/stamp",-1179662282),db) - contrib.trace.datascript_tracer.ds_get(end,new cljs.core.Keyword("contrib.trace","stamp","contrib.trace/stamp",-1179662282),db)));
});
contrib.trace.datascript_tracer.calculate_history_container_offset = (function contrib$trace$datascript_tracer$calculate_history_container_offset(origin,pixel_secs,db){
return cljs.core.quot(((cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,(function (){var G__39736 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?stamp","?stamp",-463211993,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("contrib.trace","stamp","contrib.trace/stamp",-1179662282),new cljs.core.Symbol(null,"?stamp","?stamp",-463211993,null)], null)], null);
var G__39737 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__39736,G__39737) : datascript.core.q.call(null,G__39736,G__39737));
})()) - origin) * pixel_secs),(1000));
});

//# sourceMappingURL=contrib.trace.datascript_tracer.js.map
