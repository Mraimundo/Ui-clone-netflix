import React, { useEffect, useState } from 'react';
import Tmdb from '../../Tmdb';

import * as S from './styles';

export const Home = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list)
    }
    loadAll();
  }, [])

  return (
    <S.Container>
      <h1>Netflix Clone...</h1>
    </S.Container>
  )
}