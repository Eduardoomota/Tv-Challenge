import { showInfo } from 'constants/endpoints';
import { showInfoType } from 'types/episodes';

const showInfoReducer = (
  state = {},
  action: { type: string; payload: showInfoType }
) => {
  const { payload, type } = action;
  switch (type) {
    case showInfo:
      return payload;
    default:
      return state;
  }
};

export default showInfoReducer;
