var Entry = /** @class */ (function () {
    function Entry() {
    }
    return Entry;
}());
function request(url, config) {
    if (config === void 0) { config = {}; }
    return fetch(url, config)
        .then(function (response) { return response.json(); })
        .then(function (data) { return data; });
}
function getData() {
    request("https://www.boredapi.com/api/activity")
        .then(function (data) {
        var output = document.getElementById("output");
        var activity = document.createElement("li");
        activity.innerHTML = "Activity: " + data.activity;
        output.append(activity);
        var type = document.createElement("li");
        type.innerHTML = "Type: " + data.type;
        output.append(type);
        var participants = document.createElement("li");
        participants.innerHTML = "Participants: " + data.participants;
        output.append(participants);
        var price = document.createElement("li");
        price.innerHTML = "Price: " + data.price;
        output.append(price);
        var link = document.createElement("li");
        link.innerHTML = "Link: " + data.link;
        output.append(link);
        var key = document.createElement("li");
        key.innerHTML = "Key: " + data.key;
        output.append(key);
        var accessibility = document.createElement("li");
        accessibility.innerHTML = "Accessibility: " + data.accessibility;
        output.append(accessibility);
        var newLine = document.createElement("br");
        output.append(newLine);
    }).catch(function (error) {
        console.error(error);
    });
}
