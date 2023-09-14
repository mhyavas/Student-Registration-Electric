goog.provide('missionary.impl.Heap');
missionary.impl.Heap.create = (function missionary$impl$Heap$create(cap){
var G__28748 = (new Array((cap + (1))));
(G__28748[(0)] = (0));

return G__28748;
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

var G__28767 = p;
j__$1 = G__28767;
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

var j_28769 = (1);
while(true){
var l_28770 = (j_28769 << (1));
if((l_28770 < s)){
var x_28771 = (heap[j_28769]);
var y_28772 = (heap[l_28770]);
var r_28773 = (l_28770 + (1));
if((r_28773 < s)){
var z_28774 = (heap[r_28773]);
if((y_28772 < z_28774)){
if((z_28774 < x_28771)){
(heap[r_28773] = x_28771);

(heap[j_28769] = z_28774);

var G__28776 = r_28773;
j_28769 = G__28776;
continue;
} else {
}
} else {
if((y_28772 < x_28771)){
(heap[l_28770] = x_28771);

(heap[j_28769] = y_28772);

var G__28778 = l_28770;
j_28769 = G__28778;
continue;
} else {
}
}
} else {
if((y_28772 < x_28771)){
(heap[l_28770] = x_28771);

(heap[j_28769] = y_28772);

var G__28779 = l_28770;
j_28769 = G__28779;
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
