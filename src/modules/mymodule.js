(function(M) {
    var myVar;

    M.getMyVar = function() {
        return myVar;
    };

    M.setMyVar = function(value) {
        myVar = value;
    };
        
}(MYNAMESPACE.module('mymodule')));
