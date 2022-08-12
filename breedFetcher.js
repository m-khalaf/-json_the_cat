const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    let description;

    if (data.length === 0) {
      error = 'breed does not exist';
    } else {
      description = data[0].description;
    }
    
    callback(error, description);
  });
};
module.exports = { fetchBreedDescription };



