goog.provide('missionary.impl.Heap');
missionary.impl.Heap.create = (function missionary$impl$Heap$create(cap){
var G__40769 = (new Array((cap + (1))));
(G__40769[(0)] = (0));

return G__40769;
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

var G__40777 = p;
j__$1 = G__40777;
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

var j_40778 = (1);
while(true){
var l_40779 = (j_40778 << (1));
if((l_40779 < s)){
var x_40780 = (heap[j_40778]);
var y_40781 = (heap[l_40779]);
var r_40782 = (l_40779 + (1));
if((r_40782 < s)){
var z_40783 = (heap[r_40782]);
if((y_40781 < z_40783)){
if((z_40783 < x_40780)){
(heap[r_40782] = x_40780);

(heap[j_40778] = z_40783);

var G__40784 = r_40782;
j_40778 = G__40784;
continue;
} else {
}
} else {
if((y_40781 < x_40780)){
(heap[l_40779] = x_40780);

(heap[j_40778] = y_40781);

var G__40785 = l_40779;
j_40778 = G__40785;
continue;
} else {
}
}
} else {
if((y_40781 < x_40780)){
(heap[l_40779] = x_40780);

(heap[j_40778] = y_40781);

var G__40786 = l_40779;
j_40778 = G__40786;
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
