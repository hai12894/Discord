var express = require('express');
var request = require('request');
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.urlencoded({extended: true}));

var webhook = process.env.DISCORD_WEBHOOK;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index1.html');
});

app.post('/webhook', (req, res) => {
	request({
		method: 'POST',
		url: webhook + '/slack' ,
		json:
		{
			"username": "Hazama",
			"text": "I am Hazama, this is an example webhook message.",
			"icon_url": "http://vignette1.wikia.nocookie.net/villains/images/e/e0/Bbcp_hazama_chibi.png/revision/latest?cb=20140813154950",
			"attachments": [
        {
            "color": "#36a64f",
            "pretext": req.body.pretext,
            "author_name": "Bobby Tables",
            "author_link": "http://flickr.com/bobby/",
            "author_icon": "https://i0.wp.com/slack-assets2.s3-us-west-2.amazonaws.com/8390/img/avatars/ava_0002-48.png?ssl=1",
            "title": "Slack API Documentation",
            "title_link": "https://api.slack.com/",
            "text": "Optional text that appears within the attachment",
            "fields": [
                {
                    "title": "Priority",
                    "value": "High",
                    "short": false
                }
            ],
            "image_url": "http://my-website.com/path/to/image.jpg",
            "thumb_url": "http://example.com/path/to/thumb.png",
            "footer": "Slack API",
            "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
            "ts": 123456789
        }
    ]
		}
	});

	res.redirect('/');
});

app.listen(80, () => {
	console.log("server started! 1");
});