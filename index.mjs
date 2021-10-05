import _ from 'lodash'
import formatInput from './inputFormatter.mjs'

let is_straight_hand = false
const input = ["AS","10C","10H","3D","3S"]

let card_rules = 0;
let output_by_card = _.groupBy(formatInput(input), 'card');
let output_by_shape =  _.groupBy(formatInput(input), 'shape')
let hand = output_by_shape

// console.log(Object.keys(output_by_card).length)
//console.log(Object.keys(output_by_card))
if(Object.keys(output_by_shape).length === 1) {
    is_straight_hand = true
    hand = HANDS_MAP[3];
}
if(Object.keys(output_by_card).length === 4) card_rules = 1
switch (Object.keys(output_by_card).length) {
    case 4:
        hand = HANDS_MAP[1];
        break;
    case 3:
        hand = HANDS_MAP[2]
        break;
    case 2:
        //
        let __keys = Object.values(output_by_shape)
        let fifth_card 
        if(__keys[0].length === 1 || __keys[0].length === 4){
            fifth_card = __keys[0].length < __keys[1].length ?__keys[0][0] :__keys[1][0]
            console.log(fifth_card.card)
            //console.log(__keys)
        }
        break;

    default:
        card_rules = 0;
        break;
}
console.log(hand)

