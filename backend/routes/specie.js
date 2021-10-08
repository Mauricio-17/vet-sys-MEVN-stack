//@ts-check
import express from 'express'
import Specie from '../models/specie'
import {authVerify} from '../middlewares/authentication'

const router = express.Router()

// As a middleware
// router.all('/species', authVerify)
// router.all('/species/:id', authVerify)

router.get('/species', async (req, res) => {
    try {
        const specieDB = await Specie.find({})
        if(specieDB){
            res.json(specieDB)
        }else{
            res.status(404).json({message: 'No species found'})
        }
    } catch (error) {
        res.status(501).json({
                message: 'Error has occurred',
                error
            })
    }
})
router.get('/species/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const specieDB = await Specie.findOne({_id})
        if(specieDB){
            res.json(specieDB)
        }else{
            res.status(404).json({message: 'No specie found'})
        }
    } catch (error) {
        res.status(501).json({
                message: 'Error has occurred',
                error
            })
    }
})
router.post('/species', async (req, res) => {
    const body = req.body
    try {
        const specieDB = await Specie.create(body)
        res.json(specieDB)
    } catch (error) {
        res.status(501).json({
                message: 'Error has occurred',
                error
            })
    }
})
router.put('/species/:id', async (req, res) => {
    const _id = req.params.id
    const body = req.body
    try {
        const specieDB = await Specie.findByIdAndUpdate(_id, body, {new: true})
        if(specieDB){
            res.json(specieDB)
        }else{
            res.status(404).json({message: 'No specie found'})
        }
    } catch (error) {
        res.status(501).json({
                message: 'Error has occurred',
                error
            })
    }
})
router.delete('/species/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const specieDB = await Specie.findByIdAndDelete(_id)
        if(specieDB){
            res.json(specieDB)
        }else{
            res.status(404).json({message: 'No specie found'})
        }
    } catch (error) {
        res.status(501).json({
                message: 'Error has occurred',
                error
            })
    }
})

export default router