//@ts-check
import express from 'express'
import User from '../models/user'
import bcrypt from 'bcrypt'

const saltRounds = 10;

const router = express.Router()

// router.all('/users', authVerify)
// router.all('/users/:id', authVerify)

router.get('/users', async (req, res) => {
    try {
        const userDB = await User.find({})
        if(userDB){
            res.json(userDB)
        }else{
            res.status(404).json({message: 'No user found'})
        }
    } catch (error) {
        res.status(501).json({
                message: 'Error has occurred',
                error
            })
    }
})
router.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const userDB = await User.findOne({_id})
        if(userDB){
            res.json(userDB)
        }else{
            res.status(404).json({message: 'No user found'})
        }
    } catch (error) {
        res.status(501).json({
                message: 'Error has occurred',
                error
            })
    }
})
router.post('/users', async (req, res) => {
    const body = req.body;
    body.password = bcrypt.hashSync(req.body.password, saltRounds);

    try {
        const userDB = await User.create(body);
        res.json(userDB);
    } catch (error) {
        return res.status(405).json({
            message: 'Error has occurred',
            error
        });
    }
})
router.put('/users/:id', async (req, res) => {
    const _id = req.params.id
    const body = req.body
    try {
        const userDB = await User.findByIdAndUpdate(_id, body, {new: true})
        if(userDB){
            res.json(userDB)
        }else{
            return res.status(404).json({message: 'User not found'})
        }
        
    } catch (error) {
        res.status(501).json({
                message: 'Error has occurred',
                error
            })
    }
})
router.delete('/users/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const userDB = await User.findByIdAndDelete(_id)
        if(userDB){
            res.json(userDB)
        }else{
            return res.status(404).json({message: 'User not found'})
        }
    } catch (error) {
        res.status(501).json({
                message: 'Error has occurred',
                error
            })
    }
})
export default router