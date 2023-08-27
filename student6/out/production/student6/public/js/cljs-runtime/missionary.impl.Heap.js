goog.provide('missionary.impl.Heap');
missionary.impl.Heap.create = (function missionary$impl$Heap$create(cap){
var G__30534 = (new Array((cap + (1))));
(G__30534[(0)] = (0));

return G__30534;
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

var G__30587 = p;
j__$1 = G__30587;
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

var j_30590 = (1);
while(true){
var l_30592 = (j_30590 << (1));
if((l_30592 < s)){
var x_30595 = (heap[j_30590]);
var y_30596 = (heap[l_30592]);
var r_30597 = (l_30592 + (1));
if((r_30597 < s)){
var z_30600 = (heap[r_30597]);
if((y_30596 < z_30600)){
if((z_30600 < x_30595)){
(heap[r_30597] = x_30595);

(heap[j_30590] = z_30600);

var G__30604 = r_30597;
j_30590 = G__30604;
continue;
} else {
}
} else {
if((y_30596 < x_30595)){
(heap[l_30592] = x_30595);

(heap[j_30590] = y_30596);

var G__30606 = l_30592;
j_30590 = G__30606;
continue;
} else {
}
}
} else {
if((y_30596 < x_30595)){
(heap[l_30592] = x_30595);

(heap[j_30590] = y_30596);

var G__30609 = l_30592;
j_30590 = G__30609;
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
