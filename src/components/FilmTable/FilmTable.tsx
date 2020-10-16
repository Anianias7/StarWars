import React, { FC, useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import TableRow from '../TableRow/TableRow';
import { Table, HeaderRow, Wrapper, Spinner, TableHeader, TableBody, SpinnerWrapper } from './styles';
import FilmHeaderCell from '../FilmHeaderCell/FilmHeaderCell';
import {
  FilmDetails,
  FilmDetailsVariables,
  FilmDetails_film_planetConnection_planets,
} from '../../generated/FilmDetails';
import { CustomFilm } from '../../utils/types';

export const FILM_DETAILS_QUERY = gql`
  query FilmDetails($filmID: ID) {
    film(filmID: $filmID) {
      id
      title
      planetConnection {
        planets {
          id
          name
          rotationPeriod
          orbitalPeriod
          diameter
          climates
          surfaceWater
          population
        }
      }
    }
  }
`;

interface Props {
  filmId: number;
  customFilmsData?: CustomFilm['film'];
}

const FilmTable: FC<Props> = ({ filmId, customFilmsData }) => {
  const { loading, data } = useQuery<FilmDetails, FilmDetailsVariables>(FILM_DETAILS_QUERY, {
    variables: { filmID: filmId.toString() },
  });

  const [planets, setPlanets] = useState<(FilmDetails_film_planetConnection_planets | null)[]>([]);

  useEffect(() => {
    setPlanets(data?.film?.planetConnection?.planets || []);
  }, [data]);

  const handleSortByColumn = (columnName: keyof FilmDetails_film_planetConnection_planets) => (type: string) => {
    if (!planets) {
      return;
    }
    const sortedPlanets = planets.slice().sort((a, b) => {
      if (a !== null && b !== null) {
        var x = a[columnName] ?? '';
        var y = b[columnName] ?? '';
        if (type === 'ASC') {
          return x < y ? -1 : x > y ? 1 : 0;
        } else {
          return x > y ? -1 : x < y ? 1 : 0;
        }
      }
      return 0;
    });
    setPlanets(sortedPlanets);
  };

  const getPlanetsRows = () => {
    const planetsToRender = [...planets, ...(customFilmsData?.plannetConnection.planets || [])];
    return planetsToRender.map(planet => {
      if (planet) {
        return <TableRow key={planet.id} planetData={planet} />;
      }
      return null;
    });
  };

  const renderBody = () => {
    return (
      <TableBody>
        {!data && loading ? (
          <tr>
            <td colSpan={7}>
              <SpinnerWrapper>
                <Spinner src={require('../../assets/spinner.svg')} />
              </SpinnerWrapper>
            </td>
          </tr>
        ) : (
          getPlanetsRows()
        )}
      </TableBody>
    );
  };

  return (
    <Wrapper>
      <Table>
        <TableHeader>
          <HeaderRow>
            <FilmHeaderCell onSort={handleSortByColumn('name')} text="Planet Name" />
            <FilmHeaderCell onSort={handleSortByColumn('rotationPeriod')} text="Rotation Period" />
            <FilmHeaderCell onSort={handleSortByColumn('orbitalPeriod')} text="Orbital Period" />
            <FilmHeaderCell onSort={handleSortByColumn('diameter')} text="Diameter" />
            <FilmHeaderCell onSort={handleSortByColumn('surfaceWater')} text="Surface water" />
            <FilmHeaderCell onSort={handleSortByColumn('climates')} text="Climate" />
            <FilmHeaderCell onSort={handleSortByColumn('population')} text="Populatione" />
          </HeaderRow>
        </TableHeader>
        {renderBody()}
      </Table>
    </Wrapper>
  );
};

export default FilmTable;
