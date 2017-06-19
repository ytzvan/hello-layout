/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var request = require("request");


module.exports = {

	index : function(req, res) {
		return res.view('Pages/tour');
	},

	feelback : function (req, res) {
		var options = { method: 'POST',
  		url: 'http://api2.feelback.io/source/provision',
  		body: 
   		{ api_key: '53a68d85552d3a2158caeb8e7743a6ea',
     		type: 'CUSTOM',
     		source_hash: '7f100b7b36092fb9b06dfb4fac360931',
     		feels: '[ { "timestamp":"2017-05-07 14:00:00", "feel_val":"BAD", "lat":"9.018749237060547", "lon":"-79.53340911865234", "timezone":"-500", "timeoffset":"300", "question_hash":"a5bfc9e07964f8dddeb95fc584cd965d", "prompt_hash":"", "comment":"COOL MAN", "people":{ "user_id":"22", "first_name":"John1", "email":"john1@gmail.com", "person_attributes":{ "state":"Florida" } } }, { "timestamp":"2017-04-07 14:00:00", "feel_val":"GOOD", "lat":"9.018749237060547", "lon":"-79.53340911865234", "timezone":"-500", "timeoffset":"300", "question_hash":"a5bfc9e07964f8dddeb95fc584cd965d", "prompt_hash":"", "comment":"COOL MAN", "people":{ "user_id":"23", "first_name":"John2", "email":"john2@gmail.com", "person_attributes":{ "state":"California" } } }, { "timestamp":"2017-04-07 14:00:00", "feel_val":"BAD", "lat":"9.018749237060547", "lon":"-79.53340911865234", "timezone":"-500", "timeoffset":"300", "question_hash":"a5bfc9e07964f8dddeb95fc584cd965d", "prompt_hash":"084b6fbb10729ed4da8c3d3f5a3ae7c9", "comment":"COOL!", "people":{ "user_id":"24", "first_name":"John3", "email":"john3@gmail.com", "person_attributes":{ "state":"Florida" } } } ]',
     		token: 'PUP5S9L6RL5QSYZ67Q8ZJQXY5AHEXJ3V' },
  		json: true };

		request(options, function (error, response, body) {
  			if (error) throw new Error(error);
  				res.json(body);
		});
	},

  cities : function (req, res) {
    var data = {
  "results": {
    "category1": {
      "name": "Panama",
      "results": [
      {
          "title": "Panama City",
          "url": "/optional/url/on/click",
        },
        {
          "title": "Bocas del Toro",
          "url": "/optional/url/on/click",
        },
        {
          "title": "El valle de Anton",
          "url": "/optional/url/on/click",
        },
        {
          "title": "San Blas",
          "url": "/optional/url/on/click",
        },
        {
          "title": "Chiriqui",
          "url": "/optional/url/on/click",
        }
      ]
    },
    "category2": {
      "name": "Colombia",
      "results": [
        {
          "title": "Medellin",
          "url": "/optional/url/on/click",
        },
         {
          "title": "Bogotá",
          "url": "/optional/url/on/click",
        },
         {
          "title": "Cartagena",
          "url": "/optional/url/on/click",
        }
      ]
    },
    "category3": {
      "name": "Mexico",
      "results": [
        {
          "title": "Cancún",
          "url": "/optional/url/on/click",
        },
         {
          "title": "Ciudad de Mexico",
          "url": "/optional/url/on/click",
        },
         {
          "title": "Puero Vallarta",
          "url": "/optional/url/on/click",
        }
      ]
    }
  },
  // optional action below results
  "action": {
    "url": '/path/to/results',
    "text": "View all 202 results"
  }
}

  res.json(data);
  }
	
};

