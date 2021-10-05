import _ from 'lodash'

const is_straight_flush = (hand)=>{
    _.sortBy(hand, 'card')
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
const is_tree_of_a_kind = (hand)=>{
    return Object.values(hand)[2].length === 3 ? true : false
}
export {is_straight_flush, is_tree_of_a_kind}