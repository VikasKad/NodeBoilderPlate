'use strict';
const bcrypt = require('bcrypt');
const Users = require('../../models/users');



exports.get = (async (req, res) => {
    try {
        const customers = await Users.find({})
        res.send(customers);
    } catch (err) {
        res.status(500).send('Something went wrong!!');
    }

})
exports.post = (async (req, res) => {
    console.log('here');

    const {
        email,
        password
    } = req.body;
    const user = new Users({
        email,
        password
    });
    try {
        bcrypt.hash(user.password, 10, async (err, hash) => {
            //Hash Password
            user.password = hash;
            await user.save();
            res.status(200).send('succeess');

        })
    } catch (err) {
        res.status(500).send('Something went wrong!!');
    }
})
exports.getSingle = (async (req, res) => {
    try {
        const user = await Users.findById(req.params.id)
        res.send(user);
    } catch (err) {
        res.status(500).send('Something went wrong!!');
    }
})
exports.put = (async (req, res) => {
    try {
        await Customer.findOneAndUpdate({
            _id: req.params.id
        }, req.body);
        res.status(200).send({
            success: true,
            message: 'updated successfully'
        });

    } catch (err) {
        res.status(500).send('Something went wrong!!');
    }
})
exports.delete = (async (req, res) => {
    try {
        await Customer.findOneAndRemove({
            _id: req.params.id
        });
        res.status(200).send({
            success: true,
            message: 'removed successfully'
        });
    } catch (err) {
        res.status(500).send('Something went wrong!!');
    }
})