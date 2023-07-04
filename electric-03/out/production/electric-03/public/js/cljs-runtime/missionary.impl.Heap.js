goog.provide('missionary.impl.Heap');
missionary.impl.Heap.create = (function missionary$impl$Heap$create(cap){
var G__39921 = (new Array((cap + (1))));
(G__39921[(0)] = (0));

return G__39921;
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

var G__39975 = p;
j__$1 = G__39975;
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

var j_39976 = (1);
while(true){
var l_39977 = (j_39976 << (1));
if((l_39977 < s)){
var x_39978 = (heap[j_39976]);
var y_39979 = (heap[l_39977]);
var r_39980 = (l_39977 + (1));
if((r_39980 < s)){
var z_39981 = (heap[r_39980]);
if((y_39979 < z_39981)){
if((z_39981 < x_39978)){
(heap[r_39980] = x_39978);

(heap[j_39976] = z_39981);

var G__39982 = r_39980;
j_39976 = G__39982;
continue;
} else {
}
} else {
if((y_39979 < x_39978)){
(heap[l_39977] = x_39978);

(heap[j_39976] = y_39979);

var G__39986 = l_39977;
j_39976 = G__39986;
continue;
} else {
}
}
} else {
if((y_39979 < x_39978)){
(heap[l_39977] = x_39978);

(heap[j_39976] = y_39979);

var G__39987 = l_39977;
j_39976 = G__39987;
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
