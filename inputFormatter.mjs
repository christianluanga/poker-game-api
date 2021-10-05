export default (input)=>{
    return input.map((_card) =>{
       return {shape : _card.slice(-1) , card: _card.slice(0,-1)}
    })
}

