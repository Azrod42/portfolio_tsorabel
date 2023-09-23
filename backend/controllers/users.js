require('dotenv').config();

exports.me = async (req, res) => {
    res.status(200).json({name: "Jean de la fontaine"});
};

