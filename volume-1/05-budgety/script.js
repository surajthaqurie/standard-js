var bugetController = (function () {

    // Private
    var x = 23;
    var add = function (a) {
        return x + a;
    }

    // Public and works on closures principle
    return {
        publicTest: function (b) {
            return (add(b));
        }
    }

})();


var UIController = (function () {
    // Some code

})();


var controller = (function (bugetCtrl, UICtrl) {

    var z = bugetCtrl.publicTest(5);

    return {
        anotherPublic: function () {
            console.log(z);
        }
    }

})(bugetController, UIController);