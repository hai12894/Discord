var express = require('express');
var request = require('request');
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.urlencoded({extended: true}));

var webhook = process.env.DISCORD_WEBHOOK;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/msglink.html');
});

app.post('/webhook', (req, res) => {
	request({
		method: 'POST',
		url: webhook + '/slack' ,
		json:
		{
			"username": "Hazama",
			"icon_url": "http://vignette1.wikia.nocookie.net/villains/images/e/e0/Bbcp_hazama_chibi.png/revision/latest?cb=20140813154950",
			"attachments": 
            [
            {
            "color": "#36a64f",
            "title": req.body.title,
            "title_link": req.body.title_link,
            }
            ]
		}
	});

	res.redirect('/');
});

app.listen(80, () => {
	console.log("server started! msg with link");
});