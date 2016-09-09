import { PropTypes } from 'react';

import {
  DIRECTION_ANCHOR_LEFT,
  DIRECTION_ANCHOR_RIGHT,
} from '../constants';

export default PropTypes.oneOf([DIRECTION_ANCHOR_LEFT, DIRECTION_ANCHOR_RIGHT]);
