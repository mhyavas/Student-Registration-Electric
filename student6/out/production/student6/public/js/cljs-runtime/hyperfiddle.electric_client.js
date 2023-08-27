goog.provide('hyperfiddle.electric_client');
/**
 * @define {string}
 */
hyperfiddle.electric_client.VERSION = goog.define("hyperfiddle.electric_client.VERSION","");
hyperfiddle.electric_client.server_url = (function hyperfiddle$electric_client$server_url(){
var url = (new URL(window.location));
var proto = url.protocol;
(url.protocol = (function (){var G__34189 = proto;
switch (G__34189) {
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

(url.hash = "");

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
}catch (e34191){var e = e34191;
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));

return (function (){
return cljs.core.List.EMPTY;
});
}});
});
hyperfiddle.electric_client.wait_for_flush = (function hyperfiddle$electric_client$wait_for_flush(ws){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr34193_block_0 = (function hyperfiddle$electric_client$wait_for_flush_$_cr34193_block_0(cr34193_state){
try{(cr34193_state[(0)] = cr34193_block_1);

return cr34193_state;
}catch (e34228){var cr34193_exception = e34228;
(cr34193_state[(0)] = null);

throw cr34193_exception;
}});
var cr34193_block_1 = (function hyperfiddle$electric_client$wait_for_flush_$_cr34193_block_1(cr34193_state){
try{var cr34193_place_0 = (4096);
var cr34193_place_1 = ws;
var cr34193_place_2 = cr34193_place_1.bufferedAmount;
var cr34193_place_3 = (cr34193_place_0 < cr34193_place_2);
var cr34193_place_4 = null;
if(cr34193_place_3){
(cr34193_state[(0)] = cr34193_block_3);

return cr34193_state;
} else {
(cr34193_state[(0)] = cr34193_block_2);

(cr34193_state[(1)] = cr34193_place_4);

return cr34193_state;
}
}catch (e34229){var cr34193_exception = e34229;
(cr34193_state[(0)] = null);

throw cr34193_exception;
}});
var cr34193_block_2 = (function hyperfiddle$electric_client$wait_for_flush_$_cr34193_block_2(cr34193_state){
try{var cr34193_place_5 = null;
(cr34193_state[(0)] = cr34193_block_5);

(cr34193_state[(1)] = cr34193_place_5);

return cr34193_state;
}catch (e34234){var cr34193_exception = e34234;
(cr34193_state[(0)] = null);

(cr34193_state[(1)] = null);

throw cr34193_exception;
}});
var cr34193_block_3 = (function hyperfiddle$electric_client$wait_for_flush_$_cr34193_block_3(cr34193_state){
try{var cr34193_place_6 = missionary.core.sleep;
var cr34193_place_7 = (50);
var cr34193_place_8 = (function (){var G__34243 = cr34193_place_7;
var fexpr__34242 = cr34193_place_6;
return (fexpr__34242.cljs$core$IFn$_invoke$arity$1 ? fexpr__34242.cljs$core$IFn$_invoke$arity$1(G__34243) : fexpr__34242.call(null,G__34243));
})();
(cr34193_state[(0)] = cr34193_block_4);

return missionary.core.park(cr34193_place_8);
}catch (e34238){var cr34193_exception = e34238;
(cr34193_state[(0)] = null);

throw cr34193_exception;
}});
var cr34193_block_4 = (function hyperfiddle$electric_client$wait_for_flush_$_cr34193_block_4(cr34193_state){
try{var cr34193_place_9 = missionary.core.unpark();
(cr34193_state[(0)] = cr34193_block_1);

return cr34193_state;
}catch (e34244){var cr34193_exception = e34244;
(cr34193_state[(0)] = null);

throw cr34193_exception;
}});
var cr34193_block_5 = (function hyperfiddle$electric_client$wait_for_flush_$_cr34193_block_5(cr34193_state){
try{var cr34193_place_4 = (cr34193_state[(1)]);
(cr34193_state[(0)] = null);

(cr34193_state[(1)] = null);

return cr34193_place_4;
}catch (e34245){var cr34193_exception = e34245;
(cr34193_state[(0)] = null);

(cr34193_state[(1)] = null);

throw cr34193_exception;
}});
return cloroutine.impl.coroutine((function (){var G__34246 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__34246[(0)] = cr34193_block_0);

return G__34246;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.wait_for_close = (function hyperfiddle$electric_client$wait_for_close(ws){
return (function (s,f){
(ws.onclose = (function (e){
(ws.onclose = null);

var G__34248 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),e.code,new cljs.core.Keyword(null,"reason","reason",-2070751759),e.reason], null);
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__34248) : s.call(null,G__34248));
}));

return (function (){
if((ws.onclose == null)){
return null;
} else {
(ws.onclose = null);

var G__34256 = (new missionary.Cancelled());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34256) : f.call(null,G__34256));
}
});
});
});
hyperfiddle.electric_client.payload = (function hyperfiddle$electric_client$payload(x){
return x.data;
});
hyperfiddle.electric_client.send_BANG_ = (function hyperfiddle$electric_client$send_BANG_(ws,msg){
var G__34267 = ws;
G__34267.send(msg);

return G__34267;
});
hyperfiddle.electric_client.send_all = (function hyperfiddle$electric_client$send_all(ws,msgs){
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr34275_block_0 = (function hyperfiddle$electric_client$send_all_$_cr34275_block_0(cr34275_state){
try{var cr34275_place_0 = hyperfiddle.electric_client.wait_for_flush;
var cr34275_place_1 = hyperfiddle.electric_client.send_BANG_;
var cr34275_place_2 = ws;
var cr34275_place_3 = hyperfiddle.electric.impl.io.encode;
var cr34275_place_4 = (1);
var cr34275_place_5 = msgs;
(cr34275_state[(0)] = cr34275_block_1);

(cr34275_state[(2)] = cr34275_place_0);

(cr34275_state[(3)] = cr34275_place_1);

(cr34275_state[(4)] = cr34275_place_2);

(cr34275_state[(1)] = cr34275_place_3);

return missionary.core.fork(cr34275_place_4,cr34275_place_5);
}catch (e34318){var cr34275_exception = e34318;
(cr34275_state[(0)] = null);

throw cr34275_exception;
}});
var cr34275_block_1 = (function hyperfiddle$electric_client$send_all_$_cr34275_block_1(cr34275_state){
try{var cr34275_place_3 = (cr34275_state[(1)]);
var cr34275_place_0 = (cr34275_state[(2)]);
var cr34275_place_1 = (cr34275_state[(3)]);
var cr34275_place_2 = (cr34275_state[(4)]);
var cr34275_place_6 = missionary.core.unpark();
var cr34275_place_7 = (function (){var G__34331 = cr34275_place_6;
var fexpr__34330 = cr34275_place_3;
return (fexpr__34330.cljs$core$IFn$_invoke$arity$1 ? fexpr__34330.cljs$core$IFn$_invoke$arity$1(G__34331) : fexpr__34330.call(null,G__34331));
})();
var cr34275_place_8 = (function (){var G__34333 = cr34275_place_2;
var G__34334 = cr34275_place_7;
var fexpr__34332 = cr34275_place_1;
return (fexpr__34332.cljs$core$IFn$_invoke$arity$2 ? fexpr__34332.cljs$core$IFn$_invoke$arity$2(G__34333,G__34334) : fexpr__34332.call(null,G__34333,G__34334));
})();
var cr34275_place_9 = (function (){var G__34336 = cr34275_place_8;
var fexpr__34335 = cr34275_place_0;
return (fexpr__34335.cljs$core$IFn$_invoke$arity$1 ? fexpr__34335.cljs$core$IFn$_invoke$arity$1(G__34336) : fexpr__34335.call(null,G__34336));
})();
(cr34275_state[(0)] = cr34275_block_2);

(cr34275_state[(1)] = null);

(cr34275_state[(2)] = null);

(cr34275_state[(3)] = null);

(cr34275_state[(4)] = null);

return missionary.core.park(cr34275_place_9);
}catch (e34327){var cr34275_exception = e34327;
(cr34275_state[(0)] = null);

(cr34275_state[(1)] = null);

(cr34275_state[(2)] = null);

(cr34275_state[(3)] = null);

(cr34275_state[(4)] = null);

throw cr34275_exception;
}});
var cr34275_block_2 = (function hyperfiddle$electric_client$send_all_$_cr34275_block_2(cr34275_state){
try{var cr34275_place_10 = missionary.core.unpark();
(cr34275_state[(0)] = null);

return cr34275_place_10;
}catch (e34338){var cr34275_exception = e34338;
(cr34275_state[(0)] = null);

throw cr34275_exception;
}});
return cloroutine.impl.coroutine((function (){var G__34339 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__34339[(0)] = cr34275_block_0);

return G__34339;
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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr34348_block_10 = (function hyperfiddle$electric_client$connector_$_cr34348_block_10(cr34348_state){
try{var cr34348_place_42 = (cr34348_state[(5)]);
var cr34348_place_10 = (cr34348_state[(3)]);
var cr34348_place_9 = (cr34348_state[(4)]);
var cr34348_place_50 = (cljs.core.truth_(cr34348_place_10)?(function(){throw cr34348_place_9})():cr34348_place_9);
(cr34348_state[(0)] = cr34348_block_12);

(cr34348_state[(5)] = null);

(cr34348_state[(3)] = null);

(cr34348_state[(4)] = null);

(cr34348_state[(2)] = cr34348_place_50);

return cr34348_state;
}catch (e34463){var cr34348_exception = e34463;
(cr34348_state[(0)] = null);

(cr34348_state[(5)] = null);

(cr34348_state[(3)] = null);

(cr34348_state[(4)] = null);

(cr34348_state[(2)] = null);

throw cr34348_exception;
}});
var cr34348_block_11 = (function hyperfiddle$electric_client$connector_$_cr34348_block_11(cr34348_state){
try{var cr34348_place_51 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
(cr34348_state[(0)] = cr34348_block_12);

(cr34348_state[(2)] = cr34348_place_51);

return cr34348_state;
}catch (e34465){var cr34348_exception = e34465;
(cr34348_state[(0)] = null);

(cr34348_state[(2)] = null);

throw cr34348_exception;
}});
var cr34348_block_8 = (function hyperfiddle$electric_client$connector_$_cr34348_block_8(cr34348_state){
try{var cr34348_place_48 = missionary.core.unpark();
(cr34348_state[(0)] = cr34348_block_10);

(cr34348_state[(5)] = cr34348_place_48);

return cr34348_state;
}catch (e34466){var cr34348_exception = e34466;
(cr34348_state[(0)] = null);

(cr34348_state[(5)] = null);

(cr34348_state[(3)] = null);

(cr34348_state[(4)] = null);

(cr34348_state[(2)] = null);

throw cr34348_exception;
}});
var cr34348_block_1 = (function hyperfiddle$electric_client$connector_$_cr34348_block_1(cr34348_state){
try{var cr34348_place_3 = missionary.core.unpark();
var cr34348_place_4 = cr34348_place_3;
var cr34348_place_5 = null;
var cr34348_place_6 = (cr34348_place_4 == cr34348_place_5);
var cr34348_place_7 = null;
if(cr34348_place_6){
(cr34348_state[(0)] = cr34348_block_11);

(cr34348_state[(2)] = cr34348_place_7);

return cr34348_state;
} else {
(cr34348_state[(0)] = cr34348_block_2);

(cr34348_state[(1)] = cr34348_place_3);

(cr34348_state[(2)] = cr34348_place_7);

return cr34348_state;
}
}catch (e34468){var cr34348_exception = e34468;
(cr34348_state[(0)] = null);

throw cr34348_exception;
}});
var cr34348_block_12 = (function hyperfiddle$electric_client$connector_$_cr34348_block_12(cr34348_state){
try{var cr34348_place_7 = (cr34348_state[(2)]);
(cr34348_state[(0)] = null);

(cr34348_state[(2)] = null);

return cr34348_place_7;
}catch (e34469){var cr34348_exception = e34469;
(cr34348_state[(0)] = null);

(cr34348_state[(2)] = null);

throw cr34348_exception;
}});
var cr34348_block_6 = (function hyperfiddle$electric_client$connector_$_cr34348_block_6(cr34348_state){
try{var cr34348_place_8 = (cr34348_state[(1)]);
var cr34348_place_36 = cljs.core._EQ_;
var cr34348_place_37 = WebSocket;
var cr34348_place_38 = cr34348_place_37.CLOSED;
var cr34348_place_39 = cr34348_place_8;
var cr34348_place_40 = cr34348_place_39.readyState;
var cr34348_place_41 = (function (){var G__34472 = cr34348_place_38;
var G__34473 = cr34348_place_40;
var fexpr__34471 = cr34348_place_36;
return (fexpr__34471.cljs$core$IFn$_invoke$arity$2 ? fexpr__34471.cljs$core$IFn$_invoke$arity$2(G__34472,G__34473) : fexpr__34471.call(null,G__34472,G__34473));
})();
var cr34348_place_42 = null;
if(cljs.core.truth_(cr34348_place_41)){
(cr34348_state[(0)] = cr34348_block_9);

(cr34348_state[(1)] = null);

(cr34348_state[(5)] = cr34348_place_42);

return cr34348_state;
} else {
(cr34348_state[(0)] = cr34348_block_7);

(cr34348_state[(5)] = cr34348_place_42);

return cr34348_state;
}
}catch (e34470){var cr34348_exception = e34470;
(cr34348_state[(0)] = null);

(cr34348_state[(1)] = null);

(cr34348_state[(3)] = null);

(cr34348_state[(4)] = null);

(cr34348_state[(2)] = null);

throw cr34348_exception;
}});
var cr34348_block_0 = (function hyperfiddle$electric_client$connector_$_cr34348_block_0(cr34348_state){
try{var cr34348_place_0 = hyperfiddle.electric_client.connect;
var cr34348_place_1 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr34348_place_2 = (function (){var G__34477 = cr34348_place_1;
var fexpr__34476 = cr34348_place_0;
return (fexpr__34476.cljs$core$IFn$_invoke$arity$1 ? fexpr__34476.cljs$core$IFn$_invoke$arity$1(G__34477) : fexpr__34476.call(null,G__34477));
})();
(cr34348_state[(0)] = cr34348_block_1);

return missionary.core.park(cr34348_place_2);
}catch (e34475){var cr34348_exception = e34475;
(cr34348_state[(0)] = null);

throw cr34348_exception;
}});
var cr34348_block_9 = (function hyperfiddle$electric_client$connector_$_cr34348_block_9(cr34348_state){
try{var cr34348_place_49 = null;
(cr34348_state[(0)] = cr34348_block_10);

(cr34348_state[(5)] = cr34348_place_49);

return cr34348_state;
}catch (e34478){var cr34348_exception = e34478;
(cr34348_state[(0)] = null);

(cr34348_state[(5)] = null);

(cr34348_state[(3)] = null);

(cr34348_state[(4)] = null);

(cr34348_state[(2)] = null);

throw cr34348_exception;
}});
var cr34348_block_4 = (function hyperfiddle$electric_client$connector_$_cr34348_block_4(cr34348_state){
try{var cr34348_place_33 = missionary.core.unpark();
(cr34348_state[(0)] = cr34348_block_6);

(cr34348_state[(4)] = cr34348_place_33);

return cr34348_state;
}catch (e34480){var cr34348_exception = e34480;
(cr34348_state[(0)] = cr34348_block_5);

(cr34348_state[(4)] = cr34348_exception);

return cr34348_state;
}});
var cr34348_block_2 = (function hyperfiddle$electric_client$connector_$_cr34348_block_2(cr34348_state){
try{var cr34348_place_3 = (cr34348_state[(1)]);
var cr34348_place_8 = cr34348_place_3;
var cr34348_place_9 = null;
var cr34348_place_10 = false;
(cr34348_state[(0)] = cr34348_block_3);

(cr34348_state[(1)] = null);

(cr34348_state[(1)] = cr34348_place_8);

(cr34348_state[(4)] = cr34348_place_9);

(cr34348_state[(3)] = cr34348_place_10);

return cr34348_state;
}catch (e34481){var cr34348_exception = e34481;
(cr34348_state[(0)] = null);

(cr34348_state[(1)] = null);

(cr34348_state[(2)] = null);

throw cr34348_exception;
}});
var cr34348_block_5 = (function hyperfiddle$electric_client$connector_$_cr34348_block_5(cr34348_state){
try{var cr34348_place_9 = (cr34348_state[(4)]);
var cr34348_place_34 = cr34348_place_9;
var cr34348_place_35 = (function(){throw cr34348_place_34})();
(cr34348_state[(0)] = null);

(cr34348_state[(1)] = null);

(cr34348_state[(3)] = null);

(cr34348_state[(4)] = null);

(cr34348_state[(2)] = null);

return null;
}catch (e34482){var cr34348_exception = e34482;
(cr34348_state[(0)] = cr34348_block_6);

(cr34348_state[(3)] = true);

(cr34348_state[(4)] = cr34348_exception);

return cr34348_state;
}});
var cr34348_block_7 = (function hyperfiddle$electric_client$connector_$_cr34348_block_7(cr34348_state){
try{var cr34348_place_8 = (cr34348_state[(1)]);
var cr34348_place_43 = cr34348_place_8;
var cr34348_place_44 = cr34348_place_43.close();
var cr34348_place_45 = missionary.core.compel;
var cr34348_place_46 = hyperfiddle.electric_client.wait_for_close;
var cr34348_place_47 = (function (){var G__34488 = cr34348_place_46;
var fexpr__34487 = cr34348_place_45;
return (fexpr__34487.cljs$core$IFn$_invoke$arity$1 ? fexpr__34487.cljs$core$IFn$_invoke$arity$1(G__34488) : fexpr__34487.call(null,G__34488));
})();
(cr34348_state[(0)] = cr34348_block_8);

(cr34348_state[(1)] = null);

return missionary.core.park(cr34348_place_47);
}catch (e34483){var cr34348_exception = e34483;
(cr34348_state[(0)] = null);

(cr34348_state[(5)] = null);

(cr34348_state[(1)] = null);

(cr34348_state[(3)] = null);

(cr34348_state[(4)] = null);

(cr34348_state[(2)] = null);

throw cr34348_exception;
}});
var cr34348_block_3 = (function hyperfiddle$electric_client$connector_$_cr34348_block_3(cr34348_state){
try{var cr34348_place_8 = (cr34348_state[(1)]);
var cr34348_place_11 = hyperfiddle.electric_client.send_BANG_;
var cr34348_place_12 = cr34348_place_8;
var cr34348_place_13 = hyperfiddle.electric.impl.io.encode;
var cr34348_place_14 = server;
var cr34348_place_15 = (function (){var G__34491 = cr34348_place_14;
var fexpr__34490 = cr34348_place_13;
return (fexpr__34490.cljs$core$IFn$_invoke$arity$1 ? fexpr__34490.cljs$core$IFn$_invoke$arity$1(G__34491) : fexpr__34490.call(null,G__34491));
})();
var cr34348_place_16 = (function (){var G__34493 = cr34348_place_12;
var G__34494 = cr34348_place_15;
var fexpr__34492 = cr34348_place_11;
return (fexpr__34492.cljs$core$IFn$_invoke$arity$2 ? fexpr__34492.cljs$core$IFn$_invoke$arity$2(G__34493,G__34494) : fexpr__34492.call(null,G__34493,G__34494));
})();
var cr34348_place_17 = cr34348_place_8;
var cr34348_place_18 = cljs.core.comp;
var cr34348_place_19 = cb;
var cr34348_place_20 = hyperfiddle.electric.impl.io.decode;
var cr34348_place_21 = hyperfiddle.electric_client.payload;
var cr34348_place_22 = (function (){var G__34496 = cr34348_place_19;
var G__34497 = cr34348_place_20;
var G__34498 = cr34348_place_21;
var fexpr__34495 = cr34348_place_18;
return (fexpr__34495.cljs$core$IFn$_invoke$arity$3 ? fexpr__34495.cljs$core$IFn$_invoke$arity$3(G__34496,G__34497,G__34498) : fexpr__34495.call(null,G__34496,G__34497,G__34498));
})();
var cr34348_place_23 = (cr34348_place_17.onmessage = cr34348_place_22);
var cr34348_place_24 = missionary.core.race;
var cr34348_place_25 = hyperfiddle.electric_client.send_all;
var cr34348_place_26 = cr34348_place_8;
var cr34348_place_27 = msgs;
var cr34348_place_28 = (function (){var G__34500 = cr34348_place_26;
var G__34501 = cr34348_place_27;
var fexpr__34499 = cr34348_place_25;
return (fexpr__34499.cljs$core$IFn$_invoke$arity$2 ? fexpr__34499.cljs$core$IFn$_invoke$arity$2(G__34500,G__34501) : fexpr__34499.call(null,G__34500,G__34501));
})();
var cr34348_place_29 = hyperfiddle.electric_client.wait_for_close;
var cr34348_place_30 = cr34348_place_8;
var cr34348_place_31 = (function (){var G__34503 = cr34348_place_30;
var fexpr__34502 = cr34348_place_29;
return (fexpr__34502.cljs$core$IFn$_invoke$arity$1 ? fexpr__34502.cljs$core$IFn$_invoke$arity$1(G__34503) : fexpr__34502.call(null,G__34503));
})();
var cr34348_place_32 = (function (){var G__34505 = cr34348_place_28;
var G__34506 = cr34348_place_31;
var fexpr__34504 = cr34348_place_24;
return (fexpr__34504.cljs$core$IFn$_invoke$arity$2 ? fexpr__34504.cljs$core$IFn$_invoke$arity$2(G__34505,G__34506) : fexpr__34504.call(null,G__34505,G__34506));
})();
(cr34348_state[(0)] = cr34348_block_4);

return missionary.core.park(cr34348_place_32);
}catch (e34489){var cr34348_exception = e34489;
(cr34348_state[(0)] = cr34348_block_5);

(cr34348_state[(4)] = cr34348_exception);

return cr34348_state;
}});
return cloroutine.impl.coroutine((function (){var G__34507 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__34507[(0)] = cr34348_block_0);

return G__34507;
})());
})(),missionary.core.sp_run);
});
});
hyperfiddle.electric_client.fib_iter = (function hyperfiddle$electric_client$fib_iter(p__34508){
var vec__34509 = p__34508;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34509,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34509,(1),null);
var G__34512 = b;
switch (G__34512) {
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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr34516_block_9 = (function hyperfiddle$electric_client$boot_with_retry_$_cr34516_block_9(cr34516_state){
try{var cr34516_place_79 = cljs.core.ex_info;
var cr34516_place_80 = "Stale client";
var cr34516_place_81 = new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079);
var cr34516_place_82 = new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405);
var cr34516_place_83 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr34516_place_81,cr34516_place_82]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr34516_place_84 = (function (){var G__34860 = cr34516_place_80;
var G__34861 = cr34516_place_83;
var fexpr__34859 = cr34516_place_79;
return (fexpr__34859.cljs$core$IFn$_invoke$arity$2 ? fexpr__34859.cljs$core$IFn$_invoke$arity$2(G__34860,G__34861) : fexpr__34859.call(null,G__34860,G__34861));
})();
var cr34516_place_85 = (function(){throw cr34516_place_84})();
(cr34516_state[(0)] = null);

return null;
}catch (e34858){var cr34516_exception = e34858;
(cr34516_state[(0)] = null);

throw cr34516_exception;
}});
var cr34516_block_11 = (function hyperfiddle$electric_client$boot_with_retry_$_cr34516_block_11(cr34516_state){
try{var cr34516_place_72 = (cr34516_state[(5)]);
(cr34516_state[(0)] = cr34516_block_13);

(cr34516_state[(5)] = null);

(cr34516_state[(3)] = cr34516_place_72);

return cr34516_state;
}catch (e34862){var cr34516_exception = e34862;
(cr34516_state[(0)] = null);

(cr34516_state[(1)] = null);

(cr34516_state[(5)] = null);

(cr34516_state[(2)] = null);

(cr34516_state[(4)] = null);

(cr34516_state[(3)] = null);

throw cr34516_exception;
}});
var cr34516_block_0 = (function hyperfiddle$electric_client$boot_with_retry_$_cr34516_block_0(cr34516_state){
try{var cr34516_place_0 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr34516_place_1 = hyperfiddle.electric_client.retry_delays;
(cr34516_state[(0)] = cr34516_block_1);

(cr34516_state[(2)] = cr34516_place_0);

(cr34516_state[(1)] = cr34516_place_1);

return cr34516_state;
}catch (e34863){var cr34516_exception = e34863;
(cr34516_state[(0)] = null);

throw cr34516_exception;
}});
var cr34516_block_1 = (function hyperfiddle$electric_client$boot_with_retry_$_cr34516_block_1(cr34516_state){
try{var cr34516_place_0 = (cr34516_state[(2)]);
var cr34516_place_2 = cljs.core.object_array;
var cr34516_place_3 = (1);
var cr34516_place_4 = (function (){var G__34866 = cr34516_place_3;
var fexpr__34865 = cr34516_place_2;
return (fexpr__34865.cljs$core$IFn$_invoke$arity$1 ? fexpr__34865.cljs$core$IFn$_invoke$arity$1(G__34866) : fexpr__34865.call(null,G__34866));
})();
var cr34516_place_5 = console;
var cr34516_place_6 = "Connecting...";
var cr34516_place_7 = cr34516_place_5.log(cr34516_place_6);
var cr34516_place_8 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr34516_place_9 = cr34516_place_0;
var cr34516_place_10 = cr34516_place_9;
var cr34516_place_11 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr34516_place_10);
var cr34516_place_12 = null;
var cr34516_place_13 = false;
(cr34516_state[(0)] = cr34516_block_2);

(cr34516_state[(3)] = cr34516_place_12);

(cr34516_state[(4)] = cr34516_place_4);

(cr34516_state[(5)] = cr34516_place_13);

(cr34516_state[(6)] = cr34516_place_8);

return cr34516_state;
}catch (e34864){var cr34516_exception = e34864;
(cr34516_state[(0)] = null);

(cr34516_state[(1)] = null);

(cr34516_state[(2)] = null);

throw cr34516_exception;
}});
var cr34516_block_10 = (function hyperfiddle$electric_client$boot_with_retry_$_cr34516_block_10(cr34516_state){
try{var cr34516_place_69 = (cr34516_state[(1)]);
var cr34516_place_61 = (cr34516_state[(5)]);
var cr34516_place_86 = cljs.core.ex_info;
var cr34516_place_87 = "Remote error - ";
var cr34516_place_88 = cr34516_place_69;
var cr34516_place_89 = " ";
var cr34516_place_90 = new cljs.core.Keyword(null,"reason","reason",-2070751759);
var cr34516_place_91 = cr34516_place_61;
var cr34516_place_92 = cr34516_place_90.cljs$core$IFn$_invoke$arity$1(cr34516_place_91);
var cr34516_place_93 = [cr34516_place_87,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr34516_place_88),cr34516_place_89,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr34516_place_92)].join('');
var cr34516_place_94 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr34516_place_95 = (function (){var G__34869 = cr34516_place_93;
var G__34870 = cr34516_place_94;
var fexpr__34868 = cr34516_place_86;
return (fexpr__34868.cljs$core$IFn$_invoke$arity$2 ? fexpr__34868.cljs$core$IFn$_invoke$arity$2(G__34869,G__34870) : fexpr__34868.call(null,G__34869,G__34870));
})();
var cr34516_place_96 = (function(){throw cr34516_place_95})();
(cr34516_state[(0)] = null);

(cr34516_state[(1)] = null);

(cr34516_state[(5)] = null);

return null;
}catch (e34867){var cr34516_exception = e34867;
(cr34516_state[(0)] = null);

(cr34516_state[(1)] = null);

(cr34516_state[(5)] = null);

throw cr34516_exception;
}});
var cr34516_block_15 = (function hyperfiddle$electric_client$boot_with_retry_$_cr34516_block_15(cr34516_state){
try{var cr34516_place_60 = (cr34516_state[(4)]);
var cr34516_place_102 = cr34516_place_60;
var cr34516_place_103 = null;
var cr34516_place_104 = (cr34516_place_102 == cr34516_place_103);
var cr34516_place_105 = null;
if(cr34516_place_104){
(cr34516_state[(0)] = cr34516_block_18);

(cr34516_state[(1)] = null);

(cr34516_state[(2)] = null);

(cr34516_state[(4)] = null);

(cr34516_state[(1)] = cr34516_place_105);

return cr34516_state;
} else {
(cr34516_state[(0)] = cr34516_block_16);

return cr34516_state;
}
}catch (e34871){var cr34516_exception = e34871;
(cr34516_state[(0)] = null);

(cr34516_state[(1)] = null);

(cr34516_state[(2)] = null);

(cr34516_state[(4)] = null);

throw cr34516_exception;
}});
var cr34516_block_6 = (function hyperfiddle$electric_client$boot_with_retry_$_cr34516_block_6(cr34516_state){
try{var cr34516_place_56 = (cr34516_state[(3)]);
var cr34516_place_61 = cr34516_place_56;
var cr34516_place_62 = new cljs.core.Keyword(null,"code","code",1586293142);
var cr34516_place_63 = cr34516_place_61;
var cr34516_place_64 = cr34516_place_62.cljs$core$IFn$_invoke$arity$1(cr34516_place_63);
var cr34516_place_65 = cr34516_place_64;
var cr34516_place_66 = null;
var cr34516_place_67 = (cr34516_place_65 == cr34516_place_66);
var cr34516_place_68 = null;
if(cr34516_place_67){
(cr34516_state[(0)] = cr34516_block_12);

(cr34516_state[(3)] = null);

(cr34516_state[(3)] = cr34516_place_68);

return cr34516_state;
} else {
(cr34516_state[(0)] = cr34516_block_7);

(cr34516_state[(3)] = null);

(cr34516_state[(5)] = cr34516_place_61);

(cr34516_state[(6)] = cr34516_place_64);

(cr34516_state[(3)] = cr34516_place_68);

return cr34516_state;
}
}catch (e34872){var cr34516_exception = e34872;
(cr34516_state[(0)] = null);

(cr34516_state[(1)] = null);

(cr34516_state[(3)] = null);

(cr34516_state[(2)] = null);

(cr34516_state[(4)] = null);

throw cr34516_exception;
}});
var cr34516_block_5 = (function hyperfiddle$electric_client$boot_with_retry_$_cr34516_block_5(cr34516_state){
try{var cr34516_place_12 = (cr34516_state[(3)]);
var cr34516_place_13 = (cr34516_state[(5)]);
var cr34516_place_8 = (cr34516_state[(6)]);
var cr34516_place_54 = cr34516_place_8;
var cr34516_place_55 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr34516_place_54);
var cr34516_place_56 = (cljs.core.truth_(cr34516_place_13)?(function(){throw cr34516_place_12})():cr34516_place_12);
var cr34516_place_57 = cr34516_place_56;
var cr34516_place_58 = null;
var cr34516_place_59 = (cr34516_place_57 == cr34516_place_58);
var cr34516_place_60 = null;
if(cr34516_place_59){
(cr34516_state[(0)] = cr34516_block_14);

(cr34516_state[(3)] = null);

(cr34516_state[(5)] = null);

(cr34516_state[(6)] = null);

(cr34516_state[(4)] = cr34516_place_60);

return cr34516_state;
} else {
(cr34516_state[(0)] = cr34516_block_6);

(cr34516_state[(3)] = null);

(cr34516_state[(5)] = null);

(cr34516_state[(6)] = null);

(cr34516_state[(3)] = cr34516_place_56);

(cr34516_state[(4)] = cr34516_place_60);

return cr34516_state;
}
}catch (e34873){var cr34516_exception = e34873;
(cr34516_state[(0)] = null);

(cr34516_state[(3)] = null);

(cr34516_state[(1)] = null);

(cr34516_state[(2)] = null);

(cr34516_state[(5)] = null);

(cr34516_state[(6)] = null);

throw cr34516_exception;
}});
var cr34516_block_12 = (function hyperfiddle$electric_client$boot_with_retry_$_cr34516_block_12(cr34516_state){
try{var cr34516_place_1 = (cr34516_state[(1)]);
var cr34516_place_97 = console;
var cr34516_place_98 = "Failed to connect.";
var cr34516_place_99 = cr34516_place_97.log(cr34516_place_98);
var cr34516_place_100 = cr34516_place_1;
(cr34516_state[(0)] = cr34516_block_13);

(cr34516_state[(3)] = cr34516_place_100);

return cr34516_state;
}catch (e34874){var cr34516_exception = e34874;
(cr34516_state[(0)] = null);

(cr34516_state[(1)] = null);

(cr34516_state[(2)] = null);

(cr34516_state[(4)] = null);

(cr34516_state[(3)] = null);

throw cr34516_exception;
}});
var cr34516_block_2 = (function hyperfiddle$electric_client$boot_with_retry_$_cr34516_block_2(cr34516_state){
try{var cr34516_place_4 = (cr34516_state[(4)]);
var cr34516_place_14 = (function (x){
var fexpr__34651 = (cr34516_place_4[(0)]);
var G__34877 = x;
var fexpr__34876 = fexpr__34651;
return (fexpr__34876.cljs$core$IFn$_invoke$arity$1 ? fexpr__34876.cljs$core$IFn$_invoke$arity$1(G__34877) : fexpr__34876.call(null,G__34877));
});
var cr34516_place_15 = cljs.core.partial;
var cr34516_place_30 = (function (cr34652_state){
try{var cr34652_place_11 = (cr34652_state[(1)]);
var cr34652_place_52 = "No matching clause: ";
var cr34652_place_53 = cr34652_place_11;
var cr34652_place_54 = [cr34652_place_52,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr34652_place_53)].join('');
var cr34652_place_55 = (new Error(cr34652_place_54));
var cr34652_place_56 = (function(){throw cr34652_place_55})();
(cr34652_state[(0)] = null);

(cr34652_state[(1)] = null);

return null;
}catch (e34914){var e34724 = e34914;
var cr34652_exception = e34724;
(cr34652_state[(0)] = null);

(cr34652_state[(1)] = null);

throw cr34652_exception;
}});
var cr34516_place_20 = (function (cr34652_state){
try{var cr34652_place_40 = missionary.core.unpark();
var cr34652_place_41 = cr34652_place_40;
var cr34652_place_42 = null;
var G__34713 = cr34652_place_41;
var G__34916 = G__34713;
switch (G__34916) {
case (0):
(cr34652_state[(0)] = cr34516_place_25);

(cr34652_state[(1)] = null);

(cr34652_state[(1)] = cr34652_place_42);

return cr34652_state;

break;
case (1):
(cr34652_state[(0)] = cr34516_place_21);

(cr34652_state[(3)] = null);

(cr34652_state[(4)] = null);

return cr34652_state;

break;
default:
(cr34652_state[(0)] = cr34516_place_27);

(cr34652_state[(3)] = null);

(cr34652_state[(1)] = null);

(cr34652_state[(2)] = null);

(cr34652_state[(4)] = null);

(cr34652_state[(1)] = cr34652_place_40);

return cr34652_state;

}
}catch (e34915){var e34712 = e34915;
var cr34652_exception = e34712;
(cr34652_state[(0)] = null);

(cr34652_state[(3)] = null);

(cr34652_state[(1)] = null);

(cr34652_state[(2)] = null);

(cr34652_state[(4)] = null);

throw cr34652_exception;
}});
var cr34516_place_33 = (function (cr34652_state){
try{var cr34652_place_4 = (cr34652_state[(1)]);
var cr34652_place_27 = cr34652_place_4;
(cr34652_state[(0)] = cr34516_place_31);

return missionary.core.park(cr34652_place_27);
}catch (e34917){var e34727 = e34917;
var cr34652_exception = e34727;
(cr34652_state[(0)] = null);

(cr34652_state[(1)] = null);

(cr34652_state[(2)] = null);

throw cr34652_exception;
}});
var cr34516_place_31 = (function (cr34652_state){
try{var cr34652_place_28 = missionary.core.unpark();
var cr34652_place_29 = cr34652_place_28;
var cr34652_place_30 = null;
var cr34652_place_31 = (cr34652_place_29 == cr34652_place_30);
var cr34652_place_32 = null;
if(cr34652_place_31){
(cr34652_state[(0)] = cr34516_place_26);

(cr34652_state[(1)] = null);

(cr34652_state[(4)] = cr34652_place_32);

return cr34652_state;
} else {
(cr34652_state[(0)] = cr34516_place_19);

(cr34652_state[(3)] = cr34652_place_28);

(cr34652_state[(4)] = cr34652_place_32);

return cr34652_state;
}
}catch (e34918){var e34725 = e34918;
var cr34652_exception = e34725;
(cr34652_state[(0)] = null);

(cr34652_state[(1)] = null);

(cr34652_state[(2)] = null);

throw cr34652_exception;
}});
var cr34516_place_16 = (function (cr34652_state){
try{(cr34652_state[(0)] = cr34516_place_33);

return cr34652_state;
}catch (e34919){var e34693 = e34919;
var cr34652_exception = e34693;
(cr34652_state[(0)] = null);

(cr34652_state[(1)] = null);

(cr34652_state[(2)] = null);

throw cr34652_exception;
}});
var cr34516_place_23 = (function (cr34652_state){
try{var cr34652_place_51 = missionary.core.unpark();
(cr34652_state[(0)] = cr34516_place_34);

(cr34652_state[(4)] = cr34652_place_51);

return cr34652_state;
}catch (e34920){var e34717 = e34920;
var cr34652_exception = e34717;
(cr34652_state[(0)] = null);

(cr34652_state[(2)] = null);

(cr34652_state[(4)] = null);

throw cr34652_exception;
}});
var cr34516_place_25 = (function (cr34652_state){
try{var cr34652_place_33 = (cr34652_state[(3)]);
var cr34652_place_43 = cr34652_place_33;
(cr34652_state[(0)] = cr34516_place_24);

(cr34652_state[(3)] = null);

(cr34652_state[(1)] = cr34652_place_43);

return cr34652_state;
}catch (e34921){var e34719 = e34921;
var cr34652_exception = e34719;
(cr34652_state[(0)] = null);

(cr34652_state[(3)] = null);

(cr34652_state[(2)] = null);

(cr34652_state[(4)] = null);

(cr34652_state[(1)] = null);

throw cr34652_exception;
}});
var cr34516_place_32 = (function (cr34652_state){
try{var cr34652_place_26 = missionary.core.unpark();
(cr34652_state[(0)] = cr34516_place_28);

(cr34652_state[(2)] = cr34652_place_26);

return cr34652_state;
}catch (e34922){var e34726 = e34922;
var cr34652_exception = e34726;
(cr34652_state[(0)] = null);

(cr34652_state[(2)] = null);

throw cr34652_exception;
}});
var cr34516_place_22 = (function (cr34652_state){
try{var cr34652_place_11 = missionary.core.unpark();
var cr34652_place_12 = cr34652_place_11;
var cr34652_place_13 = null;
var G__34716 = cr34652_place_12;
var G__34924 = G__34716;
switch (G__34924) {
case (0):
(cr34652_state[(0)] = cr34516_place_17);

(cr34652_state[(2)] = cr34652_place_13);

return cr34652_state;

break;
case (1):
(cr34652_state[(0)] = cr34516_place_16);

(cr34652_state[(2)] = cr34652_place_13);

return cr34652_state;

break;
default:
(cr34652_state[(0)] = cr34516_place_30);

(cr34652_state[(1)] = null);

(cr34652_state[(1)] = cr34652_place_11);

return cr34652_state;

}
}catch (e34923){var e34715 = e34923;
var cr34652_exception = e34715;
(cr34652_state[(0)] = null);

(cr34652_state[(1)] = null);

throw cr34652_exception;
}});
var cr34516_place_17 = (function (cr34652_state){
try{var cr34652_place_4 = (cr34652_state[(1)]);
var cr34652_place_14 = cr34652_place_4;
var cr34652_place_15 = hyperfiddle.electric.impl.runtime.subject_at;
var cr34652_place_16 = cr34516_place_4;
var cr34652_place_17 = (0);
var cr34652_place_18 = (function (){var G__34696 = cr34652_place_16;
var G__34697 = cr34652_place_17;
var fexpr__34695 = cr34652_place_15;
var G__34927 = G__34696;
var G__34928 = G__34697;
var fexpr__34926 = fexpr__34695;
return (fexpr__34926.cljs$core$IFn$_invoke$arity$2 ? fexpr__34926.cljs$core$IFn$_invoke$arity$2(G__34927,G__34928) : fexpr__34926.call(null,G__34927,G__34928));
})();
var cr34652_place_19 = client;
var cr34652_place_20 = cr34652_place_14;
var cr34652_place_21 = cr34652_place_18;
var cr34652_place_22 = (function (){var G__34699 = cr34652_place_20;
var G__34700 = cr34652_place_21;
var fexpr__34698 = cr34652_place_19;
var G__34930 = G__34699;
var G__34931 = G__34700;
var fexpr__34929 = fexpr__34698;
return (fexpr__34929.cljs$core$IFn$_invoke$arity$2 ? fexpr__34929.cljs$core$IFn$_invoke$arity$2(G__34930,G__34931) : fexpr__34929.call(null,G__34930,G__34931));
})();
(cr34652_state[(0)] = cr34516_place_29);

(cr34652_state[(1)] = null);

return missionary.core.park(cr34652_place_22);
}catch (e34925){var e34694 = e34925;
var cr34652_exception = e34694;
(cr34652_state[(0)] = null);

(cr34652_state[(1)] = null);

(cr34652_state[(2)] = null);

throw cr34652_exception;
}});
var cr34516_place_29 = (function (cr34652_state){
try{var cr34652_place_23 = missionary.core.unpark();
var cr34652_place_24 = (1);
var cr34652_place_25 = missionary.core.none;
(cr34652_state[(0)] = cr34516_place_32);

return missionary.core.fork(cr34652_place_24,cr34652_place_25);
}catch (e34932){var e34723 = e34932;
var cr34652_exception = e34723;
(cr34652_state[(0)] = null);

(cr34652_state[(2)] = null);

throw cr34652_exception;
}});
var cr34516_place_27 = (function (cr34652_state){
try{var cr34652_place_40 = (cr34652_state[(1)]);
var cr34652_place_44 = "No matching clause: ";
var cr34652_place_45 = cr34652_place_40;
var cr34652_place_46 = [cr34652_place_44,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr34652_place_45)].join('');
var cr34652_place_47 = (new Error(cr34652_place_46));
var cr34652_place_48 = (function(){throw cr34652_place_47})();
(cr34652_state[(0)] = null);

(cr34652_state[(1)] = null);

return null;
}catch (e34933){var e34721 = e34933;
var cr34652_exception = e34721;
(cr34652_state[(0)] = null);

(cr34652_state[(1)] = null);

throw cr34652_exception;
}});
var cr34516_place_26 = (function (cr34652_state){
try{var cr34652_place_49 = (1);
var cr34652_place_50 = missionary.core.none;
(cr34652_state[(0)] = cr34516_place_23);

return missionary.core.fork(cr34652_place_49,cr34652_place_50);
}catch (e34934){var e34720 = e34934;
var cr34652_exception = e34720;
(cr34652_state[(0)] = null);

(cr34652_state[(2)] = null);

(cr34652_state[(4)] = null);

throw cr34652_exception;
}});
var cr34516_place_24 = (function (cr34652_state){
try{var cr34652_place_42 = (cr34652_state[(1)]);
(cr34652_state[(0)] = cr34516_place_34);

(cr34652_state[(1)] = null);

(cr34652_state[(4)] = cr34652_place_42);

return cr34652_state;
}catch (e34935){var e34718 = e34935;
var cr34652_exception = e34718;
(cr34652_state[(0)] = null);

(cr34652_state[(2)] = null);

(cr34652_state[(4)] = null);

(cr34652_state[(1)] = null);

throw cr34652_exception;
}});
var cr34516_place_18 = (function (cr34652_state){
try{var cr34652_place_0 = console;
var cr34652_place_1 = "Connected.";
var cr34652_place_2 = cr34652_place_0.log(cr34652_place_1);
var cr34652_place_3 = missionary.core.rdv;
var cr34652_place_4 = (function (){var fexpr__34702 = cr34652_place_3;
var fexpr__34937 = fexpr__34702;
return (fexpr__34937.cljs$core$IFn$_invoke$arity$0 ? fexpr__34937.cljs$core$IFn$_invoke$arity$0() : fexpr__34937.call(null));
})();
var cr34652_place_5 = (2);
var cr34652_place_6 = missionary.core.seed;
var cr34652_place_7 = cljs.core.range;
var cr34652_place_8 = (2);
var cr34652_place_9 = (function (){var G__34704 = cr34652_place_8;
var fexpr__34703 = cr34652_place_7;
var G__34939 = G__34704;
var fexpr__34938 = fexpr__34703;
return (fexpr__34938.cljs$core$IFn$_invoke$arity$1 ? fexpr__34938.cljs$core$IFn$_invoke$arity$1(G__34939) : fexpr__34938.call(null,G__34939));
})();
var cr34652_place_10 = (function (){var G__34706 = cr34652_place_9;
var fexpr__34705 = cr34652_place_6;
var G__34941 = G__34706;
var fexpr__34940 = fexpr__34705;
return (fexpr__34940.cljs$core$IFn$_invoke$arity$1 ? fexpr__34940.cljs$core$IFn$_invoke$arity$1(G__34941) : fexpr__34940.call(null,G__34941));
})();
(cr34652_state[(0)] = cr34516_place_22);

(cr34652_state[(1)] = cr34652_place_4);

return missionary.core.fork(cr34652_place_5,cr34652_place_10);
}catch (e34936){var e34701 = e34936;
var cr34652_exception = e34701;
(cr34652_state[(0)] = null);

throw cr34652_exception;
}});
var cr34516_place_34 = (function (cr34652_state){
try{var cr34652_place_32 = (cr34652_state[(4)]);
(cr34652_state[(0)] = cr34516_place_28);

(cr34652_state[(4)] = null);

(cr34652_state[(2)] = cr34652_place_32);

return cr34652_state;
}catch (e34942){var e34728 = e34942;
var cr34652_exception = e34728;
(cr34652_state[(0)] = null);

(cr34652_state[(2)] = null);

(cr34652_state[(4)] = null);

throw cr34652_exception;
}});
var cr34516_place_19 = (function (cr34652_state){
try{var cr34652_place_28 = (cr34652_state[(3)]);
var cr34652_place_33 = cr34652_place_28;
var cr34652_place_34 = (1);
var cr34652_place_35 = missionary.core.seed;
var cr34652_place_36 = cljs.core.range;
var cr34652_place_37 = (2);
var cr34652_place_38 = (function (){var G__34709 = cr34652_place_37;
var fexpr__34708 = cr34652_place_36;
var G__34945 = G__34709;
var fexpr__34944 = fexpr__34708;
return (fexpr__34944.cljs$core$IFn$_invoke$arity$1 ? fexpr__34944.cljs$core$IFn$_invoke$arity$1(G__34945) : fexpr__34944.call(null,G__34945));
})();
var cr34652_place_39 = (function (){var G__34711 = cr34652_place_38;
var fexpr__34710 = cr34652_place_35;
var G__34947 = G__34711;
var fexpr__34946 = fexpr__34710;
return (fexpr__34946.cljs$core$IFn$_invoke$arity$1 ? fexpr__34946.cljs$core$IFn$_invoke$arity$1(G__34947) : fexpr__34946.call(null,G__34947));
})();
(cr34652_state[(0)] = cr34516_place_20);

(cr34652_state[(3)] = null);

(cr34652_state[(3)] = cr34652_place_33);

return missionary.core.fork(cr34652_place_34,cr34652_place_39);
}catch (e34943){var e34707 = e34943;
var cr34652_exception = e34707;
(cr34652_state[(0)] = null);

(cr34652_state[(1)] = null);

(cr34652_state[(2)] = null);

(cr34652_state[(3)] = null);

(cr34652_state[(4)] = null);

throw cr34652_exception;
}});
var cr34516_place_21 = (function (cr34652_state){
try{(cr34652_state[(0)] = cr34516_place_33);

return cr34652_state;
}catch (e34948){var e34714 = e34948;
var cr34652_exception = e34714;
(cr34652_state[(0)] = null);

(cr34652_state[(1)] = null);

(cr34652_state[(2)] = null);

throw cr34652_exception;
}});
var cr34516_place_28 = (function (cr34652_state){
try{var cr34652_place_13 = (cr34652_state[(2)]);
(cr34652_state[(0)] = null);

(cr34652_state[(2)] = null);

return cr34652_place_13;
}catch (e34949){var e34722 = e34949;
var cr34652_exception = e34722;
(cr34652_state[(0)] = null);

(cr34652_state[(2)] = null);

throw cr34652_exception;
}});
var cr34516_place_35 = cloroutine.impl.coroutine;
var cr34516_place_36 = cljs.core.object_array;
var cr34516_place_37 = (5);
var cr34516_place_38 = (function (){var G__34951 = cr34516_place_37;
var fexpr__34950 = cr34516_place_36;
return (fexpr__34950.cljs$core$IFn$_invoke$arity$1 ? fexpr__34950.cljs$core$IFn$_invoke$arity$1(G__34951) : fexpr__34950.call(null,G__34951));
})();
var cr34516_place_39 = cr34516_place_38;
var cr34516_place_40 = (0);
var cr34516_place_41 = cr34516_place_18;
var cr34516_place_42 = (cr34516_place_39[cr34516_place_40] = cr34516_place_41);
var cr34516_place_43 = cr34516_place_38;
var cr34516_place_44 = (function (){var G__34953 = cr34516_place_43;
var fexpr__34952 = cr34516_place_35;
return (fexpr__34952.cljs$core$IFn$_invoke$arity$1 ? fexpr__34952.cljs$core$IFn$_invoke$arity$1(G__34953) : fexpr__34952.call(null,G__34953));
})();
var cr34516_place_45 = missionary.core.ap_run;
var cr34516_place_46 = (function (){var G__34955 = cr34516_place_44;
var G__34956 = cr34516_place_45;
var fexpr__34954 = cr34516_place_15;
return (fexpr__34954.cljs$core$IFn$_invoke$arity$2 ? fexpr__34954.cljs$core$IFn$_invoke$arity$2(G__34955,G__34956) : fexpr__34954.call(null,G__34955,G__34956));
})();
var cr34516_place_47 = conn;
var cr34516_place_48 = cr34516_place_14;
var cr34516_place_49 = cr34516_place_46;
var cr34516_place_50 = (function (){var G__34958 = cr34516_place_48;
var G__34959 = cr34516_place_49;
var fexpr__34957 = cr34516_place_47;
return (fexpr__34957.cljs$core$IFn$_invoke$arity$2 ? fexpr__34957.cljs$core$IFn$_invoke$arity$2(G__34958,G__34959) : fexpr__34957.call(null,G__34958,G__34959));
})();
(cr34516_state[(0)] = cr34516_block_3);

(cr34516_state[(4)] = null);

return missionary.core.park(cr34516_place_50);
}catch (e34875){var cr34516_exception = e34875;
(cr34516_state[(0)] = cr34516_block_4);

(cr34516_state[(4)] = null);

(cr34516_state[(3)] = cr34516_exception);

return cr34516_state;
}});
var cr34516_block_7 = (function hyperfiddle$electric_client$boot_with_retry_$_cr34516_block_7(cr34516_state){
try{var cr34516_place_64 = (cr34516_state[(6)]);
var cr34516_place_69 = cr34516_place_64;
var cr34516_place_70 = cr34516_place_69;
var cr34516_place_71 = cr34516_place_70;
var cr34516_place_72 = null;
var G__34961 = cr34516_place_71;
switch (G__34961) {
case (1005):
case (1006):
(cr34516_state[(0)] = cr34516_block_8);

(cr34516_state[(5)] = null);

(cr34516_state[(6)] = null);

(cr34516_state[(5)] = cr34516_place_72);

return cr34516_state;

break;
case (1008):
(cr34516_state[(0)] = cr34516_block_9);

(cr34516_state[(1)] = null);

(cr34516_state[(2)] = null);

(cr34516_state[(4)] = null);

(cr34516_state[(3)] = null);

(cr34516_state[(5)] = null);

(cr34516_state[(6)] = null);

return cr34516_state;

break;
default:
(cr34516_state[(0)] = cr34516_block_10);

(cr34516_state[(1)] = null);

(cr34516_state[(2)] = null);

(cr34516_state[(4)] = null);

(cr34516_state[(3)] = null);

(cr34516_state[(6)] = null);

(cr34516_state[(1)] = cr34516_place_69);

return cr34516_state;

}
}catch (e34960){var cr34516_exception = e34960;
(cr34516_state[(0)] = null);

(cr34516_state[(1)] = null);

(cr34516_state[(2)] = null);

(cr34516_state[(4)] = null);

(cr34516_state[(3)] = null);

(cr34516_state[(5)] = null);

(cr34516_state[(6)] = null);

throw cr34516_exception;
}});
var cr34516_block_8 = (function hyperfiddle$electric_client$boot_with_retry_$_cr34516_block_8(cr34516_state){
try{var cr34516_place_73 = console;
var cr34516_place_74 = "Connection lost.";
var cr34516_place_75 = cr34516_place_73.log(cr34516_place_74);
var cr34516_place_76 = cljs.core.seq;
var cr34516_place_77 = hyperfiddle.electric_client.retry_delays;
var cr34516_place_78 = (function (){var G__34964 = cr34516_place_77;
var fexpr__34963 = cr34516_place_76;
return (fexpr__34963.cljs$core$IFn$_invoke$arity$1 ? fexpr__34963.cljs$core$IFn$_invoke$arity$1(G__34964) : fexpr__34963.call(null,G__34964));
})();
(cr34516_state[(0)] = cr34516_block_11);

(cr34516_state[(5)] = cr34516_place_78);

return cr34516_state;
}catch (e34962){var cr34516_exception = e34962;
(cr34516_state[(0)] = null);

(cr34516_state[(1)] = null);

(cr34516_state[(5)] = null);

(cr34516_state[(2)] = null);

(cr34516_state[(4)] = null);

(cr34516_state[(3)] = null);

throw cr34516_exception;
}});
var cr34516_block_19 = (function hyperfiddle$electric_client$boot_with_retry_$_cr34516_block_19(cr34516_state){
try{var cr34516_place_105 = (cr34516_state[(1)]);
(cr34516_state[(0)] = null);

(cr34516_state[(1)] = null);

return cr34516_place_105;
}catch (e34965){var cr34516_exception = e34965;
(cr34516_state[(0)] = null);

(cr34516_state[(1)] = null);

throw cr34516_exception;
}});
var cr34516_block_16 = (function hyperfiddle$electric_client$boot_with_retry_$_cr34516_block_16(cr34516_state){
try{var cr34516_place_60 = (cr34516_state[(4)]);
var cr34516_place_106 = cr34516_place_60;
var cr34516_place_107 = cljs.core.seq;
var cr34516_place_108 = cr34516_place_106;
var cr34516_place_109 = (function (){var G__34968 = cr34516_place_108;
var fexpr__34967 = cr34516_place_107;
return (fexpr__34967.cljs$core$IFn$_invoke$arity$1 ? fexpr__34967.cljs$core$IFn$_invoke$arity$1(G__34968) : fexpr__34967.call(null,G__34968));
})();
var cr34516_place_110 = cljs.core.first;
var cr34516_place_111 = cr34516_place_109;
var cr34516_place_112 = (function (){var G__34970 = cr34516_place_111;
var fexpr__34969 = cr34516_place_110;
return (fexpr__34969.cljs$core$IFn$_invoke$arity$1 ? fexpr__34969.cljs$core$IFn$_invoke$arity$1(G__34970) : fexpr__34969.call(null,G__34970));
})();
var cr34516_place_113 = cljs.core.next;
var cr34516_place_114 = cr34516_place_109;
var cr34516_place_115 = (function (){var G__34972 = cr34516_place_114;
var fexpr__34971 = cr34516_place_113;
return (fexpr__34971.cljs$core$IFn$_invoke$arity$1 ? fexpr__34971.cljs$core$IFn$_invoke$arity$1(G__34972) : fexpr__34971.call(null,G__34972));
})();
var cr34516_place_116 = cr34516_place_112;
var cr34516_place_117 = cr34516_place_115;
var cr34516_place_118 = console;
var cr34516_place_119 = "Next attempt in ";
var cr34516_place_120 = cr34516_place_116;
var cr34516_place_121 = (1000);
var cr34516_place_122 = (cr34516_place_120 / cr34516_place_121);
var cr34516_place_123 = " seconds.";
var cr34516_place_124 = [cr34516_place_119,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr34516_place_122),cr34516_place_123].join('');
var cr34516_place_125 = cr34516_place_118.log(cr34516_place_124);
var cr34516_place_126 = missionary.core.sleep;
var cr34516_place_127 = cr34516_place_116;
var cr34516_place_128 = cr34516_place_117;
var cr34516_place_129 = (function (){var G__34974 = cr34516_place_127;
var G__34975 = cr34516_place_128;
var fexpr__34973 = cr34516_place_126;
return (fexpr__34973.cljs$core$IFn$_invoke$arity$2 ? fexpr__34973.cljs$core$IFn$_invoke$arity$2(G__34974,G__34975) : fexpr__34973.call(null,G__34974,G__34975));
})();
(cr34516_state[(0)] = cr34516_block_17);

(cr34516_state[(4)] = null);

return missionary.core.park(cr34516_place_129);
}catch (e34966){var cr34516_exception = e34966;
(cr34516_state[(0)] = null);

(cr34516_state[(1)] = null);

(cr34516_state[(2)] = null);

(cr34516_state[(4)] = null);

throw cr34516_exception;
}});
var cr34516_block_4 = (function hyperfiddle$electric_client$boot_with_retry_$_cr34516_block_4(cr34516_state){
try{var cr34516_place_12 = (cr34516_state[(3)]);
var cr34516_place_52 = cr34516_place_12;
var cr34516_place_53 = (function(){throw cr34516_place_52})();
(cr34516_state[(0)] = null);

(cr34516_state[(3)] = null);

(cr34516_state[(1)] = null);

(cr34516_state[(2)] = null);

(cr34516_state[(5)] = null);

(cr34516_state[(6)] = null);

return null;
}catch (e34976){var cr34516_exception = e34976;
(cr34516_state[(0)] = cr34516_block_5);

(cr34516_state[(5)] = true);

(cr34516_state[(3)] = cr34516_exception);

return cr34516_state;
}});
var cr34516_block_14 = (function hyperfiddle$electric_client$boot_with_retry_$_cr34516_block_14(cr34516_state){
try{var cr34516_place_101 = null;
(cr34516_state[(0)] = cr34516_block_15);

(cr34516_state[(4)] = cr34516_place_101);

return cr34516_state;
}catch (e34977){var cr34516_exception = e34977;
(cr34516_state[(0)] = null);

(cr34516_state[(1)] = null);

(cr34516_state[(2)] = null);

(cr34516_state[(4)] = null);

throw cr34516_exception;
}});
var cr34516_block_18 = (function hyperfiddle$electric_client$boot_with_retry_$_cr34516_block_18(cr34516_state){
try{var cr34516_place_131 = null;
(cr34516_state[(0)] = cr34516_block_19);

(cr34516_state[(1)] = cr34516_place_131);

return cr34516_state;
}catch (e34978){var cr34516_exception = e34978;
(cr34516_state[(0)] = null);

(cr34516_state[(1)] = null);

throw cr34516_exception;
}});
var cr34516_block_13 = (function hyperfiddle$electric_client$boot_with_retry_$_cr34516_block_13(cr34516_state){
try{var cr34516_place_68 = (cr34516_state[(3)]);
(cr34516_state[(0)] = cr34516_block_15);

(cr34516_state[(3)] = null);

(cr34516_state[(4)] = cr34516_place_68);

return cr34516_state;
}catch (e34979){var cr34516_exception = e34979;
(cr34516_state[(0)] = null);

(cr34516_state[(1)] = null);

(cr34516_state[(2)] = null);

(cr34516_state[(4)] = null);

(cr34516_state[(3)] = null);

throw cr34516_exception;
}});
var cr34516_block_3 = (function hyperfiddle$electric_client$boot_with_retry_$_cr34516_block_3(cr34516_state){
try{var cr34516_place_51 = missionary.core.unpark();
(cr34516_state[(0)] = cr34516_block_5);

(cr34516_state[(3)] = cr34516_place_51);

return cr34516_state;
}catch (e34980){var cr34516_exception = e34980;
(cr34516_state[(0)] = cr34516_block_4);

(cr34516_state[(3)] = cr34516_exception);

return cr34516_state;
}});
var cr34516_block_17 = (function hyperfiddle$electric_client$boot_with_retry_$_cr34516_block_17(cr34516_state){
try{var cr34516_place_130 = missionary.core.unpark();
(cr34516_state[(0)] = cr34516_block_1);

(cr34516_state[(1)] = cr34516_place_130);

return cr34516_state;
}catch (e34981){var cr34516_exception = e34981;
(cr34516_state[(0)] = null);

(cr34516_state[(1)] = null);

(cr34516_state[(2)] = null);

throw cr34516_exception;
}});
return cloroutine.impl.coroutine((function (){var G__34982 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((7));
(G__34982[(0)] = cr34516_block_0);

return G__34982;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.reload_when_stale = (function hyperfiddle$electric_client$reload_when_stale(task){
return (function (s,f){
var G__34983 = s;
var G__34984 = (function (error){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405),new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(error)))){
console.log("Server and client version mismatch. Refreshing page.");

window.location.reload();
} else {
}

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(error) : f.call(null,error));
});
return (task.cljs$core$IFn$_invoke$arity$2 ? task.cljs$core$IFn$_invoke$arity$2(G__34983,G__34984) : task.call(null,G__34983,G__34984));
});
});

//# sourceMappingURL=hyperfiddle.electric_client.js.map
