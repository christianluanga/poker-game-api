/**Maps each card to an integer for ease of processing.
 * The letter X presents a joker that is used to complete five of a kind hand
 */
const cards_map = {
    '2' : 2,
    '3' : 3,
    '4' : 4,
    '5' : 5,
    '6' : 6,
    '7' : 7,
    '8' : 8,
    '9' : 9,
    '10': 10,
    'J' : 11,
    'Q' : 12,
    'K' : 13,
    'A' : 14,
    'X' : 15
}

/** @description Maps the a hand constant to the hand description name */
const hands_map = {
    HIGH_CARD: 'High card',
    ONE_PAIR: 'One pair',
    TWO_PAIR: 'Two pair',
    THREE_OF_A_KIND: 'Three of a kind',
    STRAIGHT: 'Straight',
    FLUSH: 'Flush',
    FULL_HOUSE: 'Full house',
    FOUR_OF_A_KIND: 'Four of a kind',
    STRAIGHT_FLUSH: 'Straight flush',
    FIVE_OF_A_KIND: 'Five of a kind'
}

const hands_hierarchy = {
    HIGH_CARD: 0,
    ONE_PAIR: 1,
    TWO_PAIR: 2,
    THREE_OF_A_KIND: 3,
    STRAIGHT: 4,
    FLUSH: 5,
    FULL_HOUSE: 6,
    FOUR_OF_A_KIND: 7,
    STRAIGHT_FLUSH: 8,
    FIVE_OF_A_KIND: 9
}
export default cards_map
export {hands_map, hands_hierarchy}