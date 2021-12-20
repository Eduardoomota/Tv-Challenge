import { Link } from 'react-router-dom';
import { episodesType } from 'types/episodes';
import * as S from './EpisodesList.styles';

const EpisodesList = ({
  episodes,
}: {
  episodes: episodesType[];
}): JSX.Element => (
  <S.Table>
    <thead>
      <S.TableRow>
        <S.TableTitle>Episode Name</S.TableTitle>
        <S.TableTitle>Airdate</S.TableTitle>
      </S.TableRow>
    </thead>
    <tbody>
      {episodes.map(({ id, name, airdate }) => (
        <S.TableRow key={id}>
          <S.Episode>
            <Link to={`details/${id}`}>{name}</Link>
          </S.Episode>
          <S.Episode>{airdate}</S.Episode>
        </S.TableRow>
      ))}
    </tbody>
  </S.Table>
);

export default EpisodesList;
