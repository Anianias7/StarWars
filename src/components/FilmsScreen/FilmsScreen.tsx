import React from 'react';

import { useQuery, gql } from '@apollo/client';
import { Wrapper, ImageWrapper, Image, DashedLine, Spinner, ContentWrapper, FilmsListWrapper, Footer } from './styles';
import ExpandableElement from '../ExpandableElement/ExpandableElement';
import FilmTable from '../FilmTable/FilmTable';
import AddFilmForm from '../AddFilmForm/AddFilmForm';
import { Films } from '../../generated/Films';
import { CustomFilm } from '../../utils/types';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';

const FILMS_QUERY = gql`
  query Films {
    allFilms {
      films {
        episodeID
        title
      }
    }
  }
`;

const FilmsScreen = () => {
  const { loading, data } = useQuery<Films>(FILMS_QUERY);
  const [customMovies, setCustomMovies] = useLocalStorageState<CustomFilm[]>('customMovies', []);

  const handleSetCustomMovie = (addedMovie: CustomFilm) => {
    setCustomMovies([...customMovies, addedMovie]);
  };

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={require('../../assets/logo.svg')} />
      </ImageWrapper>
      <ContentWrapper>
        <FilmsListWrapper>
          {loading ? (
            <Spinner src={require('../../assets/spinner.svg')} />
          ) : (
            <>
              {data?.allFilms?.films?.map(f => (
                <ExpandableElement key={f?.episodeID} text={f?.title || ''}>
                  <FilmTable filmId={f?.episodeID || 1} />
                </ExpandableElement>
              ))}
              {customMovies.map(f => (
                <ExpandableElement key={f.film.id} text={f.film.title || ''}>
                  <FilmTable filmId={f.film.id} customFilmsData={f.film} />
                </ExpandableElement>
              ))}
            </>
          )}
        </FilmsListWrapper>
        <div>
          <DashedLine />
          <ExpandableElement text="Add movie">
            <AddFilmForm setCustomMovie={handleSetCustomMovie} />
          </ExpandableElement>
        </div>
      </ContentWrapper>
      <Footer>COPYRIGHT © 2019 MIRUMEE SOFTWARE</Footer>
    </Wrapper>
  );
};

export default FilmsScreen;
