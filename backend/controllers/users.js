require('dotenv').config();
var projects = require('../json/projects.json')
var projects42 = require('../json/42-projects.json')
var SibApiV3Sdk = require('sib-api-v3-sdk');



exports.projects = async (req, res) => {
    switch (req.params.id) {
        case "1":
            return res.status(200).json(projects);
        case "2":
            return res.status(200).json(projects42);
        default:
            return res.status(400).send("Error: Invalid id")
    }
};

exports.contact = async (req, res) => {
    console.log(req.body)
    var defaultClient = SibApiV3Sdk.ApiClient.instance;
    var apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.BREVO_KEY;
    var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

    sendSmtpEmail = {
	    to: [{
		    email: 'tsorabel@gmail.com',
		    name: 'Portfolio contact'
	    }],
	    templateId: 2,
	    params: {
		    name: req.body.name, 
		    email: req.body.email,
            content: req.body.content
	    },
	    headers: {
		    'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
	    }
    };
    apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
        console.log('API called successfully. Returned data: ' + data);
    }, function(error) {
            console.error(error);
    });
    res.status(200).send()


}
