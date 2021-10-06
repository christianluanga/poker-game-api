import _ from 'lodash';
import formatInput from './inputFormatter.js';
import { hands_map as HANDS_MAP } from './constants/maps.js';
import isFullHouseFiveOfKindOrFourOfAkind, { isStraightHand, isThreeOfAkind } from './utils/util.js';

export default (_hand) => {
  const {valid, hand : validatedHand = []} = formatInput(_hand)
  if(!valid) return {
      valid,
      message: `The supplied input is invalid. Make sure to send a valid input. Ex: JH,JS,3C,3S,2H.
      or an array like ["JC","10C","9C","8C","7C"]`
  }
  let output_by_card = _.groupBy(validatedHand, 'card');
  let output_by_shape = _.groupBy(validatedHand, 'shape');
  let dealt_hand;
  if (Object.keys(output_by_shape).length === 1) {
    dealt_hand = isStraightHand(Object.values(output_by_card))
      ? HANDS_MAP.STRAIGHT_FLUSH
      : HANDS_MAP.FLUSH;
  } else {
    switch (Object.keys(output_by_card).length) {
      case 5:
        dealt_hand = isStraightHand(Object.values(output_by_card))
          ? HANDS_MAP.STRAIGHT
          : HANDS_MAP.HIGH_CARD;
        break;
      case 4:
        dealt_hand = HANDS_MAP.ONE_PAIR;
        break;
      case 3:
        dealt_hand = isThreeOfAkind(output_by_card)
          ? HANDS_MAP.THREE_OF_A_KIND
          : HANDS_MAP.TWO_PAIR;
        break;
      case 2:
        const _hand = isFullHouseFiveOfKindOrFourOfAkind(output_by_card)
        dealt_hand = HANDS_MAP[_hand]
        break;
    }
  }
  
  //console.log(validatedHand, dealt_hand);
  return {
      valid,
      dealt_hand
  };
};
