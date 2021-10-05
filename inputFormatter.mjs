import cards_map from './map.mjs'
export default (input)=>{
    return input.map((_card) =>{
       return {shape : _card.slice(-1) , card: cards_map[_card.slice(0,-1)]}
    })
}

