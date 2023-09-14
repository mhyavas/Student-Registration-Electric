goog.provide('hyperfiddle.electric_client');
/**
 * @define {string}
 */
hyperfiddle.electric_client.VERSION = goog.define("hyperfiddle.electric_client.VERSION","");
hyperfiddle.electric_client.server_url = (function hyperfiddle$electric_client$server_url(){
var url = (new URL(window.location));
var proto = url.protocol;
(url.protocol = (function (){var G__30330 = proto;
switch (G__30330) {
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
}catch (e30335){var e = e30335;
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));

return (function (){
return cljs.core.List.EMPTY;
});
}});
});
hyperfiddle.electric_client.wait_for_flush = (function hyperfiddle$electric_client$wait_for_flush(ws){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30349_block_0 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30349_block_0(cr30349_state){
try{(cr30349_state[(0)] = cr30349_block_1);

return cr30349_state;
}catch (e30390){var cr30349_exception = e30390;
(cr30349_state[(0)] = null);

throw cr30349_exception;
}});
var cr30349_block_1 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30349_block_1(cr30349_state){
try{var cr30349_place_0 = (4096);
var cr30349_place_1 = ws;
var cr30349_place_2 = cr30349_place_1.bufferedAmount;
var cr30349_place_3 = (cr30349_place_0 < cr30349_place_2);
var cr30349_place_4 = null;
if(cr30349_place_3){
(cr30349_state[(0)] = cr30349_block_3);

return cr30349_state;
} else {
(cr30349_state[(0)] = cr30349_block_2);

(cr30349_state[(1)] = cr30349_place_4);

return cr30349_state;
}
}catch (e30394){var cr30349_exception = e30394;
(cr30349_state[(0)] = null);

throw cr30349_exception;
}});
var cr30349_block_2 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30349_block_2(cr30349_state){
try{var cr30349_place_5 = null;
(cr30349_state[(0)] = cr30349_block_5);

(cr30349_state[(1)] = cr30349_place_5);

return cr30349_state;
}catch (e30396){var cr30349_exception = e30396;
(cr30349_state[(0)] = null);

(cr30349_state[(1)] = null);

throw cr30349_exception;
}});
var cr30349_block_3 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30349_block_3(cr30349_state){
try{var cr30349_place_6 = missionary.core.sleep;
var cr30349_place_7 = (50);
var cr30349_place_8 = (function (){var G__30403 = cr30349_place_7;
var fexpr__30402 = cr30349_place_6;
return (fexpr__30402.cljs$core$IFn$_invoke$arity$1 ? fexpr__30402.cljs$core$IFn$_invoke$arity$1(G__30403) : fexpr__30402.call(null,G__30403));
})();
(cr30349_state[(0)] = cr30349_block_4);

return missionary.core.park(cr30349_place_8);
}catch (e30401){var cr30349_exception = e30401;
(cr30349_state[(0)] = null);

throw cr30349_exception;
}});
var cr30349_block_4 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30349_block_4(cr30349_state){
try{var cr30349_place_9 = missionary.core.unpark();
(cr30349_state[(0)] = cr30349_block_1);

return cr30349_state;
}catch (e30408){var cr30349_exception = e30408;
(cr30349_state[(0)] = null);

throw cr30349_exception;
}});
var cr30349_block_5 = (function hyperfiddle$electric_client$wait_for_flush_$_cr30349_block_5(cr30349_state){
try{var cr30349_place_4 = (cr30349_state[(1)]);
(cr30349_state[(0)] = null);

(cr30349_state[(1)] = null);

return cr30349_place_4;
}catch (e30412){var cr30349_exception = e30412;
(cr30349_state[(0)] = null);

(cr30349_state[(1)] = null);

throw cr30349_exception;
}});
return cloroutine.impl.coroutine((function (){var G__30415 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__30415[(0)] = cr30349_block_0);

return G__30415;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.wait_for_close = (function hyperfiddle$electric_client$wait_for_close(ws){
return (function (s,f){
(ws.onclose = (function (e){
(ws.onclose = null);

var G__30418 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),e.code,new cljs.core.Keyword(null,"reason","reason",-2070751759),e.reason], null);
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__30418) : s.call(null,G__30418));
}));

return (function (){
if((ws.onclose == null)){
return null;
} else {
(ws.onclose = null);

var G__30419 = (new missionary.Cancelled());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30419) : f.call(null,G__30419));
}
});
});
});
hyperfiddle.electric_client.payload = (function hyperfiddle$electric_client$payload(x){
return x.data;
});
hyperfiddle.electric_client.send_BANG_ = (function hyperfiddle$electric_client$send_BANG_(ws,msg){
var G__30424 = ws;
G__30424.send(msg);

return G__30424;
});
hyperfiddle.electric_client.send_all = (function hyperfiddle$electric_client$send_all(ws,msgs){
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30430_block_0 = (function hyperfiddle$electric_client$send_all_$_cr30430_block_0(cr30430_state){
try{var cr30430_place_0 = hyperfiddle.electric_client.wait_for_flush;
var cr30430_place_1 = hyperfiddle.electric_client.send_BANG_;
var cr30430_place_2 = ws;
var cr30430_place_3 = hyperfiddle.electric.impl.io.encode;
var cr30430_place_4 = (1);
var cr30430_place_5 = msgs;
(cr30430_state[(0)] = cr30430_block_1);

(cr30430_state[(1)] = cr30430_place_0);

(cr30430_state[(3)] = cr30430_place_1);

(cr30430_state[(4)] = cr30430_place_2);

(cr30430_state[(2)] = cr30430_place_3);

return missionary.core.fork(cr30430_place_4,cr30430_place_5);
}catch (e30459){var cr30430_exception = e30459;
(cr30430_state[(0)] = null);

throw cr30430_exception;
}});
var cr30430_block_1 = (function hyperfiddle$electric_client$send_all_$_cr30430_block_1(cr30430_state){
try{var cr30430_place_0 = (cr30430_state[(1)]);
var cr30430_place_3 = (cr30430_state[(2)]);
var cr30430_place_1 = (cr30430_state[(3)]);
var cr30430_place_2 = (cr30430_state[(4)]);
var cr30430_place_6 = missionary.core.unpark();
var cr30430_place_7 = (function (){var G__30465 = cr30430_place_6;
var fexpr__30464 = cr30430_place_3;
return (fexpr__30464.cljs$core$IFn$_invoke$arity$1 ? fexpr__30464.cljs$core$IFn$_invoke$arity$1(G__30465) : fexpr__30464.call(null,G__30465));
})();
var cr30430_place_8 = (function (){var G__30470 = cr30430_place_2;
var G__30471 = cr30430_place_7;
var fexpr__30469 = cr30430_place_1;
return (fexpr__30469.cljs$core$IFn$_invoke$arity$2 ? fexpr__30469.cljs$core$IFn$_invoke$arity$2(G__30470,G__30471) : fexpr__30469.call(null,G__30470,G__30471));
})();
var cr30430_place_9 = (function (){var G__30473 = cr30430_place_8;
var fexpr__30472 = cr30430_place_0;
return (fexpr__30472.cljs$core$IFn$_invoke$arity$1 ? fexpr__30472.cljs$core$IFn$_invoke$arity$1(G__30473) : fexpr__30472.call(null,G__30473));
})();
(cr30430_state[(0)] = cr30430_block_2);

(cr30430_state[(1)] = null);

(cr30430_state[(2)] = null);

(cr30430_state[(3)] = null);

(cr30430_state[(4)] = null);

return missionary.core.park(cr30430_place_9);
}catch (e30463){var cr30430_exception = e30463;
(cr30430_state[(0)] = null);

(cr30430_state[(1)] = null);

(cr30430_state[(2)] = null);

(cr30430_state[(3)] = null);

(cr30430_state[(4)] = null);

throw cr30430_exception;
}});
var cr30430_block_2 = (function hyperfiddle$electric_client$send_all_$_cr30430_block_2(cr30430_state){
try{var cr30430_place_10 = missionary.core.unpark();
(cr30430_state[(0)] = null);

return cr30430_place_10;
}catch (e30475){var cr30430_exception = e30475;
(cr30430_state[(0)] = null);

throw cr30430_exception;
}});
return cloroutine.impl.coroutine((function (){var G__30480 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__30480[(0)] = cr30430_block_0);

return G__30480;
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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30483_block_12 = (function hyperfiddle$electric_client$connector_$_cr30483_block_12(cr30483_state){
try{var cr30483_place_7 = (cr30483_state[(1)]);
(cr30483_state[(0)] = null);

(cr30483_state[(1)] = null);

return cr30483_place_7;
}catch (e30601){var cr30483_exception = e30601;
(cr30483_state[(0)] = null);

(cr30483_state[(1)] = null);

throw cr30483_exception;
}});
var cr30483_block_0 = (function hyperfiddle$electric_client$connector_$_cr30483_block_0(cr30483_state){
try{var cr30483_place_0 = hyperfiddle.electric_client.connect;
var cr30483_place_1 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr30483_place_2 = (function (){var G__30605 = cr30483_place_1;
var fexpr__30604 = cr30483_place_0;
return (fexpr__30604.cljs$core$IFn$_invoke$arity$1 ? fexpr__30604.cljs$core$IFn$_invoke$arity$1(G__30605) : fexpr__30604.call(null,G__30605));
})();
(cr30483_state[(0)] = cr30483_block_1);

return missionary.core.park(cr30483_place_2);
}catch (e30603){var cr30483_exception = e30603;
(cr30483_state[(0)] = null);

throw cr30483_exception;
}});
var cr30483_block_1 = (function hyperfiddle$electric_client$connector_$_cr30483_block_1(cr30483_state){
try{var cr30483_place_3 = missionary.core.unpark();
var cr30483_place_4 = cr30483_place_3;
var cr30483_place_5 = null;
var cr30483_place_6 = (cr30483_place_4 == cr30483_place_5);
var cr30483_place_7 = null;
if(cr30483_place_6){
(cr30483_state[(0)] = cr30483_block_11);

(cr30483_state[(1)] = cr30483_place_7);

return cr30483_state;
} else {
(cr30483_state[(0)] = cr30483_block_2);

(cr30483_state[(2)] = cr30483_place_3);

(cr30483_state[(1)] = cr30483_place_7);

return cr30483_state;
}
}catch (e30607){var cr30483_exception = e30607;
(cr30483_state[(0)] = null);

throw cr30483_exception;
}});
var cr30483_block_11 = (function hyperfiddle$electric_client$connector_$_cr30483_block_11(cr30483_state){
try{var cr30483_place_51 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
(cr30483_state[(0)] = cr30483_block_12);

(cr30483_state[(1)] = cr30483_place_51);

return cr30483_state;
}catch (e30609){var cr30483_exception = e30609;
(cr30483_state[(0)] = null);

(cr30483_state[(1)] = null);

throw cr30483_exception;
}});
var cr30483_block_5 = (function hyperfiddle$electric_client$connector_$_cr30483_block_5(cr30483_state){
try{var cr30483_place_9 = (cr30483_state[(4)]);
var cr30483_place_34 = cr30483_place_9;
var cr30483_place_35 = (function(){throw cr30483_place_34})();
(cr30483_state[(0)] = null);

(cr30483_state[(2)] = null);

(cr30483_state[(1)] = null);

(cr30483_state[(3)] = null);

(cr30483_state[(4)] = null);

return null;
}catch (e30610){var cr30483_exception = e30610;
(cr30483_state[(0)] = cr30483_block_6);

(cr30483_state[(3)] = true);

(cr30483_state[(4)] = cr30483_exception);

return cr30483_state;
}});
var cr30483_block_7 = (function hyperfiddle$electric_client$connector_$_cr30483_block_7(cr30483_state){
try{var cr30483_place_8 = (cr30483_state[(2)]);
var cr30483_place_43 = cr30483_place_8;
var cr30483_place_44 = cr30483_place_43.close();
var cr30483_place_45 = missionary.core.compel;
var cr30483_place_46 = hyperfiddle.electric_client.wait_for_close;
var cr30483_place_47 = (function (){var G__30614 = cr30483_place_46;
var fexpr__30613 = cr30483_place_45;
return (fexpr__30613.cljs$core$IFn$_invoke$arity$1 ? fexpr__30613.cljs$core$IFn$_invoke$arity$1(G__30614) : fexpr__30613.call(null,G__30614));
})();
(cr30483_state[(0)] = cr30483_block_8);

(cr30483_state[(2)] = null);

return missionary.core.park(cr30483_place_47);
}catch (e30611){var cr30483_exception = e30611;
(cr30483_state[(0)] = null);

(cr30483_state[(2)] = null);

(cr30483_state[(1)] = null);

(cr30483_state[(3)] = null);

(cr30483_state[(5)] = null);

(cr30483_state[(4)] = null);

throw cr30483_exception;
}});
var cr30483_block_3 = (function hyperfiddle$electric_client$connector_$_cr30483_block_3(cr30483_state){
try{var cr30483_place_8 = (cr30483_state[(2)]);
var cr30483_place_11 = hyperfiddle.electric_client.send_BANG_;
var cr30483_place_12 = cr30483_place_8;
var cr30483_place_13 = hyperfiddle.electric.impl.io.encode;
var cr30483_place_14 = server;
var cr30483_place_15 = (function (){var G__30618 = cr30483_place_14;
var fexpr__30617 = cr30483_place_13;
return (fexpr__30617.cljs$core$IFn$_invoke$arity$1 ? fexpr__30617.cljs$core$IFn$_invoke$arity$1(G__30618) : fexpr__30617.call(null,G__30618));
})();
var cr30483_place_16 = (function (){var G__30620 = cr30483_place_12;
var G__30621 = cr30483_place_15;
var fexpr__30619 = cr30483_place_11;
return (fexpr__30619.cljs$core$IFn$_invoke$arity$2 ? fexpr__30619.cljs$core$IFn$_invoke$arity$2(G__30620,G__30621) : fexpr__30619.call(null,G__30620,G__30621));
})();
var cr30483_place_17 = cr30483_place_8;
var cr30483_place_18 = cljs.core.comp;
var cr30483_place_19 = cb;
var cr30483_place_20 = hyperfiddle.electric.impl.io.decode;
var cr30483_place_21 = hyperfiddle.electric_client.payload;
var cr30483_place_22 = (function (){var G__30623 = cr30483_place_19;
var G__30624 = cr30483_place_20;
var G__30625 = cr30483_place_21;
var fexpr__30622 = cr30483_place_18;
return (fexpr__30622.cljs$core$IFn$_invoke$arity$3 ? fexpr__30622.cljs$core$IFn$_invoke$arity$3(G__30623,G__30624,G__30625) : fexpr__30622.call(null,G__30623,G__30624,G__30625));
})();
var cr30483_place_23 = (cr30483_place_17.onmessage = cr30483_place_22);
var cr30483_place_24 = missionary.core.race;
var cr30483_place_25 = hyperfiddle.electric_client.send_all;
var cr30483_place_26 = cr30483_place_8;
var cr30483_place_27 = msgs;
var cr30483_place_28 = (function (){var G__30627 = cr30483_place_26;
var G__30628 = cr30483_place_27;
var fexpr__30626 = cr30483_place_25;
return (fexpr__30626.cljs$core$IFn$_invoke$arity$2 ? fexpr__30626.cljs$core$IFn$_invoke$arity$2(G__30627,G__30628) : fexpr__30626.call(null,G__30627,G__30628));
})();
var cr30483_place_29 = hyperfiddle.electric_client.wait_for_close;
var cr30483_place_30 = cr30483_place_8;
var cr30483_place_31 = (function (){var G__30630 = cr30483_place_30;
var fexpr__30629 = cr30483_place_29;
return (fexpr__30629.cljs$core$IFn$_invoke$arity$1 ? fexpr__30629.cljs$core$IFn$_invoke$arity$1(G__30630) : fexpr__30629.call(null,G__30630));
})();
var cr30483_place_32 = (function (){var G__30632 = cr30483_place_28;
var G__30633 = cr30483_place_31;
var fexpr__30631 = cr30483_place_24;
return (fexpr__30631.cljs$core$IFn$_invoke$arity$2 ? fexpr__30631.cljs$core$IFn$_invoke$arity$2(G__30632,G__30633) : fexpr__30631.call(null,G__30632,G__30633));
})();
(cr30483_state[(0)] = cr30483_block_4);

return missionary.core.park(cr30483_place_32);
}catch (e30615){var cr30483_exception = e30615;
(cr30483_state[(0)] = cr30483_block_5);

(cr30483_state[(4)] = cr30483_exception);

return cr30483_state;
}});
var cr30483_block_9 = (function hyperfiddle$electric_client$connector_$_cr30483_block_9(cr30483_state){
try{var cr30483_place_49 = null;
(cr30483_state[(0)] = cr30483_block_10);

(cr30483_state[(5)] = cr30483_place_49);

return cr30483_state;
}catch (e30634){var cr30483_exception = e30634;
(cr30483_state[(0)] = null);

(cr30483_state[(1)] = null);

(cr30483_state[(3)] = null);

(cr30483_state[(5)] = null);

(cr30483_state[(4)] = null);

throw cr30483_exception;
}});
var cr30483_block_4 = (function hyperfiddle$electric_client$connector_$_cr30483_block_4(cr30483_state){
try{var cr30483_place_33 = missionary.core.unpark();
(cr30483_state[(0)] = cr30483_block_6);

(cr30483_state[(4)] = cr30483_place_33);

return cr30483_state;
}catch (e30638){var cr30483_exception = e30638;
(cr30483_state[(0)] = cr30483_block_5);

(cr30483_state[(4)] = cr30483_exception);

return cr30483_state;
}});
var cr30483_block_8 = (function hyperfiddle$electric_client$connector_$_cr30483_block_8(cr30483_state){
try{var cr30483_place_48 = missionary.core.unpark();
(cr30483_state[(0)] = cr30483_block_10);

(cr30483_state[(5)] = cr30483_place_48);

return cr30483_state;
}catch (e30639){var cr30483_exception = e30639;
(cr30483_state[(0)] = null);

(cr30483_state[(1)] = null);

(cr30483_state[(3)] = null);

(cr30483_state[(5)] = null);

(cr30483_state[(4)] = null);

throw cr30483_exception;
}});
var cr30483_block_6 = (function hyperfiddle$electric_client$connector_$_cr30483_block_6(cr30483_state){
try{var cr30483_place_8 = (cr30483_state[(2)]);
var cr30483_place_36 = cljs.core._EQ_;
var cr30483_place_37 = WebSocket;
var cr30483_place_38 = cr30483_place_37.CLOSED;
var cr30483_place_39 = cr30483_place_8;
var cr30483_place_40 = cr30483_place_39.readyState;
var cr30483_place_41 = (function (){var G__30642 = cr30483_place_38;
var G__30643 = cr30483_place_40;
var fexpr__30641 = cr30483_place_36;
return (fexpr__30641.cljs$core$IFn$_invoke$arity$2 ? fexpr__30641.cljs$core$IFn$_invoke$arity$2(G__30642,G__30643) : fexpr__30641.call(null,G__30642,G__30643));
})();
var cr30483_place_42 = null;
if(cljs.core.truth_(cr30483_place_41)){
(cr30483_state[(0)] = cr30483_block_9);

(cr30483_state[(2)] = null);

(cr30483_state[(5)] = cr30483_place_42);

return cr30483_state;
} else {
(cr30483_state[(0)] = cr30483_block_7);

(cr30483_state[(5)] = cr30483_place_42);

return cr30483_state;
}
}catch (e30640){var cr30483_exception = e30640;
(cr30483_state[(0)] = null);

(cr30483_state[(2)] = null);

(cr30483_state[(1)] = null);

(cr30483_state[(3)] = null);

(cr30483_state[(4)] = null);

throw cr30483_exception;
}});
var cr30483_block_10 = (function hyperfiddle$electric_client$connector_$_cr30483_block_10(cr30483_state){
try{var cr30483_place_10 = (cr30483_state[(3)]);
var cr30483_place_42 = (cr30483_state[(5)]);
var cr30483_place_9 = (cr30483_state[(4)]);
var cr30483_place_50 = (cljs.core.truth_(cr30483_place_10)?(function(){throw cr30483_place_9})():cr30483_place_9);
(cr30483_state[(0)] = cr30483_block_12);

(cr30483_state[(3)] = null);

(cr30483_state[(5)] = null);

(cr30483_state[(4)] = null);

(cr30483_state[(1)] = cr30483_place_50);

return cr30483_state;
}catch (e30644){var cr30483_exception = e30644;
(cr30483_state[(0)] = null);

(cr30483_state[(1)] = null);

(cr30483_state[(3)] = null);

(cr30483_state[(5)] = null);

(cr30483_state[(4)] = null);

throw cr30483_exception;
}});
var cr30483_block_2 = (function hyperfiddle$electric_client$connector_$_cr30483_block_2(cr30483_state){
try{var cr30483_place_3 = (cr30483_state[(2)]);
var cr30483_place_8 = cr30483_place_3;
var cr30483_place_9 = null;
var cr30483_place_10 = false;
(cr30483_state[(0)] = cr30483_block_3);

(cr30483_state[(2)] = null);

(cr30483_state[(2)] = cr30483_place_8);

(cr30483_state[(4)] = cr30483_place_9);

(cr30483_state[(3)] = cr30483_place_10);

return cr30483_state;
}catch (e30645){var cr30483_exception = e30645;
(cr30483_state[(0)] = null);

(cr30483_state[(1)] = null);

(cr30483_state[(2)] = null);

throw cr30483_exception;
}});
return cloroutine.impl.coroutine((function (){var G__30646 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__30646[(0)] = cr30483_block_0);

return G__30646;
})());
})(),missionary.core.sp_run);
});
});
hyperfiddle.electric_client.fib_iter = (function hyperfiddle$electric_client$fib_iter(p__30647){
var vec__30648 = p__30647;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30648,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30648,(1),null);
var G__30651 = b;
switch (G__30651) {
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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr30655_block_15 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30655_block_15(cr30655_state){
try{var cr30655_place_60 = (cr30655_state[(4)]);
var cr30655_place_102 = cr30655_place_60;
var cr30655_place_103 = null;
var cr30655_place_104 = (cr30655_place_102 == cr30655_place_103);
var cr30655_place_105 = null;
if(cr30655_place_104){
(cr30655_state[(0)] = cr30655_block_18);

(cr30655_state[(1)] = null);

(cr30655_state[(4)] = null);

(cr30655_state[(2)] = null);

(cr30655_state[(1)] = cr30655_place_105);

return cr30655_state;
} else {
(cr30655_state[(0)] = cr30655_block_16);

return cr30655_state;
}
}catch (e30997){var cr30655_exception = e30997;
(cr30655_state[(0)] = null);

(cr30655_state[(1)] = null);

(cr30655_state[(4)] = null);

(cr30655_state[(2)] = null);

throw cr30655_exception;
}});
var cr30655_block_16 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30655_block_16(cr30655_state){
try{var cr30655_place_60 = (cr30655_state[(4)]);
var cr30655_place_106 = cr30655_place_60;
var cr30655_place_107 = cljs.core.seq;
var cr30655_place_108 = cr30655_place_106;
var cr30655_place_109 = (function (){var G__31000 = cr30655_place_108;
var fexpr__30999 = cr30655_place_107;
return (fexpr__30999.cljs$core$IFn$_invoke$arity$1 ? fexpr__30999.cljs$core$IFn$_invoke$arity$1(G__31000) : fexpr__30999.call(null,G__31000));
})();
var cr30655_place_110 = cljs.core.first;
var cr30655_place_111 = cr30655_place_109;
var cr30655_place_112 = (function (){var G__31002 = cr30655_place_111;
var fexpr__31001 = cr30655_place_110;
return (fexpr__31001.cljs$core$IFn$_invoke$arity$1 ? fexpr__31001.cljs$core$IFn$_invoke$arity$1(G__31002) : fexpr__31001.call(null,G__31002));
})();
var cr30655_place_113 = cljs.core.next;
var cr30655_place_114 = cr30655_place_109;
var cr30655_place_115 = (function (){var G__31004 = cr30655_place_114;
var fexpr__31003 = cr30655_place_113;
return (fexpr__31003.cljs$core$IFn$_invoke$arity$1 ? fexpr__31003.cljs$core$IFn$_invoke$arity$1(G__31004) : fexpr__31003.call(null,G__31004));
})();
var cr30655_place_116 = cr30655_place_112;
var cr30655_place_117 = cr30655_place_115;
var cr30655_place_118 = console;
var cr30655_place_119 = "Next attempt in ";
var cr30655_place_120 = cr30655_place_116;
var cr30655_place_121 = (1000);
var cr30655_place_122 = (cr30655_place_120 / cr30655_place_121);
var cr30655_place_123 = " seconds.";
var cr30655_place_124 = [cr30655_place_119,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr30655_place_122),cr30655_place_123].join('');
var cr30655_place_125 = cr30655_place_118.log(cr30655_place_124);
var cr30655_place_126 = missionary.core.sleep;
var cr30655_place_127 = cr30655_place_116;
var cr30655_place_128 = cr30655_place_117;
var cr30655_place_129 = (function (){var G__31006 = cr30655_place_127;
var G__31007 = cr30655_place_128;
var fexpr__31005 = cr30655_place_126;
return (fexpr__31005.cljs$core$IFn$_invoke$arity$2 ? fexpr__31005.cljs$core$IFn$_invoke$arity$2(G__31006,G__31007) : fexpr__31005.call(null,G__31006,G__31007));
})();
(cr30655_state[(0)] = cr30655_block_17);

(cr30655_state[(4)] = null);

return missionary.core.park(cr30655_place_129);
}catch (e30998){var cr30655_exception = e30998;
(cr30655_state[(0)] = null);

(cr30655_state[(1)] = null);

(cr30655_state[(4)] = null);

(cr30655_state[(2)] = null);

throw cr30655_exception;
}});
var cr30655_block_4 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30655_block_4(cr30655_state){
try{var cr30655_place_12 = (cr30655_state[(3)]);
var cr30655_place_52 = cr30655_place_12;
var cr30655_place_53 = (function(){throw cr30655_place_52})();
(cr30655_state[(0)] = null);

(cr30655_state[(1)] = null);

(cr30655_state[(3)] = null);

(cr30655_state[(4)] = null);

(cr30655_state[(6)] = null);

(cr30655_state[(2)] = null);

return null;
}catch (e31008){var cr30655_exception = e31008;
(cr30655_state[(0)] = cr30655_block_5);

(cr30655_state[(6)] = true);

(cr30655_state[(3)] = cr30655_exception);

return cr30655_state;
}});
var cr30655_block_0 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30655_block_0(cr30655_state){
try{var cr30655_place_0 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr30655_place_1 = hyperfiddle.electric_client.retry_delays;
(cr30655_state[(0)] = cr30655_block_1);

(cr30655_state[(2)] = cr30655_place_0);

(cr30655_state[(1)] = cr30655_place_1);

return cr30655_state;
}catch (e31009){var cr30655_exception = e31009;
(cr30655_state[(0)] = null);

throw cr30655_exception;
}});
var cr30655_block_5 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30655_block_5(cr30655_state){
try{var cr30655_place_12 = (cr30655_state[(3)]);
var cr30655_place_8 = (cr30655_state[(4)]);
var cr30655_place_13 = (cr30655_state[(6)]);
var cr30655_place_54 = cr30655_place_8;
var cr30655_place_55 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr30655_place_54);
var cr30655_place_56 = (cljs.core.truth_(cr30655_place_13)?(function(){throw cr30655_place_12})():cr30655_place_12);
var cr30655_place_57 = cr30655_place_56;
var cr30655_place_58 = null;
var cr30655_place_59 = (cr30655_place_57 == cr30655_place_58);
var cr30655_place_60 = null;
if(cr30655_place_59){
(cr30655_state[(0)] = cr30655_block_14);

(cr30655_state[(3)] = null);

(cr30655_state[(4)] = null);

(cr30655_state[(6)] = null);

(cr30655_state[(4)] = cr30655_place_60);

return cr30655_state;
} else {
(cr30655_state[(0)] = cr30655_block_6);

(cr30655_state[(3)] = null);

(cr30655_state[(4)] = null);

(cr30655_state[(6)] = null);

(cr30655_state[(3)] = cr30655_place_56);

(cr30655_state[(4)] = cr30655_place_60);

return cr30655_state;
}
}catch (e31010){var cr30655_exception = e31010;
(cr30655_state[(0)] = null);

(cr30655_state[(1)] = null);

(cr30655_state[(3)] = null);

(cr30655_state[(4)] = null);

(cr30655_state[(6)] = null);

(cr30655_state[(2)] = null);

throw cr30655_exception;
}});
var cr30655_block_1 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30655_block_1(cr30655_state){
try{var cr30655_place_0 = (cr30655_state[(2)]);
var cr30655_place_2 = cljs.core.object_array;
var cr30655_place_3 = (1);
var cr30655_place_4 = (function (){var G__31013 = cr30655_place_3;
var fexpr__31012 = cr30655_place_2;
return (fexpr__31012.cljs$core$IFn$_invoke$arity$1 ? fexpr__31012.cljs$core$IFn$_invoke$arity$1(G__31013) : fexpr__31012.call(null,G__31013));
})();
var cr30655_place_5 = console;
var cr30655_place_6 = "Connecting...";
var cr30655_place_7 = cr30655_place_5.log(cr30655_place_6);
var cr30655_place_8 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr30655_place_9 = cr30655_place_0;
var cr30655_place_10 = cr30655_place_9;
var cr30655_place_11 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr30655_place_10);
var cr30655_place_12 = null;
var cr30655_place_13 = false;
(cr30655_state[(0)] = cr30655_block_2);

(cr30655_state[(3)] = cr30655_place_12);

(cr30655_state[(4)] = cr30655_place_8);

(cr30655_state[(5)] = cr30655_place_4);

(cr30655_state[(6)] = cr30655_place_13);

return cr30655_state;
}catch (e31011){var cr30655_exception = e31011;
(cr30655_state[(0)] = null);

(cr30655_state[(1)] = null);

(cr30655_state[(2)] = null);

throw cr30655_exception;
}});
var cr30655_block_2 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30655_block_2(cr30655_state){
try{var cr30655_place_4 = (cr30655_state[(5)]);
var cr30655_place_14 = (function (x){
var fexpr__30790 = (cr30655_place_4[(0)]);
var G__31016 = x;
var fexpr__31015 = fexpr__30790;
return (fexpr__31015.cljs$core$IFn$_invoke$arity$1 ? fexpr__31015.cljs$core$IFn$_invoke$arity$1(G__31016) : fexpr__31015.call(null,G__31016));
});
var cr30655_place_15 = cljs.core.partial;
var cr30655_place_25 = (function (cr30791_state){
try{var cr30791_place_40 = missionary.core.unpark();
var cr30791_place_41 = cr30791_place_40;
var cr30791_place_42 = null;
var G__30848 = cr30791_place_41;
var G__31054 = G__30848;
switch (G__31054) {
case (0):
(cr30791_state[(0)] = cr30655_place_21);

(cr30791_state[(1)] = null);

(cr30791_state[(1)] = cr30791_place_42);

return cr30791_state;

break;
case (1):
(cr30791_state[(0)] = cr30655_place_22);

(cr30791_state[(3)] = null);

(cr30791_state[(4)] = null);

return cr30791_state;

break;
default:
(cr30791_state[(0)] = cr30655_place_31);

(cr30791_state[(1)] = null);

(cr30791_state[(2)] = null);

(cr30791_state[(3)] = null);

(cr30791_state[(4)] = null);

(cr30791_state[(1)] = cr30791_place_40);

return cr30791_state;

}
}catch (e31053){var e30847 = e31053;
var cr30791_exception = e30847;
(cr30791_state[(0)] = null);

(cr30791_state[(1)] = null);

(cr30791_state[(2)] = null);

(cr30791_state[(3)] = null);

(cr30791_state[(4)] = null);

throw cr30791_exception;
}});
var cr30655_place_27 = (function (cr30791_state){
try{var cr30791_place_11 = missionary.core.unpark();
var cr30791_place_12 = cr30791_place_11;
var cr30791_place_13 = null;
var G__30856 = cr30791_place_12;
var G__31056 = G__30856;
switch (G__31056) {
case (0):
(cr30791_state[(0)] = cr30655_place_23);

(cr30791_state[(2)] = cr30791_place_13);

return cr30791_state;

break;
case (1):
(cr30791_state[(0)] = cr30655_place_32);

(cr30791_state[(2)] = cr30791_place_13);

return cr30791_state;

break;
default:
(cr30791_state[(0)] = cr30655_place_19);

(cr30791_state[(1)] = null);

(cr30791_state[(1)] = cr30791_place_11);

return cr30791_state;

}
}catch (e31055){var e30855 = e31055;
var cr30791_exception = e30855;
(cr30791_state[(0)] = null);

(cr30791_state[(1)] = null);

throw cr30791_exception;
}});
var cr30655_place_26 = (function (cr30791_state){
try{var cr30791_place_0 = console;
var cr30791_place_1 = "Connected.";
var cr30791_place_2 = cr30791_place_0.log(cr30791_place_1);
var cr30791_place_3 = missionary.core.rdv;
var cr30791_place_4 = (function (){var fexpr__30850 = cr30791_place_3;
var fexpr__31058 = fexpr__30850;
return (fexpr__31058.cljs$core$IFn$_invoke$arity$0 ? fexpr__31058.cljs$core$IFn$_invoke$arity$0() : fexpr__31058.call(null));
})();
var cr30791_place_5 = (2);
var cr30791_place_6 = missionary.core.seed;
var cr30791_place_7 = cljs.core.range;
var cr30791_place_8 = (2);
var cr30791_place_9 = (function (){var G__30852 = cr30791_place_8;
var fexpr__30851 = cr30791_place_7;
var G__31060 = G__30852;
var fexpr__31059 = fexpr__30851;
return (fexpr__31059.cljs$core$IFn$_invoke$arity$1 ? fexpr__31059.cljs$core$IFn$_invoke$arity$1(G__31060) : fexpr__31059.call(null,G__31060));
})();
var cr30791_place_10 = (function (){var G__30854 = cr30791_place_9;
var fexpr__30853 = cr30791_place_6;
var G__31062 = G__30854;
var fexpr__31061 = fexpr__30853;
return (fexpr__31061.cljs$core$IFn$_invoke$arity$1 ? fexpr__31061.cljs$core$IFn$_invoke$arity$1(G__31062) : fexpr__31061.call(null,G__31062));
})();
(cr30791_state[(0)] = cr30655_place_27);

(cr30791_state[(1)] = cr30791_place_4);

return missionary.core.fork(cr30791_place_5,cr30791_place_10);
}catch (e31057){var e30849 = e31057;
var cr30791_exception = e30849;
(cr30791_state[(0)] = null);

throw cr30791_exception;
}});
var cr30655_place_33 = (function (cr30791_state){
try{var cr30791_place_26 = missionary.core.unpark();
(cr30791_state[(0)] = cr30655_place_34);

(cr30791_state[(2)] = cr30791_place_26);

return cr30791_state;
}catch (e31063){var e30866 = e31063;
var cr30791_exception = e30866;
(cr30791_state[(0)] = null);

(cr30791_state[(2)] = null);

throw cr30791_exception;
}});
var cr30655_place_29 = (function (cr30791_state){
try{var cr30791_place_49 = (1);
var cr30791_place_50 = missionary.core.none;
(cr30791_state[(0)] = cr30655_place_16);

return missionary.core.fork(cr30791_place_49,cr30791_place_50);
}catch (e31064){var e30862 = e31064;
var cr30791_exception = e30862;
(cr30791_state[(0)] = null);

(cr30791_state[(2)] = null);

(cr30791_state[(3)] = null);

throw cr30791_exception;
}});
var cr30655_place_19 = (function (cr30791_state){
try{var cr30791_place_11 = (cr30791_state[(1)]);
var cr30791_place_52 = "No matching clause: ";
var cr30791_place_53 = cr30791_place_11;
var cr30791_place_54 = [cr30791_place_52,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr30791_place_53)].join('');
var cr30791_place_55 = (new Error(cr30791_place_54));
var cr30791_place_56 = (function(){throw cr30791_place_55})();
(cr30791_state[(0)] = null);

(cr30791_state[(1)] = null);

return null;
}catch (e31065){var e30835 = e31065;
var cr30791_exception = e30835;
(cr30791_state[(0)] = null);

(cr30791_state[(1)] = null);

throw cr30791_exception;
}});
var cr30655_place_28 = (function (cr30791_state){
try{var cr30791_place_28 = (cr30791_state[(4)]);
var cr30791_place_33 = cr30791_place_28;
var cr30791_place_34 = (1);
var cr30791_place_35 = missionary.core.seed;
var cr30791_place_36 = cljs.core.range;
var cr30791_place_37 = (2);
var cr30791_place_38 = (function (){var G__30859 = cr30791_place_37;
var fexpr__30858 = cr30791_place_36;
var G__31068 = G__30859;
var fexpr__31067 = fexpr__30858;
return (fexpr__31067.cljs$core$IFn$_invoke$arity$1 ? fexpr__31067.cljs$core$IFn$_invoke$arity$1(G__31068) : fexpr__31067.call(null,G__31068));
})();
var cr30791_place_39 = (function (){var G__30861 = cr30791_place_38;
var fexpr__30860 = cr30791_place_35;
var G__31070 = G__30861;
var fexpr__31069 = fexpr__30860;
return (fexpr__31069.cljs$core$IFn$_invoke$arity$1 ? fexpr__31069.cljs$core$IFn$_invoke$arity$1(G__31070) : fexpr__31069.call(null,G__31070));
})();
(cr30791_state[(0)] = cr30655_place_25);

(cr30791_state[(4)] = null);

(cr30791_state[(4)] = cr30791_place_33);

return missionary.core.fork(cr30791_place_34,cr30791_place_39);
}catch (e31066){var e30857 = e31066;
var cr30791_exception = e30857;
(cr30791_state[(0)] = null);

(cr30791_state[(1)] = null);

(cr30791_state[(2)] = null);

(cr30791_state[(3)] = null);

(cr30791_state[(4)] = null);

throw cr30791_exception;
}});
var cr30655_place_18 = (function (cr30791_state){
try{var cr30791_place_42 = (cr30791_state[(1)]);
(cr30791_state[(0)] = cr30655_place_20);

(cr30791_state[(1)] = null);

(cr30791_state[(3)] = cr30791_place_42);

return cr30791_state;
}catch (e31071){var e30834 = e31071;
var cr30791_exception = e30834;
(cr30791_state[(0)] = null);

(cr30791_state[(2)] = null);

(cr30791_state[(3)] = null);

(cr30791_state[(1)] = null);

throw cr30791_exception;
}});
var cr30655_place_30 = (function (cr30791_state){
try{var cr30791_place_23 = missionary.core.unpark();
var cr30791_place_24 = (1);
var cr30791_place_25 = missionary.core.none;
(cr30791_state[(0)] = cr30655_place_33);

return missionary.core.fork(cr30791_place_24,cr30791_place_25);
}catch (e31072){var e30863 = e31072;
var cr30791_exception = e30863;
(cr30791_state[(0)] = null);

(cr30791_state[(2)] = null);

throw cr30791_exception;
}});
var cr30655_place_31 = (function (cr30791_state){
try{var cr30791_place_40 = (cr30791_state[(1)]);
var cr30791_place_44 = "No matching clause: ";
var cr30791_place_45 = cr30791_place_40;
var cr30791_place_46 = [cr30791_place_44,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr30791_place_45)].join('');
var cr30791_place_47 = (new Error(cr30791_place_46));
var cr30791_place_48 = (function(){throw cr30791_place_47})();
(cr30791_state[(0)] = null);

(cr30791_state[(1)] = null);

return null;
}catch (e31073){var e30864 = e31073;
var cr30791_exception = e30864;
(cr30791_state[(0)] = null);

(cr30791_state[(1)] = null);

throw cr30791_exception;
}});
var cr30655_place_21 = (function (cr30791_state){
try{var cr30791_place_33 = (cr30791_state[(4)]);
var cr30791_place_43 = cr30791_place_33;
(cr30791_state[(0)] = cr30655_place_18);

(cr30791_state[(4)] = null);

(cr30791_state[(1)] = cr30791_place_43);

return cr30791_state;
}catch (e31074){var e30837 = e31074;
var cr30791_exception = e30837;
(cr30791_state[(0)] = null);

(cr30791_state[(2)] = null);

(cr30791_state[(3)] = null);

(cr30791_state[(1)] = null);

(cr30791_state[(4)] = null);

throw cr30791_exception;
}});
var cr30655_place_16 = (function (cr30791_state){
try{var cr30791_place_51 = missionary.core.unpark();
(cr30791_state[(0)] = cr30655_place_20);

(cr30791_state[(3)] = cr30791_place_51);

return cr30791_state;
}catch (e31075){var e30832 = e31075;
var cr30791_exception = e30832;
(cr30791_state[(0)] = null);

(cr30791_state[(2)] = null);

(cr30791_state[(3)] = null);

throw cr30791_exception;
}});
var cr30655_place_20 = (function (cr30791_state){
try{var cr30791_place_32 = (cr30791_state[(3)]);
(cr30791_state[(0)] = cr30655_place_34);

(cr30791_state[(3)] = null);

(cr30791_state[(2)] = cr30791_place_32);

return cr30791_state;
}catch (e31076){var e30836 = e31076;
var cr30791_exception = e30836;
(cr30791_state[(0)] = null);

(cr30791_state[(2)] = null);

(cr30791_state[(3)] = null);

throw cr30791_exception;
}});
var cr30655_place_34 = (function (cr30791_state){
try{var cr30791_place_13 = (cr30791_state[(2)]);
(cr30791_state[(0)] = null);

(cr30791_state[(2)] = null);

return cr30791_place_13;
}catch (e31077){var e30867 = e31077;
var cr30791_exception = e30867;
(cr30791_state[(0)] = null);

(cr30791_state[(2)] = null);

throw cr30791_exception;
}});
var cr30655_place_17 = (function (cr30791_state){
try{var cr30791_place_28 = missionary.core.unpark();
var cr30791_place_29 = cr30791_place_28;
var cr30791_place_30 = null;
var cr30791_place_31 = (cr30791_place_29 == cr30791_place_30);
var cr30791_place_32 = null;
if(cr30791_place_31){
(cr30791_state[(0)] = cr30655_place_29);

(cr30791_state[(1)] = null);

(cr30791_state[(3)] = cr30791_place_32);

return cr30791_state;
} else {
(cr30791_state[(0)] = cr30655_place_28);

(cr30791_state[(4)] = cr30791_place_28);

(cr30791_state[(3)] = cr30791_place_32);

return cr30791_state;
}
}catch (e31078){var e30833 = e31078;
var cr30791_exception = e30833;
(cr30791_state[(0)] = null);

(cr30791_state[(1)] = null);

(cr30791_state[(2)] = null);

throw cr30791_exception;
}});
var cr30655_place_24 = (function (cr30791_state){
try{var cr30791_place_4 = (cr30791_state[(1)]);
var cr30791_place_27 = cr30791_place_4;
(cr30791_state[(0)] = cr30655_place_17);

return missionary.core.park(cr30791_place_27);
}catch (e31079){var e30846 = e31079;
var cr30791_exception = e30846;
(cr30791_state[(0)] = null);

(cr30791_state[(1)] = null);

(cr30791_state[(2)] = null);

throw cr30791_exception;
}});
var cr30655_place_23 = (function (cr30791_state){
try{var cr30791_place_4 = (cr30791_state[(1)]);
var cr30791_place_14 = cr30791_place_4;
var cr30791_place_15 = hyperfiddle.electric.impl.runtime.subject_at;
var cr30791_place_16 = cr30655_place_4;
var cr30791_place_17 = (0);
var cr30791_place_18 = (function (){var G__30841 = cr30791_place_16;
var G__30842 = cr30791_place_17;
var fexpr__30840 = cr30791_place_15;
var G__31082 = G__30841;
var G__31083 = G__30842;
var fexpr__31081 = fexpr__30840;
return (fexpr__31081.cljs$core$IFn$_invoke$arity$2 ? fexpr__31081.cljs$core$IFn$_invoke$arity$2(G__31082,G__31083) : fexpr__31081.call(null,G__31082,G__31083));
})();
var cr30791_place_19 = client;
var cr30791_place_20 = cr30791_place_14;
var cr30791_place_21 = cr30791_place_18;
var cr30791_place_22 = (function (){var G__30844 = cr30791_place_20;
var G__30845 = cr30791_place_21;
var fexpr__30843 = cr30791_place_19;
var G__31085 = G__30844;
var G__31086 = G__30845;
var fexpr__31084 = fexpr__30843;
return (fexpr__31084.cljs$core$IFn$_invoke$arity$2 ? fexpr__31084.cljs$core$IFn$_invoke$arity$2(G__31085,G__31086) : fexpr__31084.call(null,G__31085,G__31086));
})();
(cr30791_state[(0)] = cr30655_place_30);

(cr30791_state[(1)] = null);

return missionary.core.park(cr30791_place_22);
}catch (e31080){var e30839 = e31080;
var cr30791_exception = e30839;
(cr30791_state[(0)] = null);

(cr30791_state[(1)] = null);

(cr30791_state[(2)] = null);

throw cr30791_exception;
}});
var cr30655_place_22 = (function (cr30791_state){
try{(cr30791_state[(0)] = cr30655_place_24);

return cr30791_state;
}catch (e31087){var e30838 = e31087;
var cr30791_exception = e30838;
(cr30791_state[(0)] = null);

(cr30791_state[(1)] = null);

(cr30791_state[(2)] = null);

throw cr30791_exception;
}});
var cr30655_place_32 = (function (cr30791_state){
try{(cr30791_state[(0)] = cr30655_place_24);

return cr30791_state;
}catch (e31088){var e30865 = e31088;
var cr30791_exception = e30865;
(cr30791_state[(0)] = null);

(cr30791_state[(1)] = null);

(cr30791_state[(2)] = null);

throw cr30791_exception;
}});
var cr30655_place_35 = cloroutine.impl.coroutine;
var cr30655_place_36 = cljs.core.object_array;
var cr30655_place_37 = (5);
var cr30655_place_38 = (function (){var G__31090 = cr30655_place_37;
var fexpr__31089 = cr30655_place_36;
return (fexpr__31089.cljs$core$IFn$_invoke$arity$1 ? fexpr__31089.cljs$core$IFn$_invoke$arity$1(G__31090) : fexpr__31089.call(null,G__31090));
})();
var cr30655_place_39 = cr30655_place_38;
var cr30655_place_40 = (0);
var cr30655_place_41 = cr30655_place_26;
var cr30655_place_42 = (cr30655_place_39[cr30655_place_40] = cr30655_place_41);
var cr30655_place_43 = cr30655_place_38;
var cr30655_place_44 = (function (){var G__31092 = cr30655_place_43;
var fexpr__31091 = cr30655_place_35;
return (fexpr__31091.cljs$core$IFn$_invoke$arity$1 ? fexpr__31091.cljs$core$IFn$_invoke$arity$1(G__31092) : fexpr__31091.call(null,G__31092));
})();
var cr30655_place_45 = missionary.core.ap_run;
var cr30655_place_46 = (function (){var G__31094 = cr30655_place_44;
var G__31095 = cr30655_place_45;
var fexpr__31093 = cr30655_place_15;
return (fexpr__31093.cljs$core$IFn$_invoke$arity$2 ? fexpr__31093.cljs$core$IFn$_invoke$arity$2(G__31094,G__31095) : fexpr__31093.call(null,G__31094,G__31095));
})();
var cr30655_place_47 = conn;
var cr30655_place_48 = cr30655_place_14;
var cr30655_place_49 = cr30655_place_46;
var cr30655_place_50 = (function (){var G__31097 = cr30655_place_48;
var G__31098 = cr30655_place_49;
var fexpr__31096 = cr30655_place_47;
return (fexpr__31096.cljs$core$IFn$_invoke$arity$2 ? fexpr__31096.cljs$core$IFn$_invoke$arity$2(G__31097,G__31098) : fexpr__31096.call(null,G__31097,G__31098));
})();
(cr30655_state[(0)] = cr30655_block_3);

(cr30655_state[(5)] = null);

return missionary.core.park(cr30655_place_50);
}catch (e31014){var cr30655_exception = e31014;
(cr30655_state[(0)] = cr30655_block_4);

(cr30655_state[(5)] = null);

(cr30655_state[(3)] = cr30655_exception);

return cr30655_state;
}});
var cr30655_block_3 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30655_block_3(cr30655_state){
try{var cr30655_place_51 = missionary.core.unpark();
(cr30655_state[(0)] = cr30655_block_5);

(cr30655_state[(3)] = cr30655_place_51);

return cr30655_state;
}catch (e31099){var cr30655_exception = e31099;
(cr30655_state[(0)] = cr30655_block_4);

(cr30655_state[(3)] = cr30655_exception);

return cr30655_state;
}});
var cr30655_block_19 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30655_block_19(cr30655_state){
try{var cr30655_place_105 = (cr30655_state[(1)]);
(cr30655_state[(0)] = null);

(cr30655_state[(1)] = null);

return cr30655_place_105;
}catch (e31100){var cr30655_exception = e31100;
(cr30655_state[(0)] = null);

(cr30655_state[(1)] = null);

throw cr30655_exception;
}});
var cr30655_block_7 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30655_block_7(cr30655_state){
try{var cr30655_place_64 = (cr30655_state[(3)]);
var cr30655_place_69 = cr30655_place_64;
var cr30655_place_70 = cr30655_place_69;
var cr30655_place_71 = cr30655_place_70;
var cr30655_place_72 = null;
var G__31102 = cr30655_place_71;
switch (G__31102) {
case (1005):
case (1006):
(cr30655_state[(0)] = cr30655_block_8);

(cr30655_state[(3)] = null);

(cr30655_state[(5)] = null);

(cr30655_state[(3)] = cr30655_place_72);

return cr30655_state;

break;
case (1008):
(cr30655_state[(0)] = cr30655_block_9);

(cr30655_state[(3)] = null);

(cr30655_state[(1)] = null);

(cr30655_state[(4)] = null);

(cr30655_state[(5)] = null);

(cr30655_state[(6)] = null);

(cr30655_state[(2)] = null);

return cr30655_state;

break;
default:
(cr30655_state[(0)] = cr30655_block_10);

(cr30655_state[(3)] = null);

(cr30655_state[(1)] = null);

(cr30655_state[(4)] = null);

(cr30655_state[(6)] = null);

(cr30655_state[(2)] = null);

(cr30655_state[(1)] = cr30655_place_69);

return cr30655_state;

}
}catch (e31101){var cr30655_exception = e31101;
(cr30655_state[(0)] = null);

(cr30655_state[(3)] = null);

(cr30655_state[(1)] = null);

(cr30655_state[(4)] = null);

(cr30655_state[(5)] = null);

(cr30655_state[(6)] = null);

(cr30655_state[(2)] = null);

throw cr30655_exception;
}});
var cr30655_block_12 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30655_block_12(cr30655_state){
try{var cr30655_place_1 = (cr30655_state[(1)]);
var cr30655_place_97 = console;
var cr30655_place_98 = "Failed to connect.";
var cr30655_place_99 = cr30655_place_97.log(cr30655_place_98);
var cr30655_place_100 = cr30655_place_1;
(cr30655_state[(0)] = cr30655_block_13);

(cr30655_state[(6)] = cr30655_place_100);

return cr30655_state;
}catch (e31103){var cr30655_exception = e31103;
(cr30655_state[(0)] = null);

(cr30655_state[(1)] = null);

(cr30655_state[(4)] = null);

(cr30655_state[(6)] = null);

(cr30655_state[(2)] = null);

throw cr30655_exception;
}});
var cr30655_block_6 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30655_block_6(cr30655_state){
try{var cr30655_place_56 = (cr30655_state[(3)]);
var cr30655_place_61 = cr30655_place_56;
var cr30655_place_62 = new cljs.core.Keyword(null,"code","code",1586293142);
var cr30655_place_63 = cr30655_place_61;
var cr30655_place_64 = cr30655_place_62.cljs$core$IFn$_invoke$arity$1(cr30655_place_63);
var cr30655_place_65 = cr30655_place_64;
var cr30655_place_66 = null;
var cr30655_place_67 = (cr30655_place_65 == cr30655_place_66);
var cr30655_place_68 = null;
if(cr30655_place_67){
(cr30655_state[(0)] = cr30655_block_12);

(cr30655_state[(3)] = null);

(cr30655_state[(6)] = cr30655_place_68);

return cr30655_state;
} else {
(cr30655_state[(0)] = cr30655_block_7);

(cr30655_state[(3)] = null);

(cr30655_state[(5)] = cr30655_place_61);

(cr30655_state[(3)] = cr30655_place_64);

(cr30655_state[(6)] = cr30655_place_68);

return cr30655_state;
}
}catch (e31104){var cr30655_exception = e31104;
(cr30655_state[(0)] = null);

(cr30655_state[(1)] = null);

(cr30655_state[(3)] = null);

(cr30655_state[(4)] = null);

(cr30655_state[(2)] = null);

throw cr30655_exception;
}});
var cr30655_block_8 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30655_block_8(cr30655_state){
try{var cr30655_place_73 = console;
var cr30655_place_74 = "Connection lost.";
var cr30655_place_75 = cr30655_place_73.log(cr30655_place_74);
var cr30655_place_76 = cljs.core.seq;
var cr30655_place_77 = hyperfiddle.electric_client.retry_delays;
var cr30655_place_78 = (function (){var G__31107 = cr30655_place_77;
var fexpr__31106 = cr30655_place_76;
return (fexpr__31106.cljs$core$IFn$_invoke$arity$1 ? fexpr__31106.cljs$core$IFn$_invoke$arity$1(G__31107) : fexpr__31106.call(null,G__31107));
})();
(cr30655_state[(0)] = cr30655_block_11);

(cr30655_state[(3)] = cr30655_place_78);

return cr30655_state;
}catch (e31105){var cr30655_exception = e31105;
(cr30655_state[(0)] = null);

(cr30655_state[(1)] = null);

(cr30655_state[(4)] = null);

(cr30655_state[(3)] = null);

(cr30655_state[(6)] = null);

(cr30655_state[(2)] = null);

throw cr30655_exception;
}});
var cr30655_block_13 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30655_block_13(cr30655_state){
try{var cr30655_place_68 = (cr30655_state[(6)]);
(cr30655_state[(0)] = cr30655_block_15);

(cr30655_state[(6)] = null);

(cr30655_state[(4)] = cr30655_place_68);

return cr30655_state;
}catch (e31108){var cr30655_exception = e31108;
(cr30655_state[(0)] = null);

(cr30655_state[(1)] = null);

(cr30655_state[(4)] = null);

(cr30655_state[(6)] = null);

(cr30655_state[(2)] = null);

throw cr30655_exception;
}});
var cr30655_block_11 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30655_block_11(cr30655_state){
try{var cr30655_place_72 = (cr30655_state[(3)]);
(cr30655_state[(0)] = cr30655_block_13);

(cr30655_state[(3)] = null);

(cr30655_state[(6)] = cr30655_place_72);

return cr30655_state;
}catch (e31109){var cr30655_exception = e31109;
(cr30655_state[(0)] = null);

(cr30655_state[(1)] = null);

(cr30655_state[(4)] = null);

(cr30655_state[(3)] = null);

(cr30655_state[(6)] = null);

(cr30655_state[(2)] = null);

throw cr30655_exception;
}});
var cr30655_block_17 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30655_block_17(cr30655_state){
try{var cr30655_place_130 = missionary.core.unpark();
(cr30655_state[(0)] = cr30655_block_1);

(cr30655_state[(1)] = cr30655_place_130);

return cr30655_state;
}catch (e31110){var cr30655_exception = e31110;
(cr30655_state[(0)] = null);

(cr30655_state[(1)] = null);

(cr30655_state[(2)] = null);

throw cr30655_exception;
}});
var cr30655_block_9 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30655_block_9(cr30655_state){
try{var cr30655_place_79 = cljs.core.ex_info;
var cr30655_place_80 = "Stale client";
var cr30655_place_81 = new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079);
var cr30655_place_82 = new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405);
var cr30655_place_83 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr30655_place_81,cr30655_place_82]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr30655_place_84 = (function (){var G__31113 = cr30655_place_80;
var G__31114 = cr30655_place_83;
var fexpr__31112 = cr30655_place_79;
return (fexpr__31112.cljs$core$IFn$_invoke$arity$2 ? fexpr__31112.cljs$core$IFn$_invoke$arity$2(G__31113,G__31114) : fexpr__31112.call(null,G__31113,G__31114));
})();
var cr30655_place_85 = (function(){throw cr30655_place_84})();
(cr30655_state[(0)] = null);

return null;
}catch (e31111){var cr30655_exception = e31111;
(cr30655_state[(0)] = null);

throw cr30655_exception;
}});
var cr30655_block_14 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30655_block_14(cr30655_state){
try{var cr30655_place_101 = null;
(cr30655_state[(0)] = cr30655_block_15);

(cr30655_state[(4)] = cr30655_place_101);

return cr30655_state;
}catch (e31115){var cr30655_exception = e31115;
(cr30655_state[(0)] = null);

(cr30655_state[(1)] = null);

(cr30655_state[(4)] = null);

(cr30655_state[(2)] = null);

throw cr30655_exception;
}});
var cr30655_block_10 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30655_block_10(cr30655_state){
try{var cr30655_place_69 = (cr30655_state[(1)]);
var cr30655_place_61 = (cr30655_state[(5)]);
var cr30655_place_86 = cljs.core.ex_info;
var cr30655_place_87 = "Remote error - ";
var cr30655_place_88 = cr30655_place_69;
var cr30655_place_89 = " ";
var cr30655_place_90 = new cljs.core.Keyword(null,"reason","reason",-2070751759);
var cr30655_place_91 = cr30655_place_61;
var cr30655_place_92 = cr30655_place_90.cljs$core$IFn$_invoke$arity$1(cr30655_place_91);
var cr30655_place_93 = [cr30655_place_87,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr30655_place_88),cr30655_place_89,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr30655_place_92)].join('');
var cr30655_place_94 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr30655_place_95 = (function (){var G__31118 = cr30655_place_93;
var G__31119 = cr30655_place_94;
var fexpr__31117 = cr30655_place_86;
return (fexpr__31117.cljs$core$IFn$_invoke$arity$2 ? fexpr__31117.cljs$core$IFn$_invoke$arity$2(G__31118,G__31119) : fexpr__31117.call(null,G__31118,G__31119));
})();
var cr30655_place_96 = (function(){throw cr30655_place_95})();
(cr30655_state[(0)] = null);

(cr30655_state[(1)] = null);

(cr30655_state[(5)] = null);

return null;
}catch (e31116){var cr30655_exception = e31116;
(cr30655_state[(0)] = null);

(cr30655_state[(1)] = null);

(cr30655_state[(5)] = null);

throw cr30655_exception;
}});
var cr30655_block_18 = (function hyperfiddle$electric_client$boot_with_retry_$_cr30655_block_18(cr30655_state){
try{var cr30655_place_131 = null;
(cr30655_state[(0)] = cr30655_block_19);

(cr30655_state[(1)] = cr30655_place_131);

return cr30655_state;
}catch (e31120){var cr30655_exception = e31120;
(cr30655_state[(0)] = null);

(cr30655_state[(1)] = null);

throw cr30655_exception;
}});
return cloroutine.impl.coroutine((function (){var G__31121 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((7));
(G__31121[(0)] = cr30655_block_0);

return G__31121;
})());
})(),missionary.core.sp_run);
});

//# sourceMappingURL=hyperfiddle.electric_client.js.map
