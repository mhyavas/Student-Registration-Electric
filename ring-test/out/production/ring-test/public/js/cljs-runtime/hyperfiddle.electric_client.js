goog.provide('hyperfiddle.electric_client');
/**
 * @define {string}
 */
hyperfiddle.electric_client.VERSION = goog.define("hyperfiddle.electric_client.VERSION","");
hyperfiddle.electric_client.server_url = (function hyperfiddle$electric_client$server_url(){
var url = (new URL(window.location));
var proto = url.protocol;
(url.protocol = (function (){var G__30071 = proto;
switch (G__30071) {
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
}catch (e30073){var e = e30073;
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));

return (function (){
return cljs.core.List.EMPTY;
});
}});
});
hyperfiddle.electric_client.wait_for_flush = (function hyperfiddle$electric_client$wait_for_flush(ws){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30083_block_0 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30083_block_0(cr30083_state){
try{(cr30083_state[(0)] = cr30083_block_1);

return cr30083_state;
}catch (e30134){var cr30083_exception = e30134;
(cr30083_state[(0)] = null);

throw cr30083_exception;
}});
var cr30083_block_1 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30083_block_1(cr30083_state){
try{var cr30083_place_0 = (4096);
var cr30083_place_1 = ws;
var cr30083_place_2 = cr30083_place_1.bufferedAmount;
var cr30083_place_3 = (cr30083_place_0 < cr30083_place_2);
var cr30083_place_4 = null;
if(cr30083_place_3){
(cr30083_state[(0)] = cr30083_block_3);

return cr30083_state;
} else {
(cr30083_state[(0)] = cr30083_block_2);

(cr30083_state[(1)] = cr30083_place_4);

return cr30083_state;
}
}catch (e30135){var cr30083_exception = e30135;
(cr30083_state[(0)] = null);

throw cr30083_exception;
}});
var cr30083_block_2 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30083_block_2(cr30083_state){
try{var cr30083_place_5 = null;
(cr30083_state[(0)] = cr30083_block_5);

(cr30083_state[(1)] = cr30083_place_5);

return cr30083_state;
}catch (e30136){var cr30083_exception = e30136;
(cr30083_state[(0)] = null);

(cr30083_state[(1)] = null);

throw cr30083_exception;
}});
var cr30083_block_3 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30083_block_3(cr30083_state){
try{var cr30083_place_6 = missionary.core.sleep;
var cr30083_place_7 = (50);
var cr30083_place_8 = (function (){var G__30146 = cr30083_place_7;
var fexpr__30145 = cr30083_place_6;
return (fexpr__30145.cljs$core$IFn$_invoke$arity$1 ? fexpr__30145.cljs$core$IFn$_invoke$arity$1(G__30146) : fexpr__30145.call(null,G__30146));
})();
(cr30083_state[(0)] = cr30083_block_4);

return missionary.core.park(cr30083_place_8);
}catch (e30142){var cr30083_exception = e30142;
(cr30083_state[(0)] = null);

throw cr30083_exception;
}});
var cr30083_block_4 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30083_block_4(cr30083_state){
try{var cr30083_place_9 = missionary.core.unpark();
(cr30083_state[(0)] = cr30083_block_1);

return cr30083_state;
}catch (e30151){var cr30083_exception = e30151;
(cr30083_state[(0)] = null);

throw cr30083_exception;
}});
var cr30083_block_5 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30083_block_5(cr30083_state){
try{var cr30083_place_4 = (cr30083_state[(1)]);
(cr30083_state[(0)] = null);

(cr30083_state[(1)] = null);

return cr30083_place_4;
}catch (e30154){var cr30083_exception = e30154;
(cr30083_state[(0)] = null);

(cr30083_state[(1)] = null);

throw cr30083_exception;
}});
return cloroutine.impl.coroutine((function (){var G__30158 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__30158[(0)] = cr30083_block_0);

return G__30158;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.wait_for_close = (function hyperfiddle$electric_client$wait_for_close(ws){
return (function (s,f){
(ws.onclose = (function (e){
(ws.onclose = null);

var G__30163 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),e.code,new cljs.core.Keyword(null,"reason","reason",-2070751759),e.reason], null);
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__30163) : s.call(null,G__30163));
}));

return (function (){
if((ws.onclose == null)){
return null;
} else {
(ws.onclose = null);

var G__30167 = (new missionary.Cancelled());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30167) : f.call(null,G__30167));
}
});
});
});
hyperfiddle.electric_client.payload = (function hyperfiddle$electric_client$payload(x){
return x.data;
});
hyperfiddle.electric_client.send_BANG_ = (function hyperfiddle$electric_client$send_BANG_(ws,msg){
var G__30173 = ws;
G__30173.send(msg);

return G__30173;
});
hyperfiddle.electric_client.send_all = (function hyperfiddle$electric_client$send_all(ws,msgs){
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30177_block_0 = (function hyperfiddle$electric_client$send_all_$_cr30177_block_0(cr30177_state){
try{var cr30177_place_0 = hyperfiddle.electric_client.wait_for_flush;
var cr30177_place_1 = hyperfiddle.electric_client.send_BANG_;
var cr30177_place_2 = ws;
var cr30177_place_3 = hyperfiddle.electric.impl.io.encode;
var cr30177_place_4 = (1);
var cr30177_place_5 = msgs;
(cr30177_state[(0)] = cr30177_block_1);

(cr30177_state[(3)] = cr30177_place_0);

(cr30177_state[(1)] = cr30177_place_1);

(cr30177_state[(2)] = cr30177_place_2);

(cr30177_state[(4)] = cr30177_place_3);

return missionary.core.fork(cr30177_place_4,cr30177_place_5);
}catch (e30203){var cr30177_exception = e30203;
(cr30177_state[(0)] = null);

throw cr30177_exception;
}});
var cr30177_block_1 = (function hyperfiddle$electric_client$send_all_$_cr30177_block_1(cr30177_state){
try{var cr30177_place_1 = (cr30177_state[(1)]);
var cr30177_place_2 = (cr30177_state[(2)]);
var cr30177_place_0 = (cr30177_state[(3)]);
var cr30177_place_3 = (cr30177_state[(4)]);
var cr30177_place_6 = missionary.core.unpark();
var cr30177_place_7 = (function (){var G__30210 = cr30177_place_6;
var fexpr__30209 = cr30177_place_3;
return (fexpr__30209.cljs$core$IFn$_invoke$arity$1 ? fexpr__30209.cljs$core$IFn$_invoke$arity$1(G__30210) : fexpr__30209.call(null,G__30210));
})();
var cr30177_place_8 = (function (){var G__30212 = cr30177_place_2;
var G__30213 = cr30177_place_7;
var fexpr__30211 = cr30177_place_1;
return (fexpr__30211.cljs$core$IFn$_invoke$arity$2 ? fexpr__30211.cljs$core$IFn$_invoke$arity$2(G__30212,G__30213) : fexpr__30211.call(null,G__30212,G__30213));
})();
var cr30177_place_9 = (function (){var G__30215 = cr30177_place_8;
var fexpr__30214 = cr30177_place_0;
return (fexpr__30214.cljs$core$IFn$_invoke$arity$1 ? fexpr__30214.cljs$core$IFn$_invoke$arity$1(G__30215) : fexpr__30214.call(null,G__30215));
})();
(cr30177_state[(0)] = cr30177_block_2);

(cr30177_state[(1)] = null);

(cr30177_state[(2)] = null);

(cr30177_state[(3)] = null);

(cr30177_state[(4)] = null);

return missionary.core.park(cr30177_place_9);
}catch (e30204){var cr30177_exception = e30204;
(cr30177_state[(0)] = null);

(cr30177_state[(1)] = null);

(cr30177_state[(2)] = null);

(cr30177_state[(3)] = null);

(cr30177_state[(4)] = null);

throw cr30177_exception;
}});
var cr30177_block_2 = (function hyperfiddle$electric_client$send_all_$_cr30177_block_2(cr30177_state){
try{var cr30177_place_10 = missionary.core.unpark();
(cr30177_state[(0)] = null);

return cr30177_place_10;
}catch (e30219){var cr30177_exception = e30219;
(cr30177_state[(0)] = null);

throw cr30177_exception;
}});
return cloroutine.impl.coroutine((function (){var G__30220 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__30220[(0)] = cr30177_block_0);

return G__30220;
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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30223_block_9 = (function hyperfiddle$electric_client$connector_$_cr30223_block_9(cr30223_state){
try{var cr30223_place_49 = null;
(cr30223_state[(0)] = cr30223_block_10);

(cr30223_state[(5)] = cr30223_place_49);

return cr30223_state;
}catch (e30343){var cr30223_exception = e30343;
(cr30223_state[(0)] = null);

(cr30223_state[(5)] = null);

(cr30223_state[(1)] = null);

(cr30223_state[(2)] = null);

(cr30223_state[(3)] = null);

throw cr30223_exception;
}});
var cr30223_block_8 = (function hyperfiddle$electric_client$connector_$_cr30223_block_8(cr30223_state){
try{var cr30223_place_48 = missionary.core.unpark();
(cr30223_state[(0)] = cr30223_block_10);

(cr30223_state[(5)] = cr30223_place_48);

return cr30223_state;
}catch (e30345){var cr30223_exception = e30345;
(cr30223_state[(0)] = null);

(cr30223_state[(5)] = null);

(cr30223_state[(1)] = null);

(cr30223_state[(2)] = null);

(cr30223_state[(3)] = null);

throw cr30223_exception;
}});
var cr30223_block_10 = (function hyperfiddle$electric_client$connector_$_cr30223_block_10(cr30223_state){
try{var cr30223_place_42 = (cr30223_state[(5)]);
var cr30223_place_10 = (cr30223_state[(1)]);
var cr30223_place_9 = (cr30223_state[(3)]);
var cr30223_place_50 = (cljs.core.truth_(cr30223_place_10)?(function(){throw cr30223_place_9})():cr30223_place_9);
(cr30223_state[(0)] = cr30223_block_12);

(cr30223_state[(5)] = null);

(cr30223_state[(1)] = null);

(cr30223_state[(3)] = null);

(cr30223_state[(2)] = cr30223_place_50);

return cr30223_state;
}catch (e30348){var cr30223_exception = e30348;
(cr30223_state[(0)] = null);

(cr30223_state[(5)] = null);

(cr30223_state[(1)] = null);

(cr30223_state[(2)] = null);

(cr30223_state[(3)] = null);

throw cr30223_exception;
}});
var cr30223_block_6 = (function hyperfiddle$electric_client$connector_$_cr30223_block_6(cr30223_state){
try{var cr30223_place_8 = (cr30223_state[(4)]);
var cr30223_place_36 = cljs.core._EQ_;
var cr30223_place_37 = WebSocket;
var cr30223_place_38 = cr30223_place_37.CLOSED;
var cr30223_place_39 = cr30223_place_8;
var cr30223_place_40 = cr30223_place_39.readyState;
var cr30223_place_41 = (function (){var G__30352 = cr30223_place_38;
var G__30353 = cr30223_place_40;
var fexpr__30351 = cr30223_place_36;
return (fexpr__30351.cljs$core$IFn$_invoke$arity$2 ? fexpr__30351.cljs$core$IFn$_invoke$arity$2(G__30352,G__30353) : fexpr__30351.call(null,G__30352,G__30353));
})();
var cr30223_place_42 = null;
if(cljs.core.truth_(cr30223_place_41)){
(cr30223_state[(0)] = cr30223_block_9);

(cr30223_state[(4)] = null);

(cr30223_state[(5)] = cr30223_place_42);

return cr30223_state;
} else {
(cr30223_state[(0)] = cr30223_block_7);

(cr30223_state[(5)] = cr30223_place_42);

return cr30223_state;
}
}catch (e30350){var cr30223_exception = e30350;
(cr30223_state[(0)] = null);

(cr30223_state[(1)] = null);

(cr30223_state[(2)] = null);

(cr30223_state[(3)] = null);

(cr30223_state[(4)] = null);

throw cr30223_exception;
}});
var cr30223_block_11 = (function hyperfiddle$electric_client$connector_$_cr30223_block_11(cr30223_state){
try{var cr30223_place_51 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
(cr30223_state[(0)] = cr30223_block_12);

(cr30223_state[(2)] = cr30223_place_51);

return cr30223_state;
}catch (e30354){var cr30223_exception = e30354;
(cr30223_state[(0)] = null);

(cr30223_state[(2)] = null);

throw cr30223_exception;
}});
var cr30223_block_12 = (function hyperfiddle$electric_client$connector_$_cr30223_block_12(cr30223_state){
try{var cr30223_place_7 = (cr30223_state[(2)]);
(cr30223_state[(0)] = null);

(cr30223_state[(2)] = null);

return cr30223_place_7;
}catch (e30358){var cr30223_exception = e30358;
(cr30223_state[(0)] = null);

(cr30223_state[(2)] = null);

throw cr30223_exception;
}});
var cr30223_block_5 = (function hyperfiddle$electric_client$connector_$_cr30223_block_5(cr30223_state){
try{var cr30223_place_9 = (cr30223_state[(3)]);
var cr30223_place_34 = cr30223_place_9;
var cr30223_place_35 = (function(){throw cr30223_place_34})();
(cr30223_state[(0)] = null);

(cr30223_state[(1)] = null);

(cr30223_state[(2)] = null);

(cr30223_state[(3)] = null);

(cr30223_state[(4)] = null);

return null;
}catch (e30359){var cr30223_exception = e30359;
(cr30223_state[(0)] = cr30223_block_6);

(cr30223_state[(1)] = true);

(cr30223_state[(3)] = cr30223_exception);

return cr30223_state;
}});
var cr30223_block_1 = (function hyperfiddle$electric_client$connector_$_cr30223_block_1(cr30223_state){
try{var cr30223_place_3 = missionary.core.unpark();
var cr30223_place_4 = cr30223_place_3;
var cr30223_place_5 = null;
var cr30223_place_6 = (cr30223_place_4 == cr30223_place_5);
var cr30223_place_7 = null;
if(cr30223_place_6){
(cr30223_state[(0)] = cr30223_block_11);

(cr30223_state[(2)] = cr30223_place_7);

return cr30223_state;
} else {
(cr30223_state[(0)] = cr30223_block_2);

(cr30223_state[(1)] = cr30223_place_3);

(cr30223_state[(2)] = cr30223_place_7);

return cr30223_state;
}
}catch (e30360){var cr30223_exception = e30360;
(cr30223_state[(0)] = null);

throw cr30223_exception;
}});
var cr30223_block_7 = (function hyperfiddle$electric_client$connector_$_cr30223_block_7(cr30223_state){
try{var cr30223_place_8 = (cr30223_state[(4)]);
var cr30223_place_43 = cr30223_place_8;
var cr30223_place_44 = cr30223_place_43.close();
var cr30223_place_45 = missionary.core.compel;
var cr30223_place_46 = hyperfiddle.electric_client.wait_for_close;
var cr30223_place_47 = (function (){var G__30363 = cr30223_place_46;
var fexpr__30362 = cr30223_place_45;
return (fexpr__30362.cljs$core$IFn$_invoke$arity$1 ? fexpr__30362.cljs$core$IFn$_invoke$arity$1(G__30363) : fexpr__30362.call(null,G__30363));
})();
(cr30223_state[(0)] = cr30223_block_8);

(cr30223_state[(4)] = null);

return missionary.core.park(cr30223_place_47);
}catch (e30361){var cr30223_exception = e30361;
(cr30223_state[(0)] = null);

(cr30223_state[(5)] = null);

(cr30223_state[(1)] = null);

(cr30223_state[(2)] = null);

(cr30223_state[(3)] = null);

(cr30223_state[(4)] = null);

throw cr30223_exception;
}});
var cr30223_block_2 = (function hyperfiddle$electric_client$connector_$_cr30223_block_2(cr30223_state){
try{var cr30223_place_3 = (cr30223_state[(1)]);
var cr30223_place_8 = cr30223_place_3;
var cr30223_place_9 = null;
var cr30223_place_10 = false;
(cr30223_state[(0)] = cr30223_block_3);

(cr30223_state[(1)] = null);

(cr30223_state[(4)] = cr30223_place_8);

(cr30223_state[(3)] = cr30223_place_9);

(cr30223_state[(1)] = cr30223_place_10);

return cr30223_state;
}catch (e30364){var cr30223_exception = e30364;
(cr30223_state[(0)] = null);

(cr30223_state[(1)] = null);

(cr30223_state[(2)] = null);

throw cr30223_exception;
}});
var cr30223_block_3 = (function hyperfiddle$electric_client$connector_$_cr30223_block_3(cr30223_state){
try{var cr30223_place_8 = (cr30223_state[(4)]);
var cr30223_place_11 = hyperfiddle.electric_client.send_BANG_;
var cr30223_place_12 = cr30223_place_8;
var cr30223_place_13 = hyperfiddle.electric.impl.io.encode;
var cr30223_place_14 = server;
var cr30223_place_15 = (function (){var G__30368 = cr30223_place_14;
var fexpr__30367 = cr30223_place_13;
return (fexpr__30367.cljs$core$IFn$_invoke$arity$1 ? fexpr__30367.cljs$core$IFn$_invoke$arity$1(G__30368) : fexpr__30367.call(null,G__30368));
})();
var cr30223_place_16 = (function (){var G__30371 = cr30223_place_12;
var G__30372 = cr30223_place_15;
var fexpr__30370 = cr30223_place_11;
return (fexpr__30370.cljs$core$IFn$_invoke$arity$2 ? fexpr__30370.cljs$core$IFn$_invoke$arity$2(G__30371,G__30372) : fexpr__30370.call(null,G__30371,G__30372));
})();
var cr30223_place_17 = cr30223_place_8;
var cr30223_place_18 = cljs.core.comp;
var cr30223_place_19 = cb;
var cr30223_place_20 = hyperfiddle.electric.impl.io.decode;
var cr30223_place_21 = hyperfiddle.electric_client.payload;
var cr30223_place_22 = (function (){var G__30375 = cr30223_place_19;
var G__30376 = cr30223_place_20;
var G__30377 = cr30223_place_21;
var fexpr__30374 = cr30223_place_18;
return (fexpr__30374.cljs$core$IFn$_invoke$arity$3 ? fexpr__30374.cljs$core$IFn$_invoke$arity$3(G__30375,G__30376,G__30377) : fexpr__30374.call(null,G__30375,G__30376,G__30377));
})();
var cr30223_place_23 = (cr30223_place_17.onmessage = cr30223_place_22);
var cr30223_place_24 = missionary.core.race;
var cr30223_place_25 = hyperfiddle.electric_client.send_all;
var cr30223_place_26 = cr30223_place_8;
var cr30223_place_27 = msgs;
var cr30223_place_28 = (function (){var G__30379 = cr30223_place_26;
var G__30380 = cr30223_place_27;
var fexpr__30378 = cr30223_place_25;
return (fexpr__30378.cljs$core$IFn$_invoke$arity$2 ? fexpr__30378.cljs$core$IFn$_invoke$arity$2(G__30379,G__30380) : fexpr__30378.call(null,G__30379,G__30380));
})();
var cr30223_place_29 = hyperfiddle.electric_client.wait_for_close;
var cr30223_place_30 = cr30223_place_8;
var cr30223_place_31 = (function (){var G__30382 = cr30223_place_30;
var fexpr__30381 = cr30223_place_29;
return (fexpr__30381.cljs$core$IFn$_invoke$arity$1 ? fexpr__30381.cljs$core$IFn$_invoke$arity$1(G__30382) : fexpr__30381.call(null,G__30382));
})();
var cr30223_place_32 = (function (){var G__30384 = cr30223_place_28;
var G__30385 = cr30223_place_31;
var fexpr__30383 = cr30223_place_24;
return (fexpr__30383.cljs$core$IFn$_invoke$arity$2 ? fexpr__30383.cljs$core$IFn$_invoke$arity$2(G__30384,G__30385) : fexpr__30383.call(null,G__30384,G__30385));
})();
(cr30223_state[(0)] = cr30223_block_4);

return missionary.core.park(cr30223_place_32);
}catch (e30365){var cr30223_exception = e30365;
(cr30223_state[(0)] = cr30223_block_5);

(cr30223_state[(3)] = cr30223_exception);

return cr30223_state;
}});
var cr30223_block_0 = (function hyperfiddle$electric_client$connector_$_cr30223_block_0(cr30223_state){
try{var cr30223_place_0 = hyperfiddle.electric_client.connect;
var cr30223_place_1 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr30223_place_2 = (function (){var G__30388 = cr30223_place_1;
var fexpr__30387 = cr30223_place_0;
return (fexpr__30387.cljs$core$IFn$_invoke$arity$1 ? fexpr__30387.cljs$core$IFn$_invoke$arity$1(G__30388) : fexpr__30387.call(null,G__30388));
})();
(cr30223_state[(0)] = cr30223_block_1);

return missionary.core.park(cr30223_place_2);
}catch (e30386){var cr30223_exception = e30386;
(cr30223_state[(0)] = null);

throw cr30223_exception;
}});
var cr30223_block_4 = (function hyperfiddle$electric_client$connector_$_cr30223_block_4(cr30223_state){
try{var cr30223_place_33 = missionary.core.unpark();
(cr30223_state[(0)] = cr30223_block_6);

(cr30223_state[(3)] = cr30223_place_33);

return cr30223_state;
}catch (e30389){var cr30223_exception = e30389;
(cr30223_state[(0)] = cr30223_block_5);

(cr30223_state[(3)] = cr30223_exception);

return cr30223_state;
}});
return cloroutine.impl.coroutine((function (){var G__30390 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__30390[(0)] = cr30223_block_0);

return G__30390;
})());
})(),missionary.core.sp_run);
});
});
hyperfiddle.electric_client.fib_iter = (function hyperfiddle$electric_client$fib_iter(p__30391){
var vec__30392 = p__30391;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30392,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30392,(1),null);
var G__30395 = b;
switch (G__30395) {
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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30406_block_6 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30406_block_6(cr30406_state){
try{var cr30406_place_56 = (cr30406_state[(3)]);
var cr30406_place_61 = cr30406_place_56;
var cr30406_place_62 = new cljs.core.Keyword(null,"code","code",1586293142);
var cr30406_place_63 = cr30406_place_61;
var cr30406_place_64 = cr30406_place_62.cljs$core$IFn$_invoke$arity$1(cr30406_place_63);
var cr30406_place_65 = cr30406_place_64;
var cr30406_place_66 = null;
var cr30406_place_67 = (cr30406_place_65 == cr30406_place_66);
var cr30406_place_68 = null;
if(cr30406_place_67){
(cr30406_state[(0)] = cr30406_block_12);

(cr30406_state[(3)] = null);

(cr30406_state[(5)] = cr30406_place_68);

return cr30406_state;
} else {
(cr30406_state[(0)] = cr30406_block_7);

(cr30406_state[(3)] = null);

(cr30406_state[(6)] = cr30406_place_61);

(cr30406_state[(3)] = cr30406_place_64);

(cr30406_state[(5)] = cr30406_place_68);

return cr30406_state;
}
}catch (e30738){var cr30406_exception = e30738;
(cr30406_state[(0)] = null);

(cr30406_state[(3)] = null);

(cr30406_state[(1)] = null);

(cr30406_state[(4)] = null);

(cr30406_state[(2)] = null);

throw cr30406_exception;
}});
var cr30406_block_1 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30406_block_1(cr30406_state){
try{var cr30406_place_0 = (cr30406_state[(1)]);
var cr30406_place_2 = cljs.core.object_array;
var cr30406_place_3 = (1);
var cr30406_place_4 = (function (){var G__30741 = cr30406_place_3;
var fexpr__30740 = cr30406_place_2;
return (fexpr__30740.cljs$core$IFn$_invoke$arity$1 ? fexpr__30740.cljs$core$IFn$_invoke$arity$1(G__30741) : fexpr__30740.call(null,G__30741));
})();
var cr30406_place_5 = console;
var cr30406_place_6 = "Connecting...";
var cr30406_place_7 = cr30406_place_5.log(cr30406_place_6);
var cr30406_place_8 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr30406_place_9 = cr30406_place_0;
var cr30406_place_10 = cr30406_place_9;
var cr30406_place_11 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr30406_place_10);
var cr30406_place_12 = null;
var cr30406_place_13 = false;
(cr30406_state[(0)] = cr30406_block_2);

(cr30406_state[(3)] = cr30406_place_13);

(cr30406_state[(4)] = cr30406_place_4);

(cr30406_state[(5)] = cr30406_place_8);

(cr30406_state[(6)] = cr30406_place_12);

return cr30406_state;
}catch (e30739){var cr30406_exception = e30739;
(cr30406_state[(0)] = null);

(cr30406_state[(1)] = null);

(cr30406_state[(2)] = null);

throw cr30406_exception;
}});
var cr30406_block_19 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30406_block_19(cr30406_state){
try{var cr30406_place_105 = (cr30406_state[(1)]);
(cr30406_state[(0)] = null);

(cr30406_state[(1)] = null);

return cr30406_place_105;
}catch (e30742){var cr30406_exception = e30742;
(cr30406_state[(0)] = null);

(cr30406_state[(1)] = null);

throw cr30406_exception;
}});
var cr30406_block_5 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30406_block_5(cr30406_state){
try{var cr30406_place_13 = (cr30406_state[(3)]);
var cr30406_place_8 = (cr30406_state[(5)]);
var cr30406_place_12 = (cr30406_state[(6)]);
var cr30406_place_54 = cr30406_place_8;
var cr30406_place_55 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr30406_place_54);
var cr30406_place_56 = (cljs.core.truth_(cr30406_place_13)?(function(){throw cr30406_place_12})():cr30406_place_12);
var cr30406_place_57 = cr30406_place_56;
var cr30406_place_58 = null;
var cr30406_place_59 = (cr30406_place_57 == cr30406_place_58);
var cr30406_place_60 = null;
if(cr30406_place_59){
(cr30406_state[(0)] = cr30406_block_14);

(cr30406_state[(3)] = null);

(cr30406_state[(5)] = null);

(cr30406_state[(6)] = null);

(cr30406_state[(4)] = cr30406_place_60);

return cr30406_state;
} else {
(cr30406_state[(0)] = cr30406_block_6);

(cr30406_state[(3)] = null);

(cr30406_state[(5)] = null);

(cr30406_state[(6)] = null);

(cr30406_state[(3)] = cr30406_place_56);

(cr30406_state[(4)] = cr30406_place_60);

return cr30406_state;
}
}catch (e30743){var cr30406_exception = e30743;
(cr30406_state[(0)] = null);

(cr30406_state[(3)] = null);

(cr30406_state[(5)] = null);

(cr30406_state[(1)] = null);

(cr30406_state[(6)] = null);

(cr30406_state[(2)] = null);

throw cr30406_exception;
}});
var cr30406_block_18 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30406_block_18(cr30406_state){
try{var cr30406_place_131 = null;
(cr30406_state[(0)] = cr30406_block_19);

(cr30406_state[(1)] = cr30406_place_131);

return cr30406_state;
}catch (e30744){var cr30406_exception = e30744;
(cr30406_state[(0)] = null);

(cr30406_state[(1)] = null);

throw cr30406_exception;
}});
var cr30406_block_13 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30406_block_13(cr30406_state){
try{var cr30406_place_68 = (cr30406_state[(5)]);
(cr30406_state[(0)] = cr30406_block_15);

(cr30406_state[(5)] = null);

(cr30406_state[(4)] = cr30406_place_68);

return cr30406_state;
}catch (e30745){var cr30406_exception = e30745;
(cr30406_state[(0)] = null);

(cr30406_state[(5)] = null);

(cr30406_state[(1)] = null);

(cr30406_state[(4)] = null);

(cr30406_state[(2)] = null);

throw cr30406_exception;
}});
var cr30406_block_3 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30406_block_3(cr30406_state){
try{var cr30406_place_51 = missionary.core.unpark();
(cr30406_state[(0)] = cr30406_block_5);

(cr30406_state[(6)] = cr30406_place_51);

return cr30406_state;
}catch (e30746){var cr30406_exception = e30746;
(cr30406_state[(0)] = cr30406_block_4);

(cr30406_state[(6)] = cr30406_exception);

return cr30406_state;
}});
var cr30406_block_7 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30406_block_7(cr30406_state){
try{var cr30406_place_64 = (cr30406_state[(3)]);
var cr30406_place_69 = cr30406_place_64;
var cr30406_place_70 = cr30406_place_69;
var cr30406_place_71 = cr30406_place_70;
var cr30406_place_72 = null;
var G__30748 = cr30406_place_71;
switch (G__30748) {
case (1005):
case (1006):
(cr30406_state[(0)] = cr30406_block_8);

(cr30406_state[(3)] = null);

(cr30406_state[(6)] = null);

(cr30406_state[(3)] = cr30406_place_72);

return cr30406_state;

break;
case (1008):
(cr30406_state[(0)] = cr30406_block_9);

(cr30406_state[(3)] = null);

(cr30406_state[(5)] = null);

(cr30406_state[(1)] = null);

(cr30406_state[(4)] = null);

(cr30406_state[(6)] = null);

(cr30406_state[(2)] = null);

return cr30406_state;

break;
default:
(cr30406_state[(0)] = cr30406_block_10);

(cr30406_state[(3)] = null);

(cr30406_state[(5)] = null);

(cr30406_state[(1)] = null);

(cr30406_state[(4)] = null);

(cr30406_state[(2)] = null);

(cr30406_state[(1)] = cr30406_place_69);

return cr30406_state;

}
}catch (e30747){var cr30406_exception = e30747;
(cr30406_state[(0)] = null);

(cr30406_state[(3)] = null);

(cr30406_state[(5)] = null);

(cr30406_state[(1)] = null);

(cr30406_state[(4)] = null);

(cr30406_state[(6)] = null);

(cr30406_state[(2)] = null);

throw cr30406_exception;
}});
var cr30406_block_0 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30406_block_0(cr30406_state){
try{var cr30406_place_0 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr30406_place_1 = hyperfiddle.electric_client.retry_delays;
(cr30406_state[(0)] = cr30406_block_1);

(cr30406_state[(1)] = cr30406_place_0);

(cr30406_state[(2)] = cr30406_place_1);

return cr30406_state;
}catch (e30749){var cr30406_exception = e30749;
(cr30406_state[(0)] = null);

throw cr30406_exception;
}});
var cr30406_block_9 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30406_block_9(cr30406_state){
try{var cr30406_place_79 = cljs.core.ex_info;
var cr30406_place_80 = "Stale client";
var cr30406_place_81 = new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079);
var cr30406_place_82 = new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405);
var cr30406_place_83 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr30406_place_81,cr30406_place_82]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr30406_place_84 = (function (){var G__30752 = cr30406_place_80;
var G__30753 = cr30406_place_83;
var fexpr__30751 = cr30406_place_79;
return (fexpr__30751.cljs$core$IFn$_invoke$arity$2 ? fexpr__30751.cljs$core$IFn$_invoke$arity$2(G__30752,G__30753) : fexpr__30751.call(null,G__30752,G__30753));
})();
var cr30406_place_85 = (function(){throw cr30406_place_84})();
(cr30406_state[(0)] = null);

return null;
}catch (e30750){var cr30406_exception = e30750;
(cr30406_state[(0)] = null);

throw cr30406_exception;
}});
var cr30406_block_8 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30406_block_8(cr30406_state){
try{var cr30406_place_73 = console;
var cr30406_place_74 = "Connection lost.";
var cr30406_place_75 = cr30406_place_73.log(cr30406_place_74);
var cr30406_place_76 = cljs.core.seq;
var cr30406_place_77 = hyperfiddle.electric_client.retry_delays;
var cr30406_place_78 = (function (){var G__30756 = cr30406_place_77;
var fexpr__30755 = cr30406_place_76;
return (fexpr__30755.cljs$core$IFn$_invoke$arity$1 ? fexpr__30755.cljs$core$IFn$_invoke$arity$1(G__30756) : fexpr__30755.call(null,G__30756));
})();
(cr30406_state[(0)] = cr30406_block_11);

(cr30406_state[(3)] = cr30406_place_78);

return cr30406_state;
}catch (e30754){var cr30406_exception = e30754;
(cr30406_state[(0)] = null);

(cr30406_state[(5)] = null);

(cr30406_state[(3)] = null);

(cr30406_state[(1)] = null);

(cr30406_state[(4)] = null);

(cr30406_state[(2)] = null);

throw cr30406_exception;
}});
var cr30406_block_2 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30406_block_2(cr30406_state){
try{var cr30406_place_4 = (cr30406_state[(4)]);
var cr30406_place_14 = (function (x){
var fexpr__30531 = (cr30406_place_4[(0)]);
var G__30759 = x;
var fexpr__30758 = fexpr__30531;
return (fexpr__30758.cljs$core$IFn$_invoke$arity$1 ? fexpr__30758.cljs$core$IFn$_invoke$arity$1(G__30759) : fexpr__30758.call(null,G__30759));
});
var cr30406_place_15 = cljs.core.partial;
var cr30406_place_23 = (function (cr30532_state){
try{var cr30532_place_49 = (1);
var cr30532_place_50 = missionary.core.none;
(cr30532_state[(0)] = cr30406_place_29);

return missionary.core.fork(cr30532_place_49,cr30532_place_50);
}catch (e30796){var e30591 = e30796;
var cr30532_exception = e30591;
(cr30532_state[(0)] = null);

(cr30532_state[(3)] = null);

(cr30532_state[(2)] = null);

throw cr30532_exception;
}});
var cr30406_place_27 = (function (cr30532_state){
try{var cr30532_place_13 = (cr30532_state[(2)]);
(cr30532_state[(0)] = null);

(cr30532_state[(2)] = null);

return cr30532_place_13;
}catch (e30797){var e30600 = e30797;
var cr30532_exception = e30600;
(cr30532_state[(0)] = null);

(cr30532_state[(2)] = null);

throw cr30532_exception;
}});
var cr30406_place_29 = (function (cr30532_state){
try{var cr30532_place_51 = missionary.core.unpark();
(cr30532_state[(0)] = cr30406_place_17);

(cr30532_state[(3)] = cr30532_place_51);

return cr30532_state;
}catch (e30798){var e30603 = e30798;
var cr30532_exception = e30603;
(cr30532_state[(0)] = null);

(cr30532_state[(3)] = null);

(cr30532_state[(2)] = null);

throw cr30532_exception;
}});
var cr30406_place_22 = (function (cr30532_state){
try{var cr30532_place_40 = missionary.core.unpark();
var cr30532_place_41 = cr30532_place_40;
var cr30532_place_42 = null;
var G__30590 = cr30532_place_41;
var G__30800 = G__30590;
switch (G__30800) {
case (0):
(cr30532_state[(0)] = cr30406_place_19);

(cr30532_state[(1)] = null);

(cr30532_state[(1)] = cr30532_place_42);

return cr30532_state;

break;
case (1):
(cr30532_state[(0)] = cr30406_place_25);

(cr30532_state[(3)] = null);

(cr30532_state[(4)] = null);

return cr30532_state;

break;
default:
(cr30532_state[(0)] = cr30406_place_31);

(cr30532_state[(3)] = null);

(cr30532_state[(2)] = null);

(cr30532_state[(1)] = null);

(cr30532_state[(4)] = null);

(cr30532_state[(1)] = cr30532_place_40);

return cr30532_state;

}
}catch (e30799){var e30589 = e30799;
var cr30532_exception = e30589;
(cr30532_state[(0)] = null);

(cr30532_state[(3)] = null);

(cr30532_state[(2)] = null);

(cr30532_state[(1)] = null);

(cr30532_state[(4)] = null);

throw cr30532_exception;
}});
var cr30406_place_24 = (function (cr30532_state){
try{var cr30532_place_26 = missionary.core.unpark();
(cr30532_state[(0)] = cr30406_place_27);

(cr30532_state[(2)] = cr30532_place_26);

return cr30532_state;
}catch (e30801){var e30592 = e30801;
var cr30532_exception = e30592;
(cr30532_state[(0)] = null);

(cr30532_state[(2)] = null);

throw cr30532_exception;
}});
var cr30406_place_18 = (function (cr30532_state){
try{var cr30532_place_11 = (cr30532_state[(1)]);
var cr30532_place_52 = "No matching clause: ";
var cr30532_place_53 = cr30532_place_11;
var cr30532_place_54 = [cr30532_place_52,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr30532_place_53)].join('');
var cr30532_place_55 = (new Error(cr30532_place_54));
var cr30532_place_56 = (function(){throw cr30532_place_55})();
(cr30532_state[(0)] = null);

(cr30532_state[(1)] = null);

return null;
}catch (e30802){var e30579 = e30802;
var cr30532_exception = e30579;
(cr30532_state[(0)] = null);

(cr30532_state[(1)] = null);

throw cr30532_exception;
}});
var cr30406_place_26 = (function (cr30532_state){
try{var cr30532_place_0 = console;
var cr30532_place_1 = "Connected.";
var cr30532_place_2 = cr30532_place_0.log(cr30532_place_1);
var cr30532_place_3 = missionary.core.rdv;
var cr30532_place_4 = (function (){var fexpr__30595 = cr30532_place_3;
var fexpr__30804 = fexpr__30595;
return (fexpr__30804.cljs$core$IFn$_invoke$arity$0 ? fexpr__30804.cljs$core$IFn$_invoke$arity$0() : fexpr__30804.call(null));
})();
var cr30532_place_5 = (2);
var cr30532_place_6 = missionary.core.seed;
var cr30532_place_7 = cljs.core.range;
var cr30532_place_8 = (2);
var cr30532_place_9 = (function (){var G__30597 = cr30532_place_8;
var fexpr__30596 = cr30532_place_7;
var G__30806 = G__30597;
var fexpr__30805 = fexpr__30596;
return (fexpr__30805.cljs$core$IFn$_invoke$arity$1 ? fexpr__30805.cljs$core$IFn$_invoke$arity$1(G__30806) : fexpr__30805.call(null,G__30806));
})();
var cr30532_place_10 = (function (){var G__30599 = cr30532_place_9;
var fexpr__30598 = cr30532_place_6;
var G__30808 = G__30599;
var fexpr__30807 = fexpr__30598;
return (fexpr__30807.cljs$core$IFn$_invoke$arity$1 ? fexpr__30807.cljs$core$IFn$_invoke$arity$1(G__30808) : fexpr__30807.call(null,G__30808));
})();
(cr30532_state[(0)] = cr30406_place_28);

(cr30532_state[(1)] = cr30532_place_4);

return missionary.core.fork(cr30532_place_5,cr30532_place_10);
}catch (e30803){var e30594 = e30803;
var cr30532_exception = e30594;
(cr30532_state[(0)] = null);

throw cr30532_exception;
}});
var cr30406_place_28 = (function (cr30532_state){
try{var cr30532_place_11 = missionary.core.unpark();
var cr30532_place_12 = cr30532_place_11;
var cr30532_place_13 = null;
var G__30602 = cr30532_place_12;
var G__30810 = G__30602;
switch (G__30810) {
case (0):
(cr30532_state[(0)] = cr30406_place_20);

(cr30532_state[(2)] = cr30532_place_13);

return cr30532_state;

break;
case (1):
(cr30532_state[(0)] = cr30406_place_30);

(cr30532_state[(2)] = cr30532_place_13);

return cr30532_state;

break;
default:
(cr30532_state[(0)] = cr30406_place_18);

(cr30532_state[(1)] = null);

(cr30532_state[(1)] = cr30532_place_11);

return cr30532_state;

}
}catch (e30809){var e30601 = e30809;
var cr30532_exception = e30601;
(cr30532_state[(0)] = null);

(cr30532_state[(1)] = null);

throw cr30532_exception;
}});
var cr30406_place_17 = (function (cr30532_state){
try{var cr30532_place_32 = (cr30532_state[(3)]);
(cr30532_state[(0)] = cr30406_place_27);

(cr30532_state[(3)] = null);

(cr30532_state[(2)] = cr30532_place_32);

return cr30532_state;
}catch (e30811){var e30578 = e30811;
var cr30532_exception = e30578;
(cr30532_state[(0)] = null);

(cr30532_state[(3)] = null);

(cr30532_state[(2)] = null);

throw cr30532_exception;
}});
var cr30406_place_20 = (function (cr30532_state){
try{var cr30532_place_4 = (cr30532_state[(1)]);
var cr30532_place_14 = cr30532_place_4;
var cr30532_place_15 = hyperfiddle.electric.impl.runtime.subject_at;
var cr30532_place_16 = cr30406_place_4;
var cr30532_place_17 = (0);
var cr30532_place_18 = (function (){var G__30583 = cr30532_place_16;
var G__30584 = cr30532_place_17;
var fexpr__30582 = cr30532_place_15;
var G__30814 = G__30583;
var G__30815 = G__30584;
var fexpr__30813 = fexpr__30582;
return (fexpr__30813.cljs$core$IFn$_invoke$arity$2 ? fexpr__30813.cljs$core$IFn$_invoke$arity$2(G__30814,G__30815) : fexpr__30813.call(null,G__30814,G__30815));
})();
var cr30532_place_19 = client;
var cr30532_place_20 = cr30532_place_14;
var cr30532_place_21 = cr30532_place_18;
var cr30532_place_22 = (function (){var G__30586 = cr30532_place_20;
var G__30587 = cr30532_place_21;
var fexpr__30585 = cr30532_place_19;
var G__30817 = G__30586;
var G__30818 = G__30587;
var fexpr__30816 = fexpr__30585;
return (fexpr__30816.cljs$core$IFn$_invoke$arity$2 ? fexpr__30816.cljs$core$IFn$_invoke$arity$2(G__30817,G__30818) : fexpr__30816.call(null,G__30817,G__30818));
})();
(cr30532_state[(0)] = cr30406_place_32);

(cr30532_state[(1)] = null);

return missionary.core.park(cr30532_place_22);
}catch (e30812){var e30581 = e30812;
var cr30532_exception = e30581;
(cr30532_state[(0)] = null);

(cr30532_state[(2)] = null);

(cr30532_state[(1)] = null);

throw cr30532_exception;
}});
var cr30406_place_34 = (function (cr30532_state){
try{var cr30532_place_28 = missionary.core.unpark();
var cr30532_place_29 = cr30532_place_28;
var cr30532_place_30 = null;
var cr30532_place_31 = (cr30532_place_29 == cr30532_place_30);
var cr30532_place_32 = null;
if(cr30532_place_31){
(cr30532_state[(0)] = cr30406_place_23);

(cr30532_state[(1)] = null);

(cr30532_state[(3)] = cr30532_place_32);

return cr30532_state;
} else {
(cr30532_state[(0)] = cr30406_place_16);

(cr30532_state[(4)] = cr30532_place_28);

(cr30532_state[(3)] = cr30532_place_32);

return cr30532_state;
}
}catch (e30819){var e30608 = e30819;
var cr30532_exception = e30608;
(cr30532_state[(0)] = null);

(cr30532_state[(2)] = null);

(cr30532_state[(1)] = null);

throw cr30532_exception;
}});
var cr30406_place_19 = (function (cr30532_state){
try{var cr30532_place_33 = (cr30532_state[(4)]);
var cr30532_place_43 = cr30532_place_33;
(cr30532_state[(0)] = cr30406_place_33);

(cr30532_state[(4)] = null);

(cr30532_state[(1)] = cr30532_place_43);

return cr30532_state;
}catch (e30820){var e30580 = e30820;
var cr30532_exception = e30580;
(cr30532_state[(0)] = null);

(cr30532_state[(3)] = null);

(cr30532_state[(2)] = null);

(cr30532_state[(4)] = null);

(cr30532_state[(1)] = null);

throw cr30532_exception;
}});
var cr30406_place_33 = (function (cr30532_state){
try{var cr30532_place_42 = (cr30532_state[(1)]);
(cr30532_state[(0)] = cr30406_place_17);

(cr30532_state[(1)] = null);

(cr30532_state[(3)] = cr30532_place_42);

return cr30532_state;
}catch (e30821){var e30607 = e30821;
var cr30532_exception = e30607;
(cr30532_state[(0)] = null);

(cr30532_state[(3)] = null);

(cr30532_state[(2)] = null);

(cr30532_state[(1)] = null);

throw cr30532_exception;
}});
var cr30406_place_31 = (function (cr30532_state){
try{var cr30532_place_40 = (cr30532_state[(1)]);
var cr30532_place_44 = "No matching clause: ";
var cr30532_place_45 = cr30532_place_40;
var cr30532_place_46 = [cr30532_place_44,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr30532_place_45)].join('');
var cr30532_place_47 = (new Error(cr30532_place_46));
var cr30532_place_48 = (function(){throw cr30532_place_47})();
(cr30532_state[(0)] = null);

(cr30532_state[(1)] = null);

return null;
}catch (e30822){var e30605 = e30822;
var cr30532_exception = e30605;
(cr30532_state[(0)] = null);

(cr30532_state[(1)] = null);

throw cr30532_exception;
}});
var cr30406_place_32 = (function (cr30532_state){
try{var cr30532_place_23 = missionary.core.unpark();
var cr30532_place_24 = (1);
var cr30532_place_25 = missionary.core.none;
(cr30532_state[(0)] = cr30406_place_24);

return missionary.core.fork(cr30532_place_24,cr30532_place_25);
}catch (e30823){var e30606 = e30823;
var cr30532_exception = e30606;
(cr30532_state[(0)] = null);

(cr30532_state[(2)] = null);

throw cr30532_exception;
}});
var cr30406_place_25 = (function (cr30532_state){
try{(cr30532_state[(0)] = cr30406_place_21);

return cr30532_state;
}catch (e30824){var e30593 = e30824;
var cr30532_exception = e30593;
(cr30532_state[(0)] = null);

(cr30532_state[(2)] = null);

(cr30532_state[(1)] = null);

throw cr30532_exception;
}});
var cr30406_place_16 = (function (cr30532_state){
try{var cr30532_place_28 = (cr30532_state[(4)]);
var cr30532_place_33 = cr30532_place_28;
var cr30532_place_34 = (1);
var cr30532_place_35 = missionary.core.seed;
var cr30532_place_36 = cljs.core.range;
var cr30532_place_37 = (2);
var cr30532_place_38 = (function (){var G__30575 = cr30532_place_37;
var fexpr__30574 = cr30532_place_36;
var G__30827 = G__30575;
var fexpr__30826 = fexpr__30574;
return (fexpr__30826.cljs$core$IFn$_invoke$arity$1 ? fexpr__30826.cljs$core$IFn$_invoke$arity$1(G__30827) : fexpr__30826.call(null,G__30827));
})();
var cr30532_place_39 = (function (){var G__30577 = cr30532_place_38;
var fexpr__30576 = cr30532_place_35;
var G__30829 = G__30577;
var fexpr__30828 = fexpr__30576;
return (fexpr__30828.cljs$core$IFn$_invoke$arity$1 ? fexpr__30828.cljs$core$IFn$_invoke$arity$1(G__30829) : fexpr__30828.call(null,G__30829));
})();
(cr30532_state[(0)] = cr30406_place_22);

(cr30532_state[(4)] = null);

(cr30532_state[(4)] = cr30532_place_33);

return missionary.core.fork(cr30532_place_34,cr30532_place_39);
}catch (e30825){var e30573 = e30825;
var cr30532_exception = e30573;
(cr30532_state[(0)] = null);

(cr30532_state[(3)] = null);

(cr30532_state[(2)] = null);

(cr30532_state[(1)] = null);

(cr30532_state[(4)] = null);

throw cr30532_exception;
}});
var cr30406_place_30 = (function (cr30532_state){
try{(cr30532_state[(0)] = cr30406_place_21);

return cr30532_state;
}catch (e30830){var e30604 = e30830;
var cr30532_exception = e30604;
(cr30532_state[(0)] = null);

(cr30532_state[(2)] = null);

(cr30532_state[(1)] = null);

throw cr30532_exception;
}});
var cr30406_place_21 = (function (cr30532_state){
try{var cr30532_place_4 = (cr30532_state[(1)]);
var cr30532_place_27 = cr30532_place_4;
(cr30532_state[(0)] = cr30406_place_34);

return missionary.core.park(cr30532_place_27);
}catch (e30831){var e30588 = e30831;
var cr30532_exception = e30588;
(cr30532_state[(0)] = null);

(cr30532_state[(2)] = null);

(cr30532_state[(1)] = null);

throw cr30532_exception;
}});
var cr30406_place_35 = cloroutine.impl.coroutine;
var cr30406_place_36 = cljs.core.object_array;
var cr30406_place_37 = (5);
var cr30406_place_38 = (function (){var G__30833 = cr30406_place_37;
var fexpr__30832 = cr30406_place_36;
return (fexpr__30832.cljs$core$IFn$_invoke$arity$1 ? fexpr__30832.cljs$core$IFn$_invoke$arity$1(G__30833) : fexpr__30832.call(null,G__30833));
})();
var cr30406_place_39 = cr30406_place_38;
var cr30406_place_40 = (0);
var cr30406_place_41 = cr30406_place_26;
var cr30406_place_42 = (cr30406_place_39[cr30406_place_40] = cr30406_place_41);
var cr30406_place_43 = cr30406_place_38;
var cr30406_place_44 = (function (){var G__30835 = cr30406_place_43;
var fexpr__30834 = cr30406_place_35;
return (fexpr__30834.cljs$core$IFn$_invoke$arity$1 ? fexpr__30834.cljs$core$IFn$_invoke$arity$1(G__30835) : fexpr__30834.call(null,G__30835));
})();
var cr30406_place_45 = missionary.core.ap_run;
var cr30406_place_46 = (function (){var G__30837 = cr30406_place_44;
var G__30838 = cr30406_place_45;
var fexpr__30836 = cr30406_place_15;
return (fexpr__30836.cljs$core$IFn$_invoke$arity$2 ? fexpr__30836.cljs$core$IFn$_invoke$arity$2(G__30837,G__30838) : fexpr__30836.call(null,G__30837,G__30838));
})();
var cr30406_place_47 = conn;
var cr30406_place_48 = cr30406_place_14;
var cr30406_place_49 = cr30406_place_46;
var cr30406_place_50 = (function (){var G__30840 = cr30406_place_48;
var G__30841 = cr30406_place_49;
var fexpr__30839 = cr30406_place_47;
return (fexpr__30839.cljs$core$IFn$_invoke$arity$2 ? fexpr__30839.cljs$core$IFn$_invoke$arity$2(G__30840,G__30841) : fexpr__30839.call(null,G__30840,G__30841));
})();
(cr30406_state[(0)] = cr30406_block_3);

(cr30406_state[(4)] = null);

return missionary.core.park(cr30406_place_50);
}catch (e30757){var cr30406_exception = e30757;
(cr30406_state[(0)] = cr30406_block_4);

(cr30406_state[(4)] = null);

(cr30406_state[(6)] = cr30406_exception);

return cr30406_state;
}});
var cr30406_block_17 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30406_block_17(cr30406_state){
try{var cr30406_place_130 = missionary.core.unpark();
(cr30406_state[(0)] = cr30406_block_1);

(cr30406_state[(2)] = cr30406_place_130);

return cr30406_state;
}catch (e30842){var cr30406_exception = e30842;
(cr30406_state[(0)] = null);

(cr30406_state[(1)] = null);

(cr30406_state[(2)] = null);

throw cr30406_exception;
}});
var cr30406_block_14 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30406_block_14(cr30406_state){
try{var cr30406_place_101 = null;
(cr30406_state[(0)] = cr30406_block_15);

(cr30406_state[(4)] = cr30406_place_101);

return cr30406_state;
}catch (e30843){var cr30406_exception = e30843;
(cr30406_state[(0)] = null);

(cr30406_state[(1)] = null);

(cr30406_state[(4)] = null);

(cr30406_state[(2)] = null);

throw cr30406_exception;
}});
var cr30406_block_11 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30406_block_11(cr30406_state){
try{var cr30406_place_72 = (cr30406_state[(3)]);
(cr30406_state[(0)] = cr30406_block_13);

(cr30406_state[(3)] = null);

(cr30406_state[(5)] = cr30406_place_72);

return cr30406_state;
}catch (e30844){var cr30406_exception = e30844;
(cr30406_state[(0)] = null);

(cr30406_state[(5)] = null);

(cr30406_state[(3)] = null);

(cr30406_state[(1)] = null);

(cr30406_state[(4)] = null);

(cr30406_state[(2)] = null);

throw cr30406_exception;
}});
var cr30406_block_10 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30406_block_10(cr30406_state){
try{var cr30406_place_69 = (cr30406_state[(1)]);
var cr30406_place_61 = (cr30406_state[(6)]);
var cr30406_place_86 = cljs.core.ex_info;
var cr30406_place_87 = "Remote error - ";
var cr30406_place_88 = cr30406_place_69;
var cr30406_place_89 = " ";
var cr30406_place_90 = new cljs.core.Keyword(null,"reason","reason",-2070751759);
var cr30406_place_91 = cr30406_place_61;
var cr30406_place_92 = cr30406_place_90.cljs$core$IFn$_invoke$arity$1(cr30406_place_91);
var cr30406_place_93 = [cr30406_place_87,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr30406_place_88),cr30406_place_89,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr30406_place_92)].join('');
var cr30406_place_94 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr30406_place_95 = (function (){var G__30847 = cr30406_place_93;
var G__30848 = cr30406_place_94;
var fexpr__30846 = cr30406_place_86;
return (fexpr__30846.cljs$core$IFn$_invoke$arity$2 ? fexpr__30846.cljs$core$IFn$_invoke$arity$2(G__30847,G__30848) : fexpr__30846.call(null,G__30847,G__30848));
})();
var cr30406_place_96 = (function(){throw cr30406_place_95})();
(cr30406_state[(0)] = null);

(cr30406_state[(1)] = null);

(cr30406_state[(6)] = null);

return null;
}catch (e30845){var cr30406_exception = e30845;
(cr30406_state[(0)] = null);

(cr30406_state[(1)] = null);

(cr30406_state[(6)] = null);

throw cr30406_exception;
}});
var cr30406_block_12 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30406_block_12(cr30406_state){
try{var cr30406_place_1 = (cr30406_state[(2)]);
var cr30406_place_97 = console;
var cr30406_place_98 = "Failed to connect.";
var cr30406_place_99 = cr30406_place_97.log(cr30406_place_98);
var cr30406_place_100 = cr30406_place_1;
(cr30406_state[(0)] = cr30406_block_13);

(cr30406_state[(5)] = cr30406_place_100);

return cr30406_state;
}catch (e30849){var cr30406_exception = e30849;
(cr30406_state[(0)] = null);

(cr30406_state[(5)] = null);

(cr30406_state[(1)] = null);

(cr30406_state[(4)] = null);

(cr30406_state[(2)] = null);

throw cr30406_exception;
}});
var cr30406_block_4 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30406_block_4(cr30406_state){
try{var cr30406_place_12 = (cr30406_state[(6)]);
var cr30406_place_52 = cr30406_place_12;
var cr30406_place_53 = (function(){throw cr30406_place_52})();
(cr30406_state[(0)] = null);

(cr30406_state[(3)] = null);

(cr30406_state[(5)] = null);

(cr30406_state[(1)] = null);

(cr30406_state[(6)] = null);

(cr30406_state[(2)] = null);

return null;
}catch (e30850){var cr30406_exception = e30850;
(cr30406_state[(0)] = cr30406_block_5);

(cr30406_state[(3)] = true);

(cr30406_state[(6)] = cr30406_exception);

return cr30406_state;
}});
var cr30406_block_15 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30406_block_15(cr30406_state){
try{var cr30406_place_60 = (cr30406_state[(4)]);
var cr30406_place_102 = cr30406_place_60;
var cr30406_place_103 = null;
var cr30406_place_104 = (cr30406_place_102 == cr30406_place_103);
var cr30406_place_105 = null;
if(cr30406_place_104){
(cr30406_state[(0)] = cr30406_block_18);

(cr30406_state[(1)] = null);

(cr30406_state[(4)] = null);

(cr30406_state[(2)] = null);

(cr30406_state[(1)] = cr30406_place_105);

return cr30406_state;
} else {
(cr30406_state[(0)] = cr30406_block_16);

return cr30406_state;
}
}catch (e30851){var cr30406_exception = e30851;
(cr30406_state[(0)] = null);

(cr30406_state[(1)] = null);

(cr30406_state[(4)] = null);

(cr30406_state[(2)] = null);

throw cr30406_exception;
}});
var cr30406_block_16 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30406_block_16(cr30406_state){
try{var cr30406_place_60 = (cr30406_state[(4)]);
var cr30406_place_106 = cr30406_place_60;
var cr30406_place_107 = cljs.core.seq;
var cr30406_place_108 = cr30406_place_106;
var cr30406_place_109 = (function (){var G__30854 = cr30406_place_108;
var fexpr__30853 = cr30406_place_107;
return (fexpr__30853.cljs$core$IFn$_invoke$arity$1 ? fexpr__30853.cljs$core$IFn$_invoke$arity$1(G__30854) : fexpr__30853.call(null,G__30854));
})();
var cr30406_place_110 = cljs.core.first;
var cr30406_place_111 = cr30406_place_109;
var cr30406_place_112 = (function (){var G__30856 = cr30406_place_111;
var fexpr__30855 = cr30406_place_110;
return (fexpr__30855.cljs$core$IFn$_invoke$arity$1 ? fexpr__30855.cljs$core$IFn$_invoke$arity$1(G__30856) : fexpr__30855.call(null,G__30856));
})();
var cr30406_place_113 = cljs.core.next;
var cr30406_place_114 = cr30406_place_109;
var cr30406_place_115 = (function (){var G__30858 = cr30406_place_114;
var fexpr__30857 = cr30406_place_113;
return (fexpr__30857.cljs$core$IFn$_invoke$arity$1 ? fexpr__30857.cljs$core$IFn$_invoke$arity$1(G__30858) : fexpr__30857.call(null,G__30858));
})();
var cr30406_place_116 = cr30406_place_112;
var cr30406_place_117 = cr30406_place_115;
var cr30406_place_118 = console;
var cr30406_place_119 = "Next attempt in ";
var cr30406_place_120 = cr30406_place_116;
var cr30406_place_121 = (1000);
var cr30406_place_122 = (cr30406_place_120 / cr30406_place_121);
var cr30406_place_123 = " seconds.";
var cr30406_place_124 = [cr30406_place_119,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr30406_place_122),cr30406_place_123].join('');
var cr30406_place_125 = cr30406_place_118.log(cr30406_place_124);
var cr30406_place_126 = missionary.core.sleep;
var cr30406_place_127 = cr30406_place_116;
var cr30406_place_128 = cr30406_place_117;
var cr30406_place_129 = (function (){var G__30860 = cr30406_place_127;
var G__30861 = cr30406_place_128;
var fexpr__30859 = cr30406_place_126;
return (fexpr__30859.cljs$core$IFn$_invoke$arity$2 ? fexpr__30859.cljs$core$IFn$_invoke$arity$2(G__30860,G__30861) : fexpr__30859.call(null,G__30860,G__30861));
})();
(cr30406_state[(0)] = cr30406_block_17);

(cr30406_state[(4)] = null);

return missionary.core.park(cr30406_place_129);
}catch (e30852){var cr30406_exception = e30852;
(cr30406_state[(0)] = null);

(cr30406_state[(1)] = null);

(cr30406_state[(4)] = null);

(cr30406_state[(2)] = null);

throw cr30406_exception;
}});
return cloroutine.impl.coroutine((function (){var G__30862 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((7));
(G__30862[(0)] = cr30406_block_0);

return G__30862;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.reload_when_stale = (function hyperfiddle$electric_client$reload_when_stale(task){
return (function (s,f){
var G__30863 = s;
var G__30864 = (function (error){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405),new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(error)))){
console.log("Server and client version mismatch. Refreshing page.");

window.location.reload();
} else {
}

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(error) : f.call(null,error));
});
return (task.cljs$core$IFn$_invoke$arity$2 ? task.cljs$core$IFn$_invoke$arity$2(G__30863,G__30864) : task.call(null,G__30863,G__30864));
});
});

//# sourceMappingURL=hyperfiddle.electric_client.js.map
