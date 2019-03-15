module.exports.auth = (event) => {

    // adds the function `getProp` to Object
    // allowing for case insensitively getting keys 
    Object.defineProperty(Object.prototype, "getProp", {
        value: function (prop) {
            var key,self = this;
            for (key in self) {
                if (key.toLowerCase() == prop.toLowerCase()) {
                    return self[key];
                }
            }
        },
        enumerable = false,
        writable = true
    });

    const sharedSecretKey = process.env.SHARED_SECRET_KEY || "";
    var clientKey = event.headers.getProp('shared_secret_key') || "";
    
    if (sharedSecretKey == "") {
      return null;
    }
    if (clientKey == "" || clientKey != sharedSecretKey) {
      return false;
    }
    return true;
}