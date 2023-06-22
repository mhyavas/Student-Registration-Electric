goog.provide('hyperfiddle.electric_client');
/**
 * @define {string}
 */
hyperfiddle.electric_client.VERSION = goog.define("hyperfiddle.electric_client.VERSION","");
hyperfiddle.electric_client.server_url = (function hyperfiddle$electric_client$server_url(){
var url = (new URL(window.location));
var proto = url.protocol;
(url.protocol = (function (){var G__44453 = proto;
switch (G__44453) {
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
}catch (e44464){var e = e44464;
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));

return (function (){
return cljs.core.List.EMPTY;
});
}});
});
hyperfiddle.electric_client.wait_for_flush = (function hyperfiddle$electric_client$wait_for_flush(ws){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44477_block_0 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44477_block_0(cr44477_state){
try{(cr44477_state[(0)] = cr44477_block_1);

return cr44477_state;
}catch (e44502){var cr44477_exception = e44502;
(cr44477_state[(0)] = null);

throw cr44477_exception;
}});
var cr44477_block_1 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44477_block_1(cr44477_state){
try{var cr44477_place_0 = (4096);
var cr44477_place_1 = ws;
var cr44477_place_2 = cr44477_place_1.bufferedAmount;
var cr44477_place_3 = (cr44477_place_0 < cr44477_place_2);
var cr44477_place_4 = null;
if(cr44477_place_3){
(cr44477_state[(0)] = cr44477_block_3);

return cr44477_state;
} else {
(cr44477_state[(0)] = cr44477_block_2);

(cr44477_state[(1)] = cr44477_place_4);

return cr44477_state;
}
}catch (e44503){var cr44477_exception = e44503;
(cr44477_state[(0)] = null);

throw cr44477_exception;
}});
var cr44477_block_2 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44477_block_2(cr44477_state){
try{var cr44477_place_5 = null;
(cr44477_state[(0)] = cr44477_block_5);

(cr44477_state[(1)] = cr44477_place_5);

return cr44477_state;
}catch (e44508){var cr44477_exception = e44508;
(cr44477_state[(0)] = null);

(cr44477_state[(1)] = null);

throw cr44477_exception;
}});
var cr44477_block_3 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44477_block_3(cr44477_state){
try{var cr44477_place_6 = missionary.core.sleep;
var cr44477_place_7 = (50);
var cr44477_place_8 = (function (){var G__44514 = cr44477_place_7;
var fexpr__44513 = cr44477_place_6;
return (fexpr__44513.cljs$core$IFn$_invoke$arity$1 ? fexpr__44513.cljs$core$IFn$_invoke$arity$1(G__44514) : fexpr__44513.call(null,G__44514));
})();
(cr44477_state[(0)] = cr44477_block_4);

return missionary.core.park(cr44477_place_8);
}catch (e44511){var cr44477_exception = e44511;
(cr44477_state[(0)] = null);

throw cr44477_exception;
}});
var cr44477_block_4 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44477_block_4(cr44477_state){
try{var cr44477_place_9 = missionary.core.unpark();
(cr44477_state[(0)] = cr44477_block_1);

return cr44477_state;
}catch (e44516){var cr44477_exception = e44516;
(cr44477_state[(0)] = null);

throw cr44477_exception;
}});
var cr44477_block_5 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44477_block_5(cr44477_state){
try{var cr44477_place_4 = (cr44477_state[(1)]);
(cr44477_state[(0)] = null);

(cr44477_state[(1)] = null);

return cr44477_place_4;
}catch (e44517){var cr44477_exception = e44517;
(cr44477_state[(0)] = null);

(cr44477_state[(1)] = null);

throw cr44477_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44518 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__44518[(0)] = cr44477_block_0);

return G__44518;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.wait_for_close = (function hyperfiddle$electric_client$wait_for_close(ws){
return (function (s,f){
(ws.onclose = (function (e){
(ws.onclose = null);

var G__44522 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),e.code,new cljs.core.Keyword(null,"reason","reason",-2070751759),e.reason], null);
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__44522) : s.call(null,G__44522));
}));

return (function (){
if((ws.onclose == null)){
return null;
} else {
(ws.onclose = null);

var G__44528 = (new missionary.Cancelled());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44528) : f.call(null,G__44528));
}
});
});
});
hyperfiddle.electric_client.payload = (function hyperfiddle$electric_client$payload(x){
return x.data;
});
hyperfiddle.electric_client.send_BANG_ = (function hyperfiddle$electric_client$send_BANG_(ws,msg){
var G__44530 = ws;
G__44530.send(msg);

return G__44530;
});
hyperfiddle.electric_client.send_all = (function hyperfiddle$electric_client$send_all(ws,msgs){
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44540_block_0 = (function hyperfiddle$electric_client$send_all_$_cr44540_block_0(cr44540_state){
try{var cr44540_place_0 = hyperfiddle.electric_client.wait_for_flush;
var cr44540_place_1 = hyperfiddle.electric_client.send_BANG_;
var cr44540_place_2 = ws;
var cr44540_place_3 = hyperfiddle.electric.impl.io.encode;
var cr44540_place_4 = (1);
var cr44540_place_5 = msgs;
(cr44540_state[(0)] = cr44540_block_1);

(cr44540_state[(2)] = cr44540_place_0);

(cr44540_state[(4)] = cr44540_place_1);

(cr44540_state[(3)] = cr44540_place_2);

(cr44540_state[(1)] = cr44540_place_3);

return missionary.core.fork(cr44540_place_4,cr44540_place_5);
}catch (e44575){var cr44540_exception = e44575;
(cr44540_state[(0)] = null);

throw cr44540_exception;
}});
var cr44540_block_1 = (function hyperfiddle$electric_client$send_all_$_cr44540_block_1(cr44540_state){
try{var cr44540_place_3 = (cr44540_state[(1)]);
var cr44540_place_0 = (cr44540_state[(2)]);
var cr44540_place_2 = (cr44540_state[(3)]);
var cr44540_place_1 = (cr44540_state[(4)]);
var cr44540_place_6 = missionary.core.unpark();
var cr44540_place_7 = (function (){var G__44585 = cr44540_place_6;
var fexpr__44584 = cr44540_place_3;
return (fexpr__44584.cljs$core$IFn$_invoke$arity$1 ? fexpr__44584.cljs$core$IFn$_invoke$arity$1(G__44585) : fexpr__44584.call(null,G__44585));
})();
var cr44540_place_8 = (function (){var G__44589 = cr44540_place_2;
var G__44590 = cr44540_place_7;
var fexpr__44588 = cr44540_place_1;
return (fexpr__44588.cljs$core$IFn$_invoke$arity$2 ? fexpr__44588.cljs$core$IFn$_invoke$arity$2(G__44589,G__44590) : fexpr__44588.call(null,G__44589,G__44590));
})();
var cr44540_place_9 = (function (){var G__44592 = cr44540_place_8;
var fexpr__44591 = cr44540_place_0;
return (fexpr__44591.cljs$core$IFn$_invoke$arity$1 ? fexpr__44591.cljs$core$IFn$_invoke$arity$1(G__44592) : fexpr__44591.call(null,G__44592));
})();
(cr44540_state[(0)] = cr44540_block_2);

(cr44540_state[(1)] = null);

(cr44540_state[(2)] = null);

(cr44540_state[(3)] = null);

(cr44540_state[(4)] = null);

return missionary.core.park(cr44540_place_9);
}catch (e44579){var cr44540_exception = e44579;
(cr44540_state[(0)] = null);

(cr44540_state[(1)] = null);

(cr44540_state[(2)] = null);

(cr44540_state[(3)] = null);

(cr44540_state[(4)] = null);

throw cr44540_exception;
}});
var cr44540_block_2 = (function hyperfiddle$electric_client$send_all_$_cr44540_block_2(cr44540_state){
try{var cr44540_place_10 = missionary.core.unpark();
(cr44540_state[(0)] = null);

return cr44540_place_10;
}catch (e44597){var cr44540_exception = e44597;
(cr44540_state[(0)] = null);

throw cr44540_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44600 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__44600[(0)] = cr44540_block_0);

return G__44600;
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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44605_block_4 = (function hyperfiddle$electric_client$connector_$_cr44605_block_4(cr44605_state){
try{var cr44605_place_33 = missionary.core.unpark();
(cr44605_state[(0)] = cr44605_block_6);

(cr44605_state[(4)] = cr44605_place_33);

return cr44605_state;
}catch (e44695){var cr44605_exception = e44695;
(cr44605_state[(0)] = cr44605_block_5);

(cr44605_state[(4)] = cr44605_exception);

return cr44605_state;
}});
var cr44605_block_0 = (function hyperfiddle$electric_client$connector_$_cr44605_block_0(cr44605_state){
try{var cr44605_place_0 = hyperfiddle.electric_client.connect;
var cr44605_place_1 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr44605_place_2 = (function (){var G__44710 = cr44605_place_1;
var fexpr__44709 = cr44605_place_0;
return (fexpr__44709.cljs$core$IFn$_invoke$arity$1 ? fexpr__44709.cljs$core$IFn$_invoke$arity$1(G__44710) : fexpr__44709.call(null,G__44710));
})();
(cr44605_state[(0)] = cr44605_block_1);

return missionary.core.park(cr44605_place_2);
}catch (e44704){var cr44605_exception = e44704;
(cr44605_state[(0)] = null);

throw cr44605_exception;
}});
var cr44605_block_1 = (function hyperfiddle$electric_client$connector_$_cr44605_block_1(cr44605_state){
try{var cr44605_place_3 = missionary.core.unpark();
var cr44605_place_4 = cr44605_place_3;
var cr44605_place_5 = null;
var cr44605_place_6 = (cr44605_place_4 == cr44605_place_5);
var cr44605_place_7 = null;
if(cr44605_place_6){
(cr44605_state[(0)] = cr44605_block_11);

(cr44605_state[(1)] = cr44605_place_7);

return cr44605_state;
} else {
(cr44605_state[(0)] = cr44605_block_2);

(cr44605_state[(2)] = cr44605_place_3);

(cr44605_state[(1)] = cr44605_place_7);

return cr44605_state;
}
}catch (e44713){var cr44605_exception = e44713;
(cr44605_state[(0)] = null);

throw cr44605_exception;
}});
var cr44605_block_2 = (function hyperfiddle$electric_client$connector_$_cr44605_block_2(cr44605_state){
try{var cr44605_place_3 = (cr44605_state[(2)]);
var cr44605_place_8 = cr44605_place_3;
var cr44605_place_9 = null;
var cr44605_place_10 = false;
(cr44605_state[(0)] = cr44605_block_3);

(cr44605_state[(2)] = null);

(cr44605_state[(2)] = cr44605_place_8);

(cr44605_state[(4)] = cr44605_place_9);

(cr44605_state[(3)] = cr44605_place_10);

return cr44605_state;
}catch (e44728){var cr44605_exception = e44728;
(cr44605_state[(0)] = null);

(cr44605_state[(1)] = null);

(cr44605_state[(2)] = null);

throw cr44605_exception;
}});
var cr44605_block_8 = (function hyperfiddle$electric_client$connector_$_cr44605_block_8(cr44605_state){
try{var cr44605_place_48 = missionary.core.unpark();
(cr44605_state[(0)] = cr44605_block_10);

(cr44605_state[(5)] = cr44605_place_48);

return cr44605_state;
}catch (e44729){var cr44605_exception = e44729;
(cr44605_state[(0)] = null);

(cr44605_state[(3)] = null);

(cr44605_state[(1)] = null);

(cr44605_state[(4)] = null);

(cr44605_state[(5)] = null);

throw cr44605_exception;
}});
var cr44605_block_6 = (function hyperfiddle$electric_client$connector_$_cr44605_block_6(cr44605_state){
try{var cr44605_place_8 = (cr44605_state[(2)]);
var cr44605_place_36 = cljs.core._EQ_;
var cr44605_place_37 = WebSocket;
var cr44605_place_38 = cr44605_place_37.CLOSED;
var cr44605_place_39 = cr44605_place_8;
var cr44605_place_40 = cr44605_place_39.readyState;
var cr44605_place_41 = (function (){var G__44735 = cr44605_place_38;
var G__44736 = cr44605_place_40;
var fexpr__44734 = cr44605_place_36;
return (fexpr__44734.cljs$core$IFn$_invoke$arity$2 ? fexpr__44734.cljs$core$IFn$_invoke$arity$2(G__44735,G__44736) : fexpr__44734.call(null,G__44735,G__44736));
})();
var cr44605_place_42 = null;
if(cljs.core.truth_(cr44605_place_41)){
(cr44605_state[(0)] = cr44605_block_9);

(cr44605_state[(2)] = null);

(cr44605_state[(5)] = cr44605_place_42);

return cr44605_state;
} else {
(cr44605_state[(0)] = cr44605_block_7);

(cr44605_state[(5)] = cr44605_place_42);

return cr44605_state;
}
}catch (e44733){var cr44605_exception = e44733;
(cr44605_state[(0)] = null);

(cr44605_state[(2)] = null);

(cr44605_state[(3)] = null);

(cr44605_state[(1)] = null);

(cr44605_state[(4)] = null);

throw cr44605_exception;
}});
var cr44605_block_3 = (function hyperfiddle$electric_client$connector_$_cr44605_block_3(cr44605_state){
try{var cr44605_place_8 = (cr44605_state[(2)]);
var cr44605_place_11 = hyperfiddle.electric_client.send_BANG_;
var cr44605_place_12 = cr44605_place_8;
var cr44605_place_13 = hyperfiddle.electric.impl.io.encode;
var cr44605_place_14 = server;
var cr44605_place_15 = (function (){var G__44739 = cr44605_place_14;
var fexpr__44738 = cr44605_place_13;
return (fexpr__44738.cljs$core$IFn$_invoke$arity$1 ? fexpr__44738.cljs$core$IFn$_invoke$arity$1(G__44739) : fexpr__44738.call(null,G__44739));
})();
var cr44605_place_16 = (function (){var G__44741 = cr44605_place_12;
var G__44742 = cr44605_place_15;
var fexpr__44740 = cr44605_place_11;
return (fexpr__44740.cljs$core$IFn$_invoke$arity$2 ? fexpr__44740.cljs$core$IFn$_invoke$arity$2(G__44741,G__44742) : fexpr__44740.call(null,G__44741,G__44742));
})();
var cr44605_place_17 = cr44605_place_8;
var cr44605_place_18 = cljs.core.comp;
var cr44605_place_19 = cb;
var cr44605_place_20 = hyperfiddle.electric.impl.io.decode;
var cr44605_place_21 = hyperfiddle.electric_client.payload;
var cr44605_place_22 = (function (){var G__44744 = cr44605_place_19;
var G__44745 = cr44605_place_20;
var G__44746 = cr44605_place_21;
var fexpr__44743 = cr44605_place_18;
return (fexpr__44743.cljs$core$IFn$_invoke$arity$3 ? fexpr__44743.cljs$core$IFn$_invoke$arity$3(G__44744,G__44745,G__44746) : fexpr__44743.call(null,G__44744,G__44745,G__44746));
})();
var cr44605_place_23 = (cr44605_place_17.onmessage = cr44605_place_22);
var cr44605_place_24 = missionary.core.race;
var cr44605_place_25 = hyperfiddle.electric_client.send_all;
var cr44605_place_26 = cr44605_place_8;
var cr44605_place_27 = msgs;
var cr44605_place_28 = (function (){var G__44750 = cr44605_place_26;
var G__44751 = cr44605_place_27;
var fexpr__44749 = cr44605_place_25;
return (fexpr__44749.cljs$core$IFn$_invoke$arity$2 ? fexpr__44749.cljs$core$IFn$_invoke$arity$2(G__44750,G__44751) : fexpr__44749.call(null,G__44750,G__44751));
})();
var cr44605_place_29 = hyperfiddle.electric_client.wait_for_close;
var cr44605_place_30 = cr44605_place_8;
var cr44605_place_31 = (function (){var G__44753 = cr44605_place_30;
var fexpr__44752 = cr44605_place_29;
return (fexpr__44752.cljs$core$IFn$_invoke$arity$1 ? fexpr__44752.cljs$core$IFn$_invoke$arity$1(G__44753) : fexpr__44752.call(null,G__44753));
})();
var cr44605_place_32 = (function (){var G__44755 = cr44605_place_28;
var G__44756 = cr44605_place_31;
var fexpr__44754 = cr44605_place_24;
return (fexpr__44754.cljs$core$IFn$_invoke$arity$2 ? fexpr__44754.cljs$core$IFn$_invoke$arity$2(G__44755,G__44756) : fexpr__44754.call(null,G__44755,G__44756));
})();
(cr44605_state[(0)] = cr44605_block_4);

return missionary.core.park(cr44605_place_32);
}catch (e44737){var cr44605_exception = e44737;
(cr44605_state[(0)] = cr44605_block_5);

(cr44605_state[(4)] = cr44605_exception);

return cr44605_state;
}});
var cr44605_block_11 = (function hyperfiddle$electric_client$connector_$_cr44605_block_11(cr44605_state){
try{var cr44605_place_51 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
(cr44605_state[(0)] = cr44605_block_12);

(cr44605_state[(1)] = cr44605_place_51);

return cr44605_state;
}catch (e44760){var cr44605_exception = e44760;
(cr44605_state[(0)] = null);

(cr44605_state[(1)] = null);

throw cr44605_exception;
}});
var cr44605_block_9 = (function hyperfiddle$electric_client$connector_$_cr44605_block_9(cr44605_state){
try{var cr44605_place_49 = null;
(cr44605_state[(0)] = cr44605_block_10);

(cr44605_state[(5)] = cr44605_place_49);

return cr44605_state;
}catch (e44763){var cr44605_exception = e44763;
(cr44605_state[(0)] = null);

(cr44605_state[(3)] = null);

(cr44605_state[(1)] = null);

(cr44605_state[(4)] = null);

(cr44605_state[(5)] = null);

throw cr44605_exception;
}});
var cr44605_block_12 = (function hyperfiddle$electric_client$connector_$_cr44605_block_12(cr44605_state){
try{var cr44605_place_7 = (cr44605_state[(1)]);
(cr44605_state[(0)] = null);

(cr44605_state[(1)] = null);

return cr44605_place_7;
}catch (e44765){var cr44605_exception = e44765;
(cr44605_state[(0)] = null);

(cr44605_state[(1)] = null);

throw cr44605_exception;
}});
var cr44605_block_7 = (function hyperfiddle$electric_client$connector_$_cr44605_block_7(cr44605_state){
try{var cr44605_place_8 = (cr44605_state[(2)]);
var cr44605_place_43 = cr44605_place_8;
var cr44605_place_44 = cr44605_place_43.close();
var cr44605_place_45 = missionary.core.compel;
var cr44605_place_46 = hyperfiddle.electric_client.wait_for_close;
var cr44605_place_47 = (function (){var G__44768 = cr44605_place_46;
var fexpr__44767 = cr44605_place_45;
return (fexpr__44767.cljs$core$IFn$_invoke$arity$1 ? fexpr__44767.cljs$core$IFn$_invoke$arity$1(G__44768) : fexpr__44767.call(null,G__44768));
})();
(cr44605_state[(0)] = cr44605_block_8);

(cr44605_state[(2)] = null);

return missionary.core.park(cr44605_place_47);
}catch (e44766){var cr44605_exception = e44766;
(cr44605_state[(0)] = null);

(cr44605_state[(2)] = null);

(cr44605_state[(3)] = null);

(cr44605_state[(1)] = null);

(cr44605_state[(4)] = null);

(cr44605_state[(5)] = null);

throw cr44605_exception;
}});
var cr44605_block_10 = (function hyperfiddle$electric_client$connector_$_cr44605_block_10(cr44605_state){
try{var cr44605_place_10 = (cr44605_state[(3)]);
var cr44605_place_9 = (cr44605_state[(4)]);
var cr44605_place_42 = (cr44605_state[(5)]);
var cr44605_place_50 = (cljs.core.truth_(cr44605_place_10)?(function(){throw cr44605_place_9})():cr44605_place_9);
(cr44605_state[(0)] = cr44605_block_12);

(cr44605_state[(3)] = null);

(cr44605_state[(4)] = null);

(cr44605_state[(5)] = null);

(cr44605_state[(1)] = cr44605_place_50);

return cr44605_state;
}catch (e44769){var cr44605_exception = e44769;
(cr44605_state[(0)] = null);

(cr44605_state[(3)] = null);

(cr44605_state[(1)] = null);

(cr44605_state[(4)] = null);

(cr44605_state[(5)] = null);

throw cr44605_exception;
}});
var cr44605_block_5 = (function hyperfiddle$electric_client$connector_$_cr44605_block_5(cr44605_state){
try{var cr44605_place_9 = (cr44605_state[(4)]);
var cr44605_place_34 = cr44605_place_9;
var cr44605_place_35 = (function(){throw cr44605_place_34})();
(cr44605_state[(0)] = null);

(cr44605_state[(2)] = null);

(cr44605_state[(3)] = null);

(cr44605_state[(1)] = null);

(cr44605_state[(4)] = null);

return null;
}catch (e44771){var cr44605_exception = e44771;
(cr44605_state[(0)] = cr44605_block_6);

(cr44605_state[(3)] = true);

(cr44605_state[(4)] = cr44605_exception);

return cr44605_state;
}});
return cloroutine.impl.coroutine((function (){var G__44772 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__44772[(0)] = cr44605_block_0);

return G__44772;
})());
})(),missionary.core.sp_run);
});
});
hyperfiddle.electric_client.fib_iter = (function hyperfiddle$electric_client$fib_iter(p__44773){
var vec__44774 = p__44773;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44774,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44774,(1),null);
var G__44777 = b;
switch (G__44777) {
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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44779_block_4 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44779_block_4(cr44779_state){
try{var cr44779_place_12 = (cr44779_state[(6)]);
var cr44779_place_52 = cr44779_place_12;
var cr44779_place_53 = (function(){throw cr44779_place_52})();
(cr44779_state[(0)] = null);

(cr44779_state[(3)] = null);

(cr44779_state[(1)] = null);

(cr44779_state[(4)] = null);

(cr44779_state[(2)] = null);

(cr44779_state[(6)] = null);

return null;
}catch (e45128){var cr44779_exception = e45128;
(cr44779_state[(0)] = cr44779_block_5);

(cr44779_state[(3)] = true);

(cr44779_state[(6)] = cr44779_exception);

return cr44779_state;
}});
var cr44779_block_11 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44779_block_11(cr44779_state){
try{var cr44779_place_72 = (cr44779_state[(5)]);
(cr44779_state[(0)] = cr44779_block_13);

(cr44779_state[(5)] = null);

(cr44779_state[(3)] = cr44779_place_72);

return cr44779_state;
}catch (e45129){var cr44779_exception = e45129;
(cr44779_state[(0)] = null);

(cr44779_state[(4)] = null);

(cr44779_state[(1)] = null);

(cr44779_state[(3)] = null);

(cr44779_state[(2)] = null);

(cr44779_state[(5)] = null);

throw cr44779_exception;
}});
var cr44779_block_3 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44779_block_3(cr44779_state){
try{var cr44779_place_51 = missionary.core.unpark();
(cr44779_state[(0)] = cr44779_block_5);

(cr44779_state[(6)] = cr44779_place_51);

return cr44779_state;
}catch (e45130){var cr44779_exception = e45130;
(cr44779_state[(0)] = cr44779_block_4);

(cr44779_state[(6)] = cr44779_exception);

return cr44779_state;
}});
var cr44779_block_14 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44779_block_14(cr44779_state){
try{var cr44779_place_101 = null;
(cr44779_state[(0)] = cr44779_block_15);

(cr44779_state[(4)] = cr44779_place_101);

return cr44779_state;
}catch (e45131){var cr44779_exception = e45131;
(cr44779_state[(0)] = null);

(cr44779_state[(4)] = null);

(cr44779_state[(1)] = null);

(cr44779_state[(2)] = null);

throw cr44779_exception;
}});
var cr44779_block_0 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44779_block_0(cr44779_state){
try{var cr44779_place_0 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr44779_place_1 = hyperfiddle.electric_client.retry_delays;
(cr44779_state[(0)] = cr44779_block_1);

(cr44779_state[(2)] = cr44779_place_0);

(cr44779_state[(1)] = cr44779_place_1);

return cr44779_state;
}catch (e45132){var cr44779_exception = e45132;
(cr44779_state[(0)] = null);

throw cr44779_exception;
}});
var cr44779_block_7 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44779_block_7(cr44779_state){
try{var cr44779_place_64 = (cr44779_state[(6)]);
var cr44779_place_69 = cr44779_place_64;
var cr44779_place_70 = cr44779_place_69;
var cr44779_place_71 = cr44779_place_70;
var cr44779_place_72 = null;
var G__45134 = cr44779_place_71;
switch (G__45134) {
case (1005):
case (1006):
(cr44779_state[(0)] = cr44779_block_8);

(cr44779_state[(5)] = null);

(cr44779_state[(6)] = null);

(cr44779_state[(5)] = cr44779_place_72);

return cr44779_state;

break;
case (1008):
(cr44779_state[(0)] = cr44779_block_9);

(cr44779_state[(4)] = null);

(cr44779_state[(1)] = null);

(cr44779_state[(3)] = null);

(cr44779_state[(5)] = null);

(cr44779_state[(6)] = null);

(cr44779_state[(2)] = null);

return cr44779_state;

break;
default:
(cr44779_state[(0)] = cr44779_block_10);

(cr44779_state[(4)] = null);

(cr44779_state[(1)] = null);

(cr44779_state[(3)] = null);

(cr44779_state[(6)] = null);

(cr44779_state[(2)] = null);

(cr44779_state[(1)] = cr44779_place_69);

return cr44779_state;

}
}catch (e45133){var cr44779_exception = e45133;
(cr44779_state[(0)] = null);

(cr44779_state[(4)] = null);

(cr44779_state[(1)] = null);

(cr44779_state[(3)] = null);

(cr44779_state[(5)] = null);

(cr44779_state[(6)] = null);

(cr44779_state[(2)] = null);

throw cr44779_exception;
}});
var cr44779_block_5 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44779_block_5(cr44779_state){
try{var cr44779_place_13 = (cr44779_state[(3)]);
var cr44779_place_8 = (cr44779_state[(4)]);
var cr44779_place_12 = (cr44779_state[(6)]);
var cr44779_place_54 = cr44779_place_8;
var cr44779_place_55 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr44779_place_54);
var cr44779_place_56 = (cljs.core.truth_(cr44779_place_13)?(function(){throw cr44779_place_12})():cr44779_place_12);
var cr44779_place_57 = cr44779_place_56;
var cr44779_place_58 = null;
var cr44779_place_59 = (cr44779_place_57 == cr44779_place_58);
var cr44779_place_60 = null;
if(cr44779_place_59){
(cr44779_state[(0)] = cr44779_block_14);

(cr44779_state[(3)] = null);

(cr44779_state[(4)] = null);

(cr44779_state[(6)] = null);

(cr44779_state[(4)] = cr44779_place_60);

return cr44779_state;
} else {
(cr44779_state[(0)] = cr44779_block_6);

(cr44779_state[(3)] = null);

(cr44779_state[(4)] = null);

(cr44779_state[(6)] = null);

(cr44779_state[(3)] = cr44779_place_56);

(cr44779_state[(4)] = cr44779_place_60);

return cr44779_state;
}
}catch (e45135){var cr44779_exception = e45135;
(cr44779_state[(0)] = null);

(cr44779_state[(3)] = null);

(cr44779_state[(1)] = null);

(cr44779_state[(4)] = null);

(cr44779_state[(2)] = null);

(cr44779_state[(6)] = null);

throw cr44779_exception;
}});
var cr44779_block_10 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44779_block_10(cr44779_state){
try{var cr44779_place_69 = (cr44779_state[(1)]);
var cr44779_place_61 = (cr44779_state[(5)]);
var cr44779_place_86 = cljs.core.ex_info;
var cr44779_place_87 = "Remote error - ";
var cr44779_place_88 = cr44779_place_69;
var cr44779_place_89 = " ";
var cr44779_place_90 = new cljs.core.Keyword(null,"reason","reason",-2070751759);
var cr44779_place_91 = cr44779_place_61;
var cr44779_place_92 = cr44779_place_90.cljs$core$IFn$_invoke$arity$1(cr44779_place_91);
var cr44779_place_93 = [cr44779_place_87,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44779_place_88),cr44779_place_89,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44779_place_92)].join('');
var cr44779_place_94 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr44779_place_95 = (function (){var G__45138 = cr44779_place_93;
var G__45139 = cr44779_place_94;
var fexpr__45137 = cr44779_place_86;
return (fexpr__45137.cljs$core$IFn$_invoke$arity$2 ? fexpr__45137.cljs$core$IFn$_invoke$arity$2(G__45138,G__45139) : fexpr__45137.call(null,G__45138,G__45139));
})();
var cr44779_place_96 = (function(){throw cr44779_place_95})();
(cr44779_state[(0)] = null);

(cr44779_state[(1)] = null);

(cr44779_state[(5)] = null);

return null;
}catch (e45136){var cr44779_exception = e45136;
(cr44779_state[(0)] = null);

(cr44779_state[(1)] = null);

(cr44779_state[(5)] = null);

throw cr44779_exception;
}});
var cr44779_block_1 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44779_block_1(cr44779_state){
try{var cr44779_place_0 = (cr44779_state[(2)]);
var cr44779_place_2 = cljs.core.object_array;
var cr44779_place_3 = (1);
var cr44779_place_4 = (function (){var G__45142 = cr44779_place_3;
var fexpr__45141 = cr44779_place_2;
return (fexpr__45141.cljs$core$IFn$_invoke$arity$1 ? fexpr__45141.cljs$core$IFn$_invoke$arity$1(G__45142) : fexpr__45141.call(null,G__45142));
})();
var cr44779_place_5 = console;
var cr44779_place_6 = "Connecting...";
var cr44779_place_7 = cr44779_place_5.log(cr44779_place_6);
var cr44779_place_8 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr44779_place_9 = cr44779_place_0;
var cr44779_place_10 = cr44779_place_9;
var cr44779_place_11 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr44779_place_10);
var cr44779_place_12 = null;
var cr44779_place_13 = false;
(cr44779_state[(0)] = cr44779_block_2);

(cr44779_state[(3)] = cr44779_place_13);

(cr44779_state[(4)] = cr44779_place_8);

(cr44779_state[(5)] = cr44779_place_4);

(cr44779_state[(6)] = cr44779_place_12);

return cr44779_state;
}catch (e45140){var cr44779_exception = e45140;
(cr44779_state[(0)] = null);

(cr44779_state[(1)] = null);

(cr44779_state[(2)] = null);

throw cr44779_exception;
}});
var cr44779_block_16 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44779_block_16(cr44779_state){
try{var cr44779_place_60 = (cr44779_state[(4)]);
var cr44779_place_106 = cr44779_place_60;
var cr44779_place_107 = cljs.core.seq;
var cr44779_place_108 = cr44779_place_106;
var cr44779_place_109 = (function (){var G__45145 = cr44779_place_108;
var fexpr__45144 = cr44779_place_107;
return (fexpr__45144.cljs$core$IFn$_invoke$arity$1 ? fexpr__45144.cljs$core$IFn$_invoke$arity$1(G__45145) : fexpr__45144.call(null,G__45145));
})();
var cr44779_place_110 = cljs.core.first;
var cr44779_place_111 = cr44779_place_109;
var cr44779_place_112 = (function (){var G__45147 = cr44779_place_111;
var fexpr__45146 = cr44779_place_110;
return (fexpr__45146.cljs$core$IFn$_invoke$arity$1 ? fexpr__45146.cljs$core$IFn$_invoke$arity$1(G__45147) : fexpr__45146.call(null,G__45147));
})();
var cr44779_place_113 = cljs.core.next;
var cr44779_place_114 = cr44779_place_109;
var cr44779_place_115 = (function (){var G__45149 = cr44779_place_114;
var fexpr__45148 = cr44779_place_113;
return (fexpr__45148.cljs$core$IFn$_invoke$arity$1 ? fexpr__45148.cljs$core$IFn$_invoke$arity$1(G__45149) : fexpr__45148.call(null,G__45149));
})();
var cr44779_place_116 = cr44779_place_112;
var cr44779_place_117 = cr44779_place_115;
var cr44779_place_118 = console;
var cr44779_place_119 = "Next attempt in ";
var cr44779_place_120 = cr44779_place_116;
var cr44779_place_121 = (1000);
var cr44779_place_122 = (cr44779_place_120 / cr44779_place_121);
var cr44779_place_123 = " seconds.";
var cr44779_place_124 = [cr44779_place_119,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44779_place_122),cr44779_place_123].join('');
var cr44779_place_125 = cr44779_place_118.log(cr44779_place_124);
var cr44779_place_126 = missionary.core.sleep;
var cr44779_place_127 = cr44779_place_116;
var cr44779_place_128 = cr44779_place_117;
var cr44779_place_129 = (function (){var G__45151 = cr44779_place_127;
var G__45152 = cr44779_place_128;
var fexpr__45150 = cr44779_place_126;
return (fexpr__45150.cljs$core$IFn$_invoke$arity$2 ? fexpr__45150.cljs$core$IFn$_invoke$arity$2(G__45151,G__45152) : fexpr__45150.call(null,G__45151,G__45152));
})();
(cr44779_state[(0)] = cr44779_block_17);

(cr44779_state[(4)] = null);

return missionary.core.park(cr44779_place_129);
}catch (e45143){var cr44779_exception = e45143;
(cr44779_state[(0)] = null);

(cr44779_state[(4)] = null);

(cr44779_state[(1)] = null);

(cr44779_state[(2)] = null);

throw cr44779_exception;
}});
var cr44779_block_8 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44779_block_8(cr44779_state){
try{var cr44779_place_73 = console;
var cr44779_place_74 = "Connection lost.";
var cr44779_place_75 = cr44779_place_73.log(cr44779_place_74);
var cr44779_place_76 = cljs.core.seq;
var cr44779_place_77 = hyperfiddle.electric_client.retry_delays;
var cr44779_place_78 = (function (){var G__45155 = cr44779_place_77;
var fexpr__45154 = cr44779_place_76;
return (fexpr__45154.cljs$core$IFn$_invoke$arity$1 ? fexpr__45154.cljs$core$IFn$_invoke$arity$1(G__45155) : fexpr__45154.call(null,G__45155));
})();
(cr44779_state[(0)] = cr44779_block_11);

(cr44779_state[(5)] = cr44779_place_78);

return cr44779_state;
}catch (e45153){var cr44779_exception = e45153;
(cr44779_state[(0)] = null);

(cr44779_state[(4)] = null);

(cr44779_state[(1)] = null);

(cr44779_state[(3)] = null);

(cr44779_state[(2)] = null);

(cr44779_state[(5)] = null);

throw cr44779_exception;
}});
var cr44779_block_12 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44779_block_12(cr44779_state){
try{var cr44779_place_1 = (cr44779_state[(1)]);
var cr44779_place_97 = console;
var cr44779_place_98 = "Failed to connect.";
var cr44779_place_99 = cr44779_place_97.log(cr44779_place_98);
var cr44779_place_100 = cr44779_place_1;
(cr44779_state[(0)] = cr44779_block_13);

(cr44779_state[(3)] = cr44779_place_100);

return cr44779_state;
}catch (e45160){var cr44779_exception = e45160;
(cr44779_state[(0)] = null);

(cr44779_state[(4)] = null);

(cr44779_state[(1)] = null);

(cr44779_state[(3)] = null);

(cr44779_state[(2)] = null);

throw cr44779_exception;
}});
var cr44779_block_9 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44779_block_9(cr44779_state){
try{var cr44779_place_79 = cljs.core.ex_info;
var cr44779_place_80 = "Stale client";
var cr44779_place_81 = new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079);
var cr44779_place_82 = new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405);
var cr44779_place_83 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr44779_place_81,cr44779_place_82]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr44779_place_84 = (function (){var G__45167 = cr44779_place_80;
var G__45168 = cr44779_place_83;
var fexpr__45166 = cr44779_place_79;
return (fexpr__45166.cljs$core$IFn$_invoke$arity$2 ? fexpr__45166.cljs$core$IFn$_invoke$arity$2(G__45167,G__45168) : fexpr__45166.call(null,G__45167,G__45168));
})();
var cr44779_place_85 = (function(){throw cr44779_place_84})();
(cr44779_state[(0)] = null);

return null;
}catch (e45165){var cr44779_exception = e45165;
(cr44779_state[(0)] = null);

throw cr44779_exception;
}});
var cr44779_block_13 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44779_block_13(cr44779_state){
try{var cr44779_place_68 = (cr44779_state[(3)]);
(cr44779_state[(0)] = cr44779_block_15);

(cr44779_state[(3)] = null);

(cr44779_state[(4)] = cr44779_place_68);

return cr44779_state;
}catch (e45169){var cr44779_exception = e45169;
(cr44779_state[(0)] = null);

(cr44779_state[(4)] = null);

(cr44779_state[(1)] = null);

(cr44779_state[(3)] = null);

(cr44779_state[(2)] = null);

throw cr44779_exception;
}});
var cr44779_block_2 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44779_block_2(cr44779_state){
try{var cr44779_place_4 = (cr44779_state[(5)]);
var cr44779_place_14 = (function (x){
var fexpr__44921 = (cr44779_place_4[(0)]);
var G__45173 = x;
var fexpr__45172 = fexpr__44921;
return (fexpr__45172.cljs$core$IFn$_invoke$arity$1 ? fexpr__45172.cljs$core$IFn$_invoke$arity$1(G__45173) : fexpr__45172.call(null,G__45173));
});
var cr44779_place_15 = cljs.core.partial;
var cr44779_place_20 = (function (cr44922_state){
try{var cr44922_place_11 = (cr44922_state[(1)]);
var cr44922_place_52 = "No matching clause: ";
var cr44922_place_53 = cr44922_place_11;
var cr44922_place_54 = [cr44922_place_52,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44922_place_53)].join('');
var cr44922_place_55 = (new Error(cr44922_place_54));
var cr44922_place_56 = (function(){throw cr44922_place_55})();
(cr44922_state[(0)] = null);

(cr44922_state[(1)] = null);

return null;
}catch (e45221){var e44971 = e45221;
var cr44922_exception = e44971;
(cr44922_state[(0)] = null);

(cr44922_state[(1)] = null);

throw cr44922_exception;
}});
var cr44779_place_31 = (function (cr44922_state){
try{var cr44922_place_49 = (1);
var cr44922_place_50 = missionary.core.none;
(cr44922_state[(0)] = cr44779_place_16);

return missionary.core.fork(cr44922_place_49,cr44922_place_50);
}catch (e45222){var e44984 = e45222;
var cr44922_exception = e44984;
(cr44922_state[(0)] = null);

(cr44922_state[(2)] = null);

(cr44922_state[(4)] = null);

throw cr44922_exception;
}});
var cr44779_place_25 = (function (cr44922_state){
try{var cr44922_place_33 = (cr44922_state[(3)]);
var cr44922_place_43 = cr44922_place_33;
(cr44922_state[(0)] = cr44779_place_24);

(cr44922_state[(3)] = null);

(cr44922_state[(1)] = cr44922_place_43);

return cr44922_state;
}catch (e45223){var e44977 = e45223;
var cr44922_exception = e44977;
(cr44922_state[(0)] = null);

(cr44922_state[(2)] = null);

(cr44922_state[(4)] = null);

(cr44922_state[(1)] = null);

(cr44922_state[(3)] = null);

throw cr44922_exception;
}});
var cr44779_place_34 = (function (cr44922_state){
try{var cr44922_place_4 = (cr44922_state[(1)]);
var cr44922_place_14 = cr44922_place_4;
var cr44922_place_15 = hyperfiddle.electric.impl.runtime.subject_at;
var cr44922_place_16 = cr44779_place_4;
var cr44922_place_17 = (0);
var cr44922_place_18 = (function (){var G__44994 = cr44922_place_16;
var G__44995 = cr44922_place_17;
var fexpr__44993 = cr44922_place_15;
var G__45226 = G__44994;
var G__45227 = G__44995;
var fexpr__45225 = fexpr__44993;
return (fexpr__45225.cljs$core$IFn$_invoke$arity$2 ? fexpr__45225.cljs$core$IFn$_invoke$arity$2(G__45226,G__45227) : fexpr__45225.call(null,G__45226,G__45227));
})();
var cr44922_place_19 = client;
var cr44922_place_20 = cr44922_place_14;
var cr44922_place_21 = cr44922_place_18;
var cr44922_place_22 = (function (){var G__44997 = cr44922_place_20;
var G__44998 = cr44922_place_21;
var fexpr__44996 = cr44922_place_19;
var G__45229 = G__44997;
var G__45230 = G__44998;
var fexpr__45228 = fexpr__44996;
return (fexpr__45228.cljs$core$IFn$_invoke$arity$2 ? fexpr__45228.cljs$core$IFn$_invoke$arity$2(G__45229,G__45230) : fexpr__45228.call(null,G__45229,G__45230));
})();
(cr44922_state[(0)] = cr44779_place_23);

(cr44922_state[(1)] = null);

return missionary.core.park(cr44922_place_22);
}catch (e45224){var e44992 = e45224;
var cr44922_exception = e44992;
(cr44922_state[(0)] = null);

(cr44922_state[(2)] = null);

(cr44922_state[(1)] = null);

throw cr44922_exception;
}});
var cr44779_place_22 = (function (cr44922_state){
try{var cr44922_place_13 = (cr44922_state[(2)]);
(cr44922_state[(0)] = null);

(cr44922_state[(2)] = null);

return cr44922_place_13;
}catch (e45231){var e44974 = e45231;
var cr44922_exception = e44974;
(cr44922_state[(0)] = null);

(cr44922_state[(2)] = null);

throw cr44922_exception;
}});
var cr44779_place_32 = (function (cr44922_state){
try{(cr44922_state[(0)] = cr44779_place_29);

return cr44922_state;
}catch (e45232){var e44985 = e45232;
var cr44922_exception = e44985;
(cr44922_state[(0)] = null);

(cr44922_state[(2)] = null);

(cr44922_state[(1)] = null);

throw cr44922_exception;
}});
var cr44779_place_16 = (function (cr44922_state){
try{var cr44922_place_51 = missionary.core.unpark();
(cr44922_state[(0)] = cr44779_place_19);

(cr44922_state[(4)] = cr44922_place_51);

return cr44922_state;
}catch (e45233){var e44963 = e45233;
var cr44922_exception = e44963;
(cr44922_state[(0)] = null);

(cr44922_state[(2)] = null);

(cr44922_state[(4)] = null);

throw cr44922_exception;
}});
var cr44779_place_23 = (function (cr44922_state){
try{var cr44922_place_23 = missionary.core.unpark();
var cr44922_place_24 = (1);
var cr44922_place_25 = missionary.core.none;
(cr44922_state[(0)] = cr44779_place_28);

return missionary.core.fork(cr44922_place_24,cr44922_place_25);
}catch (e45234){var e44975 = e45234;
var cr44922_exception = e44975;
(cr44922_state[(0)] = null);

(cr44922_state[(2)] = null);

throw cr44922_exception;
}});
var cr44779_place_24 = (function (cr44922_state){
try{var cr44922_place_42 = (cr44922_state[(1)]);
(cr44922_state[(0)] = cr44779_place_19);

(cr44922_state[(1)] = null);

(cr44922_state[(4)] = cr44922_place_42);

return cr44922_state;
}catch (e45235){var e44976 = e45235;
var cr44922_exception = e44976;
(cr44922_state[(0)] = null);

(cr44922_state[(2)] = null);

(cr44922_state[(4)] = null);

(cr44922_state[(1)] = null);

throw cr44922_exception;
}});
var cr44779_place_30 = (function (cr44922_state){
try{var cr44922_place_40 = missionary.core.unpark();
var cr44922_place_41 = cr44922_place_40;
var cr44922_place_42 = null;
var G__44983 = cr44922_place_41;
var G__45237 = G__44983;
switch (G__45237) {
case (0):
(cr44922_state[(0)] = cr44779_place_25);

(cr44922_state[(1)] = null);

(cr44922_state[(1)] = cr44922_place_42);

return cr44922_state;

break;
case (1):
(cr44922_state[(0)] = cr44779_place_32);

(cr44922_state[(4)] = null);

(cr44922_state[(3)] = null);

return cr44922_state;

break;
default:
(cr44922_state[(0)] = cr44779_place_27);

(cr44922_state[(2)] = null);

(cr44922_state[(1)] = null);

(cr44922_state[(4)] = null);

(cr44922_state[(3)] = null);

(cr44922_state[(1)] = cr44922_place_40);

return cr44922_state;

}
}catch (e45236){var e44982 = e45236;
var cr44922_exception = e44982;
(cr44922_state[(0)] = null);

(cr44922_state[(2)] = null);

(cr44922_state[(1)] = null);

(cr44922_state[(4)] = null);

(cr44922_state[(3)] = null);

throw cr44922_exception;
}});
var cr44779_place_19 = (function (cr44922_state){
try{var cr44922_place_32 = (cr44922_state[(4)]);
(cr44922_state[(0)] = cr44779_place_22);

(cr44922_state[(4)] = null);

(cr44922_state[(2)] = cr44922_place_32);

return cr44922_state;
}catch (e45238){var e44970 = e45238;
var cr44922_exception = e44970;
(cr44922_state[(0)] = null);

(cr44922_state[(2)] = null);

(cr44922_state[(4)] = null);

throw cr44922_exception;
}});
var cr44779_place_29 = (function (cr44922_state){
try{var cr44922_place_4 = (cr44922_state[(1)]);
var cr44922_place_27 = cr44922_place_4;
(cr44922_state[(0)] = cr44779_place_18);

return missionary.core.park(cr44922_place_27);
}catch (e45239){var e44981 = e45239;
var cr44922_exception = e44981;
(cr44922_state[(0)] = null);

(cr44922_state[(2)] = null);

(cr44922_state[(1)] = null);

throw cr44922_exception;
}});
var cr44779_place_17 = (function (cr44922_state){
try{var cr44922_place_28 = (cr44922_state[(3)]);
var cr44922_place_33 = cr44922_place_28;
var cr44922_place_34 = (1);
var cr44922_place_35 = missionary.core.seed;
var cr44922_place_36 = cljs.core.range;
var cr44922_place_37 = (2);
var cr44922_place_38 = (function (){var G__44966 = cr44922_place_37;
var fexpr__44965 = cr44922_place_36;
var G__45242 = G__44966;
var fexpr__45241 = fexpr__44965;
return (fexpr__45241.cljs$core$IFn$_invoke$arity$1 ? fexpr__45241.cljs$core$IFn$_invoke$arity$1(G__45242) : fexpr__45241.call(null,G__45242));
})();
var cr44922_place_39 = (function (){var G__44968 = cr44922_place_38;
var fexpr__44967 = cr44922_place_35;
var G__45244 = G__44968;
var fexpr__45243 = fexpr__44967;
return (fexpr__45243.cljs$core$IFn$_invoke$arity$1 ? fexpr__45243.cljs$core$IFn$_invoke$arity$1(G__45244) : fexpr__45243.call(null,G__45244));
})();
(cr44922_state[(0)] = cr44779_place_30);

(cr44922_state[(3)] = null);

(cr44922_state[(3)] = cr44922_place_33);

return missionary.core.fork(cr44922_place_34,cr44922_place_39);
}catch (e45240){var e44964 = e45240;
var cr44922_exception = e44964;
(cr44922_state[(0)] = null);

(cr44922_state[(3)] = null);

(cr44922_state[(2)] = null);

(cr44922_state[(1)] = null);

(cr44922_state[(4)] = null);

throw cr44922_exception;
}});
var cr44779_place_18 = (function (cr44922_state){
try{var cr44922_place_28 = missionary.core.unpark();
var cr44922_place_29 = cr44922_place_28;
var cr44922_place_30 = null;
var cr44922_place_31 = (cr44922_place_29 == cr44922_place_30);
var cr44922_place_32 = null;
if(cr44922_place_31){
(cr44922_state[(0)] = cr44779_place_31);

(cr44922_state[(1)] = null);

(cr44922_state[(4)] = cr44922_place_32);

return cr44922_state;
} else {
(cr44922_state[(0)] = cr44779_place_17);

(cr44922_state[(3)] = cr44922_place_28);

(cr44922_state[(4)] = cr44922_place_32);

return cr44922_state;
}
}catch (e45245){var e44969 = e45245;
var cr44922_exception = e44969;
(cr44922_state[(0)] = null);

(cr44922_state[(2)] = null);

(cr44922_state[(1)] = null);

throw cr44922_exception;
}});
var cr44779_place_27 = (function (cr44922_state){
try{var cr44922_place_40 = (cr44922_state[(1)]);
var cr44922_place_44 = "No matching clause: ";
var cr44922_place_45 = cr44922_place_40;
var cr44922_place_46 = [cr44922_place_44,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44922_place_45)].join('');
var cr44922_place_47 = (new Error(cr44922_place_46));
var cr44922_place_48 = (function(){throw cr44922_place_47})();
(cr44922_state[(0)] = null);

(cr44922_state[(1)] = null);

return null;
}catch (e45246){var e44979 = e45246;
var cr44922_exception = e44979;
(cr44922_state[(0)] = null);

(cr44922_state[(1)] = null);

throw cr44922_exception;
}});
var cr44779_place_26 = (function (cr44922_state){
try{(cr44922_state[(0)] = cr44779_place_29);

return cr44922_state;
}catch (e45247){var e44978 = e45247;
var cr44922_exception = e44978;
(cr44922_state[(0)] = null);

(cr44922_state[(2)] = null);

(cr44922_state[(1)] = null);

throw cr44922_exception;
}});
var cr44779_place_33 = (function (cr44922_state){
try{var cr44922_place_0 = console;
var cr44922_place_1 = "Connected.";
var cr44922_place_2 = cr44922_place_0.log(cr44922_place_1);
var cr44922_place_3 = missionary.core.rdv;
var cr44922_place_4 = (function (){var fexpr__44987 = cr44922_place_3;
var fexpr__45249 = fexpr__44987;
return (fexpr__45249.cljs$core$IFn$_invoke$arity$0 ? fexpr__45249.cljs$core$IFn$_invoke$arity$0() : fexpr__45249.call(null));
})();
var cr44922_place_5 = (2);
var cr44922_place_6 = missionary.core.seed;
var cr44922_place_7 = cljs.core.range;
var cr44922_place_8 = (2);
var cr44922_place_9 = (function (){var G__44989 = cr44922_place_8;
var fexpr__44988 = cr44922_place_7;
var G__45251 = G__44989;
var fexpr__45250 = fexpr__44988;
return (fexpr__45250.cljs$core$IFn$_invoke$arity$1 ? fexpr__45250.cljs$core$IFn$_invoke$arity$1(G__45251) : fexpr__45250.call(null,G__45251));
})();
var cr44922_place_10 = (function (){var G__44991 = cr44922_place_9;
var fexpr__44990 = cr44922_place_6;
var G__45253 = G__44991;
var fexpr__45252 = fexpr__44990;
return (fexpr__45252.cljs$core$IFn$_invoke$arity$1 ? fexpr__45252.cljs$core$IFn$_invoke$arity$1(G__45253) : fexpr__45252.call(null,G__45253));
})();
(cr44922_state[(0)] = cr44779_place_21);

(cr44922_state[(1)] = cr44922_place_4);

return missionary.core.fork(cr44922_place_5,cr44922_place_10);
}catch (e45248){var e44986 = e45248;
var cr44922_exception = e44986;
(cr44922_state[(0)] = null);

throw cr44922_exception;
}});
var cr44779_place_21 = (function (cr44922_state){
try{var cr44922_place_11 = missionary.core.unpark();
var cr44922_place_12 = cr44922_place_11;
var cr44922_place_13 = null;
var G__44973 = cr44922_place_12;
var G__45255 = G__44973;
switch (G__45255) {
case (0):
(cr44922_state[(0)] = cr44779_place_34);

(cr44922_state[(2)] = cr44922_place_13);

return cr44922_state;

break;
case (1):
(cr44922_state[(0)] = cr44779_place_26);

(cr44922_state[(2)] = cr44922_place_13);

return cr44922_state;

break;
default:
(cr44922_state[(0)] = cr44779_place_20);

(cr44922_state[(1)] = null);

(cr44922_state[(1)] = cr44922_place_11);

return cr44922_state;

}
}catch (e45254){var e44972 = e45254;
var cr44922_exception = e44972;
(cr44922_state[(0)] = null);

(cr44922_state[(1)] = null);

throw cr44922_exception;
}});
var cr44779_place_28 = (function (cr44922_state){
try{var cr44922_place_26 = missionary.core.unpark();
(cr44922_state[(0)] = cr44779_place_22);

(cr44922_state[(2)] = cr44922_place_26);

return cr44922_state;
}catch (e45256){var e44980 = e45256;
var cr44922_exception = e44980;
(cr44922_state[(0)] = null);

(cr44922_state[(2)] = null);

throw cr44922_exception;
}});
var cr44779_place_35 = cloroutine.impl.coroutine;
var cr44779_place_36 = cljs.core.object_array;
var cr44779_place_37 = (5);
var cr44779_place_38 = (function (){var G__45258 = cr44779_place_37;
var fexpr__45257 = cr44779_place_36;
return (fexpr__45257.cljs$core$IFn$_invoke$arity$1 ? fexpr__45257.cljs$core$IFn$_invoke$arity$1(G__45258) : fexpr__45257.call(null,G__45258));
})();
var cr44779_place_39 = cr44779_place_38;
var cr44779_place_40 = (0);
var cr44779_place_41 = cr44779_place_33;
var cr44779_place_42 = (cr44779_place_39[cr44779_place_40] = cr44779_place_41);
var cr44779_place_43 = cr44779_place_38;
var cr44779_place_44 = (function (){var G__45260 = cr44779_place_43;
var fexpr__45259 = cr44779_place_35;
return (fexpr__45259.cljs$core$IFn$_invoke$arity$1 ? fexpr__45259.cljs$core$IFn$_invoke$arity$1(G__45260) : fexpr__45259.call(null,G__45260));
})();
var cr44779_place_45 = missionary.core.ap_run;
var cr44779_place_46 = (function (){var G__45262 = cr44779_place_44;
var G__45263 = cr44779_place_45;
var fexpr__45261 = cr44779_place_15;
return (fexpr__45261.cljs$core$IFn$_invoke$arity$2 ? fexpr__45261.cljs$core$IFn$_invoke$arity$2(G__45262,G__45263) : fexpr__45261.call(null,G__45262,G__45263));
})();
var cr44779_place_47 = conn;
var cr44779_place_48 = cr44779_place_14;
var cr44779_place_49 = cr44779_place_46;
var cr44779_place_50 = (function (){var G__45265 = cr44779_place_48;
var G__45266 = cr44779_place_49;
var fexpr__45264 = cr44779_place_47;
return (fexpr__45264.cljs$core$IFn$_invoke$arity$2 ? fexpr__45264.cljs$core$IFn$_invoke$arity$2(G__45265,G__45266) : fexpr__45264.call(null,G__45265,G__45266));
})();
(cr44779_state[(0)] = cr44779_block_3);

(cr44779_state[(5)] = null);

return missionary.core.park(cr44779_place_50);
}catch (e45171){var cr44779_exception = e45171;
(cr44779_state[(0)] = cr44779_block_4);

(cr44779_state[(5)] = null);

(cr44779_state[(6)] = cr44779_exception);

return cr44779_state;
}});
var cr44779_block_17 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44779_block_17(cr44779_state){
try{var cr44779_place_130 = missionary.core.unpark();
(cr44779_state[(0)] = cr44779_block_1);

(cr44779_state[(1)] = cr44779_place_130);

return cr44779_state;
}catch (e45267){var cr44779_exception = e45267;
(cr44779_state[(0)] = null);

(cr44779_state[(1)] = null);

(cr44779_state[(2)] = null);

throw cr44779_exception;
}});
var cr44779_block_18 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44779_block_18(cr44779_state){
try{var cr44779_place_131 = null;
(cr44779_state[(0)] = cr44779_block_19);

(cr44779_state[(1)] = cr44779_place_131);

return cr44779_state;
}catch (e45268){var cr44779_exception = e45268;
(cr44779_state[(0)] = null);

(cr44779_state[(1)] = null);

throw cr44779_exception;
}});
var cr44779_block_15 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44779_block_15(cr44779_state){
try{var cr44779_place_60 = (cr44779_state[(4)]);
var cr44779_place_102 = cr44779_place_60;
var cr44779_place_103 = null;
var cr44779_place_104 = (cr44779_place_102 == cr44779_place_103);
var cr44779_place_105 = null;
if(cr44779_place_104){
(cr44779_state[(0)] = cr44779_block_18);

(cr44779_state[(4)] = null);

(cr44779_state[(1)] = null);

(cr44779_state[(2)] = null);

(cr44779_state[(1)] = cr44779_place_105);

return cr44779_state;
} else {
(cr44779_state[(0)] = cr44779_block_16);

return cr44779_state;
}
}catch (e45269){var cr44779_exception = e45269;
(cr44779_state[(0)] = null);

(cr44779_state[(4)] = null);

(cr44779_state[(1)] = null);

(cr44779_state[(2)] = null);

throw cr44779_exception;
}});
var cr44779_block_6 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44779_block_6(cr44779_state){
try{var cr44779_place_56 = (cr44779_state[(3)]);
var cr44779_place_61 = cr44779_place_56;
var cr44779_place_62 = new cljs.core.Keyword(null,"code","code",1586293142);
var cr44779_place_63 = cr44779_place_61;
var cr44779_place_64 = cr44779_place_62.cljs$core$IFn$_invoke$arity$1(cr44779_place_63);
var cr44779_place_65 = cr44779_place_64;
var cr44779_place_66 = null;
var cr44779_place_67 = (cr44779_place_65 == cr44779_place_66);
var cr44779_place_68 = null;
if(cr44779_place_67){
(cr44779_state[(0)] = cr44779_block_12);

(cr44779_state[(3)] = null);

(cr44779_state[(3)] = cr44779_place_68);

return cr44779_state;
} else {
(cr44779_state[(0)] = cr44779_block_7);

(cr44779_state[(3)] = null);

(cr44779_state[(5)] = cr44779_place_61);

(cr44779_state[(6)] = cr44779_place_64);

(cr44779_state[(3)] = cr44779_place_68);

return cr44779_state;
}
}catch (e45270){var cr44779_exception = e45270;
(cr44779_state[(0)] = null);

(cr44779_state[(3)] = null);

(cr44779_state[(4)] = null);

(cr44779_state[(1)] = null);

(cr44779_state[(2)] = null);

throw cr44779_exception;
}});
var cr44779_block_19 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44779_block_19(cr44779_state){
try{var cr44779_place_105 = (cr44779_state[(1)]);
(cr44779_state[(0)] = null);

(cr44779_state[(1)] = null);

return cr44779_place_105;
}catch (e45271){var cr44779_exception = e45271;
(cr44779_state[(0)] = null);

(cr44779_state[(1)] = null);

throw cr44779_exception;
}});
return cloroutine.impl.coroutine((function (){var G__45272 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((7));
(G__45272[(0)] = cr44779_block_0);

return G__45272;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.reload_when_stale = (function hyperfiddle$electric_client$reload_when_stale(task){
return (function (s,f){
var G__45273 = s;
var G__45274 = (function (error){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405),new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(error)))){
console.log("Server and client version mismatch. Refreshing page.");

window.location.reload();
} else {
}

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(error) : f.call(null,error));
});
return (task.cljs$core$IFn$_invoke$arity$2 ? task.cljs$core$IFn$_invoke$arity$2(G__45273,G__45274) : task.call(null,G__45273,G__45274));
});
});

//# sourceMappingURL=hyperfiddle.electric_client.js.map
