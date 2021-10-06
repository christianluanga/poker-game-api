import determine_hand from './determineHand.js'
import { hands_hierarchy } from './constants/maps.js'

/**@function classify_hand
 * @description A basic hand classifier. Note that suits and card number are not 
 * taken into account while doing the classification hence hand of the same rank are 
 * considered equal even if they differ by cards and suits rank
 */
export const classify_hand = (hand1, hand2)=>{
    const {valid : hand1_valid, dealt_hand: dealt_hand1} = determine_hand(hand1)
    const {valid : hand2_valid, dealt_hand: dealt_hand2} = determine_hand(hand2)
    let _hand1_ = dealt_hand1.toUpperCase().replace(/ /g,'_')
    let _hand2_ = dealt_hand2.toUpperCase().replace(/ /g,'_')
    if(hand1_valid && hand2_valid){
        if(hands_hierarchy[_hand1_] 
        > hands_hierarchy[_hand2_]){
            return{
                winningHand : `Hand 1 "${dealt_hand1}" wins over hand 2 "${dealt_hand2}"`,
            }
        }else if(hands_hierarchy[_hand1_] 
        < hands_hierarchy[_hand2_]){
            return{
                winningHand: `Hand 2 "${dealt_hand2}" wins over hand 1 "${dealt_hand1}"`,
            }
        }else{
            return{
                winningHand: `Hand 1 "${dealt_hand1}" and hand 2 "${dealt_hand2}" are of equal ranks`,
            }
        }
    }
}