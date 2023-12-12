goog.provide('hyperfiddle.electric_client');
/**
 * @define {string}
 */
hyperfiddle.electric_client.VERSION = goog.define("hyperfiddle.electric_client.VERSION","");
hyperfiddle.electric_client.server_url = (function hyperfiddle$electric_client$server_url(){
var url = (new URL(window.location));
var proto = url.protocol;
(url.protocol = (function (){var G__47907 = proto;
switch (G__47907) {
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
}catch (e47908){var e = e47908;
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));

return (function (){
return cljs.core.List.EMPTY;
});
}});
});
hyperfiddle.electric_client.wait_for_flush = (function hyperfiddle$electric_client$wait_for_flush(ws){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47923_block_0 = (function hyperfiddle$electric_client$wait_for_flush_$_cr47923_block_0(cr47923_state){
try{(cr47923_state[(0)] = cr47923_block_1);

return cr47923_state;
}catch (e47950){var cr47923_exception = e47950;
(cr47923_state[(0)] = null);

throw cr47923_exception;
}});
var cr47923_block_1 = (function hyperfiddle$electric_client$wait_for_flush_$_cr47923_block_1(cr47923_state){
try{var cr47923_place_0 = (4096);
var cr47923_place_1 = ws;
var cr47923_place_2 = cr47923_place_1.bufferedAmount;
var cr47923_place_3 = (cr47923_place_0 < cr47923_place_2);
var cr47923_place_4 = null;
if(cr47923_place_3){
(cr47923_state[(0)] = cr47923_block_3);

return cr47923_state;
} else {
(cr47923_state[(0)] = cr47923_block_2);

(cr47923_state[(1)] = cr47923_place_4);

return cr47923_state;
}
}catch (e47954){var cr47923_exception = e47954;
(cr47923_state[(0)] = null);

throw cr47923_exception;
}});
var cr47923_block_2 = (function hyperfiddle$electric_client$wait_for_flush_$_cr47923_block_2(cr47923_state){
try{var cr47923_place_5 = null;
(cr47923_state[(0)] = cr47923_block_5);

(cr47923_state[(1)] = cr47923_place_5);

return cr47923_state;
}catch (e47956){var cr47923_exception = e47956;
(cr47923_state[(0)] = null);

(cr47923_state[(1)] = null);

throw cr47923_exception;
}});
var cr47923_block_3 = (function hyperfiddle$electric_client$wait_for_flush_$_cr47923_block_3(cr47923_state){
try{var cr47923_place_6 = missionary.core.sleep;
var cr47923_place_7 = (50);
var cr47923_place_8 = (function (){var G__47959 = cr47923_place_7;
var fexpr__47958 = cr47923_place_6;
return (fexpr__47958.cljs$core$IFn$_invoke$arity$1 ? fexpr__47958.cljs$core$IFn$_invoke$arity$1(G__47959) : fexpr__47958.call(null,G__47959));
})();
(cr47923_state[(0)] = cr47923_block_4);

return missionary.core.park(cr47923_place_8);
}catch (e47957){var cr47923_exception = e47957;
(cr47923_state[(0)] = null);

throw cr47923_exception;
}});
var cr47923_block_4 = (function hyperfiddle$electric_client$wait_for_flush_$_cr47923_block_4(cr47923_state){
try{var cr47923_place_9 = missionary.core.unpark();
(cr47923_state[(0)] = cr47923_block_1);

return cr47923_state;
}catch (e47961){var cr47923_exception = e47961;
(cr47923_state[(0)] = null);

throw cr47923_exception;
}});
var cr47923_block_5 = (function hyperfiddle$electric_client$wait_for_flush_$_cr47923_block_5(cr47923_state){
try{var cr47923_place_4 = (cr47923_state[(1)]);
(cr47923_state[(0)] = null);

(cr47923_state[(1)] = null);

return cr47923_place_4;
}catch (e47964){var cr47923_exception = e47964;
(cr47923_state[(0)] = null);

(cr47923_state[(1)] = null);

throw cr47923_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47965 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__47965[(0)] = cr47923_block_0);

return G__47965;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.wait_for_close = (function hyperfiddle$electric_client$wait_for_close(ws){
return (function (s,f){
(ws.onclose = (function (e){
(ws.onclose = null);

var G__47979 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),e.code,new cljs.core.Keyword(null,"reason","reason",-2070751759),e.reason], null);
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__47979) : s.call(null,G__47979));
}));

return (function (){
if((ws.onclose == null)){
return null;
} else {
(ws.onclose = null);

var G__47980 = (new missionary.Cancelled());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__47980) : f.call(null,G__47980));
}
});
});
});
hyperfiddle.electric_client.payload = (function hyperfiddle$electric_client$payload(x){
return x.data;
});
hyperfiddle.electric_client.send_BANG_ = (function hyperfiddle$electric_client$send_BANG_(ws,msg){
var G__47985 = ws;
G__47985.send(msg);

return G__47985;
});
hyperfiddle.electric_client.send_all = (function hyperfiddle$electric_client$send_all(ws,msgs){
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47988_block_0 = (function hyperfiddle$electric_client$send_all_$_cr47988_block_0(cr47988_state){
try{var cr47988_place_0 = hyperfiddle.electric_client.wait_for_flush;
var cr47988_place_1 = hyperfiddle.electric_client.send_BANG_;
var cr47988_place_2 = ws;
var cr47988_place_3 = hyperfiddle.electric.impl.io.encode;
var cr47988_place_4 = (1);
var cr47988_place_5 = msgs;
(cr47988_state[(0)] = cr47988_block_1);

(cr47988_state[(1)] = cr47988_place_0);

(cr47988_state[(4)] = cr47988_place_1);

(cr47988_state[(3)] = cr47988_place_2);

(cr47988_state[(2)] = cr47988_place_3);

return missionary.core.fork(cr47988_place_4,cr47988_place_5);
}catch (e48015){var cr47988_exception = e48015;
(cr47988_state[(0)] = null);

throw cr47988_exception;
}});
var cr47988_block_1 = (function hyperfiddle$electric_client$send_all_$_cr47988_block_1(cr47988_state){
try{var cr47988_place_0 = (cr47988_state[(1)]);
var cr47988_place_3 = (cr47988_state[(2)]);
var cr47988_place_2 = (cr47988_state[(3)]);
var cr47988_place_1 = (cr47988_state[(4)]);
var cr47988_place_6 = missionary.core.unpark();
var cr47988_place_7 = (function (){var G__48019 = cr47988_place_6;
var fexpr__48018 = cr47988_place_3;
return (fexpr__48018.cljs$core$IFn$_invoke$arity$1 ? fexpr__48018.cljs$core$IFn$_invoke$arity$1(G__48019) : fexpr__48018.call(null,G__48019));
})();
var cr47988_place_8 = (function (){var G__48021 = cr47988_place_2;
var G__48022 = cr47988_place_7;
var fexpr__48020 = cr47988_place_1;
return (fexpr__48020.cljs$core$IFn$_invoke$arity$2 ? fexpr__48020.cljs$core$IFn$_invoke$arity$2(G__48021,G__48022) : fexpr__48020.call(null,G__48021,G__48022));
})();
var cr47988_place_9 = (function (){var G__48024 = cr47988_place_8;
var fexpr__48023 = cr47988_place_0;
return (fexpr__48023.cljs$core$IFn$_invoke$arity$1 ? fexpr__48023.cljs$core$IFn$_invoke$arity$1(G__48024) : fexpr__48023.call(null,G__48024));
})();
(cr47988_state[(0)] = cr47988_block_2);

(cr47988_state[(1)] = null);

(cr47988_state[(2)] = null);

(cr47988_state[(3)] = null);

(cr47988_state[(4)] = null);

return missionary.core.park(cr47988_place_9);
}catch (e48017){var cr47988_exception = e48017;
(cr47988_state[(0)] = null);

(cr47988_state[(1)] = null);

(cr47988_state[(2)] = null);

(cr47988_state[(3)] = null);

(cr47988_state[(4)] = null);

throw cr47988_exception;
}});
var cr47988_block_2 = (function hyperfiddle$electric_client$send_all_$_cr47988_block_2(cr47988_state){
try{var cr47988_place_10 = missionary.core.unpark();
(cr47988_state[(0)] = null);

return cr47988_place_10;
}catch (e48025){var cr47988_exception = e48025;
(cr47988_state[(0)] = null);

throw cr47988_exception;
}});
return cloroutine.impl.coroutine((function (){var G__48026 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__48026[(0)] = cr47988_block_0);

return G__48026;
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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr48030_block_0 = (function hyperfiddle$electric_client$connector_$_cr48030_block_0(cr48030_state){
try{var cr48030_place_0 = hyperfiddle.electric_client.connect;
var cr48030_place_1 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr48030_place_2 = (function (){var G__48133 = cr48030_place_1;
var fexpr__48132 = cr48030_place_0;
return (fexpr__48132.cljs$core$IFn$_invoke$arity$1 ? fexpr__48132.cljs$core$IFn$_invoke$arity$1(G__48133) : fexpr__48132.call(null,G__48133));
})();
(cr48030_state[(0)] = cr48030_block_1);

return missionary.core.park(cr48030_place_2);
}catch (e48130){var cr48030_exception = e48130;
(cr48030_state[(0)] = null);

throw cr48030_exception;
}});
var cr48030_block_12 = (function hyperfiddle$electric_client$connector_$_cr48030_block_12(cr48030_state){
try{var cr48030_place_7 = (cr48030_state[(1)]);
(cr48030_state[(0)] = null);

(cr48030_state[(1)] = null);

return cr48030_place_7;
}catch (e48134){var cr48030_exception = e48134;
(cr48030_state[(0)] = null);

(cr48030_state[(1)] = null);

throw cr48030_exception;
}});
var cr48030_block_10 = (function hyperfiddle$electric_client$connector_$_cr48030_block_10(cr48030_state){
try{var cr48030_place_10 = (cr48030_state[(2)]);
var cr48030_place_42 = (cr48030_state[(5)]);
var cr48030_place_9 = (cr48030_state[(3)]);
var cr48030_place_50 = (cljs.core.truth_(cr48030_place_10)?(function(){throw cr48030_place_9})():cr48030_place_9);
(cr48030_state[(0)] = cr48030_block_12);

(cr48030_state[(2)] = null);

(cr48030_state[(5)] = null);

(cr48030_state[(3)] = null);

(cr48030_state[(1)] = cr48030_place_50);

return cr48030_state;
}catch (e48135){var cr48030_exception = e48135;
(cr48030_state[(0)] = null);

(cr48030_state[(2)] = null);

(cr48030_state[(1)] = null);

(cr48030_state[(5)] = null);

(cr48030_state[(3)] = null);

throw cr48030_exception;
}});
var cr48030_block_6 = (function hyperfiddle$electric_client$connector_$_cr48030_block_6(cr48030_state){
try{var cr48030_place_8 = (cr48030_state[(4)]);
var cr48030_place_36 = cljs.core._EQ_;
var cr48030_place_37 = WebSocket;
var cr48030_place_38 = cr48030_place_37.CLOSED;
var cr48030_place_39 = cr48030_place_8;
var cr48030_place_40 = cr48030_place_39.readyState;
var cr48030_place_41 = (function (){var G__48140 = cr48030_place_38;
var G__48141 = cr48030_place_40;
var fexpr__48139 = cr48030_place_36;
return (fexpr__48139.cljs$core$IFn$_invoke$arity$2 ? fexpr__48139.cljs$core$IFn$_invoke$arity$2(G__48140,G__48141) : fexpr__48139.call(null,G__48140,G__48141));
})();
var cr48030_place_42 = null;
if(cljs.core.truth_(cr48030_place_41)){
(cr48030_state[(0)] = cr48030_block_9);

(cr48030_state[(4)] = null);

(cr48030_state[(5)] = cr48030_place_42);

return cr48030_state;
} else {
(cr48030_state[(0)] = cr48030_block_7);

(cr48030_state[(5)] = cr48030_place_42);

return cr48030_state;
}
}catch (e48137){var cr48030_exception = e48137;
(cr48030_state[(0)] = null);

(cr48030_state[(2)] = null);

(cr48030_state[(1)] = null);

(cr48030_state[(3)] = null);

(cr48030_state[(4)] = null);

throw cr48030_exception;
}});
var cr48030_block_9 = (function hyperfiddle$electric_client$connector_$_cr48030_block_9(cr48030_state){
try{var cr48030_place_49 = null;
(cr48030_state[(0)] = cr48030_block_10);

(cr48030_state[(5)] = cr48030_place_49);

return cr48030_state;
}catch (e48142){var cr48030_exception = e48142;
(cr48030_state[(0)] = null);

(cr48030_state[(2)] = null);

(cr48030_state[(1)] = null);

(cr48030_state[(5)] = null);

(cr48030_state[(3)] = null);

throw cr48030_exception;
}});
var cr48030_block_3 = (function hyperfiddle$electric_client$connector_$_cr48030_block_3(cr48030_state){
try{var cr48030_place_8 = (cr48030_state[(4)]);
var cr48030_place_11 = hyperfiddle.electric_client.send_BANG_;
var cr48030_place_12 = cr48030_place_8;
var cr48030_place_13 = hyperfiddle.electric.impl.io.encode;
var cr48030_place_14 = server;
var cr48030_place_15 = (function (){var G__48150 = cr48030_place_14;
var fexpr__48149 = cr48030_place_13;
return (fexpr__48149.cljs$core$IFn$_invoke$arity$1 ? fexpr__48149.cljs$core$IFn$_invoke$arity$1(G__48150) : fexpr__48149.call(null,G__48150));
})();
var cr48030_place_16 = (function (){var G__48155 = cr48030_place_12;
var G__48156 = cr48030_place_15;
var fexpr__48154 = cr48030_place_11;
return (fexpr__48154.cljs$core$IFn$_invoke$arity$2 ? fexpr__48154.cljs$core$IFn$_invoke$arity$2(G__48155,G__48156) : fexpr__48154.call(null,G__48155,G__48156));
})();
var cr48030_place_17 = cr48030_place_8;
var cr48030_place_18 = cljs.core.comp;
var cr48030_place_19 = cb;
var cr48030_place_20 = hyperfiddle.electric.impl.io.decode;
var cr48030_place_21 = hyperfiddle.electric_client.payload;
var cr48030_place_22 = (function (){var G__48158 = cr48030_place_19;
var G__48159 = cr48030_place_20;
var G__48160 = cr48030_place_21;
var fexpr__48157 = cr48030_place_18;
return (fexpr__48157.cljs$core$IFn$_invoke$arity$3 ? fexpr__48157.cljs$core$IFn$_invoke$arity$3(G__48158,G__48159,G__48160) : fexpr__48157.call(null,G__48158,G__48159,G__48160));
})();
var cr48030_place_23 = (cr48030_place_17.onmessage = cr48030_place_22);
var cr48030_place_24 = missionary.core.race;
var cr48030_place_25 = hyperfiddle.electric_client.send_all;
var cr48030_place_26 = cr48030_place_8;
var cr48030_place_27 = msgs;
var cr48030_place_28 = (function (){var G__48164 = cr48030_place_26;
var G__48165 = cr48030_place_27;
var fexpr__48163 = cr48030_place_25;
return (fexpr__48163.cljs$core$IFn$_invoke$arity$2 ? fexpr__48163.cljs$core$IFn$_invoke$arity$2(G__48164,G__48165) : fexpr__48163.call(null,G__48164,G__48165));
})();
var cr48030_place_29 = hyperfiddle.electric_client.wait_for_close;
var cr48030_place_30 = cr48030_place_8;
var cr48030_place_31 = (function (){var G__48167 = cr48030_place_30;
var fexpr__48166 = cr48030_place_29;
return (fexpr__48166.cljs$core$IFn$_invoke$arity$1 ? fexpr__48166.cljs$core$IFn$_invoke$arity$1(G__48167) : fexpr__48166.call(null,G__48167));
})();
var cr48030_place_32 = (function (){var G__48170 = cr48030_place_28;
var G__48171 = cr48030_place_31;
var fexpr__48169 = cr48030_place_24;
return (fexpr__48169.cljs$core$IFn$_invoke$arity$2 ? fexpr__48169.cljs$core$IFn$_invoke$arity$2(G__48170,G__48171) : fexpr__48169.call(null,G__48170,G__48171));
})();
(cr48030_state[(0)] = cr48030_block_4);

return missionary.core.park(cr48030_place_32);
}catch (e48144){var cr48030_exception = e48144;
(cr48030_state[(0)] = cr48030_block_5);

(cr48030_state[(3)] = cr48030_exception);

return cr48030_state;
}});
var cr48030_block_8 = (function hyperfiddle$electric_client$connector_$_cr48030_block_8(cr48030_state){
try{var cr48030_place_48 = missionary.core.unpark();
(cr48030_state[(0)] = cr48030_block_10);

(cr48030_state[(5)] = cr48030_place_48);

return cr48030_state;
}catch (e48173){var cr48030_exception = e48173;
(cr48030_state[(0)] = null);

(cr48030_state[(2)] = null);

(cr48030_state[(1)] = null);

(cr48030_state[(5)] = null);

(cr48030_state[(3)] = null);

throw cr48030_exception;
}});
var cr48030_block_4 = (function hyperfiddle$electric_client$connector_$_cr48030_block_4(cr48030_state){
try{var cr48030_place_33 = missionary.core.unpark();
(cr48030_state[(0)] = cr48030_block_6);

(cr48030_state[(3)] = cr48030_place_33);

return cr48030_state;
}catch (e48174){var cr48030_exception = e48174;
(cr48030_state[(0)] = cr48030_block_5);

(cr48030_state[(3)] = cr48030_exception);

return cr48030_state;
}});
var cr48030_block_5 = (function hyperfiddle$electric_client$connector_$_cr48030_block_5(cr48030_state){
try{var cr48030_place_9 = (cr48030_state[(3)]);
var cr48030_place_34 = cr48030_place_9;
var cr48030_place_35 = (function(){throw cr48030_place_34})();
(cr48030_state[(0)] = null);

(cr48030_state[(2)] = null);

(cr48030_state[(1)] = null);

(cr48030_state[(3)] = null);

(cr48030_state[(4)] = null);

return null;
}catch (e48176){var cr48030_exception = e48176;
(cr48030_state[(0)] = cr48030_block_6);

(cr48030_state[(2)] = true);

(cr48030_state[(3)] = cr48030_exception);

return cr48030_state;
}});
var cr48030_block_11 = (function hyperfiddle$electric_client$connector_$_cr48030_block_11(cr48030_state){
try{var cr48030_place_51 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
(cr48030_state[(0)] = cr48030_block_12);

(cr48030_state[(1)] = cr48030_place_51);

return cr48030_state;
}catch (e48179){var cr48030_exception = e48179;
(cr48030_state[(0)] = null);

(cr48030_state[(1)] = null);

throw cr48030_exception;
}});
var cr48030_block_2 = (function hyperfiddle$electric_client$connector_$_cr48030_block_2(cr48030_state){
try{var cr48030_place_3 = (cr48030_state[(2)]);
var cr48030_place_8 = cr48030_place_3;
var cr48030_place_9 = null;
var cr48030_place_10 = false;
(cr48030_state[(0)] = cr48030_block_3);

(cr48030_state[(2)] = null);

(cr48030_state[(4)] = cr48030_place_8);

(cr48030_state[(3)] = cr48030_place_9);

(cr48030_state[(2)] = cr48030_place_10);

return cr48030_state;
}catch (e48182){var cr48030_exception = e48182;
(cr48030_state[(0)] = null);

(cr48030_state[(1)] = null);

(cr48030_state[(2)] = null);

throw cr48030_exception;
}});
var cr48030_block_7 = (function hyperfiddle$electric_client$connector_$_cr48030_block_7(cr48030_state){
try{var cr48030_place_8 = (cr48030_state[(4)]);
var cr48030_place_43 = cr48030_place_8;
var cr48030_place_44 = cr48030_place_43.close();
var cr48030_place_45 = missionary.core.compel;
var cr48030_place_46 = hyperfiddle.electric_client.wait_for_close;
var cr48030_place_47 = (function (){var G__48185 = cr48030_place_46;
var fexpr__48184 = cr48030_place_45;
return (fexpr__48184.cljs$core$IFn$_invoke$arity$1 ? fexpr__48184.cljs$core$IFn$_invoke$arity$1(G__48185) : fexpr__48184.call(null,G__48185));
})();
(cr48030_state[(0)] = cr48030_block_8);

(cr48030_state[(4)] = null);

return missionary.core.park(cr48030_place_47);
}catch (e48183){var cr48030_exception = e48183;
(cr48030_state[(0)] = null);

(cr48030_state[(2)] = null);

(cr48030_state[(1)] = null);

(cr48030_state[(5)] = null);

(cr48030_state[(3)] = null);

(cr48030_state[(4)] = null);

throw cr48030_exception;
}});
var cr48030_block_1 = (function hyperfiddle$electric_client$connector_$_cr48030_block_1(cr48030_state){
try{var cr48030_place_3 = missionary.core.unpark();
var cr48030_place_4 = cr48030_place_3;
var cr48030_place_5 = null;
var cr48030_place_6 = (cr48030_place_4 == cr48030_place_5);
var cr48030_place_7 = null;
if(cr48030_place_6){
(cr48030_state[(0)] = cr48030_block_11);

(cr48030_state[(1)] = cr48030_place_7);

return cr48030_state;
} else {
(cr48030_state[(0)] = cr48030_block_2);

(cr48030_state[(2)] = cr48030_place_3);

(cr48030_state[(1)] = cr48030_place_7);

return cr48030_state;
}
}catch (e48192){var cr48030_exception = e48192;
(cr48030_state[(0)] = null);

throw cr48030_exception;
}});
return cloroutine.impl.coroutine((function (){var G__48193 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__48193[(0)] = cr48030_block_0);

return G__48193;
})());
})(),missionary.core.sp_run);
});
});
hyperfiddle.electric_client.fib_iter = (function hyperfiddle$electric_client$fib_iter(p__48197){
var vec__48198 = p__48197;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48198,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48198,(1),null);
var G__48201 = b;
switch (G__48201) {
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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr48212_block_9 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48212_block_9(cr48212_state){
try{var cr48212_place_79 = cljs.core.ex_info;
var cr48212_place_80 = "Stale client";
var cr48212_place_81 = new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079);
var cr48212_place_82 = new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405);
var cr48212_place_83 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr48212_place_81,cr48212_place_82]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr48212_place_84 = (function (){var G__48759 = cr48212_place_80;
var G__48760 = cr48212_place_83;
var fexpr__48758 = cr48212_place_79;
return (fexpr__48758.cljs$core$IFn$_invoke$arity$2 ? fexpr__48758.cljs$core$IFn$_invoke$arity$2(G__48759,G__48760) : fexpr__48758.call(null,G__48759,G__48760));
})();
var cr48212_place_85 = (function(){throw cr48212_place_84})();
(cr48212_state[(0)] = null);

return null;
}catch (e48757){var cr48212_exception = e48757;
(cr48212_state[(0)] = null);

throw cr48212_exception;
}});
var cr48212_block_16 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48212_block_16(cr48212_state){
try{var cr48212_place_60 = (cr48212_state[(4)]);
var cr48212_place_106 = cr48212_place_60;
var cr48212_place_107 = cljs.core.seq;
var cr48212_place_108 = cr48212_place_106;
var cr48212_place_109 = (function (){var G__48763 = cr48212_place_108;
var fexpr__48762 = cr48212_place_107;
return (fexpr__48762.cljs$core$IFn$_invoke$arity$1 ? fexpr__48762.cljs$core$IFn$_invoke$arity$1(G__48763) : fexpr__48762.call(null,G__48763));
})();
var cr48212_place_110 = cljs.core.first;
var cr48212_place_111 = cr48212_place_109;
var cr48212_place_112 = (function (){var G__48765 = cr48212_place_111;
var fexpr__48764 = cr48212_place_110;
return (fexpr__48764.cljs$core$IFn$_invoke$arity$1 ? fexpr__48764.cljs$core$IFn$_invoke$arity$1(G__48765) : fexpr__48764.call(null,G__48765));
})();
var cr48212_place_113 = cljs.core.next;
var cr48212_place_114 = cr48212_place_109;
var cr48212_place_115 = (function (){var G__48767 = cr48212_place_114;
var fexpr__48766 = cr48212_place_113;
return (fexpr__48766.cljs$core$IFn$_invoke$arity$1 ? fexpr__48766.cljs$core$IFn$_invoke$arity$1(G__48767) : fexpr__48766.call(null,G__48767));
})();
var cr48212_place_116 = cr48212_place_112;
var cr48212_place_117 = cr48212_place_115;
var cr48212_place_118 = console;
var cr48212_place_119 = "Next attempt in ";
var cr48212_place_120 = cr48212_place_116;
var cr48212_place_121 = (1000);
var cr48212_place_122 = (cr48212_place_120 / cr48212_place_121);
var cr48212_place_123 = " seconds.";
var cr48212_place_124 = [cr48212_place_119,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr48212_place_122),cr48212_place_123].join('');
var cr48212_place_125 = cr48212_place_118.log(cr48212_place_124);
var cr48212_place_126 = missionary.core.sleep;
var cr48212_place_127 = cr48212_place_116;
var cr48212_place_128 = cr48212_place_117;
var cr48212_place_129 = (function (){var G__48769 = cr48212_place_127;
var G__48770 = cr48212_place_128;
var fexpr__48768 = cr48212_place_126;
return (fexpr__48768.cljs$core$IFn$_invoke$arity$2 ? fexpr__48768.cljs$core$IFn$_invoke$arity$2(G__48769,G__48770) : fexpr__48768.call(null,G__48769,G__48770));
})();
(cr48212_state[(0)] = cr48212_block_17);

(cr48212_state[(4)] = null);

return missionary.core.park(cr48212_place_129);
}catch (e48761){var cr48212_exception = e48761;
(cr48212_state[(0)] = null);

(cr48212_state[(1)] = null);

(cr48212_state[(4)] = null);

(cr48212_state[(2)] = null);

throw cr48212_exception;
}});
var cr48212_block_19 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48212_block_19(cr48212_state){
try{var cr48212_place_105 = (cr48212_state[(1)]);
(cr48212_state[(0)] = null);

(cr48212_state[(1)] = null);

return cr48212_place_105;
}catch (e48771){var cr48212_exception = e48771;
(cr48212_state[(0)] = null);

(cr48212_state[(1)] = null);

throw cr48212_exception;
}});
var cr48212_block_1 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48212_block_1(cr48212_state){
try{var cr48212_place_0 = (cr48212_state[(1)]);
var cr48212_place_2 = cljs.core.object_array;
var cr48212_place_3 = (1);
var cr48212_place_4 = (function (){var G__48774 = cr48212_place_3;
var fexpr__48773 = cr48212_place_2;
return (fexpr__48773.cljs$core$IFn$_invoke$arity$1 ? fexpr__48773.cljs$core$IFn$_invoke$arity$1(G__48774) : fexpr__48773.call(null,G__48774));
})();
var cr48212_place_5 = console;
var cr48212_place_6 = "Connecting...";
var cr48212_place_7 = cr48212_place_5.log(cr48212_place_6);
var cr48212_place_8 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr48212_place_9 = cr48212_place_0;
var cr48212_place_10 = cr48212_place_9;
var cr48212_place_11 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr48212_place_10);
var cr48212_place_12 = null;
var cr48212_place_13 = false;
(cr48212_state[(0)] = cr48212_block_2);

(cr48212_state[(3)] = cr48212_place_8);

(cr48212_state[(4)] = cr48212_place_12);

(cr48212_state[(5)] = cr48212_place_4);

(cr48212_state[(6)] = cr48212_place_13);

return cr48212_state;
}catch (e48772){var cr48212_exception = e48772;
(cr48212_state[(0)] = null);

(cr48212_state[(1)] = null);

(cr48212_state[(2)] = null);

throw cr48212_exception;
}});
var cr48212_block_6 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48212_block_6(cr48212_state){
try{var cr48212_place_56 = (cr48212_state[(3)]);
var cr48212_place_61 = cr48212_place_56;
var cr48212_place_62 = new cljs.core.Keyword(null,"code","code",1586293142);
var cr48212_place_63 = cr48212_place_61;
var cr48212_place_64 = cr48212_place_62.cljs$core$IFn$_invoke$arity$1(cr48212_place_63);
var cr48212_place_65 = cr48212_place_64;
var cr48212_place_66 = null;
var cr48212_place_67 = (cr48212_place_65 == cr48212_place_66);
var cr48212_place_68 = null;
if(cr48212_place_67){
(cr48212_state[(0)] = cr48212_block_12);

(cr48212_state[(3)] = null);

(cr48212_state[(3)] = cr48212_place_68);

return cr48212_state;
} else {
(cr48212_state[(0)] = cr48212_block_7);

(cr48212_state[(3)] = null);

(cr48212_state[(5)] = cr48212_place_61);

(cr48212_state[(6)] = cr48212_place_64);

(cr48212_state[(3)] = cr48212_place_68);

return cr48212_state;
}
}catch (e48775){var cr48212_exception = e48775;
(cr48212_state[(0)] = null);

(cr48212_state[(3)] = null);

(cr48212_state[(1)] = null);

(cr48212_state[(4)] = null);

(cr48212_state[(2)] = null);

throw cr48212_exception;
}});
var cr48212_block_0 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48212_block_0(cr48212_state){
try{var cr48212_place_0 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr48212_place_1 = hyperfiddle.electric_client.retry_delays;
(cr48212_state[(0)] = cr48212_block_1);

(cr48212_state[(1)] = cr48212_place_0);

(cr48212_state[(2)] = cr48212_place_1);

return cr48212_state;
}catch (e48776){var cr48212_exception = e48776;
(cr48212_state[(0)] = null);

throw cr48212_exception;
}});
var cr48212_block_10 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48212_block_10(cr48212_state){
try{var cr48212_place_69 = (cr48212_state[(1)]);
var cr48212_place_61 = (cr48212_state[(5)]);
var cr48212_place_86 = cljs.core.ex_info;
var cr48212_place_87 = "Remote error - ";
var cr48212_place_88 = cr48212_place_69;
var cr48212_place_89 = " ";
var cr48212_place_90 = new cljs.core.Keyword(null,"reason","reason",-2070751759);
var cr48212_place_91 = cr48212_place_61;
var cr48212_place_92 = cr48212_place_90.cljs$core$IFn$_invoke$arity$1(cr48212_place_91);
var cr48212_place_93 = [cr48212_place_87,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr48212_place_88),cr48212_place_89,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr48212_place_92)].join('');
var cr48212_place_94 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr48212_place_95 = (function (){var G__48779 = cr48212_place_93;
var G__48780 = cr48212_place_94;
var fexpr__48778 = cr48212_place_86;
return (fexpr__48778.cljs$core$IFn$_invoke$arity$2 ? fexpr__48778.cljs$core$IFn$_invoke$arity$2(G__48779,G__48780) : fexpr__48778.call(null,G__48779,G__48780));
})();
var cr48212_place_96 = (function(){throw cr48212_place_95})();
(cr48212_state[(0)] = null);

(cr48212_state[(1)] = null);

(cr48212_state[(5)] = null);

return null;
}catch (e48777){var cr48212_exception = e48777;
(cr48212_state[(0)] = null);

(cr48212_state[(1)] = null);

(cr48212_state[(5)] = null);

throw cr48212_exception;
}});
var cr48212_block_12 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48212_block_12(cr48212_state){
try{var cr48212_place_1 = (cr48212_state[(2)]);
var cr48212_place_97 = console;
var cr48212_place_98 = "Failed to connect.";
var cr48212_place_99 = cr48212_place_97.log(cr48212_place_98);
var cr48212_place_100 = cr48212_place_1;
(cr48212_state[(0)] = cr48212_block_13);

(cr48212_state[(3)] = cr48212_place_100);

return cr48212_state;
}catch (e48781){var cr48212_exception = e48781;
(cr48212_state[(0)] = null);

(cr48212_state[(3)] = null);

(cr48212_state[(1)] = null);

(cr48212_state[(4)] = null);

(cr48212_state[(2)] = null);

throw cr48212_exception;
}});
var cr48212_block_8 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48212_block_8(cr48212_state){
try{var cr48212_place_73 = console;
var cr48212_place_74 = "Connection lost.";
var cr48212_place_75 = cr48212_place_73.log(cr48212_place_74);
var cr48212_place_76 = cljs.core.seq;
var cr48212_place_77 = hyperfiddle.electric_client.retry_delays;
var cr48212_place_78 = (function (){var G__48784 = cr48212_place_77;
var fexpr__48783 = cr48212_place_76;
return (fexpr__48783.cljs$core$IFn$_invoke$arity$1 ? fexpr__48783.cljs$core$IFn$_invoke$arity$1(G__48784) : fexpr__48783.call(null,G__48784));
})();
(cr48212_state[(0)] = cr48212_block_11);

(cr48212_state[(5)] = cr48212_place_78);

return cr48212_state;
}catch (e48782){var cr48212_exception = e48782;
(cr48212_state[(0)] = null);

(cr48212_state[(3)] = null);

(cr48212_state[(5)] = null);

(cr48212_state[(1)] = null);

(cr48212_state[(4)] = null);

(cr48212_state[(2)] = null);

throw cr48212_exception;
}});
var cr48212_block_4 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48212_block_4(cr48212_state){
try{var cr48212_place_12 = (cr48212_state[(4)]);
var cr48212_place_52 = cr48212_place_12;
var cr48212_place_53 = (function(){throw cr48212_place_52})();
(cr48212_state[(0)] = null);

(cr48212_state[(3)] = null);

(cr48212_state[(1)] = null);

(cr48212_state[(4)] = null);

(cr48212_state[(2)] = null);

(cr48212_state[(6)] = null);

return null;
}catch (e48785){var cr48212_exception = e48785;
(cr48212_state[(0)] = cr48212_block_5);

(cr48212_state[(6)] = true);

(cr48212_state[(4)] = cr48212_exception);

return cr48212_state;
}});
var cr48212_block_7 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48212_block_7(cr48212_state){
try{var cr48212_place_64 = (cr48212_state[(6)]);
var cr48212_place_69 = cr48212_place_64;
var cr48212_place_70 = cr48212_place_69;
var cr48212_place_71 = cr48212_place_70;
var cr48212_place_72 = null;
var G__48787 = cr48212_place_71;
switch (G__48787) {
case (1005):
case (1006):
(cr48212_state[(0)] = cr48212_block_8);

(cr48212_state[(5)] = null);

(cr48212_state[(6)] = null);

(cr48212_state[(5)] = cr48212_place_72);

return cr48212_state;

break;
case (1008):
(cr48212_state[(0)] = cr48212_block_9);

(cr48212_state[(3)] = null);

(cr48212_state[(5)] = null);

(cr48212_state[(1)] = null);

(cr48212_state[(4)] = null);

(cr48212_state[(2)] = null);

(cr48212_state[(6)] = null);

return cr48212_state;

break;
default:
(cr48212_state[(0)] = cr48212_block_10);

(cr48212_state[(3)] = null);

(cr48212_state[(1)] = null);

(cr48212_state[(4)] = null);

(cr48212_state[(2)] = null);

(cr48212_state[(6)] = null);

(cr48212_state[(1)] = cr48212_place_69);

return cr48212_state;

}
}catch (e48786){var cr48212_exception = e48786;
(cr48212_state[(0)] = null);

(cr48212_state[(3)] = null);

(cr48212_state[(5)] = null);

(cr48212_state[(1)] = null);

(cr48212_state[(4)] = null);

(cr48212_state[(2)] = null);

(cr48212_state[(6)] = null);

throw cr48212_exception;
}});
var cr48212_block_13 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48212_block_13(cr48212_state){
try{var cr48212_place_68 = (cr48212_state[(3)]);
(cr48212_state[(0)] = cr48212_block_15);

(cr48212_state[(3)] = null);

(cr48212_state[(4)] = cr48212_place_68);

return cr48212_state;
}catch (e48788){var cr48212_exception = e48788;
(cr48212_state[(0)] = null);

(cr48212_state[(3)] = null);

(cr48212_state[(1)] = null);

(cr48212_state[(4)] = null);

(cr48212_state[(2)] = null);

throw cr48212_exception;
}});
var cr48212_block_11 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48212_block_11(cr48212_state){
try{var cr48212_place_72 = (cr48212_state[(5)]);
(cr48212_state[(0)] = cr48212_block_13);

(cr48212_state[(5)] = null);

(cr48212_state[(3)] = cr48212_place_72);

return cr48212_state;
}catch (e48789){var cr48212_exception = e48789;
(cr48212_state[(0)] = null);

(cr48212_state[(3)] = null);

(cr48212_state[(5)] = null);

(cr48212_state[(1)] = null);

(cr48212_state[(4)] = null);

(cr48212_state[(2)] = null);

throw cr48212_exception;
}});
var cr48212_block_3 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48212_block_3(cr48212_state){
try{var cr48212_place_51 = missionary.core.unpark();
(cr48212_state[(0)] = cr48212_block_5);

(cr48212_state[(4)] = cr48212_place_51);

return cr48212_state;
}catch (e48790){var cr48212_exception = e48790;
(cr48212_state[(0)] = cr48212_block_4);

(cr48212_state[(4)] = cr48212_exception);

return cr48212_state;
}});
var cr48212_block_15 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48212_block_15(cr48212_state){
try{var cr48212_place_60 = (cr48212_state[(4)]);
var cr48212_place_102 = cr48212_place_60;
var cr48212_place_103 = null;
var cr48212_place_104 = (cr48212_place_102 == cr48212_place_103);
var cr48212_place_105 = null;
if(cr48212_place_104){
(cr48212_state[(0)] = cr48212_block_18);

(cr48212_state[(1)] = null);

(cr48212_state[(4)] = null);

(cr48212_state[(2)] = null);

(cr48212_state[(1)] = cr48212_place_105);

return cr48212_state;
} else {
(cr48212_state[(0)] = cr48212_block_16);

return cr48212_state;
}
}catch (e48791){var cr48212_exception = e48791;
(cr48212_state[(0)] = null);

(cr48212_state[(1)] = null);

(cr48212_state[(4)] = null);

(cr48212_state[(2)] = null);

throw cr48212_exception;
}});
var cr48212_block_18 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48212_block_18(cr48212_state){
try{var cr48212_place_131 = null;
(cr48212_state[(0)] = cr48212_block_19);

(cr48212_state[(1)] = cr48212_place_131);

return cr48212_state;
}catch (e48792){var cr48212_exception = e48792;
(cr48212_state[(0)] = null);

(cr48212_state[(1)] = null);

throw cr48212_exception;
}});
var cr48212_block_17 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48212_block_17(cr48212_state){
try{var cr48212_place_130 = missionary.core.unpark();
(cr48212_state[(0)] = cr48212_block_1);

(cr48212_state[(2)] = cr48212_place_130);

return cr48212_state;
}catch (e48793){var cr48212_exception = e48793;
(cr48212_state[(0)] = null);

(cr48212_state[(1)] = null);

(cr48212_state[(2)] = null);

throw cr48212_exception;
}});
var cr48212_block_14 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48212_block_14(cr48212_state){
try{var cr48212_place_101 = null;
(cr48212_state[(0)] = cr48212_block_15);

(cr48212_state[(4)] = cr48212_place_101);

return cr48212_state;
}catch (e48794){var cr48212_exception = e48794;
(cr48212_state[(0)] = null);

(cr48212_state[(1)] = null);

(cr48212_state[(4)] = null);

(cr48212_state[(2)] = null);

throw cr48212_exception;
}});
var cr48212_block_2 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48212_block_2(cr48212_state){
try{var cr48212_place_4 = (cr48212_state[(5)]);
var cr48212_place_14 = (function (x){
var fexpr__48363 = (cr48212_place_4[(0)]);
var G__48797 = x;
var fexpr__48796 = fexpr__48363;
return (fexpr__48796.cljs$core$IFn$_invoke$arity$1 ? fexpr__48796.cljs$core$IFn$_invoke$arity$1(G__48797) : fexpr__48796.call(null,G__48797));
});
var cr48212_place_15 = cljs.core.partial;
var cr48212_place_20 = (function (cr48365_state){
try{var cr48365_place_0 = console;
var cr48365_place_1 = "Connected.";
var cr48365_place_2 = cr48365_place_0.log(cr48365_place_1);
var cr48365_place_3 = missionary.core.rdv;
var cr48365_place_4 = (function (){var fexpr__48460 = cr48365_place_3;
var fexpr__48835 = fexpr__48460;
return (fexpr__48835.cljs$core$IFn$_invoke$arity$0 ? fexpr__48835.cljs$core$IFn$_invoke$arity$0() : fexpr__48835.call(null));
})();
var cr48365_place_5 = (2);
var cr48365_place_6 = missionary.core.seed;
var cr48365_place_7 = cljs.core.range;
var cr48365_place_8 = (2);
var cr48365_place_9 = (function (){var G__48462 = cr48365_place_8;
var fexpr__48461 = cr48365_place_7;
var G__48837 = G__48462;
var fexpr__48836 = fexpr__48461;
return (fexpr__48836.cljs$core$IFn$_invoke$arity$1 ? fexpr__48836.cljs$core$IFn$_invoke$arity$1(G__48837) : fexpr__48836.call(null,G__48837));
})();
var cr48365_place_10 = (function (){var G__48464 = cr48365_place_9;
var fexpr__48463 = cr48365_place_6;
var G__48839 = G__48464;
var fexpr__48838 = fexpr__48463;
return (fexpr__48838.cljs$core$IFn$_invoke$arity$1 ? fexpr__48838.cljs$core$IFn$_invoke$arity$1(G__48839) : fexpr__48838.call(null,G__48839));
})();
(cr48365_state[(0)] = cr48212_place_32);

(cr48365_state[(1)] = cr48365_place_4);

return missionary.core.fork(cr48365_place_5,cr48365_place_10);
}catch (e48834){var e48459 = e48834;
var cr48365_exception = e48459;
(cr48365_state[(0)] = null);

throw cr48365_exception;
}});
var cr48212_place_23 = (function (cr48365_state){
try{var cr48365_place_4 = (cr48365_state[(1)]);
var cr48365_place_27 = cr48365_place_4;
(cr48365_state[(0)] = cr48212_place_31);

return missionary.core.park(cr48365_place_27);
}catch (e48840){var e48468 = e48840;
var cr48365_exception = e48468;
(cr48365_state[(0)] = null);

(cr48365_state[(1)] = null);

(cr48365_state[(2)] = null);

throw cr48365_exception;
}});
var cr48212_place_18 = (function (cr48365_state){
try{var cr48365_place_26 = missionary.core.unpark();
(cr48365_state[(0)] = cr48212_place_21);

(cr48365_state[(2)] = cr48365_place_26);

return cr48365_state;
}catch (e48841){var e48454 = e48841;
var cr48365_exception = e48454;
(cr48365_state[(0)] = null);

(cr48365_state[(2)] = null);

throw cr48365_exception;
}});
var cr48212_place_19 = (function (cr48365_state){
try{var cr48365_place_42 = (cr48365_state[(1)]);
(cr48365_state[(0)] = cr48212_place_16);

(cr48365_state[(1)] = null);

(cr48365_state[(3)] = cr48365_place_42);

return cr48365_state;
}catch (e48842){var e48457 = e48842;
var cr48365_exception = e48457;
(cr48365_state[(0)] = null);

(cr48365_state[(3)] = null);

(cr48365_state[(2)] = null);

(cr48365_state[(1)] = null);

throw cr48365_exception;
}});
var cr48212_place_24 = (function (cr48365_state){
try{var cr48365_place_33 = (cr48365_state[(4)]);
var cr48365_place_43 = cr48365_place_33;
(cr48365_state[(0)] = cr48212_place_19);

(cr48365_state[(4)] = null);

(cr48365_state[(1)] = cr48365_place_43);

return cr48365_state;
}catch (e48843){var e48469 = e48843;
var cr48365_exception = e48469;
(cr48365_state[(0)] = null);

(cr48365_state[(3)] = null);

(cr48365_state[(2)] = null);

(cr48365_state[(4)] = null);

(cr48365_state[(1)] = null);

throw cr48365_exception;
}});
var cr48212_place_33 = (function (cr48365_state){
try{var cr48365_place_11 = (cr48365_state[(1)]);
var cr48365_place_52 = "No matching clause: ";
var cr48365_place_53 = cr48365_place_11;
var cr48365_place_54 = [cr48365_place_52,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr48365_place_53)].join('');
var cr48365_place_55 = (new Error(cr48365_place_54));
var cr48365_place_56 = (function(){throw cr48365_place_55})();
(cr48365_state[(0)] = null);

(cr48365_state[(1)] = null);

return null;
}catch (e48844){var e48509 = e48844;
var cr48365_exception = e48509;
(cr48365_state[(0)] = null);

(cr48365_state[(1)] = null);

throw cr48365_exception;
}});
var cr48212_place_28 = (function (cr48365_state){
try{var cr48365_place_40 = (cr48365_state[(1)]);
var cr48365_place_44 = "No matching clause: ";
var cr48365_place_45 = cr48365_place_40;
var cr48365_place_46 = [cr48365_place_44,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr48365_place_45)].join('');
var cr48365_place_47 = (new Error(cr48365_place_46));
var cr48365_place_48 = (function(){throw cr48365_place_47})();
(cr48365_state[(0)] = null);

(cr48365_state[(1)] = null);

return null;
}catch (e48845){var e48494 = e48845;
var cr48365_exception = e48494;
(cr48365_state[(0)] = null);

(cr48365_state[(1)] = null);

throw cr48365_exception;
}});
var cr48212_place_32 = (function (cr48365_state){
try{var cr48365_place_11 = missionary.core.unpark();
var cr48365_place_12 = cr48365_place_11;
var cr48365_place_13 = null;
var G__48506 = cr48365_place_12;
var G__48847 = G__48506;
switch (G__48847) {
case (0):
(cr48365_state[(0)] = cr48212_place_25);

(cr48365_state[(2)] = cr48365_place_13);

return cr48365_state;

break;
case (1):
(cr48365_state[(0)] = cr48212_place_27);

(cr48365_state[(2)] = cr48365_place_13);

return cr48365_state;

break;
default:
(cr48365_state[(0)] = cr48212_place_33);

(cr48365_state[(1)] = null);

(cr48365_state[(1)] = cr48365_place_11);

return cr48365_state;

}
}catch (e48846){var e48505 = e48846;
var cr48365_exception = e48505;
(cr48365_state[(0)] = null);

(cr48365_state[(1)] = null);

throw cr48365_exception;
}});
var cr48212_place_34 = (function (cr48365_state){
try{(cr48365_state[(0)] = cr48212_place_23);

return cr48365_state;
}catch (e48848){var e48513 = e48848;
var cr48365_exception = e48513;
(cr48365_state[(0)] = null);

(cr48365_state[(1)] = null);

(cr48365_state[(2)] = null);

throw cr48365_exception;
}});
var cr48212_place_22 = (function (cr48365_state){
try{var cr48365_place_51 = missionary.core.unpark();
(cr48365_state[(0)] = cr48212_place_16);

(cr48365_state[(3)] = cr48365_place_51);

return cr48365_state;
}catch (e48849){var e48466 = e48849;
var cr48365_exception = e48466;
(cr48365_state[(0)] = null);

(cr48365_state[(3)] = null);

(cr48365_state[(2)] = null);

throw cr48365_exception;
}});
var cr48212_place_29 = (function (cr48365_state){
try{var cr48365_place_23 = missionary.core.unpark();
var cr48365_place_24 = (1);
var cr48365_place_25 = missionary.core.none;
(cr48365_state[(0)] = cr48212_place_18);

return missionary.core.fork(cr48365_place_24,cr48365_place_25);
}catch (e48850){var e48501 = e48850;
var cr48365_exception = e48501;
(cr48365_state[(0)] = null);

(cr48365_state[(2)] = null);

throw cr48365_exception;
}});
var cr48212_place_25 = (function (cr48365_state){
try{var cr48365_place_4 = (cr48365_state[(1)]);
var cr48365_place_14 = cr48365_place_4;
var cr48365_place_15 = hyperfiddle.electric.impl.runtime.subject_at;
var cr48365_place_16 = cr48212_place_4;
var cr48365_place_17 = (0);
var cr48365_place_18 = (function (){var G__48474 = cr48365_place_16;
var G__48475 = cr48365_place_17;
var fexpr__48473 = cr48365_place_15;
var G__48853 = G__48474;
var G__48854 = G__48475;
var fexpr__48852 = fexpr__48473;
return (fexpr__48852.cljs$core$IFn$_invoke$arity$2 ? fexpr__48852.cljs$core$IFn$_invoke$arity$2(G__48853,G__48854) : fexpr__48852.call(null,G__48853,G__48854));
})();
var cr48365_place_19 = client;
var cr48365_place_20 = cr48365_place_14;
var cr48365_place_21 = cr48365_place_18;
var cr48365_place_22 = (function (){var G__48477 = cr48365_place_20;
var G__48478 = cr48365_place_21;
var fexpr__48476 = cr48365_place_19;
var G__48856 = G__48477;
var G__48857 = G__48478;
var fexpr__48855 = fexpr__48476;
return (fexpr__48855.cljs$core$IFn$_invoke$arity$2 ? fexpr__48855.cljs$core$IFn$_invoke$arity$2(G__48856,G__48857) : fexpr__48855.call(null,G__48856,G__48857));
})();
(cr48365_state[(0)] = cr48212_place_29);

(cr48365_state[(1)] = null);

return missionary.core.park(cr48365_place_22);
}catch (e48851){var e48472 = e48851;
var cr48365_exception = e48472;
(cr48365_state[(0)] = null);

(cr48365_state[(1)] = null);

(cr48365_state[(2)] = null);

throw cr48365_exception;
}});
var cr48212_place_26 = (function (cr48365_state){
try{var cr48365_place_28 = (cr48365_state[(4)]);
var cr48365_place_33 = cr48365_place_28;
var cr48365_place_34 = (1);
var cr48365_place_35 = missionary.core.seed;
var cr48365_place_36 = cljs.core.range;
var cr48365_place_37 = (2);
var cr48365_place_38 = (function (){var G__48483 = cr48365_place_37;
var fexpr__48482 = cr48365_place_36;
var G__48860 = G__48483;
var fexpr__48859 = fexpr__48482;
return (fexpr__48859.cljs$core$IFn$_invoke$arity$1 ? fexpr__48859.cljs$core$IFn$_invoke$arity$1(G__48860) : fexpr__48859.call(null,G__48860));
})();
var cr48365_place_39 = (function (){var G__48487 = cr48365_place_38;
var fexpr__48486 = cr48365_place_35;
var G__48862 = G__48487;
var fexpr__48861 = fexpr__48486;
return (fexpr__48861.cljs$core$IFn$_invoke$arity$1 ? fexpr__48861.cljs$core$IFn$_invoke$arity$1(G__48862) : fexpr__48861.call(null,G__48862));
})();
(cr48365_state[(0)] = cr48212_place_17);

(cr48365_state[(4)] = null);

(cr48365_state[(4)] = cr48365_place_33);

return missionary.core.fork(cr48365_place_34,cr48365_place_39);
}catch (e48858){var e48480 = e48858;
var cr48365_exception = e48480;
(cr48365_state[(0)] = null);

(cr48365_state[(3)] = null);

(cr48365_state[(4)] = null);

(cr48365_state[(1)] = null);

(cr48365_state[(2)] = null);

throw cr48365_exception;
}});
var cr48212_place_16 = (function (cr48365_state){
try{var cr48365_place_32 = (cr48365_state[(3)]);
(cr48365_state[(0)] = cr48212_place_21);

(cr48365_state[(3)] = null);

(cr48365_state[(2)] = cr48365_place_32);

return cr48365_state;
}catch (e48863){var e48449 = e48863;
var cr48365_exception = e48449;
(cr48365_state[(0)] = null);

(cr48365_state[(3)] = null);

(cr48365_state[(2)] = null);

throw cr48365_exception;
}});
var cr48212_place_17 = (function (cr48365_state){
try{var cr48365_place_40 = missionary.core.unpark();
var cr48365_place_41 = cr48365_place_40;
var cr48365_place_42 = null;
var G__48451 = cr48365_place_41;
var G__48865 = G__48451;
switch (G__48865) {
case (0):
(cr48365_state[(0)] = cr48212_place_24);

(cr48365_state[(1)] = null);

(cr48365_state[(1)] = cr48365_place_42);

return cr48365_state;

break;
case (1):
(cr48365_state[(0)] = cr48212_place_34);

(cr48365_state[(3)] = null);

(cr48365_state[(4)] = null);

return cr48365_state;

break;
default:
(cr48365_state[(0)] = cr48212_place_28);

(cr48365_state[(3)] = null);

(cr48365_state[(1)] = null);

(cr48365_state[(2)] = null);

(cr48365_state[(4)] = null);

(cr48365_state[(1)] = cr48365_place_40);

return cr48365_state;

}
}catch (e48864){var e48450 = e48864;
var cr48365_exception = e48450;
(cr48365_state[(0)] = null);

(cr48365_state[(3)] = null);

(cr48365_state[(1)] = null);

(cr48365_state[(2)] = null);

(cr48365_state[(4)] = null);

throw cr48365_exception;
}});
var cr48212_place_31 = (function (cr48365_state){
try{var cr48365_place_28 = missionary.core.unpark();
var cr48365_place_29 = cr48365_place_28;
var cr48365_place_30 = null;
var cr48365_place_31 = (cr48365_place_29 == cr48365_place_30);
var cr48365_place_32 = null;
if(cr48365_place_31){
(cr48365_state[(0)] = cr48212_place_30);

(cr48365_state[(1)] = null);

(cr48365_state[(3)] = cr48365_place_32);

return cr48365_state;
} else {
(cr48365_state[(0)] = cr48212_place_26);

(cr48365_state[(4)] = cr48365_place_28);

(cr48365_state[(3)] = cr48365_place_32);

return cr48365_state;
}
}catch (e48866){var e48503 = e48866;
var cr48365_exception = e48503;
(cr48365_state[(0)] = null);

(cr48365_state[(1)] = null);

(cr48365_state[(2)] = null);

throw cr48365_exception;
}});
var cr48212_place_30 = (function (cr48365_state){
try{var cr48365_place_49 = (1);
var cr48365_place_50 = missionary.core.none;
(cr48365_state[(0)] = cr48212_place_22);

return missionary.core.fork(cr48365_place_49,cr48365_place_50);
}catch (e48867){var e48502 = e48867;
var cr48365_exception = e48502;
(cr48365_state[(0)] = null);

(cr48365_state[(3)] = null);

(cr48365_state[(2)] = null);

throw cr48365_exception;
}});
var cr48212_place_21 = (function (cr48365_state){
try{var cr48365_place_13 = (cr48365_state[(2)]);
(cr48365_state[(0)] = null);

(cr48365_state[(2)] = null);

return cr48365_place_13;
}catch (e48868){var e48465 = e48868;
var cr48365_exception = e48465;
(cr48365_state[(0)] = null);

(cr48365_state[(2)] = null);

throw cr48365_exception;
}});
var cr48212_place_27 = (function (cr48365_state){
try{(cr48365_state[(0)] = cr48212_place_23);

return cr48365_state;
}catch (e48869){var e48488 = e48869;
var cr48365_exception = e48488;
(cr48365_state[(0)] = null);

(cr48365_state[(1)] = null);

(cr48365_state[(2)] = null);

throw cr48365_exception;
}});
var cr48212_place_35 = cloroutine.impl.coroutine;
var cr48212_place_36 = cljs.core.object_array;
var cr48212_place_37 = (5);
var cr48212_place_38 = (function (){var G__48871 = cr48212_place_37;
var fexpr__48870 = cr48212_place_36;
return (fexpr__48870.cljs$core$IFn$_invoke$arity$1 ? fexpr__48870.cljs$core$IFn$_invoke$arity$1(G__48871) : fexpr__48870.call(null,G__48871));
})();
var cr48212_place_39 = cr48212_place_38;
var cr48212_place_40 = (0);
var cr48212_place_41 = cr48212_place_20;
var cr48212_place_42 = (cr48212_place_39[cr48212_place_40] = cr48212_place_41);
var cr48212_place_43 = cr48212_place_38;
var cr48212_place_44 = (function (){var G__48873 = cr48212_place_43;
var fexpr__48872 = cr48212_place_35;
return (fexpr__48872.cljs$core$IFn$_invoke$arity$1 ? fexpr__48872.cljs$core$IFn$_invoke$arity$1(G__48873) : fexpr__48872.call(null,G__48873));
})();
var cr48212_place_45 = missionary.core.ap_run;
var cr48212_place_46 = (function (){var G__48875 = cr48212_place_44;
var G__48876 = cr48212_place_45;
var fexpr__48874 = cr48212_place_15;
return (fexpr__48874.cljs$core$IFn$_invoke$arity$2 ? fexpr__48874.cljs$core$IFn$_invoke$arity$2(G__48875,G__48876) : fexpr__48874.call(null,G__48875,G__48876));
})();
var cr48212_place_47 = conn;
var cr48212_place_48 = cr48212_place_14;
var cr48212_place_49 = cr48212_place_46;
var cr48212_place_50 = (function (){var G__48878 = cr48212_place_48;
var G__48879 = cr48212_place_49;
var fexpr__48877 = cr48212_place_47;
return (fexpr__48877.cljs$core$IFn$_invoke$arity$2 ? fexpr__48877.cljs$core$IFn$_invoke$arity$2(G__48878,G__48879) : fexpr__48877.call(null,G__48878,G__48879));
})();
(cr48212_state[(0)] = cr48212_block_3);

(cr48212_state[(5)] = null);

return missionary.core.park(cr48212_place_50);
}catch (e48795){var cr48212_exception = e48795;
(cr48212_state[(0)] = cr48212_block_4);

(cr48212_state[(5)] = null);

(cr48212_state[(4)] = cr48212_exception);

return cr48212_state;
}});
var cr48212_block_5 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48212_block_5(cr48212_state){
try{var cr48212_place_8 = (cr48212_state[(3)]);
var cr48212_place_12 = (cr48212_state[(4)]);
var cr48212_place_13 = (cr48212_state[(6)]);
var cr48212_place_54 = cr48212_place_8;
var cr48212_place_55 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr48212_place_54);
var cr48212_place_56 = (cljs.core.truth_(cr48212_place_13)?(function(){throw cr48212_place_12})():cr48212_place_12);
var cr48212_place_57 = cr48212_place_56;
var cr48212_place_58 = null;
var cr48212_place_59 = (cr48212_place_57 == cr48212_place_58);
var cr48212_place_60 = null;
if(cr48212_place_59){
(cr48212_state[(0)] = cr48212_block_14);

(cr48212_state[(3)] = null);

(cr48212_state[(4)] = null);

(cr48212_state[(6)] = null);

(cr48212_state[(4)] = cr48212_place_60);

return cr48212_state;
} else {
(cr48212_state[(0)] = cr48212_block_6);

(cr48212_state[(3)] = null);

(cr48212_state[(4)] = null);

(cr48212_state[(6)] = null);

(cr48212_state[(3)] = cr48212_place_56);

(cr48212_state[(4)] = cr48212_place_60);

return cr48212_state;
}
}catch (e48880){var cr48212_exception = e48880;
(cr48212_state[(0)] = null);

(cr48212_state[(3)] = null);

(cr48212_state[(1)] = null);

(cr48212_state[(4)] = null);

(cr48212_state[(2)] = null);

(cr48212_state[(6)] = null);

throw cr48212_exception;
}});
return cloroutine.impl.coroutine((function (){var G__48881 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((7));
(G__48881[(0)] = cr48212_block_0);

return G__48881;
})());
})(),missionary.core.sp_run);
});

//# sourceMappingURL=hyperfiddle.electric_client.js.map
