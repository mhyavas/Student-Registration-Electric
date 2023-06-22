goog.provide('user.tutorial_7guis_4_timer');
user.tutorial_7guis_4_timer.initial_goal = (10);
user.tutorial_7guis_4_timer.seconds = (function user$tutorial_7guis_4_timer$seconds(milliseconds){
return (Math.floor((milliseconds / (100))) / (10));
});
user.tutorial_7guis_4_timer.second_precision = (function user$tutorial_7guis_4_timer$second_precision(milliseconds){
return (Math.floor((milliseconds / (1000))) * (1000));
});
user.tutorial_7guis_4_timer.now = (function user$tutorial_7guis_4_timer$now(){
return user.tutorial_7guis_4_timer.second_precision(Date.now());
});

//# sourceMappingURL=user.tutorial_7guis_4_timer.js.map
