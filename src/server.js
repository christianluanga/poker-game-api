import express, {urlencoded, json} from 'express'
import morgan from 'morgan'

import determine_hand from './determineHand.js'
import { classify_hand } from './classifyHands.js'
import { hands } from './mock_data/hands.js'
const app = express()

app.use(urlencoded({extended: true}))
app.use(json())
app.use(morgan('dev'))

app.post('/determine/hand', (req, res)=>{
    res.json(determine_hand(req.body.hand))
})
const {winningHand, rank} = classify_hand(hands.FIVE_OF_A_KIND, hands.FIVE_OF_A_KIND)
console.log(winningHand)
app.post('/classify/hand', (req, res)=>{
    const {hand1, hand2} = req.body
    res.json(classify_hand(hand1, hand2))
})

const PORT = process.env.PORT || 8000
app.listen(PORT, ()=> console.log(`app listening on port ${PORT}`))