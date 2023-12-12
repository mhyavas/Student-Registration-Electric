goog.provide('app.customer');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$slate$dist$index=shadow.js.require("module$node_modules$slate$dist$index", {});
var module$node_modules$slate_react$dist$index=shadow.js.require("module$node_modules$slate_react$dist$index", {});
var module$node_modules$react_awesome_button$dist$index=shadow.js.require("module$node_modules$react_awesome_button$dist$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
var module$node_modules$react_csv$index=shadow.js.require("module$node_modules$react_csv$index", {});
/**
 * See https://reactjs.org/docs/react-dom-client.html#createroot
 */
app.customer.create_root = (function app$customer$create_root(var_args){
var G__59100 = arguments.length;
switch (G__59100) {
case 1:
return app.customer.create_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.customer.create_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.customer.create_root.cljs$core$IFn$_invoke$arity$1 = (function (node){
return app.customer.create_root.cljs$core$IFn$_invoke$arity$2(node,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()));
}));

(app.customer.create_root.cljs$core$IFn$_invoke$arity$2 = (function (node,id_prefix){
return module$node_modules$react_dom$client.createRoot(node,({"identifierPrefix": id_prefix}));
}));

(app.customer.create_root.cljs$lang$maxFixedArity = 2);

app.customer.render = (function app$customer$render(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59115 = arguments.length;
var i__5770__auto___59116 = (0);
while(true){
if((i__5770__auto___59116 < len__5769__auto___59115)){
args__5775__auto__.push((arguments[i__5770__auto___59116]));

var G__59117 = (i__5770__auto___59116 + (1));
i__5770__auto___59116 = G__59117;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return app.customer.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(app.customer.render.cljs$core$IFn$_invoke$arity$variadic = (function (root,args){
return root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198)], null),args)));
}));

(app.customer.render.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.customer.render.cljs$lang$applyTo = (function (seq59101){
var G__59102 = cljs.core.first(seq59101);
var seq59101__$1 = cljs.core.next(seq59101);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59102,seq59101__$1);
}));

app.customer._BANG_state_project = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"selected-user","selected-user",1386448928),new cljs.core.Keyword("msg","reply","msg/reply",1144482656),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword(null,"admin-user-selection","admin-user-selection",1447156974),new cljs.core.Keyword("msg","author","msg/author",2111795119),new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"login-credentials","login-credentials",925412435),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"clicker","clicker",-1098167819),new cljs.core.Keyword(null,"selected-company","selected-company",1175494517)],["",(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(0),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"delete","delete",-1768633620),false,new cljs.core.Keyword(null,"edit","edit",-1641834166),false,new cljs.core.Keyword(null,"create","create",-1301499256),false,new cljs.core.Keyword(null,"message","message",-406056002),""], null),cljs.core.PersistentVector.EMPTY,"",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"company","company",-340475075),"",new cljs.core.Keyword(null,"password","password",417022471),""], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-name","user-name",1302913545),"",new cljs.core.Keyword(null,"password","password",417022471),"",new cljs.core.Keyword(null,"login-message","login-message",1965592976),""], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"inactive","inactive",-306247616),new cljs.core.Keyword(null,"create-date","create-date",-131247136),"",new cljs.core.Keyword(null,"description","description",-1428560544),"",new cljs.core.Keyword(null,"types","types",590030639),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"customer","customer",1742966319),"",new cljs.core.Keyword(null,"author","author",2111686192),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"project-detail","project-detail",-346323605),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"click","click",1912301393),false], null),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"click","click",1912301393),false], null)], null),""]));
app.customer.set_username_BANG_ = (function app$customer$set_username_BANG_(name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.customer._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-credentials","login-credentials",925412435),new cljs.core.Keyword(null,"user-name","user-name",1302913545)], null),name);
});
app.customer.set_password_BANG_ = (function app$customer$set_password_BANG_(password){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.customer._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-credentials","login-credentials",925412435),new cljs.core.Keyword(null,"password","password",417022471)], null),password);
});
app.customer.set_company_BANG_ = (function app$customer$set_company_BANG_(name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.customer._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-company","selected-company",1175494517)], null),name);
});
app.customer.set_project_title_BANG_ = (function app$customer$set_project_title_BANG_(title){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.customer._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"title","title",636505583)], null),title);
});
app.customer.set_project_description_BANG_ = (function app$customer$set_project_description_BANG_(description){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.customer._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"description","description",-1428560544)], null),description);
});
app.customer.set_project_types_BANG_ = (function app$customer$set_project_types_BANG_(types){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.customer._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"types","types",590030639)], null),types);
});
app.customer.set_types_BANG_ = (function app$customer$set_types_BANG_(types){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.customer._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"types","types",590030639)], null),types);
});
app.customer.set_author_name_BANG_ = (function app$customer$set_author_name_BANG_(name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.customer._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"name","name",1843675177)], null),name);
});
app.customer.project_table = (function app$customer$project_table(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_data_table_component$default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"allowRowEvents","allowRowEvents",-1878421756),true,new cljs.core.Keyword(null,"onRowClicked","onRowClicked",-686483143),(function (v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.customer._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicker","clicker",-1098167819),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"title","title",636505583)], null),v.title);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.customer._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicker","clicker",-1098167819),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"click","click",1912301393)], null),true);
}),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Title","Title",1956715563),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.title;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Status","Status",-1212030049),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.status;
})], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),data], null)], null);
});
app.customer.project_detail_table = (function app$customer$project_detail_table(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_data_table_component$default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"allowRowEvents","allowRowEvents",-1878421756),true,new cljs.core.Keyword(null,"onRowClicked","onRowClicked",-686483143),(function (v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.customer._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicker","clicker",-1098167819),new cljs.core.Keyword(null,"project-detail","project-detail",-346323605),new cljs.core.Keyword(null,"types","types",590030639)], null),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(v.types));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.customer._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicker","clicker",-1098167819),new cljs.core.Keyword(null,"project-detail","project-detail",-346323605),new cljs.core.Keyword(null,"click","click",1912301393)], null),true);
}),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Title","Title",1956715563),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.title;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Status","Status",-1212030049),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.status;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Create_Date","Create_Date",-1224010798),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.create_date;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Description","Description",-679315496),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.description;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Types","Types",1961476075),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(row.types,/(?=[A-Z])/);
})], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),data], null)], null);
});
app.customer.proposal_table = (function app$customer$proposal_table(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_data_table_component$default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Supplier","Supplier",381802731),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.supplier;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Price","Price",287530481),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.price;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Timestamp","Timestamp",-1103745255),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.timestamp;
})], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),data], null)], null);
});
app.customer.picker = (function app$customer$picker(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_date_picker$default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (v){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(console.log,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
})], null)], null)], null);
});
app.customer.report_table = (function app$customer$report_table(title,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_data_table_component$default,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"allowRowEvents","allowRowEvents",-1878421756),true,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"selectableRows","selectableRows",1768340151),true,new cljs.core.Keyword(null,"onSelectedRowsChange","onSelectedRowsChange",-604792438),(function (v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.customer._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"selected","selected",574897764)], null),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(v.selectedRows));
}),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Title","Title",1956715563),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.title;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Status","Status",-1212030049),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.status;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Create_Date","Create_Date",-1224010798),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.create_date;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Description","Description",-679315496),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.description;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Types","Types",1961476075),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(row.types,/(?=[A-Z])/);
})], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),data], null)], null);
});
app.customer.CSVButton = (function app$customer$CSVButton(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),app.customer.CSVLink,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null)], null);
});
app.customer.reactive_btn = (function app$customer$reactive_btn(action){
var G__59113 = action;
switch (G__59113) {
case "Delete":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),app.customer.ReactiveButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"idleText","idleText",1130426408),"Delete",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.customer._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword(null,"delete","delete",-1768633620)], null),true);
})], null)], null);

break;
case "Edit":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),app.customer.ReactiveButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"yellow",new cljs.core.Keyword(null,"idleText","idleText",1130426408),"Edit",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.customer._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword(null,"edit","edit",-1641834166)], null),true);
})], null)], null);

break;
case "Create":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),app.customer.ReactiveButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"green",new cljs.core.Keyword(null,"idleText","idleText",1130426408),"Create",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.customer._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword(null,"create","create",-1301499256)], null),true);
})], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59113)].join('')));

}
});
app.customer.admin_user_table = (function app$customer$admin_user_table(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_data_table_component$default,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"allowRowEvents","allowRowEvents",-1878421756),true,new cljs.core.Keyword(null,"selectableRows","selectableRows",1768340151),true,new cljs.core.Keyword(null,"onSelectedRowsChange","onSelectedRowsChange",-604792438),(function (v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.customer._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"admin-user-selection","admin-user-selection",1447156974)], null),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(v.selectedRows));
}),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"User","User",837761458),new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.user;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Password","Password",1742147155),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.password;
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Admin","Admin",-1284023093),new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(row.admin);
})], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),data], null)], null);
});

//# sourceMappingURL=app.customer.js.map
