goog.provide('missionary.impl.Heap');
missionary.impl.Heap.create = (function missionary$impl$Heap$create(cap){
var G__41389 = (new Array((cap + (1))));
(G__41389[(0)] = (0));

return G__41389;
});
missionary.impl.Heap.size = (function missionary$impl$Heap$size(heap){
return (heap[(0)]);
});
missionary.impl.Heap.enqueue = (function missionary$impl$Heap$enqueue(heap,i){
var j = ((heap[(0)]) + (1));
(heap[(0)] = j);

(heap[j] = i);

var j__$1 = j;
while(true){
if(((1) === j__$1)){
return null;
} else {
var p = (j__$1 >> (1));
var x = (heap[j__$1]);
var y = (heap[p]);
if((y < x)){
return null;
} else {
(heap[p] = x);

(heap[j__$1] = y);

var G__41410 = p;
j__$1 = G__41410;
continue;
}
}
break;
}
});
missionary.impl.Heap.dequeue = (function missionary$impl$Heap$dequeue(heap){
var s = (heap[(0)]);
var i = (heap[(1)]);
(heap[(0)] = (s - (1)));

(heap[(1)] = (heap[s]));

var j_41412 = (1);
while(true){
var l_41413 = (j_41412 << (1));
if((l_41413 < s)){
var x_41415 = (heap[j_41412]);
var y_41416 = (heap[l_41413]);
var r_41417 = (l_41413 + (1));
if((r_41417 < s)){
var z_41418 = (heap[r_41417]);
if((y_41416 < z_41418)){
if((z_41418 < x_41415)){
(heap[r_41417] = x_41415);

(heap[j_41412] = z_41418);

var G__41419 = r_41417;
j_41412 = G__41419;
continue;
} else {
}
} else {
if((y_41416 < x_41415)){
(heap[l_41413] = x_41415);

(heap[j_41412] = y_41416);

var G__41420 = l_41413;
j_41412 = G__41420;
continue;
} else {
}
}
} else {
if((y_41416 < x_41415)){
(heap[l_41413] = x_41415);

(heap[j_41412] = y_41416);

var G__41421 = l_41413;
j_41412 = G__41421;
continue;
} else {
}
}
} else {
}
break;
}

return i;
});

//# sourceMappingURL=missionary.impl.Heap.js.map
