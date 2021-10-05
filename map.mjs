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
    'X' : 15 //the joker which represents a wild card in five of a kind
}

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
export default cards_map
export {hands_map}