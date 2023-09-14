goog.provide('missionary.impl.Propagator');





/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Propagator.Subscription = (function (lcb,rcb,pub,sub,flag,value,state,prev,next){
this.lcb = lcb;
this.rcb = rcb;
this.pub = pub;
this.sub = sub;
this.flag = flag;
this.value = value;
this.state = state;
this.prev = prev;
this.next = next;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Propagator.Subscription.prototype.call = (function (unused__13625__auto__){
var self__ = this;
var self__ = this;
var G__43034 = (arguments.length - (1));
switch (G__43034) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Propagator.Subscription.prototype.apply = (function (self__,args43033){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args43033)));
}));

(missionary.impl.Propagator.Subscription.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var ctx = missionary.impl.Propagator.context;
var ps = this$.pub;
var pub__$1 = ps.parent;
var held = (missionary.impl.Propagator.enter.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Propagator.enter.cljs$core$IFn$_invoke$arity$1(pub__$1) : missionary.impl.Propagator.enter.call(null,pub__$1));
var busy = ctx.busy;
var node = ctx.node;
var edge = ctx.edge;
(ctx.busy = true);

(ctx.node = ps);

(ctx.edge = this$);

var fexpr__43036_43100 = this$.state;
(fexpr__43036_43100.cljs$core$IFn$_invoke$arity$0 ? fexpr__43036_43100.cljs$core$IFn$_invoke$arity$0() : fexpr__43036_43100.call(null));

return (missionary.impl.Propagator.exit.cljs$core$IFn$_invoke$arity$6 ? missionary.impl.Propagator.exit.cljs$core$IFn$_invoke$arity$6(pub__$1,ctx,held,busy,node,edge) : missionary.impl.Propagator.exit.call(null,pub__$1,ctx,held,busy,node,edge));
}));

(missionary.impl.Propagator.Subscription.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var ctx = missionary.impl.Propagator.context;
var ps = this$__$1.pub;
var pub__$1 = ps.parent;
var held = (missionary.impl.Propagator.enter.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Propagator.enter.cljs$core$IFn$_invoke$arity$1(pub__$1) : missionary.impl.Propagator.enter.call(null,pub__$1));
var busy = ctx.busy;
var node = ctx.node;
var edge = ctx.edge;
(ctx.busy = true);

(ctx.node = ps);

(ctx.edge = this$__$1);

try{return cljs.core.deref(this$__$1.state);
}finally {(missionary.impl.Propagator.exit.cljs$core$IFn$_invoke$arity$6 ? missionary.impl.Propagator.exit.cljs$core$IFn$_invoke$arity$6(pub__$1,ctx,held,busy,node,edge) : missionary.impl.Propagator.exit.call(null,pub__$1,ctx,held,busy,node,edge));
}}));

(missionary.impl.Propagator.Subscription.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lcb","lcb",-1007960090,null),new cljs.core.Symbol(null,"rcb","rcb",-172851131,null),new cljs.core.Symbol(null,"pub","pub",451387619,null),new cljs.core.Symbol(null,"sub","sub",-453228498,null),cljs.core.with_meta(new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"next","next",1522830042,null)], null);
}));

(missionary.impl.Propagator.Subscription.cljs$lang$type = true);

(missionary.impl.Propagator.Subscription.cljs$lang$ctorStr = "missionary.impl.Propagator/Subscription");

(missionary.impl.Propagator.Subscription.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Propagator/Subscription");
}));

/**
 * Positional factory function for missionary.impl.Propagator/Subscription.
 */
missionary.impl.Propagator.__GT_Subscription = (function missionary$impl$Propagator$__GT_Subscription(lcb,rcb,pub,sub,flag,value,state,prev,next){
return (new missionary.impl.Propagator.Subscription(lcb,rcb,pub,sub,flag,value,state,prev,next));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IComparable}
*/
missionary.impl.Propagator.Publisher = (function (ranks,held,children,current,prop,child,sibling){
this.ranks = ranks;
this.held = held;
this.children = children;
this.current = current;
this.prop = prop;
this.child = child;
this.sibling = sibling;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 2048;
});
(missionary.impl.Propagator.Publisher.prototype.call = (function (unused__13625__auto__){
var self__ = this;
var self__ = this;
var G__43047 = (arguments.length - (1));
switch (G__43047) {
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Propagator.Publisher.prototype.apply = (function (self__,args43044){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args43044)));
}));

(missionary.impl.Propagator.Publisher.prototype.cljs$core$IFn$_invoke$arity$2 = (function (lcb,rcb){
var self__ = this;
var this$ = this;
var ctx = missionary.impl.Propagator.context;
var held__$1 = (missionary.impl.Propagator.enter.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Propagator.enter.cljs$core$IFn$_invoke$arity$1(this$) : missionary.impl.Propagator.enter.call(null,this$));
var busy = ctx.busy;
var node = ctx.node;
var edge = ctx.edge;
var ps = this$.current;
var s = missionary.impl.Propagator.__GT_Subscription(lcb,rcb,ps,node,false,null,null,null,null);
(ctx.busy = true);

(ctx.node = ps);

(ctx.edge = s);

(s.state = cljs.core.deref(ps.state));

(missionary.impl.Propagator.exit.cljs$core$IFn$_invoke$arity$6 ? missionary.impl.Propagator.exit.cljs$core$IFn$_invoke$arity$6(this$,ctx,held__$1,busy,node,edge) : missionary.impl.Propagator.exit.call(null,this$,ctx,held__$1,busy,node,edge));

return s;
}));

(missionary.impl.Propagator.Publisher.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
if((this$__$1 === that)){
return (0);
} else {
if(cljs.core.truth_((function (){var G__43052 = this$__$1.ranks;
var G__43053 = that.ranks;
return (missionary.impl.Propagator.lt.cljs$core$IFn$_invoke$arity$2 ? missionary.impl.Propagator.lt.cljs$core$IFn$_invoke$arity$2(G__43052,G__43053) : missionary.impl.Propagator.lt.call(null,G__43052,G__43053));
})())){
return (-1);
} else {
return (1);
}
}
}));

(missionary.impl.Propagator.Publisher.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ranks","ranks",-162053339,null),new cljs.core.Symbol(null,"held","held",576003250,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"prop","prop",1125363195,null),new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.Symbol(null,"sibling","sibling",456666527,null)], null);
}));

(missionary.impl.Propagator.Publisher.cljs$lang$type = true);

(missionary.impl.Propagator.Publisher.cljs$lang$ctorStr = "missionary.impl.Propagator/Publisher");

(missionary.impl.Propagator.Publisher.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Propagator/Publisher");
}));

/**
 * Positional factory function for missionary.impl.Propagator/Publisher.
 */
missionary.impl.Propagator.__GT_Publisher = (function missionary$impl$Propagator$__GT_Publisher(ranks,held,children,current,prop,child,sibling){
return (new missionary.impl.Propagator.Publisher(ranks,held,children,current,prop,child,sibling));
});


/**
* @constructor
*/
missionary.impl.Propagator.Process = (function (parent,state,subs){
this.parent = parent;
this.state = state;
this.subs = subs;
});

(missionary.impl.Propagator.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"subs","subs",1453849536,null)], null);
}));

(missionary.impl.Propagator.Process.cljs$lang$type = true);

(missionary.impl.Propagator.Process.cljs$lang$ctorStr = "missionary.impl.Propagator/Process");

(missionary.impl.Propagator.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Propagator/Process");
}));

/**
 * Positional factory function for missionary.impl.Propagator/Process.
 */
missionary.impl.Propagator.__GT_Process = (function missionary$impl$Propagator$__GT_Process(parent,state,subs){
return (new missionary.impl.Propagator.Process(parent,state,subs));
});


/**
* @constructor
*/
missionary.impl.Propagator.Context = (function (step,busy,node,edge,emitter,reacted,delayed){
this.step = step;
this.busy = busy;
this.node = node;
this.edge = edge;
this.emitter = emitter;
this.reacted = reacted;
this.delayed = delayed;
});

(missionary.impl.Propagator.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"step","step",-1365547645,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol(null,"edge","edge",-1734526616,null),new cljs.core.Symbol(null,"emitter","emitter",1266210944,null),new cljs.core.Symbol(null,"reacted","reacted",-2130950267,null),new cljs.core.Symbol(null,"delayed","delayed",1892523756,null)], null);
}));

(missionary.impl.Propagator.Context.cljs$lang$type = true);

(missionary.impl.Propagator.Context.cljs$lang$ctorStr = "missionary.impl.Propagator/Context");

(missionary.impl.Propagator.Context.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Propagator/Context");
}));

/**
 * Positional factory function for missionary.impl.Propagator/Context.
 */
missionary.impl.Propagator.__GT_Context = (function missionary$impl$Propagator$__GT_Context(step,busy,node,edge,emitter,reacted,delayed){
return (new missionary.impl.Propagator.Context(step,busy,node,edge,emitter,reacted,delayed));
});

missionary.impl.Propagator.context = missionary.impl.Propagator.__GT_Context((0),false,null,null,null,null,null);
missionary.impl.Propagator.children = (0);
missionary.impl.Propagator.lt = (function missionary$impl$Propagator$lt(x,y){
var xl = x.length;
var yl = y.length;
var ml = (function (){var x__5133__auto__ = xl;
var y__5134__auto__ = yl;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var i = (0);
while(true){
if((i < ml)){
var xi = (x[i]);
var yi = (y[i]);
if((xi === yi)){
var G__43114 = (i + (1));
i = G__43114;
continue;
} else {
return (xi < yi);
}
} else {
return (xl > yl);
}
break;
}
});
missionary.impl.Propagator.link = (function missionary$impl$Propagator$link(x,y){
if(missionary.impl.Propagator.lt(x.ranks,y.ranks)){
(y.sibling = x.child);

(x.child = y);

return x;
} else {
(x.sibling = y.child);

(y.child = x);

return y;
}
});
missionary.impl.Propagator.dequeue = (function missionary$impl$Propagator$dequeue(pub){
var head = pub.child;
(pub.child = null);

var heap = null;
var prev = null;
var head__$1 = head;
while(true){
if((head__$1 == null)){
if((prev == null)){
return heap;
} else {
if((heap == null)){
return prev;
} else {
return missionary.impl.Propagator.link(heap,prev);
}
}
} else {
var next = head__$1.sibling;
(head__$1.sibling = null);

if((prev == null)){
var G__43115 = heap;
var G__43116 = head__$1;
var G__43117 = next;
heap = G__43115;
prev = G__43116;
head__$1 = G__43117;
continue;
} else {
var head__$2 = missionary.impl.Propagator.link(prev,head__$1);
var G__43118 = (((heap == null))?head__$2:missionary.impl.Propagator.link(heap,head__$2));
var G__43119 = null;
var G__43120 = next;
heap = G__43118;
prev = G__43119;
head__$1 = G__43120;
continue;
}
}
break;
}
});
missionary.impl.Propagator.enqueue = (function missionary$impl$Propagator$enqueue(r,p){
if((r == null)){
return p;
} else {
return missionary.impl.Propagator.link(p,r);
}
});
missionary.impl.Propagator.enter = (function missionary$impl$Propagator$enter(pub){
var held = pub.held;
(pub.held = true);

return held;
});
missionary.impl.Propagator.flip = (function missionary$impl$Propagator$flip(ctx){
var pub = ctx.delayed;
(ctx.delayed = null);

(ctx.step = (ctx.step + (1)));

return pub;
});
missionary.impl.Propagator.callback = (function missionary$impl$Propagator$callback(ctx,s){
(ctx.edge = null);

var s__$1 = s;
while(true){
if((s__$1 == null)){
return null;
} else {
var cb = (cljs.core.truth_(s__$1.flag)?s__$1.rcb:s__$1.lcb);
var value = s__$1.value;
var n = s__$1.next;
(s__$1.value = null);

(s__$1.next = null);

(ctx.node = s__$1.sub);

if((missionary.impl.Propagator.none === value)){
(cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
(cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(value) : cb.call(null,value));
}

var G__43121 = n;
s__$1 = G__43121;
continue;
}
break;
}
});
missionary.impl.Propagator.tick = (function missionary$impl$Propagator$tick(pub,ctx){
(pub.held = true);

var ps_43122 = pub.current;
(ctx.reacted = missionary.impl.Propagator.dequeue(pub));

(ctx.emitter = pub);

(ctx.node = ps_43122);

var fexpr__43079_43123 = ps_43122.state;
(fexpr__43079_43123.cljs$core$IFn$_invoke$arity$0 ? fexpr__43079_43123.cljs$core$IFn$_invoke$arity$0() : fexpr__43079_43123.call(null));

var s = pub.prop;
(pub.prop = null);

(pub.held = false);

return missionary.impl.Propagator.callback(ctx,s);
});
missionary.impl.Propagator.exit = (function missionary$impl$Propagator$exit(pub,ctx,held,busy,node,edge){
var s = ((held)?null:(function (){var s = pub.prop;
(pub.prop = null);

return s;
})());
(pub.held = held);

missionary.impl.Propagator.callback(ctx,s);

if(busy){
} else {
(ctx.edge = null);

while(true){
var temp__5806__auto___43124 = ctx.reacted;
if((temp__5806__auto___43124 == null)){
(ctx.step = (ctx.step + (1)));

var temp__5808__auto___43125 = ctx.delayed;
if((temp__5808__auto___43125 == null)){
} else {
var pub_43126__$1 = temp__5808__auto___43125;
(ctx.delayed = null);

missionary.impl.Propagator.tick(pub_43126__$1,ctx);

continue;
}
} else {
var pub_43130__$1 = temp__5806__auto___43124;
missionary.impl.Propagator.tick(pub_43130__$1,ctx);

continue;
}
break;
}

(ctx.emitter = null);
}

(ctx.busy = busy);

(ctx.node = node);

(ctx.edge = edge);

return null;
});
missionary.impl.Propagator.none = ({});
missionary.impl.Propagator.step = (function missionary$impl$Propagator$step(){
return missionary.impl.Propagator.context.step;
});
missionary.impl.Propagator.reset = (function missionary$impl$Propagator$reset(state){
var pub = missionary.impl.Propagator.context.node.parent;
return (pub.current = missionary.impl.Propagator.__GT_Process(pub,state,null));
});
missionary.impl.Propagator.attached = (function missionary$impl$Propagator$attached(){
return (!((missionary.impl.Propagator.context.edge.prev == null)));
});
missionary.impl.Propagator.detach = (function missionary$impl$Propagator$detach(flag,value){
var ctx = missionary.impl.Propagator.context;
var ps = ctx.node;
var s = ctx.edge;
var p = s.prev;
var n = s.next;
var pub = ps.parent;
(s.value = value);

(s.flag = flag);

(s.prev = null);

(s.next = pub.prop);

(pub.prop = s);

if((p === s)){
return (ps.subs = null);
} else {
(n.prev = p);

(p.next = n);

return (ps.subs = n);
}
});
missionary.impl.Propagator.dispatch = (function missionary$impl$Propagator$dispatch(flag,value){
var ctx = missionary.impl.Propagator.context;
var ps = ctx.node;
var pub = ps.parent;
var temp__5808__auto__ = ps.subs;
if((temp__5808__auto__ == null)){
return null;
} else {
var subs = temp__5808__auto__;
(ps.subs = null);

((function (){var s = subs;
while(true){
(s.value = value);

(s.flag = flag);

(s.prev = null);

var n = s.next;
if((n === subs)){
return s;
} else {
var G__43136 = n;
s = G__43136;
continue;
}
break;
}
})().next = null);

return (pub.prop = subs);
}
});
missionary.impl.Propagator.schedule = (function missionary$impl$Propagator$schedule(){
var ctx = missionary.impl.Propagator.context;
var ps = ctx.node;
var pub = ps.parent;
if((ps === pub.current)){
var emitter = ctx.emitter;
if((((emitter == null)) || (missionary.impl.Propagator.lt(emitter.ranks,pub.ranks)))){
return (ctx.reacted = missionary.impl.Propagator.enqueue(ctx.reacted,pub));
} else {
return (ctx.delayed = missionary.impl.Propagator.enqueue(ctx.delayed,pub));
}
} else {
var fexpr__43090 = ps.state;
return (fexpr__43090.cljs$core$IFn$_invoke$arity$0 ? fexpr__43090.cljs$core$IFn$_invoke$arity$0() : fexpr__43090.call(null));
}
});
missionary.impl.Propagator.attach = (function missionary$impl$Propagator$attach(){
var ctx = missionary.impl.Propagator.context;
var ps = ctx.node;
var s = ctx.edge;
var temp__5806__auto__ = ps.subs;
if((temp__5806__auto__ == null)){
(ps.subs = s);

(s.prev = s);

return (s.next = s);
} else {
var n = temp__5806__auto__;
var p = n.prev;
(s.next = n);

(s.prev = p);

(p.next = s);

return (n.prev = s);
}
});
missionary.impl.Propagator.bind = (function missionary$impl$Propagator$bind(f){
var ps = missionary.impl.Propagator.context.node;
return (function() {
var G__43141 = null;
var G__43141__0 = (function (){
var ctx = missionary.impl.Propagator.context;
var pub = ps.parent;
var held = missionary.impl.Propagator.enter(pub);
var busy = ctx.busy;
var node = ctx.node;
var edge = ctx.edge;
(ctx.busy = true);

(ctx.node = ps);

(ctx.edge = null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return missionary.impl.Propagator.exit(pub,ctx,held,busy,node,edge);
});
var G__43141__1 = (function (x){
var ctx = missionary.impl.Propagator.context;
var pub = ps.parent;
var held = missionary.impl.Propagator.enter(pub);
var busy = ctx.busy;
var node = ctx.node;
var edge = ctx.edge;
(ctx.busy = true);

(ctx.node = ps);

(ctx.edge = null);

(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));

return missionary.impl.Propagator.exit(pub,ctx,held,busy,node,edge);
});
G__43141 = function(x){
switch(arguments.length){
case 0:
return G__43141__0.call(this);
case 1:
return G__43141__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43141.cljs$core$IFn$_invoke$arity$0 = G__43141__0;
G__43141.cljs$core$IFn$_invoke$arity$1 = G__43141__1;
return G__43141;
})()
});
missionary.impl.Propagator.publisher = (function missionary$impl$Propagator$publisher(state){
var pub = missionary.impl.Propagator.__GT_Publisher((function (){var temp__5806__auto__ = missionary.impl.Propagator.context.node;
if((temp__5806__auto__ == null)){
var G__43095 = [null];
(G__43095[(0)] = (function (){var G__43096 = missionary.impl.Propagator.children;
(missionary.impl.Propagator.children = (G__43096 + (1)));

return G__43096;
})());

return G__43095;
} else {
var ps = temp__5806__auto__;
var p = ps.parent;
var r = p.ranks;
var n = r.length;
var a = (new Array((n + (1))));
var n__5636__auto___43146 = n;
var i_43147 = (0);
while(true){
if((i_43147 < n__5636__auto___43146)){
(a[i_43147] = (r[i_43147]));

var G__43149 = (i_43147 + (1));
i_43147 = G__43149;
continue;
} else {
}
break;
}

var G__43097 = a;
(G__43097[n] = (function (){var G__43098 = p.children;
(p.children = (G__43098 + (1)));

return G__43098;
})());

return G__43097;
}
})(),false,(0),null,null,null,null);
(pub.current = missionary.impl.Propagator.__GT_Process(pub,state,null));

return pub;
});

//# sourceMappingURL=missionary.impl.Propagator.js.map
