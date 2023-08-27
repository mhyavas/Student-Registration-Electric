goog.provide('hyperfiddle.electric_client');
/**
 * @define {string}
 */
hyperfiddle.electric_client.VERSION = goog.define("hyperfiddle.electric_client.VERSION","");
hyperfiddle.electric_client.server_url = (function hyperfiddle$electric_client$server_url(){
var url = (new URL(window.location));
var proto = url.protocol;
(url.protocol = (function (){var G__44556 = proto;
switch (G__44556) {
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
}catch (e44560){var e = e44560;
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));

return (function (){
return cljs.core.List.EMPTY;
});
}});
});
hyperfiddle.electric_client.wait_for_flush = (function hyperfiddle$electric_client$wait_for_flush(ws){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44580_block_0 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44580_block_0(cr44580_state){
try{(cr44580_state[(0)] = cr44580_block_1);

return cr44580_state;
}catch (e44611){var cr44580_exception = e44611;
(cr44580_state[(0)] = null);

throw cr44580_exception;
}});
var cr44580_block_1 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44580_block_1(cr44580_state){
try{var cr44580_place_0 = (4096);
var cr44580_place_1 = ws;
var cr44580_place_2 = cr44580_place_1.bufferedAmount;
var cr44580_place_3 = (cr44580_place_0 < cr44580_place_2);
var cr44580_place_4 = null;
if(cr44580_place_3){
(cr44580_state[(0)] = cr44580_block_3);

return cr44580_state;
} else {
(cr44580_state[(0)] = cr44580_block_2);

(cr44580_state[(1)] = cr44580_place_4);

return cr44580_state;
}
}catch (e44613){var cr44580_exception = e44613;
(cr44580_state[(0)] = null);

throw cr44580_exception;
}});
var cr44580_block_2 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44580_block_2(cr44580_state){
try{var cr44580_place_5 = null;
(cr44580_state[(0)] = cr44580_block_5);

(cr44580_state[(1)] = cr44580_place_5);

return cr44580_state;
}catch (e44615){var cr44580_exception = e44615;
(cr44580_state[(0)] = null);

(cr44580_state[(1)] = null);

throw cr44580_exception;
}});
var cr44580_block_3 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44580_block_3(cr44580_state){
try{var cr44580_place_6 = missionary.core.sleep;
var cr44580_place_7 = (50);
var cr44580_place_8 = (function (){var G__44618 = cr44580_place_7;
var fexpr__44617 = cr44580_place_6;
return (fexpr__44617.cljs$core$IFn$_invoke$arity$1 ? fexpr__44617.cljs$core$IFn$_invoke$arity$1(G__44618) : fexpr__44617.call(null,G__44618));
})();
(cr44580_state[(0)] = cr44580_block_4);

return missionary.core.park(cr44580_place_8);
}catch (e44616){var cr44580_exception = e44616;
(cr44580_state[(0)] = null);

throw cr44580_exception;
}});
var cr44580_block_4 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44580_block_4(cr44580_state){
try{var cr44580_place_9 = missionary.core.unpark();
(cr44580_state[(0)] = cr44580_block_1);

return cr44580_state;
}catch (e44621){var cr44580_exception = e44621;
(cr44580_state[(0)] = null);

throw cr44580_exception;
}});
var cr44580_block_5 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44580_block_5(cr44580_state){
try{var cr44580_place_4 = (cr44580_state[(1)]);
(cr44580_state[(0)] = null);

(cr44580_state[(1)] = null);

return cr44580_place_4;
}catch (e44625){var cr44580_exception = e44625;
(cr44580_state[(0)] = null);

(cr44580_state[(1)] = null);

throw cr44580_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44626 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__44626[(0)] = cr44580_block_0);

return G__44626;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.wait_for_close = (function hyperfiddle$electric_client$wait_for_close(ws){
return (function (s,f){
(ws.onclose = (function (e){
(ws.onclose = null);

var G__44633 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),e.code,new cljs.core.Keyword(null,"reason","reason",-2070751759),e.reason], null);
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__44633) : s.call(null,G__44633));
}));

return (function (){
if((ws.onclose == null)){
return null;
} else {
(ws.onclose = null);

var G__44634 = (new missionary.Cancelled());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44634) : f.call(null,G__44634));
}
});
});
});
hyperfiddle.electric_client.payload = (function hyperfiddle$electric_client$payload(x){
return x.data;
});
hyperfiddle.electric_client.send_BANG_ = (function hyperfiddle$electric_client$send_BANG_(ws,msg){
var G__44649 = ws;
G__44649.send(msg);

return G__44649;
});
hyperfiddle.electric_client.send_all = (function hyperfiddle$electric_client$send_all(ws,msgs){
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44651_block_0 = (function hyperfiddle$electric_client$send_all_$_cr44651_block_0(cr44651_state){
try{var cr44651_place_0 = hyperfiddle.electric_client.wait_for_flush;
var cr44651_place_1 = hyperfiddle.electric_client.send_BANG_;
var cr44651_place_2 = ws;
var cr44651_place_3 = hyperfiddle.electric.impl.io.encode;
var cr44651_place_4 = (1);
var cr44651_place_5 = msgs;
(cr44651_state[(0)] = cr44651_block_1);

(cr44651_state[(1)] = cr44651_place_0);

(cr44651_state[(4)] = cr44651_place_1);

(cr44651_state[(3)] = cr44651_place_2);

(cr44651_state[(2)] = cr44651_place_3);

return missionary.core.fork(cr44651_place_4,cr44651_place_5);
}catch (e44694){var cr44651_exception = e44694;
(cr44651_state[(0)] = null);

throw cr44651_exception;
}});
var cr44651_block_1 = (function hyperfiddle$electric_client$send_all_$_cr44651_block_1(cr44651_state){
try{var cr44651_place_0 = (cr44651_state[(1)]);
var cr44651_place_3 = (cr44651_state[(2)]);
var cr44651_place_2 = (cr44651_state[(3)]);
var cr44651_place_1 = (cr44651_state[(4)]);
var cr44651_place_6 = missionary.core.unpark();
var cr44651_place_7 = (function (){var G__44697 = cr44651_place_6;
var fexpr__44696 = cr44651_place_3;
return (fexpr__44696.cljs$core$IFn$_invoke$arity$1 ? fexpr__44696.cljs$core$IFn$_invoke$arity$1(G__44697) : fexpr__44696.call(null,G__44697));
})();
var cr44651_place_8 = (function (){var G__44701 = cr44651_place_2;
var G__44702 = cr44651_place_7;
var fexpr__44700 = cr44651_place_1;
return (fexpr__44700.cljs$core$IFn$_invoke$arity$2 ? fexpr__44700.cljs$core$IFn$_invoke$arity$2(G__44701,G__44702) : fexpr__44700.call(null,G__44701,G__44702));
})();
var cr44651_place_9 = (function (){var G__44706 = cr44651_place_8;
var fexpr__44705 = cr44651_place_0;
return (fexpr__44705.cljs$core$IFn$_invoke$arity$1 ? fexpr__44705.cljs$core$IFn$_invoke$arity$1(G__44706) : fexpr__44705.call(null,G__44706));
})();
(cr44651_state[(0)] = cr44651_block_2);

(cr44651_state[(1)] = null);

(cr44651_state[(2)] = null);

(cr44651_state[(3)] = null);

(cr44651_state[(4)] = null);

return missionary.core.park(cr44651_place_9);
}catch (e44695){var cr44651_exception = e44695;
(cr44651_state[(0)] = null);

(cr44651_state[(1)] = null);

(cr44651_state[(2)] = null);

(cr44651_state[(3)] = null);

(cr44651_state[(4)] = null);

throw cr44651_exception;
}});
var cr44651_block_2 = (function hyperfiddle$electric_client$send_all_$_cr44651_block_2(cr44651_state){
try{var cr44651_place_10 = missionary.core.unpark();
(cr44651_state[(0)] = null);

return cr44651_place_10;
}catch (e44710){var cr44651_exception = e44710;
(cr44651_state[(0)] = null);

throw cr44651_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44712 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__44712[(0)] = cr44651_block_0);

return G__44712;
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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44714_block_0 = (function hyperfiddle$electric_client$connector_$_cr44714_block_0(cr44714_state){
try{var cr44714_place_0 = hyperfiddle.electric_client.connect;
var cr44714_place_1 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr44714_place_2 = (function (){var G__44805 = cr44714_place_1;
var fexpr__44804 = cr44714_place_0;
return (fexpr__44804.cljs$core$IFn$_invoke$arity$1 ? fexpr__44804.cljs$core$IFn$_invoke$arity$1(G__44805) : fexpr__44804.call(null,G__44805));
})();
(cr44714_state[(0)] = cr44714_block_1);

return missionary.core.park(cr44714_place_2);
}catch (e44803){var cr44714_exception = e44803;
(cr44714_state[(0)] = null);

throw cr44714_exception;
}});
var cr44714_block_2 = (function hyperfiddle$electric_client$connector_$_cr44714_block_2(cr44714_state){
try{var cr44714_place_3 = (cr44714_state[(2)]);
var cr44714_place_8 = cr44714_place_3;
var cr44714_place_9 = null;
var cr44714_place_10 = false;
(cr44714_state[(0)] = cr44714_block_3);

(cr44714_state[(2)] = null);

(cr44714_state[(2)] = cr44714_place_8);

(cr44714_state[(3)] = cr44714_place_9);

(cr44714_state[(4)] = cr44714_place_10);

return cr44714_state;
}catch (e44807){var cr44714_exception = e44807;
(cr44714_state[(0)] = null);

(cr44714_state[(1)] = null);

(cr44714_state[(2)] = null);

throw cr44714_exception;
}});
var cr44714_block_4 = (function hyperfiddle$electric_client$connector_$_cr44714_block_4(cr44714_state){
try{var cr44714_place_33 = missionary.core.unpark();
(cr44714_state[(0)] = cr44714_block_6);

(cr44714_state[(3)] = cr44714_place_33);

return cr44714_state;
}catch (e44810){var cr44714_exception = e44810;
(cr44714_state[(0)] = cr44714_block_5);

(cr44714_state[(3)] = cr44714_exception);

return cr44714_state;
}});
var cr44714_block_1 = (function hyperfiddle$electric_client$connector_$_cr44714_block_1(cr44714_state){
try{var cr44714_place_3 = missionary.core.unpark();
var cr44714_place_4 = cr44714_place_3;
var cr44714_place_5 = null;
var cr44714_place_6 = (cr44714_place_4 == cr44714_place_5);
var cr44714_place_7 = null;
if(cr44714_place_6){
(cr44714_state[(0)] = cr44714_block_11);

(cr44714_state[(1)] = cr44714_place_7);

return cr44714_state;
} else {
(cr44714_state[(0)] = cr44714_block_2);

(cr44714_state[(2)] = cr44714_place_3);

(cr44714_state[(1)] = cr44714_place_7);

return cr44714_state;
}
}catch (e44819){var cr44714_exception = e44819;
(cr44714_state[(0)] = null);

throw cr44714_exception;
}});
var cr44714_block_10 = (function hyperfiddle$electric_client$connector_$_cr44714_block_10(cr44714_state){
try{var cr44714_place_9 = (cr44714_state[(3)]);
var cr44714_place_10 = (cr44714_state[(4)]);
var cr44714_place_42 = (cr44714_state[(5)]);
var cr44714_place_50 = (cljs.core.truth_(cr44714_place_10)?(function(){throw cr44714_place_9})():cr44714_place_9);
(cr44714_state[(0)] = cr44714_block_12);

(cr44714_state[(3)] = null);

(cr44714_state[(4)] = null);

(cr44714_state[(5)] = null);

(cr44714_state[(1)] = cr44714_place_50);

return cr44714_state;
}catch (e44826){var cr44714_exception = e44826;
(cr44714_state[(0)] = null);

(cr44714_state[(3)] = null);

(cr44714_state[(1)] = null);

(cr44714_state[(4)] = null);

(cr44714_state[(5)] = null);

throw cr44714_exception;
}});
var cr44714_block_5 = (function hyperfiddle$electric_client$connector_$_cr44714_block_5(cr44714_state){
try{var cr44714_place_9 = (cr44714_state[(3)]);
var cr44714_place_34 = cr44714_place_9;
var cr44714_place_35 = (function(){throw cr44714_place_34})();
(cr44714_state[(0)] = null);

(cr44714_state[(2)] = null);

(cr44714_state[(3)] = null);

(cr44714_state[(1)] = null);

(cr44714_state[(4)] = null);

return null;
}catch (e44841){var cr44714_exception = e44841;
(cr44714_state[(0)] = cr44714_block_6);

(cr44714_state[(4)] = true);

(cr44714_state[(3)] = cr44714_exception);

return cr44714_state;
}});
var cr44714_block_7 = (function hyperfiddle$electric_client$connector_$_cr44714_block_7(cr44714_state){
try{var cr44714_place_8 = (cr44714_state[(2)]);
var cr44714_place_43 = cr44714_place_8;
var cr44714_place_44 = cr44714_place_43.close();
var cr44714_place_45 = missionary.core.compel;
var cr44714_place_46 = hyperfiddle.electric_client.wait_for_close;
var cr44714_place_47 = (function (){var G__44844 = cr44714_place_46;
var fexpr__44843 = cr44714_place_45;
return (fexpr__44843.cljs$core$IFn$_invoke$arity$1 ? fexpr__44843.cljs$core$IFn$_invoke$arity$1(G__44844) : fexpr__44843.call(null,G__44844));
})();
(cr44714_state[(0)] = cr44714_block_8);

(cr44714_state[(2)] = null);

return missionary.core.park(cr44714_place_47);
}catch (e44842){var cr44714_exception = e44842;
(cr44714_state[(0)] = null);

(cr44714_state[(2)] = null);

(cr44714_state[(3)] = null);

(cr44714_state[(1)] = null);

(cr44714_state[(4)] = null);

(cr44714_state[(5)] = null);

throw cr44714_exception;
}});
var cr44714_block_8 = (function hyperfiddle$electric_client$connector_$_cr44714_block_8(cr44714_state){
try{var cr44714_place_48 = missionary.core.unpark();
(cr44714_state[(0)] = cr44714_block_10);

(cr44714_state[(5)] = cr44714_place_48);

return cr44714_state;
}catch (e44847){var cr44714_exception = e44847;
(cr44714_state[(0)] = null);

(cr44714_state[(3)] = null);

(cr44714_state[(1)] = null);

(cr44714_state[(4)] = null);

(cr44714_state[(5)] = null);

throw cr44714_exception;
}});
var cr44714_block_6 = (function hyperfiddle$electric_client$connector_$_cr44714_block_6(cr44714_state){
try{var cr44714_place_8 = (cr44714_state[(2)]);
var cr44714_place_36 = cljs.core._EQ_;
var cr44714_place_37 = WebSocket;
var cr44714_place_38 = cr44714_place_37.CLOSED;
var cr44714_place_39 = cr44714_place_8;
var cr44714_place_40 = cr44714_place_39.readyState;
var cr44714_place_41 = (function (){var G__44851 = cr44714_place_38;
var G__44852 = cr44714_place_40;
var fexpr__44850 = cr44714_place_36;
return (fexpr__44850.cljs$core$IFn$_invoke$arity$2 ? fexpr__44850.cljs$core$IFn$_invoke$arity$2(G__44851,G__44852) : fexpr__44850.call(null,G__44851,G__44852));
})();
var cr44714_place_42 = null;
if(cljs.core.truth_(cr44714_place_41)){
(cr44714_state[(0)] = cr44714_block_9);

(cr44714_state[(2)] = null);

(cr44714_state[(5)] = cr44714_place_42);

return cr44714_state;
} else {
(cr44714_state[(0)] = cr44714_block_7);

(cr44714_state[(5)] = cr44714_place_42);

return cr44714_state;
}
}catch (e44849){var cr44714_exception = e44849;
(cr44714_state[(0)] = null);

(cr44714_state[(2)] = null);

(cr44714_state[(3)] = null);

(cr44714_state[(1)] = null);

(cr44714_state[(4)] = null);

throw cr44714_exception;
}});
var cr44714_block_3 = (function hyperfiddle$electric_client$connector_$_cr44714_block_3(cr44714_state){
try{var cr44714_place_8 = (cr44714_state[(2)]);
var cr44714_place_11 = hyperfiddle.electric_client.send_BANG_;
var cr44714_place_12 = cr44714_place_8;
var cr44714_place_13 = hyperfiddle.electric.impl.io.encode;
var cr44714_place_14 = server;
var cr44714_place_15 = (function (){var G__44855 = cr44714_place_14;
var fexpr__44854 = cr44714_place_13;
return (fexpr__44854.cljs$core$IFn$_invoke$arity$1 ? fexpr__44854.cljs$core$IFn$_invoke$arity$1(G__44855) : fexpr__44854.call(null,G__44855));
})();
var cr44714_place_16 = (function (){var G__44857 = cr44714_place_12;
var G__44858 = cr44714_place_15;
var fexpr__44856 = cr44714_place_11;
return (fexpr__44856.cljs$core$IFn$_invoke$arity$2 ? fexpr__44856.cljs$core$IFn$_invoke$arity$2(G__44857,G__44858) : fexpr__44856.call(null,G__44857,G__44858));
})();
var cr44714_place_17 = cr44714_place_8;
var cr44714_place_18 = cljs.core.comp;
var cr44714_place_19 = cb;
var cr44714_place_20 = hyperfiddle.electric.impl.io.decode;
var cr44714_place_21 = hyperfiddle.electric_client.payload;
var cr44714_place_22 = (function (){var G__44860 = cr44714_place_19;
var G__44861 = cr44714_place_20;
var G__44862 = cr44714_place_21;
var fexpr__44859 = cr44714_place_18;
return (fexpr__44859.cljs$core$IFn$_invoke$arity$3 ? fexpr__44859.cljs$core$IFn$_invoke$arity$3(G__44860,G__44861,G__44862) : fexpr__44859.call(null,G__44860,G__44861,G__44862));
})();
var cr44714_place_23 = (cr44714_place_17.onmessage = cr44714_place_22);
var cr44714_place_24 = missionary.core.race;
var cr44714_place_25 = hyperfiddle.electric_client.send_all;
var cr44714_place_26 = cr44714_place_8;
var cr44714_place_27 = msgs;
var cr44714_place_28 = (function (){var G__44864 = cr44714_place_26;
var G__44865 = cr44714_place_27;
var fexpr__44863 = cr44714_place_25;
return (fexpr__44863.cljs$core$IFn$_invoke$arity$2 ? fexpr__44863.cljs$core$IFn$_invoke$arity$2(G__44864,G__44865) : fexpr__44863.call(null,G__44864,G__44865));
})();
var cr44714_place_29 = hyperfiddle.electric_client.wait_for_close;
var cr44714_place_30 = cr44714_place_8;
var cr44714_place_31 = (function (){var G__44867 = cr44714_place_30;
var fexpr__44866 = cr44714_place_29;
return (fexpr__44866.cljs$core$IFn$_invoke$arity$1 ? fexpr__44866.cljs$core$IFn$_invoke$arity$1(G__44867) : fexpr__44866.call(null,G__44867));
})();
var cr44714_place_32 = (function (){var G__44871 = cr44714_place_28;
var G__44872 = cr44714_place_31;
var fexpr__44870 = cr44714_place_24;
return (fexpr__44870.cljs$core$IFn$_invoke$arity$2 ? fexpr__44870.cljs$core$IFn$_invoke$arity$2(G__44871,G__44872) : fexpr__44870.call(null,G__44871,G__44872));
})();
(cr44714_state[(0)] = cr44714_block_4);

return missionary.core.park(cr44714_place_32);
}catch (e44853){var cr44714_exception = e44853;
(cr44714_state[(0)] = cr44714_block_5);

(cr44714_state[(3)] = cr44714_exception);

return cr44714_state;
}});
var cr44714_block_9 = (function hyperfiddle$electric_client$connector_$_cr44714_block_9(cr44714_state){
try{var cr44714_place_49 = null;
(cr44714_state[(0)] = cr44714_block_10);

(cr44714_state[(5)] = cr44714_place_49);

return cr44714_state;
}catch (e44873){var cr44714_exception = e44873;
(cr44714_state[(0)] = null);

(cr44714_state[(3)] = null);

(cr44714_state[(1)] = null);

(cr44714_state[(4)] = null);

(cr44714_state[(5)] = null);

throw cr44714_exception;
}});
var cr44714_block_11 = (function hyperfiddle$electric_client$connector_$_cr44714_block_11(cr44714_state){
try{var cr44714_place_51 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
(cr44714_state[(0)] = cr44714_block_12);

(cr44714_state[(1)] = cr44714_place_51);

return cr44714_state;
}catch (e44877){var cr44714_exception = e44877;
(cr44714_state[(0)] = null);

(cr44714_state[(1)] = null);

throw cr44714_exception;
}});
var cr44714_block_12 = (function hyperfiddle$electric_client$connector_$_cr44714_block_12(cr44714_state){
try{var cr44714_place_7 = (cr44714_state[(1)]);
(cr44714_state[(0)] = null);

(cr44714_state[(1)] = null);

return cr44714_place_7;
}catch (e44878){var cr44714_exception = e44878;
(cr44714_state[(0)] = null);

(cr44714_state[(1)] = null);

throw cr44714_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44879 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__44879[(0)] = cr44714_block_0);

return G__44879;
})());
})(),missionary.core.sp_run);
});
});
hyperfiddle.electric_client.fib_iter = (function hyperfiddle$electric_client$fib_iter(p__44883){
var vec__44884 = p__44883;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44884,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44884,(1),null);
var G__44887 = b;
switch (G__44887) {
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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44889_block_0 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44889_block_0(cr44889_state){
try{var cr44889_place_0 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr44889_place_1 = hyperfiddle.electric_client.retry_delays;
(cr44889_state[(0)] = cr44889_block_1);

(cr44889_state[(2)] = cr44889_place_0);

(cr44889_state[(1)] = cr44889_place_1);

return cr44889_state;
}catch (e45258){var cr44889_exception = e45258;
(cr44889_state[(0)] = null);

throw cr44889_exception;
}});
var cr44889_block_13 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44889_block_13(cr44889_state){
try{var cr44889_place_68 = (cr44889_state[(5)]);
(cr44889_state[(0)] = cr44889_block_15);

(cr44889_state[(5)] = null);

(cr44889_state[(3)] = cr44889_place_68);

return cr44889_state;
}catch (e45259){var cr44889_exception = e45259;
(cr44889_state[(0)] = null);

(cr44889_state[(5)] = null);

(cr44889_state[(1)] = null);

(cr44889_state[(3)] = null);

(cr44889_state[(2)] = null);

throw cr44889_exception;
}});
var cr44889_block_2 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44889_block_2(cr44889_state){
try{var cr44889_place_4 = (cr44889_state[(5)]);
var cr44889_place_14 = (function (x){
var fexpr__45051 = (cr44889_place_4[(0)]);
var G__45262 = x;
var fexpr__45261 = fexpr__45051;
return (fexpr__45261.cljs$core$IFn$_invoke$arity$1 ? fexpr__45261.cljs$core$IFn$_invoke$arity$1(G__45262) : fexpr__45261.call(null,G__45262));
});
var cr44889_place_15 = cljs.core.partial;
var cr44889_place_25 = (function (cr45052_state){
try{(cr45052_state[(0)] = cr44889_place_34);

return cr45052_state;
}catch (e45299){var e45108 = e45299;
var cr45052_exception = e45108;
(cr45052_state[(0)] = null);

(cr45052_state[(1)] = null);

(cr45052_state[(2)] = null);

throw cr45052_exception;
}});
var cr44889_place_24 = (function (cr45052_state){
try{var cr45052_place_26 = missionary.core.unpark();
(cr45052_state[(0)] = cr44889_place_33);

(cr45052_state[(2)] = cr45052_place_26);

return cr45052_state;
}catch (e45300){var e45107 = e45300;
var cr45052_exception = e45107;
(cr45052_state[(0)] = null);

(cr45052_state[(2)] = null);

throw cr45052_exception;
}});
var cr44889_place_28 = (function (cr45052_state){
try{var cr45052_place_28 = missionary.core.unpark();
var cr45052_place_29 = cr45052_place_28;
var cr45052_place_30 = null;
var cr45052_place_31 = (cr45052_place_29 == cr45052_place_30);
var cr45052_place_32 = null;
if(cr45052_place_31){
(cr45052_state[(0)] = cr44889_place_18);

(cr45052_state[(1)] = null);

(cr45052_state[(3)] = cr45052_place_32);

return cr45052_state;
} else {
(cr45052_state[(0)] = cr44889_place_31);

(cr45052_state[(4)] = cr45052_place_28);

(cr45052_state[(3)] = cr45052_place_32);

return cr45052_state;
}
}catch (e45301){var e45117 = e45301;
var cr45052_exception = e45117;
(cr45052_state[(0)] = null);

(cr45052_state[(1)] = null);

(cr45052_state[(2)] = null);

throw cr45052_exception;
}});
var cr44889_place_22 = (function (cr45052_state){
try{var cr45052_place_11 = missionary.core.unpark();
var cr45052_place_12 = cr45052_place_11;
var cr45052_place_13 = null;
var G__45105 = cr45052_place_12;
var G__45303 = G__45105;
switch (G__45303) {
case (0):
(cr45052_state[(0)] = cr44889_place_26);

(cr45052_state[(2)] = cr45052_place_13);

return cr45052_state;

break;
case (1):
(cr45052_state[(0)] = cr44889_place_23);

(cr45052_state[(2)] = cr45052_place_13);

return cr45052_state;

break;
default:
(cr45052_state[(0)] = cr44889_place_27);

(cr45052_state[(1)] = null);

(cr45052_state[(1)] = cr45052_place_11);

return cr45052_state;

}
}catch (e45302){var e45104 = e45302;
var cr45052_exception = e45104;
(cr45052_state[(0)] = null);

(cr45052_state[(1)] = null);

throw cr45052_exception;
}});
var cr44889_place_17 = (function (cr45052_state){
try{var cr45052_place_23 = missionary.core.unpark();
var cr45052_place_24 = (1);
var cr45052_place_25 = missionary.core.none;
(cr45052_state[(0)] = cr44889_place_24);

return missionary.core.fork(cr45052_place_24,cr45052_place_25);
}catch (e45304){var e45094 = e45304;
var cr45052_exception = e45094;
(cr45052_state[(0)] = null);

(cr45052_state[(2)] = null);

throw cr45052_exception;
}});
var cr44889_place_19 = (function (cr45052_state){
try{var cr45052_place_40 = (cr45052_state[(1)]);
var cr45052_place_44 = "No matching clause: ";
var cr45052_place_45 = cr45052_place_40;
var cr45052_place_46 = [cr45052_place_44,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr45052_place_45)].join('');
var cr45052_place_47 = (new Error(cr45052_place_46));
var cr45052_place_48 = (function(){throw cr45052_place_47})();
(cr45052_state[(0)] = null);

(cr45052_state[(1)] = null);

return null;
}catch (e45305){var e45096 = e45305;
var cr45052_exception = e45096;
(cr45052_state[(0)] = null);

(cr45052_state[(1)] = null);

throw cr45052_exception;
}});
var cr44889_place_34 = (function (cr45052_state){
try{var cr45052_place_4 = (cr45052_state[(1)]);
var cr45052_place_27 = cr45052_place_4;
(cr45052_state[(0)] = cr44889_place_28);

return missionary.core.park(cr45052_place_27);
}catch (e45306){var e45128 = e45306;
var cr45052_exception = e45128;
(cr45052_state[(0)] = null);

(cr45052_state[(1)] = null);

(cr45052_state[(2)] = null);

throw cr45052_exception;
}});
var cr44889_place_33 = (function (cr45052_state){
try{var cr45052_place_13 = (cr45052_state[(2)]);
(cr45052_state[(0)] = null);

(cr45052_state[(2)] = null);

return cr45052_place_13;
}catch (e45307){var e45127 = e45307;
var cr45052_exception = e45127;
(cr45052_state[(0)] = null);

(cr45052_state[(2)] = null);

throw cr45052_exception;
}});
var cr44889_place_16 = (function (cr45052_state){
try{var cr45052_place_33 = (cr45052_state[(4)]);
var cr45052_place_43 = cr45052_place_33;
(cr45052_state[(0)] = cr44889_place_30);

(cr45052_state[(4)] = null);

(cr45052_state[(1)] = cr45052_place_43);

return cr45052_state;
}catch (e45308){var e45093 = e45308;
var cr45052_exception = e45093;
(cr45052_state[(0)] = null);

(cr45052_state[(1)] = null);

(cr45052_state[(4)] = null);

(cr45052_state[(2)] = null);

(cr45052_state[(3)] = null);

throw cr45052_exception;
}});
var cr44889_place_23 = (function (cr45052_state){
try{(cr45052_state[(0)] = cr44889_place_34);

return cr45052_state;
}catch (e45309){var e45106 = e45309;
var cr45052_exception = e45106;
(cr45052_state[(0)] = null);

(cr45052_state[(1)] = null);

(cr45052_state[(2)] = null);

throw cr45052_exception;
}});
var cr44889_place_31 = (function (cr45052_state){
try{var cr45052_place_28 = (cr45052_state[(4)]);
var cr45052_place_33 = cr45052_place_28;
var cr45052_place_34 = (1);
var cr45052_place_35 = missionary.core.seed;
var cr45052_place_36 = cljs.core.range;
var cr45052_place_37 = (2);
var cr45052_place_38 = (function (){var G__45123 = cr45052_place_37;
var fexpr__45122 = cr45052_place_36;
var G__45312 = G__45123;
var fexpr__45311 = fexpr__45122;
return (fexpr__45311.cljs$core$IFn$_invoke$arity$1 ? fexpr__45311.cljs$core$IFn$_invoke$arity$1(G__45312) : fexpr__45311.call(null,G__45312));
})();
var cr45052_place_39 = (function (){var G__45125 = cr45052_place_38;
var fexpr__45124 = cr45052_place_35;
var G__45314 = G__45125;
var fexpr__45313 = fexpr__45124;
return (fexpr__45313.cljs$core$IFn$_invoke$arity$1 ? fexpr__45313.cljs$core$IFn$_invoke$arity$1(G__45314) : fexpr__45313.call(null,G__45314));
})();
(cr45052_state[(0)] = cr44889_place_29);

(cr45052_state[(4)] = null);

(cr45052_state[(4)] = cr45052_place_33);

return missionary.core.fork(cr45052_place_34,cr45052_place_39);
}catch (e45310){var e45121 = e45310;
var cr45052_exception = e45121;
(cr45052_state[(0)] = null);

(cr45052_state[(1)] = null);

(cr45052_state[(2)] = null);

(cr45052_state[(3)] = null);

(cr45052_state[(4)] = null);

throw cr45052_exception;
}});
var cr44889_place_32 = (function (cr45052_state){
try{var cr45052_place_32 = (cr45052_state[(3)]);
(cr45052_state[(0)] = cr44889_place_33);

(cr45052_state[(3)] = null);

(cr45052_state[(2)] = cr45052_place_32);

return cr45052_state;
}catch (e45315){var e45126 = e45315;
var cr45052_exception = e45126;
(cr45052_state[(0)] = null);

(cr45052_state[(2)] = null);

(cr45052_state[(3)] = null);

throw cr45052_exception;
}});
var cr44889_place_27 = (function (cr45052_state){
try{var cr45052_place_11 = (cr45052_state[(1)]);
var cr45052_place_52 = "No matching clause: ";
var cr45052_place_53 = cr45052_place_11;
var cr45052_place_54 = [cr45052_place_52,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr45052_place_53)].join('');
var cr45052_place_55 = (new Error(cr45052_place_54));
var cr45052_place_56 = (function(){throw cr45052_place_55})();
(cr45052_state[(0)] = null);

(cr45052_state[(1)] = null);

return null;
}catch (e45316){var e45116 = e45316;
var cr45052_exception = e45116;
(cr45052_state[(0)] = null);

(cr45052_state[(1)] = null);

throw cr45052_exception;
}});
var cr44889_place_29 = (function (cr45052_state){
try{var cr45052_place_40 = missionary.core.unpark();
var cr45052_place_41 = cr45052_place_40;
var cr45052_place_42 = null;
var G__45119 = cr45052_place_41;
var G__45318 = G__45119;
switch (G__45318) {
case (0):
(cr45052_state[(0)] = cr44889_place_16);

(cr45052_state[(1)] = null);

(cr45052_state[(1)] = cr45052_place_42);

return cr45052_state;

break;
case (1):
(cr45052_state[(0)] = cr44889_place_25);

(cr45052_state[(4)] = null);

(cr45052_state[(3)] = null);

return cr45052_state;

break;
default:
(cr45052_state[(0)] = cr44889_place_19);

(cr45052_state[(4)] = null);

(cr45052_state[(1)] = null);

(cr45052_state[(2)] = null);

(cr45052_state[(3)] = null);

(cr45052_state[(1)] = cr45052_place_40);

return cr45052_state;

}
}catch (e45317){var e45118 = e45317;
var cr45052_exception = e45118;
(cr45052_state[(0)] = null);

(cr45052_state[(4)] = null);

(cr45052_state[(1)] = null);

(cr45052_state[(2)] = null);

(cr45052_state[(3)] = null);

throw cr45052_exception;
}});
var cr44889_place_26 = (function (cr45052_state){
try{var cr45052_place_4 = (cr45052_state[(1)]);
var cr45052_place_14 = cr45052_place_4;
var cr45052_place_15 = hyperfiddle.electric.impl.runtime.subject_at;
var cr45052_place_16 = cr44889_place_4;
var cr45052_place_17 = (0);
var cr45052_place_18 = (function (){var G__45111 = cr45052_place_16;
var G__45112 = cr45052_place_17;
var fexpr__45110 = cr45052_place_15;
var G__45321 = G__45111;
var G__45322 = G__45112;
var fexpr__45320 = fexpr__45110;
return (fexpr__45320.cljs$core$IFn$_invoke$arity$2 ? fexpr__45320.cljs$core$IFn$_invoke$arity$2(G__45321,G__45322) : fexpr__45320.call(null,G__45321,G__45322));
})();
var cr45052_place_19 = client;
var cr45052_place_20 = cr45052_place_14;
var cr45052_place_21 = cr45052_place_18;
var cr45052_place_22 = (function (){var G__45114 = cr45052_place_20;
var G__45115 = cr45052_place_21;
var fexpr__45113 = cr45052_place_19;
var G__45324 = G__45114;
var G__45325 = G__45115;
var fexpr__45323 = fexpr__45113;
return (fexpr__45323.cljs$core$IFn$_invoke$arity$2 ? fexpr__45323.cljs$core$IFn$_invoke$arity$2(G__45324,G__45325) : fexpr__45323.call(null,G__45324,G__45325));
})();
(cr45052_state[(0)] = cr44889_place_17);

(cr45052_state[(1)] = null);

return missionary.core.park(cr45052_place_22);
}catch (e45319){var e45109 = e45319;
var cr45052_exception = e45109;
(cr45052_state[(0)] = null);

(cr45052_state[(1)] = null);

(cr45052_state[(2)] = null);

throw cr45052_exception;
}});
var cr44889_place_30 = (function (cr45052_state){
try{var cr45052_place_42 = (cr45052_state[(1)]);
(cr45052_state[(0)] = cr44889_place_32);

(cr45052_state[(1)] = null);

(cr45052_state[(3)] = cr45052_place_42);

return cr45052_state;
}catch (e45326){var e45120 = e45326;
var cr45052_exception = e45120;
(cr45052_state[(0)] = null);

(cr45052_state[(1)] = null);

(cr45052_state[(2)] = null);

(cr45052_state[(3)] = null);

throw cr45052_exception;
}});
var cr44889_place_21 = (function (cr45052_state){
try{var cr45052_place_51 = missionary.core.unpark();
(cr45052_state[(0)] = cr44889_place_32);

(cr45052_state[(3)] = cr45052_place_51);

return cr45052_state;
}catch (e45327){var e45103 = e45327;
var cr45052_exception = e45103;
(cr45052_state[(0)] = null);

(cr45052_state[(2)] = null);

(cr45052_state[(3)] = null);

throw cr45052_exception;
}});
var cr44889_place_20 = (function (cr45052_state){
try{var cr45052_place_0 = console;
var cr45052_place_1 = "Connected.";
var cr45052_place_2 = cr45052_place_0.log(cr45052_place_1);
var cr45052_place_3 = missionary.core.rdv;
var cr45052_place_4 = (function (){var fexpr__45098 = cr45052_place_3;
var fexpr__45329 = fexpr__45098;
return (fexpr__45329.cljs$core$IFn$_invoke$arity$0 ? fexpr__45329.cljs$core$IFn$_invoke$arity$0() : fexpr__45329.call(null));
})();
var cr45052_place_5 = (2);
var cr45052_place_6 = missionary.core.seed;
var cr45052_place_7 = cljs.core.range;
var cr45052_place_8 = (2);
var cr45052_place_9 = (function (){var G__45100 = cr45052_place_8;
var fexpr__45099 = cr45052_place_7;
var G__45331 = G__45100;
var fexpr__45330 = fexpr__45099;
return (fexpr__45330.cljs$core$IFn$_invoke$arity$1 ? fexpr__45330.cljs$core$IFn$_invoke$arity$1(G__45331) : fexpr__45330.call(null,G__45331));
})();
var cr45052_place_10 = (function (){var G__45102 = cr45052_place_9;
var fexpr__45101 = cr45052_place_6;
var G__45333 = G__45102;
var fexpr__45332 = fexpr__45101;
return (fexpr__45332.cljs$core$IFn$_invoke$arity$1 ? fexpr__45332.cljs$core$IFn$_invoke$arity$1(G__45333) : fexpr__45332.call(null,G__45333));
})();
(cr45052_state[(0)] = cr44889_place_22);

(cr45052_state[(1)] = cr45052_place_4);

return missionary.core.fork(cr45052_place_5,cr45052_place_10);
}catch (e45328){var e45097 = e45328;
var cr45052_exception = e45097;
(cr45052_state[(0)] = null);

throw cr45052_exception;
}});
var cr44889_place_18 = (function (cr45052_state){
try{var cr45052_place_49 = (1);
var cr45052_place_50 = missionary.core.none;
(cr45052_state[(0)] = cr44889_place_21);

return missionary.core.fork(cr45052_place_49,cr45052_place_50);
}catch (e45334){var e45095 = e45334;
var cr45052_exception = e45095;
(cr45052_state[(0)] = null);

(cr45052_state[(2)] = null);

(cr45052_state[(3)] = null);

throw cr45052_exception;
}});
var cr44889_place_35 = cloroutine.impl.coroutine;
var cr44889_place_36 = cljs.core.object_array;
var cr44889_place_37 = (5);
var cr44889_place_38 = (function (){var G__45336 = cr44889_place_37;
var fexpr__45335 = cr44889_place_36;
return (fexpr__45335.cljs$core$IFn$_invoke$arity$1 ? fexpr__45335.cljs$core$IFn$_invoke$arity$1(G__45336) : fexpr__45335.call(null,G__45336));
})();
var cr44889_place_39 = cr44889_place_38;
var cr44889_place_40 = (0);
var cr44889_place_41 = cr44889_place_20;
var cr44889_place_42 = (cr44889_place_39[cr44889_place_40] = cr44889_place_41);
var cr44889_place_43 = cr44889_place_38;
var cr44889_place_44 = (function (){var G__45338 = cr44889_place_43;
var fexpr__45337 = cr44889_place_35;
return (fexpr__45337.cljs$core$IFn$_invoke$arity$1 ? fexpr__45337.cljs$core$IFn$_invoke$arity$1(G__45338) : fexpr__45337.call(null,G__45338));
})();
var cr44889_place_45 = missionary.core.ap_run;
var cr44889_place_46 = (function (){var G__45340 = cr44889_place_44;
var G__45341 = cr44889_place_45;
var fexpr__45339 = cr44889_place_15;
return (fexpr__45339.cljs$core$IFn$_invoke$arity$2 ? fexpr__45339.cljs$core$IFn$_invoke$arity$2(G__45340,G__45341) : fexpr__45339.call(null,G__45340,G__45341));
})();
var cr44889_place_47 = conn;
var cr44889_place_48 = cr44889_place_14;
var cr44889_place_49 = cr44889_place_46;
var cr44889_place_50 = (function (){var G__45343 = cr44889_place_48;
var G__45344 = cr44889_place_49;
var fexpr__45342 = cr44889_place_47;
return (fexpr__45342.cljs$core$IFn$_invoke$arity$2 ? fexpr__45342.cljs$core$IFn$_invoke$arity$2(G__45343,G__45344) : fexpr__45342.call(null,G__45343,G__45344));
})();
(cr44889_state[(0)] = cr44889_block_3);

(cr44889_state[(5)] = null);

return missionary.core.park(cr44889_place_50);
}catch (e45260){var cr44889_exception = e45260;
(cr44889_state[(0)] = cr44889_block_4);

(cr44889_state[(5)] = null);

(cr44889_state[(3)] = cr44889_exception);

return cr44889_state;
}});
var cr44889_block_12 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44889_block_12(cr44889_state){
try{var cr44889_place_1 = (cr44889_state[(1)]);
var cr44889_place_97 = console;
var cr44889_place_98 = "Failed to connect.";
var cr44889_place_99 = cr44889_place_97.log(cr44889_place_98);
var cr44889_place_100 = cr44889_place_1;
(cr44889_state[(0)] = cr44889_block_13);

(cr44889_state[(5)] = cr44889_place_100);

return cr44889_state;
}catch (e45345){var cr44889_exception = e45345;
(cr44889_state[(0)] = null);

(cr44889_state[(5)] = null);

(cr44889_state[(1)] = null);

(cr44889_state[(3)] = null);

(cr44889_state[(2)] = null);

throw cr44889_exception;
}});
var cr44889_block_14 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44889_block_14(cr44889_state){
try{var cr44889_place_101 = null;
(cr44889_state[(0)] = cr44889_block_15);

(cr44889_state[(3)] = cr44889_place_101);

return cr44889_state;
}catch (e45346){var cr44889_exception = e45346;
(cr44889_state[(0)] = null);

(cr44889_state[(1)] = null);

(cr44889_state[(3)] = null);

(cr44889_state[(2)] = null);

throw cr44889_exception;
}});
var cr44889_block_15 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44889_block_15(cr44889_state){
try{var cr44889_place_60 = (cr44889_state[(3)]);
var cr44889_place_102 = cr44889_place_60;
var cr44889_place_103 = null;
var cr44889_place_104 = (cr44889_place_102 == cr44889_place_103);
var cr44889_place_105 = null;
if(cr44889_place_104){
(cr44889_state[(0)] = cr44889_block_18);

(cr44889_state[(1)] = null);

(cr44889_state[(3)] = null);

(cr44889_state[(2)] = null);

(cr44889_state[(1)] = cr44889_place_105);

return cr44889_state;
} else {
(cr44889_state[(0)] = cr44889_block_16);

return cr44889_state;
}
}catch (e45347){var cr44889_exception = e45347;
(cr44889_state[(0)] = null);

(cr44889_state[(1)] = null);

(cr44889_state[(3)] = null);

(cr44889_state[(2)] = null);

throw cr44889_exception;
}});
var cr44889_block_18 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44889_block_18(cr44889_state){
try{var cr44889_place_131 = null;
(cr44889_state[(0)] = cr44889_block_19);

(cr44889_state[(1)] = cr44889_place_131);

return cr44889_state;
}catch (e45348){var cr44889_exception = e45348;
(cr44889_state[(0)] = null);

(cr44889_state[(1)] = null);

throw cr44889_exception;
}});
var cr44889_block_4 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44889_block_4(cr44889_state){
try{var cr44889_place_12 = (cr44889_state[(3)]);
var cr44889_place_52 = cr44889_place_12;
var cr44889_place_53 = (function(){throw cr44889_place_52})();
(cr44889_state[(0)] = null);

(cr44889_state[(3)] = null);

(cr44889_state[(4)] = null);

(cr44889_state[(1)] = null);

(cr44889_state[(2)] = null);

(cr44889_state[(6)] = null);

return null;
}catch (e45349){var cr44889_exception = e45349;
(cr44889_state[(0)] = cr44889_block_5);

(cr44889_state[(4)] = true);

(cr44889_state[(3)] = cr44889_exception);

return cr44889_state;
}});
var cr44889_block_8 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44889_block_8(cr44889_state){
try{var cr44889_place_73 = console;
var cr44889_place_74 = "Connection lost.";
var cr44889_place_75 = cr44889_place_73.log(cr44889_place_74);
var cr44889_place_76 = cljs.core.seq;
var cr44889_place_77 = hyperfiddle.electric_client.retry_delays;
var cr44889_place_78 = (function (){var G__45352 = cr44889_place_77;
var fexpr__45351 = cr44889_place_76;
return (fexpr__45351.cljs$core$IFn$_invoke$arity$1 ? fexpr__45351.cljs$core$IFn$_invoke$arity$1(G__45352) : fexpr__45351.call(null,G__45352));
})();
(cr44889_state[(0)] = cr44889_block_11);

(cr44889_state[(4)] = cr44889_place_78);

return cr44889_state;
}catch (e45350){var cr44889_exception = e45350;
(cr44889_state[(0)] = null);

(cr44889_state[(5)] = null);

(cr44889_state[(1)] = null);

(cr44889_state[(3)] = null);

(cr44889_state[(2)] = null);

(cr44889_state[(4)] = null);

throw cr44889_exception;
}});
var cr44889_block_16 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44889_block_16(cr44889_state){
try{var cr44889_place_60 = (cr44889_state[(3)]);
var cr44889_place_106 = cr44889_place_60;
var cr44889_place_107 = cljs.core.seq;
var cr44889_place_108 = cr44889_place_106;
var cr44889_place_109 = (function (){var G__45355 = cr44889_place_108;
var fexpr__45354 = cr44889_place_107;
return (fexpr__45354.cljs$core$IFn$_invoke$arity$1 ? fexpr__45354.cljs$core$IFn$_invoke$arity$1(G__45355) : fexpr__45354.call(null,G__45355));
})();
var cr44889_place_110 = cljs.core.first;
var cr44889_place_111 = cr44889_place_109;
var cr44889_place_112 = (function (){var G__45357 = cr44889_place_111;
var fexpr__45356 = cr44889_place_110;
return (fexpr__45356.cljs$core$IFn$_invoke$arity$1 ? fexpr__45356.cljs$core$IFn$_invoke$arity$1(G__45357) : fexpr__45356.call(null,G__45357));
})();
var cr44889_place_113 = cljs.core.next;
var cr44889_place_114 = cr44889_place_109;
var cr44889_place_115 = (function (){var G__45359 = cr44889_place_114;
var fexpr__45358 = cr44889_place_113;
return (fexpr__45358.cljs$core$IFn$_invoke$arity$1 ? fexpr__45358.cljs$core$IFn$_invoke$arity$1(G__45359) : fexpr__45358.call(null,G__45359));
})();
var cr44889_place_116 = cr44889_place_112;
var cr44889_place_117 = cr44889_place_115;
var cr44889_place_118 = console;
var cr44889_place_119 = "Next attempt in ";
var cr44889_place_120 = cr44889_place_116;
var cr44889_place_121 = (1000);
var cr44889_place_122 = (cr44889_place_120 / cr44889_place_121);
var cr44889_place_123 = " seconds.";
var cr44889_place_124 = [cr44889_place_119,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44889_place_122),cr44889_place_123].join('');
var cr44889_place_125 = cr44889_place_118.log(cr44889_place_124);
var cr44889_place_126 = missionary.core.sleep;
var cr44889_place_127 = cr44889_place_116;
var cr44889_place_128 = cr44889_place_117;
var cr44889_place_129 = (function (){var G__45361 = cr44889_place_127;
var G__45362 = cr44889_place_128;
var fexpr__45360 = cr44889_place_126;
return (fexpr__45360.cljs$core$IFn$_invoke$arity$2 ? fexpr__45360.cljs$core$IFn$_invoke$arity$2(G__45361,G__45362) : fexpr__45360.call(null,G__45361,G__45362));
})();
(cr44889_state[(0)] = cr44889_block_17);

(cr44889_state[(3)] = null);

return missionary.core.park(cr44889_place_129);
}catch (e45353){var cr44889_exception = e45353;
(cr44889_state[(0)] = null);

(cr44889_state[(1)] = null);

(cr44889_state[(3)] = null);

(cr44889_state[(2)] = null);

throw cr44889_exception;
}});
var cr44889_block_9 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44889_block_9(cr44889_state){
try{var cr44889_place_79 = cljs.core.ex_info;
var cr44889_place_80 = "Stale client";
var cr44889_place_81 = new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079);
var cr44889_place_82 = new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405);
var cr44889_place_83 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr44889_place_81,cr44889_place_82]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr44889_place_84 = (function (){var G__45365 = cr44889_place_80;
var G__45366 = cr44889_place_83;
var fexpr__45364 = cr44889_place_79;
return (fexpr__45364.cljs$core$IFn$_invoke$arity$2 ? fexpr__45364.cljs$core$IFn$_invoke$arity$2(G__45365,G__45366) : fexpr__45364.call(null,G__45365,G__45366));
})();
var cr44889_place_85 = (function(){throw cr44889_place_84})();
(cr44889_state[(0)] = null);

return null;
}catch (e45363){var cr44889_exception = e45363;
(cr44889_state[(0)] = null);

throw cr44889_exception;
}});
var cr44889_block_5 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44889_block_5(cr44889_state){
try{var cr44889_place_12 = (cr44889_state[(3)]);
var cr44889_place_13 = (cr44889_state[(4)]);
var cr44889_place_8 = (cr44889_state[(6)]);
var cr44889_place_54 = cr44889_place_8;
var cr44889_place_55 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr44889_place_54);
var cr44889_place_56 = (cljs.core.truth_(cr44889_place_13)?(function(){throw cr44889_place_12})():cr44889_place_12);
var cr44889_place_57 = cr44889_place_56;
var cr44889_place_58 = null;
var cr44889_place_59 = (cr44889_place_57 == cr44889_place_58);
var cr44889_place_60 = null;
if(cr44889_place_59){
(cr44889_state[(0)] = cr44889_block_14);

(cr44889_state[(3)] = null);

(cr44889_state[(4)] = null);

(cr44889_state[(6)] = null);

(cr44889_state[(3)] = cr44889_place_60);

return cr44889_state;
} else {
(cr44889_state[(0)] = cr44889_block_6);

(cr44889_state[(3)] = null);

(cr44889_state[(4)] = null);

(cr44889_state[(6)] = null);

(cr44889_state[(4)] = cr44889_place_56);

(cr44889_state[(3)] = cr44889_place_60);

return cr44889_state;
}
}catch (e45367){var cr44889_exception = e45367;
(cr44889_state[(0)] = null);

(cr44889_state[(3)] = null);

(cr44889_state[(4)] = null);

(cr44889_state[(1)] = null);

(cr44889_state[(2)] = null);

(cr44889_state[(6)] = null);

throw cr44889_exception;
}});
var cr44889_block_1 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44889_block_1(cr44889_state){
try{var cr44889_place_0 = (cr44889_state[(2)]);
var cr44889_place_2 = cljs.core.object_array;
var cr44889_place_3 = (1);
var cr44889_place_4 = (function (){var G__45370 = cr44889_place_3;
var fexpr__45369 = cr44889_place_2;
return (fexpr__45369.cljs$core$IFn$_invoke$arity$1 ? fexpr__45369.cljs$core$IFn$_invoke$arity$1(G__45370) : fexpr__45369.call(null,G__45370));
})();
var cr44889_place_5 = console;
var cr44889_place_6 = "Connecting...";
var cr44889_place_7 = cr44889_place_5.log(cr44889_place_6);
var cr44889_place_8 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr44889_place_9 = cr44889_place_0;
var cr44889_place_10 = cr44889_place_9;
var cr44889_place_11 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr44889_place_10);
var cr44889_place_12 = null;
var cr44889_place_13 = false;
(cr44889_state[(0)] = cr44889_block_2);

(cr44889_state[(3)] = cr44889_place_12);

(cr44889_state[(4)] = cr44889_place_13);

(cr44889_state[(5)] = cr44889_place_4);

(cr44889_state[(6)] = cr44889_place_8);

return cr44889_state;
}catch (e45368){var cr44889_exception = e45368;
(cr44889_state[(0)] = null);

(cr44889_state[(1)] = null);

(cr44889_state[(2)] = null);

throw cr44889_exception;
}});
var cr44889_block_7 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44889_block_7(cr44889_state){
try{var cr44889_place_64 = (cr44889_state[(4)]);
var cr44889_place_69 = cr44889_place_64;
var cr44889_place_70 = cr44889_place_69;
var cr44889_place_71 = cr44889_place_70;
var cr44889_place_72 = null;
var G__45372 = cr44889_place_71;
switch (G__45372) {
case (1005):
case (1006):
(cr44889_state[(0)] = cr44889_block_8);

(cr44889_state[(4)] = null);

(cr44889_state[(6)] = null);

(cr44889_state[(4)] = cr44889_place_72);

return cr44889_state;

break;
case (1008):
(cr44889_state[(0)] = cr44889_block_9);

(cr44889_state[(4)] = null);

(cr44889_state[(5)] = null);

(cr44889_state[(1)] = null);

(cr44889_state[(3)] = null);

(cr44889_state[(2)] = null);

(cr44889_state[(6)] = null);

return cr44889_state;

break;
default:
(cr44889_state[(0)] = cr44889_block_10);

(cr44889_state[(4)] = null);

(cr44889_state[(5)] = null);

(cr44889_state[(1)] = null);

(cr44889_state[(3)] = null);

(cr44889_state[(2)] = null);

(cr44889_state[(1)] = cr44889_place_69);

return cr44889_state;

}
}catch (e45371){var cr44889_exception = e45371;
(cr44889_state[(0)] = null);

(cr44889_state[(4)] = null);

(cr44889_state[(5)] = null);

(cr44889_state[(1)] = null);

(cr44889_state[(3)] = null);

(cr44889_state[(2)] = null);

(cr44889_state[(6)] = null);

throw cr44889_exception;
}});
var cr44889_block_17 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44889_block_17(cr44889_state){
try{var cr44889_place_130 = missionary.core.unpark();
(cr44889_state[(0)] = cr44889_block_1);

(cr44889_state[(1)] = cr44889_place_130);

return cr44889_state;
}catch (e45373){var cr44889_exception = e45373;
(cr44889_state[(0)] = null);

(cr44889_state[(1)] = null);

(cr44889_state[(2)] = null);

throw cr44889_exception;
}});
var cr44889_block_11 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44889_block_11(cr44889_state){
try{var cr44889_place_72 = (cr44889_state[(4)]);
(cr44889_state[(0)] = cr44889_block_13);

(cr44889_state[(4)] = null);

(cr44889_state[(5)] = cr44889_place_72);

return cr44889_state;
}catch (e45374){var cr44889_exception = e45374;
(cr44889_state[(0)] = null);

(cr44889_state[(5)] = null);

(cr44889_state[(1)] = null);

(cr44889_state[(3)] = null);

(cr44889_state[(2)] = null);

(cr44889_state[(4)] = null);

throw cr44889_exception;
}});
var cr44889_block_6 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44889_block_6(cr44889_state){
try{var cr44889_place_56 = (cr44889_state[(4)]);
var cr44889_place_61 = cr44889_place_56;
var cr44889_place_62 = new cljs.core.Keyword(null,"code","code",1586293142);
var cr44889_place_63 = cr44889_place_61;
var cr44889_place_64 = cr44889_place_62.cljs$core$IFn$_invoke$arity$1(cr44889_place_63);
var cr44889_place_65 = cr44889_place_64;
var cr44889_place_66 = null;
var cr44889_place_67 = (cr44889_place_65 == cr44889_place_66);
var cr44889_place_68 = null;
if(cr44889_place_67){
(cr44889_state[(0)] = cr44889_block_12);

(cr44889_state[(4)] = null);

(cr44889_state[(5)] = cr44889_place_68);

return cr44889_state;
} else {
(cr44889_state[(0)] = cr44889_block_7);

(cr44889_state[(4)] = null);

(cr44889_state[(6)] = cr44889_place_61);

(cr44889_state[(4)] = cr44889_place_64);

(cr44889_state[(5)] = cr44889_place_68);

return cr44889_state;
}
}catch (e45375){var cr44889_exception = e45375;
(cr44889_state[(0)] = null);

(cr44889_state[(1)] = null);

(cr44889_state[(3)] = null);

(cr44889_state[(4)] = null);

(cr44889_state[(2)] = null);

throw cr44889_exception;
}});
var cr44889_block_10 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44889_block_10(cr44889_state){
try{var cr44889_place_69 = (cr44889_state[(1)]);
var cr44889_place_61 = (cr44889_state[(6)]);
var cr44889_place_86 = cljs.core.ex_info;
var cr44889_place_87 = "Remote error - ";
var cr44889_place_88 = cr44889_place_69;
var cr44889_place_89 = " ";
var cr44889_place_90 = new cljs.core.Keyword(null,"reason","reason",-2070751759);
var cr44889_place_91 = cr44889_place_61;
var cr44889_place_92 = cr44889_place_90.cljs$core$IFn$_invoke$arity$1(cr44889_place_91);
var cr44889_place_93 = [cr44889_place_87,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44889_place_88),cr44889_place_89,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44889_place_92)].join('');
var cr44889_place_94 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr44889_place_95 = (function (){var G__45378 = cr44889_place_93;
var G__45379 = cr44889_place_94;
var fexpr__45377 = cr44889_place_86;
return (fexpr__45377.cljs$core$IFn$_invoke$arity$2 ? fexpr__45377.cljs$core$IFn$_invoke$arity$2(G__45378,G__45379) : fexpr__45377.call(null,G__45378,G__45379));
})();
var cr44889_place_96 = (function(){throw cr44889_place_95})();
(cr44889_state[(0)] = null);

(cr44889_state[(1)] = null);

(cr44889_state[(6)] = null);

return null;
}catch (e45376){var cr44889_exception = e45376;
(cr44889_state[(0)] = null);

(cr44889_state[(1)] = null);

(cr44889_state[(6)] = null);

throw cr44889_exception;
}});
var cr44889_block_3 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44889_block_3(cr44889_state){
try{var cr44889_place_51 = missionary.core.unpark();
(cr44889_state[(0)] = cr44889_block_5);

(cr44889_state[(3)] = cr44889_place_51);

return cr44889_state;
}catch (e45380){var cr44889_exception = e45380;
(cr44889_state[(0)] = cr44889_block_4);

(cr44889_state[(3)] = cr44889_exception);

return cr44889_state;
}});
var cr44889_block_19 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44889_block_19(cr44889_state){
try{var cr44889_place_105 = (cr44889_state[(1)]);
(cr44889_state[(0)] = null);

(cr44889_state[(1)] = null);

return cr44889_place_105;
}catch (e45381){var cr44889_exception = e45381;
(cr44889_state[(0)] = null);

(cr44889_state[(1)] = null);

throw cr44889_exception;
}});
return cloroutine.impl.coroutine((function (){var G__45382 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((7));
(G__45382[(0)] = cr44889_block_0);

return G__45382;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.reload_when_stale = (function hyperfiddle$electric_client$reload_when_stale(task){
return (function (s,f){
var G__45383 = s;
var G__45384 = (function (error){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405),new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(error)))){
console.log("Server and client version mismatch. Refreshing page.");

window.location.reload();
} else {
}

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(error) : f.call(null,error));
});
return (task.cljs$core$IFn$_invoke$arity$2 ? task.cljs$core$IFn$_invoke$arity$2(G__45383,G__45384) : task.call(null,G__45383,G__45384));
});
});

//# sourceMappingURL=hyperfiddle.electric_client.js.map
