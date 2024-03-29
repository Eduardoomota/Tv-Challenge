import Loading from 'components/Loading';
import EpisodesList from 'components/EpisodesList';
import { useShow } from 'hooks/useShow';
import { Container } from 'components/Container/Container.styles';

import * as S from './Home.styles';

const Home = (): JSX.Element => {
  const { showInfo, loading } = useShow();

  if (loading) return <Loading />;

  return (
    <Container>
      <S.Row>
        <S.ShowImageBox>
          <S.ShowImage src={showInfo?.image?.medium} alt={showInfo?.name} />
        </S.ShowImageBox>

        <S.Details>
          <S.DetailsTitle>{showInfo?.name}</S.DetailsTitle>
          <div
            data-testid="summary"
            dangerouslySetInnerHTML={{ __html: showInfo?.summary as string }}
          />
        </S.Details>
      </S.Row>
      <EpisodesList episodes={showInfo?._embedded?.episodes as []} />
    </Container>
  );
};

export default Home;
