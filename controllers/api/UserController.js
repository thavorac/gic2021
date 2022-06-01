const createError = require('http-errors')
const User = require("../../models/User");
const { storeUser } = require('../../models/User');
const authFunctions = require('../../helper/authFunctions');

module.exports = {
    all: async (req, res, next) => {
        try {
            const allUsers = await User.getUsers()
            if (allUsers) {
                return res.status(200).json({
                    status: 'success',
                    users: allUsers
                });
            }
        } catch (error) {
            next(createError(404, 'User Not Found', { status: "error" }))
        }
    },
    create: async (req, res, next) => {
        try {
            const {
                email,
                password
            } = req.body;
            const userExist = await User.findUserByEmail(email)
            if (!userExist) {
                if (password.length < 6) {
                  return res.status(400).json({
                    status: 'Failure',
                    msg: `Password is less then 6 characters`
                });
                }
                const newUser = await storeUser(req.body)
                if (newUser) {
                    return res.status(200).json({
                        status: 'success',
                        msg: `${req.body.name} is register successfully`
                    });
                }
            }else{
              return res.status(400).json({
                status: 'Failure',
                msg: `User is already exist`
            });
            }
        } catch (error) {
            console.log(error)
        }
    }
}