goog.provide('demo.tutorial_7guis_4_timer');
demo.tutorial_7guis_4_timer.initial_goal = (10);
demo.tutorial_7guis_4_timer.seconds = (function demo$tutorial_7guis_4_timer$seconds(milliseconds){
return (Math.floor((milliseconds / (100))) / (10));
});
demo.tutorial_7guis_4_timer.second_precision = (function demo$tutorial_7guis_4_timer$second_precision(milliseconds){
return (Math.floor((milliseconds / (1000))) * (1000));
});
demo.tutorial_7guis_4_timer.now = (function demo$tutorial_7guis_4_timer$now(){
return demo.tutorial_7guis_4_timer.second_precision(Date.now());
});

//# sourceMappingURL=demo.tutorial_7guis_4_timer.js.map
