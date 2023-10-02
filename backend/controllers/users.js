require('dotenv').config();
var projects = require('../json/projects.json')
var projects42 = require('../json/42-projects.json')

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

