import { Container } from 'components/Container/Container.styles';
import TvImage from 'assets/img/tv.png';
import * as S from './Header.styles';

const Header = (): JSX.Element => (
  <S.Header>
    <Container>
      <S.HeaderBrand src={TvImage} alt="Front-end Challenge" />
    </Container>
  </S.Header>
);

export default Header;
