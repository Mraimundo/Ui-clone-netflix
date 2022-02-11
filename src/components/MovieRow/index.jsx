

import * as S from './styles';

export const MovieRow = ({ title, items }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.ListArea>
        <S.List>
          {items.results.length > 0 && items.results.map((item, key) => (
            <S.Item key={key}>
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
            </S.Item>
          ))}
        </S.List>
      </S.ListArea>
    </S.Container>
  );
}