import _ from 'lodash'
import { hands_map as HANDS_MAP} from '../constants/maps.js'

/** @function isStraightHand
 * @param Array hand
 * @description Gets a hand and determine whether or not it is sequential
 * @returns Boolean 
*/
const isStraightHand = (hand)=>{
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

/** @function isStraightHand
 * @param Array hand
 * @description Gets a hand and determine whether or not it is a three of a kind.
 * @returns Boolean true = three of a kind; false = two pair
*/
const isThreeOfAkind = (hand)=>{
    return Object.values(hand)[2].length === 3 ? true : false
}

/** @function isFullHouseFiveOfKindOrFourOfAkind
 * @param Array hand
 * @description A hand to 2 card rank can be either a full house a 
 * two pair a five of a kind of a four of a kind
 * @returns String hand name
 */
const isFullHouseFiveOfKindOrFourOfAkind = (hand)=>{
    let keys = Object.values(hand);
        let kicker_card;
        let dealt_hand
        if (keys[0].length === 3 || keys[1] === 3) {
          return 'FULL_HOUSE';
        } else {
          kicker_card =
            keys[0].length === 1 ? keys[0][0].card : keys[1][0].card;
            return kicker_card === 15
              ? 'FIVE_OF_A_KIND'
              : 'FOUR_OF_A_KIND';
        }
}

export default isFullHouseFiveOfKindOrFourOfAkind
export {isStraightHand, isThreeOfAkind}