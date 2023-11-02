goog.provide('hyperfiddle.electric_client');
/**
 * @define {string}
 */
hyperfiddle.electric_client.VERSION = goog.define("hyperfiddle.electric_client.VERSION","");
hyperfiddle.electric_client.server_url = (function hyperfiddle$electric_client$server_url(){
var url = (new URL(window.location));
var proto = url.protocol;
(url.protocol = (function (){var G__30206 = proto;
switch (G__30206) {
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
}catch (e30218){var e = e30218;
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));

return (function (){
return cljs.core.List.EMPTY;
});
}});
});
hyperfiddle.electric_client.wait_for_flush = (function hyperfiddle$electric_client$wait_for_flush(ws){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30222_block_0 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30222_block_0(cr30222_state){
try{(cr30222_state[(0)] = cr30222_block_1);

return cr30222_state;
}catch (e30246){var cr30222_exception = e30246;
(cr30222_state[(0)] = null);

throw cr30222_exception;
}});
var cr30222_block_1 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30222_block_1(cr30222_state){
try{var cr30222_place_0 = (4096);
var cr30222_place_1 = ws;
var cr30222_place_2 = cr30222_place_1.bufferedAmount;
var cr30222_place_3 = (cr30222_place_0 < cr30222_place_2);
var cr30222_place_4 = null;
if(cr30222_place_3){
(cr30222_state[(0)] = cr30222_block_3);

return cr30222_state;
} else {
(cr30222_state[(0)] = cr30222_block_2);

(cr30222_state[(1)] = cr30222_place_4);

return cr30222_state;
}
}catch (e30249){var cr30222_exception = e30249;
(cr30222_state[(0)] = null);

throw cr30222_exception;
}});
var cr30222_block_2 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30222_block_2(cr30222_state){
try{var cr30222_place_5 = null;
(cr30222_state[(0)] = cr30222_block_5);

(cr30222_state[(1)] = cr30222_place_5);

return cr30222_state;
}catch (e30254){var cr30222_exception = e30254;
(cr30222_state[(0)] = null);

(cr30222_state[(1)] = null);

throw cr30222_exception;
}});
var cr30222_block_3 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30222_block_3(cr30222_state){
try{var cr30222_place_6 = missionary.core.sleep;
var cr30222_place_7 = (50);
var cr30222_place_8 = (function (){var G__30258 = cr30222_place_7;
var fexpr__30257 = cr30222_place_6;
return (fexpr__30257.cljs$core$IFn$_invoke$arity$1 ? fexpr__30257.cljs$core$IFn$_invoke$arity$1(G__30258) : fexpr__30257.call(null,G__30258));
})();
(cr30222_state[(0)] = cr30222_block_4);

return missionary.core.park(cr30222_place_8);
}catch (e30256){var cr30222_exception = e30256;
(cr30222_state[(0)] = null);

throw cr30222_exception;
}});
var cr30222_block_4 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30222_block_4(cr30222_state){
try{var cr30222_place_9 = missionary.core.unpark();
(cr30222_state[(0)] = cr30222_block_1);

return cr30222_state;
}catch (e30262){var cr30222_exception = e30262;
(cr30222_state[(0)] = null);

throw cr30222_exception;
}});
var cr30222_block_5 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30222_block_5(cr30222_state){
try{var cr30222_place_4 = (cr30222_state[(1)]);
(cr30222_state[(0)] = null);

(cr30222_state[(1)] = null);

return cr30222_place_4;
}catch (e30264){var cr30222_exception = e30264;
(cr30222_state[(0)] = null);

(cr30222_state[(1)] = null);

throw cr30222_exception;
}});
return cloroutine.impl.coroutine((function (){var G__30265 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__30265[(0)] = cr30222_block_0);

return G__30265;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.wait_for_close = (function hyperfiddle$electric_client$wait_for_close(ws){
return (function (s,f){
(ws.onclose = (function (e){
(ws.onclose = null);

var G__30266 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),e.code,new cljs.core.Keyword(null,"reason","reason",-2070751759),e.reason], null);
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__30266) : s.call(null,G__30266));
}));

return (function (){
if((ws.onclose == null)){
return null;
} else {
(ws.onclose = null);

var G__30269 = (new missionary.Cancelled());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30269) : f.call(null,G__30269));
}
});
});
});
hyperfiddle.electric_client.payload = (function hyperfiddle$electric_client$payload(x){
return x.data;
});
hyperfiddle.electric_client.send_BANG_ = (function hyperfiddle$electric_client$send_BANG_(ws,msg){
var G__30273 = ws;
G__30273.send(msg);

return G__30273;
});
hyperfiddle.electric_client.send_all = (function hyperfiddle$electric_client$send_all(ws,msgs){
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30277_block_0 = (function hyperfiddle$electric_client$send_all_$_cr30277_block_0(cr30277_state){
try{var cr30277_place_0 = hyperfiddle.electric_client.wait_for_flush;
var cr30277_place_1 = hyperfiddle.electric_client.send_BANG_;
var cr30277_place_2 = ws;
var cr30277_place_3 = hyperfiddle.electric.impl.io.encode;
var cr30277_place_4 = (1);
var cr30277_place_5 = msgs;
(cr30277_state[(0)] = cr30277_block_1);

(cr30277_state[(4)] = cr30277_place_0);

(cr30277_state[(2)] = cr30277_place_1);

(cr30277_state[(1)] = cr30277_place_2);

(cr30277_state[(3)] = cr30277_place_3);

return missionary.core.fork(cr30277_place_4,cr30277_place_5);
}catch (e30313){var cr30277_exception = e30313;
(cr30277_state[(0)] = null);

throw cr30277_exception;
}});
var cr30277_block_1 = (function hyperfiddle$electric_client$send_all_$_cr30277_block_1(cr30277_state){
try{var cr30277_place_2 = (cr30277_state[(1)]);
var cr30277_place_1 = (cr30277_state[(2)]);
var cr30277_place_3 = (cr30277_state[(3)]);
var cr30277_place_0 = (cr30277_state[(4)]);
var cr30277_place_6 = missionary.core.unpark();
var cr30277_place_7 = (function (){var G__30328 = cr30277_place_6;
var fexpr__30327 = cr30277_place_3;
return (fexpr__30327.cljs$core$IFn$_invoke$arity$1 ? fexpr__30327.cljs$core$IFn$_invoke$arity$1(G__30328) : fexpr__30327.call(null,G__30328));
})();
var cr30277_place_8 = (function (){var G__30330 = cr30277_place_2;
var G__30331 = cr30277_place_7;
var fexpr__30329 = cr30277_place_1;
return (fexpr__30329.cljs$core$IFn$_invoke$arity$2 ? fexpr__30329.cljs$core$IFn$_invoke$arity$2(G__30330,G__30331) : fexpr__30329.call(null,G__30330,G__30331));
})();
var cr30277_place_9 = (function (){var G__30337 = cr30277_place_8;
var fexpr__30336 = cr30277_place_0;
return (fexpr__30336.cljs$core$IFn$_invoke$arity$1 ? fexpr__30336.cljs$core$IFn$_invoke$arity$1(G__30337) : fexpr__30336.call(null,G__30337));
})();
(cr30277_state[(0)] = cr30277_block_2);

(cr30277_state[(1)] = null);

(cr30277_state[(2)] = null);

(cr30277_state[(3)] = null);

(cr30277_state[(4)] = null);

return missionary.core.park(cr30277_place_9);
}catch (e30323){var cr30277_exception = e30323;
(cr30277_state[(0)] = null);

(cr30277_state[(1)] = null);

(cr30277_state[(2)] = null);

(cr30277_state[(3)] = null);

(cr30277_state[(4)] = null);

throw cr30277_exception;
}});
var cr30277_block_2 = (function hyperfiddle$electric_client$send_all_$_cr30277_block_2(cr30277_state){
try{var cr30277_place_10 = missionary.core.unpark();
(cr30277_state[(0)] = null);

return cr30277_place_10;
}catch (e30340){var cr30277_exception = e30340;
(cr30277_state[(0)] = null);

throw cr30277_exception;
}});
return cloroutine.impl.coroutine((function (){var G__30344 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__30344[(0)] = cr30277_block_0);

return G__30344;
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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30352_block_3 = (function hyperfiddle$electric_client$connector_$_cr30352_block_3(cr30352_state){
try{var cr30352_place_8 = (cr30352_state[(2)]);
var cr30352_place_11 = hyperfiddle.electric_client.send_BANG_;
var cr30352_place_12 = cr30352_place_8;
var cr30352_place_13 = hyperfiddle.electric.impl.io.encode;
var cr30352_place_14 = server;
var cr30352_place_15 = (function (){var G__30446 = cr30352_place_14;
var fexpr__30445 = cr30352_place_13;
return (fexpr__30445.cljs$core$IFn$_invoke$arity$1 ? fexpr__30445.cljs$core$IFn$_invoke$arity$1(G__30446) : fexpr__30445.call(null,G__30446));
})();
var cr30352_place_16 = (function (){var G__30451 = cr30352_place_12;
var G__30452 = cr30352_place_15;
var fexpr__30450 = cr30352_place_11;
return (fexpr__30450.cljs$core$IFn$_invoke$arity$2 ? fexpr__30450.cljs$core$IFn$_invoke$arity$2(G__30451,G__30452) : fexpr__30450.call(null,G__30451,G__30452));
})();
var cr30352_place_17 = cr30352_place_8;
var cr30352_place_18 = cljs.core.comp;
var cr30352_place_19 = cb;
var cr30352_place_20 = hyperfiddle.electric.impl.io.decode;
var cr30352_place_21 = hyperfiddle.electric_client.payload;
var cr30352_place_22 = (function (){var G__30456 = cr30352_place_19;
var G__30457 = cr30352_place_20;
var G__30458 = cr30352_place_21;
var fexpr__30455 = cr30352_place_18;
return (fexpr__30455.cljs$core$IFn$_invoke$arity$3 ? fexpr__30455.cljs$core$IFn$_invoke$arity$3(G__30456,G__30457,G__30458) : fexpr__30455.call(null,G__30456,G__30457,G__30458));
})();
var cr30352_place_23 = (cr30352_place_17.onmessage = cr30352_place_22);
var cr30352_place_24 = missionary.core.race;
var cr30352_place_25 = hyperfiddle.electric_client.send_all;
var cr30352_place_26 = cr30352_place_8;
var cr30352_place_27 = msgs;
var cr30352_place_28 = (function (){var G__30462 = cr30352_place_26;
var G__30463 = cr30352_place_27;
var fexpr__30461 = cr30352_place_25;
return (fexpr__30461.cljs$core$IFn$_invoke$arity$2 ? fexpr__30461.cljs$core$IFn$_invoke$arity$2(G__30462,G__30463) : fexpr__30461.call(null,G__30462,G__30463));
})();
var cr30352_place_29 = hyperfiddle.electric_client.wait_for_close;
var cr30352_place_30 = cr30352_place_8;
var cr30352_place_31 = (function (){var G__30474 = cr30352_place_30;
var fexpr__30473 = cr30352_place_29;
return (fexpr__30473.cljs$core$IFn$_invoke$arity$1 ? fexpr__30473.cljs$core$IFn$_invoke$arity$1(G__30474) : fexpr__30473.call(null,G__30474));
})();
var cr30352_place_32 = (function (){var G__30476 = cr30352_place_28;
var G__30477 = cr30352_place_31;
var fexpr__30475 = cr30352_place_24;
return (fexpr__30475.cljs$core$IFn$_invoke$arity$2 ? fexpr__30475.cljs$core$IFn$_invoke$arity$2(G__30476,G__30477) : fexpr__30475.call(null,G__30476,G__30477));
})();
(cr30352_state[(0)] = cr30352_block_4);

return missionary.core.park(cr30352_place_32);
}catch (e30438){var cr30352_exception = e30438;
(cr30352_state[(0)] = cr30352_block_5);

(cr30352_state[(4)] = cr30352_exception);

return cr30352_state;
}});
var cr30352_block_4 = (function hyperfiddle$electric_client$connector_$_cr30352_block_4(cr30352_state){
try{var cr30352_place_33 = missionary.core.unpark();
(cr30352_state[(0)] = cr30352_block_6);

(cr30352_state[(4)] = cr30352_place_33);

return cr30352_state;
}catch (e30481){var cr30352_exception = e30481;
(cr30352_state[(0)] = cr30352_block_5);

(cr30352_state[(4)] = cr30352_exception);

return cr30352_state;
}});
var cr30352_block_5 = (function hyperfiddle$electric_client$connector_$_cr30352_block_5(cr30352_state){
try{var cr30352_place_9 = (cr30352_state[(4)]);
var cr30352_place_34 = cr30352_place_9;
var cr30352_place_35 = (function(){throw cr30352_place_34})();
(cr30352_state[(0)] = null);

(cr30352_state[(1)] = null);

(cr30352_state[(2)] = null);

(cr30352_state[(3)] = null);

(cr30352_state[(4)] = null);

return null;
}catch (e30482){var cr30352_exception = e30482;
(cr30352_state[(0)] = cr30352_block_6);

(cr30352_state[(3)] = true);

(cr30352_state[(4)] = cr30352_exception);

return cr30352_state;
}});
var cr30352_block_12 = (function hyperfiddle$electric_client$connector_$_cr30352_block_12(cr30352_state){
try{var cr30352_place_7 = (cr30352_state[(1)]);
(cr30352_state[(0)] = null);

(cr30352_state[(1)] = null);

return cr30352_place_7;
}catch (e30483){var cr30352_exception = e30483;
(cr30352_state[(0)] = null);

(cr30352_state[(1)] = null);

throw cr30352_exception;
}});
var cr30352_block_1 = (function hyperfiddle$electric_client$connector_$_cr30352_block_1(cr30352_state){
try{var cr30352_place_3 = missionary.core.unpark();
var cr30352_place_4 = cr30352_place_3;
var cr30352_place_5 = null;
var cr30352_place_6 = (cr30352_place_4 == cr30352_place_5);
var cr30352_place_7 = null;
if(cr30352_place_6){
(cr30352_state[(0)] = cr30352_block_11);

(cr30352_state[(1)] = cr30352_place_7);

return cr30352_state;
} else {
(cr30352_state[(0)] = cr30352_block_2);

(cr30352_state[(2)] = cr30352_place_3);

(cr30352_state[(1)] = cr30352_place_7);

return cr30352_state;
}
}catch (e30487){var cr30352_exception = e30487;
(cr30352_state[(0)] = null);

throw cr30352_exception;
}});
var cr30352_block_0 = (function hyperfiddle$electric_client$connector_$_cr30352_block_0(cr30352_state){
try{var cr30352_place_0 = hyperfiddle.electric_client.connect;
var cr30352_place_1 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr30352_place_2 = (function (){var G__30490 = cr30352_place_1;
var fexpr__30489 = cr30352_place_0;
return (fexpr__30489.cljs$core$IFn$_invoke$arity$1 ? fexpr__30489.cljs$core$IFn$_invoke$arity$1(G__30490) : fexpr__30489.call(null,G__30490));
})();
(cr30352_state[(0)] = cr30352_block_1);

return missionary.core.park(cr30352_place_2);
}catch (e30488){var cr30352_exception = e30488;
(cr30352_state[(0)] = null);

throw cr30352_exception;
}});
var cr30352_block_11 = (function hyperfiddle$electric_client$connector_$_cr30352_block_11(cr30352_state){
try{var cr30352_place_51 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
(cr30352_state[(0)] = cr30352_block_12);

(cr30352_state[(1)] = cr30352_place_51);

return cr30352_state;
}catch (e30491){var cr30352_exception = e30491;
(cr30352_state[(0)] = null);

(cr30352_state[(1)] = null);

throw cr30352_exception;
}});
var cr30352_block_10 = (function hyperfiddle$electric_client$connector_$_cr30352_block_10(cr30352_state){
try{var cr30352_place_10 = (cr30352_state[(3)]);
var cr30352_place_42 = (cr30352_state[(5)]);
var cr30352_place_9 = (cr30352_state[(4)]);
var cr30352_place_50 = (cljs.core.truth_(cr30352_place_10)?(function(){throw cr30352_place_9})():cr30352_place_9);
(cr30352_state[(0)] = cr30352_block_12);

(cr30352_state[(3)] = null);

(cr30352_state[(5)] = null);

(cr30352_state[(4)] = null);

(cr30352_state[(1)] = cr30352_place_50);

return cr30352_state;
}catch (e30492){var cr30352_exception = e30492;
(cr30352_state[(0)] = null);

(cr30352_state[(1)] = null);

(cr30352_state[(3)] = null);

(cr30352_state[(5)] = null);

(cr30352_state[(4)] = null);

throw cr30352_exception;
}});
var cr30352_block_6 = (function hyperfiddle$electric_client$connector_$_cr30352_block_6(cr30352_state){
try{var cr30352_place_8 = (cr30352_state[(2)]);
var cr30352_place_36 = cljs.core._EQ_;
var cr30352_place_37 = WebSocket;
var cr30352_place_38 = cr30352_place_37.CLOSED;
var cr30352_place_39 = cr30352_place_8;
var cr30352_place_40 = cr30352_place_39.readyState;
var cr30352_place_41 = (function (){var G__30497 = cr30352_place_38;
var G__30498 = cr30352_place_40;
var fexpr__30496 = cr30352_place_36;
return (fexpr__30496.cljs$core$IFn$_invoke$arity$2 ? fexpr__30496.cljs$core$IFn$_invoke$arity$2(G__30497,G__30498) : fexpr__30496.call(null,G__30497,G__30498));
})();
var cr30352_place_42 = null;
if(cljs.core.truth_(cr30352_place_41)){
(cr30352_state[(0)] = cr30352_block_9);

(cr30352_state[(2)] = null);

(cr30352_state[(5)] = cr30352_place_42);

return cr30352_state;
} else {
(cr30352_state[(0)] = cr30352_block_7);

(cr30352_state[(5)] = cr30352_place_42);

return cr30352_state;
}
}catch (e30494){var cr30352_exception = e30494;
(cr30352_state[(0)] = null);

(cr30352_state[(1)] = null);

(cr30352_state[(2)] = null);

(cr30352_state[(3)] = null);

(cr30352_state[(4)] = null);

throw cr30352_exception;
}});
var cr30352_block_2 = (function hyperfiddle$electric_client$connector_$_cr30352_block_2(cr30352_state){
try{var cr30352_place_3 = (cr30352_state[(2)]);
var cr30352_place_8 = cr30352_place_3;
var cr30352_place_9 = null;
var cr30352_place_10 = false;
(cr30352_state[(0)] = cr30352_block_3);

(cr30352_state[(2)] = null);

(cr30352_state[(2)] = cr30352_place_8);

(cr30352_state[(4)] = cr30352_place_9);

(cr30352_state[(3)] = cr30352_place_10);

return cr30352_state;
}catch (e30502){var cr30352_exception = e30502;
(cr30352_state[(0)] = null);

(cr30352_state[(1)] = null);

(cr30352_state[(2)] = null);

throw cr30352_exception;
}});
var cr30352_block_7 = (function hyperfiddle$electric_client$connector_$_cr30352_block_7(cr30352_state){
try{var cr30352_place_8 = (cr30352_state[(2)]);
var cr30352_place_43 = cr30352_place_8;
var cr30352_place_44 = cr30352_place_43.close();
var cr30352_place_45 = missionary.core.compel;
var cr30352_place_46 = hyperfiddle.electric_client.wait_for_close;
var cr30352_place_47 = (function (){var G__30508 = cr30352_place_46;
var fexpr__30507 = cr30352_place_45;
return (fexpr__30507.cljs$core$IFn$_invoke$arity$1 ? fexpr__30507.cljs$core$IFn$_invoke$arity$1(G__30508) : fexpr__30507.call(null,G__30508));
})();
(cr30352_state[(0)] = cr30352_block_8);

(cr30352_state[(2)] = null);

return missionary.core.park(cr30352_place_47);
}catch (e30505){var cr30352_exception = e30505;
(cr30352_state[(0)] = null);

(cr30352_state[(1)] = null);

(cr30352_state[(2)] = null);

(cr30352_state[(3)] = null);

(cr30352_state[(5)] = null);

(cr30352_state[(4)] = null);

throw cr30352_exception;
}});
var cr30352_block_9 = (function hyperfiddle$electric_client$connector_$_cr30352_block_9(cr30352_state){
try{var cr30352_place_49 = null;
(cr30352_state[(0)] = cr30352_block_10);

(cr30352_state[(5)] = cr30352_place_49);

return cr30352_state;
}catch (e30509){var cr30352_exception = e30509;
(cr30352_state[(0)] = null);

(cr30352_state[(1)] = null);

(cr30352_state[(3)] = null);

(cr30352_state[(5)] = null);

(cr30352_state[(4)] = null);

throw cr30352_exception;
}});
var cr30352_block_8 = (function hyperfiddle$electric_client$connector_$_cr30352_block_8(cr30352_state){
try{var cr30352_place_48 = missionary.core.unpark();
(cr30352_state[(0)] = cr30352_block_10);

(cr30352_state[(5)] = cr30352_place_48);

return cr30352_state;
}catch (e30510){var cr30352_exception = e30510;
(cr30352_state[(0)] = null);

(cr30352_state[(1)] = null);

(cr30352_state[(3)] = null);

(cr30352_state[(5)] = null);

(cr30352_state[(4)] = null);

throw cr30352_exception;
}});
return cloroutine.impl.coroutine((function (){var G__30511 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__30511[(0)] = cr30352_block_0);

return G__30511;
})());
})(),missionary.core.sp_run);
});
});
hyperfiddle.electric_client.fib_iter = (function hyperfiddle$electric_client$fib_iter(p__30512){
var vec__30513 = p__30512;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30513,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30513,(1),null);
var G__30516 = b;
switch (G__30516) {
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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30517_block_19 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30517_block_19(cr30517_state){
try{var cr30517_place_105 = (cr30517_state[(1)]);
(cr30517_state[(0)] = null);

(cr30517_state[(1)] = null);

return cr30517_place_105;
}catch (e30868){var cr30517_exception = e30868;
(cr30517_state[(0)] = null);

(cr30517_state[(1)] = null);

throw cr30517_exception;
}});
var cr30517_block_4 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30517_block_4(cr30517_state){
try{var cr30517_place_12 = (cr30517_state[(4)]);
var cr30517_place_52 = cr30517_place_12;
var cr30517_place_53 = (function(){throw cr30517_place_52})();
(cr30517_state[(0)] = null);

(cr30517_state[(1)] = null);

(cr30517_state[(4)] = null);

(cr30517_state[(2)] = null);

(cr30517_state[(5)] = null);

(cr30517_state[(6)] = null);

return null;
}catch (e30869){var cr30517_exception = e30869;
(cr30517_state[(0)] = cr30517_block_5);

(cr30517_state[(5)] = true);

(cr30517_state[(4)] = cr30517_exception);

return cr30517_state;
}});
var cr30517_block_11 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30517_block_11(cr30517_state){
try{var cr30517_place_72 = (cr30517_state[(3)]);
(cr30517_state[(0)] = cr30517_block_13);

(cr30517_state[(3)] = null);

(cr30517_state[(6)] = cr30517_place_72);

return cr30517_state;
}catch (e30870){var cr30517_exception = e30870;
(cr30517_state[(0)] = null);

(cr30517_state[(1)] = null);

(cr30517_state[(6)] = null);

(cr30517_state[(3)] = null);

(cr30517_state[(2)] = null);

(cr30517_state[(4)] = null);

throw cr30517_exception;
}});
var cr30517_block_6 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30517_block_6(cr30517_state){
try{var cr30517_place_56 = (cr30517_state[(3)]);
var cr30517_place_61 = cr30517_place_56;
var cr30517_place_62 = new cljs.core.Keyword(null,"code","code",1586293142);
var cr30517_place_63 = cr30517_place_61;
var cr30517_place_64 = cr30517_place_62.cljs$core$IFn$_invoke$arity$1(cr30517_place_63);
var cr30517_place_65 = cr30517_place_64;
var cr30517_place_66 = null;
var cr30517_place_67 = (cr30517_place_65 == cr30517_place_66);
var cr30517_place_68 = null;
if(cr30517_place_67){
(cr30517_state[(0)] = cr30517_block_12);

(cr30517_state[(3)] = null);

(cr30517_state[(6)] = cr30517_place_68);

return cr30517_state;
} else {
(cr30517_state[(0)] = cr30517_block_7);

(cr30517_state[(3)] = null);

(cr30517_state[(3)] = cr30517_place_61);

(cr30517_state[(5)] = cr30517_place_64);

(cr30517_state[(6)] = cr30517_place_68);

return cr30517_state;
}
}catch (e30871){var cr30517_exception = e30871;
(cr30517_state[(0)] = null);

(cr30517_state[(1)] = null);

(cr30517_state[(3)] = null);

(cr30517_state[(2)] = null);

(cr30517_state[(4)] = null);

throw cr30517_exception;
}});
var cr30517_block_13 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30517_block_13(cr30517_state){
try{var cr30517_place_68 = (cr30517_state[(6)]);
(cr30517_state[(0)] = cr30517_block_15);

(cr30517_state[(6)] = null);

(cr30517_state[(4)] = cr30517_place_68);

return cr30517_state;
}catch (e30872){var cr30517_exception = e30872;
(cr30517_state[(0)] = null);

(cr30517_state[(1)] = null);

(cr30517_state[(6)] = null);

(cr30517_state[(2)] = null);

(cr30517_state[(4)] = null);

throw cr30517_exception;
}});
var cr30517_block_5 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30517_block_5(cr30517_state){
try{var cr30517_place_12 = (cr30517_state[(4)]);
var cr30517_place_13 = (cr30517_state[(5)]);
var cr30517_place_8 = (cr30517_state[(6)]);
var cr30517_place_54 = cr30517_place_8;
var cr30517_place_55 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr30517_place_54);
var cr30517_place_56 = (cljs.core.truth_(cr30517_place_13)?(function(){throw cr30517_place_12})():cr30517_place_12);
var cr30517_place_57 = cr30517_place_56;
var cr30517_place_58 = null;
var cr30517_place_59 = (cr30517_place_57 == cr30517_place_58);
var cr30517_place_60 = null;
if(cr30517_place_59){
(cr30517_state[(0)] = cr30517_block_14);

(cr30517_state[(4)] = null);

(cr30517_state[(5)] = null);

(cr30517_state[(6)] = null);

(cr30517_state[(4)] = cr30517_place_60);

return cr30517_state;
} else {
(cr30517_state[(0)] = cr30517_block_6);

(cr30517_state[(4)] = null);

(cr30517_state[(5)] = null);

(cr30517_state[(6)] = null);

(cr30517_state[(3)] = cr30517_place_56);

(cr30517_state[(4)] = cr30517_place_60);

return cr30517_state;
}
}catch (e30873){var cr30517_exception = e30873;
(cr30517_state[(0)] = null);

(cr30517_state[(1)] = null);

(cr30517_state[(4)] = null);

(cr30517_state[(2)] = null);

(cr30517_state[(5)] = null);

(cr30517_state[(6)] = null);

throw cr30517_exception;
}});
var cr30517_block_14 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30517_block_14(cr30517_state){
try{var cr30517_place_101 = null;
(cr30517_state[(0)] = cr30517_block_15);

(cr30517_state[(4)] = cr30517_place_101);

return cr30517_state;
}catch (e30874){var cr30517_exception = e30874;
(cr30517_state[(0)] = null);

(cr30517_state[(1)] = null);

(cr30517_state[(2)] = null);

(cr30517_state[(4)] = null);

throw cr30517_exception;
}});
var cr30517_block_12 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30517_block_12(cr30517_state){
try{var cr30517_place_1 = (cr30517_state[(2)]);
var cr30517_place_97 = console;
var cr30517_place_98 = "Failed to connect.";
var cr30517_place_99 = cr30517_place_97.log(cr30517_place_98);
var cr30517_place_100 = cr30517_place_1;
(cr30517_state[(0)] = cr30517_block_13);

(cr30517_state[(6)] = cr30517_place_100);

return cr30517_state;
}catch (e30875){var cr30517_exception = e30875;
(cr30517_state[(0)] = null);

(cr30517_state[(1)] = null);

(cr30517_state[(6)] = null);

(cr30517_state[(2)] = null);

(cr30517_state[(4)] = null);

throw cr30517_exception;
}});
var cr30517_block_10 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30517_block_10(cr30517_state){
try{var cr30517_place_61 = (cr30517_state[(3)]);
var cr30517_place_69 = (cr30517_state[(1)]);
var cr30517_place_86 = cljs.core.ex_info;
var cr30517_place_87 = "Remote error - ";
var cr30517_place_88 = cr30517_place_69;
var cr30517_place_89 = " ";
var cr30517_place_90 = new cljs.core.Keyword(null,"reason","reason",-2070751759);
var cr30517_place_91 = cr30517_place_61;
var cr30517_place_92 = cr30517_place_90.cljs$core$IFn$_invoke$arity$1(cr30517_place_91);
var cr30517_place_93 = [cr30517_place_87,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr30517_place_88),cr30517_place_89,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr30517_place_92)].join('');
var cr30517_place_94 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr30517_place_95 = (function (){var G__30878 = cr30517_place_93;
var G__30879 = cr30517_place_94;
var fexpr__30877 = cr30517_place_86;
return (fexpr__30877.cljs$core$IFn$_invoke$arity$2 ? fexpr__30877.cljs$core$IFn$_invoke$arity$2(G__30878,G__30879) : fexpr__30877.call(null,G__30878,G__30879));
})();
var cr30517_place_96 = (function(){throw cr30517_place_95})();
(cr30517_state[(0)] = null);

(cr30517_state[(3)] = null);

(cr30517_state[(1)] = null);

return null;
}catch (e30876){var cr30517_exception = e30876;
(cr30517_state[(0)] = null);

(cr30517_state[(3)] = null);

(cr30517_state[(1)] = null);

throw cr30517_exception;
}});
var cr30517_block_2 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30517_block_2(cr30517_state){
try{var cr30517_place_4 = (cr30517_state[(3)]);
var cr30517_place_14 = (function (x){
var fexpr__30661 = (cr30517_place_4[(0)]);
var G__30882 = x;
var fexpr__30881 = fexpr__30661;
return (fexpr__30881.cljs$core$IFn$_invoke$arity$1 ? fexpr__30881.cljs$core$IFn$_invoke$arity$1(G__30882) : fexpr__30881.call(null,G__30882));
});
var cr30517_place_15 = cljs.core.partial;
var cr30517_place_20 = (function (cr30662_state){
try{var cr30662_place_49 = (1);
var cr30662_place_50 = missionary.core.none;
(cr30662_state[(0)] = cr30517_place_18);

return missionary.core.fork(cr30662_place_49,cr30662_place_50);
}catch (e30919){var e30707 = e30919;
var cr30662_exception = e30707;
(cr30662_state[(0)] = null);

(cr30662_state[(2)] = null);

(cr30662_state[(4)] = null);

throw cr30662_exception;
}});
var cr30517_place_26 = (function (cr30662_state){
try{var cr30662_place_42 = (cr30662_state[(1)]);
(cr30662_state[(0)] = cr30517_place_16);

(cr30662_state[(1)] = null);

(cr30662_state[(4)] = cr30662_place_42);

return cr30662_state;
}catch (e30920){var e30718 = e30920;
var cr30662_exception = e30718;
(cr30662_state[(0)] = null);

(cr30662_state[(1)] = null);

(cr30662_state[(2)] = null);

(cr30662_state[(4)] = null);

throw cr30662_exception;
}});
var cr30517_place_29 = (function (cr30662_state){
try{var cr30662_place_4 = (cr30662_state[(1)]);
var cr30662_place_14 = cr30662_place_4;
var cr30662_place_15 = hyperfiddle.electric.impl.runtime.subject_at;
var cr30662_place_16 = cr30517_place_4;
var cr30662_place_17 = (0);
var cr30662_place_18 = (function (){var G__30723 = cr30662_place_16;
var G__30724 = cr30662_place_17;
var fexpr__30722 = cr30662_place_15;
var G__30923 = G__30723;
var G__30924 = G__30724;
var fexpr__30922 = fexpr__30722;
return (fexpr__30922.cljs$core$IFn$_invoke$arity$2 ? fexpr__30922.cljs$core$IFn$_invoke$arity$2(G__30923,G__30924) : fexpr__30922.call(null,G__30923,G__30924));
})();
var cr30662_place_19 = client;
var cr30662_place_20 = cr30662_place_14;
var cr30662_place_21 = cr30662_place_18;
var cr30662_place_22 = (function (){var G__30726 = cr30662_place_20;
var G__30727 = cr30662_place_21;
var fexpr__30725 = cr30662_place_19;
var G__30926 = G__30726;
var G__30927 = G__30727;
var fexpr__30925 = fexpr__30725;
return (fexpr__30925.cljs$core$IFn$_invoke$arity$2 ? fexpr__30925.cljs$core$IFn$_invoke$arity$2(G__30926,G__30927) : fexpr__30925.call(null,G__30926,G__30927));
})();
(cr30662_state[(0)] = cr30517_place_28);

(cr30662_state[(1)] = null);

return missionary.core.park(cr30662_place_22);
}catch (e30921){var e30721 = e30921;
var cr30662_exception = e30721;
(cr30662_state[(0)] = null);

(cr30662_state[(1)] = null);

(cr30662_state[(2)] = null);

throw cr30662_exception;
}});
var cr30517_place_16 = (function (cr30662_state){
try{var cr30662_place_32 = (cr30662_state[(4)]);
(cr30662_state[(0)] = cr30517_place_22);

(cr30662_state[(4)] = null);

(cr30662_state[(2)] = cr30662_place_32);

return cr30662_state;
}catch (e30928){var e30703 = e30928;
var cr30662_exception = e30703;
(cr30662_state[(0)] = null);

(cr30662_state[(2)] = null);

(cr30662_state[(4)] = null);

throw cr30662_exception;
}});
var cr30517_place_23 = (function (cr30662_state){
try{var cr30662_place_40 = (cr30662_state[(1)]);
var cr30662_place_44 = "No matching clause: ";
var cr30662_place_45 = cr30662_place_40;
var cr30662_place_46 = [cr30662_place_44,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr30662_place_45)].join('');
var cr30662_place_47 = (new Error(cr30662_place_46));
var cr30662_place_48 = (function(){throw cr30662_place_47})();
(cr30662_state[(0)] = null);

(cr30662_state[(1)] = null);

return null;
}catch (e30929){var e30710 = e30929;
var cr30662_exception = e30710;
(cr30662_state[(0)] = null);

(cr30662_state[(1)] = null);

throw cr30662_exception;
}});
var cr30517_place_27 = (function (cr30662_state){
try{(cr30662_state[(0)] = cr30517_place_32);

return cr30662_state;
}catch (e30930){var e30719 = e30930;
var cr30662_exception = e30719;
(cr30662_state[(0)] = null);

(cr30662_state[(1)] = null);

(cr30662_state[(2)] = null);

throw cr30662_exception;
}});
var cr30517_place_24 = (function (cr30662_state){
try{var cr30662_place_26 = missionary.core.unpark();
(cr30662_state[(0)] = cr30517_place_22);

(cr30662_state[(2)] = cr30662_place_26);

return cr30662_state;
}catch (e30931){var e30711 = e30931;
var cr30662_exception = e30711;
(cr30662_state[(0)] = null);

(cr30662_state[(2)] = null);

throw cr30662_exception;
}});
var cr30517_place_30 = (function (cr30662_state){
try{var cr30662_place_28 = (cr30662_state[(3)]);
var cr30662_place_33 = cr30662_place_28;
var cr30662_place_34 = (1);
var cr30662_place_35 = missionary.core.seed;
var cr30662_place_36 = cljs.core.range;
var cr30662_place_37 = (2);
var cr30662_place_38 = (function (){var G__30730 = cr30662_place_37;
var fexpr__30729 = cr30662_place_36;
var G__30934 = G__30730;
var fexpr__30933 = fexpr__30729;
return (fexpr__30933.cljs$core$IFn$_invoke$arity$1 ? fexpr__30933.cljs$core$IFn$_invoke$arity$1(G__30934) : fexpr__30933.call(null,G__30934));
})();
var cr30662_place_39 = (function (){var G__30732 = cr30662_place_38;
var fexpr__30731 = cr30662_place_35;
var G__30936 = G__30732;
var fexpr__30935 = fexpr__30731;
return (fexpr__30935.cljs$core$IFn$_invoke$arity$1 ? fexpr__30935.cljs$core$IFn$_invoke$arity$1(G__30936) : fexpr__30935.call(null,G__30936));
})();
(cr30662_state[(0)] = cr30517_place_31);

(cr30662_state[(3)] = null);

(cr30662_state[(3)] = cr30662_place_33);

return missionary.core.fork(cr30662_place_34,cr30662_place_39);
}catch (e30932){var e30728 = e30932;
var cr30662_exception = e30728;
(cr30662_state[(0)] = null);

(cr30662_state[(3)] = null);

(cr30662_state[(1)] = null);

(cr30662_state[(2)] = null);

(cr30662_state[(4)] = null);

throw cr30662_exception;
}});
var cr30517_place_28 = (function (cr30662_state){
try{var cr30662_place_23 = missionary.core.unpark();
var cr30662_place_24 = (1);
var cr30662_place_25 = missionary.core.none;
(cr30662_state[(0)] = cr30517_place_24);

return missionary.core.fork(cr30662_place_24,cr30662_place_25);
}catch (e30937){var e30720 = e30937;
var cr30662_exception = e30720;
(cr30662_state[(0)] = null);

(cr30662_state[(2)] = null);

throw cr30662_exception;
}});
var cr30517_place_31 = (function (cr30662_state){
try{var cr30662_place_40 = missionary.core.unpark();
var cr30662_place_41 = cr30662_place_40;
var cr30662_place_42 = null;
var G__30734 = cr30662_place_41;
var G__30939 = G__30734;
switch (G__30939) {
case (0):
(cr30662_state[(0)] = cr30517_place_21);

(cr30662_state[(1)] = null);

(cr30662_state[(1)] = cr30662_place_42);

return cr30662_state;

break;
case (1):
(cr30662_state[(0)] = cr30517_place_33);

(cr30662_state[(3)] = null);

(cr30662_state[(4)] = null);

return cr30662_state;

break;
default:
(cr30662_state[(0)] = cr30517_place_23);

(cr30662_state[(3)] = null);

(cr30662_state[(1)] = null);

(cr30662_state[(2)] = null);

(cr30662_state[(4)] = null);

(cr30662_state[(1)] = cr30662_place_40);

return cr30662_state;

}
}catch (e30938){var e30733 = e30938;
var cr30662_exception = e30733;
(cr30662_state[(0)] = null);

(cr30662_state[(3)] = null);

(cr30662_state[(1)] = null);

(cr30662_state[(2)] = null);

(cr30662_state[(4)] = null);

throw cr30662_exception;
}});
var cr30517_place_25 = (function (cr30662_state){
try{var cr30662_place_0 = console;
var cr30662_place_1 = "Connected.";
var cr30662_place_2 = cr30662_place_0.log(cr30662_place_1);
var cr30662_place_3 = missionary.core.rdv;
var cr30662_place_4 = (function (){var fexpr__30713 = cr30662_place_3;
var fexpr__30941 = fexpr__30713;
return (fexpr__30941.cljs$core$IFn$_invoke$arity$0 ? fexpr__30941.cljs$core$IFn$_invoke$arity$0() : fexpr__30941.call(null));
})();
var cr30662_place_5 = (2);
var cr30662_place_6 = missionary.core.seed;
var cr30662_place_7 = cljs.core.range;
var cr30662_place_8 = (2);
var cr30662_place_9 = (function (){var G__30715 = cr30662_place_8;
var fexpr__30714 = cr30662_place_7;
var G__30943 = G__30715;
var fexpr__30942 = fexpr__30714;
return (fexpr__30942.cljs$core$IFn$_invoke$arity$1 ? fexpr__30942.cljs$core$IFn$_invoke$arity$1(G__30943) : fexpr__30942.call(null,G__30943));
})();
var cr30662_place_10 = (function (){var G__30717 = cr30662_place_9;
var fexpr__30716 = cr30662_place_6;
var G__30945 = G__30717;
var fexpr__30944 = fexpr__30716;
return (fexpr__30944.cljs$core$IFn$_invoke$arity$1 ? fexpr__30944.cljs$core$IFn$_invoke$arity$1(G__30945) : fexpr__30944.call(null,G__30945));
})();
(cr30662_state[(0)] = cr30517_place_34);

(cr30662_state[(1)] = cr30662_place_4);

return missionary.core.fork(cr30662_place_5,cr30662_place_10);
}catch (e30940){var e30712 = e30940;
var cr30662_exception = e30712;
(cr30662_state[(0)] = null);

throw cr30662_exception;
}});
var cr30517_place_34 = (function (cr30662_state){
try{var cr30662_place_11 = missionary.core.unpark();
var cr30662_place_12 = cr30662_place_11;
var cr30662_place_13 = null;
var G__30738 = cr30662_place_12;
var G__30947 = G__30738;
switch (G__30947) {
case (0):
(cr30662_state[(0)] = cr30517_place_29);

(cr30662_state[(2)] = cr30662_place_13);

return cr30662_state;

break;
case (1):
(cr30662_state[(0)] = cr30517_place_27);

(cr30662_state[(2)] = cr30662_place_13);

return cr30662_state;

break;
default:
(cr30662_state[(0)] = cr30517_place_19);

(cr30662_state[(1)] = null);

(cr30662_state[(1)] = cr30662_place_11);

return cr30662_state;

}
}catch (e30946){var e30737 = e30946;
var cr30662_exception = e30737;
(cr30662_state[(0)] = null);

(cr30662_state[(1)] = null);

throw cr30662_exception;
}});
var cr30517_place_22 = (function (cr30662_state){
try{var cr30662_place_13 = (cr30662_state[(2)]);
(cr30662_state[(0)] = null);

(cr30662_state[(2)] = null);

return cr30662_place_13;
}catch (e30948){var e30709 = e30948;
var cr30662_exception = e30709;
(cr30662_state[(0)] = null);

(cr30662_state[(2)] = null);

throw cr30662_exception;
}});
var cr30517_place_18 = (function (cr30662_state){
try{var cr30662_place_51 = missionary.core.unpark();
(cr30662_state[(0)] = cr30517_place_16);

(cr30662_state[(4)] = cr30662_place_51);

return cr30662_state;
}catch (e30949){var e30705 = e30949;
var cr30662_exception = e30705;
(cr30662_state[(0)] = null);

(cr30662_state[(2)] = null);

(cr30662_state[(4)] = null);

throw cr30662_exception;
}});
var cr30517_place_19 = (function (cr30662_state){
try{var cr30662_place_11 = (cr30662_state[(1)]);
var cr30662_place_52 = "No matching clause: ";
var cr30662_place_53 = cr30662_place_11;
var cr30662_place_54 = [cr30662_place_52,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr30662_place_53)].join('');
var cr30662_place_55 = (new Error(cr30662_place_54));
var cr30662_place_56 = (function(){throw cr30662_place_55})();
(cr30662_state[(0)] = null);

(cr30662_state[(1)] = null);

return null;
}catch (e30950){var e30706 = e30950;
var cr30662_exception = e30706;
(cr30662_state[(0)] = null);

(cr30662_state[(1)] = null);

throw cr30662_exception;
}});
var cr30517_place_32 = (function (cr30662_state){
try{var cr30662_place_4 = (cr30662_state[(1)]);
var cr30662_place_27 = cr30662_place_4;
(cr30662_state[(0)] = cr30517_place_17);

return missionary.core.park(cr30662_place_27);
}catch (e30951){var e30735 = e30951;
var cr30662_exception = e30735;
(cr30662_state[(0)] = null);

(cr30662_state[(1)] = null);

(cr30662_state[(2)] = null);

throw cr30662_exception;
}});
var cr30517_place_21 = (function (cr30662_state){
try{var cr30662_place_33 = (cr30662_state[(3)]);
var cr30662_place_43 = cr30662_place_33;
(cr30662_state[(0)] = cr30517_place_26);

(cr30662_state[(3)] = null);

(cr30662_state[(1)] = cr30662_place_43);

return cr30662_state;
}catch (e30952){var e30708 = e30952;
var cr30662_exception = e30708;
(cr30662_state[(0)] = null);

(cr30662_state[(3)] = null);

(cr30662_state[(1)] = null);

(cr30662_state[(2)] = null);

(cr30662_state[(4)] = null);

throw cr30662_exception;
}});
var cr30517_place_33 = (function (cr30662_state){
try{(cr30662_state[(0)] = cr30517_place_32);

return cr30662_state;
}catch (e30953){var e30736 = e30953;
var cr30662_exception = e30736;
(cr30662_state[(0)] = null);

(cr30662_state[(1)] = null);

(cr30662_state[(2)] = null);

throw cr30662_exception;
}});
var cr30517_place_17 = (function (cr30662_state){
try{var cr30662_place_28 = missionary.core.unpark();
var cr30662_place_29 = cr30662_place_28;
var cr30662_place_30 = null;
var cr30662_place_31 = (cr30662_place_29 == cr30662_place_30);
var cr30662_place_32 = null;
if(cr30662_place_31){
(cr30662_state[(0)] = cr30517_place_20);

(cr30662_state[(1)] = null);

(cr30662_state[(4)] = cr30662_place_32);

return cr30662_state;
} else {
(cr30662_state[(0)] = cr30517_place_30);

(cr30662_state[(3)] = cr30662_place_28);

(cr30662_state[(4)] = cr30662_place_32);

return cr30662_state;
}
}catch (e30954){var e30704 = e30954;
var cr30662_exception = e30704;
(cr30662_state[(0)] = null);

(cr30662_state[(1)] = null);

(cr30662_state[(2)] = null);

throw cr30662_exception;
}});
var cr30517_place_35 = cloroutine.impl.coroutine;
var cr30517_place_36 = cljs.core.object_array;
var cr30517_place_37 = (5);
var cr30517_place_38 = (function (){var G__30956 = cr30517_place_37;
var fexpr__30955 = cr30517_place_36;
return (fexpr__30955.cljs$core$IFn$_invoke$arity$1 ? fexpr__30955.cljs$core$IFn$_invoke$arity$1(G__30956) : fexpr__30955.call(null,G__30956));
})();
var cr30517_place_39 = cr30517_place_38;
var cr30517_place_40 = (0);
var cr30517_place_41 = cr30517_place_25;
var cr30517_place_42 = (cr30517_place_39[cr30517_place_40] = cr30517_place_41);
var cr30517_place_43 = cr30517_place_38;
var cr30517_place_44 = (function (){var G__30958 = cr30517_place_43;
var fexpr__30957 = cr30517_place_35;
return (fexpr__30957.cljs$core$IFn$_invoke$arity$1 ? fexpr__30957.cljs$core$IFn$_invoke$arity$1(G__30958) : fexpr__30957.call(null,G__30958));
})();
var cr30517_place_45 = missionary.core.ap_run;
var cr30517_place_46 = (function (){var G__30960 = cr30517_place_44;
var G__30961 = cr30517_place_45;
var fexpr__30959 = cr30517_place_15;
return (fexpr__30959.cljs$core$IFn$_invoke$arity$2 ? fexpr__30959.cljs$core$IFn$_invoke$arity$2(G__30960,G__30961) : fexpr__30959.call(null,G__30960,G__30961));
})();
var cr30517_place_47 = conn;
var cr30517_place_48 = cr30517_place_14;
var cr30517_place_49 = cr30517_place_46;
var cr30517_place_50 = (function (){var G__30963 = cr30517_place_48;
var G__30964 = cr30517_place_49;
var fexpr__30962 = cr30517_place_47;
return (fexpr__30962.cljs$core$IFn$_invoke$arity$2 ? fexpr__30962.cljs$core$IFn$_invoke$arity$2(G__30963,G__30964) : fexpr__30962.call(null,G__30963,G__30964));
})();
(cr30517_state[(0)] = cr30517_block_3);

(cr30517_state[(3)] = null);

return missionary.core.park(cr30517_place_50);
}catch (e30880){var cr30517_exception = e30880;
(cr30517_state[(0)] = cr30517_block_4);

(cr30517_state[(3)] = null);

(cr30517_state[(4)] = cr30517_exception);

return cr30517_state;
}});
var cr30517_block_18 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30517_block_18(cr30517_state){
try{var cr30517_place_131 = null;
(cr30517_state[(0)] = cr30517_block_19);

(cr30517_state[(1)] = cr30517_place_131);

return cr30517_state;
}catch (e30965){var cr30517_exception = e30965;
(cr30517_state[(0)] = null);

(cr30517_state[(1)] = null);

throw cr30517_exception;
}});
var cr30517_block_15 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30517_block_15(cr30517_state){
try{var cr30517_place_60 = (cr30517_state[(4)]);
var cr30517_place_102 = cr30517_place_60;
var cr30517_place_103 = null;
var cr30517_place_104 = (cr30517_place_102 == cr30517_place_103);
var cr30517_place_105 = null;
if(cr30517_place_104){
(cr30517_state[(0)] = cr30517_block_18);

(cr30517_state[(1)] = null);

(cr30517_state[(2)] = null);

(cr30517_state[(4)] = null);

(cr30517_state[(1)] = cr30517_place_105);

return cr30517_state;
} else {
(cr30517_state[(0)] = cr30517_block_16);

return cr30517_state;
}
}catch (e30966){var cr30517_exception = e30966;
(cr30517_state[(0)] = null);

(cr30517_state[(1)] = null);

(cr30517_state[(2)] = null);

(cr30517_state[(4)] = null);

throw cr30517_exception;
}});
var cr30517_block_0 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30517_block_0(cr30517_state){
try{var cr30517_place_0 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr30517_place_1 = hyperfiddle.electric_client.retry_delays;
(cr30517_state[(0)] = cr30517_block_1);

(cr30517_state[(1)] = cr30517_place_0);

(cr30517_state[(2)] = cr30517_place_1);

return cr30517_state;
}catch (e30967){var cr30517_exception = e30967;
(cr30517_state[(0)] = null);

throw cr30517_exception;
}});
var cr30517_block_3 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30517_block_3(cr30517_state){
try{var cr30517_place_51 = missionary.core.unpark();
(cr30517_state[(0)] = cr30517_block_5);

(cr30517_state[(4)] = cr30517_place_51);

return cr30517_state;
}catch (e30968){var cr30517_exception = e30968;
(cr30517_state[(0)] = cr30517_block_4);

(cr30517_state[(4)] = cr30517_exception);

return cr30517_state;
}});
var cr30517_block_16 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30517_block_16(cr30517_state){
try{var cr30517_place_60 = (cr30517_state[(4)]);
var cr30517_place_106 = cr30517_place_60;
var cr30517_place_107 = cljs.core.seq;
var cr30517_place_108 = cr30517_place_106;
var cr30517_place_109 = (function (){var G__30971 = cr30517_place_108;
var fexpr__30970 = cr30517_place_107;
return (fexpr__30970.cljs$core$IFn$_invoke$arity$1 ? fexpr__30970.cljs$core$IFn$_invoke$arity$1(G__30971) : fexpr__30970.call(null,G__30971));
})();
var cr30517_place_110 = cljs.core.first;
var cr30517_place_111 = cr30517_place_109;
var cr30517_place_112 = (function (){var G__30973 = cr30517_place_111;
var fexpr__30972 = cr30517_place_110;
return (fexpr__30972.cljs$core$IFn$_invoke$arity$1 ? fexpr__30972.cljs$core$IFn$_invoke$arity$1(G__30973) : fexpr__30972.call(null,G__30973));
})();
var cr30517_place_113 = cljs.core.next;
var cr30517_place_114 = cr30517_place_109;
var cr30517_place_115 = (function (){var G__30975 = cr30517_place_114;
var fexpr__30974 = cr30517_place_113;
return (fexpr__30974.cljs$core$IFn$_invoke$arity$1 ? fexpr__30974.cljs$core$IFn$_invoke$arity$1(G__30975) : fexpr__30974.call(null,G__30975));
})();
var cr30517_place_116 = cr30517_place_112;
var cr30517_place_117 = cr30517_place_115;
var cr30517_place_118 = console;
var cr30517_place_119 = "Next attempt in ";
var cr30517_place_120 = cr30517_place_116;
var cr30517_place_121 = (1000);
var cr30517_place_122 = (cr30517_place_120 / cr30517_place_121);
var cr30517_place_123 = " seconds.";
var cr30517_place_124 = [cr30517_place_119,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr30517_place_122),cr30517_place_123].join('');
var cr30517_place_125 = cr30517_place_118.log(cr30517_place_124);
var cr30517_place_126 = missionary.core.sleep;
var cr30517_place_127 = cr30517_place_116;
var cr30517_place_128 = cr30517_place_117;
var cr30517_place_129 = (function (){var G__30977 = cr30517_place_127;
var G__30978 = cr30517_place_128;
var fexpr__30976 = cr30517_place_126;
return (fexpr__30976.cljs$core$IFn$_invoke$arity$2 ? fexpr__30976.cljs$core$IFn$_invoke$arity$2(G__30977,G__30978) : fexpr__30976.call(null,G__30977,G__30978));
})();
(cr30517_state[(0)] = cr30517_block_17);

(cr30517_state[(4)] = null);

return missionary.core.park(cr30517_place_129);
}catch (e30969){var cr30517_exception = e30969;
(cr30517_state[(0)] = null);

(cr30517_state[(1)] = null);

(cr30517_state[(2)] = null);

(cr30517_state[(4)] = null);

throw cr30517_exception;
}});
var cr30517_block_17 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30517_block_17(cr30517_state){
try{var cr30517_place_130 = missionary.core.unpark();
(cr30517_state[(0)] = cr30517_block_1);

(cr30517_state[(2)] = cr30517_place_130);

return cr30517_state;
}catch (e30979){var cr30517_exception = e30979;
(cr30517_state[(0)] = null);

(cr30517_state[(1)] = null);

(cr30517_state[(2)] = null);

throw cr30517_exception;
}});
var cr30517_block_8 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30517_block_8(cr30517_state){
try{var cr30517_place_73 = console;
var cr30517_place_74 = "Connection lost.";
var cr30517_place_75 = cr30517_place_73.log(cr30517_place_74);
var cr30517_place_76 = cljs.core.seq;
var cr30517_place_77 = hyperfiddle.electric_client.retry_delays;
var cr30517_place_78 = (function (){var G__30982 = cr30517_place_77;
var fexpr__30981 = cr30517_place_76;
return (fexpr__30981.cljs$core$IFn$_invoke$arity$1 ? fexpr__30981.cljs$core$IFn$_invoke$arity$1(G__30982) : fexpr__30981.call(null,G__30982));
})();
(cr30517_state[(0)] = cr30517_block_11);

(cr30517_state[(3)] = cr30517_place_78);

return cr30517_state;
}catch (e30980){var cr30517_exception = e30980;
(cr30517_state[(0)] = null);

(cr30517_state[(1)] = null);

(cr30517_state[(6)] = null);

(cr30517_state[(3)] = null);

(cr30517_state[(2)] = null);

(cr30517_state[(4)] = null);

throw cr30517_exception;
}});
var cr30517_block_9 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30517_block_9(cr30517_state){
try{var cr30517_place_79 = cljs.core.ex_info;
var cr30517_place_80 = "Stale client";
var cr30517_place_81 = new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079);
var cr30517_place_82 = new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405);
var cr30517_place_83 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr30517_place_81,cr30517_place_82]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr30517_place_84 = (function (){var G__30985 = cr30517_place_80;
var G__30986 = cr30517_place_83;
var fexpr__30984 = cr30517_place_79;
return (fexpr__30984.cljs$core$IFn$_invoke$arity$2 ? fexpr__30984.cljs$core$IFn$_invoke$arity$2(G__30985,G__30986) : fexpr__30984.call(null,G__30985,G__30986));
})();
var cr30517_place_85 = (function(){throw cr30517_place_84})();
(cr30517_state[(0)] = null);

return null;
}catch (e30983){var cr30517_exception = e30983;
(cr30517_state[(0)] = null);

throw cr30517_exception;
}});
var cr30517_block_1 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30517_block_1(cr30517_state){
try{var cr30517_place_0 = (cr30517_state[(1)]);
var cr30517_place_2 = cljs.core.object_array;
var cr30517_place_3 = (1);
var cr30517_place_4 = (function (){var G__30989 = cr30517_place_3;
var fexpr__30988 = cr30517_place_2;
return (fexpr__30988.cljs$core$IFn$_invoke$arity$1 ? fexpr__30988.cljs$core$IFn$_invoke$arity$1(G__30989) : fexpr__30988.call(null,G__30989));
})();
var cr30517_place_5 = console;
var cr30517_place_6 = "Connecting...";
var cr30517_place_7 = cr30517_place_5.log(cr30517_place_6);
var cr30517_place_8 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr30517_place_9 = cr30517_place_0;
var cr30517_place_10 = cr30517_place_9;
var cr30517_place_11 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr30517_place_10);
var cr30517_place_12 = null;
var cr30517_place_13 = false;
(cr30517_state[(0)] = cr30517_block_2);

(cr30517_state[(3)] = cr30517_place_4);

(cr30517_state[(4)] = cr30517_place_12);

(cr30517_state[(5)] = cr30517_place_13);

(cr30517_state[(6)] = cr30517_place_8);

return cr30517_state;
}catch (e30987){var cr30517_exception = e30987;
(cr30517_state[(0)] = null);

(cr30517_state[(1)] = null);

(cr30517_state[(2)] = null);

throw cr30517_exception;
}});
var cr30517_block_7 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30517_block_7(cr30517_state){
try{var cr30517_place_64 = (cr30517_state[(5)]);
var cr30517_place_69 = cr30517_place_64;
var cr30517_place_70 = cr30517_place_69;
var cr30517_place_71 = cr30517_place_70;
var cr30517_place_72 = null;
var G__30991 = cr30517_place_71;
switch (G__30991) {
case (1005):
case (1006):
(cr30517_state[(0)] = cr30517_block_8);

(cr30517_state[(3)] = null);

(cr30517_state[(5)] = null);

(cr30517_state[(3)] = cr30517_place_72);

return cr30517_state;

break;
case (1008):
(cr30517_state[(0)] = cr30517_block_9);

(cr30517_state[(1)] = null);

(cr30517_state[(3)] = null);

(cr30517_state[(5)] = null);

(cr30517_state[(6)] = null);

(cr30517_state[(2)] = null);

(cr30517_state[(4)] = null);

return cr30517_state;

break;
default:
(cr30517_state[(0)] = cr30517_block_10);

(cr30517_state[(1)] = null);

(cr30517_state[(5)] = null);

(cr30517_state[(6)] = null);

(cr30517_state[(2)] = null);

(cr30517_state[(4)] = null);

(cr30517_state[(1)] = cr30517_place_69);

return cr30517_state;

}
}catch (e30990){var cr30517_exception = e30990;
(cr30517_state[(0)] = null);

(cr30517_state[(1)] = null);

(cr30517_state[(3)] = null);

(cr30517_state[(5)] = null);

(cr30517_state[(6)] = null);

(cr30517_state[(2)] = null);

(cr30517_state[(4)] = null);

throw cr30517_exception;
}});
return cloroutine.impl.coroutine((function (){var G__30992 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((7));
(G__30992[(0)] = cr30517_block_0);

return G__30992;
})());
})(),missionary.core.sp_run);
});

//# sourceMappingURL=hyperfiddle.electric_client.js.map
