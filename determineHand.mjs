import _ from 'lodash'
import cards_map from './map.mjs'
const is_straight_flush = (hand)=>{
    _.sortBy(hand, 'card')
    let straight_flush = true
    for(let i = 0; i < hand.length-1; i++){
        let card = hand[i][0].card
        let next_card = hand[i+1][0].card
        console.log(card , next_card-1, i)
        if(card !== next_card-1){
            return false
        }
    }
    return true
}
export {is_straight_flush}