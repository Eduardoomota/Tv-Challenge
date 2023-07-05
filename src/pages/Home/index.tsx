import Loading from 'components/Loading';
import EpisodesList from 'components/EpisodesList';

import { HomeType } from 'types/episodes';

import { Container } from 'components/Container/Container.styles';

import * as S from './Home.styles';

const Home = ({ loading, showInfo }: HomeType): JSX.Element => {
  if (loading) return <Loading />;

  return (
    <Container>
      <S.Row>
        <S.ShowImageBox>
          <S.ShowImage src={showInfo?.image?.medium} alt="PowerPuff Girls" />
        </S.ShowImageBox>

        <S.Details>
          <S.DetailsTitle>{showInfo?.name}</S.DetailsTitle>
          <div
            dangerouslySetInnerHTML={{ __html: showInfo?.summary as string }}
          />
        </S.Details>
      </S.Row>
      <EpisodesList episodes={showInfo?._embedded?.episodes as []} />
    </Container>
  );
};

export default Home;
