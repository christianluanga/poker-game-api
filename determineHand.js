import _ from 'lodash'

const is_straight = (hand)=>{
    _.sortBy(hand, 'card')
    let straight_flush = true
    for(let i = 0; i < hand.length-1; i++){
        let card = hand[i][0].card
        let next_card = hand[i+1][0].card
        if(card !== next_card-1){
            straight_flush = false
            break
        }
    }
    return straight_flush
}

const is_tree_of_a_kind = (hand)=>{
    return Object.values(hand)[2].length === 3 ? true : false
}
export {is_straight, is_tree_of_a_kind}