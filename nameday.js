const url = new URL("https://nameday.abalin.net/api/V1/getdate");

const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

const fs = require('fs');
const path = require('path');
const filename = 'data.txt';
const filepath = path.join(__dirname, filename);

const namedays = () => {
    let allNames = [];
    for (let month = 1; month <= 12; month++) {
        for (let day = 1; day <= 31; day++) {
            setTimeout(() => {
                const params = {
                    day: `${day}`,
                    month: `${month}`,
                    country: "pl",
                };

                Object.keys(params).forEach((key) =>
                    url.searchParams.append(key, params[key])
                );

                fetch(url, {
                    method: "POST",
                    headers,
                })
                    .then((response) => response.json())
                    .then((data) => {
                        let names = data.nameday;
                        allNames=names['pl'].split(', ').join(", ");
                        fs.appendFile(filepath, allNames + "\n", (err) => {
                            if (err) throw err;
                        });
                    });
            }, 1000 * (1 + day));
        }
    
    }
};