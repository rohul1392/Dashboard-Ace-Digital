import express from 'express';

import Users from '../models/userModel.js';

const router = express.Router();

export const login = async (req, res) => { 
    const {email, password} = req.body;
    try {
        const user = await Users.findOne({email: email});
        if (user) {
            if(password === user.password){
                const currentUser = {
                    name: user.name,
                    email: user.email
                }
                res.send(currentUser);
            }else{
                res.status(205).send({message:"wrong credentials"})
            }
        }
        else {
            return res.status(401).send({message: 'Username/password is worng. Please check your credentials.'});
        }
    } catch (error) {
        return res.status(401).send({message:'Username/password is worng. Please check your credentials.'})
    }
}

export default router;