// IIFE
var Hello = (function () {
    // Class
    var Hello = function () {
        this.firstName = "Abdallah";
        this.lastName = "Maher";
    };
  
    // Static method 
    Hello.getInstance = function () {
        // Static attribute
        if (!Hello.instance) {
            Hello.instance = new Hello();
        }
        return Hello.instance;
    };
 
    // only visible part from the outside
    return {
        getInstance: function () {
            return Hello.getInstance();
        }
    };
  
})();

module.exports = Hello;