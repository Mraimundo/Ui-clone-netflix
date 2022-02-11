import { Link } from 'react-router-dom'

import * as S from './styles';

export const FeaturedMovie = ({ item }) => {

  let firsDate = new Date(item.first_air_date);

  let genres = [];

  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  console.log(item);

  return (
    <S.Container style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
    }}>
      <S.FeatureVertical>
        <S.FeatureHorizontal>
          <S.FeatureName>{item.original_name}</S.FeatureName>
          <S.FeatureInfo>
            <S.FeaturePoints>{item.vote_average} pontos</S.FeaturePoints>
            <S.FeatureYear>{firsDate.getFullYear()}</S.FeatureYear>
            <S.FeatureSeasons>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</S.FeatureSeasons>
          </S.FeatureInfo>
          <S.FeatureDescription>{item.overview}</S.FeatureDescription>
          <S.FeatureButtons>
            <a href={`/watch/${item.id}`}>Assitir</a>
            <a href={`/list/add/${item.id}`}>+ Minha Lista</a>

            {/* <Link to={`/watch/${item.id}`}>Assitir</Link>
            <Link to={`/list/add/${item.id}`}>+ Minha Lista</Link> */}
          </S.FeatureButtons>
          <S.FeatureGenres>
            <strong>Gêneros:</strong>
            {genres.join(', ')}
          </S.FeatureGenres>
        </S.FeatureHorizontal>
      </S.FeatureVertical>
    </S.Container>
  );
}