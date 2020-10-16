import React, { FC } from 'react';
import { DataCell, Row } from './styles';
import { FilmDetails_film_planetConnection_planets } from '../../generated/FilmDetails';
import { getPlanetDetailValue } from '../../utils/helpers';

interface Props {
  planetData:
    | FilmDetails_film_planetConnection_planets
    | {
        name: string;
        rotationPeriod: number;
        orbitalPeriod: number;
        diameter: number;
        climates: string;
        surfaceWater: number;
        population: number;
      };
}

const TableRow: FC<Props> = ({ planetData }) => {
  const { name, rotationPeriod, orbitalPeriod, diameter, climates, surfaceWater, population } = planetData;
  return (
    <Row>
      <DataCell>{getPlanetDetailValue(name)}</DataCell>
      <DataCell>{getPlanetDetailValue(rotationPeriod)}</DataCell>
      <DataCell>{getPlanetDetailValue(orbitalPeriod)}</DataCell>
      <DataCell>{getPlanetDetailValue(diameter)}</DataCell>
      <DataCell>{getPlanetDetailValue(climates ? climates[0] : null)}</DataCell>
      <DataCell>{getPlanetDetailValue(surfaceWater)}</DataCell>
      <DataCell>{getPlanetDetailValue(population)}</DataCell>
    </Row>
  );
};

export default TableRow;
