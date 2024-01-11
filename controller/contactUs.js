const ContactUsQuerry = require('../model/contactusquery')
const sequelize = require("../utils/database");

exports.addContactDetails = async (req, res, next) => {
    try {
        
        const { name, email, mobile, message } = req.body;

        const newQuery = await ContactUsQuerry.create({
            name: name,
            mobile: mobile,
            email: email,
            message: message,
        });

        res.status(200).json({
            success: true,
            data: newQuery
        });

    } catch (err) {
        console.log('Error in creating contact us', err);
        res.status(500).json({
            success: false,
            message: "Error in storing details of customer",
        });
        next(err);
    }
}
