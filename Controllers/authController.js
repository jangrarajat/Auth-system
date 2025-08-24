const User = require("../Models/user");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email })

        if (user) {
            return res.status(409).json({
                success: false,
                message: "user is already exist "
            })
        }

        const newUser = new User({ name, email, password });
        newUser.password = await bcrypt.hash(password, 10)
        await newUser.save();
        res.status(201).json({
            success: true,
            message: "signup successfuly ",
            newUser
        })

    } catch (error) {
        console.log("signup error", error)
        res.status(500).json({
            success: false,
            message: "signup faild"
        })
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(409).json({
                success: false,
                message: "account not exist "
            })
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({
                success: false,
                message: "wrong password"
            })
        }

        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }

        )


        res.status(201).json({
            success: true,
            message: "login successfuly ",
            jwtToken,
            email,
            name: user.name
        })

    } catch (error) {
        console.log("login error", error)
        res.status(500).json({
            success: false,
            message: "login faild"
        })
    }
}



module.exports = {
    signup,
    login
}