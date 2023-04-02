class Entry {
    activity: string;
    type: string;
    participants: number;
    price: number;
    link: string;
    key: string;
    accessibility: number;
}

function request<TResponse>(
    url: string,
    config: RequestInit = {}
): Promise<TResponse> {
    return fetch(url, config)
        .then((response) => response.json())
        .then((data) => data as TResponse);
}

function getData() {
    request<Entry>("https://www.boredapi.com/api/activity")
        .then((data) => {
            const output = document.getElementById("output");

            const activity = document.createElement("li");
            activity.innerHTML = "Activity: " + data.activity;
            output.append(activity);

            const type = document.createElement("li");
            type.innerHTML = "Type: " + data.type;
            output.append(type);

            const participants = document.createElement("li");
            participants.innerHTML = "Participants: " + data.participants;
            output.append(participants);

            const price = document.createElement("li");
            price.innerHTML = "Price: " + data.price;
            output.append(price);

            const link = document.createElement("li");
            link.innerHTML = "Link: " + data.link;
            output.append(link);

            const key = document.createElement("li");
            key.innerHTML = "Key: " + data.key;
            output.append(key);

            const accessibility = document.createElement("li");
            accessibility.innerHTML = "Accessibility: " + data.accessibility;
            output.append(accessibility);

            const newLine = document.createElement("br");
            output.append(newLine);
        }).catch((error) => {
        console.error(error);
    });
}