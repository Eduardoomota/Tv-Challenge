import { Link, useParams } from 'react-router-dom';
import Loading from 'components/Loading';
import { useShow } from 'hooks/useShow';
import { Container } from 'components/Container/Container.styles';
import * as S from './Details.styles';

const Details = (): JSX.Element => {
  const { showInfo, loading } = useShow();
  const { id: paramsID } = useParams();

  const episodeDetails = showInfo?._embedded?.episodes?.find(
    (episode) => episode.id === Number(paramsID)
  );

  if (loading) return <Loading />;

  return (
    <Container>
      <S.Details>
        <S.DetailsImageBox>
          <S.ShowImage
            src={episodeDetails?.image?.original}
            alt="PowerPuff Girls"
          />
        </S.DetailsImageBox>

        <S.DetailsTitle>{episodeDetails?.name}</S.DetailsTitle>
        <div
          dangerouslySetInnerHTML={{
            __html: episodeDetails?.summary as string,
          }}
        />
        <Link to="/">Back to Home</Link>
      </S.Details>
    </Container>
  );
};

export default Details;
