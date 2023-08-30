const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://beverages-and-desserts.p.rapidapi.com/desserts/%7Bid%7D',
  headers: {
    'X-RapidAPI-Key': '2a5d19435dmsh01b31b580a8a8ebp1421c5jsne2c11297065f',
    'X-RapidAPI-Host': 'beverages-and-desserts.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}