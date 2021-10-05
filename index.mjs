import _ from 'lodash'
import formatInput from './inputFormatter.mjs'
import cards_map, { hands_map as HANDS_MAP} from './map.mjs'
import { is_straight_flush } from './determineHand.mjs'
let is_straight_hand = false
//const input = ["JC","10C","9C","8C","7C"]
const input = ["10D","9D","8D","4D","3D"]
let card_rules = 0;
let output_by_card = _.groupBy(formatInput(input), 'card');
let output_by_shape =  _.groupBy(formatInput(input), 'shape')
let dealt_hand

// console.log(Object.keys(output_by_card).length)
//console.log(Object.keys(output_by_card))
if(Object.keys(output_by_shape).length === 1) {
    is_straight_hand = true
    dealt_hand = is_straight_flush(Object.values(output_by_card)) ?  HANDS_MAP[8] : HANDS_MAP[5]
}
else{
    if(Object.keys(output_by_card).length === 4) card_rules = 1
    switch (Object.keys(output_by_card).length) {
        case 4:
            dealt_hand = HANDS_MAP[1];
            break;
        case 3:
            dealt_hand = HANDS_MAP[2]
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
}
console.log(input, dealt_hand)

