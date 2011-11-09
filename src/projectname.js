var MYNAMESPACE = (function() {
    var modules = {}, init, module;

    init = function() {
        console.log('We has lift off');
    };

    module = function(name) {
        if (modules[name]) {
            return modules[name];
        }

        modules[name] = { Views: {} };
        return modules[name];
    };

    return {
        init: init,
        module: module,
    };
}());

jQuery(function($) {
    MYNAMESPACE.init();
});


