import { api } from 'services/api';
import { getShowInfoAction } from 'store/actions/showInfoAction';
import { powerpuffGirlsURL } from 'constants/endpoints';
import { showInfoType } from 'types/episodes';

export const getShowInfoThunk = () => async (
  dispatch: (args: { type: string; payload: showInfoType }) => void
) => {
  const { data } = await api({
    method: 'GET',
    url: powerpuffGirlsURL,
  });
  dispatch(getShowInfoAction(data));
};
