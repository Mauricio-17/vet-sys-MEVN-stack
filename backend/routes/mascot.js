//@ts-check
import express from 'express'
import Mascot from '../models/mascot'

const router = express.Router()

// router.all('/mascots', authVerify)
// router.all('/mascots/:id', authVerify)

router.get('/mascots', async (req, res) => {
    try {
        const mascotDB = await Mascot.find({})
        if(mascotDB){
            res.json(mascotDB)
        }else{
            res.status(404).json({message: 'No mascots found'})
        }
    } catch (error) {
        res.status(501).json({
                message: 'Error has occurred',
                error
            })
    }
})
router.get('/mascots/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const mascotDB = await Mascot.findOne({_id})
        if(mascotDB){
            res.json(mascotDB)
        }else{
            res.status(404).json({message: 'No mascots found'})
        }
    } catch (error) {
        res.status(501).json({
                message: 'Error has occurred',
                error
            })
    }
})
router.post('/mascots', async (req, res) => {
    const body = req.body
    try {
        const mascotDB = await Mascot.create(body)
        res.json(mascotDB)
    } catch (error) {
        res.status(501).json({
                message: 'Error has occurred',
                error
            })
    }
})
router.put('/mascots/:id', async (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const mascotDB = await Mascot.findByIdAndUpdate(_id, body, {new: true})
        if(mascotDB){
            res.json(mascotDB)
        }else{
            res.status(404).json({message: 'No mascot found'})
        }
    } catch (error) {
        res.status(501).json({
                message: 'Error has occurred',
                error
            })
    }
})
router.delete('/mascots/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const mascotDB = await Mascot.findByIdAndDelete(_id)
        if(mascotDB){
            res.json(mascotDB)
        }else{
            res.status(404).json({message: 'No mascot found'})
        }
    } catch (error) {
        res.status(501).json({
                message: 'Error has occurred',
                error
            })
    }
})
export default router