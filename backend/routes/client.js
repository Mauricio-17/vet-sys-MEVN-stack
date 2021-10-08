//@ts-check
import express from 'express'
import Client from '../models/client'
import {authVerify} from '../middlewares/authentication'

const router = express.Router()

// middlewares
// router.all('/clients', authVerify)
// router.all('/clients/:id', authVerify)

router.get('/clients', async (req, res)=>{
    try {
        const personDB = await Client.find({})
        if(personDB){
            res.json(personDB)
        }else{
            res.status(404).json({message: 'No person found'})
        }
    } catch (error) {
        res.status(401).json({
                message: 'Error has occurred',
                error
            })
    }
})
router.get('/clients/:id', async (req, res)=>{
    const _id = req.params.id;
    try {
        const personDB = await Client.findOne({_id})
        if(personDB){
            res.json(personDB)
        }else{
            res.status(404).json({message: 'No expecific person found'})
        }
    } catch (error) {
        res.status(401).json({
                message: 'Error has occurred',
                error
            })
    }
})
router.post('/clients', async (req, res)=>{
    const body = req.body
    try {
        const personDB = await Client.create(body)
        res.json(personDB)
    } catch (error) {
        res.status(401).json({
                message: 'Error has occurred',
                error
            })
    }
})

router.put('/clients/:id', async (req, res) => {
    const _id = req.params.id
    const body = req.body
    try {
        const personDB = await Client.findByIdAndUpdate(_id, body, {new: true})
        if(personDB){
            res.json(personDB)
        }else{
            res.status(404).json({message: 'No expecific person found'})
        }
    } catch (error) {
        res.status(401).json({
            message: 'Error has occurred',
            error
        })
    }
});
router.delete('/clients/:id', async (req, res) => {
    const _id = req.params.id
    const body = req.body
    try {
        const personDB = await Client.findByIdAndDelete(_id)
        if(personDB){
            res.json(personDB)
        }else{
            res.status(404).json({message: 'No expecific person found'})
        }
    } catch (error) {
        res.status(401).json({
            message: 'Error has occurred',
            error
        })
    }
});

export default router