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
    '0': 'High card',
    '1': 'One pair',
    '2': 'Two pair',
    '3': 'Three of a kind',
    '4': 'Straight',
    '5': 'Flush',
    '6': 'Full house',
    '7': 'Four of a kind',
    '8': 'Straight flush',
    '9': 'Five of a kind'
}
export default cards_map
export {hands_map}