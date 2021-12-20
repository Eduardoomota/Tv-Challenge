import ReactLoading from 'react-loading';
import * as S from './Loading.styles';

const Loading = (): JSX.Element => (
  <S.Box>
    <ReactLoading type="spin" color="#fff" height={40} width={40} />
  </S.Box>
);

export default Loading;
