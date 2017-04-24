app.factory("storageService", function() {

    return {
        "setUserInfo": function(data) {
            localStorage.Info = JSON.stringify(data);
            return true;
        },
        "getUserInfo": function() {
            if (localStorage.Info === undefined) {
                return -1;
            } else {
                return JSON.parse(localStorage.Info);
            }
        },
        "clearInfo": function() {
            localStorage.removeItem("Info");
        }
    }

});