import _ from 'lodash';
import formatInput from './inputFormatter.js';
import { hands_map as HANDS_MAP } from './constants/maps.js';
import isFullHouseFiveOfKindOrFourOfAkind, { isStraightHand, isThreeOfAkind } from './utils/util.js';

export default (input) => {
  let output_by_card = _.groupBy(formatInput(input), 'card');
  let output_by_shape = _.groupBy(formatInput(input), 'shape');
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
  
  console.log(input, dealt_hand);
  return dealt_hand;
};
