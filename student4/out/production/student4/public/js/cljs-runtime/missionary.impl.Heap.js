goog.provide('missionary.impl.Heap');
missionary.impl.Heap.create = (function missionary$impl$Heap$create(cap){
var G__40986 = (new Array((cap + (1))));
(G__40986[(0)] = (0));

return G__40986;
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

var G__40993 = p;
j__$1 = G__40993;
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

var j_40997 = (1);
while(true){
var l_40999 = (j_40997 << (1));
if((l_40999 < s)){
var x_41000 = (heap[j_40997]);
var y_41001 = (heap[l_40999]);
var r_41002 = (l_40999 + (1));
if((r_41002 < s)){
var z_41005 = (heap[r_41002]);
if((y_41001 < z_41005)){
if((z_41005 < x_41000)){
(heap[r_41002] = x_41000);

(heap[j_40997] = z_41005);

var G__41010 = r_41002;
j_40997 = G__41010;
continue;
} else {
}
} else {
if((y_41001 < x_41000)){
(heap[l_40999] = x_41000);

(heap[j_40997] = y_41001);

var G__41012 = l_40999;
j_40997 = G__41012;
continue;
} else {
}
}
} else {
if((y_41001 < x_41000)){
(heap[l_40999] = x_41000);

(heap[j_40997] = y_41001);

var G__41014 = l_40999;
j_40997 = G__41014;
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
