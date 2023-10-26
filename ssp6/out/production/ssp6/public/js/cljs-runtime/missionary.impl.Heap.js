goog.provide('missionary.impl.Heap');
missionary.impl.Heap.create = (function missionary$impl$Heap$create(cap){
var G__40066 = (new Array((cap + (1))));
(G__40066[(0)] = (0));

return G__40066;
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

var G__40067 = p;
j__$1 = G__40067;
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

var j_40068 = (1);
while(true){
var l_40069 = (j_40068 << (1));
if((l_40069 < s)){
var x_40070 = (heap[j_40068]);
var y_40071 = (heap[l_40069]);
var r_40072 = (l_40069 + (1));
if((r_40072 < s)){
var z_40073 = (heap[r_40072]);
if((y_40071 < z_40073)){
if((z_40073 < x_40070)){
(heap[r_40072] = x_40070);

(heap[j_40068] = z_40073);

var G__40074 = r_40072;
j_40068 = G__40074;
continue;
} else {
}
} else {
if((y_40071 < x_40070)){
(heap[l_40069] = x_40070);

(heap[j_40068] = y_40071);

var G__40075 = l_40069;
j_40068 = G__40075;
continue;
} else {
}
}
} else {
if((y_40071 < x_40070)){
(heap[l_40069] = x_40070);

(heap[j_40068] = y_40071);

var G__40076 = l_40069;
j_40068 = G__40076;
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
