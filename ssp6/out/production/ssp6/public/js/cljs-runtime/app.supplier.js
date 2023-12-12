goog.provide('app.supplier');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$slate$dist$index=shadow.js.require("module$node_modules$slate$dist$index", {});
var module$node_modules$slate_react$dist$index=shadow.js.require("module$node_modules$slate_react$dist$index", {});
var module$node_modules$react_awesome_button$dist$index=shadow.js.require("module$node_modules$react_awesome_button$dist$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
var module$node_modules$reactive_button$dist$index_cjs=shadow.js.require("module$node_modules$reactive_button$dist$index_cjs", {});
var module$node_modules$$yaireo$ui_switch$dist$Switch_react=shadow.js.require("module$node_modules$$yaireo$ui_switch$dist$Switch_react", {});
app.supplier._BANG_state_supplier = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"selected-user","selected-user",1386448928),new cljs.core.Keyword("msg","reply","msg/reply",1144482656),new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword(null,"admin","admin",-1239101627),new cljs.core.Keyword(null,"admin-user-selection","admin-user-selection",1447156974),new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.Keyword("msg","author","msg/author",2111795119),new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"login-credentials","login-credentials",925412435),new cljs.core.Keyword(null,"selected-supplier","selected-supplier",-2059508492),new cljs.core.Keyword(null,"clicker","clicker",-1098167819),new cljs.core.Keyword(null,"selected-company","selected-company",1175494517),new cljs.core.Keyword(null,"proposal","proposal",142522715)],["",(0),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"delete","delete",-1768633620),false,new cljs.core.Keyword(null,"edit","edit",-1641834166),false,new cljs.core.Keyword(null,"create","create",-1301499256),false,new cljs.core.Keyword(null,"message","message",-406056002),""], null),false,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,"",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"company","company",-340475075),"",new cljs.core.Keyword(null,"password","password",417022471),""], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-name","user-name",1302913545),"",new cljs.core.Keyword(null,"password","password",417022471),"",new cljs.core.Keyword(null,"login-message","login-message",1965592976),""], null),"",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"click","click",1912301393),false], null),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"click","click",1912301393),false], null)], null),"",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"supplier","supplier",18255489),"",new cljs.core.Keyword(null,"price","price",22129180),"",new cljs.core.Keyword(null,"project","project",1124394579),"",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(0)], null)]));
app.supplier.set_supplier = (function app$supplier$set_supplier(name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.supplier._BANG_state_supplier,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-supplier","selected-supplier",-2059508492)], null),name);
});
app.supplier.set_msg_replier = (function app$supplier$set_msg_replier(id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.supplier._BANG_state_supplier,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("msg","reply","msg/reply",1144482656)], null),id);
});
app.supplier.set_author_name_BANG_ = (function app$supplier$set_author_name_BANG_(name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.supplier._BANG_state_supplier,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"name","name",1843675177)], null),name);
});
app.supplier.set_username_BANG_ = (function app$supplier$set_username_BANG_(name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.supplier._BANG_state_supplier,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-credentials","login-credentials",925412435),new cljs.core.Keyword(null,"user-name","user-name",1302913545)], null),name);
});
app.supplier.set_password_BANG_ = (function app$supplier$set_password_BANG_(password){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.supplier._BANG_state_supplier,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-credentials","login-credentials",925412435),new cljs.core.Keyword(null,"password","password",417022471)], null),password);
});
app.supplier.proposal_table = (function app$supplier$proposal_table(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_data_table_component$default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"allowRowEvents","allowRowEvents",-1878421756),true,new cljs.core.Keyword(null,"onRowClicked","onRowClicked",-686483143),(function (v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.supplier._BANG_state_supplier,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicker","clicker",-1098167819),new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword(null,"title","title",636505583)], null),v.title);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.supplier._BANG_state_supplier,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicker","clicker",-1098167819),new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword(null,"click","click",1912301393)], null),true);
}),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Title","Title",1956715563),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.title;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Price","Price",287530481),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.price;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Date","Date",-693674507),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.timestamp;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Customer","Customer",-396226862),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.customer;
})], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),data], null)], null);
});
app.supplier.admin_user_table = (function app$supplier$admin_user_table(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_data_table_component$default,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"allowRowEvents","allowRowEvents",-1878421756),true,new cljs.core.Keyword(null,"selectableRows","selectableRows",1768340151),true,new cljs.core.Keyword(null,"onSelectedRowsChange","onSelectedRowsChange",-604792438),(function (v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.supplier._BANG_state_supplier,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"admin-user-selection","admin-user-selection",1447156974)], null),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(v.selectedRows));
}),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"User","User",837761458),new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.user;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Password","Password",1742147155),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.password;
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Admin","Admin",-1284023093),new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(row.admin);
})], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),data], null)], null);
});
app.supplier.reactive_btn = (function app$supplier$reactive_btn(action){
var G__59094 = action;
switch (G__59094) {
case "Delete":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$reactive_button$dist$index_cjs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"idleText","idleText",1130426408),"Delete",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.supplier._BANG_state_supplier,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword(null,"delete","delete",-1768633620)], null),true);
})], null)], null);

break;
case "Edit":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$reactive_button$dist$index_cjs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"yellow",new cljs.core.Keyword(null,"idleText","idleText",1130426408),"Edit",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.supplier._BANG_state_supplier,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword(null,"edit","edit",-1641834166)], null),true);
})], null)], null);

break;
case "Create":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$reactive_button$dist$index_cjs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"green",new cljs.core.Keyword(null,"idleText","idleText",1130426408),"Create",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.supplier._BANG_state_supplier,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword(null,"create","create",-1301499256)], null),true);
})], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59094)].join('')));

}
});
app.supplier.proposal_table_edit = (function app$supplier$proposal_table_edit(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_data_table_component$default,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"allowRowEvents","allowRowEvents",-1878421756),true,new cljs.core.Keyword(null,"selectableRows","selectableRows",1768340151),true,new cljs.core.Keyword(null,"onRowClicked","onRowClicked",-686483143),(function (v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.supplier._BANG_state_supplier,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicker","clicker",-1098167819),new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword(null,"title","title",636505583)], null),v.title);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.supplier._BANG_state_supplier,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicker","clicker",-1098167819),new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword(null,"click","click",1912301393)], null),true);
}),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Title","Title",1956715563),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.title;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Price","Price",287530481),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.price;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Date","Date",-693674507),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.timestamp;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Customer","Customer",-396226862),new cljs.core.Keyword(null,"selector","selector",762528866),(function (row){
return row.customer;
})], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),data], null)], null);
});
app.supplier.IMG = (function app$supplier$IMG(url,user__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.supplier._BANG_state_supplier,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicker","clicker",-1098167819),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"click","click",1912301393)], null),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.supplier._BANG_state_supplier,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicker","clicker",-1098167819),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"name","name",1843675177)], null),user__$1);
}),new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"width","width",-384071477),(50),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"15px"], null)], null),user__$1], null)], null);
});

//# sourceMappingURL=app.supplier.js.map
