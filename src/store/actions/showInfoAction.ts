import { showInfo } from 'constants/endpoints';
import { showInfoType } from 'types/episodes';

export const getShowInfoAction = (payload: showInfoType) => ({
  type: showInfo,
  payload,
});
