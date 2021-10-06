import express, {urlencoded, json} from 'express'
import morgan from 'morgan'

import controller from './handler.js'
const app = express()

app.use(urlencoded({extended: true}))
app.use(json())
app.use(morgan('dev'))

app.post('/determine/hand', (req, res)=>{
    res.json({hand: controller(req.body.hand)})
})

app.post('/classify/hand', (req, res)=>{
    res.json({hand: controller(req.body.hand)})
})
controller(["JC","10C","9C","8C","7C"])
const PORT = process.env.PORT || 8000
app.listen(PORT, ()=> console.log(`app listening on port ${PORT}`))