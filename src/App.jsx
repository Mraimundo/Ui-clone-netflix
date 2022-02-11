import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';

// import Home from './page/Home';

import { MovieRow } from './components/MovieRow';
import { FeaturedMovie } from './components/FeaturedMovie';

import { GlobalStyle } from './styles/global';

import * as S from './App.styles';

export const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista Total dos filmes

      let list = await Tmdb.getHomeList();
      setMovieList(list)

      // Pegando a capa aleatório.
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }
    loadAll();
  }, [])

  return (
    <>
      <S.Container>
        {featuredData &&
          <FeaturedMovie
            item={featuredData}
          />
        }
        <S.List>
          {movieList.map((item, key) => (
            <MovieRow
              key={key}
              title={item.title}
              items={item.items} />
          ))}
        </S.List>
      </S.Container>
      {/* <Home /> */}
      <GlobalStyle />
    </>
  );
}

