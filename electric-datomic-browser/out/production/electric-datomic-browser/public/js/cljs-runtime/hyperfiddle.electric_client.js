goog.provide('hyperfiddle.electric_client');
/**
 * @define {string}
 */
hyperfiddle.electric_client.VERSION = goog.define("hyperfiddle.electric_client.VERSION","");
hyperfiddle.electric_client.server_url = (function hyperfiddle$electric_client$server_url(){
var url = (new URL(window.location));
var proto = url.protocol;
(url.protocol = (function (){var G__44693 = proto;
switch (G__44693) {
case "http:":
return "ws:";

break;
case "https:":
return "wss:";

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected protocol",proto);

}
})());

url.searchParams.set("HYPERFIDDLE_ELECTRIC_CLIENT_VERSION",hyperfiddle.electric_client.VERSION);

return url.toString();
});
hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = hyperfiddle.electric_client.server_url();
hyperfiddle.electric_client.remove_listeners = (function hyperfiddle$electric_client$remove_listeners(ws){
(ws.onopen = null);

return (ws.onclose = null);
});
hyperfiddle.electric_client.connect = (function hyperfiddle$electric_client$connect(url){
return (function (s,f){
try{var ws = (new WebSocket(url));
(ws.binaryType = "arraybuffer");

(ws.onopen = (function (_){
hyperfiddle.electric_client.remove_listeners(ws);

return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(ws) : s.call(null,ws));
}));

(ws.onclose = (function (_){
hyperfiddle.electric_client.remove_listeners(ws);

return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
}));

return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(WebSocket.CONNECTING,ws.readyState)){
return ws.close();
} else {
return null;
}
});
}catch (e44706){var e = e44706;
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));

return (function (){
return cljs.core.List.EMPTY;
});
}});
});
hyperfiddle.electric_client.wait_for_flush = (function hyperfiddle$electric_client$wait_for_flush(ws){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44716_block_0 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44716_block_0(cr44716_state){
try{(cr44716_state[(0)] = cr44716_block_1);

return cr44716_state;
}catch (e44739){var cr44716_exception = e44739;
(cr44716_state[(0)] = null);

throw cr44716_exception;
}});
var cr44716_block_1 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44716_block_1(cr44716_state){
try{var cr44716_place_0 = (4096);
var cr44716_place_1 = ws;
var cr44716_place_2 = cr44716_place_1.bufferedAmount;
var cr44716_place_3 = (cr44716_place_0 < cr44716_place_2);
var cr44716_place_4 = null;
if(cr44716_place_3){
(cr44716_state[(0)] = cr44716_block_3);

return cr44716_state;
} else {
(cr44716_state[(0)] = cr44716_block_2);

(cr44716_state[(1)] = cr44716_place_4);

return cr44716_state;
}
}catch (e44744){var cr44716_exception = e44744;
(cr44716_state[(0)] = null);

throw cr44716_exception;
}});
var cr44716_block_2 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44716_block_2(cr44716_state){
try{var cr44716_place_5 = null;
(cr44716_state[(0)] = cr44716_block_5);

(cr44716_state[(1)] = cr44716_place_5);

return cr44716_state;
}catch (e44747){var cr44716_exception = e44747;
(cr44716_state[(0)] = null);

(cr44716_state[(1)] = null);

throw cr44716_exception;
}});
var cr44716_block_3 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44716_block_3(cr44716_state){
try{var cr44716_place_6 = missionary.core.sleep;
var cr44716_place_7 = (50);
var cr44716_place_8 = (function (){var G__44755 = cr44716_place_7;
var fexpr__44754 = cr44716_place_6;
return (fexpr__44754.cljs$core$IFn$_invoke$arity$1 ? fexpr__44754.cljs$core$IFn$_invoke$arity$1(G__44755) : fexpr__44754.call(null,G__44755));
})();
(cr44716_state[(0)] = cr44716_block_4);

return missionary.core.park(cr44716_place_8);
}catch (e44749){var cr44716_exception = e44749;
(cr44716_state[(0)] = null);

throw cr44716_exception;
}});
var cr44716_block_4 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44716_block_4(cr44716_state){
try{var cr44716_place_9 = missionary.core.unpark();
(cr44716_state[(0)] = cr44716_block_1);

return cr44716_state;
}catch (e44756){var cr44716_exception = e44756;
(cr44716_state[(0)] = null);

throw cr44716_exception;
}});
var cr44716_block_5 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44716_block_5(cr44716_state){
try{var cr44716_place_4 = (cr44716_state[(1)]);
(cr44716_state[(0)] = null);

(cr44716_state[(1)] = null);

return cr44716_place_4;
}catch (e44757){var cr44716_exception = e44757;
(cr44716_state[(0)] = null);

(cr44716_state[(1)] = null);

throw cr44716_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44758 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__44758[(0)] = cr44716_block_0);

return G__44758;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.wait_for_close = (function hyperfiddle$electric_client$wait_for_close(ws){
return (function (s,f){
(ws.onclose = (function (e){
(ws.onclose = null);

var G__44765 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),e.code,new cljs.core.Keyword(null,"reason","reason",-2070751759),e.reason], null);
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__44765) : s.call(null,G__44765));
}));

return (function (){
if((ws.onclose == null)){
return null;
} else {
(ws.onclose = null);

var G__44766 = (new missionary.Cancelled());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44766) : f.call(null,G__44766));
}
});
});
});
hyperfiddle.electric_client.payload = (function hyperfiddle$electric_client$payload(x){
return x.data;
});
hyperfiddle.electric_client.send_BANG_ = (function hyperfiddle$electric_client$send_BANG_(ws,msg){
var G__44776 = ws;
G__44776.send(msg);

return G__44776;
});
hyperfiddle.electric_client.send_all = (function hyperfiddle$electric_client$send_all(ws,msgs){
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44778_block_0 = (function hyperfiddle$electric_client$send_all_$_cr44778_block_0(cr44778_state){
try{var cr44778_place_0 = hyperfiddle.electric_client.wait_for_flush;
var cr44778_place_1 = hyperfiddle.electric_client.send_BANG_;
var cr44778_place_2 = ws;
var cr44778_place_3 = hyperfiddle.electric.impl.io.encode;
var cr44778_place_4 = (1);
var cr44778_place_5 = msgs;
(cr44778_state[(0)] = cr44778_block_1);

(cr44778_state[(4)] = cr44778_place_0);

(cr44778_state[(1)] = cr44778_place_1);

(cr44778_state[(2)] = cr44778_place_2);

(cr44778_state[(3)] = cr44778_place_3);

return missionary.core.fork(cr44778_place_4,cr44778_place_5);
}catch (e44816){var cr44778_exception = e44816;
(cr44778_state[(0)] = null);

throw cr44778_exception;
}});
var cr44778_block_1 = (function hyperfiddle$electric_client$send_all_$_cr44778_block_1(cr44778_state){
try{var cr44778_place_1 = (cr44778_state[(1)]);
var cr44778_place_2 = (cr44778_state[(2)]);
var cr44778_place_3 = (cr44778_state[(3)]);
var cr44778_place_0 = (cr44778_state[(4)]);
var cr44778_place_6 = missionary.core.unpark();
var cr44778_place_7 = (function (){var G__44825 = cr44778_place_6;
var fexpr__44824 = cr44778_place_3;
return (fexpr__44824.cljs$core$IFn$_invoke$arity$1 ? fexpr__44824.cljs$core$IFn$_invoke$arity$1(G__44825) : fexpr__44824.call(null,G__44825));
})();
var cr44778_place_8 = (function (){var G__44830 = cr44778_place_2;
var G__44831 = cr44778_place_7;
var fexpr__44829 = cr44778_place_1;
return (fexpr__44829.cljs$core$IFn$_invoke$arity$2 ? fexpr__44829.cljs$core$IFn$_invoke$arity$2(G__44830,G__44831) : fexpr__44829.call(null,G__44830,G__44831));
})();
var cr44778_place_9 = (function (){var G__44833 = cr44778_place_8;
var fexpr__44832 = cr44778_place_0;
return (fexpr__44832.cljs$core$IFn$_invoke$arity$1 ? fexpr__44832.cljs$core$IFn$_invoke$arity$1(G__44833) : fexpr__44832.call(null,G__44833));
})();
(cr44778_state[(0)] = cr44778_block_2);

(cr44778_state[(1)] = null);

(cr44778_state[(2)] = null);

(cr44778_state[(3)] = null);

(cr44778_state[(4)] = null);

return missionary.core.park(cr44778_place_9);
}catch (e44821){var cr44778_exception = e44821;
(cr44778_state[(0)] = null);

(cr44778_state[(1)] = null);

(cr44778_state[(2)] = null);

(cr44778_state[(3)] = null);

(cr44778_state[(4)] = null);

throw cr44778_exception;
}});
var cr44778_block_2 = (function hyperfiddle$electric_client$send_all_$_cr44778_block_2(cr44778_state){
try{var cr44778_place_10 = missionary.core.unpark();
(cr44778_state[(0)] = null);

return cr44778_place_10;
}catch (e44836){var cr44778_exception = e44836;
(cr44778_state[(0)] = null);

throw cr44778_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44839 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__44839[(0)] = cr44778_block_0);

return G__44839;
})());
})(),missionary.core.ap_run));
});
/**
 * 
 * server : the server part of the program
 * cb : the callback for incoming messages.
 * msgs : the discrete flow of messages to send, spawned when websocket is connected, cancelled on websocket close.
 * Returns a task producing nil or failing if the websocket was closed before end of reduction.
 */
hyperfiddle.electric_client.connector = (function hyperfiddle$electric_client$connector(server){
return (function (cb,msgs){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44842_block_3 = (function hyperfiddle$electric_client$connector_$_cr44842_block_3(cr44842_state){
try{var cr44842_place_8 = (cr44842_state[(4)]);
var cr44842_place_11 = hyperfiddle.electric_client.send_BANG_;
var cr44842_place_12 = cr44842_place_8;
var cr44842_place_13 = hyperfiddle.electric.impl.io.encode;
var cr44842_place_14 = server;
var cr44842_place_15 = (function (){var G__44931 = cr44842_place_14;
var fexpr__44930 = cr44842_place_13;
return (fexpr__44930.cljs$core$IFn$_invoke$arity$1 ? fexpr__44930.cljs$core$IFn$_invoke$arity$1(G__44931) : fexpr__44930.call(null,G__44931));
})();
var cr44842_place_16 = (function (){var G__44933 = cr44842_place_12;
var G__44934 = cr44842_place_15;
var fexpr__44932 = cr44842_place_11;
return (fexpr__44932.cljs$core$IFn$_invoke$arity$2 ? fexpr__44932.cljs$core$IFn$_invoke$arity$2(G__44933,G__44934) : fexpr__44932.call(null,G__44933,G__44934));
})();
var cr44842_place_17 = cr44842_place_8;
var cr44842_place_18 = cljs.core.comp;
var cr44842_place_19 = cb;
var cr44842_place_20 = hyperfiddle.electric.impl.io.decode;
var cr44842_place_21 = hyperfiddle.electric_client.payload;
var cr44842_place_22 = (function (){var G__44936 = cr44842_place_19;
var G__44937 = cr44842_place_20;
var G__44938 = cr44842_place_21;
var fexpr__44935 = cr44842_place_18;
return (fexpr__44935.cljs$core$IFn$_invoke$arity$3 ? fexpr__44935.cljs$core$IFn$_invoke$arity$3(G__44936,G__44937,G__44938) : fexpr__44935.call(null,G__44936,G__44937,G__44938));
})();
var cr44842_place_23 = (cr44842_place_17.onmessage = cr44842_place_22);
var cr44842_place_24 = missionary.core.race;
var cr44842_place_25 = hyperfiddle.electric_client.send_all;
var cr44842_place_26 = cr44842_place_8;
var cr44842_place_27 = msgs;
var cr44842_place_28 = (function (){var G__44940 = cr44842_place_26;
var G__44941 = cr44842_place_27;
var fexpr__44939 = cr44842_place_25;
return (fexpr__44939.cljs$core$IFn$_invoke$arity$2 ? fexpr__44939.cljs$core$IFn$_invoke$arity$2(G__44940,G__44941) : fexpr__44939.call(null,G__44940,G__44941));
})();
var cr44842_place_29 = hyperfiddle.electric_client.wait_for_close;
var cr44842_place_30 = cr44842_place_8;
var cr44842_place_31 = (function (){var G__44945 = cr44842_place_30;
var fexpr__44944 = cr44842_place_29;
return (fexpr__44944.cljs$core$IFn$_invoke$arity$1 ? fexpr__44944.cljs$core$IFn$_invoke$arity$1(G__44945) : fexpr__44944.call(null,G__44945));
})();
var cr44842_place_32 = (function (){var G__44947 = cr44842_place_28;
var G__44948 = cr44842_place_31;
var fexpr__44946 = cr44842_place_24;
return (fexpr__44946.cljs$core$IFn$_invoke$arity$2 ? fexpr__44946.cljs$core$IFn$_invoke$arity$2(G__44947,G__44948) : fexpr__44946.call(null,G__44947,G__44948));
})();
(cr44842_state[(0)] = cr44842_block_4);

return missionary.core.park(cr44842_place_32);
}catch (e44926){var cr44842_exception = e44926;
(cr44842_state[(0)] = cr44842_block_5);

(cr44842_state[(1)] = cr44842_exception);

return cr44842_state;
}});
var cr44842_block_12 = (function hyperfiddle$electric_client$connector_$_cr44842_block_12(cr44842_state){
try{var cr44842_place_7 = (cr44842_state[(2)]);
(cr44842_state[(0)] = null);

(cr44842_state[(2)] = null);

return cr44842_place_7;
}catch (e44957){var cr44842_exception = e44957;
(cr44842_state[(0)] = null);

(cr44842_state[(2)] = null);

throw cr44842_exception;
}});
var cr44842_block_0 = (function hyperfiddle$electric_client$connector_$_cr44842_block_0(cr44842_state){
try{var cr44842_place_0 = hyperfiddle.electric_client.connect;
var cr44842_place_1 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr44842_place_2 = (function (){var G__44967 = cr44842_place_1;
var fexpr__44966 = cr44842_place_0;
return (fexpr__44966.cljs$core$IFn$_invoke$arity$1 ? fexpr__44966.cljs$core$IFn$_invoke$arity$1(G__44967) : fexpr__44966.call(null,G__44967));
})();
(cr44842_state[(0)] = cr44842_block_1);

return missionary.core.park(cr44842_place_2);
}catch (e44965){var cr44842_exception = e44965;
(cr44842_state[(0)] = null);

throw cr44842_exception;
}});
var cr44842_block_2 = (function hyperfiddle$electric_client$connector_$_cr44842_block_2(cr44842_state){
try{var cr44842_place_3 = (cr44842_state[(1)]);
var cr44842_place_8 = cr44842_place_3;
var cr44842_place_9 = null;
var cr44842_place_10 = false;
(cr44842_state[(0)] = cr44842_block_3);

(cr44842_state[(1)] = null);

(cr44842_state[(4)] = cr44842_place_8);

(cr44842_state[(1)] = cr44842_place_9);

(cr44842_state[(3)] = cr44842_place_10);

return cr44842_state;
}catch (e44979){var cr44842_exception = e44979;
(cr44842_state[(0)] = null);

(cr44842_state[(1)] = null);

(cr44842_state[(2)] = null);

throw cr44842_exception;
}});
var cr44842_block_11 = (function hyperfiddle$electric_client$connector_$_cr44842_block_11(cr44842_state){
try{var cr44842_place_51 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
(cr44842_state[(0)] = cr44842_block_12);

(cr44842_state[(2)] = cr44842_place_51);

return cr44842_state;
}catch (e44983){var cr44842_exception = e44983;
(cr44842_state[(0)] = null);

(cr44842_state[(2)] = null);

throw cr44842_exception;
}});
var cr44842_block_10 = (function hyperfiddle$electric_client$connector_$_cr44842_block_10(cr44842_state){
try{var cr44842_place_9 = (cr44842_state[(1)]);
var cr44842_place_10 = (cr44842_state[(3)]);
var cr44842_place_42 = (cr44842_state[(5)]);
var cr44842_place_50 = (cljs.core.truth_(cr44842_place_10)?(function(){throw cr44842_place_9})():cr44842_place_9);
(cr44842_state[(0)] = cr44842_block_12);

(cr44842_state[(1)] = null);

(cr44842_state[(3)] = null);

(cr44842_state[(5)] = null);

(cr44842_state[(2)] = cr44842_place_50);

return cr44842_state;
}catch (e44984){var cr44842_exception = e44984;
(cr44842_state[(0)] = null);

(cr44842_state[(1)] = null);

(cr44842_state[(3)] = null);

(cr44842_state[(2)] = null);

(cr44842_state[(5)] = null);

throw cr44842_exception;
}});
var cr44842_block_5 = (function hyperfiddle$electric_client$connector_$_cr44842_block_5(cr44842_state){
try{var cr44842_place_9 = (cr44842_state[(1)]);
var cr44842_place_34 = cr44842_place_9;
var cr44842_place_35 = (function(){throw cr44842_place_34})();
(cr44842_state[(0)] = null);

(cr44842_state[(1)] = null);

(cr44842_state[(3)] = null);

(cr44842_state[(2)] = null);

(cr44842_state[(4)] = null);

return null;
}catch (e44985){var cr44842_exception = e44985;
(cr44842_state[(0)] = cr44842_block_6);

(cr44842_state[(3)] = true);

(cr44842_state[(1)] = cr44842_exception);

return cr44842_state;
}});
var cr44842_block_1 = (function hyperfiddle$electric_client$connector_$_cr44842_block_1(cr44842_state){
try{var cr44842_place_3 = missionary.core.unpark();
var cr44842_place_4 = cr44842_place_3;
var cr44842_place_5 = null;
var cr44842_place_6 = (cr44842_place_4 == cr44842_place_5);
var cr44842_place_7 = null;
if(cr44842_place_6){
(cr44842_state[(0)] = cr44842_block_11);

(cr44842_state[(2)] = cr44842_place_7);

return cr44842_state;
} else {
(cr44842_state[(0)] = cr44842_block_2);

(cr44842_state[(1)] = cr44842_place_3);

(cr44842_state[(2)] = cr44842_place_7);

return cr44842_state;
}
}catch (e44989){var cr44842_exception = e44989;
(cr44842_state[(0)] = null);

throw cr44842_exception;
}});
var cr44842_block_9 = (function hyperfiddle$electric_client$connector_$_cr44842_block_9(cr44842_state){
try{var cr44842_place_49 = null;
(cr44842_state[(0)] = cr44842_block_10);

(cr44842_state[(5)] = cr44842_place_49);

return cr44842_state;
}catch (e44990){var cr44842_exception = e44990;
(cr44842_state[(0)] = null);

(cr44842_state[(1)] = null);

(cr44842_state[(3)] = null);

(cr44842_state[(2)] = null);

(cr44842_state[(5)] = null);

throw cr44842_exception;
}});
var cr44842_block_6 = (function hyperfiddle$electric_client$connector_$_cr44842_block_6(cr44842_state){
try{var cr44842_place_8 = (cr44842_state[(4)]);
var cr44842_place_36 = cljs.core._EQ_;
var cr44842_place_37 = WebSocket;
var cr44842_place_38 = cr44842_place_37.CLOSED;
var cr44842_place_39 = cr44842_place_8;
var cr44842_place_40 = cr44842_place_39.readyState;
var cr44842_place_41 = (function (){var G__44993 = cr44842_place_38;
var G__44994 = cr44842_place_40;
var fexpr__44992 = cr44842_place_36;
return (fexpr__44992.cljs$core$IFn$_invoke$arity$2 ? fexpr__44992.cljs$core$IFn$_invoke$arity$2(G__44993,G__44994) : fexpr__44992.call(null,G__44993,G__44994));
})();
var cr44842_place_42 = null;
if(cljs.core.truth_(cr44842_place_41)){
(cr44842_state[(0)] = cr44842_block_9);

(cr44842_state[(4)] = null);

(cr44842_state[(5)] = cr44842_place_42);

return cr44842_state;
} else {
(cr44842_state[(0)] = cr44842_block_7);

(cr44842_state[(5)] = cr44842_place_42);

return cr44842_state;
}
}catch (e44991){var cr44842_exception = e44991;
(cr44842_state[(0)] = null);

(cr44842_state[(1)] = null);

(cr44842_state[(3)] = null);

(cr44842_state[(2)] = null);

(cr44842_state[(4)] = null);

throw cr44842_exception;
}});
var cr44842_block_7 = (function hyperfiddle$electric_client$connector_$_cr44842_block_7(cr44842_state){
try{var cr44842_place_8 = (cr44842_state[(4)]);
var cr44842_place_43 = cr44842_place_8;
var cr44842_place_44 = cr44842_place_43.close();
var cr44842_place_45 = missionary.core.compel;
var cr44842_place_46 = hyperfiddle.electric_client.wait_for_close;
var cr44842_place_47 = (function (){var G__44997 = cr44842_place_46;
var fexpr__44996 = cr44842_place_45;
return (fexpr__44996.cljs$core$IFn$_invoke$arity$1 ? fexpr__44996.cljs$core$IFn$_invoke$arity$1(G__44997) : fexpr__44996.call(null,G__44997));
})();
(cr44842_state[(0)] = cr44842_block_8);

(cr44842_state[(4)] = null);

return missionary.core.park(cr44842_place_47);
}catch (e44995){var cr44842_exception = e44995;
(cr44842_state[(0)] = null);

(cr44842_state[(1)] = null);

(cr44842_state[(3)] = null);

(cr44842_state[(2)] = null);

(cr44842_state[(4)] = null);

(cr44842_state[(5)] = null);

throw cr44842_exception;
}});
var cr44842_block_8 = (function hyperfiddle$electric_client$connector_$_cr44842_block_8(cr44842_state){
try{var cr44842_place_48 = missionary.core.unpark();
(cr44842_state[(0)] = cr44842_block_10);

(cr44842_state[(5)] = cr44842_place_48);

return cr44842_state;
}catch (e44999){var cr44842_exception = e44999;
(cr44842_state[(0)] = null);

(cr44842_state[(1)] = null);

(cr44842_state[(3)] = null);

(cr44842_state[(2)] = null);

(cr44842_state[(5)] = null);

throw cr44842_exception;
}});
var cr44842_block_4 = (function hyperfiddle$electric_client$connector_$_cr44842_block_4(cr44842_state){
try{var cr44842_place_33 = missionary.core.unpark();
(cr44842_state[(0)] = cr44842_block_6);

(cr44842_state[(1)] = cr44842_place_33);

return cr44842_state;
}catch (e45001){var cr44842_exception = e45001;
(cr44842_state[(0)] = cr44842_block_5);

(cr44842_state[(1)] = cr44842_exception);

return cr44842_state;
}});
return cloroutine.impl.coroutine((function (){var G__45003 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__45003[(0)] = cr44842_block_0);

return G__45003;
})());
})(),missionary.core.sp_run);
});
});
hyperfiddle.electric_client.fib_iter = (function hyperfiddle$electric_client$fib_iter(p__45006){
var vec__45007 = p__45006;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45007,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45007,(1),null);
var G__45010 = b;
switch (G__45010) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,(a + b)], null);

}
});
hyperfiddle.electric_client.fib = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.iterate(hyperfiddle.electric_client.fib_iter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)));
hyperfiddle.electric_client.retry_delays = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,(100)),hyperfiddle.electric_client.fib);
hyperfiddle.electric_client.boot_with_retry = (function hyperfiddle$electric_client$boot_with_retry(client,conn){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr45014_block_3 = (function hyperfiddle$electric_client$boot_with_retry_$_cr45014_block_3(cr45014_state){
try{var cr45014_place_51 = missionary.core.unpark();
(cr45014_state[(0)] = cr45014_block_5);

(cr45014_state[(6)] = cr45014_place_51);

return cr45014_state;
}catch (e45365){var cr45014_exception = e45365;
(cr45014_state[(0)] = cr45014_block_4);

(cr45014_state[(6)] = cr45014_exception);

return cr45014_state;
}});
var cr45014_block_6 = (function hyperfiddle$electric_client$boot_with_retry_$_cr45014_block_6(cr45014_state){
try{var cr45014_place_56 = (cr45014_state[(4)]);
var cr45014_place_61 = cr45014_place_56;
var cr45014_place_62 = new cljs.core.Keyword(null,"code","code",1586293142);
var cr45014_place_63 = cr45014_place_61;
var cr45014_place_64 = cr45014_place_62.cljs$core$IFn$_invoke$arity$1(cr45014_place_63);
var cr45014_place_65 = cr45014_place_64;
var cr45014_place_66 = null;
var cr45014_place_67 = (cr45014_place_65 == cr45014_place_66);
var cr45014_place_68 = null;
if(cr45014_place_67){
(cr45014_state[(0)] = cr45014_block_12);

(cr45014_state[(4)] = null);

(cr45014_state[(6)] = cr45014_place_68);

return cr45014_state;
} else {
(cr45014_state[(0)] = cr45014_block_7);

(cr45014_state[(4)] = null);

(cr45014_state[(5)] = cr45014_place_61);

(cr45014_state[(4)] = cr45014_place_64);

(cr45014_state[(6)] = cr45014_place_68);

return cr45014_state;
}
}catch (e45366){var cr45014_exception = e45366;
(cr45014_state[(0)] = null);

(cr45014_state[(3)] = null);

(cr45014_state[(1)] = null);

(cr45014_state[(4)] = null);

(cr45014_state[(2)] = null);

throw cr45014_exception;
}});
var cr45014_block_11 = (function hyperfiddle$electric_client$boot_with_retry_$_cr45014_block_11(cr45014_state){
try{var cr45014_place_72 = (cr45014_state[(4)]);
(cr45014_state[(0)] = cr45014_block_13);

(cr45014_state[(4)] = null);

(cr45014_state[(6)] = cr45014_place_72);

return cr45014_state;
}catch (e45367){var cr45014_exception = e45367;
(cr45014_state[(0)] = null);

(cr45014_state[(6)] = null);

(cr45014_state[(3)] = null);

(cr45014_state[(1)] = null);

(cr45014_state[(2)] = null);

(cr45014_state[(4)] = null);

throw cr45014_exception;
}});
var cr45014_block_7 = (function hyperfiddle$electric_client$boot_with_retry_$_cr45014_block_7(cr45014_state){
try{var cr45014_place_64 = (cr45014_state[(4)]);
var cr45014_place_69 = cr45014_place_64;
var cr45014_place_70 = cr45014_place_69;
var cr45014_place_71 = cr45014_place_70;
var cr45014_place_72 = null;
var G__45369 = cr45014_place_71;
switch (G__45369) {
case (1005):
case (1006):
(cr45014_state[(0)] = cr45014_block_8);

(cr45014_state[(4)] = null);

(cr45014_state[(5)] = null);

(cr45014_state[(4)] = cr45014_place_72);

return cr45014_state;

break;
case (1008):
(cr45014_state[(0)] = cr45014_block_9);

(cr45014_state[(4)] = null);

(cr45014_state[(5)] = null);

(cr45014_state[(6)] = null);

(cr45014_state[(3)] = null);

(cr45014_state[(1)] = null);

(cr45014_state[(2)] = null);

return cr45014_state;

break;
default:
(cr45014_state[(0)] = cr45014_block_10);

(cr45014_state[(4)] = null);

(cr45014_state[(6)] = null);

(cr45014_state[(3)] = null);

(cr45014_state[(1)] = null);

(cr45014_state[(2)] = null);

(cr45014_state[(1)] = cr45014_place_69);

return cr45014_state;

}
}catch (e45368){var cr45014_exception = e45368;
(cr45014_state[(0)] = null);

(cr45014_state[(4)] = null);

(cr45014_state[(5)] = null);

(cr45014_state[(6)] = null);

(cr45014_state[(3)] = null);

(cr45014_state[(1)] = null);

(cr45014_state[(2)] = null);

throw cr45014_exception;
}});
var cr45014_block_13 = (function hyperfiddle$electric_client$boot_with_retry_$_cr45014_block_13(cr45014_state){
try{var cr45014_place_68 = (cr45014_state[(6)]);
(cr45014_state[(0)] = cr45014_block_15);

(cr45014_state[(6)] = null);

(cr45014_state[(3)] = cr45014_place_68);

return cr45014_state;
}catch (e45370){var cr45014_exception = e45370;
(cr45014_state[(0)] = null);

(cr45014_state[(6)] = null);

(cr45014_state[(3)] = null);

(cr45014_state[(1)] = null);

(cr45014_state[(2)] = null);

throw cr45014_exception;
}});
var cr45014_block_4 = (function hyperfiddle$electric_client$boot_with_retry_$_cr45014_block_4(cr45014_state){
try{var cr45014_place_12 = (cr45014_state[(6)]);
var cr45014_place_52 = cr45014_place_12;
var cr45014_place_53 = (function(){throw cr45014_place_52})();
(cr45014_state[(0)] = null);

(cr45014_state[(3)] = null);

(cr45014_state[(1)] = null);

(cr45014_state[(2)] = null);

(cr45014_state[(5)] = null);

(cr45014_state[(6)] = null);

return null;
}catch (e45371){var cr45014_exception = e45371;
(cr45014_state[(0)] = cr45014_block_5);

(cr45014_state[(3)] = true);

(cr45014_state[(6)] = cr45014_exception);

return cr45014_state;
}});
var cr45014_block_9 = (function hyperfiddle$electric_client$boot_with_retry_$_cr45014_block_9(cr45014_state){
try{var cr45014_place_79 = cljs.core.ex_info;
var cr45014_place_80 = "Stale client";
var cr45014_place_81 = new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079);
var cr45014_place_82 = new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405);
var cr45014_place_83 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr45014_place_81,cr45014_place_82]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr45014_place_84 = (function (){var G__45374 = cr45014_place_80;
var G__45375 = cr45014_place_83;
var fexpr__45373 = cr45014_place_79;
return (fexpr__45373.cljs$core$IFn$_invoke$arity$2 ? fexpr__45373.cljs$core$IFn$_invoke$arity$2(G__45374,G__45375) : fexpr__45373.call(null,G__45374,G__45375));
})();
var cr45014_place_85 = (function(){throw cr45014_place_84})();
(cr45014_state[(0)] = null);

return null;
}catch (e45372){var cr45014_exception = e45372;
(cr45014_state[(0)] = null);

throw cr45014_exception;
}});
var cr45014_block_19 = (function hyperfiddle$electric_client$boot_with_retry_$_cr45014_block_19(cr45014_state){
try{var cr45014_place_105 = (cr45014_state[(1)]);
(cr45014_state[(0)] = null);

(cr45014_state[(1)] = null);

return cr45014_place_105;
}catch (e45376){var cr45014_exception = e45376;
(cr45014_state[(0)] = null);

(cr45014_state[(1)] = null);

throw cr45014_exception;
}});
var cr45014_block_2 = (function hyperfiddle$electric_client$boot_with_retry_$_cr45014_block_2(cr45014_state){
try{var cr45014_place_4 = (cr45014_state[(4)]);
var cr45014_place_14 = (function (x){
var fexpr__45158 = (cr45014_place_4[(0)]);
var G__45379 = x;
var fexpr__45378 = fexpr__45158;
return (fexpr__45378.cljs$core$IFn$_invoke$arity$1 ? fexpr__45378.cljs$core$IFn$_invoke$arity$1(G__45379) : fexpr__45378.call(null,G__45379));
});
var cr45014_place_15 = cljs.core.partial;
var cr45014_place_19 = (function (cr45159_state){
try{var cr45159_place_11 = missionary.core.unpark();
var cr45159_place_12 = cr45159_place_11;
var cr45159_place_13 = null;
var G__45204 = cr45159_place_12;
var G__45417 = G__45204;
switch (G__45417) {
case (0):
(cr45159_state[(0)] = cr45014_place_28);

(cr45159_state[(2)] = cr45159_place_13);

return cr45159_state;

break;
case (1):
(cr45159_state[(0)] = cr45014_place_30);

(cr45159_state[(2)] = cr45159_place_13);

return cr45159_state;

break;
default:
(cr45159_state[(0)] = cr45014_place_17);

(cr45159_state[(1)] = null);

(cr45159_state[(1)] = cr45159_place_11);

return cr45159_state;

}
}catch (e45416){var e45203 = e45416;
var cr45159_exception = e45203;
(cr45159_state[(0)] = null);

(cr45159_state[(1)] = null);

throw cr45159_exception;
}});
var cr45014_place_33 = (function (cr45159_state){
try{var cr45159_place_0 = console;
var cr45159_place_1 = "Connected.";
var cr45159_place_2 = cr45159_place_0.log(cr45159_place_1);
var cr45159_place_3 = missionary.core.rdv;
var cr45159_place_4 = (function (){var fexpr__45230 = cr45159_place_3;
var fexpr__45419 = fexpr__45230;
return (fexpr__45419.cljs$core$IFn$_invoke$arity$0 ? fexpr__45419.cljs$core$IFn$_invoke$arity$0() : fexpr__45419.call(null));
})();
var cr45159_place_5 = (2);
var cr45159_place_6 = missionary.core.seed;
var cr45159_place_7 = cljs.core.range;
var cr45159_place_8 = (2);
var cr45159_place_9 = (function (){var G__45232 = cr45159_place_8;
var fexpr__45231 = cr45159_place_7;
var G__45421 = G__45232;
var fexpr__45420 = fexpr__45231;
return (fexpr__45420.cljs$core$IFn$_invoke$arity$1 ? fexpr__45420.cljs$core$IFn$_invoke$arity$1(G__45421) : fexpr__45420.call(null,G__45421));
})();
var cr45159_place_10 = (function (){var G__45234 = cr45159_place_9;
var fexpr__45233 = cr45159_place_6;
var G__45423 = G__45234;
var fexpr__45422 = fexpr__45233;
return (fexpr__45422.cljs$core$IFn$_invoke$arity$1 ? fexpr__45422.cljs$core$IFn$_invoke$arity$1(G__45423) : fexpr__45422.call(null,G__45423));
})();
(cr45159_state[(0)] = cr45014_place_19);

(cr45159_state[(1)] = cr45159_place_4);

return missionary.core.fork(cr45159_place_5,cr45159_place_10);
}catch (e45418){var e45229 = e45418;
var cr45159_exception = e45229;
(cr45159_state[(0)] = null);

throw cr45159_exception;
}});
var cr45014_place_31 = (function (cr45159_state){
try{var cr45159_place_40 = (cr45159_state[(1)]);
var cr45159_place_44 = "No matching clause: ";
var cr45159_place_45 = cr45159_place_40;
var cr45159_place_46 = [cr45159_place_44,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr45159_place_45)].join('');
var cr45159_place_47 = (new Error(cr45159_place_46));
var cr45159_place_48 = (function(){throw cr45159_place_47})();
(cr45159_state[(0)] = null);

(cr45159_state[(1)] = null);

return null;
}catch (e45424){var e45227 = e45424;
var cr45159_exception = e45227;
(cr45159_state[(0)] = null);

(cr45159_state[(1)] = null);

throw cr45159_exception;
}});
var cr45014_place_18 = (function (cr45159_state){
try{var cr45159_place_23 = missionary.core.unpark();
var cr45159_place_24 = (1);
var cr45159_place_25 = missionary.core.none;
(cr45159_state[(0)] = cr45014_place_34);

return missionary.core.fork(cr45159_place_24,cr45159_place_25);
}catch (e45425){var e45202 = e45425;
var cr45159_exception = e45202;
(cr45159_state[(0)] = null);

(cr45159_state[(2)] = null);

throw cr45159_exception;
}});
var cr45014_place_23 = (function (cr45159_state){
try{var cr45159_place_33 = (cr45159_state[(3)]);
var cr45159_place_43 = cr45159_place_33;
(cr45159_state[(0)] = cr45014_place_21);

(cr45159_state[(3)] = null);

(cr45159_state[(1)] = cr45159_place_43);

return cr45159_state;
}catch (e45426){var e45208 = e45426;
var cr45159_exception = e45208;
(cr45159_state[(0)] = null);

(cr45159_state[(4)] = null);

(cr45159_state[(1)] = null);

(cr45159_state[(2)] = null);

(cr45159_state[(3)] = null);

throw cr45159_exception;
}});
var cr45014_place_28 = (function (cr45159_state){
try{var cr45159_place_4 = (cr45159_state[(1)]);
var cr45159_place_14 = cr45159_place_4;
var cr45159_place_15 = hyperfiddle.electric.impl.runtime.subject_at;
var cr45159_place_16 = cr45014_place_4;
var cr45159_place_17 = (0);
var cr45159_place_18 = (function (){var G__45220 = cr45159_place_16;
var G__45221 = cr45159_place_17;
var fexpr__45219 = cr45159_place_15;
var G__45429 = G__45220;
var G__45430 = G__45221;
var fexpr__45428 = fexpr__45219;
return (fexpr__45428.cljs$core$IFn$_invoke$arity$2 ? fexpr__45428.cljs$core$IFn$_invoke$arity$2(G__45429,G__45430) : fexpr__45428.call(null,G__45429,G__45430));
})();
var cr45159_place_19 = client;
var cr45159_place_20 = cr45159_place_14;
var cr45159_place_21 = cr45159_place_18;
var cr45159_place_22 = (function (){var G__45223 = cr45159_place_20;
var G__45224 = cr45159_place_21;
var fexpr__45222 = cr45159_place_19;
var G__45432 = G__45223;
var G__45433 = G__45224;
var fexpr__45431 = fexpr__45222;
return (fexpr__45431.cljs$core$IFn$_invoke$arity$2 ? fexpr__45431.cljs$core$IFn$_invoke$arity$2(G__45432,G__45433) : fexpr__45431.call(null,G__45432,G__45433));
})();
(cr45159_state[(0)] = cr45014_place_18);

(cr45159_state[(1)] = null);

return missionary.core.park(cr45159_place_22);
}catch (e45427){var e45218 = e45427;
var cr45159_exception = e45218;
(cr45159_state[(0)] = null);

(cr45159_state[(2)] = null);

(cr45159_state[(1)] = null);

throw cr45159_exception;
}});
var cr45014_place_32 = (function (cr45159_state){
try{var cr45159_place_28 = missionary.core.unpark();
var cr45159_place_29 = cr45159_place_28;
var cr45159_place_30 = null;
var cr45159_place_31 = (cr45159_place_29 == cr45159_place_30);
var cr45159_place_32 = null;
if(cr45159_place_31){
(cr45159_state[(0)] = cr45014_place_24);

(cr45159_state[(1)] = null);

(cr45159_state[(4)] = cr45159_place_32);

return cr45159_state;
} else {
(cr45159_state[(0)] = cr45014_place_26);

(cr45159_state[(3)] = cr45159_place_28);

(cr45159_state[(4)] = cr45159_place_32);

return cr45159_state;
}
}catch (e45434){var e45228 = e45434;
var cr45159_exception = e45228;
(cr45159_state[(0)] = null);

(cr45159_state[(2)] = null);

(cr45159_state[(1)] = null);

throw cr45159_exception;
}});
var cr45014_place_16 = (function (cr45159_state){
try{var cr45159_place_32 = (cr45159_state[(4)]);
(cr45159_state[(0)] = cr45014_place_27);

(cr45159_state[(4)] = null);

(cr45159_state[(2)] = cr45159_place_32);

return cr45159_state;
}catch (e45435){var e45200 = e45435;
var cr45159_exception = e45200;
(cr45159_state[(0)] = null);

(cr45159_state[(4)] = null);

(cr45159_state[(2)] = null);

throw cr45159_exception;
}});
var cr45014_place_22 = (function (cr45159_state){
try{var cr45159_place_51 = missionary.core.unpark();
(cr45159_state[(0)] = cr45014_place_16);

(cr45159_state[(4)] = cr45159_place_51);

return cr45159_state;
}catch (e45436){var e45207 = e45436;
var cr45159_exception = e45207;
(cr45159_state[(0)] = null);

(cr45159_state[(4)] = null);

(cr45159_state[(2)] = null);

throw cr45159_exception;
}});
var cr45014_place_21 = (function (cr45159_state){
try{var cr45159_place_42 = (cr45159_state[(1)]);
(cr45159_state[(0)] = cr45014_place_16);

(cr45159_state[(1)] = null);

(cr45159_state[(4)] = cr45159_place_42);

return cr45159_state;
}catch (e45437){var e45206 = e45437;
var cr45159_exception = e45206;
(cr45159_state[(0)] = null);

(cr45159_state[(4)] = null);

(cr45159_state[(1)] = null);

(cr45159_state[(2)] = null);

throw cr45159_exception;
}});
var cr45014_place_29 = (function (cr45159_state){
try{(cr45159_state[(0)] = cr45014_place_20);

return cr45159_state;
}catch (e45438){var e45225 = e45438;
var cr45159_exception = e45225;
(cr45159_state[(0)] = null);

(cr45159_state[(2)] = null);

(cr45159_state[(1)] = null);

throw cr45159_exception;
}});
var cr45014_place_25 = (function (cr45159_state){
try{var cr45159_place_40 = missionary.core.unpark();
var cr45159_place_41 = cr45159_place_40;
var cr45159_place_42 = null;
var G__45211 = cr45159_place_41;
var G__45440 = G__45211;
switch (G__45440) {
case (0):
(cr45159_state[(0)] = cr45014_place_23);

(cr45159_state[(1)] = null);

(cr45159_state[(1)] = cr45159_place_42);

return cr45159_state;

break;
case (1):
(cr45159_state[(0)] = cr45014_place_29);

(cr45159_state[(4)] = null);

(cr45159_state[(3)] = null);

return cr45159_state;

break;
default:
(cr45159_state[(0)] = cr45014_place_31);

(cr45159_state[(4)] = null);

(cr45159_state[(2)] = null);

(cr45159_state[(3)] = null);

(cr45159_state[(1)] = null);

(cr45159_state[(1)] = cr45159_place_40);

return cr45159_state;

}
}catch (e45439){var e45210 = e45439;
var cr45159_exception = e45210;
(cr45159_state[(0)] = null);

(cr45159_state[(4)] = null);

(cr45159_state[(2)] = null);

(cr45159_state[(3)] = null);

(cr45159_state[(1)] = null);

throw cr45159_exception;
}});
var cr45014_place_30 = (function (cr45159_state){
try{(cr45159_state[(0)] = cr45014_place_20);

return cr45159_state;
}catch (e45441){var e45226 = e45441;
var cr45159_exception = e45226;
(cr45159_state[(0)] = null);

(cr45159_state[(2)] = null);

(cr45159_state[(1)] = null);

throw cr45159_exception;
}});
var cr45014_place_17 = (function (cr45159_state){
try{var cr45159_place_11 = (cr45159_state[(1)]);
var cr45159_place_52 = "No matching clause: ";
var cr45159_place_53 = cr45159_place_11;
var cr45159_place_54 = [cr45159_place_52,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr45159_place_53)].join('');
var cr45159_place_55 = (new Error(cr45159_place_54));
var cr45159_place_56 = (function(){throw cr45159_place_55})();
(cr45159_state[(0)] = null);

(cr45159_state[(1)] = null);

return null;
}catch (e45442){var e45201 = e45442;
var cr45159_exception = e45201;
(cr45159_state[(0)] = null);

(cr45159_state[(1)] = null);

throw cr45159_exception;
}});
var cr45014_place_24 = (function (cr45159_state){
try{var cr45159_place_49 = (1);
var cr45159_place_50 = missionary.core.none;
(cr45159_state[(0)] = cr45014_place_22);

return missionary.core.fork(cr45159_place_49,cr45159_place_50);
}catch (e45443){var e45209 = e45443;
var cr45159_exception = e45209;
(cr45159_state[(0)] = null);

(cr45159_state[(4)] = null);

(cr45159_state[(2)] = null);

throw cr45159_exception;
}});
var cr45014_place_26 = (function (cr45159_state){
try{var cr45159_place_28 = (cr45159_state[(3)]);
var cr45159_place_33 = cr45159_place_28;
var cr45159_place_34 = (1);
var cr45159_place_35 = missionary.core.seed;
var cr45159_place_36 = cljs.core.range;
var cr45159_place_37 = (2);
var cr45159_place_38 = (function (){var G__45214 = cr45159_place_37;
var fexpr__45213 = cr45159_place_36;
var G__45446 = G__45214;
var fexpr__45445 = fexpr__45213;
return (fexpr__45445.cljs$core$IFn$_invoke$arity$1 ? fexpr__45445.cljs$core$IFn$_invoke$arity$1(G__45446) : fexpr__45445.call(null,G__45446));
})();
var cr45159_place_39 = (function (){var G__45216 = cr45159_place_38;
var fexpr__45215 = cr45159_place_35;
var G__45448 = G__45216;
var fexpr__45447 = fexpr__45215;
return (fexpr__45447.cljs$core$IFn$_invoke$arity$1 ? fexpr__45447.cljs$core$IFn$_invoke$arity$1(G__45448) : fexpr__45447.call(null,G__45448));
})();
(cr45159_state[(0)] = cr45014_place_25);

(cr45159_state[(3)] = null);

(cr45159_state[(3)] = cr45159_place_33);

return missionary.core.fork(cr45159_place_34,cr45159_place_39);
}catch (e45444){var e45212 = e45444;
var cr45159_exception = e45212;
(cr45159_state[(0)] = null);

(cr45159_state[(3)] = null);

(cr45159_state[(4)] = null);

(cr45159_state[(2)] = null);

(cr45159_state[(1)] = null);

throw cr45159_exception;
}});
var cr45014_place_27 = (function (cr45159_state){
try{var cr45159_place_13 = (cr45159_state[(2)]);
(cr45159_state[(0)] = null);

(cr45159_state[(2)] = null);

return cr45159_place_13;
}catch (e45449){var e45217 = e45449;
var cr45159_exception = e45217;
(cr45159_state[(0)] = null);

(cr45159_state[(2)] = null);

throw cr45159_exception;
}});
var cr45014_place_34 = (function (cr45159_state){
try{var cr45159_place_26 = missionary.core.unpark();
(cr45159_state[(0)] = cr45014_place_27);

(cr45159_state[(2)] = cr45159_place_26);

return cr45159_state;
}catch (e45450){var e45235 = e45450;
var cr45159_exception = e45235;
(cr45159_state[(0)] = null);

(cr45159_state[(2)] = null);

throw cr45159_exception;
}});
var cr45014_place_20 = (function (cr45159_state){
try{var cr45159_place_4 = (cr45159_state[(1)]);
var cr45159_place_27 = cr45159_place_4;
(cr45159_state[(0)] = cr45014_place_32);

return missionary.core.park(cr45159_place_27);
}catch (e45451){var e45205 = e45451;
var cr45159_exception = e45205;
(cr45159_state[(0)] = null);

(cr45159_state[(2)] = null);

(cr45159_state[(1)] = null);

throw cr45159_exception;
}});
var cr45014_place_35 = cloroutine.impl.coroutine;
var cr45014_place_36 = cljs.core.object_array;
var cr45014_place_37 = (5);
var cr45014_place_38 = (function (){var G__45453 = cr45014_place_37;
var fexpr__45452 = cr45014_place_36;
return (fexpr__45452.cljs$core$IFn$_invoke$arity$1 ? fexpr__45452.cljs$core$IFn$_invoke$arity$1(G__45453) : fexpr__45452.call(null,G__45453));
})();
var cr45014_place_39 = cr45014_place_38;
var cr45014_place_40 = (0);
var cr45014_place_41 = cr45014_place_33;
var cr45014_place_42 = (cr45014_place_39[cr45014_place_40] = cr45014_place_41);
var cr45014_place_43 = cr45014_place_38;
var cr45014_place_44 = (function (){var G__45455 = cr45014_place_43;
var fexpr__45454 = cr45014_place_35;
return (fexpr__45454.cljs$core$IFn$_invoke$arity$1 ? fexpr__45454.cljs$core$IFn$_invoke$arity$1(G__45455) : fexpr__45454.call(null,G__45455));
})();
var cr45014_place_45 = missionary.core.ap_run;
var cr45014_place_46 = (function (){var G__45457 = cr45014_place_44;
var G__45458 = cr45014_place_45;
var fexpr__45456 = cr45014_place_15;
return (fexpr__45456.cljs$core$IFn$_invoke$arity$2 ? fexpr__45456.cljs$core$IFn$_invoke$arity$2(G__45457,G__45458) : fexpr__45456.call(null,G__45457,G__45458));
})();
var cr45014_place_47 = conn;
var cr45014_place_48 = cr45014_place_14;
var cr45014_place_49 = cr45014_place_46;
var cr45014_place_50 = (function (){var G__45460 = cr45014_place_48;
var G__45461 = cr45014_place_49;
var fexpr__45459 = cr45014_place_47;
return (fexpr__45459.cljs$core$IFn$_invoke$arity$2 ? fexpr__45459.cljs$core$IFn$_invoke$arity$2(G__45460,G__45461) : fexpr__45459.call(null,G__45460,G__45461));
})();
(cr45014_state[(0)] = cr45014_block_3);

(cr45014_state[(4)] = null);

return missionary.core.park(cr45014_place_50);
}catch (e45377){var cr45014_exception = e45377;
(cr45014_state[(0)] = cr45014_block_4);

(cr45014_state[(4)] = null);

(cr45014_state[(6)] = cr45014_exception);

return cr45014_state;
}});
var cr45014_block_17 = (function hyperfiddle$electric_client$boot_with_retry_$_cr45014_block_17(cr45014_state){
try{var cr45014_place_130 = missionary.core.unpark();
(cr45014_state[(0)] = cr45014_block_1);

(cr45014_state[(2)] = cr45014_place_130);

return cr45014_state;
}catch (e45462){var cr45014_exception = e45462;
(cr45014_state[(0)] = null);

(cr45014_state[(1)] = null);

(cr45014_state[(2)] = null);

throw cr45014_exception;
}});
var cr45014_block_14 = (function hyperfiddle$electric_client$boot_with_retry_$_cr45014_block_14(cr45014_state){
try{var cr45014_place_101 = null;
(cr45014_state[(0)] = cr45014_block_15);

(cr45014_state[(3)] = cr45014_place_101);

return cr45014_state;
}catch (e45463){var cr45014_exception = e45463;
(cr45014_state[(0)] = null);

(cr45014_state[(3)] = null);

(cr45014_state[(1)] = null);

(cr45014_state[(2)] = null);

throw cr45014_exception;
}});
var cr45014_block_12 = (function hyperfiddle$electric_client$boot_with_retry_$_cr45014_block_12(cr45014_state){
try{var cr45014_place_1 = (cr45014_state[(2)]);
var cr45014_place_97 = console;
var cr45014_place_98 = "Failed to connect.";
var cr45014_place_99 = cr45014_place_97.log(cr45014_place_98);
var cr45014_place_100 = cr45014_place_1;
(cr45014_state[(0)] = cr45014_block_13);

(cr45014_state[(6)] = cr45014_place_100);

return cr45014_state;
}catch (e45464){var cr45014_exception = e45464;
(cr45014_state[(0)] = null);

(cr45014_state[(6)] = null);

(cr45014_state[(3)] = null);

(cr45014_state[(1)] = null);

(cr45014_state[(2)] = null);

throw cr45014_exception;
}});
var cr45014_block_15 = (function hyperfiddle$electric_client$boot_with_retry_$_cr45014_block_15(cr45014_state){
try{var cr45014_place_60 = (cr45014_state[(3)]);
var cr45014_place_102 = cr45014_place_60;
var cr45014_place_103 = null;
var cr45014_place_104 = (cr45014_place_102 == cr45014_place_103);
var cr45014_place_105 = null;
if(cr45014_place_104){
(cr45014_state[(0)] = cr45014_block_18);

(cr45014_state[(3)] = null);

(cr45014_state[(1)] = null);

(cr45014_state[(2)] = null);

(cr45014_state[(1)] = cr45014_place_105);

return cr45014_state;
} else {
(cr45014_state[(0)] = cr45014_block_16);

return cr45014_state;
}
}catch (e45465){var cr45014_exception = e45465;
(cr45014_state[(0)] = null);

(cr45014_state[(3)] = null);

(cr45014_state[(1)] = null);

(cr45014_state[(2)] = null);

throw cr45014_exception;
}});
var cr45014_block_0 = (function hyperfiddle$electric_client$boot_with_retry_$_cr45014_block_0(cr45014_state){
try{var cr45014_place_0 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr45014_place_1 = hyperfiddle.electric_client.retry_delays;
(cr45014_state[(0)] = cr45014_block_1);

(cr45014_state[(1)] = cr45014_place_0);

(cr45014_state[(2)] = cr45014_place_1);

return cr45014_state;
}catch (e45466){var cr45014_exception = e45466;
(cr45014_state[(0)] = null);

throw cr45014_exception;
}});
var cr45014_block_10 = (function hyperfiddle$electric_client$boot_with_retry_$_cr45014_block_10(cr45014_state){
try{var cr45014_place_61 = (cr45014_state[(5)]);
var cr45014_place_69 = (cr45014_state[(1)]);
var cr45014_place_86 = cljs.core.ex_info;
var cr45014_place_87 = "Remote error - ";
var cr45014_place_88 = cr45014_place_69;
var cr45014_place_89 = " ";
var cr45014_place_90 = new cljs.core.Keyword(null,"reason","reason",-2070751759);
var cr45014_place_91 = cr45014_place_61;
var cr45014_place_92 = cr45014_place_90.cljs$core$IFn$_invoke$arity$1(cr45014_place_91);
var cr45014_place_93 = [cr45014_place_87,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr45014_place_88),cr45014_place_89,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr45014_place_92)].join('');
var cr45014_place_94 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr45014_place_95 = (function (){var G__45469 = cr45014_place_93;
var G__45470 = cr45014_place_94;
var fexpr__45468 = cr45014_place_86;
return (fexpr__45468.cljs$core$IFn$_invoke$arity$2 ? fexpr__45468.cljs$core$IFn$_invoke$arity$2(G__45469,G__45470) : fexpr__45468.call(null,G__45469,G__45470));
})();
var cr45014_place_96 = (function(){throw cr45014_place_95})();
(cr45014_state[(0)] = null);

(cr45014_state[(5)] = null);

(cr45014_state[(1)] = null);

return null;
}catch (e45467){var cr45014_exception = e45467;
(cr45014_state[(0)] = null);

(cr45014_state[(5)] = null);

(cr45014_state[(1)] = null);

throw cr45014_exception;
}});
var cr45014_block_1 = (function hyperfiddle$electric_client$boot_with_retry_$_cr45014_block_1(cr45014_state){
try{var cr45014_place_0 = (cr45014_state[(1)]);
var cr45014_place_2 = cljs.core.object_array;
var cr45014_place_3 = (1);
var cr45014_place_4 = (function (){var G__45473 = cr45014_place_3;
var fexpr__45472 = cr45014_place_2;
return (fexpr__45472.cljs$core$IFn$_invoke$arity$1 ? fexpr__45472.cljs$core$IFn$_invoke$arity$1(G__45473) : fexpr__45472.call(null,G__45473));
})();
var cr45014_place_5 = console;
var cr45014_place_6 = "Connecting...";
var cr45014_place_7 = cr45014_place_5.log(cr45014_place_6);
var cr45014_place_8 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr45014_place_9 = cr45014_place_0;
var cr45014_place_10 = cr45014_place_9;
var cr45014_place_11 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr45014_place_10);
var cr45014_place_12 = null;
var cr45014_place_13 = false;
(cr45014_state[(0)] = cr45014_block_2);

(cr45014_state[(3)] = cr45014_place_13);

(cr45014_state[(4)] = cr45014_place_4);

(cr45014_state[(5)] = cr45014_place_8);

(cr45014_state[(6)] = cr45014_place_12);

return cr45014_state;
}catch (e45471){var cr45014_exception = e45471;
(cr45014_state[(0)] = null);

(cr45014_state[(1)] = null);

(cr45014_state[(2)] = null);

throw cr45014_exception;
}});
var cr45014_block_8 = (function hyperfiddle$electric_client$boot_with_retry_$_cr45014_block_8(cr45014_state){
try{var cr45014_place_73 = console;
var cr45014_place_74 = "Connection lost.";
var cr45014_place_75 = cr45014_place_73.log(cr45014_place_74);
var cr45014_place_76 = cljs.core.seq;
var cr45014_place_77 = hyperfiddle.electric_client.retry_delays;
var cr45014_place_78 = (function (){var G__45476 = cr45014_place_77;
var fexpr__45475 = cr45014_place_76;
return (fexpr__45475.cljs$core$IFn$_invoke$arity$1 ? fexpr__45475.cljs$core$IFn$_invoke$arity$1(G__45476) : fexpr__45475.call(null,G__45476));
})();
(cr45014_state[(0)] = cr45014_block_11);

(cr45014_state[(4)] = cr45014_place_78);

return cr45014_state;
}catch (e45474){var cr45014_exception = e45474;
(cr45014_state[(0)] = null);

(cr45014_state[(6)] = null);

(cr45014_state[(3)] = null);

(cr45014_state[(1)] = null);

(cr45014_state[(2)] = null);

(cr45014_state[(4)] = null);

throw cr45014_exception;
}});
var cr45014_block_5 = (function hyperfiddle$electric_client$boot_with_retry_$_cr45014_block_5(cr45014_state){
try{var cr45014_place_13 = (cr45014_state[(3)]);
var cr45014_place_8 = (cr45014_state[(5)]);
var cr45014_place_12 = (cr45014_state[(6)]);
var cr45014_place_54 = cr45014_place_8;
var cr45014_place_55 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr45014_place_54);
var cr45014_place_56 = (cljs.core.truth_(cr45014_place_13)?(function(){throw cr45014_place_12})():cr45014_place_12);
var cr45014_place_57 = cr45014_place_56;
var cr45014_place_58 = null;
var cr45014_place_59 = (cr45014_place_57 == cr45014_place_58);
var cr45014_place_60 = null;
if(cr45014_place_59){
(cr45014_state[(0)] = cr45014_block_14);

(cr45014_state[(3)] = null);

(cr45014_state[(5)] = null);

(cr45014_state[(6)] = null);

(cr45014_state[(3)] = cr45014_place_60);

return cr45014_state;
} else {
(cr45014_state[(0)] = cr45014_block_6);

(cr45014_state[(3)] = null);

(cr45014_state[(5)] = null);

(cr45014_state[(6)] = null);

(cr45014_state[(4)] = cr45014_place_56);

(cr45014_state[(3)] = cr45014_place_60);

return cr45014_state;
}
}catch (e45477){var cr45014_exception = e45477;
(cr45014_state[(0)] = null);

(cr45014_state[(3)] = null);

(cr45014_state[(1)] = null);

(cr45014_state[(2)] = null);

(cr45014_state[(5)] = null);

(cr45014_state[(6)] = null);

throw cr45014_exception;
}});
var cr45014_block_16 = (function hyperfiddle$electric_client$boot_with_retry_$_cr45014_block_16(cr45014_state){
try{var cr45014_place_60 = (cr45014_state[(3)]);
var cr45014_place_106 = cr45014_place_60;
var cr45014_place_107 = cljs.core.seq;
var cr45014_place_108 = cr45014_place_106;
var cr45014_place_109 = (function (){var G__45480 = cr45014_place_108;
var fexpr__45479 = cr45014_place_107;
return (fexpr__45479.cljs$core$IFn$_invoke$arity$1 ? fexpr__45479.cljs$core$IFn$_invoke$arity$1(G__45480) : fexpr__45479.call(null,G__45480));
})();
var cr45014_place_110 = cljs.core.first;
var cr45014_place_111 = cr45014_place_109;
var cr45014_place_112 = (function (){var G__45482 = cr45014_place_111;
var fexpr__45481 = cr45014_place_110;
return (fexpr__45481.cljs$core$IFn$_invoke$arity$1 ? fexpr__45481.cljs$core$IFn$_invoke$arity$1(G__45482) : fexpr__45481.call(null,G__45482));
})();
var cr45014_place_113 = cljs.core.next;
var cr45014_place_114 = cr45014_place_109;
var cr45014_place_115 = (function (){var G__45484 = cr45014_place_114;
var fexpr__45483 = cr45014_place_113;
return (fexpr__45483.cljs$core$IFn$_invoke$arity$1 ? fexpr__45483.cljs$core$IFn$_invoke$arity$1(G__45484) : fexpr__45483.call(null,G__45484));
})();
var cr45014_place_116 = cr45014_place_112;
var cr45014_place_117 = cr45014_place_115;
var cr45014_place_118 = console;
var cr45014_place_119 = "Next attempt in ";
var cr45014_place_120 = cr45014_place_116;
var cr45014_place_121 = (1000);
var cr45014_place_122 = (cr45014_place_120 / cr45014_place_121);
var cr45014_place_123 = " seconds.";
var cr45014_place_124 = [cr45014_place_119,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr45014_place_122),cr45014_place_123].join('');
var cr45014_place_125 = cr45014_place_118.log(cr45014_place_124);
var cr45014_place_126 = missionary.core.sleep;
var cr45014_place_127 = cr45014_place_116;
var cr45014_place_128 = cr45014_place_117;
var cr45014_place_129 = (function (){var G__45486 = cr45014_place_127;
var G__45487 = cr45014_place_128;
var fexpr__45485 = cr45014_place_126;
return (fexpr__45485.cljs$core$IFn$_invoke$arity$2 ? fexpr__45485.cljs$core$IFn$_invoke$arity$2(G__45486,G__45487) : fexpr__45485.call(null,G__45486,G__45487));
})();
(cr45014_state[(0)] = cr45014_block_17);

(cr45014_state[(3)] = null);

return missionary.core.park(cr45014_place_129);
}catch (e45478){var cr45014_exception = e45478;
(cr45014_state[(0)] = null);

(cr45014_state[(3)] = null);

(cr45014_state[(1)] = null);

(cr45014_state[(2)] = null);

throw cr45014_exception;
}});
var cr45014_block_18 = (function hyperfiddle$electric_client$boot_with_retry_$_cr45014_block_18(cr45014_state){
try{var cr45014_place_131 = null;
(cr45014_state[(0)] = cr45014_block_19);

(cr45014_state[(1)] = cr45014_place_131);

return cr45014_state;
}catch (e45488){var cr45014_exception = e45488;
(cr45014_state[(0)] = null);

(cr45014_state[(1)] = null);

throw cr45014_exception;
}});
return cloroutine.impl.coroutine((function (){var G__45489 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((7));
(G__45489[(0)] = cr45014_block_0);

return G__45489;
})());
})(),missionary.core.sp_run);
});

//# sourceMappingURL=hyperfiddle.electric_client.js.map
