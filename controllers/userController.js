const db = require('../models');
const bcrypt = require('bcrypt');
const validator = require('validator');

const User = db.users;

const adduser = async (req, res) => {
    try {
        // Validate email
        if (!validator.isEmail(req.body.email)) {
            return res.status(400).json({ error: 'Invalid email address' });
        }

        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

       

        let info = {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        }
    
        const product = await User.create(info)
        res.status(200).send(product)
        console.log(product)
    

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const login = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const passwordMatch = await bcrypt.compare(req.body.password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAlluser = async (req, res) => {
    try {
        let users = await User.findAll({});
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    adduser,
    getAlluser,
    login,
};
