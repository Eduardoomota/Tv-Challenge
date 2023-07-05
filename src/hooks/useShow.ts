import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getShowInfoThunk } from 'store/thunk/showInfoThunk';
import { RootState } from 'store';
import { useShowType } from 'types/episodes';

export const useShow = (): useShowType => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { showInfo } = useSelector((state: RootState) => state);

  useEffect(() => {
    !Object.keys(showInfo).length
      ? dispatch(getShowInfoThunk())
      : setLoading(false);
  }, [showInfo]);

  return { showInfo, loading };
};
