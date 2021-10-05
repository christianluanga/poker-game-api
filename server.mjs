import express, {urlencoded, json} from 'express'
import morgan from 'morgan'

import controller from './handler.mjs'
const app = express()

app.use(urlencoded({extended: true}))
app.use(json())
app.use(morgan('dev'))

app.post('/determine/hand', (req, res)=>{
    res.json({hand: controller(req.body.hand)})
})

const PORT = process.env.PORT || 8000
app.listen(PORT, ()=> console.log(`app listening on port ${PORT}`))