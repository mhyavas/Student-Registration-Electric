goog.provide('hyperfiddle.electric_client');
/**
 * @define {string}
 */
hyperfiddle.electric_client.VERSION = goog.define("hyperfiddle.electric_client.VERSION","");
hyperfiddle.electric_client.server_url = (function hyperfiddle$electric_client$server_url(){
var url = (new URL(window.location));
var proto = url.protocol;
(url.protocol = (function (){var G__30262 = proto;
switch (G__30262) {
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
}catch (e30265){var e = e30265;
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));

return (function (){
return cljs.core.List.EMPTY;
});
}});
});
hyperfiddle.electric_client.wait_for_flush = (function hyperfiddle$electric_client$wait_for_flush(ws){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30276_block_0 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30276_block_0(cr30276_state){
try{(cr30276_state[(0)] = cr30276_block_1);

return cr30276_state;
}catch (e30295){var cr30276_exception = e30295;
(cr30276_state[(0)] = null);

throw cr30276_exception;
}});
var cr30276_block_1 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30276_block_1(cr30276_state){
try{var cr30276_place_0 = (4096);
var cr30276_place_1 = ws;
var cr30276_place_2 = cr30276_place_1.bufferedAmount;
var cr30276_place_3 = (cr30276_place_0 < cr30276_place_2);
var cr30276_place_4 = null;
if(cr30276_place_3){
(cr30276_state[(0)] = cr30276_block_3);

return cr30276_state;
} else {
(cr30276_state[(0)] = cr30276_block_2);

(cr30276_state[(1)] = cr30276_place_4);

return cr30276_state;
}
}catch (e30296){var cr30276_exception = e30296;
(cr30276_state[(0)] = null);

throw cr30276_exception;
}});
var cr30276_block_2 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30276_block_2(cr30276_state){
try{var cr30276_place_5 = null;
(cr30276_state[(0)] = cr30276_block_5);

(cr30276_state[(1)] = cr30276_place_5);

return cr30276_state;
}catch (e30298){var cr30276_exception = e30298;
(cr30276_state[(0)] = null);

(cr30276_state[(1)] = null);

throw cr30276_exception;
}});
var cr30276_block_3 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30276_block_3(cr30276_state){
try{var cr30276_place_6 = missionary.core.sleep;
var cr30276_place_7 = (50);
var cr30276_place_8 = (function (){var G__30301 = cr30276_place_7;
var fexpr__30300 = cr30276_place_6;
return (fexpr__30300.cljs$core$IFn$_invoke$arity$1 ? fexpr__30300.cljs$core$IFn$_invoke$arity$1(G__30301) : fexpr__30300.call(null,G__30301));
})();
(cr30276_state[(0)] = cr30276_block_4);

return missionary.core.park(cr30276_place_8);
}catch (e30299){var cr30276_exception = e30299;
(cr30276_state[(0)] = null);

throw cr30276_exception;
}});
var cr30276_block_4 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30276_block_4(cr30276_state){
try{var cr30276_place_9 = missionary.core.unpark();
(cr30276_state[(0)] = cr30276_block_1);

return cr30276_state;
}catch (e30302){var cr30276_exception = e30302;
(cr30276_state[(0)] = null);

throw cr30276_exception;
}});
var cr30276_block_5 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30276_block_5(cr30276_state){
try{var cr30276_place_4 = (cr30276_state[(1)]);
(cr30276_state[(0)] = null);

(cr30276_state[(1)] = null);

return cr30276_place_4;
}catch (e30304){var cr30276_exception = e30304;
(cr30276_state[(0)] = null);

(cr30276_state[(1)] = null);

throw cr30276_exception;
}});
return cloroutine.impl.coroutine((function (){var G__30311 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__30311[(0)] = cr30276_block_0);

return G__30311;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.wait_for_close = (function hyperfiddle$electric_client$wait_for_close(ws){
return (function (s,f){
(ws.onclose = (function (e){
(ws.onclose = null);

var G__30313 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),e.code,new cljs.core.Keyword(null,"reason","reason",-2070751759),e.reason], null);
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__30313) : s.call(null,G__30313));
}));

return (function (){
if((ws.onclose == null)){
return null;
} else {
(ws.onclose = null);

var G__30315 = (new missionary.Cancelled());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30315) : f.call(null,G__30315));
}
});
});
});
hyperfiddle.electric_client.payload = (function hyperfiddle$electric_client$payload(x){
return x.data;
});
hyperfiddle.electric_client.send_BANG_ = (function hyperfiddle$electric_client$send_BANG_(ws,msg){
var G__30317 = ws;
G__30317.send(msg);

return G__30317;
});
hyperfiddle.electric_client.send_all = (function hyperfiddle$electric_client$send_all(ws,msgs){
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30318_block_0 = (function hyperfiddle$electric_client$send_all_$_cr30318_block_0(cr30318_state){
try{var cr30318_place_0 = hyperfiddle.electric_client.wait_for_flush;
var cr30318_place_1 = hyperfiddle.electric_client.send_BANG_;
var cr30318_place_2 = ws;
var cr30318_place_3 = hyperfiddle.electric.impl.io.encode;
var cr30318_place_4 = (1);
var cr30318_place_5 = msgs;
(cr30318_state[(0)] = cr30318_block_1);

(cr30318_state[(3)] = cr30318_place_0);

(cr30318_state[(1)] = cr30318_place_1);

(cr30318_state[(4)] = cr30318_place_2);

(cr30318_state[(2)] = cr30318_place_3);

return missionary.core.fork(cr30318_place_4,cr30318_place_5);
}catch (e30339){var cr30318_exception = e30339;
(cr30318_state[(0)] = null);

throw cr30318_exception;
}});
var cr30318_block_1 = (function hyperfiddle$electric_client$send_all_$_cr30318_block_1(cr30318_state){
try{var cr30318_place_1 = (cr30318_state[(1)]);
var cr30318_place_3 = (cr30318_state[(2)]);
var cr30318_place_0 = (cr30318_state[(3)]);
var cr30318_place_2 = (cr30318_state[(4)]);
var cr30318_place_6 = missionary.core.unpark();
var cr30318_place_7 = (function (){var G__30347 = cr30318_place_6;
var fexpr__30346 = cr30318_place_3;
return (fexpr__30346.cljs$core$IFn$_invoke$arity$1 ? fexpr__30346.cljs$core$IFn$_invoke$arity$1(G__30347) : fexpr__30346.call(null,G__30347));
})();
var cr30318_place_8 = (function (){var G__30349 = cr30318_place_2;
var G__30350 = cr30318_place_7;
var fexpr__30348 = cr30318_place_1;
return (fexpr__30348.cljs$core$IFn$_invoke$arity$2 ? fexpr__30348.cljs$core$IFn$_invoke$arity$2(G__30349,G__30350) : fexpr__30348.call(null,G__30349,G__30350));
})();
var cr30318_place_9 = (function (){var G__30352 = cr30318_place_8;
var fexpr__30351 = cr30318_place_0;
return (fexpr__30351.cljs$core$IFn$_invoke$arity$1 ? fexpr__30351.cljs$core$IFn$_invoke$arity$1(G__30352) : fexpr__30351.call(null,G__30352));
})();
(cr30318_state[(0)] = cr30318_block_2);

(cr30318_state[(1)] = null);

(cr30318_state[(2)] = null);

(cr30318_state[(3)] = null);

(cr30318_state[(4)] = null);

return missionary.core.park(cr30318_place_9);
}catch (e30343){var cr30318_exception = e30343;
(cr30318_state[(0)] = null);

(cr30318_state[(1)] = null);

(cr30318_state[(2)] = null);

(cr30318_state[(3)] = null);

(cr30318_state[(4)] = null);

throw cr30318_exception;
}});
var cr30318_block_2 = (function hyperfiddle$electric_client$send_all_$_cr30318_block_2(cr30318_state){
try{var cr30318_place_10 = missionary.core.unpark();
(cr30318_state[(0)] = null);

return cr30318_place_10;
}catch (e30354){var cr30318_exception = e30354;
(cr30318_state[(0)] = null);

throw cr30318_exception;
}});
return cloroutine.impl.coroutine((function (){var G__30355 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__30355[(0)] = cr30318_block_0);

return G__30355;
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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30356_block_11 = (function hyperfiddle$electric_client$connector_$_cr30356_block_11(cr30356_state){
try{var cr30356_place_51 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
(cr30356_state[(0)] = cr30356_block_12);

(cr30356_state[(2)] = cr30356_place_51);

return cr30356_state;
}catch (e30421){var cr30356_exception = e30421;
(cr30356_state[(0)] = null);

(cr30356_state[(2)] = null);

throw cr30356_exception;
}});
var cr30356_block_6 = (function hyperfiddle$electric_client$connector_$_cr30356_block_6(cr30356_state){
try{var cr30356_place_8 = (cr30356_state[(3)]);
var cr30356_place_36 = cljs.core._EQ_;
var cr30356_place_37 = WebSocket;
var cr30356_place_38 = cr30356_place_37.CLOSED;
var cr30356_place_39 = cr30356_place_8;
var cr30356_place_40 = cr30356_place_39.readyState;
var cr30356_place_41 = (function (){var G__30424 = cr30356_place_38;
var G__30425 = cr30356_place_40;
var fexpr__30423 = cr30356_place_36;
return (fexpr__30423.cljs$core$IFn$_invoke$arity$2 ? fexpr__30423.cljs$core$IFn$_invoke$arity$2(G__30424,G__30425) : fexpr__30423.call(null,G__30424,G__30425));
})();
var cr30356_place_42 = null;
if(cljs.core.truth_(cr30356_place_41)){
(cr30356_state[(0)] = cr30356_block_9);

(cr30356_state[(3)] = null);

(cr30356_state[(5)] = cr30356_place_42);

return cr30356_state;
} else {
(cr30356_state[(0)] = cr30356_block_7);

(cr30356_state[(5)] = cr30356_place_42);

return cr30356_state;
}
}catch (e30422){var cr30356_exception = e30422;
(cr30356_state[(0)] = null);

(cr30356_state[(1)] = null);

(cr30356_state[(3)] = null);

(cr30356_state[(2)] = null);

(cr30356_state[(4)] = null);

throw cr30356_exception;
}});
var cr30356_block_8 = (function hyperfiddle$electric_client$connector_$_cr30356_block_8(cr30356_state){
try{var cr30356_place_48 = missionary.core.unpark();
(cr30356_state[(0)] = cr30356_block_10);

(cr30356_state[(5)] = cr30356_place_48);

return cr30356_state;
}catch (e30426){var cr30356_exception = e30426;
(cr30356_state[(0)] = null);

(cr30356_state[(5)] = null);

(cr30356_state[(1)] = null);

(cr30356_state[(2)] = null);

(cr30356_state[(4)] = null);

throw cr30356_exception;
}});
var cr30356_block_9 = (function hyperfiddle$electric_client$connector_$_cr30356_block_9(cr30356_state){
try{var cr30356_place_49 = null;
(cr30356_state[(0)] = cr30356_block_10);

(cr30356_state[(5)] = cr30356_place_49);

return cr30356_state;
}catch (e30429){var cr30356_exception = e30429;
(cr30356_state[(0)] = null);

(cr30356_state[(5)] = null);

(cr30356_state[(1)] = null);

(cr30356_state[(2)] = null);

(cr30356_state[(4)] = null);

throw cr30356_exception;
}});
var cr30356_block_10 = (function hyperfiddle$electric_client$connector_$_cr30356_block_10(cr30356_state){
try{var cr30356_place_42 = (cr30356_state[(5)]);
var cr30356_place_10 = (cr30356_state[(1)]);
var cr30356_place_9 = (cr30356_state[(4)]);
var cr30356_place_50 = (cljs.core.truth_(cr30356_place_10)?(function(){throw cr30356_place_9})():cr30356_place_9);
(cr30356_state[(0)] = cr30356_block_12);

(cr30356_state[(5)] = null);

(cr30356_state[(1)] = null);

(cr30356_state[(4)] = null);

(cr30356_state[(2)] = cr30356_place_50);

return cr30356_state;
}catch (e30430){var cr30356_exception = e30430;
(cr30356_state[(0)] = null);

(cr30356_state[(5)] = null);

(cr30356_state[(1)] = null);

(cr30356_state[(2)] = null);

(cr30356_state[(4)] = null);

throw cr30356_exception;
}});
var cr30356_block_5 = (function hyperfiddle$electric_client$connector_$_cr30356_block_5(cr30356_state){
try{var cr30356_place_9 = (cr30356_state[(4)]);
var cr30356_place_34 = cr30356_place_9;
var cr30356_place_35 = (function(){throw cr30356_place_34})();
(cr30356_state[(0)] = null);

(cr30356_state[(1)] = null);

(cr30356_state[(3)] = null);

(cr30356_state[(2)] = null);

(cr30356_state[(4)] = null);

return null;
}catch (e30433){var cr30356_exception = e30433;
(cr30356_state[(0)] = cr30356_block_6);

(cr30356_state[(1)] = true);

(cr30356_state[(4)] = cr30356_exception);

return cr30356_state;
}});
var cr30356_block_7 = (function hyperfiddle$electric_client$connector_$_cr30356_block_7(cr30356_state){
try{var cr30356_place_8 = (cr30356_state[(3)]);
var cr30356_place_43 = cr30356_place_8;
var cr30356_place_44 = cr30356_place_43.close();
var cr30356_place_45 = missionary.core.compel;
var cr30356_place_46 = hyperfiddle.electric_client.wait_for_close;
var cr30356_place_47 = (function (){var G__30436 = cr30356_place_46;
var fexpr__30435 = cr30356_place_45;
return (fexpr__30435.cljs$core$IFn$_invoke$arity$1 ? fexpr__30435.cljs$core$IFn$_invoke$arity$1(G__30436) : fexpr__30435.call(null,G__30436));
})();
(cr30356_state[(0)] = cr30356_block_8);

(cr30356_state[(3)] = null);

return missionary.core.park(cr30356_place_47);
}catch (e30434){var cr30356_exception = e30434;
(cr30356_state[(0)] = null);

(cr30356_state[(5)] = null);

(cr30356_state[(1)] = null);

(cr30356_state[(3)] = null);

(cr30356_state[(2)] = null);

(cr30356_state[(4)] = null);

throw cr30356_exception;
}});
var cr30356_block_12 = (function hyperfiddle$electric_client$connector_$_cr30356_block_12(cr30356_state){
try{var cr30356_place_7 = (cr30356_state[(2)]);
(cr30356_state[(0)] = null);

(cr30356_state[(2)] = null);

return cr30356_place_7;
}catch (e30440){var cr30356_exception = e30440;
(cr30356_state[(0)] = null);

(cr30356_state[(2)] = null);

throw cr30356_exception;
}});
var cr30356_block_1 = (function hyperfiddle$electric_client$connector_$_cr30356_block_1(cr30356_state){
try{var cr30356_place_3 = missionary.core.unpark();
var cr30356_place_4 = cr30356_place_3;
var cr30356_place_5 = null;
var cr30356_place_6 = (cr30356_place_4 == cr30356_place_5);
var cr30356_place_7 = null;
if(cr30356_place_6){
(cr30356_state[(0)] = cr30356_block_11);

(cr30356_state[(2)] = cr30356_place_7);

return cr30356_state;
} else {
(cr30356_state[(0)] = cr30356_block_2);

(cr30356_state[(1)] = cr30356_place_3);

(cr30356_state[(2)] = cr30356_place_7);

return cr30356_state;
}
}catch (e30441){var cr30356_exception = e30441;
(cr30356_state[(0)] = null);

throw cr30356_exception;
}});
var cr30356_block_2 = (function hyperfiddle$electric_client$connector_$_cr30356_block_2(cr30356_state){
try{var cr30356_place_3 = (cr30356_state[(1)]);
var cr30356_place_8 = cr30356_place_3;
var cr30356_place_9 = null;
var cr30356_place_10 = false;
(cr30356_state[(0)] = cr30356_block_3);

(cr30356_state[(1)] = null);

(cr30356_state[(3)] = cr30356_place_8);

(cr30356_state[(4)] = cr30356_place_9);

(cr30356_state[(1)] = cr30356_place_10);

return cr30356_state;
}catch (e30442){var cr30356_exception = e30442;
(cr30356_state[(0)] = null);

(cr30356_state[(1)] = null);

(cr30356_state[(2)] = null);

throw cr30356_exception;
}});
var cr30356_block_4 = (function hyperfiddle$electric_client$connector_$_cr30356_block_4(cr30356_state){
try{var cr30356_place_33 = missionary.core.unpark();
(cr30356_state[(0)] = cr30356_block_6);

(cr30356_state[(4)] = cr30356_place_33);

return cr30356_state;
}catch (e30452){var cr30356_exception = e30452;
(cr30356_state[(0)] = cr30356_block_5);

(cr30356_state[(4)] = cr30356_exception);

return cr30356_state;
}});
var cr30356_block_3 = (function hyperfiddle$electric_client$connector_$_cr30356_block_3(cr30356_state){
try{var cr30356_place_8 = (cr30356_state[(3)]);
var cr30356_place_11 = hyperfiddle.electric_client.send_BANG_;
var cr30356_place_12 = cr30356_place_8;
var cr30356_place_13 = hyperfiddle.electric.impl.io.encode;
var cr30356_place_14 = server;
var cr30356_place_15 = (function (){var G__30460 = cr30356_place_14;
var fexpr__30459 = cr30356_place_13;
return (fexpr__30459.cljs$core$IFn$_invoke$arity$1 ? fexpr__30459.cljs$core$IFn$_invoke$arity$1(G__30460) : fexpr__30459.call(null,G__30460));
})();
var cr30356_place_16 = (function (){var G__30463 = cr30356_place_12;
var G__30464 = cr30356_place_15;
var fexpr__30462 = cr30356_place_11;
return (fexpr__30462.cljs$core$IFn$_invoke$arity$2 ? fexpr__30462.cljs$core$IFn$_invoke$arity$2(G__30463,G__30464) : fexpr__30462.call(null,G__30463,G__30464));
})();
var cr30356_place_17 = cr30356_place_8;
var cr30356_place_18 = cljs.core.comp;
var cr30356_place_19 = cb;
var cr30356_place_20 = hyperfiddle.electric.impl.io.decode;
var cr30356_place_21 = hyperfiddle.electric_client.payload;
var cr30356_place_22 = (function (){var G__30474 = cr30356_place_19;
var G__30475 = cr30356_place_20;
var G__30476 = cr30356_place_21;
var fexpr__30473 = cr30356_place_18;
return (fexpr__30473.cljs$core$IFn$_invoke$arity$3 ? fexpr__30473.cljs$core$IFn$_invoke$arity$3(G__30474,G__30475,G__30476) : fexpr__30473.call(null,G__30474,G__30475,G__30476));
})();
var cr30356_place_23 = (cr30356_place_17.onmessage = cr30356_place_22);
var cr30356_place_24 = missionary.core.race;
var cr30356_place_25 = hyperfiddle.electric_client.send_all;
var cr30356_place_26 = cr30356_place_8;
var cr30356_place_27 = msgs;
var cr30356_place_28 = (function (){var G__30483 = cr30356_place_26;
var G__30484 = cr30356_place_27;
var fexpr__30482 = cr30356_place_25;
return (fexpr__30482.cljs$core$IFn$_invoke$arity$2 ? fexpr__30482.cljs$core$IFn$_invoke$arity$2(G__30483,G__30484) : fexpr__30482.call(null,G__30483,G__30484));
})();
var cr30356_place_29 = hyperfiddle.electric_client.wait_for_close;
var cr30356_place_30 = cr30356_place_8;
var cr30356_place_31 = (function (){var G__30486 = cr30356_place_30;
var fexpr__30485 = cr30356_place_29;
return (fexpr__30485.cljs$core$IFn$_invoke$arity$1 ? fexpr__30485.cljs$core$IFn$_invoke$arity$1(G__30486) : fexpr__30485.call(null,G__30486));
})();
var cr30356_place_32 = (function (){var G__30488 = cr30356_place_28;
var G__30489 = cr30356_place_31;
var fexpr__30487 = cr30356_place_24;
return (fexpr__30487.cljs$core$IFn$_invoke$arity$2 ? fexpr__30487.cljs$core$IFn$_invoke$arity$2(G__30488,G__30489) : fexpr__30487.call(null,G__30488,G__30489));
})();
(cr30356_state[(0)] = cr30356_block_4);

return missionary.core.park(cr30356_place_32);
}catch (e30458){var cr30356_exception = e30458;
(cr30356_state[(0)] = cr30356_block_5);

(cr30356_state[(4)] = cr30356_exception);

return cr30356_state;
}});
var cr30356_block_0 = (function hyperfiddle$electric_client$connector_$_cr30356_block_0(cr30356_state){
try{var cr30356_place_0 = hyperfiddle.electric_client.connect;
var cr30356_place_1 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr30356_place_2 = (function (){var G__30492 = cr30356_place_1;
var fexpr__30491 = cr30356_place_0;
return (fexpr__30491.cljs$core$IFn$_invoke$arity$1 ? fexpr__30491.cljs$core$IFn$_invoke$arity$1(G__30492) : fexpr__30491.call(null,G__30492));
})();
(cr30356_state[(0)] = cr30356_block_1);

return missionary.core.park(cr30356_place_2);
}catch (e30490){var cr30356_exception = e30490;
(cr30356_state[(0)] = null);

throw cr30356_exception;
}});
return cloroutine.impl.coroutine((function (){var G__30493 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__30493[(0)] = cr30356_block_0);

return G__30493;
})());
})(),missionary.core.sp_run);
});
});
hyperfiddle.electric_client.fib_iter = (function hyperfiddle$electric_client$fib_iter(p__30495){
var vec__30496 = p__30495;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30496,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30496,(1),null);
var G__30500 = b;
switch (G__30500) {
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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30535_block_4 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30535_block_4(cr30535_state){
try{var cr30535_place_12 = (cr30535_state[(6)]);
var cr30535_place_52 = cr30535_place_12;
var cr30535_place_53 = (function(){throw cr30535_place_52})();
(cr30535_state[(0)] = null);

(cr30535_state[(3)] = null);

(cr30535_state[(1)] = null);

(cr30535_state[(4)] = null);

(cr30535_state[(2)] = null);

(cr30535_state[(6)] = null);

return null;
}catch (e31060){var cr30535_exception = e31060;
(cr30535_state[(0)] = cr30535_block_5);

(cr30535_state[(4)] = true);

(cr30535_state[(6)] = cr30535_exception);

return cr30535_state;
}});
var cr30535_block_2 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30535_block_2(cr30535_state){
try{var cr30535_place_4 = (cr30535_state[(5)]);
var cr30535_place_14 = (function (x){
var fexpr__30853 = (cr30535_place_4[(0)]);
var G__31063 = x;
var fexpr__31062 = fexpr__30853;
return (fexpr__31062.cljs$core$IFn$_invoke$arity$1 ? fexpr__31062.cljs$core$IFn$_invoke$arity$1(G__31063) : fexpr__31062.call(null,G__31063));
});
var cr30535_place_15 = cljs.core.partial;
var cr30535_place_17 = (function (cr30854_state){
try{var cr30854_place_40 = missionary.core.unpark();
var cr30854_place_41 = cr30854_place_40;
var cr30854_place_42 = null;
var G__30903 = cr30854_place_41;
var G__31101 = G__30903;
switch (G__31101) {
case (0):
(cr30854_state[(0)] = cr30535_place_21);

(cr30854_state[(1)] = null);

(cr30854_state[(1)] = cr30854_place_42);

return cr30854_state;

break;
case (1):
(cr30854_state[(0)] = cr30535_place_23);

(cr30854_state[(4)] = null);

(cr30854_state[(3)] = null);

return cr30854_state;

break;
default:
(cr30854_state[(0)] = cr30535_place_33);

(cr30854_state[(2)] = null);

(cr30854_state[(4)] = null);

(cr30854_state[(3)] = null);

(cr30854_state[(1)] = null);

(cr30854_state[(1)] = cr30854_place_40);

return cr30854_state;

}
}catch (e31100){var e30902 = e31100;
var cr30854_exception = e30902;
(cr30854_state[(0)] = null);

(cr30854_state[(2)] = null);

(cr30854_state[(4)] = null);

(cr30854_state[(3)] = null);

(cr30854_state[(1)] = null);

throw cr30854_exception;
}});
var cr30535_place_22 = (function (cr30854_state){
try{var cr30854_place_4 = (cr30854_state[(1)]);
var cr30854_place_27 = cr30854_place_4;
(cr30854_state[(0)] = cr30535_place_29);

return missionary.core.park(cr30854_place_27);
}catch (e31102){var e30909 = e31102;
var cr30854_exception = e30909;
(cr30854_state[(0)] = null);

(cr30854_state[(2)] = null);

(cr30854_state[(1)] = null);

throw cr30854_exception;
}});
var cr30535_place_21 = (function (cr30854_state){
try{var cr30854_place_33 = (cr30854_state[(4)]);
var cr30854_place_43 = cr30854_place_33;
(cr30854_state[(0)] = cr30535_place_20);

(cr30854_state[(4)] = null);

(cr30854_state[(1)] = cr30854_place_43);

return cr30854_state;
}catch (e31103){var e30908 = e31103;
var cr30854_exception = e30908;
(cr30854_state[(0)] = null);

(cr30854_state[(2)] = null);

(cr30854_state[(4)] = null);

(cr30854_state[(3)] = null);

(cr30854_state[(1)] = null);

throw cr30854_exception;
}});
var cr30535_place_32 = (function (cr30854_state){
try{(cr30854_state[(0)] = cr30535_place_22);

return cr30854_state;
}catch (e31104){var e30928 = e31104;
var cr30854_exception = e30928;
(cr30854_state[(0)] = null);

(cr30854_state[(2)] = null);

(cr30854_state[(1)] = null);

throw cr30854_exception;
}});
var cr30535_place_33 = (function (cr30854_state){
try{var cr30854_place_40 = (cr30854_state[(1)]);
var cr30854_place_44 = "No matching clause: ";
var cr30854_place_45 = cr30854_place_40;
var cr30854_place_46 = [cr30854_place_44,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr30854_place_45)].join('');
var cr30854_place_47 = (new Error(cr30854_place_46));
var cr30854_place_48 = (function(){throw cr30854_place_47})();
(cr30854_state[(0)] = null);

(cr30854_state[(1)] = null);

return null;
}catch (e31105){var e30929 = e31105;
var cr30854_exception = e30929;
(cr30854_state[(0)] = null);

(cr30854_state[(1)] = null);

throw cr30854_exception;
}});
var cr30535_place_34 = (function (cr30854_state){
try{var cr30854_place_32 = (cr30854_state[(3)]);
(cr30854_state[(0)] = cr30535_place_26);

(cr30854_state[(3)] = null);

(cr30854_state[(2)] = cr30854_place_32);

return cr30854_state;
}catch (e31106){var e30930 = e31106;
var cr30854_exception = e30930;
(cr30854_state[(0)] = null);

(cr30854_state[(2)] = null);

(cr30854_state[(3)] = null);

throw cr30854_exception;
}});
var cr30535_place_27 = (function (cr30854_state){
try{var cr30854_place_51 = missionary.core.unpark();
(cr30854_state[(0)] = cr30535_place_34);

(cr30854_state[(3)] = cr30854_place_51);

return cr30854_state;
}catch (e31107){var e30923 = e31107;
var cr30854_exception = e30923;
(cr30854_state[(0)] = null);

(cr30854_state[(2)] = null);

(cr30854_state[(3)] = null);

throw cr30854_exception;
}});
var cr30535_place_28 = (function (cr30854_state){
try{var cr30854_place_11 = (cr30854_state[(1)]);
var cr30854_place_52 = "No matching clause: ";
var cr30854_place_53 = cr30854_place_11;
var cr30854_place_54 = [cr30854_place_52,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr30854_place_53)].join('');
var cr30854_place_55 = (new Error(cr30854_place_54));
var cr30854_place_56 = (function(){throw cr30854_place_55})();
(cr30854_state[(0)] = null);

(cr30854_state[(1)] = null);

return null;
}catch (e31108){var e30924 = e31108;
var cr30854_exception = e30924;
(cr30854_state[(0)] = null);

(cr30854_state[(1)] = null);

throw cr30854_exception;
}});
var cr30535_place_19 = (function (cr30854_state){
try{var cr30854_place_11 = missionary.core.unpark();
var cr30854_place_12 = cr30854_place_11;
var cr30854_place_13 = null;
var G__30906 = cr30854_place_12;
var G__31110 = G__30906;
switch (G__31110) {
case (0):
(cr30854_state[(0)] = cr30535_place_16);

(cr30854_state[(2)] = cr30854_place_13);

return cr30854_state;

break;
case (1):
(cr30854_state[(0)] = cr30535_place_32);

(cr30854_state[(2)] = cr30854_place_13);

return cr30854_state;

break;
default:
(cr30854_state[(0)] = cr30535_place_28);

(cr30854_state[(1)] = null);

(cr30854_state[(1)] = cr30854_place_11);

return cr30854_state;

}
}catch (e31109){var e30905 = e31109;
var cr30854_exception = e30905;
(cr30854_state[(0)] = null);

(cr30854_state[(1)] = null);

throw cr30854_exception;
}});
var cr30535_place_31 = (function (cr30854_state){
try{var cr30854_place_49 = (1);
var cr30854_place_50 = missionary.core.none;
(cr30854_state[(0)] = cr30535_place_27);

return missionary.core.fork(cr30854_place_49,cr30854_place_50);
}catch (e31111){var e30927 = e31111;
var cr30854_exception = e30927;
(cr30854_state[(0)] = null);

(cr30854_state[(2)] = null);

(cr30854_state[(3)] = null);

throw cr30854_exception;
}});
var cr30535_place_29 = (function (cr30854_state){
try{var cr30854_place_28 = missionary.core.unpark();
var cr30854_place_29 = cr30854_place_28;
var cr30854_place_30 = null;
var cr30854_place_31 = (cr30854_place_29 == cr30854_place_30);
var cr30854_place_32 = null;
if(cr30854_place_31){
(cr30854_state[(0)] = cr30535_place_31);

(cr30854_state[(1)] = null);

(cr30854_state[(3)] = cr30854_place_32);

return cr30854_state;
} else {
(cr30854_state[(0)] = cr30535_place_25);

(cr30854_state[(4)] = cr30854_place_28);

(cr30854_state[(3)] = cr30854_place_32);

return cr30854_state;
}
}catch (e31112){var e30925 = e31112;
var cr30854_exception = e30925;
(cr30854_state[(0)] = null);

(cr30854_state[(2)] = null);

(cr30854_state[(1)] = null);

throw cr30854_exception;
}});
var cr30535_place_24 = (function (cr30854_state){
try{var cr30854_place_0 = console;
var cr30854_place_1 = "Connected.";
var cr30854_place_2 = cr30854_place_0.log(cr30854_place_1);
var cr30854_place_3 = missionary.core.rdv;
var cr30854_place_4 = (function (){var fexpr__30912 = cr30854_place_3;
var fexpr__31114 = fexpr__30912;
return (fexpr__31114.cljs$core$IFn$_invoke$arity$0 ? fexpr__31114.cljs$core$IFn$_invoke$arity$0() : fexpr__31114.call(null));
})();
var cr30854_place_5 = (2);
var cr30854_place_6 = missionary.core.seed;
var cr30854_place_7 = cljs.core.range;
var cr30854_place_8 = (2);
var cr30854_place_9 = (function (){var G__30914 = cr30854_place_8;
var fexpr__30913 = cr30854_place_7;
var G__31116 = G__30914;
var fexpr__31115 = fexpr__30913;
return (fexpr__31115.cljs$core$IFn$_invoke$arity$1 ? fexpr__31115.cljs$core$IFn$_invoke$arity$1(G__31116) : fexpr__31115.call(null,G__31116));
})();
var cr30854_place_10 = (function (){var G__30916 = cr30854_place_9;
var fexpr__30915 = cr30854_place_6;
var G__31118 = G__30916;
var fexpr__31117 = fexpr__30915;
return (fexpr__31117.cljs$core$IFn$_invoke$arity$1 ? fexpr__31117.cljs$core$IFn$_invoke$arity$1(G__31118) : fexpr__31117.call(null,G__31118));
})();
(cr30854_state[(0)] = cr30535_place_19);

(cr30854_state[(1)] = cr30854_place_4);

return missionary.core.fork(cr30854_place_5,cr30854_place_10);
}catch (e31113){var e30911 = e31113;
var cr30854_exception = e30911;
(cr30854_state[(0)] = null);

throw cr30854_exception;
}});
var cr30535_place_23 = (function (cr30854_state){
try{(cr30854_state[(0)] = cr30535_place_22);

return cr30854_state;
}catch (e31119){var e30910 = e31119;
var cr30854_exception = e30910;
(cr30854_state[(0)] = null);

(cr30854_state[(2)] = null);

(cr30854_state[(1)] = null);

throw cr30854_exception;
}});
var cr30535_place_20 = (function (cr30854_state){
try{var cr30854_place_42 = (cr30854_state[(1)]);
(cr30854_state[(0)] = cr30535_place_34);

(cr30854_state[(1)] = null);

(cr30854_state[(3)] = cr30854_place_42);

return cr30854_state;
}catch (e31120){var e30907 = e31120;
var cr30854_exception = e30907;
(cr30854_state[(0)] = null);

(cr30854_state[(2)] = null);

(cr30854_state[(3)] = null);

(cr30854_state[(1)] = null);

throw cr30854_exception;
}});
var cr30535_place_25 = (function (cr30854_state){
try{var cr30854_place_28 = (cr30854_state[(4)]);
var cr30854_place_33 = cr30854_place_28;
var cr30854_place_34 = (1);
var cr30854_place_35 = missionary.core.seed;
var cr30854_place_36 = cljs.core.range;
var cr30854_place_37 = (2);
var cr30854_place_38 = (function (){var G__30919 = cr30854_place_37;
var fexpr__30918 = cr30854_place_36;
var G__31123 = G__30919;
var fexpr__31122 = fexpr__30918;
return (fexpr__31122.cljs$core$IFn$_invoke$arity$1 ? fexpr__31122.cljs$core$IFn$_invoke$arity$1(G__31123) : fexpr__31122.call(null,G__31123));
})();
var cr30854_place_39 = (function (){var G__30921 = cr30854_place_38;
var fexpr__30920 = cr30854_place_35;
var G__31125 = G__30921;
var fexpr__31124 = fexpr__30920;
return (fexpr__31124.cljs$core$IFn$_invoke$arity$1 ? fexpr__31124.cljs$core$IFn$_invoke$arity$1(G__31125) : fexpr__31124.call(null,G__31125));
})();
(cr30854_state[(0)] = cr30535_place_17);

(cr30854_state[(4)] = null);

(cr30854_state[(4)] = cr30854_place_33);

return missionary.core.fork(cr30854_place_34,cr30854_place_39);
}catch (e31121){var e30917 = e31121;
var cr30854_exception = e30917;
(cr30854_state[(0)] = null);

(cr30854_state[(2)] = null);

(cr30854_state[(3)] = null);

(cr30854_state[(1)] = null);

(cr30854_state[(4)] = null);

throw cr30854_exception;
}});
var cr30535_place_26 = (function (cr30854_state){
try{var cr30854_place_13 = (cr30854_state[(2)]);
(cr30854_state[(0)] = null);

(cr30854_state[(2)] = null);

return cr30854_place_13;
}catch (e31126){var e30922 = e31126;
var cr30854_exception = e30922;
(cr30854_state[(0)] = null);

(cr30854_state[(2)] = null);

throw cr30854_exception;
}});
var cr30535_place_18 = (function (cr30854_state){
try{var cr30854_place_26 = missionary.core.unpark();
(cr30854_state[(0)] = cr30535_place_26);

(cr30854_state[(2)] = cr30854_place_26);

return cr30854_state;
}catch (e31127){var e30904 = e31127;
var cr30854_exception = e30904;
(cr30854_state[(0)] = null);

(cr30854_state[(2)] = null);

throw cr30854_exception;
}});
var cr30535_place_30 = (function (cr30854_state){
try{var cr30854_place_23 = missionary.core.unpark();
var cr30854_place_24 = (1);
var cr30854_place_25 = missionary.core.none;
(cr30854_state[(0)] = cr30535_place_18);

return missionary.core.fork(cr30854_place_24,cr30854_place_25);
}catch (e31128){var e30926 = e31128;
var cr30854_exception = e30926;
(cr30854_state[(0)] = null);

(cr30854_state[(2)] = null);

throw cr30854_exception;
}});
var cr30535_place_16 = (function (cr30854_state){
try{var cr30854_place_4 = (cr30854_state[(1)]);
var cr30854_place_14 = cr30854_place_4;
var cr30854_place_15 = hyperfiddle.electric.impl.runtime.subject_at;
var cr30854_place_16 = cr30535_place_4;
var cr30854_place_17 = (0);
var cr30854_place_18 = (function (){var G__30897 = cr30854_place_16;
var G__30898 = cr30854_place_17;
var fexpr__30896 = cr30854_place_15;
var G__31131 = G__30897;
var G__31132 = G__30898;
var fexpr__31130 = fexpr__30896;
return (fexpr__31130.cljs$core$IFn$_invoke$arity$2 ? fexpr__31130.cljs$core$IFn$_invoke$arity$2(G__31131,G__31132) : fexpr__31130.call(null,G__31131,G__31132));
})();
var cr30854_place_19 = client;
var cr30854_place_20 = cr30854_place_14;
var cr30854_place_21 = cr30854_place_18;
var cr30854_place_22 = (function (){var G__30900 = cr30854_place_20;
var G__30901 = cr30854_place_21;
var fexpr__30899 = cr30854_place_19;
var G__31134 = G__30900;
var G__31135 = G__30901;
var fexpr__31133 = fexpr__30899;
return (fexpr__31133.cljs$core$IFn$_invoke$arity$2 ? fexpr__31133.cljs$core$IFn$_invoke$arity$2(G__31134,G__31135) : fexpr__31133.call(null,G__31134,G__31135));
})();
(cr30854_state[(0)] = cr30535_place_30);

(cr30854_state[(1)] = null);

return missionary.core.park(cr30854_place_22);
}catch (e31129){var e30895 = e31129;
var cr30854_exception = e30895;
(cr30854_state[(0)] = null);

(cr30854_state[(2)] = null);

(cr30854_state[(1)] = null);

throw cr30854_exception;
}});
var cr30535_place_35 = cloroutine.impl.coroutine;
var cr30535_place_36 = cljs.core.object_array;
var cr30535_place_37 = (5);
var cr30535_place_38 = (function (){var G__31137 = cr30535_place_37;
var fexpr__31136 = cr30535_place_36;
return (fexpr__31136.cljs$core$IFn$_invoke$arity$1 ? fexpr__31136.cljs$core$IFn$_invoke$arity$1(G__31137) : fexpr__31136.call(null,G__31137));
})();
var cr30535_place_39 = cr30535_place_38;
var cr30535_place_40 = (0);
var cr30535_place_41 = cr30535_place_24;
var cr30535_place_42 = (cr30535_place_39[cr30535_place_40] = cr30535_place_41);
var cr30535_place_43 = cr30535_place_38;
var cr30535_place_44 = (function (){var G__31139 = cr30535_place_43;
var fexpr__31138 = cr30535_place_35;
return (fexpr__31138.cljs$core$IFn$_invoke$arity$1 ? fexpr__31138.cljs$core$IFn$_invoke$arity$1(G__31139) : fexpr__31138.call(null,G__31139));
})();
var cr30535_place_45 = missionary.core.ap_run;
var cr30535_place_46 = (function (){var G__31141 = cr30535_place_44;
var G__31142 = cr30535_place_45;
var fexpr__31140 = cr30535_place_15;
return (fexpr__31140.cljs$core$IFn$_invoke$arity$2 ? fexpr__31140.cljs$core$IFn$_invoke$arity$2(G__31141,G__31142) : fexpr__31140.call(null,G__31141,G__31142));
})();
var cr30535_place_47 = conn;
var cr30535_place_48 = cr30535_place_14;
var cr30535_place_49 = cr30535_place_46;
var cr30535_place_50 = (function (){var G__31144 = cr30535_place_48;
var G__31145 = cr30535_place_49;
var fexpr__31143 = cr30535_place_47;
return (fexpr__31143.cljs$core$IFn$_invoke$arity$2 ? fexpr__31143.cljs$core$IFn$_invoke$arity$2(G__31144,G__31145) : fexpr__31143.call(null,G__31144,G__31145));
})();
(cr30535_state[(0)] = cr30535_block_3);

(cr30535_state[(5)] = null);

return missionary.core.park(cr30535_place_50);
}catch (e31061){var cr30535_exception = e31061;
(cr30535_state[(0)] = cr30535_block_4);

(cr30535_state[(5)] = null);

(cr30535_state[(6)] = cr30535_exception);

return cr30535_state;
}});
var cr30535_block_11 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30535_block_11(cr30535_state){
try{var cr30535_place_72 = (cr30535_state[(4)]);
(cr30535_state[(0)] = cr30535_block_13);

(cr30535_state[(4)] = null);

(cr30535_state[(6)] = cr30535_place_72);

return cr30535_state;
}catch (e31146){var cr30535_exception = e31146;
(cr30535_state[(0)] = null);

(cr30535_state[(3)] = null);

(cr30535_state[(6)] = null);

(cr30535_state[(1)] = null);

(cr30535_state[(2)] = null);

(cr30535_state[(4)] = null);

throw cr30535_exception;
}});
var cr30535_block_3 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30535_block_3(cr30535_state){
try{var cr30535_place_51 = missionary.core.unpark();
(cr30535_state[(0)] = cr30535_block_5);

(cr30535_state[(6)] = cr30535_place_51);

return cr30535_state;
}catch (e31147){var cr30535_exception = e31147;
(cr30535_state[(0)] = cr30535_block_4);

(cr30535_state[(6)] = cr30535_exception);

return cr30535_state;
}});
var cr30535_block_1 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30535_block_1(cr30535_state){
try{var cr30535_place_0 = (cr30535_state[(1)]);
var cr30535_place_2 = cljs.core.object_array;
var cr30535_place_3 = (1);
var cr30535_place_4 = (function (){var G__31150 = cr30535_place_3;
var fexpr__31149 = cr30535_place_2;
return (fexpr__31149.cljs$core$IFn$_invoke$arity$1 ? fexpr__31149.cljs$core$IFn$_invoke$arity$1(G__31150) : fexpr__31149.call(null,G__31150));
})();
var cr30535_place_5 = console;
var cr30535_place_6 = "Connecting...";
var cr30535_place_7 = cr30535_place_5.log(cr30535_place_6);
var cr30535_place_8 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr30535_place_9 = cr30535_place_0;
var cr30535_place_10 = cr30535_place_9;
var cr30535_place_11 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr30535_place_10);
var cr30535_place_12 = null;
var cr30535_place_13 = false;
(cr30535_state[(0)] = cr30535_block_2);

(cr30535_state[(3)] = cr30535_place_8);

(cr30535_state[(4)] = cr30535_place_13);

(cr30535_state[(5)] = cr30535_place_4);

(cr30535_state[(6)] = cr30535_place_12);

return cr30535_state;
}catch (e31148){var cr30535_exception = e31148;
(cr30535_state[(0)] = null);

(cr30535_state[(1)] = null);

(cr30535_state[(2)] = null);

throw cr30535_exception;
}});
var cr30535_block_18 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30535_block_18(cr30535_state){
try{var cr30535_place_131 = null;
(cr30535_state[(0)] = cr30535_block_19);

(cr30535_state[(1)] = cr30535_place_131);

return cr30535_state;
}catch (e31151){var cr30535_exception = e31151;
(cr30535_state[(0)] = null);

(cr30535_state[(1)] = null);

throw cr30535_exception;
}});
var cr30535_block_6 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30535_block_6(cr30535_state){
try{var cr30535_place_56 = (cr30535_state[(4)]);
var cr30535_place_61 = cr30535_place_56;
var cr30535_place_62 = new cljs.core.Keyword(null,"code","code",1586293142);
var cr30535_place_63 = cr30535_place_61;
var cr30535_place_64 = cr30535_place_62.cljs$core$IFn$_invoke$arity$1(cr30535_place_63);
var cr30535_place_65 = cr30535_place_64;
var cr30535_place_66 = null;
var cr30535_place_67 = (cr30535_place_65 == cr30535_place_66);
var cr30535_place_68 = null;
if(cr30535_place_67){
(cr30535_state[(0)] = cr30535_block_12);

(cr30535_state[(4)] = null);

(cr30535_state[(6)] = cr30535_place_68);

return cr30535_state;
} else {
(cr30535_state[(0)] = cr30535_block_7);

(cr30535_state[(4)] = null);

(cr30535_state[(5)] = cr30535_place_61);

(cr30535_state[(4)] = cr30535_place_64);

(cr30535_state[(6)] = cr30535_place_68);

return cr30535_state;
}
}catch (e31152){var cr30535_exception = e31152;
(cr30535_state[(0)] = null);

(cr30535_state[(3)] = null);

(cr30535_state[(1)] = null);

(cr30535_state[(2)] = null);

(cr30535_state[(4)] = null);

throw cr30535_exception;
}});
var cr30535_block_17 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30535_block_17(cr30535_state){
try{var cr30535_place_130 = missionary.core.unpark();
(cr30535_state[(0)] = cr30535_block_1);

(cr30535_state[(2)] = cr30535_place_130);

return cr30535_state;
}catch (e31153){var cr30535_exception = e31153;
(cr30535_state[(0)] = null);

(cr30535_state[(1)] = null);

(cr30535_state[(2)] = null);

throw cr30535_exception;
}});
var cr30535_block_5 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30535_block_5(cr30535_state){
try{var cr30535_place_8 = (cr30535_state[(3)]);
var cr30535_place_13 = (cr30535_state[(4)]);
var cr30535_place_12 = (cr30535_state[(6)]);
var cr30535_place_54 = cr30535_place_8;
var cr30535_place_55 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr30535_place_54);
var cr30535_place_56 = (cljs.core.truth_(cr30535_place_13)?(function(){throw cr30535_place_12})():cr30535_place_12);
var cr30535_place_57 = cr30535_place_56;
var cr30535_place_58 = null;
var cr30535_place_59 = (cr30535_place_57 == cr30535_place_58);
var cr30535_place_60 = null;
if(cr30535_place_59){
(cr30535_state[(0)] = cr30535_block_14);

(cr30535_state[(3)] = null);

(cr30535_state[(4)] = null);

(cr30535_state[(6)] = null);

(cr30535_state[(3)] = cr30535_place_60);

return cr30535_state;
} else {
(cr30535_state[(0)] = cr30535_block_6);

(cr30535_state[(3)] = null);

(cr30535_state[(4)] = null);

(cr30535_state[(6)] = null);

(cr30535_state[(4)] = cr30535_place_56);

(cr30535_state[(3)] = cr30535_place_60);

return cr30535_state;
}
}catch (e31154){var cr30535_exception = e31154;
(cr30535_state[(0)] = null);

(cr30535_state[(3)] = null);

(cr30535_state[(1)] = null);

(cr30535_state[(4)] = null);

(cr30535_state[(2)] = null);

(cr30535_state[(6)] = null);

throw cr30535_exception;
}});
var cr30535_block_14 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30535_block_14(cr30535_state){
try{var cr30535_place_101 = null;
(cr30535_state[(0)] = cr30535_block_15);

(cr30535_state[(3)] = cr30535_place_101);

return cr30535_state;
}catch (e31155){var cr30535_exception = e31155;
(cr30535_state[(0)] = null);

(cr30535_state[(3)] = null);

(cr30535_state[(1)] = null);

(cr30535_state[(2)] = null);

throw cr30535_exception;
}});
var cr30535_block_10 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30535_block_10(cr30535_state){
try{var cr30535_place_61 = (cr30535_state[(5)]);
var cr30535_place_69 = (cr30535_state[(1)]);
var cr30535_place_86 = cljs.core.ex_info;
var cr30535_place_87 = "Remote error - ";
var cr30535_place_88 = cr30535_place_69;
var cr30535_place_89 = " ";
var cr30535_place_90 = new cljs.core.Keyword(null,"reason","reason",-2070751759);
var cr30535_place_91 = cr30535_place_61;
var cr30535_place_92 = cr30535_place_90.cljs$core$IFn$_invoke$arity$1(cr30535_place_91);
var cr30535_place_93 = [cr30535_place_87,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr30535_place_88),cr30535_place_89,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr30535_place_92)].join('');
var cr30535_place_94 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr30535_place_95 = (function (){var G__31158 = cr30535_place_93;
var G__31159 = cr30535_place_94;
var fexpr__31157 = cr30535_place_86;
return (fexpr__31157.cljs$core$IFn$_invoke$arity$2 ? fexpr__31157.cljs$core$IFn$_invoke$arity$2(G__31158,G__31159) : fexpr__31157.call(null,G__31158,G__31159));
})();
var cr30535_place_96 = (function(){throw cr30535_place_95})();
(cr30535_state[(0)] = null);

(cr30535_state[(5)] = null);

(cr30535_state[(1)] = null);

return null;
}catch (e31156){var cr30535_exception = e31156;
(cr30535_state[(0)] = null);

(cr30535_state[(5)] = null);

(cr30535_state[(1)] = null);

throw cr30535_exception;
}});
var cr30535_block_0 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30535_block_0(cr30535_state){
try{var cr30535_place_0 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr30535_place_1 = hyperfiddle.electric_client.retry_delays;
(cr30535_state[(0)] = cr30535_block_1);

(cr30535_state[(1)] = cr30535_place_0);

(cr30535_state[(2)] = cr30535_place_1);

return cr30535_state;
}catch (e31160){var cr30535_exception = e31160;
(cr30535_state[(0)] = null);

throw cr30535_exception;
}});
var cr30535_block_13 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30535_block_13(cr30535_state){
try{var cr30535_place_68 = (cr30535_state[(6)]);
(cr30535_state[(0)] = cr30535_block_15);

(cr30535_state[(6)] = null);

(cr30535_state[(3)] = cr30535_place_68);

return cr30535_state;
}catch (e31161){var cr30535_exception = e31161;
(cr30535_state[(0)] = null);

(cr30535_state[(3)] = null);

(cr30535_state[(6)] = null);

(cr30535_state[(1)] = null);

(cr30535_state[(2)] = null);

throw cr30535_exception;
}});
var cr30535_block_16 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30535_block_16(cr30535_state){
try{var cr30535_place_60 = (cr30535_state[(3)]);
var cr30535_place_106 = cr30535_place_60;
var cr30535_place_107 = cljs.core.seq;
var cr30535_place_108 = cr30535_place_106;
var cr30535_place_109 = (function (){var G__31164 = cr30535_place_108;
var fexpr__31163 = cr30535_place_107;
return (fexpr__31163.cljs$core$IFn$_invoke$arity$1 ? fexpr__31163.cljs$core$IFn$_invoke$arity$1(G__31164) : fexpr__31163.call(null,G__31164));
})();
var cr30535_place_110 = cljs.core.first;
var cr30535_place_111 = cr30535_place_109;
var cr30535_place_112 = (function (){var G__31166 = cr30535_place_111;
var fexpr__31165 = cr30535_place_110;
return (fexpr__31165.cljs$core$IFn$_invoke$arity$1 ? fexpr__31165.cljs$core$IFn$_invoke$arity$1(G__31166) : fexpr__31165.call(null,G__31166));
})();
var cr30535_place_113 = cljs.core.next;
var cr30535_place_114 = cr30535_place_109;
var cr30535_place_115 = (function (){var G__31168 = cr30535_place_114;
var fexpr__31167 = cr30535_place_113;
return (fexpr__31167.cljs$core$IFn$_invoke$arity$1 ? fexpr__31167.cljs$core$IFn$_invoke$arity$1(G__31168) : fexpr__31167.call(null,G__31168));
})();
var cr30535_place_116 = cr30535_place_112;
var cr30535_place_117 = cr30535_place_115;
var cr30535_place_118 = console;
var cr30535_place_119 = "Next attempt in ";
var cr30535_place_120 = cr30535_place_116;
var cr30535_place_121 = (1000);
var cr30535_place_122 = (cr30535_place_120 / cr30535_place_121);
var cr30535_place_123 = " seconds.";
var cr30535_place_124 = [cr30535_place_119,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr30535_place_122),cr30535_place_123].join('');
var cr30535_place_125 = cr30535_place_118.log(cr30535_place_124);
var cr30535_place_126 = missionary.core.sleep;
var cr30535_place_127 = cr30535_place_116;
var cr30535_place_128 = cr30535_place_117;
var cr30535_place_129 = (function (){var G__31170 = cr30535_place_127;
var G__31171 = cr30535_place_128;
var fexpr__31169 = cr30535_place_126;
return (fexpr__31169.cljs$core$IFn$_invoke$arity$2 ? fexpr__31169.cljs$core$IFn$_invoke$arity$2(G__31170,G__31171) : fexpr__31169.call(null,G__31170,G__31171));
})();
(cr30535_state[(0)] = cr30535_block_17);

(cr30535_state[(3)] = null);

return missionary.core.park(cr30535_place_129);
}catch (e31162){var cr30535_exception = e31162;
(cr30535_state[(0)] = null);

(cr30535_state[(3)] = null);

(cr30535_state[(1)] = null);

(cr30535_state[(2)] = null);

throw cr30535_exception;
}});
var cr30535_block_7 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30535_block_7(cr30535_state){
try{var cr30535_place_64 = (cr30535_state[(4)]);
var cr30535_place_69 = cr30535_place_64;
var cr30535_place_70 = cr30535_place_69;
var cr30535_place_71 = cr30535_place_70;
var cr30535_place_72 = null;
var G__31173 = cr30535_place_71;
switch (G__31173) {
case (1005):
case (1006):
(cr30535_state[(0)] = cr30535_block_8);

(cr30535_state[(4)] = null);

(cr30535_state[(5)] = null);

(cr30535_state[(4)] = cr30535_place_72);

return cr30535_state;

break;
case (1008):
(cr30535_state[(0)] = cr30535_block_9);

(cr30535_state[(4)] = null);

(cr30535_state[(5)] = null);

(cr30535_state[(3)] = null);

(cr30535_state[(6)] = null);

(cr30535_state[(1)] = null);

(cr30535_state[(2)] = null);

return cr30535_state;

break;
default:
(cr30535_state[(0)] = cr30535_block_10);

(cr30535_state[(4)] = null);

(cr30535_state[(3)] = null);

(cr30535_state[(6)] = null);

(cr30535_state[(1)] = null);

(cr30535_state[(2)] = null);

(cr30535_state[(1)] = cr30535_place_69);

return cr30535_state;

}
}catch (e31172){var cr30535_exception = e31172;
(cr30535_state[(0)] = null);

(cr30535_state[(4)] = null);

(cr30535_state[(5)] = null);

(cr30535_state[(3)] = null);

(cr30535_state[(6)] = null);

(cr30535_state[(1)] = null);

(cr30535_state[(2)] = null);

throw cr30535_exception;
}});
var cr30535_block_9 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30535_block_9(cr30535_state){
try{var cr30535_place_79 = cljs.core.ex_info;
var cr30535_place_80 = "Stale client";
var cr30535_place_81 = new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079);
var cr30535_place_82 = new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405);
var cr30535_place_83 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr30535_place_81,cr30535_place_82]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr30535_place_84 = (function (){var G__31176 = cr30535_place_80;
var G__31177 = cr30535_place_83;
var fexpr__31175 = cr30535_place_79;
return (fexpr__31175.cljs$core$IFn$_invoke$arity$2 ? fexpr__31175.cljs$core$IFn$_invoke$arity$2(G__31176,G__31177) : fexpr__31175.call(null,G__31176,G__31177));
})();
var cr30535_place_85 = (function(){throw cr30535_place_84})();
(cr30535_state[(0)] = null);

return null;
}catch (e31174){var cr30535_exception = e31174;
(cr30535_state[(0)] = null);

throw cr30535_exception;
}});
var cr30535_block_12 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30535_block_12(cr30535_state){
try{var cr30535_place_1 = (cr30535_state[(2)]);
var cr30535_place_97 = console;
var cr30535_place_98 = "Failed to connect.";
var cr30535_place_99 = cr30535_place_97.log(cr30535_place_98);
var cr30535_place_100 = cr30535_place_1;
(cr30535_state[(0)] = cr30535_block_13);

(cr30535_state[(6)] = cr30535_place_100);

return cr30535_state;
}catch (e31178){var cr30535_exception = e31178;
(cr30535_state[(0)] = null);

(cr30535_state[(3)] = null);

(cr30535_state[(6)] = null);

(cr30535_state[(1)] = null);

(cr30535_state[(2)] = null);

throw cr30535_exception;
}});
var cr30535_block_15 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30535_block_15(cr30535_state){
try{var cr30535_place_60 = (cr30535_state[(3)]);
var cr30535_place_102 = cr30535_place_60;
var cr30535_place_103 = null;
var cr30535_place_104 = (cr30535_place_102 == cr30535_place_103);
var cr30535_place_105 = null;
if(cr30535_place_104){
(cr30535_state[(0)] = cr30535_block_18);

(cr30535_state[(3)] = null);

(cr30535_state[(1)] = null);

(cr30535_state[(2)] = null);

(cr30535_state[(1)] = cr30535_place_105);

return cr30535_state;
} else {
(cr30535_state[(0)] = cr30535_block_16);

return cr30535_state;
}
}catch (e31179){var cr30535_exception = e31179;
(cr30535_state[(0)] = null);

(cr30535_state[(3)] = null);

(cr30535_state[(1)] = null);

(cr30535_state[(2)] = null);

throw cr30535_exception;
}});
var cr30535_block_8 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30535_block_8(cr30535_state){
try{var cr30535_place_73 = console;
var cr30535_place_74 = "Connection lost.";
var cr30535_place_75 = cr30535_place_73.log(cr30535_place_74);
var cr30535_place_76 = cljs.core.seq;
var cr30535_place_77 = hyperfiddle.electric_client.retry_delays;
var cr30535_place_78 = (function (){var G__31182 = cr30535_place_77;
var fexpr__31181 = cr30535_place_76;
return (fexpr__31181.cljs$core$IFn$_invoke$arity$1 ? fexpr__31181.cljs$core$IFn$_invoke$arity$1(G__31182) : fexpr__31181.call(null,G__31182));
})();
(cr30535_state[(0)] = cr30535_block_11);

(cr30535_state[(4)] = cr30535_place_78);

return cr30535_state;
}catch (e31180){var cr30535_exception = e31180;
(cr30535_state[(0)] = null);

(cr30535_state[(3)] = null);

(cr30535_state[(6)] = null);

(cr30535_state[(1)] = null);

(cr30535_state[(2)] = null);

(cr30535_state[(4)] = null);

throw cr30535_exception;
}});
var cr30535_block_19 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30535_block_19(cr30535_state){
try{var cr30535_place_105 = (cr30535_state[(1)]);
(cr30535_state[(0)] = null);

(cr30535_state[(1)] = null);

return cr30535_place_105;
}catch (e31183){var cr30535_exception = e31183;
(cr30535_state[(0)] = null);

(cr30535_state[(1)] = null);

throw cr30535_exception;
}});
return cloroutine.impl.coroutine((function (){var G__31184 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((7));
(G__31184[(0)] = cr30535_block_0);

return G__31184;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.reload_when_stale = (function hyperfiddle$electric_client$reload_when_stale(task){
return (function (s,f){
var G__31185 = s;
var G__31186 = (function (error){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405),new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(error)))){
console.log("Server and client version mismatch. Refreshing page.");

window.location.reload();
} else {
}

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(error) : f.call(null,error));
});
return (task.cljs$core$IFn$_invoke$arity$2 ? task.cljs$core$IFn$_invoke$arity$2(G__31185,G__31186) : task.call(null,G__31185,G__31186));
});
});

//# sourceMappingURL=hyperfiddle.electric_client.js.map
