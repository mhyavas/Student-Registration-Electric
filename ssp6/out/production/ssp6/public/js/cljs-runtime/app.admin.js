goog.provide('app.admin');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$slate$dist$index=shadow.js.require("module$node_modules$slate$dist$index", {});
var module$node_modules$slate_react$dist$index=shadow.js.require("module$node_modules$slate_react$dist$index", {});
var module$node_modules$hamburger_react$dist_cjs$index=shadow.js.require("module$node_modules$hamburger_react$dist_cjs$index", {});
var module$node_modules$reactive_button$dist$index_cjs=shadow.js.require("module$node_modules$reactive_button$dist$index_cjs", {});
app.admin._BANG_admin_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"login-credentials","login-credentials",925412435),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-name","user-name",1302913545),"",new cljs.core.Keyword(null,"password","password",417022471),"",new cljs.core.Keyword(null,"login-message","login-message",1965592976),""], null),new cljs.core.Keyword(null,"table-clickers","table-clickers",1623176162),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"supplier","supplier",18255489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"company","company",-340475075),"",new cljs.core.Keyword(null,"click","click",1912301393),false], null),new cljs.core.Keyword(null,"customer","customer",1742966319),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"company","company",-340475075),"",new cljs.core.Keyword(null,"click","click",1912301393),false], null),new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"company","company",-340475075),"",new cljs.core.Keyword(null,"project-title","project-title",1994600693),"",new cljs.core.Keyword(null,"click","click",1912301393),false], null),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"company","company",-340475075),"",new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"click","click",1912301393),false], null)], null),new cljs.core.Keyword(null,"menu","menu",352255198),false,new cljs.core.Keyword(null,"project-company","project-company",-785990133),"",new cljs.core.Keyword(null,"proposal-company","proposal-company",975443480),"",new cljs.core.Keyword(null,"admin-login","admin-login",799031415),false,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edit","edit",-1641834166),false,new cljs.core.Keyword(null,"delete","delete",-1768633620),false], null)], null));
app.admin.supplier_table = (function app$admin$supplier_table(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_data_table_component$default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"allowRowEvents","allowRowEvents",-1878421756),true,new cljs.core.Keyword(null,"onRowClicked","onRowClicked",-686483143),(function (v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.admin._BANG_admin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-clickers","table-clickers",1623176162),new cljs.core.Keyword(null,"supplier","supplier",18255489),new cljs.core.Keyword(null,"company","company",-340475075)], null),v.company);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.admin._BANG_admin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-clickers","table-clickers",1623176162),new cljs.core.Keyword(null,"supplier","supplier",18255489),new cljs.core.Keyword(null,"click","click",1912301393)], null),true);
}),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Company","Company",-1118912948),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.company;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"User","User",837761458),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.user;
})], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),data], null)], null);
});
app.admin.customer_table = (function app$admin$customer_table(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_data_table_component$default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"allowRowEvents","allowRowEvents",-1878421756),true,new cljs.core.Keyword(null,"onRowClicked","onRowClicked",-686483143),(function (v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.admin._BANG_admin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-clickers","table-clickers",1623176162),new cljs.core.Keyword(null,"customer","customer",1742966319),new cljs.core.Keyword(null,"company","company",-340475075)], null),v.company);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.admin._BANG_admin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-clickers","table-clickers",1623176162),new cljs.core.Keyword(null,"customer","customer",1742966319),new cljs.core.Keyword(null,"click","click",1912301393)], null),true);
}),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Company","Company",-1118912948),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.company;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"User","User",837761458),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.user;
})], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),data], null)], null);
});
app.admin.BMenu = (function app$admin$BMenu(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$hamburger_react$dist_cjs$index.Spin,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),"left",new cljs.core.Keyword(null,"onToggle","onToggle",1288160565),(function (v){
if(cljs.core.truth_(v)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.admin._BANG_admin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu","menu",352255198)], null),true);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.admin._BANG_admin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu","menu",352255198)], null),false);
}
})], null)], null);
});
app.admin.project_table = (function app$admin$project_table(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_data_table_component$default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"allowRowEvents","allowRowEvents",-1878421756),true,new cljs.core.Keyword(null,"onRowClicked","onRowClicked",-686483143),(function (v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.admin._BANG_admin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-clickers","table-clickers",1623176162),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"title","title",636505583)], null),v.title);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.admin._BANG_admin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-clickers","table-clickers",1623176162),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"click","click",1912301393)], null),true);
}),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Title","Title",1956715563),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.title;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Status","Status",-1212030049),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.status;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Create_Date","Create_Date",-1224010798),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.create_date;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Description","Description",-679315496),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.description;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Type","Type",-1483634215),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(row.type,/(?=[A-Z])/);
})], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),data], null)], null);
});
app.admin.proposal_table = (function app$admin$proposal_table(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_data_table_component$default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"allowRowEvents","allowRowEvents",-1878421756),true,new cljs.core.Keyword(null,"onRowClicked","onRowClicked",-686483143),(function (v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.admin._BANG_admin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-clickers","table-clickers",1623176162),new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword(null,"project-title","project-title",1994600693)], null),v.title);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.admin._BANG_admin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-clickers","table-clickers",1623176162),new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword(null,"click","click",1912301393)], null),true);
}),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Title","Title",1956715563),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.title;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Status","Status",-1212030049),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.status;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Create_Date","Create_Date",-1224010798),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.create_date;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Price","Price",287530481),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.price;
})], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),data], null)], null);
});
app.admin.reactive_btn = (function app$admin$reactive_btn(action){
var G__59087 = action;
switch (G__59087) {
case "Delete":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$reactive_button$dist$index_cjs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"idleText","idleText",1130426408),"Delete",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.admin._BANG_admin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword(null,"delete","delete",-1768633620)], null),true);
})], null)], null);

break;
case "Edit":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$reactive_button$dist$index_cjs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"yellow",new cljs.core.Keyword(null,"idleText","idleText",1130426408),"Edit",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.admin._BANG_admin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword(null,"edit","edit",-1641834166)], null),true);
})], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59087)].join('')));

}
});
app.admin.proposal_detail_table = (function app$admin$proposal_detail_table(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_data_table_component$default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"allowRowEvents","allowRowEvents",-1878421756),true,new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Title","Title",1956715563),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.title;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Status","Status",-1212030049),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.status;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Create_Date","Create_Date",-1224010798),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.create_date;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Price","Price",287530481),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.price;
})], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),data], null)], null);
});
app.admin.project_detail_table = (function app$admin$project_detail_table(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_data_table_component$default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"allowRowEvents","allowRowEvents",-1878421756),true,new cljs.core.Keyword(null,"onRowClicked","onRowClicked",-686483143),(function (v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.admin._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicker","clicker",-1098167819),new cljs.core.Keyword(null,"project-detail","project-detail",-346323605),new cljs.core.Keyword(null,"types","types",590030639)], null),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(v.types));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.admin._BANG_state_project,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicker","clicker",-1098167819),new cljs.core.Keyword(null,"project-detail","project-detail",-346323605),new cljs.core.Keyword(null,"click","click",1912301393)], null),true);
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

//# sourceMappingURL=app.admin.js.map
