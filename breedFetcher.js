const request = require("request");
const arg = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${arg[0]}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log(error);
  } else if (data.length === 0) {
    console.log("breed does not exist");
  } else {
    console.log(data[0].description);
  }

});
