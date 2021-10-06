import cards_map from './constants/maps.js'
export default (input)=>{
    const {valid, hand = []} = validateInput(input)
    if(valid){
        return {
            valid,
            hand: hand.map((_card) =>{
                let _card_ = _card.trim()
                let card = cards_map[_card_.slice(0,-1)] || cards_map[_card_.slice(0,1)]
               return {shape : _card_.slice(-1).toUpperCase() , card}
            })
        }
    }
    return {
        valid
    }
}

const validateInput = (hand)=>{
    let _hand
    if(typeof hand === 'string'){
        _hand = hand.trim().split(',')
    }
    if(Array.isArray(hand)) _hand = hand

    if(_hand.length !== 5){
        return { valid: false }
    }
    return {
        valid: true,
        hand: _hand
    }
}