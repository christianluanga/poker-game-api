import _ from 'lodash'
import formatInput from './inputFormatter.js'
import { hands_map as HANDS_MAP} from './map.js'
import { is_straight , is_tree_of_a_kind} from './determineHand.js'
//const input = ["5C","5D","X","5S","5H"] // five of a kind
//const input = ["JC","10C","9C","8C","7C"] //straight flush
//const input = ["5C","5D","5H","5S","2D"] // four a kind
//const input = ["6S","6H","6D","KC","KH"] //full house
//const input = ["10D","9D","8D","4D","3D"] // flush
//const input = ["10D","9S","8H","7D","6S"] // straight
//const input = ["QC","QS","QH","9H","2S"] //three of a kind
//const input = ["JH","JS","3C","3S","2H"] // two pair
//const input = ["10S","10H","8S","7H","4C"] // one pair
//const input = ["KD","QD","7S","4S","3H"] // high hand 

export default (input)=>{

let output_by_card = _.groupBy(formatInput(input), 'card');
let output_by_shape =  _.groupBy(formatInput(input), 'shape')
let dealt_hand


if(Object.keys(output_by_shape).length === 1) {
    dealt_hand = is_straight(Object.values(output_by_card)) ?  
    HANDS_MAP.STRAIGHT_FLUSH : HANDS_MAP.FLUSH
}
else{
    switch (Object.keys(output_by_card).length) {
        case 5: 
        dealt_hand = is_straight(Object.values(output_by_card)) ? 
            HANDS_MAP.STRAIGHT : HANDS_MAP.HIGH_CARD
            break 
        case 4:
            dealt_hand = HANDS_MAP.ONE_PAIR;
            break;
        case 3:
            //2 possible hands (Three of a kind and 2 pairs)
            dealt_hand = is_tree_of_a_kind(output_by_card) ? HANDS_MAP.THREE_OF_A_KIND: HANDS_MAP.TWO_PAIR
            break;
        case 2:
            let __keys = Object.values(output_by_card)
            let kicker_card
            if(__keys[0].length === 3 || __keys[1] === 3){
                dealt_hand = HANDS_MAP.FULL_HOUSE
            }else{
                kicker_card = __keys[0].length === 1 ? __keys[0][0].card : __keys[1][0].card
                dealt_hand = kicker_card === 15 ? HANDS_MAP.FIVE_OF_A_KIND : HANDS_MAP.FOUR_OF_A_KIND 
            }
            break;
    }
}
console.log(input, dealt_hand)
return dealt_hand
}